import { 
  collection, 
  doc, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  query, 
  where, 
  onSnapshot, 
  getDocs 
} from 'firebase/firestore';
import { db } from './firebase';
import { 
  Parcel, 
  ParcelStatus, 
  WarehouseDestination, 
  UserProfile,
  Shipment,
  OutboundStatus,
  PaymentStatus 
} from '../types';

// =========================================================================
// PARCELS (INBOUND)
// =========================================================================

// Add new parcel(s) by client. Supports single or comma-separated tracking numbers
export async function createParcel(params: {
  userId: string;
  clientCode: string;
  inboundTracking: string;
  productTitle: string;
  warehouseDestination: WarehouseDestination;
  notes?: string;
}): Promise<string[]> {
  const parcelsRef = collection(db, 'parcels');
  const now = new Date().toISOString();

  // Split comma-separated tracking numbers if multiple provided
  const trackingList = params.inboundTracking
    .split(/[,;\n]+/)
    .map(t => t.trim())
    .filter(t => t.length > 0);

  const finalTrackings = trackingList.length > 0 ? trackingList : [params.inboundTracking.trim()];
  const createdIds: string[] = [];

  for (const tracking of finalTrackings) {
    const docRef = await addDoc(parcelsRef, {
      userId: params.userId,
      clientCode: params.clientCode,
      inboundTracking: tracking,
      productTitle: params.productTitle.trim(),
      warehouseDestination: params.warehouseDestination,
      status: 'expected' as ParcelStatus,
      outboundTracking: '',
      shippingCost: '',
      notes: params.notes ? params.notes.trim() : '',
      createdAt: now,
      updatedAt: now
    });
    createdIds.push(docRef.id);
  }

  return createdIds;
}

// Client can edit their own incoming parcel before it arrives or if typo
export async function updateCustomerParcel(
  parcelId: string,
  updates: { inboundTracking?: string; productTitle?: string; warehouseDestination?: WarehouseDestination }
): Promise<void> {
  const docRef = doc(db, 'parcels', parcelId);
  await updateDoc(docRef, {
    ...updates,
    updatedAt: new Date().toISOString()
  });
}

// Client can delete their own expected parcel if entered by mistake
export async function deleteCustomerParcel(parcelId: string): Promise<void> {
  const docRef = doc(db, 'parcels', parcelId);
  await deleteDoc(docRef);
}

// Real-time listener for current user's parcels
export function subscribeToCustomerParcels(
  userId: string,
  onData: (parcels: Parcel[]) => void,
  onError?: (err: Error) => void
): () => void {
  const parcelsRef = collection(db, 'parcels');
  const q = query(parcelsRef, where('userId', '==', userId));

  return onSnapshot(q, (snapshot) => {
    const list: Parcel[] = [];
    snapshot.forEach((docSnap) => {
      const data = docSnap.data();
      list.push({
        id: docSnap.id,
        userId: data.userId,
        clientCode: data.clientCode || '',
        inboundTracking: data.inboundTracking || '',
        productTitle: data.productTitle || '',
        warehouseDestination: data.warehouseDestination || 'eu_sea_uae_israel',
        status: data.status || 'expected',
        outboundTracking: data.outboundTracking || '',
        shippingCost: data.shippingCost || '',
        notes: data.notes || '',
        weight: data.weight,
        shipmentId: data.shipmentId,
        shipmentNumber: data.shipmentNumber,
        createdAt: data.createdAt || '',
        updatedAt: data.updatedAt || ''
      });
    });

    // Client-side sort by date descending
    list.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    onData(list);
  }, (err) => {
    console.error('Customer parcels subscription error:', err);
    if (onError) onError(err);
  });
}

// Real-time listener for ALL parcels (Admin view)
export function subscribeToAllParcels(
  onData: (parcels: Parcel[]) => void,
  onError?: (err: Error) => void
): () => void {
  const parcelsRef = collection(db, 'parcels');

  return onSnapshot(parcelsRef, (snapshot) => {
    const list: Parcel[] = [];
    snapshot.forEach((docSnap) => {
      const data = docSnap.data();
      list.push({
        id: docSnap.id,
        userId: data.userId,
        clientCode: data.clientCode || '',
        inboundTracking: data.inboundTracking || '',
        productTitle: data.productTitle || '',
        warehouseDestination: data.warehouseDestination || 'eu_sea_uae_israel',
        status: data.status || 'expected',
        outboundTracking: data.outboundTracking || '',
        shippingCost: data.shippingCost || '',
        notes: data.notes || '',
        weight: data.weight,
        shipmentId: data.shipmentId,
        shipmentNumber: data.shipmentNumber,
        createdAt: data.createdAt || '',
        updatedAt: data.updatedAt || ''
      });
    });

    list.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    onData(list);
  }, (err) => {
    console.error('All parcels subscription error:', err);
    if (onError) onError(err);
  });
}

// Update parcel details by Admin
export async function updateParcel(
  parcelId: string,
  updates: Partial<Pick<Parcel, 'status' | 'outboundTracking' | 'shippingCost' | 'notes' | 'weight' | 'shipmentId' | 'shipmentNumber' | 'inboundTracking' | 'clientCode' | 'productTitle' | 'warehouseDestination'>>
): Promise<void> {
  const docRef = doc(db, 'parcels', parcelId);
  await updateDoc(docRef, {
    ...updates,
    updatedAt: new Date().toISOString()
  });
}

// Delete parcel (Admin only)
export async function deleteParcel(parcelId: string): Promise<void> {
  const docRef = doc(db, 'parcels', parcelId);
  await deleteDoc(docRef);
}

// =========================================================================
// SHIPMENTS (OUTBOUND CONSOLIDATED BOXES)
// =========================================================================

// Helper to generate readable shipment code e.g. HB-1042
function generateShipmentNumber(): string {
  const randomSuffix = Math.floor(1000 + Math.random() * 9000);
  return `HB-${randomSuffix}`;
}

// Create consolidated outbound shipment by Admin/Warehouse
export async function createShipment(params: {
  userId: string;
  clientCode: string;
  inboundTrackings: string[];
  parcelIds?: string[];
  productSummary: string;
  warehouseDestination: WarehouseDestination;
  weight: number;
  shippingCost: string;
  paymentStatus?: PaymentStatus;
  status?: OutboundStatus;
  outboundTracking?: string;
  photoUrl?: string;
  notes?: string;
}): Promise<string> {
  const shipmentsRef = collection(db, 'shipments');
  const now = new Date().toISOString();
  const shipmentNumber = generateShipmentNumber();

  const docRef = await addDoc(shipmentsRef, {
    shipmentNumber,
    userId: params.userId,
    clientCode: params.clientCode,
    inboundTrackings: params.inboundTrackings,
    parcelIds: params.parcelIds || [],
    productSummary: params.productSummary.trim(),
    warehouseDestination: params.warehouseDestination,
    weight: Number(params.weight) || 0,
    shippingCost: params.shippingCost.trim(),
    paymentStatus: params.paymentStatus || 'pending',
    status: params.status || 'packed',
    outboundTracking: params.outboundTracking ? params.outboundTracking.trim() : '',
    photoUrl: params.photoUrl || '',
    notes: params.notes ? params.notes.trim() : '',
    createdAt: now,
    updatedAt: now
  });

  // Mark all included parcels as 'consolidated'
  if (params.parcelIds && params.parcelIds.length > 0) {
    for (const pId of params.parcelIds) {
      try {
        const parcelRef = doc(db, 'parcels', pId);
        await updateDoc(parcelRef, {
          status: 'consolidated' as ParcelStatus,
          shipmentId: docRef.id,
          shipmentNumber,
          updatedAt: now
        });
      } catch (err) {
        console.error(`Failed to update parcel ${pId} status:`, err);
      }
    }
  }

  return docRef.id;
}

// Update existing shipment by Admin
export async function updateShipment(
  shipmentId: string,
  updates: Partial<Pick<Shipment, 'weight' | 'shippingCost' | 'paymentStatus' | 'status' | 'outboundTracking' | 'photoUrl' | 'notes' | 'inboundTrackings' | 'productSummary'>>
): Promise<void> {
  const docRef = doc(db, 'shipments', shipmentId);
  await updateDoc(docRef, {
    ...updates,
    updatedAt: new Date().toISOString()
  });
}

// Delete shipment by Admin (optionally restore parcels to 'arrived')
export async function deleteShipment(shipmentId: string, parcelIds?: string[]): Promise<void> {
  // Restore parcels if present
  if (parcelIds && parcelIds.length > 0) {
    for (const pId of parcelIds) {
      try {
        const parcelRef = doc(db, 'parcels', pId);
        await updateDoc(parcelRef, {
          status: 'arrived' as ParcelStatus,
          shipmentId: '',
          shipmentNumber: '',
          updatedAt: new Date().toISOString()
        });
      } catch (e) {
        console.error('Error resetting parcel:', e);
      }
    }
  }

  const docRef = doc(db, 'shipments', shipmentId);
  await deleteDoc(docRef);
}

// Real-time listener for current user's shipments
export function subscribeToCustomerShipments(
  userId: string,
  onData: (shipments: Shipment[]) => void,
  onError?: (err: Error) => void
): () => void {
  const shipmentsRef = collection(db, 'shipments');
  const q = query(shipmentsRef, where('userId', '==', userId));

  return onSnapshot(q, (snapshot) => {
    const list: Shipment[] = [];
    snapshot.forEach((docSnap) => {
      const data = docSnap.data();
      list.push({
        id: docSnap.id,
        shipmentNumber: data.shipmentNumber || 'HB-????',
        userId: data.userId,
        clientCode: data.clientCode || '',
        inboundTrackings: Array.isArray(data.inboundTrackings) ? data.inboundTrackings : [],
        parcelIds: Array.isArray(data.parcelIds) ? data.parcelIds : [],
        productSummary: data.productSummary || '',
        warehouseDestination: data.warehouseDestination || 'cis_cargo',
        weight: typeof data.weight === 'number' ? data.weight : (parseFloat(data.weight) || 0),
        shippingCost: data.shippingCost || '',
        paymentStatus: data.paymentStatus || 'pending',
        status: data.status || 'packed',
        outboundTracking: data.outboundTracking || '',
        photoUrl: data.photoUrl || '',
        notes: data.notes || '',
        createdAt: data.createdAt || '',
        updatedAt: data.updatedAt || ''
      });
    });

    list.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    onData(list);
  }, (err) => {
    console.error('Customer shipments subscription error:', err);
    if (onError) onError(err);
  });
}

// Real-time listener for ALL shipments (Admin)
export function subscribeToAllShipments(
  onData: (shipments: Shipment[]) => void,
  onError?: (err: Error) => void
): () => void {
  const shipmentsRef = collection(db, 'shipments');

  return onSnapshot(shipmentsRef, (snapshot) => {
    const list: Shipment[] = [];
    snapshot.forEach((docSnap) => {
      const data = docSnap.data();
      list.push({
        id: docSnap.id,
        shipmentNumber: data.shipmentNumber || 'HB-????',
        userId: data.userId,
        clientCode: data.clientCode || '',
        inboundTrackings: Array.isArray(data.inboundTrackings) ? data.inboundTrackings : [],
        parcelIds: Array.isArray(data.parcelIds) ? data.parcelIds : [],
        productSummary: data.productSummary || '',
        warehouseDestination: data.warehouseDestination || 'cis_cargo',
        weight: typeof data.weight === 'number' ? data.weight : (parseFloat(data.weight) || 0),
        shippingCost: data.shippingCost || '',
        paymentStatus: data.paymentStatus || 'pending',
        status: data.status || 'packed',
        outboundTracking: data.outboundTracking || '',
        photoUrl: data.photoUrl || '',
        notes: data.notes || '',
        createdAt: data.createdAt || '',
        updatedAt: data.updatedAt || ''
      });
    });

    list.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    onData(list);
  }, (err) => {
    console.error('All shipments subscription error:', err);
    if (onError) onError(err);
  });
}

// Fetch all registered users (Admin only)
export async function getAllUsers(): Promise<UserProfile[]> {
  try {
    const usersRef = collection(db, 'users');
    const snapshot = await getDocs(usersRef);
    const users: UserProfile[] = [];
    snapshot.forEach((snap) => {
      users.push(snap.data() as UserProfile);
    });
    users.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    return users;
  } catch (error) {
    console.error('Error fetching all users:', error);
    return [];
  }
}

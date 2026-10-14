
export type UserRole = 'admin' | 'customer';

export type WarehouseDestination = 
  | 'eu_sea_uae_israel' 
  | 'usa_small' 
  | 'usa_amazon_large' 
  | 'cis_cargo';

export type ParcelStatus = 
  | 'expected' 
  | 'arrived' 
  | 'consolidated'
  | 'packing' 
  | 'awaiting_payment'
  | 'shipped' 
  | 'delivered';

export type OutboundStatus = 
  | 'packed'          // Упаковано (ждёт оплаты)
  | 'paid'            // Оплачено (готовится к отправке)
  | 'in_transit'      // В пути к вам
  | 'delivered';      // Доставлено

export type PaymentStatus = 'pending' | 'paid';

export interface UserProfile {
  uid: string;
  email: string;
  clientCode: string; // e.g. DK-8140 or II-8141 (Initials-Number)
  fullName: string;
  phone: string;
  shippingAddress: string;
  role: UserRole;
  createdAt: string;
}

export interface Parcel {
  id: string;
  userId: string;
  clientCode: string;
  inboundTracking: string;
  productTitle: string;
  warehouseDestination: WarehouseDestination;
  status: ParcelStatus;
  outboundTracking?: string;
  shippingCost?: string;
  notes?: string;
  weight?: number;
  shipmentId?: string;
  shipmentNumber?: string;
  createdAt: string;
  updatedAt?: string;
}

export interface Shipment {
  id: string;
  shipmentNumber: string; // e.g. "HB-1042"
  userId: string;
  clientCode: string;
  inboundTrackings: string[]; // List of domestic China tracking numbers in this box
  parcelIds?: string[];
  productSummary: string; // Brief description of consolidated goods
  warehouseDestination: WarehouseDestination;
  weight: number; // in kg, e.g. 5.4
  shippingCost: string; // e.g. "3 800 ₽" or "$45"
  paymentStatus: PaymentStatus; // 'pending' | 'paid'
  status: OutboundStatus; // 'packed' | 'paid' | 'in_transit' | 'delivered'
  outboundTracking?: string; // CDEK / Cargo international tracking number
  photoUrl?: string; // photo of packed box / goods together
  notes?: string;
  createdAt: string;
  updatedAt?: string;
}

export interface User {
  email: string;
  name: string;
  clientCode: string;
}


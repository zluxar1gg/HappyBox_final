import React, { useState, useEffect, useRef } from 'react';
import { 
  Search, 
  Filter, 
  Package, 
  Truck, 
  CheckCircle2, 
  Clock, 
  Box, 
  Users, 
  Edit3, 
  Save, 
  Trash2, 
  LogOut, 
  Loader2, 
  ShieldAlert, 
  ChevronDown, 
  ChevronUp,
  AlertCircle, 
  Plus, 
  Camera, 
  DollarSign, 
  CreditCard, 
  Layers, 
  Check, 
  Upload,
  ArrowLeft,
  RefreshCw,
  ExternalLink,
  MessageCircle,
  Send,
  Eye,
  X,
  Scale,
  Sparkles,
  Inbox,
  PackageCheck,
  RotateCcw
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { 
  Parcel, 
  ParcelStatus, 
  WarehouseDestination, 
  UserProfile, 
  Shipment, 
  OutboundStatus, 
  PaymentStatus 
} from '../types';
import { WAREHOUSES } from '../constants';
import { 
  subscribeToAllParcels, 
  updateParcel, 
  deleteParcel, 
  getAllUsers, 
  subscribeToAllShipments, 
  createShipment, 
  updateShipment, 
  deleteShipment,
  createParcel
} from '../services/parcelService';
import { compressImageFile } from '../utils/imageUtils';
import { Language } from '../utils/translations';

interface AdminDashboardPageProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  onNavigate: (page: string) => void;
  onBack: () => void;
}

export const AdminDashboardPage: React.FC<AdminDashboardPageProps> = ({
  language,
  setLanguage,
  onNavigate,
  onBack
}) => {
  const { user, isAdmin, logout } = useAuth();
  const isRu = language === 'ru';

  // Navigation tab inside admin
  const [activeTab, setActiveTab] = useState<'shipments' | 'parcels' | 'clients'>('shipments');

  // Real-time data
  const [parcels, setParcels] = useState<Parcel[]>([]);
  const [shipments, setShipments] = useState<Shipment[]>([]);
  const [users, setUsers] = useState<UserProfile[]>([]);
  const [loading, setLoading] = useState(true);

  // Filters & Search
  const [searchQuery, setSearchQuery] = useState('');
  const [shipmentStatusFilter, setShipmentStatusFilter] = useState<'all' | OutboundStatus | PaymentStatus>('all');
  const [parcelStatusFilter, setParcelStatusFilter] = useState<'all' | ParcelStatus>('all');
  const [selectedWarehouseFilter, setSelectedWarehouseFilter] = useState<string>('all');

  // Expanded shipment rows for viewing included parcels
  const [expandedShipments, setExpandedShipments] = useState<Record<string, boolean>>({});

  // Quick Parcel Check-In State
  const [checkInTracking, setCheckInTracking] = useState('');
  const [checkInClientCode, setCheckInClientCode] = useState('');
  const [checkInProductTitle, setCheckInProductTitle] = useState('');
  const [checkInWarehouse, setCheckInWarehouse] = useState<WarehouseDestination>('cis_cargo');
  const [checkInSubmitting, setCheckInSubmitting] = useState(false);
  const [checkInMessage, setCheckInMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  // Create Shipment Modal State
  const [isCreateShipmentOpen, setIsCreateShipmentOpen] = useState(false);
  const [shipmentClientCode, setShipmentClientCode] = useState('');
  const [selectedParcelIds, setSelectedParcelIds] = useState<string[]>([]);
  const [shipmentWeight, setShipmentWeight] = useState('');
  const [shipmentCostCny, setShipmentCostCny] = useState('');
  const [shipmentCostUsd, setShipmentCostUsd] = useState('');
  const [shipmentWarehouse, setShipmentWarehouse] = useState<WarehouseDestination>('cis_cargo');
  const [shipmentSummary, setShipmentSummary] = useState('');
  const [shipmentOutboundTracking, setShipmentOutboundTracking] = useState('');
  const [shipmentPhotoUrl, setShipmentPhotoUrl] = useState<string>('');
  const [shipmentNotes, setShipmentNotes] = useState('');
  const [isSubmittingShipment, setIsSubmittingShipment] = useState(false);
  const [shipmentError, setShipmentError] = useState<string | null>(null);
  const photoInputRef = useRef<HTMLInputElement>(null);

  // Edit Shipment Modal State
  const [editingShipment, setEditingShipment] = useState<Shipment | null>(null);
  const [editWeight, setEditWeight] = useState('');
  const [editCost, setEditCost] = useState('');
  const [editOutboundTracking, setEditOutboundTracking] = useState('');
  const [editStatus, setEditStatus] = useState<OutboundStatus>('packed');
  const [editPaymentStatus, setEditPaymentStatus] = useState<PaymentStatus>('pending');
  const [editPhotoUrl, setEditPhotoUrl] = useState('');
  const [editNotes, setEditNotes] = useState('');
  const editPhotoInputRef = useRef<HTMLInputElement>(null);

  // Edit Parcel Modal State
  const [editingParcel, setEditingParcel] = useState<Parcel | null>(null);
  const [editParcelTracking, setEditParcelTracking] = useState('');
  const [editParcelClientCode, setEditParcelClientCode] = useState('');
  const [editParcelTitle, setEditParcelTitle] = useState('');
  const [editParcelStatus, setEditParcelStatus] = useState<ParcelStatus>('expected');
  const [editParcelWarehouse, setEditParcelWarehouse] = useState<WarehouseDestination>('cis_cargo');
  const [editParcelNotes, setEditParcelNotes] = useState('');

  // Lightbox for full-size photos
  const [lightboxPhotoUrl, setLightboxPhotoUrl] = useState<string | null>(null);

  // Inline feedback message
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  // 1. Subscribe to Firestore in real-time
  useEffect(() => {
    if (!isAdmin) return;
    setLoading(true);

    const unsubParcels = subscribeToAllParcels(
      (data) => {
        setParcels(data);
        setLoading(false);
      },
      (err) => {
        console.error('Error fetching parcels in admin:', err);
        setLoading(false);
      }
    );

    const unsubShipments = subscribeToAllShipments(
      (data) => {
        setShipments(data);
      },
      (err) => console.error('Error fetching shipments in admin:', err)
    );

    getAllUsers().then((u) => setUsers(u));

    return () => {
      unsubParcels();
      unsubShipments();
    };
  }, [isAdmin]);

  // 2. Auto-conversion rate: 1 USD ≈ 7.2 CNY
  const CNY_TO_USD_RATE = 7.2;

  const handleCnyChange = (val: string) => {
    setShipmentCostCny(val);
    const num = parseFloat(val);
    if (!isNaN(num) && num > 0) {
      const approxUsd = Math.round(num / CNY_TO_USD_RATE);
      setShipmentCostUsd(approxUsd.toString());
    } else {
      setShipmentCostUsd('');
    }
  };

  // 3. When client is selected in Create Shipment, auto-select their arrived parcels
  const clientAvailableParcels = parcels.filter(
    (p) => p.clientCode.toUpperCase() === shipmentClientCode.trim().toUpperCase() && p.status === 'arrived'
  );

  const handleSelectClient = (code: string) => {
    setShipmentClientCode(code);
    const available = parcels.filter(
      (p) => p.clientCode.toUpperCase() === code.trim().toUpperCase() && p.status === 'arrived'
    );
    const ids = available.map((p) => p.id);
    setSelectedParcelIds(ids);

    // Auto-generate summary
    const titles = available.map((p) => p.productTitle).filter(Boolean);
    if (titles.length > 0) {
      setShipmentSummary(titles.slice(0, 4).join(', '));
    }
  };

  const handleToggleParcelSelection = (parcelId: string) => {
    setSelectedParcelIds((prev) =>
      prev.includes(parcelId) ? prev.filter((id) => id !== parcelId) : [...prev, parcelId]
    );
  };

  const handleSelectAllClientParcels = () => {
    if (selectedParcelIds.length === clientAvailableParcels.length) {
      setSelectedParcelIds([]);
    } else {
      setSelectedParcelIds(clientAvailableParcels.map((p) => p.id));
    }
  };

  // Photo upload handler
  const handlePhotoUpload = async (e: React.ChangeEvent<HTMLInputElement>, isEdit = false) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      const compressedDataUrl = await compressImageFile(file, 1280, 0.85);
      if (isEdit) {
        setEditPhotoUrl(compressedDataUrl);
      } else {
        setShipmentPhotoUrl(compressedDataUrl);
      }
    } catch (err) {
      console.error('Image compression failed:', err);
      showToast(isRu ? 'Ошибка сжатия фото' : 'Image compression failed');
    }
  };

  // Quick Check-in logic
  const handleQuickCheckIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setCheckInMessage(null);
    const track = checkInTracking.trim();
    const code = checkInClientCode.trim().toUpperCase();

    if (!track) {
      setCheckInMessage({ type: 'error', text: isRu ? 'Введите китайский трек-номер' : 'Enter China tracking number' });
      return;
    }

    setCheckInSubmitting(true);
    try {
      // Check if parcel already registered by client in 'expected' status
      const existing = parcels.find(
        (p) => p.inboundTracking.toLowerCase() === track.toLowerCase()
      );

      if (existing) {
        // Update existing parcel to arrived
        await updateParcel(existing.id, {
          status: 'arrived',
          clientCode: code || existing.clientCode,
          warehouseDestination: checkInWarehouse
        });
        setCheckInMessage({
          type: 'success',
          text: isRu 
            ? `Посылка ${track} найдена (код ${existing.clientCode}) и переведена в статус «На складе»!` 
            : `Parcel ${track} updated to "In Warehouse" (client ${existing.clientCode})!`
        });
      } else {
        // Create new parcel in 'arrived' status directly
        if (!code) {
          setCheckInMessage({
            type: 'error',
            text: isRu 
              ? 'Для новой посылки обязательно укажите код клиента с коробки (например: DK-8140)' 
              : 'Client code is required for new parcel check-in'
          });
          setCheckInSubmitting(false);
          return;
        }

        // Find user by clientCode
        const matchedUser = users.find((u) => u.clientCode.toUpperCase() === code);
        const targetUserId = matchedUser ? matchedUser.uid : 'manual_admin_entry';

        const newIds = await createParcel({
          userId: targetUserId,
          clientCode: code,
          inboundTracking: track,
          productTitle: checkInProductTitle.trim() || (isRu ? 'Товар из Китая' : 'Cargo item'),
          warehouseDestination: checkInWarehouse,
          notes: isRu ? 'Принято кладовщиком' : 'Received at warehouse'
        });

        // Set status to arrived
        if (newIds && newIds.length > 0) {
          for (const newId of newIds) {
            await updateParcel(newId, { status: 'arrived' });
          }
        }

        setCheckInMessage({
          type: 'success',
          text: isRu 
            ? `Новая посылка ${track} успешно принята на склад для клиента ${code}!` 
            : `New parcel ${track} registered and marked "In Warehouse" for ${code}!`
        });
      }

      // Reset form
      setCheckInTracking('');
      setCheckInProductTitle('');
    } catch (err) {
      console.error('Error during check-in:', err);
      setCheckInMessage({ type: 'error', text: isRu ? 'Ошибка при приёме посылки' : 'Check-in failed' });
    } finally {
      setCheckInSubmitting(false);
    }
  };

  // Submit Create Shipment
  const handleCreateShipmentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setShipmentError(null);

    const code = shipmentClientCode.trim().toUpperCase();
    if (!code) {
      setShipmentError(isRu ? 'Выберите код клиента' : 'Please select a client');
      return;
    }

    if (selectedParcelIds.length === 0) {
      setShipmentError(isRu ? 'Выберите хотя бы одну посылку для включения в партию' : 'Select at least one parcel for batch');
      return;
    }

    const weightNum = parseFloat(shipmentWeight);
    if (isNaN(weightNum) || weightNum <= 0) {
      setShipmentError(isRu ? 'Укажите общий вес партии (в кг)' : 'Enter total batch weight in kg');
      return;
    }

    const cnyVal = shipmentCostCny.trim();
    const usdVal = shipmentCostUsd.trim();
    let finalCostString = '';
    if (cnyVal && usdVal) {
      finalCostString = `¥${cnyVal} (~$${usdVal})`;
    } else if (cnyVal) {
      finalCostString = `¥${cnyVal}`;
    } else if (usdVal) {
      finalCostString = `$${usdVal}`;
    } else {
      setShipmentError(isRu ? 'Укажите стоимость доставки в юанях (¥) или долларах ($)' : 'Specify shipping cost in CNY (¥) or USD ($)');
      return;
    }

    const chosenParcels = parcels.filter((p) => selectedParcelIds.includes(p.id));
    const inboundTrackings = chosenParcels.map((p) => p.inboundTracking);
    const matchedUser = users.find((u) => u.clientCode.toUpperCase() === code);
    const userId = matchedUser ? matchedUser.uid : (chosenParcels[0]?.userId || 'unknown');

    setIsSubmittingShipment(true);
    try {
      await createShipment({
        userId,
        clientCode: code,
        inboundTrackings,
        parcelIds: selectedParcelIds,
        productSummary: shipmentSummary.trim() || (isRu ? `Партия из ${selectedParcelIds.length} посылок` : `Batch of ${selectedParcelIds.length} parcels`),
        warehouseDestination: shipmentWarehouse,
        weight: weightNum,
        shippingCost: finalCostString,
        paymentStatus: 'pending',
        status: 'packed',
        outboundTracking: shipmentOutboundTracking.trim(),
        photoUrl: shipmentPhotoUrl,
        notes: shipmentNotes.trim()
      });

      showToast(isRu ? 'Партия успешно сформирована!' : 'Shipment batch created successfully!');
      setIsCreateShipmentOpen(false);
      // Reset state
      setShipmentClientCode('');
      setSelectedParcelIds([]);
      setShipmentWeight('');
      setShipmentCostCny('');
      setShipmentCostUsd('');
      setShipmentSummary('');
      setShipmentOutboundTracking('');
      setShipmentPhotoUrl('');
      setShipmentNotes('');
    } catch (err: any) {
      console.error('Failed to create shipment:', err);
      setShipmentError(err.message || (isRu ? 'Ошибка при создании партии' : 'Failed to create shipment'));
    } finally {
      setIsSubmittingShipment(false);
    }
  };

  // Disband / Delete shipment
  const handleDisbandShipment = async (shipment: Shipment) => {
    const confirmMsg = isRu
      ? `Расформировать партию #${shipment.shipmentNumber}? Все посылки вернутся в статус «На складе», а сборка будет удалена.`
      : `Disband batch #${shipment.shipmentNumber}? All parcels will be restored to "In Warehouse" status.`;

    if (window.confirm(confirmMsg)) {
      try {
        await deleteShipment(shipment.id, shipment.parcelIds);
        showToast(isRu ? `Партия #${shipment.shipmentNumber} расформирована` : `Batch #${shipment.shipmentNumber} disbanded`);
      } catch (err) {
        console.error('Error disbanding shipment:', err);
        showToast(isRu ? 'Ошибка при расформировании партии' : 'Error disbanding shipment');
      }
    }
  };

  // Toggle payment status in 1 click
  const handleTogglePaymentStatus = async (shipment: Shipment) => {
    const nextStatus: PaymentStatus = shipment.paymentStatus === 'paid' ? 'pending' : 'paid';
    const nextOutboundStatus: OutboundStatus = nextStatus === 'paid' && shipment.status === 'packed' ? 'paid' : shipment.status;
    try {
      await updateShipment(shipment.id, {
        paymentStatus: nextStatus,
        status: nextOutboundStatus
      });
      showToast(isRu ? `Статус оплаты изменён на: ${nextStatus === 'paid' ? 'Оплачено' : 'Ожидает'}` : `Payment status updated to ${nextStatus}`);
    } catch (err) {
      console.error('Error updating payment status:', err);
    }
  };

  // Quick delivery status change
  const handleChangeDeliveryStatus = async (shipmentId: string, newStatus: OutboundStatus) => {
    try {
      await updateShipment(shipmentId, { status: newStatus });
      showToast(isRu ? 'Статус доставки обновлён' : 'Delivery status updated');
    } catch (err) {
      console.error('Error updating status:', err);
    }
  };

  // Save quick outbound tracking (CDEK)
  const handleSaveOutboundTracking = async (shipmentId: string, track: string) => {
    try {
      await updateShipment(shipmentId, { outboundTracking: track.trim() });
      showToast(isRu ? 'Трек-номер СДЭК сохранён' : 'Tracking number saved');
    } catch (err) {
      console.error('Error saving tracking:', err);
    }
  };

  // Open Edit Shipment
  const handleOpenEditShipment = (shipment: Shipment) => {
    setEditingShipment(shipment);
    setEditWeight(shipment.weight ? shipment.weight.toString() : '');
    setEditCost(shipment.shippingCost || '');
    setEditOutboundTracking(shipment.outboundTracking || '');
    setEditStatus(shipment.status || 'packed');
    setEditPaymentStatus(shipment.paymentStatus || 'pending');
    setEditPhotoUrl(shipment.photoUrl || '');
    setEditNotes(shipment.notes || '');
  };

  const handleSaveEditShipment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingShipment) return;

    try {
      await updateShipment(editingShipment.id, {
        weight: parseFloat(editWeight) || 0,
        shippingCost: editCost.trim(),
        outboundTracking: editOutboundTracking.trim(),
        status: editStatus,
        paymentStatus: editPaymentStatus,
        photoUrl: editPhotoUrl,
        notes: editNotes.trim()
      });
      showToast(isRu ? 'Изменения в партии сохранены' : 'Shipment updated');
      setEditingShipment(null);
    } catch (err) {
      console.error('Error updating shipment:', err);
      showToast(isRu ? 'Ошибка при сохранении' : 'Update failed');
    }
  };

  // Open Edit Parcel
  const handleOpenEditParcel = (parcel: Parcel) => {
    setEditingParcel(parcel);
    setEditParcelTracking(parcel.inboundTracking);
    setEditParcelClientCode(parcel.clientCode);
    setEditParcelTitle(parcel.productTitle);
    setEditParcelStatus(parcel.status);
    setEditParcelWarehouse(parcel.warehouseDestination);
    setEditParcelNotes(parcel.notes || '');
  };

  const handleSaveEditParcel = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingParcel) return;

    try {
      await updateParcel(editingParcel.id, {
        inboundTracking: editParcelTracking.trim(),
        clientCode: editParcelClientCode.trim().toUpperCase(),
        productTitle: editParcelTitle.trim(),
        status: editParcelStatus,
        warehouseDestination: editParcelWarehouse,
        notes: editParcelNotes.trim()
      });
      showToast(isRu ? 'Посылка обновлена' : 'Parcel updated');
      setEditingParcel(null);
    } catch (err) {
      console.error('Error updating parcel:', err);
      showToast(isRu ? 'Ошибка обновления' : 'Update failed');
    }
  };

  // Delete parcel
  const handleDeleteParcel = async (parcelId: string) => {
    if (window.confirm(isRu ? 'Удалить эту посылку из базы?' : 'Delete this parcel?')) {
      try {
        await deleteParcel(parcelId);
        showToast(isRu ? 'Посылка удалена' : 'Parcel deleted');
      } catch (err) {
        console.error('Error deleting parcel:', err);
      }
    }
  };

  // Filter Shipments
  const filteredShipments = shipments.filter((s) => {
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch =
      !q ||
      s.shipmentNumber.toLowerCase().includes(q) ||
      s.clientCode.toLowerCase().includes(q) ||
      (s.outboundTracking && s.outboundTracking.toLowerCase().includes(q)) ||
      (s.productSummary && s.productSummary.toLowerCase().includes(q)) ||
      (s.inboundTrackings && s.inboundTrackings.some((t) => t.toLowerCase().includes(q)));

    if (!matchesSearch) return false;

    if (shipmentStatusFilter === 'all') return true;
    if (shipmentStatusFilter === 'pending' || shipmentStatusFilter === 'paid') {
      return s.paymentStatus === shipmentStatusFilter;
    }
    return s.status === shipmentStatusFilter;
  });

  // Filter Parcels
  const filteredParcels = parcels.filter((p) => {
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch =
      !q ||
      p.inboundTracking.toLowerCase().includes(q) ||
      p.clientCode.toLowerCase().includes(q) ||
      p.productTitle.toLowerCase().includes(q) ||
      (p.shipmentNumber && p.shipmentNumber.toLowerCase().includes(q));

    if (!matchesSearch) return false;
    if (parcelStatusFilter !== 'all' && p.status !== parcelStatusFilter) return false;
    if (selectedWarehouseFilter !== 'all' && p.warehouseDestination !== selectedWarehouseFilter) return false;
    return true;
  });

  // Unique clients list with parcels stats
  const clientsList = users.map((u) => {
    const userParcels = parcels.filter((p) => p.clientCode.toUpperCase() === u.clientCode.toUpperCase());
    const arrivedParcelsCount = userParcels.filter((p) => p.status === 'arrived').length;
    const userShipments = shipments.filter((s) => s.clientCode.toUpperCase() === u.clientCode.toUpperCase());
    return {
      ...u,
      arrivedParcelsCount,
      totalParcelsCount: userParcels.length,
      totalShipmentsCount: userShipments.length
    };
  });

  // Filter clients
  const filteredClients = clientsList.filter((c) => {
    const q = searchQuery.toLowerCase().trim();
    return (
      !q ||
      c.clientCode.toLowerCase().includes(q) ||
      c.email.toLowerCase().includes(q) ||
      (c.fullName && c.fullName.toLowerCase().includes(q)) ||
      (c.phone && c.phone.includes(q))
    );
  });

  // Clients with arrived parcels ready for consolidation
  const clientsReadyForConsolidation = clientsList.filter((c) => c.arrivedParcelsCount > 0);

  // Status badges helper
  const getOutboundStatusBadge = (status: OutboundStatus) => {
    switch (status) {
      case 'packed':
        return { label: isRu ? 'Упаковано' : 'Packed', bg: 'bg-purple-100 text-purple-800 border-purple-200' };
      case 'paid':
        return { label: isRu ? 'Оплачено (отправка)' : 'Paid (Preparing)', bg: 'bg-blue-100 text-blue-800 border-blue-200' };
      case 'in_transit':
        return { label: isRu ? 'В пути' : 'In Transit', bg: 'bg-indigo-100 text-indigo-800 border-indigo-200' };
      case 'delivered':
        return { label: isRu ? 'Доставлено' : 'Delivered', bg: 'bg-emerald-100 text-emerald-800 border-emerald-200' };
    }
  };

  const getInboundStatusBadge = (status: ParcelStatus) => {
    switch (status) {
      case 'expected':
        return { label: isRu ? 'Ожидается' : 'Awaiting', bg: 'bg-amber-100 text-amber-800 border-amber-200' };
      case 'arrived':
        return { label: isRu ? 'На складе' : 'In Warehouse', bg: 'bg-blue-100 text-blue-800 border-blue-200' };
      case 'consolidated':
        return { label: isRu ? 'В партии' : 'In Batch', bg: 'bg-purple-100 text-purple-800 border-purple-200' };
      default:
        return { label: isRu ? 'Ожидается' : 'Awaiting', bg: 'bg-gray-100 text-gray-800 border-gray-200' };
    }
  };

  // Access check
  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6 text-center">
        <div className="w-20 h-20 bg-red-100 text-red-600 rounded-3xl flex items-center justify-center mb-5 shadow-lg">
          <ShieldAlert size={42} />
        </div>
        <h1 className="text-2xl font-black text-brand-dark mb-2">
          {isRu ? 'Доступ ограничен' : 'Access Restricted'}
        </h1>
        <p className="text-sm text-gray-500 max-w-md mb-6">
          {isRu 
            ? 'Этот раздел предназначен исключительно для администраторов и сотрудников склада HappyBox.'
            : 'This page is restricted to HappyBox administrators and warehouse staff.'}
        </p>
        <div className="flex gap-3">
          <button
            onClick={() => onNavigate('dashboard')}
            className="bg-brand-blue hover:bg-blue-600 text-white font-bold px-6 py-3 rounded-2xl shadow-md transition-all text-sm cursor-pointer"
          >
            {isRu ? 'В личный кабинет клиента' : 'Go to Client Dashboard'}
          </button>
          <button
            onClick={onBack}
            className="bg-white border border-gray-200 text-brand-dark hover:bg-gray-50 font-bold px-6 py-3 rounded-2xl transition-all text-sm cursor-pointer"
          >
            {isRu ? 'На главную' : 'Back to Home'}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8fafc] text-brand-dark flex flex-col">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-brand-dark text-white px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-3 animate-fade-in border border-gray-700 text-sm font-semibold">
          <CheckCircle2 size={18} className="text-emerald-400 shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* TOP HEADER BAR */}
      <header className="bg-brand-dark text-white sticky top-0 z-40 border-b border-gray-800 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5 flex flex-wrap items-center justify-between gap-4">
          {/* Logo & Badge */}
          <div className="flex items-center gap-3">
            <button 
              onClick={onBack}
              className="w-9 h-9 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center text-gray-300 hover:text-white transition-all cursor-pointer"
              title={isRu ? 'На сайт' : 'To Website'}
            >
              <ArrowLeft size={18} />
            </button>
            <div className="flex items-center gap-2.5">
              <span className="text-xl font-black tracking-tight text-white">HappyBox</span>
              <span className="text-[10px] font-black uppercase tracking-wider bg-amber-500 text-brand-dark px-2.5 py-0.5 rounded-full">
                WMS / Admin ERP
              </span>
            </div>
          </div>

          {/* User info & Actions */}
          <div className="flex items-center gap-3">
            {/* Language Switch */}
            <div className="flex bg-white/10 p-1 rounded-xl text-xs font-bold">
              <button
                onClick={() => setLanguage('ru')}
                className={`px-2.5 py-1 rounded-lg transition-all ${
                  language === 'ru' ? 'bg-amber-400 text-brand-dark' : 'text-gray-300 hover:text-white'
                }`}
              >
                RU
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-2.5 py-1 rounded-lg transition-all ${
                  language === 'en' ? 'bg-amber-400 text-brand-dark' : 'text-gray-300 hover:text-white'
                }`}
              >
                EN
              </button>
            </div>

            {/* Admin Badge */}
            <div className="hidden sm:flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1.5 rounded-xl text-xs">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
              <span className="font-mono font-bold text-amber-300">HB-ADMIN</span>
              <span className="text-gray-400 truncate max-w-[150px]">{user?.email}</span>
            </div>

            {/* Logout */}
            <button
              onClick={() => logout()}
              className="p-2 rounded-xl bg-white/10 hover:bg-red-500/20 hover:text-red-300 text-gray-300 transition-all cursor-pointer"
              title={isRu ? 'Выйти' : 'Sign Out'}
            >
              <LogOut size={16} />
            </button>
          </div>
        </div>
      </header>

      {/* STATS TICKER STRIP */}
      <section className="bg-white border-b border-gray-200/80 shadow-2xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {/* KPI 1 */}
            <div className="bg-blue-50/70 border border-blue-200/60 rounded-2xl p-3.5 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-500 text-white flex items-center justify-center shrink-0 shadow-sm">
                <Box size={20} />
              </div>
              <div className="min-w-0">
                <span className="text-[11px] font-bold uppercase tracking-wider text-blue-700 block truncate">
                  {isRu ? 'На складе (готово)' : 'In Warehouse'}
                </span>
                <span className="text-xl font-black text-blue-950">
                  {parcels.filter((p) => p.status === 'arrived').length}
                </span>
              </div>
            </div>

            {/* KPI 2 */}
            <div className="bg-purple-50/70 border border-purple-200/60 rounded-2xl p-3.5 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-purple-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                <Layers size={20} />
              </div>
              <div className="min-w-0">
                <span className="text-[11px] font-bold uppercase tracking-wider text-purple-700 block truncate">
                  {isRu ? 'Партий создано' : 'Total Batches'}
                </span>
                <span className="text-xl font-black text-purple-950">{shipments.length}</span>
              </div>
            </div>

            {/* KPI 3 */}
            <div className="bg-amber-50/70 border border-amber-200/60 rounded-2xl p-3.5 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center shrink-0 shadow-sm">
                <DollarSign size={20} />
              </div>
              <div className="min-w-0">
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-700 block truncate">
                  {isRu ? 'Ждут оплаты' : 'Awaiting Pay'}
                </span>
                <span className="text-xl font-black text-amber-950">
                  {shipments.filter((s) => s.paymentStatus === 'pending').length}
                </span>
              </div>
            </div>

            {/* KPI 4 */}
            <div className="bg-indigo-50/70 border border-indigo-200/60 rounded-2xl p-3.5 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                <Truck size={20} />
              </div>
              <div className="min-w-0">
                <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-700 block truncate">
                  {isRu ? 'В пути клиентам' : 'In Transit'}
                </span>
                <span className="text-xl font-black text-indigo-950">
                  {shipments.filter((s) => s.status === 'in_transit').length}
                </span>
              </div>
            </div>

            {/* KPI 5 */}
            <div className="bg-emerald-50/70 border border-emerald-200/60 rounded-2xl p-3.5 flex items-center gap-3 col-span-2 sm:col-span-1">
              <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                <Users size={20} />
              </div>
              <div className="min-w-0">
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 block truncate">
                  {isRu ? 'Клиентов в базе' : 'Total Clients'}
                </span>
                <span className="text-xl font-black text-emerald-950">{users.length}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTAINER */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 py-6 flex-1 flex flex-col gap-6">
        
        {/* TOP TAB NAVIGATION BAR */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 bg-white p-2.5 rounded-3xl border border-gray-200/80 shadow-2xs">
          {/* Main 3 Tabs */}
          <div className="grid grid-cols-3 gap-1.5 p-1 bg-gray-100 rounded-2xl flex-1 sm:max-w-xl">
            <button
              onClick={() => setActiveTab('shipments')}
              className={`py-2.5 px-3 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer ${
                activeTab === 'shipments'
                  ? 'bg-brand-dark text-white shadow-sm'
                  : 'text-gray-600 hover:text-brand-dark'
              }`}
            >
              <Layers size={16} className={activeTab === 'shipments' ? 'text-amber-400' : ''} />
              <span>{isRu ? 'Партии и Сборки' : 'Batches & Shipments'}</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                activeTab === 'shipments' ? 'bg-white/20 text-white' : 'bg-gray-200 text-gray-700'
              }`}>
                {shipments.length}
              </span>
            </button>

            <button
              onClick={() => setActiveTab('parcels')}
              className={`py-2.5 px-3 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer ${
                activeTab === 'parcels'
                  ? 'bg-brand-dark text-white shadow-sm'
                  : 'text-gray-600 hover:text-brand-dark'
              }`}
            >
              <Inbox size={16} className={activeTab === 'parcels' ? 'text-blue-400' : ''} />
              <span>{isRu ? 'Приёмка склада' : 'Warehouse Parcels'}</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                activeTab === 'parcels' ? 'bg-white/20 text-white' : 'bg-gray-200 text-gray-700'
              }`}>
                {parcels.length}
              </span>
            </button>

            <button
              onClick={() => setActiveTab('clients')}
              className={`py-2.5 px-3 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer ${
                activeTab === 'clients'
                  ? 'bg-brand-dark text-white shadow-sm'
                  : 'text-gray-600 hover:text-brand-dark'
              }`}
            >
              <Users size={16} className={activeTab === 'clients' ? 'text-emerald-400' : ''} />
              <span>{isRu ? 'Клиенты' : 'Clients'}</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                activeTab === 'clients' ? 'bg-white/20 text-white' : 'bg-gray-200 text-gray-700'
              }`}>
                {users.length}
              </span>
            </button>
          </div>

          {/* Quick Action Buttons */}
          <div className="flex items-center gap-2.5">
            {activeTab === 'shipments' && (
              <button
                onClick={() => {
                  setShipmentError(null);
                  setIsCreateShipmentOpen(true);
                }}
                className="w-full sm:w-auto bg-amber-500 hover:bg-amber-400 text-brand-dark font-black px-5 py-2.5 rounded-2xl shadow-md transition-all flex items-center justify-center gap-2 text-xs sm:text-sm active:scale-95 cursor-pointer"
              >
                <Plus size={18} />
                <span>{isRu ? '+ Собрать партию' : '+ Create Batch'}</span>
              </button>
            )}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* TAB 1: ПАРТИИ И СБОРКИ (SHIPMENTS & BATCHES) */}
        {/* ========================================================================= */}
        {activeTab === 'shipments' && (
          <div className="space-y-6 animate-fade-in">
            {/* Search & Sub-filters */}
            <div className="bg-white p-4 rounded-3xl border border-gray-200/80 shadow-2xs flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between">
              {/* Search Bar */}
              <div className="relative flex-1">
                <Search size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={isRu ? 'Поиск по номеру сборки (HB-1042), коду клиента (DK-8140), треку СДЭК или товару...' : 'Search by batch #, client code, tracking or goods...'}
                  className="w-full bg-gray-50 border border-gray-200 rounded-2xl pl-10 pr-4 py-2.5 text-xs sm:text-sm font-semibold text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-blue/30"
                />
              </div>

              {/* Status Filters */}
              <div className="flex flex-wrap items-center gap-1.5 bg-gray-100 p-1 rounded-2xl text-xs font-bold">
                <button
                  onClick={() => setShipmentStatusFilter('all')}
                  className={`px-3 py-1.5 rounded-xl transition-all cursor-pointer ${
                    shipmentStatusFilter === 'all' ? 'bg-white text-brand-dark shadow-2xs' : 'text-gray-500 hover:text-brand-dark'
                  }`}
                >
                  {isRu ? 'Все' : 'All'} ({shipments.length})
                </button>
                <button
                  onClick={() => setShipmentStatusFilter('pending')}
                  className={`px-3 py-1.5 rounded-xl transition-all cursor-pointer flex items-center gap-1 ${
                    shipmentStatusFilter === 'pending' ? 'bg-amber-400 text-brand-dark shadow-2xs' : 'text-gray-500 hover:text-brand-dark'
                  }`}
                >
                  <Clock size={12} />
                  <span>{isRu ? 'Ждут оплаты' : 'Pending Pay'}</span>
                </button>
                <button
                  onClick={() => setShipmentStatusFilter('paid')}
                  className={`px-3 py-1.5 rounded-xl transition-all cursor-pointer flex items-center gap-1 ${
                    shipmentStatusFilter === 'paid' ? 'bg-blue-600 text-white shadow-2xs' : 'text-gray-500 hover:text-brand-dark'
                  }`}
                >
                  <CreditCard size={12} />
                  <span>{isRu ? 'Оплачено' : 'Paid'}</span>
                </button>
                <button
                  onClick={() => setShipmentStatusFilter('in_transit')}
                  className={`px-3 py-1.5 rounded-xl transition-all cursor-pointer flex items-center gap-1 ${
                    shipmentStatusFilter === 'in_transit' ? 'bg-indigo-600 text-white shadow-2xs' : 'text-gray-500 hover:text-brand-dark'
                  }`}
                >
                  <Truck size={12} />
                  <span>{isRu ? 'В пути' : 'In Transit'}</span>
                </button>
                <button
                  onClick={() => setShipmentStatusFilter('delivered')}
                  className={`px-3 py-1.5 rounded-xl transition-all cursor-pointer flex items-center gap-1 ${
                    shipmentStatusFilter === 'delivered' ? 'bg-emerald-600 text-white shadow-2xs' : 'text-gray-500 hover:text-brand-dark'
                  }`}
                >
                  <CheckCircle2 size={12} />
                  <span>{isRu ? 'Доставлено' : 'Delivered'}</span>
                </button>
              </div>
            </div>

            {/* Ready for Consolidation Notification Strip */}
            {clientsReadyForConsolidation.length > 0 && (
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-3xl p-4 sm:p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-blue-500 text-white flex items-center justify-center shrink-0">
                    <Sparkles size={20} />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-sm text-blue-950">
                      {isRu ? 'Готовы к сборке в партию:' : 'Clients ready for consolidation:'}
                    </h3>
                    <p className="text-xs text-blue-700 mt-0.5">
                      {isRu 
                        ? `У ${clientsReadyForConsolidation.length} клиентов есть посылки со статусом «На складе». Объедините их в сборные боксы.` 
                        : `${clientsReadyForConsolidation.length} clients have parcels arrived in warehouse ready to be packed.`}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
                  {clientsReadyForConsolidation.slice(0, 5).map((cl) => (
                    <button
                      key={cl.clientCode}
                      onClick={() => {
                        handleSelectClient(cl.clientCode);
                        setIsCreateShipmentOpen(true);
                      }}
                      className="bg-white hover:bg-blue-100 text-blue-900 border border-blue-200 px-3 py-1.5 rounded-xl text-xs font-black shadow-2xs transition-all flex items-center gap-1.5 cursor-pointer"
                    >
                      <span className="font-mono">{cl.clientCode}</span>
                      <span className="bg-blue-600 text-white text-[10px] px-1.5 py-0.2 rounded-md">
                        {cl.arrivedParcelsCount} {isRu ? 'пос.' : 'pcs'}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Shipments List */}
            {filteredShipments.length === 0 ? (
              <div className="bg-white rounded-3xl p-12 text-center border border-gray-200/80 shadow-2xs">
                <Layers size={48} className="mx-auto text-gray-300 mb-3" />
                <h3 className="font-bold text-base text-brand-dark mb-1">
                  {isRu ? 'Партии не найдены' : 'No shipments found'}
                </h3>
                <p className="text-xs text-gray-400 max-w-sm mx-auto mb-4">
                  {isRu ? 'Создайте новую партию из посылок на складе или измените поисковый запрос.' : 'Create a new batch from arrived parcels or change filters.'}
                </p>
                <button
                  onClick={() => setIsCreateShipmentOpen(true)}
                  className="bg-amber-500 hover:bg-amber-400 text-brand-dark font-black px-5 py-2.5 rounded-2xl text-xs shadow-md transition-all cursor-pointer"
                >
                  {isRu ? '+ Собрать первую партию' : '+ Create Batch'}
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {filteredShipments.map((shipment) => {
                  const statusInfo = getOutboundStatusBadge(shipment.status);
                  const isExpanded = Boolean(expandedShipments[shipment.id]);
                  const matchedUser = users.find((u) => u.clientCode.toUpperCase() === shipment.clientCode.toUpperCase());

                  return (
                    <div
                      key={shipment.id}
                      className="bg-white rounded-3xl border border-gray-200/80 p-5 sm:p-6 shadow-2xs space-y-4 transition-all hover:border-gray-300"
                    >
                      {/* Top Row: Shipment Header & Quick Actions */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-gray-100">
                        <div className="flex flex-wrap items-center gap-2.5">
                          <span className="bg-brand-dark text-white font-mono font-black text-xs sm:text-sm px-3 py-1 rounded-xl">
                            #{shipment.shipmentNumber}
                          </span>
                          
                          {/* Client code badge */}
                          <span className="bg-amber-100 text-amber-900 border border-amber-200 font-mono font-black text-xs px-2.5 py-1 rounded-xl">
                            {shipment.clientCode}
                          </span>

                          {matchedUser && (
                            <span className="text-xs font-bold text-gray-600">
                              {matchedUser.fullName || matchedUser.email}
                            </span>
                          )}

                          <span className="text-[11px] text-gray-400">
                            {new Date(shipment.createdAt).toLocaleDateString()}
                          </span>
                        </div>

                        {/* Status controls */}
                        <div className="flex flex-wrap items-center gap-2">
                          {/* Payment status button */}
                          <button
                            onClick={() => handleTogglePaymentStatus(shipment)}
                            className={`px-3 py-1.5 rounded-xl text-xs font-black transition-all flex items-center gap-1.5 cursor-pointer shadow-2xs active:scale-95 ${
                              shipment.paymentStatus === 'paid'
                                ? 'bg-emerald-500 text-white hover:bg-emerald-600'
                                : 'bg-amber-100 text-amber-900 hover:bg-amber-200 border border-amber-300'
                            }`}
                            title={isRu ? 'Нажмите для переключения статуса оплаты' : 'Click to toggle payment status'}
                          >
                            <CreditCard size={13} />
                            <span>
                              {shipment.paymentStatus === 'paid'
                                ? (isRu ? 'Оплачено ✓' : 'Paid ✓')
                                : (isRu ? 'Ожидает оплаты' : 'Pending Payment')}
                            </span>
                          </button>

                          {/* Logistics Status Selector */}
                          <select
                            value={shipment.status}
                            onChange={(e) => handleChangeDeliveryStatus(shipment.id, e.target.value as OutboundStatus)}
                            className={`text-xs font-extrabold px-3 py-1.5 rounded-xl border cursor-pointer focus:outline-none ${statusInfo.bg}`}
                          >
                            <option value="packed">{isRu ? '📦 Упаковано' : '📦 Packed'}</option>
                            <option value="paid">{isRu ? '💳 Оплачено (отправка)' : '💳 Paid'}</option>
                            <option value="in_transit">{isRu ? '🚚 В пути клиенту' : '🚚 In Transit'}</option>
                            <option value="delivered">{isRu ? '✅ Доставлено' : '✅ Delivered'}</option>
                          </select>

                          {/* Edit button */}
                          <button
                            onClick={() => handleOpenEditShipment(shipment)}
                            className="p-1.5 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-600 transition-all cursor-pointer"
                            title={isRu ? 'Редактировать партию' : 'Edit shipment'}
                          >
                            <Edit3 size={15} />
                          </button>

                          {/* Disband button */}
                          <button
                            onClick={() => handleDisbandShipment(shipment)}
                            className="p-1.5 rounded-xl bg-red-50 hover:bg-red-100 text-red-600 transition-all cursor-pointer"
                            title={isRu ? 'Расформировать партию (вернуть посылки на склад)' : 'Disband batch'}
                          >
                            <RotateCcw size={15} />
                          </button>
                        </div>
                      </div>

                      {/* Middle Row: Batch Details Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-center">
                        {/* 1. Weight & Cost */}
                        <div className="flex items-center gap-3">
                          {shipment.photoUrl ? (
                            <button
                              onClick={() => setLightboxPhotoUrl(shipment.photoUrl || null)}
                              className="w-14 h-14 rounded-2xl overflow-hidden border border-gray-200 shrink-0 relative group cursor-pointer"
                              title={isRu ? 'Увеличить фото на весах' : 'View photo'}
                            >
                              <img src={shipment.photoUrl} alt="Shipment" className="w-full h-full object-cover" />
                              <div className="absolute inset-0 bg-black/30 flex items-center justify-center text-white opacity-80 group-hover:opacity-100">
                                <Eye size={16} />
                              </div>
                            </button>
                          ) : (
                            <div className="w-14 h-14 rounded-2xl bg-gray-100 border border-dashed border-gray-300 flex items-center justify-center text-gray-400 shrink-0">
                              <Scale size={20} />
                            </div>
                          )}

                          <div>
                            <div className="flex items-center gap-1.5 text-xs">
                              <span className="text-gray-400 font-semibold">{isRu ? 'Общий вес:' : 'Total Weight:'}</span>
                              <span className="font-black text-brand-dark text-sm bg-gray-100 px-2 py-0.5 rounded-lg">
                                {shipment.weight ? `${shipment.weight} кг` : (isRu ? 'Не указан' : 'N/A')}
                              </span>
                            </div>
                            <div className="flex items-center gap-1.5 text-xs mt-1">
                              <span className="text-gray-400 font-semibold">{isRu ? 'Стоимость:' : 'Cost:'}</span>
                              <span className="font-black text-emerald-700 text-sm">
                                {shipment.shippingCost || (isRu ? 'Не указана' : 'N/A')}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* 2. Destination & Summary */}
                        <div className="text-xs">
                          <span className="text-gray-400 font-semibold block mb-0.5">{isRu ? 'Состав груза:' : 'Goods:'}</span>
                          <span className="font-bold text-brand-dark line-clamp-2">
                            {shipment.productSummary || (isRu ? 'Сборная партия товаров' : 'Consolidated goods')}
                          </span>
                        </div>

                        {/* 3. Final Mile Track (CDEK, etc.) */}
                        <div className="text-xs">
                          <span className="text-gray-400 font-semibold block mb-1">
                            {isRu ? 'Трек СДЭК / Накладная:' : 'Outbound Tracking:'}
                          </span>
                          <input
                            type="text"
                            defaultValue={shipment.outboundTracking || ''}
                            onBlur={(e) => {
                              if (e.target.value !== (shipment.outboundTracking || '')) {
                                handleSaveOutboundTracking(shipment.id, e.target.value);
                              }
                            }}
                            placeholder={isRu ? 'Ввести номер СДЭК...' : 'Enter tracking #...'}
                            className="w-full bg-gray-50 border border-gray-200 rounded-xl px-2.5 py-1.5 font-mono font-bold text-xs text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-blue/30"
                          />
                        </div>

                        {/* 4. Included parcels count & expand trigger */}
                        <div className="flex items-center justify-between sm:justify-end gap-3">
                          <button
                            onClick={() =>
                              setExpandedShipments((prev) => ({ ...prev, [shipment.id]: !prev[shipment.id] }))
                            }
                            className="bg-gray-100 hover:bg-gray-200 text-brand-dark px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer w-full sm:w-auto justify-center"
                          >
                            <Box size={14} className="text-brand-blue" />
                            <span>
                              {isRu 
                                ? `${shipment.inboundTrackings?.length || 0} посылок внутри` 
                                : `${shipment.inboundTrackings?.length || 0} parcels inside`}
                            </span>
                            {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                          </button>
                        </div>
                      </div>

                      {/* Expandable Box: FULL list of domestic China trackings */}
                      {isExpanded && (
                        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-4 space-y-2.5 animate-fade-in">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-black uppercase tracking-wider text-gray-500">
                              {isRu ? 'Полный список вложенных посылок из Китая:' : 'Full list of included parcels:'}
                            </span>
                            <span className="text-[11px] text-gray-400 font-mono">
                              Всего: {shipment.inboundTrackings?.length || 0} шт.
                            </span>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                            {shipment.inboundTrackings && shipment.inboundTrackings.length > 0 ? (
                              shipment.inboundTrackings.map((track, idx) => {
                                const originalParcel = parcels.find(
                                  (p) => p.inboundTracking.toLowerCase() === track.toLowerCase()
                                );
                                return (
                                  <div
                                    key={idx}
                                    className="bg-white border border-gray-200/90 rounded-xl p-2.5 flex items-start gap-2 text-xs"
                                  >
                                    <span className="text-gray-400 font-mono text-[10px] shrink-0 mt-0.5">
                                      #{idx + 1}
                                    </span>
                                    <div className="min-w-0 flex-1">
                                      <span className="font-mono font-bold text-brand-dark block truncate">
                                        {track}
                                      </span>
                                      {originalParcel && (
                                        <span className="text-[11px] text-gray-500 block truncate">
                                          {originalParcel.productTitle}
                                        </span>
                                      )}
                                    </div>
                                  </div>
                                );
                              })
                            ) : (
                              <span className="text-xs text-gray-400 italic">
                                {isRu ? 'Нет привязанных китайских треков' : 'No trackings listed'}
                              </span>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 2: ПРИЁМКА СКЛАДА (ВХОДЯЩИЕ ПОСЫЛКИ / WAREHOUSE CHECK-IN) */}
        {/* ========================================================================= */}
        {activeTab === 'parcels' && (
          <div className="space-y-6 animate-fade-in">
            {/* QUICK CHECK-IN SCANNER / BAR */}
            <div className="bg-gradient-to-r from-blue-900 to-brand-dark text-white rounded-3xl p-5 sm:p-6 shadow-md border border-blue-950">
              <div className="flex items-center gap-2.5 mb-3">
                <Inbox size={22} className="text-amber-400" />
                <h3 className="text-base sm:text-lg font-black tracking-tight">
                  {isRu ? 'Быстрый приём посылки на складе в Китае' : 'Quick Warehouse Check-In'}
                </h3>
              </div>
              <p className="text-xs text-gray-300 mb-4 max-w-2xl">
                {isRu 
                  ? 'Сканируйте или введите китайский трек-номер. Если посылка уже зарегистрирована клиентом — статус мгновенно обновится на «На складе». Если посылка новая — укажите код с коробки (например, DK-8140).' 
                  : 'Scan or enter China tracking number. If parcel was expected, it moves to "In Warehouse". If new, enter client code from box.'}
              </p>

              <form onSubmit={handleQuickCheckIn} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3 items-end">
                {/* China tracking input */}
                <div className="lg:col-span-4">
                  <label className="block text-[11px] font-extrabold uppercase tracking-wider text-gray-300 mb-1">
                    {isRu ? 'Китайский трек-номер *' : 'China Tracking # *'}
                  </label>
                  <input
                    type="text"
                    required
                    value={checkInTracking}
                    onChange={(e) => setCheckInTracking(e.target.value)}
                    placeholder="SF123456789, ZTO987..."
                    className="w-full bg-white/10 border border-white/20 rounded-2xl px-4 py-2.5 text-xs sm:text-sm font-mono font-bold text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400"
                  />
                </div>

                {/* Client code input */}
                <div className="lg:col-span-3">
                  <label className="block text-[11px] font-extrabold uppercase tracking-wider text-gray-300 mb-1">
                    {isRu ? 'Код получателя с коробки' : 'Client Code from box'}
                  </label>
                  <input
                    type="text"
                    value={checkInClientCode}
                    onChange={(e) => setCheckInClientCode(e.target.value)}
                    placeholder="DK-8140, II-8141..."
                    className="w-full bg-white/10 border border-white/20 rounded-2xl px-4 py-2.5 text-xs sm:text-sm font-mono font-bold text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400 uppercase"
                  />
                </div>

                {/* Goods title */}
                <div className="lg:col-span-3">
                  <label className="block text-[11px] font-extrabold uppercase tracking-wider text-gray-300 mb-1">
                    {isRu ? 'Название товара' : 'Product description'}
                  </label>
                  <input
                    type="text"
                    value={checkInProductTitle}
                    onChange={(e) => setCheckInProductTitle(e.target.value)}
                    placeholder={isRu ? 'Одежда, обувь, электроника...' : 'Clothes, shoes, etc.'}
                    className="w-full bg-white/10 border border-white/20 rounded-2xl px-4 py-2.5 text-xs sm:text-sm font-semibold text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400"
                  />
                </div>

                {/* Check In Submit Button */}
                <div className="lg:col-span-2">
                  <button
                    type="submit"
                    disabled={checkInSubmitting}
                    className="w-full bg-amber-400 hover:bg-amber-300 text-brand-dark font-black py-2.5 px-4 rounded-2xl text-xs sm:text-sm transition-all shadow-md active:scale-95 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {checkInSubmitting ? (
                      <Loader2 size={16} className="animate-spin" />
                    ) : (
                      <>
                        <PackageCheck size={18} />
                        <span>{isRu ? 'Принять' : 'Check In'}</span>
                      </>
                    )}
                  </button>
                </div>
              </form>

              {checkInMessage && (
                <div
                  className={`mt-3.5 p-3 rounded-2xl text-xs font-bold flex items-center gap-2 ${
                    checkInMessage.type === 'success'
                      ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                      : 'bg-red-500/20 text-red-300 border border-red-500/30'
                  }`}
                >
                  {checkInMessage.type === 'success' ? <CheckCircle2 size={16} /> : <AlertCircle size={16} />}
                  <span>{checkInMessage.text}</span>
                </div>
              )}
            </div>

            {/* Search and Filters Bar */}
            <div className="bg-white p-4 rounded-3xl border border-gray-200/80 shadow-2xs flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between">
              {/* Search */}
              <div className="relative flex-1">
                <Search size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={isRu ? 'Поиск по китайскому треку, коду клиента (DK-8140) или описанию...' : 'Search by China tracking, client code or description...'}
                  className="w-full bg-gray-50 border border-gray-200 rounded-2xl pl-10 pr-4 py-2.5 text-xs sm:text-sm font-semibold text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-blue/30"
                />
              </div>

              {/* Status Filters */}
              <div className="flex flex-wrap items-center gap-1.5 bg-gray-100 p-1 rounded-2xl text-xs font-bold">
                <button
                  onClick={() => setParcelStatusFilter('all')}
                  className={`px-3 py-1.5 rounded-xl transition-all cursor-pointer ${
                    parcelStatusFilter === 'all' ? 'bg-white text-brand-dark shadow-2xs' : 'text-gray-500 hover:text-brand-dark'
                  }`}
                >
                  {isRu ? 'Все' : 'All'} ({parcels.length})
                </button>
                <button
                  onClick={() => setParcelStatusFilter('expected')}
                  className={`px-3 py-1.5 rounded-xl transition-all cursor-pointer ${
                    parcelStatusFilter === 'expected' ? 'bg-amber-400 text-brand-dark shadow-2xs' : 'text-gray-500 hover:text-brand-dark'
                  }`}
                >
                  {isRu ? 'Ожидается' : 'Expected'} ({parcels.filter((p) => p.status === 'expected').length})
                </button>
                <button
                  onClick={() => setParcelStatusFilter('arrived')}
                  className={`px-3 py-1.5 rounded-xl transition-all cursor-pointer ${
                    parcelStatusFilter === 'arrived' ? 'bg-blue-600 text-white shadow-2xs' : 'text-gray-500 hover:text-brand-dark'
                  }`}
                >
                  {isRu ? 'На складе' : 'In Warehouse'} ({parcels.filter((p) => p.status === 'arrived').length})
                </button>
                <button
                  onClick={() => setParcelStatusFilter('consolidated')}
                  className={`px-3 py-1.5 rounded-xl transition-all cursor-pointer ${
                    parcelStatusFilter === 'consolidated' ? 'bg-purple-600 text-white shadow-2xs' : 'text-gray-500 hover:text-brand-dark'
                  }`}
                >
                  {isRu ? 'В сборке' : 'In Batch'} ({parcels.filter((p) => p.status === 'consolidated').length})
                </button>
              </div>
            </div>

            {/* Parcels Table */}
            <div className="bg-white rounded-3xl border border-gray-200/80 shadow-2xs overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="bg-gray-100/70 border-b border-gray-200 text-gray-500 font-extrabold uppercase tracking-wider text-[11px]">
                      <th className="py-3 px-4">{isRu ? 'Китайский трек' : 'China Tracking'}</th>
                      <th className="py-3 px-4">{isRu ? 'Клиент' : 'Client'}</th>
                      <th className="py-3 px-4">{isRu ? 'Описание товара' : 'Product'}</th>
                      <th className="py-3 px-4">{isRu ? 'Склад' : 'Warehouse'}</th>
                      <th className="py-3 px-4">{isRu ? 'Статус' : 'Status'}</th>
                      <th className="py-3 px-4">{isRu ? 'Сборка' : 'Batch'}</th>
                      <th className="py-3 px-4 text-right">{isRu ? 'Действия' : 'Actions'}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {filteredParcels.length === 0 ? (
                      <tr>
                        <td colSpan={7} className="py-12 text-center text-gray-400">
                          {isRu ? 'Посылки не найдены' : 'No parcels found'}
                        </td>
                      </tr>
                    ) : (
                      filteredParcels.map((parcel) => {
                        const statusInfo = getInboundStatusBadge(parcel.status);
                        const matchedUser = users.find(
                          (u) => u.clientCode.toUpperCase() === parcel.clientCode.toUpperCase()
                        );

                        return (
                          <tr key={parcel.id} className="hover:bg-blue-50/40 transition-colors">
                            {/* Tracking */}
                            <td className="py-3.5 px-4 font-mono font-bold text-brand-dark">
                              {parcel.inboundTracking}
                            </td>

                            {/* Client */}
                            <td className="py-3.5 px-4">
                              <span className="font-mono font-black text-amber-700 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-lg mr-1.5">
                                {parcel.clientCode}
                              </span>
                              {matchedUser && (
                                <span className="text-gray-500 text-[11px] truncate max-w-[120px] inline-block align-bottom">
                                  {matchedUser.fullName || matchedUser.email}
                                </span>
                              )}
                            </td>

                            {/* Title */}
                            <td className="py-3.5 px-4 font-semibold text-brand-dark max-w-xs truncate">
                              {parcel.productTitle}
                            </td>

                            {/* Warehouse */}
                            <td className="py-3.5 px-4 text-gray-500 text-[11px]">
                              {WAREHOUSES.find((w) => w.id === parcel.warehouseDestination)?.badgeRu || parcel.warehouseDestination}
                            </td>

                            {/* Status */}
                            <td className="py-3.5 px-4">
                              <span className={`inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${statusInfo.bg}`}>
                                {statusInfo.label}
                              </span>
                            </td>

                            {/* Batch # */}
                            <td className="py-3.5 px-4 font-mono text-[11px]">
                              {parcel.shipmentNumber ? (
                                <span className="bg-purple-100 text-purple-800 px-2 py-0.5 rounded font-black">
                                  #{parcel.shipmentNumber}
                                </span>
                              ) : (
                                <span className="text-gray-300">—</span>
                              )}
                            </td>

                            {/* Actions */}
                            <td className="py-3.5 px-4 text-right">
                              <div className="flex items-center justify-end gap-1.5">
                                {/* If expected -> 1-click accept to warehouse */}
                                {parcel.status === 'expected' && (
                                  <button
                                    onClick={async () => {
                                      await updateParcel(parcel.id, { status: 'arrived' });
                                      showToast(isRu ? 'Посылка принята на склад' : 'Parcel marked Arrived');
                                    }}
                                    className="px-2.5 py-1 rounded-xl bg-blue-100 hover:bg-blue-200 text-blue-800 text-[11px] font-bold transition-all cursor-pointer"
                                  >
                                    {isRu ? 'Принять' : 'Accept'}
                                  </button>
                                )}

                                <button
                                  onClick={() => handleOpenEditParcel(parcel)}
                                  className="p-1.5 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-600 transition-all cursor-pointer"
                                  title={isRu ? 'Редактировать' : 'Edit'}
                                >
                                  <Edit3 size={14} />
                                </button>

                                <button
                                  onClick={() => handleDeleteParcel(parcel.id)}
                                  className="p-1.5 rounded-lg bg-red-50 hover:bg-red-100 text-red-600 transition-all cursor-pointer"
                                  title={isRu ? 'Удалить' : 'Delete'}
                                >
                                  <Trash2 size={14} />
                                </button>
                              </div>
                            </td>
                          </tr>
                        );
                      })
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 3: КЛИЕНТЫ (CRM / CLIENTS) */}
        {/* ========================================================================= */}
        {activeTab === 'clients' && (
          <div className="space-y-6 animate-fade-in">
            {/* Search */}
            <div className="bg-white p-4 rounded-3xl border border-gray-200/80 shadow-2xs flex flex-col sm:flex-row gap-3 items-center justify-between">
              <div className="relative flex-1 w-full">
                <Search size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={isRu ? 'Поиск клиентов по коду (DK-8140), ФИО, email или телефону...' : 'Search clients by code, name, email or phone...'}
                  className="w-full bg-gray-50 border border-gray-200 rounded-2xl pl-10 pr-4 py-2.5 text-xs sm:text-sm font-semibold text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-blue/30"
                />
              </div>
              <div className="text-xs font-bold text-gray-400 shrink-0">
                {isRu ? `Всего: ${filteredClients.length} пользователей` : `Total: ${filteredClients.length} users`}
              </div>
            </div>

            {/* Clients Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredClients.length === 0 ? (
                <div className="col-span-full py-12 text-center text-gray-400 bg-white rounded-3xl border border-gray-200">
                  {isRu ? 'Пользователи не найдены' : 'No clients found'}
                </div>
              ) : (
                filteredClients.map((client) => {
                  const rawPhone = client.phone ? client.phone.replace(/[^0-9]/g, '') : '';
                  const waUrl = rawPhone ? `https://wa.me/${rawPhone}` : null;

                  return (
                    <div
                      key={client.uid}
                      className="bg-white rounded-3xl border border-gray-200/80 p-5 shadow-2xs space-y-4 hover:border-gray-300 transition-all flex flex-col justify-between"
                    >
                      <div className="space-y-3">
                        {/* Header: Code & Role */}
                        <div className="flex items-center justify-between">
                          <span className="font-mono font-black text-sm bg-amber-100 text-amber-900 border border-amber-300 px-3 py-1 rounded-xl">
                            {client.clientCode}
                          </span>
                          <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                            {new Date(client.createdAt).toLocaleDateString()}
                          </span>
                        </div>

                        {/* Name & Email */}
                        <div>
                          <h4 className="font-extrabold text-base text-brand-dark leading-tight">
                            {client.fullName || (isRu ? 'Без имени' : 'Unnamed client')}
                          </h4>
                          <span className="text-xs text-gray-500 font-medium block mt-0.5">{client.email}</span>
                          {client.phone && (
                            <span className="text-xs text-brand-blue font-bold block mt-0.5">{client.phone}</span>
                          )}
                        </div>

                        {/* Shipping address */}
                        {client.shippingAddress && (
                          <div className="bg-gray-50 p-2.5 rounded-xl border border-gray-200/60 text-[11px] text-gray-600 leading-snug">
                            <span className="text-gray-400 font-bold block text-[10px] uppercase mb-0.5">
                              {isRu ? 'Адрес доставки:' : 'Shipping Address:'}
                            </span>
                            {client.shippingAddress}
                          </div>
                        )}

                        {/* Stats counters */}
                        <div className="grid grid-cols-2 gap-2 pt-1 text-xs">
                          <div className="bg-blue-50 border border-blue-200/60 rounded-xl p-2 text-center">
                            <span className="text-blue-600 font-bold text-[10px] uppercase block">
                              {isRu ? 'На складе' : 'In Warehouse'}
                            </span>
                            <span className="text-base font-black text-blue-950">
                              {client.arrivedParcelsCount} {isRu ? 'шт.' : 'pcs'}
                            </span>
                          </div>
                          <div className="bg-purple-50 border border-purple-200/60 rounded-xl p-2 text-center">
                            <span className="text-purple-600 font-bold text-[10px] uppercase block">
                              {isRu ? 'Сборок' : 'Batches'}
                            </span>
                            <span className="text-base font-black text-purple-950">
                              {client.totalShipmentsCount}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Footer Actions */}
                      <div className="pt-3 border-t border-gray-100 flex items-center gap-2">
                        {client.arrivedParcelsCount > 0 && (
                          <button
                            onClick={() => {
                              handleSelectClient(client.clientCode);
                              setIsCreateShipmentOpen(true);
                            }}
                            className="flex-1 bg-amber-500 hover:bg-amber-400 text-brand-dark font-black py-2 px-3 rounded-xl text-xs transition-all shadow-2xs active:scale-95 flex items-center justify-center gap-1.5 cursor-pointer"
                          >
                            <Plus size={14} />
                            <span>{isRu ? 'Собрать партию' : 'Create Batch'}</span>
                          </button>
                        )}

                        {waUrl && (
                          <a
                            href={waUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-700 transition-all cursor-pointer"
                            title="WhatsApp"
                          >
                            <MessageCircle size={16} />
                          </a>
                        )}
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        )}
      </div>

      {/* ========================================================================= */}
      {/* MODAL 1: СОЗДАНИЕ ПАРТИИ (CREATE SHIPMENT / CONSOLIDATION MODAL) */}
      {/* ========================================================================= */}
      {isCreateShipmentOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-brand-dark/70 backdrop-blur-md animate-fade-in"
          onClick={() => setIsCreateShipmentOpen(false)}
        >
          <div
            className="bg-white w-full max-w-2xl rounded-[32px] p-6 sm:p-8 shadow-2xl relative overflow-hidden max-h-[92vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-4 border-b border-gray-100 mb-5">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-2xl bg-amber-400 text-brand-dark flex items-center justify-center shadow-sm">
                  <Layers size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-black text-brand-dark">
                    {isRu ? 'Формирование сборной партии' : 'Create Consolidated Batch'}
                  </h3>
                  <p className="text-xs text-gray-500">
                    {isRu ? 'Объединение поступивших посылок клиента в один мастер-бокс' : 'Pack arrived parcels into single master box'}
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsCreateShipmentOpen(false)}
                className="w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-500 hover:text-brand-dark transition-all cursor-pointer"
              >
                <X size={18} />
              </button>
            </div>

            {/* Error banner */}
            {shipmentError && (
              <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-2xl text-red-600 text-xs font-bold flex items-center gap-2">
                <AlertCircle size={16} className="shrink-0" />
                <span>{shipmentError}</span>
              </div>
            )}

            {/* Scrollable Form Body */}
            <form onSubmit={handleCreateShipmentSubmit} className="overflow-y-auto pr-1 space-y-4 flex-1">
              {/* Client Selection */}
              <div>
                <label className="block text-xs font-extrabold uppercase tracking-wider text-gray-500 mb-1.5">
                  {isRu ? 'Клиент (Код получателя) *' : 'Client Code *'}
                </label>
                <select
                  required
                  value={shipmentClientCode}
                  onChange={(e) => handleSelectClient(e.target.value)}
                  className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-4 py-3 text-xs sm:text-sm font-bold text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-blue/30 cursor-pointer"
                >
                  <option value="">{isRu ? '— Выберите клиента —' : '— Select Client —'}</option>
                  {users.map((u) => {
                    const arrivedCount = parcels.filter(
                      (p) => p.clientCode.toUpperCase() === u.clientCode.toUpperCase() && p.status === 'arrived'
                    ).length;
                    return (
                      <option key={u.uid} value={u.clientCode}>
                        {u.clientCode} — {u.fullName || u.email} ({arrivedCount} {isRu ? 'на складе' : 'in warehouse'})
                      </option>
                    );
                  })}
                </select>
              </div>

              {/* Parcels Checklist */}
              {shipmentClientCode && (
                <div className="bg-gray-50 p-4 rounded-2xl border border-gray-200/80 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-gray-600">
                      {isRu ? 'Посылки клиента на складе:' : 'Arrived Parcels:'}
                    </span>
                    {clientAvailableParcels.length > 0 && (
                      <button
                        type="button"
                        onClick={handleSelectAllClientParcels}
                        className="text-xs font-bold text-brand-blue hover:underline cursor-pointer"
                      >
                        {selectedParcelIds.length === clientAvailableParcels.length
                          ? (isRu ? 'Снять выделение' : 'Deselect all')
                          : (isRu ? 'Выбрать все' : 'Select all')}
                      </button>
                    )}
                  </div>

                  {clientAvailableParcels.length === 0 ? (
                    <p className="text-xs text-amber-700 italic">
                      {isRu ? 'У этого клиента пока нет посылок в статусе «На складе».' : 'No arrived parcels for this client.'}
                    </p>
                  ) : (
                    <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
                      {clientAvailableParcels.map((parcel) => {
                        const isChecked = selectedParcelIds.includes(parcel.id);
                        return (
                          <label
                            key={parcel.id}
                            className={`flex items-start gap-3 p-2.5 rounded-xl border text-xs cursor-pointer transition-all ${
                              isChecked
                                ? 'bg-blue-50/70 border-blue-300 text-brand-dark'
                                : 'bg-white border-gray-200 text-gray-600'
                            }`}
                          >
                            <input
                              type="checkbox"
                              checked={isChecked}
                              onChange={() => handleToggleParcelSelection(parcel.id)}
                              className="mt-0.5 rounded text-brand-blue focus:ring-0 cursor-pointer"
                            />
                            <div className="min-w-0 flex-1">
                              <span className="font-mono font-bold block">{parcel.inboundTracking}</span>
                              <span className="text-[11px] text-gray-500 block truncate">{parcel.productTitle}</span>
                            </div>
                          </label>
                        );
                      })}
                    </div>
                  )}
                  <span className="text-[11px] font-bold text-gray-400 block">
                    {isRu ? `Выбрано: ${selectedParcelIds.length} шт.` : `Selected: ${selectedParcelIds.length}`}
                  </span>
                </div>
              )}

              {/* Weight & Cost in CNY / USD */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {/* Weight */}
                <div>
                  <label className="block text-xs font-extrabold uppercase tracking-wider text-gray-500 mb-1.5">
                    {isRu ? 'Общий вес партии (кг) *' : 'Total Weight (kg) *'}
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    required
                    value={shipmentWeight}
                    onChange={(e) => setShipmentWeight(e.target.value)}
                    placeholder="8.5"
                    className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-4 py-2.5 text-xs sm:text-sm font-bold text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-blue/30"
                  />
                </div>

                {/* Cost in CNY */}
                <div>
                  <label className="block text-xs font-extrabold uppercase tracking-wider text-gray-500 mb-1.5">
                    {isRu ? 'Стоимость в Юанях (¥) *' : 'Cost in CNY (¥) *'}
                  </label>
                  <input
                    type="number"
                    required
                    value={shipmentCostCny}
                    onChange={(e) => handleCnyChange(e.target.value)}
                    placeholder="680"
                    className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-4 py-2.5 text-xs sm:text-sm font-bold text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-blue/30"
                  />
                </div>

                {/* Cost in USD */}
                <div>
                  <label className="block text-xs font-extrabold uppercase tracking-wider text-gray-500 mb-1.5">
                    {isRu ? 'Эквивалент в $ (USD)' : 'Equivalent ($ USD)'}
                  </label>
                  <input
                    type="number"
                    value={shipmentCostUsd}
                    onChange={(e) => setShipmentCostUsd(e.target.value)}
                    placeholder="95"
                    className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-4 py-2.5 text-xs sm:text-sm font-bold text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-blue/30"
                  />
                </div>
              </div>

              {/* Destination warehouse & Final Mile Tracking */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-extrabold uppercase tracking-wider text-gray-500 mb-1.5">
                    {isRu ? 'Склад отправления' : 'Departure Hub'}
                  </label>
                  <select
                    value={shipmentWarehouse}
                    onChange={(e) => setShipmentWarehouse(e.target.value as WarehouseDestination)}
                    className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-3 py-2.5 text-xs font-semibold text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-blue/30"
                  >
                    {WAREHOUSES.map((wh) => (
                      <option key={wh.id} value={wh.id}>
                        {wh.titleRu}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-extrabold uppercase tracking-wider text-gray-500 mb-1.5">
                    {isRu ? 'Трек-номер СДЭК / Доставки' : 'CDEK / Outbound Tracking'}
                  </label>
                  <input
                    type="text"
                    value={shipmentOutboundTracking}
                    onChange={(e) => setShipmentOutboundTracking(e.target.value)}
                    placeholder="123456789 (СДЭК)"
                    className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-3 py-2.5 text-xs font-mono font-bold text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-blue/30"
                  />
                </div>
              </div>

              {/* Summary Description */}
              <div>
                <label className="block text-xs font-extrabold uppercase tracking-wider text-gray-500 mb-1.5">
                  {isRu ? 'Краткое описание содержимого' : 'Product Summary'}
                </label>
                <input
                  type="text"
                  value={shipmentSummary}
                  onChange={(e) => setShipmentSummary(e.target.value)}
                  placeholder={isRu ? 'Одежда, обувь, чай (4 посылки)' : 'Goods description'}
                  className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-4 py-2.5 text-xs font-semibold text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-blue/30"
                />
              </div>

              {/* Photo on scales */}
              <div>
                <label className="block text-xs font-extrabold uppercase tracking-wider text-gray-500 mb-1.5">
                  {isRu ? 'Фото коробки на весах (рекомендуется)' : 'Photo on Scales (Recommended)'}
                </label>
                <input
                  type="file"
                  accept="image/*"
                  ref={photoInputRef}
                  onChange={(e) => handlePhotoUpload(e, false)}
                  className="hidden"
                />

                {shipmentPhotoUrl ? (
                  <div className="flex items-center gap-3 bg-gray-50 p-2.5 rounded-2xl border border-gray-200">
                    <img src={shipmentPhotoUrl} alt="Scales" className="w-16 h-16 object-cover rounded-xl border border-gray-200" />
                    <div className="flex-1 text-xs">
                      <span className="font-bold text-emerald-700 block">✓ {isRu ? 'Фото загружено и сжато' : 'Photo attached'}</span>
                      <button
                        type="button"
                        onClick={() => setShipmentPhotoUrl('')}
                        className="text-red-500 hover:underline font-bold text-[11px] mt-1 cursor-pointer"
                      >
                        {isRu ? 'Удалить фото' : 'Remove photo'}
                      </button>
                    </div>
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={() => photoInputRef.current?.click()}
                    className="w-full border-2 border-dashed border-gray-200 hover:border-brand-blue p-3.5 rounded-2xl text-xs font-bold text-gray-500 hover:text-brand-blue flex items-center justify-center gap-2 transition-all cursor-pointer"
                  >
                    <Camera size={16} />
                    <span>{isRu ? 'Загрузить фото коробки / весов' : 'Upload photo of box on scales'}</span>
                  </button>
                )}
              </div>

              {/* Submit Buttons */}
              <div className="pt-3 border-t border-gray-100 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsCreateShipmentOpen(false)}
                  className="px-5 py-2.5 rounded-2xl text-xs font-bold text-gray-500 hover:bg-gray-100 transition-all cursor-pointer"
                >
                  {isRu ? 'Отмена' : 'Cancel'}
                </button>
                <button
                  type="submit"
                  disabled={isSubmittingShipment}
                  className="bg-brand-dark hover:bg-brand-blue text-white font-black px-6 py-3 rounded-2xl text-xs sm:text-sm shadow-md transition-all active:scale-95 flex items-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isSubmittingShipment ? (
                    <Loader2 size={16} className="animate-spin" />
                  ) : (
                    <>
                      <Check size={16} />
                      <span>{isRu ? 'Сформировать партию' : 'Create Batch'}</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* MODAL 2: РЕДАКТИРОВАНИЕ ПАРТИИ (EDIT SHIPMENT MODAL) */}
      {/* ========================================================================= */}
      {editingShipment && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-brand-dark/70 backdrop-blur-md animate-fade-in"
          onClick={() => setEditingShipment(null)}
        >
          <div
            className="bg-white w-full max-w-lg rounded-[32px] p-6 sm:p-8 shadow-2xl relative overflow-hidden max-h-[92vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-gray-100 mb-4">
              <h3 className="text-base font-black text-brand-dark">
                {isRu ? `Редактирование партии #${editingShipment.shipmentNumber}` : `Edit Batch #${editingShipment.shipmentNumber}`}
              </h3>
              <button
                onClick={() => setEditingShipment(null)}
                className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:text-brand-dark cursor-pointer"
              >
                <X size={16} />
              </button>
            </div>

            <form onSubmit={handleSaveEditShipment} className="overflow-y-auto space-y-3.5 pr-1 text-xs">
              <div>
                <label className="block font-bold text-gray-500 mb-1">{isRu ? 'Общий вес (кг)' : 'Weight (kg)'}</label>
                <input
                  type="number"
                  step="0.1"
                  value={editWeight}
                  onChange={(e) => setEditWeight(e.target.value)}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 font-bold"
                />
              </div>

              <div>
                <label className="block font-bold text-gray-500 mb-1">{isRu ? 'Стоимость (¥ или $)' : 'Shipping Cost'}</label>
                <input
                  type="text"
                  value={editCost}
                  onChange={(e) => setEditCost(e.target.value)}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 font-bold"
                />
              </div>

              <div>
                <label className="block font-bold text-gray-500 mb-1">{isRu ? 'Трек СДЭК' : 'Outbound Tracking'}</label>
                <input
                  type="text"
                  value={editOutboundTracking}
                  onChange={(e) => setEditOutboundTracking(e.target.value)}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 font-mono font-bold"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-gray-500 mb-1">{isRu ? 'Статус доставки' : 'Status'}</label>
                  <select
                    value={editStatus}
                    onChange={(e) => setEditStatus(e.target.value as OutboundStatus)}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 font-bold"
                  >
                    <option value="packed">{isRu ? 'Упаковано' : 'Packed'}</option>
                    <option value="paid">{isRu ? 'Оплачено' : 'Paid'}</option>
                    <option value="in_transit">{isRu ? 'В пути' : 'In Transit'}</option>
                    <option value="delivered">{isRu ? 'Доставлено' : 'Delivered'}</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-gray-500 mb-1">{isRu ? 'Оплата' : 'Payment'}</label>
                  <select
                    value={editPaymentStatus}
                    onChange={(e) => setEditPaymentStatus(e.target.value as PaymentStatus)}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 font-bold"
                  >
                    <option value="pending">{isRu ? 'Ждёт оплаты' : 'Pending'}</option>
                    <option value="paid">{isRu ? 'Оплачено' : 'Paid'}</option>
                  </select>
                </div>
              </div>

              {/* Photo on scales */}
              <div>
                <label className="block font-bold text-gray-500 mb-1">{isRu ? 'Фото на весах' : 'Photo on scales'}</label>
                <input
                  type="file"
                  accept="image/*"
                  ref={editPhotoInputRef}
                  onChange={(e) => handlePhotoUpload(e, true)}
                  className="hidden"
                />
                {editPhotoUrl ? (
                  <div className="flex items-center gap-3 bg-gray-50 p-2 rounded-xl border border-gray-200">
                    <img src={editPhotoUrl} alt="Scales" className="w-14 h-14 object-cover rounded-lg" />
                    <button
                      type="button"
                      onClick={() => setEditPhotoUrl('')}
                      className="text-red-500 font-bold hover:underline cursor-pointer"
                    >
                      {isRu ? 'Удалить' : 'Remove'}
                    </button>
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={() => editPhotoInputRef.current?.click()}
                    className="w-full border border-dashed border-gray-200 p-2.5 rounded-xl font-bold text-gray-500 hover:text-brand-blue cursor-pointer"
                  >
                    + {isRu ? 'Прикрепить фото' : 'Attach photo'}
                  </button>
                )}
              </div>

              <div className="pt-3 border-t border-gray-100 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setEditingShipment(null)}
                  className="px-4 py-2 rounded-xl font-bold text-gray-500 hover:bg-gray-100 cursor-pointer"
                >
                  {isRu ? 'Отмена' : 'Cancel'}
                </button>
                <button
                  type="submit"
                  className="bg-brand-dark hover:bg-brand-blue text-white font-bold px-5 py-2 rounded-xl cursor-pointer"
                >
                  {isRu ? 'Сохранить' : 'Save'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* MODAL 3: РЕДАКТИРОВАНИЕ ПОСЫЛКИ (EDIT PARCEL MODAL) */}
      {/* ========================================================================= */}
      {editingParcel && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-brand-dark/70 backdrop-blur-md animate-fade-in"
          onClick={() => setEditingParcel(null)}
        >
          <div
            className="bg-white w-full max-w-md rounded-[32px] p-6 shadow-2xl relative overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-gray-100 mb-4">
              <h3 className="text-base font-black text-brand-dark">
                {isRu ? 'Редактирование посылки' : 'Edit Parcel'}
              </h3>
              <button
                onClick={() => setEditingParcel(null)}
                className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:text-brand-dark cursor-pointer"
              >
                <X size={16} />
              </button>
            </div>

            <form onSubmit={handleSaveEditParcel} className="space-y-3.5 text-xs">
              <div>
                <label className="block font-bold text-gray-500 mb-1">{isRu ? 'Китайский трек' : 'Tracking'}</label>
                <input
                  type="text"
                  required
                  value={editParcelTracking}
                  onChange={(e) => setEditParcelTracking(e.target.value)}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 font-mono font-bold"
                />
              </div>

              <div>
                <label className="block font-bold text-gray-500 mb-1">{isRu ? 'Код клиента' : 'Client Code'}</label>
                <input
                  type="text"
                  required
                  value={editParcelClientCode}
                  onChange={(e) => setEditParcelClientCode(e.target.value)}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 font-mono font-bold uppercase"
                />
              </div>

              <div>
                <label className="block font-bold text-gray-500 mb-1">{isRu ? 'Название товара' : 'Title'}</label>
                <input
                  type="text"
                  value={editParcelTitle}
                  onChange={(e) => setEditParcelTitle(e.target.value)}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 font-semibold"
                />
              </div>

              <div>
                <label className="block font-bold text-gray-500 mb-1">{isRu ? 'Статус' : 'Status'}</label>
                <select
                  value={editParcelStatus}
                  onChange={(e) => setEditParcelStatus(e.target.value as ParcelStatus)}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 font-bold"
                >
                  <option value="expected">{isRu ? 'Ожидается' : 'Expected'}</option>
                  <option value="arrived">{isRu ? 'На складе' : 'In Warehouse'}</option>
                  <option value="consolidated">{isRu ? 'В сборке' : 'In Batch'}</option>
                </select>
              </div>

              <div className="pt-3 border-t border-gray-100 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setEditingParcel(null)}
                  className="px-4 py-2 rounded-xl font-bold text-gray-500 hover:bg-gray-100 cursor-pointer"
                >
                  {isRu ? 'Отмена' : 'Cancel'}
                </button>
                <button
                  type="submit"
                  className="bg-brand-dark hover:bg-brand-blue text-white font-bold px-5 py-2 rounded-xl cursor-pointer"
                >
                  {isRu ? 'Сохранить' : 'Save'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* LIGHTBOX FOR FULL PHOTO */}
      {/* ========================================================================= */}
      {lightboxPhotoUrl && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setLightboxPhotoUrl(null)}
        >
          <div className="relative max-w-3xl max-h-[90vh]">
            <img
              src={lightboxPhotoUrl}
              alt="Scales"
              className="max-w-full max-h-[85vh] object-contain rounded-2xl shadow-2xl"
            />
            <button
              onClick={() => setLightboxPhotoUrl(null)}
              className="absolute -top-12 right-0 text-white hover:text-amber-400 font-bold flex items-center gap-1.5 cursor-pointer"
            >
              <X size={20} />
              <span>{isRu ? 'Закрыть' : 'Close'}</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

import React, { useState, useEffect, useRef } from 'react';
import { 
  X, 
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
  ExternalLink,
  ChevronDown,
  AlertCircle,
  Plus,
  Camera,
  Image as ImageIcon,
  DollarSign,
  CreditCard,
  Layers,
  Check,
  Upload
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
  deleteShipment
} from '../services/parcelService';
import { compressImageFile } from '../utils/imageUtils';
import { Language } from '../utils/translations';

interface AdminDashboardModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
}

export const AdminDashboardModal: React.FC<AdminDashboardModalProps> = ({
  isOpen,
  onClose,
  language
}) => {
  const { user, isAdmin, logout } = useAuth();
  const isRu = language === 'ru';

  const [activeTab, setActiveTab] = useState<'parcels' | 'shipments' | 'users'>('shipments');
  const [parcels, setParcels] = useState<Parcel[]>([]);
  const [shipments, setShipments] = useState<Shipment[]>([]);
  const [users, setUsers] = useState<UserProfile[]>([]);
  const [loading, setLoading] = useState(true);

  // Filters & Search
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [warehouseFilter, setWarehouseFilter] = useState<string>('all');

  // Edit Parcel Modal state
  const [editingParcel, setEditingParcel] = useState<Parcel | null>(null);
  const [editStatus, setEditStatus] = useState<ParcelStatus>('expected');
  const [editOutboundTracking, setEditOutboundTracking] = useState('');
  const [editShippingCost, setEditShippingCost] = useState('');
  const [editNotes, setEditNotes] = useState('');
  const [isSaving, setIsSaving] = useState(false);
  const [saveSuccessMsg, setSaveSuccessMsg] = useState<string | null>(null);

  // Consolidation (Create Shipment) Modal state
  const [isConsolidationOpen, setIsConsolidationOpen] = useState(false);
  const [selectedClientCode, setSelectedClientCode] = useState<string>('');
  const [selectedParcelIds, setSelectedParcelIds] = useState<string[]>([]);
  const [consWeight, setConsWeight] = useState<string>('');
  const [consCost, setConsCost] = useState<string>('');
  const [consPaymentStatus, setConsPaymentStatus] = useState<PaymentStatus>('pending');
  const [consOutboundStatus, setConsOutboundStatus] = useState<OutboundStatus>('packed');
  const [consOutboundTrack, setConsOutboundTrack] = useState<string>('');
  const [consPhotoUrl, setConsPhotoUrl] = useState<string>('');
  const [consNotes, setConsNotes] = useState<string>('');
  const [consWarehouse, setConsWarehouse] = useState<WarehouseDestination>('cis_cargo');
  const [isCompressingPhoto, setIsCompressingPhoto] = useState(false);
  const [isCreatingShipment, setIsCreatingShipment] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Edit Shipment Modal state
  const [editingShipment, setEditingShipment] = useState<Shipment | null>(null);
  const [editShipmentWeight, setEditShipmentWeight] = useState<string>('');
  const [editShipmentCost, setEditShipmentCost] = useState<string>('');
  const [editShipmentPayment, setEditShipmentPayment] = useState<PaymentStatus>('pending');
  const [editShipmentStatus, setEditShipmentStatus] = useState<OutboundStatus>('packed');
  const [editShipmentTrack, setEditShipmentTrack] = useState<string>('');
  const [editShipmentPhotoUrl, setEditShipmentPhotoUrl] = useState<string>('');
  const [editShipmentNotes, setEditShipmentNotes] = useState<string>('');
  const editShipmentFileRef = useRef<HTMLInputElement>(null);

  // Lightbox for photos
  const [previewPhotoUrl, setPreviewPhotoUrl] = useState<string | null>(null);

  // Realtime subscriptions
  useEffect(() => {
    if (!isOpen || !isAdmin) return;

    setLoading(true);
    const unsubParcels = subscribeToAllParcels(
      (data) => {
        setParcels(data);
        setLoading(false);
      },
      (err) => {
        console.error('Admin parcels error:', err);
        setLoading(false);
      }
    );

    const unsubShipments = subscribeToAllShipments(
      (data) => {
        setShipments(data);
      },
      (err) => {
        console.error('Admin shipments error:', err);
      }
    );

    getAllUsers().then(setUsers);

    return () => {
      unsubParcels();
      unsubShipments();
    };
  }, [isOpen, isAdmin]);

  if (!isOpen) return null;

  if (!isAdmin) {
    return (
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-brand-dark/80 backdrop-blur-md">
        <div className="bg-white p-8 rounded-3xl max-w-md text-center">
          <ShieldAlert size={48} className="text-red-500 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-brand-dark mb-2">
            {isRu ? 'Доступ ограничен' : 'Access Restricted'}
          </h3>
          <p className="text-sm text-gray-500 mb-6">
            {isRu ? 'Панель администратора доступна только для авторизованных администраторов.' : 'This panel is for administrators only.'}
          </p>
          <button
            onClick={onClose}
            className="w-full bg-brand-dark text-white py-3 rounded-xl font-bold cursor-pointer"
          >
            {isRu ? 'Закрыть' : 'Close'}
          </button>
        </div>
      </div>
    );
  }

  // Handle Photo selection with automatic compression
  const handlePhotoSelect = async (e: React.ChangeEvent<HTMLInputElement>, isForEdit = false) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsCompressingPhoto(true);
    try {
      const compressedDataUrl = await compressImageFile(file, 1280, 0.82);
      if (isForEdit) {
        setEditShipmentPhotoUrl(compressedDataUrl);
      } else {
        setConsPhotoUrl(compressedDataUrl);
      }
    } catch (err) {
      console.error('Failed to compress image:', err);
      alert(isRu ? 'Не удалось обработать фото' : 'Failed to process image');
    } finally {
      setIsCompressingPhoto(false);
    }
  };

  // Open Consolidation Modal
  const handleOpenConsolidation = () => {
    setSelectedClientCode('');
    setSelectedParcelIds([]);
    setConsWeight('');
    setConsCost('');
    setConsPaymentStatus('pending');
    setConsOutboundStatus('packed');
    setConsOutboundTrack('');
    setConsPhotoUrl('');
    setConsNotes('');
    setConsWarehouse('cis_cargo');
    setIsConsolidationOpen(true);
  };

  // Arrived parcels ready for consolidation
  const arrivedParcelsForClient = parcels.filter(
    p => p.clientCode === selectedClientCode && p.status === 'arrived'
  );

  const handleToggleParcelSelection = (id: string) => {
    if (selectedParcelIds.includes(id)) {
      setSelectedParcelIds(selectedParcelIds.filter(x => x !== id));
    } else {
      setSelectedParcelIds([...selectedParcelIds, id]);
    }
  };

  const handleSelectAllClientParcels = () => {
    if (selectedParcelIds.length === arrivedParcelsForClient.length) {
      setSelectedParcelIds([]);
    } else {
      setSelectedParcelIds(arrivedParcelsForClient.map(p => p.id));
    }
  };

  // Save new Consolidated Shipment
  const handleCreateShipmentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedClientCode) {
      alert(isRu ? 'Выберите клиента' : 'Select a client');
      return;
    }
    if (selectedParcelIds.length === 0) {
      alert(isRu ? 'Выберите хотя бы одну посылку для сборки' : 'Select at least one package to consolidate');
      return;
    }

    const clientUser = users.find(u => u.clientCode === selectedClientCode);
    const selectedParcelObjects = parcels.filter(p => selectedParcelIds.includes(p.id));
    const inboundTrackings = selectedParcelObjects.map(p => p.inboundTracking);
    const productSummary = selectedParcelObjects.map(p => p.productTitle).filter(Boolean).join(', ') || 'Сборный груз';

    setIsCreatingShipment(true);
    try {
      await createShipment({
        userId: clientUser?.uid || selectedParcelObjects[0]?.userId || '',
        clientCode: selectedClientCode,
        inboundTrackings,
        parcelIds: selectedParcelIds,
        productSummary,
        warehouseDestination: consWarehouse,
        weight: parseFloat(consWeight) || 0,
        shippingCost: consCost.trim(),
        paymentStatus: consPaymentStatus,
        status: consOutboundStatus,
        outboundTracking: consOutboundTrack.trim(),
        photoUrl: consPhotoUrl,
        notes: consNotes.trim()
      });

      setIsConsolidationOpen(false);
      setActiveTab('shipments');
    } catch (err) {
      console.error('Error creating shipment:', err);
      alert(isRu ? 'Ошибка при создании отправления' : 'Error creating shipment');
    } finally {
      setIsCreatingShipment(false);
    }
  };

  // Open Edit Shipment
  const handleStartEditShipment = (shipment: Shipment) => {
    setEditingShipment(shipment);
    setEditShipmentWeight(shipment.weight ? String(shipment.weight) : '');
    setEditShipmentCost(shipment.shippingCost || '');
    setEditShipmentPayment(shipment.paymentStatus || 'pending');
    setEditShipmentStatus(shipment.status || 'packed');
    setEditShipmentTrack(shipment.outboundTracking || '');
    setEditShipmentPhotoUrl(shipment.photoUrl || '');
    setEditShipmentNotes(shipment.notes || '');
  };

  // Save Edit Shipment
  const handleSaveShipmentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingShipment) return;

    setIsSaving(true);
    try {
      await updateShipment(editingShipment.id, {
        weight: parseFloat(editShipmentWeight) || 0,
        shippingCost: editShipmentCost.trim(),
        paymentStatus: editShipmentPayment,
        status: editShipmentStatus,
        outboundTracking: editShipmentTrack.trim(),
        photoUrl: editShipmentPhotoUrl,
        notes: editShipmentNotes.trim()
      });

      setEditingShipment(null);
    } catch (err) {
      console.error('Error updating shipment:', err);
      alert(isRu ? 'Ошибка обновления отправления' : 'Error updating shipment');
    } finally {
      setIsSaving(false);
    }
  };

  const handleDeleteShipmentConfirm = async (shipment: Shipment) => {
    if (confirm(isRu ? `Удалить отправление ${shipment.shipmentNumber}? Посылки вернутся в статус «На складе».` : `Delete shipment ${shipment.shipmentNumber}?`)) {
      await deleteShipment(shipment.id, shipment.parcelIds);
      if (editingShipment?.id === shipment.id) setEditingShipment(null);
    }
  };

  // Parcel editing handlers
  const handleStartEditParcel = (parcel: Parcel) => {
    setEditingParcel(parcel);
    setEditStatus(parcel.status);
    setEditOutboundTracking(parcel.outboundTracking || '');
    setEditShippingCost(parcel.shippingCost || '');
    setEditNotes(parcel.notes || '');
    setSaveSuccessMsg(null);
  };

  const handleSaveParcelEdit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingParcel) return;

    setIsSaving(true);
    try {
      await updateParcel(editingParcel.id, {
        status: editStatus,
        outboundTracking: editOutboundTracking.trim(),
        shippingCost: editShippingCost.trim(),
        notes: editNotes.trim()
      });

      setSaveSuccessMsg(isRu ? 'Изменения сохранены!' : 'Saved successfully!');
      setTimeout(() => {
        setEditingParcel(null);
        setSaveSuccessMsg(null);
      }, 900);
    } catch (err) {
      console.error('Error saving parcel updates:', err);
    } finally {
      setIsSaving(false);
    }
  };

  const handleDeleteParcel = async (parcelId: string) => {
    if (confirm(isRu ? 'Удалить эту посылку из базы?' : 'Delete this parcel?')) {
      await deleteParcel(parcelId);
      if (editingParcel?.id === parcelId) setEditingParcel(null);
    }
  };

  // Filter parcels
  const filteredParcels = parcels.filter((p) => {
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch = !q || 
      p.inboundTracking.toLowerCase().includes(q) ||
      (p.outboundTracking && p.outboundTracking.toLowerCase().includes(q)) ||
      p.clientCode.toLowerCase().includes(q) ||
      p.productTitle.toLowerCase().includes(q);

    const matchesStatus = statusFilter === 'all' || p.status === statusFilter;
    const matchesWarehouse = warehouseFilter === 'all' || p.warehouseDestination === warehouseFilter;

    return matchesSearch && matchesStatus && matchesWarehouse;
  });

  // Filter shipments
  const filteredShipments = shipments.filter((s) => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return true;
    return (
      s.shipmentNumber.toLowerCase().includes(q) ||
      s.clientCode.toLowerCase().includes(q) ||
      (s.outboundTracking && s.outboundTracking.toLowerCase().includes(q)) ||
      (s.productSummary && s.productSummary.toLowerCase().includes(q)) ||
      s.inboundTrackings.some(t => t.toLowerCase().includes(q))
    );
  });

  // Unique client codes with arrived parcels
  const clientCodesWithArrivedParcels = Array.from(
    new Set(parcels.filter(p => p.status === 'arrived').map(p => p.clientCode))
  ).filter(Boolean);

  const allKnownClientCodes = Array.from(
    new Set([...users.map(u => u.clientCode), ...parcels.map(p => p.clientCode)])
  ).filter(Boolean);

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-4 bg-brand-dark/80 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="bg-cream w-full max-w-7xl max-h-[96vh] rounded-[32px] md:rounded-[40px] shadow-2xl flex flex-col overflow-hidden border border-gray-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="bg-brand-dark text-white px-6 py-4 md:px-8 md:py-5 flex flex-wrap items-center justify-between gap-4 shrink-0">
          <div className="flex items-center gap-3">
            <span className="bg-amber-400 text-brand-dark font-black text-xs px-2.5 py-1 rounded-lg uppercase tracking-wider">
              Warehouse & Admin
            </span>
            <h1 className="text-lg md:text-xl font-black tracking-tight">
              {isRu ? 'Складской центр HappyBox' : 'HappyBox Operations'}
            </h1>
            <span className="text-xs text-gray-400 hidden sm:inline">({user?.email})</span>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex bg-white/10 p-1 rounded-xl">
              <button
                onClick={() => setActiveTab('shipments')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                  activeTab === 'shipments' ? 'bg-amber-400 text-brand-dark' : 'text-gray-300 hover:text-white'
                }`}
              >
                <Truck size={13} />
                <span>{isRu ? 'Отправления (Сборка)' : 'Outbound Shipments'}</span>
                <span className="bg-black/20 px-1.5 rounded text-[10px]">{shipments.length}</span>
              </button>
              
              <button
                onClick={() => setActiveTab('parcels')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                  activeTab === 'parcels' ? 'bg-amber-400 text-brand-dark' : 'text-gray-300 hover:text-white'
                }`}
              >
                <Box size={13} />
                <span>{isRu ? 'Входящие треки' : 'Inbound Parcels'}</span>
                <span className="bg-black/20 px-1.5 rounded text-[10px]">{parcels.length}</span>
              </button>

              <button
                onClick={() => setActiveTab('users')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                  activeTab === 'users' ? 'bg-amber-400 text-brand-dark' : 'text-gray-300 hover:text-white'
                }`}
              >
                <Users size={13} />
                <span>{isRu ? 'Клиенты' : 'Users'}</span>
                <span className="bg-black/20 px-1.5 rounded text-[10px]">{users.length}</span>
              </button>
            </div>

            <button
              onClick={() => {
                logout();
                onClose();
              }}
              title={isRu ? 'Выйти' : 'Log out'}
              className="text-xs font-bold text-gray-400 hover:text-red-400 px-2 py-2 rounded-xl transition-all cursor-pointer"
            >
              <LogOut size={16} />
            </button>
            <button
              onClick={onClose}
              className="w-9 h-9 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-all cursor-pointer"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="overflow-y-auto p-4 sm:p-6 md:p-8 space-y-6">
          
          {/* ========================================================================= */}
          {/* TAB: OUTBOUND SHIPMENTS (КОНСОЛИДАЦИЯ И ОТПРАВКА) */}
          {/* ========================================================================= */}
          {activeTab === 'shipments' && (
            <div className="space-y-5 animate-fade-in">
              {/* Header with Quick Actions */}
              <div className="bg-white p-5 rounded-3xl border border-gray-100 shadow-sm flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                <div>
                  <h2 className="text-lg font-black text-brand-dark flex items-center gap-2">
                    <Truck size={20} className="text-brand-blue" />
                    <span>{isRu ? 'Международные отправления (Сборные коробки)' : 'Consolidated Outbound Shipments'}</span>
                  </h2>
                  <p className="text-xs text-gray-400 mt-0.5">
                    {isRu 
                      ? 'Объединяйте входящие посылки клиентов в коробку, загружайте общее фото партии, вносите вес и СДЭК-трек.' 
                      : 'Pack inbound parcels into shipments, attach batch photos, specify weight, cost and tracking.'}
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={handleOpenConsolidation}
                    className="bg-brand-blue hover:bg-blue-600 text-white font-bold text-xs px-4 py-2.5 rounded-xl shadow-md active:scale-95 transition-all flex items-center gap-2 cursor-pointer"
                  >
                    <Plus size={16} />
                    <span>{isRu ? 'Собрать коробку (Консолидация)' : '+ Pack New Box'}</span>
                  </button>
                </div>
              </div>

              {/* Search Bar */}
              <div className="relative">
                <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={isRu ? 'Поиск по номеру HB-1042, коду клиента или треку СДЭК...' : 'Search by shipment #, client code or tracking...'}
                  className="w-full bg-white border border-gray-200 rounded-2xl pl-10 pr-4 py-3 text-xs md:text-sm font-semibold text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-blue/30"
                />
              </div>

              {/* Shipments Table */}
              <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse text-xs">
                    <thead>
                      <tr className="bg-gray-50/90 text-[11px] font-black uppercase tracking-wider text-gray-400 border-b border-gray-100">
                        <th className="py-3.5 px-4">{isRu ? '№ Отправления' : 'Shipment #'}</th>
                        <th className="py-3.5 px-4">{isRu ? 'Клиент' : 'Client'}</th>
                        <th className="py-3.5 px-4">{isRu ? 'Входящие треки (Китай)' : 'China Tracks'}</th>
                        <th className="py-3.5 px-4">{isRu ? 'Фото' : 'Photo'}</th>
                        <th className="py-3.5 px-4">{isRu ? 'Вес' : 'Weight'}</th>
                        <th className="py-3.5 px-4">{isRu ? 'К оплате & Статус' : 'Cost & Payment'}</th>
                        <th className="py-3.5 px-4">{isRu ? 'Междунар. трек' : 'Intl Tracking'}</th>
                        <th className="py-3.5 px-4">{isRu ? 'Статус' : 'Status'}</th>
                        <th className="py-3.5 px-4 text-right">{isRu ? 'Действие' : 'Action'}</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {loading ? (
                        <tr>
                          <td colSpan={9} className="py-12 text-center text-gray-400">
                            <Loader2 size={24} className="animate-spin mx-auto mb-2 text-brand-blue" />
                            <span>{isRu ? 'Загрузка отправлений...' : 'Loading shipments...'}</span>
                          </td>
                        </tr>
                      ) : filteredShipments.length === 0 ? (
                        <tr>
                          <td colSpan={9} className="py-12 text-center text-gray-400">
                            <Truck size={36} className="mx-auto text-gray-300 mb-2" />
                            <p className="font-bold text-sm text-brand-dark mb-1">
                              {isRu ? 'Отправлений пока нет' : 'No shipments yet'}
                            </p>
                            <p className="text-xs text-gray-400">
                              {isRu 
                                ? 'Нажмите синюю кнопку «Собрать коробку», чтобы объединить полученные товары клиента.' 
                                : 'Click "Pack New Box" to consolidate customer packages.'}
                            </p>
                          </td>
                        </tr>
                      ) : (
                        filteredShipments.map((shipment) => {
                          return (
                            <tr key={shipment.id} className="hover:bg-gray-50/60 transition-colors">
                              {/* Shipment Number */}
                              <td className="py-3.5 px-4 font-mono font-black text-brand-dark">
                                <span className="bg-brand-blue/10 text-brand-blue px-2.5 py-1 rounded-lg text-xs">
                                  #{shipment.shipmentNumber}
                                </span>
                              </td>

                              {/* Client code */}
                              <td className="py-3.5 px-4 font-mono font-bold">
                                <span className="bg-amber-100 text-amber-900 px-2 py-0.5 rounded-md">
                                  {shipment.clientCode}
                                </span>
                              </td>

                              {/* China Tracks */}
                              <td className="py-3.5 px-4 max-w-[200px]">
                                <div className="flex flex-wrap gap-1">
                                  {shipment.inboundTrackings?.slice(0, 3).map((tr, i) => (
                                    <span key={i} className="font-mono text-[10px] bg-gray-100 px-1.5 py-0.5 rounded text-gray-700">
                                      {tr}
                                    </span>
                                  ))}
                                  {shipment.inboundTrackings && shipment.inboundTrackings.length > 3 && (
                                    <span className="text-[10px] text-gray-400 font-bold self-center">
                                      +{shipment.inboundTrackings.length - 3} ещё
                                    </span>
                                  )}
                                </div>
                              </td>

                              {/* Photo thumbnail */}
                              <td className="py-3.5 px-4">
                                {shipment.photoUrl ? (
                                  <button
                                    onClick={() => setPreviewPhotoUrl(shipment.photoUrl || null)}
                                    className="w-11 h-11 rounded-xl overflow-hidden border border-gray-200 relative group cursor-pointer block"
                                  >
                                    <img 
                                      src={shipment.photoUrl} 
                                      alt="Shipment" 
                                      className="w-full h-full object-cover group-hover:scale-110 transition-transform" 
                                    />
                                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                                      <ImageIcon size={14} />
                                    </div>
                                  </button>
                                ) : (
                                  <span className="text-[11px] text-gray-400 italic">
                                    {isRu ? 'Нет фото' : 'No photo'}
                                  </span>
                                )}
                              </td>

                              {/* Weight */}
                              <td className="py-3.5 px-4 font-bold text-brand-dark">
                                {shipment.weight ? `${shipment.weight} кг` : '—'}
                              </td>

                              {/* Shipping Cost & Payment Status */}
                              <td className="py-3.5 px-4">
                                <div className="font-black text-brand-dark text-xs">{shipment.shippingCost || '—'}</div>
                                <span className={`inline-block text-[10px] font-bold px-2 py-0.2 rounded-md mt-0.5 ${
                                  shipment.paymentStatus === 'paid' 
                                    ? 'bg-emerald-100 text-emerald-800' 
                                    : 'bg-orange-100 text-orange-800'
                                }`}>
                                  {shipment.paymentStatus === 'paid' ? (isRu ? 'Оплачено' : 'Paid') : (isRu ? 'Ждёт оплаты' : 'Unpaid')}
                                </span>
                              </td>

                              {/* Outbound Tracking */}
                              <td className="py-3.5 px-4 font-mono font-bold text-brand-blue">
                                {shipment.outboundTracking ? (
                                  <div className="flex items-center gap-1">
                                    <Truck size={12} />
                                    <span>{shipment.outboundTracking}</span>
                                  </div>
                                ) : (
                                  <span className="text-gray-400 italic font-normal text-[11px]">
                                    {isRu ? 'Не назначен' : 'Pending'}
                                  </span>
                                )}
                              </td>

                              {/* Status */}
                              <td className="py-3.5 px-4">
                                <span className={`inline-block font-bold text-[11px] px-2.5 py-0.5 rounded-full ${
                                  shipment.status === 'delivered' ? 'bg-emerald-100 text-emerald-800' :
                                  shipment.status === 'in_transit' ? 'bg-indigo-100 text-indigo-800' :
                                  shipment.status === 'paid' ? 'bg-blue-100 text-blue-800' :
                                  'bg-purple-100 text-purple-800'
                                }`}>
                                  {shipment.status === 'delivered' ? (isRu ? 'Доставлено' : 'Delivered') :
                                   shipment.status === 'in_transit' ? (isRu ? 'В пути' : 'In Transit') :
                                   shipment.status === 'paid' ? (isRu ? 'Оплачено (отправка)' : 'Paid') :
                                   (isRu ? 'Упаковано' : 'Packed')}
                                </span>
                              </td>

                              {/* Actions */}
                              <td className="py-3.5 px-4 text-right">
                                <button
                                  onClick={() => handleStartEditShipment(shipment)}
                                  className="bg-brand-dark hover:bg-brand-blue text-white px-3 py-1.5 rounded-xl text-xs font-bold transition-all shadow-sm active:scale-95 inline-flex items-center gap-1 cursor-pointer"
                                >
                                  <Edit3 size={13} />
                                  <span>{isRu ? 'Управлять' : 'Manage'}</span>
                                </button>
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
          {/* TAB: INBOUND PARCELS (ВХОДЯЩИЕ ПОСЫЛКИ ПО КИТАЮ) */}
          {/* ========================================================================= */}
          {activeTab === 'parcels' && (
            <div className="space-y-5 animate-fade-in">
              {/* Search and Filters Bar */}
              <div className="bg-white p-4 md:p-5 rounded-3xl border border-gray-100 shadow-sm flex flex-col md:flex-row gap-3 items-stretch md:items-center">
                <div className="relative flex-1">
                  <Search size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder={isRu ? 'Поиск по треку Китая, коду HB-8140 или описанию...' : 'Search by China tracking, client code, or title...'}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-10 pr-4 py-2.5 text-xs md:text-sm font-semibold text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-blue/30"
                  />
                </div>

                <div className="flex gap-2">
                  <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="bg-gray-50 border border-gray-200 rounded-xl px-3 py-2.5 text-xs font-bold text-brand-dark focus:outline-none"
                  >
                    <option value="all">{isRu ? 'Все статусы' : 'All Statuses'}</option>
                    <option value="expected">{isRu ? 'Ожидается' : 'Awaiting'}</option>
                    <option value="arrived">{isRu ? 'На складе' : 'At Hub'}</option>
                    <option value="consolidated">{isRu ? 'Сконсолидировано' : 'Consolidated'}</option>
                  </select>

                  <select
                    value={warehouseFilter}
                    onChange={(e) => setWarehouseFilter(e.target.value)}
                    className="bg-gray-50 border border-gray-200 rounded-xl px-3 py-2.5 text-xs font-bold text-brand-dark focus:outline-none"
                  >
                    <option value="all">{isRu ? 'Все склады' : 'All Warehouses'}</option>
                    {WAREHOUSES.map(w => (
                      <option key={w.id} value={w.id}>
                        {isRu ? w.badgeRu : w.badgeEn}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Parcels Table */}
              <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse text-xs">
                    <thead>
                      <tr className="bg-gray-50/80 text-[11px] font-black uppercase tracking-wider text-gray-400 border-b border-gray-100">
                        <th className="py-3.5 px-4">{isRu ? 'Клиент' : 'Client'}</th>
                        <th className="py-3.5 px-4">{isRu ? 'Китайский трек' : 'China Tracking'}</th>
                        <th className="py-3.5 px-4">{isRu ? 'Товар / Описание' : 'Product'}</th>
                        <th className="py-3.5 px-4">{isRu ? 'Склад' : 'Warehouse'}</th>
                        <th className="py-3.5 px-4">{isRu ? 'Статус' : 'Status'}</th>
                        <th className="py-3.5 px-4">{isRu ? 'Сборка' : 'Consolidated'}</th>
                        <th className="py-3.5 px-4 text-right">{isRu ? 'Действие' : 'Action'}</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {loading ? (
                        <tr>
                          <td colSpan={7} className="py-12 text-center text-gray-400">
                            <Loader2 size={24} className="animate-spin mx-auto mb-2 text-brand-blue" />
                            <span>{isRu ? 'Загрузка посылок...' : 'Loading...'}</span>
                          </td>
                        </tr>
                      ) : filteredParcels.length === 0 ? (
                        <tr>
                          <td colSpan={7} className="py-12 text-center text-gray-400">
                            {isRu ? 'Посылки не найдены' : 'No parcels found'}
                          </td>
                        </tr>
                      ) : (
                        filteredParcels.map((parcel) => {
                          const wh = WAREHOUSES.find(w => w.id === parcel.warehouseDestination);
                          return (
                            <tr key={parcel.id} className="hover:bg-gray-50/60 transition-colors">
                              <td className="py-3.5 px-4 font-mono font-bold text-brand-dark">
                                <span className="bg-amber-100 text-amber-900 px-2 py-0.5 rounded-md">
                                  {parcel.clientCode}
                                </span>
                              </td>
                              <td className="py-3.5 px-4 font-mono font-bold text-brand-blue">
                                {parcel.inboundTracking}
                              </td>
                              <td className="py-3.5 px-4 font-medium max-w-[200px] truncate">
                                {parcel.productTitle}
                              </td>
                              <td className="py-3.5 px-4 text-gray-500 text-[11px]">
                                {wh ? (isRu ? wh.badgeRu : wh.badgeEn) : parcel.warehouseDestination}
                              </td>
                              <td className="py-3.5 px-4">
                                <span className={`inline-block font-bold text-[11px] px-2.5 py-0.5 rounded-full ${
                                  parcel.status === 'arrived' ? 'bg-blue-100 text-blue-800' :
                                  parcel.status === 'consolidated' ? 'bg-purple-100 text-purple-800' :
                                  'bg-amber-100 text-amber-800'
                                }`}>
                                  {parcel.status === 'arrived' ? (isRu ? 'На складе' : 'At Hub') :
                                   parcel.status === 'consolidated' ? (isRu ? 'Сконсолидировано' : 'Consolidated') :
                                   (isRu ? 'Ожидается' : 'Awaiting')}
                                </span>
                              </td>
                              <td className="py-3.5 px-4 font-mono font-bold text-purple-700">
                                {parcel.shipmentNumber ? `#${parcel.shipmentNumber}` : '—'}
                              </td>
                              <td className="py-3.5 px-4 text-right">
                                <button
                                  onClick={() => handleStartEditParcel(parcel)}
                                  className="bg-brand-dark hover:bg-brand-blue text-white px-3 py-1.5 rounded-xl text-xs font-bold transition-all shadow-sm active:scale-95 inline-flex items-center gap-1 cursor-pointer"
                                >
                                  <Edit3 size={13} />
                                  <span>{isRu ? 'Статус' : 'Manage'}</span>
                                </button>
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
          {/* TAB: USERS */}
          {/* ========================================================================= */}
          {activeTab === 'users' && (
            <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden animate-fade-in">
              <div className="p-4 border-b border-gray-100 font-extrabold text-sm text-brand-dark flex items-center justify-between">
                <span>{isRu ? 'Все зарегистрированные клиенты' : 'Registered Customers'} ({users.length})</span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="bg-gray-50 text-[11px] font-black uppercase text-gray-400 border-b border-gray-100">
                      <th className="py-3 px-4">Код ID</th>
                      <th className="py-3 px-4">{isRu ? 'ФИО' : 'Name'}</th>
                      <th className="py-3 px-4">Email</th>
                      <th className="py-3 px-4">{isRu ? 'Телефон' : 'Phone'}</th>
                      <th className="py-3 px-4">{isRu ? 'Адрес доставки' : 'Address'}</th>
                      <th className="py-3 px-4">{isRu ? 'Роль' : 'Role'}</th>
                      <th className="py-3 px-4">{isRu ? 'Дата' : 'Registered'}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {users.map((u) => (
                      <tr key={u.uid} className="hover:bg-gray-50/60">
                        <td className="py-3 px-4 font-mono font-black text-amber-600">{u.clientCode}</td>
                        <td className="py-3 px-4 font-bold text-brand-dark">{u.fullName || '—'}</td>
                        <td className="py-3 px-4 font-medium">{u.email}</td>
                        <td className="py-3 px-4">{u.phone || '—'}</td>
                        <td className="py-3 px-4 max-w-[250px] truncate">{u.shippingAddress || '—'}</td>
                        <td className="py-3 px-4">
                          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                            u.role === 'admin' ? 'bg-amber-100 text-amber-900' : 'bg-gray-100 text-gray-700'
                          }`}>
                            {u.role}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-gray-400 text-[11px]">
                          {u.createdAt ? new Date(u.createdAt).toLocaleDateString() : '—'}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

        </div>
      </div>

      {/* ========================================================================= */}
      {/* CONSOLIDATION MODAL (СОБРАТЬ НОВУЮ КОРОБКУ) */}
      {/* ========================================================================= */}
      {isConsolidationOpen && (
        <div 
          className="fixed inset-0 z-[110] flex items-center justify-center p-3 bg-brand-dark/80 backdrop-blur-sm animate-fade-in"
          onClick={() => setIsConsolidationOpen(false)}
        >
          <div 
            className="bg-white rounded-3xl p-6 md:p-8 max-w-2xl w-full max-h-[92vh] overflow-y-auto shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setIsConsolidationOpen(false)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 hover:text-brand-dark cursor-pointer"
            >
              <X size={16} />
            </button>

            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-10 h-10 rounded-2xl bg-brand-blue/10 text-brand-blue flex items-center justify-center">
                <Box size={20} />
              </div>
              <div>
                <h3 className="font-black text-lg text-brand-dark">
                  {isRu ? 'Консолидация: Собрать коробку' : 'Pack Consolidated Box'}
                </h3>
                <p className="text-xs text-gray-400">
                  {isRu ? 'Выберите клиента и отметьте посылки на складе, которые упаковываются в эту партию.' : 'Select client and check arrived parcels.'}
                </p>
              </div>
            </div>

            <form onSubmit={handleCreateShipmentSubmit} className="space-y-4 text-xs">
              
              {/* Select Client */}
              <div>
                <label className="block font-extrabold uppercase tracking-wider text-gray-500 mb-1">
                  {isRu ? '1. Выберите клиента (ID кода)' : '1. Select Client Code *'}
                </label>
                <select
                  required
                  value={selectedClientCode}
                  onChange={(e) => {
                    setSelectedClientCode(e.target.value);
                    setSelectedParcelIds([]);
                  }}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2.5 text-xs font-bold text-brand-dark focus:outline-none"
                >
                  <option value="">{isRu ? '-- Выберите клиента --' : '-- Select client --'}</option>
                  {allKnownClientCodes.map(code => {
                    const clientParcelsCount = parcels.filter(p => p.clientCode === code && p.status === 'arrived').length;
                    return (
                      <option key={code} value={code}>
                        {code} ({clientParcelsCount} {isRu ? 'на складе' : 'arrived'})
                      </option>
                    );
                  })}
                </select>
              </div>

              {/* Arrived Parcels Checklist */}
              {selectedClientCode && (
                <div className="border border-gray-200 rounded-2xl p-4 bg-gray-50/50">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-bold text-brand-dark">
                      {isRu ? '2. Посылки клиента на складе:' : '2. Arrived Parcels for Consolidation:'}
                    </span>
                    {arrivedParcelsForClient.length > 0 && (
                      <button
                        type="button"
                        onClick={handleSelectAllClientParcels}
                        className="text-brand-blue hover:underline text-[11px] font-bold cursor-pointer"
                      >
                        {selectedParcelIds.length === arrivedParcelsForClient.length 
                          ? (isRu ? 'Снять выделение' : 'Deselect all') 
                          : (isRu ? 'Выбрать все' : 'Select all')}
                      </button>
                    )}
                  </div>

                  {arrivedParcelsForClient.length === 0 ? (
                    <div className="text-gray-400 italic py-3 text-center">
                      {isRu ? 'У этого клиента пока нет посылок в статусе «На складе». Переведите нужные посылки в статус «На складе» на вкладке Входящие.' : 'No arrived parcels found for this client.'}
                    </div>
                  ) : (
                    <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
                      {arrivedParcelsForClient.map((parcel) => (
                        <label 
                          key={parcel.id} 
                          className="flex items-center gap-3 p-2.5 bg-white rounded-xl border border-gray-200 cursor-pointer hover:border-brand-blue transition-colors"
                        >
                          <input
                            type="checkbox"
                            checked={selectedParcelIds.includes(parcel.id)}
                            onChange={() => handleToggleParcelSelection(parcel.id)}
                            className="rounded text-brand-blue focus:ring-brand-blue w-4 h-4 cursor-pointer"
                          />
                          <div className="flex-1 font-mono font-bold text-brand-dark">
                            {parcel.inboundTracking}
                          </div>
                          <div className="text-gray-500 font-medium truncate max-w-[180px]">
                            {parcel.productTitle}
                          </div>
                        </label>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Weight & Shipping Cost */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-extrabold uppercase tracking-wider text-gray-500 mb-1">
                    {isRu ? 'Вес коробки (кг) *' : 'Weight (kg) *'}
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    required
                    value={consWeight}
                    onChange={(e) => setConsWeight(e.target.value)}
                    placeholder="Например: 5.4"
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2.5 font-bold text-brand-dark focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block font-extrabold uppercase tracking-wider text-gray-500 mb-1">
                    {isRu ? 'Стоимость доставки (счет)' : 'Shipping Cost *'}
                  </label>
                  <input
                    type="text"
                    required
                    value={consCost}
                    onChange={(e) => setConsCost(e.target.value)}
                    placeholder="Например: 3 800 ₽ или $45"
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2.5 font-bold text-brand-dark focus:outline-none"
                  />
                </div>
              </div>

              {/* Photo Upload with camera / file */}
              <div>
                <label className="block font-extrabold uppercase tracking-wider text-gray-500 mb-1">
                  {isRu ? 'Общее фото партии / товаров' : 'Batch Photo (Camera / Gallery)'}
                </label>
                <div className="flex items-center gap-3">
                  <input
                    type="file"
                    ref={fileInputRef}
                    accept="image/*"
                    capture="environment"
                    className="hidden"
                    onChange={(e) => handlePhotoSelect(e, false)}
                  />
                  <button
                    type="button"
                    disabled={isCompressingPhoto}
                    onClick={() => fileInputRef.current?.click()}
                    className="bg-gray-100 hover:bg-gray-200 text-brand-dark font-bold px-4 py-2.5 rounded-xl border border-gray-200 flex items-center gap-2 cursor-pointer transition-colors"
                  >
                    {isCompressingPhoto ? (
                      <Loader2 size={16} className="animate-spin text-brand-blue" />
                    ) : (
                      <Camera size={16} className="text-brand-blue" />
                    )}
                    <span>{isRu ? 'Сделать фото / Выбрать из галереи' : 'Take / Upload Photo'}</span>
                  </button>

                  {consPhotoUrl && (
                    <div className="relative group">
                      <img 
                        src={consPhotoUrl} 
                        alt="Preview" 
                        className="w-11 h-11 object-cover rounded-xl border border-emerald-300 shadow-xs" 
                      />
                      <button
                        type="button"
                        onClick={() => setConsPhotoUrl('')}
                        className="absolute -top-1.5 -right-1.5 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-[10px]"
                      >
                        ×
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* International Tracking (CDEK / Cargo) */}
              <div>
                <label className="block font-extrabold uppercase tracking-wider text-gray-500 mb-1">
                  {isRu ? 'Международный трек-номер (СДЭК / Карго, если уже есть)' : 'International Tracking Number (optional)'}
                </label>
                <input
                  type="text"
                  value={consOutboundTrack}
                  onChange={(e) => setConsOutboundTrack(e.target.value)}
                  placeholder="1234567890 / CDEK-..."
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2.5 font-mono font-bold text-brand-dark focus:outline-none"
                />
              </div>

              {/* Status and Payment */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-extrabold uppercase tracking-wider text-gray-500 mb-1">
                    {isRu ? 'Статус отправки' : 'Shipment Status'}
                  </label>
                  <select
                    value={consOutboundStatus}
                    onChange={(e) => setConsOutboundStatus(e.target.value as OutboundStatus)}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2.5 font-bold text-brand-dark focus:outline-none"
                  >
                    <option value="packed">{isRu ? 'Упаковано (ждёт оплаты)' : 'Packed'}</option>
                    <option value="paid">{isRu ? 'Оплачено (готовится к отправке)' : 'Paid'}</option>
                    <option value="in_transit">{isRu ? 'В пути' : 'In Transit'}</option>
                    <option value="delivered">{isRu ? 'Доставлено' : 'Delivered'}</option>
                  </select>
                </div>

                <div>
                  <label className="block font-extrabold uppercase tracking-wider text-gray-500 mb-1">
                    {isRu ? 'Статус оплаты' : 'Payment Status'}
                  </label>
                  <select
                    value={consPaymentStatus}
                    onChange={(e) => setConsPaymentStatus(e.target.value as PaymentStatus)}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2.5 font-bold text-brand-dark focus:outline-none"
                  >
                    <option value="pending">{isRu ? '🟡 Ожидает оплаты' : 'Pending'}</option>
                    <option value="paid">{isRu ? '🟢 Оплачено' : 'Paid'}</option>
                  </select>
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block font-extrabold uppercase tracking-wider text-gray-500 mb-1">
                  {isRu ? 'Примечание для клиента (необязательно)' : 'Notes'}
                </label>
                <textarea
                  rows={2}
                  value={consNotes}
                  onChange={(e) => setConsNotes(e.target.value)}
                  placeholder={isRu ? 'Коробка аккуратно запечатана, товар проверен на брак.' : 'Packed securely...'}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 text-brand-dark focus:outline-none resize-none"
                />
              </div>

              {/* Submit Buttons */}
              <div className="flex items-center justify-end gap-3 pt-3 border-t border-gray-100">
                <button
                  type="button"
                  onClick={() => setIsConsolidationOpen(false)}
                  className="px-4 py-2.5 rounded-xl font-bold text-gray-500 hover:bg-gray-100 cursor-pointer"
                >
                  {isRu ? 'Отмена' : 'Cancel'}
                </button>
                <button
                  type="submit"
                  disabled={isCreatingShipment || selectedParcelIds.length === 0}
                  className="bg-brand-blue hover:bg-blue-600 text-white px-6 py-2.5 rounded-xl font-bold shadow-md active:scale-95 transition-all flex items-center gap-2 disabled:opacity-50 cursor-pointer"
                >
                  {isCreatingShipment ? <Loader2 size={16} className="animate-spin" /> : <Save size={16} />}
                  <span>{isRu ? 'Собрать и сохранить отправление' : 'Save Shipment'}</span>
                </button>
              </div>

            </form>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* EDIT SHIPMENT MODAL */}
      {/* ========================================================================= */}
      {editingShipment && (
        <div 
          className="fixed inset-0 z-[110] flex items-center justify-center p-3 bg-brand-dark/80 backdrop-blur-sm animate-fade-in"
          onClick={() => setEditingShipment(null)}
        >
          <div 
            className="bg-white rounded-3xl p-6 md:p-8 max-w-lg w-full max-h-[92vh] overflow-y-auto shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setEditingShipment(null)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 hover:text-brand-dark cursor-pointer"
            >
              <X size={16} />
            </button>

            <div className="flex items-center gap-2 mb-4">
              <span className="bg-brand-blue text-white font-mono font-bold text-xs px-2.5 py-1 rounded-md">
                #{editingShipment.shipmentNumber}
              </span>
              <span className="bg-amber-100 text-amber-900 font-mono font-bold text-xs px-2.5 py-1 rounded-md">
                {editingShipment.clientCode}
              </span>
              <h3 className="font-extrabold text-base text-brand-dark">
                {isRu ? 'Управление отправлением' : 'Manage Shipment'}
              </h3>
            </div>

            <form onSubmit={handleSaveShipmentSubmit} className="space-y-4 text-xs">
              
              {/* International Tracking Number */}
              <div>
                <label className="block font-bold text-gray-500 uppercase tracking-wider mb-1">
                  {isRu ? 'Международный трек-номер (СДЭК / Карго)' : 'Outbound Tracking Number'}
                </label>
                <input
                  type="text"
                  value={editShipmentTrack}
                  onChange={(e) => setEditShipmentTrack(e.target.value)}
                  placeholder="1234567890 / CDEK-..."
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2.5 font-mono font-bold text-brand-dark focus:outline-none"
                />
              </div>

              {/* Weight and Cost */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-gray-500 uppercase tracking-wider mb-1">
                    {isRu ? 'Вес (кг)' : 'Weight (kg)'}
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    value={editShipmentWeight}
                    onChange={(e) => setEditShipmentWeight(e.target.value)}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 font-bold text-brand-dark focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block font-bold text-gray-500 uppercase tracking-wider mb-1">
                    {isRu ? 'Стоимость доставки' : 'Cost'}
                  </label>
                  <input
                    type="text"
                    value={editShipmentCost}
                    onChange={(e) => setEditShipmentCost(e.target.value)}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 font-bold text-brand-dark focus:outline-none"
                  />
                </div>
              </div>

              {/* Status and Payment */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-gray-500 uppercase tracking-wider mb-1">
                    {isRu ? 'Статус доставки' : 'Delivery Status'}
                  </label>
                  <select
                    value={editShipmentStatus}
                    onChange={(e) => setEditShipmentStatus(e.target.value as OutboundStatus)}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 font-bold text-brand-dark focus:outline-none"
                  >
                    <option value="packed">{isRu ? 'Упаковано' : 'Packed'}</option>
                    <option value="paid">{isRu ? 'Оплачено' : 'Paid'}</option>
                    <option value="in_transit">{isRu ? 'В пути' : 'In Transit'}</option>
                    <option value="delivered">{isRu ? 'Доставлено' : 'Delivered'}</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-gray-500 uppercase tracking-wider mb-1">
                    {isRu ? 'Статус оплаты' : 'Payment'}
                  </label>
                  <select
                    value={editShipmentPayment}
                    onChange={(e) => setEditShipmentPayment(e.target.value as PaymentStatus)}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 font-bold text-brand-dark focus:outline-none"
                  >
                    <option value="pending">{isRu ? '🟡 Ожидает оплаты' : 'Pending'}</option>
                    <option value="paid">{isRu ? '🟢 Оплачено' : 'Paid'}</option>
                  </select>
                </div>
              </div>

              {/* Photo */}
              <div>
                <label className="block font-bold text-gray-500 uppercase tracking-wider mb-1">
                  {isRu ? 'Фото отправления' : 'Photo'}
                </label>
                <div className="flex items-center gap-3">
                  <input
                    type="file"
                    ref={editShipmentFileRef}
                    accept="image/*"
                    capture="environment"
                    className="hidden"
                    onChange={(e) => handlePhotoSelect(e, true)}
                  />
                  <button
                    type="button"
                    disabled={isCompressingPhoto}
                    onClick={() => editShipmentFileRef.current?.click()}
                    className="bg-gray-100 hover:bg-gray-200 text-brand-dark font-bold px-3 py-2 rounded-xl border border-gray-200 flex items-center gap-1.5 cursor-pointer"
                  >
                    <Camera size={14} className="text-brand-blue" />
                    <span>{isRu ? 'Обновить фото' : 'Update photo'}</span>
                  </button>

                  {editShipmentPhotoUrl && (
                    <img 
                      src={editShipmentPhotoUrl} 
                      alt="Preview" 
                      className="w-10 h-10 object-cover rounded-xl border border-emerald-300" 
                    />
                  )}
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block font-bold text-gray-500 uppercase tracking-wider mb-1">
                  {isRu ? 'Заметки' : 'Notes'}
                </label>
                <textarea
                  rows={2}
                  value={editShipmentNotes}
                  onChange={(e) => setEditShipmentNotes(e.target.value)}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 text-brand-dark focus:outline-none resize-none"
                />
              </div>

              {/* Actions */}
              <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                <button
                  type="button"
                  onClick={() => handleDeleteShipmentConfirm(editingShipment)}
                  className="text-red-500 hover:text-red-700 font-bold flex items-center gap-1 cursor-pointer"
                >
                  <Trash2 size={14} />
                  <span>{isRu ? 'Удалить отправление' : 'Delete'}</span>
                </button>

                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => setEditingShipment(null)}
                    className="px-4 py-2 rounded-xl font-bold text-gray-500 hover:bg-gray-100 cursor-pointer"
                  >
                    {isRu ? 'Отмена' : 'Cancel'}
                  </button>
                  <button
                    type="submit"
                    disabled={isSaving}
                    className="bg-brand-dark hover:bg-brand-blue text-white px-5 py-2 rounded-xl font-bold transition-all shadow-md active:scale-95 flex items-center gap-1.5 cursor-pointer"
                  >
                    {isSaving ? <Loader2 size={14} className="animate-spin" /> : <Save size={14} />}
                    <span>{isRu ? 'Сохранить' : 'Save'}</span>
                  </button>
                </div>
              </div>

            </form>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* EDIT INBOUND PARCEL MODAL */}
      {/* ========================================================================= */}
      {editingParcel && (
        <div 
          className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-brand-dark/70 backdrop-blur-sm animate-fade-in"
          onClick={() => setEditingParcel(null)}
        >
          <div 
            className="bg-white rounded-3xl p-6 md:p-8 max-w-lg w-full shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setEditingParcel(null)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 hover:text-brand-dark cursor-pointer"
            >
              <X size={16} />
            </button>

            <div className="flex items-center gap-2 mb-4">
              <span className="bg-amber-100 text-amber-900 font-mono font-bold text-xs px-2.5 py-1 rounded-md">
                {editingParcel.clientCode}
              </span>
              <h3 className="font-extrabold text-base text-brand-dark">
                {isRu ? 'Управление входящей посылкой' : 'Update Inbound Parcel'}
              </h3>
            </div>

            <div className="bg-gray-50 p-3 rounded-xl mb-4 text-xs space-y-1">
              <div><span className="text-gray-400">{isRu ? 'Китайский трек:' : 'China Track:'}</span> <span className="font-mono font-bold">{editingParcel.inboundTracking}</span></div>
              <div><span className="text-gray-400">{isRu ? 'Товар:' : 'Product:'}</span> <span className="font-semibold">{editingParcel.productTitle}</span></div>
            </div>

            {saveSuccessMsg && (
              <div className="mb-4 p-2.5 bg-emerald-50 text-emerald-700 rounded-xl text-xs font-bold flex items-center gap-2">
                <CheckCircle2 size={16} />
                <span>{saveSuccessMsg}</span>
              </div>
            )}

            <form onSubmit={handleSaveParcelEdit} className="space-y-4 text-xs">
              <div>
                <label className="block font-bold text-gray-500 uppercase tracking-wider mb-1">
                  {isRu ? 'Текущий статус' : 'Status'}
                </label>
                <select
                  value={editStatus}
                  onChange={(e) => setEditStatus(e.target.value as ParcelStatus)}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2.5 font-bold text-brand-dark focus:outline-none"
                >
                  <option value="expected">{isRu ? '1. Ожидается' : '1. Awaiting'}</option>
                  <option value="arrived">{isRu ? '2. Прибыло на склад в Китае (Готово к сборке)' : '2. Arrived at Hub (Ready)'}</option>
                  <option value="consolidated">{isRu ? '3. Сконсолидировано' : '3. Consolidated'}</option>
                </select>
              </div>

              <div>
                <label className="block font-bold text-gray-500 uppercase tracking-wider mb-1">
                  {isRu ? 'Заметки / Сообщение клиенту' : 'Notes'}
                </label>
                <textarea
                  rows={2}
                  value={editNotes}
                  onChange={(e) => setEditNotes(e.target.value)}
                  placeholder={isRu ? 'Товар проверен, повреждений нет' : 'Checked...'}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 text-brand-dark focus:outline-none resize-none"
                />
              </div>

              <div className="flex items-center justify-between pt-2">
                <button
                  type="button"
                  onClick={() => handleDeleteParcel(editingParcel.id)}
                  className="text-red-500 hover:text-red-700 font-bold flex items-center gap-1 cursor-pointer"
                >
                  <Trash2 size={14} />
                  <span>{isRu ? 'Удалить' : 'Delete'}</span>
                </button>

                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => setEditingParcel(null)}
                    className="px-4 py-2 rounded-xl font-bold text-gray-500 hover:bg-gray-100 cursor-pointer"
                  >
                    {isRu ? 'Отмена' : 'Cancel'}
                  </button>
                  <button
                    type="submit"
                    disabled={isSaving}
                    className="bg-brand-dark hover:bg-brand-blue text-white px-5 py-2 rounded-xl font-bold transition-all shadow-md active:scale-95 flex items-center gap-1.5 cursor-pointer"
                  >
                    {isSaving ? <Loader2 size={14} className="animate-spin" /> : <Save size={14} />}
                    <span>{isRu ? 'Сохранить' : 'Save'}</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* PHOTO PREVIEW LIGHTBOX */}
      {/* ========================================================================= */}
      {previewPhotoUrl && (
        <div 
          className="fixed inset-0 z-[120] flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in"
          onClick={() => setPreviewPhotoUrl(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] flex flex-col items-center">
            <button
              onClick={() => setPreviewPhotoUrl(null)}
              className="absolute -top-12 right-0 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full cursor-pointer transition-colors"
            >
              <X size={20} />
            </button>
            <img 
              src={previewPhotoUrl} 
              alt="Full parcel" 
              className="max-w-full max-h-[85vh] rounded-2xl object-contain shadow-2xl border border-white/10" 
              onClick={(e) => e.stopPropagation()} 
            />
          </div>
        </div>
      )}

    </div>
  );
};

import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowLeft, 
  Copy, 
  Check, 
  Package, 
  Plus, 
  MapPin, 
  LogOut, 
  Send, 
  Truck, 
  Clock, 
  CheckCircle2, 
  Box, 
  HelpCircle,
  Loader2,
  AlertCircle,
  Phone,
  User,
  CreditCard,
  Warehouse,
  Headphones,
  Inbox,
  PackageCheck,
  ChevronRight,
  ExternalLink,
  Search,
  MessageCircle,
  Edit2,
  Trash2,
  Eye,
  X,
  Image as ImageIcon
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { 
  Parcel, 
  ParcelStatus, 
  WarehouseDestination, 
  Shipment, 
  OutboundStatus, 
  PaymentStatus 
} from '../types';
import { 
  WAREHOUSES, 
  SUPPORT_CONTACTS, 
  WAREHOUSE_PHONE, 
  formatRecipientCode, 
  getClientCodeNumber 
} from '../constants';
import { 
  createParcel, 
  subscribeToCustomerParcels, 
  updateCustomerParcel, 
  deleteCustomerParcel,
  subscribeToCustomerShipments 
} from '../services/parcelService';
import { updateUserProfile } from '../services/authService';
import { Language } from '../utils/translations';
import { AuthModal } from './AuthModal';

export type DashboardTab = 'inbound' | 'outbound' | 'warehouses' | 'profile';

interface CustomerDashboardPageProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  onNavigate?: (page: string, sectionId?: string) => void;
  onBack?: () => void;
}

export const CustomerDashboardPage: React.FC<CustomerDashboardPageProps> = ({
  language,
  setLanguage,
  onNavigate,
  onBack
}) => {
  const { user, logout, refreshProfile } = useAuth();
  const isRu = language === 'ru';

  const [activeTab, setActiveTab] = useState<DashboardTab>('inbound');
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const fullNameInputRef = useRef<HTMLInputElement>(null);

  // Active warehouse tab in warehouses section
  const [selectedWarehouseId, setSelectedWarehouseId] = useState<WarehouseDestination>('eu_sea_uae_israel');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  // New parcel form states
  const [inboundTracking, setInboundTracking] = useState('');
  const [productTitle, setProductTitle] = useState('');
  const [parcelWarehouse, setParcelWarehouse] = useState<WarehouseDestination>('cis_cargo');
  const [isSubmittingParcel, setIsSubmittingParcel] = useState(false);
  const [parcelSuccessMsg, setParcelSuccessMsg] = useState<string | null>(null);
  const [parcelErrorMsg, setParcelErrorMsg] = useState<string | null>(null);

  // Customer parcels and shipments lists
  const [parcels, setParcels] = useState<Parcel[]>([]);
  const [shipments, setShipments] = useState<Shipment[]>([]);
  const [loadingParcels, setLoadingParcels] = useState(true);
  const [loadingShipments, setLoadingShipments] = useState(true);

  // Sub-filters
  const [inboundSubFilter, setInboundSubFilter] = useState<'all' | 'expected' | 'arrived' | 'consolidated'>('all');
  const [outboundSubFilter, setOutboundSubFilter] = useState<'all' | 'packed' | 'awaiting_payment' | 'in_transit' | 'delivered'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Edit Inbound parcel modal
  const [editingParcel, setEditingParcel] = useState<Parcel | null>(null);
  const [editInboundTracking, setEditInboundTracking] = useState('');
  const [editProductTitle, setEditProductTitle] = useState('');
  const [editWarehouse, setEditWarehouse] = useState<WarehouseDestination>('cis_cargo');
  const [isSavingParcel, setIsSavingParcel] = useState(false);

  // Photo Lightbox modal
  const [lightboxPhotoUrl, setLightboxPhotoUrl] = useState<string | null>(null);

  // Payment modal for Shipment
  const [paymentShipment, setPaymentShipment] = useState<Shipment | null>(null);

  // Edit profile details
  const [editFullName, setEditFullName] = useState(user?.fullName || '');
  const [editPhone, setEditPhone] = useState(user?.phone || '');
  const [editAddress, setEditAddress] = useState(user?.shippingAddress || '');
  const [isUpdatingProfile, setIsUpdatingProfile] = useState(false);
  const [profileSavedMsg, setProfileSavedMsg] = useState<string | null>(null);

  useEffect(() => {
    if (user) {
      setEditFullName(user.fullName || '');
      setEditPhone(user.phone || '');
      setEditAddress(user.shippingAddress || '');
    }
  }, [user]);

  // Subscribe to customer parcels and shipments
  useEffect(() => {
    if (!user?.uid) return;

    setLoadingParcels(true);
    const unsubParcels = subscribeToCustomerParcels(
      user.uid,
      (data) => {
        setParcels(data);
        setLoadingParcels(false);
      },
      () => {
        setLoadingParcels(false);
      }
    );

    setLoadingShipments(true);
    const unsubShipments = subscribeToCustomerShipments(
      user.uid,
      (data) => {
        setShipments(data);
        setLoadingShipments(false);
      },
      () => {
        setLoadingShipments(false);
      }
    );

    return () => {
      unsubParcels();
      unsubShipments();
    };
  }, [user?.uid]);

  const currentWarehouse = WAREHOUSES.find(w => w.id === selectedWarehouseId) || WAREHOUSES[0];

  const hasName = Boolean(user?.fullName && user.fullName.trim());
  const formattedCode = user ? formatRecipientCode(user.fullName, user.clientCode) : null;
  const clientNumber = user ? getClientCodeNumber(user.clientCode) : '8140';
  const recipientCode = formattedCode || `HB${clientNumber}`;

  // Inbound parcels
  const inboundParcels = parcels.filter(p => p.status === 'expected' || p.status === 'arrived' || p.status === 'consolidated');

  // Pending payments count
  const awaitingPaymentShipmentsCount = shipments.filter(s => s.paymentStatus === 'pending' || s.status === 'packed').length;

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2500);
  };

  const handleGoToNameProfile = () => {
    setActiveTab('profile');
    setTimeout(() => {
      fullNameInputRef.current?.focus();
    }, 200);
  };

  // Add parcel(s) via form
  const handleAddParcel = async (e: React.FormEvent) => {
    e.preventDefault();
    setParcelErrorMsg(null);
    setParcelSuccessMsg(null);

    if (!user) {
      setIsAuthModalOpen(true);
      return;
    }

    if (!inboundTracking.trim()) {
      setParcelErrorMsg(isRu ? 'Введите трек-номер посылки' : 'Please enter tracking number');
      return;
    }

    setIsSubmittingParcel(true);
    try {
      const createdIds = await createParcel({
        userId: user.uid,
        clientCode: user.clientCode,
        inboundTracking: inboundTracking.trim(),
        productTitle: productTitle.trim() || (isRu ? 'Товар' : 'Goods'),
        warehouseDestination: parcelWarehouse,
        notes: ''
      });

      setInboundTracking('');
      setProductTitle('');
      const countMsg = createdIds.length > 1 
        ? (isRu ? `Добавлено ${createdIds.length} посылок!` : `Added ${createdIds.length} parcels!`)
        : (isRu ? 'Посылка успешно добавлена в список ожидаемых!' : 'Parcel added to expected list!');
      setParcelSuccessMsg(countMsg);
      setTimeout(() => setParcelSuccessMsg(null), 4000);
    } catch (err: any) {
      console.error('Error adding parcel:', err);
      setParcelErrorMsg(isRu ? 'Ошибка при добавлении посылки' : 'Failed to add parcel');
    } finally {
      setIsSubmittingParcel(false);
    }
  };

  // Start editing inbound parcel
  const handleStartEditParcel = (parcel: Parcel) => {
    setEditingParcel(parcel);
    setEditInboundTracking(parcel.inboundTracking);
    setEditProductTitle(parcel.productTitle);
    setEditWarehouse(parcel.warehouseDestination);
  };

  // Save edited inbound parcel
  const handleSaveParcelEdit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingParcel) return;

    setIsSavingParcel(true);
    try {
      await updateCustomerParcel(editingParcel.id, {
        inboundTracking: editInboundTracking.trim(),
        productTitle: editProductTitle.trim(),
        warehouseDestination: editWarehouse
      });
      setEditingParcel(null);
    } catch (err) {
      console.error('Error updating parcel:', err);
      alert(isRu ? 'Не удалось обновить посылку' : 'Failed to update parcel');
    } finally {
      setIsSavingParcel(false);
    }
  };

  // Delete inbound parcel
  const handleDeleteCustomerParcel = async (parcelId: string) => {
    if (confirm(isRu ? 'Удалить этот трек-номер из списка ожидаемых?' : 'Delete this tracking number?')) {
      try {
        await deleteCustomerParcel(parcelId);
        if (editingParcel?.id === parcelId) setEditingParcel(null);
      } catch (err) {
        console.error('Failed to delete parcel:', err);
      }
    }
  };

  const handleSaveProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;
    setIsUpdatingProfile(true);
    setProfileSavedMsg(null);
    try {
      await updateUserProfile(user.uid, {
        fullName: editFullName.trim(),
        phone: editPhone.trim(),
        shippingAddress: editAddress.trim()
      });
      await refreshProfile();
      setProfileSavedMsg(isRu ? 'Данные доставки успешно сохранены!' : 'Profile updated successfully!');
      setTimeout(() => setProfileSavedMsg(null), 3500);
    } catch (err) {
      console.error('Error updating profile:', err);
    } finally {
      setIsUpdatingProfile(false);
    }
  };

  const getInboundStatusBadge = (status: ParcelStatus, shipmentNumber?: string) => {
    switch (status) {
      case 'expected':
        return {
          label: isRu ? 'Ожидается' : 'Awaiting',
          bg: 'bg-amber-100 text-amber-800 border-amber-200',
          icon: <Clock size={13} className="shrink-0" />
        };
      case 'arrived':
        return {
          label: isRu ? 'На складе' : 'In Warehouse',
          bg: 'bg-blue-100 text-blue-800 border-blue-200',
          icon: <Box size={13} className="shrink-0" />
        };
      case 'consolidated':
        return {
          label: shipmentNumber ? (isRu ? `Сборка #${shipmentNumber}` : `Box #${shipmentNumber}`) : (isRu ? 'Сконсолидировано' : 'Consolidated'),
          bg: 'bg-purple-100 text-purple-800 border-purple-200',
          icon: <PackageCheck size={13} className="shrink-0" />
        };
      default:
        return {
          label: isRu ? 'Ожидается' : 'Awaiting',
          bg: 'bg-gray-100 text-gray-800 border-gray-200',
          icon: <Clock size={13} className="shrink-0" />
        };
    }
  };

  const getOutboundStatusBadge = (status: OutboundStatus) => {
    switch (status) {
      case 'packed':
        return {
          label: isRu ? 'Упаковано' : 'Packed',
          bg: 'bg-purple-100 text-purple-800 border-purple-200',
          icon: <Package size={13} className="shrink-0" />
        };
      case 'paid':
        return {
          label: isRu ? 'Оплачено (отправка)' : 'Paid (Preparing)',
          bg: 'bg-blue-100 text-blue-800 border-blue-200',
          icon: <CheckCircle2 size={13} className="shrink-0" />
        };
      case 'in_transit':
        return {
          label: isRu ? 'В пути к вам' : 'In Transit',
          bg: 'bg-indigo-100 text-indigo-800 border-indigo-200',
          icon: <Truck size={13} className="shrink-0" />
        };
      case 'delivered':
        return {
          label: isRu ? 'Доставлено' : 'Delivered',
          bg: 'bg-emerald-100 text-emerald-800 border-emerald-200',
          icon: <CheckCircle2 size={13} className="shrink-0" />
        };
      default:
        return {
          label: isRu ? 'В обработке' : 'Processing',
          bg: 'bg-gray-100 text-gray-800 border-gray-200',
          icon: <Clock size={13} className="shrink-0" />
        };
    }
  };

  const getWarehouseNameById = (id: WarehouseDestination) => {
    const wh = WAREHOUSES.find(w => w.id === id);
    return wh ? (isRu ? wh.titleRu : wh.titleEn) : id;
  };

  const supportMessage = encodeURIComponent(
    `Здравствуйте! Мой ID: ${user?.clientCode || 'клиент'}. Вопрос по личному кабинету HappyBox:`
  );

  // Filtered Inbound parcels
  const filteredInbound = inboundParcels.filter((p) => {
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch = !q || 
      p.inboundTracking.toLowerCase().includes(q) || 
      p.productTitle.toLowerCase().includes(q);

    if (!matchesSearch) return false;
    if (inboundSubFilter === 'all') return true;
    return p.status === inboundSubFilter;
  });

  // Filtered Outbound shipments
  const filteredShipments = shipments.filter((s) => {
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch = !q ||
      s.shipmentNumber.toLowerCase().includes(q) ||
      (s.outboundTracking && s.outboundTracking.toLowerCase().includes(q)) ||
      (s.productSummary && s.productSummary.toLowerCase().includes(q)) ||
      s.inboundTrackings.some(t => t.toLowerCase().includes(q));

    if (!matchesSearch) return false;
    if (outboundSubFilter === 'all') return true;
    if (outboundSubFilter === 'awaiting_payment') return s.paymentStatus === 'pending' || s.status === 'packed';
    return s.status === outboundSubFilter;
  });

  // If user is not logged in, show an inviting login screen
  if (!user) {
    return (
      <div className="min-h-screen bg-cream text-brand-dark flex flex-col justify-between">
        <header className="bg-white/80 backdrop-blur-md border-b border-gray-200/60 py-4 px-6">
          <div className="container mx-auto flex items-center justify-between">
            <button
              onClick={() => {
                if (onBack) onBack();
                else if (onNavigate) onNavigate('home');
                else window.location.href = isRu ? '/ru' : '/';
              }}
              className="flex items-center gap-2 text-brand-dark hover:text-brand-blue font-bold text-sm cursor-pointer"
            >
              <ArrowLeft size={16} />
              <span>{isRu ? 'На главную' : 'Back to Home'}</span>
            </button>
            <div className="text-xl font-black text-brand-blue">HappyBox</div>
          </div>
        </header>

        <main className="container mx-auto px-4 py-16 flex flex-col items-center justify-center text-center">
          <div className="bg-white rounded-[36px] p-8 md:p-12 shadow-xl border border-gray-100 max-w-md w-full">
            <div className="w-16 h-16 bg-brand-blue/10 text-brand-blue rounded-3xl flex items-center justify-center mx-auto mb-6">
              <User size={32} />
            </div>
            <h1 className="text-2xl font-black text-brand-dark mb-2">
              {isRu ? 'Личный кабинет клиента' : 'Customer Portal'}
            </h1>
            <p className="text-sm text-gray-500 mb-8">
              {isRu 
                ? 'Войдите в систему или зарегистрируйтесь, чтобы получить персональный адрес склада в Китае и отслеживать ваши посылки.'
                : 'Sign in to access your unique China warehouse address and track all your packages in real time.'}
            </p>
            <button
              onClick={() => setIsAuthModalOpen(true)}
              className="w-full bg-brand-dark hover:bg-brand-blue text-white py-4 rounded-2xl font-black text-sm transition-all shadow-lg active:scale-95 cursor-pointer"
            >
              {isRu ? 'Войти / Зарегистрироваться' : 'Sign In / Register'}
            </button>
          </div>
        </main>

        <AuthModal
          isOpen={isAuthModalOpen}
          onClose={() => setIsAuthModalOpen(false)}
          language={language}
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream text-brand-dark flex flex-col justify-between selection:bg-brand-blue selection:text-white">
      {/* Top Header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-200/80 px-4 sm:px-6 py-3.5 shadow-xs">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          
          <div className="flex items-center gap-4">
            <button
              onClick={() => {
                if (onBack) onBack();
                else if (onNavigate) onNavigate('home');
                else window.location.href = isRu ? '/ru' : '/';
              }}
              className="flex items-center gap-2 text-gray-500 hover:text-brand-dark font-extrabold text-xs transition-colors p-1.5 -ml-1.5 rounded-xl hover:bg-gray-100 cursor-pointer"
            >
              <ArrowLeft size={16} />
              <span className="hidden sm:inline">{isRu ? 'На главную' : 'Home'}</span>
            </button>

            <div className="h-5 w-px bg-gray-200 hidden sm:block" />

            <div className="flex items-center gap-2.5">
              <span className="font-mono font-black text-xs sm:text-sm bg-brand-blue text-white px-2.5 py-1 rounded-xl shadow-xs">
                {user.clientCode}
              </span>
              <span className="font-extrabold text-sm sm:text-base text-brand-dark truncate max-w-[140px] sm:max-w-[220px]">
                {user.fullName || (isRu ? 'Мой кабинет' : 'My Portal')}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            {/* Language toggle */}
            <button
              onClick={() => setLanguage(isRu ? 'en' : 'ru')}
              className="px-2.5 py-1 rounded-xl text-xs font-black bg-gray-100 hover:bg-gray-200 text-brand-dark transition-all cursor-pointer"
            >
              {isRu ? 'EN' : 'RU'}
            </button>

            {/* Logout */}
            <button
              onClick={logout}
              title={isRu ? 'Выйти из аккаунта' : 'Log out'}
              className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all cursor-pointer"
            >
              <LogOut size={16} />
            </button>
          </div>

        </div>
      </header>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 py-6 sm:py-8 flex-1 flex flex-col md:flex-row items-start gap-6 lg:gap-8">
        
        {/* SIDEBAR NAVIGATION */}
        <aside className="w-full md:w-64 lg:w-72 shrink-0 space-y-4">
          
          {/* User profile card */}
          <div className="bg-white rounded-3xl p-5 border border-gray-200/80 shadow-xs space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-brand-blue to-blue-400 text-white font-black text-lg flex items-center justify-center shadow-xs">
                {user.fullName ? user.fullName.charAt(0).toUpperCase() : user.clientCode.slice(-2)}
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="font-black text-sm text-brand-dark truncate">
                  {user.fullName || (isRu ? 'Клиент HappyBox' : 'HappyBox Client')}
                </h3>
                <span className="font-mono text-xs font-bold text-brand-blue block">
                  {user.clientCode}
                </span>
              </div>
            </div>

            <div className="bg-amber-50/90 border border-amber-200/90 rounded-2xl p-2.5 flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase font-extrabold text-amber-800 tracking-wider block">
                  {isRu ? 'Код получателя' : 'Recipient Code'}
                </span>
                <span className="font-mono font-black text-sm text-brand-dark">
                  {recipientCode}
                </span>
              </div>
              <button
                onClick={() => handleCopy(recipientCode, 'sidebar_code')}
                className="p-1.5 text-amber-700 hover:bg-amber-100 rounded-lg cursor-pointer transition-colors"
                title={isRu ? 'Копировать' : 'Copy'}
              >
                {copiedKey === 'sidebar_code' ? (
                  <Check size={14} className="text-emerald-600" />
                ) : (
                  <Copy size={14} />
                )}
              </button>
            </div>
          </div>

          {/* Navigation Menu */}
          <nav className="bg-white rounded-3xl p-3 border border-gray-200/80 shadow-xs space-y-1">
            
            {/* 1. Отправляют нам */}
            <button
              onClick={() => setActiveTab('inbound')}
              className={`w-full flex items-center justify-between px-3.5 py-3 rounded-2xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'inbound'
                  ? 'bg-brand-blue text-white shadow-sm font-black'
                  : 'text-gray-600 hover:text-brand-dark hover:bg-gray-100/80'
              }`}
            >
              <div className="flex items-center gap-3">
                <Inbox size={18} className={activeTab === 'inbound' ? 'text-white' : 'text-brand-blue'} />
                <span className="text-left leading-tight">
                  {isRu ? 'Отправляют нам' : 'Inbound to China'}
                </span>
              </div>
              <span className={`text-[10px] px-2 py-0.5 rounded-full font-mono ${
                activeTab === 'inbound' ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-700'
              }`}>
                {inboundParcels.length}
              </span>
            </button>

            {/* 2. Отправляем мы */}
            <button
              onClick={() => setActiveTab('outbound')}
              className={`w-full flex items-center justify-between px-3.5 py-3 rounded-2xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'outbound'
                  ? 'bg-brand-blue text-white shadow-sm font-black'
                  : 'text-gray-600 hover:text-brand-dark hover:bg-gray-100/80'
              }`}
            >
              <div className="flex items-center gap-3">
                <Truck size={18} className={activeTab === 'outbound' ? 'text-white' : 'text-brand-blue'} />
                <span className="text-left leading-tight">
                  {isRu ? 'Отправляем мы' : 'Outbound to You'}
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                {awaitingPaymentShipmentsCount > 0 && (
                  <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" title={isRu ? 'Есть неоплаченные отправления' : 'Pending payment'} />
                )}
                <span className={`text-[10px] px-2 py-0.5 rounded-full font-mono ${
                  activeTab === 'outbound' ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-700'
                }`}>
                  {shipments.length}
                </span>
              </div>
            </button>

            {/* 3. Адреса складов в Китае */}
            <button
              onClick={() => setActiveTab('warehouses')}
              className={`w-full flex items-center justify-between px-3.5 py-3 rounded-2xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'warehouses'
                  ? 'bg-brand-blue text-white shadow-sm font-black'
                  : 'text-gray-600 hover:text-brand-dark hover:bg-gray-100/80'
              }`}
            >
              <div className="flex items-center gap-3">
                <Warehouse size={18} className={activeTab === 'warehouses' ? 'text-white' : 'text-brand-blue'} />
                <span className="text-left leading-tight">
                  {isRu ? 'Склады в Китае' : 'China Warehouses'}
                </span>
              </div>
              <ChevronRight size={14} className={activeTab === 'warehouses' ? 'text-white/70' : 'text-gray-400'} />
            </button>

            {/* 4. Адрес доставки и профиль */}
            <button
              onClick={() => setActiveTab('profile')}
              className={`w-full flex items-center justify-between px-3.5 py-3 rounded-2xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'profile'
                  ? 'bg-brand-blue text-white shadow-sm font-black'
                  : 'text-gray-600 hover:text-brand-dark hover:bg-gray-100/80'
              }`}
            >
              <div className="flex items-center gap-3">
                <User size={18} className={activeTab === 'profile' ? 'text-white' : 'text-brand-blue'} />
                <span className="text-left leading-tight">
                  {isRu ? 'Адрес доставки' : 'Delivery Profile'}
                </span>
              </div>
              {!hasName ? (
                <span className="bg-amber-100 text-amber-800 text-[9px] font-black px-1.5 py-0.5 rounded-md">
                  !
                </span>
              ) : (
                <ChevronRight size={14} className={activeTab === 'profile' ? 'text-white/70' : 'text-gray-400'} />
              )}
            </button>
          </nav>

          {/* Quick Help Banner in Sidebar */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50/60 rounded-3xl p-4 border border-blue-100 text-xs">
            <div className="flex items-center gap-2 text-brand-blue font-extrabold mb-1">
              <MessageCircle size={16} />
              <span>{isRu ? 'Служба поддержки' : 'Customer Support'}</span>
            </div>
            <p className="text-gray-500 text-[11px] mb-3 leading-relaxed">
              {isRu 
                ? 'Вопросы по выкупу, посылкам или доставке? Напишите нам:' 
                : 'Questions about orders, parcels, or delivery? Chat with us:'}
            </p>
            <div className="space-y-2">
              <a
                href={`https://t.me/${SUPPORT_CONTACTS.telegramUsername}?text=${supportMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-[#2AABEE] hover:bg-[#229ED9] text-white py-2.5 rounded-xl font-bold text-xs shadow-xs transition-all active:scale-95"
              >
                <Send size={13} />
                <span>Telegram</span>
              </a>
              <a
                href={`https://wa.me/8613048875834?text=${supportMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#20ba59] text-white py-2.5 rounded-xl font-bold text-xs shadow-xs transition-all active:scale-95"
              >
                <Phone size={13} />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

        </aside>

        {/* CONTENT AREA */}
        <main className="flex-1 space-y-6 min-w-0">

          {/* Warning banner if real name is missing */}
          {!hasName && (
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-300 rounded-[28px] p-5 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 animate-fade-in">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-2xl bg-amber-200 text-amber-900 flex items-center justify-center shrink-0 mt-0.5">
                  <AlertCircle size={22} />
                </div>
                <div>
                  <h3 className="font-black text-sm text-amber-950">
                    {isRu 
                      ? '⚠️ Внимание: Заполните имя в профиле для формирования кода получателя' 
                      : '⚠️ Action required: Enter your Full Name to generate your recipient code'}
                  </h3>
                  <p className="text-xs text-amber-800 mt-1 leading-relaxed">
                    {isRu 
                      ? `Пожалуйста, укажите ваши настоящие имя и фамилию — они необходимы для создания вашего ID получателя (Код: ${recipientCode || clientNumber}). Без этого китайские продавцы не смогут отправить товар.` 
                      : `Please enter your real first and last name — they are required to generate your recipient ID. Without it sellers cannot address your parcels.`}
                  </p>
                </div>
              </div>

              <button
                onClick={handleGoToNameProfile}
                className="bg-amber-400 hover:bg-amber-500 text-brand-dark px-4 py-2.5 rounded-2xl font-black text-xs shadow-md active:scale-95 transition-all shrink-0 cursor-pointer"
              >
                {isRu ? 'Заполнить сейчас' : 'Fill Profile Now'}
              </button>
            </div>
          )}

          {/* ========================================================================= */}
          {/* TAB 1: ОТПРАВЛЯЮТ НАМ (Входящие посылки в Китай от продавцов) */}
          {/* ========================================================================= */}
          {activeTab === 'inbound' && (
            <div className="space-y-6 animate-fade-in">
              
              {/* Form to add incoming parcel (Permanently visible at the top) */}
              <div className="bg-white rounded-[32px] p-6 sm:p-7 border border-gray-200/80 shadow-xs">
                <div className="flex items-center gap-2.5 mb-1.5">
                  <Inbox size={22} className="text-brand-blue" />
                  <h2 className="text-lg sm:text-xl font-black text-brand-dark tracking-tight">
                    {isRu ? 'Регистрация входящей посылки по Китаю' : 'Register Inbound China Parcel'}
                  </h2>
                </div>
                <p className="text-xs text-gray-500 mb-5 max-w-2xl leading-relaxed">
                  {isRu 
                    ? 'Как только продавец на Taobao, 1688, Poizon или фабрике выдаст китайский трек-номер, внесите его сюда. Можно указать несколько номеров через запятую.' 
                    : 'Enter the domestic China tracking number (SF Express, ZTO, YTO, etc.) provided by your seller. Multiple trackings separated by comma supported:'}
                </p>

                {parcelErrorMsg && (
                  <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-2xl flex items-center gap-2.5 text-red-600 text-xs font-semibold">
                    <AlertCircle size={15} className="shrink-0" />
                    <span>{parcelErrorMsg}</span>
                  </div>
                )}

                <form onSubmit={handleAddParcel} className="grid grid-cols-1 md:grid-cols-12 gap-3.5 items-end">
                  
                  {/* Tracking input */}
                  <div className="md:col-span-5">
                    <label className="block text-xs font-extrabold uppercase tracking-wider text-gray-500 mb-1.5">
                      {isRu ? 'Трек-номер по Китаю (можно через запятую) *' : 'China Tracking Number(s) *'}
                    </label>
                    <input
                      type="text"
                      required
                      value={inboundTracking}
                      onChange={(e) => setInboundTracking(e.target.value)}
                      placeholder="SF1234567890, 7730891234..."
                      className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-4 py-3 text-sm font-semibold text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-all"
                    />
                  </div>

                  {/* Product description */}
                  <div className="md:col-span-3">
                    <label className="block text-xs font-extrabold uppercase tracking-wider text-gray-500 mb-1.5">
                      {isRu ? 'Описание товара (необязательно)' : 'Goods Description'}
                    </label>
                    <input
                      type="text"
                      value={productTitle}
                      onChange={(e) => setProductTitle(e.target.value)}
                      placeholder={isRu ? 'Одежда, обувь, образцы' : 'Clothing, shoes, samples'}
                      className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-4 py-3 text-sm font-semibold text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-all"
                    />
                  </div>

                  {/* Warehouse destination */}
                  <div className="md:col-span-2">
                    <label className="block text-xs font-extrabold uppercase tracking-wider text-gray-500 mb-1.5">
                      {isRu ? 'Склад в Китае' : 'Warehouse Hub'}
                    </label>
                    <select
                      value={parcelWarehouse}
                      onChange={(e) => setParcelWarehouse(e.target.value as WarehouseDestination)}
                      className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-3 py-3 text-sm font-semibold text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-all"
                    >
                      {WAREHOUSES.map((wh) => (
                        <option key={wh.id} value={wh.id}>
                          {isRu ? wh.badgeRu : wh.badgeEn}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Submit Button */}
                  <div className="md:col-span-2">
                    <button
                      type="submit"
                      disabled={isSubmittingParcel}
                      className="w-full bg-brand-blue hover:bg-blue-600 text-white py-3 px-4 rounded-2xl font-bold text-sm transition-all shadow-md active:scale-95 flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer"
                    >
                      {isSubmittingParcel ? (
                        <Loader2 size={16} className="animate-spin" />
                      ) : (
                        <>
                          <Plus size={16} />
                          <span>{isRu ? 'Добавить' : 'Add'}</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>

                {parcelSuccessMsg && (
                  <div className="mt-4 p-3 bg-emerald-50 border border-emerald-200 rounded-2xl flex items-center gap-3 text-emerald-700 text-xs font-bold animate-fade-in">
                    <CheckCircle2 size={16} className="shrink-0" />
                    <span>{parcelSuccessMsg}</span>
                  </div>
                )}
              </div>

              {/* Inbound Parcels Table Section */}
              <div className="bg-white rounded-[32px] p-6 sm:p-7 border border-gray-200/80 shadow-xs space-y-5">
                
                {/* Filter Tabs and Search Bar */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                  
                  {/* Status sub-tabs: All, Awaiting, Arrived, Consolidated */}
                  <div className="flex items-center gap-1 bg-gray-100 p-1.5 rounded-2xl overflow-x-auto">
                    <button
                      onClick={() => setInboundSubFilter('all')}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                        inboundSubFilter === 'all'
                          ? 'bg-white text-brand-dark shadow-xs'
                          : 'text-gray-500 hover:text-brand-dark'
                      }`}
                    >
                      <span>{isRu ? 'Все входящие' : 'All Inbound'}</span>
                      <span className="bg-gray-200 text-gray-700 px-1.5 py-0.2 rounded-md text-[10px]">
                        {inboundParcels.length}
                      </span>
                    </button>

                    <button
                      onClick={() => setInboundSubFilter('expected')}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                        inboundSubFilter === 'expected'
                          ? 'bg-white text-amber-800 shadow-xs'
                          : 'text-gray-500 hover:text-brand-dark'
                      }`}
                    >
                      <Clock size={12} className="text-amber-600" />
                      <span>{isRu ? 'Ожидаются' : 'Awaiting'}</span>
                      <span className="bg-amber-100 text-amber-800 px-1.5 py-0.2 rounded-md text-[10px]">
                        {inboundParcels.filter(p => p.status === 'expected').length}
                      </span>
                    </button>

                    <button
                      onClick={() => setInboundSubFilter('arrived')}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                        inboundSubFilter === 'arrived'
                          ? 'bg-white text-blue-800 shadow-xs'
                          : 'text-gray-500 hover:text-brand-dark'
                      }`}
                    >
                      <Box size={12} className="text-blue-600" />
                      <span>{isRu ? 'На складе' : 'In Warehouse'}</span>
                      <span className="bg-blue-100 text-blue-800 px-1.5 py-0.2 rounded-md text-[10px]">
                        {inboundParcels.filter(p => p.status === 'arrived').length}
                      </span>
                    </button>

                    <button
                      onClick={() => setInboundSubFilter('consolidated')}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                        inboundSubFilter === 'consolidated'
                          ? 'bg-white text-purple-800 shadow-xs'
                          : 'text-gray-500 hover:text-brand-dark'
                      }`}
                    >
                      <PackageCheck size={12} className="text-purple-600" />
                      <span>{isRu ? 'В сборке' : 'Consolidated'}</span>
                      <span className="bg-purple-100 text-purple-800 px-1.5 py-0.2 rounded-md text-[10px]">
                        {inboundParcels.filter(p => p.status === 'consolidated').length}
                      </span>
                    </button>
                  </div>

                  {/* Search input */}
                  <div className="relative">
                    <Search size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder={isRu ? 'Поиск по треку или товару...' : 'Search tracking...'}
                      className="w-full sm:w-60 pl-9 pr-3 py-2 bg-gray-50 border border-gray-200 rounded-xl text-xs font-semibold text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue"
                    />
                  </div>
                </div>

                {/* Table Content */}
                {loadingParcels ? (
                  <div className="py-16 text-center text-gray-400 flex flex-col items-center justify-center gap-3">
                    <Loader2 size={30} className="animate-spin text-brand-blue" />
                    <span className="text-xs font-bold">{isRu ? 'Загрузка посылок...' : 'Loading packages...'}</span>
                  </div>
                ) : filteredInbound.length === 0 ? (
                  <div className="py-16 text-center border-2 border-dashed border-gray-200 rounded-3xl p-8">
                    <Inbox size={42} className="mx-auto text-gray-300 mb-3" />
                    <h4 className="font-extrabold text-brand-dark text-base mb-1">
                      {isRu ? 'Посылок пока нет' : 'No incoming packages yet'}
                    </h4>
                    <p className="text-xs text-gray-400 max-w-sm mx-auto">
                      {isRu 
                        ? 'Внесите трек-номер в форме выше, как только продавец отправит ваш заказ.' 
                        : 'Register domestic China tracking using the form above when your seller ships.'}
                    </p>
                  </div>
                ) : (
                  <div className="overflow-x-auto rounded-2xl border border-gray-200/80">
                    <table className="w-full text-left border-collapse text-xs">
                      <thead>
                        <tr className="bg-gray-50/90 border-b border-gray-200 text-gray-500 font-extrabold uppercase tracking-wider text-[11px]">
                          <th className="py-3.5 px-4">{isRu ? 'Трек-номер по Китаю' : 'China Inbound Tracking'}</th>
                          <th className="py-3.5 px-4">{isRu ? 'Товар / Описание' : 'Product / Description'}</th>
                          <th className="py-3.5 px-4">{isRu ? 'Склад в Китае' : 'Warehouse Hub'}</th>
                          <th className="py-3.5 px-4">{isRu ? 'Статус' : 'Status'}</th>
                          <th className="py-3.5 px-4 text-right">{isRu ? 'Дата' : 'Date'}</th>
                          <th className="py-3.5 px-4 text-right">{isRu ? 'Действие' : 'Action'}</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100 bg-white">
                        {filteredInbound.map((parcel) => {
                          const statusInfo = getInboundStatusBadge(parcel.status, parcel.shipmentNumber);
                          return (
                            <tr key={parcel.id} className="hover:bg-gray-50/60 transition-colors">
                              {/* Tracking */}
                              <td className="py-4 px-4 font-mono font-bold text-sm text-brand-dark">
                                <div className="flex items-center gap-1.5">
                                  <span>{parcel.inboundTracking}</span>
                                  <button
                                    onClick={() => handleCopy(parcel.inboundTracking, parcel.id)}
                                    title={isRu ? 'Копировать' : 'Copy'}
                                    className="p-1 text-gray-400 hover:text-brand-blue cursor-pointer transition-colors"
                                  >
                                    {copiedKey === parcel.id ? (
                                      <Check size={13} className="text-emerald-500" />
                                    ) : (
                                      <Copy size={13} />
                                    )}
                                  </button>
                                </div>
                              </td>

                              {/* Product Description */}
                              <td className="py-4 px-4">
                                <div className="font-bold text-brand-dark">{parcel.productTitle}</div>
                                {parcel.notes && (
                                  <div className="text-[11px] text-gray-400 italic mt-0.5 max-w-xs truncate">
                                    💬 {parcel.notes}
                                  </div>
                                )}
                              </td>

                              {/* Warehouse */}
                              <td className="py-4 px-4 text-gray-600 font-medium">
                                {getWarehouseNameById(parcel.warehouseDestination)}
                              </td>

                              {/* Status Badge */}
                              <td className="py-4 px-4">
                                <span className={`inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full border ${statusInfo.bg}`}>
                                  {statusInfo.icon}
                                  <span>{statusInfo.label}</span>
                                </span>
                              </td>

                              {/* Date */}
                              <td className="py-4 px-4 text-right text-gray-400 text-xs font-medium whitespace-nowrap">
                                {new Date(parcel.createdAt).toLocaleDateString(isRu ? 'ru-RU' : 'en-US')}
                              </td>

                              {/* Action Buttons */}
                              <td className="py-4 px-4 text-right whitespace-nowrap">
                                {parcel.status === 'expected' ? (
                                  <div className="flex items-center justify-end gap-1">
                                    <button
                                      onClick={() => handleStartEditParcel(parcel)}
                                      title={isRu ? 'Редактировать трек' : 'Edit tracking'}
                                      className="p-1.5 text-gray-400 hover:text-brand-blue hover:bg-blue-50 rounded-lg transition-colors cursor-pointer"
                                    >
                                      <Edit2 size={14} />
                                    </button>
                                    <button
                                      onClick={() => handleDeleteCustomerParcel(parcel.id)}
                                      title={isRu ? 'Удалить посылку' : 'Delete parcel'}
                                      className="p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors cursor-pointer"
                                    >
                                      <Trash2 size={14} />
                                    </button>
                                  </div>
                                ) : parcel.status === 'arrived' ? (
                                  <span className="bg-blue-50 text-blue-700 px-2.5 py-1 rounded-lg text-[11px] font-bold border border-blue-200">
                                    {isRu ? 'Готов к сборке' : 'Ready for pack'}
                                  </span>
                                ) : (
                                  <button
                                    onClick={() => setActiveTab('outbound')}
                                    className="text-brand-blue hover:underline text-xs font-bold cursor-pointer inline-flex items-center gap-1"
                                  >
                                    <span>{isRu ? 'В коробке' : 'In Box'}</span>
                                    <ChevronRight size={12} />
                                  </button>
                                )}
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                )}

              </div>

            </div>
          )}

          {/* ========================================================================= */}
          {/* TAB 2: ОТПРАВЛЯЕМ МЫ (Сконсолидированные международные отправления) */}
          {/* ========================================================================= */}
          {activeTab === 'outbound' && (
            <div className="space-y-6 animate-fade-in">
              
              <div className="bg-white rounded-[32px] p-6 sm:p-7 border border-gray-200/80 shadow-xs space-y-5">
                
                {/* Header title */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <h2 className="text-lg sm:text-xl font-black text-brand-dark flex items-center gap-2">
                      <Truck size={22} className="text-brand-blue" />
                      <span>{isRu ? 'Сформированные отправления' : 'Outbound Shipments'}</span>
                    </h2>
                    <p className="text-xs text-gray-500 mt-1">
                      {isRu 
                        ? 'Склад объединяет ваши товары в коробку, делает общее фото, рассчитывает вес и присваивает международный трек (СДЭК/Карго).' 
                        : 'Consolidated boxes packed for you with inspection photo, weight, cost and international tracking.'}
                    </p>
                  </div>
                </div>

                {/* Sub-tabs bar: All, Packed, Awaiting payment, In transit, Delivered */}
                <div className="flex flex-wrap items-center gap-1.5 bg-gray-100 p-1.5 rounded-2xl">
                  <button
                    onClick={() => setOutboundSubFilter('all')}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                      outboundSubFilter === 'all'
                        ? 'bg-white text-brand-dark shadow-xs'
                        : 'text-gray-500 hover:text-brand-dark'
                    }`}
                  >
                    <span>{isRu ? 'Все отправления' : 'All Outbound'}</span>
                    <span className="bg-gray-200 text-gray-700 px-1.5 py-0.2 rounded-md text-[10px]">
                      {shipments.length}
                    </span>
                  </button>

                  <button
                    onClick={() => setOutboundSubFilter('packed')}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                      outboundSubFilter === 'packed'
                        ? 'bg-white text-purple-800 shadow-xs'
                        : 'text-gray-500 hover:text-brand-dark'
                    }`}
                  >
                    <Package size={12} className="text-purple-600" />
                    <span>{isRu ? 'Упаковано' : 'Packed'}</span>
                    <span className="bg-purple-100 text-purple-800 px-1.5 py-0.2 rounded-md text-[10px]">
                      {shipments.filter(s => s.status === 'packed').length}
                    </span>
                  </button>

                  <button
                    onClick={() => setOutboundSubFilter('awaiting_payment')}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                      outboundSubFilter === 'awaiting_payment'
                        ? 'bg-white text-orange-800 shadow-xs'
                        : 'text-gray-500 hover:text-brand-dark'
                    }`}
                  >
                    <CreditCard size={12} className="text-orange-600" />
                    <span>{isRu ? 'Ожидает оплаты' : 'Awaiting Payment'}</span>
                    <span className="bg-orange-100 text-orange-800 px-1.5 py-0.2 rounded-md text-[10px]">
                      {awaitingPaymentShipmentsCount}
                    </span>
                  </button>

                  <button
                    onClick={() => setOutboundSubFilter('in_transit')}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                      outboundSubFilter === 'in_transit'
                        ? 'bg-white text-indigo-800 shadow-xs'
                        : 'text-gray-500 hover:text-brand-dark'
                    }`}
                  >
                    <Truck size={12} className="text-indigo-600" />
                    <span>{isRu ? 'В пути' : 'In Transit'}</span>
                    <span className="bg-indigo-100 text-indigo-800 px-1.5 py-0.2 rounded-md text-[10px]">
                      {shipments.filter(s => s.status === 'in_transit').length}
                    </span>
                  </button>

                  <button
                    onClick={() => setOutboundSubFilter('delivered')}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                      outboundSubFilter === 'delivered'
                        ? 'bg-white text-emerald-800 shadow-xs'
                        : 'text-gray-500 hover:text-brand-dark'
                    }`}
                  >
                    <CheckCircle2 size={12} className="text-emerald-600" />
                    <span>{isRu ? 'Доставлено' : 'Delivered'}</span>
                    <span className="bg-emerald-100 text-emerald-800 px-1.5 py-0.2 rounded-md text-[10px]">
                      {shipments.filter(s => s.status === 'delivered').length}
                    </span>
                  </button>
                </div>

                {/* Table Content */}
                {loadingShipments ? (
                  <div className="py-16 text-center text-gray-400 flex flex-col items-center justify-center gap-3">
                    <Loader2 size={30} className="animate-spin text-brand-blue" />
                    <span className="text-xs font-bold">{isRu ? 'Загрузка отправлений...' : 'Loading outbound...'}</span>
                  </div>
                ) : filteredShipments.length === 0 ? (
                  <div className="py-16 text-center border-2 border-dashed border-gray-200 rounded-3xl p-8">
                    <Truck size={42} className="mx-auto text-gray-300 mb-3" />
                    <h4 className="font-extrabold text-brand-dark text-base mb-1">
                      {isRu ? 'Нет отправлений в этой категории' : 'No outbound shipments found'}
                    </h4>
                    <p className="text-xs text-gray-400 max-w-sm mx-auto mb-4">
                      {isRu 
                        ? 'Как только склад получит ваши посылки, они будут объединены в международную коробку с фото и расчетом.' 
                        : 'Consolidated shipments to your final destination will appear here.'}
                    </p>
                    <button
                      onClick={() => setActiveTab('inbound')}
                      className="bg-brand-blue text-white px-4 py-2 rounded-xl text-xs font-bold hover:bg-blue-600 transition-all cursor-pointer"
                    >
                      {isRu ? 'Перейти к входящим посылкам' : 'View Incoming Packages'}
                    </button>
                  </div>
                ) : (
                  <div className="overflow-x-auto rounded-2xl border border-gray-200/80">
                    <table className="w-full text-left border-collapse text-xs">
                      <thead>
                        <tr className="bg-gray-50/90 border-b border-gray-200 text-gray-500 font-extrabold uppercase tracking-wider text-[11px]">
                          <th className="py-3.5 px-4">{isRu ? '№ Отправления' : 'Shipment #'}</th>
                          <th className="py-3.5 px-4">{isRu ? 'Китайские треки в посылке' : 'Included Goods'}</th>
                          <th className="py-3.5 px-4">{isRu ? 'Фото партии' : 'Photo'}</th>
                          <th className="py-3.5 px-4">{isRu ? 'Вес (кг)' : 'Weight'}</th>
                          <th className="py-3.5 px-4">{isRu ? 'К оплате & Статус' : 'Cost & Status'}</th>
                          <th className="py-3.5 px-4">{isRu ? 'Междунар. трек (СДЭК)' : 'Outbound Track'}</th>
                          <th className="py-3.5 px-4">{isRu ? 'Статус' : 'Status'}</th>
                          <th className="py-3.5 px-4 text-right">{isRu ? 'Вопрос / Связь' : 'Action'}</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100 bg-white">
                        {filteredShipments.map((shipment) => {
                          const statusInfo = getOutboundStatusBadge(shipment.status);
                          return (
                            <tr key={shipment.id} className="hover:bg-gray-50/60 transition-colors">
                              
                              {/* Shipment Number */}
                              <td className="py-4 px-4 font-mono font-black text-brand-dark">
                                <span className="bg-brand-blue/10 text-brand-blue px-2.5 py-1 rounded-xl text-xs inline-block">
                                  #{shipment.shipmentNumber}
                                </span>
                              </td>

                              {/* Included Inbound Trackings */}
                              <td className="py-4 px-4 max-w-[220px]">
                                <div className="font-bold text-brand-dark mb-1 truncate">
                                  {shipment.productSummary || (isRu ? 'Сборная посылка' : 'Consolidated Box')}
                                </div>
                                <div className="flex flex-wrap gap-1">
                                  {shipment.inboundTrackings?.map((track, idx) => (
                                    <span 
                                      key={idx} 
                                      className="font-mono text-[10px] bg-gray-100 hover:bg-gray-200 text-gray-700 px-1.5 py-0.5 rounded cursor-pointer transition-colors"
                                      onClick={() => handleCopy(track, `track_${shipment.id}_${idx}`)}
                                      title={isRu ? 'Нажмите, чтобы скопировать' : 'Click to copy'}
                                    >
                                      {track}
                                      {copiedKey === `track_${shipment.id}_${idx}` && ' ✓'}
                                    </span>
                                  ))}
                                </div>
                              </td>

                              {/* Photo Preview Thumbnail */}
                              <td className="py-4 px-4">
                                {shipment.photoUrl ? (
                                  <button
                                    onClick={() => setLightboxPhotoUrl(shipment.photoUrl || null)}
                                    className="w-12 h-12 rounded-xl overflow-hidden border border-gray-200 relative group cursor-pointer block shadow-xs"
                                    title={isRu ? 'Открыть фото в полном размере' : 'View full photo'}
                                  >
                                    <img 
                                      src={shipment.photoUrl} 
                                      alt="Shipment" 
                                      className="w-full h-full object-cover group-hover:scale-110 transition-transform" 
                                    />
                                    <div className="absolute inset-0 bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                                      <Eye size={16} />
                                    </div>
                                  </button>
                                ) : (
                                  <span className="text-[11px] text-gray-400 italic">
                                    {isRu ? 'Фото загружается' : 'Processing photo'}
                                  </span>
                                )}
                              </td>

                              {/* Weight */}
                              <td className="py-4 px-4 font-bold text-brand-dark whitespace-nowrap">
                                {shipment.weight ? `${shipment.weight} кг` : (isRu ? 'Взвешивается' : 'Weighing')}
                              </td>

                              {/* Cost & Payment */}
                              <td className="py-4 px-4 whitespace-nowrap">
                                {shipment.shippingCost ? (
                                  <div className="space-y-1">
                                    <div className="font-black text-brand-dark text-xs">{shipment.shippingCost}</div>
                                    <div className="flex items-center gap-1.5">
                                      <span className={`inline-block text-[10px] font-bold px-2 py-0.5 rounded-md ${
                                        shipment.paymentStatus === 'paid' 
                                          ? 'bg-emerald-100 text-emerald-800' 
                                          : 'bg-orange-100 text-orange-800'
                                      }`}>
                                        {shipment.paymentStatus === 'paid' ? (isRu ? 'Оплачено' : 'Paid') : (isRu ? 'Ждёт оплаты' : 'Unpaid')}
                                      </span>
                                      {shipment.paymentStatus !== 'paid' && (
                                        <button
                                          onClick={() => setPaymentShipment(shipment)}
                                          className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-[10px] px-2 py-0.5 rounded-md cursor-pointer transition-colors"
                                        >
                                          {isRu ? 'Оплатить' : 'Pay'}
                                        </button>
                                      )}
                                    </div>
                                  </div>
                                ) : (
                                  <span className="text-gray-400 text-xs italic">
                                    {isRu ? 'Расчет при взвешивании' : 'Pending'}
                                  </span>
                                )}
                              </td>

                              {/* Outbound Tracking (CDEK) */}
                              <td className="py-4 px-4 font-mono font-bold text-brand-blue whitespace-nowrap">
                                {shipment.outboundTracking ? (
                                  <div className="flex items-center gap-1.5">
                                    <Truck size={14} />
                                    <span>{shipment.outboundTracking}</span>
                                    <button
                                      onClick={() => handleCopy(shipment.outboundTracking!, `out_${shipment.id}`)}
                                      title={isRu ? 'Копировать' : 'Copy'}
                                      className="p-1 text-gray-400 hover:text-brand-blue cursor-pointer transition-colors"
                                    >
                                      {copiedKey === `out_${shipment.id}` ? (
                                        <Check size={13} className="text-emerald-500" />
                                      ) : (
                                        <Copy size={13} />
                                      )}
                                    </button>
                                  </div>
                                ) : (
                                  <span className="text-gray-400 italic text-xs">
                                    {isRu ? 'Формируется трек' : 'Generating track'}
                                  </span>
                                )}
                              </td>

                              {/* Status Badge */}
                              <td className="py-4 px-4 whitespace-nowrap">
                                <span className={`inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full border ${statusInfo.bg}`}>
                                  {statusInfo.icon}
                                  <span>{statusInfo.label}</span>
                                </span>
                              </td>

                              {/* Quick Question / Photo Request Button */}
                              <td className="py-4 px-4 text-right whitespace-nowrap">
                                <a
                                  href={`https://t.me/${SUPPORT_CONTACTS.telegramUsername}?text=${encodeURIComponent(
                                    `Здравствуйте! Мой ID: ${user.clientCode}. Вопрос по отправлению #${shipment.shipmentNumber}${shipment.outboundTracking ? ` (трек: ${shipment.outboundTracking})` : ''}. Прошу предоставить детальное фото/информацию.`
                                  )}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="bg-brand-blue/10 hover:bg-brand-blue text-brand-blue hover:text-white px-3 py-1.5 rounded-xl font-bold text-xs transition-all inline-flex items-center gap-1.5 cursor-pointer shadow-xs"
                                >
                                  <MessageCircle size={13} />
                                  <span>{isRu ? 'Задать вопрос / фото' : 'Photo / Help'}</span>
                                </a>
                              </td>

                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                )}

              </div>

            </div>
          )}

          {/* ========================================================================= */}
          {/* TAB 3: АДРЕСА СКЛАДОВ В КИТАЕ */}
          {/* ========================================================================= */}
          {activeTab === 'warehouses' && (
            <div className="space-y-6 animate-fade-in">
              
              <div className="bg-white rounded-[32px] md:rounded-[36px] p-6 md:p-8 shadow-xs border border-gray-200/80">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                  <div>
                    <div className="flex items-center gap-2.5">
                      <Warehouse size={24} className="text-brand-blue" />
                      <h1 className="text-xl md:text-2xl font-black text-brand-dark tracking-tight">
                        {isRu ? 'Адреса складов в Китае' : 'China Warehouse Hubs'}
                      </h1>
                    </div>
                    <p className="text-xs md:text-sm text-brand-blue font-bold mt-1.5 flex items-center gap-1.5">
                      <span>💡</span>
                      <span>
                        {isRu 
                          ? 'Выберите склад в зависимости от того, куда вам нужно отправить груз:' 
                          : 'Select a warehouse based on your destination country and shipping mode:'}
                      </span>
                    </p>
                  </div>

                  {/* Recipient Code Badge */}
                  <div className="bg-amber-50 border border-amber-200 px-4 py-2.5 rounded-2xl flex items-center gap-3 shrink-0 self-start md:self-auto">
                    <span className="text-xs font-bold text-amber-800">
                      {isRu ? 'Код получателя:' : 'Recipient Code:'}
                    </span>
                    <span className="font-mono font-black text-base text-brand-dark bg-white px-2.5 py-0.5 rounded-lg border border-amber-200 shadow-xs">
                      {recipientCode}
                    </span>
                  </div>
                </div>

                {/* Warehouse Category Selector Tabs */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 bg-gray-100 p-2 rounded-2xl mb-6">
                  {WAREHOUSES.map((wh) => (
                    <button
                      key={wh.id}
                      onClick={() => setSelectedWarehouseId(wh.id)}
                      className={`p-3.5 rounded-xl font-bold text-xs md:text-sm text-left transition-all flex flex-col justify-between cursor-pointer ${
                        selectedWarehouseId === wh.id
                          ? 'bg-white text-brand-dark shadow-sm border border-gray-200/80'
                          : 'text-gray-500 hover:text-brand-dark hover:bg-gray-200/60'
                      }`}
                    >
                      <span className="truncate">{isRu ? wh.badgeRu : wh.badgeEn}</span>
                      <span className="text-[11px] font-normal text-gray-400 mt-1 line-clamp-1">
                        {wh.id === 'eu_sea_uae_israel' && (isRu ? 'Гуанчжоу (ЕС, Дубай)' : 'Guangzhou (EU, Dubai)')}
                        {wh.id === 'usa_small' && (isRu ? 'Шэньчжэнь (Авиа США < $800)' : 'Shenzhen (Air USA)')}
                        {wh.id === 'usa_amazon_large' && (isRu ? 'Гуанчжоу (Amazon FBA, Опт)' : 'Guangzhou (Amazon FBA)')}
                        {wh.id === 'cis_cargo' && (isRu ? 'Шэньчжэнь (РФ Карго)' : 'Shenzhen (RU Cargo)')}
                      </span>
                    </button>
                  ))}
                </div>

                {/* Selected Warehouse Details Card */}
                <div className="bg-cream/60 rounded-3xl p-5 md:p-7 border border-brand-blue/15 space-y-5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-gray-200/60">
                    <div>
                      <h3 className="font-extrabold text-base md:text-lg text-brand-dark">
                        {isRu ? currentWarehouse.titleRu : currentWarehouse.titleEn}
                      </h3>
                      <p className="text-xs text-gray-600 mt-0.5">
                        {isRu ? currentWarehouse.descriptionRu : currentWarehouse.descriptionEn}
                      </p>
                    </div>

                    {/* 1-click copy all details */}
                    <button
                      onClick={() => {
                        const fullAddr = `${currentWarehouse.addressTemplateCn.replace('{RECIPIENT_CODE}', recipientCode)}, 收件人: ${recipientCode}, 电话: ${WAREHOUSE_PHONE}, 邮编: ${currentWarehouse.zipCode}`;
                        handleCopy(fullAddr, 'full_address');
                      }}
                      className="flex items-center gap-2 bg-brand-dark hover:bg-brand-blue text-white px-4 py-2.5 rounded-xl text-xs font-bold transition-all shadow-md active:scale-95 shrink-0 self-start sm:self-center cursor-pointer"
                    >
                      {copiedKey === 'full_address' ? (
                        <>
                          <Check size={14} className="text-emerald-400" />
                          <span>{isRu ? 'Скопировано!' : 'Copied!'}</span>
                        </>
                      ) : (
                        <>
                          <Copy size={14} />
                          <span>{isRu ? 'Скопировать весь адрес для Taobao/1688' : 'Copy All Info'}</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Address fields grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                    {/* Full Chinese Address Field */}
                    <div className="bg-white p-4 rounded-2xl border border-gray-200/80 md:col-span-2">
                      <div className="flex justify-between items-center mb-1.5">
                        <span className="font-bold text-gray-400 uppercase tracking-wider text-[10px]">
                          {isRu ? 'Адрес на китайском (详细地址)' : 'Address (Chinese)'}
                        </span>
                        <button
                          onClick={() => handleCopy(currentWarehouse.addressTemplateCn.replace('{RECIPIENT_CODE}', recipientCode), 'addr')}
                          className="text-brand-blue hover:underline font-bold text-[11px] flex items-center gap-1 cursor-pointer"
                        >
                          {copiedKey === 'addr' ? <Check size={12} className="text-emerald-500" /> : <Copy size={12} />}
                          {copiedKey === 'addr' ? (isRu ? 'Скопировано' : 'Copied') : (isRu ? 'Копировать' : 'Copy')}
                        </button>
                      </div>
                      <p className="font-mono text-brand-dark font-bold text-sm md:text-base select-all">
                        {currentWarehouse.addressTemplateCn.replace('{RECIPIENT_CODE}', recipientCode)}
                      </p>
                    </div>

                    {/* Recipient Name Field */}
                    <div className="bg-white p-4 rounded-2xl border border-gray-200/80">
                      <div className="flex justify-between items-center mb-1.5">
                        <span className="font-bold text-gray-400 uppercase tracking-wider text-[10px]">
                          {isRu ? 'Имя получателя (收件人)' : 'Recipient Name'}
                        </span>
                        <button
                          onClick={() => handleCopy(recipientCode, 'recipient')}
                          className="text-brand-blue hover:underline font-bold text-[11px] flex items-center gap-1 cursor-pointer"
                        >
                          {copiedKey === 'recipient' ? <Check size={12} className="text-emerald-500" /> : <Copy size={12} />}
                          {copiedKey === 'recipient' ? (isRu ? 'Скопировано' : 'Copied') : (isRu ? 'Копировать' : 'Copy')}
                        </button>
                      </div>
                      <p className="font-mono text-brand-dark font-black text-base select-all">
                        {recipientCode}
                      </p>
                      {!hasName && (
                        <span className="text-[10px] text-amber-700 font-bold block mt-1">
                          {isRu ? '* Заполните ФИО в профиле' : '* Fill name in profile'}
                        </span>
                      )}
                    </div>

                    {/* Warehouse Phone Field */}
                    <div className="bg-white p-4 rounded-2xl border border-gray-200/80">
                      <div className="flex justify-between items-center mb-1.5">
                        <span className="font-bold text-gray-400 uppercase tracking-wider text-[10px]">
                          {isRu ? 'Телефон склада (电话 - единый для всех)' : 'Warehouse Phone'}
                        </span>
                        <button
                          onClick={() => handleCopy(WAREHOUSE_PHONE, 'phone')}
                          className="text-brand-blue hover:underline font-bold text-[11px] flex items-center gap-1 cursor-pointer"
                        >
                          {copiedKey === 'phone' ? <Check size={12} className="text-emerald-500" /> : <Copy size={12} />}
                          {copiedKey === 'phone' ? (isRu ? 'Скопировано' : 'Copied') : (isRu ? 'Копировать' : 'Copy')}
                        </button>
                      </div>
                      <p className="font-mono text-brand-dark font-bold text-base select-all">
                        {WAREHOUSE_PHONE}
                      </p>
                    </div>

                    {/* Postal Code Field */}
                    <div className="bg-white p-4 rounded-2xl border border-gray-200/80 md:col-span-2">
                      <div className="flex justify-between items-center mb-1.5">
                        <span className="font-bold text-gray-400 uppercase tracking-wider text-[10px]">
                          {isRu ? 'Почтовый индекс (邮政编码)' : 'Postal Code'}
                        </span>
                        <button
                          onClick={() => handleCopy(currentWarehouse.zipCode, 'zip')}
                          className="text-brand-blue hover:underline font-bold text-[11px] flex items-center gap-1 cursor-pointer"
                        >
                          {copiedKey === 'zip' ? <Check size={12} className="text-emerald-500" /> : <Copy size={12} />}
                          {copiedKey === 'zip' ? (isRu ? 'Скопировано' : 'Copied') : (isRu ? 'Копировать' : 'Copy')}
                        </button>
                      </div>
                      <p className="font-mono text-brand-dark font-bold text-base select-all">
                        {currentWarehouse.zipCode}
                      </p>
                    </div>
                  </div>

                  {/* Support banner */}
                  <div className="bg-white rounded-2xl p-4 border border-amber-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="flex items-start gap-3">
                      <HelpCircle size={20} className="text-amber-500 shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-bold text-xs sm:text-sm text-brand-dark">
                          {isRu ? 'Нужна помощь в выборе склада?' : 'Need help selecting a warehouse?'}
                        </h4>
                        <p className="text-[11px] text-gray-500 mt-0.5">
                          {isRu 
                            ? 'Напишите нашему менеджеру — подскажем самый быстрый и надежный маршрут.' 
                            : 'Message our support manager with your cargo specs for fast routing advice.'}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0 w-full sm:w-auto">
                      <a
                        href={`https://t.me/${SUPPORT_CONTACTS.telegramUsername}?text=${encodeURIComponent(
                          `Здравствуйте! Мой ID: ${user.clientCode}. Помогите, пожалуйста, выбрать склад в Китае для доставки.`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 bg-[#2AABEE] text-white px-4 py-2 rounded-xl text-xs font-bold hover:brightness-105 transition-all shadow-xs"
                      >
                        <Send size={13} />
                        <span>Telegram</span>
                      </a>
                      <a
                        href={`https://wa.me/${SUPPORT_CONTACTS.whatsappPhone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
                          `Здравствуйте! Мой ID: ${user.clientCode}. Помогите выбрать склад в Китае.`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 bg-[#25D366] text-white px-4 py-2 rounded-xl text-xs font-bold hover:brightness-105 transition-all shadow-xs"
                      >
                        <Phone size={13} />
                        <span>WhatsApp</span>
                      </a>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          )}

          {/* ========================================================================= */}
          {/* TAB 4: АДРЕС ДОСТАВКИ И ПРОФИЛЬ */}
          {/* ========================================================================= */}
          {activeTab === 'profile' && (
            <div className="space-y-6 animate-fade-in">
              
              <div className="bg-white rounded-[32px] md:rounded-[36px] p-6 md:p-8 shadow-xs border border-gray-200/80">
                <div className="flex items-center gap-2.5 mb-2">
                  <User size={24} className="text-brand-blue" />
                  <h1 className="text-xl md:text-2xl font-black text-brand-dark tracking-tight">
                    {isRu ? 'Профиль адреса доставки' : 'Delivery Address Profile'}
                  </h1>
                </div>
                <p className="text-xs md:text-sm text-gray-500 mb-6">
                  {isRu 
                    ? 'Укажите ваше имя для формирования персонального кода получателя (например, IV8143) и адрес для финальной доставки посылок:' 
                    : 'Enter your name to generate your recipient code (e.g. IV8143) and destination shipping address:'}
                </p>

                {profileSavedMsg && (
                  <div className="mb-5 p-3.5 bg-emerald-50 border border-emerald-200 rounded-2xl flex items-center gap-3 text-emerald-700 text-xs font-bold">
                    <CheckCircle2 size={18} className="shrink-0" />
                    <span>{profileSavedMsg}</span>
                  </div>
                )}

                <form onSubmit={handleSaveProfile} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-extrabold uppercase tracking-wider text-gray-500 mb-1.5">
                      {isRu ? 'ФИО Получателя (Full Name) *' : 'Full Name *'}
                    </label>
                    <input
                      ref={fullNameInputRef}
                      type="text"
                      required
                      value={editFullName}
                      onChange={(e) => setEditFullName(e.target.value)}
                      placeholder={isRu ? 'Имя Фамилия' : 'Full Name'}
                      className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-4 py-3 text-sm font-semibold text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-all"
                    />
                    <p className="mt-1.5 text-[11px] text-brand-blue font-bold">
                      {isRu 
                        ? `Настоящее имя и фамилия используются для формирования вашего ID (Код: ${recipientCode})` 
                        : `Your real name is used to generate your client ID (Code: ${recipientCode})`}
                    </p>
                  </div>

                  <div>
                    <label className="block text-xs font-extrabold uppercase tracking-wider text-gray-500 mb-1.5">
                      {isRu ? 'Контактный телефон (Phone Number)' : 'Phone Number'}
                    </label>
                    <input
                      type="tel"
                      value={editPhone}
                      onChange={(e) => setEditPhone(e.target.value)}
                      placeholder="+1 234 56789"
                      className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-4 py-3 text-sm font-semibold text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-all"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-xs font-extrabold uppercase tracking-wider text-gray-500 mb-1.5">
                      {isRu ? 'Адрес доставки (Shipping Address, Including ZIP code)' : 'Shipping Address (Including ZIP code)'}
                    </label>
                    <input
                      type="text"
                      value={editAddress}
                      onChange={(e) => setEditAddress(e.target.value)}
                      placeholder={isRu ? 'Страна, город, почтовый индекс (ZIP), улица, дом, кв' : 'Country, City, ZIP code, Street address, Apt/Suite'}
                      className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-4 py-3 text-sm font-semibold text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-all"
                    />
                  </div>

                  <div className="md:col-span-2 flex justify-end pt-2">
                    <button
                      type="submit"
                      disabled={isUpdatingProfile}
                      className="bg-brand-dark hover:bg-brand-blue text-white px-6 py-3.5 rounded-2xl font-bold text-sm transition-all shadow-md active:scale-95 flex items-center gap-2 disabled:opacity-50 cursor-pointer"
                    >
                      {isUpdatingProfile ? (
                        <Loader2 size={16} className="animate-spin" />
                      ) : (
                        <>
                          <Check size={16} />
                          <span>{isRu ? 'Сохранить профиль доставки' : 'Save Changes'}</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>

            </div>
          )}

        </main>
      </div>

      {/* ========================================================================= */}
      {/* EDIT INBOUND PARCEL MODAL */}
      {/* ========================================================================= */}
      {editingParcel && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-brand-dark/75 backdrop-blur-sm animate-fade-in"
          onClick={() => setEditingParcel(null)}
        >
          <div 
            className="bg-white rounded-3xl p-6 sm:p-7 max-w-md w-full shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setEditingParcel(null)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 hover:text-brand-dark cursor-pointer"
            >
              <X size={16} />
            </button>

            <h3 className="font-extrabold text-base text-brand-dark mb-4">
              {isRu ? 'Редактировать входящую посылку' : 'Edit Incoming Parcel'}
            </h3>

            <form onSubmit={handleSaveParcelEdit} className="space-y-4 text-xs">
              <div>
                <label className="block font-bold text-gray-500 uppercase tracking-wider mb-1">
                  {isRu ? 'Трек-номер по Китаю *' : 'China Tracking *'}
                </label>
                <input
                  type="text"
                  required
                  value={editInboundTracking}
                  onChange={(e) => setEditInboundTracking(e.target.value)}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2.5 font-mono font-bold text-brand-dark focus:outline-none"
                />
              </div>

              <div>
                <label className="block font-bold text-gray-500 uppercase tracking-wider mb-1">
                  {isRu ? 'Описание товара' : 'Description'}
                </label>
                <input
                  type="text"
                  value={editProductTitle}
                  onChange={(e) => setEditProductTitle(e.target.value)}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2.5 font-semibold text-brand-dark focus:outline-none"
                />
              </div>

              <div>
                <label className="block font-bold text-gray-500 uppercase tracking-wider mb-1">
                  {isRu ? 'Склад назначения' : 'Warehouse Hub'}
                </label>
                <select
                  value={editWarehouse}
                  onChange={(e) => setEditWarehouse(e.target.value as WarehouseDestination)}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2.5 font-bold text-brand-dark focus:outline-none"
                >
                  {WAREHOUSES.map(w => (
                    <option key={w.id} value={w.id}>
                      {isRu ? w.badgeRu : w.badgeEn}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                <button
                  type="button"
                  onClick={() => handleDeleteCustomerParcel(editingParcel.id)}
                  className="text-red-500 hover:text-red-700 font-bold flex items-center gap-1 cursor-pointer"
                >
                  <Trash2 size={14} />
                  <span>{isRu ? 'Удалить' : 'Delete'}</span>
                </button>

                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => setEditingParcel(null)}
                    className="px-3.5 py-2 rounded-xl font-bold text-gray-500 hover:bg-gray-100 cursor-pointer"
                  >
                    {isRu ? 'Отмена' : 'Cancel'}
                  </button>
                  <button
                    type="submit"
                    disabled={isSavingParcel}
                    className="bg-brand-blue hover:bg-blue-600 text-white px-5 py-2 rounded-xl font-bold transition-all shadow-md active:scale-95 flex items-center gap-1.5 cursor-pointer"
                  >
                    {isSavingParcel ? <Loader2 size={14} className="animate-spin" /> : <Check size={14} />}
                    <span>{isRu ? 'Сохранить' : 'Save'}</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* PHOTO LIGHTBOX MODAL */}
      {/* ========================================================================= */}
      {lightboxPhotoUrl && (
        <div 
          className="fixed inset-0 z-[120] flex items-center justify-center p-3 sm:p-5 bg-black/85 backdrop-blur-md animate-fade-in"
          onClick={() => setLightboxPhotoUrl(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] flex flex-col items-center">
            <button
              onClick={() => setLightboxPhotoUrl(null)}
              className="absolute -top-12 right-0 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full cursor-pointer transition-colors"
            >
              <X size={20} />
            </button>
            <img 
              src={lightboxPhotoUrl} 
              alt="Parcel photo" 
              className="max-w-full max-h-[85vh] rounded-2xl object-contain shadow-2xl border border-white/10" 
              onClick={(e) => e.stopPropagation()} 
            />
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* PAYMENT DETAILS MODAL FOR SHIPMENT */}
      {/* ========================================================================= */}
      {paymentShipment && (
        <div 
          className="fixed inset-0 z-50 bg-brand-dark/60 backdrop-blur-xs flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setPaymentShipment(null)}
        >
          <div 
            className="bg-white rounded-3xl p-6 sm:p-7 max-w-md w-full shadow-2xl border border-gray-100"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-gray-100 mb-4">
              <div className="flex items-center gap-2 text-brand-dark font-extrabold text-base">
                <CreditCard size={20} className="text-orange-500" />
                <span>{isRu ? 'Оплата доставки' : 'Shipping Payment'}</span>
              </div>
              <button
                onClick={() => setPaymentShipment(null)}
                className="text-gray-400 hover:text-brand-dark font-bold text-sm cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="space-y-4 text-xs">
              <div className="bg-gray-50 p-4 rounded-2xl border border-gray-200/70 space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-500">{isRu ? 'Отправление:' : 'Shipment:'}</span>
                  <span className="font-mono font-bold text-brand-dark">#{paymentShipment.shipmentNumber}</span>
                </div>
                {paymentShipment.weight > 0 && (
                  <div className="flex justify-between">
                    <span className="text-gray-500">{isRu ? 'Вес коробки:' : 'Weight:'}</span>
                    <span className="font-bold text-brand-dark">{paymentShipment.weight} кг</span>
                  </div>
                )}
                {paymentShipment.outboundTracking && (
                  <div className="flex justify-between">
                    <span className="text-gray-500">{isRu ? 'Трек-номер СДЭК:' : 'Tracking:'}</span>
                    <span className="font-mono font-bold text-brand-blue">{paymentShipment.outboundTracking}</span>
                  </div>
                )}
                <div className="flex justify-between pt-2 border-t border-gray-200/70">
                  <span className="font-bold text-gray-700">{isRu ? 'Сумма к оплате:' : 'Amount due:'}</span>
                  <span className="font-black text-emerald-600 text-sm">{paymentShipment.shippingCost}</span>
                </div>
              </div>

              <p className="text-gray-500 leading-relaxed">
                {isRu 
                  ? 'Оплатите удобным для вас способом (банковская карта РФ/Мир, криптовалюта USDT TRC20, перевод, безнал для юрлиц) через менеджера:' 
                  : 'Pay via card, wire, or cryptocurrency through our finance manager:'}
              </p>

              <div className="grid grid-cols-2 gap-2 pt-2">
                <a
                  href={`https://t.me/${SUPPORT_CONTACTS.telegramUsername}?text=${encodeURIComponent(
                    `Здравствуйте! Хочу оплатить отправление #${paymentShipment.shipmentNumber} на сумму ${paymentShipment.shippingCost}. Мой ID: ${user.clientCode}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 bg-[#2AABEE] text-white py-3 rounded-xl font-bold text-xs hover:brightness-105 transition-all shadow-xs"
                >
                  <Send size={13} />
                  <span>Telegram</span>
                </a>
                <a
                  href={`https://wa.me/8613048875834?text=${encodeURIComponent(
                    `Здравствуйте! Оплата отправления #${paymentShipment.shipmentNumber} (${paymentShipment.shippingCost}). ID: ${user.clientCode}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 bg-[#25D366] text-white py-3 rounded-xl font-bold text-xs hover:brightness-105 transition-all shadow-xs"
                >
                  <Phone size={13} />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="py-6 text-center text-xs text-gray-400 border-t border-gray-200/60 mt-12 bg-white">
        © {new Date().getFullYear()} HappyBox Logistics. All rights reserved.
      </footer>
    </div>
  );
};

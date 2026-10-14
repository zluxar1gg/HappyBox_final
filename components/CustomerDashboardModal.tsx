import React, { useState, useEffect } from 'react';
import { 
  X, 
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
  ExternalLink, 
  HelpCircle,
  Loader2,
  AlertCircle,
  Phone,
  User,
  ShieldCheck,
  CreditCard
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { Parcel, ParcelStatus, WarehouseDestination } from '../types';
import { 
  WAREHOUSES, 
  SUPPORT_CONTACTS, 
  WAREHOUSE_PHONE, 
  formatRecipientCode, 
  getClientCodeNumber 
} from '../constants';
import { createParcel, subscribeToCustomerParcels } from '../services/parcelService';
import { updateUserProfile } from '../services/authService';
import { Language } from '../utils/translations';

interface CustomerDashboardModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
}

export const CustomerDashboardModal: React.FC<CustomerDashboardModalProps> = ({ 
  isOpen, 
  onClose, 
  language 
}) => {
  const { user, logout, refreshProfile } = useAuth();

  const isRu = language === 'ru';

  // Active warehouse tab
  const [selectedWarehouseId, setSelectedWarehouseId] = useState<WarehouseDestination>('eu_sea_uae_israel');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  // New parcel form states
  const [inboundTracking, setInboundTracking] = useState('');
  const [productTitle, setProductTitle] = useState('');
  const [parcelWarehouse, setParcelWarehouse] = useState<WarehouseDestination>('eu_sea_uae_israel');
  const [parcelNotes, setParcelNotes] = useState('');
  const [isSubmittingParcel, setIsSubmittingParcel] = useState(false);
  const [parcelSuccessMsg, setParcelSuccessMsg] = useState<string | null>(null);
  const [parcelErrorMsg, setParcelErrorMsg] = useState<string | null>(null);

  // Customer parcels list
  const [parcels, setParcels] = useState<Parcel[]>([]);
  const [loadingParcels, setLoadingParcels] = useState(true);
  const [statusFilter, setStatusFilter] = useState<'all' | ParcelStatus>('all');

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

  // Subscribe to customer parcels
  useEffect(() => {
    if (!user?.uid || !isOpen) return;

    setLoadingParcels(true);
    const unsubscribe = subscribeToCustomerParcels(
      user.uid,
      (data) => {
        setParcels(data);
        setLoadingParcels(false);
      },
      () => {
        setLoadingParcels(false);
      }
    );

    return () => unsubscribe();
  }, [user?.uid, isOpen]);

  if (!isOpen || !user) return null;

  const currentWarehouse = WAREHOUSES.find(w => w.id === selectedWarehouseId) || WAREHOUSES[0];

  const isNameFilled = Boolean(
    user.fullName && 
    user.fullName.trim() && 
    user.fullName.trim().toLowerCase() !== 'клиент' && 
    user.fullName.trim().toLowerCase() !== 'client'
  );
  const recipientCode = isNameFilled 
    ? formatRecipientCode(user.fullName, user.clientCode) 
    : (user.clientCode && !user.clientCode.startsWith('HB-') ? user.clientCode : `HB-${getClientCodeNumber(user.clientCode)}`);

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2500);
  };

  const handleAddParcel = async (e: React.FormEvent) => {
    e.preventDefault();
    setParcelErrorMsg(null);
    setParcelSuccessMsg(null);

    if (!inboundTracking.trim()) {
      setParcelErrorMsg(isRu ? 'Введите трек-номер' : 'Please enter tracking number');
      return;
    }

    setIsSubmittingParcel(true);
    try {
      await createParcel({
        userId: user.uid,
        clientCode: user.clientCode,
        inboundTracking: inboundTracking.trim(),
        productTitle: productTitle.trim() || (isRu ? 'Товар' : 'Goods'),
        warehouseDestination: parcelWarehouse,
        notes: parcelNotes.trim()
      });

      setInboundTracking('');
      setProductTitle('');
      setParcelNotes('');
      setParcelSuccessMsg(isRu ? 'Посылка успешно добавлена в список ожидания!' : 'Parcel added to expected list!');
      setTimeout(() => setParcelSuccessMsg(null), 4000);
    } catch (err: any) {
      console.error('Error adding parcel:', err);
      setParcelErrorMsg(isRu ? 'Ошибка при добавлении посылки' : 'Failed to add parcel');
    } finally {
      setIsSubmittingParcel(false);
    }
  };

  const handleSaveProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsUpdatingProfile(true);
    setProfileSavedMsg(null);
    try {
      await updateUserProfile(user.uid, {
        fullName: editFullName.trim(),
        phone: editPhone.trim(),
        shippingAddress: editAddress.trim()
      });
      await refreshProfile();
      setProfileSavedMsg(isRu ? 'Данные доставки сохранены!' : 'Profile updated successfully!');
      setTimeout(() => setProfileSavedMsg(null), 3000);
    } catch (err) {
      console.error('Error updating profile:', err);
    } finally {
      setIsUpdatingProfile(false);
    }
  };

  const getStatusBadge = (status: ParcelStatus) => {
    switch (status) {
      case 'expected':
        return {
          label: isRu ? 'Ожидается' : 'Awaiting',
          bg: 'bg-amber-50 text-amber-700 border-amber-200',
          icon: <Clock size={13} className="shrink-0" />
        };
      case 'arrived':
        return {
          label: isRu ? 'На складе' : 'At Warehouse',
          bg: 'bg-blue-50 text-blue-700 border-blue-200',
          icon: <Box size={13} className="shrink-0" />
        };
      case 'packing':
        return {
          label: isRu ? 'Упаковывается' : 'Packing',
          bg: 'bg-purple-50 text-purple-700 border-purple-200',
          icon: <Package size={13} className="shrink-0" />
        };
      case 'awaiting_payment':
        return {
          label: isRu ? 'Ожидает оплаты' : 'Awaiting Payment',
          bg: 'bg-orange-50 text-orange-700 border-orange-200',
          icon: <CreditCard size={13} className="shrink-0" />
        };
      case 'shipped':
        return {
          label: isRu ? 'В пути' : 'In Transit',
          bg: 'bg-indigo-50 text-indigo-700 border-indigo-200',
          icon: <Truck size={13} className="shrink-0" />
        };
      case 'delivered':
        return {
          label: isRu ? 'Доставлено' : 'Delivered',
          bg: 'bg-emerald-50 text-emerald-700 border-emerald-200',
          icon: <CheckCircle2 size={13} className="shrink-0" />
        };
      case 'consolidated':
      default:
        return {
          label: isRu ? 'Сконсолидировано' : 'Consolidated',
          bg: 'bg-purple-50 text-purple-700 border-purple-200',
          icon: <Package size={13} className="shrink-0" />
        };
    }
  };

  const filteredParcels = parcels.filter(p => {
    if (statusFilter === 'all') return true;
    return p.status === statusFilter;
  });

  const getWarehouseNameById = (id: WarehouseDestination) => {
    const wh = WAREHOUSES.find(w => w.id === id);
    return wh ? (isRu ? wh.titleRu : wh.titleEn) : id;
  };

  const supportMessage = encodeURIComponent(
    `Здравствуйте! Мой ID: ${user.clientCode}. Подскажите, пожалуйста, на какой склад HappyBox лучше отправить мой груз?`
  );

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-4 bg-brand-dark/75 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="bg-cream w-full max-w-6xl max-h-[96vh] rounded-[32px] md:rounded-[40px] shadow-2xl flex flex-col overflow-hidden border border-gray-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="bg-white px-6 py-4 md:px-8 md:py-5 border-b border-gray-100 flex flex-wrap items-center justify-between gap-4 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 bg-brand-blue/10 text-brand-blue rounded-2xl flex items-center justify-center font-black text-lg">
              <Package size={22} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-brand-dark text-lg md:text-xl">
                  {user.fullName || (isRu ? 'Мой аккаунт' : 'My Account')}
                </span>
                <span className="bg-brand-dark text-amber-400 font-mono font-black text-xs px-2.5 py-0.5 rounded-full shadow-sm">
                  {user.clientCode}
                </span>
              </div>
              <span className="text-xs text-gray-500 font-medium">{user.email}</span>
            </div>
          </div>

          <div className="flex items-center gap-3 ml-auto">
            <button
              onClick={() => {
                logout();
                onClose();
              }}
              className="flex items-center gap-1.5 text-xs font-bold text-gray-500 hover:text-red-600 bg-gray-50 hover:bg-red-50 px-3.5 py-2 rounded-xl transition-all"
            >
              <LogOut size={15} />
              <span>{isRu ? 'Выйти' : 'Sign Out'}</span>
            </button>
            <button
              onClick={onClose}
              className="w-10 h-10 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-full flex items-center justify-center transition-all"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="overflow-y-auto p-4 sm:p-6 md:p-8 space-y-8">
          
          {/* SECTION 1: WAREHOUSES IN CHINA */}
          <section className="bg-white rounded-[32px] p-6 md:p-8 shadow-sm border border-gray-100">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-6">
              <div>
                <div className="flex items-center gap-2">
                  <MapPin size={22} className="text-brand-blue" />
                  <h2 className="text-xl md:text-2xl font-black text-brand-dark tracking-tight">
                    {isRu ? 'Адреса складов в Китае' : 'China Warehouse Addresses'}
                  </h2>
                </div>
                <p className="text-xs md:text-sm text-gray-700 font-bold mt-1.5">
                  {isRu 
                    ? '💡 Выберите склад в зависимости от того, куда вам нужно отправить груз:' 
                    : '💡 Choose a warehouse depending on where you need to ship your cargo:'}
                </p>
              </div>

              {/* Client Code Pill */}
              <div className="bg-amber-50 border border-amber-200 px-4 py-2 rounded-2xl flex items-center gap-2 shrink-0">
                <span className="text-xs font-bold text-amber-800">
                  {isRu ? 'Код получателя:' : 'Recipient Code:'}
                </span>
                <span className="font-mono font-black text-base text-brand-dark">
                  {recipientCode}
                </span>
              </div>
            </div>

            {/* Warehouse Category Selector */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 bg-gray-100 p-1.5 rounded-2xl mb-6">
              {WAREHOUSES.map((wh) => (
                <button
                  key={wh.id}
                  onClick={() => setSelectedWarehouseId(wh.id)}
                  className={`py-3 px-3 rounded-xl font-bold text-xs md:text-sm text-left transition-all flex flex-col justify-between ${
                    selectedWarehouseId === wh.id
                      ? 'bg-white text-brand-dark shadow-sm border border-gray-200/50'
                      : 'text-gray-500 hover:text-brand-dark'
                  }`}
                >
                  <span className="truncate">{isRu ? wh.badgeRu : wh.badgeEn}</span>
                  <span className="text-[10px] font-normal text-gray-400 mt-0.5 line-clamp-1">
                    {wh.id === 'eu_sea_uae_israel' && (isRu ? 'Гуанчжоу (ЕС, Дубай)' : 'Guangzhou (EU, Dubai)')}
                    {wh.id === 'usa_small' && (isRu ? 'Шэньчжэнь (Авиа США < $800)' : 'Shenzhen (Air USA)')}
                    {wh.id === 'usa_amazon_large' && (isRu ? 'Гуанчжоу (Amazon FBA, Опт)' : 'Guangzhou (Amazon FBA)')}
                    {wh.id === 'cis_cargo' && (isRu ? 'Шэньчжэнь (РФ Карго)' : 'Shenzhen (RU Cargo)')}
                  </span>
                </button>
              ))}
            </div>

            {/* Selected Warehouse Details Card */}
            <div className="bg-cream/60 rounded-3xl p-5 md:p-6 border border-brand-blue/15 space-y-4">
              {!isNameFilled && (
                <div className="bg-amber-50 border border-amber-300 rounded-2xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
                  <div className="flex items-center gap-2.5 text-amber-900 font-bold">
                    <AlertCircle size={18} className="text-amber-600 shrink-0" />
                    <span>
                      {isRu 
                        ? 'Пожалуйста, вводите настоящее имя и фамилию — они будут использоваться для создания вашего ID' 
                        : 'Please enter your real first and last name to generate your client ID'}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      const el = document.getElementById('delivery-profile-section');
                      el?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="bg-amber-400 hover:bg-amber-500 text-brand-dark px-3.5 py-1.5 rounded-xl font-black text-xs shrink-0 transition-all shadow-sm cursor-pointer"
                  >
                    {isRu ? 'Заполнить имя' : 'Fill Name'}
                  </button>
                </div>
              )}

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-gray-200/60">
                <div>
                  <h3 className="font-extrabold text-base md:text-lg text-brand-dark">
                    {isRu ? currentWarehouse.titleRu : currentWarehouse.titleEn}
                  </h3>
                  <p className="text-xs text-gray-600 mt-0.5">
                    {isRu ? currentWarehouse.descriptionRu : currentWarehouse.descriptionEn}
                  </p>
                </div>

                <button
                  onClick={() => {
                    const fullAddr = `${currentWarehouse.addressTemplateCn.replace('{RECIPIENT_CODE}', recipientCode)}, 收件人: ${recipientCode}, 电话: ${WAREHOUSE_PHONE}, 邮编: ${currentWarehouse.zipCode}`;
                    handleCopy(fullAddr, 'full_address');
                  }}
                  className="flex items-center gap-2 bg-brand-dark hover:bg-brand-blue text-white px-4 py-2.5 rounded-xl text-xs font-bold transition-all shadow-md active:scale-95 shrink-0 self-start sm:self-center"
                >
                  {copiedKey === 'full_address' ? (
                    <>
                      <Check size={14} className="text-emerald-400" />
                      <span>{isRu ? 'Скопировано!' : 'Copied!'}</span>
                    </>
                  ) : (
                    <>
                      <Copy size={14} />
                      <span>{isRu ? 'Скопировать всё в 1 клик' : 'Copy All Info'}</span>
                    </>
                  )}
                </button>
              </div>

              {/* Chinese Address Details Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                {/* Full Chinese Address Field */}
                <div className="bg-white p-4 rounded-2xl border border-gray-200/80 md:col-span-2">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-bold text-gray-400 uppercase tracking-wider text-[10px]">
                      {isRu ? 'Адрес на китайском (для доставки по Китаю)' : 'Address (Chinese)'}
                    </span>
                    <button
                      onClick={() => handleCopy(currentWarehouse.addressTemplateCn.replace('{RECIPIENT_CODE}', recipientCode), 'addr')}
                      className="text-brand-blue hover:underline font-bold text-[11px] flex items-center gap-1"
                    >
                      {copiedKey === 'addr' ? <Check size={12} className="text-emerald-500" /> : <Copy size={12} />}
                      {copiedKey === 'addr' ? (isRu ? 'Скопировано' : 'Copied') : (isRu ? 'Копировать' : 'Copy')}
                    </button>
                  </div>
                  <p className="font-mono text-brand-dark font-bold text-sm select-all">
                    {currentWarehouse.addressTemplateCn.replace('{RECIPIENT_CODE}', recipientCode)}
                  </p>
                </div>

                {/* Recipient Name Field */}
                <div className="bg-white p-4 rounded-2xl border border-gray-200/80">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-bold text-gray-400 uppercase tracking-wider text-[10px]">
                      {isRu ? 'Имя получателя (收件人)' : 'Recipient Name'}
                    </span>
                    <button
                      onClick={() => handleCopy(recipientCode, 'recipient')}
                      className="text-brand-blue hover:underline font-bold text-[11px] flex items-center gap-1"
                    >
                      {copiedKey === 'recipient' ? <Check size={12} className="text-emerald-500" /> : <Copy size={12} />}
                      {copiedKey === 'recipient' ? (isRu ? 'Скопировано' : 'Copied') : (isRu ? 'Копировать' : 'Copy')}
                    </button>
                  </div>
                  <p className="font-mono text-brand-dark font-black text-base select-all">
                    {recipientCode}
                  </p>
                </div>

                {/* Phone Field */}
                <div className="bg-white p-4 rounded-2xl border border-gray-200/80">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-bold text-gray-400 uppercase tracking-wider text-[10px]">
                      {isRu ? 'Телефон склада (电话)' : 'Warehouse Phone'}
                    </span>
                    <button
                      onClick={() => handleCopy(WAREHOUSE_PHONE, 'phone')}
                      className="text-brand-blue hover:underline font-bold text-[11px] flex items-center gap-1"
                    >
                      {copiedKey === 'phone' ? <Check size={12} className="text-emerald-500" /> : <Copy size={12} />}
                      {copiedKey === 'phone' ? (isRu ? 'Скопировано' : 'Copied') : (isRu ? 'Копировать' : 'Copy')}
                    </button>
                  </div>
                  <p className="font-mono text-brand-dark font-bold text-sm select-all">
                    {WAREHOUSE_PHONE}
                  </p>
                </div>
              </div>

              {/* Option 5: Support Guidance Banner */}
              <div className="bg-white rounded-2xl p-4 border border-amber-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-2">
                <div className="flex items-start gap-3">
                  <HelpCircle size={20} className="text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-xs sm:text-sm text-brand-dark">
                      {isRu ? 'Не уверены, какой склад выбрать для вашего груза?' : 'Not sure which warehouse to choose?'}
                    </h4>
                    <p className="text-[11px] text-gray-500 mt-0.5">
                      {isRu 
                        ? 'Напишите менеджеру HappyBox с вашим ID — мы подберем оптимальный маршрут за 2 минуты.' 
                        : 'Contact our manager with your client ID to verify the best shipping hub.'}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0 w-full sm:w-auto">
                  <a
                    href={`https://t.me/${SUPPORT_CONTACTS.telegramUsername}?text=${supportMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 bg-[#2AABEE] text-white px-3.5 py-2 rounded-xl text-xs font-bold hover:brightness-105 transition-all shadow-sm"
                  >
                    <Send size={13} />
                    <span>Telegram</span>
                  </a>
                  <a
                    href={`https://wa.me/${SUPPORT_CONTACTS.whatsappPhone.replace(/[^0-9]/g, '')}?text=${supportMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 bg-[#25D366] text-white px-3.5 py-2 rounded-xl text-xs font-bold hover:brightness-105 transition-all shadow-sm"
                  >
                    <Phone size={13} />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 2: ADD INCOMING PARCEL FORM */}
          <section className="bg-white rounded-[32px] p-6 md:p-8 shadow-sm border border-gray-100">
            <div className="flex items-center gap-2 mb-2">
              <Plus size={22} className="text-brand-blue" />
              <h2 className="text-xl md:text-2xl font-black text-brand-dark tracking-tight">
                {isRu ? 'Добавить входящую посылку' : 'Register Incoming Parcel'}
              </h2>
            </div>
            <p className="text-xs md:text-sm text-gray-500 mb-6">
              {isRu 
                ? 'Как только поставщик в Китае выдаст трек-номер (SF, ZTO, YTO), внесите его сюда, чтобы склад сразу идентифицировал вашу коробку:' 
                : 'Enter the domestic China tracking number as soon as your supplier ships the order:'}
            </p>

            {parcelErrorMsg && (
              <div className="mb-4 p-3.5 bg-red-50 border border-red-200 rounded-2xl flex items-center gap-3 text-red-600 text-xs font-semibold">
                <AlertCircle size={16} className="shrink-0" />
                <span>{parcelErrorMsg}</span>
              </div>
            )}

            {parcelSuccessMsg && (
              <div className="mb-4 p-3.5 bg-emerald-50 border border-emerald-200 rounded-2xl flex items-center gap-3 text-emerald-700 text-xs font-semibold">
                <CheckCircle2 size={16} className="shrink-0" />
                <span>{parcelSuccessMsg}</span>
              </div>
            )}

            <form onSubmit={handleAddParcel} className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-extrabold uppercase tracking-wider text-gray-500 mb-1.5">
                  {isRu ? 'Трек-номер (Tracking number) *' : 'Tracking number *'}
                </label>
                <input
                  type="text"
                  required
                  value={inboundTracking}
                  onChange={(e) => setInboundTracking(e.target.value)}
                  placeholder="SF1234567890 / 7730..."
                  className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-4 py-3 text-sm font-semibold text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-extrabold uppercase tracking-wider text-gray-500 mb-1.5">
                  {isRu ? 'Тип товара (Product type)' : 'Product type'}
                </label>
                <input
                  type="text"
                  value={productTitle}
                  onChange={(e) => setProductTitle(e.target.value)}
                  placeholder={isRu ? 'Одежда, обувь, электроника' : 'Clothing, shoes, electronics'}
                  className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-4 py-3 text-sm font-semibold text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-extrabold uppercase tracking-wider text-gray-500 mb-1.5">
                  {isRu ? 'Склад назначения в Китае' : 'Warehouse Destination'}
                </label>
                <select
                  value={parcelWarehouse}
                  onChange={(e) => setParcelWarehouse(e.target.value as WarehouseDestination)}
                  className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-4 py-3 text-sm font-semibold text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-all"
                >
                  {WAREHOUSES.map((wh) => (
                    <option key={wh.id} value={wh.id}>
                      {isRu ? wh.titleRu : wh.titleEn}
                    </option>
                  ))}
                </select>
              </div>

              <div className="md:col-span-2">
                <label className="block text-xs font-extrabold uppercase tracking-wider text-gray-500 mb-1.5">
                  {isRu ? 'Примечание к посылке (необязательно)' : 'Notes (optional)'}
                </label>
                <input
                  type="text"
                  value={parcelNotes}
                  onChange={(e) => setParcelNotes(e.target.value)}
                  placeholder={isRu ? 'Проверить цвет, сделать фотоотчет или объединить' : 'Check color, photos requested, etc.'}
                  className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-4 py-3 text-sm font-semibold text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-all"
                />
              </div>

              <div className="flex items-end">
                <button
                  type="submit"
                  disabled={isSubmittingParcel}
                  className="w-full bg-brand-dark hover:bg-brand-blue text-white py-3.5 px-6 rounded-2xl font-bold text-sm transition-all shadow-lg shadow-gray-200 active:scale-95 flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer"
                >
                  {isSubmittingParcel ? (
                    <Loader2 size={16} className="animate-spin" />
                  ) : (
                    <>
                      <Plus size={16} />
                      <span>{isRu ? 'Добавить посылку' : 'Add Parcel'}</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </section>

          {/* SECTION 3: MY PARCELS LIST */}
          <section className="bg-white rounded-[32px] p-6 md:p-8 shadow-sm border border-gray-100">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <div className="flex items-center gap-2">
                  <Box size={22} className="text-brand-blue" />
                  <h2 className="text-xl md:text-2xl font-black text-brand-dark tracking-tight">
                    {isRu ? 'Мои посылки' : 'My Parcels'}
                  </h2>
                  <span className="bg-gray-100 text-gray-600 font-bold text-xs px-2.5 py-0.5 rounded-full">
                    {parcels.length}
                  </span>
                </div>
                <p className="text-xs md:text-sm text-gray-500 mt-1">
                  {isRu 
                    ? 'Текущий статус движения ваших грузов в реальном времени:' 
                    : 'Real-time status updates for your shipments:'}
                </p>
              </div>

              {/* Status filter tabs */}
              <div className="flex flex-wrap items-center gap-1.5 bg-gray-100 p-1.5 rounded-2xl self-start sm:self-auto">
                <button
                  onClick={() => setStatusFilter('all')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1 ${
                    statusFilter === 'all' ? 'bg-white text-brand-dark shadow-xs' : 'text-gray-500 hover:text-brand-dark'
                  }`}
                >
                  <span>{isRu ? 'Все' : 'All'}</span>
                  <span className="bg-gray-200 text-gray-700 px-1.5 py-0.2 rounded-md text-[10px]">{parcels.length}</span>
                </button>
                <button
                  onClick={() => setStatusFilter('expected')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1 ${
                    statusFilter === 'expected' ? 'bg-white text-amber-800 shadow-xs' : 'text-gray-500 hover:text-brand-dark'
                  }`}
                >
                  <span>{isRu ? 'Ожидаются' : 'Awaiting'}</span>
                  <span className="bg-amber-100 text-amber-800 px-1.5 py-0.2 rounded-md text-[10px]">{parcels.filter(p => p.status === 'expected').length}</span>
                </button>
                <button
                  onClick={() => setStatusFilter('arrived')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1 ${
                    statusFilter === 'arrived' ? 'bg-white text-blue-800 shadow-xs' : 'text-gray-500 hover:text-brand-dark'
                  }`}
                >
                  <span>{isRu ? 'На складе' : 'In Warehouse'}</span>
                  <span className="bg-blue-100 text-blue-800 px-1.5 py-0.2 rounded-md text-[10px]">{parcels.filter(p => p.status === 'arrived').length}</span>
                </button>
                <button
                  onClick={() => setStatusFilter('packing')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1 ${
                    statusFilter === 'packing' ? 'bg-white text-purple-800 shadow-xs' : 'text-gray-500 hover:text-brand-dark'
                  }`}
                >
                  <span>{isRu ? 'Упаковывается' : 'Packing'}</span>
                  <span className="bg-purple-100 text-purple-800 px-1.5 py-0.2 rounded-md text-[10px]">{parcels.filter(p => p.status === 'packing').length}</span>
                </button>
                <button
                  onClick={() => setStatusFilter('awaiting_payment')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1 ${
                    statusFilter === 'awaiting_payment' ? 'bg-white text-orange-800 shadow-xs' : 'text-gray-500 hover:text-brand-dark'
                  }`}
                >
                  <span>{isRu ? 'Ожидает оплаты' : 'Awaiting Payment'}</span>
                  <span className="bg-orange-100 text-orange-800 px-1.5 py-0.2 rounded-md text-[10px]">{parcels.filter(p => p.status === 'awaiting_payment').length}</span>
                </button>
                <button
                  onClick={() => setStatusFilter('shipped')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1 ${
                    statusFilter === 'shipped' ? 'bg-white text-indigo-800 shadow-xs' : 'text-gray-500 hover:text-brand-dark'
                  }`}
                >
                  <span>{isRu ? 'В пути' : 'In Transit'}</span>
                  <span className="bg-indigo-100 text-indigo-800 px-1.5 py-0.2 rounded-md text-[10px]">{parcels.filter(p => p.status === 'shipped').length}</span>
                </button>
                <button
                  onClick={() => setStatusFilter('delivered')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1 ${
                    statusFilter === 'delivered' ? 'bg-white text-emerald-800 shadow-xs' : 'text-gray-500 hover:text-brand-dark'
                  }`}
                >
                  <span>{isRu ? 'Доставлено' : 'Delivered'}</span>
                  <span className="bg-emerald-100 text-emerald-800 px-1.5 py-0.2 rounded-md text-[10px]">{parcels.filter(p => p.status === 'delivered').length}</span>
                </button>
              </div>
            </div>

            {loadingParcels ? (
              <div className="py-16 text-center text-gray-400 flex flex-col items-center justify-center gap-3">
                <Loader2 size={32} className="animate-spin text-brand-blue" />
                <span className="text-xs font-bold">{isRu ? 'Загрузка посылок...' : 'Loading parcels...'}</span>
              </div>
            ) : filteredParcels.length === 0 ? (
              <div className="py-14 text-center border-2 border-dashed border-gray-200 rounded-3xl p-8">
                <Package size={40} className="mx-auto text-gray-300 mb-3" />
                <h4 className="font-extrabold text-brand-dark text-base mb-1">
                  {isRu ? 'Посылок пока нет' : 'No parcels found'}
                </h4>
                <p className="text-xs text-gray-400 max-w-sm mx-auto">
                  {isRu 
                    ? 'Добавьте китайский трек-номер через форму выше, как только продавец отправит ваш заказ.' 
                    : 'Add your domestic China tracking number using the form above.'}
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {filteredParcels.map((parcel) => {
                  const statusInfo = getStatusBadge(parcel.status);
                  return (
                    <div 
                      key={parcel.id} 
                      className="bg-cream/40 rounded-2xl p-5 border border-gray-200/70 hover:border-brand-blue/30 transition-all flex flex-col lg:flex-row lg:items-center justify-between gap-4"
                    >
                      {/* Left: Parcel details */}
                      <div className="space-y-2">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="font-mono font-bold text-sm text-brand-dark bg-white px-2.5 py-1 rounded-lg border border-gray-200">
                            {parcel.inboundTracking}
                          </span>
                          <span className={`inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${statusInfo.bg}`}>
                            {statusInfo.icon}
                            <span>{statusInfo.label}</span>
                          </span>
                          <span className="text-[11px] text-gray-400 font-medium">
                            {new Date(parcel.createdAt).toLocaleDateString(isRu ? 'ru-RU' : 'en-US')}
                          </span>
                        </div>

                        <div>
                          <h4 className="font-extrabold text-base text-brand-dark">
                            {parcel.productTitle}
                          </h4>
                          <span className="text-xs text-gray-500">
                            {isRu ? 'Склад назначения:' : 'Hub:'} {getWarehouseNameById(parcel.warehouseDestination)}
                          </span>
                        </div>

                        {parcel.notes && (
                          <p className="text-xs text-gray-500 italic bg-white/70 p-2 rounded-xl inline-block">
                            💬 {parcel.notes}
                          </p>
                        )}
                      </div>

                      {/* Right: Outbound tracking & Cost info */}
                      <div className="flex flex-col sm:flex-row lg:flex-col items-start lg:items-end gap-2 shrink-0 border-t lg:border-t-0 pt-3 lg:pt-0 border-gray-200/60">
                        {parcel.outboundTracking ? (
                          <div className="text-left lg:text-right">
                            <span className="text-[10px] uppercase font-extrabold tracking-wider text-emerald-600 block">
                              {isRu ? 'Международный трек-номер' : 'Outbound Tracking'}
                            </span>
                            <div className="flex items-center gap-1.5 mt-0.5">
                              <span className="font-mono font-black text-sm text-brand-dark bg-emerald-50 text-emerald-900 px-2.5 py-1 rounded-lg border border-emerald-200">
                                {parcel.outboundTracking}
                              </span>
                              <button
                                onClick={() => handleCopy(parcel.outboundTracking!, parcel.id)}
                                className="p-1 hover:text-brand-blue text-gray-400 transition-colors"
                              >
                                {copiedKey === parcel.id ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
                              </button>
                            </div>
                          </div>
                        ) : (
                          <span className="text-xs text-gray-400 italic">
                            {isRu ? 'Международный трек будет присвоен после отправки' : 'International tracking pending'}
                          </span>
                        )}

                        {parcel.shippingCost && (
                          <div className="bg-white px-3 py-1 rounded-xl border border-gray-200 text-xs font-bold text-brand-dark">
                            <span className="text-gray-400 mr-1.5">{isRu ? 'Стоимость:' : 'Cost:'}</span>
                            <span className="text-emerald-600 font-black">{parcel.shippingCost}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </section>

          {/* SECTION 4: DELIVERY PROFILE INFO */}
          <section id="delivery-profile-section" className="bg-white rounded-[32px] p-6 md:p-8 shadow-sm border border-gray-100">
            <div className="flex items-center gap-2 mb-2">
              <User size={22} className="text-brand-blue" />
              <h2 className="text-xl md:text-2xl font-black text-brand-dark tracking-tight">
                {isRu ? 'Данные доставки (Delivery Profile)' : 'Delivery Address Profile'}
              </h2>
            </div>
            <p className="text-xs md:text-sm text-gray-500 mb-6">
              {isRu 
                ? 'Укажите ваше имя для генерации кода получателя (например, DM8143) и адрес для финальной доставки в вашем городе:' 
                : 'Enter your name to generate your recipient code (e.g. DM8143) and final shipping address:'}
            </p>

            {profileSavedMsg && (
              <div className="mb-4 p-3.5 bg-emerald-50 border border-emerald-200 rounded-2xl flex items-center gap-3 text-emerald-700 text-xs font-semibold">
                <CheckCircle2 size={16} className="shrink-0" />
                <span>{profileSavedMsg}</span>
              </div>
            )}

            <form onSubmit={handleSaveProfile} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-extrabold uppercase tracking-wider text-gray-500 mb-1.5">
                  {isRu ? 'ФИО Получателя (Full Name)' : 'Full Name'}
                </label>
                <input
                  type="text"
                  value={editFullName}
                  onChange={(e) => setEditFullName(e.target.value)}
                  placeholder={isRu ? 'Например: Дмитрий Князев' : 'e.g. Alex Smith'}
                  className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-4 py-3 text-sm font-semibold text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-all"
                />
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
                  {isRu ? 'Адрес доставки (включая индекс / ZIP)' : 'Shipping Address (Including ZIP code)'}
                </label>
                <input
                  type="text"
                  value={editAddress}
                  onChange={(e) => setEditAddress(e.target.value)}
                  placeholder={isRu ? 'Страна, город, индекс, улица, дом, кв' : 'Country, City, ZIP code, Street address, Apt/Suite'}
                  className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-4 py-3 text-sm font-semibold text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-all"
                />
              </div>

              <div className="md:col-span-2 flex justify-end">
                <button
                  type="submit"
                  disabled={isUpdatingProfile}
                  className="bg-brand-dark hover:bg-brand-blue text-white px-6 py-3 rounded-2xl font-bold text-sm transition-all shadow-md active:scale-95 flex items-center gap-2 disabled:opacity-50 cursor-pointer"
                >
                  {isUpdatingProfile ? (
                    <Loader2 size={16} className="animate-spin" />
                  ) : (
                    <>
                      <Check size={16} />
                      <span>{isRu ? 'Сохранить данные' : 'Save Changes'}</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </section>

        </div>
      </div>
    </div>
  );
};

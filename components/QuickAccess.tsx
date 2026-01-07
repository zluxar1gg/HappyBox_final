
import React, { useState } from 'react';
import { 
  Globe, 
  ShoppingBag, 
  Search, 
  ShoppingCart, 
  ClipboardCheck,
  Warehouse,
  X,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import { Language, translations } from '../utils/translations';

interface QuickAccessProps {
  language: Language;
  onNavigate: (page: string) => void;
}

type TabType = 'shopping' | 'destinations';

export const QuickAccess: React.FC<QuickAccessProps> = ({ language, onNavigate }) => {
  const [activeTab, setActiveTab] = useState<TabType>('shopping');
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const isEn = language === 'en';
  const t = translations[language].quickAccess;

  // Helper to generate SEO friendly URLs for anchors
  const getPageUrl = (page: string) => {
    const params = new URLSearchParams();
    params.set('page', page);
    if (language === 'ru') params.set('lang', 'ru');
    return `/?${params.toString()}`;
  };

  // --- DATA DEFINITIONS ---
  const tabs = [
    { id: 'shopping', label: isEn ? 'Shopping & Services' : 'Шопинг и Услуги', icon: ShoppingBag },
    { id: 'destinations', label: isEn ? 'Destinations' : 'Куда везем', icon: Globe },
  ];

  const destinations = [
    { id: 'eu', title: isEn ? 'Europe' : 'Европа', price: '$6.0/kg', flag: '🇪🇺' },
    { id: 'usa', title: isEn ? 'USA' : 'США', price: '$5.5/kg', flag: '🇺🇸', tag: 'HOT' },
    { id: 'uae', title: isEn ? 'UAE' : 'ОАЭ', price: '$4.5/kg', flag: '🇦🇪' },
    { id: 'ru', title: isEn ? 'Russia' : 'Россия', price: '$2.5/kg', flag: '🇷🇺' },
  ];

  const shoppingItems = [
    { 
      id: 'taobao', 
      title: isEn ? 'Taobao Agent' : 'Байер Taobao', 
      seoText: t.taobao,
      icon: ShoppingCart, 
      color: 'text-orange-500', 
      bg: 'bg-orange-50' 
    },
    { 
      id: '1688', 
      title: isEn ? '1688 Agent' : 'Выкуп 1688', 
      seoText: t['1688'],
      icon: Search, 
      color: 'text-red-500', 
      bg: 'bg-red-50' 
    },
    { 
      id: 'inspection', 
      title: isEn ? 'Inspection' : 'Проверка брака', 
      seoText: t.inspection,
      icon: ClipboardCheck, 
      color: 'text-purple-500', 
      bg: 'bg-purple-50' 
    },
    { 
      id: 'warehousing', 
      title: isEn ? 'Warehousing' : 'Склад', 
      seoText: t.warehousing,
      icon: Warehouse, 
      color: 'text-blue-500', 
      bg: 'bg-blue-50' 
    }
  ];

  // Service Details Content (The "Articles")
  const serviceDetails: Record<string, { title: string; desc: string; features: string[] }> = {
    taobao: {
      title: isEn ? 'Taobao Shopping Service' : 'Выкуп с Taobao и Tmall',
      desc: isEn 
        ? "Taobao is the world's biggest treasure hunt, but it can be hard to navigate without a Chinese payment method. We act as your personal agent. You simply send us the links (or photos) of what you want, and we buy it for you. We communicate with sellers, check domestic shipping, and ensure the correct items arrive at our warehouse."
        : "Taobao — это бесконечный выбор товаров, но покупка там требует китайских платежных систем. Мы выступаем вашим агентом: вы присылаете ссылки или фото, а мы выкупаем товар, общаемся с продавцами и контролируем доставку по Китаю до нашего склада.",
      features: isEn 
        ? ['0% Service Fee for self-found links', 'Negotiation with Chinese sellers', 'Consolidation of multiple orders', 'Real photos before international shipping']
        : ['0% комиссия при наличии ссылок', 'Переговоры с продавцами на китайском', 'Консолидация множества заказов', 'Фотоотчет перед отправкой']
    },
    1688: {
      title: isEn ? '1688 Bulk Purchasing' : 'Оптовый выкуп с 1688',
      desc: isEn 
        ? "1688.com is where suppliers and factories sell directly. Prices are much lower than Alibaba.com, but the MOQ (Minimum Order Quantity) applies. We specialize in B2B sourcing here. We verify factory reliability, negotiate bulk prices, and consolidate samples from different factories into one shipment for you to review."
        : "1688.com — это площадка, где торгуют фабрики. Цены здесь ниже, чем на Alibaba, но есть минимальный заказ (MOQ). Мы специализируемся на B2B закупках: проверяем надежность фабрик, договариваемся о снижении MOQ и собираем образцы от разных поставщиков в одну посылку.",
      features: isEn
        ? ['Direct Factory Pricing', 'MOQ Negotiation', 'Sample Consolidation', 'Quality Control for bulk batches']
        : ['Цены напрямую от фабрик', 'Переговоры по MOQ', 'Сбор образцов', 'Контроль качества оптовых партий']
    },
    inspection: {
      title: isEn ? 'Quality Inspection' : 'Проверка качества и брака',
      desc: isEn 
        ? "Don't pay for shipping just to receive a broken or wrong item. Our inspection service checks every item when it arrives at our Guangzhou warehouse. We check for quantity, color, size, and obvious visual defects. If there is an issue, we return or exchange it domestically in China, saving you expensive international return costs."
        : "Не платите за доставку брака. Наша услуга инспекции включает проверку каждого товара при поступлении на склад. Мы сверяем количество, цвет, размер и визуальные дефекты. Если есть проблема, мы обменяем товар внутри Китая, сэкономив вам деньги на международном возврате.",
      features: isEn
        ? ['Detailed Photo/Video Report', 'Size & Color Verification', 'Defect Removal', 'Returns handling']
        : ['Детальный фото/видео отчет', 'Сверка размеров и цветов', 'Отбраковка дефектов', 'Оформление возврата продавцу']
    },
    warehousing: {
      title: isEn ? 'Free Warehousing & Consolidation' : 'Бесплатный Склад и Консолидация',
      desc: isEn 
        ? "Stop paying for shipping every single package. With HappyBox, you get a dedicated storage space in our warehouse. You can collect items from 20 different suppliers over several weeks. Once everything arrives, we remove unnecessary boxes (shoe boxes, etc.) to reduce volumetric weight and combine everything into one compact shipment."
        : "Перестаньте платить за доставку каждой отдельной посылки. С HappyBox у вас есть место на складе. Вы можете собирать товары от 20 разных продавцов в течение нескольких недель. Когда всё придет, мы уберем лишнюю упаковку (коробки от обуви и т.д.) для уменьшения объемного веса и соберем всё в одну компактную посылку.",
      features: isEn
        ? ['Unlimited Free Storage Time', 'Repacking to Reduce Volume', 'Combining Multiple Orders', 'Secure CCTV Monitoring']
        : ['Бесплатное хранение без лимита', 'Переупаковка для снижения объема', 'Объединение заказов', 'Круглосуточное видеонаблюдение']
    }
  };

  const handleItemClick = (id: string) => {
    // If it's a shopping item, show details.
    if (activeTab === 'shopping') {
      setSelectedService(id);
    }
  };

  // --- RENDER HELPERS ---
  const renderDestinations = () => (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 animate-fade-in">
      {destinations.map((item) => {
        // We use <a> tag for SEO, but allow JS to handle SPA navigation via onClick
        const isInternalPage = ['usa', 'eu', 'uae', 'ru'].includes(item.id);
        const href = isInternalPage ? getPageUrl(item.id) : '#cost';

        return (
          <a 
            key={item.id}
            href={href}
            onClick={(e) => {
              e.preventDefault();
              if (isInternalPage) onNavigate(item.id);
              else document.getElementById('cost')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-white border border-gray-100 rounded-2xl p-4 flex flex-col items-start gap-3 hover:shadow-lg hover:border-brand-blue/30 transition-all cursor-pointer group relative overflow-hidden block"
          >
            {item.tag && (
              <span className="absolute top-0 right-0 bg-brand-yellow text-[10px] font-black px-2 py-0.5 rounded-bl-lg">
                {item.tag}
              </span>
            )}
            <div className="text-3xl bg-gray-50 w-10 h-10 flex items-center justify-center rounded-full shadow-sm">{item.flag}</div>
            <div>
              <h4 className="font-bold text-brand-dark leading-tight group-hover:text-brand-blue transition-colors">{item.title}</h4>
              <p className="text-xs text-gray-500 font-medium mt-1">{isEn ? 'from' : 'от'} <span className="text-brand-dark font-bold">{item.price}</span></p>
            </div>
          </a>
        );
      })}
    </div>
  );

  const renderShopping = () => (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 animate-fade-in">
      {shoppingItems.map((item) => (
        <div 
          key={item.id}
          onClick={() => handleItemClick(item.id)}
          className="bg-white border border-gray-100 rounded-2xl p-6 flex flex-col items-center text-center gap-4 hover:shadow-lg hover:border-brand-blue/30 transition-all cursor-pointer group"
        >
          <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${item.bg} ${item.color} mb-1 group-hover:scale-110 transition-transform shadow-sm`}>
            <item.icon size={28} />
          </div>
          <div>
            <h4 className="font-bold text-brand-dark text-base leading-tight group-hover:text-brand-blue transition-colors mb-2">
                {item.title}
            </h4>
            <p className="text-xs text-gray-400 font-medium leading-tight px-1">
                {item.seoText}
            </p>
          </div>
          <div className="mt-auto opacity-0 group-hover:opacity-100 transition-opacity text-xs font-bold uppercase tracking-wider text-gray-400 flex items-center gap-1">
             {isEn ? 'Learn More' : 'Подробнее'} <ArrowRight size={12} />
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <section className="py-12 bg-cream relative">
      <div className="container mx-auto px-4 xl:px-0">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-black text-brand-dark mb-2">
            {isEn ? 'What are you looking for?' : 'Что вы ищете?'}
          </h2>
          <p className="text-sm text-gray-500 font-bold">
            {isEn ? 'Select a category to find the best shipping route' : 'Выберите категорию для поиска лучшего маршрута'}
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-white p-1.5 rounded-2xl shadow-sm border border-gray-100 inline-flex w-full md:w-auto">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as TabType)}
                  className={`flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-bold transition-all duration-300 ${
                    isActive 
                      ? 'bg-brand-dark text-white shadow-md' 
                      : 'text-gray-400 hover:text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <tab.icon size={18} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Content Area */}
        <div className="min-h-[200px]">
          {activeTab === 'shopping' && renderShopping()}
          {activeTab === 'destinations' && renderDestinations()}
        </div>

      </div>

      {/* SERVICE DETAILS MODAL */}
      {selectedService && serviceDetails[selectedService] && (
          <div 
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-brand-dark/60 backdrop-blur-md animate-fade-in"
            onClick={() => setSelectedService(null)}
          >
            <div 
              className="bg-white w-full max-w-lg rounded-[35px] shadow-2xl relative overflow-hidden flex flex-col max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
               <button 
                  onClick={() => setSelectedService(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-gray-50 hover:bg-gray-100 rounded-full flex items-center justify-center transition-colors z-10"
                >
                  <X size={20} className="text-gray-500" />
                </button>

               <div className="p-8 pb-0">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-sm
                    ${selectedService === 'taobao' ? 'bg-orange-50 text-orange-500' : 
                      selectedService === '1688' ? 'bg-red-50 text-red-500' :
                      selectedService === 'inspection' ? 'bg-purple-50 text-purple-500' : 'bg-blue-50 text-blue-500'}
                  `}>
                     {selectedService === 'taobao' && <ShoppingCart size={32} />}
                     {selectedService === '1688' && <Search size={32} />}
                     {selectedService === 'inspection' && <ClipboardCheck size={32} />}
                     {selectedService === 'warehousing' && <Warehouse size={32} />}
                  </div>

                  <h3 className="text-2xl md:text-3xl font-black text-brand-dark mb-4 leading-tight">
                    {serviceDetails[selectedService].title}
                  </h3>
               </div>

               <div className="p-8 pt-2 overflow-y-auto">
                  <p className="text-gray-600 font-medium leading-relaxed mb-8 text-base md:text-lg">
                    {serviceDetails[selectedService].desc}
                  </p>

                  <div className="space-y-4">
                    <h4 className="text-xs font-black text-gray-400 uppercase tracking-widest">
                      {isEn ? 'Key Benefits' : 'Ключевые преимущества'}
                    </h4>
                    <ul className="space-y-3">
                      {serviceDetails[selectedService].features.map((feat, idx) => (
                        <li key={idx} className="flex gap-3 items-start p-3 bg-gray-50 rounded-xl border border-gray-100">
                          <CheckCircle2 size={20} className="text-brand-blue flex-shrink-0 mt-0.5" />
                          <span className="font-bold text-brand-dark text-sm">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
               </div>

               <div className="p-6 border-t border-gray-100 bg-gray-50">
                  <button 
                    onClick={() => {
                        setSelectedService(null);
                        document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="w-full bg-brand-dark text-white py-4 rounded-2xl font-black text-lg hover:bg-brand-blue transition-colors active:scale-95 shadow-lg"
                  >
                    {isEn ? 'Start Now' : 'Начать работу'}
                  </button>
               </div>
            </div>
          </div>
      )}
    </section>
  );
};

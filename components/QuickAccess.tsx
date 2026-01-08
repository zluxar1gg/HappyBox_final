
import React, { useState } from 'react';
import { 
  Globe, 
  ShoppingBag, 
  Search, 
  ShoppingCart, 
  ClipboardCheck,
  Warehouse,
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
  const isEn = language === 'en';
  const t = translations[language].quickAccess;

  // Helper to generate SEO friendly URLs for anchors
  const getPageUrl = (page: string) => {
    const params = new URLSearchParams();
    params.set('page', page);
    if (language === 'ru') params.set('lang', 'ru');
    return `/?${params.toString()}`;
  };

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

  const renderDestinations = () => (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 animate-fade-in">
      {destinations.map((item) => {
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
        <a 
          key={item.id}
          href={getPageUrl(item.id)}
          onClick={(e) => {
            e.preventDefault();
            onNavigate(item.id);
          }}
          className="bg-white border border-gray-100 rounded-2xl p-6 flex flex-col items-center text-center gap-4 hover:shadow-lg hover:border-brand-blue/30 transition-all cursor-pointer group block"
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
        </a>
      ))}
    </div>
  );

  return (
    <section className="py-12 bg-cream relative">
      <div className="container mx-auto px-4 xl:px-0">
        
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-black text-brand-dark mb-2">
            {isEn ? 'What are you looking for?' : 'Что вы ищете?'}
          </h2>
          <p className="text-sm text-gray-500 font-bold">
            {isEn ? 'Select a category to find the best shipping route' : 'Выберите категорию для поиска лучшего маршрута'}
          </p>
        </div>

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

        <div className="min-h-[200px]">
          {activeTab === 'shopping' && renderShopping()}
          {activeTab === 'destinations' && renderDestinations()}
        </div>

      </div>
    </section>
  );
};

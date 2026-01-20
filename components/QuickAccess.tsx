
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
import { DestinationsGrid } from './DestinationsGrid';

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

  const shoppingItems = [
    { 
      id: 'taobao', 
      title: isEn ? 'Taobao Buyer' : 'Байер Taobao', 
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

  const renderShopping = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 animate-fade-in mt-6 md:mt-8">
      {shoppingItems.map((item) => (
        <a 
          key={item.id}
          href={getPageUrl(item.id)}
          onClick={(e) => {
            e.preventDefault();
            onNavigate(item.id);
          }}
          className="bg-white border border-gray-100 rounded-[20px] md:rounded-[25px] p-4 md:p-6 flex flex-row md:flex-col items-center md:items-center text-left md:text-center gap-4 md:gap-3 hover:shadow-xl hover:-translate-y-1 hover:border-brand-blue/30 transition-all cursor-pointer group min-h-[100px] md:min-h-[220px] relative justify-between"
        >
          {/* Top Content: Icon + Text */}
          <div className="flex flex-row md:flex-col items-center gap-4 md:gap-3 w-full">
            {/* Icon Wrapper */}
            <div className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl flex-shrink-0 flex items-center justify-center ${item.bg} ${item.color} group-hover:scale-110 transition-transform shadow-sm`}>
              <item.icon size={24} className="md:w-[28px] md:h-[28px]" />
            </div>
            
            {/* Text Wrapper */}
            <div className="flex-1 md:w-full">
              <h4 className="font-extrabold text-brand-dark text-lg md:text-lg leading-tight group-hover:text-brand-blue transition-colors mb-1 md:mb-2">
                  {item.title}
              </h4>
              <p className="text-xs text-gray-400 font-medium leading-tight line-clamp-2 md:line-clamp-3">
                  {item.seoText}
              </p>
            </div>
          </div>

          {/* Footer / Action Arrow */}
          {/* Mobile: Simple Arrow on right. Desktop: Full footer with "Details" text */}
          <div className="md:w-full md:mt-2 md:pt-3 md:border-t md:border-gray-50 flex items-center justify-center md:justify-between flex-shrink-0">
             <span className="hidden md:block text-[10px] font-black uppercase tracking-widest text-gray-400">
                {isEn ? 'Details' : 'Подробнее'}
             </span>
             <div className="w-8 h-8 rounded-full flex items-center justify-center transition-all bg-gray-50 text-gray-400 group-hover:bg-brand-blue group-hover:text-white">
                 <ArrowRight size={16} />
             </div>
          </div>
        </a>
      ))}
    </div>
  );

  return (
    <section className="py-12 bg-cream relative scroll-mt-28" id="services">
      <div className="container mx-auto px-4 xl:px-0">
        
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-brand-dark mb-4 tracking-tight">
            {isEn ? 'What are you looking for?' : 'Что вы ищете?'}
          </h2>
          <p className="text-sm md:text-lg text-gray-500 font-bold max-w-2xl mx-auto">
            {isEn ? 'Select the category that best fits your needs' : 'Выберите наиболее подходящую категорию'}
          </p>
        </div>

        <div className="flex justify-center mb-0">
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

        <div className="min-h-[180px]">
          {activeTab === 'shopping' && renderShopping()}
          {activeTab === 'destinations' && <DestinationsGrid language={language} onNavigate={onNavigate} />}
        </div>

      </div>
    </section>
  );
};

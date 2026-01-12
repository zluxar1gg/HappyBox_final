
import React from 'react';
import { ArrowRight, Plane, Ship, Truck, Box, ShoppingBag } from 'lucide-react';
import { Language } from '../utils/translations';

interface DestinationsGridProps {
  language: Language;
  onNavigate: (page: string) => void;
}

export const DestinationsGrid: React.FC<DestinationsGridProps> = ({ language, onNavigate }) => {
  const isEn = language === 'en';

  // Helper to format price strings
  const from = isEn ? 'from' : 'от';

  const destinations = [
    {
      id: 'usa',
      title: isEn ? 'USA' : 'США',
      methods: [
        { label: isEn ? `Sea: ${from} $1.2` : `Море: ${from} $1.2`, icon: Ship },
        { label: isEn ? `Air: ${from} $10` : `Авиа: ${from} $10`, icon: Plane },
      ],
      flag: '🇺🇸',
      tag: 'HOT'
    },
    {
      id: 'eu',
      title: isEn ? 'Europe' : 'Европа',
      methods: [
        { label: isEn ? `Land: ${from} $3` : `Авто: ${from} $3`, icon: Truck },
        { label: isEn ? `Air: ${from} $10` : `Авиа: ${from} $10`, icon: Plane },
      ],
      flag: '🇪🇺'
    },
    {
      id: 'uae',
      title: isEn ? 'UAE (Dubai)' : 'ОАЭ (Дубай)',
      methods: [
        { label: isEn ? `Sea: ${from} $0.8` : `Море: ${from} $0.8`, icon: Ship },
        { label: isEn ? `Air: ${from} $6` : `Авиа: ${from} $6`, icon: Plane },
      ],
      flag: '🇦🇪'
    },
    {
      id: 'ru',
      title: isEn ? 'Russia' : 'Россия',
      methods: [
        { label: isEn ? `TIR: ${from} $1.6` : `TIR: ${from} $1.6`, icon: Truck }
      ],
      flag: '🇷🇺'
    },
    {
      id: 'amazon',
      title: 'Amazon FBA',
      methods: [
        { label: isEn ? 'Prep & Labeling' : 'Преп-центр', icon: Box },
        { label: isEn ? 'DDP Shipping' : 'DDP Доставка', icon: ShoppingBag },
      ],
      flag: '📦',
      special: true
    }
  ];

  return (
    <section id="destinations" className="bg-cream animate-fade-in mt-6 md:mt-8">
      <div className="container mx-auto px-4 xl:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 md:gap-4">
          {destinations.map((dest, idx) => (
            <div 
              key={idx}
              onClick={() => onNavigate(dest.id)}
              className={`relative rounded-[20px] md:rounded-[25px] p-4 md:p-6 cursor-pointer transition-all duration-300 group border flex md:flex-col items-center md:items-start text-left justify-between min-h-[100px] md:min-h-[220px] hover:-translate-y-1 hover:shadow-xl ${
                  dest.special 
                  ? 'bg-brand-dark text-white border-brand-dark' 
                  : 'bg-white border-gray-100 hover:border-brand-blue/30 text-brand-dark'
              }`}
            >
              {/* Tag Absolute */}
              {dest.tag && (
                  <span className={`absolute top-3 right-3 text-[9px] font-black px-1.5 py-0.5 rounded-md uppercase tracking-wider ${
                      dest.special ? 'bg-brand-yellow text-brand-dark' : 'bg-brand-yellow text-brand-dark'
                  }`}>
                      {dest.tag}
                  </span>
              )}

              {/* Header: Flag + Title */}
              {/* Mobile: Row center. Desktop: Col left (items-start) */}
              <div className="flex flex-row md:flex-col items-center md:items-start gap-4 md:gap-2 mb-0 md:mb-2 w-full mt-1">
                <span className="text-4xl md:text-4xl leading-none filter drop-shadow-sm">{dest.flag}</span>
                <div className="flex flex-col w-full">
                    <h3 className="text-lg md:text-lg font-extrabold leading-tight">
                        {dest.title}
                    </h3>
                    
                    {/* Methods List - Mobile: visible under title. Desktop: separate block */}
                    <div className="md:hidden space-y-1 mt-1">
                        {dest.methods.map((m, i) => (
                            <div key={i} className={`flex items-center gap-1.5 text-xs font-bold ${dest.special ? 'text-gray-300' : 'text-gray-500'}`}>
                                <div className={`p-0.5 rounded-md flex-shrink-0 ${dest.special ? 'text-brand-yellow' : 'text-brand-blue'}`}>
                                    <m.icon size={12} />
                                </div>
                                <span className="truncate max-w-full">{m.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
              </div>

              {/* Desktop Methods List (Hidden on Mobile) */}
              {/* Desktop: align items to left (items-start) */}
              <div className="hidden md:flex space-y-1.5 mb-3 w-full flex-col items-start">
                {dest.methods.map((m, i) => (
                    <div key={i} className={`flex items-center gap-1.5 text-[10px] md:text-xs font-bold ${dest.special ? 'text-gray-300' : 'text-gray-500'}`}>
                        <div className={`p-0.5 rounded-md flex-shrink-0 ${dest.special ? 'text-brand-yellow' : 'text-brand-blue'}`}>
                            <m.icon size={12} className="md:w-[14px] md:h-[14px]" />
                        </div>
                        <span className="truncate max-w-full">{m.label}</span>
                    </div>
                ))}
              </div>

              {/* Footer: Action */}
              {/* Mobile: Arrow right. Desktop: Full width, justified */}
              <div className={`md:w-full md:mt-auto md:pt-3 md:border-t md:flex md:items-center md:justify-between ${dest.special ? 'border-gray-700' : 'border-gray-50'} ml-auto md:ml-0 flex-shrink-0`}>
                 <span className={`hidden md:block text-[9px] md:text-[10px] font-black uppercase tracking-widest ${dest.special ? 'text-gray-500' : 'text-gray-400'}`}>
                    {isEn ? 'Details' : 'Подробнее'}
                 </span>

                 <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                     dest.special 
                     ? 'bg-brand-yellow text-brand-dark group-hover:bg-white' 
                     : 'bg-gray-50 text-gray-400 group-hover:bg-brand-blue group-hover:text-white'
                 }`}>
                     <ArrowRight size={16} />
                 </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { ArrowRight, Plane, Ship, Truck, Box, ShoppingBag, Globe, Map } from 'lucide-react';
import { Language } from '../utils/translations';

interface DestinationsGridProps {
  language: Language;
  onNavigate: (page: string) => void;
  limit?: number;
  grouped?: boolean;
}

export const DestinationsGrid: React.FC<DestinationsGridProps> = ({ language, onNavigate, limit, grouped }) => {
  const isEn = language === 'en';
  const from = isEn ? 'from' : 'от';

  const allDestinations = [
    {
      id: 'eu',
      title: isEn ? 'Europe' : 'Европа',
      methods: [
        { label: isEn ? `Land: ${from} $3` : `Авто: ${from} $3`, icon: Truck },
        { label: isEn ? `Air: ${from} $10` : `Авиа: ${from} $10`, icon: Plane },
      ],
      flag: '🇪🇺',
      tag: 'HOT'
    },
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
      id: 'uae',
      title: isEn ? 'UAE (Dubai)' : 'ОАЭ (Дубай)',
      methods: [
        { label: isEn ? `Sea: ${from} $4` : `Море: ${from} $4`, icon: Ship },
        { label: isEn ? `Air: ${from} $14` : `Авиа: ${from} $14`, icon: Plane },
      ],
      flag: '🇦🇪'
    },
    {
      id: 'canada',
      title: isEn ? 'Canada' : 'Канада',
      methods: [
        { label: isEn ? `Sea: ${from} $0.8` : `Море: ${from} $0.8`, icon: Ship },
        { label: isEn ? `Air: ${from} $9` : `Авиа: ${from} $9`, icon: Plane },
      ],
      flag: '🇨🇦'
    },
    {
      id: 'thailand',
      title: isEn ? 'Thailand' : 'Таиланд',
      methods: [
        { label: isEn ? `Land: ${from} $4` : `Авто: ${from} $4`, icon: Truck },
        { label: isEn ? `Air: ${from} $11` : `Авиа: ${from} $11`, icon: Plane },
      ],
      flag: '🇹🇭'
    },
    {
      id: 'argentina',
      title: isEn ? 'Argentina' : 'Аргентина',
      methods: [
        { label: isEn ? `Ocean Freight` : `Доставка морем`, icon: Ship },
        { label: isEn ? `Air Freight` : `Доставка самолетом`, icon: Plane },
      ],
      flag: '🇦🇷'
    },
    {
      id: 'amazon',
      title: isEn ? 'Amazon FBA USA' : 'Amazon FBA США',
      methods: [
        { label: isEn ? 'Prep & Labeling' : 'Преп-центр', icon: Box },
        { label: isEn ? 'DDP Shipping' : 'DDP Доставка', icon: ShoppingBag },
      ],
      flag: '🇺🇸'
    },
    {
      id: 'amazon-canada',
      title: isEn ? 'Amazon FBA Canada' : 'Amazon FBA Канада',
      methods: [
        { label: isEn ? 'Prep & Labeling' : 'Преп-центр', icon: Box },
        { label: isEn ? 'DDP Shipping' : 'DDP Доставка', icon: ShoppingBag },
      ],
      flag: '🇨🇦'
    },
    {
      id: 'russia',
      title: isEn ? 'Russia' : 'Россия',
      methods: [
        { label: isEn ? `TIR: ${from} $1.6` : `TIR: ${from} $1.6`, icon: Truck },
        { label: isEn ? `Auto: ${from} $2.5` : `Авто: ${from} $2.5`, icon: Truck },
      ],
      flag: '🇷🇺'
    },
    {
      id: 'indonesia',
      title: isEn ? 'Indonesia' : 'Индонезия',
      methods: [
        { label: isEn ? `Sea Freight` : `Морской фрахт`, icon: Ship },
        { label: isEn ? `Air Freight` : `Авиафрахт`, icon: Plane },
      ],
      flag: '🇮🇩'
    },
    {
      id: 'south-africa',
      title: isEn ? 'South Africa' : 'ЮАР',
      methods: [
        { label: isEn ? `Sea Transport` : `Морская транспортировка`, icon: Ship },
        { label: isEn ? `Air Transport` : `Авиа транспортировка`, icon: Plane },
      ],
      flag: '🇿🇦'
    },
    {
      id: 'georgia',
      title: isEn ? 'Georgia' : 'Грузия',
      methods: [
        { label: isEn ? `Truck Delivery` : `Автомобильная доставка`, icon: Truck },
        { label: isEn ? `Air Express` : `Авиа экспресс`, icon: Plane },
      ],
      flag: '🇬🇪'
    },
    {
      id: 'israel',
      title: isEn ? 'Israel' : 'Израиль',
      methods: [
        { label: isEn ? `Sea Freight` : `Морская доставка`, icon: Ship },
        { label: isEn ? `Air Freight` : `Авиадоставка`, icon: Plane },
      ],
      flag: '🇮🇱'
    },
    {
      id: 'australia',
      title: isEn ? 'Australia' : 'Австралия',
      methods: [
        { label: isEn ? `Sea: ${from} $1.3` : `Море: ${from} $1.3`, icon: Ship },
        { label: isEn ? `Air: ${from} $9` : `Авиа: ${from} $9`, icon: Plane },
      ],
      flag: '🇦🇺'
    }
  ];

  const displayedDestinations = limit ? allDestinations.slice(0, limit) : allDestinations;

  const renderCard = (dest: typeof allDestinations[0]) => {
    const isAmazon = dest.id.includes('amazon');
    
    return (
      <a 
        key={dest.id}
        href={`/${dest.id}`}
        onClick={(e) => {
          e.preventDefault();
          onNavigate(dest.id);
        }}
        className={`${isAmazon ? 'bg-[#111111] border-[#333333] hover:border-[#FF9900]/50' : 'bg-white border-gray-100 hover:border-brand-blue/30'} border text-left rounded-[20px] md:rounded-[25px] p-4 md:p-5 flex flex-col justify-between cursor-pointer group relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl shadow-sm h-full min-h-[160px] md:min-h-[240px]`}
      >
        {/* Tag */}
        {dest.tag && (
           <div className={`absolute top-4 right-4 text-[11px] font-black px-3 py-1 rounded-md uppercase tracking-wider z-10 shadow-sm ${isAmazon ? 'bg-[#FF9900] text-black' : 'bg-brand-yellow text-brand-dark'}`}>
              {dest.tag}
           </div>
        )}

        {/* Top Content: Flag + Text */}
        <div className="flex items-center gap-4 w-full relative z-10 mb-2">
          {/* Flag Wrapper */}
          <div className={`w-12 h-12 md:w-16 md:h-16 rounded-2xl flex-shrink-0 flex items-center justify-center text-2xl md:text-3xl group-hover:scale-110 transition-transform shadow-sm border overflow-hidden ${isAmazon ? 'bg-[#222222] border-[#333333]' : 'bg-gray-50 border-gray-100'}`}>
            <span className="drop-shadow-sm">{dest.flag}</span>
          </div>
          
          {/* Text Wrapper */}
          <div className="flex-1">
            <h3 className={`font-bold text-lg md:text-xl leading-tight transition-colors mb-0 ${isAmazon ? 'text-[#FF9900] group-hover:text-white' : 'text-brand-dark group-hover:text-brand-blue'}`}>
                {dest.title}
            </h3>
          </div>
        </div>

        <div className="space-y-2 mt-2 flex-1 w-full relative z-10">
          {dest.methods.map((m, i) => (
              <div key={i} className={`flex items-center gap-3 text-sm font-medium ${isAmazon ? 'text-gray-300' : 'text-gray-500'}`}>
                  <div className={`flex-shrink-0 ${isAmazon ? 'text-[#FF9900]' : 'text-brand-blue'}`}>
                      <m.icon size={16} strokeWidth={2} />
                  </div>
                  <span>{m.label}</span>
              </div>
          ))}
        </div>

        {/* Footer / Action Arrow */}
        <div className={`w-full mt-2 pt-4 border-t flex items-center justify-between flex-shrink-0 relative z-10 ${isAmazon ? 'border-[#333333]' : 'border-gray-50'}`}>
           <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">
              {isEn ? 'Details' : 'Подробнее'}
           </span>
           <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${isAmazon ? 'bg-[#222222] text-gray-300 group-hover:bg-[#FF9900] group-hover:text-black' : 'bg-gray-50 text-gray-400 group-hover:bg-brand-blue group-hover:text-white'}`}>
               <ArrowRight size={16} />
           </div>
        </div>
      </a>
    );
  };

  if (grouped) {
    const regions = [
      { id: 'americas', title: isEn ? 'North & South America' : 'Америка', items: ['usa', 'canada', 'argentina'] },
      { id: 'europe', title: isEn ? 'Europe & CIS' : 'Европа и СНГ', items: ['eu', 'russia', 'georgia'] },
      { id: 'asia', title: isEn ? 'Asia & Oceania' : 'Азия и Океания', items: ['thailand', 'indonesia', 'australia'] },
      { id: 'mea', title: isEn ? 'Middle East & Africa' : 'Ближний Восток и Африка', items: ['uae', 'israel', 'south-africa'] },
      { id: 'special', title: isEn ? 'E-Commerce' : 'Для Маркетплейсов', items: ['amazon', 'amazon-canada'] },
    ];

    return (
      <div className="space-y-12 animate-fade-in">
        {regions.map(region => {
          const regionDestinations = region.items
            .map(id => allDestinations.find(d => d.id === id))
            .filter(Boolean); // Filter out undefined items
          
          if (regionDestinations.length === 0) return null;

          return (
            <div key={region.id}>
              <h2 className="text-2xl font-black mb-6 text-brand-dark flex items-center gap-3 border-b border-gray-100 pb-4">
                {region.title}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
                {regionDestinations.map(dest => dest && renderCard(dest))}
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 animate-fade-in mt-6 md:mt-8">
      {displayedDestinations.map((dest) => {
        const destCard = renderCard(dest);

        // Render View All right before Amazon if limit is provided
        const viewAllCard = (limit && dest.id === 'amazon') ? (
          <a 
            key="view-all"
            href="/destinations"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('destinations');
            }}
            className="bg-white border border-gray-100 text-left rounded-[20px] md:rounded-[25px] p-4 md:p-5 flex flex-col justify-between cursor-pointer group relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-brand-blue/30 shadow-sm h-full min-h-[160px] md:min-h-[240px]"
          >
            {/* Header */}
            <div className="flex items-center gap-4 w-full relative z-10 mb-2">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl flex-shrink-0 flex items-center justify-center bg-gray-50 text-2xl md:text-3xl group-hover:scale-110 transition-transform shadow-sm border border-gray-100 overflow-hidden">
                <span className="drop-shadow-sm">🌍</span>
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-brand-dark text-lg md:text-xl leading-tight group-hover:text-brand-blue transition-colors mb-0">
                    {isEn ? 'All destinations' : 'Все направления'}
                </h3>
              </div>
            </div>

            {/* Vertical Menu */}
            <div className="space-y-2 mt-2 flex-1 w-full relative z-10">
              <div className="flex items-center gap-3 text-sm font-medium text-gray-500">
                  <div className="flex-shrink-0 text-brand-blue">
                      <Map size={16} strokeWidth={2} />
                  </div>
                  <span>{isEn ? 'Explore all the routes' : 'Смотреть все маршруты'}</span>
              </div>
              <div className="flex items-center gap-3 text-sm font-medium text-gray-500">
                  <div className="flex-shrink-0 text-brand-blue">
                      <Ship size={16} strokeWidth={2} />
                  </div>
                  <span>{isEn ? 'Global door-to-door' : 'По всему миру'}</span>
              </div>
            </div>

            {/* Footer */}
            <div className="w-full mt-2 pt-4 border-t border-gray-50 flex items-center justify-between flex-shrink-0 relative z-10">
               <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">
                  {isEn ? 'View All' : 'Смотреть все'}
               </span>
               <div className="w-8 h-8 rounded-full flex items-center justify-center transition-all bg-gray-50 text-gray-400 group-hover:bg-brand-blue group-hover:text-white">
                   <ArrowRight size={16} />
               </div>
            </div>
          </a>
        ) : null;

        return (
          <React.Fragment key={`frag-${dest.id}`}>
            {viewAllCard}
            {destCard}
          </React.Fragment>
        );
      })}
    </div>
  );
};

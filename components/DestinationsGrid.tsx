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
        { label: isEn ? `Sea: ${from} $0.8` : `Море: ${from} $0.8`, icon: Ship },
        { label: isEn ? `Air: ${from} $6` : `Авиа: ${from} $6`, icon: Plane },
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
      id: 'amazon',
      title: 'Amazon FBA',
      methods: [
        { label: isEn ? 'Prep & Labeling' : 'Преп-центр', icon: Box },
        { label: isEn ? 'DDP Shipping' : 'DDP Доставка', icon: ShoppingBag },
      ],
      flag: '📦'
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
      id: 'thailand',
      title: isEn ? 'Thailand' : 'Таиланд',
      methods: [
        { label: isEn ? `Sea Logistics` : `Морская перевозка`, icon: Ship },
        { label: isEn ? `Air Cargo` : `Авиадоставка`, icon: Plane },
      ],
      flag: '🇹🇭'
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
      id: 'argentina',
      title: isEn ? 'Argentina' : 'Аргентина',
      methods: [
        { label: isEn ? `Ocean Freight` : `Доставка морем`, icon: Ship },
        { label: isEn ? `Air Freight` : `Доставка самолетом`, icon: Plane },
      ],
      flag: '🇦🇷'
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
    }
  ];

  const displayedDestinations = limit ? allDestinations.slice(0, limit) : allDestinations;

  const renderCard = (dest: typeof allDestinations[0]) => (
    <a 
      key={dest.id}
      href={`/${dest.id}`}
      onClick={(e) => {
        e.preventDefault();
        onNavigate(dest.id);
      }}
      className="bg-white border border-gray-100 text-left rounded-[20px] md:rounded-[25px] p-4 md:p-5 flex flex-col justify-between cursor-pointer group relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-brand-blue/30 shadow-sm"
    >
      {/* Tag */}
      {dest.tag && (
         <div className="absolute top-4 right-4 bg-brand-yellow text-brand-dark text-[11px] font-black px-3 py-1 rounded-md uppercase tracking-wider z-10 shadow-sm">
            {dest.tag}
         </div>
      )}

      {/* Top Content: Flag + Text */}
      <div className="flex items-center gap-4 w-full relative z-10 mb-2">
        {/* Flag Wrapper */}
        <div className={`w-12 h-12 md:w-16 md:h-16 rounded-2xl flex-shrink-0 flex items-center justify-center bg-gray-50 text-2xl md:text-3xl group-hover:scale-110 transition-transform shadow-sm border border-gray-100 overflow-hidden`}>
          <span className="drop-shadow-sm">{dest.flag}</span>
        </div>
        
        {/* Text Wrapper */}
        <div className="flex-1">
          <h3 className="font-bold text-brand-dark text-lg md:text-xl leading-tight group-hover:text-brand-blue transition-colors mb-0">
              {dest.title}
          </h3>
        </div>
      </div>

      <div className="space-y-2 mt-2 flex-1 w-full relative z-10">
        {dest.methods.map((m, i) => (
            <div key={i} className="flex items-center gap-3 text-sm font-medium text-gray-500">
                <div className="flex-shrink-0 text-brand-blue">
                    <m.icon size={16} strokeWidth={2} />
                </div>
                <span>{m.label}</span>
            </div>
        ))}
      </div>

      {/* Footer / Action Arrow */}
      <div className="w-full mt-2 pt-4 border-t flex items-center justify-between flex-shrink-0 relative z-10 border-gray-50">
         <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">
            {isEn ? 'Details' : 'Подробнее'}
         </span>
         <div className="w-8 h-8 rounded-full flex items-center justify-center transition-all bg-gray-50 text-gray-400 group-hover:bg-brand-blue group-hover:text-white">
             <ArrowRight size={16} />
         </div>
      </div>
    </a>
  );

  if (grouped) {
    const regions = [
      { id: 'americas', title: isEn ? 'North & South America' : 'Америка', items: ['usa', 'canada', 'argentina'] },
      { id: 'europe', title: isEn ? 'Europe & CIS' : 'Европа и СНГ', items: ['eu', 'russia', 'georgia'] },
      { id: 'asia', title: isEn ? 'Asia' : 'Азия', items: ['thailand', 'indonesia'] },
      { id: 'mea', title: isEn ? 'Middle East & Africa' : 'Ближний Восток и Африка', items: ['uae', 'israel', 'south-africa'] },
      { id: 'special', title: isEn ? 'E-Commerce' : 'Для Маркетплейсов', items: ['amazon'] },
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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 animate-fade-in mt-6 md:mt-8">
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
            className="bg-white border border-gray-100 text-left rounded-[20px] md:rounded-[25px] p-4 md:p-5 flex flex-col justify-between cursor-pointer group relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-brand-blue/30 shadow-sm"
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

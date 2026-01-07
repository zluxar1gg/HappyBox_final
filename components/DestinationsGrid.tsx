

import React from 'react';
import { ArrowRight, Plane, Ship, Truck } from 'lucide-react';
import { Language } from '../utils/translations';

interface DestinationsGridProps {
  language: Language;
  onNavigate: (page: string) => void;
}

export const DestinationsGrid: React.FC<DestinationsGridProps> = ({ language, onNavigate }) => {
  const isEn = language === 'en';

  const destinations = [
    {
      id: 'eu',
      title: isEn ? 'Europe' : 'Европа',
      desc: isEn ? 'Germany, France, Poland' : 'Германия, Франция, Польша',
      price: '$6.0/kg',
      image: 'https://images.unsplash.com/photo-1467269204594-9661b133dd2b?auto=format&fit=crop&w=800&q=80',
      flag: '🇪🇺'
    },
    {
      id: 'usa',
      title: isEn ? 'USA' : 'США',
      desc: isEn ? 'DDP Shipping, Amazon FBA' : 'DDP Доставка, Amazon FBA',
      price: '$5.5/kg',
      image: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=800&q=80',
      flag: '🇺🇸',
      tag: 'HOT'
    },
    {
      id: 'uae',
      title: isEn ? 'UAE (Dubai)' : 'ОАЭ (Дубай)',
      desc: isEn ? 'Fast Air & Sea lines' : 'Быстрое Авиа и Море',
      price: '$4.5/kg',
      image: 'https://images.unsplash.com/photo-1512453979798-5ea904ac6605?auto=format&fit=crop&w=800&q=80',
      flag: '🇦🇪'
    },
    {
      id: 'ru',
      title: isEn ? 'Russia' : 'Россия',
      desc: isEn ? 'Auto/Truck delivery' : 'Авто доставка (Карго)',
      price: '$2.5/kg',
      image: 'https://images.unsplash.com/photo-1513326738677-b964603b136d?auto=format&fit=crop&w=800&q=80',
      flag: '🇷🇺'
    }
  ];

  return (
    <section id="destinations" className="py-20 bg-white">
      <div className="container mx-auto px-6 xl:px-0">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-brand-dark mb-4 tracking-tight">
              {isEn ? 'Popular Destinations' : 'Популярные направления'}
            </h2>
            <p className="text-gray-500 font-bold text-lg">
              {isEn 
                ? 'We ship to over 150 countries. Choose your destination to see specific rates and requirements.' 
                : 'Мы доставляем в более чем 150 стран. Выберите направление, чтобы узнать тарифы и условия.'}
            </p>
          </div>
          <button className="hidden md:flex items-center gap-2 font-black text-brand-blue uppercase tracking-widest hover:gap-4 transition-all">
            {isEn ? 'View All Countries' : 'Смотреть все страны'} <ArrowRight size={20} />
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((dest) => (
            <div 
              key={dest.id}
              onClick={() => {
                if (dest.id === 'usa') {
                  onNavigate('usa');
                  window.scrollTo(0, 0);
                }
              }}
              className="group relative h-[400px] rounded-[30px] overflow-hidden cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-500"
            >
              {/* Background Image with Zoom Effect */}
              <div className="absolute inset-0">
                <img 
                  src={dest.image} 
                  alt={dest.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
              </div>

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                <div className="absolute top-6 right-6 bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 text-sm font-bold flex items-center gap-2">
                  <span>{dest.flag}</span>
                  <span>{isEn ? 'From' : 'От'} {dest.price}</span>
                </div>

                {dest.tag && (
                  <div className="absolute top-6 left-6 bg-brand-yellow text-brand-dark px-3 py-1 rounded-lg text-xs font-black uppercase tracking-widest">
                    {dest.tag}
                  </div>
                )}

                <h3 className="text-3xl font-black mb-2 group-hover:-translate-y-2 transition-transform duration-300">
                  {dest.title}
                </h3>
                
                <p className="text-white/80 font-medium mb-6 opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 transition-all duration-300 delay-75">
                  {dest.desc}
                </p>

                <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-100">
                  <div className="w-10 h-10 rounded-full bg-white text-brand-dark flex items-center justify-center">
                    <ArrowRight size={20} />
                  </div>
                  <span className="font-bold text-sm uppercase tracking-wider">{isEn ? 'View Rates' : 'Тарифы'}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="md:hidden w-full mt-8 py-4 rounded-2xl border-2 border-gray-100 font-black text-brand-dark uppercase tracking-widest flex items-center justify-center gap-2">
            {isEn ? 'View All Countries' : 'Смотреть все страны'} <ArrowRight size={20} />
        </button>
      </div>
    </section>
  );
};

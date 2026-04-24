import React, { useEffect } from 'react';
import { Header } from './Header';
import { Contact } from './Contact';
import { Footer } from './Footer';
import { SeoBlock } from './SeoBlock';
import { Language } from '../utils/translations';
import { FloatingContact } from './FloatingContact';
import { Plane, Ship, ArrowLeft } from 'lucide-react';

interface GenericDestinationPageProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  countryId: string;
  onBack: () => void;
  onNavigate?: (page: string) => void;
}

export const GenericDestinationPage: React.FC<GenericDestinationPageProps> = ({ 
  language, 
  setLanguage, 
  countryId,
  onBack,
  onNavigate 
}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [countryId]);

  const isEn = language === 'en';

  const destinations: Record<string, { en: string, ru: string }> = {
    'canada': { en: 'Canada', ru: 'Канаду' },
    'thailand': { en: 'Thailand', ru: 'Таиланд' },
    'indonesia': { en: 'Indonesia', ru: 'Индонезию' },
    'argentina': { en: 'Argentina', ru: 'Аргентину' },
    'south-africa': { en: 'South Africa', ru: 'ЮАР' },
    'georgia': { en: 'Georgia', ru: 'Грузию' },
    'israel': { en: 'Israel', ru: 'Израиль' },
  };

  const name = destinations[countryId]?.[language] || countryId;

  return (
    <div className="min-h-screen bg-cream font-sans text-brand-dark overflow-x-hidden pt-20">
      <Header 
        language={language} 
        setLanguage={setLanguage} 
        onLoginClick={() => {}}
        isDashboard={false}
        onNavigate={onNavigate}
        onBack={onBack}
      />
      
      <main>
        {/* Header Section */}
        <section className="py-12 lg:py-24 bg-cream">
            <div className="container mx-auto px-6 xl:px-0">
                 <div className="max-w-5xl mx-auto text-center">
                    <span className="inline-flex items-center justify-center bg-brand-blue/10 text-brand-blue px-5 py-2.5 rounded-full text-sm font-bold uppercase tracking-wider mb-8">
                        {isEn ? `${name}-Direct Line` : `Прямая линия в ${name}`}
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold leading-[1.1] text-brand-dark mb-8 tracking-tight">
                        {isEn ? `Shipping from China to ${name}` : `Доставка из Китая в ${name}`}
                    </h1>
                    <p className="text-xl text-gray-600 mb-10 font-medium leading-relaxed max-w-3xl mx-auto">
                        {isEn 
                            ? `Reliable, fast and secure delivery services to ${name}. We handle customs, packing, and door-to-door delivery so you can focus on your business.` 
                            : `Надежная и быстрая доставка в ${name}. Мы берем на себя всю логистику, таможню и доставку "до двери".`}
                    </p>
                 </div>
            </div>
        </section>

        {/* Generic Transport Modes */}
        <section className="py-20 bg-brand-light/20">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white rounded-[30px] p-8 shadow-sm border border-gray-100 flex gap-6 hover:shadow-lg transition-shadow">
                        <div className="w-16 h-16 rounded-2xl bg-blue-50 text-brand-blue flex items-center justify-center flex-shrink-0">
                            <Plane size={32} />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold mb-3">{isEn ? 'Air Freight' : 'Авиадоставка'}</h3>
                            <p className="text-gray-600 font-medium leading-relaxed">
                                {isEn ? 'The fastest way to get your goods. Ideal for urgent shipments and high-value items.' : 'Самый быстрый способ доставки. Идеально для срочных грузов.'}
                            </p>
                        </div>
                    </div>
                    <div className="bg-white rounded-[30px] p-8 shadow-sm border border-gray-100 flex gap-6 hover:shadow-lg transition-shadow">
                        <div className="w-16 h-16 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center flex-shrink-0">
                            <Ship size={32} />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold mb-3">{isEn ? 'Sea Freight' : 'Морская доставка'}</h3>
                            <p className="text-gray-600 font-medium leading-relaxed">
                                {isEn ? 'Cost-effective solution for bulk orders and heavy equipment.' : 'Экономически выгодное решение для крупных партий.'}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <Contact language={language} currentPage="home" />
        <SeoBlock language={language} onNavigate={onNavigate || (() => {})} />
      </main>

      <Footer language={language} />
      <FloatingContact />
    </div>
  );
};

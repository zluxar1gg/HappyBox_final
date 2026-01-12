
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Language, translations } from '../utils/translations';

interface ServicesProps {
  language: Language;
}

export const Services: React.FC<ServicesProps> = ({ language }) => {
  const [isAmazonOpen, setIsAmazonOpen] = useState(false);
  const t = translations[language].services;

  return (
    <section className="pt-0 pb-6 bg-cream">
      <div className="container mx-auto space-y-6">
        
        {/* Amazon Logistics Block */}
        <div className="bg-white rounded-[30px] shadow-sm overflow-hidden transition-all duration-300">
          <button 
            className="w-full p-8 lg:p-10 flex justify-between items-center cursor-pointer hover:bg-gray-50 transition-colors select-none text-left"
            onClick={() => setIsAmazonOpen(!isAmazonOpen)}
            aria-expanded={isAmazonOpen}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-brand-dark tracking-tight">{t.amazonTitle}</h3>
            <div className={`w-12 h-12 rounded-full bg-brand-light flex items-center justify-center text-brand-blue transition-transform duration-300 ${isAmazonOpen ? 'rotate-180' : ''}`}>
              <ChevronDown size={28} strokeWidth={2.5} />
            </div>
          </button>

          <div className={`transition-[max-height] duration-500 ease-in-out overflow-hidden ${isAmazonOpen ? 'max-h-[2000px]' : 'max-h-0'}`}>
            <div className="p-8 lg:p-10 pt-0 grid lg:grid-cols-2 gap-x-16 gap-y-10 border-t border-gray-100 mt-2">
              <div>
                <ServiceItem title={t.amazonItems.fba.title} text={t.amazonItems.fba.text} />
                <ServiceItem title={t.amazonItems.direct.title} text={t.amazonItems.direct.text} />
                <ServiceItem title={t.amazonItems.ddp.title} text={t.amazonItems.ddp.text} />
              </div>
              
              <div>
                <ServiceItem title={t.amazonItems.inspection.title} text={t.amazonItems.inspection.text} />
                <ServiceItem title={t.amazonItems.storage.title} text={t.amazonItems.storage.text} />
                <ServiceItem title={t.amazonItems.samples.title} text={t.amazonItems.samples.text} />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

const ServiceItem = ({ title, text }: { title: string; text: string }) => (
  <div className="mb-10 last:mb-0">
    <h4 className="font-bold text-brand-dark text-xl mb-3">{title}</h4>
    <p className="text-gray-600 leading-relaxed text-base font-medium">{text}</p>
  </div>
);

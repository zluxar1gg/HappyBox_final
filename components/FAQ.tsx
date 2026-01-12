
import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { Language, translations } from '../utils/translations';

interface FAQProps {
  language: Language;
}

export const FAQ: React.FC<FAQProps> = ({ language }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const t = translations[language].faq;

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Inject JSON-LD Schema for SEO
  useEffect(() => {
    const schemaData = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": t.items.map(item => ({
        "@type": "Question",
        "name": item.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": item.answer
        }
      }))
    };

    const script = document.createElement('script');
    script.type = "application/ld+json";
    script.text = JSON.stringify(schemaData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [language, t.items]);

  return (
    <section className="py-20 bg-white" id="faq">
      <div className="container mx-auto px-4 md:px-0">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-black text-brand-dark mb-4 tracking-tight">
            {t.title}
          </h2>
          <p className="text-lg text-gray-500 font-medium max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
          {t.items.map((item, idx) => (
            <div 
              key={idx} 
              className={`border border-gray-100 rounded-3xl overflow-hidden transition-all duration-300 h-fit ${
                openIndex === idx ? 'bg-gray-50 shadow-sm ring-1 ring-brand-blue/10' : 'bg-white hover:bg-gray-50'
              }`}
            >
              <button
                onClick={() => toggle(idx)}
                className="w-full flex justify-between items-center p-6 text-left outline-none"
              >
                <span className={`text-lg font-bold transition-colors pr-4 ${
                    openIndex === idx ? 'text-brand-blue' : 'text-brand-dark'
                }`}>
                  {item.question}
                </span>
                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                    openIndex === idx ? 'bg-brand-blue text-white rotate-180' : 'bg-white border border-gray-200 text-gray-400'
                }`}>
                  <ChevronDown size={18} />
                </div>
              </button>
              
              <div 
                className={`overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out ${
                  openIndex === idx ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 pt-0 text-gray-600 leading-relaxed font-medium text-base">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

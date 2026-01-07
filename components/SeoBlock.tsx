
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Language, translations } from '../utils/translations';

interface SeoBlockProps {
  language: Language;
  onNavigate?: (page: any) => void;
}

export const SeoBlock: React.FC<SeoBlockProps> = ({ language, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const t = translations[language].seoBlock;

  const handleLinkClick = (text: string) => {
    if (!onNavigate) return;
    const lowerText = text.toLowerCase();
    
    // USA
    if (lowerText.includes('usa') || lowerText.includes('сша')) {
       onNavigate('usa');
       window.scrollTo(0, 0);
    } 
    // UAE / Dubai
    else if (lowerText.includes('uae') || lowerText.includes('dubai') || lowerText.includes('оаэ') || lowerText.includes('дубай')) {
        onNavigate('uae');
        window.scrollTo(0, 0);
    }
    // EU / Germany / France
    else if (lowerText.includes('europe') || lowerText.includes('germany') || lowerText.includes('france') || 
             lowerText.includes('европа') || lowerText.includes('германию') || lowerText.includes('францию')) {
        onNavigate('eu');
        window.scrollTo(0, 0);
    }
    // Russia (If explicitly added to list, though not in default SEO list yet, good to handle)
    else if (lowerText.includes('russia') || lowerText.includes('россию')) {
        onNavigate('ru');
        window.scrollTo(0, 0);
    }
  };

  return (
    <section className="bg-cream border-t border-brand-blue/10 py-6">
      <div className="container mx-auto px-6 xl:px-0">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label={t.toggle}
          className="flex items-center gap-3 text-gray-500 hover:text-brand-blue transition-colors text-sm font-semibold uppercase tracking-wider mx-auto md:mx-0 outline-none"
        >
          {t.toggle}
          <ChevronDown 
            size={16} 
            className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
          />
        </button>

        <div className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${isOpen ? 'max-h-[1000px] mt-8' : 'max-h-0'}`}>
          <div className="grid md:grid-cols-3 gap-10 text-sm pb-4">
            <div>
              <h4 className="font-bold text-brand-dark mb-4 text-base">{t.categories.destinations.title}</h4>
              <ul className="space-y-2">
                {t.categories.destinations.items.map((item, idx) => (
                  <li 
                    key={idx} 
                    onClick={() => handleLinkClick(item)}
                    className="text-gray-500 hover:text-brand-blue cursor-pointer transition-colors"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-brand-dark mb-4 text-base">{t.categories.services.title}</h4>
              <ul className="space-y-2">
                {t.categories.services.items.map((item, idx) => (
                  <li key={idx} className="text-gray-500 hover:text-brand-blue cursor-default transition-colors">{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-brand-dark mb-4 text-base">{t.categories.platforms.title}</h4>
              <ul className="space-y-2">
                {t.categories.platforms.items.map((item, idx) => (
                  <li key={idx} className="text-gray-500 hover:text-brand-blue cursor-default transition-colors">{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

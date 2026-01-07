
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

  // Helper to determine destination and create link
  const getLinkData = (text: string) => {
    const lowerText = text.toLowerCase();
    const params = new URLSearchParams();
    if (language === 'ru') params.set('lang', 'ru');

    if (lowerText.includes('usa') || lowerText.includes('сша')) {
       params.set('page', 'usa');
       return { href: `/?${params.toString()}`, pageId: 'usa' };
    } 
    else if (lowerText.includes('uae') || lowerText.includes('dubai') || lowerText.includes('оаэ') || lowerText.includes('дубай')) {
        params.set('page', 'uae');
        return { href: `/?${params.toString()}`, pageId: 'uae' };
    }
    else if (lowerText.includes('europe') || lowerText.includes('germany') || lowerText.includes('france') || 
             lowerText.includes('европа') || lowerText.includes('германию') || lowerText.includes('францию')) {
        params.set('page', 'eu');
        return { href: `/?${params.toString()}`, pageId: 'eu' };
    }
    else if (lowerText.includes('russia') || lowerText.includes('россию')) {
        params.set('page', 'ru');
        return { href: `/?${params.toString()}`, pageId: 'ru' };
    }
    
    // Default fallback (no link, just text)
    return { href: null, pageId: null };
  };

  const handleLinkClick = (e: React.MouseEvent, pageId: string | null) => {
    if (!pageId || !onNavigate) return;
    e.preventDefault();
    onNavigate(pageId);
    window.scrollTo(0, 0);
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
                {t.categories.destinations.items.map((item, idx) => {
                  const { href, pageId } = getLinkData(item);
                  return (
                    <li key={idx}>
                      {href ? (
                        <a 
                          href={href}
                          onClick={(e) => handleLinkClick(e, pageId)}
                          className="text-gray-500 hover:text-brand-blue cursor-pointer transition-colors block"
                        >
                          {item}
                        </a>
                      ) : (
                        <span className="text-gray-500 hover:text-brand-blue cursor-default transition-colors">
                          {item}
                        </span>
                      )}
                    </li>
                  );
                })}
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

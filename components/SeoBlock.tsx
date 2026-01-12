
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

    let pageId: string | null = null;

    // Destinations
    if (lowerText.includes('usa') || lowerText.includes('сша')) pageId = 'usa';
    else if (lowerText.includes('uae') || lowerText.includes('dubai') || lowerText.includes('оаэ') || lowerText.includes('дубай')) pageId = 'uae';
    else if (lowerText.includes('europe') || lowerText.includes('germany') || lowerText.includes('france') || lowerText.includes('европа') || lowerText.includes('германию') || lowerText.includes('францию')) pageId = 'eu';
    else if (lowerText.includes('russia') || lowerText.includes('россию')) pageId = 'ru';
    
    // Services & Platforms
    else if (lowerText.includes('taobao') || lowerText.includes('таобао')) pageId = 'taobao';
    else if (lowerText.includes('1688')) pageId = '1688';
    else if (lowerText.includes('inspection') || lowerText.includes('quality') || lowerText.includes('инспекция') || lowerText.includes('брак')) pageId = 'inspection';
    else if (lowerText.includes('warehousing') || lowerText.includes('storage') || lowerText.includes('consolidation') || lowerText.includes('хранение') || lowerText.includes('консолидация')) pageId = 'warehousing';

    if (pageId) {
        params.set('page', pageId);
        return { href: `/?${params.toString()}`, pageId };
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
            
            {/* Destinations Column */}
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

            {/* Services Column */}
            <div>
              <h4 className="font-bold text-brand-dark mb-4 text-base">{t.categories.services.title}</h4>
              <ul className="space-y-2">
                {t.categories.services.items.map((item, idx) => {
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

            {/* Platforms Column */}
            <div>
              <h4 className="font-bold text-brand-dark mb-4 text-base">{t.categories.platforms.title}</h4>
              <ul className="space-y-2">
                {t.categories.platforms.items.map((item, idx) => {
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

          </div>
        </div>
      </div>
    </section>
  );
};

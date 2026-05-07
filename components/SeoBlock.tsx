
import React from 'react';
import { Language, translations } from '../utils/translations';
import { PageType } from '../utils/seo';

interface SeoBlockProps {
  language: Language;
  onNavigate?: (page: any) => void;
  currentPage?: PageType;
}

export const SeoBlock: React.FC<SeoBlockProps> = ({ language, onNavigate, currentPage }) => {
  const t = translations[language].seoBlock;

  const overrides = currentPage && (t as any).pageOverrides?.[currentPage];

  // Helper to determine destination and create link
  const getLinkData = (text: string, overrideLink?: string) => {
    const lowerText = text.toLowerCase();
    const params = new URLSearchParams();
    if (language === 'ru') params.set('lang', 'ru');

    let pageId: string | null = overrideLink || null;

    if (!pageId) {
      // Destinations
      if (lowerText.includes('usa') || lowerText.includes('сша')) pageId = 'usa';
      else if (lowerText.includes('uae') || lowerText.includes('dubai') || lowerText.includes('оаэ') || lowerText.includes('дубай')) pageId = 'uae';
      else if (lowerText.includes('europe') || lowerText.includes('germany') || lowerText.includes('france') || lowerText.includes('европа') || lowerText.includes('германию') || lowerText.includes('францию')) pageId = 'eu';
      else if (lowerText.includes('russia') || lowerText.includes('россию')) pageId = 'russia';
      else if (lowerText.includes('canada') || lowerText.includes('канада') || lowerText.includes('канаду')) pageId = 'canada';
      else if (lowerText.includes('thailand') || lowerText.includes('таиланд') || lowerText.includes('тайланд')) pageId = 'thailand';
      else if (lowerText.includes('indonesia') || lowerText.includes('индонези')) pageId = 'indonesia';
      else if (lowerText.includes('argentina') || lowerText.includes('аргентин')) pageId = 'argentina';
      else if (lowerText.includes('south africa') || lowerText.includes('юар') || lowerText.includes('южн')) pageId = 'south-africa';
      else if (lowerText.includes('georgia') || lowerText.includes('грузи')) pageId = 'georgia';
      else if (lowerText.includes('israel') || lowerText.includes('израил')) pageId = 'israel';
      else if (lowerText.includes('australia') || lowerText.includes('австрали')) pageId = 'australia';
      
      // Services & Platforms
      else if (lowerText.includes('taobao') || lowerText.includes('таобао')) pageId = 'taobao';
      else if (lowerText.includes('1688')) pageId = '1688';
      else if (lowerText.includes('alibaba') || lowerText.includes('алибаба')) pageId = 'alibaba';
      else if (lowerText.includes('tmall')) pageId = 'tmall';
      else if (lowerText.includes('poizon') || lowerText.includes('dewu')) pageId = 'poizon';
      else if (lowerText.includes('pinduoduo')) pageId = 'pinduoduo';
      else if (lowerText.includes('xianyu')) pageId = 'xianyu';
      else if (lowerText.includes('weidian')) pageId = 'weidian';
      else if (lowerText.includes('amazon')) pageId = 'amazon';
      else if (lowerText.includes('inspection') || lowerText.includes('quality') || lowerText.includes('инспекция') || lowerText.includes('брак')) pageId = 'inspection';
      else if (lowerText.includes('warehousing') || lowerText.includes('storage') || lowerText.includes('consolidation') || lowerText.includes('хранение') || lowerText.includes('консолидация')) pageId = 'warehousing';
    }

    if (pageId) {
        const langPrefix = language === 'ru' ? '/ru' : '';
        const path = pageId === 'home' ? '' : `/${pageId}`;
        return { href: `${langPrefix}${path}` || '/', pageId };
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

  const renderColumn = (col: any, idx: number) => {
    return (
      <div key={idx}>
        <h4 className="font-bold text-brand-dark mb-4 text-base">{col.title}</h4>
        <ul className="space-y-2">
          {col.items.map((item: any, i: number) => {
            const isStr = typeof item === 'string';
            const text = isStr ? item : item.text;
            const overrideLink = isStr ? undefined : item.link;
            const { href, pageId } = getLinkData(text, overrideLink);
            return (
              <li key={i}>
                {href ? (
                  <a 
                    href={href}
                    onClick={(e) => handleLinkClick(e, pageId)}
                    className="text-gray-500 hover:text-brand-blue cursor-pointer transition-colors block"
                  >
                    {text}
                  </a>
                ) : (
                  <span className="text-gray-500 hover:text-brand-blue cursor-default transition-colors">
                    {text}
                  </span>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    );
  };

  return (
    <section className="bg-cream border-t border-brand-blue/10 py-10">
      <div className="container mx-auto px-6 xl:px-0">
        <h3 className="font-bold text-brand-dark text-xl md:text-2xl mb-8">
          {t.toggle}
        </h3>

        <div>
           {overrides ? (
             <div className="grid md:grid-cols-3 gap-10 text-sm pb-4">
               {overrides.map((col: any, idx: number) => renderColumn(col, idx))}
             </div>
           ) : (
             <div className="grid md:grid-cols-3 gap-10 text-sm pb-4">
               {renderColumn(t.categories.destinations, 0)}
               {renderColumn(t.categories.services, 1)}
               {renderColumn(t.categories.platforms, 2)}
             </div>
           )}
        </div>
      </div>
    </section>
  );
};

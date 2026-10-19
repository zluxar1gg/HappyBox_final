import React from 'react';
import { ChevronRight, Home } from 'lucide-react';
import { Language } from '../utils/translations';

export interface BreadcrumbItem {
  label: string;
  path?: string; // e.g. 'destinations' or 'blog'
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  language: Language;
  onNavigate?: (page: string) => void;
  className?: string;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  items,
  language,
  onNavigate,
  className = ''
}) => {
  const isRu = language === 'ru';
  const homeLabel = isRu ? 'Главная' : 'Home';
  const homeUrl = isRu ? 'https://happyboxlogistics.com/ru' : 'https://happyboxlogistics.com';

  const fullItems: BreadcrumbItem[] = [
    { label: homeLabel, path: 'home' },
    ...items
  ];

  // Schema.org BreadcrumbList JSON-LD structure
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: fullItems.map((item, idx) => {
      let itemUrl = homeUrl;
      if (item.path && item.path !== 'home') {
        const cleanPath = item.path.replace(/^\//, '');
        itemUrl = isRu
          ? `https://happyboxlogistics.com/ru/${cleanPath}`
          : `https://happyboxlogistics.com/${cleanPath}`;
      }
      return {
        '@type': 'ListItem',
        position: idx + 1,
        name: item.label,
        item: itemUrl
      };
    })
  };

  const handleItemClick = (e: React.MouseEvent, path?: string) => {
    if (!path) return;
    if (onNavigate) {
      e.preventDefault();
      onNavigate(path === 'home' ? 'home' : path.replace(/^\//, ''));
    }
  };

  return (
    <>
      {/* Schema.org BreadcrumbList Structured Data for Google & Yandex */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <nav aria-label="Breadcrumb" className={`text-xs text-gray-500 font-medium py-3 ${className}`}>
        <ol className="flex flex-wrap items-center gap-1.5 list-none p-0 m-0">
          {fullItems.map((item, idx) => {
            const isLast = idx === fullItems.length - 1;
            const isFirst = idx === 0;

            return (
              <li key={idx} className="flex items-center gap-1.5">
                {idx > 0 && (
                  <ChevronRight size={13} className="text-gray-300 shrink-0 select-none" />
                )}

                {isLast ? (
                  <span className="text-brand-dark font-bold truncate max-w-[240px] sm:max-w-none" aria-current="page">
                    {item.label}
                  </span>
                ) : (
                  <a
                    href={
                      item.path === 'home'
                        ? (isRu ? '/ru' : '/')
                        : (isRu ? `/ru/${item.path?.replace(/^\//, '')}` : `/${item.path?.replace(/^\//, '')}`)
                    }
                    onClick={(e) => handleItemClick(e, item.path)}
                    className="hover:text-brand-blue flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    {isFirst && <Home size={12} className="shrink-0 -mt-0.5 text-gray-400" />}
                    <span>{item.label}</span>
                  </a>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
};

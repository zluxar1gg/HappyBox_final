import React, { useEffect } from 'react';
import { Home, AlertCircle } from 'lucide-react';
import { Header } from './Header';
import { Footer } from './Footer';
import { FloatingContact } from './FloatingContact';
import { Language } from '../utils/translations';

interface NotFoundPageProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  onNavigateHome: () => void;
  onNavigate?: (targetPage: string, sectionId?: string) => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({
  language,
  setLanguage,
  onNavigateHome,
  onNavigate,
}) => {
  const isEn = language === 'en';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-cream font-sans text-brand-dark overflow-x-hidden flex flex-col justify-between pt-20">
      <Header
        language={language}
        setLanguage={setLanguage}
        isDashboard={false}
        onNavigate={onNavigate || onNavigateHome}
      />

      <main className="flex-1 flex items-center justify-center py-16 md:py-24 px-6">
        <div className="max-w-xl w-full mx-auto text-center bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-gray-100">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-amber-50 text-amber-500 mb-6 border border-amber-100 shadow-sm">
            <AlertCircle size={40} className="stroke-[2.2]" />
          </div>

          <div className="text-6xl sm:text-7xl font-extrabold text-brand-dark tracking-tight mb-3">
            404
          </div>

          <h1 className="text-2xl sm:text-3xl font-extrabold text-brand-dark mb-4">
            {isEn ? 'Page Not Found' : 'Страница не найдена'}
          </h1>

          <p className="text-base sm:text-lg text-gray-600 mb-8 max-w-md mx-auto leading-relaxed">
            {isEn
              ? 'Sorry, the page you are looking for does not exist, has been removed, or is temporarily unavailable.'
              : 'К сожалению, запрашиваемая страница не существует, была удалена или временно недоступна.'}
          </p>

          <a
            href={isEn ? '/' : '/ru'}
            onClick={(e) => {
              e.preventDefault();
              onNavigateHome();
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-brand-blue text-white rounded-xl font-bold text-base hover:bg-blue-600 transition-all duration-200 shadow-lg shadow-brand-blue/25 active:scale-[0.98]"
          >
            <Home size={18} />
            <span>{isEn ? 'Return to Homepage' : 'Вернуться на главную'}</span>
          </a>
        </div>
      </main>

      <Footer language={language} />
      <FloatingContact />
    </div>
  );
};


import React, { useState } from 'react';
import { Menu, X, User, ArrowLeft, LogOut, Shield } from 'lucide-react';
import { Language, translations } from '../utils/translations';
import { useAuth } from '../context/AuthContext';

interface HeaderProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  onLoginClick: () => void;
  isDashboard?: boolean;
  onNavigate?: (page: any, targetId?: string) => void;
  onBack?: () => void; // New prop for back navigation
}

export const Header: React.FC<HeaderProps> = ({ language, setLanguage, onLoginClick, isDashboard, onNavigate, onBack }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, isAdmin, logout } = useAuth();
  const t = translations[language].nav;

  // Simplified navigation
  // Services link now points to #services
  const navItems = [
    { name: t.services, href: '#services' },
    { name: t.reviews, href: '#reviews' },
    { name: t.cost, href: '#calc' }, // Updated from #cost to #calc
    { name: t.tracking, href: '#tracking' },
    { name: t.contacts, href: '#contacts' },
    { name: t.faq, href: '#faq' },
    { name: language === 'en' ? 'Blog' : 'Блог', href: '/blog', isRoute: true },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, item: any) => {
    e.preventDefault();
    if (item.isRoute) {
      if (onNavigate) {
        onNavigate('blog');
      } else {
        window.location.href = language === 'ru' ? '/ru/blog' : '/blog';
      }
      setIsMenuOpen(false);
      return;
    }

    if (isDashboard) {
        window.location.href = item.href;
        return;
    }
    
    const targetId = item.href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      setIsMenuOpen(false);
    } else {
      // If element not found (e.g. we are on a blog page), navigate to home with hash
      if (onNavigate) {
        onNavigate('home', targetId);
      } else {
        window.location.href = (language === 'ru' ? '/ru' : '/') + item.href;
      }
      setIsMenuOpen(false);
    }
  };

  const scrollToTop = () => { 
      if (onBack) {
          onBack();
      } else if (onNavigate) {
          onNavigate('home');
          // Remove hash from URL to prevent auto-scrolling back on refresh
          if (window.location.hash) {
              window.history.replaceState("", document.title, window.location.pathname + window.location.search);
          }
          window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
          // Remove hash from URL to prevent auto-scrolling back on refresh
          if (window.location.hash) {
              window.history.replaceState("", document.title, window.location.pathname + window.location.search);
          }
          window.scrollTo({ top: 0, behavior: 'smooth' });
      }
  };

  const toggleLanguage = () => { setLanguage(language === 'en' ? 'ru' : 'en'); };

  return (
    <header className="py-5 bg-cream fixed top-0 left-0 w-full z-50 transition-all shadow-sm border-b border-gray-100/50 backdrop-blur-md bg-cream/90">
      <div className="container mx-auto flex justify-between items-center px-4 xl:px-0">
        <div 
          onClick={scrollToTop}
          className="text-3xl md:text-4xl font-extrabold text-brand-blue tracking-tight cursor-pointer"
        >
          HappyBox
        </div>

        <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
          {!isDashboard && !onBack && (
            <ul className="flex gap-6 xl:gap-8 list-none">
                {navItems.map((item) => (
                <li key={item.href}>
                    <a 
                    href={item.href} 
                    onClick={(e) => handleScroll(e, item)}
                    className="text-brand-dark font-semibold text-sm hover:text-brand-blue transition-colors cursor-pointer tracking-wide"
                    >
                    {item.name}
                    </a>
                </li>
                ))}
            </ul>
          )}

          {/* Sticky Back Button Desktop - Highlighted */}
          {onBack && (
             <button 
                onClick={onBack}
                className="flex items-center gap-2.5 bg-brand-blue/10 hover:bg-brand-blue text-brand-blue hover:text-white px-6 py-2.5 rounded-full font-bold transition-all group shadow-sm active:scale-95"
             >
                <ArrowLeft size={18} className="transition-colors" />
                {language === 'en' ? 'Back' : 'Назад'}
             </button>
          )}
          
          <div className="flex items-center gap-6 border-l border-gray-200 pl-6 h-8">
            {/* Fixed width container to prevent jittering when switching languages */}
            <div className="w-[60px] flex justify-center">
                <button 
                    onClick={toggleLanguage}
                    aria-label={language === 'en' ? 'Switch to Russian' : 'Переключить на русский язык'}
                    className="text-gray-500 font-bold text-sm cursor-pointer hover:text-brand-blue tracking-wide select-none outline-none"
                >
                    {language.toUpperCase()} ▼
                </button>
            </div>

            {!isDashboard && (
              user ? (
                <div className="flex items-center gap-2">
                  <button 
                    onClick={onLoginClick}
                    aria-label={isAdmin ? 'Панель администратора' : 'Личный кабинет'}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl font-bold text-xs md:text-sm transition-all shadow-sm active:scale-95 whitespace-nowrap ${
                      isAdmin 
                        ? 'bg-amber-400 hover:bg-amber-500 text-brand-dark font-black' 
                        : 'bg-brand-dark hover:bg-brand-blue text-white'
                    }`}
                  >
                    {isAdmin ? <Shield size={16} /> : <User size={16} />}
                    <span>{isAdmin ? (language === 'en' ? 'Admin Portal' : 'Админка') : `${user.clientCode} | ${language === 'en' ? 'Cabinet' : 'Кабинет'}`}</span>
                  </button>
                  <button 
                    onClick={() => logout()}
                    title={language === 'en' ? 'Sign Out' : 'Выйти'}
                    className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all"
                  >
                    <LogOut size={16} />
                  </button>
                </div>
              ) : (
                <button 
                  onClick={onLoginClick}
                  aria-label={language === 'en' ? 'Sign In' : 'Войти в личный кабинет'}
                  className="flex items-center gap-2 bg-brand-dark text-white px-5 py-2 rounded-xl font-bold text-sm hover:bg-brand-blue transition-colors shadow-lg shadow-gray-200 active:scale-95 whitespace-nowrap"
                >
                  <User size={16} />
                  {language === 'en' ? 'Sign In' : 'Войти'}
                </button>
              )
            )}
          </div>
        </nav>

        <div className="flex items-center gap-3 lg:hidden">
            <button 
                onClick={toggleLanguage}
                aria-label={language === 'en' ? 'Switch to Russian' : 'Переключить на русский язык'}
                className="text-gray-500 font-bold text-sm cursor-pointer hover:text-brand-blue tracking-wide select-none outline-none"
            >
                {language.toUpperCase()} ▼
            </button>
            
            {!isDashboard && (
              user ? (
                <button 
                  onClick={onLoginClick}
                  aria-label={isAdmin ? 'Admin' : user.clientCode}
                  className={`h-9 px-3 rounded-xl flex items-center justify-center font-bold text-xs active:scale-95 ${
                    isAdmin ? 'bg-amber-400 text-brand-dark' : 'bg-brand-dark text-white'
                  }`}
                >
                  {isAdmin ? 'ADMIN' : user.clientCode}
                </button>
              ) : (
                <button 
                  onClick={onLoginClick}
                  aria-label={language === 'en' ? 'Sign In' : 'Войти в личный кабинет'}
                  className="w-10 h-10 bg-brand-dark text-white rounded-full flex items-center justify-center active:scale-95"
                >
                  <User size={20} />
                </button>
              )
            )}

            {!isDashboard && (
                <>
                    {onBack ? (
                        <button 
                            className="text-brand-blue w-12 h-12 bg-brand-blue/10 rounded-full flex items-center justify-center active:scale-90 transition-all border border-brand-blue/20 shadow-sm"
                            onClick={onBack}
                            aria-label="Back"
                        >
                            <ArrowLeft size={24} strokeWidth={2.5} />
                        </button>
                    ) : (
                        <button 
                            className="text-brand-dark"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                            aria-expanded={isMenuOpen}
                        >
                            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    )}
                </>
            )}
        </div>

        {isMenuOpen && !isDashboard && !onBack && (
          <div className="absolute top-full left-0 w-full bg-white shadow-lg py-6 px-4 flex flex-col gap-4 lg:hidden border-t border-gray-100 animate-fade-in">
            {navItems.map((item) => (
              <a 
                key={item.href} 
                href={item.href} 
                onClick={(e) => handleScroll(e, item)} 
                className="text-lg font-bold py-3 border-b border-gray-100 last:border-0 text-center text-brand-dark"
              >
                {item.name}
              </a>
            ))}
             <button 
                onClick={() => { onLoginClick(); setIsMenuOpen(false); }}
                className={`flex items-center justify-center gap-2 px-5 py-4 rounded-xl font-bold text-lg mt-2 active:scale-95 ${
                  user ? (isAdmin ? 'bg-amber-400 text-brand-dark' : 'bg-brand-dark text-white') : 'bg-brand-dark text-white'
                }`}
            >
                {isAdmin ? <Shield size={20} /> : <User size={20} />}
                {user 
                  ? (isAdmin ? (language === 'en' ? 'Admin Portal' : 'Админ-панель') : `${user.clientCode} | ${language === 'en' ? 'My Cabinet' : 'Личный кабинет'}`) 
                  : (language === 'en' ? 'Sign In' : 'Личный кабинет')
                }
            </button>
            {user && (
              <button
                onClick={() => { logout(); setIsMenuOpen(false); }}
                className="flex items-center justify-center gap-2 text-red-500 font-bold py-2 text-sm"
              >
                <LogOut size={16} />
                <span>{language === 'en' ? 'Sign Out' : 'Выйти из аккаунта'}</span>
              </button>
            )}
          </div>
        )}
      </div>
    </header>
  );
};

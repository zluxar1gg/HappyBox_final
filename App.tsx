
import React, { useState, Suspense, useEffect, useLayoutEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
// Services component removed as content is moved to dedicated pages
import { Reviews } from './components/Reviews';
import { Calculator } from './components/Calculator';
import { DeliveryPath } from './components/DeliveryPath';
import { ShoppingGuides } from './components/ShoppingGuides';
import { Tracking } from './components/Tracking';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { SeoBlock } from './components/SeoBlock';
import { Analytics } from './components/Analytics';
import { FloatingContact } from './components/FloatingContact';
import { QuickAccess } from './components/QuickAccess';
import { FAQ } from './components/FAQ';
import { UsaShippingPage } from './components/UsaShippingPage'; 
import { EuShippingPage } from './components/EuShippingPage';
import { UaeShippingPage } from './components/UaeShippingPage';
import { RuShippingPage } from './components/RuShippingPage';
import { AmazonPage } from './components/AmazonPage';
import { ServicePage } from './components/ServicePage';
import { Language, translations } from './utils/translations';
import { updateMetaTags } from './utils/seo'; 
import { Loader2, X, Hammer } from 'lucide-react';

// Lazy load components
const Quiz = React.lazy(() => import('./components/Quiz').then(module => ({ default: module.Quiz })));

type PageType = 'home' | 'usa' | 'eu' | 'uae' | 'ru' | 'taobao' | '1688' | 'inspection' | 'warehousing' | 'amazon' | 'poizon' | 'tmall';

const App: React.FC = () => {
  // 1. Initialize language from URL
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      return params.get('lang') === 'ru' ? 'ru' : 'en';
    }
    return 'en';
  });

  // 2. Custom setter to update URL query param
  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      if (lang === 'ru') {
        params.set('lang', 'ru');
      } else {
        params.delete('lang');
      }
      
      const search = params.toString();
      const newUrl = `${window.location.pathname}${search ? '?' + search : ''}${window.location.hash}`;
      
      window.history.pushState(null, '', newUrl);
    }
  };

  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [isDevModalOpen, setIsDevModalOpen] = useState(false);
  
  // Initialize page from URL parameter
  const [currentPage, setCurrentPage] = useState<PageType>(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const pageParam = params.get('page');
      
      const validPages: PageType[] = ['usa', 'eu', 'uae', 'ru', 'taobao', '1688', 'inspection', 'warehousing', 'amazon', 'poizon', 'tmall'];
      if (pageParam && validPages.includes(pageParam as PageType)) {
          return pageParam as PageType;
      }
      
      return 'home';
    }
    return 'home';
  });

  // --- SCROLL RESTORATION FIX ---
  // Disable browser's automatic scroll restoration to prevent fighting with our custom logic
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  // --- SEO EFFECT ---
  // Updates title, description, and canonical URL whenever page or language changes
  useEffect(() => {
    updateMetaTags(currentPage, language);
  }, [currentPage, language]);

  const t = translations[language].devModal;

  // Handle navigation and URL updates
  const handleNavigate = (page: string, sectionId?: string) => {
    const validPages: PageType[] = ['home', 'usa', 'eu', 'uae', 'ru', 'taobao', '1688', 'inspection', 'warehousing', 'amazon', 'poizon', 'tmall'];
    let targetPage: PageType = 'home';
    
    if (validPages.includes(page as PageType)) {
        targetPage = page as PageType;
    }

    // Update State
    setCurrentPage(targetPage);
    
    // Update URL logic
    const params = new URLSearchParams(window.location.search);
    if (targetPage === 'home') {
        params.delete('page');
    } else {
        params.set('page', targetPage);
    }
      
    // Construct Hash logic: Only append hash if we are going home and have a sectionId
    const hash = (targetPage === 'home' && sectionId) ? `#${sectionId}` : '';
    const search = params.toString();
    const newUrl = `${window.location.pathname}${search ? '?' + search : ''}${hash}`;
    
    window.history.pushState(null, '', newUrl);
  };

  // Scroll Handling Effect
  // Using useLayoutEffect to scroll BEFORE paint to prevent visual jumps
  useLayoutEffect(() => {
    // If we are on Home page
    if (currentPage === 'home') {
        // Check if there is a hash in the URL (e.g., #services)
        if (window.location.hash) {
            const id = window.location.hash.replace('#', '');
            const element = document.getElementById(id);
            if (element) {
                // 'auto' ensures instant placement before paint
                // scroll-margin-top in CSS handles the header offset
                element.scrollIntoView({ behavior: 'auto' });
            }
        } else {
            // No hash? Go to top
            window.scrollTo(0, 0);
        }
    } else {
        // Any other page? Go to top
        window.scrollTo(0, 0);
    }
  }, [currentPage]);

  // Listen for browser "Back" button
  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      const params = new URLSearchParams(window.location.search);
      const pageParam = params.get('page');
      const langParam = params.get('lang');
      
      const validPages: PageType[] = ['usa', 'eu', 'uae', 'ru', 'taobao', '1688', 'inspection', 'warehousing', 'amazon', 'poizon', 'tmall'];
      if (pageParam && validPages.includes(pageParam as PageType)) {
          setCurrentPage(pageParam as PageType);
      } else {
          setCurrentPage('home');
      }

      // Update language from URL
      setLanguageState(langParam === 'ru' ? 'ru' : 'en');
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Handle body scroll locking
  useEffect(() => {
    if (isQuizOpen || isDevModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isQuizOpen, isDevModalOpen]);

  // --- ROUTER VIEW ---
  const renderContent = () => {
      // Country pages return to "services" section (QuickAccess wrapper)
      if (currentPage === 'usa') return <UsaShippingPage language={language} setLanguage={setLanguage} onBack={() => handleNavigate('home', 'services')} />;
      if (currentPage === 'eu') return <EuShippingPage language={language} setLanguage={setLanguage} onBack={() => handleNavigate('home', 'services')} />;
      if (currentPage === 'uae') return <UaeShippingPage language={language} setLanguage={setLanguage} onBack={() => handleNavigate('home', 'services')} />;
      if (currentPage === 'ru') return <RuShippingPage language={language} setLanguage={setLanguage} onBack={() => handleNavigate('home', 'services')} />;
      if (currentPage === 'amazon') return <AmazonPage language={language} setLanguage={setLanguage} onBack={() => handleNavigate('home', 'services')} />;
      
      // Service pages return to "services" section
      if (currentPage === 'taobao' || currentPage === '1688' || currentPage === 'inspection' || currentPage === 'warehousing' || currentPage === 'poizon' || currentPage === 'tmall') {
          return <ServicePage language={language} setLanguage={setLanguage} serviceId={currentPage} onBack={() => handleNavigate('home', 'services')} onNavigate={handleNavigate} />;
      }

      // Default Home
      return (
        <div className="min-h-screen bg-cream font-sans text-brand-dark overflow-x-hidden pt-20">
          <Header 
            language={language} 
            setLanguage={setLanguage} 
            onLoginClick={() => setIsDevModalOpen(true)}
            isDashboard={false}
            onNavigate={handleNavigate}
          />
          
          <main>
            <Hero language={language} />
            <QuickAccess language={language} onNavigate={handleNavigate} />

            <div id="about" className="scroll-mt-28">
              <About language={language} />
            </div>
            
            <ShoppingGuides language={language} />
            <DeliveryPath language={language} />

            <div id="reviews" className="scroll-mt-28">
              <Reviews language={language} />
            </div>
            <div id="calc" className="scroll-mt-28">
              <Calculator language={language} onOpenQuiz={() => setIsQuizOpen(true)} />
            </div>
            
            <Suspense fallback={
              isQuizOpen ? (
                <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/20 backdrop-blur-sm">
                  <div className="bg-white p-4 rounded-full shadow-lg">
                    <Loader2 className="animate-spin text-brand-blue" size={32} />
                  </div>
                </div>
              ) : null
            }>
              {isQuizOpen && (
                <Quiz 
                  language={language} 
                  isOpen={isQuizOpen} 
                  onClose={() => setIsQuizOpen(false)} 
                />
              )}
            </Suspense>

            <div id="tracking" className="scroll-mt-28">
              <Tracking language={language} />
            </div>
            
            <div id="contacts" className="scroll-mt-28">
              <Contact language={language} />
            </div>

            <FAQ language={language} />
            
            <SeoBlock language={language} onNavigate={handleNavigate} />
            
            <Footer language={language} />
            <FloatingContact />
          </main>
        </div>
      );
  };

  return (
      <>
        <Analytics />
        {renderContent()}
        {/* Under Development Modal */}
        {isDevModalOpen && (
            <div 
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-brand-dark/60 backdrop-blur-md animate-fade-in"
            onClick={() => setIsDevModalOpen(false)}
            >
            <div 
                className="bg-white w-full max-w-md rounded-[40px] shadow-2xl p-8 md:p-12 text-center relative overflow-hidden"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-brand-light rounded-full blur-2xl opacity-50"></div>
                
                <button 
                onClick={() => setIsDevModalOpen(false)}
                className="absolute top-6 right-6 w-10 h-10 bg-gray-50 hover:bg-gray-100 rounded-full flex items-center justify-center text-gray-400 hover:text-brand-dark transition-all"
                >
                <X size={20} />
                </button>

                <div className="w-20 h-20 bg-brand-blue/10 text-brand-blue rounded-[25px] flex items-center justify-center mx-auto mb-8 animate-bounce-slow">
                <Hammer size={40} />
                </div>

                <h2 className="text-3xl font-black text-brand-dark mb-4 tracking-tight">
                {t.title}
                </h2>
                
                <p className="text-gray-500 font-bold leading-relaxed mb-10">
                {t.message}
                </p>

                <button 
                onClick={() => setIsDevModalOpen(false)}
                className="w-full bg-brand-dark text-white py-4 rounded-2xl font-black text-lg hover:bg-brand-blue transition-all active:scale-95 shadow-xl shadow-gray-100"
                >
                {t.close}
                </button>
            </div>
            </div>
        )}
      </>
  );
};

export default App;

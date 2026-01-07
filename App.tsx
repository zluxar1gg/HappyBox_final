
import React, { useState, Suspense, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
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
import { UsaShippingPage } from './components/UsaShippingPage'; 
import { EuShippingPage } from './components/EuShippingPage';
import { UaeShippingPage } from './components/UaeShippingPage';
import { RuShippingPage } from './components/RuShippingPage';
import { Language, translations } from './utils/translations';
import { Loader2, X, Hammer } from 'lucide-react';

// Lazy load components
const Quiz = React.lazy(() => import('./components/Quiz').then(module => ({ default: module.Quiz })));

type PageType = 'home' | 'usa' | 'eu' | 'uae' | 'ru';

const App: React.FC = () => {
  const [language, setLanguage] = useState<Language>('en');
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [isDevModalOpen, setIsDevModalOpen] = useState(false);
  
  // Initialize page from URL parameter
  const [currentPage, setCurrentPage] = useState<PageType>(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const pageParam = params.get('page');
      if (pageParam === 'usa') return 'usa';
      if (pageParam === 'eu') return 'eu';
      if (pageParam === 'uae') return 'uae';
      if (pageParam === 'ru') return 'ru';
      return 'home';
    }
    return 'home';
  });

  const t = translations[language].devModal;

  // Handle navigation and URL updates
  const handleNavigate = (page: string) => {
    let targetPage: PageType = 'home';
    if (page === 'usa' || page === 'eu' || page === 'uae' || page === 'ru') {
        targetPage = page as PageType;
    }

    setCurrentPage(targetPage);
    
    // Update URL without reloading
    const newUrl = targetPage === 'home' 
      ? window.location.pathname 
      : `${window.location.pathname}?page=${targetPage}`;
      
    window.history.pushState({ page: targetPage }, '', newUrl);
    
    // Scroll to top
    window.scrollTo(0, 0);
  };

  // Listen for browser "Back" button
  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      const params = new URLSearchParams(window.location.search);
      const pageParam = params.get('page');
      
      if (pageParam === 'usa') setCurrentPage('usa');
      else if (pageParam === 'eu') setCurrentPage('eu');
      else if (pageParam === 'uae') setCurrentPage('uae');
      else if (pageParam === 'ru') setCurrentPage('ru');
      else setCurrentPage('home');
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
      if (currentPage === 'usa') return <UsaShippingPage language={language} setLanguage={setLanguage} onBack={() => handleNavigate('home')} />;
      if (currentPage === 'eu') return <EuShippingPage language={language} setLanguage={setLanguage} onBack={() => handleNavigate('home')} />;
      if (currentPage === 'uae') return <UaeShippingPage language={language} setLanguage={setLanguage} onBack={() => handleNavigate('home')} />;
      if (currentPage === 'ru') return <RuShippingPage language={language} setLanguage={setLanguage} onBack={() => handleNavigate('home')} />;

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

            <div id="services" className="scroll-mt-28">
              <Services language={language} />
            </div>
            <div id="about" className="scroll-mt-28">
              <About language={language} />
            </div>
            
            <ShoppingGuides language={language} />
            <DeliveryPath language={language} />

            <div id="reviews" className="scroll-mt-28">
              <Reviews language={language} />
            </div>
            <div id="cost" className="scroll-mt-28">
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

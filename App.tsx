
import React, { useState, Suspense, useEffect, useLayoutEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate, useLocation, useParams } from 'react-router-dom';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Reviews } from './components/Reviews';
import { Calculator } from './components/Calculator';
import { DeliveryPath } from './components/DeliveryPath';
import { WhyUs } from './components/WhyUs';
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
import { SchemaMarkup } from './components/SchemaMarkup';
import { Loader2, X, Hammer } from 'lucide-react';

// Lazy load components
const Quiz = React.lazy(() => import('./components/Quiz').then(module => ({ default: module.Quiz })));

type PageType = 'home' | 'usa' | 'eu' | 'uae' | 'russia' | 'taobao' | '1688' | 'inspection' | 'warehousing' | 'amazon' | 'poizon' | 'tmall' | 'pinduoduo' | 'xianyu' | 'weidian';

const AppContent: React.FC<{ language: Language }> = ({ language }) => {
  const { page } = useParams<{ page?: string }>();
  const navigate = useNavigate();
  const location = useLocation();

  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [isDevModalOpen, setIsDevModalOpen] = useState(false);

  const validPages: PageType[] = ['usa', 'eu', 'uae', 'russia', 'taobao', '1688', 'inspection', 'warehousing', 'amazon', 'poizon', 'tmall', 'pinduoduo', 'xianyu', 'weidian'];
  
  // Determine current page from URL params
  const currentPage: PageType = (page && validPages.includes(page as PageType)) ? (page as PageType) : 'home';

  // Custom setter to update URL
  const setLanguage = (lang: Language) => {
    const prefix = lang === 'ru' ? '/ru' : '';
    const path = currentPage === 'home' ? '' : `/${currentPage}`;
    navigate(`${prefix}${path}${location.hash}`);
  };

  const handleNavigate = (targetPage: string, sectionId?: string) => {
    const prefix = language === 'ru' ? '/ru' : '';
    const path = targetPage === 'home' ? '' : `/${targetPage}`;
    const hash = (targetPage === 'home' && sectionId) ? `#${sectionId}` : '';
    navigate(`${prefix}${path}${hash}`);
  };

  // --- SCROLL RESTORATION FIX ---
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  // --- SEO EFFECT ---
  useEffect(() => {
    updateMetaTags(currentPage, language);
  }, [currentPage, language]);

  // Scroll Handling Effect
  useLayoutEffect(() => {
    if (currentPage === 'home') {
      if (location.hash) {
        const id = location.hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'auto' });
        }
      } else {
        window.scrollTo(0, 0);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [currentPage, location.hash]);

  // Handle body scroll locking
  useEffect(() => {
    if (isQuizOpen || isDevModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isQuizOpen, isDevModalOpen]);

  const t = translations[language].devModal;

  const renderContent = () => {
      // Country pages return to "services" section (QuickAccess wrapper)
      if (currentPage === 'usa') return <UsaShippingPage language={language} setLanguage={setLanguage} onBack={() => handleNavigate('home', 'services')} />;
      if (currentPage === 'eu') return <EuShippingPage language={language} setLanguage={setLanguage} onBack={() => handleNavigate('home', 'services')} />;
      if (currentPage === 'uae') return <UaeShippingPage language={language} setLanguage={setLanguage} onBack={() => handleNavigate('home', 'services')} />;
      if (currentPage === 'russia') return <RuShippingPage language={language} setLanguage={setLanguage} onBack={() => handleNavigate('home', 'services')} />;
      if (currentPage === 'amazon') return <AmazonPage language={language} setLanguage={setLanguage} onBack={() => handleNavigate('home', 'services')} />;
      
      // Service pages return to "services" section
      if (currentPage === 'taobao' || currentPage === '1688' || currentPage === 'inspection' || currentPage === 'warehousing' || currentPage === 'poizon' || currentPage === 'tmall' || currentPage === 'pinduoduo' || currentPage === 'xianyu' || currentPage === 'weidian') {
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
            
            <WhyUs language={language} />
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
        <SchemaMarkup />
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

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<AppContent language="en" />} />
      <Route path="/ru" element={<AppContent language="ru" />} />
      <Route path="/:page" element={<AppContent language="en" />} />
      <Route path="/ru/:page" element={<AppContent language="ru" />} />
    </Routes>
  );
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
};

export default App;

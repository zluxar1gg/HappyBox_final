
import React, { useState, Suspense, useEffect, useLayoutEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate, useLocation, useParams, useNavigationType } from 'react-router-dom';
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
import { BlogCatalog } from './components/BlogCatalog';
import { BlogPost } from './components/BlogPost';
import { AllDestinationsPage } from './components/AllDestinationsPage';
import { GenericDestinationPage } from './components/GenericDestinationPage';
import { CaShippingPage } from './components/CaShippingPage';
import { AmazonCanadaPage } from './components/AmazonCanadaPage';
import { P1688Page } from './components/P1688Page';
import { DynamicSeo } from './components/DynamicSeo';
import { getBlogPostBySlug } from './utils/blogData';
import { Language, translations } from './utils/translations';
import { updateMetaTags, PageType } from './utils/seo'; 
import { SchemaMarkup } from './components/SchemaMarkup';
import { Loader2, X, Hammer } from 'lucide-react';

// Lazy load components
const Quiz = React.lazy(() => import('./components/Quiz').then(module => ({ default: module.Quiz })));

const AppContent: React.FC<{ language: Language, isBlogPost?: boolean }> = ({ language, isBlogPost }) => {
  const { page, slug } = useParams<{ page?: string, slug?: string }>();
  const navigate = useNavigate();
  const location = useLocation();
  const navType = useNavigationType();

  const getCleanPath = (pathname: string) => {
    let cleanPath = pathname.replace(/^\/ru(\/|$)/, '/');
    if (cleanPath === '') cleanPath = '/';
    return cleanPath;
  };

  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [isDevModalOpen, setIsDevModalOpen] = useState(false);

  const validPages: PageType[] = ['usa', 'eu', 'uae', 'russia', 'taobao', '1688', 'alibaba', 'inspection', 'warehousing', 'amazon', 'amazon-canada', 'poizon', 'tmall', 'pinduoduo', 'xianyu', 'weidian', 'blog', 'destinations', 'canada', 'thailand', 'indonesia', 'argentina', 'south-africa', 'georgia', 'israel', 'australia'];

  
  // Determine current page from URL params
  let currentPage: PageType = (page && validPages.includes(page as PageType)) ? (page as PageType) : 'home';
  if (isBlogPost) {
    currentPage = 'blogPost';
  }

  // Custom setter to update URL
  const setLanguage = (lang: Language) => {
    const prefix = lang === 'ru' ? '/ru' : '';
    let path = '';
    if (currentPage === 'blogPost' && slug) {
      path = `/blog/${slug}`;
    } else if (currentPage !== 'home') {
      path = `/${currentPage}`;
    }
    let newPath = `${prefix}${path}`;
    if (newPath === '') newPath = '/';
    
    const finalUrl = location.hash ? `${newPath}${location.hash}` : newPath;
    navigate(finalUrl, { replace: true, state: { ...location.state, retainScroll: true, previousScrollY: window.scrollY } });
  };

  const handleBack = (fallbackPage: string, fallbackSectionId?: string) => {
    if (location.key !== 'default') {
      navigate(-1);
    } else {
      handleNavigate(fallbackPage, fallbackSectionId, { isBack: true });
    }
  };

  const handleNavigate = (targetPage: string, sectionId?: string, stateObj?: any) => {
    let finalTarget = targetPage;
    let finalSection = sectionId;
    if (targetPage.includes('#')) {
      const parts = targetPage.split('#');
      finalTarget = parts[0];
      finalSection = finalSection || parts[1];
    }
    const prefix = language === 'ru' ? '/ru' : '';
    const path = finalTarget === 'home' ? '' : `/${finalTarget}`;
    const hash = finalSection ? `#${finalSection}` : '';
    let newPath = `${prefix}${path}`;
    if (newPath === '') newPath = '/';
    navigate(`${newPath}${hash}`, { state: { ...stateObj, from: currentPage } });
  };

  // --- SCROLL RESTORATION FIX ---
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  // Track and save scroll positions
  useEffect(() => {
    const handleScroll = () => {
      sessionStorage.setItem(`scroll-${getCleanPath(location.pathname)}`, window.scrollY.toString());
    };
    
    let timeout: ReturnType<typeof setTimeout>;
    const throttledScroll = () => {
       if (timeout) clearTimeout(timeout);
       timeout = setTimeout(handleScroll, 100);
    };

    window.addEventListener('scroll', throttledScroll);
    return () => {
        window.removeEventListener('scroll', throttledScroll);
        if (timeout) clearTimeout(timeout);
    };
  }, [location.pathname]);

  // --- SEO EFFECT ---
  useEffect(() => {
    if (currentPage === 'blogPost' && slug) {
      const post = getBlogPostBySlug(slug, language);
      if (post) {
        updateMetaTags(currentPage, language, { title: post.title, description: post.excerpt, slug: post.slug });
      } else {
        updateMetaTags(currentPage, language);
      }
    } else {
      updateMetaTags(currentPage, language);
    }
    document.documentElement.lang = language;
  }, [currentPage, language, slug]);

  // Scroll Handling Effect
  useLayoutEffect(() => {
    // Check if we requested to retain scroll position (e.g., during language switch)
    if (location.state && (location.state as any).retainScroll) {
       // Timeout ensures DOM is fully rendered before scrolling
       setTimeout(() => {
           window.scrollTo(0, (location.state as any).previousScrollY);
       }, 10);
       return;
    }

    // If navigation is a POP (e.g. Back/Forward) or simulated back, restore saved scroll
    if (navType === 'POP' || (location.state && (location.state as any).isBack)) {
       const savedScroll = sessionStorage.getItem(`scroll-${getCleanPath(location.pathname)}`);
       if (savedScroll) {
          // Timeout ensures DOM is fully rendered before scrolling
          setTimeout(() => {
             window.scrollTo(0, parseInt(savedScroll, 10));
          }, 10);
       }
       return;
    }

    if (location.hash) {
      const id = location.hash.replace('#', '');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'auto' });
        }
      }, 50);
    } else {
      window.scrollTo(0, 0);
    }
  }, [currentPage, location.hash, navType, location.pathname, location.state]);

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
      if (currentPage === 'blog') return (
        <div className="min-h-screen bg-cream font-sans text-brand-dark overflow-x-hidden pt-20">
          <Header language={language} setLanguage={setLanguage} onLoginClick={() => setIsDevModalOpen(true)} isDashboard={false} onNavigate={handleNavigate} onBack={() => handleBack('home')} />
          <BlogCatalog language={language} />
          <Footer language={language} />
        </div>
      );
      if (currentPage === 'blogPost') return (
        <div className="min-h-screen bg-cream font-sans text-brand-dark overflow-x-hidden pt-20">
          <Header language={language} setLanguage={setLanguage} onLoginClick={() => setIsDevModalOpen(true)} isDashboard={false} onNavigate={handleNavigate} onBack={() => handleBack('blog')} />
          <BlogPost language={language} />
          <Footer language={language} />
        </div>
      );

      // Country pages return dynamically to where they came from
      if (currentPage === 'usa') return <UsaShippingPage language={language} setLanguage={setLanguage} onNavigate={handleNavigate} onBack={() => handleBack((location.state as any)?.from || 'home', (location.state as any)?.from !== 'destinations' ? 'services' : undefined)} />;
      if (currentPage === 'eu') return <EuShippingPage language={language} setLanguage={setLanguage} onNavigate={handleNavigate} onBack={() => handleBack((location.state as any)?.from || 'home', (location.state as any)?.from !== 'destinations' ? 'services' : undefined)} />;
      if (currentPage === 'uae') return <UaeShippingPage language={language} setLanguage={setLanguage} onNavigate={handleNavigate} onBack={() => handleBack((location.state as any)?.from || 'home', (location.state as any)?.from !== 'destinations' ? 'services' : undefined)} />;
      if (currentPage === 'russia') return <RuShippingPage language={language} setLanguage={setLanguage} onNavigate={handleNavigate} onBack={() => handleBack((location.state as any)?.from || 'home', (location.state as any)?.from !== 'destinations' ? 'services' : undefined)} />;
      if (currentPage === 'amazon') return <AmazonPage language={language} setLanguage={setLanguage} onNavigate={handleNavigate} onBack={() => handleBack((location.state as any)?.from || 'home', (location.state as any)?.from !== 'destinations' ? 'services' : undefined)} />;
      if (currentPage === 'canada') return <CaShippingPage language={language} setLanguage={setLanguage} onNavigate={handleNavigate} onBack={() => handleBack((location.state as any)?.from || 'destinations')} />;
      if (currentPage === 'amazon-canada') return <AmazonCanadaPage language={language} setLanguage={setLanguage} onNavigate={handleNavigate} onBack={() => handleBack((location.state as any)?.from || 'home', (location.state as any)?.from !== 'destinations' ? 'services' : undefined)} />;
      
      if (currentPage === 'destinations') return <AllDestinationsPage language={language} setLanguage={setLanguage} onBack={() => handleBack('home', 'services')} onNavigate={handleNavigate} />;

      const genericDestinations: PageType[] = ['thailand', 'indonesia', 'argentina', 'south-africa', 'georgia', 'israel', 'australia'];
      if (genericDestinations.includes(currentPage)) {
          return <GenericDestinationPage language={language} setLanguage={setLanguage} countryId={currentPage} onBack={() => handleBack('destinations')} onNavigate={handleNavigate} />;
      }

      const getGoBackFallback = () => {
        const from = (location.state as any)?.from;
        if (from && from !== 'home') return { page: from, section: undefined };
        return { page: 'home', section: 'services' };
      };

      // Service pages return to "services" section
      if (currentPage === '1688') {
          const fallback = getGoBackFallback();
          return <P1688Page language={language} setLanguage={setLanguage} onBack={() => handleBack(fallback.page, fallback.section)} onNavigate={handleNavigate} />;
      }
      
      if (currentPage === 'taobao' || currentPage === 'alibaba' || currentPage === 'inspection' || currentPage === 'warehousing' || currentPage === 'poizon' || currentPage === 'tmall' || currentPage === 'pinduoduo' || currentPage === 'xianyu' || currentPage === 'weidian') {
          const fallback = getGoBackFallback();
          return <ServicePage language={language} setLanguage={setLanguage} serviceId={currentPage} onBack={() => handleBack(fallback.page, fallback.section)} onNavigate={handleNavigate} />;
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
              <Contact language={language} currentPage={currentPage} />
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
        <DynamicSeo language={language} currentPage={currentPage} slug={slug} />
        <SchemaMarkup currentPage={currentPage} language={language} />
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
      <Route path="/blog/:slug" element={<AppContent language="en" isBlogPost />} />
      <Route path="/ru/blog/:slug" element={<AppContent language="ru" isBlogPost />} />
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

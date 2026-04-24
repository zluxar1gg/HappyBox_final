import React, { useEffect, Component, ErrorInfo, ReactNode } from 'react';
import { Header } from './Header';
import { Contact } from './Contact';
import { Footer } from './Footer';
import { SeoBlock } from './SeoBlock';
import { Language } from '../utils/translations';
import { FloatingContact } from './FloatingContact';
import { DestinationsGrid } from './DestinationsGrid';
import { ArrowLeft } from 'lucide-react';

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
  errorMsg: string;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    errorMsg: ""
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, errorMsg: error.toString() };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return <div className="p-10 text-red-500 font-bold">Sorry.. there was an error: {this.state.errorMsg}</div>;
    }
    return this.props.children;
  }
}

interface AllDestinationsPageProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  onBack: () => void;
  onNavigate?: (page: string) => void;
}

export const AllDestinationsPage: React.FC<AllDestinationsPageProps> = ({ 
  language, 
  setLanguage, 
  onBack,
  onNavigate 
}) => {
  const isEn = language === 'en';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-cream font-sans text-brand-dark overflow-x-hidden pt-20">
      <ErrorBoundary>
        <Header 
          language={language} 
          setLanguage={setLanguage} 
          onLoginClick={() => {}}
          isDashboard={false}
          onNavigate={onNavigate}
          onBack={onBack}
        />
        
        <main>
          {/* Header Section */}
          <section className="py-12 lg:py-24 bg-cream">
              <div className="container mx-auto px-6 xl:px-0">
                   <div className="max-w-5xl mx-auto text-center">
                      <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold leading-[1.1] text-brand-dark mb-8 tracking-tight">
                          {isEn ? 'All Destinations' : 'Все направления доставки'}
                      </h1>
                      <p className="text-xl text-gray-600 mb-10 font-medium leading-relaxed max-w-3xl mx-auto">
                          {isEn 
                              ? 'We ship packages, commercial cargo, and Amazon FBA worldwide. Find your route below.' 
                              : 'Мы доставляем посылки, коммерческие грузы и отправления на Amazon FBA по всему миру. Выберите ваше направление.'}
                      </p>
                   </div>
              </div>
          </section>

          {/* Grid Section */}
          <section className="py-16 md:py-24 bg-brand-light/20">
              <div className="container mx-auto px-6 xl:px-0 max-w-6xl">
                 <DestinationsGrid language={language} onNavigate={onNavigate || (() => {})} grouped={true} />
              </div>
          </section>

          <Contact language={language} currentPage="home" /> {/* Or generic */}
          <SeoBlock language={language} onNavigate={onNavigate || (() => {})} />
        </main>

        <Footer language={language} />
        <FloatingContact />
      </ErrorBoundary>
    </div>
  );
};

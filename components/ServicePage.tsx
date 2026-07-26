import React, { useEffect } from 'react';
import { ArrowRight, ShieldCheck, Box, CheckCircle2, ChevronRight, MessageCircle } from 'lucide-react';
import { translations } from '../utils/translations';
import { Language } from '../types';

interface ServicePageProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  serviceId: 'inspection' | 'warehousing';
  onNavigate: (page: any) => void;
  onBack: () => void;
}

export const ServicePage: React.FC<ServicePageProps> = ({
  language,
  serviceId,
  onNavigate,
  onBack
}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [serviceId]);

  const t = translations[language];
  const serviceData = t.servicePages[serviceId] as any;

  if (!serviceData) return null;

  const handleConsultation = () => {
    onNavigate('contact'); // Replace with appropriate action
  };

  return (
    <div className="bg-cream min-h-screen">
      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <button 
          onClick={onBack}
          className="inline-flex items-center text-brand-dark/60 hover:text-brand-primary transition-colors text-sm font-medium"
        >
          <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
          {serviceData.backBtn || t.back}
        </button>
      </div>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="bg-white rounded-3xl p-8 lg:p-16 shadow-sm border border-brand-primary/10">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-serif font-medium text-brand-dark mb-6 leading-tight">
              {serviceData.title}
            </h1>
            <p className="text-xl text-brand-dark/70 leading-relaxed mb-10">
              {serviceData.desc}
            </p>
            <button
              onClick={handleConsultation}
              className="bg-brand-primary text-white px-8 py-4 rounded-xl font-medium hover:bg-brand-primary/90 transition-all flex items-center shadow-lg shadow-brand-primary/20 hover:-translate-y-0.5"
            >
              <MessageCircle className="w-5 h-5 mr-3" />
              {serviceData.startBtn || (language === 'ru' ? 'Получить консультацию' : 'Get a Consultation')}
            </button>
          </div>
        </div>
      </div>

      {/* Why Need Section */}
      {serviceData.whyNeed && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-serif font-medium text-brand-dark mb-6">
                {serviceData.whyNeed.title}
              </h2>
              <p className="text-lg text-brand-dark/70 leading-relaxed">
                {serviceData.whyNeed.text}
              </p>
            </div>
            <div className="bg-brand-primary/5 rounded-3xl p-8 lg:p-12 border border-brand-primary/10">
               <ShieldCheck className="w-16 h-16 text-brand-primary mb-6" />
               <p className="text-xl font-medium text-brand-dark italic">
                 "HappyBox is your professional 'eyes and ears' in China."
               </p>
            </div>
          </div>
        </div>
      )}

      {/* Features Grid */}
      {serviceData.features && (
        <div className="bg-white py-20 border-t border-brand-primary/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-serif font-medium text-brand-dark mb-12 text-center">
              {language === 'ru' ? 'Что входит в услугу?' : 'What is included?'}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {serviceData.features.map((feature: any, idx: number) => (
                <div key={idx} className="bg-cream rounded-2xl p-6 border border-brand-primary/5 hover:border-brand-primary/20 transition-colors">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-6 h-6 text-brand-primary" />
                  </div>
                  <h3 className="text-lg font-medium text-brand-dark mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-brand-dark/70 leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Beyond / ProTip Section */}
      {serviceData.beyond && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="bg-brand-dark text-white rounded-3xl p-8 lg:p-16">
            <h2 className="text-3xl font-serif font-medium mb-10 text-center">
              {serviceData.beyond.title}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {serviceData.beyond.items.map((item: any, idx: number) => (
                <div key={idx} className="bg-white/5 rounded-2xl p-6 border border-white/10">
                  <h3 className="text-xl font-medium mb-3 flex items-center">
                    <ChevronRight className="w-5 h-5 text-brand-primary mr-2" />
                    {item.title}
                  </h3>
                  <p className="text-white/70 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {serviceData.proTip && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
           <div className="bg-brand-primary/10 rounded-3xl p-8 lg:p-12 border border-brand-primary/20 text-center">
              <Box className="w-12 h-12 text-brand-primary mx-auto mb-6" />
              <h2 className="text-2xl font-serif font-medium text-brand-dark mb-4">
                {serviceData.proTip.title}
              </h2>
              <p className="text-lg text-brand-dark/80 max-w-3xl mx-auto">
                {serviceData.proTip.text}
              </p>
           </div>
        </div>
      )}

    </div>
  );
};

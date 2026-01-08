
import React, { useEffect } from 'react';
import { Header } from './Header';
import { Contact } from './Contact';
import { Footer } from './Footer';
import { SeoBlock } from './SeoBlock';
import { Language, translations } from '../utils/translations';
import { FloatingContact } from './FloatingContact';
import { ArrowLeft, CheckCircle2, ShoppingCart, Search, ClipboardCheck, Warehouse, Send } from 'lucide-react';
import { trackLead } from '../utils/analytics';

interface ServicePageProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  serviceId: 'taobao' | '1688' | 'inspection' | 'warehousing';
  onBack: () => void;
}

export const ServicePage: React.FC<ServicePageProps> = ({ language, setLanguage, serviceId, onBack }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const t = translations[language].servicePages[serviceId];

    const getIcon = () => {
        switch (serviceId) {
            case 'taobao': return <ShoppingCart size={48} className="text-orange-500" />;
            case '1688': return <Search size={48} className="text-red-500" />;
            case 'inspection': return <ClipboardCheck size={48} className="text-purple-500" />;
            case 'warehousing': return <Warehouse size={48} className="text-blue-500" />;
        }
    };

    const getColors = () => {
        switch (serviceId) {
            case 'taobao': return 'bg-orange-50 text-orange-500';
            case '1688': return 'bg-red-50 text-red-500';
            case 'inspection': return 'bg-purple-50 text-purple-500';
            case 'warehousing': return 'bg-blue-50 text-blue-500';
        }
    };

    const handleAction = () => {
        trackLead('telegram', 'hero', 'click');
        document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="min-h-screen bg-cream font-sans text-brand-dark overflow-x-hidden pt-20">
            <Header
                language={language}
                setLanguage={setLanguage} 
                onLoginClick={() => {}}
                isDashboard={false}
            />

            <main>
                <section className="py-12 lg:py-24 bg-cream relative overflow-hidden">
                    <div className="container mx-auto px-6 xl:px-0 relative z-10">
                         <button 
                             onClick={onBack}
                             className="mb-10 flex items-center gap-2 text-gray-500 hover:text-brand-blue font-bold uppercase text-sm tracking-wider transition-colors"
                           >
                             <ArrowLeft size={20} /> {t.backBtn}
                           </button>

                         <div className="max-w-4xl mx-auto text-center">
                                <div className={`w-24 h-24 rounded-[30px] flex items-center justify-center mx-auto mb-8 shadow-sm ${getColors()}`}>
                                    {getIcon()}
                                </div>
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-brand-dark mb-8 tracking-tight">
                                    {t.title}
                                </h1>
                                <p className="text-xl text-gray-600 mb-10 font-medium leading-relaxed max-w-2xl mx-auto">
                                    {t.desc}
                                </p>
                         </div>
                    </div>
                    {/* Background blob */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-white rounded-full blur-3xl opacity-50 -z-0 pointer-events-none"></div>
                </section>

                <section className="py-12 bg-white rounded-[50px] mb-8 container mx-auto shadow-sm p-8 lg:p-20 max-w-5xl">
                    <h2 className="text-2xl font-black text-brand-dark mb-8 text-center uppercase tracking-widest opacity-80">
                        {language === 'en' ? 'Key Benefits' : 'Ключевые преимущества'}
                    </h2>
                    
                    <div className="grid md:grid-cols-2 gap-6 mb-12">
                        {t.features.map((feature, idx) => (
                            <div key={idx} className="flex gap-4 items-start p-6 bg-gray-50 rounded-[25px] border border-gray-100 hover:border-brand-blue/20 transition-colors">
                                <div className="mt-1 flex-shrink-0 text-brand-blue">
                                    <CheckCircle2 size={24} />
                                </div>
                                <p className="text-lg font-bold text-brand-dark leading-snug">
                                    {feature}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="text-center">
                        <button 
                            onClick={handleAction}
                            className="bg-brand-dark text-white px-10 py-5 rounded-2xl font-black text-xl hover:bg-brand-blue transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 active:scale-[0.98] inline-flex items-center gap-3"
                        >
                            <Send size={24} />
                            {t.startBtn}
                        </button>
                    </div>
                </section>

                <Contact language={language} />
                <SeoBlock language={language} onNavigate={() => {}} />
                <Footer language={language} />
                <FloatingContact />
            </main>
        </div>
    )
}

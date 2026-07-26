import React, { useEffect } from 'react';
import { Header } from './Header';
import { Contact } from './Contact';
import { Footer } from './Footer';
import { SeoBlock } from './SeoBlock';
import { Language } from '../utils/translations';
import { FloatingContact } from './FloatingContact';
import { ShieldCheck, Percent, Send } from 'lucide-react';
import { platformsData } from '../utils/platformData';

interface GenericPlatformPageProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  platformId: string;
  onBack?: () => void;
  onNavigate?: (page: string) => void;
}

export const GenericPlatformPage: React.FC<GenericPlatformPageProps> = ({ 
  language, 
  setLanguage, 
  platformId,
  onBack, 
  onNavigate 
}) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [platformId]);

    const data = platformsData[platformId];
    if (!data) return null; // Or some fallback/404

    const t = data[language];

    return (
        <div className="min-h-screen bg-cream font-sans text-brand-dark overflow-x-hidden pt-20">
            <Header
                language={language}
                setLanguage={setLanguage} 
                onLoginClick={() => {}}
                isDashboard={false}
                onBack={onBack}
            />
            
            <main>
                <section className="py-12 lg:py-24 bg-cream relative overflow-hidden">
                    <div className="container mx-auto px-6 xl:px-0 relative z-10"> 
                         <div className="max-w-5xl mx-auto text-center">
                                <span className="inline-flex items-center justify-center bg-brand-blue/10 text-brand-blue px-5 py-2.5 rounded-full text-sm font-bold uppercase tracking-wider mb-8">
                                    {t.badge}
                                </span>
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] text-brand-dark mb-8 tracking-tight">
                                    {t.titlePrefix} <span className="text-brand-blue block mt-2">{t.titleHighlight}</span>
                                </h1>
                                <p className="text-lg md:text-xl text-gray-700 font-medium leading-relaxed max-w-4xl mx-auto mb-10">
                                    {t.subtitle}
                                </p>
                         </div>
                    </div>
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-white rounded-full blur-3xl opacity-50 -z-0 pointer-events-none"></div>
                </section>

                <section id="details" className="py-16 bg-white rounded-[50px] mb-8 container mx-auto shadow-sm px-6 lg:px-20 border border-gray-100">
                    
                    <div className="max-w-5xl mx-auto text-gray-800 leading-relaxed mb-20">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark mb-6 tracking-tight">{t.whyTitle}</h2>
                        <div className="space-y-6 text-base md:text-lg text-gray-700 font-medium leading-relaxed">
                            <p>{t.whyText1}</p>
                            <p>{t.whyText2}</p>
                            <p className="font-bold text-brand-dark text-xl mt-8">{t.whyText3}</p>
                        </div>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-extrabold text-brand-dark mb-12 text-center uppercase tracking-widest opacity-80">
                        {t.processTitle}
                    </h3>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20 max-w-6xl mx-auto">
                        {t.process.map((step, idx) => (
                            <div key={idx} className="bg-white rounded-[30px] p-8 border-2 border-gray-50 hover:border-brand-blue/30 transition-all shadow-sm flex flex-col group relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/5 rounded-bl-[100px] -z-10 group-hover:scale-110 transition-transform"></div>
                                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-brand-dark text-white shadow-xl shadow-brand-dark/20 text-2xl font-extrabold relative">
                                    {idx + 1}
                                    <div className="absolute -bottom-2 -right-2 bg-brand-yellow text-brand-dark w-8 h-8 rounded-full flex items-center justify-center shadow-md">
                                        <step.icon size={16} />
                                    </div>
                                </div>
                                <h4 className="font-bold text-xl text-brand-dark mb-3">{step.title}</h4>
                                <p className="text-sm text-base md:text-lg text-gray-700 font-medium leading-relaxed">
                                    {step.desc}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="mb-20 bg-brand-dark rounded-[40px] p-8 lg:p-12 text-white overflow-hidden relative">
                        <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
                            <ShieldCheck size={400} className="translate-x-1/3 -translate-y-1/4" />
                        </div> 
                         <h3 className="text-2xl md:text-3xl font-extrabold mb-10 text-center relative z-10">{t.fearsTitle}</h3>
                         <div className="grid md:grid-cols-2 gap-8 relative z-10">
                            {t.fearsList.map((fear, idx) => (
                                <div key={idx} className="bg-white/10 backdrop-blur-md p-6 md:p-8 rounded-[30px] border border-white/20">
                                    <h4 className="font-bold text-lg text-brand-yellow mb-3 leading-snug">{fear.q}</h4>
                                    <p className="text-white/90 font-medium leading-relaxed">{fear.a}</p>
                                </div>
                            ))}
                         </div>
                    </div>
                    
                    <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
                        <div className="w-24 h-24 bg-brand-yellow rounded-full flex items-center justify-center shrink-0">
                            <Percent size={40} className="text-brand-dark" />
                        </div>
                        <div className="text-center md:text-left">
                            <h3 className="text-xl md:text-2xl font-bold text-brand-dark mb-2">{t.feeTitle}</h3>
                            <p className="text-base md:text-lg text-gray-700 font-medium leading-relaxed">{t.feeText}</p>
                        </div>
                    </div>

                    <div className="text-center pb-8">
                        <button
                            onClick={() => {
                                document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="bg-brand-dark text-white px-10 py-5 rounded-2xl font-black text-xl hover:bg-brand-blue transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 active:scale-[0.98] inline-flex items-center gap-3"
                        >
                            <Send size={24} />
                            {t.cta}
                        </button>
                    </div>

                    {t.beyondTitle && t.beyondPlatforms && (
                        <div className="border-t border-gray-100 pt-16 mt-8">
                            <h3 className="text-2xl md:text-3xl font-extrabold text-brand-dark mb-10 text-center">{t.beyondTitle}</h3>
                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto mb-10">
                                {t.beyondPlatforms.map((platform, idx) => (
                                    <button 
                                        key={idx}
                                        onClick={() => onNavigate?.(platform.id)}
                                        className="bg-cream rounded-2xl p-6 text-left hover:bg-brand-yellow/20 transition-all border border-transparent hover:border-brand-yellow group"
                                    >
                                        <div className="font-bold text-xl text-brand-dark mb-2 group-hover:text-brand-blue transition-colors flex items-center gap-2">
                                            {platform.name}
                                        </div>
                                        <p className="text-gray-600 text-sm font-medium">{platform.desc}</p>
                                    </button>
                                ))}
                            </div>
                            {t.beyondFooter && (
                                <p className="text-center text-gray-500 font-medium max-w-2xl mx-auto">
                                    {t.beyondFooter}
                                </p>
                            )}
                        </div>
                    )}

                </section>

                <div id="contacts">
                    <Contact language={language} currentPage={platformId as any} />
                </div>
                
                <SeoBlock language={language} onNavigate={onNavigate} currentPage={platformId as any} /> 
                <Footer language={language} />
                <FloatingContact />
            </main>
        </div>
    );
};

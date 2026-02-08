
import React, { useEffect } from 'react';
import { Header } from './Header';
import { Contact } from './Contact';
import { Footer } from './Footer';
import { SeoBlock } from './SeoBlock';
import { Language, translations } from '../utils/translations';
import { FloatingContact } from './FloatingContact';
import { 
    CheckCircle2, 
    ShoppingCart, 
    Search, 
    ClipboardCheck, 
    Warehouse, 
    Send,
    Lightbulb,
    Package,
    Link,
    Store,
    Globe,
    XCircle
} from 'lucide-react';
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
    // Helper to safely access potential new fields (they might be undefined on other service pages)
    const extraContent = t as any; 

    const handleAction = () => {
        trackLead('telegram', 'hero', 'click');
        const contactSection = document.getElementById('contacts');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

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
                         <div className="max-w-4xl mx-auto text-center">
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-brand-dark mb-6 tracking-tight">
                                    {t.title}
                                </h1>

                                {/* 0% Commission Badge ONLY for Taobao */}
                                {(serviceId === 'taobao') && (
                                    <div className="mb-8 animate-fade-in">
                                         <div className="inline-block bg-brand-yellow px-6 py-2 rounded-full shadow-sm hover:shadow-md transition-all cursor-default">
                                            <span className="text-base font-bold text-brand-dark tracking-wide">
                                                {language === 'en' ? '0% Service Fee / Commission' : '0% Комиссия за выкуп'}
                                            </span>
                                        </div>
                                    </div>
                                )}

                                <p className="text-xl text-gray-600 mb-10 font-medium leading-relaxed max-w-2xl mx-auto">
                                    {t.desc}
                                </p>
                         </div>
                    </div>
                    {/* Background blob */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-white rounded-full blur-3xl opacity-50 -z-0 pointer-events-none"></div>
                </section>

                <section className="py-12 bg-white rounded-[50px] mb-8 container mx-auto shadow-sm p-8 lg:p-20 max-w-5xl">
                    
                    {/* Why You Need (Supports both simple text and new 'Problems vs Solution' layout) */}
                    {extraContent.whyNeed && (
                        <div className="mb-16 max-w-4xl mx-auto">
                            <h2 className="text-3xl font-black text-brand-dark mb-10 text-center">{extraContent.whyNeed.title}</h2>
                            
                            {/* Check if we have the new 'problems' array */}
                            {extraContent.whyNeed.problems ? (
                                <div className="grid md:grid-cols-2 gap-8">
                                    {/* Problems Column */}
                                    <div className="bg-red-50/50 p-8 rounded-[30px] border border-red-100">
                                        <div className="flex items-center gap-2 mb-6 text-red-600 font-bold uppercase tracking-wider text-sm">
                                            <XCircle size={18} /> {language === 'en' ? 'The Problem' : 'Проблема'}
                                        </div>
                                        <ul className="space-y-4">
                                            {extraContent.whyNeed.problems.map((prob: string, idx: number) => (
                                                <li key={idx} className="flex gap-3 items-start">
                                                    <XCircle size={20} className="text-red-400 flex-shrink-0 mt-0.5" />
                                                    <span className="text-gray-700 font-medium leading-relaxed">{prob}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Solution Column */}
                                    <div className="bg-green-50/50 p-8 rounded-[30px] border border-green-100">
                                        <div className="flex items-center gap-2 mb-6 text-green-700 font-bold uppercase tracking-wider text-sm">
                                            <CheckCircle2 size={18} /> {extraContent.whyNeed.solutionTitle || (language === 'en' ? 'The Solution' : 'Решение')}
                                        </div>
                                        <p className="text-gray-700 font-medium leading-relaxed">
                                            {extraContent.whyNeed.solution}
                                        </p>
                                    </div>
                                </div>
                            ) : (
                                // Fallback for old simple text structure
                                <p className="text-lg text-gray-600 leading-relaxed font-medium text-center max-w-3xl mx-auto">
                                    {extraContent.whyNeed.text}
                                </p>
                            )}
                        </div>
                    )}

                    {/* OPTIONAL: How It Works (Steps) - Compact Cards */}
                    {extraContent.howItWorks && (
                        <div className="mb-16">
                            <h2 className="text-2xl font-black text-brand-dark mb-10 text-center uppercase tracking-widest opacity-80">
                                {extraContent.howItWorks.title}
                            </h2>
                            
                            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                                {extraContent.howItWorks.steps.map((step: any, idx: number) => {
                                    // Icons mapping based on index
                                    const stepIcons = [Search, Link, ClipboardCheck, Package];
                                    const StepIcon = stepIcons[idx] || CheckCircle2;
                                    
                                    return (
                                        <div key={idx} className="bg-white p-5 rounded-[25px] shadow-sm border border-gray-100 flex flex-col hover:shadow-md transition-all hover:border-brand-blue/20 group">
                                            {/* Header Row: Number, Title, Icon */}
                                            <div className="flex items-center justify-between mb-3">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-8 h-8 rounded-full bg-white border-2 border-brand-light text-brand-blue flex items-center justify-center font-black text-base flex-shrink-0 shadow-sm group-hover:bg-brand-blue group-hover:text-white group-hover:border-brand-blue transition-colors">
                                                        {idx + 1}
                                                    </div>
                                                    <h4 className="font-bold text-base md:text-lg text-brand-dark leading-tight mt-1">
                                                        {step.title}
                                                    </h4>
                                                </div>
                                                <StepIcon className="w-5 h-5 text-gray-300 group-hover:text-brand-blue transition-colors flex-shrink-0" />
                                            </div>
                                            
                                            {/* Description Row - FULL WIDTH (Removed pl-11) */}
                                            <p className="text-sm text-gray-500 font-medium leading-relaxed">
                                                {step.desc}
                                            </p>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    )}

                    {/* OPTIONAL: Pro Tip (Highlighted Box) */}
                    {extraContent.proTip && (
                        <div className="mb-16 bg-brand-yellow/10 border-2 border-brand-yellow/50 p-8 rounded-[30px] relative overflow-hidden">
                            <div className="relative z-10 flex flex-col md:flex-row gap-6 items-start md:items-center">
                                <div className="w-16 h-16 rounded-full bg-brand-yellow flex-shrink-0 flex items-center justify-center text-brand-dark shadow-sm">
                                    <Lightbulb size={32} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-black text-brand-dark mb-2 uppercase tracking-wide">
                                        {extraContent.proTip.title}
                                    </h3>
                                    <p className="text-brand-dark/80 font-bold leading-relaxed text-lg italic">
                                        "{extraContent.proTip.text}"
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Features Grid (Updated to support rich descriptions) */}
                    <h2 className="text-2xl font-black text-brand-dark mb-8 text-center uppercase tracking-widest opacity-80 mt-12">
                        {language === 'en' ? 'Key Benefits' : 'Ключевые преимущества'}
                    </h2>
                    
                    <div className="grid md:grid-cols-2 gap-6 mb-12">
                        {t.features.map((feature, idx) => {
                            // Check if feature is string or object
                            const isString = typeof feature === 'string';
                            const title = isString ? feature : (feature as any).title;
                            const desc = isString ? null : (feature as any).desc;
                            
                            // Check for "Free" keyword for highlighting
                            const isFree = title.toLowerCase().includes('free') || title.toLowerCase().includes('бесплатн');

                            return (
                                <div key={idx} className={`flex gap-4 items-start p-6 rounded-[25px] border transition-colors ${
                                    isFree ? 'bg-green-50 border-green-100 hover:border-green-200' : 'bg-gray-50 border-gray-100 hover:border-brand-blue/20'
                                }`}>
                                    <div className={`mt-1 flex-shrink-0 ${isFree ? 'text-green-600' : 'text-brand-blue'}`}>
                                        <CheckCircle2 size={24} />
                                    </div>
                                    <div>
                                        <h4 className={`text-lg font-bold leading-snug mb-1 ${isFree ? 'text-green-800' : 'text-brand-dark'}`}>
                                            {title}
                                        </h4>
                                        {desc && (
                                            <p className={`text-sm font-medium leading-relaxed ${isFree ? 'text-green-700/80' : 'text-gray-600'}`}>
                                                {desc}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                    {/* OPTIONAL: Beyond Taobao (Rich Grid) */}
                    {extraContent.beyond && (
                        <div className="mb-12 pt-8 border-t border-gray-100">
                             <h2 className="text-2xl font-black text-brand-dark mb-10 text-center uppercase tracking-widest opacity-80">
                                {extraContent.beyond.title}
                            </h2>
                            <div className="grid md:grid-cols-2 gap-4">
                                {extraContent.beyond.items.map((item: any, idx: number) => (
                                    <div key={idx} className="p-6 flex items-start gap-4 hover:bg-gray-50 rounded-2xl transition-colors border border-transparent hover:border-gray-100">
                                        <div className="w-12 h-12 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue flex-shrink-0">
                                            <Store size={24} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-brand-dark text-lg mb-2">{item.title}</h4>
                                            <p className="text-sm text-gray-500 font-medium leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* OPTIONAL: Shipping Info (Bottom Block) */}
                    {extraContent.shippingInfo && (
                        <div className="mb-12 bg-blue-50/50 p-8 rounded-[30px] border border-blue-100 text-center md:text-left">
                            <div className="flex flex-col md:flex-row items-center gap-6">
                                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-brand-blue shadow-sm flex-shrink-0">
                                    <Globe size={32} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-black text-brand-dark mb-2">
                                        {extraContent.shippingInfo.title}
                                    </h3>
                                    <p className="text-gray-600 font-medium leading-relaxed">
                                        {extraContent.shippingInfo.text}
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}

                    <div className="text-center mt-12">
                        <button 
                            onClick={handleAction}
                            className="bg-brand-dark text-white px-10 py-5 rounded-2xl font-black text-xl hover:bg-brand-blue transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 active:scale-[0.98] inline-flex items-center gap-3"
                        >
                            <Send size={24} />
                            {t.startBtn}
                        </button>
                    </div>
                </section>

                <div id="contacts" className="scroll-mt-28">
                    <Contact language={language} />
                </div>
                
                <SeoBlock language={language} onNavigate={() => {}} />
                <Footer language={language} />
                <FloatingContact />
            </main>
        </div>
    )
}

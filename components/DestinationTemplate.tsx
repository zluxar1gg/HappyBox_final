import React, { useEffect } from 'react';
import { Header } from './Header';
import { Contact } from './Contact';
import { Footer } from './Footer';
import { SeoBlock } from './SeoBlock';
import { FloatingContact } from './FloatingContact';
import { Language } from '../utils/translations';
import { ArrowRight, Send } from 'lucide-react';

export interface GuideSectionItem {
    label: string;
    text?: string;
}

export interface GuideSection {
    id: string;
    title: string;
    desc?: string;
    items?: GuideSectionItem[];
    tip?: string;
    listStyle?: 'numbered' | 'bullets' | 'none';
}

export interface GuideContent {
    title: string;
    subtitle: string;
    jumpTo: string;
    nav: { [key: string]: string };
    sections: GuideSection[];
    verdict: {
        title: string;
        desc: string;
    };
}

export interface DestinationContent {
    badge: string;
    titlePrefix: string;
    titleHighlight: string;
    subtitle: React.ReactNode;
    introTitle: string;
    introText: string;
    methodsTitle: string;
    methods: {
        icon: any;
        title: string;
        tag: string;
        desc: string;
        price: string;
        speed: string;
        color?: string;
    }[];
    fbaTitle?: string;
    fbaText?: string;
    fbaItems?: { title: string; desc: string }[];
    whyTitle?: string;
    whyIntro?: string;
    benefits?: {
        icon: any;
        title: string;
        desc: string;
    }[];
    fearsTitle: string;
    fearsList: { q: string; a: React.ReactNode }[];
    stepsTitle: string;
    steps: string[];
    cta: string;
    back: string;
    amazonBlock?: {
        titlePrefix: string;
        titleHighlight: string;
        desc: string;
        link: string;
        cta: string;
    };
    crossPromo?: {
        title: string;
        desc: string;
        link: string;
        action: string;
        isPrimary?: boolean;
    }[];
    tableOfContents?: {
        rates: string;
        features: string;
        guide: string;
        contacts: string;
    };
    guide?: GuideContent;
}

interface DestinationTemplateProps {
    language: Language;
    setLanguage: (lang: Language) => void;
    onBack?: () => void;
    onNavigate?: (page: string) => void;
    content: Record<'en' | 'ru', DestinationContent>;
    guideComponent?: React.ReactNode;
}

export const DestinationTemplate: React.FC<DestinationTemplateProps> = ({
    language,
    setLanguage,
    onBack,
    onNavigate,
    content,
    guideComponent
}) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const t = content[language];
    
    const toc = t.tableOfContents || {
        rates: language === 'en' ? 'Shipping Rates' : 'Тарифы',
        features: language === 'en' ? 'Why HappyBox' : 'Почему мы',
        guide: language === 'en' ? 'Logistics Guide' : 'Гид по логистике',
        contacts: language === 'en' ? 'Contact Us' : 'Контакты',
    };

    return (
        <div className="min-h-screen bg-cream font-sans text-brand-dark overflow-x-hidden pt-20">
            <Header
                language={language}
                setLanguage={setLanguage}
                onLoginClick={() => {}}
                isDashboard={false}
                onBack={onBack}
                onNavigate={onNavigate}
            />

            <main>
                {/* Hero Section */}
                <section className="py-12 lg:py-24 bg-cream">
                    <div className="container mx-auto px-6 xl:px-0">
                        <div className="max-w-5xl mx-auto text-center">
                            <span className="inline-flex items-center justify-center bg-brand-blue/10 text-brand-blue px-5 py-2.5 rounded-full text-sm font-bold uppercase tracking-wider mb-8">
                                {t.badge}
                            </span>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] text-brand-dark mb-8 tracking-tight">
                                {t.titlePrefix} <span className="text-brand-blue block mt-2 lg:mt-4">{t.titleHighlight}</span>
                            </h1>
                            <p className="text-lg lg:text-xl text-gray-700 font-medium leading-relaxed max-w-4xl mx-auto">
                                {t.subtitle}
                            </p>
                        </div>
                    </div>
                </section>



                <section className="py-16 bg-white rounded-[50px] mb-8 container mx-auto shadow-sm px-6 lg:px-20 border border-gray-100">
                    <div className="max-w-5xl mx-auto text-gray-800 leading-relaxed">
                        
                        {/* Intro */}
                        <div className="mb-20">
                            <h2 className="text-3xl md:text-4xl font-black text-brand-dark mb-6 tracking-tight">{t.introTitle}</h2>
                            <p className="text-base md:text-lg text-gray-700 leading-relaxed font-medium">
                                {t.introText}
                            </p>
                        </div>

                        {/* Rates and Methods */}
                        <div id="rates" className="mb-20 scroll-mt-32">
                            <h2 className="text-3xl md:text-4xl font-black text-brand-dark mb-8 tracking-tight">
                                {t.methodsTitle}
                            </h2>
                            <div className={`grid gap-6 sm:gap-8 sm:grid-cols-2 ${t.methods.length === 3 ? 'lg:grid-cols-3' : 'lg:grid-cols-2 max-w-4xl mx-auto'}`}>
                                {t.methods.map((method, idx) => (
                                    <div key={idx} className="bg-white rounded-[30px] p-6 border-2 border-gray-100 hover:border-brand-blue/30 transition-all hover:-translate-y-1 shadow-sm flex flex-col">
                                        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-brand-light text-brand-blue`}>
                                            <method.icon size={28} />
                                        </div>
                                        <div className="flex justify-between items-start mb-2">
                                            <h4 className="font-bold text-xl text-brand-dark">{method.title}</h4>
                                            <span className="text-[10px] font-black uppercase bg-gray-100 px-2 py-1 rounded-md text-gray-500 tracking-wider">{method.tag}</span>
                                        </div>
                                        <p className="text-sm md:text-base text-gray-500 font-medium mb-6 flex-grow leading-relaxed">
                                            {method.desc}
                                        </p>
                                        <div className="mt-auto pt-6 border-t border-gray-50">
                                            <div className="flex justify-between items-center mb-2">
                                                <span className="text-gray-400 text-xs font-bold uppercase">{language === 'en' ? 'Price' : 'Цена'}</span>
                                                <span className="text-xl font-black text-brand-dark">{method.price}</span>
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <span className="text-gray-400 text-xs font-bold uppercase">{language === 'en' ? 'Time' : 'Срок'}</span>
                                                <span className="font-bold text-brand-blue">{method.speed}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Features / Benefits */}
                        <div id="features" className="mb-20 scroll-mt-32">
                            {t.fbaTitle && (
                                <>
                                    <h2 className="text-3xl md:text-4xl font-black text-brand-dark mb-8 tracking-tight">{t.fbaTitle}</h2>
                                    {t.fbaText && <p className="text-base md:text-lg text-gray-700 leading-relaxed font-medium mb-12">{t.fbaText}</p>}
                                    {t.fbaItems && (
                                        <div className="grid md:grid-cols-2 gap-8 mb-12">
                                            {t.fbaItems.map((item, idx) => (
                                                <div key={idx} className="bg-gray-50 rounded-[30px] p-8 border border-gray-100">
                                                    <div className="w-12 h-12 rounded-2xl bg-brand-light text-brand-blue flex items-center justify-center mb-6 font-black text-xl">
                                                        {idx + 1}
                                                    </div>
                                                    <h4 className="text-xl font-bold text-brand-dark mb-3">{item.title}</h4>
                                                    <p className="text-base md:text-lg text-gray-600 font-medium leading-relaxed">{item.desc}</p>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </>
                            )}
                            {t.whyTitle && (
                                <>
                                    <h2 className="text-3xl md:text-4xl font-black text-brand-dark mb-8 tracking-tight">{t.whyTitle}</h2>
                                    {t.whyIntro && <p className="text-base md:text-lg text-gray-700 leading-relaxed font-medium mb-12">{t.whyIntro}</p>}
                                    {t.benefits && (
                                        <div className="space-y-8">
                                            {t.benefits.map((benefit, idx) => (
                                                <div key={idx} className="flex gap-5 items-start">
                                                    <div className="w-12 h-12 rounded-full bg-brand-light flex-shrink-0 flex items-center justify-center text-brand-blue shadow-sm mt-1">
                                                        <benefit.icon size={24} />
                                                    </div>
                                                    <div>
                                                        <h4 className="font-bold text-xl text-brand-dark mb-2">{benefit.title}</h4>
                                                        <p className="text-base md:text-lg text-gray-600 font-medium leading-relaxed">{benefit.desc}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </>
                            )}
                        </div>

                        {/* Fears */}
                        <div className="mb-20 bg-brand-light/30 p-8 sm:p-12 rounded-[40px] border border-brand-blue/10">
                            <h2 className="text-3xl md:text-4xl font-black text-brand-dark mb-10 tracking-tight">{t.fearsTitle}</h2>
                            <div className="space-y-8">
                                {t.fearsList.map((f, idx) => (
                                    <div key={idx}>
                                        <h4 className="font-bold text-xl text-brand-dark mb-2">{f.q}</h4>
                                        <p className="text-base md:text-lg text-gray-700 leading-relaxed font-medium">{f.a}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Process Steps */}
                        <div className="mb-20">
                            <h3 className="text-2xl font-black text-gray-700 mb-16 text-center uppercase tracking-widest">
                                {t.stepsTitle}
                            </h3>
                            <div className="relative">
                                {/* Connecting line for desktop */}
                                <div className="hidden md:block absolute top-6 left-[12%] right-[12%] h-[2px] bg-gray-200 z-0" />
                                
                                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
                                    {t.steps.map((step, idx) => (
                                        <div key={idx} className="text-center">
                                            <div className="w-12 h-12 bg-[#1a1a1a] text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4 relative z-10">
                                                {idx + 1}
                                            </div>
                                            <p className="font-bold text-brand-dark text-base md:text-lg px-2 leading-tight max-w-[200px] mx-auto">
                                                {step}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="text-center mt-12">
                                <button
                                    onClick={() => document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth' })}
                                    className="bg-[#FF9900] text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-[#e68a00] transition-colors shadow-lg active:scale-95 inline-flex items-center gap-3"
                                >
                                    <Send size={24} />
                                    {t.cta}
                                </button>
                            </div>
                        </div>

                        {/* Amazon Specific Block */}
                        {t.amazonBlock && (
                            <div className="pt-12 border-t border-gray-100">
                                {(() => {
                                    const isInternal = !t.amazonBlock.link.startsWith('http');
                                    const wrapperClass = "block w-full text-left bg-gray-50 border border-gray-200 rounded-3xl p-6 sm:p-8 hover:bg-orange-50 hover:border-orange-200 transition-colors group cursor-pointer";
                                    const innerContent = (
                                        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                                            <div className="text-center sm:text-left">
                                                <h4 className="text-2xl sm:text-3xl font-black font-sans text-brand-dark mb-2 leading-tight">
                                                    {t.amazonBlock!.titlePrefix}{" "}
                                                    <span className="text-[#FF9900] block sm:inline mt-1 sm:mt-0">{t.amazonBlock!.titleHighlight}</span>?
                                                </h4>
                                                <p className="text-base md:text-lg text-gray-600 font-medium leading-relaxed">
                                                    {t.amazonBlock!.desc}
                                                </p>
                                            </div>
                                            <div className="flex-shrink-0">
                                                <span className="inline-flex items-center gap-2 bg-[#FF9900] text-white font-bold py-3 px-6 rounded-2xl group-hover:bg-[#e68a00] transition-colors shadow-sm">
                                                    {t.amazonBlock!.cta}
                                                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                                </span>
                                            </div>
                                        </div>
                                    );

                                    return isInternal ? (
                                        <button onClick={() => onNavigate?.(t.amazonBlock!.link)} className={wrapperClass}>
                                            {innerContent}
                                        </button>
                                    ) : (
                                        <a href={t.amazonBlock.link} target="_blank" rel="noopener noreferrer" className={wrapperClass}>
                                            {innerContent}
                                        </a>
                                    );
                                })()}
                            </div>
                        )}

                        {/* Cross Promo Block */}
                        {t.crossPromo && t.crossPromo.length > 0 && (
                            <div className="pt-12 border-t border-gray-100 mt-12 space-y-6">
                                {t.crossPromo.map((promo, idx) => {
                                    const isInternal = !promo.link.startsWith('http') && promo.link !== '#gcc';
                                    const isScrollLink = promo.link.startsWith('#');
                                    
                                    const isPrimary = promo.isPrimary !== false && idx === 0; // First is primary by default unless specified
                                    
                                    const wrapperClass = isPrimary 
                                        ? "block w-full text-left bg-gray-50 border border-gray-200 rounded-3xl p-6 sm:p-8 hover:bg-orange-50 hover:border-orange-200 transition-colors group cursor-pointer"
                                        : "block w-full text-left bg-brand-dark border border-gray-800 rounded-3xl p-6 sm:p-8 hover:border-brand-blue transition-colors group cursor-pointer";
                                        
                                    const titleClass = isPrimary 
                                        ? "text-2xl sm:text-3xl font-black font-sans text-brand-dark mb-2 leading-tight"
                                        : "text-2xl sm:text-3xl font-black font-sans text-white mb-2 leading-tight";
                                        
                                    const descClass = isPrimary 
                                        ? "text-gray-600 font-medium"
                                        : "text-gray-400 font-medium";
                                        
                                    const btnClass = isPrimary
                                        ? "inline-flex items-center gap-2 bg-[#FF9900] text-white font-bold py-3 px-6 rounded-2xl group-hover:bg-[#e68a00] transition-colors shadow-sm"
                                        : "inline-flex items-center gap-2 bg-brand-blue text-white font-bold py-3 px-6 rounded-2xl group-hover:bg-blue-600 transition-colors shadow-sm";

                                    const innerContent = (
                                        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                                            <div className="text-center sm:text-left">
                                                <h4 className={titleClass}>
                                                    {promo.title.endsWith('?') ? promo.title.slice(0, -1) : promo.title}{promo.title.endsWith('?') ? '?' : ''}
                                                </h4>
                                                <p className={descClass}>
                                                    {promo.desc}
                                                </p>
                                            </div>
                                            <div className="flex-shrink-0">
                                                <span className={btnClass}>
                                                    {promo.action.replace(' →', '')}
                                                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                                </span>
                                            </div>
                                        </div>
                                    );

                                    if (isScrollLink) {
                                        return (
                                            <a key={idx} href={promo.link} onClick={(e) => { e.preventDefault(); document.getElementById(promo.link.substring(1))?.scrollIntoView({ behavior: 'smooth' }) }} className={wrapperClass}>
                                                {innerContent}
                                            </a>
                                        );
                                    } else if (isInternal) {
                                        return (
                                            <button key={idx} onClick={() => onNavigate?.(promo.link.replace(/^\//, ''))} className={wrapperClass}>
                                                {innerContent}
                                            </button>
                                        );
                                    } else {
                                        return (
                                            <a key={idx} href={promo.link} target="_blank" rel="noopener noreferrer" className={wrapperClass}>
                                                {innerContent}
                                            </a>
                                        );
                                    }
                                })}
                            </div>
                        )}

                    </div>
                </section>

                {(t.guide || guideComponent) && (
                    <div id="guide" className="scroll-mt-32 mb-16">
                        {t.guide ? (
                            <section className="py-16 bg-white rounded-[50px] container mx-auto shadow-sm px-6 lg:px-20 border border-gray-100">
                                <div className="max-w-5xl mx-auto text-left">
                                    <div className="mb-16">
                                        <h2 className="text-3xl md:text-4xl font-black text-brand-dark mb-6 tracking-tight leading-tight">
                                            {t.guide.title}
                                        </h2>
                                        <p className="text-base md:text-lg text-gray-600 font-medium leading-relaxed">
                                            {t.guide.subtitle}
                                        </p>
                                        <div className="bg-gray-50 rounded-2xl p-4 md:p-6 mt-12 flex flex-col md:flex-row items-center justify-start gap-y-4 gap-x-2 text-sm font-medium flex-wrap">
                                            <span className="text-gray-500 mr-2">{t.guide.jumpTo}</span>
                                            {Object.entries(t.guide.nav).map(([key, label], idx) => (
                                                <React.Fragment key={key}>
                                                    <button onClick={() => {
                                                        const el = document.getElementById(key);
                                                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                                                    }} className="text-brand-blue hover:text-brand-dark transition-colors">
                                                        {idx + 1}. {label}
                                                    </button>
                                                    {idx < Object.keys(t.guide!.nav).length - 1 && (
                                                        <span className="text-gray-300">•</span>
                                                    )}
                                                </React.Fragment>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="space-y-16">
                                    {t.guide.sections.map((sec, sIdx) => (
                                        <div key={sec.id} id={sec.id} className="scroll-mt-32">
                                            <div className="flex items-center gap-4 mb-6">
                                                <div className="w-10 h-10 rounded-full bg-brand-light text-brand-blue font-black flex items-center justify-center flex-shrink-0 text-xl border border-brand-blue/20">
                                                    {sIdx + 1}
                                                </div>
                                                <h3 className="text-2xl font-bold text-brand-dark tracking-tight leading-tight">
                                                    {sec.title.replace(/^\d+\.\s*/, '')}
                                                </h3>
                                            </div>
                                            {sec.desc && (
                                                <p className="mb-6 leading-relaxed font-medium text-gray-700 whitespace-pre-line text-base md:text-lg">
                                                    {sec.desc}
                                                </p>
                                            )}
                                            {sec.items && sec.items.length > 0 && (
                                                <div className={sec.listStyle === 'bullets' ? 'space-y-3' : 'space-y-6 mt-4'}>
                                                    {sec.items.map((item, idx) => (
                                                        <div key={idx} className={sec.listStyle === 'bullets' ? 'flex gap-3 items-start' : (sec.listStyle === 'numbered' ? 'flex gap-4 items-start' : '')}>
                                                            {sec.listStyle === 'bullets' ? (
                                                                <>
                                                                    <span className="text-brand-blue mt-1 font-black">•</span>
                                                                    <span className="text-gray-700 text-base md:text-lg">
                                                                        {item.label} {item.text && `- ${item.text}`}
                                                                    </span>
                                                                </>
                                                            ) : sec.listStyle === 'numbered' ? (
                                                                <>
                                                                    <div className="w-8 h-8 rounded-full bg-brand-light text-brand-blue font-bold flex items-center justify-center shrink-0 mt-1">
                                                                        {idx + 1}
                                                                    </div>
                                                                    <div className="flex-grow">
                                                                        <h4 className="font-bold text-brand-dark text-xl mb-1">{item.label}</h4>
                                                                        {item.text && <p className="text-gray-700 leading-relaxed text-base md:text-lg">{item.text}</p>}
                                                                    </div>
                                                                </>
                                                            ) : (
                                                                <>
                                                                    <h4 className="font-bold text-brand-dark text-xl mb-1">{item.label}</h4>
                                                                    {item.text && <p className="text-gray-700 leading-relaxed text-base md:text-lg">{item.text}</p>}
                                                                </>
                                                            )}
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                            {sec.tip && (
                                                <div className="mt-6 pt-6 border-t border-gray-100">
                                                    <p className="text-brand-orange font-bold text-sm bg-brand-orange/10 p-4 rounded-xl border border-brand-orange/20">
                                                        {sec.tip}
                                                    </p>
                                                </div>
                                            )}
                                        </div>
                                    ))}

                                    {t.guide.verdict && (
                                        <div className="mt-16 bg-brand-light/30 border border-brand-blue/20 rounded-3xl p-8 sm:p-10 text-left">
                                            <h3 className="text-2xl font-black text-brand-dark tracking-tight mb-4">{t.guide.verdict.title}</h3>
                                            <p className="text-base md:text-lg text-gray-700 leading-relaxed">{t.guide.verdict.desc}</p>
                                        </div>
                                    )}
                                </div>
                                </div>
                            </section>
                        ) : guideComponent}
                    </div>
                )}

                <div id="contacts" className="scroll-mt-32">
                    <Contact language={language} currentPage="destination" />
                </div>
            </main>

            <Footer language={language} />
            <FloatingContact />
        </div>
    );
};

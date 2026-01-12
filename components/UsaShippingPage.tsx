
import React, { useEffect } from 'react';
import { Header } from './Header';
import { Contact } from './Contact';
import { Footer } from './Footer';
import { SeoBlock } from './SeoBlock';
import { Language } from '../utils/translations';
import { FloatingContact } from './FloatingContact';
import { Check, ShieldCheck, Plane, Anchor, ShoppingBag, Box, Send, FileCheck, Layers } from 'lucide-react';

interface UsaShippingPageProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  onBack?: () => void;
}

export const UsaShippingPage: React.FC<UsaShippingPageProps> = ({ language, setLanguage, onBack }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const content = {
        en: {
            badge: "US Direct Line",
            titlePrefix: "Shipping from China to",
            titleHighlight: "USA",
            subtitle: "Fast, Affordable & DDP Tax-Free. Reliable door-to-door delivery from China to any state in the US.",
            introTitle: "Seamless Logistics Across the United States",
            introText: "Whether you are shipping to California, New York, Texas, Florida, or any other state, HappyBox provides a streamlined logistics experience. We cover the entire country, from the West Coast to the East Coast. We specialize in DDP (Delivered Duty Paid) shipping. This means the price you pay includes all ocean/air freight, customs clearance, and import duties. No hidden fees, no surprise bills from Customs and Border Protection (CBP).",
            methodsTitle: "Our Shipping Methods & Rates",
            methods: [
                {
                    icon: Plane,
                    title: "Air Freight",
                    tag: "Express Delivery",
                    desc: "The best choice for high-value goods, electronics, or urgent restocks.",
                    price: "From $10/kg",
                    speed: "5–9 days",
                    color: "bg-blue-50 text-brand-blue"
                },
                {
                    icon: Anchor,
                    title: "Sea Freight",
                    tag: "Economy & Bulk",
                    desc: "The most cost-effective way to ship large volumes, heavy machinery, or furniture. LCL & FCL available.",
                    price: "From $1.2/kg",
                    speed: "25–35 days",
                    color: "bg-teal-50 text-teal-600"
                }
            ],
            fbaTitle: "Specialized Amazon FBA Prep & Shipping",
            fbaText: "Are you an Amazon seller? We are experts in Amazon FBA logistics. We don't just ship; we prepare your goods to meet Amazon's strict requirements:",
            fbaItems: [
                { title: "FNSKU Labeling", desc: "We apply your product labels correctly." },
                { title: "Bundle & Poly-bagging", desc: "We prepare your items for individual sale." },
                { title: "Direct Delivery", desc: "We ship directly to FBA centers (ONT8, FTW1, JFK8, etc)." },
                { title: "Palletizing", desc: "Professional palletizing to meet Amazon’s warehouse standards." }
            ],
            whyTitle: "Why Choose HappyBox?",
            benefits: [
                {
                    icon: FileCheck,
                    title: "Hassle-Free Customs",
                    desc: "We handle all the paperwork, including ISF (10+2) filings and Customs Bonds."
                },
                {
                    icon: Box,
                    title: "Free Consolidation",
                    desc: "Shop from Taobao, 1688, or factories. We combine your items into one shipment to save you money."
                },
                {
                    icon: Plane,
                    title: "Real-Time Tracking",
                    desc: "Stay updated with end-to-end tracking from our warehouse in Guangdong to your US address."
                },
                {
                    icon: Layers,
                    title: "Secure Warehousing",
                    desc: "Free storage and professional repacking to protect your goods during the long journey."
                }
            ],
            stepsTitle: "How to Get Started",
            steps: [
                "Get Your Address",
                "Order Your Goods",
                "Review Photos",
                "Ship to USA"
            ],
            cta: "Get a Shipping Quote",
            back: "Back to Home"
        },
        ru: {
            badge: "Прямая линия в США",
            titlePrefix: "Доставка из Китая в",
            titleHighlight: "США",
            subtitle: "Быстро, доступно и без налогов (DDP). Надежная доставка до двери в любой штат США.",
            introTitle: "Бесшовная логистика по всей Америке",
            introText: "Отправляете ли вы в Калифорнию, Нью-Йорк, Техас или Флориду — HappyBox обеспечивает отлаженную логистику от побережья до побережья. Мы специализируемся на доставке DDP (Delivered Duty Paid). Это значит, что цена включает фрахт, таможенную очистку и пошлины. Никаких скрытых комиссий и счетов от таможни.",
            methodsTitle: "Наши тарифы и способы доставки",
            methods: [
                {
                    icon: Plane,
                    title: "Авиа (Air Freight)",
                    tag: "Экспресс",
                    desc: "Лучший выбор для дорогих товаров, электроники и срочного пополнения стока.",
                    price: "От $10/кг",
                    speed: "5–9 дней",
                    color: "bg-blue-50 text-brand-blue"
                },
                {
                    icon: Anchor,
                    title: "Море (Sea Freight)",
                    tag: "Эконом",
                    desc: "Самый выгодный способ для больших объемов. Доступны контейнерные (FCL) и сборные (LCL) грузы.",
                    price: "От $1.2/кг",
                    speed: "25–35 дней",
                    color: "bg-teal-50 text-teal-600"
                }
            ],
            fbaTitle: "Специализированная подготовка для Amazon FBA",
            fbaText: "Вы продавец на Amazon? Мы эксперты в логистике FBA. Мы не просто доставляем, мы готовим товары по строгим требованиям Amazon:",
            fbaItems: [
                { title: "Маркировка FNSKU", desc: "Наклеим штрих-коды Amazon на каждый товар." },
                { title: "Упаковка и наборы", desc: "Упакуем в полибэги и соберем наборы (бандлы)." },
                { title: "Прямая доставка", desc: "Везем сразу на склады FBA (ONT8, FTW1 и др)." },
                { title: "Паллетирование", desc: "Укладка на паллеты по стандартам складов Amazon." }
            ],
            whyTitle: "Почему выбирают HappyBox?",
            benefits: [
                {
                    icon: FileCheck,
                    title: "Таможня без проблем",
                    desc: "Мы берем на себя все бумаги, включая ISF (10+2) и Customs Bonds."
                },
                {
                    icon: Box,
                    title: "Бесплатная консолидация",
                    desc: "Покупайте на Taobao, 1688. Мы объединим все в одну посылку для экономии."
                },
                {
                    icon: Plane,
                    title: "Трекинг",
                    desc: "Отслеживание на всем пути: от нашего склада в Гуандуне до вашей двери в США."
                },
                {
                    icon: Layers,
                    title: "Безопасное хранение",
                    desc: "Бесплатный склад и профессиональная переупаковка для защиты груза в пути."
                }
            ],
            stepsTitle: "Как начать",
            steps: [
                "Получите адрес",
                "Закажите товар",
                "Проверьте фото",
                "Отправьте в США"
            ],
            cta: "Рассчитать стоимость",
            back: "На главную"
        }
    };

    const t = content[language];

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
                {/* 1. Custom Hero for USA */}
                <section className="py-12 lg:py-24 bg-cream">
                    <div className="container mx-auto px-6 xl:px-0">
                         <div className="max-w-5xl mx-auto text-center">
                                <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-100/50 text-brand-blue font-bold text-sm mb-8 uppercase tracking-wider border border-blue-100">
                                    <span className="text-lg">🇨🇳</span> 
                                    <Plane size={16} /> 
                                    <span className="text-lg">🇺🇸</span> 
                                    {t.badge}
                                </div>
                                <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold leading-[1.1] text-brand-dark mb-8 tracking-tight">
                                    {t.titlePrefix} <span className="text-brand-blue relative inline-block">
                                        {t.titleHighlight}
                                        <svg className="absolute w-full h-3 -bottom-1 left-0 text-brand-yellow z-[-1]" viewBox="0 0 100 10" preserveAspectRatio="none">
                                           <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" opacity="0.6" />
                                        </svg>
                                    </span>
                                </h1>
                                <p className="text-xl text-gray-600 mb-10 font-medium leading-relaxed max-w-2xl mx-auto">
                                    {t.subtitle}
                                </p>
                         </div>
                    </div>
                </section>

                {/* 2. Main Content Block */}
                <section id="details" className="py-16 bg-white rounded-[50px] mb-8 container mx-auto shadow-sm px-6 lg:px-20 border border-gray-100">
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <h2 className="text-3xl font-black text-brand-dark mb-6">{t.introTitle}</h2>
                        <p className="text-lg text-gray-600 leading-relaxed font-medium">
                            {t.introText}
                        </p>
                    </div>

                    <h3 className="text-2xl font-black text-brand-dark mb-10 text-center uppercase tracking-widest opacity-80">
                        {t.methodsTitle}
                    </h3>

                    {/* Rate Cards */}
                    <div className="grid md:grid-cols-2 gap-6 mb-20 max-w-4xl mx-auto">
                        {t.methods.map((method, idx) => (
                            <div key={idx} className="bg-white rounded-[30px] p-8 border-2 border-gray-100 hover:border-brand-blue/30 transition-all hover:-translate-y-1 shadow-sm flex flex-col">
                                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${method.color}`}>
                                    <method.icon size={28} />
                                </div>
                                <div className="flex justify-between items-start mb-2">
                                    <h4 className="font-bold text-xl text-brand-dark">{method.title}</h4>
                                    <span className="text-[10px] font-black uppercase bg-gray-100 px-2 py-1 rounded-md text-gray-500 tracking-wider">{method.tag}</span>
                                </div>
                                <p className="text-sm text-gray-500 font-medium mb-6 flex-grow leading-relaxed">
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

                    {/* FBA Section */}
                    <div className="bg-orange-50/50 rounded-[40px] p-8 lg:p-12 mb-20 border border-orange-100">
                        <div className="text-center mb-10">
                            <h3 className="text-3xl font-black text-brand-dark mb-4">{t.fbaTitle}</h3>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-medium">{t.fbaText}</p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {t.fbaItems.map((item, idx) => (
                                <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-orange-100/50">
                                    <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 mb-4">
                                        <ShoppingBag size={20} />
                                    </div>
                                    <h4 className="font-bold text-brand-dark mb-2">{item.title}</h4>
                                    <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Why Choose Grid */}
                    <div className="mb-20">
                         <h3 className="text-3xl font-black text-brand-dark mb-12 text-center">{t.whyTitle}</h3>
                         <div className="grid md:grid-cols-2 gap-8">
                            {t.benefits.map((benefit, idx) => (
                                <div key={idx} className="flex gap-5 items-start">
                                    <div className="w-12 h-12 rounded-full bg-brand-light flex-shrink-0 flex items-center justify-center text-brand-blue shadow-sm mt-1">
                                        <benefit.icon size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg text-brand-dark mb-2">{benefit.title}</h4>
                                        <p className="text-gray-600 font-medium leading-relaxed">{benefit.desc}</p>
                                    </div>
                                </div>
                            ))}
                         </div>
                    </div>

                    {/* How to Start (Steps) */}
                    <div className="bg-gray-50 rounded-[40px] p-8 lg:p-12 border border-gray-100">
                        <h3 className="text-2xl font-black text-brand-dark mb-10 text-center uppercase tracking-widest opacity-80">
                            {t.stepsTitle}
                        </h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {t.steps.map((step, idx) => (
                                <div key={idx} className="text-center relative">
                                    {idx < 3 && (
                                        <div className="hidden md:block absolute top-6 left-1/2 w-full h-0.5 bg-gray-200 -z-0" />
                                    )}
                                    <div className="w-12 h-12 bg-brand-dark text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4 relative z-10 shadow-lg">
                                        {idx + 1}
                                    </div>
                                    <p className="font-bold text-brand-dark text-sm md:text-base px-2 leading-tight">
                                        {step}
                                    </p>
                                </div>
                            ))}
                        </div>
                        <div className="text-center mt-10">
                            <button 
                                onClick={() => document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth' })}
                                className="bg-brand-blue text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-600 transition-all shadow-lg active:scale-95 inline-flex items-center gap-2"
                            >
                                <Send size={20} />
                                {t.cta}
                            </button>
                        </div>
                    </div>

                </section>

                <div id="contacts">
                    <Contact language={language} />
                </div>
                
                <SeoBlock language={language} onNavigate={() => {}} /> 
                <Footer language={language} />
                <FloatingContact />
            </main>
        </div>
    )
}

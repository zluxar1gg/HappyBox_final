
import React, { useEffect } from 'react';
import { Header } from './Header';
import { Contact } from './Contact';
import { Footer } from './Footer';
import { SeoBlock } from './SeoBlock';
import { Language } from '../utils/translations';
import { FloatingContact } from './FloatingContact';
import { Check, ShieldCheck, Plane, Truck, Anchor, Zap, Box, Send, MapPin } from 'lucide-react';

interface EuShippingPageProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  onBack?: () => void;
}

export const EuShippingPage: React.FC<EuShippingPageProps> = ({ language, setLanguage, onBack }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const content = {
        en: {
            badge: "Europe Direct Line",
            titlePrefix: "Shipping from China to",
            titleHighlight: "Europe",
            subtitle: "Fast, Reliable & Tax-Free (DDP). Door-to-door delivery from China to Germany, France, Poland, Italy and beyond.",
            introTitle: "Seamless Logistics for the Entire European Union",
            introText: "One of the biggest advantages of shipping to Europe is the unified customs regulations within the EU. Whether your package is headed to Germany, France, Poland, Italy, or Spain, the process remains consistent and highly efficient. At HappyBox, we treat the European Union as a single, seamless delivery zone. We clear customs at major transit hubs and use reliable local couriers (UPS, DHL, DPD) for final delivery.",
            methodsTitle: "Our Shipping Methods & Rates",
            methods: [
                {
                    icon: Plane,
                    title: "Air Freight",
                    tag: "Priority Delivery",
                    desc: "The fastest way to get your goods. Ideal for electronics, fashion, and high-value parcels.",
                    price: "From $10/kg",
                    speed: "7–12 days",
                    color: "bg-blue-50 text-brand-blue"
                },
                {
                    icon: Truck,
                    title: "Land/Trucking",
                    tag: "Best Value",
                    desc: "The perfect balance between cost and speed. Highly recommended for heavy commercial cargo.",
                    price: "From $3/kg",
                    speed: "18–25 days",
                    color: "bg-orange-50 text-orange-600"
                },
                {
                    icon: Anchor,
                    title: "Sea Freight",
                    tag: "Economy",
                    desc: "The most cost-effective solution for large-scale shipments, furniture, or bulk manufacturing orders.",
                    price: "From $1.5/kg",
                    speed: "35–45 days",
                    color: "bg-teal-50 text-teal-600"
                }
            ],
            whyTitle: "Why HappyBox is the Top Choice",
            benefits: [
                {
                    icon: ShieldCheck,
                    title: "Zero VAT & Customs Hassle",
                    desc: "We use specialized DDP channels where we handle all customs clearance and tax payments. The receiver pays €0 in additional fees."
                },
                {
                    icon: MapPin,
                    title: "EU-Wide Coverage",
                    desc: "Our network covers all 27 EU member states, including the Netherlands, Belgium, Austria, Sweden, and more."
                },
                {
                    icon: Box,
                    title: "Free Consolidation",
                    desc: "Shop from multiple Taobao or 1688 sellers. We combine them into one secure box to save you money on shipping."
                },
                {
                    icon: Zap,
                    title: "Real-Time Tracking",
                    desc: "From the moment your parcel leaves our warehouse until it reaches your door in Europe, track it online 24/7."
                }
            ],
            stepsTitle: "How to Start",
            steps: [
                "Get Your Warehouse Address",
                "Send Your Goods to Us",
                "We Inspect & Pack",
                "Pay & Receive"
            ],
            cta: "Get a Shipping Quote",
            back: "Back to Home"
        },
        ru: {
            badge: "Прямая линия в Европу",
            titlePrefix: "Доставка из Китая в",
            titleHighlight: "Европу",
            subtitle: "Быстро, надежно и без налогов (DDP). Доставка «до двери» в Германию, Францию, Польшу, Италию и другие страны ЕС.",
            introTitle: "Бесшовная логистика по всему Евросоюзу",
            introText: "Одно из главных преимуществ доставки в Европу — единые таможенные правила внутри ЕС. Будь то Германия, Франция, Польша или Испания — процесс остается стабильным и эффективным. HappyBox рассматривает ЕС как единую зону доставки. Мы проходим таможню в крупных транзитных хабах и используем надежных местных курьеров (UPS, DHL, DPD) для финальной доставки.",
            methodsTitle: "Наши тарифы и способы доставки",
            methods: [
                {
                    icon: Plane,
                    title: "Авиадоставка",
                    tag: "Приоритет",
                    desc: "Самый быстрый способ. Идеально для электроники, модной одежды и ценных посылок.",
                    price: "От $10/кг",
                    speed: "7–12 дней",
                    color: "bg-blue-50 text-brand-blue"
                },
                {
                    icon: Truck,
                    title: "Авто / ЖД",
                    tag: "Оптимально",
                    desc: "Идеальный баланс цены и скорости. Рекомендуем для тяжелых коммерческих грузов.",
                    price: "От $3/кг",
                    speed: "18–25 дней",
                    color: "bg-orange-50 text-orange-600"
                },
                {
                    icon: Anchor,
                    title: "Морская доставка",
                    tag: "Эконом",
                    desc: "Самое выгодное решение для крупных партий, мебели или оптовых заказов с фабрик.",
                    price: "От $1.5/кг",
                    speed: "35–45 дней",
                    color: "bg-teal-50 text-teal-600"
                }
            ],
            whyTitle: "Почему выбирают HappyBox",
            benefits: [
                {
                    icon: ShieldCheck,
                    title: "Никакого НДС и Таможни",
                    desc: "Мы используем каналы DDP: сами оформляем таможню и платим налоги. Получатель не платит ни копейки сверх тарифа."
                },
                {
                    icon: MapPin,
                    title: "Покрытие всего ЕС",
                    desc: "Наша сеть покрывает все 27 стран-членов ЕС, включая Нидерланды, Бельгию, Австрию, Швецию и другие."
                },
                {
                    icon: Box,
                    title: "Бесплатная Консолидация",
                    desc: "Покупайте у разных продавцов. Мы объединим всё в одну коробку на нашем складе, чтобы вы сэкономили на доставке."
                },
                {
                    icon: Zap,
                    title: "Трекинг в реальном времени",
                    desc: "Отслеживайте посылку онлайн 24/7 с момента выхода со склада в Китае до прибытия к вашей двери."
                }
            ],
            stepsTitle: "Как начать",
            steps: [
                "Получите адрес склада",
                "Отправьте товары нам",
                "Мы проверим и упакуем",
                "Оплатите и получите"
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
                {/* Hero */}
                <section className="py-12 lg:py-24 bg-cream">
                    <div className="container mx-auto px-6 xl:px-0">
                         <div className="max-w-5xl mx-auto text-center">
                                <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-100/50 text-brand-blue font-bold text-sm mb-8 uppercase tracking-wider border border-blue-100">
                                    <span className="text-lg">🇨🇳</span> 
                                    <Plane size={16} /> 
                                    <span className="text-lg">🇪🇺</span> 
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

                {/* Intro & Methods Block */}
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
                    <div className="grid md:grid-cols-3 gap-6 mb-20">
                        {t.methods.map((method, idx) => (
                            <div key={idx} className="bg-white rounded-[30px] p-6 border-2 border-gray-100 hover:border-brand-blue/30 transition-all hover:-translate-y-1 shadow-sm flex flex-col">
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
                    <Contact language={language} currentPage="eu" />
                </div>
                
                <SeoBlock language={language} onNavigate={() => {}} />
                <Footer language={language} />
                <FloatingContact />
            </main>
        </div>
    )
}

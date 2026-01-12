
import React, { useEffect } from 'react';
import { Header } from './Header';
import { Contact } from './Contact';
import { Footer } from './Footer';
import { SeoBlock } from './SeoBlock';
import { Language } from '../utils/translations';
import { FloatingContact } from './FloatingContact';
import { Check, Zap, Plane, Anchor, Camera, Box, CreditCard, Send, ShieldCheck, ShoppingBag } from 'lucide-react';

interface UaeShippingPageProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  onBack?: () => void;
}

export const UaeShippingPage: React.FC<UaeShippingPageProps> = ({ language, setLanguage, onBack }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const content = {
        en: {
            badge: "UAE Express Line",
            titlePrefix: "Shipping from China to",
            titleHighlight: "UAE & Dubai",
            subtitle: "Fast Air & Economy Sea Freight. With Air rates from $6/kg and Sea rates from $0.8/kg, we offer the best value for door-to-door delivery.",
            introTitle: "Your All-in-One Logistics Hub for the UAE",
            introText: "Shipping to the Middle East shouldn't be complicated. Whether you are buying luxury sneakers from Poizon, furniture from Foshan, or wholesale stock from 1688, HappyBox provides a specialized DDP (Delivered Duty Paid) service. We deliver to all emirates, including Dubai, Abu Dhabi, Sharjah, Ajman, Fujairah, and Ras Al Khaimah.",
            methodsTitle: "Our Shipping Methods & Rates",
            methods: [
                {
                    icon: Plane,
                    title: "Priority Air Freight",
                    tag: "Fast & Reliable",
                    desc: "The best choice for electronics, fashion, and urgent parcels. Customs clearance included.",
                    price: "From $6/kg",
                    speed: "5–9 days",
                    color: "bg-blue-50 text-brand-blue"
                },
                {
                    icon: Anchor,
                    title: "Sea Freight",
                    tag: "Max Savings",
                    desc: "The most cost-effective way to ship heavy items, large furniture, or bulk commercial inventory.",
                    price: "From $0.8/kg",
                    speed: "25–35 days",
                    color: "bg-teal-50 text-teal-600"
                }
            ],
            whyTitle: "Why HappyBox is the Top Choice",
            benefits: [
                {
                    icon: ShieldCheck,
                    title: "Total Tax-Free (DDP)",
                    desc: "Forget about UAE customs or VAT. We pay all duties and taxes in advance. Zero additional charges."
                },
                {
                    icon: Box,
                    title: "Free Consolidation",
                    desc: "Buying from different sellers? We’ll combine them into one compact box to save you money."
                },
                {
                    icon: ShoppingBag,
                    title: "Expertise in Brands",
                    desc: "Specialists in shipping items from Poizon (Dewu). We ensure luxury items are packed with extra care."
                },
                {
                    icon: Camera,
                    title: "Free Quality Inspection",
                    desc: "We provide high-quality photos of your goods upon arrival. Check everything before it’s shipped."
                }
            ],
            stepsTitle: "From China to UAE in 4 Steps",
            steps: [
                "Get Your Address",
                "Order Your Items",
                "Consolidate & Inspect",
                "Receive in UAE"
            ],
            cta: "Get a Shipping Quote",
            back: "Back to Home"
        },
        ru: {
            badge: "Экспресс линия в ОАЭ",
            titlePrefix: "Доставка из Китая в",
            titleHighlight: "ОАЭ и Дубай",
            subtitle: "Быстрое Авиа и Эконом Море. Ставки Авиа от $6/кг и Море от $0.8/кг — лучшее предложение для доставки до двери.",
            introTitle: "Ваш логистический хаб для ОАЭ",
            introText: "Доставка на Ближний Восток не должна быть сложной. Покупаете ли вы кроссовки с Poizon, мебель из Фошаня или опт с 1688 — HappyBox обеспечит сервис DDP (Все включено). Мы доставляем во все эмираты: Дубай, Абу-Даби, Шарджа, Аджман, Фуджейра и Рас-эль-Хайма.",
            methodsTitle: "Наши тарифы и способы доставки",
            methods: [
                {
                    icon: Plane,
                    title: "Приоритетное Авиа",
                    tag: "Быстро и Надежно",
                    desc: "Лучший выбор для электроники, моды и срочных посылок. Таможня включена.",
                    price: "От $6/кг",
                    speed: "5–9 дней",
                    color: "bg-blue-50 text-brand-blue"
                },
                {
                    icon: Anchor,
                    title: "Морская доставка",
                    tag: "Макс. Выгода",
                    desc: "Самый дешевый способ для тяжелых грузов, мебели или коммерческих партий.",
                    price: "От $0.8/кг",
                    speed: "25–35 дней",
                    color: "bg-teal-50 text-teal-600"
                }
            ],
            whyTitle: "Почему выбирают HappyBox",
            benefits: [
                {
                    icon: ShieldCheck,
                    title: "DDP без налогов",
                    desc: "Забудьте про таможню ОАЭ и НДС. Мы платим все пошлины заранее. Никаких доплат при получении."
                },
                {
                    icon: Box,
                    title: "Бесплатная консолидация",
                    desc: "Покупаете у разных продавцов? Мы объединим всё в одну компактную коробку для экономии."
                },
                {
                    icon: ShoppingBag,
                    title: "Эксперты по брендам",
                    desc: "Специализируемся на Poizon (Dewu). Гарантируем бережную упаковку люксовых товаров."
                },
                {
                    icon: Camera,
                    title: "Бесплатная проверка",
                    desc: "Пришлем качественные фото товаров сразу после поступления на склад. Проверьте до отправки."
                }
            ],
            stepsTitle: "Из Китая в ОАЭ за 4 шага",
            steps: [
                "Получите адрес",
                "Закажите товары",
                "Консолидация и Фото",
                "Получение в ОАЭ"
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
                <section className="py-12 lg:py-24 bg-cream">
                    <div className="container mx-auto px-6 xl:px-0">
                         <div className="max-w-5xl mx-auto text-center">
                                <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-100/50 text-brand-blue font-bold text-sm mb-8 uppercase tracking-wider border border-blue-100">
                                    <span className="text-lg">🇨🇳</span> 
                                    <Plane size={16} /> 
                                    <span className="text-lg">🇦🇪</span> 
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


import React, { useEffect } from 'react';
import { Header } from './Header';
import { Contact } from './Contact';
import { Footer } from './Footer';
import { SeoBlock } from './SeoBlock';
import { Language } from '../utils/translations';
import { FloatingContact } from './FloatingContact';
import { Check, ShieldCheck, Plane, Truck, Anchor, Zap, Box, Send, ScanBarcode, Layers, Globe, ShoppingBag } from 'lucide-react';

interface AmazonPageProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  onBack?: () => void;
}

export const AmazonPage: React.FC<AmazonPageProps> = ({ language, setLanguage, onBack }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const content = {
        en: {
            badge: "FBA Prep & Ship",
            titlePrefix: "Amazon FBA",
            titleHighlight: "Logistics",
            subtitle: "Scale your Amazon business with HappyBox. We provide end-to-end logistics from your Chinese factory directly to Amazon Fulfillment Centers in the USA and Europe (EU).",
            introTitle: "Professional Amazon FBA Prep Service (0% Rejection Rate)",
            introText: "Amazon has strict requirements for incoming inventory. Mistakes in labeling or packaging can lead to rejected shipments and extra fees. Our China-based prep center ensures your products meet 100% of Amazon’s standards before they leave the country.",
            prepTitle: "Our FBA Prep Solutions",
            prepItems: [
                {
                    icon: ScanBarcode,
                    title: "FNSKU Labeling",
                    desc: "Precise application of product barcodes to every unit."
                },
                {
                    icon: Check,
                    title: "Made in China Sticker",
                    desc: "Ensuring compliance with US and EU customs regulations."
                },
                {
                    icon: ShieldCheck,
                    title: "Quality Inspection",
                    desc: "We inspect your batch to catch defects before they reach the Amazon warehouse."
                },
                {
                    icon: Layers,
                    title: "Bundling & Poly-bagging",
                    desc: "Expert packaging for multi-packs and sets."
                }
            ],
            logisticsTitle: "Global Logistics: Shipping to USA & Europe",
            regions: [
                {
                    title: "Shipping to Amazon FBA USA",
                    desc: "Direct delivery to major hubs like ONT8, FTW1, CLT2, JFK8, and more.",
                    points: [
                        { icon: Anchor, text: "Sea Freight (DDP): From $1.2/kg. Best for high-volume inventory. (25-35 days)" },
                        { icon: Plane, text: "Air Freight (DDP): From $10/kg. Ideal for product launches and urgent restocks. (5-9 days)" },
                        { icon: ShieldCheck, text: "Customs: Full ISF filing and customs bond management included." }
                    ],
                    flag: "🇺🇸"
                },
                {
                    title: "Shipping to Amazon FBA Europe",
                    desc: "Comprehensive coverage for Germany (DE), France (FR), Italy (IT), Spain (ES), and Poland (PL).",
                    points: [
                        { icon: Plane, text: "Air Freight (DDP): From $10/kg. (7-12 days)" },
                        { icon: Truck, text: "Trucking/Land (DDP): From $3/kg. The cost-effective choice for heavy commercial cargo. (18-25 days)" },
                        { icon: Zap, text: "VAT & Customs: We handle IOSS/VAT and customs clearance so you don't need an EU tax entity." }
                    ],
                    flag: "🇪🇺"
                }
            ],
            whyTitle: "Why Amazon Sellers Trust HappyBox",
            benefits: [
                {
                    icon: ShieldCheck,
                    title: "DDP (Delivered Duty Paid)",
                    desc: "We pay all import duties, taxes, and terminal fees. You get one transparent price with no hidden costs."
                },
                {
                    icon: Layers,
                    title: "Inventory Consolidation",
                    desc: "We collect goods from multiple 1688 or Alibaba suppliers, consolidate them into one shipment."
                },
                {
                    icon: ShoppingBag,
                    title: "Seller Central Integration",
                    desc: "Simply send us your shipping labels (PDF) and we take care of the rest."
                },
                {
                    icon: Truck,
                    title: "Oversize Management",
                    desc: "Special logistics solutions for heavy or bulky products that require extra care."
                }
            ],
            stepsTitle: "How to Start Shipping to FBA",
            steps: [
                "Create Your Shipment",
                "Ship to Our Warehouse",
                "Prep & Label",
                "Final Delivery"
            ],
            cta: "Get an FBA Shipping Quote",
            back: "Back to Home"
        },
        ru: {
            badge: "FBA Преп и Доставка",
            titlePrefix: "Логистика",
            titleHighlight: "Amazon FBA",
            subtitle: "Масштабируйте бизнес на Amazon с HappyBox. Мы обеспечиваем логистику полного цикла от фабрики в Китае до складов Amazon FBA в США и Европе.",
            introTitle: "Профессиональный преп-центр Amazon FBA (0% отказов)",
            introText: "У Amazon строгие требования к входящим грузам. Ошибки в маркировке или упаковке ведут к отказам и штрафам. Наш преп-центр в Китае гарантирует, что ваши товары на 100% соответствуют стандартам Amazon еще до отправки.",
            prepTitle: "Наши решения для FBA",
            prepItems: [
                {
                    icon: ScanBarcode,
                    title: "Маркировка FNSKU",
                    desc: "Точное нанесение штрих-кодов Amazon на каждую единицу товара."
                },
                {
                    icon: Check,
                    title: "Стикер Made in China",
                    desc: "Обязательное требование таможни США и ЕС. Клеим по регламенту."
                },
                {
                    icon: ShieldCheck,
                    title: "Инспекция качества",
                    desc: "Проверяем партию на брак до отправки на склад Amazon."
                },
                {
                    icon: Layers,
                    title: "Бандлы и Полибеги",
                    desc: "Профессиональная упаковка наборов и товаров в пакеты (poly-bags)."
                }
            ],
            logisticsTitle: "Глобальная логистика: США и Европа",
            regions: [
                {
                    title: "Доставка на Amazon FBA США",
                    desc: "Прямая доставка на главные хабы: ONT8, FTW1, CLT2, JFK8 и другие.",
                    points: [
                        { icon: Anchor, text: "Морская доставка (DDP): От $1.2/кг. Лучше всего для больших объемов. (25-35 дней)" },
                        { icon: Plane, text: "Авиадоставка (DDP): От $10/кг. Для запуска новинок и срочных рестоков. (5-9 дней)" },
                        { icon: ShieldCheck, text: "Таможня: Полное оформление ISF и Customs Bond включено." }
                    ],
                    flag: "🇺🇸"
                },
                {
                    title: "Доставка на Amazon FBA Европа",
                    desc: "Полное покрытие: Германия (DE), Франция (FR), Италия (IT), Испания (ES) и Польша (PL).",
                    points: [
                        { icon: Plane, text: "Авиадоставка (DDP): От $10/кг. (7-12 дней)" },
                        { icon: Truck, text: "Авто / ЖД (DDP): От $3/кг. Выгодный выбор для тяжелых грузов. (18-25 дней)" },
                        { icon: Zap, text: "НДС и Таможня: Мы берем на себя оформление и уплату НДС, вам не нужно юрлицо в ЕС." }
                    ],
                    flag: "🇪🇺"
                }
            ],
            whyTitle: "Почему продавцы Amazon выбирают HappyBox",
            benefits: [
                {
                    icon: ShieldCheck,
                    title: "DDP (Все включено)",
                    desc: "Мы платим все пошлины и налоги. Вы получаете одну прозрачную цену без скрытых доплат."
                },
                {
                    icon: Layers,
                    title: "Консолидация стока",
                    desc: "Соберем товары от разных поставщиков с Alibaba/1688 в одну партию."
                },
                {
                    icon: ShoppingBag,
                    title: "Интеграция",
                    desc: "Просто пришлите нам PDF-лейблы из Seller Central, остальное мы сделаем сами."
                },
                {
                    icon: Truck,
                    title: "Негабаритные грузы",
                    desc: "Специальные решения для тяжелых или объемных товаров."
                }
            ],
            stepsTitle: "Как начать доставку на FBA",
            steps: [
                "Создайте Шипмент",
                "Отправьте нам",
                "Преп и Лейблы",
                "Финальная доставка"
            ],
            cta: "Рассчитать доставку FBA",
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
                                <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-orange-100/50 text-orange-600 font-bold text-sm mb-8 uppercase tracking-wider border border-orange-100">
                                    <ShoppingBag size={16} /> 
                                    {t.badge}
                                </div>
                                <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold leading-[1.1] text-brand-dark mb-8 tracking-tight">
                                    {t.titlePrefix} <span className="text-orange-500 relative inline-block">
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

                {/* Prep Service Block */}
                <section className="py-16 bg-white rounded-[50px] mb-8 container mx-auto shadow-sm px-6 lg:px-20 border border-gray-100">
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <h2 className="text-3xl font-black text-brand-dark mb-6">{t.introTitle}</h2>
                        <p className="text-lg text-gray-600 leading-relaxed font-medium">
                            {t.introText}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                        {t.prepItems.map((item, idx) => (
                            <div key={idx} className="bg-gray-50 p-6 rounded-[25px] border border-gray-100 hover:border-orange-200 transition-colors">
                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-orange-500 mb-4 shadow-sm">
                                    <item.icon size={24} />
                                </div>
                                <h4 className="font-bold text-brand-dark text-lg mb-2">{item.title}</h4>
                                <p className="text-sm text-gray-600 font-medium leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    {/* Logistics Two Columns */}
                    <div className="mb-20">
                        <h3 className="text-3xl font-black text-brand-dark mb-12 text-center">{t.logisticsTitle}</h3>
                        <div className="grid lg:grid-cols-2 gap-8">
                            {t.regions.map((region, idx) => (
                                <div key={idx} className="bg-brand-dark text-white rounded-[30px] p-8 lg:p-10 relative overflow-hidden">
                                    <div className="relative z-10">
                                        <div className="flex justify-between items-start mb-6">
                                            <h3 className="text-2xl font-bold">{region.title}</h3>
                                            <span className="text-4xl">{region.flag}</span>
                                        </div>
                                        <p className="text-gray-400 mb-8 font-medium">{region.desc}</p>
                                        <ul className="space-y-4">
                                            {region.points.map((point, pIdx) => (
                                                <li key={pIdx} className="flex gap-3 items-start">
                                                    <point.icon size={20} className="text-brand-yellow flex-shrink-0 mt-0.5" />
                                                    <span className="text-sm font-bold leading-relaxed">{point.text}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
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
                    <div className="bg-orange-50 rounded-[40px] p-8 lg:p-12 border border-orange-100">
                        <h3 className="text-2xl font-black text-brand-dark mb-10 text-center uppercase tracking-widest opacity-80">
                            {t.stepsTitle}
                        </h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {t.steps.map((step, idx) => (
                                <div key={idx} className="text-center relative">
                                    {idx < 3 && (
                                        <div className="hidden md:block absolute top-6 left-1/2 w-full h-0.5 bg-orange-200 -z-0" />
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
                                className="bg-orange-500 text-white px-8 py-4 rounded-xl font-bold hover:bg-orange-600 transition-all shadow-lg active:scale-95 inline-flex items-center gap-2"
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

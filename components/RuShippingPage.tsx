
import React, { useEffect } from 'react';
import { Header } from './Header';
import { Calculator } from './Calculator';
import { Contact } from './Contact';
import { Footer } from './Footer';
import { SeoBlock } from './SeoBlock';
import { Language } from '../utils/translations';
import { FloatingContact } from './FloatingContact';
import { Check, Truck, Plane, Package, ArrowLeft } from 'lucide-react';

interface RuShippingPageProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  onBack?: () => void;
}

export const RuShippingPage: React.FC<RuShippingPageProps> = ({ language, setLanguage, onBack }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const content = {
        en: {
            badge: "Russia Cargo Line",
            titlePrefix: "Shipping from China to",
            titleHighlight: "Russia",
            subtitle: "Reliable \"Cargo\" delivery via Truck and Train. We deliver to Moscow (Lyublino/Yuzhnye Vorota) and distribute to all regions.",
            trusted: "Trusted by 20,000+ CIS clients",
            whyChoose: "Commercial Cargo Made Simple",
            whyDesc: "Clothing, electronics, equipment, and auto parts delivered without bureaucratic headaches.",
            navTitle: "Payment & Procurement Support",
            navDesc: "Paying Chinese suppliers from Russia can be difficult. HappyBox helps you transfer payments to factories (RMB/USD). We act as your agent: checking goods, repacking into protected bags/crates, and shipping via the grey/white \"Cargo\" route. Insurance covers 100% of the value in case of loss or seizure.",
            benefits: [
                {
                    icon: Truck,
                    title: "Auto Cargo (Fast Truck)",
                    desc: "12-18 days delivery. The most popular balance of speed and cost for commercial goods."
                },
                {
                    icon: Package,
                    title: "Simplified Customs",
                    desc: "We handle the 'Cargo' clearance. No need for complex contracts or certificates on your side."
                }
            ],
            list: ['Payment Assistance (Rubles accepted)', '100% Cargo Insurance', 'Repacking (Tape/Corner/Wood)', 'Moscow & Regions Delivery'],
            card: {
                route: "Route",
                routeVal: "CN ➔ RU",
                fastAuto: "Fast Auto",
                fastAutoVal: "12-18 Days",
                slowAuto: "Slow Auto/Train",
                slowAutoVal: "25-35 Days",
                rate: "Rate",
                rateVal: "From $2.5/kg"
            },
            back: "Back to Home"
        },
        ru: {
            badge: "Карго линия в Россию",
            titlePrefix: "Доставка из Китая в",
            titleHighlight: "Россию",
            subtitle: "Надежная «Карго» доставка авто и поездом. Возим на рынки Москвы (Люблино/Южные Ворота) и отправляем в регионы.",
            trusted: "Нам доверяют 20,000+ клиентов СНГ",
            whyChoose: "Коммерческое Карго — это просто",
            whyDesc: "Одежда, электроника, оборудование и автозапчасти без бюрократической головной боли.",
            navTitle: "Помощь с оплатой и выкупом",
            navDesc: "Платить китайским поставщикам из России сложно. HappyBox помогает переводить деньги фабрикам (юани/доллары). Мы выступаем вашим агентом: проверяем товар, переупаковываем в мешки со скотчем/обрешетку и отправляем по Карго маршруту. Страховка покрывает 100% стоимости.",
            benefits: [
                {
                    icon: Truck,
                    title: "Быстрое Авто (Карго)",
                    desc: "12-18 дней. Самый популярный баланс скорости и цены для коммерческих грузов."
                },
                {
                    icon: Package,
                    title: "Упрощенная таможня",
                    desc: "Мы берем на себя «Карго» очистку. Вам не нужны сложные контракты или сертификаты."
                }
            ],
            list: ['Помощь с оплатой (рубли)', '100% Страховка груза', 'Переупаковка (Скотч/Уголки)', 'Доставка по Москве и РФ'],
            card: {
                route: "Маршрут",
                routeVal: "Китай ➔ РФ",
                fastAuto: "Быстрое Авто",
                fastAutoVal: "12-18 Дней",
                slowAuto: "Медленное Авто",
                slowAutoVal: "25-35 Дней",
                rate: "Тариф",
                rateVal: "От $2.5/кг"
            },
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
            />

            <main>
                <section className="py-12 lg:py-24 bg-cream">
                    <div className="container mx-auto px-6 xl:px-0">
                         {onBack && (
                           <button 
                             onClick={onBack}
                             className="mb-10 flex items-center gap-2 text-gray-500 hover:text-brand-blue font-bold uppercase text-sm tracking-wider transition-colors"
                           >
                             <ArrowLeft size={20} /> {t.back}
                           </button>
                         )}

                         <div className="max-w-5xl mx-auto text-center">
                                <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-100/50 text-brand-blue font-bold text-sm mb-8 uppercase tracking-wider border border-blue-100">
                                    <span className="text-lg">🇨🇳</span> 
                                    <Truck size={16} /> 
                                    <span className="text-lg">🇷🇺</span> 
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
                                
                                <div className="mt-8">
                                    <div className="inline-block bg-brand-yellow px-8 py-4 rounded-2xl shadow-lg shadow-brand-yellow/20 transform hover:scale-105 transition-transform cursor-default border border-brand-yellow">
                                        <p className="text-brand-dark font-black text-base tracking-wide">
                                            {t.trusted}
                                        </p>
                                    </div>
                                </div>
                         </div>
                    </div>
                </section>

                <section id="details" className="py-20 bg-white rounded-[50px] my-8 container mx-auto shadow-sm p-8 lg:p-20">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                             <h2 className="text-3xl md:text-5xl font-black text-brand-dark mb-6">{t.whyChoose}</h2>
                             <p className="text-xl text-gray-500 max-w-2xl mx-auto">
                                {t.whyDesc}
                             </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 mb-16">
                            {t.benefits.map((b, idx) => (
                                <div key={idx} className="bg-gray-50 p-8 rounded-[30px] border border-gray-100 hover:border-brand-blue/30 transition-colors group text-center md:text-left">
                                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-brand-blue shadow-sm mb-6 group-hover:scale-110 transition-transform mx-auto md:mx-0">
                                        <b.icon size={32} />
                                    </div>
                                    <h3 className="font-bold text-2xl mb-4 text-brand-dark">{b.title}</h3>
                                    <p className="text-gray-600 font-medium leading-relaxed">{b.desc}</p>
                                </div>
                            ))}
                        </div>

                        <div className="bg-brand-blue/5 rounded-[30px] p-8 lg:p-12 flex flex-col lg:flex-row items-center gap-10">
                            <div className="lg:w-2/3">
                                <h3 className="text-2xl font-bold text-brand-dark mb-4">{t.navTitle}</h3>
                                <p className="text-gray-700 leading-relaxed text-lg mb-6">
                                    {t.navDesc}
                                </p>
                                <ul className="grid sm:grid-cols-2 gap-3">
                                    {t.list.map(item => (
                                        <li key={item} className="flex items-center gap-2 font-bold text-brand-dark">
                                            <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center text-white"><Check size={12} /></div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="lg:w-1/3 w-full">
                                <div className="bg-white p-6 rounded-3xl shadow-lg border border-gray-100">
                                    <div className="flex justify-between items-center mb-4 border-b border-gray-100 pb-4">
                                        <span className="text-gray-500 font-bold">{t.card.route}</span>
                                        <span className="text-brand-blue font-black">{t.card.routeVal}</span>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="flex justify-between">
                                            <span className="text-gray-500">{t.card.fastAuto}</span>
                                            <span className="font-bold">{t.card.fastAutoVal}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-500">{t.card.slowAuto}</span>
                                            <span className="font-bold">{t.card.slowAutoVal}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-500">{t.card.rate}</span>
                                            <span className="font-bold text-green-600">{t.card.rateVal}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div id="cost">
                    <Calculator
                        language={language}
                        onOpenQuiz={() => {}}
                        defaultCountry="ru" 
                    />
                </div>

                <Contact language={language} />
                <SeoBlock language={language} onNavigate={() => {}} />
                <Footer language={language} />
                <FloatingContact />
            </main>
        </div>
    )
}

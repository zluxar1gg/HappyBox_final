
import React, { useEffect } from 'react';
import { Header } from './Header';
import { Calculator } from './Calculator';
import { Contact } from './Contact';
import { Footer } from './Footer';
import { SeoBlock } from './SeoBlock';
import { Language } from '../utils/translations';
import { FloatingContact } from './FloatingContact';
import { Check, ShieldCheck, Plane, Truck, ArrowLeft } from 'lucide-react';

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
            subtitle: "Reliable DDP delivery to Germany, France, Poland, Italy and 20+ EU countries. We navigate complex EU customs so you don't have to.",
            trusted: "Trusted by 8,500+ EU businesses",
            whyChoose: "Seamless EU Logistics",
            whyDesc: "From small e-commerce parcels to large container shipments.",
            navTitle: "Forget about VAT & Customs Issues",
            navDesc: "Shipping to Europe has become stricter with new VAT rules. HappyBox uses special DDP (Delivered Duty Paid) channels. This means we clear customs in a transit hub (like Netherlands or Hungary) before delivering to the final destination. The receiver pays ZERO taxes upon arrival.",
            benefits: [
                {
                    icon: ShieldCheck,
                    title: "Tax-Free (DDP)",
                    desc: "We handle IOSS and VAT. Your parcels arrive efficiently without customs delays."
                },
                {
                    icon: Truck,
                    title: "Rail & Truck Options",
                    desc: "Economical railway and truck routes available for heavy commercial cargo."
                }
            ],
            list: ['IOSS Handling', 'No Duties on Arrival', 'Germany & France Specialist', 'Amazon FBA Ready'],
            card: {
                route: "Route",
                routeVal: "CN ➔ EU",
                airTime: "Air Transit",
                airTimeVal: "8-14 Days",
                railTime: "Rail/Truck",
                railTimeVal: "20-35 Days",
                customs: "Customs",
                customsVal: "Included (DDP)"
            },
            back: "Back to Home"
        },
        ru: {
            badge: "Прямая линия в Европу",
            titlePrefix: "Доставка из Китая в",
            titleHighlight: "Европу",
            subtitle: "Надежная DDP доставка в Германию, Францию, Польшу, Италию и еще 20+ стран ЕС. Мы проходим сложную таможню ЕС за вас.",
            trusted: "Нам доверяют 8,500+ компаний ЕС",
            whyChoose: "Бесшовная логистика в ЕС",
            whyDesc: "От мелких посылок для e-commerce до крупных контейнерных партий.",
            navTitle: "Забудьте о проблемах с НДС и таможней",
            navDesc: "Доставка в Европу стала строже с новыми правилами НДС. HappyBox использует специальные каналы DDP (Delivered Duty Paid). Мы проходим таможню в транзитном хабе (Нидерланды или Венгрия) перед доставкой конечному получателю. Вы не платите никаких налогов при получении.",
            benefits: [
                {
                    icon: ShieldCheck,
                    title: "Без налогов (DDP)",
                    desc: "Мы берем на себя IOSS и НДС. Ваши посылки проходят таможню быстро и без задержек."
                },
                {
                    icon: Truck,
                    title: "ЖД и Авто опции",
                    desc: "Экономичные железнодорожные и автомобильные маршруты для тяжелых коммерческих грузов."
                }
            ],
            list: ['Обработка IOSS', 'Без пошлин при получении', 'Спецы по Германии и Франции', 'Готовы к Amazon FBA'],
            card: {
                route: "Маршрут",
                routeVal: "Китай ➔ ЕС",
                airTime: "Авиа",
                airTimeVal: "8-14 Дней",
                railTime: "ЖД / Авто",
                railTimeVal: "20-35 Дней",
                customs: "Таможня",
                customsVal: "Включена (DDP)"
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
                {/* Hero */}
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

                {/* Details */}
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
                                            <span className="text-gray-500">{t.card.airTime}</span>
                                            <span className="font-bold">{t.card.airTimeVal}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-500">{t.card.railTime}</span>
                                            <span className="font-bold">{t.card.railTimeVal}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-500">{t.card.customs}</span>
                                            <span className="font-bold text-green-600">{t.card.customsVal}</span>
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
                        defaultCountry="de" // Default to Germany
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

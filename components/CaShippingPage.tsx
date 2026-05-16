import React, { useEffect } from 'react';
import { Header } from './Header';
import { Contact } from './Contact';
import { Footer } from './Footer';
import { SeoBlock } from './SeoBlock';
import { Language } from '../utils/translations';
import { FloatingContact } from './FloatingContact';
import { CaAdvancedLogisticsGuide } from './CaAdvancedLogisticsGuide';
import { Check, ShieldCheck, Plane, Anchor, ShoppingBag, Box, Send, FileCheck, Layers, ArrowRight } from 'lucide-react';

interface CaShippingPageProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  onBack?: () => void;
  onNavigate?: (page: string) => void;
}

export const CaShippingPage: React.FC<CaShippingPageProps> = ({ language, setLanguage, onBack, onNavigate }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const content = {
        en: {
            badge: "Canada Direct Line",
            titlePrefix: "Shipping from China to",
            titleHighlight: "Canada: Professional DDP Solutions",
            subtitle: "Stop worrying about CBSA customs, GST/HST, and supplier mistakes. We provide a secure bridge between your Chinese manufacturers and your Canadian destination with 100% transparent pricing.",
            introTitle: "Seamless Logistics Across Canada",
            introText: <>Whether you are shipping to <strong>Ontario, British Columbia, Quebec, Alberta</strong>, or any other province, HappyBox provides a streamlined logistics experience. We cover the entire country, from the Port of Vancouver to the Atlantic coast.</>,
            ddpText: <><strong>Our Specialized DDP Service:</strong> The price you pay includes all ocean/air freight, customs clearance, and <strong>all Canadian import duties and taxes (GST/HST)</strong>. No hidden fees, no surprise bills from the Canada Border Services Agency (CBSA).</>,
            methodsTitle: "Our Shipping Methods & Rates",
            methods: [
                {
                    icon: Plane,
                    title: "Air Freight",
                    tag: "Electronics & Urgent Inventory",
                    price: "From $11/kg",
                    speed: "6–10 days",
                    color: "bg-blue-50 text-brand-blue"
                },
                {
                    icon: Anchor,
                    title: "Sea Freight",
                    tag: "Bulk, Furniture & Heavy Goods",
                    price: "From $1.5/kg",
                    speed: "20–35 days",
                    color: "bg-teal-50 text-teal-600"
                }
            ],
            topChoiceTitle: "HappyBox is the Top Choice for Canadian Importers",
            topChoiceText: "We act as your local office in Shenzhen, handling the \"heavy lifting\" so you can focus on your Canadian sales:",
            topChoiceItems: [
                { title: "Order Consolidation", desc: "We collect goods from multiple suppliers (1688, Alibaba, Taobao) at our Shenzhen warehouse and ship them as one cargo to significantly reduce your shipping costs." },
                { title: "Strict Quality Inspection", desc: "We provide photos, videos, and detailed checks before your cargo leaves China. If it's defective, we return it to the factory immediately—saving you the nightmare of international returns." },
                { title: "Total Customs Management (DDP)", desc: "We handle all CBSA paperwork and tax payments. You don't need a Canadian Import-Export account (BN) to receive your goods cleared and ready." },
                { title: "Nationwide Door-to-Door Delivery", desc: <>Final-mile delivery to any Canadian address or warehouse via trusted partners like <strong>Canada Post, UPS, or FedEx</strong>.</> }
            ],
            cta: "Get a Free Shipping Quote"
        },
        ru: {
            badge: "Прямая линия в Канаду",
            titlePrefix: "Доставка из Китая в",
            titleHighlight: "Канаду: профессиональный DDP",
            subtitle: "Забудьте о сложностях с таможней CBSA, расчетом GST/HST и ошибках поставщиков. Мы обеспечиваем надежный мост между вашими китайскими производителями и пунктом назначения в Канаде со 100% прозрачным ценообразованием.",
            introTitle: "Бесшовная логистика по всей Канаде",
            introText: <>Онтарио, Британская Колумбия, Квебек, Альберта или любая другая провинция — HappyBox обеспечивает четкую доставку. Мы покрываем всю страну, от порта Ванкувера до Атлантического побережья.</>,
            ddpText: <><strong>Наш специализированный DDP сервис:</strong> В стоимость включены авиа или морской фрахт, растаможка и <strong>все импортные пошлины и налоги Канады (GST/HST)</strong>. Никаких скрытых платежей и внезапных счетов от Пограничной службы Канады (CBSA).</>,
            methodsTitle: "Методы доставки и тарифы",
            methods: [
                {
                    icon: Plane,
                    title: "Авиафрахт",
                    tag: "Для электроники и срочных грузов",
                    price: "От $11/кг",
                    speed: "6–10 дней",
                    color: "bg-blue-50 text-brand-blue"
                },
                {
                    icon: Anchor,
                    title: "Морские перевозки",
                    tag: "Для опта, мебели и тяжелых грузов",
                    price: "От $1.5/кг",
                    speed: "20–35 дней",
                    color: "bg-teal-50 text-teal-600"
                }
            ],
            topChoiceTitle: "Почему импортеры из Канады выбирают HappyBox",
            topChoiceText: "Мы работаем как ваш локальный офис в Шэньчжэне и берем на себя всю «грязную работу», чтобы вы могли сфокусироваться на продажах:",
            topChoiceItems: [
                { title: "Консолидация заказов", desc: "Мы собираем товары от разных поставщиков (1688, Alibaba, Taobao) на нашем складе и отправляем единым грузом, значительно снижая ваши расходы на доставку." },
                { title: "Строгий контроль качества", desc: "Мы проводим фото и видео проверку до отправки груза из Китая. При обнаружении брака сразу возвращаем на фабрику — спасая вас от кошмара международных возвратов." },
                { title: "Полное управление таможней (DDP)", desc: "Мы берем на себя оформление документов CBSA и уплату налогов. Вам не нужен канадский Import-Export account (BN), чтобы получить очищенный и готовый к продаже товар." },
                { title: "Доставка «до двери» по всей стране", desc: <>Доставка по любому канадскому адресу или на склад через проверенных партнеров: <strong>Canada Post, UPS или FedEx</strong>.</> }
            ],
            cta: "Узнать стоимость доставки"
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
                            <span className="inline-flex items-center justify-center bg-brand-blue/10 text-brand-blue px-5 py-2.5 rounded-full text-sm font-bold uppercase tracking-wider mb-8">
                                {t.badge}
                            </span>
                            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold leading-[1.1] text-brand-dark mb-8 tracking-tight">
                                {t.titlePrefix} <span className="text-brand-blue relative inline-block">
                                    {t.titleHighlight}
                                    <svg className="absolute w-full h-3 -bottom-1 left-0 text-brand-yellow z-[-1]" viewBox="0 0 100 10" preserveAspectRatio="none">
                                       <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" opacity="0.6" />
                                    </svg>
                                </span>
                            </h1>
                            <p className="text-xl text-gray-600 mb-10 font-medium leading-relaxed max-w-3xl mx-auto">
                                {t.subtitle}
                            </p>
                         </div>
                    </div>
                </section>

                <section id="details" className="py-16 bg-white rounded-[50px] mb-8 container mx-auto shadow-sm px-6 lg:px-20 border border-gray-100">
                    <div className="max-w-4xl mx-auto space-y-12 text-gray-800 text-lg leading-relaxed">
                            
                            {/* Intro Section */}
                            <div className="text-center mb-16">
                                <h2 className="text-3xl font-black text-brand-dark mb-6 tracking-tight">{t.introTitle}</h2>
                                <p className="text-lg text-gray-600 leading-relaxed font-medium mb-6">
                                    {t.introText}
                                </p>
                                <p className="text-lg text-gray-600 leading-relaxed font-medium">
                                    {t.ddpText}
                                </p>
                            </div>

                            {/* Rates and Methods */}
                            <h3 className="text-2xl font-black text-brand-dark mb-10 text-center uppercase tracking-widest opacity-80 pt-10">
                                {t.methodsTitle}
                            </h3>
                            <div className="grid md:grid-cols-2 gap-6 mb-20 max-w-4xl mx-auto">
                                {t.methods.map((method, idx) => (
                                    <div key={idx} className="bg-white rounded-[30px] p-6 border-2 border-gray-100 shadow-sm flex flex-col items-center text-center">
                                        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 ${method.color}`}>
                                            <method.icon size={28} />
                                        </div>
                                        <h4 className="font-bold text-xl text-brand-dark mb-2">{method.title}</h4>
                                        <p className="text-sm text-gray-500 font-medium mb-6 leading-relaxed">
                                            {method.tag}
                                        </p>
                                        <div className="w-full pt-6 border-t border-gray-50">
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

                            {/* Top Choice Section */}
                            <div className="mb-20">
                                <h3 className="text-3xl lg:text-4xl font-black text-brand-dark mb-6 tracking-tight">{t.topChoiceTitle}</h3>
                                <p className="text-lg text-gray-700 mb-8 font-medium">{t.topChoiceText}</p>
                                
                                <ul className="space-y-6">
                                    {t.topChoiceItems.map((item, idx) => (
                                        <li key={idx} className="flex gap-4 items-start">
                                            <span className="text-brand-blue mt-1 shrink-0"><Check size={24} /></span>
                                            <p className="text-lg text-gray-700 max-w-4xl">
                                                <strong className="font-bold text-brand-dark">{item.title}:</strong> {item.desc}
                                            </p>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="pt-10 border-t border-gray-100">
                                 <CaAdvancedLogisticsGuide language={language} simplified />
                            </div>

                            {/* CTA */}
                            <div className="text-center pt-16 pb-12">
                                <button 
                                    onClick={() => document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth' })}
                                    className="bg-brand-dark text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-black transition-all shadow-lg active:scale-95 inline-flex items-center gap-3"
                                >
                                    <Send size={24} />
                                    {t.cta}
                                </button>
                            </div>

                        </div>
                </section>

                <div id="contacts">
                    <Contact language={language} currentPage="canada" />
                </div>
                
                <SeoBlock language={language} onNavigate={onNavigate || (() => {})} currentPage="canada" /> 
                <Footer language={language} />
                <FloatingContact />
            </main>
        </div>
    )
}

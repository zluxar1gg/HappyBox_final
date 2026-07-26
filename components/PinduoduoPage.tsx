import React, { useEffect } from 'react';
import { Header } from './Header';
import { Contact } from './Contact';
import { Footer } from './Footer';
import { SeoBlock } from './SeoBlock';
import { Language } from '../utils/translations';
import { FloatingContact } from './FloatingContact';
import { PinduoduoAdvancedGuide } from './PinduoduoAdvancedGuide';
import { Search, CreditCard, ClipboardCheck, Package, Send, ShieldCheck, Percent, Layers } from 'lucide-react';

interface PinduoduoPageProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  onBack?: () => void;
  onNavigate?: (page: string) => void;
}

export const PinduoduoPage: React.FC<PinduoduoPageProps> = ({ language, setLanguage, onBack, onNavigate }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const content = {
        en: {
            badge: "Group Buying & Unbeatable Prices",
            titlePrefix: "Pinduoduo Agent Services",
            titleHighlight: "",
            subtitle: <>Pinduoduo is famous for its group buying model and incredible discounts on everything from gadgets to home goods. We make buying from Pinduoduo easy, secure, and accessible.</>,
            whyTitle: "Why Pinduoduo?",
            whyText1: "Pinduoduo often offers lower prices than Taobao for the exact same items. The platform connects buyers directly to factories with no trading company layer and no retail markup. The platform's algorithm guarantees volume to manufacturers in exchange for deep discounts.",
            whyText2: "The catch? The app is only in Chinese, requires local payment methods, and the interface can be overwhelming with its gamified discounts and time-sensitive deals.",
            whyText3: "HappyBox acts as your agent: we navigate the app, secure the group-buy price, and handle shipping directly to you.",
            processTitle: "How to buy from Pinduoduo",
            process: [
                {
                    icon: Search,
                    title: "Browse App",
                    desc: "Download Pinduoduo (拼多多) and find the items you like.",
                },
                {
                    icon: CreditCard,
                    title: "Share Link",
                    desc: "Click the share button and send us the product link.",
                },
                {
                    icon: ClipboardCheck,
                    title: "We Buy",
                    desc: "We purchase using the 'Group Buy' price for maximum savings.",
                },
                {
                    icon: Package,
                    title: "Delivery",
                    desc: "We receive, inspect, and ship it to you.",
                }
            ],
            fearsTitle: "Key Benefits of Pinduoduo",
            fearsList: [
                { q: "Best Prices in China", a: "Known for heavily subsidized pricing on everyday items, from home goods to basic electronics." },
                { q: "0% Commission", a: "We charge no service fee for standard Pinduoduo orders." },
                { q: "Consolidation", a: "Perfect for adding small, cheap items to your main parcel, drastically reducing shipping costs." },
                { q: "Don't ignore the timer", a: "Pinduoduo deals are often time-sensitive. If you see a great price, send it to us quickly so we can lock it in before the group-buy window closes." }
            ],
            feeTitle: "0% Service Fee / Commission",
            feeText: "We charge absolutely no service fee for standard Pinduoduo orders. You get the real factory group-buy price.",
            cta: "Start Sourcing",
        },
        ru: {
            badge: "Групповые закупки и невероятные цены",
            titlePrefix: "Посредник Pinduoduo (PDD)",
            titleHighlight: "",
            subtitle: <>Платформа Pinduoduo славится своей моделью совместных покупок (групп-бай) и невероятными скидками на всё — от электроники до товаров для дома. Мы делаем покупки на Pinduoduo простыми и безопасными.</>,
            whyTitle: "Почему именно Pinduoduo?",
            whyText1: "Pinduoduo часто предлагает более низкие цены, чем Taobao, на абсолютно идентичные товары. Платформа напрямую связывает покупателей с фабриками, убирая торговые компании и розничную наценку, и гарантирует производителю огромные объемы взамен на скидки.",
            whyText2: "В чем подвох? Приложение полностью на китайском языке, требует китайские платежные системы, а интерфейс перегружен таймерами и геймифицированными скидками.",
            whyText3: "HappyBox выступает вашим агентом: мы разбираемся в приложении, фиксируем цену совместной покупки и берем на себя доставку и логистику.",
            processTitle: "Как купить на Pinduoduo",
            process: [
                {
                    icon: Search,
                    title: "Найдите товар",
                    desc: "Скачайте Pinduoduo (拼多多) и найдите интересующие вас позиции.",
                },
                {
                    icon: CreditCard,
                    title: "Поделитесь ссылкой",
                    desc: "Нажмите кнопку «поделиться» и отправьте нам ссылку на товар.",
                },
                {
                    icon: ClipboardCheck,
                    title: "Мы выкупаем",
                    desc: "Мы оформляем заказ по «Групповой цене» для максимальной экономии.",
                },
                {
                    icon: Package,
                    title: "Доставка",
                    desc: "Мы получаем товар на складе, проверяем его и отправляем вам.",
                }
            ],
            fearsTitle: "Ключевые преимущества Pinduoduo",
            fearsList: [
                { q: "Лучшие цены в Китае", a: "Платформа известна субсидированными ценами на повседневные товары." },
                { q: "Комиссия 0%", a: "Мы не берем сервисную комиссию за выкуп стандартных заказов на Pinduoduo." },
                { q: "Консолидация посылок", a: "Идеально подходит для добавления мелких недорогих товаров к вашей основной посылке для экономии на логистике." },
                { q: "Обращайте внимание на таймер", a: "Скидки на Pinduoduo ограничены по времени. Если вы увидели отличную цену, отправляйте ссылку как можно скорее, чтобы мы успели ее зафиксировать." }
            ],
            feeTitle: "0% Сервисный сбор / Комиссия",
            feeText: "Мы не взимаем сервисную комиссию за стандартные заказы Pinduoduo. Вы получаете ту самую цену групповой покупки с фабрики.",
            cta: "Начать поиск товара",
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
                {/* Hero Section */}
                <section className="py-12 lg:py-24 bg-cream relative overflow-hidden">
                    <div className="container mx-auto px-6 xl:px-0 relative z-10"> 
                        <div className="max-w-5xl mx-auto text-center">
                                <span className="inline-flex items-center justify-center bg-brand-blue/10 text-brand-blue px-5 py-2.5 rounded-full text-sm font-bold uppercase tracking-wider mb-8">
                                    {t.badge}
                                </span>
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] text-brand-dark mb-8 tracking-tight">
                                    {t.titlePrefix} {t.titleHighlight && <span className="text-brand-blue block mt-2">{t.titleHighlight}</span>}
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
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20 max-w-6xl mx-auto">
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

                </section>

                <PinduoduoAdvancedGuide language={language} onNavigate={onNavigate} />

                <div id="contacts">
                    <Contact language={language} currentPage="pinduoduo" />
                </div>
                
                <SeoBlock language={language} onNavigate={onNavigate} currentPage="pinduoduo" /> 
                <Footer language={language} />
                <FloatingContact />
            </main>
        </div>
    )
}

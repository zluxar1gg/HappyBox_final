
import React, { useEffect } from 'react';
import { Header } from './Header';
import { Contact } from './Contact';
import { Footer } from './Footer';
import { SeoBlock } from './SeoBlock';
import { Language } from '../utils/translations';
import { FloatingContact } from './FloatingContact';
import { Check, Truck, FileCheck, Lock, CreditCard, ShieldCheck, Send } from 'lucide-react';

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
            badge: "TIR White Import",
            titlePrefix: "Shipping from China to",
            titleHighlight: "Russia",
            subtitle: "Official TIR Shipping: Fast, \"White\" Import with full documents. Accelerated border crossing via TIR system with complete transparency.",
            introTitle: "What is TIR Shipping?",
            introText: "TIR (Transports Internationaux Routiers) is an international customs transit system. The cargo is sealed in China and travels to the customs post in Russia under a single document (TIR Carnet). The Key Benefit: Your cargo is NOT opened or inspected at transit borders (e.g., Kazakhstan), eliminating the risk of damage or theft.",
            methodsTitle: "Turnkey Rates & Terms",
            methods: [
                {
                    icon: Truck,
                    title: "TIR Auto (White)",
                    tag: "Official Import",
                    desc: "Full 'White' customs clearance. No inspections at transit borders. VAT deduction available.",
                    price: "From $1.2/kg",
                    speed: "12–18 days",
                    color: "bg-blue-50 text-brand-blue"
                },
                {
                    icon: ShieldCheck,
                    title: "Standard Cargo",
                    tag: "Simplified",
                    desc: "Classic grey route for simplified delivery without complex paperwork. Insurance included.",
                    price: "From $2.5/kg",
                    speed: "15–25 days",
                    color: "bg-gray-50 text-gray-600"
                }
            ],
            whiteTitle: "\"White\" Delivery: We Work Officially",
            whiteText: "If your business needs closing documents, VAT deduction, and full legality, our \"White\" delivery service is the ideal solution.",
            benefits: [
                {
                    icon: FileCheck,
                    title: "Full Document Package",
                    desc: "Customs Declaration (DT), Contract, Invoice, Packing List, and Torg-12/UPD for your accounting."
                },
                {
                    icon: CreditCard,
                    title: "Payment Assistance",
                    desc: "We help with official payments to Chinese suppliers via trusted payment agents. 2026 Compliance."
                },
                {
                    icon: Check,
                    title: "Chestny Znak Labeling",
                    desc: "We perform mandatory labeling (Data Matrix) directly at our warehouse in China before shipping."
                },
                {
                    icon: Lock,
                    title: "Safety & Security",
                    desc: "The seal is set in China and removed only at the destination customs. Zero transit interference."
                }
            ],
            stepsTitle: "How to Start?",
            steps: [
                "Send Application (Invoice)",
                "Get Calculation (2 hours)",
                "Loading & Sealing",
                "Customs & Delivery"
            ],
            cta: "Request White Import Quote",
            back: "Back to Home"
        },
        ru: {
            badge: "TIR Белый Импорт",
            titlePrefix: "Доставка из Китая в",
            titleHighlight: "Россию",
            subtitle: "TIR-доставка из Китая: Быстрый «Белый» Импорт. Официальные поставки с полным пакетом документов и ускоренным прохождением границ.",
            introTitle: "Что такое TIR-доставка?",
            introText: "TIR (Transports Internationaux Routiers) — это международная система таможенного транзита. Груз пломбируется в Китае и следует до таможенного поста в РФ по единому документу (книжке МДП). Главное преимущество: Ваш груз не вскрывают и не досматривают на транзитных границах (например, в Казахстане). Это исключает риск повреждения или кражи товара в пути.",
            methodsTitle: "Сроки и тарифы «под ключ»",
            methods: [
                {
                    icon: Truck,
                    title: "TIR Авто (Белая)",
                    tag: "Официально",
                    desc: "Полная «белая» таможня. Без досмотров на транзите. Полный вычет НДС для вашего бизнеса.",
                    price: "От $1.2/кг",
                    speed: "12–18 дней",
                    color: "bg-blue-50 text-brand-blue"
                },
                {
                    icon: ShieldCheck,
                    title: "Стандарт Карго",
                    tag: "Упрощенно",
                    desc: "Классический маршрут для упрощенной доставки без сложных контрактов. Страховка включена.",
                    price: "От $2.5/кг",
                    speed: "15–25 дней",
                    color: "bg-gray-50 text-gray-600"
                }
            ],
            whiteTitle: "«Белая» доставка: Работаем официально",
            whiteText: "Если вашему бизнесу нужны закрывающие документы, вычет НДС и полная легальность, наш сервис «белой» доставки — идеальное решение.",
            benefits: [
                {
                    icon: FileCheck,
                    title: "Полный пакет документов",
                    desc: "ДТ (таможенная декларация), договор, инвойс, упаковочный лист и Торг-12/УПД."
                },
                {
                    icon: CreditCard,
                    title: "Валютный контроль",
                    desc: "Помогаем с официальной оплатой инвойсов китайским поставщикам через проверенных агентов."
                },
                {
                    icon: Check,
                    title: "Честный Знак",
                    desc: "Осуществляем маркировку товара непосредственно на складе в Китае перед отправкой."
                },
                {
                    icon: Lock,
                    title: "Безопасность",
                    desc: "Пломба устанавливается при отправке и снимается только на таможне назначения."
                }
            ],
            stepsTitle: "Как начать работать?",
            steps: [
                "Заявка (Инвойс)",
                "Расчет (за 2 часа)",
                "Загрузка и Пломба",
                "Таможня и Доставка"
            ],
            cta: "Расчет белого импорта",
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

                    {/* White Delivery Benefits Grid */}
                    <div className="mb-20">
                        <div className="text-center mb-12">
                            <h3 className="text-3xl font-black text-brand-dark mb-4">{t.whiteTitle}</h3>
                            <p className="text-lg text-gray-600">{t.whiteText}</p>
                        </div>
                         
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

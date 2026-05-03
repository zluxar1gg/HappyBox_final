
import React, { useEffect } from 'react';
import { Header } from './Header';
import { Contact } from './Contact';
import { Footer } from './Footer';
import { SeoBlock } from './SeoBlock';
import { Language } from '../utils/translations';
import { FloatingContact } from './FloatingContact';
import { UsaAdvancedLogisticsGuide } from './UsaAdvancedLogisticsGuide';
import { Check, ShieldCheck, Plane, Anchor, ShoppingBag, Box, Send, FileCheck, Layers, ArrowRight } from 'lucide-react';

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
            titleHighlight: "USA: Professional DDP",
            subtitle: <>Stop worrying about customs, taxes, and supplier mistakes. We provide a secure bridge between your Chinese manufacturers and your US destination with 100% transparent pricing. No minimum weight requirement — we ship from <span className="bg-brand-yellow px-1.5 py-0.5 rounded text-brand-dark font-bold whitespace-nowrap">0.1 kg</span>.</>,
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
            fbaTitle: "HappyBox is the Top Choice for US Importers",
            fbaText: "We act as your local office in Shenzhen, ensuring your business runs smoothly without you ever needing to fly to China. We handle the \"heavy lifting\" so you can focus on your sales:",
            fbaItems: [
                { title: "Order Consolidation", desc: "We collect goods from multiple suppliers (1688, Alibaba, Taobao) at our Shenzhen warehouse and ship them as one single cargo to significantly reduce your shipping costs." },
                { title: "Strict Quality Inspection", desc: "Don't find out your products are defective when they are already in the US. We provide photos, videos, and detailed checks before your cargo leaves China." },
                { title: "Total Customs Management (DDP)", desc: "We handle the ISF filing, customs bonds, and all import duties. You don't need to worry about complex US Customs and Border Protection (CBP) paperwork." },
                { title: "Nationwide Door-to-Door Delivery", desc: "Whether it’s a residential address or a commercial warehouse, we provide \"last-mile\" delivery to any US state via trusted partners like UPS, FedEx, or local trucking." }
            ],
            fearsTitle: "Solving Your Biggest Importing Fears",
            fearsList: [
                { q: "What if my supplier sends junk?", a: "Our Shenzhen Warehouse acts as your quality buffer. We provide photos, videos, and technical checks before the cargo leaves China. If it's broken, we return it to the factory immediately." },
                { q: "What if the cargo is lost or damaged?", a: "We offer Zero-Risk Insurance. Unlike others who hide this in the fine print, we offer \"All-Risk\" coverage for a small fee. If your goods are lost during transit, you receive a 100% refund of the declared value." },
                { q: "Am I too small for you?", a: <>We work with growing businesses. Our minimums are realistic: starting from <span className="bg-brand-yellow px-1.5 py-0.5 rounded text-brand-dark font-bold whitespace-nowrap">0.1 kg</span> for Air and 51 kg for Sea Freight. Whether you are a startup or an established brand, you get the same level of expertise.</> },
                { q: "What about holidays and delays?", a: "Logistics isn't always perfect. We provide a Realistic Shipping Calendar, accounting for Chinese New Year, Golden Week, and US port congestion (like LAX or Long Beach) to ensure you never run out of stock." }
            ],
            whyTitle: "Working with HappyBox is",
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
            titleHighlight: "США: профессиональный сервис DDP",
            subtitle: <>Забудьте о сложностях с таможней, налогами и ошибками поставщиков. Мы обеспечиваем надежный мост между вашими китайскими производителями и пунктом назначения в США со 100% прозрачным ценообразованием. Никаких ограничений по минимальному весу — отправляем от <span className="bg-brand-yellow px-1.5 py-0.5 rounded text-brand-dark font-bold whitespace-nowrap">0.1 кг</span>.</>,
            introTitle: "Бесшовная логистика по всей территории Соединенных Штатов",
            introText: "Калифорния, Нью-Йорк, Техас или Флорида — HappyBox обеспечивает четкую логистику в любой штат, от Западного до Восточного побережья. Мы специализируемся на доставке DDP (Delivered Duty Paid). Это значит, что в цену уже включены авиа или морской фрахт, растаможка и все импортные пошлины. Никаких скрытых сборов и внезапных счетов от Таможенно-пограничной службы США (CBP).",
            methodsTitle: "Методы доставки и тарифы",
            methods: [
                {
                    icon: Plane,
                    title: "Авиафрахт",
                    tag: "Экспресс-доставка",
                    desc: "Лучший выбор для дорогостоящих товаров, электроники или срочного пополнения стока.",
                    price: "От $10/кг",
                    speed: "5–9 дней",
                    color: "bg-blue-50 text-brand-blue"
                },
                {
                    icon: Anchor,
                    title: "Морские перевозки",
                    tag: "Экономия и опт",
                    desc: "Самый выгодный способ перевозки больших объемов, оборудования или мебели. Доступны варианты LCL (сборный груз) и FCL (целый контейнер).",
                    price: "От $1.2/кг",
                    speed: "25–35 дней",
                    color: "bg-teal-50 text-teal-600"
                }
            ],
            fbaTitle: "Почему американские импортеры выбирают HappyBox",
            fbaText: "Мы работаем как ваш локальный офис в Шэньчжэне. Пока вы фокусируетесь на продажах, мы берем на себя всю «грязную работу»:",
            fbaItems: [
                { title: "Консолидация заказов", desc: "Соберем товары от разных поставщиков (1688, Alibaba, Taobao) на нашем складе и отправим единым грузом, чтобы максимально снизить стоимость доставки." },
                { title: "Строгий контроль качества", desc: "Не ждите, пока брак приедет в США. Мы делаем фото, видео и детальную проверку товара еще в Китае." },
                { title: "Полное управление таможней (DDP)", desc: "Мы берем на себя подачу формы ISF, оформление таможенных бондов и оплату пошлин. Вам не нужно возиться со сложной документацией CBP." },
                { title: "Доставка «до двери» по всей стране", desc: "Привезем груз на любой адрес — будь то частный дом или коммерческий склад — через проверенных партнеров (UPS, FedEx или локальные траковые компании)." }
            ],
            fearsTitle: "Решаем главные проблемы импорта",
            fearsList: [
                { q: "Что если поставщик пришлет мусор?", a: "Наш склад в Шэньчжэне — это ваш фильтр качества. Мы проверяем всё до отправки. Если нашли брак — сразу возвращаем товар на завод." },
                { q: "Что если груз потеряют или повредят?", a: "Мы предлагаем страховку «от всех рисков» (All-Risk). В случае утери или повреждения вы получаете 100% возврат заявленной стоимости. Никакого мелкого шрифта." },
                { q: "У меня небольшой заказ, вы со мной работаете?", a: <>Да. Наши лимиты: от <span className="bg-brand-yellow px-1.5 py-0.5 rounded text-brand-dark font-bold whitespace-nowrap">0.1 кг</span> для авиа и от 51 кг для моря. Мы даем одинаковый уровень экспертизы и стартапам, и крупным брендам.</> },
                { q: "Как быть с праздниками и задержками?", a: "Мы предоставляем реалистичный календарь отгрузок с учетом китайского Нового года и заторов в портах (LAX или Long Beach), чтобы ваш бизнес работал без пауз." }
            ],
            whyTitle: "Работа с HappyBox - это",
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
            stepsTitle: "С чего начать",
            steps: [
                "Получите адрес склада в Шэньчжэне",
                "Закажите товар у поставщиков",
                "Проверьте фото и отчеты",
                "Получите груз в США"
            ],
            cta: "Узнать стоимость доставки",
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
                            <span className="inline-flex items-center justify-center bg-brand-blue/10 text-brand-blue px-5 py-2.5 rounded-full text-sm font-bold uppercase tracking-wider mb-8">
                                {language === 'en' ? 'USA-Direct Line' : 'Прямая линия в США'}
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

                    {/* Top Choice Section */}
                    <div className="bg-brand-blue/5 rounded-[40px] p-8 lg:p-12 mb-20 border border-brand-blue/10">
                        <div className="text-center mb-10">
                            <h3 className="text-3xl font-black text-brand-dark mb-4">{t.fbaTitle}</h3>
                            <p className="text-lg text-gray-600 max-w-3xl mx-auto font-medium leading-relaxed">{t.fbaText}</p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {t.fbaItems.map((item, idx) => (
                                <div key={idx} className="bg-white p-6 md:p-8 rounded-[30px] shadow-sm border border-brand-blue/10 h-full">
                                    <h4 className="font-bold text-brand-dark mb-3 text-lg leading-snug">{item.title}</h4>
                                    <p className="text-gray-600 leading-relaxed font-medium">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Fears Section */}
                    <div className="mb-20">
                         <h3 className="text-3xl font-black text-brand-dark mb-12 text-center">{t.fearsTitle}</h3>
                         <div className="grid md:grid-cols-2 gap-8">
                            {t.fearsList.map((fear, idx) => (
                                <div key={idx} className="bg-white p-6 md:p-8 rounded-[30px] shadow-sm border border-gray-100">
                                    <h4 className="font-bold text-lg text-brand-dark mb-3 leading-snug">{fear.q}</h4>
                                    <p className="text-gray-600 font-medium leading-relaxed">{fear.a}</p>
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

                    <a href={language === 'ru' ? '/ru/amazon' : '/amazon'} className="group flex flex-col sm:flex-row items-center justify-between w-full max-w-4xl mx-auto mt-12 mb-6 bg-white border-2 border-gray-100 rounded-[30px] p-6 sm:p-8 transition-all shadow-md hover:shadow-xl hover:border-[#FF9900]/30 cursor-pointer">
                        <div className="flex-grow mb-6 sm:mb-0 text-center sm:text-left sm:pr-8">
                            <h4 className="text-2xl sm:text-3xl font-black font-sans text-brand-dark mb-2 leading-tight">
                                {language === 'ru' ? 'Вам нужна доставка на ' : 'Shipping to '} 
                                <span className="text-[#FF9900] block sm:inline mt-1 sm:mt-0">Amazon FBA</span>?
                            </h4>
                            <p className="text-gray-500 text-sm sm:text-base font-medium leading-relaxed">
                                {language === 'ru' ? 'Специальные условия, маркировка и доставка напрямую на склады FBA.' : 'Specialized rates, prep services, and direct delivery to FBA warehouses.'}
                            </p>
                        </div>
                        <div className="flex-shrink-0 w-full sm:w-auto">
                            <span className="flex w-full sm:w-auto items-center justify-center gap-2 bg-[#FF9900] text-white font-bold py-4 px-8 rounded-full group-hover:bg-[#e68a00] transition-colors shadow-sm sm:text-lg">
                                {language === 'ru' ? 'Подробнее' : 'Learn More'}
                                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </span>
                        </div>
                    </a>

                    <a href={language === 'ru' ? '/ru/blog/chinese-holidays-calendar-2026' : '/blog/chinese-holidays-calendar-2026'} className="group flex flex-col sm:flex-row items-center justify-between w-full max-w-4xl mx-auto mb-4 bg-brand-dark border-2 border-gray-800 rounded-[30px] p-6 sm:p-8 transition-all shadow-md hover:shadow-xl hover:border-brand-blue cursor-pointer">
                        <div className="flex-grow mb-6 sm:mb-0 text-center sm:text-left sm:pr-8">
                            <h4 className="text-2xl sm:text-3xl font-black font-sans text-white mb-2 leading-tight">
                                {language === 'ru' ? 'Календарь Китайских Праздников 2026' : 'Chinese Holidays Calendar 2026'} 
                            </h4>
                            <p className="text-gray-400 text-sm sm:text-base font-medium leading-relaxed">
                                {language === 'ru' ? 'Узнайте точные даты, когда останавливается логистика, и как заранее отправить груз.' : 'Find out exact dates when logistics stop and how to ship your cargo ahead of time.'}
                            </p>
                        </div>
                        <div className="flex-shrink-0 w-full sm:w-auto">
                            <span className="flex w-full sm:w-auto items-center justify-center gap-2 bg-brand-blue text-white font-bold py-4 px-8 rounded-full group-hover:bg-blue-600 transition-colors shadow-sm sm:text-lg">
                                {language === 'ru' ? 'Читать Гайд' : 'Read Guide'}
                                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </span>
                        </div>
                    </a>
                </section>

                <UsaAdvancedLogisticsGuide language={language} />

                <div id="contacts">
                    <Contact language={language} currentPage="usa" />
                </div>
                
                <SeoBlock language={language} onNavigate={() => {}} /> 
                <Footer language={language} />
                <FloatingContact />
            </main>
        </div>
    )
}

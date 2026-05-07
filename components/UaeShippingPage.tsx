
import React, { useEffect } from 'react';
import { Header } from './Header';
import { Contact } from './Contact';
import { Footer } from './Footer';
import { SeoBlock } from './SeoBlock';
import { Language } from '../utils/translations';
import { FloatingContact } from './FloatingContact';
import { UaeAdvancedLogisticsGuide } from './UaeAdvancedLogisticsGuide';
import { Check, ShieldCheck, Plane, Truck, Anchor, Zap, Box, Send, MapPin, ArrowRight, Camera, ShoppingBag, Globe } from 'lucide-react';

interface UaeShippingPageProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  onBack?: () => void;
  onNavigate?: (page: string) => void;
}

export const UaeShippingPage: React.FC<UaeShippingPageProps> = ({ language, setLanguage, onBack, onNavigate }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const content = {
        en: {
            badge: "UAE Direct Line",
            titlePrefix: "Shipping from China to",
            titleHighlight: "UAE & Dubai",
            subtitle: <>Stop worrying about Dubai customs, import VAT, and supplier mistakes. We deliver from our Shenzhen warehouse to any emirate — all duties and taxes paid upfront, zero charges on delivery. No minimum weight requirement — we ship from <span className="bg-brand-yellow px-1.5 py-0.5 rounded text-brand-dark font-bold whitespace-nowrap">0.1 kg</span>.</>,
            introTitle: "Your All-in-One Logistics Hub for the UAE",
            introText: "Whether you are an e-commerce entrepreneur in Dubai, a business owner in Abu Dhabi, or a private shopper in Sharjah — HappyBox provides a specialized DDP service covering all seven emirates. We also handle re-export to the wider GCC region: Saudi Arabia, Qatar, Kuwait, Bahrain, and Oman. What this means for you: the price you pay includes all freight, customs clearance, UAE import duties, and VAT. No hidden fees, no surprise invoices from Aramex or DHL on delivery.",
            methodsTitle: "Our Shipping Methods & Rates",
            methods: [
                {
                    icon: Plane,
                    title: "Air Freight",
                    tag: "Priority Delivery",
                    desc: "Electronics, fashion, branded goods, and urgent restocks.",
                    price: "From $6/kg",
                    speed: "5–9 days",
                    color: "bg-blue-50 text-brand-blue"
                },
                {
                    icon: Anchor,
                    title: "Sea Freight",
                    tag: "Maximum Savings",
                    desc: "Bulk stock, furniture, heavy goods, and commercial inventory.",
                    price: "From $0.8/kg",
                    speed: "25–35 days",
                    color: "bg-teal-50 text-teal-600"
                }
            ],
            whyTitle: "HappyBox: Your Local Office in Shenzhen",
            whyIntro: "We act as your eyes and ears in China so you never need to fly there.",
            benefits: [
                {
                    icon: ShoppingBag,
                    title: "Expertise in Branded Goods",
                    desc: "We specialize in handling luxury sneakers and apparel from Poizon (Dewu). Original brand boxes are double-boxed and protected — Nike, Yeezy, or LV packaging arrives intact."
                },
                {
                    icon: Box,
                    title: "Order Consolidation",
                    desc: "Buy from multiple suppliers on 1688, Taobao, or Alibaba. We collect everything at our Shenzhen warehouse and ship as one consolidated cargo — one bill, one customs entry."
                },
                {
                    icon: ShieldCheck,
                    title: "Strict Quality Inspection",
                    desc: "We provide high-resolution photos and videos before anything leaves China. If it's defective, it goes back to the factory — not on a plane to Dubai."
                },
                {
                    icon: MapPin,
                    title: "Door-to-Door to All Emirates",
                    desc: "From our Shenzhen warehouse to your address in Dubai, Abu Dhabi, Sharjah, Ajman, Fujairah, or Ras Al Khaimah — via trusted local delivery partners."
                }
            ],
            fearsTitle: "Solving Your Biggest Importing Fears",
            fearsList: [
                { q: "What if my supplier sends defective goods?", a: "Our Shenzhen warehouse is your quality buffer. Every shipment is inspected with photos and videos before it leaves China. Defective items go back to the factory immediately." },
                { q: "What if the cargo is lost or damaged?", a: "We provide All-Risk cargo insurance. If your goods are lost or damaged in transit, you receive a 100% refund of the declared value. No fine print." },
                { q: "Am I too small for you?", a: <>Our minimums are accessible: from <span className="bg-brand-yellow px-1.5 py-0.5 rounded text-brand-dark font-bold whitespace-nowrap">0.1 kg</span> for Air and from 1 CBM for Sea. Startups and established importers get the same service level.</> },
                { q: "What about delays?", a: "Chinese New Year, Golden Week, and Jebel Ali congestion are predictable. We plan your shipment calendar around them so you never run out of stock." }
            ],
            stepsTitle: "From China to UAE in 4 Steps",
            steps: [
                "Get your Shenzhen warehouse address",
                "Order from your suppliers",
                "We inspect, consolidate, and pack",
                "Pay and track to your door"
            ],
            cta: "Get a Free Shipping Quote",
            back: "Back to Home",
            crossPromo: [
                {
                    title: "Shipping Poizon (Dewu) items to Dubai?",
                    desc: "We specialize in branded goods from Poizon — careful double-box packaging, authenticity-safe handling, and fast air delivery to UAE.",
                    link: "/poizon", // Using whatever logic exists
                    action: "Learn More"
                },
                {
                    title: "Need to ship onward to Saudi Arabia, Qatar, or Kuwait?",
                    desc: "We handle GCC re-export from Dubai. Ask us about cross-border routing to the wider Gulf region.",
                    link: "#gcc", // Can just link to GCC section
                    action: "Learn More"
                }
            ]
        },
        ru: {
            badge: "Прямая линия в ОАЭ",
            titlePrefix: "Доставка из Китая в",
            titleHighlight: "ОАЭ и Дубай: DDP сервис",
            subtitle: <>Забудьте о сложностях с таможней Дубая, импортным НДС и ошибках поставщиков. Мы доставляем грузы с нашего склада в Шэньчжэне в любой эмират: все пошлины и налоги оплачены заранее, никаких доплат при получении. Нет минимального веса — доставляем от <span className="bg-brand-yellow px-1.5 py-0.5 rounded text-brand-dark font-bold whitespace-nowrap">0.1 кг</span>.</>,
            introTitle: "Ваш единый логистический хаб в ОАЭ",
            introText: "Работаете ли вы в сфере e-commerce в Дубае, владеете бизнесом в Абу-Даби или заказываете товары для себя в Шардже — HappyBox обеспечит надежный сервис DDP во всех семи эмиратах. Мы также берем на себя реэкспорт в страны Персидского залива (GCC): Саудовскую Аравию, Катар, Кувейт, Бахрейн и Оман. Для вас это значит: цена, которую вы платите, уже включает фрахт, растаможку, импортные пошлины ОАЭ и НДС. Никаких скрытых платежей и внезапных счетов от Aramex или DHL при доставке.",
            methodsTitle: "Методы доставки и тарифы",
            methods: [
                {
                    icon: Plane,
                    title: "Авиафрахт",
                    tag: "Приоритетная доставка",
                    desc: "Электроника, мода, брендовые товары и срочное пополнение стока.",
                    price: "От $6/кг",
                    speed: "5–9 дней",
                    color: "bg-blue-50 text-brand-blue"
                },
                {
                    icon: Anchor,
                    title: "Морские перевозки",
                    tag: "Максимальная экономия",
                    desc: "Оптовые партии, мебель, тяжелые грузы и коммерческие запасы.",
                    price: "От $0.8/кг",
                    speed: "25–35 дней",
                    color: "bg-teal-50 text-teal-600"
                }
            ],
            whyTitle: "HappyBox: Ваш офис в Шэньчжэне",
            whyIntro: "Мы станем вашими глазами и ушами в Китае. Вам больше не нужно летать туда лично для контроля.",
            benefits: [
                {
                    icon: ShoppingBag,
                    title: "Экспертиза в брендовых товарах",
                    desc: "Мы специализируемся на доставке люксовых кроссовок и одежды с Poizon (Dewu). Оригинальные коробки упаковываются в дополнительный защитный слой — упаковка Nike, Yeezy или LV приедет в идеальном состоянии."
                },
                {
                    icon: Box,
                    title: "Консолидация заказов",
                    desc: "Покупайте у разных поставщиков на 1688, Taobao или Alibaba. Мы соберем всё на нашем складе в Шэньчжэне и отправим единым грузом: один счет, одна таможенная декларация."
                },
                {
                    icon: ShieldCheck,
                    title: "Строгий контроль качества",
                    desc: "Делаем фото и видео в высоком разрешении до того, как товар покинет Китай. Если есть брак — товар возвращается на завод, а не летит в Дубай."
                },
                {
                    icon: MapPin,
                    title: "Доставка «до двери» по всем Эмиратам",
                    desc: "От склада в Шэньчжэне до вашего адреса в Дубае, Абу-Даби, Шардже, Аджмане, Фуджейре или Рас-эль-Хайме через проверенных локальных партнеров."
                }
            ],
            fearsTitle: "Решаем главные проблемы импорта",
            fearsList: [
                { q: "Что если поставщик пришлет брак?", a: "Наш склад — ваш фильтр качества. Мы проверяем каждую посылку перед отправкой из Китая. Брак возвращается производителю немедленно." },
                { q: "Что если груз потеряют или повредят?", a: "Мы предоставляем страховку All-Risk. При утере или повреждении в пути вы получаете 100% возврат заявленной стоимости. Без мелкого шрифта." },
                { q: "Подходит ли сервис для малого бизнеса?", a: <>Да. Наши лимиты: от <span className="bg-brand-yellow px-1.5 py-0.5 rounded text-brand-dark font-bold whitespace-nowrap">0.1 кг</span> для авиа и от 1 куба для моря. Стартапы получают тот же уровень сервиса, что и крупные импортеры.</> },
                { q: "Как быть с задержками?", a: "Праздники в Китае и загруженность порта Джебель-Али предсказуемы. Мы заранее планируем график, чтобы ваш сток всегда был полон." }
            ],
            stepsTitle: "Доставка из Китая в ОАЭ за 4 шага",
            steps: [
                "Получите адрес склада в Шэньчжэне",
                "Сделайте заказ у поставщиков",
                "Мы проверяем, консолидируем и упаковываем",
                "Оплачивайте и отслеживайте доставку до двери"
            ],
            cta: "Узнать стоимость доставки",
            back: "На главную",
            crossPromo: [
                {
                    title: "Доставляете товары с Poizon (Dewu) в Дубай?",
                    desc: "Мы профи в работе с брендами: двойная упаковка, бережное обращение и быстрая авиадоставка в ОАЭ.",
                    link: "#", // will redirect appropriately 
                    action: "Подробнее →"
                },
                {
                    title: "Нужен реэкспорт в Саудовскую Аравию, Катар или Кувейт?",
                    desc: "Мы занимаемся отправкой из Дубая по всему региону. Спросите нас о кросс-бордер маршрутах в страны Залива.",
                    link: "#gcc",
                    action: "Подробнее →"
                }
            ]
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
                    <div className="grid md:grid-cols-2 gap-6 mb-20 max-w-4xl mx-auto">
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

                    {/* Why Choose Block (Your Local Office) */}
                    <div className="bg-brand-blue/5 rounded-[40px] p-8 lg:p-12 mb-20 border border-brand-blue/10">
                        <div className="text-center mb-10">
                            <h3 className="text-3xl font-black text-brand-dark mb-4">{t.whyTitle}</h3>
                            <p className="text-lg text-gray-600 max-w-3xl mx-auto font-medium leading-relaxed">{t.whyIntro}</p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {t.benefits.map((benefit, idx) => (
                                <div key={idx} className="bg-white p-6 md:p-8 rounded-[30px] shadow-sm border border-brand-blue/10 h-full">
                                    <div className="text-brand-blue mb-4">
                                        <benefit.icon size={28} />
                                    </div>
                                    <h4 className="font-bold text-brand-dark mb-3 text-lg leading-snug">{benefit.title}</h4>
                                    <p className="text-gray-600 leading-relaxed font-medium">{benefit.desc}</p>
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

                    <div className="grid md:grid-cols-2 gap-6 mt-12 mb-6 max-w-5xl mx-auto">
                        <a href={language === 'ru' ? '/ru/poizon' : '/poizon'} className="group flex flex-col items-start w-full bg-white border-2 border-gray-100 rounded-[30px] p-6 sm:p-8 transition-all shadow-sm hover:shadow-md hover:border-brand-blue/30 cursor-pointer">
                            <h4 className="text-xl sm:text-2xl font-black font-sans text-brand-dark mb-3 leading-tight">
                                {t.crossPromo[0].title}
                            </h4>
                            <p className="text-gray-500 text-sm sm:text-base font-medium leading-relaxed flex-grow mb-6">
                                {t.crossPromo[0].desc}
                            </p>
                            <span className="flex w-full items-center justify-center gap-2 bg-gray-50 text-brand-dark font-bold py-3 px-6 rounded-xl group-hover:bg-brand-blue group-hover:text-white transition-colors border border-gray-100">
                                {t.crossPromo[0].action}
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </span>
                        </a>

                        <a href="#gcc" onClick={(e) => { e.preventDefault(); document.getElementById('gcc')?.scrollIntoView({ behavior: 'smooth' }) }} className="group flex flex-col items-start w-full bg-white border-2 border-gray-100 rounded-[30px] p-6 sm:p-8 transition-all shadow-sm hover:shadow-md hover:border-brand-dark/30 cursor-pointer">
                            <h4 className="text-xl sm:text-2xl font-black font-sans text-brand-dark mb-3 leading-tight flex items-center gap-2">
                                <Globe className="text-brand-blue" />
                                {t.crossPromo[1].title}
                            </h4>
                            <p className="text-gray-500 text-sm sm:text-base font-medium leading-relaxed flex-grow mb-6">
                                {t.crossPromo[1].desc}
                            </p>
                            <span className="flex w-full items-center justify-center gap-2 bg-gray-50 text-brand-dark font-bold py-3 px-6 rounded-xl group-hover:bg-brand-dark group-hover:text-white transition-colors border border-gray-100">
                                {t.crossPromo[1].action}
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </span>
                        </a>
                    </div>

                </section>

                <UaeAdvancedLogisticsGuide language={language} />

                <div id="contacts">
                    <Contact language={language} currentPage="uae" />
                </div>
                
                <SeoBlock language={language} onNavigate={onNavigate || (() => {})} currentPage="uae" />
                <Footer language={language} />
                <FloatingContact />
            </main>
        </div>
    )
}


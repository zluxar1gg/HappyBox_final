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
}

export const CaShippingPage: React.FC<CaShippingPageProps> = ({ language, setLanguage, onBack }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const content = {
        en: {
            badge: "Canada Direct Line",
            titlePrefix: "Shipping from China to",
            titleHighlight: "Canada: Professional DDP",
            subtitle: <>Stop worrying about CBSA customs, GST/HST, and supplier mistakes. We deliver from our Shenzhen warehouse to any Canadian province — all duties and taxes paid upfront, zero charges on delivery. No minimum weight requirement — we ship from <span className="bg-brand-yellow px-1.5 py-0.5 rounded text-brand-dark font-bold whitespace-nowrap">0.1 kg</span>.</>,
            introTitle: "Seamless Logistics Across Canada",
            introText: "Whether you are shipping to Ontario, British Columbia, Quebec, Alberta, or any other province, HappyBox provides a streamlined DDP logistics experience. We cover the entire country — from the Port of Vancouver to the Atlantic coast. What this means for you: the price you pay includes all ocean/air freight, customs clearance, Canadian import duties, and GST/HST. No hidden fees, no surprise bills from the Canada Border Services Agency (CBSA).",
            methodsTitle: "Our Shipping Methods & Rates",
            methods: [
                {
                    icon: Plane,
                    title: "Air Freight",
                    tag: "Priority Delivery",
                    desc: "Electronics, fashion, and urgent inventory.",
                    price: "From $9/kg",
                    speed: "6–10 days",
                    color: "bg-blue-50 text-brand-blue"
                },
                {
                    icon: Anchor,
                    title: "Sea Freight",
                    tag: "Maximum Savings",
                    desc: "Bulk orders, furniture, and heavy commercial goods.",
                    price: "From $0.8/kg",
                    speed: "20–35 days",
                    color: "bg-teal-50 text-teal-600"
                }
            ],
            fbaTitle: "HappyBox: Your Local Office in Shenzhen",
            fbaText: "We act as your eyes and ears in China so you never need to fly there.",
            fbaItems: [
                { title: "Order Consolidation", desc: "Buy from multiple suppliers on 1688, Taobao, or Alibaba. We collect everything at our Shenzhen warehouse and ship as one consolidated cargo — one bill, one customs entry." },
                { title: "Strict Quality Inspection", desc: "We provide photos and videos before anything leaves China. If it's defective, it goes back to the factory — not on a plane to Toronto." },
                { title: "Total Customs Management (DDP)", desc: "We handle all CBSA paperwork and tax payments. You do not need a Canadian Import-Export Business Number (BN) to receive your goods cleared and ready." },
                { title: "Nationwide Door-to-Door Delivery", desc: "From our Shenzhen warehouse to any Canadian address via Canada Post, UPS, or FedEx." }
            ],
            fearsTitle: "Solving Your Biggest Importing Fears",
            fearsList: [
                { q: "What if my supplier sends defective goods?", a: "Our Shenzhen warehouse is your quality buffer. Every shipment is inspected with photos and videos before it leaves China. Defective items go back to the factory immediately." },
                { q: "What if the cargo is lost or damaged?", a: "We provide All-Risk cargo insurance. If your goods are lost or damaged in transit, you receive a 100% refund of the declared value. No fine print." },
                { q: "Am I too small for you?", a: <>Our minimums are accessible: from <span className="bg-brand-yellow px-1.5 py-0.5 rounded text-brand-dark font-bold whitespace-nowrap">0.1 kg</span> for Air and from 1 CBM for Sea. Private shoppers and established businesses get the same service level.</> },
                { q: "What about delays?", a: "Chinese New Year, Golden Week, and Canadian port congestion are predictable. We plan your shipment calendar around them so you never run out of stock." }
            ],
            stepsTitle: "From China to Canada in 4 Steps",
            steps: [
                "Get your Shenzhen warehouse address",
                "Order from your suppliers",
                "We inspect, consolidate, and pack",
                "Pay and track to your door"
            ],
            cta: "Get a Free Shipping Quote"
        },
        ru: {
            badge: "Прямая линия в Канаду",
            titlePrefix: "Доставка из Китая в",
            titleHighlight: "Канаду: профессиональный DDP",
            subtitle: <>Забудьте о сложностях с таможней CBSA, расчетом GST/HST и ошибках поставщиков. Мы доставляем грузы с нашего склада в Шэньчжэне в любую провинцию Канады: все пошлины и налоги оплачены заранее, никаких доплат при получении. Нет минимального веса — доставляем от <span className="bg-brand-yellow px-1.5 py-0.5 rounded text-brand-dark font-bold whitespace-nowrap">0.1 кг</span>.</>,
            introTitle: "Бесшовная логистика по всей Канаде",
            introText: "Онтарио, Британская Колумбия, Квебек или Альберта — HappyBox обеспечивает четкую доставку в любую точку страны, от порта Ванкувера до Атлантического побережья. Мы специализируемся на сервисе DDP (Delivered Duty Paid). Что это значит для вас: цена, которую вы платите, уже включает авиа или морской фрахт, растаможку, импортные пошлины, а также налоги GST/HST. Никаких скрытых комиссий и внезапных счетов от Пограничной службы Канады (CBSA).",
            methodsTitle: "Методы доставки и тарифы",
            methods: [
                {
                    icon: Plane,
                    title: "Авиафрахт",
                    tag: "Приоритетная доставка",
                    desc: "Для электроники, одежды и срочного пополнения стока.",
                    price: "От $9/кг",
                    speed: "6–10 дней",
                    color: "bg-blue-50 text-brand-blue"
                },
                {
                    icon: Anchor,
                    title: "Морские перевозки",
                    tag: "Максимальная экономия",
                    desc: "Для оптовых заказов, мебели и тяжелых коммерческих грузов.",
                    price: "От $0.8/кг",
                    speed: "20–35 дней",
                    color: "bg-teal-50 text-teal-600"
                }
            ],
            fbaTitle: "HappyBox: Ваш офис в Шэньчжэне",
            fbaText: "Мы — ваши глаза и уши в Китае. Вам больше не нужно лететь туда лично, чтобы всё проконтролировать.",
            fbaItems: [
                { title: "Консолидация заказов", desc: "Покупайте у разных поставщиков на 1688, Taobao или Alibaba. Мы соберем всё на нашем складе в Шэньчжэне и отправим единым грузом: один счет, одна таможенная декларация." },
                { title: "Строгий контроль качества", desc: "Мы проверяем товар (фото и видео) до того, как он покинет Китай. Если обнаружен брак — он возвращается на завод, а не летит к вам в Торонто." },
                { title: "Полное управление таможней (DDP)", desc: "Мы берем на себя оформление документов CBSA и уплату налогов. Вам не нужен канадский бизнес-номер (BN), чтобы получить очищенный и готовый к продаже товар." },
                { title: "Доставка «до двери» по всей стране", desc: "От нашего склада в Шэньчжэне до любого адреса в Канаде через Canada Post, UPS или FedEx." }
            ],
            fearsTitle: "Решаем главные проблемы импорта",
            fearsList: [
                { q: "Что если поставщик пришлет брак?", a: "Наш склад — ваш буфер качества. Мы проверяем каждую партию перед отправкой. Брак возвращается производителю немедленно." },
                { q: "Что если груз потеряют или повредят?", a: "Мы предоставляем страховку All-Risk. При утере или повреждении в пути вы получаете 100% возврат заявленной стоимости. Без мелкого шрифта." },
                { q: "Подходит ли сервис для малого бизнеса?", a: <>Да. Наши лимиты доступны всем: от <span className="bg-brand-yellow px-1.5 py-0.5 rounded text-brand-dark font-bold whitespace-nowrap">0.1 кг</span> для авиа и от 1 куба для моря. Частные покупатели и крупные компании получают сервис одного уровня.</> },
                { q: "Как быть с задержками?", a: "Праздники в Китае и заторы в канадских портах предсказуемы. Мы заранее планируем график ваших поставок, чтобы товар всегда был в наличии." }
            ],
            stepsTitle: "Доставка из Китая в Канаду за 4 шага",
            steps: [
                "Получите адрес склада в Шэньчжэне",
                "Сделайте заказ у поставщиков",
                "Мы проверяем, консолидируем и упаковываем",
                "Оплачивайте и отслеживайте доставку до двери"
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
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <h2 className="text-3xl font-black text-brand-dark mb-6">{t.introTitle}</h2>
                        <p className="text-lg text-gray-600 leading-relaxed font-medium">
                            {t.introText}
                        </p>
                    </div>

                    <h3 className="text-2xl font-black text-brand-dark mb-10 text-center uppercase tracking-widest opacity-80">
                        {t.methodsTitle}
                    </h3>

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

                    <a href={language === 'ru' ? '/ru/amazon' : '/amazon'} className="group flex flex-col sm:flex-row items-center justify-between w-full max-w-4xl mx-auto mt-12 mb-6 bg-white border-2 border-gray-100 rounded-[30px] p-6 sm:p-8 transition-all shadow-md hover:shadow-xl hover:border-orange-500/30 cursor-pointer">
                        <div className="flex-grow mb-6 sm:mb-0 text-center sm:text-left sm:pr-8">
                            <h4 className="text-2xl sm:text-3xl font-black font-sans text-brand-dark mb-2 leading-tight">
                                {language === 'ru' ? 'Работаете с ' : 'Shipping to '} 
                                <span className="text-[#FF9900] block sm:inline mt-1 sm:mt-0">Amazon FBA Canada</span>?
                            </h4>
                            <p className="text-gray-500 text-sm sm:text-base font-medium leading-relaxed">
                                {language === 'ru' ? 'Специальные тарифы, наклейка кодов FNSKU и прямая доставка в хабы FBA в Торонто, Ванкувере и Монреале.' : 'Specialized rates, FNSKU labeling, and direct delivery to FBA hubs in Toronto, Vancouver, and Montreal.'}
                            </p>
                        </div>
                        <div className="flex-shrink-0 w-full sm:w-auto">
                            <span className="flex w-full sm:w-auto items-center justify-center gap-2 bg-[#FF9900] text-white font-bold py-4 px-8 rounded-full group-hover:bg-[#e68a00] transition-colors shadow-sm sm:text-lg">
                                {language === 'ru' ? 'Подробнее' : 'Learn More'}
                                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </span>
                        </div>
                    </a>
                </section>

                <CaAdvancedLogisticsGuide language={language} />

                <div id="contacts">
                    <Contact language={language} currentPage="canada" />
                </div>
                
                <SeoBlock language={language} onNavigate={() => {}} /> 
                <Footer language={language} />
                <FloatingContact />
            </main>
        </div>
    )
}

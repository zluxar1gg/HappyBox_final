import React, { useEffect } from 'react';
import { Header } from './Header';
import { Contact } from './Contact';
import { Footer } from './Footer';
import { SeoBlock } from './SeoBlock';
import { Language } from '../utils/translations';
import { FloatingContact } from './FloatingContact';
import { P1688AdvancedGuide } from './P1688AdvancedGuide';
import { Search, CreditCard, ClipboardCheck, Package, Send, ShieldCheck, ArrowRight, Percent } from 'lucide-react';

interface P1688PageProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  onBack?: () => void;
  onNavigate?: (page: string) => void;
}

export const P1688Page: React.FC<P1688PageProps> = ({ language, setLanguage, onBack, onNavigate }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const content = {
        en: {
            badge: "Sourcing & Purchasing",
            titlePrefix: "1688 Sourcing Agent:",
            titleHighlight: "Wholesale & Bulk Purchasing from China",
            subtitle: <>Access true factory prices. We source, negotiate, purchase, and consolidate wholesale orders from 1688.com directly at our Shenzhen warehouse — no Chinese bank account, no language barrier, no middleman markup.</>,
            whyTitle: "Why 1688.com — Not Alibaba",
            whyText1: "Most international buyers default to Alibaba. That's exactly why Alibaba prices are higher — the platform is built for export, with margins baked in at every level. 1688.com is China's domestic wholesale marketplace where the same factories sell to Chinese businesses at real factory prices.",
            whyText2: "The difference is significant. The same product that costs $8 on Alibaba often costs $3–5 on 1688. The catch: the platform is entirely in Chinese, sellers only accept Chinese payment methods (Alipay, domestic bank transfer), and most only ship within Mainland China.",
            whyText3: "HappyBox bridges that gap. We act as your professional 1688 buying agent — handling the language, the payments, the quality checks, and the consolidation at our Shenzhen warehouse before your goods ship internationally.",
            processTitle: "How We Handle Your 1688 Order End-to-End",
            process: [
                {
                    icon: Search,
                    title: "Sourcing",
                    desc: "Send us links, photos, or a product description. We find the right factory, verify real stock availability, and confirm actual dimensions and weight before you pay.",
                },
                {
                    icon: CreditCard,
                    title: "Purchasing",
                    desc: "We pay suppliers using our local corporate accounts and Alipay. You transfer funds to us — no Chinese bank account or payment platform needed.",
                },
                {
                    icon: ClipboardCheck,
                    title: "Quality Inspection",
                    desc: "Goods arrive at our Shenzhen warehouse. We inspect for defects, verify quantities against your order, and send you photos before anything is packed for shipping.",
                },
                {
                    icon: Package,
                    title: "Storage & Consolidation",
                    desc: "1688 suppliers ship fast but separately. We hold all your orders at our warehouse for up to 30 days at no cost, then consolidate everything into one shipment — regardless of how many suppliers you ordered from.",
                },
                {
                    icon: Send,
                    title: "International Shipping",
                    desc: "Once consolidated and inspected, your cargo ships on DDP terms to your destination. See our shipping pages for rates and transit times by country.",
                }
            ],
            fearsTitle: "Solving Your Biggest 1688 Sourcing Fears",
            fearsList: [
                { q: "What if the supplier ships defective goods?", a: "We inspect everything at our Shenzhen warehouse before it goes international. Photos and videos sent to you for confirmation. Defective items go back to the factory — not across an ocean." },
                { q: "What if I don't know which supplier to choose?", a: "Send us a photo or description. Our team finds verified suppliers, compares prices across multiple factories, and recommends the most reliable option. Full hands-off sourcing available." },
                { q: "What if the stock listed isn't actually available?", a: "Stock numbers on 1688 are frequently inaccurate. We verify real availability with the supplier before you pay — not after." },
                { q: "What if I need to combine 1688 orders with other platforms?", a: "We consolidate 1688 wholesale orders with purchases from Taobao, Tmall, Poizon, and Pinduoduo into one shipment." }
            ],
            feeTitle: "Our Fee",
            feeText: "Purchasing commission: 0%. You pay exactly the manufacturer's price. We earn revenue exclusively on international shipping.",
            beyondTitle: "Beyond 1688: Other Chinese Platforms We Support",
            beyondPlatforms: [
                { name: "Taobao", desc: "single items and personal shopping", id: "taobao" },
                { name: "Tmall", desc: "official brand flagship stores", id: "tmall" },
                { name: "Poizon (Dewu)", desc: "authentic sneakers and streetwear", id: "poizon" },
                { name: "Pinduoduo", desc: "group buying and discount deals", id: "pinduoduo" }
            ],
            beyondFooter: "We consolidate orders from all platforms into one shipment.",
            cta: "Start Sourcing",
        },
        ru: {
            badge: "Сорсинг и Выкуп",
            titlePrefix: "Выкуп и сорсинг на 1688:",
            titleHighlight: "Опт из Китая",
            subtitle: <>Получите доступ к реальным заводским ценам. Мы находим товары, ведем переговоры, выкупаем и консолидируем ваши оптовые заказы с 1688.com на складе в Шэньчжэне. Вам не нужны китайский банковский счет, знание языка или переплаты посредникам.</>,
            whyTitle: "Почему 1688.com, а не Alibaba?",
            whyText1: "Большинство международных покупателей по привычке идут на Alibaba. Именно поэтому цены там выше: платформа создана для экспорта, и в стоимость каждого товара уже заложены наценки на всех уровнях. 1688.com — это внутренний оптовый маркетплейс Китая, где те же заводы продают товары китайским компаниям по «своим» ценам.",
            whyText2: "Разница колоссальна. Товар, который стоит $8 на Alibaba, на 1688 часто обходится в $3–5. Единственная сложность: платформа полностью на китайском, продавцы принимают только внутренние способы оплаты (Alipay, китайские карты) и отправляют товары только внутри страны.",
            whyText3: "HappyBox убирает эти барьеры. Мы выступаем вашим профессиональным агентом: берем на себя общение, оплату, проверку качества и консолидацию груза на нашем складе в Шэньчжэне перед отправкой в вашу страну.",
            processTitle: "Как мы работаем с вашим заказом «под ключ»",
            process: [
                {
                    icon: Search,
                    title: "Поиск (Sourcing)",
                    desc: "Пришлите нам ссылки, фото или описание. Мы найдем нужный завод, проверим наличие товара и уточним реальный вес и габариты до того, как вы оплатите заказ.",
                },
                {
                    icon: CreditCard,
                    title: "Выкуп",
                    desc: "Мы оплачиваем счета поставщиков через наши корпоративные счета и Alipay. Вы переводите деньги нам — вам не нужно регистрировать китайские кошельки.",
                },
                {
                    icon: ClipboardCheck,
                    title: "Инспекция качества",
                    desc: "Как только товар поступает на наш склад в Шэньчжэне, мы проверяем его на брак, сверяем количество и присылаем вам фотоотчет до финальной упаковки.",
                },
                {
                    icon: Package,
                    title: "Хранение и консолидация",
                    desc: "Поставщики с 1688 доставляют быстро, но каждый — своей посылкой. Мы бесплатно храним ваши заказы до 30 дней и объединяем их в одну общую партию, сколько бы поставщиков у вас ни было.",
                },
                {
                    icon: Send,
                    title: "Международная доставка",
                    desc: "После проверки и упаковки ваш груз отправляется на условиях DDP. Все тарифы и сроки указаны в соответствующих разделах по странам.",
                }
            ],
            fearsTitle: "Решаем главные страхи при работе с 1688",
            fearsList: [
                { q: "Что если пришлют брак?", a: "Мы проверяем всё в Шэньчжэне. Вы получаете фото и видео для подтверждения. Бракованный товар возвращается на завод в Китае, а не едет к вам через океан." },
                { q: "Я не знаю, какого поставщика выбрать.", a: "Просто пришлите фото. Наша команда найдет верифицированных производителей, сравнит цены на разных заводах и порекомендует самый надежный вариант." },
                { q: "А если товара нет в наличии?", a: "Цифры остатков на 1688 часто не соответствуют реальности. Мы уточняем фактическое наличие у продавца до того, как вы переведете деньги." },
                { q: "Можно ли объединить заказы с разных площадок?", a: "Да. Мы соберем в одну посылку опт с 1688, покупки с Taobao, Tmall, Poizon и Pinduoduo." }
            ],
            feeTitle: "Наша комиссия:",
            feeText: "Комиссия за выкуп — 0%. Вы платите ровно ту цену, которую установил завод-изготовитель на 1688.com. Мы зарабатываем исключительно на международной логистике.",
            beyondTitle: "Кроме 1688 мы работаем с:",
            beyondPlatforms: [
                { name: "Taobao", desc: "розница и личные покупки.", id: "taobao" },
                { name: "Tmall", desc: "официальные флагманские магазины брендов.", id: "tmall" },
                { name: "Poizon (Dewu)", desc: "оригинальные кроссовки и брендовая одежда.", id: "poizon" },
                { name: "Pinduoduo", desc: "низкие цены и групповые закупки.", id: "pinduoduo" }
            ],
            beyondFooter: "Мы собираем заказы со всех платформ в одну международную отправку.",
            cta: "Начать поиск товара",
        }
    };

    const t = content[language];

    const targetUrl = 'https://i.ibb.co/fRfBQNF/1688.webp';

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
                <section className="py-12 lg:py-24 bg-cream relative overflow-hidden">
                    <div className="container mx-auto px-6 xl:px-0 relative z-10">
                         <div className="max-w-5xl mx-auto text-center">
                                <span className="inline-flex items-center justify-center bg-brand-blue/10 text-brand-blue px-5 py-2.5 rounded-full text-sm font-bold uppercase tracking-wider mb-8">
                                    {t.badge}
                                </span>
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] text-brand-dark mb-8 tracking-tight">
                                    {t.titlePrefix} <span className="text-brand-blue block mt-2">{t.titleHighlight}</span>
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

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20 max-w-6xl mx-auto">
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
                    
                    <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8 mb-10">
                        <div className="w-24 h-24 bg-brand-yellow rounded-full flex items-center justify-center shrink-0">
                            <Percent size={40} className="text-brand-dark" />
                        </div>
                        <div>
                            <h3 className="text-xl md:text-2xl font-bold text-brand-dark mb-2">{t.feeTitle}</h3>
                            <p className="text-base md:text-lg text-gray-700 font-medium leading-relaxed">{t.feeText}</p>
                        </div>
                    </div>
                </section>

                <P1688AdvancedGuide language={language} onNavigate={onNavigate} />

                <div id="contacts">
                    <Contact language={language} currentPage="1688" />
                </div>
                
                <SeoBlock language={language} onNavigate={onNavigate} currentPage="1688" /> 
                <Footer language={language} />
                <FloatingContact />
            </main>
        </div>
    )
}

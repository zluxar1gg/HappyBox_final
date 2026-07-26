import React, { useEffect } from 'react';
import { Header } from './Header';
import { Contact } from './Contact';
import { Footer } from './Footer';
import { SeoBlock } from './SeoBlock';
import { Language } from '../utils/translations';
import { FloatingContact } from './FloatingContact';
import { TaobaoAdvancedGuide } from './TaobaoAdvancedGuide';
import { Search, ShoppingCart, ClipboardCheck, Package, Send, ShieldCheck, CheckCircle2, BadgePercent } from 'lucide-react';

interface TaobaoPageProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  onBack?: () => void;
  onNavigate?: (page: string) => void;
}

export const TaobaoPage: React.FC<TaobaoPageProps> = ({ language, setLanguage, onBack, onNavigate }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const content = {
        en: {
            badge: "0% Service Fee / Commission",
            titlePrefix: "Taobao Agent",
            titleHighlight: "",
            subtitle: <>Shop on Taobao, 1688, or Tmall like a local. We handle the purchasing, inspection, and international shipping so you can enjoy the best prices from China without language barriers, blocked accounts, or overpriced shipping. HappyBox buys, inspects, consolidates, and ships your orders worldwide — hassle-free.</>,
            whyTitle: "Expert Advice for Taobao",
            whyText1: "Tmall (Red Icon): When searching on Taobao and you see a red icon — it's Tmall. It features official brands and authorized dealers with near-zero defect risk. Regular Taobao is cheaper but some brands may not be original.",
            whyText2: "Live Photos: Always look for the camera icon in reviews to see live photos instead of studio renders. Seller History: Prioritize sellers active for 5–10 years — they value their reputation and platform history.",
            whyText3: "Consolidation: Use our warehouse for consolidation. Buy small items from 10 different stores and we will pack them into one box to save you up to 60% on shipping.",
            processTitle: "How It Works: 4 Simple Steps",
            process: [
                {
                    icon: Search,
                    title: "1 — Find Your Items",
                    desc: "Browse Taobao.com or the app. Copy the links of products you want.",
                },
                {
                    icon: ShoppingCart,
                    title: "2 — Submit Order",
                    desc: "Send us the links. We verify price and availability.",
                },
                {
                    icon: ClipboardCheck,
                    title: "3 — We Buy & Inspect",
                    desc: "We purchase the items and perform a free quality check. If the item arrives broken or wrong — we return it.",
                },
                {
                    icon: Package,
                    title: "4 — Consolidate & Ship",
                    desc: "We store for free, combine into one package, and ship worldwide with premium repacking.",
                }
            ],
            fearsTitle: "Solving Your Biggest Taobao Shopping Fears",
            fearsList: [
                { q: "What if I can't pay or register on Taobao?", a: "You don't need a Chinese phone number, Alipay account, or local bank card. We purchase on your behalf using our own Chinese corporate accounts. You transfer funds to us in USD or your local currency — we handle the rest." },
                { q: "What if the seller sends the wrong item or poor quality?", a: "We conduct a free Quality Control inspection at our Shenzhen warehouse before anything ships internationally. Photos sent to you for confirmation. Wrong items and defective goods go back to the seller — not on a plane to your door." },
                { q: "What if I want to order from multiple sellers?", a: "We consolidate orders from multiple Taobao sellers — and from 1688, Tmall, Weidian, and Poizon — into one international shipment. One customs entry, one freight bill, up to 60% saved on shipping compared to sending each order separately." },
                { q: "What if I can't find what I'm looking for?", a: "Send us a photo or description. Our team searches Taobao and connected platforms to find the best match from sellers we actually trust." }
            ],
            benefitsTitle: "Key Benefits",
            benefits: [
                { title: "No Chinese Phone Number Required", text: "You don't need to deal with Taobao's complex registration or blocked accounts." },
                { title: "Free Quality Check (QC)", text: "We are your eyes in China. We check for defects, wrong sizes, or incorrect colors before the item leaves the country." },
                { title: "Free Consolidation & Storage", text: "Shop from different sellers over several days. We store your items for free and pack them into one box to save you up to 60% on shipping." },
                { title: "Expert Repacking", text: "International shipping can be rough. We use high-quality materials to ensure your items arrive in perfect condition." },
                { title: "Flexible Payment Options", text: "Pay via Bank Transfer, WeChat Pay, Alipay, or Crypto — safely and easily." },
                { title: "Transparent Tracking", text: "Watch your parcel's journey from China to your door. We provide a reliable tracking number so you always know where your goods are." }
            ],
            feeTitle: "Let Us Do the Searching",
            feeText: "Struggling to find that perfect item on Taobao? Don't waste your time scrolling through endless listings. Send us a photo or a quick description and our experts will track down the best quality from sellers we actually trust.",
            cta: "Start Shopping on Taobao"
        },
        ru: {
            badge: "0% Комиссия за выкуп",
            titlePrefix: "Посредник Taobao",
            titleHighlight: "",
            subtitle: <>Покупайте на Taobao, 1688 и Tmall как местный житель. Мы берем на себя выкуп, проверку и международную доставку, чтобы вы могли получать лучшие цены из Китая без языкового барьера, блокировок аккаунтов или переплат за доставку. HappyBox выкупает, проверяет, консолидирует и доставляет ваши заказы по всему миру без лишних хлопот.</>,
            whyTitle: "Советы экспертов по Taobao",
            whyText1: "Tmall (Красная иконка): Если при поиске на Taobao вы видите красную иконку — это Tmall. Здесь представлены официальные бренды и авторизованные дилеры с практически нулевым риском брака. Обычный Taobao дешевле, но некоторые бренды могут быть неоригинальными.",
            whyText2: "Живые фото и история продавца: Всегда ищите иконку камеры в отзывах, чтобы увидеть живые фото вместо студийных. Отдавайте предпочтение продавцам, работающим от 5 до 10 лет — они дорожат своей репутацией и историей на платформе.",
            whyText3: "Консолидация: Используйте наш склад для объединения посылок. Купите мелкие товары в 10 разных магазинах, и мы упакуем их в одну коробку, чтобы вы сэкономили до 60% на доставке.",
            processTitle: "Как это работает: 4 простых шага",
            process: [
                {
                    icon: Search,
                    title: "1 — Найдите товары",
                    desc: "Ищите на сайте Taobao.com или в приложении. Скопируйте ссылки на нужные товары.",
                },
                {
                    icon: ShoppingCart,
                    title: "2 — Оформите заказ",
                    desc: "Пришлите нам ссылки. Мы проверим цену и наличие.",
                },
                {
                    icon: ClipboardCheck,
                    title: "3 — Выкуп и проверка",
                    desc: "Мы выкупаем товары и проводим бесплатную проверку качества. Если товар пришел с браком — мы вернем его.",
                },
                {
                    icon: Package,
                    title: "4 — Консолидация и доставка",
                    desc: "Бесплатное хранение, объединение в одну посылку и международная доставка в надежной упаковке.",
                }
            ],
            fearsTitle: "Решаем ваши главные страхи при покупках на Taobao",
            fearsList: [
                { q: "Что если я не могу оплатить или зарегистрироваться на Taobao?", a: "Вам не нужен китайский номер телефона, Alipay или местная банковская карта. Мы выкупаем товары через наши китайские корпоративные счета. Вы просто переводите нам средства в удобной валюте — остальное мы берем на себя." },
                { q: "Что если продавец пришлет не тот товар или брак?", a: "Мы проводим бесплатную проверку качества (QC) на нашем складе в Шэньчжэне перед международной отправкой. Вы получаете фото для подтверждения. Бракованные или неверные товары возвращаются продавцу, а не летят к вам." },
                { q: "Что если я хочу заказать у разных продавцов?", a: "Мы консолидируем заказы от нескольких продавцов Taobao, а также с 1688, Tmall, Weidian и Poizon в одну международную посылку. Одна таможенная декларация, один счет за доставку — экономия до 60% по сравнению с отправкой каждого заказа отдельно." },
                { q: "Что если я не могу найти нужный товар?", a: "Пришлите нам фото или описание. Наша команда найдет лучший вариант на Taobao и других платформах у продавцов, которым мы действительно доверяем." }
            ],
            benefitsTitle: "Ключевые преимущества",
            benefits: [
                { title: "Не нужен китайский номер", text: "Вам не придется сталкиваться со сложной регистрацией на Taobao или блокировкой аккаунтов." },
                { title: "Бесплатная проверка (QC)", text: "Мы ваши глаза в Китае. Мы проверяем товары на дефекты, неправильные размеры или цвета до отправки из страны." },
                { title: "Бесплатная консолидация", text: "Покупайте у разных продавцов несколько дней. Мы бесплатно храним ваши товары и упаковываем их в одну коробку, экономя до 60% на доставке." },
                { title: "Надежная упаковка", text: "Международная доставка может быть суровой. Мы используем качественные материалы, чтобы ваши вещи доехали в идеальном состоянии." },
                { title: "Гибкая оплата", text: "Оплачивайте банковским переводом, картами (включая рублевые), криптой, WeChat или Alipay — безопасно и удобно." },
                { title: "Прозрачное отслеживание", text: "Следите за посылкой от Китая до вашей двери. Мы предоставляем надежный трек-номер, чтобы вы всегда знали, где ваш груз." }
            ],
            feeTitle: "Поиск товаров под ключ",
            feeText: "Не можете найти идеальный товар на Taobao? Не тратьте время на пролистывание бесконечных страниц. Пришлите нам фото или краткое описание, и наши эксперты найдут лучшее качество у продавцов, которым мы действительно доверяем.",
            cta: "Начать покупки на Taobao"
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
                <section className="py-12 lg:py-24 bg-cream relative overflow-hidden">
                    <div className="container mx-auto px-6 xl:px-0 relative z-10">
                         <div className="max-w-5xl mx-auto text-center">
                                <span className="inline-flex items-center justify-center bg-brand-blue/10 text-brand-blue px-5 py-2.5 rounded-full text-sm font-bold uppercase tracking-wider mb-8">
                                    <BadgePercent size={18} className="mr-2" />
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

                    <h3 className="text-2xl md:text-3xl font-extrabold text-brand-dark mb-12 text-center uppercase tracking-widest opacity-80">
                        {t.processTitle}
                    </h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20 max-w-7xl mx-auto">
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

                    <div className="max-w-5xl mx-auto text-gray-800 leading-relaxed mb-20 bg-gray-50 rounded-[30px] p-8 md:p-12 border border-gray-100">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark mb-8 tracking-tight">{t.whyTitle}</h2>
                        <div className="space-y-6 text-base md:text-lg text-gray-700 font-medium leading-relaxed">
                            <p className="flex items-start gap-3">
                                <CheckCircle2 className="text-brand-blue shrink-0 mt-1" size={24} />
                                <span>{t.whyText1}</span>
                            </p>
                            <p className="flex items-start gap-3">
                                <CheckCircle2 className="text-brand-blue shrink-0 mt-1" size={24} />
                                <span>{t.whyText2}</span>
                            </p>
                            <p className="flex items-start gap-3">
                                <CheckCircle2 className="text-brand-blue shrink-0 mt-1" size={24} />
                                <span><strong className="text-brand-dark font-bold">Консолидация:</strong> {t.whyText3.replace('Консолидация: ', '').replace('Consolidation: ', '')}</span>
                            </p>
                        </div>
                    </div>
                    
                    <div className="mb-20 max-w-6xl mx-auto">
                        <h3 className="text-2xl md:text-3xl font-extrabold text-brand-dark mb-12 text-center uppercase tracking-widest opacity-80">
                            {t.benefitsTitle}
                        </h3>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {t.benefits.map((benefit, idx) => (
                                <div key={idx} className="bg-white rounded-[24px] p-8 border border-gray-100 shadow-sm">
                                    <h4 className="font-bold text-xl text-brand-dark mb-3">{benefit.title}</h4>
                                    <p className="text-gray-700 font-medium leading-relaxed">
                                        {benefit.text}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
                        <div className="w-24 h-24 bg-brand-yellow rounded-full flex items-center justify-center shrink-0">
                            <Search size={40} className="text-brand-dark" />
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

                <TaobaoAdvancedGuide language={language} onNavigate={onNavigate} />

                <div id="contacts">
                    <Contact language={language} currentPage="taobao" />
                </div>
                
                <SeoBlock language={language} onNavigate={onNavigate} currentPage="taobao" /> 
                <Footer language={language} />
                <FloatingContact />
            </main>
        </div>
    )
}

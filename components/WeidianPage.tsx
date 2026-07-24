import React, { useEffect } from 'react';
import { Header } from './Header';
import { Contact } from './Contact';
import { Footer } from './Footer';
import { SeoBlock } from './SeoBlock';
import { Language } from '../utils/translations';
import { FloatingContact } from './FloatingContact';
import { WeidianAdvancedGuide } from './WeidianAdvancedGuide';
import { Search, CreditCard, ClipboardCheck, Package, Send, ShieldCheck, ArrowRight, Percent } from 'lucide-react';

interface WeidianPageProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  onBack?: () => void;
  onNavigate?: (page: string) => void;
}

export const WeidianPage: React.FC<WeidianPageProps> = ({ language, setLanguage, onBack, onNavigate }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const content = {
        en: {
            badge: "Exclusive Streetwear & Indie Brands",
            titlePrefix: "Weidian Agent:",
            titleHighlight: "Niche Fashion & Limited Drops from China",
            subtitle: <>Discover unique items from independent designers and exclusive streetwear sellers. Weidian is the go-to platform for niche fashion, limited drops, and high-quality replicas that you can't find on Taobao.</>,
            whyTitle: "Why Shop on Weidian?",
            whyText1: "Weidian is a mobile-first platform popular with independent sellers and streetwear enthusiasts. Many exclusive items and high-tier replicas are only available here.",
            whyText2: "However, the app is purely in Chinese and sellers rarely deal with international buyers.",
            whyText3: "HappyBox gives you full access to this exclusive market. We handle the payment via WeChat Pay or Alipay, verify the seller's reputation, and conduct a full QC inspection before shipping internationally.",
            processTitle: "How We Handle Your Weidian Order",
            process: [
                {
                    icon: Search,
                    title: "Browse & Send Link",
                    desc: "Use the Weidian app or mobile links to find products. Share the product link with us, and we will verify the seller's reputation.",
                },
                {
                    icon: CreditCard,
                    title: "Payment",
                    desc: "We handle the payment via WeChat Pay or Alipay using Chinese payment methods. No international payment workarounds needed on your end.",
                },
                {
                    icon: ClipboardCheck,
                    title: "QC & Consolidation",
                    desc: "We receive the item, inspect quality, and consolidate it with your other purchases. You review detailed QC photos before anything ships internationally.",
                }
            ],
            fearsTitle: "Solving Your Biggest Weidian Shopping Fears",
            fearsList: [
                { q: "What if the item doesn't match the listing photos?", a: "We conduct a full Quality Control inspection at our Shenzhen warehouse. You receive detailed photos of the actual item. If something looks wrong, we contact the seller before it's too late." },
                { q: "What if the seller has a bad reputation?", a: "We verify every seller before purchasing. Low-reputation sellers, inactive stores, and listings with red flags get flagged before you spend a cent." },
                { q: "What if I want to order from multiple sellers?", a: "We consolidate orders from multiple Weidian sellers — and from other platforms like Taobao, 1688, and Poizon — into one international shipment." },
                { q: "What if I can't find what I'm looking for?", a: "Send us a photo or description. Our team searches Weidian and connected platforms to find the closest match available." }
            ],
            feeTitle: "Our Fee",
            feeText: "Purchasing commission: 2% of the order amount. No hidden fees, no markup on shipping.",
            cta: "Start Shopping on Weidian"
        },
        ru: {
            badge: "Эксклюзивный стритвир и инди-бренды",
            titlePrefix: "Посредник Weidian:",
            titleHighlight: "Уникальная мода и лимитированные дропы",
            subtitle: <>Откройте для себя уникальные вещи от независимых дизайнеров и эксклюзивных продавцов уличной моды. Weidian — лучшая платформа для нишевой моды, лимитированных коллекций и качественных реплик, которых не найти на Taobao.</>,
            whyTitle: "Почему стоит покупать на Weidian?",
            whyText1: "Weidian — это мобильная платформа, популярная среди независимых продавцов и энтузиастов уличной моды. Многие эксклюзивные вещи и высококлассные реплики доступны только здесь.",
            whyText2: "Однако приложение полностью на китайском языке, и продавцы редко работают с иностранными покупателями.",
            whyText3: "HappyBox открывает вам полный доступ к этому закрытому рынку. Мы оплачиваем заказы через WeChat Pay или Alipay, проверяем репутацию продавца и проводим полную проверку качества (QC) перед международной отправкой.",
            processTitle: "Как мы выкупаем ваши заказы с Weidian",
            process: [
                {
                    icon: Search,
                    title: "Поиск и ссылки",
                    desc: "Найдите товары в приложении Weidian и пришлите нам ссылки. Мы проверим репутацию продавца перед заказом.",
                },
                {
                    icon: CreditCard,
                    title: "Оплата",
                    desc: "Мы производим оплату продавцу через WeChat Pay или Alipay. Вам не нужно заводить китайский счет или кошелек.",
                },
                {
                    icon: ClipboardCheck,
                    title: "Проверка (QC) и консолидация",
                    desc: "Мы получаем товар в Шэньчжэне, проверяем его качество и присылаем вам фото. Мы объединяем заказы от разных продавцов в одну посылку.",
                }
            ],
            fearsTitle: "Решаем ваши главные опасения при покупках на Weidian",
            fearsList: [
                { q: "Что если товар не совпадает с фото продавца?", a: "Мы проводим полную проверку качества (QC) на нашем складе в Шэньчжэне. Вы получаете детальные фото реального товара. Если что-то не так, мы оформляем возврат." },
                { q: "Что если у продавца плохая репутация?", a: "Мы проверяем каждого продавца перед выкупом. Магазины с низким рейтингом, неактивные продавцы и подозрительные товары сразу блокируются." },
                { q: "Можно ли заказать у разных продавцов?", a: "Да! Мы консолидируем ваши заказы от разных продавцов Weidian, а также покупки с Taobao, 1688 и Poizon в одну международную отправку." },
                { q: "Что если я не могу найти нужный товар?", a: "Пришлите нам фото или описание. Наша команда найдет нужную вещь или ближайший аналог на Weidian и других платформах." }
            ],
            feeTitle: "Наша комиссия:",
            feeText: "Комиссия за выкуп: 2% от суммы заказа. Без скрытых сборов и наценок на логистику.",
            cta: "Начать покупки на Weidian"
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

                <WeidianAdvancedGuide language={language} onNavigate={onNavigate} />

                <div id="contacts">
                    <Contact language={language} currentPage="weidian" />
                </div>
                
                <SeoBlock language={language} onNavigate={onNavigate} currentPage="weidian" /> 
                <Footer language={language} />
                <FloatingContact />
            </main>
        </div>
    )
}

import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { Contact } from './Contact';
import { SeoBlock } from './SeoBlock';
import { FloatingContact } from './FloatingContact';
import { ShieldCheck, Box, Percent, Send, CheckCircle2, Search, Video, BadgeCheck } from 'lucide-react';
import { XianyuAdvancedGuide } from './XianyuAdvancedGuide';

export const XianyuPage = ({ language, setLanguage, onBack, onNavigate }: { language: 'en' | 'ru', setLanguage: (lang: 'en' | 'ru') => void, onBack: () => void, onNavigate: (page: string) => void }) => {
    const content = {
        en: {
            badge: "XIANYU (IDLE FISH) AGENT",
            titlePrefix: "Xianyu Agent:",
            titleHighlight: "Buy Second-Hand & Vintage",
            subtitle: "Access China's largest second-hand marketplace. We negotiate, inspect, and ship unique finds from Xianyu (Idle Fish) — vintage luxury, rare sneakers, used tech, and collectibles at a fraction of retail price.",
            whyTitle: "Why Xianyu — and Why You Need an Agent",
            whyText1: "Xianyu (闲鱼, Idle Fish) is Alibaba's peer-to-peer marketplace — China's equivalent of eBay or Depop, but with 500 million registered users and a vastly deeper inventory of secondhand goods. Vintage designer pieces, rare sneakers, limited collectibles, and lightly used electronics change hands here daily at prices that don't exist anywhere else.\n\nThe problem: every seller is a private individual. No English, no international shipping, no buyer protection comparable to mainstream platforms. Buying used goods without a physical inspection is a significant financial risk.",
            whyText2: "HappyBox acts as your Xianyu agent. We negotiate the price, verify the seller's trustworthiness, inspect the item physically at our Shenzhen warehouse, and ship internationally on DDP terms.",
            processTitle: "How It Works (5 Steps)",
            process: [
                { icon: Search, title: "1 — Find Your Item", desc: "Browse the Xianyu app for unique finds. Copy the product link." },
                { icon: BadgeCheck, title: "2 — We Verify and Negotiate", desc: "Send us the link. We check the seller's Sesame Credit rating and negotiate the price — typically 10–20% below the listed price." },
                { icon: Video, title: "3 — Video Inspection", desc: "For higher-value items, we request a live video from the seller showing the item's current condition before purchasing. If it doesn't match the listing, we don't buy." },
                { icon: ShieldCheck, title: "4 — Warehouse QC", desc: "When the item arrives at our Shenzhen warehouse, we conduct a detailed physical inspection and send you a full photo report — including close-ups of any wear, damage, or condition details." },
                { icon: Send, title: "5 — International Shipping", desc: "We ship to your destination on DDP terms — all duties and taxes included in your quote." }
            ],
            expertTitle: "Solving Your Biggest Xianyu Shopping Fears",
            expertList: [
                { title: "What if the item is not as described?", desc: "We request a video from the seller before purchasing for any significant item. When the item arrives at our warehouse, we inspect against the listing description and send you detailed photos. If there's a major discrepancy, we raise a dispute with the seller immediately — while the item is still in China." },
                { title: "What if the seller is untrustworthy?", desc: "We check Sesame Credit before every purchase. Sesame Credit is Alibaba's financial trust score — sellers with Excellent rating have a verified track record on the platform. Low-rated sellers are declined." },
                { title: "What if I overpay?", desc: "Bargaining is standard practice on Xianyu. We negotiate in Chinese on your behalf — typically achieving 10–20% below the listed price. Private sellers expect to negotiate; most international buyers don't know this." },
                { title: "What if the seller won't accept returns?", desc: "Most Xianyu sellers do not accept returns — this is standard for private secondhand sales. Our pre-purchase video verification and warehouse inspection are your protection. We flag condition issues before you commit, not after." }
            ],
            benefitsTitle: "Key Benefits",
            benefitsList: [
                { title: "Negotiation Service", desc: "We communicate with sellers in Chinese to secure the best possible price — typically 10–20% below listing." },
                { title: "Seller Verification", desc: "We check Sesame Credit rating and transaction history before every purchase. Low-trust sellers are declined." },
                { title: "Detailed Condition Report", desc: "Used items get extra-detailed photo documentation — every scratch, mark, and sign of wear photographed before shipping." },
                { title: "Video Pre-Purchase Check", desc: "For valuable items, we request a live seller video before buying. What you see is what you get." },
                { title: "DDP Shipping", desc: "All duties and taxes paid upfront. One all-inclusive price to your door." }
            ],
            feeTitle: "Our Fee",
            feeText: "Purchasing and negotiation commission: 3% of the order amount.",
            cta: "Start Shopping on Xianyu"
        },
        ru: {
            badge: "АГЕНТ XIANYU (IDLE FISH)",
            titlePrefix: "Агент Xianyu:",
            titleHighlight: "Покупка б/у и винтажных вещей",
            subtitle: "Доступ к крупнейшему в Китае рынку подержанных вещей. Мы ведем переговоры, проверяем и отправляем уникальные находки с Xianyu (Idle Fish) — винтажный люкс, редкие кроссовки, б/у технику и коллекционные предметы по ценам в разы ниже розничных.",
            whyTitle: "Почему Xianyu — и зачем вам нужен агент",
            whyText1: "Xianyu (闲鱼, Idle Fish) — это peer-to-peer маркетплейс от Alibaba — китайский аналог eBay или Avito, но с 500 миллионами зарегистрированных пользователей и гораздо более глубоким ассортиментом подержанных товаров. Винтажные дизайнерские вещи, редкие кроссовки, лимитированные предметы коллекционирования и слегка подержанная электроника переходят из рук в руки здесь каждый день по ценам, которых нет больше нигде.\n\nПроблема: каждый продавец — частное лицо. Нет английского языка, нет международной доставки, нет защиты покупателя, сравнимой с основными платформами. Покупка б/у товаров без физической проверки — это значительный финансовый риск.",
            whyText2: "HappyBox выступает в роли вашего агента на Xianyu. Мы ведем переговоры о цене, проверяем благонадежность продавца, физически осматриваем товар на нашем складе в Шэньчжэне и отправляем по всему миру на условиях DDP.",
            processTitle: "Как это работает (5 шагов)",
            process: [
                { icon: Search, title: "1 — Найти товар", desc: "Ищите в приложении Xianyu уникальные находки. Скопируйте ссылку на товар." },
                { icon: BadgeCheck, title: "2 — Мы проверяем и торгуемся", desc: "Пришлите нам ссылку. Мы проверяем рейтинг Sesame Credit продавца и договариваемся о цене — обычно на 10-20% ниже заявленной." },
                { icon: Video, title: "3 — Видеопроверка", desc: "Для дорогих товаров мы просим у продавца видео в реальном времени, показывающее текущее состояние товара перед покупкой. Если оно не соответствует объявлению, мы не покупаем." },
                { icon: ShieldCheck, title: "4 — QC на складе", desc: "Когда товар прибывает на наш склад в Шэньчжэне, мы проводим тщательный физический осмотр и отправляем вам полный фотоотчет — включая крупные планы любых следов износа, повреждений или деталей состояния." },
                { icon: Send, title: "5 — Международная доставка", desc: "Мы отправляем до вашей двери на условиях DDP — все пошлины и налоги включены в стоимость." }
            ],
            expertTitle: "Решение ваших главных страхов при покупке на Xianyu",
            expertList: [
                { title: "Что делать, если товар не соответствует описанию?", desc: "Для любой значимой вещи мы запрашиваем видео у продавца перед покупкой. Когда товар поступает на склад, мы проверяем его на соответствие описанию и отправляем детальные фото. При серьезном несоответствии мы сразу открываем спор с продавцом — пока товар еще в Китае." },
                { title: "Что, если продавец ненадежен?", desc: "Мы проверяем Sesame Credit перед каждой покупкой. Это финансовый рейтинг доверия от Alibaba — продавцы с оценкой 'Отлично' имеют подтвержденную историю на платформе. Продавцам с низким рейтингом мы отказываем." },
                { title: "Что, если я переплачу?", desc: "Торг — стандартная практика на Xianyu. Мы торгуемся на китайском от вашего имени — обычно снижая цену на 10-20%. Частные продавцы ожидают торга; большинство международных покупателей этого не знают." },
                { title: "Что, если продавец не принимает возвраты?", desc: "Большинство продавцов на Xianyu не принимают возвраты — это норма для частных б/у продаж. Наша видеопроверка перед покупкой и осмотр на складе — ваша защита. Мы выявляем проблемы с состоянием до того, как вы совершите покупку, а не после." }
            ],
            benefitsTitle: "Ключевые преимущества",
            benefitsList: [
                { title: "Услуги переговорщика", desc: "Мы общаемся с продавцами на китайском языке, чтобы получить лучшую цену — обычно на 10-20% ниже заявленной." },
                { title: "Проверка продавца", desc: "Мы проверяем рейтинг Sesame Credit и историю транзакций перед каждой покупкой. Неблагонадежные продавцы отсеиваются." },
                { title: "Детальный отчет о состоянии", desc: "Б/у товары получают сверхподробную фотодокументацию — каждая царапина, потертость и след износа фотографируются перед отправкой." },
                { title: "Видеопроверка перед выкупом", desc: "Для ценных вещей мы запрашиваем живое видео от продавца перед покупкой. Вы получаете то, что видите." },
                { title: "Доставка DDP", desc: "Все пошлины и налоги оплачены авансом. Единая цена «всё включено» до вашей двери." }
            ],
            feeTitle: "Наша комиссия",
            feeText: "Комиссия за выкуп и переговоры: 3% от суммы заказа.",
            cta: "Начать покупки на Xianyu"
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
                onNavigate={onNavigate}
            />
            
            <main>
                <section className="py-12 lg:py-24 bg-cream relative overflow-hidden">
                    <div className="container mx-auto px-6 xl:px-0 relative z-10"> 
                         <div className="max-w-5xl mx-auto text-center">
                                <span className="inline-flex items-center justify-center bg-[#FFE600]/20 text-[#D4B300] px-5 py-2.5 rounded-full text-sm font-bold uppercase tracking-wider mb-8 border border-[#FFE600]/50">
                                    {t.badge}
                                </span>
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] text-brand-dark mb-8 tracking-tight">
                                    {t.titlePrefix} {t.titleHighlight && <span className="text-[#D4B300] block mt-2">{t.titleHighlight}</span>}
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
                            <p className="whitespace-pre-line">{t.whyText1}</p>
                            <p className="whitespace-pre-line font-bold text-brand-dark text-xl mt-8">{t.whyText2}</p>
                        </div>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-extrabold text-brand-dark mb-12 text-center uppercase tracking-widest opacity-80">
                        {t.processTitle}
                    </h3>
                    
                    <div className="grid md:grid-cols-3 gap-6 mb-20 max-w-6xl mx-auto">
                        {t.process.map((step, idx) => (
                            <div key={idx} className={`bg-white rounded-[30px] p-8 border-2 border-gray-50 hover:border-[#FFE600]/30 transition-all shadow-sm flex flex-col group relative overflow-hidden ${idx >= 3 ? 'md:col-span-1.5' : ''}`}>
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFE600]/5 rounded-bl-[100px] -z-10 group-hover:scale-110 transition-transform"></div>
                                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-brand-dark text-white shadow-xl shadow-brand-dark/20 text-2xl font-extrabold relative">
                                    {idx + 1}
                                    <div className="absolute -bottom-2 -right-2 bg-[#FFE600] text-brand-dark w-8 h-8 rounded-full flex items-center justify-center shadow-md">
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

                    <div className="mb-20">
                        <h3 className="text-2xl md:text-3xl font-extrabold text-brand-dark mb-10 text-center">{t.expertTitle}</h3>
                        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
                            {t.expertList.map((tip, idx) => (
                                <div key={idx} className="bg-[#FFE600]/5 p-6 rounded-2xl border border-[#FFE600]/20">
                                    <h4 className="font-bold text-lg text-[#D4B300] mb-2">{tip.title}</h4>
                                    <p className="text-gray-700 font-medium">{tip.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mb-20">
                        <h3 className="text-2xl md:text-3xl font-extrabold text-brand-dark mb-10 text-center">{t.benefitsTitle}</h3>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                            {t.benefitsList.map((benefit, idx) => (
                                <div key={idx} className="p-6 rounded-2xl bg-gray-50 border border-gray-100">
                                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#D4B300] mb-4 shadow-sm border border-gray-100">
                                        <CheckCircle2 size={20} />
                                    </div>
                                    <h4 className="font-bold text-lg text-brand-dark mb-2">{benefit.title}</h4>
                                    <p className="text-gray-600">{benefit.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
                        <div className="w-24 h-24 bg-[#FFE600] text-brand-dark rounded-full flex items-center justify-center shrink-0 shadow-md border-4 border-white">
                            <Percent size={40} />
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
                            className="bg-brand-dark text-white px-10 py-5 rounded-2xl font-black text-xl hover:bg-[#D4B300] transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 active:scale-[0.98] inline-flex items-center gap-3"
                        >
                            <Send size={24} />
                            {t.cta}
                        </button>
                    </div>
                </section>

                <XianyuAdvancedGuide language={language} onNavigate={onNavigate} />

                <div id="contacts">
                    <Contact language={language} currentPage="xianyu" />
                </div>
                
                <SeoBlock language={language} onNavigate={onNavigate} currentPage="xianyu" /> 
                <Footer language={language} />
                <FloatingContact />
            </main>
        </div>
    )
}

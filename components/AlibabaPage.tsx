import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { Contact } from './Contact';
import { SeoBlock } from './SeoBlock';
import { FloatingContact } from './FloatingContact';
import { ArrowRight, Search, ShieldCheck, Box, Percent, Send, CheckCircle2, TrendingDown } from 'lucide-react';
import { AlibabaAdvancedGuide } from './AlibabaAdvancedGuide';

export const AlibabaPage = ({ language, setLanguage, onBack, onNavigate }: { language: 'en' | 'ru', setLanguage: (lang: 'en' | 'ru') => void, onBack: () => void, onNavigate: (page: string) => void }) => {
    const content = {
        en: {
            badge: "ALIBABA SOURCING",
            titlePrefix: "Alibaba Sourcing Agent & Shipping:",
            titleHighlight: "Buy Safely from China",
            subtitle: "Source products from Alibaba securely. We handle negotiations, quality control, and international DDP shipping. Don't risk your money — let us verify suppliers and inspect goods before they leave China.",
            whyTitle: "Why Use an Agent for Alibaba?",
            whyText1: "Alibaba gives you direct access to Chinese manufacturers — but access alone doesn't protect you. Shipping markups from suppliers can be 30–50% above market rates. Quality disputes after international shipping are expensive and slow.",
            whyText2: "And communication gaps on product specifications lead to costly mistakes that only surface when goods arrive at your warehouse.",
            whyText3: "HappyBox acts as your Alibaba fulfillment partner. You negotiate the product price — or we do it for you. We receive the goods at our Shenzhen warehouse, conduct strict quality control, consolidate orders from multiple suppliers, and ship to your destination on DDP terms using our heavily discounted freight rates.",
            processTitle: "How to Ship Alibaba Orders with HappyBox",
            process: [
                { icon: Search, title: "1 — Find Your Supplier", desc: "Select a supplier on Alibaba and negotiate product prices — or ask us to handle negotiations on your behalf." },
                { icon: Box, title: "2 — Ship to Our Warehouse", desc: "Ask the supplier to ship goods to our Shenzhen warehouse address. We provide the address and all necessary shipping marks." },
                { icon: CheckCircle2, title: "3 — Quality Check", desc: "We receive the goods, inspect for defects, verify quantities against your packing list, and send you photos before anything ships internationally." },
                { icon: Send, title: "4 — International Shipping", desc: "We ship to your destination via Sea, Air, or Rail on DDP terms — all duties and taxes included in your quote." }
            ],
            fearsTitle: "Solving Your Biggest Alibaba Sourcing Fears",
            fearsList: [
                { q: "What if the supplier overcharges on shipping?", a: "Always request the EXW (Ex Works) price from your supplier and compare their shipping quote with ours. Our rates are typically 30–50% lower than what Alibaba suppliers offer directly — because we ship consolidated volume, not single orders." },
                { q: "What if the goods arrive defective?", a: "We inspect every shipment at our Shenzhen warehouse before it ships internationally. Photos and videos sent to you for confirmation. Defective or incorrect goods go back to the supplier while still in China — not after a trans-Pacific journey." },
                { q: "What if I'm ordering from multiple suppliers?", a: "We consolidate orders from multiple Alibaba suppliers — and from 1688, Taobao, and other platforms — into one international shipment. One freight bill, one customs entry, one tracking number." },
                { q: "What if I'm not sure the supplier is reliable?", a: "We verify suppliers before purchase — checking trade history, response rate, and production capacity. For new supplier relationships, we always recommend a sample order first. We can consolidate samples from multiple factories into one small package." }
            ],
            expertTitle: "Expert Advice for Alibaba",
            expertList: [
                { title: "Always Compare Shipping", desc: "Request the EXW price from your supplier and compare their shipping quote with ours before committing. The difference is often significant." },
                { title: "Use Trade Assurance", desc: "If you pay the supplier directly, always use Alibaba Trade Assurance. It provides dispute protection if goods don't match the order description." },
                { title: "Order Samples First", desc: "Never place a bulk order without a sample. We consolidate samples from multiple factories into one shipment — so you can test several suppliers for the cost of one delivery." },
                { title: "Verify HS Codes", desc: "Ask your supplier for the HS code of your product before ordering. Wrong HS codes lead to customs delays and unexpected duty bills at your destination." }
            ],
            benefitsTitle: "Key Benefits",
            benefitsList: [
                { title: "Save on Shipping", desc: "Our rates are typically 30–50% cheaper than what Alibaba suppliers quote directly. Request EXW pricing and compare." },
                { title: "Free Quality Check", desc: "We inspect goods at our Shenzhen warehouse before international shipping. Photos sent to you for approval." },
                { title: "Consolidation", desc: "Ordering from multiple Alibaba suppliers? We combine everything into one shipment to reduce costs significantly." },
                { title: "Supplier Negotiation", desc: "Don't want to negotiate directly? Our Chinese-speaking team negotiates price, MOQ, and specifications on your behalf." },
                { title: "Secure Payment", desc: "Pay via Bank Transfer, Crypto, or local payment methods. We pay the supplier safely on your behalf." },
                { title: "DDP Shipping", desc: "All duties and taxes paid upfront. No surprise bills at your destination." }
            ],
            feeTitle: "Our Fee",
            feeText: "Sourcing and purchasing commission: 3% of the order amount.",
            cta: "Start Sourcing →"
        },
        ru: {
            badge: "ЗАКУПКИ НА ALIBABA",
            titlePrefix: "Агент и доставка с Alibaba:",
            titleHighlight: "Покупайте в Китае безопасно",
            subtitle: "Надежные закупки на Alibaba. Мы берем на себя переговоры, контроль качества и международную доставку DDP. Не рискуйте деньгами — позвольте нам проверить поставщиков и проинспектировать товары до их отправки из Китая.",
            whyTitle: "Зачем нужен агент для работы с Alibaba?",
            whyText1: "Alibaba дает прямой доступ к китайским производителям, но сам по себе этот доступ вас не защищает. Наценка поставщиков на доставку может быть на 30–50% выше рыночной. Споры о качестве после международной доставки — это дорого и долго.",
            whyText2: "А недопонимание в спецификациях продукта приводит к дорогостоящим ошибкам, которые всплывают только тогда, когда товар прибывает на ваш склад.",
            whyText3: "HappyBox выступает вашим партнером по фулфилменту для Alibaba. Вы согласовываете цену товара — или мы делаем это за вас. Мы принимаем товар на нашем складе в Шэньчжэне, проводим строгий контроль качества, объединяем заказы от разных поставщиков и отправляем в вашу страну на условиях DDP с использованием наших оптовых скидок на фрахт.",
            processTitle: "Как доставлять заказы с Alibaba через HappyBox",
            process: [
                { icon: Search, title: "1 — Найдите поставщика", desc: "Выберите поставщика на Alibaba и согласуйте цену — или поручите переговоры нам." },
                { icon: Box, title: "2 — Доставка на наш склад", desc: "Попросите поставщика отправить товар на наш склад в Шэньчжэне. Мы предоставим адрес и все необходимые маркировки." },
                { icon: CheckCircle2, title: "3 — Проверка качества", desc: "Мы принимаем груз, проверяем на брак, сверяем количество с вашим упаковочным листом и отправляем вам фото до международной отправки." },
                { icon: Send, title: "4 — Международная доставка", desc: "Мы доставляем в вашу страну по морю, воздуху или железной дороге на условиях DDP — все пошлины и налоги уже включены в стоимость." }
            ],
            fearsTitle: "Решение главных страхов при закупках на Alibaba",
            fearsList: [
                { q: "Что если поставщик завышает цену на доставку?", a: "Всегда запрашивайте у поставщика цену EXW (франко-завод) и сравнивайте его расчет доставки с нашим. Наши тарифы обычно на 30–50% ниже, чем напрямую от поставщиков Alibaba, так как мы отправляем консолидированные объемы." },
                { q: "Что если товар придет с браком?", a: "Мы проверяем каждую партию на складе в Шэньчжэне до международной отправки. Фото и видео отправляются вам на подтверждение. Бракованный или неверный товар возвращается поставщику еще в Китае, а не после путешествия через океан." },
                { q: "Что если я заказываю у нескольких поставщиков?", a: "Мы консолидируем заказы от разных поставщиков Alibaba (а также с 1688, Taobao и других платформ) в одну международную отправку. Один счет за фрахт, одна таможенная декларация, один трек-номер." },
                { q: "Что если я не уверен в надежности поставщика?", a: "Мы проверяем поставщиков до оплаты: историю торговли, скорость ответов и производственные мощности. При работе с новыми фабриками всегда рекомендуем сначала заказать образец. Мы можем собрать образцы с разных фабрик в одну небольшую посылку." }
            ],
            expertTitle: "Советы экспертов по работе с Alibaba",
            expertList: [
                { title: "Всегда сравнивайте стоимость доставки", desc: "Запросите цену EXW у поставщика и сравните его предложение по доставке с нашим. Разница часто бывает существенной." },
                { title: "Используйте Trade Assurance", desc: "Если платите поставщику напрямую, всегда используйте Trade Assurance. Это защитит вас в спорах, если товар не соответствует описанию заказа." },
                { title: "Сначала заказывайте образцы", desc: "Никогда не размещайте оптовый заказ без образца. Мы консолидируем образцы с разных фабрик в одну отправку, так что вы можете протестировать нескольких поставщиков по цене одной доставки." },
                { title: "Проверяйте коды ТН ВЭД (HS Code)", desc: "Узнайте у поставщика HS-код вашего товара до заказа. Неверные коды приводят к задержкам на таможне и неожиданным счетам за пошлины." }
            ],
            benefitsTitle: "Ключевые преимущества",
            benefitsList: [
                { title: "Экономия на доставке", desc: "Наши тарифы обычно на 30–50% дешевле, чем напрямую у поставщиков Alibaba. Запрашивайте EXW и сравнивайте." },
                { title: "Бесплатная проверка качества", desc: "Мы инспектируем товары на складе в Шэньчжэне до отправки. Фото высылаются вам на утверждение." },
                { title: "Консолидация", desc: "Заказываете у нескольких поставщиков Alibaba? Мы объединим всё в одну отправку для существенного снижения расходов." },
                { title: "Переговоры с поставщиком", desc: "Не хотите общаться напрямую? Наша команда проведет переговоры о цене, MOQ и спецификациях на китайском языке." },
                { title: "Безопасная оплата", desc: "Оплачивайте банковским переводом, криптовалютой или местными способами оплаты. Мы безопасно переведем деньги поставщику." },
                { title: "Доставка DDP", desc: "Все пошлины и налоги оплачены заранее. Никаких сюрпризов при получении." }
            ],
            feeTitle: "Наша комиссия",
            feeText: "Комиссия за поиск и выкуп: 3% от суммы заказа.",
            cta: "Начать закупки →"
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
                    
                    <div className="grid md:grid-cols-2 gap-6 mb-20 max-w-5xl mx-auto">
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

                    <div className="mb-20">
                        <h3 className="text-2xl md:text-3xl font-extrabold text-brand-dark mb-10 text-center">{t.expertTitle}</h3>
                        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                            {t.expertList.map((tip, idx) => (
                                <div key={idx} className="bg-brand-blue/5 p-6 rounded-2xl border border-brand-blue/10">
                                    <h4 className="font-bold text-lg text-brand-blue mb-2">{tip.title}</h4>
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
                                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-brand-blue mb-4 shadow-sm">
                                        <CheckCircle2 size={20} />
                                    </div>
                                    <h4 className="font-bold text-lg text-brand-dark mb-2">{benefit.title}</h4>
                                    <p className="text-gray-600">{benefit.desc}</p>
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

                <AlibabaAdvancedGuide language={language} onNavigate={onNavigate} />

                <div id="contacts">
                    <Contact language={language} currentPage="alibaba" />
                </div>
                
                <SeoBlock language={language} onNavigate={onNavigate} currentPage="alibaba" /> 
                <Footer language={language} />
                <FloatingContact />
            </main>
        </div>
    )
}

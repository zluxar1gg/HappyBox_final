import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { Contact } from './Contact';
import { SeoBlock } from './SeoBlock';
import { FloatingContact } from './FloatingContact';
import { ShieldCheck, Box, Percent, Send, CheckCircle2, Search, Smartphone } from 'lucide-react';
import { PoizonAdvancedGuide } from './PoizonAdvancedGuide';

export const PoizonPage = ({ language, setLanguage, onBack, onNavigate }: { language: 'en' | 'ru', setLanguage: (lang: 'en' | 'ru') => void, onBack: () => void, onNavigate: (page: string) => void }) => {
    const content = {
        en: {
            badge: "POIZON (DEWU) AGENT",
            titlePrefix: "Poizon (Dewu) Agent:",
            titleHighlight: "0% Service Fee / Commission",
            subtitle: "Shop on Poizon (Dewu) – China's top marketplace for genuine branded items. Access originals at prices 20-50% lower than global retail. 0% Service Fee.",
            whyTitle: "What Makes Buying Directly Difficult",
            whyText1: "The Problem:\nChina-Only Access: The app is in Chinese, requires a local ID, and payment methods like Alipay/WeChat are difficult for foreigners to access.\nNo International Shipping: Sellers do not export. Without an agent, you face language barriers and shipping blocks.\nHidden Fees Elsewhere: Many agents charge 15-50% hidden markups on currency exchange rates.",
            whyText2: "How HappyBox Fixes It:\nHappyBox acts as your professional bridge. We handle the language gap, use secure local payments, and leverage Poizon's rigorous authenticity system. We use transparent currency rates close to market spot rates (no hidden 30% markups) and ensure all items come with the famous 'Turquoise Box' and Certificate.",
            processTitle: "How It Works (5 Steps)",
            process: [
                { icon: Smartphone, title: "1 — Download & Register", desc: "Download Dewu (Poizon). Register with your international phone number." },
                { icon: Search, title: "2 — Find Your Items", desc: "Search using English keywords. Note: Prices vary by size." },
                { icon: Send, title: "3 — Submit Order", desc: "Share the link with us. We verify price and delivery speed." },
                { icon: ShieldCheck, title: "4 — We Buy & Inspect", desc: "We purchase. Poizon performs Legit Check. If it passes, it comes to us." },
                { icon: Box, title: "5 — Consolidate & Ship", desc: "We repack, store for free if needed, and ship to your door." }
            ],
            expertTitle: "Expert Advice for Poizon",
            expertList: [
                { title: "Size Pricing", desc: "Prices vary by size because it's a stock-market model. Check adjacent sizes to save up to 30%." },
                { title: "Condition Labels", desc: "95 New means USED/Pre-owned (95% condition). Damaged Box means BRAND NEW with a dented box." },
                { title: "Verification", desc: "Verification system: Poizon inspects every item, which significantly reduces counterfeit risks." },
                { title: "Keep the Tag", desc: "Keep the blue tag and NFC certificate! They are essential for proving authenticity and resale value." },
                { title: "Price Charts", desc: "Use the price chart to buy during dips. Never remove the blue tag until you are 100% sure about the item." },
                { title: "App Buttons", desc: "The Turquoise Button usually means 'Ship in 48h' (Instant), while the Black Button means standard shipping. Avoid the Gray Button with '95' text unless you want used items." }
            ],
            benefitsTitle: "Key Benefits",
            benefitsList: [
                { title: "100% Authenticity Guarantee", desc: "Every item passes Poizon’s lab verification. If it's fake, they refund us immediately. You get the Certificate and Blue Tag." },
                { title: "Double Box Protection", desc: "We ship all sneakers in reinforced double boxes to ensure the original brand box arrives in pristine condition." },
                { title: "Fair Pricing", desc: "We don't hide fees in the exchange rate. You pay the real price." },
                { title: "Free Quality Check (QC)", desc: "We send you photos of the item, the certificate, and the tag before international shipping." }
            ],
            feeTitle: "Our Fee",
            feeText: "Commission: 0% Service Fee. You pay exactly the price of the item plus shipping.",
            cta: "Start Shopping on Poizon"
        },
        ru: {
            badge: "АГЕНТ POIZON (DEWU)",
            titlePrefix: "Агент Poizon (Dewu):",
            titleHighlight: "Комиссия 0%",
            subtitle: "Покупайте на Poizon (Dewu) – лучшем маркетплейсе Китая для оригинальных брендовых вещей. Доступ к оригиналам по ценам на 20-50% ниже мирового ритейла. Без комиссии агента (0%).",
            whyTitle: "Почему сложно покупать напрямую",
            whyText1: "Проблема:\nТолько для Китая: Приложение на китайском, требует местный ID, а методы оплаты Alipay/WeChat недоступны иностранцам.\nНет международной доставки: Продавцы не отправляют на экспорт. Без агента вы сталкиваетесь с языковым барьером и блоком на доставку.\nСкрытые комиссии: Многие агенты прячут 15-50% комиссии в завышенном курсе валют.",
            whyText2: "Как HappyBox решает это:\nМы выступаем вашим профессиональным мостом. Мы преодолеваем языковой барьер, используем безопасные местные платежи и используем строгую систему аутентификации Poizon. Мы используем прозрачный курс, близкий к рыночному (без скрытых наценок в 30%), и гарантируем, что все товары придут со знаменитой 'Бирюзовой коробкой' и сертификатом.",
            processTitle: "Как это работает (5 шагов)",
            process: [
                { icon: Smartphone, title: "1 — Скачать и зарегистрироваться", desc: "Скачайте Dewu (Poizon). Зарегистрируйтесь со своим международным номером телефона." },
                { icon: Search, title: "2 — Найти товары", desc: "Ищите по английским ключевым словам. Важно: цены зависят от размера." },
                { icon: Send, title: "3 — Оформить заказ", desc: "Пришлите нам ссылку. Мы проверим цену и скорость доставки." },
                { icon: ShieldCheck, title: "4 — Мы выкупаем и проверяем", desc: "Мы оплачиваем. Poizon проводит Legit Check. Если всё ок, товар едет к нам." },
                { icon: Box, title: "5 — Консолидация и доставка", desc: "Мы переупакуем, бесплатно сохраним (если нужно) и доставим до вашей двери." }
            ],
            expertTitle: "Советы экспертов по Poizon",
            expertList: [
                { title: "Цены и размеры", desc: "Цены зависят от размера (модель биржи). Проверьте соседние размеры, чтобы сэкономить до 30%." },
                { title: "Обозначения состояния", desc: "95 New означает Б/У товар. Damaged Box означает АБСОЛЮТНО НОВЫЙ товар с помятой коробкой." },
                { title: "Проверка на оригинал", desc: "Poizon проверяет каждый товар, что практически исключает риск подделок." },
                { title: "Сохраняйте пломбу", desc: "Сохраняйте голубую пломбу и сертификат! Они нужны для подтверждения оригинальности и перепродажи." },
                { title: "Графики цен", desc: "Используйте график цен, чтобы покупать на спаде. Никогда не снимайте голубую пломбу до 100% уверенности в вещи." },
                { title: "Кнопки в приложении", desc: "Бирюзовая кнопка — 'Отправка 48ч' (Быстро). Черная кнопка — стандартная доставка. Избегайте серую кнопку с '95', если не ищете Б/У." }
            ],
            benefitsTitle: "Ключевые преимущества",
            benefitsList: [
                { title: "100% гарантия оригинала", desc: "Каждый товар проходит проверку лаборатории Poizon. В случае подделки они сразу делают возврат. Вы получаете сертификат и пломбу." },
                { title: "Защита двойной коробкой", desc: "Мы отправляем все кроссовки в усиленной двойной коробке (double-box), чтобы оригинальная пришла в идеальном состоянии." },
                { title: "Честные цены", desc: "Мы не прячем комиссию в курсе валют. Вы платите реальную цену." },
                { title: "Бесплатный QC", desc: "Мы пришлем вам фото товара, сертификата и пломбы до международной отправки." }
            ],
            feeTitle: "Наша комиссия",
            feeText: "Комиссия: 0%. Вы платите ровно стоимость товара и доставку.",
            cta: "Начать покупки на Poizon"
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
                                <span className="inline-flex items-center justify-center bg-[#00B2B2]/10 text-[#00B2B2] px-5 py-2.5 rounded-full text-sm font-bold uppercase tracking-wider mb-8">
                                    {t.badge}
                                </span>
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] text-brand-dark mb-8 tracking-tight">
                                    {t.titlePrefix} {t.titleHighlight && <span className="text-[#00B2B2] block mt-2">{t.titleHighlight}</span>}
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
                            <div key={idx} className="bg-white rounded-[30px] p-8 border-2 border-gray-50 hover:border-[#00B2B2]/30 transition-all shadow-sm flex flex-col group relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[#00B2B2]/5 rounded-bl-[100px] -z-10 group-hover:scale-110 transition-transform"></div>
                                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-brand-dark text-white shadow-xl shadow-brand-dark/20 text-2xl font-extrabold relative">
                                    {idx + 1}
                                    <div className="absolute -bottom-2 -right-2 bg-[#00B2B2] text-white w-8 h-8 rounded-full flex items-center justify-center shadow-md">
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
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                            {t.expertList.map((tip, idx) => (
                                <div key={idx} className="bg-[#00B2B2]/5 p-6 rounded-2xl border border-[#00B2B2]/10">
                                    <h4 className="font-bold text-lg text-[#00B2B2] mb-2">{tip.title}</h4>
                                    <p className="text-gray-700 font-medium">{tip.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mb-20">
                        <h3 className="text-2xl md:text-3xl font-extrabold text-brand-dark mb-10 text-center">{t.benefitsTitle}</h3>
                        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                            {t.benefitsList.map((benefit, idx) => (
                                <div key={idx} className="p-6 rounded-2xl bg-gray-50 border border-gray-100">
                                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#00B2B2] mb-4 shadow-sm">
                                        <CheckCircle2 size={20} />
                                    </div>
                                    <h4 className="font-bold text-lg text-brand-dark mb-2">{benefit.title}</h4>
                                    <p className="text-gray-600">{benefit.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
                        <div className="w-24 h-24 bg-[#00B2B2] text-white rounded-full flex items-center justify-center shrink-0">
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
                            className="bg-brand-dark text-white px-10 py-5 rounded-2xl font-black text-xl hover:bg-[#00B2B2] transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 active:scale-[0.98] inline-flex items-center gap-3"
                        >
                            <Send size={24} />
                            {t.cta}
                        </button>
                    </div>
                </section>

                <PoizonAdvancedGuide language={language} onNavigate={onNavigate} />

                <div id="contacts">
                    <Contact language={language} currentPage="poizon" />
                </div>
                
                <SeoBlock language={language} onNavigate={onNavigate} currentPage="poizon" /> 
                <Footer language={language} />
                <FloatingContact />
            </main>
        </div>
    )
}

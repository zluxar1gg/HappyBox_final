import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, AlertCircle } from 'lucide-react';
import { Language } from '../utils/translations';

interface P1688AdvancedGuideProps {
  language: Language;
}

export const P1688AdvancedGuide: React.FC<P1688AdvancedGuideProps> = ({ language }) => {
    const [isOpen, setIsOpen] = useState(false);

    const content = {
        en: {
            title: "1688 Buyer's Guide 2026: How to Source Wholesale from China",
            subtitle: "Everything international buyers need to know about purchasing from 1688.com without a Chinese Account.",
            sections: [
                {
                    title: "1. 1688 vs Alibaba vs DHgate: Which Platform Is Actually Cheaper?",
                    items: [
                        { label: "Why the price difference exists:", text: "Alibaba is built for international trade. Every seller knows they're dealing with foreign buyers and prices accordingly (export documentation, English communication, processing). Typical markup over domestic price: 30–100%. 1688 is China's internal B2B marketplace. Sellers list at prices intended for Chinese businesses. No export premium." },
                        { label: "Real price comparison by category:", text: "• Electronics: Alibaba $8–12 / 1688 $3–5 (50–60% cheaper)\n• Clothing: Alibaba $15–25 / 1688 $6–12 (40–55% cheaper)\n• Home goods: Alibaba $20–40 / 1688 $8–18 (45–55% cheaper)" },
                        { label: "When Alibaba makes more sense:", text: "Small sample orders where 1688 MOQ is too high. Suppliers who specifically cater to export with all documentation ready." }
                    ]
                },
                {
                    title: "2. How to Buy from 1688 Without a Chinese Bank Account",
                    items: [
                        { label: "The Payment Barrier", text: "1688 sellers only accept Chinese domestic payment methods — Alipay and domestic bank transfer. Foreign credit cards and PayPal are not accepted." },
                        { label: "How a buying agent solves this:", text: "HappyBox holds Chinese corporate accounts and pays suppliers directly on your behalf.\n1. You send us links.\n2. We verify availability and confirm price.\n3. You transfer funds to us in USD.\n4. We pay the supplier from our Chinese account." }
                    ]
                },
                {
                    title: "3. 1688 Minimum Order Quantities: What to Expect",
                    items: [
                        { label: "Typical MOQ ranges on 1688:", text: "• Clothing: 1 piece to 50+ per style/color\n• Electronics: 10–100 units\n• Home goods: 1–10 units\n• Custom/OEM: 100–500+ units" },
                        { label: "MOQ negotiation:", text: "Many 1688 suppliers will negotiate MOQ — particularly if you're ordering multiple SKUs. Our sourcing team negotiates in Chinese, which consistently yields better terms." },
                        { label: "Sample orders:", text: "Some suppliers offer samples at higher per-unit price. We verify sample availability before you commit to a bulk order." }
                    ]
                },
                {
                    title: "4. How to Find and Verify Suppliers on 1688",
                    items: [
                        { label: "Supplier rating system", text: "1688 uses an internal rating from 1–5. Ratings of 4.0 and above indicate reliable fulfillment history. Suppliers below 4.0 carry meaningful risk. We do not purchase from suppliers rated below 4.0 without additional verification." },
                        { label: "What to check beyond the rating:", text: "Transaction volume, response time, factory vs trading company status, and actual stock vs listed stock." },
                        { label: "Our verification process:", text: "We message the supplier in Chinese, confirm stock, verify real dimensions and weight, request product photos, and check the return policy before recommending a purchase." }
                    ]
                },
                {
                    title: "5. Common 1688 Buying Mistakes (And How to Avoid Them)",
                    items: [
                        { label: "Trusting listed stock numbers", text: "Stock on 1688 often reflects production capacity, not inventory. Always verify before paying." },
                        { label: "Ignoring actual weight and dimensions", text: "Listings frequently show incorrect weight/dimensions. We weigh and measure every shipment at our warehouse before you're committed to freight costs." },
                        { label: "Not specifying packaging", text: "Default packaging is often a bulk bag. We request individual packaging from the supplier if you need it for resale." },
                        { label: "Skipping quality inspection", text: "1688 suppliers are domestic sellers. Without a physical inspection in China, defects only surface at your warehouse after customs clearance. We inspect every shipment." }
                    ]
                },
                {
                    title: "6. 1688 vs Other Chinese Platforms",
                    items: [
                        { label: "1688.com", text: "Best for B2B wholesale, bulk orders. Lowest factory prices." },
                        { label: "Alibaba.com", text: "Best for export-ready suppliers. Prices 30-100% above 1688." },
                        { label: "Taobao / Tmall", text: "Best for single items, personal shopping, and official brand stores." },
                        { label: "Poizon (Dewu) / Pinduoduo", text: "Best for authenticated sneakers and deep discounts." }
                    ]
                }
            ],
            readMore: "Read the 1688 Buyer's Guide",
            hide: "Collapse Guide"
        },
        ru: {
            title: "Гайд по 1688 (2026): как покупать оптом без китайского счета",
            subtitle: "Все, что нужно знать о закупках на 1688.com для международного бизнеса.",
            sections: [
                {
                    title: "1. 1688 vs Alibaba vs DHgate: где на самом деле дешевле?",
                    items: [
                        { label: "В чем разница?", text: "Alibaba ориентирована на мир. Продавцы закладывают в цену расходы на англоязычный персонал, международный маркетинг и экспорт. Наценка составляет от 30% до 100%. 1688 — это «внутренняя кухня» Китая. Цены здесь такие же, как на профессиональных выставках внутри страны." },
                        { label: "Сравнение цен по категориям:", text: "• Электроника: Alibaba $8–12 / 1688 $3–5 (выгода ~60%)\n• Одежда: Alibaba $15–25 / 1688 $6–12 (выгода ~50%)\n• Товары для дома: Alibaba $20–40 / 1688 $8–18 (выгода ~55%)" }
                    ]
                },
                {
                    title: "2. Как платить, если нет китайской карты?",
                    items: [
                        { label: "Проблема платежей", text: "1688 не принимает иностранные кредитки или PayPal. Только Alipay и переводы внутри Китая." },
                        { label: "Решение", text: "Агент (HappyBox) решает эту проблему: вы переводите нам сумму в USD (или другой валюте), а мы мгновенно оплачиваем товар продавцу с наших юаневых счетов. Без VPN и регистрации в Alipay." }
                    ]
                },
                {
                    title: "3. Минимальный заказ (MOQ) на 1688",
                    items: [
                        { label: "Условия", text: "Обычно на 1688 можно купить от 2–3 штук одного артикула. Если вам нужно меньше или вы хотите заказать образцы — мы договоримся с поставщиком." },
                        { label: "Переговоры", text: "Наша команда ведет переговоры на китайском, что всегда дает лучшие условия по сравнению с попытками общаться на английском через онлайн-переводчик." }
                    ]
                },
                {
                    title: "4. Как проверить поставщика?",
                    items: [
                        { label: "Рейтинг", text: "Мы ориентируемся на внутренний рейтинг 1688 (шкала от 1 до 5). Мы стараемся не работать с продавцами с рейтингом ниже 4.0." },
                        { label: "Дополнительные проверки", text: "Объем транзакций (показывает, что магазин живой), скорость ответа, а также проверяем, завод это или перекуп." }
                    ]
                },
                {
                    title: "5. Типичные ошибки новичков",
                    items: [
                        { label: "Вера в остатки на сайте", text: "Всегда нужно уточнять наличие «в моменте». Мы делаем это перед каждой оплатой." },
                        { label: "Игнорирование веса", text: "Продавцы часто пишут примерный вес. Мы перевешиваем каждую коробку на складе, чтобы расчет доставки был честным." },
                        { label: "Отсутствие инспекции", text: "Поставщики на 1688 не несут ответственности перед иностранцами. Без проверки в Китае брак обнаружится только у вас дома, поэтому мы проверяем весь товар в Шэньчжэне." }
                    ]
                },
                {
                    title: "6. Сравнение платформ Китая",
                    items: [
                        { label: "1688.com vs Alibaba", text: "1688 для опта и бизнеса с самыми низкими ценами. Alibaba для готового экспорта по завышенной цене." },
                        { label: "Taobao vs Poizon", text: "Taobao для розницы и личных вещей. Poizon для оригинальных брендовых кроссовок." }
                    ]
                }
            ],
            readMore: "Читать гайд по закупкам 1688",
            hide: "Свернуть гайд"
        }
    };

    const t = content[language];

    return (
        <section className="bg-white border-y border-gray-100 py-6 mb-12">
            <div className="container mx-auto px-6 max-w-4xl">
                <button 
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-full flex items-center justify-between p-6 bg-brand-light/30 hover:bg-brand-light/50 rounded-2xl transition-colors group"
                >
                    <div className="flex items-center gap-4 text-left">
                        <div className="w-12 h-12 rounded-full bg-brand-yellow/20 text-brand-dark flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                            <BookOpen size={24} />
                        </div>
                        <div>
                            <h3 className="font-bold text-lg md:text-xl text-brand-dark">{t.title}</h3>
                            <p className="text-gray-500 text-sm hidden md:block">{t.subtitle}</p>
                        </div>
                    </div>
                    <div className="shrink-0 text-brand-dark opacity-50">
                        {isOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                    </div>
                </button>

                {isOpen && (
                    <div className="mt-8 px-2 md:px-6 animate-fade-in pb-8">
                        <div className="bg-yellow-50 border border-yellow-100 rounded-2xl p-6 mb-10 flex gap-4">
                            <AlertCircle className="text-brand-dark shrink-0" size={24} />
                            <p className="text-sm text-gray-700 leading-relaxed font-medium">
                                {t.subtitle}
                            </p>
                        </div>
                        
                        <div className="space-y-12">
                            {t.sections.map((section, idx) => (
                                <div key={idx}>
                                    <h4 className="text-xl font-bold text-brand-dark mb-6 tracking-tight border-b border-gray-100 pb-3">
                                        {section.title}
                                    </h4>
                                    <div className="space-y-4">
                                        {section.items.map((item, itemIdx) => (
                                            <div key={itemIdx} className="bg-gray-50 rounded-xl p-5 hover:bg-gray-100 transition-colors">
                                                <h5 className="font-bold text-brand-dark mb-2">{item.label}</h5>
                                                <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">
                                                    {item.text}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

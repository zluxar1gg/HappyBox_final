import React from 'react';
import { BookOpen, AlertCircle, ArrowRight } from 'lucide-react';
import { Language } from '../utils/translations';
import { TableWrapper } from './TableWrapper';

interface P1688AdvancedGuideProps {
  language: Language;
  onNavigate?: (page: string) => void;
}

export const P1688AdvancedGuide: React.FC<P1688AdvancedGuideProps> = ({ language, onNavigate }) => {
    const content = {
        en: {
            title: "1688 Buyer's Guide 2026: How to Source Wholesale from China Without a Chinese Account",
            subtitle: "Everything international buyers need to know about purchasing from 1688.com.",
            sections: [
                {
                    title: "1. 1688 vs Alibaba vs DHgate: Which Platform Is Actually Cheaper?",
                    contentPre: "Why the price difference exists:\nAlibaba is built for international trade. Every seller knows they're dealing with foreign buyers and prices accordingly — export documentation, English communication, and international payment processing are all factored into the margin. Typical markup over domestic price: 30–100% depending on category.\n\n1688 is China's internal B2B marketplace — the equivalent of a domestic wholesale trade show that the rest of the world can't easily access. Sellers list at prices intended for Chinese businesses. No export premium.\n\nReal price comparison by category:",
                    table: {
                        headers: ["Category", "Typical Alibaba price", "Typical 1688 price", "Difference"],
                        rows: [
                            ["Electronics accessories", "$8–12/unit", "$3–5/unit", "50–60% cheaper"],
                            ["Clothing & apparel", "$15–25/piece", "$6–12/piece", "40–55% cheaper"],
                            ["Home goods & decor", "$20–40/unit", "$8–18/unit", "45–55% cheaper"],
                            ["Footwear", "$25–45/pair", "$10–20/pair", "40–55% cheaper"]
                        ]
                    },
                    afterTable: "Prices are illustrative ranges — actual savings depend on category, volume, and supplier.\n\nWhen Alibaba makes more sense:\nSmall sample orders where 1688 MOQ is too high. Suppliers who specifically cater to export with all documentation ready. Products where the quality gap between platforms is unclear without established relationships."
                },
                {
                    title: "2. How to Buy from 1688 Without a Chinese Bank Account",
                    contentPre: "This is the main barrier for international buyers. 1688 sellers only accept Chinese domestic payment methods — Alipay and domestic bank transfer. Foreign credit cards and PayPal are not accepted.\n\nHow a buying agent solves this:\nA 1688 buying agent like HappyBox holds Chinese corporate accounts and pays suppliers directly on your behalf:\n\n• You send us product links or descriptions\n• We verify availability and confirm the price\n• You transfer the purchase amount to us in USD or your local currency\n• We pay the 1688 supplier from our Chinese account\n• Goods ship to our Shenzhen warehouse for inspection and consolidation\n\nNo Chinese account required. No Alipay registration. No VPN needed.\nOur fee: 0%. You pay exactly the price listed on the platform."
                },
                {
                    title: "3. 1688 Minimum Order Quantities: What to Expect",
                    contentPre: "Typical MOQ ranges on 1688:",
                    table: {
                        headers: ["Category", "Typical MOQ"],
                        rows: [
                            ["Clothing & apparel", "1 piece to 50+ per style/color"],
                            ["Electronics accessories", "10–100 units"],
                            ["Home goods", "1–10 units"],
                            ["Custom/OEM products", "100–500+ units"],
                            ["Raw materials", "Often weight-based (50kg+)"]
                        ]
                    },
                    afterTable: "MOQ negotiation:\nMany 1688 suppliers will negotiate MOQ — particularly if you're ordering multiple SKUs or committing to repeat orders. Our sourcing team negotiates in Chinese, which consistently yields better terms than international buyers negotiating directly in English.\n\nSample orders:\nSome suppliers offer samples at higher per-unit price. We verify sample availability before you commit to a bulk order — a step most buyers skip and regret."
                },
                {
                    title: "4. How to Find and Verify Suppliers on 1688",
                    contentPre: "Supplier rating system:\n1688 uses an internal rating from 1–5. Ratings of 4.0 and above indicate reliable fulfillment history. Suppliers below 4.0 carry meaningful risk — delayed shipping, quality issues, and poor communication are common. We do not purchase from suppliers rated below 4.0 without additional verification.\n\nWhat to check beyond the rating:\n• Transaction volume — high numbers indicate an active, established supplier, not a new listing with no history.\n• Response time — suppliers who respond within a few hours are operationally active. Slow response at the inquiry stage predicts slow fulfillment.\n• Factory vs. trading company — factories offer lower prices; trading companies offer more flexibility on small MOQs and mixed SKUs. We identify which you're dealing with before purchase.\n• Actual stock vs. listed stock — 1688 stock numbers frequently reflect production capacity rather than available inventory. We verify real availability before you pay.\n\nOur verification process:\nWe message the supplier in Chinese, confirm stock, verify real dimensions and weight, request product photos, and check return policy before recommending a purchase."
                },
                {
                    title: "5. Common 1688 Buying Mistakes (And How to Avoid Them)",
                    contentPre: "Trusting listed stock numbers\nStock on 1688 often reflects what the supplier can produce, not what's in inventory. Always verify before paying. We do this for every order.\n\nIgnoring actual weight and dimensions\n1688 listings frequently show incorrect weight and dimensions. This matters because international freight is calculated by actual or volumetric weight, whichever is higher. We weigh and measure every shipment at our warehouse and flag discrepancies before you're committed to a freight cost.\n\nNot specifying individual packaging\nDefault packaging for items like clothing, notebooks, and plush toys is often a bulk bag. If you need individual packaging for resale, specify this before the order is confirmed. We communicate this to the supplier in Chinese.\n\nOrdering electronics without voltage and plug check\nChinese domestic electronics are built for 220V. If your market uses 110V or different plug standards, specify this at the order stage. We verify voltage and plug compatibility before purchase for all electronics orders.\n\nSkipping quality inspection\n1688 suppliers are domestic sellers with no export accountability. Without a physical inspection in China, defects only surface at your warehouse — after customs clearance, after the return window has closed. We inspect every shipment with photos before international packing.\n\nOrdering fragile items without packaging request\nCeramics, glassware, and marble products need reinforced packaging or a wooden crate for international transit. Standard 1688 packaging is designed for domestic courier, not long-haul sea freight. We request appropriate packaging from the supplier and add protection at our warehouse when needed."
                },
                {
                    title: "6. 1688 vs Alibaba vs Taobao vs Pinduoduo: Full Platform Comparison",
                    table: {
                        headers: ["Platform", "Best for", "Pricing", "Language", "International payment"],
                        rows: [
                            ["1688.com", "B2B wholesale, bulk orders", "Lowest — factory price", "Chinese only", "Not supported"],
                            ["Alibaba.com", "B2B, export-ready suppliers", "30–100% above 1688", "English", "Yes"],
                            ["Taobao", "B2C, single items, personal shopping", "Retail price", "Chinese", "Not supported"],
                            ["Tmall", "Official brand stores", "Retail/brand price", "Chinese", "Not supported"],
                            ["Poizon (Dewu)", "Authenticated sneakers & streetwear", "Market price", "Chinese", "Not supported"],
                            ["Pinduoduo", "Group buying, deep discounts", "Low — social commerce", "Chinese", "Not supported"]
                        ]
                    },
                    beyondPlatforms: [
                        { name: "Taobao", desc: "single items and personal shopping", id: "taobao" },
                        { name: "Tmall", desc: "official brand flagship stores", id: "tmall" },
                        { name: "Poizon (Dewu)", desc: "authentic sneakers and streetwear", id: "poizon" },
                        { name: "Pinduoduo", desc: "group buying and discount deals", id: "pinduoduo" }
                    ],
                    afterTable: "Which platform for which situation:\n• Reselling wholesale inventory → 1688\n• Official branded goods → Tmall\n• Personal shopping, single items → Taobao\n• Authenticated sneakers → Poizon\n• Maximum discount on consumer goods → Pinduoduo\n\nWe support purchasing and consolidation across all six platforms into one international shipment."
                }
            ],
            readMore: "Read the 1688 Buyer's Guide",
            hide: "Collapse Guide"
        },
        ru: {
            title: "Гайд по 1688 (2026): как покупать оптом без китайского счета",
            subtitle: "Все, что нужно знать о закупках на 1688.com.",
            sections: [
                {
                    title: "1. 1688 vs Alibaba vs DHgate: где на самом деле дешевле?",
                    contentPre: "Почему существует разница в ценах:\nAlibaba ориентирована на мир. Продавцы закладывают в цену расходы на англоязычный персонал, международный маркетинг и комиссии за переводы. Наценка на экспорт составляет от 30% до 100% к цене внутреннего рынка.\n\n1688 — это «внутренняя кухня» Китая. Эквивалент «для своих». Цены здесь такие же, как на профессиональных выставках внутри страны.\n\nРеальное сравнение цен по категориям:",
                    table: {
                        headers: ["Категория", "Цена Alibaba", "Цена 1688", "Разница"],
                        rows: [
                            ["Электроника и аксессуары", "$8–12", "$3–5", "на 50–60% дешевле"],
                            ["Одежда", "$15–25", "$6–12", "на 40–55% дешевле"],
                            ["Товары для дома", "$20–40", "$8–18", "на 45–55% дешевле"],
                            ["Обувь", "$25–45", "$10–20", "на 40–55% дешевле"]
                        ]
                    },
                    afterTable: "Когда стоит выбрать Alibaba:\nДля мелких заказов-образцов, если MOQ на 1688 слишком велик. А также если вам нужен поставщик, готовый к прямому экспорту и предоставляющий все сертификаты на английском."
                },
                {
                    title: "2. Как покупать на 1688 без китайского счета",
                    contentPre: "Это главный барьер для иностранцев. 1688 не работает с зарубежными банковскими картами и PayPal. Только Alipay и переводы внутри Китая (WeChat, местные карты).\n\nКак мы решаем эту проблему:\nВам не нужен китайский счет, Alipay или VPN. Баинг-агент (мы) оплачивает ваши заказы со своих корпоративных счетов в юанях:\n\n• Вы присылаете нам ссылки на товар\n• Мы подтверждаем наличие и финальную стоимость\n• Вы переводите деньги нам (в USD/EUR/RUB)\n• Мы мгновенно выкупаем товар у продавца на 1688\n• Товар едет на наш склад в Шэньчжэне для проверки\n\nНаша комиссия: 0% за выкуп. Вы платите ровно по цене платформы без скрытых наценок."
                },
                {
                    title: "3. Минимальный заказ (MOQ) на 1688",
                    contentPre: "Ожидаемый MOQ по категориям:",
                    table: {
                        headers: ["Категория", "Типичный MOQ"],
                        rows: [
                            ["Одежда", "от 1 до 50+ шт. на размер/цвет"],
                            ["Электроника", "10–100 шт."],
                            ["Товары для дома", "1–10 шт."],
                            ["Кастомное (OEM)", "100–500+ шт."],
                            ["Сырье", "Часто от 50 кг и выше"]
                        ]
                    },
                    afterTable: "Торг по MOQ:\nМногие поставщики на 1688 готовы снижать MOQ, если вы берете разные артикулы (сборный заказ). Наша команда торгуется на китайском языке, что дает значительно лучший результат.\n\nЗаказ образцов:\nИногда можно купить образец по более высокой розничной цене. Мы проверяем такую возможность до крупного заказа."
                },
                {
                    title: "4. Как найти и проверить поставщиков на 1688",
                    contentPre: "Рейтинг поставщиков:\n1688 использует внутренний рейтинг от 1 до 5. Мы стараемся не выкупать у продавцов с рейтингом ниже 4.0 без дополнительной проверки, так как это несет реальные риски задержек и брака.\n\nНа что смотреть кроме рейтинга:\n• Объем транзакций — большие цифры показывают, что магазин работает и отгружает товар.\n• Скорость ответа — активные продавцы отвечают в течение пары часов. Долгие ответы на этапе запроса = долгая отправка груза.\n• Фабрика или торговая компания (перекуп) — фабрики дают лучшую цену, но перекупы лояльнее к мелким MOQ и сборным грузам. Мы определяем статус магазина.\n• Реальные запасы товара — остатки на сайте часто отражают «возможность произвести», а не то, что лежит на складе. Мы проверяем наличие до оплаты.\n\nНаш процесс проверки:\nМы связываемся с поставщиком в чате на китайском, уточняем наличие, просим реальные фото, проверяем габариты и правила возврата."
                },
                {
                    title: "5. Ошибки при покупке на 1688 (и как их избежать)",
                    contentPre: "Верить заявленным остаткам\nЦифры на сайте часто виртуальны. Нужно уточнять наличие. Мы делаем это перед каждой оплатой.\n\nИгнорировать габариты и вес\nПродавцы пишут примерные цифры. Это критично, так как международная доставка рассчитывается по объемному весу. Мы перевешиваем каждую посылку на нашем складе.\n\nНе уточнять вид упаковки\nЧасто товары кидают в один общий мешок. Если вам нужна индивидуальная упаковка для каждого товара, это нужно просить отдельно. Мы обговариваем это с продавцом.\n\nЗаказывать электронику без проверки вилки/вольтажа\nТехника для рынка Китая идет с китайской вилкой и напряжением 220V. Обязательно нужно проверять совместимость с вашей страной.\n\nОтказываться от проверки (инспекции) в Китае\nПродавцы 1688 не несут ответственности за международную пересылку. Если вы проверите товар уже в своей стране — оформить возврат будет невозможно. Мы проверяем товары на складе в Шэньчжэне с предоставлением фото.\n\nЗабывать про деревянную обрешетку\nСтекло и хрупкие вещи не доедут в стандартных коробках. Мы организуем деревянную обрешетку или паллетирование на нашем складе."
                },
                {
                    title: "6. 1688 vs Alibaba vs Taobao vs Pinduoduo: Сравнение платформ",
                    table: {
                        headers: ["Платформа", "Для чего", "Уровень цен", "Язык", "Международная оплата"],
                        rows: [
                            ["1688.com", "B2B опт, крупные заказы", "Самые низкие (фабрики)", "Китайский", "Нет (нужен агент)"],
                            ["Alibaba.com", "B2B, готово к экспорту", "На 30–100% выше", "Английский", "Да"],
                            ["Taobao", "B2C, поштучно, личное", "Розничные", "Китайский", "Нет"],
                            ["Tmall", "Официальные бренды", "Розничные (бренды)", "Китайский", "Нет"],
                            ["Poizon (Dewu)", "Оригинальные кроссовки", "Рыночные", "Китайский", "Нет"],
                            ["Pinduoduo", "Совместные покупки", "Низкие (дисконт)", "Китайский", "Нет"]
                        ]
                    },
                    beyondPlatforms: [
                        { name: "Taobao", desc: "розница и личные покупки", id: "taobao" },
                        { name: "Tmall", desc: "официальные флагманские магазины брендов", id: "tmall" },
                        { name: "Poizon (Dewu)", desc: "оригинальные кроссовки и брендовая одежда", id: "poizon" },
                        { name: "Pinduoduo", desc: "низкие цены и групповые закупки", id: "pinduoduo" }
                    ],
                    afterTable: "Какую платформу выбрать:\n• Перепродажа оптовых партий → 1688\n• Официальные товары брендов → Tmall\n• Поштучно и личный шопинг → Taobao\n• 100% оригинальные кроссовки → Poizon\n• Максимальная скидка в Рознице → Pinduoduo\n\nМы осуществляем выкуп и объединяем заказы со всех шести платформ в одну международную отправку."
                }
            ],
            readMore: "Читать гайд по закупкам 1688",
            hide: "Свернуть гайд"
        }
    };

    const t = content[language];

    return (
        <section className="py-16 bg-white rounded-[50px] mb-8 container mx-auto shadow-sm px-6 lg:px-20 border border-gray-100">
            <div className="max-w-5xl mx-auto text-gray-600">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark mb-6 tracking-tight leading-tight">
                        {t.title}
                    </h2>
                    <p className="text-lg md:text-xl text-gray-700 font-medium leading-relaxed">
                        {t.subtitle}
                    </p>
                </div>

                <div className="space-y-16">
                    {t.sections.map((section, idx) => (
                        <div key={idx} className="scroll-mt-28">
                            <h3 className="text-2xl md:text-3xl font-extrabold text-brand-dark mb-6 leading-tight">
                                {section.title}
                            </h3>
                            
                            {section.contentPre && (
                                <p className="mb-6 text-base md:text-lg text-gray-700 font-medium leading-relaxed whitespace-pre-line">
                                    {section.contentPre}
                                </p>
                            )}

                            {section.table && (
                                <TableWrapper language={language}>
                                    <table className="w-full text-left border-collapse">
                                        <thead>
                                            <tr className="bg-gray-50 border-b border-gray-100">
                                                {section.table.headers.map((h, i) => (
                                                    <th key={i} className="py-4 px-6 font-bold text-brand-dark whitespace-nowrap">{h}</th>
                                                ))}
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-100 text-sm md:text-base">
                                            {section.table.rows.map((row, rIdx) => (
                                                <tr key={rIdx}>
                                                    {row.map((cell, cIdx) => (
                                                        <td key={cIdx} className="py-4 px-6 text-gray-700 font-medium leading-relaxed">
                                                            {cell}
                                                        </td>
                                                    ))}
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </TableWrapper>
                            )}

                            {(section as any).beyondPlatforms && (
                                <div className="bg-gray-50 p-6 sm:p-8 rounded-2xl border border-gray-100 mb-6 mt-6">
                                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10 text-left">
                                        {(section as any).beyondPlatforms.map((plat: any, i: number) => (
                                            <div key={i} onClick={() => onNavigate && onNavigate(plat.id)} className="bg-brand-blue p-6 rounded-[24px] shadow-sm hover:shadow-md hover:-translate-y-1 transition-all border border-transparent cursor-pointer group flex flex-col h-full text-left">
                                                <h4 className="font-bold text-white mb-2 text-lg transition-colors flex items-center gap-2">
                                                    {plat.name}
                                                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1"/>
                                                </h4>
                                                <p className="text-white/80 font-medium text-sm leading-relaxed">{plat.desc}</p>
                                            </div>
                                        ))}
                                    </div>

                                    {section.afterTable && (
                                        <div className="text-left w-full text-base md:text-lg text-gray-700 font-medium leading-relaxed whitespace-pre-line pt-2">
                                            {section.afterTable}
                                        </div>
                                    )}
                                </div>
                            )}

                            {section.afterTable && !(section as any).beyondPlatforms && (
                                <div className="bg-gray-50 p-6 sm:p-8 rounded-2xl border border-gray-100 mb-6">
                                    <p className="text-base md:text-lg text-gray-700 font-medium leading-relaxed whitespace-pre-line">
                                        {section.afterTable}
                                    </p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};


import React from 'react';
import { BookOpen, AlertCircle, ArrowRight } from 'lucide-react';
import { Language } from '../utils/translations';
import { TableWrapper } from './TableWrapper';

interface PinduoduoAdvancedGuideProps {
  language: Language;
  onNavigate?: (page: string) => void;
}

export const PinduoduoAdvancedGuide: React.FC<PinduoduoAdvancedGuideProps> = ({ language, onNavigate }) => {

    const content = {
        en: {
            title: "Pinduoduo Buying Guide 2026: How to Get the Lowest Prices from China",
            subtitle: "Everything international buyers need to know about purchasing from Pinduoduo.",
            sections: [
                {
                    title: "1. How Pinduoduo's Group Buying Model Actually Works",
                    contentPre: "Pinduoduo's prices are lower than any other Chinese platform — including 1688 in many categories. Understanding why helps you use it correctly.\n\nThe standard model:\nMost Pinduoduo listings show two prices — an individual price and a lower team price. The team price activates when a minimum number of buyers join the same purchase within a set time window (usually 24 hours). Pinduoduo aggregates buyers automatically — you don't need to find your own team members.\n\nWhy manufacturers sell this cheap:\nPinduoduo connects buyers directly to factories with no trading company layer and no retail markup. The platform's algorithm guarantees volume to manufacturers in exchange for deep discounts. The factory ships directly to the buyer — or in our case, to our Shenzhen warehouse.\n\nWhat this means for quality:\nDirect-from-factory pricing means you're getting the real factory price — but also factory-grade packaging and minimal quality filtering. This is why QC at our warehouse is more important for Pinduoduo orders than for any other platform.\n\nWhat happens if a group buy doesn't complete:\nIf the team purchase isn't completed within the time limit, the order is cancelled and your payment is returned. We monitor this actively — if a group buy fails, we either restart the process immediately or purchase at the individual price, depending on the price difference. We confirm with you before proceeding.",
                },
                {
                    title: "2. How to Buy from Pinduoduo Without a Chinese Account",
                    contentPre: "Pinduoduo is more restricted than Taobao or 1688 for international buyers. The platform requires a Chinese phone number for registration and only accepts WeChat Pay and Alipay. Group buying mechanics add an additional layer — joining a team purchase requires an active local account with transaction history.\n\nHow we handle it:\n• You send us the Pinduoduo product link\n• We verify the team-buy price and current group availability\n• You transfer the purchase amount to us in USD or your local currency\n• We join the group buy using our local corporate accounts\n• The item ships to our Shenzhen warehouse for QC inspection\n\nNo Pinduoduo account needed. No WeChat Pay. No Chinese phone number.\n\nOur fee: 3% of the order value — slightly higher than our other platforms due to the additional QC required for Pinduoduo items.",
                },
                {
                    title: "3. QC on Pinduoduo Orders: Why It Matters More Here",
                    contentPre: "Pinduoduo's price advantage comes with a tradeoff — quality consistency is lower than on Taobao or Tmall. Our QC process is stricter for Pinduoduo orders as a result.\n\nWhat we check for every PDD order:\n• Item condition — surface defects, damage, and manufacturing inconsistencies are more common at this price point. We check carefully.\n• Correct item received — Pinduoduo sellers occasionally substitute colours, sizes, or models without notice. We verify against your exact order specifications.\n• Functional check — for electronics and small appliances, we perform a basic functionality test where possible.\n• Quantity verification — bulk and multi-pack orders are counted and verified against the listing.\n• Packaging — Pinduoduo factory packaging is minimal. We assess whether additional protective packaging is needed for international transit before packing.\n\nWhat you receive:\nQC photos of your actual items before international packing. If we find a quality issue, we contact the seller for resolution while the item is still in China — the only realistic window for a return or exchange.\n\nOur recommendation:\nFor items where quality consistency matters — clothing with precise sizing, electronics with specific specifications, or anything fragile — always request QC photos and review them before approving shipment.",
                },
                {
                    title: "4. What to Buy on Pinduoduo (And What to Avoid)",
                    contentPre: "Pinduoduo is exceptional for some product categories and less suitable for others. Knowing the difference saves you time and disappointment.\n\nBest categories on Pinduoduo:\n• Home goods and kitchen items — plates, storage, organisers, basic cookware. Factory-direct pricing with acceptable quality for everyday use.\n• Basic clothing and accessories — t-shirts, socks, basics, seasonal items. Quality is functional, not premium.\n• Phone accessories — cases, cables, chargers, screen protectors. Direct from factory, often identical to Taobao equivalents at lower price.\n• Stationery and office supplies — notebooks, pens, small organisers. Reliable category with consistent quality.\n• Toys and novelty items — bulk purchases, party supplies, small gifts. High value for money.\n• Seasonal and disposable items — anything you're buying for single or short-term use where premium quality isn't required.\n\nCategories where we recommend Taobao or Tmall instead:\n• High-end fashion and branded items — authenticity and quality control are better served by Tmall official stores.\n• Precision electronics — for items where exact specifications matter, Taobao sellers with verified histories are more reliable.\n• Items requiring exact sizing — Pinduoduo sizing information is less consistent. For clothing where fit is critical, Taobao's review system with live photos gives better pre-purchase information.",
                },
                {
                    title: "5. Consolidating Pinduoduo Orders with Other Platforms",
                    contentPre: "Pinduoduo orders consolidate fully with purchases from Taobao, Weidian, 1688, Tmall, and Poizon at our Shenzhen warehouse.\n\nHow it works:\nAll your orders from different platforms arrive separately at our warehouse. We hold everything for up to 30 days at no cost, then pack into one international shipment. One customs declaration, one freight invoice, one tracking number.\n\nThe cost saving:\nPinduoduo items are often small and light — exactly the category where shipping cost per item is highest if sent individually. Consolidating 10–15 small Pinduoduo purchases into one box with other platform orders typically reduces total shipping cost by 40–60% compared to sending each separately.\n\nRepacking for international transit:\nPinduoduo factory packaging is designed for domestic courier — not international sea or air freight. We repack all PDD items with appropriate protective materials before international packing. For lightweight bulky items, vacuum packing is available to reduce volume.",
                },
                {
                    title: "6. Pinduoduo vs Taobao vs 1688: Which Platform for What",
                    table: {
                        headers: ["Platform", "Best for", "Pricing", "Quality consistency", "Return policy"],
                        rows: [
                            ["Pinduoduo", "Maximum discount, everyday goods, bulk basics", "Lowest overall", "Varies — strict QC required", "Available but variable"],
                            ["Taobao", "Wide selection, mainstream fashion, general shopping", "Retail — competitive", "Good with seller verification", "Generally available"],
                            ["Tmall", "Official brands, guaranteed authenticity", "Retail/brand price", "High — authorized dealers", "Standard retail policy"],
                            ["Weidian", "Exclusive drops, indie streetwear, niche items", "Varies", "Varies — QC essential", "Often no returns"],
                            ["1688", "Wholesale bulk orders, factory direct", "Factory price", "Varies by supplier", "Negotiable"],
                            ["Poizon (Dewu)", "Authenticated sneakers and streetwear", "Market price", "High — platform verified", "Platform-backed"]
                        ]
                    },
                    beyondPlatforms: [
                        { name: "Taobao", desc: "retail and personal shopping", id: "taobao" },
                        { name: "1688", desc: "wholesale and bulk buying", id: "1688" },
                        { name: "Poizon", desc: "authentic sneakers & streetwear", id: "poizon" },
                        { name: "Weidian", desc: "exclusive indie & streetwear", id: "weidian" }
                    ],
                    afterTable: "Which to use:\n• Maximum price savings on everyday items → Pinduoduo\n• Widest selection, balanced quality and price → Taobao\n• Official brand purchases with authenticity guarantee → Tmall\n• Exclusive niche streetwear → Weidian\n• Wholesale factory orders → 1688\n• Authenticated sneakers → Poizon\n\nWe support purchasing and consolidation across all six platforms. Each platform has a dedicated page with full purchasing details."
                }
            ]
        },
        ru: {
            title: "Гайд по покупкам на Pinduoduo 2026: Как получить самые низкие цены в Китае",
            subtitle: "Все, что нужно знать иностранным покупателям о заказах с Pinduoduo.",
            sections: [
                {
                    title: "1. Как на самом деле работает модель совместных покупок Pinduoduo",
                    contentPre: "Цены на Pinduoduo ниже, чем на любой другой китайской платформе, включая 1688 во многих категориях. Понимание того, почему это так, поможет вам использовать её правильно.\n\nСтандартная модель:\nВ большинстве объявлений Pinduoduo указаны две цены — индивидуальная и более низкая командная (групповая). Командная цена активируется, когда минимальное количество покупателей присоединяется к одной и той же покупке в течение установленного времени (обычно 24 часа). Pinduoduo агрегирует покупателей автоматически — вам не нужно искать членов команды самостоятельно.\n\nПочему производители продают так дешево:\nPinduoduo связывает покупателей напрямую с фабриками, исключая торговые компании и розничную наценку. Алгоритм платформы гарантирует объемы продаж производителям в обмен на глубокие скидки. Фабрика отправляет товар напрямую покупателю — или, в нашем случае, на наш склад в Шэньчжэне.\n\nЧто это значит для качества:\nЦены напрямую от фабрики означают, что вы получаете реальную заводскую цену, но также и заводскую упаковку с минимальным контролем качества (QC). Именно поэтому контроль качества на нашем складе важнее для заказов с Pinduoduo, чем для любой другой платформы.\n\nЧто происходит, если совместная покупка не завершается:\nЕсли групповая покупка не завершена в установленный срок, заказ отменяется, а ваш платеж возвращается. Мы активно отслеживаем это — если совместная покупка не удалась, мы либо сразу же перезапускаем процесс, либо выкупаем по индивидуальной цене (зависит от разницы в цене). Мы согласуем это с вами перед покупкой.",
                },
                {
                    title: "2. Как покупать на Pinduoduo без китайского аккаунта",
                    contentPre: "Pinduoduo имеет больше ограничений для иностранных покупателей, чем Taobao или 1688. Платформа требует китайский номер телефона для регистрации и принимает только WeChat Pay и Alipay. Механика совместных покупок добавляет еще один уровень — участие в командной покупке требует активного местного аккаунта с историей транзакций.\n\nКак мы это решаем:\n• Вы отправляете нам ссылку на товар Pinduoduo.\n• Мы проверяем цену командной покупки и доступность группы.\n• Вы переводите сумму покупки нам (в USD или вашей валюте).\n• Мы присоединяемся к совместной покупке, используя наши корпоративные аккаунты.\n• Товар отправляется на наш склад в Шэньчжэне для проверки качества.\n\nВам не нужен аккаунт Pinduoduo. Не нужен WeChat Pay. Не нужен китайский номер телефона.\n\nНаша комиссия: 3% от стоимости заказа — немного выше, чем на других платформах, из-за дополнительных проверок качества (QC), требуемых для товаров Pinduoduo.",
                },
                {
                    title: "3. Проверка качества заказов Pinduoduo: Почему это особенно важно",
                    contentPre: "Ценовое преимущество Pinduoduo имеет свой компромисс — стабильность качества ниже, чем на Taobao или Tmall. В результате наш процесс проверки качества (QC) для Pinduoduo более строгий.\n\nЧто мы проверяем в каждом заказе PDD:\n• Состояние товара — поверхностные дефекты, повреждения и производственные несоответствия чаще встречаются в этом ценовом сегменте. Мы проверяем всё очень внимательно.\n• Соответствие товара — продавцы Pinduoduo иногда заменяют цвета, размеры или модели без предупреждения. Мы сверяем полученное с вашим заказом.\n• Проверка функциональности — для электроники и мелкой бытовой техники мы проводим базовую проверку работоспособности, если это возможно.\n• Проверка количества — оптовые заказы и мульти-упаковки пересчитываются и сверяются с описанием.\n• Упаковка — фабричная упаковка Pinduoduo минимальна. Мы оцениваем, нужна ли дополнительная защитная упаковка для международной перевозки перед отправкой.\n\nЧто вы получаете:\nФотографии (QC) ваших реальных товаров перед международной упаковкой. Если мы обнаружим проблему с качеством, мы свяжемся с продавцом для решения вопроса, пока товар еще в Китае — это единственное реальное окно для возврата или обмена.\n\nНаша рекомендация:\nДля товаров, где стабильность качества имеет решающее значение — одежда с точным размером, электроника со специфическими характеристиками или что-либо хрупкое — всегда запрашийте QC-фото и проверяйте их перед подтверждением отправки.",
                },
                {
                    title: "4. Что стоит покупать на Pinduoduo (И чего следует избегать)",
                    contentPre: "Pinduoduo отлично подходит для одних категорий товаров и менее подходит для других. Знание разницы сэкономит ваше время и убережет от разочарований.\n\nЛучшие категории на Pinduoduo:\n• Товары для дома и кухни — тарелки, хранение, органайзеры, базовая посуда. Цены напрямую от фабрики с приемлемым качеством для повседневного использования.\n• Базовая одежда и аксессуары — футболки, носки, базы, сезонные вещи. Качество функциональное, не премиальное.\n• Аксессуары для телефонов — чехлы, кабели, зарядки, защитные стекла. Напрямую с фабрики, часто идентично аналогам на Taobao, но дешевле.\n• Канцелярия и офисные принадлежности — блокноты, ручки, мелкие органайзеры. Надежная категория со стабильным качеством.\n• Игрушки и сувениры — оптовые закупки, товары для вечеринок, мелкие подарки. Высокая ценность за свои деньги.\n• Сезонные и одноразовые товары — всё, что вы покупаете для разового или краткосрочного использования, где не требуется премиальное качество.\n\nКатегории, где мы рекомендуем Taobao или Tmall:\n• Мода высокого класса и брендовые вещи — аутентичность и контроль качества лучше обеспечиваются в официальных магазинах Tmall.\n• Точная электроника — для товаров, где важны точные характеристики, проверенные продавцы на Taobao надежнее.\n• Товары, требующие точной посадки по размеру — информация о размерах на Pinduoduo менее последовательна. Для одежды, где важна посадка, система отзывов Taobao с реальными фото дает лучшую информацию перед покупкой.",
                },
                {
                    title: "5. Консолидация заказов Pinduoduo с другими платформами",
                    contentPre: "Заказы с Pinduoduo полностью консолидируются с вашими покупками с Taobao, Weidian, 1688, Tmall и Poizon на нашем складе в Шэньчжэне.\n\nКак это работает:\nВсе ваши заказы с разных платформ прибывают на наш склад по отдельности. Мы бесплатно храним их до 30 дней, а затем упаковываем в одно международное отправление. Одна таможенная декларация, один счет за доставку, один трек-номер.\n\nЭкономия:\nТовары Pinduoduo часто бывают маленькими и легкими — это именно та категория, где стоимость доставки за единицу самая высокая при отправке по отдельности. Консолидация 10–15 небольших покупок Pinduoduo в одну коробку с заказами с других платформ обычно снижает общую стоимость доставки на 40–60% по сравнению с отправкой каждого товара отдельно.\n\nПереупаковка для международной доставки:\nФабричная упаковка Pinduoduo предназначена для внутренней курьерской доставки, а не для международной перевозки по морю или воздуху. Мы переупаковываем все товары PDD с использованием соответствующих защитных материалов перед международной отправкой. Для легких объемных товаров доступна вакуумная упаковка для уменьшения объема.",
                },
                {
                    title: "6. Pinduoduo vs Taobao vs 1688: Сравнение платформ",
                    table: {
                        headers: ["Платформа", "Для чего", "Уровень цен", "Стабильность качества", "Политика возврата"],
                        rows: [
                            ["Pinduoduo", "Максимальная скидка, товары на каждый день, базы", "Самые низкие в целом", "Разнится — нужен строгий контроль", "Доступно, но вариативно"],
                            ["Taobao", "Широкий выбор, мода, общий шопинг", "Розничные — конкурентные", "Хорошая у проверенных продавцов", "В основном доступно"],
                            ["Tmall", "Официальные бренды, гарантия оригинальности", "Розничные/брендовые цены", "Высокая — авторизованные дилеры", "Стандартная розничная политика"],
                            ["Weidian", "Эксклюзивные дропы, инди-стритвир, ниша", "Разнится", "Разнится — контроль необходим", "Часто возвратов нет"],
                            ["1688", "Оптовые заказы, прямые закупки с фабрики", "Фабричные цены", "Зависит от поставщика", "Обсуждается"],
                            ["Poizon (Dewu)", "Аутентичные кроссовки и стритвир", "Рыночные цены", "Высокая — проверка платформой", "Обеспечивается платформой"]
                        ]
                    },
                    beyondPlatforms: [
                        { name: "Taobao", desc: "розница и личные покупки", id: "taobao" },
                        { name: "1688", desc: "опт и закупки партий", id: "1688" },
                        { name: "Poizon", desc: "оригинальные кроссовки и брендовая одежда", id: "poizon" },
                        { name: "Weidian", desc: "эксклюзивный стритвир и инди-вещи", id: "weidian" }
                    ],
                    afterTable: "Какую платформу выбрать:\n• Максимальная скидка на повседневные товары → Pinduoduo\n• Широчайший выбор, баланс цены и качества → Taobao\n• Покупка официальных брендов с гарантией → Tmall\n• Эксклюзивный нишевый стритвир → Weidian\n• Оптовые заказы с фабрик → 1688\n• 100% оригинальные кроссовки → Poizon\n\nМы осуществляем выкуп и объединяем заказы со всех шести платформ. Для каждой платформы есть отдельная страница с подробностями."
                }
            ]
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

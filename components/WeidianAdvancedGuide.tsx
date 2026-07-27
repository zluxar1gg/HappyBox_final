import React, { useState } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { Language } from '../utils/translations';
import { TableWrapper } from './TableWrapper';

interface WeidianAdvancedGuideProps {
    language: Language;
    onNavigate?: (page: string) => void;
}

export const WeidianAdvancedGuide: React.FC<WeidianAdvancedGuideProps> = ({ language, onNavigate }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const content = {
        en: {
            title: "Weidian Buying Guide 2026",
            subtitle: "Everything international buyers need to know about purchasing from Weidian without a Chinese account",
            sections: [
                {
                    title: "1. How to Buy from Weidian Without a Chinese Account",
                    shortTitle: "1. Buying Process",
                    contentPre: "Weidian operates entirely within China's domestic payment ecosystem. Sellers only accept WeChat Pay and Alipay — both require a Chinese bank account and a verified Chinese phone number to set up. International buyers have no direct way to complete a purchase.\n\nHow a buying agent solves this:\n• You find a product on the Weidian app and send us the link\n• We verify the seller and confirm the item matches the listing\n• You transfer the purchase amount to us in USD or your local currency\n• We pay the seller via WeChat Pay or Alipay from our Chinese accounts\n• The item ships to our Shenzhen warehouse for QC inspection\n\nNo Chinese account needed. No WeChat Pay setup. No VPN required to browse — though the app and website are in Chinese, product links work internationally.\n\nOur fee: 2% of the order value."
                },
                {
                    title: "2. How We Verify Weidian Sellers",
                    shortTitle: "2. Seller Verification",
                    contentPre: "Weidian has no universal seller rating system visible to international buyers. Verification requires reading Chinese reviews, checking transaction history, and understanding platform-specific trust signals — none of which are accessible without Chinese language ability.\n\nWhat we check before every purchase:\n• Transaction volume — active sellers with high transaction counts have an established track record. New stores with minimal history are treated with extra caution.\n• Response time — sellers who respond quickly to inquiries are operationally active. Slow or no response before purchase predicts problems after.\n• Review content — we read Chinese customer reviews for recurring complaints about item quality, packaging, or shipping delays.\n• Listing accuracy — we compare listing photos against known item details and flag discrepancies before purchasing.\n\nRed flags we decline: sellers asking for payment outside Weidian, listings with stock photos only, stores with no transaction history, and sellers who cannot confirm availability within 24 hours.\n\nIf we flag a seller as risky, we tell you before purchasing and suggest alternatives where available."
                },
                {
                    title: "3. The QC Process: What We Check Before Shipping",
                    shortTitle: "3. QC Process",
                    contentPre: "Quality Control is the most important step for Weidian purchases. Unlike large platforms with standardized seller accountability, Weidian is independent seller territory — quality and presentation vary significantly between stores.\n\nWhat our QC inspection covers:\n• Item condition — we check for visible defects, damage, or quality issues inconsistent with the listing.\n• Sizing and measurements — for clothing and footwear, we measure against the listed specifications.\n• Packaging integrity — we check that original packaging, tags, and accessories are present and undamaged.\n• Item-to-listing comparison — we compare the received item against the listing photos and flag any discrepancies.\n\nWhat you receive:\nA set of detailed QC photos of your actual item from multiple angles before we pack for international shipping. You review and approve before we ship. If something is wrong, we contact the seller for resolution while the item is still in China.\n\nWhy this matters:\nOnce an item clears Chinese customs and ships internationally, returns to a Weidian seller become logistically impossible for most buyers. QC in Shenzhen is your last realistic opportunity to catch problems."
                },
                {
                    title: "4. Weidian Return Policy: What to Know Before You Buy",
                    shortTitle: "4. Return Policy",
                    contentPre: "This is one of the most important differences between Weidian and mainstream e-commerce platforms.\n\nThe reality:\nMany Weidian sellers — particularly those selling limited or exclusive items — do not accept returns or exchanges under any circumstances. This is standard practice on the platform, not an exception.\n\nBefore every purchase, we confirm with the seller:\n• Whether returns are accepted and under what conditions\n• The window for raising a dispute if the item is not as described\n• Whether exchanges are possible for sizing issues\n\nOur recommendation:\nNever purchase a high-value Weidian item without confirming the return policy first. We do this automatically as part of the purchasing process — but if you have specific concerns about a particular item, flag it when you send us the link.\n\nWhat happens if an item arrives damaged at our warehouse:\nIf we receive an item that clearly does not match the listing, we raise a dispute with the seller immediately — while the item is still at our Shenzhen warehouse and the dispute window is open. This is significantly more effective than raising a dispute after international shipping."
                },
                {
                    title: "5. Consolidating Weidian Orders with Other Platforms",
                    shortTitle: "5. Consolidating Orders",
                    contentPre: "Weidian is rarely the only platform international buyers use. Most shoppers combine Weidian finds with purchases from Taobao, 1688, Poizon, or Tmall.\n\nHow consolidation works:\nAll your orders from different platforms arrive at our Shenzhen warehouse separately. We hold them for up to 30 days at no cost, then pack everything into one international shipment. One customs declaration, one freight invoice, one tracking number.\n\nWhy this matters for cost:\nShipping five separate small packages internationally costs significantly more than one consolidated shipment of the same total weight. Consolidation consistently reduces your per-item shipping cost — particularly for air freight where fixed handling fees apply per shipment.\n\nPlatform combinations we handle regularly:\n• Weidian + Taobao — the most common combination for streetwear and lifestyle buyers\n• Weidian + Poizon — for buyers mixing authenticated and non-authenticated items\n• Weidian + 1688 — for buyers combining niche fashion with wholesale orders\n• Weidian + Tmall — for mixing exclusive indie finds with official brand purchases"
                },
                {
                    title: "6. Weidian vs Taobao vs Poizon: Which Platform for What",
                    shortTitle: "6. Platform Comparison",
                    table: {
                        headers: ["Platform", "Best for", "Seller type", "Return policy", "Intl payment"],
                        rows: [
                            ["Weidian", "Exclusive drops, indie streetwear, niche items", "Independent sellers", "Often no returns", "Not supported"],
                            ["Taobao", "Wide selection, everyday items, mainstream fashion", "Mix of independent and commercial", "Generally available", "Not supported"],
                            ["Poizon (Dewu)", "Authenticated sneakers and streetwear", "Verified sellers", "Platform-backed", "Not supported"],
                            ["Tmall", "Official brand stores, guaranteed authenticity", "Brand flagships", "Standard retail policy", "Not supported"],
                            ["1688", "Wholesale bulk orders, factory direct", "Manufacturers and wholesalers", "Negotiable", "Not supported"],
                            ["Pinduoduo", "Discounted consumer goods, group buying", "Commercial sellers", "Available", "Not supported"]
                        ]
                    },
                    beyondPlatforms: [
                        { name: "Taobao", desc: "Wide selection, easier purchasing process", id: "taobao" },
                        { name: "Poizon (Dewu)", desc: "Authenticated brand items with platform guarantee", id: "poizon" },
                        { name: "1688", desc: "Wholesale and bulk directly from factories", id: "1688" },
                        { name: "Tmall", desc: "Official brand purchases", id: "tmall" }
                    ],
                    afterTable: "Which to use:\n• Hard-to-find exclusive items → Weidian\n• Wide selection, easier purchasing process → Taobao\n• Authenticated brand items with platform guarantee → Poizon\n• Official brand purchases → Tmall\n• Wholesale and bulk → 1688\n\nWe support purchasing and consolidation across all six platforms. For detailed information on individual platforms, see our dedicated pages."
                }
            ],
            readMore: "Read the Weidian Buying Guide",
            hide: "Hide Guide"
        },
        ru: {
            title: "Руководство по закупкам на Weidian 2026",
            subtitle: "Всё, что нужно знать международным покупателям о покупках на Weidian без китайского счета",
            sections: [
                {
                    title: "1. Как покупать на Weidian без китайского счета",
                    shortTitle: "1. Процесс покупки",
                    contentPre: "Weidian работает исключительно внутри китайской платежной системы. Продавцы принимают только WeChat Pay и Alipay — для обоих требуется счет в китайском банке и подтвержденный китайский номер телефона. У международных покупателей нет прямого способа оплатить покупку.\n\nКак мы это решаем:\n• Вы находите товар в приложении Weidian и отправляете нам ссылку\n• Мы проверяем продавца и соответствие товара описанию\n• Вы переводите сумму покупки нам в удобной валюте\n• Мы оплачиваем заказ продавцу через WeChat Pay или Alipay со своих счетов в Китае\n• Товар доставляется на наш склад в Шэньчжэне для проверки качества\n\nВам не нужен китайский счет, не нужно настраивать WeChat Pay и не нужен VPN. Хотя приложение и сайт на китайском, ссылки работают во всем мире.\n\nНаша комиссия: 2% от суммы заказа."
                },
                {
                    title: "2. Как мы проверяем продавцов на Weidian",
                    shortTitle: "2. Проверка продавцов",
                    contentPre: "На Weidian нет универсальной системы рейтинга продавцов, понятной иностранцам. Проверка требует чтения китайских отзывов, анализа истории транзакций и понимания специфических для платформы сигналов доверия.\n\nЧто мы проверяем перед каждой покупкой:\n• Объем транзакций — у активных продавцов с большим числом сделок есть подтвержденная история. К новым магазинам с минимальной историей мы относимся с особой осторожностью.\n• Время ответа — продавцы, которые быстро отвечают на запросы, активно работают. Медленные ответы до покупки предвещают проблемы после.\n• Отзывы — мы читаем китайские отзывы покупателей на предмет повторяющихся жалоб на качество товара, упаковку или задержки доставки.\n• Точность описания — мы сравниваем фотографии в объявлении с известными деталями товара и отмечаем несоответствия до покупки.\n\nКрасные флаги: продавцы просят оплату вне Weidian, в объявлениях только стоковые фото, нет истории транзакций, продавец не может подтвердить наличие товара в течение 24 часов.\n\nЕсли мы считаем продавца рискованным, мы сообщаем вам об этом до покупки и предлагаем альтернативы, если они есть."
                },
                {
                    title: "3. Процесс проверки (QC): что мы смотрим перед отправкой",
                    shortTitle: "3. Процесс QC",
                    contentPre: "Контроль качества — важнейший этап при покупках на Weidian. В отличие от крупных платформ со стандартизированной ответственностью продавцов, Weidian — это территория независимых магазинов, где качество и подача могут сильно различаться.\n\nЧто включает наша проверка:\n• Состояние товара — мы ищем видимые дефекты, повреждения или проблемы с качеством, не соответствующие описанию.\n• Размеры — для одежды и обуви мы сверяем замеры с заявленными спецификациями.\n• Целостность упаковки — мы проверяем наличие и сохранность оригинальной упаковки, бирок и аксессуаров.\n• Соответствие фото — мы сравниваем полученный товар с фотографиями в объявлении и отмечаем любые несоответствия.\n\nЧто получаете вы:\nНабор детальных фотографий вашего реального товара с разных ракурсов перед упаковкой для международной доставки. Вы проверяете и одобряете товар перед отправкой. Если что-то не так, мы связываемся с продавцом для решения проблемы, пока товар еще в Китае.\n\nПочему это важно:\nКак только товар пройдет китайскую таможню и отправится за границу, возврат продавцу на Weidian станет логистически невозможным для большинства покупателей. Проверка в Шэньчжэне — ваша последняя реальная возможность выявить проблемы."
                },
                {
                    title: "4. Политика возвратов на Weidian: что нужно знать до покупки",
                    shortTitle: "4. Политика возвратов",
                    contentPre: "Это одно из самых важных отличий Weidian от основных платформ электронной коммерции.\n\nРеальность:\nМногие продавцы на Weidian — особенно те, кто продает лимитированные или эксклюзивные товары — не принимают возвраты или обмены ни при каких обстоятельствах. На этой платформе это стандартная практика, а не исключение.\n\nПеред каждой покупкой мы уточняем у продавца:\n• Принимаются ли возвраты и на каких условиях\n• Сроки для открытия спора, если товар не соответствует описанию\n• Возможен ли обмен из-за проблем с размером\n\nНаша рекомендация:\nНикогда не покупайте дорогой товар на Weidian, не уточнив предварительно политику возврата. Мы делаем это автоматически как часть процесса закупки — но если у вас есть конкретные опасения по поводу товара, сообщите об этом, когда будете отправлять нам ссылку.\n\nЧто происходит, если на наш склад поступает поврежденный товар:\nЕсли мы получаем товар, который явно не соответствует описанию, мы немедленно открываем спор с продавцом — пока товар еще находится на нашем складе в Шэньчжэне и окно для спора открыто. Это гораздо эффективнее, чем пытаться открыть спор после международной доставки."
                },
                {
                    title: "5. Консолидация заказов Weidian с другими платформами",
                    shortTitle: "5. Консолидация заказов",
                    contentPre: "Международные покупатели редко используют только Weidian. Чаще всего они объединяют находки с Weidian с покупками на Taobao, 1688, Poizon или Tmall.\n\nКак работает консолидация:\nВсе ваши заказы с разных платформ поступают на наш склад в Шэньчжэне по отдельности. Мы бесплатно храним их до 30 дней, а затем упаковываем все в одно международное отправление. Одна таможенная декларация, один счет за доставку, один трек-номер.\n\nПочему это важно для стоимости:\nМеждународная отправка пяти отдельных небольших посылок стоит значительно дороже, чем одно консолидированное отправление такого же общего веса. Консолидация стабильно снижает стоимость доставки каждого товара.\n\nПопулярные комбинации платформ:\n• Weidian + Taobao — самая частая комбинация для покупателей стритвира и лайфстайл товаров\n• Weidian + Poizon — для смешивания аутентифицированных и обычных товаров\n• Weidian + 1688 — для комбинации нишевой моды с оптовыми заказами\n• Weidian + Tmall — для объединения эксклюзивных инди-находок с официальными покупками брендов"
                },
                {
                    title: "6. Weidian vs Taobao vs Poizon: какую платформу выбрать",
                    shortTitle: "6. Сравнение платформ",
                    table: {
                        headers: ["Платформа", "Для чего", "Тип продавцов", "Возвраты", "Международная оплата"],
                        rows: [
                            ["Weidian", "Эксклюзив, инди-стритвир, ниша", "Независимые продавцы", "Часто нет", "Нет"],
                            ["Taobao", "Широкий выбор, повседневные вещи", "Смешанный (инди и коммерция)", "Обычно да", "Нет"],
                            ["Poizon (Dewu)", "Аутентифицированные кроссовки и стритвир", "Верифицированные продавцы", "Гарантия платформы", "Нет"],
                            ["Tmall", "Официальные магазины брендов", "Флагманы брендов", "Стандартная политика", "Нет"],
                            ["1688", "Оптовые партии напрямую с фабрик", "Производители и оптовики", "По договоренности", "Нет"],
                            ["Pinduoduo", "Дисконтные товары, групповые покупки", "Коммерческие продавцы", "Доступно", "Нет"]
                        ]
                    },
                    beyondPlatforms: [
                        { name: "Taobao", desc: "Широкий выбор и более простой процесс покупки", id: "taobao" },
                        { name: "Poizon (Dewu)", desc: "Аутентифицированные товары с гарантией платформы", id: "poizon" },
                        { name: "1688", desc: "Оптовые партии напрямую с фабрик", id: "1688" },
                        { name: "Tmall", desc: "Официальные покупки у брендов", id: "tmall" }
                    ],
                    afterTable: "Что выбрать:\n• Труднодоступные эксклюзивные вещи → Weidian\n• Широкий выбор, более простая покупка → Taobao\n• Аутентифицированные брендовые вещи с гарантией → Poizon\n• Покупки у официальных брендов → Tmall\n• Опт и партии напрямую с фабрик → 1688\n\nМы поддерживаем закупку и консолидацию на всех шести платформах. Для подробной информации о других платформах смотрите наши специальные страницы."
                }
            ],
            readMore: "Читать руководство по Weidian",
            hide: "Свернуть руководство"
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

                    <div className="bg-gray-50/80 rounded-2xl p-6 mt-10 text-left flex flex-wrap items-center gap-y-3 gap-x-2 text-sm md:text-base border border-gray-100">
                        <span className="text-gray-500 mr-2">{language === 'en' ? 'Jump to chapter:' : 'Перейти к разделу:'}</span>
                        {t.sections.map((section, idx) => (
                            <React.Fragment key={idx}>
                                <button 
                                    onClick={() => document.getElementById(`chapter-weidian-${idx}`)?.scrollIntoView({ behavior: 'smooth' })} 
                                    className="text-brand-blue hover:underline font-medium transition-all"
                                >
                                    {(section as any).shortTitle}
                                </button>
                                {idx < t.sections.length - 1 && (
                                    <span className="w-1.5 h-1.5 rounded-full bg-gray-300 mx-1"></span>
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </div>

                <div className="space-y-16">
                    {t.sections.map((section, idx) => (
                        <div id={`chapter-weidian-${idx}`} key={idx} className="scroll-mt-28">
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

import React from 'react';
import { ChevronRight } from 'lucide-react';

export const AlibabaAdvancedGuide = ({ language, onNavigate }: { language: 'en' | 'ru', onNavigate: (page: string) => void }) => {
    const content = {
        en: {
            title: "Alibaba Sourcing Guide 2026: How to Buy from China Safely and Cost-Effectively",
            subtitle: "The technical reference for Alibaba buyers who want to protect their investment and reduce landed costs",
            sections: [
                {
                    title: "1. EXW, FOB, DDP: Understanding Incoterms Before You Buy",
                    shortTitle: "1. Incoterms Explained",
                    contentPre: "Incoterms determine who pays for what — and where responsibility transfers from seller to buyer. Getting this wrong is one of the most expensive mistakes Alibaba buyers make.\n\nThe three terms you'll encounter most:\n\nEXW (Ex Works)\nThe seller's responsibility ends at their factory gate. You pay for everything from that point: domestic China trucking to port, export clearance, international freight, import duties, and last-mile delivery. The lowest product price — but requires you to arrange all logistics.\nBest for: Buyers using a freight forwarder or agent (like HappyBox) who can arrange competitive shipping. Always request EXW pricing first — it gives you the true product cost to compare against other suppliers.\n\nFOB (Free On Board)\nThe seller covers domestic China trucking and export clearance. Responsibility transfers when goods are loaded onto the vessel. You pay for international freight, import duties, and last-mile delivery.\nBest for: Buyers who have their own freight forwarder and want the supplier to handle Chinese export logistics.\n\nDDP (Delivered Duty Paid)\nThe seller — or your agent — covers everything: export clearance, international freight, import duties, and last-mile delivery. You pay one all-inclusive price. No additional charges at destination.\nBest for: Buyers who want cost certainty and no customs involvement. When you ship DDP with HappyBox, we handle every step from our Shenzhen warehouse to your door.\n\nThe critical comparison:\nMany Alibaba suppliers quote FOB or DDP prices that include heavily marked-up freight. Always request EXW pricing, then compare the supplier's shipping quote with an independent rate from HappyBox. The difference is typically 30–50% in your favour."
                },
                {
                    title: "2. How to Verify Alibaba Suppliers Before Placing an Order",
                    shortTitle: "2. Supplier Verification",
                    contentPre: "Alibaba has millions of suppliers — and not all of them are manufacturers. Trading companies, middlemen, and low-quality factories all list on the platform. Verification before payment is essential.\n\nSupplier types on Alibaba:\nVerified Manufacturer — has production capacity and sells direct. Lowest prices, longer lead times, higher MOQs.\nTrading Company — buys from factories and resells. More flexible on MOQ and product mix, but prices are higher.\n\nBoth types are legitimate — but knowing which you're dealing with sets correct expectations on price, MOQ, and customization capability.\n\nWhat to check:\nTrade history — years in operation and transaction volume. Suppliers with long histories on Alibaba have reputations to protect.\nResponse Rate and Time — suppliers who respond within hours are operationally active. Low response rate predicts poor communication after payment.\nVerified certifications — ISO, BSCI, and product-specific certifications (CE, RoHS, FDA) indicate legitimate manufacturing operations. We verify certificate authenticity before recommending a supplier.\nFactory audit — for large orders, Alibaba offers third-party factory audits. We can also conduct our own pre-shipment visit for significant orders.\nSample order — the most reliable verification method. Order a sample before committing to bulk. We consolidate samples from multiple suppliers into one international shipment so you can compare quality side by side.\n\nRed flags we watch for:\nPrices significantly below market rate. Reluctance to provide factory photos or video. Requests to pay outside Alibaba Trade Assurance. No verifiable business registration. Newly created listings with no transaction history."
                },
                {
                    title: "3. Alibaba Trade Assurance: How It Works and When It Protects You",
                    shortTitle: "3. Trade Assurance",
                    contentPre: "Trade Assurance is Alibaba's buyer protection program. Understanding what it covers — and what it doesn't — prevents expensive surprises.\n\nWhat Trade Assurance covers:\nIf goods don't match the order description, or if shipment is significantly delayed beyond the agreed date, Alibaba mediates the dispute and can refund your payment.\n\nWhat it requires:\nThe product specifications, quantity, quality standards, and shipping date must be explicitly stated in the Trade Assurance order — not just discussed in chat. Vague orders get vague protection.\n\nWhat it doesn't cover:\nDisputes about quality that weren't specified in writing. Shipping damage after the supplier hands goods to a carrier. Customs issues at the destination.\n\nOur recommendation:\nAlways pay through Trade Assurance for direct supplier payments. And always specify product requirements in writing in the order — dimensions, materials, colours, packaging, and quality standards. Our team helps draft these specifications in technical terms that hold up in a dispute.\n\nWhen you use HappyBox for payment:\nWe pay the supplier on your behalf and handle the purchasing relationship directly. This adds an additional layer of accountability — we inspect goods on arrival and flag discrepancies before international shipping, which is far more effective than raising a Trade Assurance dispute after the fact."
                },
                {
                    title: "4. Sample Orders: How to Test Suppliers Before Bulk Commitment",
                    shortTitle: "4. Sample Orders",
                    contentPre: "Ordering a sample before bulk is the single most effective way to protect your Alibaba investment. It validates product quality, supplier reliability, and shipping accuracy before you commit significant capital.\n\nHow the sample process works with HappyBox:\nYou identify 2–5 potential suppliers for the same product. We order samples from each simultaneously. All samples ship to our Shenzhen warehouse. We consolidate them into one international shipment to your location — one shipping cost for multiple supplier evaluations.\n\nWhat to evaluate in a sample:\nProduct quality against specification — does it match what was agreed in writing?\nPackaging quality — is it export-ready, or will it need repacking for international transit?\nActual dimensions and weight — compare against the listing. Discrepancies at sample stage multiply into significant problems at bulk scale.\nSupplier responsiveness during the process — how a supplier handles a sample order predicts how they handle bulk.\n\nSample consolidation cost:\nShipping 5 samples individually from 5 suppliers is expensive. Consolidating them at our Shenzhen warehouse into one international shipment typically costs the same as shipping one package individually. We recommend this approach for any new supplier relationship."
                },
                {
                    title: "5. Consolidating Orders from Multiple Alibaba Suppliers",
                    shortTitle: "5. Consolidation",
                    contentPre: "Sourcing from Alibaba rarely means a single supplier. Most importers work with multiple factories for different product categories — which creates a consolidation opportunity.\n\nThe problem without consolidation:\n5 suppliers ship 5 separate orders to your destination. 5 international freight bills, 5 customs entries, 5 handling charges. Cost adds up fast — particularly for smaller LCL shipments where minimum charges apply.\n\nHow consolidation works:\nAll 5 suppliers ship domestically to our Shenzhen warehouse — cheap and fast within China. We hold everything for up to 30 days at no cost. Once all orders arrive, we inspect, repack into the most efficient configuration, and ship as one consolidated international cargo.\n\nThe saving:\nOne international freight bill. One customs entry. Handling charges applied once. For mixed orders across 3–8 suppliers, consolidation typically reduces total shipping cost by 35–55%.\n\nCross-platform consolidation:\nAlibaba orders consolidate with purchases from 1688, Taobao, Weidian, and Poizon. If you source wholesale from Alibaba and also buy from other platforms, everything ships together in one operation."
                },
                {
                    title: "6. Alibaba vs 1688 vs Taobao: Which Platform for What",
                    shortTitle: "6. Platform Comparison",
                    table: {
                        headers: ["Platform", "Best for", "Pricing", "Language", "International payment", "MOQ"],
                        rows: [
                            ["Alibaba", "B2B, export-ready suppliers, large orders", "30–100% above 1688", "English", "Yes", "Medium–High"],
                            ["1688", "Factory direct, lowest wholesale prices", "Lowest — domestic price", "Chinese only", "Not supported", "Low–Medium"],
                            ["Taobao", "B2C, single items, general shopping", "Retail", "Chinese only", "Not supported", "1 unit"],
                            ["Tmall", "Official brands, guaranteed authenticity", "Brand retail price", "Chinese only", "Not supported", "1 unit"],
                            ["Weidian", "Exclusive streetwear, indie brands", "Varies", "Chinese only", "Not supported", "1 unit"],
                            ["Pinduoduo", "Maximum discount, everyday basics", "Lowest B2C", "Chinese only", "Not supported", "1 unit"]
                        ]
                    },
                    afterTable: "Which to use:\nFirst-time international buyer, English communication needed → Alibaba\nLowest wholesale factory prices, agent required → 1688\nSingle items, personal shopping → Taobao\nOfficial brand purchases → Tmall\nExclusive niche items → Weidian\nMaximum discount on everyday goods → Pinduoduo\n\nAlibaba vs 1688 — the key decision:\nAlibaba is more accessible for international buyers — English communication, international payment, Trade Assurance protection. 1688 is significantly cheaper for the same products but requires a buying agent. For established importers comfortable with agent-assisted purchasing, 1688 typically delivers 30–60% lower product costs than equivalent Alibaba listings."
                }
            ]
        },
        ru: {
            title: "Гайд по закупкам на Alibaba 2026: Как безопасно и выгодно покупать в Китае",
            subtitle: "Техническое руководство для покупателей Alibaba, которые хотят защитить свои инвестиции и снизить стоимость доставки",
            sections: [
                {
                    title: "1. EXW, FOB, DDP: Разбираемся в Инкотермс перед покупкой",
                    shortTitle: "1. Инкотермс",
                    contentPre: "Инкотермс определяют, кто за что платит и где ответственность переходит от продавца к покупателю. Ошибка здесь — одна из самых дорогих для покупателей на Alibaba.\n\nТри термина, с которыми вы будете сталкиваться чаще всего:\n\nEXW (Ex Works / Франко-завод)\nОтветственность продавца заканчивается у ворот его фабрики. Вы платите за всё остальное: доставку по Китаю до порта, экспортное оформление, международный фрахт, импортные пошлины и доставку до двери. Самая низкая цена на товар — но логистику организуете вы.\nКому подходит: Покупателям, работающим с экспедитором или агентом (как HappyBox), который может организовать выгодную доставку. Всегда сначала запрашивайте цену EXW — это дает реальную стоимость товара для сравнения с другими поставщиками.\n\nFOB (Free On Board / Франко-борт)\nПродавец оплачивает доставку по Китаю и экспортное оформление. Ответственность переходит при погрузке на судно. Вы оплачиваете международный фрахт, импортные пошлины и доставку до двери.\nКому подходит: Покупателям, у которых есть свой экспедитор и которые хотят, чтобы поставщик взял на себя экспорт из Китая.\n\nDDP (Delivered Duty Paid / Доставка с оплатой пошлин)\nПродавец — или ваш агент — берет на себя всё: экспорт, международный фрахт, импортные пошлины и доставку до двери. Вы платите одну цену «всё включено». Никаких дополнительных расходов.\nКому подходит: Покупателям, которым нужна определенность в расходах и отсутствие проблем с таможней. Отправляя DDP с HappyBox, мы берем на себя каждый этап — от склада в Шэньчжэне до вашей двери.\n\nВажное сравнение:\nМногие поставщики на Alibaba дают цены FOB или DDP, в которые включена огромная наценка на доставку. Всегда запрашивайте цену EXW, а затем сравнивайте их стоимость доставки с независимым тарифом от HappyBox. Разница часто составляет 30–50% в вашу пользу."
                },
                {
                    title: "2. Как проверять поставщиков на Alibaba перед оплатой",
                    shortTitle: "2. Проверка поставщиков",
                    contentPre: "На Alibaba миллионы поставщиков, и далеко не все они производители. Торговые компании, посредники и фабрики низкого качества — все они есть на платформе. Проверка до оплаты обязательна.\n\nТипы поставщиков на Alibaba:\nVerified Manufacturer (Проверенный производитель) — имеет производственные мощности и продает напрямую. Самые низкие цены, долгие сроки производства, высокий минимальный объем заказа (MOQ).\nTrading Company (Торговая компания) — закупает у фабрик и перепродает. Более гибкие условия по MOQ и ассортименту, но цены выше.\n\nОба типа легальны — но понимание, с кем вы работаете, задает правильные ожидания по цене, MOQ и возможностям кастомизации.\n\nЧто проверять:\nИсторию торговли — годы работы и объем транзакций. Поставщики с долгой историей на Alibaba дорожат репутацией.\nСкорость ответа (Response Rate and Time) — поставщики, отвечающие в течение пары часов, активно работают. Долгий ответ до покупки предвещает плохую коммуникацию после.\nПроверенные сертификаты — ISO, BSCI и сертификаты на продукцию (CE, RoHS, FDA) указывают на реальное производство. Мы проверяем подлинность сертификатов перед рекомендацией поставщика.\nАудит фабрики — для крупных заказов Alibaba предлагает аудит третьей стороной. Мы также можем провести собственную инспекцию перед отправкой крупной партии.\nЗаказ образца — самый надежный метод проверки. Заказывайте образец перед оптовой партией. Мы консолидируем образцы от разных поставщиков в одну отправку, чтобы вы могли сравнить качество вживую.\n\nКрасные флаги:\nЦены значительно ниже рыночных. Нежелание предоставить фото или видео фабрики. Просьбы оплатить в обход Trade Assurance. Отсутствие проверяемой бизнес-лицензии. Недавно созданные профили без истории транзакций."
                },
                {
                    title: "3. Alibaba Trade Assurance: Как это работает и когда защищает",
                    shortTitle: "3. Trade Assurance",
                    contentPre: "Trade Assurance — это программа защиты покупателей Alibaba. Понимание того, что она покрывает (и чего не покрывает), убережет от дорогих сюрпризов.\n\nЧто покрывает Trade Assurance:\nЕсли товар не соответствует описанию заказа или сроки отправки сильно нарушены, Alibaba выступает посредником в споре и может вернуть вам деньги.\n\nЧто для этого нужно:\nСпецификации товара, количество, стандарты качества и дата отправки должны быть четко прописаны в самом заказе Trade Assurance, а не только обсуждаться в чате. Размытые формулировки дают размытую защиту.\n\nЧто не покрывается:\nСпоры о качестве, которые не были письменно зафиксированы в заказе. Повреждения при транспортировке после передачи товара перевозчику. Проблемы с таможней в вашей стране.\n\nНаша рекомендация:\nВсегда оплачивайте заказы через Trade Assurance при прямой работе с поставщиком. И всегда прописывайте требования к товару в заказе — размеры, материалы, цвета, упаковку и стандарты качества. Наша команда помогает составить эти спецификации техническим языком, который будет иметь вес в споре.\n\nЕсли вы оплачиваете через HappyBox:\nМы оплачиваем товар поставщику от вашего имени и напрямую ведем процесс закупки. Это дает дополнительный уровень защиты — мы проверяем товар по прибытии на склад и отмечаем несоответствия до международной отправки. Это намного эффективнее, чем открывать спор в Trade Assurance постфактум."
                },
                {
                    title: "4. Заказ образцов: Как протестировать поставщиков до опта",
                    shortTitle: "4. Заказ образцов",
                    contentPre: "Заказ образца перед оптовой партией — самый эффективный способ защитить ваши инвестиции на Alibaba. Это позволяет проверить качество продукта, надежность поставщика и точность доставки до того, как вы вложите значительный капитал.\n\nКак работает процесс заказа образцов с HappyBox:\nВы находите 2–5 потенциальных поставщиков для одного товара. Мы заказываем образцы у каждого из них одновременно. Все образцы прибывают на наш склад в Шэньчжэне. Мы объединяем их в одну международную отправку — вы платите за доставку один раз и оцениваете сразу нескольких поставщиков.\n\nЧто оценивать в образце:\nКачество продукта на соответствие спецификации — совпадает ли оно с тем, что было согласовано в переписке?\nКачество упаковки — готова ли она к экспорту или потребуется переупаковка для международной перевозки?\nРеальные габариты и вес — сравните с заявленными в объявлении. Расхождения на этапе образца умножаются в серьезные проблемы при опте.\nОтзывчивость поставщика — то, как поставщик справляется с заказом образца, показывает, как он будет работать с оптом.\n\nСтоимость консолидации образцов:\nОтправлять 5 образцов по отдельности от 5 поставщиков — дорого. Объединение их на нашем складе в Шэньчжэне в одну отправку обычно стоит столько же, сколько доставка одной посылки. Мы рекомендуем этот подход при работе с любым новым поставщиком."
                },
                {
                    title: "5. Консолидация заказов от нескольких поставщиков Alibaba",
                    shortTitle: "5. Консолидация",
                    contentPre: "Закупки на Alibaba редко ограничиваются одним поставщиком. Большинство импортеров работают с разными фабриками для разных категорий товаров, что создает возможности для консолидации.\n\nПроблема без консолидации:\n5 поставщиков отправляют 5 отдельных заказов в вашу страну. Это 5 международных счетов за фрахт, 5 таможенных деклараций, 5 сборов за обработку. Затраты быстро растут, особенно для небольших отправлений (LCL), где действуют минимальные тарифы.\n\nКак работает консолидация:\nВсе 5 поставщиков отправляют товары на наш склад в Шэньчжэне — это быстро и дешево внутри Китая. Мы бесплатно храним их до 30 дней. Когда все заказы прибывают, мы их проверяем, эффективно переупаковываем и отправляем как один консолидированный международный груз.\n\nЭкономия:\nОдин международный счет за фрахт. Одна таможенная декларация. Сбор за обработку применяется один раз. Для смешанных заказов от 3–8 поставщиков консолидация обычно снижает общую стоимость доставки на 35–55%.\n\nКросс-платформенная консолидация:\nЗаказы с Alibaba консолидируются с покупками с 1688, Taobao, Weidian и Poizon. Если вы закупаете оптом на Alibaba и также покупаете на других платформах, всё это отправляется вместе одной партией."
                },
                {
                    title: "6. Alibaba vs 1688 vs Taobao: Какую платформу выбрать",
                    shortTitle: "6. Сравнение платформ",
                    table: {
                        headers: ["Платформа", "Для чего", "Уровень цен", "Язык", "Международная оплата", "MOQ"],
                        rows: [
                            ["Alibaba", "B2B, готово к экспорту, крупные заказы", "На 30–100% выше 1688", "Английский", "Да", "Средний-Высокий"],
                            ["1688", "Напрямую с фабрики, лучшие оптовые цены", "Самые низкие — для рынка Китая", "Только китайский", "Нет", "Низкий-Средний"],
                            ["Taobao", "B2C, розница, общий шопинг", "Розничные", "Только китайский", "Нет", "1 шт"],
                            ["Tmall", "Официальные бренды, гарантия оригинала", "Розничная цена бренда", "Только китайский", "Нет", "1 шт"],
                            ["Weidian", "Стритвир, нишевые и инди-бренды", "Разные", "Только китайский", "Нет", "1 шт"],
                            ["Pinduoduo", "Максимальные скидки, базовые товары", "Самые низкие для B2C", "Только китайский", "Нет", "1 шт"]
                        ]
                    },
                    afterTable: "Что использовать:\nПервая международная закупка, нужен английский → Alibaba\nСамые низкие оптовые цены фабрик, нужен агент → 1688\nЕдиничные товары, личные покупки → Taobao\nПокупки официальных брендов → Tmall\nЭксклюзивные нишевые вещи → Weidian\nМаксимальная скидка на повседневные товары → Pinduoduo\n\nAlibaba vs 1688 — главное решение:\nAlibaba доступнее для международных покупателей: общение на английском, международная оплата, защита Trade Assurance. 1688 значительно дешевле для тех же товаров, но требует байера (агента). Для опытных импортеров, привыкших работать с агентами, 1688 обычно снижает стоимость товара на 30–60% по сравнению с аналогичными предложениями на Alibaba."
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

                    <div className="bg-gray-50/80 rounded-2xl p-6 mt-10 text-left flex flex-wrap items-center gap-y-3 gap-x-2 text-sm md:text-base border border-gray-100">
                        <span className="text-gray-500 mr-2">{language === 'en' ? 'Jump to chapter:' : 'Перейти к разделу:'}</span>
                        {t.sections.map((section, idx) => (
                            <React.Fragment key={idx}>
                                <button 
                                    onClick={() => document.getElementById(`chapter-alibaba-${idx}`)?.scrollIntoView({ behavior: 'smooth' })} 
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
                        <div id={`chapter-alibaba-${idx}`} key={idx} className="scroll-mt-28">
                            <h3 className="text-2xl md:text-3xl font-extrabold text-brand-dark mb-6 leading-tight">
                                {section.title}
                            </h3>
                            
                            {section.contentPre && (
                                <p className="mb-6 text-base md:text-lg text-gray-700 font-medium leading-relaxed whitespace-pre-line">
                                    {section.contentPre}
                                </p>
                            )}

                            {section.table && (
                                <div className="overflow-x-auto bg-gray-50 rounded-2xl border border-gray-100 my-8">
                                    <table className="w-full text-left border-collapse">
                                        <thead>
                                            <tr>
                                                {section.table.headers.map((header: string, i: number) => (
                                                    <th key={i} className="p-4 md:p-5 border-b border-gray-200 text-brand-dark font-bold text-sm md:text-base whitespace-nowrap bg-gray-100">
                                                        {header}
                                                    </th>
                                                ))}
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {section.table.rows.map((row: string[], i: number) => (
                                                <tr key={i} className="hover:bg-white transition-colors">
                                                    {row.map((cell: string, j: number) => (
                                                        <td key={j} className="p-4 md:p-5 border-b border-gray-100 text-gray-700 text-sm md:text-base font-medium">
                                                            {cell}
                                                        </td>
                                                    ))}
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            )}

                            {section.afterTable && (
                                <p className="mt-6 text-base md:text-lg text-gray-700 font-medium leading-relaxed whitespace-pre-line">
                                    {section.afterTable}
                                </p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

import React from 'react';

export const PoizonAdvancedGuide = ({ language, onNavigate }: { language: 'en' | 'ru', onNavigate: (page: string) => void }) => {
    const content = {
        en: {
            title: "Poizon (Dewu) Buying Guide 2026: How to Buy Authenticated Items from China",
            subtitle: "Everything international buyers need to know about purchasing from Poizon.",
            sections: [
                {
                    title: "1. How Poizon's Authentication System Works",
                    shortTitle: "1. How Authentication Works",
                    contentPre: "Poizon (Dewu) is not a standard marketplace. Every item sold on the platform goes through a mandatory physical authentication process before it reaches the buyer — this is what separates it from Taobao, 1688, and every other Chinese platform.\n\nThe authentication flow:\nSeller lists the item → Buyer purchases → Seller ships to Poizon authentication center → Poizon's team inspects the item physically → If authentic: item is tagged, certificated, and shipped to buyer. If fake: item is returned to seller, buyer is refunded immediately.\n\nNo item reaches our warehouse — or your door — without passing Poizon's inspection first. This is the core value of the platform.\n\nWhat Poizon checks:\nStitching, materials, and construction against known authentic references. Serial numbers, production codes, and date stamps. Box, tags, and accessories for consistency. NFC chip verification where applicable.\n\nThe Blue Tag and Certificate:\nEvery authenticated item ships with a blue verification tag and a Poizon certificate of authenticity. These are not decorative — they are the proof of authentication and are essential for resale value. Once the blue tag is removed, the item can no longer be resold through Poizon or verified as authenticated.\n\nImportant: Keep the blue tag attached until you are 100% certain about the item. Removal is irreversible."
                },
                {
                    title: "2. How to Buy from Poizon Without a Chinese Account",
                    shortTitle: "2. Buying Without Chinese Account",
                    contentPre: "Poizon allows registration with an international phone number — unlike Taobao or 1688. However, payment still requires Chinese methods: Alipay or WeChat Pay linked to a Chinese bank account. International cards are not accepted.\n\nHow we handle it:\n1. You download the Dewu app and find your item (English keyword search works)\n2. You send us the product link with your size\n3. We verify current price, delivery speed option, and seller rating\n4. You transfer the purchase amount to us at transparent market exchange rates — no hidden markup\n5. We purchase using our Chinese payment accounts\n6. Poizon authenticates the item and ships to our Shenzhen warehouse\n7. We QC, photograph, and ship internationally to your door\n\nOn exchange rates:\nMany agents hide fees in the currency conversion — marking up exchange rates by 15–30% above market spot rate. We use rates close to real market rates with no hidden conversion markup. The price you see is the price you pay."
                },
                {
                    title: "3. Reading the Poizon App: A Practical Guide",
                    shortTitle: "3. Reading the App",
                    contentPre: "The Poizon app is in Chinese but navigable with the right knowledge. These are the key things to understand before browsing.\n\nButton colours — critical:\nTurquoise button — «Ship in 48 hours». This is the Instant Buy option. The item is already authenticated and in stock at a Poizon fulfillment center. Fastest delivery option.\nBlack button — standard listing. The seller ships to Poizon authentication center after purchase. Adds 3–7 days for authentication before the item reaches our warehouse.\nGray button with «95» text — pre-owned items in approximately 95% condition. These are used items, not new. Authentication still applies but condition is not new. Avoid unless you specifically want pre-owned.\n\nCondition terminology:\n95 New — used/pre-owned item in 95% condition. This means it has been worn.\nDamaged Box — brand new item with a dented or damaged original box. The item itself is unworn and new. Often available at a discount — good value if you don't need a perfect box.\n\nSearch tips:\nEnglish keywords work on Poizon for most major brands and sneaker models. For less common items or specific colourways, send us a photo and we search in Chinese — significantly expanding what's findable."
                },
                {
                    title: "4. Poizon Pricing Strategy: How to Buy at the Right Time",
                    shortTitle: "4. Pricing & Size Strategy",
                    contentPre: "Poizon operates on a stock-market model — prices fluctuate based on supply and demand in real time. Understanding this lets you buy smarter.\n\nWhy prices vary by size:\nEach size is traded independently. A Nike Air Force 1 in size US10 and size US9 have completely different prices depending on current seller inventory and buyer demand. Popular sizes (US9–11 for men, EU38–40 for women) carry a premium. Less common sizes are frequently 10–30% cheaper for the same item.\n\nPractical strategy:\nCheck adjacent sizes before purchasing. Half-size differences are often negligible in fit but significant in price. If you typically wear US9.5, check US9 and US10 pricing — the saving can be 20–30% on the same item.\n\nThe price chart:\nEvery listing on Poizon has a price history chart. Use it. Items fluctuate regularly — a sneaker at ¥1,200 today may have traded at ¥900 two weeks ago. For non-urgent purchases, monitor the chart and buy during a dip. We can monitor specific listings on your behalf and notify you when price drops to your target.\n\nCompared to global retail:\nPoizon prices on authenticated items are typically 20–50% below global retail for the same item in new condition. The saving is highest on items with significant retail markup in Western markets — Jordan 1s, Yeezy models, and limited Nike releases."
                },
                {
                    title: "5. QC and International Shipping from Poizon",
                    shortTitle: "5. QC & Shipping",
                    contentPre: "Once an item passes Poizon authentication and arrives at our Shenzhen warehouse, we conduct our own QC layer before international packing.\n\nWhat our QC covers:\nAuthentication documents — we verify the blue tag is attached and the certificate is present and correctly matched to the item.\nBox condition — original brand box is inspected for damage during the Poizon-to-warehouse transit leg.\nItem condition — we check the item itself matches the listing condition (new, 95 new, or damaged box) and that no issues occurred during authentication handling.\n\nWhat you receive:\nPhotos of the item, the certificate, the blue tag, and the box from multiple angles before international packing. You approve before we ship.\n\nDouble-box protection:\nAll sneakers and boxed items ship inside a reinforced outer box — the original brand box sits inside protected on all sides. This is the single most important packaging decision for sneaker shipments: original boxes are fragile and crush easily under international freight handling. Double-boxing prevents this.\n\nShipping method:\nAir freight only for Poizon items. Sea freight transit times and handling conditions are not appropriate for high-value authenticated goods. Air from Shenzhen to most destinations: 5–12 days depending on destination country."
                },
                {
                    title: "6. Consolidating Poizon Orders with Other Platforms",
                    shortTitle: "6. Consolidation",
                    contentPre: "Poizon orders consolidate fully with purchases from Taobao, Weidian, 1688, Tmall, and Pinduoduo at our Shenzhen warehouse.\n\nOne important consideration:\nPoizon items ship from Poizon's authentication center to our warehouse after verification — this takes 3–7 days after purchase (or 48 hours for Turquoise Button instant items). Plan consolidation timing accordingly: if you're combining Poizon with Taobao orders, factor in the Poizon authentication window when deciding when to ship consolidated.\n\nHow consolidation works:\nAll items arrive at our warehouse separately. We hold for up to 30 days at no cost. Once everything is ready, we pack into one international shipment. One customs entry, one freight invoice, one tracking number.\n\nDouble-box note for consolidation:\nPoizon items retain their double-box protection even in consolidated shipments. We pack other items around the protected sneaker box — not on top of it."
                },
                {
                    title: "7. Poizon vs Taobao vs Weidian: Which Platform for Sneakers and Streetwear",
                    shortTitle: "7. Poizon vs Other Platforms",
                    table: {
                        headers: ["Platform", "Authenticity", "Pricing", "Selection", "Best for"],
                        rows: [
                            ["Poizon (Dewu)", "Platform-verified, guaranteed", "20–50% below global retail", "Major brands, limited releases", "Authenticated sneakers and streetwear"],
                            ["Taobao", "Seller-dependent, no platform check", "Retail — varies", "Wide — all categories", "General shopping, unverified brand items"],
                            ["Tmall", "Brand flagship — guaranteed authentic", "Full retail price", "Official brand catalogues", "New season official releases"],
                            ["Weidian", "No platform verification", "Varies", "Niche, exclusive, indie", "Hard-to-find exclusive items"],
                            ["1688", "No platform verification", "Factory price", "Wholesale quantities", "Bulk orders"]
                        ]
                    },
                    afterTable: "The clear decision for authenticated branded goods:\nPoizon is the only Chinese platform with mandatory physical authentication on every transaction. For sneakers, streetwear, and branded accessories where authenticity matters, there is no comparable alternative at these price points.\n\nWhen Tmall makes more sense:\nCurrent season releases from official brand stores. Items where you want direct brand warranty. Situations where Poizon doesn't carry the specific item or size.\n\nWhen Weidian might be considered:\nItems not available on Poizon. Buyers who have verified a specific Weidian seller independently and are comfortable with no platform authentication guarantee.\n\nWe support purchasing and consolidation across all platforms. For platform-specific purchasing guides, see our dedicated pages."
                }
            ]
        },
        ru: {
            title: "Гайд по закупкам на Poizon (Dewu) 2026: Как покупать оригиналы из Китая",
            subtitle: "Всё, что нужно знать международным покупателям о заказах на Poizon.",
            sections: [
                {
                    title: "1. Как работает система аутентификации Poizon",
                    shortTitle: "1. Как работает аутентификация",
                    contentPre: "Poizon (Dewu) — это не обычный маркетплейс. Каждый товар, проданный на платформе, проходит обязательную физическую проверку на подлинность до того, как попадет к покупателю. Именно это отличает его от Taobao, 1688 и любых других китайских платформ.\n\nКак происходит проверка:\nПродавец выставляет товар → Покупатель оплачивает → Продавец отправляет товар в центр аутентификации Poizon → Команда Poizon физически проверяет товар → Если оригинал: вешают пломбу, выдают сертификат и отправляют покупателю. Если подделка: товар возвращают продавцу, а покупатель сразу получает возврат денег.\n\nНи один товар не доедет до нашего склада (или вашей двери), не пройдя проверку Poizon. В этом главная ценность платформы.\n\nЧто проверяет Poizon:\nШвы, материалы и сборку в сравнении с известными эталонами оригиналов. Серийные номера, коды производства и штампы с датами. Коробку, бирки и аксессуары на соответствие. Проверка NFC-чипов (если применимо).\n\nГолубая пломба и сертификат:\nКаждый проверенный товар отправляется с голубой пластиковой пломбой и сертификатом подлинности Poizon. Это не декор, а доказательство оригинальности, крайне важное для перепродажи. Как только голубая пломба снята, товар больше не может быть перепродан через Poizon или подтвержден как проверенный.\n\nВажно: Не снимайте голубую пломбу, пока не будете на 100% уверены в товаре. Снятие необратимо."
                },
                {
                    title: "2. Как покупать на Poizon без китайского аккаунта",
                    shortTitle: "2. Покупка без китайского аккаунта",
                    contentPre: "Poizon позволяет зарегистрироваться с международным номером телефона — в отличие от Taobao или 1688. Однако для оплаты по-прежнему требуются китайские методы: Alipay или WeChat Pay, привязанные к китайской карте. Международные карты не принимаются.\n\nКак мы решаем эту проблему:\n1. Вы скачиваете приложение Dewu и находите свой товар (работает поиск на английском).\n2. Присылаете нам ссылку на товар и нужный размер.\n3. Мы проверяем текущую цену, скорость доставки и рейтинг продавца.\n4. Вы переводите нам сумму покупки по прозрачному рыночному курсу — без скрытых наценок.\n5. Мы выкупаем товар со своих китайских счетов.\n6. Poizon проверяет товар и отправляет на наш склад в Шэньчжэне.\n7. Мы проводим свой контроль качества (QC), фотографируем и отправляем вам.\n\nО курсах валют:\nМногие агенты прячут свою комиссию в курсе конвертации, завышая его на 15–30% относительно рынка. Мы используем курс, максимально близкий к реальному биржевому. Цена, которую вы видите, это цена, которую вы платите."
                },
                {
                    title: "3. Как ориентироваться в приложении Poizon: Практическое руководство",
                    shortTitle: "3. Интерфейс приложения",
                    contentPre: "Приложение Poizon работает на китайском языке, но в нем легко разобраться, если знать ключевые моменты.\n\nЦвета кнопок — самое важное:\nБирюзовая кнопка — «Отправка за 48 часов». Это мгновенная покупка. Товар уже прошел проверку и лежит на складе Poizon. Самая быстрая доставка.\nЧерная кнопка — стандартное объявление. Продавец отправляет товар в центр проверки Poizon после вашей оплаты. Добавляет 3–7 дней на проверку до того, как товар попадет к нам на склад.\nСерая кнопка с надписью «95» — б/у товары в состоянии примерно 95%. Это не новые вещи. Проверку они тоже проходят, но их состояние не идеальное. Избегайте, если не ищете именно б/у.\n\nТерминология состояния:\n95 New — б/у вещь в хорошем состоянии (носилась).\nDamaged Box — абсолютно новая вещь, но с помятой или поврежденной оригинальной коробкой. Сам товар неношеный и новый. Часто продается со скидкой — отличный вариант, если вам не нужна идеальная коробка.\n\nСоветы по поиску:\nПоиск на английском работает для большинства крупных брендов и моделей кроссовок. Для редких вещей или специфических расцветок просто пришлите нам фото, и мы найдем их по картинке или названию на китайском."
                },
                {
                    title: "4. Стратегия цен на Poizon: Как покупать выгодно",
                    shortTitle: "4. Цены и размеры",
                    contentPre: "Poizon работает по модели фондовой биржи — цены колеблются в реальном времени в зависимости от спроса и предложения. Понимание этого поможет вам покупать умнее.\n\nПочему цены зависят от размера:\nКаждый размер торгуется отдельно. Nike Air Force 1 в размере US10 и US9 будут стоить по-разному в зависимости от запасов продавцов и спроса покупателей. Популярные размеры (US9–11 мужские, EU38–40 женские) всегда стоят дороже. Редкие размеры часто на 10–30% дешевле.\n\nПрактическая стратегия:\nПроверяйте соседние размеры перед покупкой. Разница в полразмера при носке часто не ощущается, но может сильно отразиться на цене. Если вы обычно носите US9.5, проверьте цены на US9 и US10 — экономия может составить 20–30%.\n\nГрафик цен:\nВ каждом объявлении на Poizon есть график истории цен. Пользуйтесь им. Цены регулярно прыгают — кроссовки за ¥1,200 сегодня могли стоить ¥900 две недели назад. Если покупка не срочная, следите за графиком и покупайте на спаде. Мы можем отслеживать нужные вам товары и сообщать, когда цена упадет до вашей цели.\n\nСравнение с мировым ритейлом:\nЦены на новые оригиналы на Poizon обычно на 20–50% ниже мировых розничных цен. Наибольшая экономия получается на товарах с большой наценкой на западных рынках — Jordan 1, моделях Yeezy и лимитированных релизах Nike."
                },
                {
                    title: "5. Контроль качества (QC) и международная доставка с Poizon",
                    shortTitle: "5. QC и доставка",
                    contentPre: "Когда товар проходит проверку Poizon и прибывает на наш склад в Шэньчжэне, мы проводим свой контроль перед международной упаковкой.\n\nЧто включает наш QC:\nДокументы аутентификации — проверяем наличие голубой пломбы и сертификата, а также их соответствие товару.\nСостояние коробки — проверяем оригинальную коробку бренда на предмет повреждений во время пути от Poizon к нам.\nСостояние товара — проверяем, соответствует ли сам товар заявленному состоянию (новый, 95 new или damaged box), и не появилось ли дефектов при проверке.\n\nЧто вы получаете:\nФотографии товара, сертификата, голубой пломбы и коробки с разных ракурсов до международной упаковки. Вы всё подтверждаете до отправки.\n\nЗащита «двойная коробка»:\nВсе кроссовки и товары в коробках отправляются внутри прочной внешней коробки — оригинальная коробка бренда защищена со всех сторон. Это самое важное решение для перевозки кроссовок: оригинальные коробки хрупкие и легко мнутся при международной транспортировке. Double-box это предотвращает.\n\nСпособ доставки:\nДля товаров с Poizon мы используем только авиадоставку. Сроки и условия морской доставки не подходят для дорогостоящих оригинальных вещей. Авиадоставка из Шэньчжэня в большинство стран занимает от 5 до 12 дней."
                },
                {
                    title: "6. Консолидация заказов Poizon с другими платформами",
                    shortTitle: "6. Консолидация",
                    contentPre: "Заказы с Poizon можно полностью консолидировать с покупками с Taobao, Weidian, 1688, Tmall и Pinduoduo на нашем складе в Шэньчжэне.\n\nВажный нюанс по срокам:\nТовары с Poizon отправляются на наш склад из центра проверки только после аутентификации — это занимает 3–7 дней после покупки (или 48 часов для товаров с бирюзовой кнопкой). Планируйте консолидацию с учетом этого времени: если вы объединяете Poizon с заказами Taobao, закладывайте окно проверки Poizon.\n\nКак работает консолидация:\nВсе товары прибывают на наш склад по отдельности. Мы храним их до 30 дней бесплатно. Когда всё готово, мы упаковываем их в одну международную отправку. Одна таможенная декларация, один счет за доставку, один трек-номер.\n\nПримечание про «двойную коробку» при консолидации:\nТовары с Poizon сохраняют свою двойную коробку даже в сборных грузах. Мы укладываем другие вещи вокруг защищенной коробки с кроссовками, а не сверху на нее."
                },
                {
                    title: "7. Poizon vs Taobao vs Weidian: Какую платформу выбрать",
                    shortTitle: "7. Poizon vs другие платформы",
                    table: {
                        headers: ["Платформа", "Оригинальность", "Цены", "Выбор", "Для чего лучше"],
                        rows: [
                            ["Poizon (Dewu)", "Проверка платформой, гарантия", "На 20–50% ниже мировых", "Крупные бренды, лимитки", "Оригинальные кроссовки и стритвир"],
                            ["Taobao", "Зависит от продавца", "Розничные (разные)", "Огромный — любые категории", "Общий шопинг, вещи без бренда"],
                            ["Tmall", "Официальный магазин бренда", "Полная розничная цена", "Официальные каталоги брендов", "Новые официальные релизы"],
                            ["Weidian", "Платформа не проверяет", "Разные", "Нишевые, инди-бренды", "Редкие эксклюзивные вещи"],
                            ["1688", "Платформа не проверяет", "Цена фабрики", "Оптовые партии", "Оптовые заказы"]
                        ]
                    },
                    afterTable: "Выбор для брендовых вещей очевиден:\nPoizon — единственная китайская платформа с обязательной физической проверкой каждого товара. Для кроссовок, стритвира и аксессуаров, где важна оригинальность, у Poizon нет конкурентов при таких ценах.\n\nКогда Tmall имеет больше смысла:\nТекущие релизы из официальных магазинов бренда. Товары, на которые вам нужна прямая гарантия бренда. Ситуации, когда на Poizon нет нужной вещи или размера.\n\nКогда стоит рассмотреть Weidian:\nВещи, которых нет на Poizon. Покупатели, которые сами проверили продавца на Weidian и готовы покупать без гарантии платформы.\n\nМы помогаем выкупать и консолидировать товары со всех платформ. Инструкции по другим площадкам смотрите на соответствующих страницах."
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
                                    onClick={() => document.getElementById(`chapter-poizon-${idx}`)?.scrollIntoView({ behavior: 'smooth' })} 
                                    className="text-[#00B2B2] hover:underline font-medium transition-all"
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
                        <div id={`chapter-poizon-${idx}`} key={idx} className="scroll-mt-28">
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

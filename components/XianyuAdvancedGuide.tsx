import React from 'react';

export const XianyuAdvancedGuide = ({ language, onNavigate }: { language: 'en' | 'ru', onNavigate: (page: string) => void }) => {
    const content = {
        en: {
            title: "Xianyu Buying Guide 2026: How to Buy Second-Hand from China Safely",
            subtitle: "Everything international buyers need to know about purchasing from Xianyu (Idle Fish).",
            sections: [
                {
                    title: "1. What Is Xianyu and Why Does It Matter for International Buyers",
                    shortTitle: "1. What Is Xianyu",
                    contentPre: "Xianyu — literally «Idle Fish» — launched in 2014 as Alibaba's answer to peer-to-peer secondhand commerce. It has since grown into the largest secondhand marketplace in China with over 500 million registered users and hundreds of millions of active listings.\n\nWhat makes it different from other Chinese platforms:\n\nEvery seller is a private individual, not a business. This means no minimum order quantities, no bulk pricing structures, and no professional seller accountability — but also no retail markup. Items are priced to sell, not to profit.\n\nThe inventory depth is unmatched for specific categories: vintage luxury goods, discontinued sneaker models, rare Japanese streetwear, limited collectibles, vintage electronics, and camera equipment that simply doesn't appear on Taobao or 1688.\n\nWhy it's largely inaccessible to international buyers:\nXianyu requires Alipay for payment and a verified Chinese account for full functionality. More importantly, private sellers have no mechanism or motivation to ship internationally — they're not businesses, they're individuals clearing out personal possessions. Without a local agent, the platform is effectively closed to anyone outside China."
                },
                {
                    title: "2. Sesame Credit: The Trust System You Need to Understand",
                    shortTitle: "2. Sesame Credit Explained",
                    contentPre: "Sesame Credit (芝麻信用) is Alibaba's proprietary credit scoring system. On Xianyu, it is the most reliable indicator of seller trustworthiness — more reliable than review counts or listing quality.\n\nHow it works:\nSesame Credit aggregates financial behaviour, transaction history, and platform activity across Alibaba's ecosystem. Sellers with high scores have a verified track record of reliable behaviour across Alipay, Taobao, and Xianyu.\n\nThe ratings:\n\nExcellent (优秀) — highest tier. Long track record, consistent positive history. We proceed with confidence at this level.\n\nGood (良好) — acceptable for lower-value purchases. We conduct additional verification before recommending.\n\nBelow Good — we do not purchase from sellers in this tier regardless of listing attractiveness. The risk is not worth the saving.\n\nWhat Sesame Credit doesn't cover:\nIt measures financial trustworthiness, not product knowledge or listing accuracy. A seller with Excellent Sesame Credit can still list an item inaccurately — which is why physical inspection remains essential regardless of seller rating."
                },
                {
                    title: "3. How to Buy from Xianyu Without a Chinese Account",
                    shortTitle: "3. Buying Without Account",
                    contentPre: "Xianyu requires a Chinese Alipay account for purchases. International payment methods are not accepted. Private sellers do not communicate in English and will not arrange international shipping independently.\n\nHow we handle it:\n\n1. You find an item on Xianyu and send us the link\n2. We check the seller's Sesame Credit and transaction history\n3. For significant purchases, we request a live video from the seller showing current item condition\n4. You transfer the purchase amount to us in USD or your local currency\n5. We negotiate the price and purchase via Alipay from our Chinese accounts\n6. The item ships to our Shenzhen warehouse for physical inspection\n7. We send you a detailed photo report for approval before international packing\n\nNo Chinese account. No Alipay. No language barrier.\n\nOur fee: 3% of the order value — covers purchasing, negotiation, and standard warehouse inspection."
                },
                {
                    title: "4. The Inspection Process for Used Items",
                    shortTitle: "4. Inspection Process",
                    contentPre: "Inspecting secondhand goods requires a different approach than new items. Condition is everything — and condition descriptions on Xianyu vary significantly in accuracy between sellers.\n\nStage 1 — Pre-purchase video verification:\nFor any item above a threshold value, we request a live video call or video message from the seller before purchasing. The seller shows the item in real time — all sides, close-ups of any wear, functional demonstration for electronics. If the item doesn't match the listing, we decline and report back to you before spending anything.\n\nStage 2 — Warehouse physical inspection:\nWhen the item arrives at our Shenzhen warehouse, we conduct a detailed physical inspection against the listing description and any pre-purchase video.\n\nFor luxury goods and accessories: stitching, hardware, materials, serial numbers, date codes, and dust bags/box condition.\n\nFor sneakers: sole wear, upper condition, stitching, insole, and box authenticity where applicable.\n\nFor electronics: power on, basic functionality test, screen condition, port integrity, and battery health where accessible.\n\nFor collectibles and vintage items: completeness against listing, condition of packaging, and any damage not visible in listing photos.\n\nWhat you receive:\nA detailed photo report with close-ups of every relevant condition point — wear marks, scratches, fading, or any discrepancy from the listing description. You review and approve before we pack for international shipping.\n\nIf we find a significant discrepancy:\nWe contact the seller immediately for resolution — price reduction, return, or exchange — while the item is still in China. This is the only realistic window for recourse on Xianyu purchases."
                },
                {
                    title: "5. Negotiation on Xianyu: How It Works",
                    shortTitle: "5. Negotiation",
                    contentPre: "Bargaining is culturally normal on Xianyu in a way that doesn't apply to mainstream platforms. Private sellers list at prices they expect to negotiate down from — this is standard practice.\n\nTypical negotiation outcomes:\n10–20% below listed price is achievable on most listings. For items that have been listed for a while without selling, larger reductions are possible.\n\nWhat affects negotiability:\nTime on platform — listings that have been active for weeks or months without selling indicate a motivated seller. We check listing age before negotiating.\n\nMultiple interested buyers — if a listing is receiving active attention, leverage decreases. We move quickly on popular items.\n\nBundle purchases — if you're buying multiple items from the same seller, we negotiate a combined discount.\n\nWhy negotiating in Chinese matters:\nNegotiation on Xianyu is conducted entirely in Mandarin, with platform-specific etiquette. Approaching a seller in English, or through a translation app, signals an international buyer and typically results in either no response or inflated pricing. We negotiate as a local buyer — significantly better outcomes."
                },
                {
                    title: "6. What to Buy on Xianyu (And What to Avoid)",
                    shortTitle: "6. What to Buy",
                    contentPre: "Xianyu's inventory is enormous — but some categories offer far better value and lower risk than others.\n\nBest categories for international buyers:\n\nVintage luxury accessories — bags, wallets, belts, scarves from major houses. Prices significantly below authenticated resale markets. We verify serial numbers and date codes during inspection.\n\nRare and discontinued sneakers — models no longer in production, regional exclusives, or colourways unavailable in Western markets. Deep inventory of genuine pairs that predate the authentication platform era.\n\nJapanese vintage streetwear — Xianyu has exceptional depth in Japanese brands (Neighborhood, Wtaps, Undercover, Kapital) sourced from Japanese sellers who shipped to China. Prices well below Japanese domestic resale.\n\nUsed electronics — iPhones, iPads, cameras, lenses, gaming consoles. Chinese market electronics are often in excellent condition. We perform functionality checks before shipping.\n\nCollectibles and figures — limited edition toys, anime figures, model kits. Often sealed or near-new condition from collectors.\n\nCategories to approach carefully:\n\nHigh-value watches — authentication complexity is high. We recommend Poizon for authenticated watches or a specialist third-party authenticator before purchase.\n\nItems requiring exact sizing — condition photos don't always reveal fit issues. Clothing sizing on Xianyu follows Chinese standards.\n\nCategories we don't recommend:\n\nElectronics where functionality can't be verified remotely. Luxury goods where seller has no transaction history regardless of Sesame Credit. Any item where the seller refuses a pre-purchase video for a significant amount."
                },
                {
                    title: "7. Xianyu vs Poizon vs Taobao: Which Platform for Second-Hand and Vintage",
                    shortTitle: "7. Platform Comparison",
                    table: {
                        headers: ["Platform", "Authentication", "Pricing", "Best for", "Return policy"],
                        rows: [
                            ["Xianyu", "No platform check — agent inspection essential", "Lowest — private seller pricing", "Vintage luxury, rare finds, used tech, collectibles", "Almost never — inspection is key"],
                            ["Poizon (Dewu)", "Mandatory platform authentication", "20–50% below global retail", "Authenticated sneakers and streetwear", "Platform-backed"],
                            ["Taobao", "No platform check — seller-dependent", "Retail — competitive", "New items, wide general selection", "Generally available"],
                            ["Tmall", "Brand flagship — guaranteed authentic", "Full retail price", "Current season official releases", "Standard retail policy"]
                        ]
                    },
                    afterTable: "The key distinction between Xianyu and Poizon:\n\nBoth platforms carry secondhand and pre-owned branded goods — but the authentication approach is completely different. Poizon authenticates every item through its own verification center before delivery. Xianyu has no platform authentication — verification depends entirely on agent inspection and pre-purchase video.\n\nFor authenticated sneakers and streetwear where authenticity is the primary concern → Poizon.\n\nFor vintage luxury, rare collectibles, discontinued models, and items not available on Poizon → Xianyu with thorough pre-purchase inspection.\n\nWe support purchasing on both platforms and can advise which is more appropriate for your specific item before you commit."
                }
            ]
        },
        ru: {
            title: "Гайд по покупкам на Xianyu 2026: Как безопасно покупать б/у товары из Китая",
            subtitle: "Всё, что нужно знать международным покупателям о заказах на Xianyu (Idle Fish).",
            sections: [
                {
                    title: "1. Что такое Xianyu и почему это важно для международных покупателей",
                    shortTitle: "1. Что такое Xianyu",
                    contentPre: "Xianyu — буквально «Праздная рыба» — был запущен в 2014 году как ответ Alibaba на peer-to-peer коммерцию подержанных товаров. С тех пор он вырос в крупнейший в Китае рынок б/у товаров с более чем 500 миллионами зарегистрированных пользователей и сотнями миллионов активных объявлений.\n\nЧто отличает его от других китайских платформ:\n\nКаждый продавец — частное лицо, а не бизнес. Это означает отсутствие минимальных объемов заказа, оптовых цен и профессиональной ответственности продавца — но также и отсутствие розничной наценки. Товары оцениваются для продажи, а не для получения прибыли.\n\nГлубина ассортимента не имеет себе равных в определенных категориях: винтажные предметы роскоши, снятые с производства модели кроссовок, редкая японская уличная одежда, лимитированные предметы коллекционирования, винтажная электроника и фотооборудование, которые просто не появляются на Taobao или 1688.\n\nПочему платформа в основном недоступна для международных покупателей:\nXianyu требует Alipay для оплаты и подтвержденный китайский аккаунт для полного функционала. Что еще более важно, у частных продавцов нет механизма или мотивации отправлять товары за границу — они не компании, они частные лица, избавляющиеся от личных вещей. Без местного агента платформа фактически закрыта для всех за пределами Китая."
                },
                {
                    title: "2. Sesame Credit: Система доверия, которую вам нужно понимать",
                    shortTitle: "2. Sesame Credit",
                    contentPre: "Sesame Credit (芝麻信用) — это собственная система кредитного скоринга Alibaba. На Xianyu это самый надежный показатель благонадежности продавца — более надежный, чем количество отзывов или качество объявления.\n\nКак это работает:\nSesame Credit объединяет финансовое поведение, историю транзакций и активность на платформе в экосистеме Alibaba. Продавцы с высокими баллами имеют подтвержденный опыт надежного поведения в Alipay, Taobao и Xianyu.\n\nРейтинги:\n\nОтличный (优秀) — высший уровень. Длительный стаж, стабильная положительная история. Мы смело совершаем покупки на этом уровне.\n\nХороший (良好) — приемлемо для покупок с меньшей стоимостью. Мы проводим дополнительную проверку перед тем, как рекомендовать.\n\nНиже хорошего — мы не покупаем у продавцов этого уровня независимо от привлекательности объявления. Риск не стоит экономии.\n\nЧто не покрывает Sesame Credit:\nОн измеряет финансовую благонадежность, а не знание продукта или точность описания. Продавец с отличным Sesame Credit все равно может неточно описать товар — поэтому физическая проверка остается необходимой независимо от рейтинга продавца."
                },
                {
                    title: "3. Как покупать на Xianyu без китайского аккаунта",
                    shortTitle: "3. Покупка без аккаунта",
                    contentPre: "Для покупок на Xianyu требуется китайский аккаунт Alipay. Международные способы оплаты не принимаются. Частные продавцы не общаются на английском и не будут самостоятельно организовывать международную доставку.\n\nКак мы с этим справляемся:\n\n1. Вы находите товар на Xianyu и отправляете нам ссылку\n2. Мы проверяем Sesame Credit продавца и историю транзакций\n3. Для крупных покупок мы запрашиваем живое видео от продавца, показывающее текущее состояние товара\n4. Вы переводите нам сумму покупки в долларах США или местной валюте\n5. Мы ведем переговоры о цене и покупаем через Alipay с наших китайских счетов\n6. Товар отправляется на наш склад в Шэньчжэне для физической проверки\n7. Мы отправляем вам подробный фотоотчет для утверждения перед международной упаковкой\n\nНет китайского аккаунта. Нет Alipay. Нет языкового барьера.\n\nНаша комиссия: 3% от стоимости заказа — покрывает покупку, переговоры и стандартную проверку на складе."
                },
                {
                    title: "4. Процесс проверки б/у товаров",
                    shortTitle: "4. Процесс проверки",
                    contentPre: "Проверка подержанных товаров требует иного подхода, чем новых. Состояние — это все, а описания состояния на Xianyu сильно различаются по точности у разных продавцов.\n\nЭтап 1 — Видеоверификация перед покупкой:\nДля любого товара выше определенной стоимости мы запрашиваем живой видеозвонок или видеосообщение от продавца перед покупкой. Продавец показывает товар в реальном времени — со всех сторон, крупные планы любого износа, демонстрацию работы для электроники. Если товар не соответствует описанию, мы отказываемся и сообщаем вам, прежде чем что-либо тратить.\n\nЭтап 2 — Физическая проверка на складе:\nКогда товар прибывает на наш склад в Шэньчжэне, мы проводим тщательную физическую проверку на соответствие описанию в объявлении и любому видео перед покупкой.\n\nДля предметов роскоши и аксессуаров: швы, фурнитура, материалы, серийные номера, коды дат и состояние пыльника/коробки.\n\nДля кроссовок: износ подошвы, состояние верха, швы, стелька и подлинность коробки, где это применимо.\n\nДля электроники: включение, базовая проверка функциональности, состояние экрана, целостность портов и состояние батареи, если она доступна.\n\nДля предметов коллекционирования и винтажных вещей: комплектность по объявлению, состояние упаковки и любые повреждения, не видимые на фото в объявлении.\n\nЧто вы получаете:\nПодробный фотоотчет с крупными планами каждой важной точки состояния — следов износа, царапин, выцветания или любых несоответствий описанию. Вы просматриваете и утверждаете перед тем, как мы упакуем товар для международной доставки.\n\nЕсли мы находим значительное несоответствие:\nМы немедленно связываемся с продавцом для решения проблемы — снижения цены, возврата или обмена — пока товар еще находится в Китае. Это единственное реальное окно для обжалования покупок на Xianyu."
                },
                {
                    title: "5. Переговоры на Xianyu: Как это работает",
                    shortTitle: "5. Переговоры",
                    contentPre: "Торг культурно нормален на Xianyu в том виде, который не применим к основным платформам. Частные продавцы выставляют цены, от которых они ожидают скидку — это стандартная практика.\n\nТипичные результаты переговоров:\n10–20% ниже указанной цены достижимы для большинства объявлений. Для товаров, которые продаются давно без успеха, возможны большие скидки.\n\nЧто влияет на возможность переговоров:\nВремя на платформе — объявления, которые активны неделями или месяцами без продажи, указывают на мотивированного продавца. Мы проверяем возраст объявления перед переговорами.\n\nНесколько заинтересованных покупателей — если объявление получает активное внимание, влияние снижается. Мы действуем быстро на популярных товарах.\n\nПакетные покупки — если вы покупаете несколько товаров у одного продавца, мы договариваемся о комбинированной скидке.\n\nПочему переговоры на китайском важны:\nПереговоры на Xianyu ведутся исключительно на мандаринском языке с соблюдением специфического этикета платформы. Обращение к продавцу на английском языке или через приложение-переводчик выдает международного покупателя и обычно приводит либо к отсутствию ответа, либо к завышенной цене. Мы ведем переговоры как местный покупатель — результаты значительно лучше."
                },
                {
                    title: "6. Что покупать на Xianyu (и чего избегать)",
                    shortTitle: "6. Что покупать",
                    contentPre: "Ассортимент Xianyu огромен, но некоторые категории предлагают гораздо большую ценность и меньший риск, чем другие.\n\nЛучшие категории для международных покупателей:\n\nВинтажные роскошные аксессуары — сумки, кошельки, ремни, шарфы от крупных домов. Цены значительно ниже аутентифицированных рынков перепродажи. Мы проверяем серийные номера и коды дат во время проверки.\n\nРедкие и снятые с производства кроссовки — модели больше не выпускаются, региональные эксклюзивы или расцветки, недоступные на западных рынках. Глубокий ассортимент подлинных пар, предшествовавших эре платформ аутентификации.\n\nЯпонская винтажная уличная одежда — Xianyu обладает исключительной глубиной японских брендов (Neighborhood, Wtaps, Undercover, Kapital), полученных от японских продавцов, отправляющих в Китай. Цены значительно ниже японских внутренних перепродаж.\n\nБ/у электроника — iPhone, iPad, камеры, объективы, игровые приставки. Электроника на китайском рынке часто находится в отличном состоянии. Мы проверяем функциональность перед отправкой.\n\nКоллекционные предметы и фигурки — лимитированные игрушки, аниме фигурки, сборные модели. Часто в запечатанном или почти новом состоянии от коллекционеров.\n\nКатегории, к которым следует подходить осторожно:\n\nДорогие часы — сложность аутентификации высока. Мы рекомендуем Poizon для аутентифицированных часов или специалиста по проверке третьей стороной перед покупкой.\n\nТовары, требующие точного размера — фотографии состояния не всегда показывают проблемы с посадкой. Размеры одежды на Xianyu соответствуют китайским стандартам.\n\nКатегории, которые мы не рекомендуем:\n\nЭлектроника, функциональность которой нельзя проверить удаленно. Предметы роскоши, если у продавца нет истории транзакций независимо от Sesame Credit. Любой товар, если продавец отказывается от видео перед покупкой на значительную сумму."
                },
                {
                    title: "7. Xianyu vs Poizon vs Taobao: Какую платформу выбрать",
                    shortTitle: "7. Сравнение платформ",
                    table: {
                        headers: ["Платформа", "Аутентификация", "Цены", "Для чего лучше", "Возвраты"],
                        rows: [
                            ["Xianyu", "Платформа не проверяет — важна проверка агентом", "Самые низкие — цены частных продавцов", "Винтажный люкс, редкие находки, б/у техника, коллекционирование", "Почти никогда — проверка ключевая"],
                            ["Poizon (Dewu)", "Обязательная проверка платформой", "На 20–50% ниже мировых", "Оригинальные кроссовки и стритвир", "Гарантия платформы"],
                            ["Taobao", "Зависит от продавца", "Розничные (конкурентные)", "Новые вещи, широкий выбор", "Обычно доступны"],
                            ["Tmall", "Официальный магазин", "Полная розничная цена", "Новые официальные релизы", "Стандартная политика возврата"]
                        ]
                    },
                    afterTable: "Ключевое отличие Xianyu от Poizon:\n\nОбе платформы предлагают б/у и подержанные брендовые вещи — но подход к аутентификации совершенно разный. Poizon проверяет каждый товар через собственный центр проверки перед доставкой. Xianyu не имеет проверки платформы — аутентификация полностью зависит от проверки агентом и видео перед покупкой.\n\nДля оригинальных кроссовок и стритвира, где важна подлинность → Poizon.\n\nДля винтажного люкса, редких коллекционных предметов, снятых с производства моделей и товаров, которых нет на Poizon → Xianyu с тщательной проверкой перед покупкой.\n\nМы поддерживаем покупки на обеих платформах и можем посоветовать, какая из них больше подходит для вашего конкретного товара, прежде чем вы примете решение."
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
                                    onClick={() => document.getElementById(`chapter-xianyu-${idx}`)?.scrollIntoView({ behavior: 'smooth' })} 
                                    className="text-[#FFE600] drop-shadow-sm hover:underline font-medium transition-all"
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
                        <div id={`chapter-xianyu-${idx}`} key={idx} className="scroll-mt-28">
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

import React from 'react';
import { Plane, Ship, Check, ShieldCheck, Box, HelpCircle } from 'lucide-react';
import { DestinationTemplate, DestinationContent } from './DestinationTemplate';
import { Language } from '../utils/translations';

interface AustraliaShippingPageProps {
    language: Language;
    setLanguage: (lang: Language) => void;
    onBack: () => void;
    onNavigate: (page: string) => void;
}

export const AustraliaShippingPage: React.FC<AustraliaShippingPageProps> = ({
    language,
    setLanguage,
    onBack,
    onNavigate
}) => {
    const fullContent: Record<'en' | 'ru', DestinationContent> = {
        en: {
            badge: "Australia-Direct Line",
            titlePrefix: "Shipping from China to",
            titleHighlight: "Australia",
            subtitle: "Hassle-Free DDP Solutions. Stop worrying about strict Australian customs, quarantine delays, and hidden port fees.",
            introTitle: "Seamless Logistics Down Under",
            introText: "Whether you are an individual buying furniture from Foshan, a private shopper ordering from Taobao/Poizon, or a business stocking inventory for the Australian market, we've got you covered. We deliver door-to-door to all major metro areas, including Sydney, Melbourne, Brisbane, Perth, and Adelaide.",
            methodsTitle: "Our Shipping Methods & Rates",
            methods: [
                {
                    icon: Plane,
                    title: "Air Freight",
                    tag: "Fast",
                    desc: "Parcels, fashion, electronics & urgent restocks.",
                    price: "From $9/kg",
                    speed: "5–9 days",
                    color: "bg-blue-100 text-blue-600"
                },
                {
                    icon: Ship,
                    title: "Sea Freight",
                    tag: "Economical",
                    desc: "Furniture, heavy goods, bulk stock & LCL/FCL.",
                    price: "From $1.3/kg",
                    speed: "20–30 days",
                    color: "bg-teal-100 text-teal-600"
                }
            ],
            whyTitle: "Why Australian Importers & Shoppers Trust HappyBox",
            whyIntro: "All our routes are DDP (Delivered Duty Paid). The price you are quoted includes ocean/air freight, customs clearance, quarantine handling, and all Australian import duties and GST. No surprise bills from Border Force.",
            benefits: [
                {
                    icon: ShieldCheck,
                    title: "100% Tax-Free Delivery (DDP)",
                    desc: "Australia has strict rules on GST for low-value imports. With our service, all taxes are paid upfront—zero hassle for you."
                },
                {
                    icon: Box,
                    title: "Free Warehouse Consolidation",
                    desc: "Shop from Taobao, 1688, or multiple factories. We collect your packages at our Shenzhen hub and combine them into one shipment to slash your shipping costs."
                },
                {
                    icon: Check,
                    title: "Strict Quality Buffer",
                    desc: "We inspect your goods, take photos, and verify quantities before they leave China. Avoid the nightmare of shipping defective items across the Southern Hemisphere."
                },
                {
                    icon: HelpCircle,
                    title: "Quarantine Prep",
                    desc: "We understand Australia's strict biosecurity laws. We check your cargo to ensure it passes inspection without extra fees."
                }
            ],
            fearsTitle: "Frequently Asked Questions",
            fearsList: [
                {
                    q: "How is volumetric weight calculated?",
                    a: "Air carriers and local Australian couriers charge based on volume if a box is large but light. The formula is: Length × Width × Height (cm) / 6000 or 5000 = Volumetric Weight (kg)."
                },
                {
                    q: "Do I have to pay Australian GST?",
                    a: "No! All shipments are DDP (Delivered Duty Paid). Our flat-rate DDP service absorbs the 10% GST, customs clearance fees, and import duties. You don't need an Australian Business Number (ABN) or a customs broker to receive your cargo cleared."
                },
                {
                    q: "What if it gets lost or damaged on the ocean?",
                    a: "We offer All-Risk Insurance that covers 100% of your declared cargo value against water damage, theft, or handling damage from the moment it leaves Shenzhen until it arrives at your Australian address."
                }
            ],
            stepsTitle: "The Shenzhen-to-Australia Workflow",
            steps: [
                "Get Your Address: We provide you with your personal shipping address for our Shenzhen warehouse.",
                "Order Your Items: Put this address into Taobao, 1688, or give it to your supplier.",
                "QC & Combine: When your boxes arrive, we take photos, verify the contents, and consolidate them.",
                "Delivery: Once your cargo clears customs in Sydney or Melbourne, we hand it over to local trusted couriers (Australia Post, Toll, etc.) for direct delivery to your door."
            ],
            cta: "Get Your China Address",
            back: "Back to Destinations",
            crossPromo: [
                {
                    title: "Need help buying from Taobao?",
                    desc: "We can help you navigate Chinese marketplaces, communicate with sellers, and safely purchase your goods.",
                    link: "/taobao",
                    action: "Learn About Our Free Service",
                    isPrimary: true
                }
            ],
            guide: {
                title: "China to Australia Logistics Guide 2026: Costs, Customs & Biosecurity",
                subtitle: "Shipping to Australia requires strict compliance with the Department of Agriculture, Fisheries and Forestry (DAFF) and the Australian Border Force (ABF). This technical guide helps you plan your trans-Pacific supply chain efficiently.",
                jumpTo: "Jump to chapter:",
                nav: {
                    "au-sec1": "Shipping Options",
                    "au-sec2": "Biosecurity",
                    "au-sec3": "Customs & GST",
                    "au-sec4": "Product Nuances",
                    "au-sec5": "Volumetric Weight",
                    "au-sec6": "Inventory Strategy",
                    "au-sec7": "Last-Mile & Insurance"
                },
                sections: [
                    {
                        id: "au-sec1",
                        title: "1. Understanding Your Shipping Options: Air vs. Sea Freight",
                        items: [
                            { label: "Priority Air Freight", text: "Daily flights from Shenzhen or Hong Kong directly to Kingsford Smith (SYD) or Tullamarine (MEL) airports. Taking just 5–9 days, it is the optimal route for high-value consumer goods, cosmetics, and e-commerce inventory." },
                            { label: "Ocean Freight (LCL/FCL)", text: "Direct sailings from Shenzhen (Yantian/Shekou) to major Australian ports (Port Botany, Port of Melbourne, Port of Brisbane). Transit time on the water is relatively fast, typically 12–18 days, with total door-to-door delivery taking 20–30 days." }
                        ],
                        listStyle: "bullets"
                    },
                    {
                        id: "au-sec2",
                        title: "2. The Critical Factor: Australian Biosecurity & Quarantine (DAFF)",
                        desc: "Australia has the strictest biosecurity laws in the world to protect its ecosystem.",
                        items: [
                            { label: "Wood Packaging (ISPM-15)", text: "Any raw wood packaging, pallets, or crates must undergo heat treatment or fumigation and carry the official IPPC stamp. If a single bug is found, DAFF will order expensive treatment or destroy the cargo." },
                            { label: "What HappyBox Does", text: "We audit your packaging at our Shenzhen warehouse. If your supplier used non-compliant wood, we repack or crate it using plywood (which is exempt from fumigation rules) to guarantee smooth entry." }
                        ],
                        listStyle: "bullets"
                    },
                    {
                        id: "au-sec3",
                        title: "3. Customs Engineering: GST and Import Duties",
                        items: [
                            { label: "GST on Low-Value Goods", text: "Since the Australian tax updates, the 10% GST applies to all goods imported by consumers, even those under $1,000 AUD." },
                            { label: "Formal Entry & Duties", text: "For commercial shipments over $1,000 AUD, standard customs duties (usually 5%) apply based on the HS Code classification." },
                            { label: "The DDP Solution", text: "Our flat-rate DDP service absorbs the 10% GST, customs clearance fees, and import duties. You don't need an Australian Business Number (ABN) or a customs broker to receive your cargo cleared." }
                        ],
                        listStyle: "bullets"
                    },
                    {
                        id: "au-sec4",
                        title: "4. Shipping by Product Type: Australia Market Nuances",
                        items: [
                            { label: "Furniture & Home Upgrades", text: "Extremely popular for sea freight. Sourcing a kitchen, sofa, or marble counter from China can save thousands. We handle the heavy lifting, ensuring oversized items are safely packed." },
                            { label: "Electronics & Toys", text: "Products containing lithium batteries require standard safety documentation (MSDS, UN38.3). We utilize specialized battery-compliant air and sea channels." },
                            { label: "Apparel & Fashion", text: "Australia has specific labeling laws regarding fiber content and country of origin. We can verify your labels at our Shenzhen prep center." }
                        ],
                        listStyle: "bullets"
                    },
                    {
                        id: "au-sec5",
                        title: "5. Calculating Volumetric Weight for Australian Routes",
                        desc: "Air carriers and local Australian couriers charge based on volume if a box is large but light.",
                        items: [
                            { label: "The Volumetric Formula", text: "Length (cm) × Width (cm) × Height (cm) / 6000 or 5000 = Volumetric Weight (kg)." },
                            { label: "Pro-tip", text: "For bulky but lightweight cargo (like cushions or apparel), we use industrial compression packing in Shenzhen to pack more items into less space, saving you money on billable weight." }
                        ],
                        listStyle: "bullets"
                    },
                    {
                        id: "au-sec6",
                        title: "6. Inventory Strategy: Drip-Feeding from China",
                        desc: "Whether you are selling via Amazon.com.au or your own Shopify store, storing bulk inventory in Sydney or Melbourne warehouses can be expensive.",
                        items: [
                            { label: "The Strategy", text: "Store your bulk stock at our Shenzhen facility for free (up to 30 days)." },
                            { label: "The Execution", text: "Dispatch smaller LCL sea shipments or quick air batches as your inventory levels drop, optimizing your cash flow and avoiding Australian warehouse overhead." }
                        ],
                        listStyle: "bullets"
                    },
                    {
                        id: "au-sec7",
                        title: "7. Last-Mile Delivery & Risk Mitigation",
                        items: [
                            { label: "The Last Mile", text: "Once your cargo clears customs in Sydney or Melbourne, we hand it over to trusted local freight networks (Australia Post, Toll, or specialized local trucking for oversized furniture) for direct delivery to your home or commercial warehouse." },
                            { label: "All-Risk Insurance", text: "The ocean journey involves rough seas and intensive port handling. We offer All-Risk Insurance that covers 100% of your declared cargo value against water damage, theft, or handling damage from the moment it leaves Shenzhen until it arrives at your Australian address." }
                        ],
                        listStyle: "none"
                    }
                ]
            }
        },
        ru: {
            badge: "Прямая линия в Австралию",
            titlePrefix: "Доставка из Китая в",
            titleHighlight: "Австралию",
            subtitle: "Логистика без хлопот (DDP). Мы берем на себя австралийскую таможню, карантин и портовые сборы.",
            introTitle: "Бесшовная доставка 'До Двери'",
            introText: "Покупаете мебель из Фошаня для своего дома? Заказываете товары с Taobao/Poizon или везете оптовую партию для бизнеса в Австралии? Мы доставим груз до двери в Сиднее, Мельбурне, Брисбене, Перте или Аделаиде.",
            methodsTitle: "Наши способы доставки и тарифы",
            methods: [
                {
                    icon: Plane,
                    title: "Авиадоставка",
                    tag: "Быстро",
                    desc: "Посылки, одежда, электроника и срочный сток.",
                    price: "От $9/кг",
                    speed: "5–9 дней",
                    color: "bg-blue-50 text-brand-blue"
                },
                {
                    icon: Ship,
                    title: "Морская Перевозка",
                    tag: "Экономно",
                    desc: "Мебель, тяжелые грузы, крупный опт.",
                    price: "От $1.3/кг",
                    speed: "20–30 дней",
                    color: "bg-teal-50 text-teal-600"
                }
            ],
            whyTitle: "Почему австралийские импортёры выбирают HappyBox",
            whyIntro: "Все наши маршруты работают по системе DDP. Цена включает фрахт, растаможку, карантинный контроль, налоги (GST) и пошлины. Никаких внезапных счетов от Border Force.",
            benefits: [
                {
                    icon: ShieldCheck,
                    title: "Доставка без налогов и пошлин (DDP)",
                    desc: "В Австралии строгие правила НДС (GST). По системе DDP все налоги уплачены заранее — вы получаете груз без доплат."
                },
                {
                    icon: Box,
                    title: "Бесплатная консолидация на складе",
                    desc: "Покупайте у разных продавцов (Taobao, 1688). Мы соберем покупки на складе в Шэньчжэне и объединим в одну партию для экономии."
                },
                {
                    icon: Check,
                    title: "Строгий контроль качества (QC)",
                    desc: "Проверяем товар и делаем фото перед отправкой. Вы не отправите брак на другой конец света."
                },
                {
                    icon: HelpCircle,
                    title: "Био-безопасность (Карантин)",
                    desc: "Мы проверяем ваш груз на соответствие строгим карантинным законам Австралии (упаковка, древесина), чтобы избежать штрафов."
                }
            ],
            fearsTitle: "Частые вопросы",
            fearsList: [
                {
                    q: "Как рассчитывается объемный вес?",
                    a: "Австралийские линии используют формулу: Длина × Ширина × Высота (см) / 6000 (или 5000) = Объемный вес (кг). Оплачивается большее значение из физического или объемного веса."
                },
                {
                    q: "Нужно ли мне платить австралийский GST?",
                    a: "Нет! Все отправления идут по DDP. В наш тариф уже заложен 10% GST и локальные пошлины. Вам не нужен ABN (Australian Business Number) или таможенный брокер."
                },
                {
                    q: "Застрахован ли мой груз?",
                    a: "Да, мы предоставляем страховку All-Risk. Она покрывает 100% заявленной стоимости от повреждений, потери или намокания на море, с момента отправки до получения."
                }
            ],
            stepsTitle: "Как работает доставка в Австралию",
            steps: [
                "Получите свой адрес: Мы выдаем вам персональный адрес нашего склада в Шэньчжэне.",
                "Сделайте заказ: Укажите этот адрес на Taobao, 1688 или передайте своему поставщику.",
                "Проверка: Мы делаем фото, проверяем содержимое и объединяем посылки в одну.",
                "Доставка: После успешной растаможки в Сиднее или Мельбурне мы передаем груз (Australia Post, Toll и др.) для доставки до вашей двери."
            ],
            cta: "Получить адрес в Китае",
            back: "Назад к направлениям",
            crossPromo: [
                {
                    title: "Нужна помощь с покупками на Taobao?",
                    desc: "Мы поможем разобраться в китайских маркетплейсах, пообщаемся с продавцами и безопасно выкупим нужные товары.",
                    link: "/ru/taobao",
                    action: "Узнать о сервисе выкупа 0%",
                    isPrimary: true
                }
            ],
            guide: {
                title: "Гид по доставке в Австралию 2026: Цены, Таможня и Карантин",
                subtitle: "Импорт в Австралию требует строгого соблюдения правил Министерства сельского хозяйства (DAFF) и Пограничной службы (ABF). Этот гайд поможет грамотно спланировать логистику.",
                jumpTo: "Перейти к:",
                nav: {
                    "au-sec1": "Способы доставки",
                    "au-sec2": "Био-безопасность",
                    "au-sec3": "Таможня и GST",
                    "au-sec4": "Категории товаров",
                    "au-sec5": "Объемный вес",
                    "au-sec6": "Стратегия запасов",
                    "au-sec7": "Доставка и риски"
                },
                sections: [
                    {
                        id: "au-sec1",
                        title: "1. Варианты логистики: Авиа против Моря",
                        items: [
                            { label: "Авиадоставка", text: "Ежедневные рейсы из Шэньчжэня/Гонконга прямо в Сидней (SYD) или Мельбурн (MEL). Срок 5–9 дней. Оптимально для дорогой техники, косметики и срочного E-commerce." },
                            { label: "Морской фрахт", text: "Прямые рейсы из Шэньчжэня до главных портов Австралии. На воде груз проводит 12–18 дней, общий срок доставки до двери 20–30 дней." }
                        ],
                        listStyle: "bullets"
                    },
                    {
                        id: "au-sec2",
                        title: "2. Карантинные законы Австралии (DAFF)",
                        desc: "В Австралии самые строгие в мире правила био-безопасности для защиты местной экосистемы.",
                        items: [
                            { label: "Древесина и ISPM-15", text: "Любая деревянная упаковка, паллеты или ящики должны пройти фумигацию. Если DAFF найдет хотя бы одного жука, груз уничтожат или заставят обработать за огромные деньги." },
                            { label: "Решение HappyBox", text: "Мы проверяем упаковку на складе. Если использована обычная древесина, мы перепакуем в фанеру (plywood), которая не требует фумигации." }
                        ],
                        listStyle: "bullets"
                    },
                    {
                        id: "au-sec3",
                        title: "3. Налоги и пошлины: GST",
                        items: [
                            { label: "GST на дешевые товары", text: "Налог 10% (GST) применяется ко всем товарам, даже стоимостью менее 1000 AUD." },
                            { label: "Пошлины и оформление", text: "Для грузов дороже 1000 AUD применяются пошлины (обычно 5%) в зависимости от кода ТН ВЭД." },
                            { label: "Преимущество DDP", text: "Всё включено: наш тариф DDP уже содержит оплату 10% GST и пошлин. Вам не нужен ABN или брокер." }
                        ],
                        listStyle: "bullets"
                    },
                    {
                        id: "au-sec4",
                        title: "4. Нюансы доставки по категориям",
                        items: [
                            { label: "Мебель и ремонт", text: "Популярно для морской доставки. Покупка кухни, дивана или мрамора в Китае экономит тысячи долларов. Мы безопасно упакуем крупногабарит." },
                            { label: "Электроника", text: "Для товаров с литиевыми батареями требуются паспорта безопасности (MSDS). У нас есть специальные проверенные авиа- и морские каналы." },
                            { label: "Одежда", text: "В Австралии есть законы об обязательной маркировке состава и страны происхождения. Мы поможем проверить ярлыки на складе." }
                        ],
                        listStyle: "bullets"
                    },
                    {
                        id: "au-sec5",
                        title: "5. Как платить за вес правильно (Объемный вес)",
                        desc: "Логистические компании в Австралии берут плату за объем, если груз большой, но легкий.",
                        items: [
                            { label: "Формула", text: "Длина × Ширина × Высота (см) / 6000 (или 5000) = Объемный вес (кг)." },
                            { label: "Наш совет", text: "Для объемных вещей (подушки, одежда) мы делаем жесткую вакуумную или компрессионную упаковку для экономии на доставке." }
                        ],
                        listStyle: "bullets"
                    },
                    {
                        id: "au-sec6",
                        title: "6. Стратегия Drip-Feeding (Хранение)",
                        desc: "Склады в Сиднее или Мельбурне очень дорогие. Как снизить расходы?",
                        items: [
                            { label: "Буферный склад", text: "Держите основную массу товара бесплатно у нас в Шэньчжэне (до 30 дней)." },
                            { label: "Меньше, но чаще", text: "Отправляйте частые партии по мере падения стока в Австралии, тем самым избегая высоких местных складских затрат." }
                        ],
                        listStyle: "bullets"
                    },
                    {
                        id: "au-sec7",
                        title: "7. Доставка до двери и риски",
                        items: [
                            { label: "Последняя миля", text: "После растаможки мы отдаем груз Australia Post, Toll или специализированным логистам для мебели на прямую доставку к вам." },
                            { label: "Страхование All-Risk", text: "Морской путь может быть сложным. Наша страховка гарантирует 100% покрытие при кражах, порче водой или повреждениях в порту." }
                        ],
                        listStyle: "none"
                    }
                ]
            }
        }
    };

    return (
        <DestinationTemplate
            language={language}
            setLanguage={setLanguage}
            onBack={onBack}
            onNavigate={onNavigate}
            content={fullContent}
        />
    );
};

import React, { useEffect } from 'react';
import { Header } from './Header';
import { Contact } from './Contact';
import { Footer } from './Footer';
import { SeoBlock } from './SeoBlock';
import { Language } from '../utils/translations';
import { FloatingContact } from './FloatingContact';
import { 
  Check, ShieldCheck, Plane, Anchor, Zap, Box, Send, 
  ScanBarcode, Layers, Globe, Truck, ShoppingBag, AlertTriangle, 
  Battery, Clock, Factory, Scale, FileText, Activity 
} from 'lucide-react';

interface AmazonPageProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  onBack?: () => void;
  onNavigate?: (page: string) => void;
}

export const AmazonPage: React.FC<AmazonPageProps> = ({ language, setLanguage, onBack, onNavigate }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const content = {
        en: {
            badge: "Amazon FBA USA Logistics",
            titlePrefix: "Shipping from China to",
            titleHighlight: "Amazon FBA USA",
            titleSuffix: ": 100% DDP & Zero Rejection Prep",
            subtitle: "Scale your US Amazon business without the logistics headache. We provide a specialized \"Factory-to-FBA\" bridge with professional prep and guaranteed customs clearance.",
            
            seamlessTitle: "Seamless Delivery to US Fulfillment Centers",
            seamlessText: "Whether your inventory is assigned to ONT8, FTW1, CLT2, or JFK8, HappyBox ensures your goods arrive on time and in full compliance with Amazon's strict inbound policies.",
            ddpTitle: "DDP (Delivered Duty Paid)",
            ddpText: "One price that covers everything - freight, customs bonds, ISF filing, and all US import duties.",
            minWeightTitle: "0.1 kg Minimum",
            minWeightText: "Whether you're launching a PL (Private Label) sample or restocking a 40ft container, we've got you covered.",

            ratesTitle: "Our Amazon Shipping Rates & Methods",
            ratesAir: { method: "Air Freight", price: "From $10/kg", time: "5-9 days", bestFor: "Urgent restocks & launches" },
            ratesSea: { method: "Sea Freight", price: "From $1.2/kg", time: "25-35 days", bestFor: "Bulk inventory & high margins" },

            prepTitle: "Professional Amazon FBA Prep (China-Based)",
            prepSubtitle: "Don't find out your labels are wrong when the goods reach the US. We fix everything at our Shenzhen warehouse:",
            prepItems: [
                { title: "FNSKU Labeling", desc: "Precise barcode application." },
                { title: "Strict Quality Inspection", desc: "We catch defects before they leave China." },
                { title: "Bundling & Poly-bagging", desc: "Expert packaging for multi-packs." },
                { title: "Made in China Stickers", desc: "Full compliance with US Customs (CBP) mandatory markings." }
            ],

            fearsTitle: "Solving Your FBA Logistics Fears",
            fears: [
                { q: "What if my shipment is rejected?", a: "We have a 0% rejection rate. We know the height, weight, and labeling rules for every US hub." },
                { q: "What about customs duties?", a: "We handle the ISF 10+2 filing and all Section 301 tariffs. No surprise bills from CBP." },
                { q: "Am I too small?", a: "We support growing brands. No massive minimums - start small and scale." }
            ],

            howTitle: "How to Get Your Goods to FBA",
            steps: [
                { title: "Create Shipment", desc: "Send us your FNSKU and Carton labels in PDF." },
                { title: "Order to Warehouse", desc: "Ship your goods from the factory to our Shenzhen hub." },
                { title: "Prep & Inspect", desc: "We label, inspect, and photograph your inventory." },
                { title: "Final Delivery", desc: "We ship and track your cargo until it's \"Checked-in\" at the FBA warehouse." }
            ],

            techTitle: "Amazon FBA USA Strategy & Technical Guide (2026)",
            techSubtitle: "Moving cargo to US Amazon warehouses requires a strategic approach to route selection and tariff mitigation. This guide provides the technical data needed for professional FBA inventory planning.",
            techSections: [
                {
                    title: "1. Strategic Routing: West Coast vs. East Coast Hubs",
                    text: "Amazon's warehouse assignment can make or break your margins. We optimize the \"Last Mile\" delivery based on your assigned destination:",
                    list: [
                        "West Coast (ONT8, LGB8, LAX9): Reached via Matson Express (12-15 days). These are the fastest hubs to restock from Shenzhen.",
                        "Central/East (FTW1, MDW2, CLT2): Typically reached via Standard Sea to Houston or Savannah, or via \"Mini-Landbridge\" (Sea + Rail)."
                    ]
                },
                {
                    title: "2. Technical Prep Standards for US Warehouses",
                    text: "Amazon USA is notorious for \"Unplanned Service\" fees if your prep is subpar. We ensure:",
                    list: [
                        "GMA Grade A Pallets: 40\" x 48\" heat-treated pallets with 4-way entry for LTL shipments.",
                        "Suffocation Warnings: Mandatory for any poly-bags with an opening of 5 inches or more.",
                        "Box Limits: No carton exceeds 50 lbs (22.5 kg) or 25 inches on any side unless it contains a single oversized unit."
                    ]
                },
                {
                    title: "3. Customs & Tariffs: Section 321 vs. Formal Entry",
                    text: "For Amazon sellers, managing duty exposure is critical in 2026.",
                    list: [
                        "Section 321 (De Minimis): We utilize strategies for shipments under $800 to enter the US duty-free where applicable.",
                        "Formal Entry Management: For larger shipments, we handle the Continuous Customs Bond and verify your HS Codes to ensure you aren't overpaying on Section 301 additional tariffs."
                    ]
                },
                {
                    title: "4. Amazon-Preferred Carrier Integration",
                    text: "Once your cargo clears customs in Los Angeles or New York, the \"Last Mile\" is crucial.",
                    list: [
                        "SPD (Small Parcel Delivery): We use UPS and FedEx for fast, trackable delivery of individual cartons.",
                        "LTL (Less than Truckload): For palletized shipments, we coordinate with Amazon-partnered carriers to secure delivery appointments through the Carrier Central portal."
                    ]
                },
                {
                    title: "5. Calculating Chargeable Weight for FBA",
                    text: "Logistics costs for FBA are calculated based on whichever is greater: actual weight or volumetric size. The FBA Standard Formula: Length (cm) × Width (cm) × Height (cm) / 5000 or 6000 = Volumetric Weight (kg).",
                    list: [
                        "Our team provides free re-boxing to eliminate \"dead air\" and lower your billable weight before the goods leave China."
                    ]
                },
                {
                    title: "6. The Shenzhen \"Safety Buffer\" Workflow",
                    text: "By utilizing our Bao'an district facility, you gain a physical quality buffer:",
                    list: [
                        "Verification: We match the physical count against your Seller Central packing list.",
                        "Labeling: We apply FNSKU barcodes and Carton Labels, ensuring they are placed correctly (not on box seams).",
                        "Photos & Reporting: You receive a full report of your inventory's condition before it is loaded."
                    ]
                },
                {
                    title: "7. Risk Mitigation: Cargo Insurance",
                    text: "Standard carrier liability (especially for ocean freight) is extremely low. We offer All-Risk Insurance that covers the full declared value of your Amazon inventory, protecting you against loss at sea, damage during transit, or theft.",
                    list: []
                }
            ],

            extraSections: [
                {
                    icon: Clock,
                    title: "Smart Inventory Management: Drip-Feeding from Shenzhen",
                    text: "Amazon storage fees - especially during Q4 (October-December) - can quickly eat your entire profit margin. Why pay premium US storage rates for inventory that won't sell for months?",
                    list: [
                        "The Strategy: Ship your full production run to our Shenzhen Warehouse. We provide low-cost (or free for the first 30 days) storage in China.",
                        "The Execution: We \"drip-feed\" smaller batches to Amazon FBA hubs based on your actual sales velocity.",
                        "The Benefit: You keep your IPI (Inventory Performance Index) high, avoid long-term storage fees, and maintain a \"buffer\" of stock ready to be air-shipped if you suddenly go viral."
                    ]
                },
                {
                    icon: Battery,
                    title: "Specialized Logistics: Batteries, Liquids & Hazmat",
                    text: "Many freight forwarders shy away from \"difficult\" cargo. At HappyBox, we have the certifications and carrier contracts to handle specialized categories that others reject:",
                    list: [
                        "Electronics & Toys: Full support for products with Lithium Batteries (PI965, PI966, PI967). We verify your UN38.3 and MSDS documents before booking to ensure zero delays at customs.",
                        "Health & Beauty: We ship liquids, creams, and cosmetics using specialized \"sensitive goods\" channels that provide stable transit times and smooth clearance.",
                        "Compliance Check: Our team ensures your Hazmat labels are correctly applied and that your SDS (Safety Data Sheets) are ready for CBP/Amazon inspection."
                    ]
                },
                {
                    icon: Scale,
                    title: "Handling Oversize & Heavy Goods",
                    text: "While Amazon's standard limit is 50 lbs per carton, your business might be bigger than that. We are fully equipped to handle Oversize (OS) and Heavy & Bulky inventory:",
                    list: [
                        "Specialized Prep: We apply mandatory \"Team Lift\" or \"Mechanical Lift\" labels to any carton exceeding US safety weight limits.",
                        "Palletized Solutions: For industrial equipment, furniture, or large electronics, we provide custom palletization to protect your goods and meet Amazon's LTL/FTL inbound requirements.",
                        "No Item Too Large: From e-bikes to massage chairs, we manage the specialized trucking required to get oversized units to the correct \"Oversize-designated\" fulfillment centers."
                    ]
                },
                {
                    icon: Activity,
                    title: "Peak Season Readiness: Prime Day & Black Friday",
                    text: "In logistics, \"on time\" means arriving before the congestion starts. During Q4 and major sales events, the Pacific routes become a bottleneck.",
                    list: [
                        "Guaranteed Space: We use our Tier-1 carrier relationships to book space 2-3 weeks in advance during Golden Week, Prime Day, and Black Friday peaks.",
                        "Congestion Bypass: We prioritize \"Fast Sea\" routes (like Matson) that utilize dedicated terminals, ensuring your stock isn't sitting on a ship in San Pedro Bay while your \"Out of Stock\" badge is showing on Amazon.",
                        "Realistic Planning: We provide a Peak Season Shipping Calendar so you know exactly when your goods must leave Shenzhen to be \"Live\" for the holiday rush."
                    ]
                }
            ],
            
            cta: "Get an FBA Shipping Quote",
            back: "Back to Home"
        },
        ru: {
            badge: "Логистика Amazon FBA США",
            titlePrefix: "Доставка из Китая на",
            titleHighlight: "Amazon FBA США",
            titleSuffix: ": 100% DDP и Преп без отказов",
            subtitle: "Масштабируйте свой бизнес на Amazon в США без головной боли с логистикой. Мы предоставляем специализированный мост \"Фабрика - FBA\" с профессиональным препом и гарантированным таможенным оформлением.",
            
            seamlessTitle: "Бесшовная доставка на фулфилмент-центры в США",
            seamlessText: "Независимо от того, назначен ли ваш инвентарь на ONT8, FTW1, CLT2 или JFK8, HappyBox гарантирует прибытие товаров вовремя и в полном соответствии со строгими политиками приема Amazon.",
            ddpTitle: "DDP (Delivered Duty Paid)",
            ddpText: "Единая цена, которая покрывает всё - фрахт, таможенные бонды, подачу ISF и все импортные пошлины США.",
            minWeightTitle: "Минимум от 0.1 кг",
            minWeightText: "Независимо от того, запускаете ли вы образец PL (Private Label) или пополняете запасы в 40-футовом контейнере, мы поможем.",

            ratesTitle: "Наши тарифы и методы доставки",
            ratesAir: { method: "Авиадоставка", price: "От $10/кг", time: "5-9 дней", bestFor: "Срочные пополнения и запуски" },
            ratesSea: { method: "Морская доставка", price: "От $1.2/кг", time: "25-35 дней", bestFor: "Объемный инвентарь и высокая маржа" },

            prepTitle: "Профессиональный преп для Amazon FBA (в Китае)",
            prepSubtitle: "Не ждите обнаружения ошибок в маркировке по прибытии товаров в США. Мы всё исправляем на нашем складе в Шэньчжэне:",
            prepItems: [
                { title: "Маркировка FNSKU", desc: "Точное нанесение штрих-кода." },
                { title: "Строгая инспекция качества", desc: "Выявляем дефекты до того, как они покинут Китай." },
                { title: "Бандлы и Полибеги", desc: "Экспертная упаковка для мультипаков." },
                { title: "Стикеры Made in China", desc: "Полное соответствие обязательным требованиям Таможни США (CBP)." }
            ],

            fearsTitle: "Решение ваших страхов логистики FBA",
            fears: [
                { q: "А если мою отправку отклонят?", a: "У нас 0% отказов. Мы знаем правила по высоте, весу и маркировке для каждого хаба в США." },
                { q: "Что с таможенными пошлинами?", a: "Мы занимаемся подачей ISF 10+2 и всеми тарифами Section 301. Никаких неожиданных счетов от CBP." },
                { q: "Я слишком маленький селлер?", a: "Мы поддерживаем растущие бренды. Нет огромных минимумов - начинайте с малого и масштабируйтесь." }
            ],

            howTitle: "Как отправить груз на FBA",
            steps: [
                { title: "Создайте Шипмент", desc: "Отправьте нам ваши FNSKU и Carton labels в PDF." },
                { title: "Заказ на Склад", desc: "Отправьте товары с фабрики на наш хаб в Шэньчжэне." },
                { title: "Преп и Инспекция", desc: "Мы маркируем, проверяем и фотографируем ваш инвентарь." },
                { title: "Финальная доставка", desc: "Мы отправляем и отслеживаем груз до статуса \"Checked-in\" на складе FBA." }
            ],

            techTitle: "Стратегия и техническое руководство Amazon FBA USA (2026)",
            techSubtitle: "Отправка грузов на склады Amazon в США требует стратегического подхода к выбору маршрута и минимизации тарифов. В этом руководстве представлены технические данные для планирования.",
            techSections: [
                {
                    title: "1. Стратегическое распределение: Западное против Восточного побережья",
                    text: "Назначение склада Amazon может определить вашу маржинальность. Мы оптимизируем доставку \"Последней мили\":",
                    list: [
                        "Западное побережье (ONT8, LGB8, LAX9): Доставка через Matson Express (12-15 дней). Самые быстрые хабы для пополнения запасов.",
                        "Центр/Восток (FTW1, MDW2, CLT2): Обычно через Standard Sea до Хьюстона или Саванны, либо через \"Mini-Landbridge\" (Море + ЖД)."
                    ]
                },
                {
                    title: "2. Технические стандарты препа для складов США",
                    text: "Amazon USA известен штрафами \"Unplanned Service\", если преп не на уровне. Мы гарантируем:",
                    list: [
                        "Палеты стандарта GMA Grade A: 40\" x 48\" термообработанные палеты с 4-сторонним доступом для LTL.",
                        "Предупреждения об удушье: Обязательно для полибегов с отверстием 5 дюймов и более.",
                        "Лимиты по коробкам: Ни одна коробка не превышает 50 фунтов (22.5 кг) или 25 дюймов с любой стороны (кроме негабарита)."
                    ]
                },
                {
                    title: "3. Таможня и Тарифы: Section 321 против Formal Entry",
                    text: "Управление таможенными рисками критично в 2026 году.",
                    list: [
                        "Section 321 (De Minimis): Беспошлинный ввоз отправлений до $800 где это применимо.",
                        "Formal Entry: Для крупных отправок мы управляем Customs Bond и проверяем HS коды для избежания переплат по Section 301."
                    ]
                },
                {
                    title: "4. Интеграция с перевозчиками Amazon",
                    text: "После растаможивания \"Последняя миля\" имеет решающее значение.",
                    list: [
                        "SPD (Small Parcel Delivery): UPS и FedEx для отслеживаемой доставки небольших грузов.",
                        "LTL (Less than Truckload): Координируем палетированные грузы через портал Carrier Central."
                    ]
                },
                {
                    title: "5. Расчет оплачиваемого веса для FBA",
                    text: "Логистические затраты рассчитываются по объемному или фактическому весу. Формула: Длина(см) × Ширина(см) × Высота(см) / 5000 или 6000 = Объемный вес.",
                    list: [
                        "Мы бесплатно переупаковываем товар для устранения \"пустот\" и снижения расчетного веса."
                    ]
                },
                {
                    title: "6. Воркфлоу \"Буфера Безопасности\" в Шэньчжэне",
                    text: "Наш хаб дает вам физический контроль качества до отправки в США:",
                    list: [
                        "Проверка: Сверяем количество с вашим Seller Central packing list.",
                        "Маркировка: Точное нанесение FNSKU и Carton Labels.",
                        "Фото и отчет: Вы получаете отчет о состоянии инвентаря перед загрузкой в контейнер."
                    ]
                },
                {
                    title: "7. Снижение рисков: Страхование грузов",
                    text: "Ответственность перевозчиков (особенно морских) крайне мала. Мы предлагаем All-Risk Insurance, покрывающую полную заявленную стоимость инвентаря от потерь и повреждений.",
                    list: []
                }
            ],

            extraSections: [
                {
                    icon: Clock,
                    title: "Смарт Управление Инвентарем: Drip-Feeding",
                    text: "Хранение на Amazon в Q4 очень дорогое. Зачем платить за склад в США за товары, которые будут продаваться месяцами?",
                    list: [
                        "Стратегия: Отправьте полную партию на наш склад в Шэньчжэне (первые 30 дней бесплатно).",
                        "Исполнение: Отправляем небольшие партии \"drip-feed\" на хабы Amazon FBA соразмерно вашим продажам.",
                        "Выгода: Высокий IPI, отсутствие fees за длительное хранение и готовый к авиа-отправке буфер в случае всплеска спроса."
                    ]
                },
                {
                    icon: Battery,
                    title: "Специализированная логистика: Батареи, Жидкости и Hazmat",
                    text: "Мы имеем сертификаты и контракты для работы со сложными грузами, от которых другие отказываются:",
                    list: [
                        "Электроника и Игрушки: Поддержка батарей (PI965, PI966, PI967). Проверка UN38.3 и MSDS перед букингом.",
                        "Здоровье и Красота: Жидкости и косметика по безопасным каналам \"sensitive goods\".",
                        "Комплаенс: Правильные лейблы Hazmat и готовность паспортов безопасности (SDS) для Amazon/таможни."
                    ]
                },
                {
                    icon: Scale,
                    title: "Работа с Негабаритом и Тяжелыми грузами (Oversize)",
                    text: "Стандарт Amazon - 50 фунтов, но если ваш бизнес больше, мы полностью готовы к отправке тяжелых и объемных товаров:",
                    list: [
                        "Спец. Преп: Клеим обязательные маркировки \"Team Lift\" / \"Mechanical Lift\" на тяжелые коробки.",
                        "Палетизация: Подготовка промышленного оборудования и мебели под требования LTL/FTL Amazon.",
                        "Нет слишком больших товаров: Доставим электровелосипеды и массажные кресла на специализированные \"Oversize\" склады."
                    ]
                },
                {
                    icon: Activity,
                    title: "Готовность к пиковым сезонам: Prime Day & Black Friday",
                    text: "В логистике \"вовремя\" значит прибыть до начала пробок в тихоокеанских портах во время Q4.",
                    list: [
                        "Гарантия места: Бронируем места за 2-3 недели до Золотой недели, Prime Day и Черной пятницы.",
                        "Обход пробок: Приоритет быстрым линиям (например, Matson) с собственными терминалами.",
                        "Реалистичное планирование: Календарь пикового сезона для точного понимания сроков отправки."
                    ]
                }
            ],
            
            cta: "Рассчитать доставку FBA",
            back: "На главную"
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
                <section className="py-12 lg:py-24 bg-cream">
                    <div className="container mx-auto px-6 xl:px-0">
                         <div className="max-w-5xl mx-auto text-center">
                            <span className="inline-flex items-center justify-center bg-[#FF9900]/10 text-[#FF9900] px-5 py-2.5 rounded-full text-sm font-bold uppercase tracking-wider mb-8">
                                {t.badge}
                            </span>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] text-brand-dark mb-8 tracking-tight">
                                {t.titlePrefix} <span className="text-orange-500 relative inline-block">
                                    {t.titleHighlight}
                                    <svg className="absolute w-full h-3 -bottom-1 left-0 text-brand-yellow z-[-1]" viewBox="0 0 100 10" preserveAspectRatio="none">
                                       <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" opacity="0.6" />
                                    </svg>
                                </span><br />
                                {t.titleSuffix.replace(/^:\s*/, '')}
                            </h1>
                            <p className="text-xl text-gray-600 mb-10 font-medium leading-relaxed max-w-3xl mx-auto">
                                {t.subtitle}
                            </p>
                         </div>
                    </div>
                </section>

                <section id="details" className="py-16 bg-white rounded-[50px] mb-8 container mx-auto shadow-sm px-6 lg:px-20 border border-gray-100">
                    <div className="max-w-4xl mx-auto space-y-12 text-gray-800 text-lg leading-relaxed">
                            
                            {/* Seamless Delivery */}
                            <div className="bg-[#FF9900]/5 rounded-[40px] p-8 lg:p-12 mb-20 border border-[#FF9900]/10">
                                <div className="text-center mb-10">
                                    <h3 className="text-3xl font-extrabold text-brand-dark mb-4">{t.seamlessTitle}</h3>
                                    <p className="text-lg text-gray-600 max-w-3xl mx-auto font-medium leading-relaxed">{t.seamlessText}</p>
                                </div>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="bg-white p-6 md:p-8 rounded-[30px] shadow-sm border border-[#FF9900]/10 h-full">
                                        <h4 className="font-bold text-brand-dark mb-3 text-lg leading-snug">{t.ddpTitle}</h4>
                                        <p className="text-base md:text-lg text-gray-700 font-medium leading-relaxed font-medium">{t.ddpText}</p>
                                    </div>
                                    <div className="bg-white p-6 md:p-8 rounded-[30px] shadow-sm border border-[#FF9900]/10 h-full">
                                        <h4 className="font-bold text-brand-dark mb-3 text-lg leading-snug">{t.minWeightTitle}</h4>
                                        <p className="text-base md:text-lg text-gray-700 font-medium leading-relaxed font-medium">{t.minWeightText}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Rates */}
                            <div className="mb-20">
                                <h3 className="text-2xl font-extrabold text-brand-dark mb-10 text-center uppercase tracking-widest opacity-80">
                                    {t.ratesTitle}
                                </h3>
                                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                                    <div className="bg-white rounded-[30px] p-6 border-2 border-gray-100 shadow-sm flex flex-col">
                                        <h4 className="font-bold text-xl text-brand-dark mb-4">{t.ratesAir.method}</h4>
                                        <div className="space-y-4 font-medium text-gray-600 mb-6">
                                            <div className="flex justify-between border-b border-gray-50 pb-2">
                                                <span className="uppercase text-xs font-bold text-gray-400">Price</span>
                                                <span className="text-brand-blue font-bold">{t.ratesAir.price}</span>
                                            </div>
                                            <div className="flex justify-between border-b border-gray-50 pb-2">
                                                <span className="uppercase text-xs font-bold text-gray-400">Time</span>
                                                <span className="text-brand-dark lg:text-right">{t.ratesAir.time}</span>
                                            </div>
                                            <div className="flex justify-between border-b border-gray-50 pb-2">
                                                <span className="uppercase text-xs font-bold text-gray-400">Best For</span>
                                                <span className="text-brand-dark lg:text-right">{t.ratesAir.bestFor}</span>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="bg-white rounded-[30px] p-6 border-2 border-gray-100 shadow-sm flex flex-col">
                                        <h4 className="font-bold text-xl text-brand-dark mb-4">{t.ratesSea.method}</h4>
                                        <div className="space-y-4 font-medium text-gray-600 mb-6">
                                            <div className="flex justify-between border-b border-gray-50 pb-2">
                                                <span className="uppercase text-xs font-bold text-gray-400">Price</span>
                                                <span className="text-orange-600 font-bold">{t.ratesSea.price}</span>
                                            </div>
                                            <div className="flex justify-between border-b border-gray-50 pb-2">
                                                <span className="uppercase text-xs font-bold text-gray-400">Time</span>
                                                <span className="text-brand-dark lg:text-right">{t.ratesSea.time}</span>
                                            </div>
                                            <div className="flex justify-between border-b border-gray-50 pb-2">
                                                <span className="uppercase text-xs font-bold text-gray-400">Best For</span>
                                                <span className="text-brand-dark lg:text-right">{t.ratesSea.bestFor}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Prep Services */}
                            <div className="bg-gray-50 rounded-[40px] p-8 lg:p-12 mb-20 border border-gray-100 shadow-sm">
                                <div className="text-center mb-10">
                                    <h3 className="text-3xl font-extrabold text-brand-dark mb-4">{t.prepTitle}</h3>
                                    <p className="text-lg text-gray-600 max-w-3xl mx-auto font-medium leading-relaxed">{t.prepSubtitle}</p>
                                </div>
                                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                                    {t.prepItems.map((item, idx) => (
                                        <div key={idx} className="bg-white p-6 md:p-8 rounded-[30px] h-full shadow-sm border border-gray-100">
                                            <h4 className="font-bold text-brand-dark mb-3 text-lg leading-snug">{item.title}</h4>
                                            <p className="text-base md:text-lg text-gray-700 font-medium leading-relaxed font-medium">{item.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Fears */}
                            <div className="mb-20">
                                 <h3 className="text-3xl font-extrabold text-brand-dark mb-12 text-center">{t.fearsTitle}</h3>
                                 <div className="grid lg:grid-cols-3 gap-8">
                                    {t.fears.map((f, idx) => (
                                        <div key={idx} className="bg-white p-6 md:p-8 rounded-[30px] shadow-sm border border-gray-100">
                                            <h4 className="font-bold text-lg text-brand-dark mb-3 leading-snug">{f.q}</h4>
                                            <p className="text-base md:text-lg text-gray-700 font-medium leading-relaxed">{f.a}</p>
                                        </div>
                                    ))}
                                 </div>
                            </div>

                            {/* Steps & Technical Guide */}
                            <div className="mb-20">
                                <h3 className="text-3xl font-extrabold text-brand-dark mb-12 text-center">{t.howTitle}</h3>
                                <div className="grid md:grid-cols-2 gap-8 mb-16">
                                    {t.steps.map((step, idx) => (
                                        <div key={idx} className="flex gap-5 items-start">
                                            <div className="w-12 h-12 rounded-full bg-brand-light flex-shrink-0 flex items-center justify-center text-brand-blue shadow-sm mt-1">
                                                <span className="font-black text-lg">{idx + 1}</span>
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-lg text-brand-dark mb-2">{step.title.replace(/^\d+\.\s*/, '')}</h4>
                                                <p className="text-base md:text-lg text-gray-700 font-medium leading-relaxed">{step.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                    
                                {/* Tech guide */}
                                <div className="bg-white rounded-[40px] p-8 lg:p-12 mb-20 border border-gray-100 shadow-sm">
                                    <div className="text-center mb-10">
                                        <h3 className="text-3xl font-extrabold text-brand-dark mb-4">{t.techTitle}</h3>
                                        <p className="text-lg text-gray-600 max-w-3xl mx-auto font-medium leading-relaxed">{t.techSubtitle}</p>
                                    </div>
                                    <div className="space-y-10">
                                        {t.techSections.map((section, idx) => (
                                            <div key={idx} className="flex gap-4 sm:gap-6 items-start">
                                                <div className="w-10 h-10 rounded-full bg-orange-100 text-[#FF9900] font-black flex items-center justify-center flex-shrink-0 text-xl mt-1">
                                                    {idx + 1}
                                                </div>
                                                <div>
                                                    <h3 className="text-2xl font-bold text-brand-dark mb-2 tracking-tight">{section.title.replace(/^\d+\.\s*/, '')}</h3>
                                                    <p className="text-gray-700 leading-relaxed font-medium mb-3">{section.text}</p>
                                                    {section.list && section.list.length > 0 && (
                                                        <ul className="list-disc list-outside ml-6 space-y-2 text-gray-700 font-medium">
                                                            {section.list.map((li, i) => (
                                                                <li key={i} className="pl-1">{li}</li>
                                                            ))}
                                                        </ul>
                                                    )}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Extra Sections */}
                            <div className="mb-20">
                                <div className="grid lg:grid-cols-3 gap-8">
                                    {t.extraSections.map((sect, idx) => (
                                        <div key={idx} className="bg-white p-6 md:p-8 rounded-[30px] border border-gray-100 shadow-sm flex flex-col">
                                            <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-brand-light text-brand-blue">
                                                <sect.icon size={28} />
                                            </div>
                                            <h4 className="font-bold text-xl text-brand-dark mb-3">{sect.title}</h4>
                                            <p className="text-base md:text-lg text-gray-700 font-medium leading-relaxed mb-6 flex-grow">{sect.text}</p>
                                            {sect.list && sect.list.length > 0 && (
                                                <ul className="space-y-3 pt-6 border-t border-gray-50 text-sm text-gray-700 font-medium">
                                                    {sect.list.map((li, i) => {
                                                        const parts = li.split(': ');
                                                        const boldWord = parts.length > 1 ? parts[0] : null;
                                                        const rest = parts.length > 1 ? parts.slice(1).join(': ') : parts[0];
                                                        return (
                                                            <li key={i} className="flex gap-2 items-start">
                                                                <div className="w-1.5 h-1.5 rounded-full bg-brand-blue flex-shrink-0 mt-1.5" />
                                                                <div>
                                                                    {boldWord && <strong className="text-brand-dark block mb-0.5">{boldWord}:</strong>} 
                                                                    <span className="text-gray-600">{rest}</span>
                                                                </div>
                                                            </li>
                                                        );
                                                    })}
                                                </ul>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* CTA */}
                            <div className="text-center pt-16 pb-8">
                                <button 
                                    onClick={() => document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth' })}
                                    className="bg-brand-dark text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-black transition-all shadow-lg active:scale-95 inline-flex items-center gap-3"
                                >
                                    <Send size={24} />
                                    {t.cta}
                                </button>
                            </div>
                        </div>
                </section>

                <div id="contacts">
                    <Contact language={language} currentPage="amazon" />
                </div>
                
                <SeoBlock language={language} onNavigate={onNavigate || (() => {})} currentPage="amazon" />
                <Footer language={language} />
                <FloatingContact />
            </main>
        </div>
    )
}

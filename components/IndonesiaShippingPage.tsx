import React from 'react';
import { Plane, Ship, Check, ShieldCheck, Box, HelpCircle } from 'lucide-react';
import { DestinationTemplate, DestinationContent } from './DestinationTemplate';
import { Language } from '../utils/translations';

interface IndonesiaShippingPageProps {
    language: Language;
    setLanguage: (lang: Language) => void;
    onBack: () => void;
    onNavigate: (page: string) => void;
}

export const IndonesiaShippingPage: React.FC<IndonesiaShippingPageProps> = ({
    language,
    setLanguage,
    onBack,
    onNavigate
}) => {
    const fullContent: Record<'en' | 'ru', DestinationContent> = {
        en: {
            badge: "Indonesia-Direct Line",
            titlePrefix: "Shipping from China to",
            titleHighlight: "Indonesia",
            subtitle: "Secure Air & Economy Sea Freight. Bypass complex Indonesian customs regulations, unpredictable import licenses, and hidden port fees.",
            introTitle: "Direct Door-to-Door Delivery to Your Doorstep",
            introText: "Whether you are a local e-commerce seller stocking inventory for Tokopedia, Shopee, or Lazada, a business sourcing commercial equipment, or an individual ordering personal items from Taobao—we handle the entire journey. We deliver directly to your address across Indonesia, including Jakarta, Surabaya, Bandung, Medan, and Bali.",
            methodsTitle: "Our Shipping Methods & Rates",
            methods: [
                {
                    icon: Plane,
                    title: "Express Air",
                    tag: "Fast",
                    desc: "Urgent stock, fashion, electronics & small parcels.",
                    price: "From $10/kg",
                    speed: "4–7 days",
                    color: "bg-blue-100 text-blue-600"
                },
                {
                    icon: Ship,
                    title: "Ocean Freight (LCL)",
                    tag: "Economical",
                    desc: "Furniture, heavy goods, bulk cargo & maximum savings.",
                    price: "From $1.1/kg",
                    speed: "22–32 days",
                    color: "bg-teal-100 text-teal-600"
                }
            ],
            whyTitle: "Why Indonesian Importers & Shoppers Choose HappyBox",
            whyIntro: "All our shipping channels to Indonesia operate strictly on a DDP (Delivered Duty Paid) basis. The price we quote includes international freight, customs clearance, and 100% of Indonesian import duties, VAT (PPN), and Income Tax (PPh). You pay one transparent price with zero surprise charges upon delivery.",
            benefits: [
                {
                    icon: ShieldCheck,
                    title: "No Import Licenses Required",
                    desc: "Indonesia requires strict import permits (API-U/API-P) for commercial goods. Our DDP service clears everything under our own compliant licenses—you don't need any paperwork."
                },
                {
                    icon: Check,
                    title: "Safe Clearance During \"Red Light\" Seasons",
                    desc: "Indonesian customs frequently declare \"Red Light\" periods where shipments are heavily delayed. We utilize resilient, verified customs channels to ensure stable clearance year-round."
                },
                {
                    icon: Box,
                    title: "Free Warehouse Consolidation",
                    desc: "Shop from Taobao, 1688, or multiple suppliers. We collect your packages at our Shenzhen hub, verify them, and combine them into one optimized shipment to slash your costs."
                },
                {
                    icon: HelpCircle,
                    title: "Pre-Shipment Quality Buffer",
                    desc: "We inspect your items and send photos before they leave China. Catching factory defects in Shenzhen saves you from the impossible task of returning goods from Jakarta back to China."
                }
            ],
            fearsTitle: "Frequently Asked Questions",
            fearsList: [
                {
                    q: "Do I need an import license (API) or tax ID (NPWP)?",
                    a: "No! All shipments are DDP (Delivered Duty Paid). Our flat-rate DDP channel absorbs the declaration processes, customs broker fees, setup, and relevant import taxes/VAT under our entity."
                },
                {
                    q: "What about SNI or BPOM certifications?",
                    a: "Many product categories entering Indonesia legally require SNI (Standar Nasional Indonesia). We filter and profile your goods. Our dedicated DDP channels are designed to handle consumer goods safely without you needing to obtain individual SNI or BPOM certificates."
                },
                {
                    q: "How do you calculate Ocean Freight CBM?",
                    a: "Sea freight is billed by Cubic Meters (CBM). The formula is: Length × Width × Height (cm) / 1,000,000 = CBM. Our warehouse team repacks poorly boxed factory items for free to keep your CBM as low as possible."
                }
            ],
            stepsTitle: "The Step-by-Step Workflow",
            steps: [
                "Get Your China Address: We provide you with your dedicated shipping address and user ID for our Shenzhen warehouse.",
                "Supplier Delivery: You input this address into Taobao/1688 or provide it directly to your Alibaba manufacturer.",
                "QC & Consolidation: As your boxes arrive, we log them, take verification photos, and combine them to eliminate excess volume.",
                "Transit & Last-Mile: Your cargo clears customs in Jakarta, and we hand it over to trusted domestic networks (JNE, J&T) to reach your final address on Java, Bali, Sumatra, or other islands."
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
                title: "China to Indonesia Logistics Guide 2026: Customs, Compliance & Sea-Air Routes",
                subtitle: "Shipping to the world’s largest archipelago requires strategic planning. This technical guide breaks down the complexities of the China-to-Indonesia supply chain.",
                jumpTo: "Jump to chapter:",
                nav: {
                    "id-sec1": "Strategic Routing",
                    "id-sec2": "Customs & Tax",
                    "id-sec3": "SNI & Compliance",
                    "id-sec4": "Product Cargo",
                    "id-sec5": "Chargeable Weight",
                    "id-sec6": "Inventory & Insurance"
                },
                sections: [
                    {
                        id: "id-sec1",
                        title: "1. Strategic Routing: Air Hubs and Maritime Ports",
                        items: [
                            { label: "Priority Air Freight", text: "Cargo departs via scheduled flights from Shenzhen or Guangzhou, landing at Soekarno–Hatta International Airport (CGK) in Jakarta. Door-to-door delivery takes 4–7 days, making it ideal for high-value tech and seasonal fashion." },
                            { label: "Ocean Freight (LCL/FCL)", text: "Direct sailings from Shenzhen (Shekou/Yantian) to major Indonesian ports, primarily Tanjung Priok (Jakarta) and Tanjung Perak (Surabaya). Ocean transit is relatively short (7–10 days on the water), with total door-to-door delivery taking 22–32 days due to local port clearance and island transit." }
                        ],
                        listStyle: "bullets"
                    },
                    {
                        id: "id-sec2",
                        title: "2. Indonesian Customs Engineering & Tax Structures",
                        desc: "Indonesia enforces strict tax structures based on the importer's registration status.",
                        items: [
                            { label: "The Tax Stack", text: "Standard imports face a combination of Import Duty (Bea Masuk), 11% VAT (PPN), and Income Tax (PPh Art 22, which jumps from 7.5% to 15% or higher if the importer lacks a valid tax ID/NPWP)." },
                            { label: "The DDP Advantage", text: "HappyBox calculates an all-inclusive flat rate per kilogram (for Air) or per CBM (for Sea). We fully absorb this complex tax stack and clear the goods through our own established import channels, protecting you from tax audits and unexpected customs bills." }
                        ],
                        listStyle: "bullets"
                    },
                    {
                        id: "id-sec3",
                        title: "3. Handling Strict Regulations & SNI Certification",
                        items: [
                            { label: "The Challenge", text: "Many product categories entering Indonesia—such as toys, electronics, and textiles—legally require SNI (Standar Nasional Indonesia) certification. Without it, standard customs will confiscate the cargo." },
                            { label: "Our Solution", text: "We filter and profile your goods at our Shenzhen warehouse. Our dedicated DDP channels are designed to handle consumer goods safely, bypassing the need for you to obtain individual SNI certificates or specialized BPOM (for cosmetics) registrations." }
                        ],
                        listStyle: "bullets"
                    },
                    {
                        id: "id-sec4",
                        title: "4. Shipping by Product Type: Market Nuances",
                        items: [
                            { label: "E-commerce & Fashion", text: "Ideal for Air Freight. We provide free vacuum compression services to reduce package volume and lower your shipping bill." },
                            { label: "Furniture & Home Goods", text: "Highly popular for LCL Sea Freight. Sourcing from Foshan? We provide reinforced plywood crating in Shenzhen to protect large or fragile items during sea transit and rough port handling." },
                            { label: "Electronics & Lithium Batteries", text: "Power banks, smart devices, and electric scooters require strict compliance. We route these through our specialized battery-safe channels with all necessary MSDS/UN38.3 documentation handled by our team." }
                        ],
                        listStyle: "bullets"
                    },
                    {
                        id: "id-sec5",
                        title: "5. Calculating Chargeable Weight (Air vs. Sea)",
                        items: [
                            { label: "Air Freight Volumetric Formula", text: "If a package is large but light, carriers charge by volume: Length (cm) × Width (cm) × Height (cm) / 6000 or 5000 = Volumetric Weight (kg)." },
                            { label: "Sea Freight CBM Calculation", text: "Sea freight is billed by Cubic Meters (CBM): Length (cm) × Width (cm) × Height (cm) / 1,000,000 = CBM." }
                        ],
                        listStyle: "bullets"
                    },
                    {
                        id: "id-sec6",
                        title: "6. Smart Inventory Management & Insurance",
                        desc: "Storing bulk inventory in Jakarta or Surabaya warehouses can trigger high overhead.",
                        items: [
                            { label: "Drip-Feeding Strategy", text: "Maintain your primary stock at our Shenzhen facility for free. Dispatch smaller LCL sea shipments or quick air batches weekly based on your exact Tokopedia/Shopee sales velocity, keeping your local Indonesian overhead at zero." },
                            { label: "All-Risk Insurance", text: "Tropical climates, maritime humidity, and multi-island shipping present unique risks. HappyBox offers All-Risk Insurance covering 100% of your declared cargo value against water damage, theft, port pilferage, or handling damage." }
                        ],
                        listStyle: "bullets"
                    }
                ]
            }
        },
        ru: {
            badge: "Прямая линия в Индонезию",
            titlePrefix: "Доставка из Китая в",
            titleHighlight: "Индонезию",
            subtitle: "Надежная авиа и экономичная морская доставка. Избегайте сложных таможенных правил Индонезии (лицензий API) и скрытых портовых сборов.",
            introTitle: "Прямая доставка до вашей двери",
            introText: "Независимо от того, являетесь ли вы локальным продавцом на Tokopedia, Shopee или Lazada, бизнесом, закупающим оборудование, или заказываете посылки с Taobao для себя — мы берем на себя весь процесс. Доставка прямо до вашего адреса в Индонезии: Джакарта, Сурабая, Бандунг, Медан и Бали.",
            methodsTitle: "Наши тарифы и способы доставки",
            methods: [
                {
                    icon: Plane,
                    title: "Экспресс Авиа",
                    tag: "Быстро",
                    desc: "Срочный сток, одежда, электроника, посылки.",
                    price: "От $10/кг",
                    speed: "4–7 дней",
                    color: "bg-blue-50 text-brand-blue"
                },
                {
                    icon: Ship,
                    title: "Морская доставка (LCL)",
                    tag: "Экономно",
                    desc: "Мебель, тяжелые грузы, сборные грузы (макс. экономия).",
                    price: "От $1.1/кг",
                    speed: "22–32 дней",
                    color: "bg-teal-50 text-teal-600"
                }
            ],
            whyTitle: "Почему бизнесы и частные лица выбирают HappyBox",
            whyIntro: "Все наши каналы в Индонезию работают строго по системе DDP (Delivered Duty Paid). Цена, которую мы озвучиваем, включает международный фрахт, таможенную очистку и 100% индонезийских импортных пошлин, НДС (PPN) и подоходный налог (PPh). Единая прозрачная цена без дополнительных сборов.",
            benefits: [
                {
                    icon: ShieldCheck,
                    title: "Лицензии на импорт не нужны",
                    desc: "Индонезия требует строгие разрешения на импорт (API-U/API-P) для коммерческих грузов. Наш DDP сервис очищает все грузы на наши собственные лицензии — вам не нужны документы."
                },
                {
                    icon: Check,
                    title: "Безопасность в «Красный свет»",
                    desc: "Таможня Индонезии часто включает «красные коридоры», когда грузы задерживаются или изымаются. Мы используем надежные, проверенные таможенные каналы, чтобы очистка шла стабильно круглый год."
                },
                {
                    icon: Box,
                    title: "Бесплатная консолидация",
                    desc: "Покупайте на Taobao, 1688 или у разных поставщиков Alibaba. Мы соберем ваши посылки в Шэньчжэне, проверим и объединим в одну коробку, чтобы вы сэкономили на доставке."
                },
                {
                    icon: HelpCircle,
                    title: "Проверка качества до отправки",
                    desc: "Мы проверяем товары и отправляем фото до их отъезда из Китая. Ловим фабричный брак в Шэньчжэне, избавляя вас от невыполнимой задачи возврата товара из Джакарты в Китай."
                }
            ],
            fearsTitle: "Частые вопросы",
            fearsList: [
                {
                    q: "Нужны ли мне лицензия (API) или ИНН (NPWP)?",
                    a: "Нет! Вся доставка DDP (Delivered Duty Paid). Мы берем на себя процессы декларирования, брокерские сборы, пошлины и НДС. Оформляем все на свое юрлицо."
                },
                {
                    q: "Что насчет сертификатов SNI или BPOM?",
                    a: "Многие товары (игрушки, электроника) требуют сертификации SNI. Наш выделенный канал DDP позволяет безопасно провозить такие категории без необходимости получать индивидуальные сертификаты SNI или BPOM."
                },
                {
                    q: "Как рассчитывается куб для морской доставки?",
                    a: "Морской фрахт рассчитывается по кубическим метрам (CBM). Формула: Длина × Ширина × Высота (см) / 1,000,000. Наш склад бесплатно переупаковывает товары из плохой заводской тары, чтобы снизить ваш CBM."
                }
            ],
            stepsTitle: "Как это работает: От фабрики до Джакарты",
            steps: [
                "Получите свой адрес: Мы выдаем вам персональный ID и адрес склада в Шэньчжэне.",
                "Сделайте заказ: Укажите этот адрес на Taobao, 1688 или передайте поставщику.",
                "Проверка и объединение: При получении мы делаем фото и объединяем посылки для уменьшения веса.",
                "Транзит и Доставка: Груз проходит таможню в Джакарте, после чего мы передаем его надежным локальным курьерам (JNE, J&T) для доставки на Яву, Бали или другие острова."
            ],
            cta: "Получить адрес в Китае",
            back: "Назад к направлениям",
            crossPromo: [
                {
                    title: "Помочь с покупками на Taobao?",
                    desc: "Мы поможем разобраться в китайских маркетплейсах, пообщаемся с продавцами и безопасно выкупим нужные товары.",
                    link: "/ru/taobao",
                    action: "Узнать о сервисе выкупа 0%",
                    isPrimary: true
                }
            ],
            guide: {
                title: "Логистический гид в Индонезию 2026: Таможня, Налоги и Море/Авиа",
                subtitle: "Доставка в крупнейший мировой архипелаг требует стратегического планирования. Этот технический справочник разбирает все сложности.",
                jumpTo: "Перейти к:",
                nav: {
                    "id-sec1": "Маршруты доставки",
                    "id-sec2": "Таможня и Налоги",
                    "id-sec3": "Аттестация SNI",
                    "id-sec4": "Профилирование",
                    "id-sec5": "Объем и CBM",
                    "id-sec6": "Страхование"
                },
                sections: [
                    {
                        id: "id-sec1",
                        title: "1. Стратегические маршруты: Авиа хабы и Морские порты",
                        items: [
                            { label: "Приоритетное Авиа", text: "Груз отправляется регулярными рейсами (Шэньчжэнь, Гуанчжоу) в аэропорт Сукарно-Хатта (CGK) в Джакарте. Доставка до двери: 4–7 дней. Идеально для дорогой техники и одежды." },
                            { label: "Морской фрахт (LCL/FCL)", text: "Прямые рейсы из Шэньчжэня (Шэкоу/Яньтянь) в главные порты: Танджунг Приок (Джакарта) и Танджунг Перак (Сурабая). В пути 7–10 дней, но вся перевозка до двери: 22–32 дня (из-за портовой очистки и межостровного транзита)." }
                        ],
                        listStyle: "bullets"
                    },
                    {
                        id: "id-sec2",
                        title: "2. Таможня Индонезии: Налоги и Сборы",
                        desc: "В Индонезии строгие налоги, зависящие от статуса импортера.",
                        items: [
                            { label: "Стек налогов", text: "Стандартный импорт: Импортная пошлина (Bea Masuk), 11% НДС (PPN) и Подоходный налог (PPh) — может прыгать с 7.5% до 15% и выше без валидного ИНН (NPWP)." },
                            { label: "Преимущество DDP", text: "Мы рассчитываем единый тариф за кг (Авиа) или за CBM (Море). Мы полностью абсорбируем налоговый стек и очищаем груз через свои лицензии, защищая вас от налоговых проверок и доп. пошлин." }
                        ],
                        listStyle: "bullets"
                    },
                    {
                        id: "id-sec3",
                        title: "3. Строгие правила Индонезии по SNI",
                        items: [
                            { label: "Вызов", text: "Многие товары (игрушки, одежда, электроника) требуют сертификат SNI. Без него стандартная таможня изымет груз." },
                            { label: "Наше решение", text: "Мы профилируем грузы в Шэньчжэне. Наши DDP каналы специально спроектированы для провоза потребительских товаров в Индонезию без необходимости для вас оформлять сертификаты SNI или BPOM (для косметики)." }
                        ],
                        listStyle: "bullets"
                    },
                    {
                        id: "id-sec4",
                        title: "4. Нюансы по категориям товаров",
                        items: [
                            { label: "E-commerce и одежда", text: "Мы предоставляем бесплатное вакуумирование на складе, чтобы уменьшить объем посылок и снизить ваши затраты на авиадоставке." },
                            { label: "Мебель и товары для дома", text: "Идеально для морского LCL. Закупаете мебель в Фошане? Мы делаем надежную обрешетку в Шэньчжэне из фанеры для защиты от портовых перегрузов." },
                            { label: "Электроника и батареи", text: "Power banks, электросамокаты. Мы доставляем по специализированным безопасным каналам и сами делаем необходимую MSDS/UN38.3 документацию." }
                        ],
                        listStyle: "bullets"
                    },
                    {
                        id: "id-sec5",
                        title: "5. Расчет оплачиваемого веса (Авиа vs Море)",
                        items: [
                            { label: "Объемная формула Авиафрахта", text: "Если посылка большая, но легкая: Длина (см) × Ширина × Высота / 6000 (или 5000) = Объемный вес (кг)." },
                            { label: "Расчет кубов (Море)", text: "Морские перевозки считаются в кубических метрах (CBM): Длина (см) × Ширина × Высота / 1,000,000." }
                        ],
                        listStyle: "bullets"
                    },
                    {
                        id: "id-sec6",
                        title: "6. Умное управление запасами",
                        desc: "Хранение складов в Джакарте или Сурабае сжигает много денег.",
                        items: [
                            { label: "Стратегия Drip-Feeding", text: "Храните свои запасы в Шэньчжэне бесплатно (до 30 дней) и отправляйте товар мелкими LCL партиями каждую неделю по мере продаж на Tokopedia/Shopee, сводя к нулю расходы на склады в Индонезии." },
                            { label: "All-Risk Страхование", text: "Тропический климат и перегруз с острова на остров. Наша страховка 100% покрывает влагу, утерю или физические повреждения в порту от Китая до вашей двери." }
                        ],
                        listStyle: "bullets"
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

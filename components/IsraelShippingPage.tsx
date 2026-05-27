import React from 'react';
import { Plane, Ship, Check, ShieldCheck, Box, HelpCircle } from 'lucide-react';
import { DestinationTemplate, DestinationContent } from './DestinationTemplate';
import { Language } from '../utils/translations';

interface IsraelShippingPageProps {
    language: Language;
    setLanguage: (lang: Language) => void;
    onBack: () => void;
    onNavigate: (page: string) => void;
}

export const IsraelShippingPage: React.FC<IsraelShippingPageProps> = ({
    language,
    setLanguage,
    onBack,
    onNavigate
}) => {
    const fullContent: Record<'en' | 'ru', DestinationContent> = {
        en: {
            badge: "Israel-Direct Line",
            titlePrefix: "Shipping from China to",
            titleHighlight: "Israel",
            subtitle: "Safe Air & Budget-Friendly Sea Freight. Overcome Red Sea shipping disruptions, strict Israeli customs audits, and complex Standards Institution (SII) requirements.",
            introTitle: "Direct Door-to-Door Delivery Across Israel",
            introText: "Whether you are scaling an online store on Amazon Israel or local marketplaces, sourcing components for an industrial project, or buying personal goods from Taobao and 1688 — we take care of the entire journey. We deliver directly to your warehouse, office, or residential address across Israel, including Tel Aviv, Jerusalem, Haifa, Ashdod, Rishon LeZion, and Beersheba.",
            methodsTitle: "Our Shipping Methods & Rates",
            methods: [
                {
                    icon: Plane,
                    title: "Premium Air Line",
                    tag: "Fast",
                    desc: "Electronics, e-commerce stock, urgent goods & clothing.",
                    price: "From $15/kg",
                    speed: "6–9 days",
                    color: "bg-blue-100 text-blue-600"
                },
                {
                    icon: Ship,
                    title: "Ocean Freight (LCL)",
                    tag: "Economical",
                    desc: "Furniture, machinery, oversized cargo & high-volume items.",
                    price: "From $1.2/kg",
                    speed: "35–45 days",
                    color: "bg-teal-100 text-teal-600"
                }
            ],
            whyTitle: "Why Israeli Importers & Brands Choose HappyBox",
            whyIntro: "Every shipping line we run to Israel operates on a strict DDP (Delivered Duty Paid) structure. The price we quote covers ocean/air freight, warehouse export handling, and 100% of Israeli import costs: Customs Duties, Purchase Tax (מס קנייה), and 17% Israeli VAT. You receive your goods at your door with absolutely zero unexpected customs fees or local courier demands.",
            benefits: [
                {
                    icon: ShieldCheck,
                    title: "Zero Smart-Card or Custom Broker Hassles",
                    desc: "Standard commercial imports into Israel require a digital \"Smart Card\" (כרטיס חכם) and registration in the \"Global Gate\" (שער עולמי) system. With HappyBox DDP, you don't need any technical registrations or import accounts — we clear everything under our own entity."
                },
                {
                    icon: Check,
                    title: "No Standard Institution (SII) Delays",
                    desc: "Israel heavily regulates products like electronics, toys, and cosmetics through strict local testing (מת\"י). Our specialized channels safely route compliant consumer products, bypassing the need for you to obtain individual approvals."
                },
                {
                    icon: Box,
                    title: "Complimentary Cargo Consolidation",
                    desc: "Order from various factories on Alibaba or buy from multiple vendors on 1688. We merge your goods at our Shenzhen facility, pack them tightly to minimize volume, and ship them out as one neat lot."
                },
                {
                    icon: HelpCircle,
                    title: "Risk-Free Shenzhen Inspections",
                    desc: "Sending defective goods back from Tel Aviv to China is virtually impossible and incredibly expensive. We inspect your cargo at our Shenzhen warehouse and provide high-quality photos/videos before the shipment departs."
                }
            ],
            fearsTitle: "Frequently Asked Questions",
            fearsList: [
                {
                    q: "Do I need a Smart-Card or import registration?",
                    a: "No! Thanks to our DDP structure, we conduct the customs clearance through our own entities. You do not need any importer registrations."
                },
                {
                    q: "How does Israeli Customs tax work?",
                    a: "Imports face a standard 17% VAT, potential Customs Duties, and Purchase Tax depending on the HS code. Our DDP rate already absorbs all these costs."
                },
                {
                    q: "What if my goods get damaged or lost?",
                    a: "HappyBox offers All-Risk Insurance protecting 100% of your declared value from the moment it reaches our Shenzhen facility until signed for at your address in Israel."
                }
            ],
            stepsTitle: "The Step-by-Step Logistics Flow",
            steps: [
                "Get Your Shenzhen Address: Create a HappyBox account and receive your dedicated shipping ID and warehouse address.",
                "Purchase & Deliver: Send goods from Taobao, Alibaba or your factory to our Shenzhen hub.",
                "Quality Check & Packing: We unpack, inspect, take photos, and consolidate your items to minimize volumetric weight.",
                "Transport & Final Delivery: Your cargo is cleared through customs in Israel and delivered using our regional courier networks directly to your door."
            ],
            cta: "Ship to Israel Now",
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
                title: "China to Israel Logistics Guide: Navigation, Customs & Supply Chain Compliance",
                subtitle: "Successfully importing goods into Israel requires adapting to changing maritime routes and strict regulatory thresholds. This breakdown explains how we secure and optimize your trade lane.",
                jumpTo: "Jump to chapter:",
                nav: {
                    "il-sec1": "Strategic Routing",
                    "il-sec2": "Customs & Tax Stack",
                    "il-sec3": "Chargeable Weight",
                    "il-sec4": "Dangerous Goods & Freight",
                    "il-sec5": "Last-Mile Delivery"
                },
                sections: [
                    {
                        id: "il-sec1",
                        title: "1. Route Geopolitics & Real Transit Timelines",
                        items: [
                            { label: "Air Freight Corridor", text: "Cargo is organized at our Shenzhen hub, flying out via scheduled air corridors into Ben Gurion Airport (TLV). Total door-to-door transit takes 6–9 days. Despite regional airspace routing adjustments, our air pipeline remains stable and secure." },
                            { label: "Ocean Freight Realities", text: "Due to current maritime detours around the Cape of Good Hope, ships bound for the Mediterranean bypass the Suez Canal shortcut. Cargo arrives at the ports of Haifa or Ashdod. While time on the water is around 25–30 days, total door-to-door delivery takes 35–45 days once you factor in port unpacking, customs clearance, and final sorting." }
                        ],
                        listStyle: "bullets"
                    },
                    {
                        id: "il-sec2",
                        title: "2. The Israeli Customs Structure & Tax Optimization",
                        desc: "Israeli customs are notoriously precise, operating on an automated, data-driven framework.",
                        items: [
                            { label: "The Tax Breakdown", text: "Imports face standard 17% VAT, potential Customs Duties depending on the Harmonized System (HS) code, and Purchase Tax (applicable to specific items like auto parts, luxury electronics, and certain raw materials)." },
                            { label: "Personal Import Threshold", text: "For personal parcel shipping, Israel maintains a strict de minimis system. While the $75 limit covers standard tax-free exemptions, orders entering commercial channels or arriving in close sequence face immediate scrutiny." },
                            { label: "The HappyBox Formula", text: "Our DDP system converts these volatile variables into a flat, transparent per-kilogram (Air) or per-CBM (Sea) rate. We handle the valuation paperwork, absorb the 17% VAT, and handle any purchase tax variables so your cargo moves smoothly through customs." }
                        ],
                        listStyle: "bullets"
                    },
                    {
                        id: "il-sec3",
                        title: "3. Smart Repacking and Volumetric Charge Controls",
                        desc: "Israeli shipping routes require extreme space efficiency to protect your profit margins.",
                        items: [
                            { label: "Air Freight Volumetric Calculation", text: "Billed on actual weight or dimensional volume, whichever is higher: Length × Width × Height (cm) / 5000 = Volumetric Weight (kg)." },
                            { label: "Sea Freight LCL Volume Ratio", text: "Billed per Cubic Meter (CBM): Length × Width × Height (cm) / 1,000,000 = CBM. Factory packing is often bloated. Our team optimizes your cargo layout for free, using heavy-duty vacuum sealing for textiles or custom re-boxing." }
                        ],
                        listStyle: "bullets"
                    },
                    {
                        id: "il-sec4",
                        title: "4. Special Commodity Care: Batteries & Heavy Freight",
                        items: [
                            { label: "Lithium Batteries & Smart Tech", text: "Products containing batteries (scooters, power banks, smart home gear) cannot be mixed with standard air cargo. We utilize dedicated battery-compliant air and sea channels, ensuring all MSDS and UN38.3 compliance paperwork is in perfect order." },
                            { label: "Fragile & Oversized Freight", text: "Sourcing heavy equipment or delicate home furnishings? We apply reinforced wooden crating and palletization at our Shenzhen hub to protect goods from heavy machinery handling during sea transit and port discharge at Haifa or Ashdod." }
                        ],
                        listStyle: "bullets"
                    },
                    {
                        id: "il-sec5",
                        title: "5. Last-Mile Infrastructure & Full Cargo Insurance",
                        items: [
                            { label: "Domestic Network Distribution", text: "After your cargo clears customs, it is transferred directly to our trusted domestic delivery partners in Israel. We ensure heavy freight is dispatched with lift-gate trucks, while smaller parcels are tracked straight to residential addresses." },
                            { label: "All-Risk Protection", text: "To shield your investment against maritime humidity, transit vibrations, or port handovers, HappyBox provides comprehensive All-Risk Insurance. Your goods are 100% covered from the second they register at our Shenzhen hub until they are successfully signed for at your destination in Israel." }
                        ],
                        listStyle: "bullets"
                    }
                ]
            }
        },
        ru: {
            badge: "Прямая линия в Израиль",
            titlePrefix: "Доставка из Китая в",
            titleHighlight: "Израиль",
            subtitle: "Надежная авиа и экономичная морская доставка. Забудьте о перебоях на морских маршрутах, строгих таможенных проверках и сложных требованиях Института стандартов (SII).",
            introTitle: "Прямая доставка до двери по всей территории Израиля",
            introText: "Масштабируете онлайн-магазин на Amazon Israel? Закупаете компоненты для производства или просто заказываете вещи с Taobao и 1688? Мы берем весь процесс на себя. Доставляем прямо на ваш склад, в офис или домой — в Тель-Авив, Иерусалим, Хайфу, Ашдод, Ришон ле-Цион и Беэр-Шеву.",
            methodsTitle: "Способы и стоимость доставки",
            methods: [
                {
                    icon: Plane,
                    title: "Экспресс Авиа",
                    tag: "Быстро",
                    desc: "Электроника, товары для e-commerce, срочные заказы и одежда.",
                    price: "От $15/кг",
                    speed: "6–9 дней",
                    color: "bg-blue-50 text-brand-blue"
                },
                {
                    icon: Ship,
                    title: "Морская доставка (LCL)",
                    tag: "Экономно",
                    desc: "Мебель, оборудование, крупногабаритный и объемный груз.",
                    price: "От $1.2/кг",
                    speed: "35–45 дней",
                    color: "bg-teal-50 text-teal-600"
                }
            ],
            whyTitle: "Почему израильские импортеры и бренды выбирают HappyBox",
            whyIntro: "Все наши каналы доставки в Израиль работают строго по системе DDP (Delivered Duty Paid). Заявленная цена включает океанский/авиафрахт, складскую обработку на экспорте и 100% импортных расходов Израиля: таможенные пошлины (Мехес), налог на покупку (Мас Кния) и 17% НДС (Маам). Вы получаете груз у дверей без неожиданных сборов.",
            benefits: [
                {
                    icon: ShieldCheck,
                    title: "Без Смарт-Карты и бюрократии",
                    desc: "В Израиле коммерческий импорт требует «Смарт-карту» (Картис Хахам) и регистрацию в системе «Глобальные ворота» (Шаар Олами). С нашим DDP вам не нужны никакие регистрации — мы растамаживаем всё на свои компании."
                },
                {
                    icon: Check,
                    title: "Никаких задержек SII (Махон Тканим)",
                    desc: "Израиль строго регулирует электронику, игрушки и косметику. Наши специализированные логистические каналы безопасно доставляют потребительские товары без необходимости получать индивидуальные разрешения."
                },
                {
                    icon: Box,
                    title: "Бесплатная консолидация",
                    desc: "Заказывайте с разных фабрик Alibaba или 1688. Мы консолидируем груз на складе в Шэньчжэне, плотно упаковываем для снижения объема и отправляем одной партией."
                },
                {
                    icon: HelpCircle,
                    title: "Гарантированный контроль в Китае",
                    desc: "Вернуть бракованный товар из Тель-Авива в Китай практически невозможно и очень дорого. Мы проверяем качество товара в Шэньчжэне и предоставляем фото/видео до отправки."
                }
            ],
            fearsTitle: "Частые вопросы",
            fearsList: [
                {
                    q: "Нужна ли мне смарт-карта или регистрация импортера?",
                    a: "Нет! Благодаря системе DDP мы проводим таможенную очистку через наши собственные компании. Вам не нужно оформлять импортные документы."
                },
                {
                    q: "Как рассчитываются налоги в Израиле?",
                    a: "Обычно импорт облагается стандартным НДС 17% (Маам), таможенными пошлинами (Мехес) и налогом на покупку. Наш DDP тариф уже полностью покрывает все эти статьи расходов."
                },
                {
                    q: "А если груз повредят или потеряют в пути?",
                    a: "Мы предлагаем страховку All-Risk. Она покрывает 100% заявленной стоимости от повреждений, влаги или утери груза с момента получения в Китае и до вручения в Израиле."
                }
            ],
            stepsTitle: "Как происходит доставка логистики",
            steps: [
                "Получите Адрес: Мы выдаем Вам персональный ID и адрес нашего китайского склада в Шэньчжэне.",
                "Покупка: Введите наш адрес в Ваш аккаунт Taobao, Alibaba, или 1688 и оформите заказ.",
                "Проверка & Консолидация: При получении мы делаем фотоотчет, убираем лишнюю упаковку и объединяем посылки для экономии.",
                "Транзит DDP: Ваш груз доставляется авиа- или морским путем, проходит таможню и передается локальным курьерам для доставки до двери."
            ],
            cta: "Отправить груз в Израиль",
            back: "К направлениям доставки",
            crossPromo: [
                {
                    title: "Нужна помощь с Taobao/1688?",
                    desc: "Мы можем выкупить для вас товары без наценок и скрытых комиссий.",
                    link: "/ru/taobao",
                    action: "Узнать про выкуп",
                    isPrimary: true
                }
            ],
            guide: {
                title: "Логистический гид по Израилю: Маршруты, Таможня и Налоги",
                subtitle: "Успешный импорт в Израиль требует адаптации к меняющимся морским маршрутам и строгим нормативным требованиям. Разбираем, как мы оптимизируем каждый этап доставки.",
                jumpTo: "Перейти к главе:",
                nav: {
                    "il-sec1": "Маршруты и Сроки",
                    "il-sec2": "Таможня и Налоги",
                    "il-sec3": "Объемный вес",
                    "il-sec4": "Батареи и Габариты",
                    "il-sec5": "Доставка последней мили"
                },
                sections: [
                    {
                        id: "il-sec1",
                        title: "1. Геополитика Маршрутов и Реальные Сроки",
                        items: [
                            { label: "Авиа коридор", text: "Груз отправляется из Шэньчжэня прямыми или стыковочными рейсами в аэропорт Бен-Гурион (TLV). От двери до двери: 6–9 дней. Наши авиамаршруты стабильны и безопасны." },
                            { label: "Морские реалии (LCL)", text: "Из-за текущих обходов Красного моря суда идут в обход мыса Доброй Надежды. Грузы прибывают в Хайфу или Ашдод. Транзит по воде 25–30 дней, а полная DDP доставка занимает 35–45 дней с учетом всех портовых формальностей." }
                        ],
                        listStyle: "bullets"
                    },
                    {
                        id: "il-sec2",
                        title: "2. Структура Таможни Израиля и Оптимизация Налогов",
                        desc: "Израильская таможня работает по автоматизированной и строго контролируемой системе.",
                        items: [
                            { label: "Разбор Налогов", text: "Импорт облагается 17% НДС (Маам), пошлинами (Мехес) по ТН ВЭД (HS code) и налогом на покупку (Мас кния, для спец. товаров, автозапчастей и электроники)." },
                            { label: "Лимит на личные посылки", text: "В Израиле действует порог беспошлинного ввоза в $75, однако частые или коммерческие поставки строго контролируются." },
                            { label: "Формула HappyBox", text: "Мы конвертируем все эти переменные в единый плоский тариф за килограмм (Авиа) или куб (Море). Мы сами оформляем документы и оплачиваем 17% НДС и пошлины. Ваш груз проходит таможню без задержек." }
                        ],
                        listStyle: "bullets"
                    },
                    {
                        id: "il-sec3",
                        title: "3. Умная переупаковка и Контроль Объемного Веса",
                        desc: "Израильские маршруты требуют максимальной оптимизации пространства.",
                        items: [
                            { label: "Объемная формула (Авиа)", text: "Оплачивается наибольший из фактического или объемного веса: Длина × Ширина × Высота (см) / 5000 = Объемный вес (кг)." },
                            { label: "Кубы для Моря (LCL)", text: "Морской фрахт рассчитывается за кубические метры (CBM): Длина × Ширина × Высота (см) / 1,000,000. Наша команда бесплатно оптимизирует фабричную упаковку, удаляет пустоты и вакуумирует текстиль, чтобы вы платили только за реальный объем." }
                        ],
                        listStyle: "bullets"
                    },
                    {
                        id: "il-sec4",
                        title: "4. Батареи и Крупногабаритный Груз",
                        items: [
                            { label: "Литиевые батареи и Электроника", text: "Товары с батареями (самокаты, power banks, элементы умного дома) не могут лететь обычным грузом. Мы отправляем их по выделенным безопасным каналам с соблюдением требований MSDS и UN38.3." },
                            { label: "Хрупкий и Тяжелый груз", text: "Заказываете станки или хрупкую мебель? Мы организуем усиленную деревянную обрешетку и паллетирование в Шэньчжэне для защиты груза во время морского пути и выгрузки в портах." }
                        ],
                        listStyle: "bullets"
                    },
                    {
                        id: "il-sec5",
                        title: "5. Логистика последней мили и Страхование",
                        items: [
                            { label: "Внутренняя доставка", text: "После растаможки груз передается надежным местным курьерам. Крупные партии доставляются грузовиками с гидробортом на склад, а мелкие посылки — курьером до двери." },
                            { label: "All-Risk Страхование", text: "Для защиты от морской влажности, вибраций и портовых рисков мы предоставляем полное All-Risk страхование. Ваши товары защищены на 100% с момента прибытия в Шэньчжэнь и до передачи в Израиле." }
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

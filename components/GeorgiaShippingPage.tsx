import React from 'react';
import { Plane, Truck, Check, ShieldCheck, Box, HelpCircle } from 'lucide-react';
import { DestinationTemplate, DestinationContent } from './DestinationTemplate';
import { Language } from '../utils/translations';

interface GeorgiaShippingPageProps {
    language: Language;
    setLanguage: (lang: Language) => void;
    onBack: () => void;
    onNavigate: (page: string) => void;
}

export const GeorgiaShippingPage: React.FC<GeorgiaShippingPageProps> = ({
    language,
    setLanguage,
    onBack,
    onNavigate
}) => {
    const fullContent: Record<'en' | 'ru', DestinationContent> = {
        en: {
            badge: "Georgia-Direct Line",
            titlePrefix: "Shipping from China to",
            titleHighlight: "Georgia",
            subtitle: "Reliable Air & Fast Land Freight. Avoid complex customs clearance, language barriers with Chinese factories, and hidden transit fees.",
            introTitle: "Door-to-Door Delivery Across Georgia",
            introText: "Whether you are an entrepreneur importing wholesale electronics, a designer sourcing home decor from Taobao, or an individual shipping a personal parcel, we manage the entire journey. We deliver directly to your address in Tbilisi, Batumi, Kutaisi, Rustavi, and any other region.",
            methodsTitle: "Our Shipping Methods & Rates",
            methods: [
                {
                    icon: Plane,
                    title: "Express Air",
                    tag: "Fast",
                    desc: "Urgent stock, electronics, cosmetics & small parcels.",
                    price: "From $15/kg",
                    speed: "5–8 days",
                    color: "bg-blue-100 text-blue-600"
                },
                {
                    icon: Truck,
                    title: "Cross-Border Land (Auto)",
                    tag: "Economical",
                    desc: "Heavy goods, furniture, bulk orders & budget shipping.",
                    price: "From $1.2/kg",
                    speed: "15–22 days",
                    color: "bg-teal-100 text-teal-600"
                }
            ],
            whyTitle: "Why Regular Shoppers & Businesses Choose HappyBox",
            whyIntro: "All our shipping channels to Georgia operate on a strict DDP (Delivered Duty Paid) basis. The price you are quoted includes warehouse handling in China, international freight, customs clearance, and all Georgian import duties/taxes. The price we quote is the final price you pay.",
            benefits: [
                {
                    icon: ShieldCheck,
                    title: "Hassle-Free Customs (DDP)",
                    desc: "Georgian customs rules can be strict regarding declaration values. Our DDP service clears your cargo under our own compliant entity—no tax stress or paperwork for you."
                },
                {
                    icon: Box,
                    title: "Free Warehouse Consolidation",
                    desc: "Shop from multiple vendors on 1688, Taobao, or Poizon. We collect your packages at our Shenzhen hub and combine them into one optimized box to drastically cut your shipping fees."
                },
                {
                    icon: Check,
                    title: "No Minimums for Air Freight",
                    desc: "Shipping a single 1 kg package from Taobao or a small sample from an Alibaba manufacturer? We accept shipments of all sizes."
                },
                {
                    icon: HelpCircle,
                    title: "Bao'an Quality Buffer",
                    desc: "We inspect your items and send photos before they leave China. Returning a broken or incorrect item from Georgia to China is incredibly expensive—we catch factory errors at the source."
                }
            ],
            fearsTitle: "Frequently Asked Questions",
            fearsList: [
                {
                    q: "How is volumetric weight calculated?",
                    a: "Logistics costs are calculated based on whichever is greater: actual scale weight or volumetric size. The Volumetric Formula is: Length × Width × Height (cm) / 6000 or 5000 = Volumetric Weight (kg)."
                },
                {
                    q: "Do I have to deal with Georgian customs in Tbilisi?",
                    a: "No! All shipments are DDP (Delivered Duty Paid). Our flat-rate DDP channel absorbs the declaration processes, customs broker fees, and relevant import taxes/VAT. You do not need to register as an international importer."
                },
                {
                    q: "What if it gets damaged in transit?",
                    a: "We offer All-Risk Insurance. Given that land transit involves multi-country border crossings and ferry transfers, our insurance covers 100% of your declared value against handling damage or transit loss."
                }
            ],
            stepsTitle: "The Step-by-Step Workflow",
            steps: [
                "Address Assignment: We provide you with your dedicated shipping address and user ID for our Shenzhen warehouse.",
                "Supplier Delivery: You input this address into Taobao/1688 or provide it directly to your Alibaba manufacturer.",
                "Consolidation & QC: As your boxes arrive, we log them, take verification photos, and combine them.",
                "Transit & Final Delivery: Your goods are dispatched via plane or truck, clear customs smoothly, and are delivered directly to your doorstep in Georgia."
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
                title: "China to Georgia Logistics Guide 2026: Routes, Customs & The Middle Corridor",
                subtitle: "Shipping to Georgia has evolved. With major infrastructure developments along the Trans-Caspian route, land transport has become the most strategic method for non-urgent freight moving across Eurasia.",
                jumpTo: "Jump to chapter:",
                nav: {
                    "ge-sec1": "Strategic Routing",
                    "ge-sec2": "Customs Clearance",
                    "ge-sec3": "Product Cargo Profiling",
                    "ge-sec4": "Inventory Management",
                    "ge-sec5": "Chargeable Weight",
                    "ge-sec6": "Insurance"
                },
                sections: [
                    {
                        id: "ge-sec1",
                        title: "1. Strategic Routing: Air Hubs and the Land \"Middle Corridor\"",
                        items: [
                            { label: "Priority Air Freight", text: "Cargo departs via direct and connecting cargo flights from Shenzhen, Guangzhou, or Urumqi directly into Tbilisi International Airport (TBS). Door-to-door delivery takes 5–8 days, making it ideal for high-value tech, seasonal fashion, and urgent business restocks." },
                            { label: "Cross-Border Land Freight (Trucking)", text: "This route utilizes the famous Middle Corridor (TITR). Your cargo travels by container trucks from South China through Kazakhstan, crosses the Caspian Sea via dedicated ferry links, passes through Azerbaijan, and enters Georgia. Taking just 15–22 days, it completely bypasses the 45+ day sea route to Black Sea ports." }
                        ],
                        listStyle: "bullets"
                    },
                    {
                        id: "ge-sec2",
                        title: "2. Streamlined Customs Clearance & Tax Mitigation",
                        desc: "Georgia has a highly digitized but strict customs system managed by the Revenue Service.",
                        items: [
                            { label: "The DDP Advantage", text: "For both individual and commercial shipments, our flat-rate DDP channel absorbs the declaration processes, customs broker fees, and relevant import taxes/VAT. You do not need to register as an international importer or deal with local customs terminals in Tbilisi to receive your goods." }
                        ],
                        listStyle: "bullets"
                    },
                    {
                        id: "ge-sec3",
                        title: "3. Shipping by Product Type: Cargo Profiling",
                        items: [
                            { label: "Personal Shopping & E-commerce", text: "Soft goods, footwear, and apparel are ideal for Air Freight. We provide vacuum compression services at our Shenzhen warehouse to minimize package volume and lower your shipping bill." },
                            { label: "Furniture & Heavy Items", text: "Sourcing materials or home furnishings from Foshan? Land Freight via the Middle Corridor is the most cost-effective method. We provide reinforced plywood crating in Shenzhen to protect your inventory from transit vibrations." },
                            { label: "Electronics & Battery Items", text: "Power banks, smartphones, and electric scooters require strict adherence to international safety standards. We handle the required MSDS and UN38.3 documentation through our specialized battery-safe lanes." }
                        ],
                        listStyle: "bullets"
                    },
                    {
                        id: "ge-sec4",
                        title: "4. Smart Inventory Management (Drip-Feeding)",
                        desc: "Sellers running local retail shops or online pages in Georgia can optimize their cash flow by leveraging our infrastructure.",
                        items: [
                            { label: "The Strategy", text: "Store your bulk production runs at our Shenzhen facility for free (up to 30 days)." },
                            { label: "The Execution", text: "Dispatch smaller, weekly batches via Land Freight based on your exact sales velocity, keeping your local Georgian storage overhead at zero." }
                        ],
                        listStyle: "bullets"
                    },
                    {
                        id: "ge-sec5",
                        title: "5. Calculating Chargeable Weight (Air & Land Standards)",
                        items: [
                            { label: "The Volumetric Formula", text: "Logistics costs are calculated based on whichever is greater: actual scale weight or volumetric size: Length (cm) × Width (cm) × Height (cm) / 6000 or 5000 = Volumetric Weight (kg)." },
                            { label: "Repackaging", text: "Our warehouse team routinely repacks oversized factory boxes to eliminate empty space, ensuring you are billed only for the exact volume your cargo occupies." }
                        ],
                        listStyle: "bullets"
                    },
                    {
                        id: "ge-sec6",
                        title: "6. Capital Protection: All-Risk Cargo Insurance",
                        desc: "To provide complete peace of mind for both businesses and individual shoppers, HappyBox offers All-Risk Insurance. Given that land transit involves multi-country border crossings and ferry transfers, our insurance covers 100% of your declared value against handling damage, water exposure, or transit loss from the moment your items reach our Shenzhen hub until they are signed for at your door."
                    }
                ]
            }
        },
        ru: {
            badge: "Прямая линия в Грузию",
            titlePrefix: "Доставка из Китая в",
            titleHighlight: "Грузию",
            subtitle: "Надежная авиа и быстрая автодоставка. Избегайте сложной растаможки, языковых барьеров и скрытых транзитных комиссий.",
            introTitle: "Доставка до двери по всей Грузии",
            introText: "Покупаете оптом электронику для бизнеса? Заказываете декор для дома с Taobao? Или отправляете личную посылку? Мы берем на себя весь процесс. Доставка прямо до вашего адреса в Тбилиси, Батуми, Кутаиси, Рустави и любом другом регионе.",
            methodsTitle: "Наши тарифы и способы доставки",
            methods: [
                {
                    icon: Plane,
                    title: "Экспресс Авиа",
                    tag: "Быстро",
                    desc: "Срочный сток, электроника, косметика, посылки.",
                    price: "От $15/кг",
                    speed: "5–8 дней",
                    color: "bg-blue-50 text-brand-blue"
                },
                {
                    icon: Truck,
                    title: "Автодоставка (Средний коридор)",
                    tag: "Экономно",
                    desc: "Тяжелые грузы, мебель, оптовые партии, LCL.",
                    price: "От $1.2/кг",
                    speed: "15–22 дней",
                    color: "bg-teal-50 text-teal-600"
                }
            ],
            whyTitle: "Почему бизнесы и частные лица выбирают HappyBox",
            whyIntro: "Все наши каналы в Грузию работают строго по системе DDP (Delivered Duty Paid). Цена, которую мы вам озвучиваем, уже включает складскую обработку в Китае, фрахт, таможенную очистку и все пошлины/налоги Грузии.",
            benefits: [
                {
                    icon: ShieldCheck,
                    title: "DDP: Никаких проблем с таможней",
                    desc: "Таможенные правила Грузии строги к заявленной стоимости. Мы очищаем ваш груз на свое юрлицо — вы не тратите время на налоги и декларации."
                },
                {
                    icon: Box,
                    title: "Бесплатная консолидация",
                    desc: "Заказывайте у разных продавцов (1688, Taobao, Poizon). Мы соберем ваши посылки в Шэньчжэне и объединим в одну коробку, чтобы вы не переплачивали."
                },
                {
                    icon: Check,
                    title: "Нет минимального веса для Авиа",
                    desc: "Хотите отправить одну посылку на 1 кг с Taobao или мелкий образец с Alibaba? Мы принимаем грузы любого размера."
                },
                {
                    icon: HelpCircle,
                    title: "Проверка качества (QC)",
                    desc: "Мы проверяем товары и отправляем фото до того, как они покинут склад в Китае. Вернуть брак из Грузии в Китай невероятно дорого — мы ловим ошибки на старте."
                }
            ],
            fearsTitle: "Частые вопросы",
            fearsList: [
                {
                    q: "Как рассчитывается объемный вес?",
                    a: "Затраты зависят от того, что больше: фактический или объемный вес. Формула: Длина × Ширина × Высота (см) / 6000 (или 5000) = Объемный вес (кг)."
                },
                {
                    q: "Нужно ли мне общаться с грузинской таможней?",
                    a: "Нет! Вся доставка работает по принциту DDP (Delivered Duty Paid). Наш тариф покрывает все таможенные процедуры, услуги брокера и налоги (НДС/пошлины). Вам не нужно регистрироваться импортером."
                },
                {
                    q: "А если груз повредят в пути?",
                    a: "Мы предлагаем страховку All-Risk. Так как автодоставка включает несколько пересечений границ и паром, страховка покрывает 100% стоимости товара от повреждений или потерь."
                }
            ],
            stepsTitle: "Как работает доставка в Грузию",
            steps: [
                "Получите свой адрес: Мы выдаем вам персональный ID и адрес склада в Шэньчжэне.",
                "Сделайте заказ: Укажите этот адрес на Taobao, 1688 или передайте своему поставщику.",
                "Проверка и консолидация: При получении мы логируем товар, делаем фото и объединяем посылки для экономии.",
                "Транзит и Доставка: Ваша посылка отправляется авиа- или автофрахтом, проходит таможню и доставляется курьером к вашим дверям в Грузии."
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
                title: "Гид по логистике в Грузию 2026: Маршруты, Таможня и Средний Коридор",
                subtitle: "Доставка в Грузию выходит на новый уровень. С развитием Транскаспийского маршрута сухопутные перевозки стали самым стратегическим методом для доставки грузов по Евразии.",
                jumpTo: "Перейти к:",
                nav: {
                    "ge-sec1": "Маршруты доставки",
                    "ge-sec2": "Таможня и Налоги",
                    "ge-sec3": "Логистика по товарам",
                    "ge-sec4": "Управление стоком",
                    "ge-sec5": "Объемный вес",
                    "ge-sec6": "Страхование"
                },
                sections: [
                    {
                        id: "ge-sec1",
                        title: "1. Стратегические маршруты: Авиа и «Средний коридор»",
                        items: [
                            { label: "Приоритетное Авиа", text: "Груз вылетает прямыми и стыковочными грузовыми рейсами (Шэньчжэнь, Гуанчжоу, Урумчи) в Международный аэропорт Тбилиси (TBS). Доставка до двери: 5–8 дней. Идеально для дорогой техники, одежды и срочных партий." },
                            { label: "Автодоставка (Средний коридор Транскасп)", text: "Ваш груз едет в контейнерных фурах из Южного Китая через Казахстан, пересекает Каспийское море на паромах и через Азербайджан попадает в Грузию. Занимает всего 15–22 дня, обходя 45-дневный морской путь через порты Поти/Батуми." }
                        ],
                        listStyle: "bullets"
                    },
                    {
                        id: "ge-sec2",
                        title: "2. Упрощенная таможня (Налоговая Служба Грузии)",
                        desc: "В Грузии оцифрованная, но строгая таможенная система.",
                        items: [
                            { label: "Преимущество DDP", text: "Для частных лиц и бизнеса наш канал DDP берет на себя декларирование товаров, брокерские сборы, пошлины и импортный НДС. Вам не нужно регистрироваться как международный импортер или ездить на таможенные терминалы Тбилиси." }
                        ],
                        listStyle: "bullets"
                    },
                    {
                        id: "ge-sec3",
                        title: "3. Профилирование груза: Доставка по категориям",
                        items: [
                            { label: "E-commerce и Личные вещи", text: "Одежда и обувь отлично подходят для авиа. Мы предоставляем услуги вакуумного сжатия, чтобы пакеты занимали меньше места и доставка была дешевле." },
                            { label: "Мебель и Тяжелые грузы", text: "Заказываете мебель из Фошаня? Автофрахт (TITR) — лучший вариант. Мы бесплатно сделаем деревянную обрешетку (фанера), чтобы защитить столешницы и зеркала от вибраций." },
                            { label: "Электроника и АКБ", text: "Пауэрбанки, смартфоны, самокаты. Мы знаем правила безопасной перевозки, готовим MSDS и UN38.3 и отправляем по специализированным выделенным каналам." }
                        ],
                        listStyle: "bullets"
                    },
                    {
                        id: "ge-sec4",
                        title: "4. Умное управление запасами (Drip-Feeding)",
                        desc: "Владельцы онлайн и оффлайн магазинов в Грузии могут оптимизировать денежный поток с помощью нашей инфраструктуры.",
                        items: [
                            { label: "Стратегия", text: "Храните оптовый запас продукции на нашем складе в Шэньчжэне бесплатно (до 30 дней)." },
                            { label: "Реализация", text: "Отправляйте мелкие партии каждую неделю фурой в Тбилиси в соответствии со скоростью продаж, сокращая затраты на локальные склады." }
                        ],
                        listStyle: "bullets"
                    },
                    {
                        id: "ge-sec5",
                        title: "5. Расчет оплачиваемого веса",
                        items: [
                            { label: "Объемная формула", text: "Затраты считаются по фактическому или объемному весу. Формула: Длина × Ширина × Высота (см) / 6000 (или 5000) = Объемный вес (кг)." },
                            { label: "Переупаковка", text: "Наш склад переупакует излишне крупные заводские коробки, удалив пустые пространства. Вы платите только за реальный объем товара." }
                        ],
                        listStyle: "bullets"
                    },
                    {
                        id: "ge-sec6",
                        title: "6. Защита капитала: Страхование All-Risk",
                        desc: "Для спокойствия всех клиентов, HappyBox предлагает All-Risk страхование. Доставка фурами — это пересечение нескольких границ и паромы. Наша страховка на 100% покрывает заявленную стоимость товара от любых повреждений при перегрузах, намокании или утере — с момента приемки в Шэньчжэне до подписания накладной у ваших дверей в Грузии."
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

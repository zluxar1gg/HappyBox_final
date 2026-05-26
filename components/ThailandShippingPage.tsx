import React from "react";
import {
  Plane,
  Truck,
  Check,
  ShieldCheck,
  Box,
  HelpCircle,
} from "lucide-react";
import { DestinationTemplate, DestinationContent } from "./DestinationTemplate";
import { Language } from "../utils/translations";

interface ThailandShippingPageProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  onBack: () => void;
  onNavigate: (page: string) => void;
}

export const ThailandShippingPage: React.FC<ThailandShippingPageProps> = ({
  language,
  setLanguage,
  onBack,
  onNavigate,
}) => {
  const fullContent: Record<"en" | "ru", DestinationContent> = {
        en: {
            badge: "Thailand-Direct Line",
            titlePrefix: "Shipping from China to",
            titleHighlight: "Thailand",
            subtitle: "Fast Air & Budget Land Freight. No customs drama, no hidden fees.",
            introTitle: "Seamless Delivery for Businesses and Individuals",
            introText: "From wholesale stock for your shop to a single pair of sneakers or home decor from China, we treat every shipment with the same care. We deliver directly to your doorstep anywhere in Thailand, including Bangkok, Chiang Mai, Pattaya, and Phuket.",
            methodsTitle: "Our Shipping Methods & Rates",
            methods: [
                {
                    icon: Plane,
                    title: "Express Air",
                    tag: "Fast",
                    desc: "Urgent parcels, electronics, fashion & cosmetics.",
                    price: "From $11/kg",
                    speed: "3–5 days",
                    color: "bg-blue-100 text-blue-600"
                },
                {
                    icon: Truck,
                    title: "Land Freight (Auto)",
                    tag: "Economical",
                    desc: "Heavy items, furniture, bulk orders & budget shipping.",
                    price: "From $4/kg",
                    speed: "7–12 days",
                    color: "bg-teal-100 text-teal-600"
                }
            ],
            whyTitle: "Why Regular Shoppers & Businesses Trust HappyBox",
            whyIntro: "All our shipping methods are DDP (Delivered Duty Paid). This means the price you see is the price you pay. We handle all customs clearance, import duties, and local taxes. Zero extra charges upon delivery.",
            benefits: [
                {
                    icon: Plane,
                    title: "No Minimum Weight for Air",
                    desc: "Shipping just a small 0.5 kg parcel from Taobao? No problem. We accept shipments of all sizes."
                },
                {
                    icon: Box,
                    title: "Free Warehouse Consolidation",
                    desc: "Shop from different sellers on Taobao, 1688, or Alibaba. We will collect all your packages at our Shenzhen warehouse and combine them into one neat box to save you money on shipping."
                },
                {
                    icon: HelpCircle,
                    title: "We Speak Your Language",
                    desc: "Don't know how to talk to Chinese suppliers? Send your goods to our warehouse, and we will handle the physical tracking and verification for you."
                },
                {
                    icon: ShieldCheck,
                    title: "Real Inspection Photos",
                    desc: "We open and take photos of your items upon arrival in Shenzhen so you can check the quality before the goods cross the border."
                }
            ],
            fearsTitle: "Frequently Asked Questions",
            fearsList: [
                {
                    q: "How is Land Freight volumetric weight calculated?",
                    a: "The formula is: Length (cm) × Width (cm) × Height (cm) / 6000 = Volumetric Weight (kg). We charge based on whichever is greater: the actual weight or the volumetric weight."
                },
                {
                    q: "Do I need to deal with Thai Customs?",
                    a: "No! All shipments are DDP (Delivered Duty Paid). We handle everything at the border."
                },
                {
                    q: "What if it gets lost or damaged?",
                    a: "To protect regular buyers and businesses alike, we offer All-Risk Insurance. If your parcel is lost or damaged during the overland truck journey or air transit, you receive a 100% refund of the declared value. Your capital and your personal purchases are always safe with HappyBox."
                }
            ],
            stepsTitle: "The Shenzhen-to-Thailand Workflow",
            steps: [
                "Get Your Address: We provide you with your personal shipping address for our Shenzhen warehouse.",
                "Order Your Items: Put this address into Taobao, 1688, or give it to your supplier.",
                "QC & Combine: When your boxes arrive, we take photos, verify the contents, and consolidate them into one shipment.",
                "Border Crossing & Delivery: We ship via plane or truck, clear customs, and deliver via local Thai couriers (Flash Express, J&T, or Kerry Logistics)."
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
                title: "China to Thailand Logistics Guide 2026: Routes, Customs & Land Transit",
                subtitle: "Shipping to Thailand doesn't require a sea voyage. Thanks to direct cross-border highway networks connecting South China to Southeast Asia, land freight has become the most efficient method for non-urgent cargo.",
                jumpTo: "Jump to chapter:",
                nav: {
                    "th-sec1": "Routes",
                    "th-sec2": "Customs",
                    "th-sec3": "Product Types",
                    "th-sec4": "Inventory Buffer",
                    "th-sec5": "Volumetric Weight",
                    "th-sec6": "Workflow",
                    "th-sec7": "Insurance"
                },
                sections: [
                    {
                        id: "th-sec1",
                        title: "1. Understanding Your Routes: Air vs. Land Cross-Border",
                        items: [
                            { label: "Priority Air Freight", text: "Daily flights from Shenzhen/Guangzhou directly to Suvarnabhumi Airport (BKK). This is the fastest route, taking just 3–5 days from our warehouse to your Thai address. Perfect for high-value tech, time-sensitive fashion, and beauty products." },
                            { label: "Cross-Border Land Freight (Trucking)", text: "Your cargo travels via specialized container trucks through the Mohan/Boten or Friendship Pass borders, passing through Laos/Vietnam directly into Northern or Central Thailand. Taking only 7–12 days, it completely bypasses port congestion and is much faster than traditional sea shipping." }
                        ],
                        listStyle: "bullets"
                    },
                    {
                        id: "th-sec2",
                        title: "2. Hassle-Free Customs for Individuals & Commercial Clients",
                        desc: "Thai customs regulations can be complex, especially regarding specific import licenses for electronics or cosmetics.",
                        items: [
                            { label: "Our DDP Solution", text: "With HappyBox, you don't need an import license, a Thai tax ID, or any customs paperwork. We clear the cargo under our own compliant entity, prepay all duties and Thai VAT, and hand it over directly to local couriers for the final mile." }
                        ],
                        listStyle: "bullets"
                    },
                    {
                        id: "th-sec3",
                        title: "3. Shipping by Product Type: What Can You Send?",
                        items: [
                            { label: "Personal Shopping & E-commerce", text: "Clothes, shoes, and lifestyle items are ideal for Air Freight. We provide free vacuum-packing to compress fluffy items and lower your billable weight." },
                            { label: "Home Furniture & Appliances", text: "Perfect for Land Freight. Sourcing from Foshan or Shunde? Have it delivered to our Shenzhen hub. We can build custom wooden crates to protect heavy or fragile items during the highway journey." },
                            { label: "Built-in Batteries & Electronics", text: "Power banks, smart home devices, and toys are fully accepted through our specialized electronic shipping channels." }
                        ],
                        listStyle: "bullets"
                    },
                    {
                        id: "th-sec4",
                        title: "4. Smart Inventory Buffer (Drip-Feeding)",
                        desc: "If you run a small business or a Shopee/Lazada shop in Thailand, keeping too much stock in Bangkok can be expensive.",
                        items: [
                            { label: "The Strategy", text: "Keep your main stock at our Shenzhen Warehouse for free (up to 30 days)." },
                            { label: "The Execution", text: "Send small batches via Land Freight every week depending on your sales, keeping your local storage costs at zero." }
                        ],
                        listStyle: "bullets"
                    },
                    {
                        id: "th-sec5",
                        title: "5. Calculating Volumetric Weight for Thailand Routes",
                        desc: "Logistics companies measure both the physical weight and the size of the box. You are charged based on whichever is higher.",
                        items: [
                            { label: "The Formula", text: "Length (cm) × Width (cm) × Height (cm) / 6000 = Volumetric Weight (kg)." },
                            { label: "Pro-tip", text: "If your factory uses oversized boxes with lots of 'dead air' inside, our warehouse team will repack your goods into tighter, sturdier boxes for free to save you money." }
                        ],
                        listStyle: "bullets"
                    },
                    {
                        id: "th-sec6",
                        title: "6. The Shenzhen-to-Thailand Workflow",
                        items: [
                            { label: "Get Your Address", text: "We provide you with your personal shipping address for our Shenzhen warehouse." },
                            { label: "Order Your Items", text: "Put this address into Taobao, 1688, or give it to your supplier." },
                            { label: "QC & Combine", text: "When your boxes arrive, we take photos, verify the contents, and consolidate them into one shipment." },
                            { label: "Delivery", text: "We ship your goods via plane or truck, clear customs, and deliver them to your door via local Thai couriers (Flash Express, J&T, or Kerry Logistics)." }
                        ],
                        listStyle: "none"
                    },
                    {
                        id: "th-sec7",
                        title: "7. All-Risk Insurance Protection",
                        desc: "To protect regular buyers and businesses alike, we offer All-Risk Insurance. If your parcel is lost or damaged during the overland truck journey or air transit, you receive a 100% refund of the declared value. Your capital and your personal purchases are always safe with HappyBox."
                    }
                ]
            }
        },
        ru: {
            badge: "Прямая линия в Таиланд",
            titlePrefix: "Доставка из Китая в",
            titleHighlight: "Таиланд",
            subtitle: "Быстрое Авиа и Бюджетное Авто. Без стресса на таможне и без скрытых комиссий.",
            introTitle: "Бесшовная доставка для бизнеса и частных лиц",
            introText: "Мы одинаково бережно относимся к каждому отправлению: будь то оптовая партия товаров для вашего магазина, покупки с Taobao или подарки для семьи. Доставим прямо до двери в любую точку Таиланда, включая Бангкок, Чиангмай, Паттайю и Пхукет.",
            methodsTitle: "Наши способы доставки и тарифы",
            methods: [
                {
                    icon: Plane,
                    title: "Экспресс Авиа",
                    tag: "Быстро",
                    desc: "Срочные посылки, электроника, мода и косметика.",
                    price: "От $11/кг",
                    speed: "3–5 дней",
                    color: "bg-blue-50 text-brand-blue"
                },
                {
                    icon: Truck,
                    title: "Автодоставка (Земля)",
                    tag: "Экономно",
                    desc: "Тяжелые товары, мебель, оптовые заказы и бюджетная доставка.",
                    price: "От $4/кг",
                    speed: "7–12 дней",
                    color: "bg-teal-50 text-teal-600"
                }
            ],
            whyTitle: "Почему нам доверяют покупатели и бизнес",
            whyIntro: "Вся доставка работает по системе DDP (Delivered Duty Paid). Это значит, что вы не платите ни цента сверху после оформления. Мы берем на себя таможню и все местные налоги.",
            benefits: [
                {
                    icon: Plane,
                    title: "Нет минимального веса",
                    desc: "Отправляете небольшую посылку с Taobao на 0.5 кг? Нет проблем. Мы принимаем отправления любых размеров."
                },
                {
                    icon: Box,
                    title: "Бесплатная консолидация складом",
                    desc: "Покупайте у разных продавцов на Taobao, 1688 или Alibaba. Мы соберем все ваши посылки на складе в Шэньчжэне и объединим в одну аккуратную коробку для экономии."
                },
                {
                    icon: HelpCircle,
                    title: "Мы говорим на вашем языке",
                    desc: "Не знаете, как общаться с китайскими поставщиками? Отправьте товары на наш склад, и мы возьмем их отслеживание на себя."
                },
                {
                    icon: ShieldCheck,
                    title: "Реальные фотографии с проверки",
                    desc: "Мы открываем и фотографируем ваши товары по прибытии в Шэньчжэнь, чтобы вы могли проверить их качество еще до пересечения границы."
                }
            ],
            fearsTitle: "Частые вопросы",
            fearsList: [
                {
                    q: "Как рассчитывается объемный вес для автодоставки?",
                    a: "Формула: Длина (см) × Ширина (см) × Высота (см) / 6000 = Объемный вес (кг). Оплачивается тот вес, который больше — фактический или объемный."
                },
                {
                    q: "Нужно ли мне общаться с тайской таможней?",
                    a: "Нет! Все отправления идут по системе DDP. Мы решаем все вопросы на границе самостоятельно."
                },
                {
                    q: "Что если посылка потеряется или повредится?",
                    a: "Для защиты как обычных покупателей, так и бизнеса, мы предлагаем страхование All-Risk. В случае утери или повреждения во время авто или авиа транзита, вы получаете 100% возврат заявленной стоимости. Ваши деньги и покупки в безопасности с HappyBox."
                }
            ],
            stepsTitle: "Как работает доставка Шэньчжэнь – Таиланд",
            steps: [
                "Получите свой адрес: Мы выдаем вам персональный адрес нашего склада в Шэньчжэне.",
                "Сделайте заказ: Укажите этот адрес на Taobao, 1688 или передайте своему поставщику.",
                "Проверка и объединение: Когда ваши коробки прибывают, мы делаем фото, проверяем содержимое и объединяем в одну посылку.",
                "Таможня и доставка: Мы отправляем груз (авиа/авто), проходим таможню и доставляем курьерами (Flash Express, J&T или Kerry)."
            ],
            cta: "Получить адрес в Китае",
            back: "Назад к направлениям",
            crossPromo: [
                {
                    title: "Нужна помощь с покупками на Taobao?",
                    desc: "Мы поможем вам разобраться в китайских маркетплейсах, пообщаемся с продавцами и безопасно выкупим нужные товары.",
                    link: "/ru/taobao",
                    action: "Узнать о сервисе выкупа 0%",
                    isPrimary: true
                }
            ],
            guide: {
                title: "Гид по доставке в Таиланд 2026: Маршруты, Таможня и Автодоставка",
                subtitle: "Доставка в Таиланд не требует морских перевозок. Благодаря сетям скоростных автомагистралей через границу, соединяющим Южный Китай с Юго-Восточной Азией, наземные перевозки стали наиболее эффективным методом.",
                jumpTo: "Перейти к:",
                nav: {
                    "th-sec1": "Маршруты",
                    "th-sec2": "Таможня",
                    "th-sec3": "Категории",
                    "th-sec4": "Хранение",
                    "th-sec5": "Объемный вес",
                    "th-sec6": "Процесс",
                    "th-sec7": "Страховка"
                },
                sections: [
                    {
                        id: "th-sec1",
                        title: "1. Понимание маршрутов: Авиа vs Авто Карго",
                        items: [
                            { label: "Приоритетное Авиа", text: "Ежедневные рейсы из Шэньчжэня/Гуанчжоу напрямую в Суварнабхуми (BKK). Это самый быстрый маршрут, занимающий всего 3–5 дней. Идеально для дорогой техники, срочных фэшн-заказов и косметики." },
                            { label: "Автодоставка карго", text: "Груз следует в специальных контейнеровозах через границы Мохан/Ботен, проходя через Лаос/Вьетнам прямо в Таиланд. Путь занимает всего 7–12 дней, позволяя полностью избежать портовых заторов." }
                        ],
                        listStyle: "bullets"
                    },
                    {
                        id: "th-sec2",
                        title: "2. Таможня без стресса для физ. лиц и бизнеса",
                        desc: "Таможенные правила Таиланда сложны, особенно когда требуются лицензии на импорт электроники или косметики.",
                        items: [
                            { label: "Наше DDP-решение", text: "С HappyBox вам не нужна лицензия на импорт, налоговый номер или какие-либо таможенные документы. Мы растамаживаем груз, оплачиваем все пошлины и тайский НДС и передаем посылку местным курьерам." }
                        ],
                        listStyle: "bullets"
                    },
                    {
                        id: "th-sec3",
                        title: "3. Доставка по типам товаров",
                        items: [
                            { label: "Личные покупки", text: "Одежда, обувь и вещи для дома идеально подходят для авиадоставки. Мы бесплатно вакуумируем пушистые вещи для уменьшения объемного веса." },
                            { label: "Мебель и техника", text: "Идеально для автодоставки. Мы можем сделать прочную деревянную обрешетку для защиты тяжелых или хрупких предметов во время грузоперевозки." },
                            { label: "Электроника", text: "Повербанки, аккумуляторы, умный дом и игрушки легко отправляются по нашим специальным каналам." }
                        ],
                        listStyle: "bullets"
                    },
                    {
                        id: "th-sec4",
                        title: "4. Умный буфер запасов",
                        desc: "Если вы ведете малый бизнес или продаете на Shopee/Lazada в Таиланде, держать много запасов в Бангкоке бывает дорого.",
                        items: [
                            { label: "Стратегия", text: "Держите основные запасы на нашем складе в Шэньчжэне бесплатно (до 30 дней)." },
                            { label: "Действие", text: "Отправляйте небольшие партии автодоставкой каждую неделю в зависимости от продаж, сводя затраты на тайское хранение к нулю." }
                        ],
                        listStyle: "bullets"
                    },
                    {
                        id: "th-sec5",
                        title: "5. Расчет объемного веса",
                        desc: "Логистические компании измеряют как физический вес, так и габариты коробки. Вы платите за то, что больше.",
                        items: [
                            { label: "Формула", text: "Длина (см) × Ширина (см) × Высота (см) / 6000 = Объемный вес (кг)." },
                            { label: "Наш совет", text: "Мы бесплатно переупаковываем товар и убираем ненужный воздух из коробок с фабрик, чтобы вы не переплачивали за объем." }
                        ],
                        listStyle: "bullets"
                    },
                    {
                        id: "th-sec6",
                        title: "6. Процесс доставки: от Шэньчжэня до двери",
                        items: [
                            { label: "Адрес и заказ", text: "Выдаем вам адрес склада, вы заказываете на него товары." },
                            { label: "Проверка", text: "Получаем коробки, делаем фото-отчет и упаковываем всё в одну общую партию." },
                            { label: "Доставка", text: "Везем груз в Таиланд, проходим таможню и отдаем Flash Express, J&T или Kerry." }
                        ],
                        listStyle: "none"
                    },
                    {
                        id: "th-sec7",
                        title: "7. Страховка All-Risk",
                        desc: "Для защиты клиентов мы предлагаем страховку All-Risk. При утере или повреждении во время транзита мы возвращаем 100% заявленной стоимости. Ваши товары в безопасности."
                    }
                ]
            }
        },
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

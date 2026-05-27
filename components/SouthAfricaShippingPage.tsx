import React from 'react';
import { Plane, Ship, Check, ShieldCheck, Box, HelpCircle } from 'lucide-react';
import { DestinationTemplate, DestinationContent } from './DestinationTemplate';
import { Language } from '../utils/translations';

interface SouthAfricaShippingPageProps {
    language: Language;
    setLanguage: (lang: Language) => void;
    onBack: () => void;
    onNavigate: (page: string) => void;
}

export const SouthAfricaShippingPage: React.FC<SouthAfricaShippingPageProps> = ({
    language,
    setLanguage,
    onBack,
    onNavigate
}) => {
    const fullContent: Record<'en' | 'ru', DestinationContent> = {
        en: {
            badge: "South Africa-Direct Line",
            titlePrefix: "Shipping from China to",
            titleHighlight: "South Africa",
            subtitle: "Reliable Air & Sea Freight Services. Tackle South African customs complexities, strict SARS compliance, and unexpected port delays with confidence.",
            introTitle: "Direct Door-to-Door Delivery Across South Africa",
            introText: "Whether you are restocking inventory for local platforms like Takealot, Bash, or Zando, importing industrial tools, or consolidating personal purchases from Taobao and 1688 — we manage the process from end to end. We deliver right to your door across all major hubs, including Johannesburg, Cape Town, Durban, Pretoria, and Port Elizabeth.",
            methodsTitle: "Our Shipping Methods & Rates",
            methods: [
                {
                    icon: Plane,
                    title: "Air Freight",
                    tag: "Fast",
                    desc: "Electronics, high-demand fashion, gadgets & light parcels.",
                    price: "From $12/kg",
                    speed: "5–8 days",
                    color: "bg-blue-100 text-blue-600"
                },
                {
                    icon: Ship,
                    title: "Ocean Freight (LCL)",
                    tag: "Economical",
                    desc: "Furniture, oversized items, manufacturing equipment & heavy cargo.",
                    price: "From $1.3/kg",
                    speed: "35–45 days",
                    color: "bg-teal-100 text-teal-600"
                }
            ],
            whyTitle: "Why Importers in South Africa Trust HappyBox",
            whyIntro: "All our shipping channels to South Africa operate strictly on a DDP (Delivered Duty Paid) basis. The final rate we quote covers international freight, customs clearance, port handling, and 100% of SARS customs duties and 15% Import VAT. No hidden clearance fees, no administrative headaches, and zero surprise bills.",
            benefits: [
                {
                    icon: ShieldCheck,
                    title: "Bypass SARS Import Code Requirements",
                    desc: "In South Africa, regular commercial importers must hold an official customs import permit linked to their SARS profile. With our DDP setup, we clear everything under our own licensed corporate umbrella — you don't need an import code."
                },
                {
                    icon: Check,
                    title: "No \"Temu & Shein\" Tax Traps",
                    desc: "SARS has drastically increased enforcement and closed tax loopholes on small parcel imports (especially textiles and clothing). Our specialized clothing channels absorb these calculations into a flat, transparent per-kilogram rate."
                },
                {
                    icon: Box,
                    title: "Free Multi-Supplier Consolidation",
                    desc: "Buy from multiple manufacturers on Alibaba or individual merchants on 1688. We collect your packages at our Shenzhen hub, strip away unnecessary factory packaging to save space, and consolidate them into a single shipment."
                },
                {
                    icon: HelpCircle,
                    title: "Secure Quality Inspections",
                    desc: "Finding out a machine or batch of products is defective after it reaches Johannesburg is a financial nightmare. Our Shenzhen team inspects your cargo and verifies your order before it ever boards a plane or ship."
                }
            ],
            fearsTitle: "Frequently Asked Questions",
            fearsList: [
                {
                    q: "Do I need an Import Code to receive goods in South Africa?",
                    a: "No! Thanks to our DDP (Delivered Duty Paid) structure, we clear the shipment under our own licensed entities. You simply receive your cargo at the door."
                },
                {
                    q: "How does South African Customs tax differ?",
                    a: "Unlike many regions, South Africa evaluates Import VAT applying a 10% upliftment on the customs value. But with our DDP rate, all duties (0-45%) and the 15% VAT are fully absorbed."
                },
                {
                    q: "What if it gets damaged or lost?",
                    a: "Due to long maritime routes and port handling, HappyBox offers All-Risk Insurance protecting 100% of your declared value from the moment it reaches our Shenzhen facility until signed for at your address."
                }
            ],
            stepsTitle: "The Step-by-Step Logistics Flow",
            steps: [
                "Get Your Shenzhen Address: Create a HappyBox account and receive your dedicated shipping ID and warehouse address.",
                "Purchase & Deliver: Send goods from Taobao, Alibaba or your factory to our Shenzhen hub.",
                "Quality Check & Packing: We unpack, inspect, take photos, and consolidate your items to minimize volumetric weight.",
                "Transport & Final Delivery: Your cargo is cleared through SARS and delivered using our regional courier networks directly to your door."
            ],
            cta: "Ship to South Africa Now",
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
                title: "China to South Africa Logistics Guide: Customs, Compliance & Sea-Air Routes",
                subtitle: "Navigating logistics to the southern tip of Africa requires a deep understanding of maritime timelines and local revenue authority enforcement. Here is the technical breakdown of the China-to-South Africa trade lane.",
                jumpTo: "Jump to chapter:",
                nav: {
                    "za-sec1": "Strategic Routing",
                    "za-sec2": "SARS Tax Stack",
                    "za-sec3": "Dangerous Goods",
                    "za-sec4": "Chargeable Weight",
                    "za-sec5": "Last-Mile Delivery"
                },
                sections: [
                    {
                        id: "za-sec1",
                        title: "1. Strategic Routing & Key Gateways",
                        items: [
                            { label: "Air Freight Express", text: "Cargo is processed through our Shenzhen hub, departing via major air cargo carriers, and lands at O.R. Tambo International Airport (JNB) or Cape Town International Airport (CPT). Total door-to-door transit stands at 5–8 days." },
                            { label: "Ocean Freight (LCL/FCL)", text: "Ships depart from Shenzhen (Yantian/Shekou) or Ningbo, transiting across the Indian Ocean to Port of Durban or Port of Cape Town. Maritime transit takes 18–25 days on the water, with a total door-to-door timeline of 35–45 days factoring in port un-stuffing, customs, and final domestic trucking." }
                        ],
                        listStyle: "bullets"
                    },
                    {
                        id: "za-sec2",
                        title: "2. Deconstructing the SARS Customs & Tax Stack",
                        desc: "South Africa employs a protective tariff structure managed by the South African Revenue Service (SARS).",
                        items: [
                            { label: "The Custom Formula", text: "Duties are calculated on the customs value (FOB/CIF basis), ranging from 0% on IT equipment to 30-45% on textiles, footwear, and apparel." },
                            { label: "The VAT Calculation", text: "South Africa adds an artificial 10% upliftment on the customs value when calculating Import VAT for non-SACU goods. The statutory formula is: Import VAT = [(Customs Value + 10%) + Customs Duties] × 15%." },
                            { label: "The HappyBox Shield", text: "Our DDP model completely eliminates this administrative complexity for you. We calculate a flat rate per kg or per CBM that covers the freight, the duty, the 10% uplifted VAT, and all terminal handling charges (THC)." }
                        ],
                        listStyle: "bullets"
                    },
                    {
                        id: "za-sec3",
                        title: "3. Handling Dangerous Goods & Battery Freight",
                        desc: "Lithium Batteries & Electronics: Power banks, backup power systems (Inverters/ESS popular for local loadshedding mitigation), and electric bikes are heavily regulated.",
                        items: [
                            { label: "Compliance", text: "We route these goods through dedicated, battery-compliant shipping channels equipped with correct Dangerous Goods (DG) declarations, MSDS, and UN38.3 test summaries." }
                        ],
                        listStyle: "bullets"
                    },
                    {
                        id: "za-sec4",
                        title: "4. Volumetric vs. Actual Weight Calculations",
                        desc: "To optimize shipping costs, our warehouse applies strict dimensional controls before export.",
                        items: [
                            { label: "Air Freight Volumetric Ratio", text: "Billed based on whichever value is greater between actual weight and dimensional weight using the standard formula: Length × Width × Height (cm) / 5000 = Volumetric Weight (kg)." },
                            { label: "Ocean Freight LCL Calculation", text: "Billed per Cubic Meter (CBM): Length × Width × Height (cm) / 1,000,000 = CBM. If your factory cargo uses poor-fitting, bloated boxes, our Shenzhen warehouse provides complimentary repackaging." }
                        ],
                        listStyle: "bullets"
                    },
                    {
                        id: "za-sec5",
                        title: "5. Last-Mile Logistics and All-Risk Protection",
                        items: [
                            { label: "Domestic Transport Network", text: "Once your cargo completes customs clearance at JNB or Durban port, it enters our local distribution network. For standard parcels, we hand over to trusted regional couriers. For palletized goods, we deploy vetted local freight networks." },
                            { label: "All-Risk Protection", text: "Due to long maritime routes, high port touchpoints, and local transit factors, HappyBox offers comprehensive All-Risk Insurance covering 100% of the declared cargo value against moisture damage, theft, or physical damage." }
                        ],
                        listStyle: "bullets"
                    }
                ]
            }
        },
        ru: {
            badge: "Прямая линия в ЮАР",
            titlePrefix: "Доставка из Китая в",
            titleHighlight: "ЮАР",
            subtitle: "Надежная авиа и морская доставка. Забудьте о сложностях с таможней, строгих правилах SARS и задержках в портах Южной Африки.",
            introTitle: "Доставка до двери по всей ЮАР",
            introText: "Пополняете запасы для локальных маркетплейсов Takealot, Bash или Zando? Импортируете оборудование? Или просто ждете посылку с Taobao? Мы берем всё на себя. Доставляем в Йоханнесбург, Кейптаун, Дурбан, Преторию и Порт-Элизабет.",
            methodsTitle: "Способы и стоимость доставки",
            methods: [
                {
                    icon: Plane,
                    title: "Авиадоставка",
                    tag: "Быстро",
                    desc: "Электроника, модная одежда, гаджеты и небольшие посылки.",
                    price: "От $12/кг",
                    speed: "5–8 дней",
                    color: "bg-blue-50 text-brand-blue"
                },
                {
                    icon: Ship,
                    title: "Морская доставка (LCL)",
                    tag: "Экономно",
                    desc: "Мебель, крупногабарит, станки, тяжелый груз.",
                    price: "От $1.3/кг",
                    speed: "35–45 дней",
                    color: "bg-teal-50 text-teal-600"
                }
            ],
            whyTitle: "Почему бизнесы в ЮАР доверяют HappyBox",
            whyIntro: "Все наши отправки в ЮАР осуществляются по системе DDP (Деливери Дьюти Пэйд). Названная нами цена включает международный фрахт, таможенную очистку, портовые сборы и 100% таможенных пошлин SARS и 15% НДС (VAT). Никаких скрытых сборов.",
            benefits: [
                {
                    icon: ShieldCheck,
                    title: "Импортный код не нужен",
                    desc: "В ЮАР коммерческие импортеры должны иметь таможенный импортный код (SARS Import Code). Благодаря DDP мы очищаем товары через наше лицензированное предприятие — вам не нужен этот код."
                },
                {
                    icon: Check,
                    title: "Абсорбция налогов на фэшн",
                    desc: "SARS серьезно ужесточила контроль и убрала налоговые лазейки (пошлина на ткань до 45% + 15% НДС). Мы поглощаем эти проверки в наш фиксированный, прозрачный тариф за килограмм."
                },
                {
                    icon: Box,
                    title: "Бесплатная консолидация",
                    desc: "Покупайте у разных заводов Alibaba или продавцов 1688. Мы соберем ваши посылки на нашем складе в Шэньчжэне, уберем лишние коробки и объединим все в одну отправку."
                },
                {
                    icon: HelpCircle,
                    title: "Гарантированный контроль качества",
                    desc: "Узнать о браке станка или партии товара по прибытии в Йоханнесбург — финансовая катастрофа. Наша команда проверяет и делает фото в Шэньчжэне до того, как груз попадет на корабль."
                }
            ],
            fearsTitle: "Частые вопросы",
            fearsList: [
                {
                    q: "Мне нужен Импортный Код для получения груза?",
                    a: "Нет. С нашей DDP-цепочкой мы растамаживаем Ваш груз под собственные лицензии. Вы просто получаете его дома/в офисе без лишних бумаг."
                },
                {
                    q: "Что такое 10% «upliftment» в налогах ЮАР?",
                    a: "При расчете НДС (15%) таможня ЮАР искусственно увеличивает таможенную стоимость на 10%. Однако это уже заложено в нашу DDP цену. От вас — больше никаких доплат."
                },
                {
                    q: "Застрахован ли мой груз?",
                    a: "Да, долгие морские маршруты несут риски. Мы предлагаем All-Risk Страхование (100% защиты от потери товара, намокания или физических повреждений) с момента прибытия на склад в Китае."
                }
            ],
            stepsTitle: "Как происходит доставка логистики",
            steps: [
                "Получите Адрес: Мы выдаем Вам персональный ID и адрес нашего китайского склада в Шэньчжэне.",
                "Покупка: Введите наш адрес в Ваш аккаунт Taobao, Alibaba, или 1688.",
                "Проверка & Консолидация: Ваш груз проверяется на брак, фотографируется, лишняя упаковка удаляется.",
                "Транзит DDP: Ваш груз доставляется самолетом или кораблем, растамаживается и передается локальной курьерской компании в ЮАР."
            ],
            cta: "Отправить груз в ЮАР",
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
                title: "Логистический Гид «Китай - ЮАР»: Таможня, Налоги и Море/Авиа",
                subtitle: "Навигация по логистике до южной оконечности Африки требует глубокого понимания морских маршрутов и работы DDP-сервиса.",
                jumpTo: "Перейти к главе:",
                nav: {
                    "za-sec1": "Маршруты доставки",
                    "za-sec2": "Налоги SARS (DDP)",
                    "za-sec3": "Опасные грузы и АКБ",
                    "za-sec4": "Объемный вес",
                    "za-sec5": "Доставка и Защита"
                },
                sections: [
                    {
                        id: "za-sec1",
                        title: "1. Ключевые Маршруты и Транзитное время",
                        items: [
                            { label: "Авиа экспресс", text: "Вылет идет через Шэньчжэнь прямо до O.R. Tambo (JNB) в Йоханнесбурге или аэропорта Кейптауна. Общее время (от двери до двери): 5–8 дней." },
                            { label: "Морской фрахт (LCL/FCL)", text: "Суда отходят из Шэньчжэня (Яньтянь) или Нинбо в порты Дурбан и Кейптаун. По воде 18–25 дней, общая DDP доставка 35–45 дней (вкл. таможню и автоперевозку)." }
                        ],
                        listStyle: "bullets"
                    },
                    {
                        id: "za-sec2",
                        title: "2. Таможенный Стек SARS и Преимущества DDP",
                        desc: "В ЮАР одна из самых строгих и защитных систем таможенных тарифов.",
                        items: [
                            { label: "Формула", text: "Пошлины сильно варьируются: IT-оборудование 0%, текстиль и обувь 30-45%. Далее считается Import VAT = [(Customs Value + 10%) + Customs Duties] × 15%." },
                            { label: "Щит HappyBox", text: "Мы полностью устраняем эту сложную налоговую математику. Вы платите только фиксированную ставку /кг или /CBM, которая уже включает Фрахт, все пошлины, 15% НДС с 10% надбавкой, и портовые сборы THC." }
                        ],
                        listStyle: "bullets"
                    },
                    {
                        id: "za-sec3",
                        title: "3. Инверторы, Батареи и Опасные Грузы",
                        desc: "В связи с постоянными отключениями электричества («loadshedding») в ЮАР популярны инверторы, резервные батареи и power banks. Мы доставляем их строго через выделенные DG-каналы (Dangerous Goods) с декларациями MSDS и UN38.3."
                    },
                    {
                        id: "za-sec4",
                        title: "4. Объемный вес vs Практический (Авиа и Море)",
                        items: [
                            { label: "Авиа Формула", text: "Расчет: Длина (см) × Ширина × Высота / 5000 = Объемный вес (кг). Вы платите за наибольшее значение." },
                            { label: "Кубы для Моря (LCL)", text: "Море считается за кубометры: Длина (см) × Ширина × Высота / 1,000,000 = CBM. Наша команда бесплатно переупаковывает картон, если фабрика отправила полупустую коробку." }
                        ],
                        listStyle: "bullets"
                    },
                    {
                        id: "za-sec5",
                        title: "5. Завершение пути и All-Risk защита",
                        items: [
                            { label: "Доставка внутри ЮАР", text: "Пройдя порт Дурбана или аэропорт Йобурга, груз идет через надежных местных курьеров к Вашей двери, либо на склады." },
                            { label: "Полная гарантия", text: "Логистика сложная, море – долго. Наша страховка All-Risk (включая намокание, утерю) гарантирует, что вы никогда не потеряете свои деньги." }
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

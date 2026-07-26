
import React, { useEffect } from 'react';
import { Header } from './Header';
import { Contact } from './Contact';
import { Footer } from './Footer';
import { SeoBlock } from './SeoBlock';
import { Language } from '../utils/translations';
import { FloatingContact } from './FloatingContact';
import { DestinationTemplate } from './DestinationTemplate';
import { Check, ShieldCheck, Plane, Truck, Anchor, Zap, Box, Send, MapPin, ArrowRight } from 'lucide-react';

interface EuShippingPageProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  onBack?: () => void;
  onNavigate?: (page: string) => void;
}

export const EuShippingPage: React.FC<EuShippingPageProps> = ({ language, setLanguage, onBack, onNavigate }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const content = {
        en: {
            badge: "Europe Direct Line",
            titlePrefix: "Shipping from China to",
            titleHighlight: "Europe",
            subtitle: <>Stop worrying about customs, import VAT, and supplier mistakes. We provide a secure bridge between your Chinese manufacturers and your EU destination - all duties and taxes paid upfront, no charges on delivery. No minimum weight requirement — we ship from <span className="bg-brand-yellow px-1.5 py-0.5 rounded text-brand-dark font-bold whitespace-nowrap">0.1 kg</span>.</>,
            introTitle: "Seamless Logistics Across the European Union",
            introText: "Whether you are shipping to Germany, France, Italy, Spain, Poland, or any other EU member state, HappyBox provides a streamlined logistics experience. We specialize in DDP (Delivered Duty Paid) shipping. What this means for you: the price you pay includes ocean/rail/air freight, customs clearance, and all import duties and VAT. No hidden fees, no surprise invoices from local tax authorities.",
            methodsTitle: "Our Shipping Methods & Rates",
            methods: [
                {
                    icon: Plane,
                    title: "Air Freight",
                    tag: "Priority Delivery",
                    desc: "Electronics, fashion, and high-value goods.",
                    price: "From €9/kg",
                    speed: "6–10 days",
                    color: "bg-blue-50 text-brand-blue"
                },
                {
                    icon: Truck,
                    title: "Rail Freight",
                    tag: "Best Value",
                    desc: "The sweet spot between cost and speed. Eco-friendly and reliable for commercial cargo.",
                    price: "From €2.5/kg",
                    speed: "18–24 days",
                    color: "bg-orange-50 text-orange-600"
                },
                {
                    icon: Anchor,
                    title: "Sea Freight",
                    tag: "Economy",
                    desc: "Bulk orders, furniture, and heavy machinery.",
                    price: "From €1.1/kg",
                    speed: "35–45 days",
                    color: "bg-teal-50 text-teal-600"
                }
            ],
            whyTitle: "HappyBox: Your Local Office in Shenzhen",
            whyIntro: "We act as your eyes and ears in China so you never need to fly there.",
            benefits: [
                {
                    icon: Box,
                    title: "Order Consolidation",
                    desc: "We collect goods from 1688, Alibaba, and Taobao at our Shenzhen warehouse and ship them as one cargo to reduce your costs."
                },
                {
                    icon: ShieldCheck,
                    title: "Strict Quality Inspection",
                    desc: "We provide photos, videos, and technical checks before the cargo leaves China. If it's broken, it stays in China - not on a ship to Rotterdam."
                },
                {
                    icon: Zap,
                    title: "Total VAT & Customs Management",
                    desc: "We use our own EORI number and handle all EU customs paperwork. You don't deal with any of it."
                },
                {
                    icon: MapPin,
                    title: "EU-Wide Door-to-Door Delivery",
                    desc: "Final-mile delivery to your warehouse or home via DHL, DPD, or UPS - anywhere in all 27 member states."
                }
            ],
            fearsTitle: "Solving Your Biggest Importing Fears",
            fearsList: [
                { q: "What if my supplier sends defective goods?", a: "Our Shenzhen warehouse is your quality buffer. We inspect every shipment with photos and technical checks before it leaves China. Defective items go back to the factory immediately." },
                { q: "What if the cargo is lost or damaged?", a: "We provide All-Risk cargo insurance. If your goods are lost or damaged in transit, you receive a 100% refund of the declared value. No fine print." },
                { q: "Am I too small for you?", a: <>Our minimums are accessible: from <span className="bg-brand-yellow px-1.5 py-0.5 rounded text-brand-dark font-bold whitespace-nowrap">0.1 kg</span> for Air and from 1 CBM for Sea. Startups and established brands get the same service level.</> },
                { q: "What about Chinese holidays and EU port delays?", a: "Chinese New Year, Golden Week, and seasonal port congestion are predictable. We plan your shipment calendar around them so you never run out of stock." }
            ],
            stepsTitle: "How to Get Started",
            steps: [
                "Get your Shenzhen warehouse address",
                "Order from your suppliers",
                "We inspect and confirm",
                "Pay and track to your door"
            ],
            cta: "Get a Free Shipping Quote",
            back: "Back to Home"
        },
        ru: {
            badge: "Прямая линия в Европу",
            titlePrefix: "Доставка из Китая в",
            titleHighlight: "Европу",
            subtitle: <>Забудьте о таможне, НДС и ошибках поставщиков. Мы обеспечиваем надежный мост между китайскими фабриками и Европой - все налоги и пошлины включены в цену, никаких доплат при получении. Нет минимального веса — доставляем от <span className="bg-brand-yellow px-1.5 py-0.5 rounded text-brand-dark font-bold whitespace-nowrap">0.1 кг</span>.</>,
            introTitle: "Бесшовная логистика по всему Евросоюзу",
            introText: "Отправляете ли вы в Германию, Францию, Италию, Испанию, Польшу или любую другую страну ЕС - процесс остается стабильным. Мы специализируемся на доставке DDP (Delivered Duty Paid). Это значит, что цена включает фрахт, таможенную очистку и уплату всех ввозных пошлин и НДС. Никаких скрытых платежей или неожиданных счетов от местных налоговых органов.",
            methodsTitle: "Наши тарифы и способы доставки",
            methods: [
                {
                    icon: Plane,
                    title: "Авиадоставка",
                    tag: "Приоритет",
                    desc: "Электроника, мода и дорогостоящие товары.",
                    price: "От €9/кг",
                    speed: "6–10 дней",
                    color: "bg-blue-50 text-brand-blue"
                },
                {
                    icon: Truck,
                    title: "Ж/Д доставка",
                    tag: "Оптимально",
                    desc: "Идеальный баланс цены и скорости. Надежно для коммерческих грузов.",
                    price: "От €2.5/кг",
                    speed: "18–24 дня",
                    color: "bg-orange-50 text-orange-600"
                },
                {
                    icon: Anchor,
                    title: "Морская доставка",
                    tag: "Эконом",
                    desc: "Объемные партии, мебель, тяжелое оборудование.",
                    price: "От €1.1/кг",
                    speed: "35–45 дней",
                    color: "bg-teal-50 text-teal-600"
                }
            ],
            whyTitle: "HappyBox: Ваш местный офис в Шэньчжэне",
            whyIntro: "Мы - ваши глаза и уши в Китае. Вам больше не нужно туда летать.",
            benefits: [
                {
                    icon: Box,
                    title: "Консолидация заказов",
                    desc: "Мы собираем товары с 1688, Alibaba и Taobao на нашем складе и отправляем их одним грузом для экономии на доставке."
                },
                {
                    icon: ShieldCheck,
                    title: "Строгий контроль качества",
                    desc: "Предоставляем фото, видео и технические проверки до отправки. Брак остается в Китае, а не плывет в Европу."
                },
                {
                    icon: Zap,
                    title: "Полное управление НДС и Таможней",
                    desc: "Используем собственный EORI номер и решаем все вопросы с таможней ЕС. Вам не о чем беспокоиться."
                },
                {
                    icon: MapPin,
                    title: "Доставка до двери",
                    desc: "Финальная доставка на ваш склад или дом местными курьерами (DHL, DPD, UPS) по всем 27 странам ЕС."
                }
            ],
            fearsTitle: "Решение ваших главных страхов при импорте",
            fearsList: [
                { q: "А что если поставщик пришлет брак?", a: "Наш склад в Шэньчжэне служит буфером качества. Мы проверяем каждую партию с фотоотчетами до отправки из Китая. Бракованный товар немедленно возвращается на фабрику." },
                { q: "А что если груз потеряется или повредится?", a: "Мы предоставляем страховку от всех рисков (All-Risk). В случае порчи или утери груза в пути, вы получаете 100% возврат заявленной стоимости. Никакого мелкого шрифта." },
                { q: "Я не слишком маленький клиент для вас?", a: <>У нас реалистичные минимумы: от <span className="bg-brand-yellow px-1.5 py-0.5 rounded text-brand-dark font-bold whitespace-nowrap">0.1 кг</span> для авиа и от 1 куба (CBM) для моря. И стартапы, и крупные бренды получают одинаково высокий уровень сервиса.</> },
                { q: "А как же праздники и задержки в портах?", a: "Китайский Новый год, Золотая Неделя и пробки в портах можно предвидеть. Мы планируем календарь отправок так, чтобы у вас всегда был товар на складе." }
            ],
            stepsTitle: "Как начать",
            steps: [
                "Получите адрес нашего склада в Шэньчжэне",
                "Сделайте заказ у поставщиков",
                "Мы проверяем и подтверждаем груз",
                "Оплачивайте и отслеживайте доставку до двери"
            ],
            cta: "Рассчитать стоимость",
            back: "На главную"
        }
    };

    // Add amazon block to EU
    const fullContent = {
        en: {
            ...content.en,
            amazonBlock: {
                titlePrefix: "Shipping to",
                titleHighlight: "Amazon FBA Europe",
                desc: "Specialized rates, prep services, and direct delivery to FBA warehouses in Germany, France, and Poland.",
                link: "/amazon",
                cta: "Learn More"
            },
            guide: {
                title: "China to Europe Shipping Guide 2026: Costs, Customs & Transit Times",
                subtitle: "The technical reference for EU importers who want to understand the full picture.",
                jumpTo: "Jump to chapter:",
                nav: {
                    "eu-sec1": "Transit Options",
                    "eu-sec2": "EU Customs & VAT",
                    "eu-sec3": "Import Tariffs",
                    "eu-sec4": "Product Types",
                    "eu-sec5": "Ports & Hubs",
                    "eu-sec6": "Warehouse Workflow",
                    "eu-sec7": "Risk Mitigation"
                },
                sections: [
                    {
                        id: "eu-sec1",
                        title: "1. Transit Options: Air vs. Rail vs. Sea",
                        desc: "Three routes connect Shenzhen to Europe. Each serves a different business profile.",
                        items: [
                            { label: "Air Freight (6–10 days)", text: "Via Shenzhen or Hong Kong to Frankfurt (FRA) or Amsterdam (AMS). Standard for high-value goods, electronics, and urgent restocks." },
                            { label: "Rail Freight (18–24 days)", text: "The China-Europe Railway Express into Duisburg (Germany) and Małaszewicze (Poland). Best fit for regular commercial cargo in the 100-2000 kg range. More predictable than sea freight." },
                            { label: "Sea Freight (35–45 days)", text: "Via Rotterdam, Hamburg, Antwerp, or Piraeus for Southern Europe. Most cost-effective per kg for bulk, furniture, and heavy goods." }
                        ],
                        listStyle: "bullets"
                    },
                    {
                        id: "eu-sec2",
                        title: "2. EU Customs Entry: EORI, VAT, and DDP",
                        desc: "The EU operates as a single customs territory. Goods are cleared once at the port of entry and then move freely between all 27 member states.",
                        items: [
                            { label: "Customs Duty", text: "A percentage of the CIF value (Cost + Insurance + Freight), set by the EU's TARIC system based on HS code. Duties are calculated on CIF value, not FOB." },
                            { label: "Import VAT", text: "Applied on top of customs value + duty. Rate varies by country (e.g. Germany 19%, France 20%, Italy 22%, Poland 23%)." },
                            { label: "EORI Number", text: "Every business importing commercially needs an EORI number. If you don't have one, we handle entry using our fiscal representation." },
                            { label: "The DDP Advantage", text: "We pay export clearance, international freight, EU customs duties, and import VAT on your behalf. The shipment arrives with zero additional charges." }
                        ],
                        listStyle: "bullets"
                    },
                    {
                        id: "eu-sec3",
                        title: "3. EU Import Tariffs 2026: What You Actually Pay",
                        desc: "EU import duties are set by the Common Customs Tariff and apply uniformly. However, targeted anti-dumping measures exist for specific categories.",
                        items: [
                            { label: "Calculation Formula", text: "Total landed cost = (CIF Value + Customs Duty) × (1 + VAT Rate)." },
                            { label: "Anti-dumping Surcharges", text: "Active duties apply to electric bicycles, certain steel/aluminum products, ceramic tiles, and solar glass. We verify these before you order." },
                            { label: "Our Guarantee", text: "We calculate your full landed cost – TARIC duty, any anti-dumping surcharge, and import VAT – before cargo leaves Shenzhen. With DDP, this is locked into your quote." }
                        ],
                        listStyle: "bullets"
                    },
                    {
                        id: "eu-sec4",
                        title: "4. Shipping from China to Europe by Product Type",
                        items: [
                            { label: "Electronics", text: "CE marking is mandatory. Lithium battery products require UN38.3 certification and MSDS documentation. RoHS compliance applies." },
                            { label: "Clothing & Textiles", text: "Labeling requirements mandate fiber composition, care instructions, and country of origin. REACH restrictions apply to certain dyes." },
                            { label: "Furniture", text: "Solid wood requires ISPM-15 phytosanitary certification. REACH regulations may apply to lacquers and adhesives." },
                            { label: "Health & Beauty", text: "Cosmetics require EU Cosmetic Product Notification Portal (CPNP) registration. We flag these at the quoting stage." }
                        ],
                        listStyle: "bullets"
                    },
                    {
                        id: "eu-sec5",
                        title: "5. EU Ports and Air Hubs: Your Cargo's Entry Point",
                        items: [
                            { label: "Rotterdam (Netherlands)", text: "Largest EU gateway and busiest container port. First choice for sea freight to Western and Central Europe." },
                            { label: "Hamburg (Germany)", text: "Primary gateway for Germany, Poland, Czech Republic, and the Baltics with direct rail connections to Eastern Europe." },
                            { label: "Piraeus (Greece)", text: "Southern Europe Gateway. Routing through Piraeus saves 3-5 days for Mediterranean-destined sea cargo." },
                            { label: "Małaszewicze (Poland)", text: "The main land border crossing for all China-Europe rail freight entering the EU." },
                            { label: "Air Hubs", text: "Frankfurt (FRA) is Europe's busiest cargo airport. Amsterdam (AMS) handles Netherlands/Scandinavia, and Paris (CDG) handles France." }
                        ],
                        listStyle: "bullets"
                    },
                    {
                        id: "eu-sec6",
                        title: "6. The Shenzhen Warehouse Workflow",
                        items: [
                            { label: "1. Incoming QC", text: "We inspect for factory defects and verify quantities against your packing list. Photos are sent before packing." },
                            { label: "2. Repacking & Optimization", text: "We repack into the most efficient box configuration to minimize volumetric weight for air and rail freight." },
                            { label: "3. Consolidation", text: "Everything ships as one consolidated cargo. One freight bill, one customs entry." },
                            { label: "4. Documentation", text: "We generate the Commercial Invoice, Packing List, and all CE/RoHS documents required for EU import." }
                        ],
                        listStyle: "none"
                    },
                    {
                        id: "eu-sec7",
                        title: "7. Risk Mitigation: All-Risk Cargo Insurance",
                        desc: "Standard carrier liability covers very little. We provide All-Risk insurance covering General Average (Maritime Law), theft, non-delivery, water damage, and rough handling in transit. Coverage applies from our Shenzhen warehouse until delivery at your EU address."
                    }
                ],
                verdict: {
                    title: "The HappyBox Verdict",
                    desc: "Succeeding in the EU market requires navigating complex VAT setups and EORI requirements. Let us handle the customs and freight complexities so you can focus on growing your business across the 27 member states."
                }
            }
        },
        ru: {
            ...content.ru,
            amazonBlock: {
                titlePrefix: "Вам нужна доставка на",
                titleHighlight: "Amazon FBA Europe",
                desc: "Специальные условия, маркировка и доставка напрямую на склады FBA в Германии, Франции и Польше.",
                link: "/ru/amazon",
                cta: "Подробнее"
            },
            guide: {
                title: "Гид по доставке из Китая в Европу 2026: Цены, таможня и сроки",
                subtitle: "Ключевая логистическая база для европейских импортеров.",
                jumpTo: "Перейти к:",
                nav: {
                    "eu-sec1": "Варианты транзита",
                    "eu-sec2": "Таможня ЕС и НДС",
                    "eu-sec3": "Тарифы и пошлины",
                    "eu-sec4": "Категории товаров",
                    "eu-sec5": "Порты и хабы",
                    "eu-sec6": "Складской цикл",
                    "eu-sec7": "Страхование рисков"
                },
                sections: [
                    {
                        id: "eu-sec1",
                        title: "1. Варианты транзита: Самолет, Поезд, Корабль",
                        desc: "Три основных маршрута для отправки в Европу.",
                        items: [
                            { label: "Авиафрахт (6–10 дней)", text: "Идеально для электроники и срочного пополнения стока. Мы переупаковываем товар в Шэньчжэне, чтобы снизить объемный вес." },
                            { label: "Ж/Д перевозки (18–24 дня)", text: "Самый стабильный вариант для регулярных коммерческих грузов 100-2000 кг. Маршрут проходит через Дуйсбург и Малашевичи." },
                            { label: "Морские перевозки (35–45 дней)", text: "Максимальная экономия. Порты: Роттердам, Гамбург или Пирей (для быстрой доставки в Италию и Испанию)." }
                        ],
                        listStyle: "bullets"
                    },
                    {
                        id: "eu-sec2",
                        title: "2. Таможня ЕС: EORI, НДС и Преимущества DDP",
                        desc: "Единая таможенная территория ЕС позволяет грузам перемещаться без дополнительных проверок после оформления.",
                        items: [
                            { label: "Импортная пошлина", text: "Зависит от кода ТН ВЭД (HS Code) и рассчитывается от стоимости CIF (Товар+Страховка+Фрахт)." },
                            { label: "Импортный НДС (VAT)", text: "Начисляется поверх стоимости и пошлины. Варьируется (Германия 19%, Польша 23%, Италия 22%)." },
                            { label: "Номер EORI", text: "Обязателен для коммерческого импорта. Мы можем выступать вашим представителем на этапе оформления." },
                            { label: "Преимущество DDP", text: "Все таможенные процедуры, пошлины и НДС оплачены нами заранее. Вы не получите сюрпризов при доставке." }
                        ],
                        listStyle: "bullets"
                    },
                    {
                        id: "eu-sec3",
                        title: "3. Тарифы на импорт: что вы платите",
                        items: [
                            { label: "Формула", text: "Итоговая стоимость = (Стоимость CIF + Пошлина) × (1 + Ставка НДС)." },
                            { label: "Антидемпинг", text: "ЕС применяет высокие спецпошлины на определенные товары (электровелосипеды, сталь, керамика). Мы проверяем это до заказа." },
                            { label: "Фиксированная цена", text: "При DDP мы берем на себя расчет полной себестоимости и фиксируем её. Вам не нужно заниматься математикой с налогами." }
                        ],
                        listStyle: "bullets"
                    },
                    {
                        id: "eu-sec4",
                        title: "4. Особенности доставки по категориям",
                        items: [
                            { label: "Электроника", text: "Требуется маркировка CE. Строгие правила для литиевых батарей (UN38.3). Мы проверяем сертификаты перед бронированием." },
                            { label: "Одежда", text: "Обязательна маркировка состава ткани на языке страны ЕС. Мы проверяем бирки, чтобы избежать остановки на таможне." },
                            { label: "Мебель", text: "Деревянная упаковка требует сертификации ISPM-15." },
                            { label: "EPR в Германии/Франции", text: "Для продажи электроники требуется регистрация Extended Producer Responsibility в местных органах." }
                        ],
                        listStyle: "bullets"
                    },
                    {
                        id: "eu-sec5",
                        title: "5. Ключевые порты и хабы",
                        items: [
                            { label: "Роттердам и Гамбург", text: "Главные ворота для Северной и Центральной Европы (для морских грузов)." },
                            { label: "Пирей", text: "Греческий хаб, идеально подходящий для ускоренной морской доставки в Южную Европу." },
                            { label: "Малашевичи", text: "Главный железнодорожный хаб в Польше для экспресс-поездов." },
                            { label: "Авиахабы", text: "Франкфурт — крупнейший карго-аэропорт Европы. Мы используем его, а также Амстердам и Париж." }
                        ],
                        listStyle: "bullets"
                    },
                    {
                        id: "eu-sec6",
                        title: "6. Складской цикл в Шэньчжэне",
                        items: [
                            { label: "1. Проверка", text: "Контроль качества, фото- и видеоотчет для каждой партии." },
                            { label: "2. Оптимизация", text: "Мы переупаковываем товар для снижения объемного веса." },
                            { label: "3. Документация", text: "Готовим все инвойсы, CE-сертификаты и упаковочные листы для европейской таможни." }
                        ],
                        listStyle: "none"
                    },
                    {
                        id: "eu-sec7",
                        title: "7. Страхование All-Risk",
                        desc: "Стандартная ответственность перевозчика ничтожна. Наша полная страховка покрывает 'Общую аварию', кражи, повреждения водой и случаи утери. Мы страхуем груз с момента прибытия на склад в Шэньчжэне и до вашей двери в ЕС."
                    }
                ],
                verdict: {
                    title: "Резюме HappyBox",
                    desc: "Работа с рынком Европы требует знаний о EORI, IOSS и стандартах безопасности CE. Мы предлагаем решение 'всё включено', чтобы вы могли сосредоточиться на продажах, не отвлекаясь на логистическую рутину и таможенные проверки."
                }
            }
        }
    };

    return (
        <DestinationTemplate
            language={language}
            setLanguage={setLanguage}
            onBack={onBack}
            onNavigate={onNavigate}
            content={fullContent as any}
        />
    );
};

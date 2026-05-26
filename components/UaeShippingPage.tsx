
import React from 'react';
import { Language } from '../utils/translations';
import { DestinationTemplate, DestinationContent } from './DestinationTemplate';
import { Check, ShieldCheck, Plane, Truck, Anchor, Box, Send, MapPin, ArrowRight, Camera, ShoppingBag, Globe } from 'lucide-react';

interface UaeShippingPageProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  onBack?: () => void;
  onNavigate?: (page: string) => void;
}

export const UaeShippingPage: React.FC<UaeShippingPageProps> = ({ language, setLanguage, onBack, onNavigate }) => {

    const content: Record<'en' | 'ru', DestinationContent> = {
        en: {
            badge: "UAE Direct Line",
            titlePrefix: "Shipping from China to",
            titleHighlight: "UAE",
            subtitle: <>Stop worrying about Dubai Customs, VAT registration, or supplier errors. We provide a seamless bridge between Chinese factories (or platforms like Poizon/1688) and your doorstep in the Emirates.</>,
            introTitle: "Your All-in-One Logistics Hub for the UAE",
            introText: "Whether you are an e-commerce entrepreneur in Dubai, a business owner in Abu Dhabi, or a private shopper in Sharjah, HappyBox provides a specialized DDP (Delivered Duty Paid) service. The HappyBox Promise: The price you pay includes all freight, customs clearance, and UAE import duties/VAT. No hidden fees, no surprise invoices from Aramex or DHL upon delivery.",
            methodsTitle: "Our Shipping Methods & Rates",
            methods: [
                {
                    icon: Plane,
                    title: "Priority Air",
                    tag: "Fast",
                    desc: "Electronics, Fashion & Poizon Orders.",
                    price: "From $12/kg",
                    speed: "5–9 days",
                    color: "bg-blue-100 text-blue-600"
                },
                {
                    icon: Anchor,
                    title: "Sea Freight",
                    tag: "Economical",
                    desc: "Bulk Stock, Furniture & Heavy Goods.",
                    price: "From $4/kg",
                    speed: "25–35 days",
                    color: "bg-teal-100 text-teal-600"
                }
            ],
            whyTitle: "Why UAE Importers Choose HappyBox",
            whyIntro: "We act as your local office in Shenzhen, ensuring your business runs smoothly without you ever needing to fly to China:",
            benefits: [
                {
                    icon: Box,
                    title: "Expertise in Brands (Poizon/Dewu)",
                    desc: "We are specialists in handling luxury sneakers and apparel. We ensure authentic packaging is preserved and extra protection is added for the journey to the UAE."
                },
                {
                    icon: ShoppingBag,
                    title: "Order Consolidation",
                    desc: "Buying from multiple 1688 sellers or Taobao? We combine everything into one shipment at our Shenzhen warehouse to minimize your \"first-mile\" costs."
                },
                {
                    icon: ShieldCheck,
                    title: "Strict Quality Inspection",
                    desc: "We provide high-resolution photos and videos. Don't find out your goods are wrong when they are already in Dubai."
                },
                {
                    icon: Truck,
                    title: "Nationwide Door-to-Door Delivery",
                    desc: "From our warehouse in Guangdong to any address in the UAE, including Ajman, Fujairah, and Ras Al Khaimah."
                }
            ],
            fearsTitle: "Solving Your Biggest Importing Fears",
            fearsList: [
                { q: "What if my supplier sends defective goods?", a: "Our Shenzhen warehouse is your quality buffer. Every shipment is inspected with photos and videos before it leaves China. Defective items go back to the factory immediately." },
                { q: "What if the cargo is lost or damaged?", a: "We provide All-Risk cargo insurance. If your goods are lost or damaged in transit, you receive a 100% refund of the declared value. No fine print." },
                { q: "Am I too small for you?", a: <>Our minimums are accessible: from <span className="bg-brand-yellow px-1.5 py-0.5 rounded text-brand-dark font-bold whitespace-nowrap">0.1 kg</span> for Air and from 1 CBM for Sea. Startups and established importers get the same service level.</> },
                { q: "What about delays?", a: "Chinese New Year, Golden Week, and Jebel Ali congestion are predictable. We plan your shipment calendar around them so you never run out of stock." }
            ],
            stepsTitle: "From China to UAE in 4 Steps",
            steps: [
                "Get your Shenzhen warehouse address",
                "Order from your suppliers",
                "We inspect, consolidate, and pack",
                "Pay and track to your door"
            ],
            cta: "Get a Free Shipping Quote",
            back: "Back to Home",
            crossPromo: [
                {
                    title: "Shipping Poizon (Dewu) items to Dubai?",
                    desc: "We specialize in branded goods from Poizon — careful double-box packaging, authenticity-safe handling, and fast air delivery to UAE.",
                    link: "poizon", 
                    action: "Learn More",
                    isPrimary: true
                },
                {
                    title: "Need to ship onward to Saudi Arabia, Qatar, or Kuwait?",
                    desc: "We handle GCC re-export from Dubai. Ask us about cross-border routing to the wider Gulf region.",
                    link: "#guide", 
                    action: "Learn More",
                    isPrimary: false
                }
            ],
            guide: {
                title: "China to UAE Shipping Guide 2026: Costs, Customs & Jebel Ali Operations",
                subtitle: "The UAE is a global logistics crossroad. To maintain a competitive edge, importers must understand the technical nuances of the China-UAE route, from volumetric calculations to Federal Customs Authority (FCA) compliance.",
                jumpTo: "Jump to chapter:",
                nav: {
                    "uae-sec1": "Jebel Ali Gateway",
                    "uae-sec2": "Customs Optimization",
                    "uae-sec3": "Shipping by Product Type",
                    "uae-sec4": "Calculating Volumetric Weight",
                    "uae-sec5": "US/EU vs. UAE Logistics",
                    "uae-sec6": "The Shenzhen-to-Dubai Workflow",
                    "uae-sec7": "Risk Mitigation"
                },
                sections: [
                    {
                        id: "uae-sec1",
                        title: "1. Strategic Sea Freight: The Jebel Ali Gateway",
                        desc: "Most sea freight from China enters the UAE through Jebel Ali (Port of Dubai), the largest man-made harbor in the world.",
                        items: [
                            { label: "LCL (Less than Container Load)", text: "Perfect for small businesses. We consolidate your cargo with others. You pay only for the volume (CBM) you occupy." },
                            { label: "FCL (Full Container Load)", text: "For large inventory runs. Direct sailings from Shekou or Yantian (Shenzhen) to Jebel Ali typically take 18–22 days on the water." },
                            { label: "Transhipment Hubs", text: "We utilize Dubai’s position as a hub. If you are re-exporting to Saudi Arabia or Oman, we can facilitate the transit via Dubai Free Zones." }
                        ],
                        listStyle: "bullets"
                    },
                    {
                        id: "uae-sec2",
                        title: "2. Customs Optimization: VAT & Duties in the Emirates",
                        desc: "While the UAE is known for being business-friendly, customs compliance is strictly enforced by the FCA.",
                        items: [
                            { label: "Customs Duty", text: "Generally 5% on the CIF value of most goods." },
                            { label: "Value Added Tax (VAT)", text: "A standard rate of 5% applies to the import of goods." },
                            { label: "Excise Tax", text: "Be aware that \"sin taxes\" (carbonated drinks, sweetened beverages, electronic smoking devices) carry high excise rates (50%–100%)." },
                            { label: "DDP Advantage", text: "Our DDP service handles the Customs Declaration and payment of all taxes upfront. You do not need to register for a UAE Tax Registration Number (TRN) to import with us." }
                        ],
                        listStyle: "bullets"
                    },
                    {
                        id: "uae-sec3",
                        title: "3. Shipping by Product Type: UAE Market Specifics",
                        desc: "The UAE market has unique demands that affect logistics packaging and documentation.",
                        items: [
                            { label: "Luxury & Sneakers (Poizon/Dewu)", text: "High demand in Dubai requires \"Double-Box\" protection. We ensure that original brand boxes (Nike, Yeezy, LV) are not crushed during air transit." },
                            { label: "Electronics & Mobile Accessories", text: "Shenzhen is the world's hub for tech. We handle Lithium Battery (UN38.3) compliance and ensure all power adapters meet UAE plug standards (Type G)." },
                            { label: "Furniture & Home Decor", text: "Often shipped from Foshan (near Shenzhen). We provide professional crating for fragile items like marble or glass to withstand sea freight vibrations." },
                            { label: "Cosmetics & Beauty", text: "Requires MOIAT (Ministry of Industry and Advanced Technology) or Dubai Municipality approval for commercial lots. We flag these requirements at the quoting stage." }
                        ],
                        listStyle: "bullets"
                    },
                    {
                        id: "uae-sec4",
                        title: "4. Calculating Volumetric Weight (Air Freight)",
                        desc: "In air logistics, space is as valuable as weight. Your billable weight is determined by the greater of the two.\n\nThe Formula:\nLength (cm) × Width (cm) × Height (cm) / 6000 = Volumetric Weight (kg)\n\nExample: A lightweight but large box of 50x50x50 cm will be charged as 20.8 kg, even if it only weighs 5 kg."
                    },
                    {
                        id: "uae-sec5",
                        title: "5. US/EU vs. UAE Logistics: Key Differences",
                        items: [
                            { label: "Speed", text: "Clearance in Dubai is often faster than in Los Angeles or Rotterdam, provided the paperwork is perfect." },
                            { label: "Last-Mile", text: "Delivery in the UAE relies heavily on mobile-based location sharing. Our local partners are experts in finding \"no-address\" locations in newer villa communities." }
                        ],
                        listStyle: "bullets"
                    },
                    {
                        id: "uae-sec6",
                        title: "6. The Shenzhen-to-Dubai Workflow",
                        items: [
                            { label: "1. Incoming QC", text: "Goods arrive at our Bao'an warehouse. We check for \"Made in China\" labels—mandatory for UAE customs." },
                            { label: "2. Repacking", text: "We remove unnecessary factory packaging to reduce volumetric weight and save you money." },
                            { label: "3. Export Clearance", text: "We handle the Chinese Customs export filing." },
                            { label: "4. Final Mile", text: "Once cleared in Dubai, your cargo is dispatched via local courier or truck directly to your location." }
                        ],
                        listStyle: "none"
                    },
                    {
                        id: "uae-sec7",
                        title: "7. Risk Mitigation: All-Risk Insurance",
                        desc: "Given the heat and humidity of the Middle East, we recommend All-Risk Insurance for sea freight. This covers:",
                        items: [
                            { label: "Damage from extreme temperatures during port dwell time." },
                            { label: "Theft or non-delivery." },
                            { label: "General Average (Maritime Law) protection." }
                        ],
                        listStyle: "bullets"
                    }
                ],
                verdict: {
                    title: "The HappyBox Verdict",
                    desc: "Succeeding in the UAE market requires a logistics partner who understands both Shenzhen supply chains and Jebel Ali customs. Let us handle the complexities so you can focus on growing your business in the Emirates."
                }
            }
        },
        ru: {
            badge: "Прямая линия в ОАЭ",
            titlePrefix: "Доставка из Китая в",
            titleHighlight: "ОАЭ",
            subtitle: <>Забудьте о сложностях с таможней Дубая, регистрацией НДС и ошибках поставщиков. Мы обеспечиваем надежный мост между китайскими фабриками (или платформами вроде Poizon/1688) и вашей дверью в Эмиратах.</>,
            introTitle: "Ваш единый логистический хаб в ОАЭ",
            introText: "Работаете ли вы в сфере e-commerce в Дубае, владеете бизнесом в Абу-Даби или заказываете для себя в Шардже — HappyBox предоставляет специализированный DDP сервис. Цена, которую вы платите, уже включает фрахт, растаможку, импортные пошлины ОАЭ и НДС. Никаких скрытых платежей и внезапных счетов от Aramex или DHL при доставке.",
            methodsTitle: "Методы доставки и тарифы",
            methods: [
                {
                    icon: Plane,
                    title: "Приоритетное Авиа",
                    tag: "Быстро",
                    desc: "Электроника, мода, брендовые товары и заказы с Poizon.",
                    price: "От $12/кг",
                    speed: "5–9 дней",
                    color: "bg-blue-50 text-brand-blue"
                },
                {
                    icon: Anchor,
                    title: "Морские перевозки",
                    tag: "Экономно",
                    desc: "Оптовые партии, мебель, тяжелые грузы и коммерческие запасы.",
                    price: "От $4/кг",
                    speed: "25–35 дней",
                    color: "bg-teal-50 text-teal-600"
                }
            ],
            whyTitle: "Почему импортеры в ОАЭ выбирают HappyBox",
            whyIntro: "Мы работаем как ваш локальный офис в Шэньчжэне, обеспечивая бесперебойную работу без необходимости летать в Китай:",
            benefits: [
                {
                    icon: Box,
                    title: "Экспертиза в брендовых товарах (Poizon/Dewu)",
                    desc: "Мы специализируемся на доставке люксовых кроссовок и одежды с Poizon. Оригинальные коробки упаковываются в дополнительный защитный слой — упаковка сохранна для ОАЭ."
                },
                {
                    icon: ShoppingBag,
                    title: "Консолидация заказов",
                    desc: "Покупаете у нескольких продавцов на 1688 или Taobao? Мы объединяем всё в одну посылку на нашем складе в Шэньчжэне, чтобы снизить ваши затраты на «первую милю»."
                },
                {
                    icon: ShieldCheck,
                    title: "Строгий контроль качества",
                    desc: "Делаем фото и видео в высоком разрешении до того, как товар покинет Китай. Не нужно узнавать, что товар с браком, уже в Дубае."
                },
                {
                    icon: MapPin,
                    title: "Доставка до двери по всем Эмиратам",
                    desc: "От склада в Шэньчжэне до вашего адреса в Дубае, Абу-Даби, Шардже, Аджмане, Фуджейре или Рас-эль-Хайме."
                }
            ],
            fearsTitle: "Решаем главные проблемы импорта",
            fearsList: [
                { q: "Что если поставщик пришлет брак?", a: "Наш склад — ваш фильтр качества. Мы проверяем каждую посылку перед отправкой из Китая. Брак возвращается производителю немедленно." },
                { q: "Что если груз потеряют или повредят?", a: "Мы предоставляем страховку All-Risk. При утере или повреждении в пути вы получаете 100% возврат заявленной стоимости. Без мелкого шрифта." },
                { q: "Подходит ли сервис для малого бизнеса?", a: <>Да. Наши лимиты: от <span className="bg-brand-yellow px-1.5 py-0.5 rounded text-brand-dark font-bold whitespace-nowrap">0.1 кг</span> для авиа и от 1 куба для моря. Стартапы получают тот же уровень сервиса, что и крупные импортеры.</> },
                { q: "Как быть с задержками?", a: "Праздники в Китае и загруженность порта Джебель-Али предсказуемы. Мы заранее планируем график, чтобы ваш сток всегда был полон." }
            ],
            stepsTitle: "Доставка из Китая в ОАЭ за 4 шага",
            steps: [
                "Получите адрес склада в Шэньчжэне",
                "Сделайте заказ у поставщиков",
                "Мы проверяем, консолидируем и упаковываем",
                "Оплачивайте и отслеживайте доставку до двери"
            ],
            cta: "Узнать стоимость доставки",
            back: "На главную",
            crossPromo: [
                {
                    title: "Доставляете товары с Poizon (Dewu) в Дубай?",
                    desc: "Мы профи в работе с брендами: двойная упаковка, бережное обращение и быстрая авиадоставка в ОАЭ.",
                    link: "poizon", 
                    action: "Подробнее",
                    isPrimary: true
                },
                {
                    title: "Нужен реэкспорт в Саудовскую Аравию, Катар или Кувейт?",
                    desc: "Мы занимаемся отправкой из Дубая по всему региону. Спросите нас о кросс-бордер маршрутах в страны Залива.",
                    link: "#guide",
                    action: "Подробнее",
                    isPrimary: false
                }
            ],
            guide: {
                title: "Гид по доставке из Китая в ОАЭ 2026: Цены, таможня и порт Джэбель-Али",
                subtitle: "ОАЭ — это глобальный логистический перекресток. Для сохранения конкурентного преимущества импортеры должны понимать технические нюансы маршрута Китай-ОАЭ: от расчетов объемного веса до требований Федеральной таможенной службы (FCA).",
                jumpTo: "Перейти к:",
                nav: {
                    "uae-sec1": "Порт Джэбель-Али",
                    "uae-sec2": "Оптимизация таможни",
                    "uae-sec3": "Типы товаров",
                    "uae-sec4": "Объемный вес",
                    "uae-sec5": "США/ЕС vs. ОАЭ",
                    "uae-sec6": "Складской цикл",
                    "uae-sec7": "Страхование рисков"
                },
                sections: [
                    {
                        id: "uae-sec1",
                        title: "1. Стратегический морской фрахт: Ворота Джэбель-Али",
                        desc: "Большая часть морских грузов из Китая поступает в ОАЭ через Джэбель-Али (порт Дубая) — крупнейшую искусственную гавань в мире.",
                        items: [
                            { label: "LCL (Сборный груз)", text: "Идеально для малого бизнеса. Мы объединяем ваш груз с другими. Вы платите только за реальный объем (CBM)." },
                            { label: "FCL (Полный контейнер)", text: "Для крупных партий. Прямые рейсы из Шэкоу или Яньтяня (Шэньчжэнь) в Джэбель-Али обычно занимают 18–22 дня." },
                            { label: "Транзитные хабы", text: "Мы используем Дубай как хаб. Если вы реэкспортируете в Саудовскую Аравию или Оман, мы организуем транзит через свободные зоны Дубая." }
                        ],
                        listStyle: "bullets"
                    },
                    {
                        id: "uae-sec2",
                        title: "2. Оптимизация таможни: НДС и пошлины в Эмиратах",
                        desc: "Хотя ОАЭ славится благоприятными условиями для бизнеса, соблюдение таможенных правил строго проверяется FCA.",
                        items: [
                            { label: "Таможенная пошлина", text: "Обычно составляет 5% от стоимости CIF для большинства товаров." },
                            { label: "НДС (VAT)", text: "Стандартная ставка 5% применяется при импорте товаров." },
                            { label: "Акцизный налог", text: "Имейте в виду, что \"налоги на грех\" (сладкие напитки, электронные сигареты) облагаются высокими акцизами (50%–100%)." },
                            { label: "Преимущество DDP", text: "Наш сервис DDP берет на себя оформление таможенной декларации и предварительную оплату всех налогов. Вам не нужно регистрировать налоговый номер (TRN) ОАЭ." }
                        ],
                        listStyle: "bullets"
                    },
                    {
                        id: "uae-sec3",
                        title: "3. Специфика доставки ОАЭ: по типу товаров",
                        desc: "Рынок ОАЭ имеет уникальные требования к логистической упаковке и сертификации.",
                        items: [
                            { label: "Кроссовки и обувь (Poizon/Dewu)", text: "Высокий спрос требует защиты Double-Box. Обувь брендов (Nike, Yeezy, LV) не будет повреждена во время транспортировки." },
                            { label: "Электроника и аксессуары", text: "Шэньчжэнь — мировая столица электроники. Мы соблюдаем правила перевозки батарей (UN38.3) и следим, чтобы вилки подходили для ОАЭ (Type G)." },
                            { label: "Мебель и декор", text: "Часто из Фошаня. Мы применяем профессиональную обрешетку (мрамор, стекло), чтобы они выдержали вибрации на море." },
                            { label: "Косметика и бьюти", text: "Требуют одобрения MOIAT или Муниципалитета Дубая. Мы определяем эти требования еще до отправки." }
                        ],
                        listStyle: "bullets"
                    },
                    {
                        id: "uae-sec4",
                        title: "4. Расчет объемного веса (Авиа)",
                        desc: "В авиалогистике пространство так же ценно, как и вес. Оплачиваемый вес определяется по наибольшему из двух.\n\nФормула:\nДлина (см) × Ширина (см) × Высота (см) / 6000 = Объемный вес (кг)\n\nПример: Легкая коробка размером 50x50x50 см будет оценена как 20.8 кг, даже если она весит всего 5 кг."
                    },
                    {
                        id: "uae-sec5",
                        title: "5. Ключевые отличия логистики: США/ЕС против ОАЭ",
                        items: [
                            { label: "Скорость", text: "Оформление в Дубае часто быстрее, чем в Лос-Анджелесе или Роттердаме (если бумажная работа выполнена безупречно)." },
                            { label: "Последняя миля", text: "Доставка в ОАЭ сильно зависит от геолокации. Наши локальные партнеры умеют находить «адреса без улиц» в комплексах вилл." }
                        ],
                        listStyle: "bullets"
                    },
                    {
                        id: "uae-sec6",
                        title: "6. Алгоритм Шэньчжэнь-Дубай",
                        items: [
                            { label: "1. Входящий контроль (QC)", text: "Товары приходят на наш склад в Баоань. Мы проверяем маркировку \"Made in China\" (обязательно для таможни ОАЭ)." },
                            { label: "2. Переупаковка", text: "Мы избавляемся от лишней заводской упаковки, чтобы уменьшить объемный вес." },
                            { label: "3. Экспортная очистка", text: "Мы занимаемся китайской экспортной декларацией." },
                            { label: "4. Последняя миля", text: "После растаможки в Дубае груз направляется в ваш адрес с помощью местного курьера или грузового авто." }
                        ],
                        listStyle: "none"
                    },
                    {
                        id: "uae-sec7",
                        title: "7. Снижение рисков: Полная страховка (All-Risk Insurance)",
                        desc: "Из-за жары и влажности Ближнего Востока мы рекомендуем вариант страховки All-Risk для морских перевозок. Она покрывает:",
                        items: [
                            { label: "Повреждения из-за экстремальной температуры во время простоя в порту." },
                            { label: "Кражу или недоставку товара." },
                            { label: "Защиту в случае «общей аварии» (Морское Право)." }
                        ],
                        listStyle: "bullets"
                    }
                ],
                verdict: {
                    title: "Вердикт HappyBox",
                    desc: "Успех на рынке ОАЭ требует партнера по логистике, который отлично разбирается в цепях поставок из Шэньчжэня и в таможне Джебель-Али. Предоставьте все сложности нам, а сами сосредоточьтесь на расширении вашего бизнеса в Эмиратах."
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
            content={content}
        />
    );
};



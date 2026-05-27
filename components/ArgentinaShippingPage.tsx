import React from 'react';
import { Plane, Ship, Check, ShieldCheck, Box, HelpCircle } from 'lucide-react';
import { DestinationTemplate, DestinationContent } from './DestinationTemplate';
import { Language } from '../utils/translations';

interface ArgentinaShippingPageProps {
    language: Language;
    setLanguage: (lang: Language) => void;
    onBack: () => void;
    onNavigate: (page: string) => void;
}

export const ArgentinaShippingPage: React.FC<ArgentinaShippingPageProps> = ({
    language,
    setLanguage,
    onBack,
    onNavigate
}) => {
    const fullContent: Record<'en' | 'ru', DestinationContent> = {
        en: {
            badge: "Argentina-Direct Line",
            titlePrefix: "Shipping from China to",
            titleHighlight: "Argentina",
            subtitle: "Secure Door-to-Door DDP Logistics. Bypass the complex bureaucracy of Argentine customs, unpredictable import taxes, and endless paperwork.",
            introTitle: "Stress-Free Delivery directly to Your Doorstep",
            introText: "Whether you are an individual buying home furniture from Foshan, an online entrepreneur sourcing e-commerce stock, or a company importing industrial samples, we take care of everything. We deliver across the country, from metro Buenos Aires, Córdoba, and Rosario to Mendoza and Patagonia.",
            methodsTitle: "Our Shipping Methods & Rates",
            methods: [
                {
                    icon: Plane,
                    title: "Priority Air",
                    tag: "Fast",
                    desc: "Personal parcels, electronics, fashion & urgent samples.",
                    price: "From $14/kg",
                    speed: "7–12 days",
                    color: "bg-blue-100 text-blue-600"
                },
                {
                    icon: Ship,
                    title: "Ocean Freight",
                    tag: "Economical",
                    desc: "Heavy machinery, furniture, home renovations & bulk LCL.",
                    price: "From $1.8/kg",
                    speed: "40–50 days",
                    color: "bg-teal-100 text-teal-600"
                }
            ],
            whyTitle: "Why Importers & Personal Shoppers Choose HappyBox",
            whyIntro: "All our shipping channels to Argentina operate strictly on a DDP (Delivered Duty Paid) basis. The price we quote includes international freight, warehouse handling, customs broker fees, and 100% of Argentine import duties, VAT (IVA), and statistical fees. No surprise bills, no AFIP holdups.",
            benefits: [
                {
                    icon: ShieldCheck,
                    title: "No Customs Drama",
                    desc: "Argentina's customs (Aduana) is notoriously difficult. Our DDP service handles the entire clearance process under our import licenses. You don't need to hire a private Despachante de Aduana."
                },
                {
                    icon: Box,
                    title: "Free Warehouse Consolidation",
                    desc: "Shop from Taobao, 1688, or multiple factories on Alibaba. We collect your packages at our Shenzhen hub, check them, and consolidate them into a single shipment to reduce your total cost."
                },
                {
                    icon: Check,
                    title: "No CUIT/CUIL Limitations for Small Parcels",
                    desc: "If you are buying personal goods, we help navigate the complex private courier and postal restrictions so you don't exhaust your strict annual import quotas."
                },
                {
                    icon: HelpCircle,
                    title: "Pre-Shipment Quality Check",
                    desc: "We inspect your items and send photos/videos before they leave China. Returning a defective product from Argentina back to China is practically impossible—we catch errors at the source."
                }
            ],
            fearsTitle: "Frequently Asked Questions",
            fearsList: [
                {
                    q: "How is volumetric weight calculated?",
                    a: "Air cargo and local Argentine delivery networks utilize the standard volumetric formula to assess billable weight. The formula is: Length × Width × Height (cm) / 5000 or 6000 = Volumetric Weight (kg)."
                },
                {
                    q: "Do I have to pay Argentine IVA or duties?",
                    a: "No! All shipments are DDP (Delivered Duty Paid). We cover all import duties, VAT (IVA), and statistical fees. You receive the package cleared."
                },
                {
                    q: "What if it gets lost or damaged on the ocean?",
                    a: "Because shipments to Argentina travel vast distances, we highly recommend our All-Risk Insurance. It covers 100% of the declared cargo value against maritime loss or handling damage."
                }
            ],
            stepsTitle: "The Shenzhen-to-Argentina Workflow",
            steps: [
                "Get Your Address: We provide you with your personal shipping address for our Shenzhen warehouse.",
                "Order Your Items: Put this address into Taobao, 1688, or give it to your supplier.",
                "QC & Combine: When your boxes arrive, we take photos, verify the contents, and consolidate them.",
                "Delivery: Once cleared in Buenos Aires, we deliver via local couriers to your door."
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
                title: "China to Argentina Logistics Guide 2026: Customs, CIF Valuation & Tax Compliance",
                subtitle: "Shipping to Argentina requires navigating one of the most protected trade zones in Latin America. This guide breaks down the technicalities of the China-to-Argentina shipping route.",
                jumpTo: "Jump to chapter:",
                nav: {
                    "ar-sec1": "Routing",
                    "ar-sec2": "CIF Valuation",
                    "ar-sec3": "Courier vs. Formal",
                    "ar-sec4": "Specialized Cargo",
                    "ar-sec5": "Inventory Buffer",
                    "ar-sec6": "Volumetric Weight",
                    "ar-sec7": "Insurance"
                },
                sections: [
                    {
                        id: "ar-sec1",
                        title: "1. Strategic Routing: Air Hubs and Port Access",
                        items: [
                            { label: "Air Freight Routes", text: "Flights depart from Shenzhen, Guangzhou, or Hong Kong, arriving at Ministro Pistarini International Airport (EZE) in Buenos Aires. Transit takes 7–12 days including connection hubs." },
                            { label: "Ocean Freight Routes", text: "Cargo moves from South China ports via major maritime lanes to the Port of Buenos Aires. Due to South Atlantic routing, transit times range between 40–50 days door-to-door." }
                        ],
                        listStyle: "bullets"
                    },
                    {
                        id: "ar-sec2",
                        title: "2. The CIF Valuation Method: How Taxes Are Calculated",
                        desc: "Unlike the US, Argentina calculates import duties and taxes on the CIF (Cost, Insurance, and Freight) value, not just the product cost.",
                        items: [
                            { label: "The Tax Base", text: "If your goods cost $1,000, shipping is $150, and insurance is $20, Argentina applies duties to the total $1,170." },
                            { label: "The Tax Stack", text: "On top of the base Ad Valorem duty (0% to 35%), a 21% Standard VAT (IVA), an additional VAT (10%-20%), and a Statistical Fee (Tasa Estadística) are applied." },
                            { label: "Our Solution", text: "HappyBox simplifies this by calculating a flat, predictable per-kilogram or per-CBM rate that covers this entire tax stack automatically via DDP." }
                        ],
                        listStyle: "bullets"
                    },
                    {
                        id: "ar-sec3",
                        title: "3. Courier vs. Formal Commercial Entry",
                        desc: "Argentina maintains strict separate tracks for importing:",
                        items: [
                            { label: "Courier Regime (Pequeños Envíos)", text: "Restricted to max 50kg per shipment and up to $1,000 USD (some formal exceptions up to $3,000). Max 3 units of the same product class per box." },
                            { label: "Formal Commercial Cargo", text: "Requires a licensed customs broker and strict registration with the tax authority." },
                            { label: "How We Help", text: "We optimize your cargo profiling in Shenzhen. If you have a bulk order, we split or manage the shipment under the correct legal framework to ensure smooth customs clearance." }
                        ],
                        listStyle: "bullets"
                    },
                    {
                        id: "ar-sec4",
                        title: "4. Specialized Cargo: Lithium Batteries & Electronics",
                        items: [
                            { label: "Electronics & Cell Phones", text: "Revisions to local decrees have lowered or eliminated import duties on specific electronics, but inspection remains high." },
                            { label: "Lithium Batteries (HS 8507.60)", text: "Shipments containing batteries require strict adherence to international safety standards. We manage MSDS and UN38.3 documentation through dedicated battery channels." }
                        ],
                        listStyle: "bullets"
                    },
                    {
                        id: "ar-sec5",
                        title: "5. Smart Inventory Buffer (Drip-Feeding for South America)",
                        desc: "Due to unstable local inflation and fluctuating freight costs, keeping large amounts of inventory locked up in Argentine warehouses can damage cash flow.",
                        items: [
                            { label: "The Solution", text: "Use our Shenzhen facility as your free/low-cost inventory buffer (up to 30 days free storage)." },
                            { label: "The Execution", text: "We 'drip-feed' your stock to Buenos Aires in optimized batches via air or sea based on your exact demand, keeping local overhead minimal." }
                        ],
                        listStyle: "bullets"
                    },
                    {
                        id: "ar-sec6",
                        title: "6. Volumetric Weight Calculation",
                        items: [
                            { label: "The Formula", text: "Air cargo and local Argentine delivery networks utilize the standard volumetric formula: Length (cm) × Width (cm) × Height (cm) / 5000 or 6000 = Volumetric Weight (kg)." },
                            { label: "Repackaging", text: "Our warehouse team provides complimentary repackaging, removing empty factory packaging and compressing soft goods to save you money." }
                        ],
                        listStyle: "bullets"
                    },
                    {
                        id: "ar-sec7",
                        title: "7. Total Protection: All-Risk Cargo Insurance",
                        desc: "Because shipments to Argentina travel vast distances and go through intensive handling at South American transit hubs, we highly recommend our All-Risk Insurance. This insurance covers 100% of the declared value against maritime loss, damage from humidity, port pilferage, or local courier handling failures upon arrival. Your capital is completely protected with HappyBox."
                    }
                ]
            }
        },
        ru: {
            badge: "Прямая линия в Аргентину",
            titlePrefix: "Доставка из Китая в",
            titleHighlight: "Аргентину",
            subtitle: "Надежная DDP доставка до двери. Забудьте о сложной бюрократии аргентинской таможни, непредсказуемых налогах и бесконечных бумагах.",
            introTitle: "Доставка без стресса",
            introText: "Независимо от того, покупаете ли вы мебель для дома из Фошаня, товары для e-commerce или импортируете промышленные образцы — мы берем всё на себя. Доставляем по всей стране: Буэнос-Айрес, Кордова, Росарио, Мендоса и Патагония.",
            methodsTitle: "Наши способы доставки и тарифы",
            methods: [
                {
                    icon: Plane,
                    title: "Авиадоставка",
                    tag: "Быстро",
                    desc: "Посылки, электроника, одежда и срочные образцы.",
                    price: "От $14/кг",
                    speed: "7–12 дней",
                    color: "bg-blue-50 text-brand-blue"
                },
                {
                    icon: Ship,
                    title: "Морская Перевозка",
                    tag: "Экономно",
                    desc: "Оборудование, мебель, ремонт и сборные грузы (LCL).",
                    price: "От $1.8/кг",
                    speed: "40–50 дней",
                    color: "bg-teal-50 text-teal-600"
                }
            ],
            whyTitle: "Почему импортеры выбирают HappyBox",
            whyIntro: "Все наши каналы доставки в Аргентину работают строго по системе DDP (Delivered Duty Paid). Цена, которую мы называем, включает международный фрахт, складскую обработку, услуги брокера и 100% аргентинских пошлин, НДС (IVA) и статистических сборов. Никаких задержек от AFIP.",
            benefits: [
                {
                    icon: ShieldCheck,
                    title: "Никаких проблем с таможней (Aduana)",
                    desc: "Аргентинская таможня известна своей сложностью. Наш сервис DDP берет на себя весь процесс оформления под наши импортные лицензии. Вам не нужно нанимать своего Despachante de Aduana."
                },
                {
                    icon: Box,
                    title: "Бесплатная консолидация на складе",
                    desc: "Покупайте на Taobao, 1688 или фабриках Алибабы. Мы соберем ваши посылки в Шэньчжэне, проверим и объединим в одну партию для снижения затрат."
                },
                {
                    icon: Check,
                    title: "Без ограничений CUIT/CUIL для мелких посылок",
                    desc: "Если вы покупаете личные вещи, мы поможем обойти сложные курьерские и почтовые ограничения, чтобы вы не исчерпали свои строгие годовые квоты на импорт."
                },
                {
                    icon: HelpCircle,
                    title: "Проверка качества перед отправкой",
                    desc: "Мы проверяем товары и отправляем фото/видео до того, как они покинут Китай. Вернуть бракованный продукт из Аргентины в Китай практически невозможно — мы ловим ошибки на месте."
                }
            ],
            fearsTitle: "Частые вопросы",
            fearsList: [
                {
                    q: "Как рассчитывается объемный вес?",
                    a: "Авиакомпании и местные службы логистики используют формулу: Длина × Ширина × Высота (см) / 5000 (или 6000) = Объемный вес (кг). Вы платите за большее значение."
                },
                {
                    q: "Нужно ли мне платить аргентинский НДС (IVA) или пошлины?",
                    a: "Нет! Вся наша логистика в Аргентину — это DDP. Мы сами оплачиваем аргентинские пошлины, налоги и сборы."
                },
                {
                    q: "Что если груз будет потерян или поврежден на море?",
                    a: "Доставка в Южную Америку — это огромное расстояние. Мы предоставляем страховку All-Risk, покрывающую 100% стоимости товара от потерь и повреждений."
                }
            ],
            stepsTitle: "Как работает доставка в Аргентину",
            steps: [
                "Получите свой адрес: Мы выдаем вам персональный адрес нашего склада в Шэньчжэне.",
                "Сделайте заказ: Укажите этот адрес на Taobao, 1688 или передайте своему поставщику.",
                "Проверка: Мы делаем фото, проверяем содержимое и объединяем посылки в одну.",
                "Доставка: После успешной растаможки в Буэнос-Айресе мы передаем груз местным курьерам."
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
                title: "Гид по логистике в Аргентину 2026: Таможня, CIF и Налоги",
                subtitle: "Доставка в Аргентину требует понимания одной из самых защищенных торговых зон в Латинской Америке. В этом руководстве разбираем все технические аспекты.",
                jumpTo: "Перейти к:",
                nav: {
                    "ar-sec1": "Маршруты",
                    "ar-sec2": "Стоимость CIF",
                    "ar-sec3": "Курьер vs Коммерция",
                    "ar-sec4": "Специфичный груз",
                    "ar-sec5": "Буфер запасов",
                    "ar-sec6": "Объемный вес",
                    "ar-sec7": "Страхование"
                },
                sections: [
                    {
                        id: "ar-sec1",
                        title: "1. Стратегические маршруты: Авиа и Порты",
                        items: [
                            { label: "Авиадоставка", text: "Рейсы вылетают из Шэньчжэня или Гонконга и прибывают в аэропорт Министро Пистарини (EZE) в Буэнос-Айресе. Время в пути 7–12 дней с учетом пересадок." },
                            { label: "Морской фрахт", text: "Груз отправляется из портов Южного Китая в порт Буэнос-Айреса. Из-за маршрута через Южную Атлантику сроки доставки до двери составляют от 40 до 50 дней." }
                        ],
                        listStyle: "bullets"
                    },
                    {
                        id: "ar-sec2",
                        title: "2. Метод оценки CIF: Как рассчитываются налоги",
                        desc: "В отличие от США, Аргентина рассчитывает импортные пошлины и налоги на основе стоимости CIF (Стоимость, Страхование и Фрахт), а не только стоимости товара.",
                        items: [
                            { label: "Налоговая база", text: "Если ваши товары стоят $1,000, доставка $150, а страховка $20, Аргентина применяет пошлины к общей сумме в $1,170." },
                            { label: "Налоги сверху", text: "Поверх базовой пошлины (0–35%) начисляется 21% стандартного НДС (IVA), дополнительный НДС (10–20% для коммерческих партий) и статистический сбор." },
                            { label: "Решение HappyBox", text: "Мы упрощаем это, предлагая фиксированную ставку за кг или куб, которая автоматически покрывает весь этот налоговый стек (система DDP)." }
                        ],
                        listStyle: "bullets"
                    },
                    {
                        id: "ar-sec3",
                        title: "3. Курьерские отправления vs. Коммерческий импорт",
                        desc: "В Аргентине действуют строгие режимы импорта:",
                        items: [
                            { label: "Курьерский режим (Pequeños Envíos)", text: "Ограничен максимумом 50 кг на посылку и до 1,000 USD (иногда до 3,000 USD). Максимум 3 единицы одного и того же продукта в коробке." },
                            { label: "Коммерческий груз", text: "Требует лицензированного таможенного брокера и строгой регистрации в налоговых органах (AFIP)." },
                            { label: "Наша помощь", text: "Мы оптимизируем профилирование груза в Шэньчжэне. Дробим большие заказы или оформляем под правильным режимом для беспроблемной растаможки." }
                        ],
                        listStyle: "bullets"
                    },
                    {
                        id: "ar-sec4",
                        title: "4. Специфичный груз: Батареи и Электроника",
                        items: [
                            { label: "Электроника и телефоны", text: "Пересмотры местных указов снизили или отменили ввозные пошлины на конкретную электронику, но уровень физических проверок остается высоким." },
                            { label: "Литиевые батареи", text: "Партии с батареями требуют соблюдения стандартов безопасности. Мы обрабатываем документы MSDS и UN38.3." }
                        ],
                        listStyle: "bullets"
                    },
                    {
                        id: "ar-sec5",
                        title: "5. Умный буфер запасов (Drip-Feeding)",
                        desc: "Из-за инфляции и колебаний стоимости фрахта хранение больших объемов запасов на складах в Аргентине может повредить вашему финансовому потоку.",
                        items: [
                            { label: "Решение", text: "Используйте наш склад в Шэньчжэне как бесплатный/недорогой буфер (до 30 дней бесплатно)." },
                            { label: "Исполнение", text: "Мы отправляем ваши запасы в Буэнос-Айрес небольшими партиями по морю или воздуху точно под ваш реальный спрос." }
                        ],
                        listStyle: "bullets"
                    },
                    {
                        id: "ar-sec6",
                        title: "6. Расчет Объемного Веса",
                        items: [
                            { label: "Формула", text: "Авиа карго использует стандартную формулу: Длина × Ширина × Высота (см) / 5000 (или 6000) = Объемный вес (кг)." },
                            { label: "Переупаковка", text: "Мы бесплатно убираем лишний заводской картон и сжимаем мягкие вещи для экономии ваших денег на доставке." }
                        ],
                        listStyle: "bullets"
                    },
                    {
                        id: "ar-sec7",
                        title: "7. Полная защита: Страхование All-Risk",
                        desc: "Поскольку грузы в Аргентину преодолевают огромные расстояния и проходят интенсивную обработку в хабах Южной Америки, мы настоятельно рекомендуем страховку All-Risk. Она покрывает 100% заявленной стоимости от морских потерь, намокания, краж в портах и ошибок местных курьеров."
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

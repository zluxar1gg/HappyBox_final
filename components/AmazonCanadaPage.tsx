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

interface AmazonCanadaPageProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  onBack?: () => void;
  onNavigate?: (page: string) => void;
}

export const AmazonCanadaPage: React.FC<AmazonCanadaPageProps> = ({ language, setLanguage, onBack, onNavigate }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const content = {
        en: {
            badge: "Amazon FBA Canada Logistics",
            titlePrefix: "Shipping from China to",
            titleHighlight: "Amazon FBA Canada",
            titleSuffix: ": Expert DDP & Prep Solutions",
            subtitle: "Expanding your business to Amazon.ca requires a partner who understands the complexity of Canadian customs and the vast geography of the Great White North. We provide a direct, stress-free link from your Chinese factory to every FBA warehouse in Canada.",
            
            seamlessTitle: "Seamless Delivery to Canadian Fulfillment Centers",
            seamlessText: "From YVR1 (Vancouver) to YYZ4 (Toronto) and YUL2 (Montreal), HappyBox ensures your inventory is cleared, prepped, and delivered without hidden fees or border delays.",
            ddpTitle: "Total DDP (Delivered Duty Paid)",
            ddpText: "We handle the CBSA (Canada Border Services Agency) clearance and pay all GST/HST and import duties upfront. You get one all-inclusive price.",
            minWeightTitle: "Shenzhen Prep Center",
            minWeightText: "We fix all labeling and packaging issues at the source, ensuring your goods meet 100% of Amazon.ca’s inbound requirements.",

            ratesTitle: "Our Amazon Canada Shipping Rates & Methods",
            ratesAir: { method: "Direct Air FBA", price: "From $11/kg", time: "6–10 days", bestFor: "Product launches & stock-outs" },
            ratesFastSea: { method: "Sea + Rail (Fast)", price: "From $1.5/kg", time: "22–28 days", bestFor: "Balanced cost & speed to Ontario/Quebec" },
            ratesSea: { method: "Standard Ocean", price: "Volumetric Basis", time: "Varies", bestFor: "Optimized volumetric weight (L*W*H/5000)" },

            prepTitle: "Canada Specifics: Bilingual Labeling (English/French)",
            prepSubtitle: "Amazon.ca and Canadian federal law (Consumer Packaging and Labelling Act) often require product info in English/French. Failing to comply risks rejected shipments.",
            prepItems: [
                { title: "Shenzhen Prep Advantage", desc: "We don’t just apply barcodes. We can print bilingual stickers or swap packaging at our Shenzhen warehouse." },
                { title: "Compliance Check", desc: "We verify if your category requires bilingual warnings or fiber content before leaving China." },
                { title: "Free Re-boxing", desc: "We provide compression services for soft goods to minimize your billable volumetric weight." },
                { title: "No Relabeling Costs in Canada", desc: "Save massive relabeling costs by preparing everything correctly at the source." }
            ],

            fearsTitle: "Solving Your Canadian FBA Fears",
            fears: [
                { q: "Will my goods get stuck at the border?", a: "The CBSA is known for rigorous inspections. We mitigate this by pre-auditing your Commercial Invoice and HS Codes in Shenzhen. We ensure your 'Made in China' markings are permanent and visible—the #1 reason for Canadian customs delays." },
                { q: "Is shipping to Toronto too expensive?", a: "Direct air to Toronto is costly. Our Sea + Rail consolidation allows you to pay 'West Coast' ocean rates while still getting your goods into the heart of Ontario’s FBA network." },
                { q: "What if my inventory is lost in the vast Canadian wilderness?", a: "Canada is huge. We use end-to-end tracking that covers the ocean crossing, the rail journey across the Rockies, and the final truck delivery to the FBA dock." }
            ],

            howTitle: "Expanded Technical Guide for Amazon Canada",
            steps: [
                { title: "1. The Vancouver Gateway (YVR)", desc: "90% of China-to-Canada sea freight enters through the Port of Vancouver. Fastest entry point for Western Canada hubs (YVR1, YVR2, YVR3)." },
                { title: "2. Multimodal Rail Link (Sea + Rail)", desc: "For warehouses in Ontario (YYZ region) and Quebec (YUL region), we utilize CP or CN Rail networks. Fast rail to the East." },
                { title: "3. CBSA & Tax Engineering", desc: "Canada has no 'De Minimis' for commercial FBA shipments. We handle GST (5%) and HST (up to 15%) as part of our DDP service." },
                { title: "4. Major FBA Hub Mapping", desc: "We optimize logistics for common destinations: YYZ4 (Brampton), YYZ7 (Milton), YUL2 (Montreal), and YVR1 (Delta)." }
            ],

            techTitle: "Technical Guide & Risk Management",
            techSubtitle: "Crucial logistics details for Amazon sellers importing to Canada.",
            techSections: [
                {
                    title: "5. ISPM-15 Pallet Standards",
                    text: "Canada is extremely strict about wood-boring pests.",
                    list: [
                        "We ensure all wooden pallets are Heat Treated (HT) with a visible IPPC stamp.",
                        "Prevents immediate rejection by the Canadian Food Inspection Agency (CFIA)."
                    ]
                },
                {
                    title: "6. Winter Logistics Resilience",
                    text: "Shipping to Canada in Q4 means dealing with sub-zero temperatures.",
                    list: [
                        "We use heavy-duty 5-ply cartons and reinforced wrapping.",
                        "Protects inventory from moisture and 'freeze-thaw' cycles during rail transit."
                    ]
                },
                {
                    title: "7. NRI (Non-Resident Importer) Support",
                    text: "You don't need a Canadian business entity to sell on Amazon.ca.",
                    list: [
                        "We act as the bridge, allowing you to import under our compliant structure.",
                        "Maintain full ownership of your inventory without structural complexity."
                    ]
                },
                {
                    title: "8. Risk Mitigation: All-Risk Insurance",
                    text: "The journey from Shenzhen to Ontario is over 12,000 km. We offer All-Risk Insurance covering:",
                    list: [
                        "Rail Transit Risks: Protection against shifting or vibration damage.",
                        "Theft & Non-Delivery: Full reimbursement of the declared value.",
                        "Customs Holds: Professional intervention if the CBSA requests physical inspection."
                    ]
                }
            ],

            extraSections: [
                {
                    icon: Clock,
                    title: "Smart Inventory: Drip-Feeding for Amazon.ca",
                    text: "Storage fees in Canadian fulfillment centers are among the highest in the world during the holiday peak.",
                    list: [
                        "Avoid the Trap: Don't fall for the 'Q4 Storage Trap.' Store bulk inventory in our Shenzhen facility for free or at a fraction of the cost.",
                        "Agile Restocking: We 'drip-feed' 50–100 kg batches via Air or Fast Sea as your stock levels dip.",
                        "Keep Overhead Zero: Ensure you never run out of 'Prime' eligibility while keeping Canadian overhead low."
                    ]
                },
                {
                    icon: Battery,
                    title: "Specialized Cargo: Batteries & Hazmat",
                    text: "Certified for safe Lithium Battery transport to Canada.",
                    list: [
                        "ISED Compliance: Ensure all Innovation, Science and Economic Development Canada documentation is ready.",
                        "Standards Met: We handle UN38.3 and MSDS for electronics and toys so you avoid delays.",
                        "Prep at Source: We ensure your items have proper warning labels before they even leave Shenzhen."
                    ]
                },
                {
                    icon: Scale,
                    title: "Oversize & Heavy Items",
                    text: "Selling furniture or gym equipment on Amazon.ca?",
                    list: [
                        "Heavy-Duty Prep: We apply the mandatory 'Team Lift' or 'Mechanical Lift' labels required by Canadian health and safety regulations.",
                        "Regulations Compliance: Safety checks applied for cartons over 22.5 kg.",
                        "Specialized Transport: Moving heavy items efficiently across the entire Canadian landscape via ground freight network."
                    ]
                }
            ],
            
            cta: "Get an FBA Canada Shipping Quote",
            back: "Back to Home"
        },
        ru: {
            badge: "Логистика Amazon FBA Канада",
            titlePrefix: "Доставка из Китая на",
            titleHighlight: "Amazon FBA Канада",
            titleSuffix: ": Экспертный DDP & Преп-центр",
            subtitle: "Выход на Amazon.ca требует партнера, который понимает сложность таможни Канады (CBSA) и географию страны. Мы обеспечиваем прямую доставку от фабрики до любого склада FBA в Канаде без лишнего стресса.",
            
            seamlessTitle: "Бесшовная доставка на канадские FBA центры",
            seamlessText: "От YVR1 (Ванкувер) до YYZ4 (Торонто) и YUL2 (Монреаль). HappyBox гарантирует, что ваши товары будут очищены, подготовлены и доставлены без скрытых платежей и задержек на границе.",
            ddpTitle: "Полный DDP (Delivered Duty Paid)",
            ddpText: "Мы берем на себя оформление на таможне CBSA и заранее оплачиваем GST/HST и пошлины. Вы получаете итоговую стоимость \"всё включено\".",
            minWeightTitle: "Преп-центр в Шэньчжэне",
            minWeightText: "Решаем все вопросы с этикетками и упаковкой прямо у источника, гарантируя 100% соответствие требованиям Amazon.ca.",

            ratesTitle: "Наши тарифы и методы доставки в Канаду",
            ratesAir: { method: "Прямое Авиа FBA", price: "От $11/кг", time: "6–10 дней", bestFor: "Запуски и срочное пополнение" },
            ratesFastSea: { method: "Море + Ж/Д (Быстро)", price: "От $1.5/кг", time: "22–28 дней", bestFor: "Баланс цены и скорости в Онтарио/Квебек" },
            ratesSea: { method: "Стандартное Море", price: "По объему", time: "Вариативно", bestFor: "Оптимизация объемного веса" },

            prepTitle: "Специфика Канады: Двуязычные этикетки (Англ/Фр)",
            prepSubtitle: "Amazon.ca и Канадский закон часто требуют информацию на двух языках. Несоблюдение ведет к отказу или блокировке листингов.",
            prepItems: [
                { title: "Преимущество Шэньчжэня", desc: "Мы не просто клеим штрих-коды. Наносим двуязычные стикеры или меняем упаковку на складе в Шэньчжэне." },
                { title: "Комплаенс-чеки", desc: "Помогаем проверить, нужны ли вашей категории (игрушки, текстиль, электроника) особые предупреждения." },
                { title: "Бесплатная переупаковка", desc: "Мы сжимаем мягкие товары для минимизации вашего расчетного объемного веса." },
                { title: "Никаких трат в Канаде", desc: "Сэкономьте огромные суммы на релейблинге на территории Канады." }
            ],

            fearsTitle: "Решаем страхи доставки на Amazon FBA Канады",
            fears: [
                { q: "Застрянет ли груз на границе?", a: "CBSA очень строги. Мы минимизируем риск через пре-аудит инвойсов и кодов ТН ВЭД (HS) в Шэньчжэне. Также строго следим за долговечной маркировкой 'Made in China'." },
                { q: "Не слишком ли дорого везти в Торонто?", a: "Прямое авиа в Торонто дорогое. Наш мультимодальный путь 'Море + Ж/Д' позволяет платить по тарифам 'Западного побережья' и доставлять вглубь сети FBA в Онтарио." },
                { q: "Не потеряется ли товар в дикой Канаде?", a: "Канада огромна. Мы используем сквозной трекинг для океана, поездов через Скалистые горы и финального трака на рампу FBA." }
            ],

            howTitle: "Расширенный технический гид",
            steps: [
                { title: "1. Врата Ванкувера (YVR)", desc: "90% морских грузов из Китая проходят через порт Ванкувера. Наибыстрейший вход для YVR1, YVR2, YVR3." },
                { title: "2. Ж/Д: Море + Поезд", desc: "Для складов в Онтарио (YYZ) и Квебеке (YUL) мы используем сети CP/CN Rail. Быстро на Восток." },
                { title: "3. CBSA & Налоги", desc: "В Канаде коммерческие FBA грузы облагаются налогами. Мы берем на себя GST (5%) и HST (до 15%) в рамках DDP." },
                { title: "4. Топология хабов FBA", desc: "Оптимизируем пути для самых популярных точек: YYZ4 (Брамптон), YYZ7 (Милтон), YUL2 (Монреаль) и YVR1 (Дельта)." }
            ],

            techTitle: "Техническое руководство и Риски",
            techSubtitle: "Важные транспортные детали для продавцов Amazon при импорте в Канаду.",
            techSections: [
                {
                    title: "5. Стандарты паллет ISPM-15",
                    text: "Канада очень строга к вредителям в древесине.",
                    list: [
                        "Мы гарантируем, что деревянные паллеты на 100% термообработаны (HT) и имеют штамп IPPC.",
                        "Предотвращает немедленный отказ от агентства CFIA."
                    ]
                },
                {
                    title: "6. Зимняя устойчивость логистики",
                    text: "Доставка в Q4 подразумевает суровые морозы.",
                    list: [
                        "Используем усиленные 5-слойные коробки.",
                        "Защищаем от влаги и циклов замерзания-оттаивания при путешествии поездом."
                    ]
                },
                {
                    title: "7. Поддержка NRI (Импортер-нерезидент)",
                    text: "Вам не нужно регистрировать компанию в Канаде для торговли.",
                    list: [
                        "Мы выступаем мостом для легального импорта под нашей структурой.",
                        "Вы сохраняете полное право собственности на товар без сложностей."
                    ]
                },
                {
                    title: "8. Минимизация рисков: Страхование",
                    text: "Путь от Шэньчжэня до Онтарио - 12,000 км. Наше страхование All-Risk Insuarance покрывает:",
                    list: [
                        "Сход с рельс/Вибрация: защита от повреждений в пути.",
                        "Кражи: полная компенсация заявленной стоимости.",
                        "Проверки: решение проблем в случае инспекций CBSA."
                    ]
                }
            ],

            extraSections: [
                {
                    icon: Clock,
                    title: "Смарт Инвентарь: Drip-Feeding",
                    text: "Хранение в FBA Канаде в пиковый сезон самое дорогое.",
                    list: [
                        "Избегайте 'Ловушки Q4': храните объем партии товара у нас в Шэньчжэне (первые 30 дней бесплатно).",
                        "Agile подвоз: Отправляем партиями по 50-100 кг по воздуху или быстрому морю по мере падения стока.",
                        "Расходы на нуле: остаетесь Prime без конских затрат на канадские склады."
                    ]
                },
                {
                    icon: Battery,
                    title: "Батареи и Опасные грузы (Hazmat)",
                    text: "Мы сертифицированы для литиевых батарей.",
                    list: [
                        "ISED Комплаенс: подготавливаем документы для инновационного департамента.",
                        "MSDS и UN38.3: полная проверка для детских игрушек и электроники.",
                        "Преп-центр Шэньчжэня: правильные стикеры наклеены еще до отправки."
                    ]
                },
                {
                    icon: Scale,
                    title: "Крупногабарит и Оверсайз",
                    text: "Продаете фитнес-оборудование или мебель?",
                    list: [
                        "Специальный преп: наносим обязательные метки 'Team Lift' и 'Mechanical Lift' для коробок более 22.5кг.",
                        "Охрана труда: 100% соответствие Health & Safety.",
                        "Доставка по земле: эффективная развозка оверсайза по широким просторам Канады."
                    ]
                }
            ],
            
            cta: "Рассчитать доставку в FBA Канады",
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
                <section className="py-12 lg:py-24 bg-cream relative overflow-hidden">
                    <div className="container mx-auto px-6 xl:px-0 max-w-5xl relative z-10 text-center">
                        <span className="inline-flex items-center justify-center bg-[#FF9900]/10 text-[#FF9900] px-5 py-2.5 rounded-full text-sm font-bold uppercase tracking-wider mb-8">
                            {t.badge}
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] text-brand-dark mb-8 tracking-tight">
                            {t.titlePrefix} <span className="text-orange-500 relative inline-block mx-2">
                                {t.titleHighlight}
                            </span><br className="hidden md:block" />
                            {t.titleSuffix.replace(/^:\s*/, '')}
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-600 mb-10 font-medium leading-relaxed max-w-3xl mx-auto">
                            {t.subtitle}
                        </p>
                    </div>
                </section>

                <section id="details" className="py-16 bg-white rounded-[50px] mb-8 container mx-auto shadow-sm px-6 lg:px-20 border border-gray-100">
                    <div className="max-w-4xl mx-auto space-y-12 text-gray-800 text-lg leading-relaxed">
                        
                        {/* Seamless Delivery */}
                        <div className="mb-20">
                            <div>
                                <h3 className="text-3xl font-extrabold text-brand-dark mb-4">{t.seamlessTitle}</h3>
                                <p className="text-lg text-base md:text-lg text-gray-700 font-medium leading-relaxed mb-6">{t.seamlessText}</p>
                            </div>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="font-bold text-brand-dark mb-1 text-lg leading-snug">{t.ddpTitle}</h4>
                                    <p className="text-base md:text-lg text-gray-700 font-medium leading-relaxed font-medium">{t.ddpText}</p>
                                </div>
                                <div>
                                    <h4 className="font-bold text-brand-dark mb-1 text-lg leading-snug">{t.minWeightTitle}</h4>
                                    <p className="text-base md:text-lg text-gray-700 font-medium leading-relaxed font-medium">{t.minWeightText}</p>
                                </div>
                            </div>
                        </div>

                        {/* Rates */}
                        <div className="mb-20">
                            <h3 className="text-2xl font-extrabold text-brand-dark mb-10 text-center uppercase tracking-widest opacity-80">
                                {t.ratesTitle}
                            </h3>
                            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                                <div className="bg-white rounded-[30px] p-6 border-2 border-gray-100 shadow-sm flex flex-col">
                                    <h4 className="font-bold text-xl text-brand-dark mb-4">{t.ratesAir.method}</h4>
                                    <div className="space-y-4 font-medium text-gray-600 mb-6">
                                        <div className="flex justify-between border-b border-gray-50 pb-2">
                                            <span className="uppercase text-xs font-bold text-gray-400">Price</span>
                                            <span className="text-brand-blue font-bold">{t.ratesAir.price}</span>
                                        </div>
                                        <div className="flex justify-between border-b border-gray-50 pb-2">
                                            <span className="uppercase text-xs font-bold text-gray-400">Time</span>
                                            <span className="text-brand-dark">{t.ratesAir.time}</span>
                                        </div>
                                        <div className="flex justify-between border-b border-gray-50 pb-2">
                                            <span className="uppercase text-xs font-bold text-gray-400">Best For</span>
                                            <span className="text-brand-dark">{t.ratesAir.bestFor}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-white rounded-[30px] p-6 border-2 border-gray-100 shadow-sm flex flex-col">
                                    <h4 className="font-bold text-xl text-brand-dark mb-4">{t.ratesFastSea.method}</h4>
                                    <div className="space-y-4 font-medium text-gray-600 mb-6">
                                        <div className="flex justify-between border-b border-gray-50 pb-2">
                                            <span className="uppercase text-xs font-bold text-gray-400">Price</span>
                                            <span className="text-orange-600 font-bold">{t.ratesFastSea.price}</span>
                                        </div>
                                        <div className="flex justify-between border-b border-gray-50 pb-2">
                                            <span className="uppercase text-xs font-bold text-gray-400">Time</span>
                                            <span className="text-brand-dark">{t.ratesFastSea.time}</span>
                                        </div>
                                        <div className="flex justify-between border-b border-gray-50 pb-2">
                                            <span className="uppercase text-xs font-bold text-gray-400">Best For</span>
                                            <span className="text-brand-dark">{t.ratesFastSea.bestFor}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-white rounded-[30px] p-6 border-2 border-gray-100 shadow-sm flex flex-col">
                                    <h4 className="font-bold text-xl text-brand-dark mb-4">{t.ratesSea.method}</h4>
                                    <div className="space-y-4 font-medium text-gray-600 mb-6">
                                        <div className="flex justify-between border-b border-gray-50 pb-2">
                                            <span className="uppercase text-xs font-bold text-gray-400">Price</span>
                                            <span className="text-teal-600 font-bold">{t.ratesSea.price}</span>
                                        </div>
                                        <div className="flex justify-between border-b border-gray-50 pb-2">
                                            <span className="uppercase text-xs font-bold text-gray-400">Time</span>
                                            <span className="text-brand-dark">{t.ratesSea.time}</span>
                                        </div>
                                        <div className="flex justify-between border-b border-gray-50 pb-2">
                                            <span className="uppercase text-xs font-bold text-gray-400">Best For</span>
                                            <span className="text-brand-dark">{t.ratesSea.bestFor}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Bilingual Labeling */}
                        <div className="mb-20">
                            <div>
                                <h3 className="text-3xl font-extrabold text-brand-dark mb-4">{t.prepTitle}</h3>
                                <p className="text-lg text-base md:text-lg text-gray-700 font-medium leading-relaxed mb-8">{t.prepSubtitle}</p>
                            </div>
                            <div className="space-y-6">
                                {t.prepItems.map((item, idx) => (
                                    <div key={idx}>
                                        <h4 className="font-bold text-brand-dark mb-1 text-lg leading-snug">{item.title}</h4>
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

                        {/* Technical Guide 1-8 */}
                        <div className="mb-20">
                            <h3 className="text-3xl font-extrabold text-brand-dark mb-12">{t.howTitle}</h3>
                            <div className="space-y-10">
                                {t.steps.map((step, idx) => (
                                    <div key={idx} className="flex gap-4 sm:gap-6 items-start">
                                        <div className="w-10 h-10 rounded-full bg-orange-100 text-[#FF9900] font-black flex items-center justify-center flex-shrink-0 text-xl mt-1">
                                            {idx + 1}
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-2xl text-brand-dark mb-2 tracking-tight">{step.title.replace(/^\d+\.\s*/, '')}</h4>
                                            <p className="text-gray-700 font-medium leading-relaxed">{step.desc}</p>
                                        </div>
                                    </div>
                                ))}
                                {t.techSections.map((section, idx) => (
                                    <div key={idx + 4} className="flex gap-4 sm:gap-6 items-start">
                                        <div className="w-10 h-10 rounded-full bg-orange-100 text-[#FF9900] font-black flex items-center justify-center flex-shrink-0 text-xl mt-1">
                                            {idx + 5}
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

                        {/* Extra Sections */}
                        <div className="mb-20">
                            <div className="space-y-12">
                                {t.extraSections.map((sect, idx) => (
                                    <div key={idx}>
                                        <h4 className="font-bold text-2xl text-brand-dark mb-3 flex items-center gap-3">
                                            <sect.icon size={28} className="text-[#FF9900]" />
                                            {sect.title}
                                        </h4>
                                        <p className="text-base md:text-lg text-gray-700 font-medium leading-relaxed mb-4">{sect.text}</p>
                                        {sect.list && sect.list.length > 0 && (
                                            <div className="space-y-3 text-gray-700 font-medium">
                                                {sect.list.map((li, i) => {
                                                    const parts = li.split(': ');
                                                    const boldWord = parts.length > 1 ? parts[0] : null;
                                                    const rest = parts.length > 1 ? parts.slice(1).join(': ') : parts[0];
                                                    return (
                                                        <p key={i} className="mb-1">
                                                            {boldWord && <strong className="text-brand-dark">{boldWord}: </strong>} 
                                                            <span className="text-gray-600">{rest}</span>
                                                        </p>
                                                    );
                                                })}
                                            </div>
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
                    <Contact language={language} currentPage="amazon-canada" />
                </div>
                
                <SeoBlock language={language} onNavigate={onNavigate || (() => {})} currentPage="amazon-canada" />
                <Footer language={language} />
                <FloatingContact />
            </main>
        </div>
    )
}

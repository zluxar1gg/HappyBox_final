import React from 'react';
import { Plane, Anchor, ShoppingBag, ShieldCheck, Box, Send, FileCheck } from 'lucide-react';
import { Language } from '../utils/translations';
import { DestinationTemplate, DestinationContent } from './DestinationTemplate';

interface CaShippingPageProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  onBack?: () => void;
  onNavigate?: (page: string) => void;
}

export const CaShippingPage: React.FC<CaShippingPageProps> = ({ language, setLanguage, onBack, onNavigate }) => {
    
    const content: Record<'en' | 'ru', DestinationContent> = {
        en: {
            badge: "Canada Direct Line",
            titlePrefix: "Shipping from China to",
            titleHighlight: "Canada",
            subtitle: "Stop worrying about CBSA customs, GST/HST, and supplier mistakes. We provide a secure bridge between your Chinese manufacturers and your Canadian destination with 100% transparent pricing.",
            introTitle: "Seamless Logistics Across Canada",
            introText: "Whether you are shipping to Ontario, British Columbia, Quebec, Alberta, or any other province, HappyBox provides a streamlined logistics experience. We cover the entire country, from the Port of Vancouver to the Atlantic coast.",
            methodsTitle: "Our Shipping Methods & Rates",
            methods: [
                {
                    icon: Plane,
                    title: "Air Freight",
                    tag: "Electronics & Urgent",
                    desc: "Fast air transport for high-value or time-sensitive inventory.",
                    price: "From $11/kg",
                    speed: "6–10 days"
                },
                {
                    icon: Anchor,
                    title: "Sea Freight",
                    tag: "Bulk & Heavy Goods",
                    desc: "Cost-effective ocean routing for large wholesale orders and furniture.",
                    price: "From $1.5/kg",
                    speed: "20–35 days"
                }
            ],
            whyTitle: "HappyBox is the Top Choice for Canadian Importers",
            whyIntro: "We act as your local office in Shenzhen, handling the \"heavy lifting\" so you can focus on your Canadian sales:",
            benefits: [
                {
                    icon: Box,
                    title: "Order Consolidation",
                    desc: "We collect goods from multiple suppliers (1688, Alibaba, Taobao) at our Shenzhen warehouse and ship them as one cargo to significantly reduce your shipping costs."
                },
                {
                    icon: ShieldCheck,
                    title: "Strict Quality Inspection",
                    desc: "We provide photos, videos, and detailed checks before your cargo leaves China. If it's defective, we return it to the factory immediately—saving you the nightmare of international returns."
                },
                {
                    icon: FileCheck,
                    title: "Total Customs Management (DDP)",
                    desc: "We handle all CBSA paperwork and tax payments. You don't need a Canadian Import-Export account (BN) to receive your goods cleared and ready."
                },
                {
                    icon: Send,
                    title: "Nationwide Door-to-Door Delivery",
                    desc: "Final-mile delivery to any Canadian address or warehouse via trusted partners like Canada Post, UPS, or FedEx."
                }
            ],
            fearsTitle: "Frequently Asked Questions",
            fearsList: [
                {
                    q: "Do I need a Canadian Business Number (BN) to import?",
                    a: "No! With our DDP service, we act as the Importer of Record. You simply receive your goods at your door with no customs hassles."
                },
                {
                    q: "What about GST and HST?",
                    a: "All Canadian import duties, GST, and HST are included in our initial DDP quote. You will not receive any surprise tax bills later."
                },
                {
                    q: "Can you ship directly to Amazon FBA in Canada?",
                    a: "Yes, we ship to all major Canadian FBA centers (like YYZ4, YVR1) and ensure your shipment meets Amazon's strict labeling and pallet requirements."
                }
            ],
            stepsTitle: "How to Ship to Canada",
            steps: [
                "1. Send Goods to Shenzhen",
                "2. Free QC & Consolidation",
                "3. Pay DDP Invoice",
                "4. Receive Goods in Canada"
            ],
            cta: "Get a Free Shipping Quote",
            back: "Back to Home",
            amazonBlock: {
                titlePrefix: "Selling on",
                titleHighlight: "Amazon.ca",
                desc: "Learn about our specialized FBA prep and direct-to-warehouse logistics for Canadian sellers.",
                link: "amazon-canada",
                cta: "Contact FBA Expert"
            },
            guide: {
                      "title": "China to Canada Shipping Guide 2026: Costs, Customs & Transit Times",
                      "subtitle": "Shipping to Canada requires a strategic approach to geography. Most cargo enters via the West Coast and travels via the Canadian Pacific (CP) or Canadian National (CN) rail networks to reach the industrial heartland of Toronto and Montreal.",
                      "jumpTo": "Jump to:",
                      "nav": {
                                "sec1": "Sea Freight: Vancouver vs. Prince Rupert",
                                "sec2": "Canadian Taxes: GST, HST, and Duties",
                                "sec3": "Shipping to Amazon FBA Canada",
                                "sec4": "Product Type Compliance",
                                "sec5": "Calculating Volumetric Weight",
                                "sec6": "The Shenzhen-to-Canada Workflow",
                                "sec7": "Risk Mitigation: Insurance"
                      },
                      "sections": [
                                {
                                          "id": "ca-sec1",
                                          "title": "1. Strategic Sea Freight: Vancouver vs. Prince Rupert",
                                          "desc": "The choice of port determines your total lead time to the East Coast.",
                                          "items": [
                                                    {
                                                              "label": "Port of Vancouver",
                                                              "text": "The primary gateway for trans-Pacific trade. Direct sailings from Shenzhen (Yantian/Shekou) take approximately 14–18 days on the water."
                                                    },
                                                    {
                                                              "label": "Port of Prince Rupert",
                                                              "text": "Often less congested than Vancouver, providing a high-speed rail link directly to Chicago, Toronto, and Montreal."
                                                    },
                                                    {
                                                              "label": "LCL & FCL Options",
                                                              "text": "We offer Less than Container Load (LCL) for small businesses and Full Container Load (FCL) for high-volume importers."
                                                    }
                                          ]
                                },
                                {
                                          "id": "ca-sec2",
                                          "title": "2. Understanding Canadian Taxes: GST, HST, and Duties",
                                          "desc": "Unlike the US, where duties are the primary concern, Canada has a multi-layered tax system.",
                                          "items": [
                                                    {
                                                              "label": "Customs Duty",
                                                              "text": "Varies by HS Code (typically 0%–20%)."
                                                    },
                                                    {
                                                              "label": "GST (Goods and Services Tax)",
                                                              "text": "5% federal tax applied to the duty-paid value of the goods."
                                                    },
                                                    {
                                                              "label": "HST (Harmonized Sales Tax)",
                                                              "text": "In provinces like Ontario (13%) or the Maritimes (15%), GST and PST are combined."
                                                    },
                                                    {
                                                              "label": "The DDP Benefit",
                                                              "text": "With HappyBox, we calculate and pay these taxes on your behalf. You receive an all-inclusive invoice in USD or CAD, protecting you from fluctuating exchange rates and unexpected CBSA assessments."
                                                    }
                                          ]
                                },
                                {
                                          "id": "ca-sec3",
                                          "title": "3. Shipping to Amazon FBA Canada",
                                          "desc": "We specialize in the Canadian FBA network. We ensure your goods meet the specific labeling and palletization requirements for hubs such as:",
                                          "items": [
                                                    {
                                                              "label": "YYZ Region",
                                                              "text": "Toronto, Brampton, Mississauga, Milton."
                                                    },
                                                    {
                                                              "label": "YVR Region",
                                                              "text": "Vancouver, Delta, Richmond, New Westminster."
                                                    },
                                                    {
                                                              "label": "YOW/YUL Region",
                                                              "text": "Ottawa and Montreal."
                                                    },
                                                    {
                                                              "label": "FBA Prep",
                                                              "text": "Our Shenzhen warehouse provides FNSKU labeling and \"Carton Label\" application to avoid Amazon’s unplanned service fees."
                                                    }
                                          ]
                                },
                                {
                                          "id": "ca-sec4",
                                          "title": "4. Shipping by Product Type: Compliance for Canada",
                                          "items": [
                                                    {
                                                              "label": "Electronics",
                                                              "text": "Must comply with ISED (Innovation, Science and Economic Development Canada) standards. We verify battery documentation (MSDS/UN38.3) before air booking."
                                                    },
                                                    {
                                                              "label": "Health & Beauty",
                                                              "text": "Products regulated by Health Canada may require specific licensing. We flag these items early to ensure your shipment isn't held at the border."
                                                    },
                                                    {
                                                              "label": "Winter Gear & Apparel",
                                                              "text": "Canada has strict textile labeling laws (fiber content in English and French). We can assist with label inspection in Shenzhen."
                                                    },
                                                    {
                                                              "label": "Furniture",
                                                              "text": "Solid wood packaging must meet ISPM-15 standards (heat treatment) to prevent the introduction of pests into Canadian forests."
                                                    }
                                          ]
                                },
                                {
                                          "id": "ca-sec5",
                                          "title": "5. Calculating Volumetric Weight (Chargeable Weight)",
                                          "desc": "Canadian carriers use the standard volumetric formula to ensure fair pricing for bulky items.\n\nLength (cm) × Width (cm) × Height (cm) / 5000 = Volumetric Weight (kg)",
                                          "tip": "Pro-tip: If you are shipping lightweight items like pillows or plush toys, we use high-pressure vacuum packing in our warehouse to reduce volume by up to 50%."
                                },
                                {
                                          "id": "ca-sec6",
                                          "title": "6. The Shenzhen-to-Canada Workflow",
                                          "items": [
                                                    {
                                                              "label": "1. Consolidation",
                                                              "text": "We gather your orders from multiple 1688/Alibaba suppliers."
                                                    },
                                                    {
                                                              "label": "2. QC & Repacking",
                                                              "text": "We check for \"Made in China\" markings—mandatory for CBSA entry—and repack for the long journey."
                                                    },
                                                    {
                                                              "label": "3. Transit",
                                                              "text": "Air freight via Hong Kong or Sea freight via Yantian."
                                                    },
                                                    {
                                                              "label": "4. Clearance & Last Mile",
                                                              "text": "We clear customs in Vancouver or Toronto and dispatch via local courier to your door."
                                                    }
                                          ],
                                },
                                {
                                          "id": "ca-sec7",
                                          "title": "7. Risk Mitigation: All-Risk Insurance",
                                          "desc": "Given the harsh Canadian winters and the long rail journey from the coast, we recommend All-Risk Cargo Insurance. This covers:",
                                          "items": [
                                                    {
                                                              "label": "Theft and non-delivery.",
                                                              "text": ""
                                                    },
                                                    {
                                                              "label": "Damage during rail transit (vibration/shifting).",
                                                              "text": ""
                                                    },
                                                    {
                                                              "label": "General Average maritime losses.",
                                                              "text": ""
                                                    }
                                          ],
                                          "listStyle": "bullets"
                                }
                      ],
                      "verdict": {
                                "title": "Final Verdict: Why HappyBox for Canada?",
                                "desc": "We provide the physical presence in Shenzhen that digital-only brokers lack. From verifying HS codes to navigating the complexities of Canadian GST, our team ensures your supply chain remains resilient and cost-effective throughout 2026."
                      }
            }
        },
        ru: {
            badge: "Прямая линия в Канаду",
            titlePrefix: "Доставка из Китая в",
            titleHighlight: "Канаду",
            subtitle: "Забудьте о сложностях с таможней CBSA, расчетом GST/HST и ошибках поставщиков. Мы обеспечиваем надежный мост между вашими китайскими производителями и пунктом назначения в Канаде со 100% прозрачным ценообразованием.",
            introTitle: "Бесшовная логистика по всей Канаде",
            introText: "Онтарио, Британская Колумбия, Квебек, Альберта или любая другая провинция — HappyBox обеспечивает четкую доставку. Мы покрываем всю страну, от порта Ванкувера до Атлантического побережья.",
            methodsTitle: "Методы доставки и тарифы",
            methods: [
                {
                    icon: Plane,
                    title: "Авиафрахт",
                    tag: "Для срочных грузов",
                    desc: "Быстрая доставка по воздуху для электроники и товаров с высокой оборачиваемостью.",
                    price: "От $11/кг",
                    speed: "6–10 дней"
                },
                {
                    icon: Anchor,
                    title: "Морские перевозки",
                    tag: "Для опта и мебели",
                    desc: "Экономичная доставка морем для крупных сборных грузов и объемных товаров.",
                    price: "От $1.5/кг",
                    speed: "20–35 дней"
                }
            ],
            whyTitle: "Почему импортеры из Канады выбирают HappyBox",
            whyIntro: "Мы работаем как ваш локальный офис в Шэньчжэне и берем на себя всю «грязную работу», чтобы вы могли сфокусироваться на продажах:",
            benefits: [
                {
                    icon: Box,
                    title: "Консолидация заказов",
                    desc: "Мы собираем товары от разных поставщиков (1688, Alibaba) на нашем складе и отправляем единым грузом, значительно снижая ваши расходы на доставку."
                },
                {
                    icon: ShieldCheck,
                    title: "Строгий контроль качества",
                    desc: "Мы проводим фото и видео проверку до отправки груза из Китая. При обнаружении брака сразу возвращаем на фабрику."
                },
                {
                    icon: FileCheck,
                    title: "Полное управление таможней (DDP)",
                    desc: "Мы берем на себя оформление документов CBSA и уплату налогов (GST/HST). Вам не нужен канадский Import-Export account (BN)."
                },
                {
                    icon: Send,
                    title: "Доставка «до двери» по всей стране",
                    desc: "Доставка по любому канадскому адресу или на склад через проверенных партнеров: Canada Post, UPS или FedEx."
                }
            ],
            fearsTitle: "Частые вопросы",
            fearsList: [
                {
                    q: "Нужен ли мне канадский Business Number (BN) для импорта?",
                    a: "Нет! В рамках услуги DDP мы выступаем импортером. Вы просто получаете груз у своей двери без таможенной волокиты."
                },
                {
                    q: "Что насчет налогов GST и HST?",
                    a: "Все канадские пошлины, GST и HST уже включены в наш тариф DDP. Никаких внезапных счетов от налоговых органов."
                },
                {
                    q: "Вы доставляете напрямую на склады Amazon FBA в Канаде?",
                    a: "Да, мы доставляем на все крупные склады FBA (YYZ4, YVR1 и др.) с соблюдением строгих правил упаковки и маркировки Amazon."
                }
            ],
            stepsTitle: "Как начать работу",
            steps: [
                "1. Товар на наш склад",
                "2. Проверка и упаковка",
                "3. Оплата DDP",
                "4. Получение в Канаде"
            ],
            cta: "Узнать стоимость доставки",
            back: "На главную",
            amazonBlock: {
                titlePrefix: "Продаете на",
                titleHighlight: "Amazon.ca",
                desc: "Узнайте о наших специальных решениях для селлеров в Канаде — упаковка, маркировка FNSKU и доставка на FBA.",
                link: "amazon-canada",
                cta: "Связаться с экспертом по FBA"
            },
            guide: {
                      "title": "Гид по доставке из Китая в Канаду 2026: цены, таможня и сроки",
                      "subtitle": "Доставка в Канаду требует стратегического подхода к географии. Большинство грузов прибывает на Западное побережье и следует по железным дорогам Canadian Pacific (CP) или Canadian National (CN) в промышленные центры Торонто и Монреаля.",
                      "jumpTo": "Быстрый переход:",
                      "nav": {
                                "sec1": "Морской фрахт: Ванкувер против Принс-Руперта",
                                "sec2": "Налоги Канады: GST, HST и пошлины",
                                "sec3": "Доставка на Amazon FBA Канада",
                                "sec4": "Типы товаров и комплаенс",
                                "sec5": "Расчет объемного веса",
                                "sec6": "Складской цикл Шэньчжэнь-Канада",
                                "sec7": "Снижение рисков: Страхование"
                      },
                      "sections": [
                                {
                                          "id": "ca-sec1",
                                          "title": "1. Стратегия морских перевозок: Ванкувер против Принс-Руперта",
                                          "desc": "Выбор порта определяет общее время доставки до Восточного побережья.",
                                          "items": [
                                                    {
                                                              "label": "Порт Ванкувера",
                                                              "text": "Главные ворота транстихоокеанской торговли. Прямые рейсы из Шэньчжэня (Yantian/Shekou) занимают примерно 14–18 дней по воде."
                                                    },
                                                    {
                                                              "label": "Порт Принс-Руперта",
                                                              "text": "Часто менее загружен, чем Ванкувер, и обеспечивает скоростную железнодорожную связь напрямую с Чикаго, Торонто и Монреалем."
                                                    },
                                                    {
                                                              "label": "LCL & FCL",
                                                              "text": "Мы предлагаем сборные грузы (LCL) для малого бизнеса и полные контейнеры (FCL) для крупных импортеров."
                                                    }
                                          ]
                                },
                                {
                                          "id": "ca-sec2",
                                          "title": "2. Налоги Канады: GST, HST и пошлины (Duties)",
                                          "desc": "В отличие от США, где пошлины — главная проблема, в Канаде действует многоуровневая налоговая система.",
                                          "items": [
                                                    {
                                                              "label": "Таможенная пошлина (Customs Duty)",
                                                              "text": "Зависит от кода ТН ВЭД (HS Code), обычно 0%–20%."
                                                    },
                                                    {
                                                              "label": "GST (Налог на товары и услуги)",
                                                              "text": "5% федеральный налог, начисляемый на стоимость товара с учетом пошлины."
                                                    },
                                                    {
                                                              "label": "HST (Гармонизированный налог с продаж)",
                                                              "text": "В таких провинциях, как Онтарио (13%) или Приморских провинциях (15%), GST и PST объединены."
                                                    },
                                                    {
                                                              "label": "Преимущество DDP",
                                                              "text": "С HappyBox мы рассчитываем и оплачиваем эти налоги за вас. Вы получаете счет «все включено» в USD, что защищает от колебаний курсов валют и неожиданных счетов от CBSA."
                                                    }
                                          ]
                                },
                                {
                                          "id": "ca-sec3",
                                          "title": "3. Доставка на Amazon FBA Канада",
                                          "desc": "Мы специализируемся на сети канадских складов FBA. Мы следим за соблюдением требований к маркировке и паллетированию для таких хабов как:",
                                          "items": [
                                                    {
                                                              "label": "Регион YYZ",
                                                              "text": "Торонто, Брамптон, Миссиссога, Милтон."
                                                    },
                                                    {
                                                              "label": "Регион YVR",
                                                              "text": "Ванкувер, Дельта, Ричмонд, Нью-Вестминстер."
                                                    },
                                                    {
                                                              "label": "Регион YOW/YUL",
                                                              "text": "Оттава и Монреаль."
                                                    },
                                                    {
                                                              "label": "Преп-центр",
                                                              "text": "Наш склад в Шэньчжэне клеит штрихкоды FNSKU и этикетки на коробки, чтобы избежать незапланированных сборов от Amazon."
                                                    }
                                          ]
                                },
                                {
                                          "id": "ca-sec4",
                                          "title": "4. Специфика товаров: Сертификация в Канаде",
                                          "items": [
                                                    {
                                                              "label": "Электроника",
                                                              "text": "Должна соответствовать стандартам ISED. Мы проверяем документы на батареи (MSDS/UN38.3) до бронирования авиафрахта."
                                                    },
                                                    {
                                                              "label": "Здоровье и красота",
                                                              "text": "Товары, контролируемые Health Canada, могут требовать лицензирования. Мы заранее флагуем их, чтобы груз не застрял на границе."
                                                    },
                                                    {
                                                              "label": "Одежда и экипировка",
                                                              "text": "В Канаде строгие законы по маркировке текстиля (состав тканей на английском и французском). Поможем проверить ярлыки в Шэньчжэне."
                                                    },
                                                    {
                                                              "label": "Мебель",
                                                              "text": "Упаковка из цельного дерева должна соответствовать стандарту ISPM-15 (фумигация), чтобы предотвратить завоз вредителей."
                                                    }
                                          ]
                                },
                                {
                                          "id": "ca-sec5",
                                          "title": "5. Расчет объемного веса (Оплачиваемый вес)",
                                          "desc": "Канадские перевозчики используют стандартную объемную формулу для справедливой тарификации габаритных грузов.\n\nДлина (см) × Ширина (см) × Высота (см) / 5000 = Объемный вес (кг)",
                                          "tip": "Совет профи: Если вы везете легкие товары, например плюшевые игрушки или подушки, мы используем вакуумную пресс-упаковку на складе, чтобы уменьшить объем до 50%."
                                },
                                {
                                          "id": "ca-sec6",
                                          "title": "6. Складской цикл Шэньчжэнь-Канада",
                                          "items": [
                                                    {
                                                              "label": "1. Консолидация",
                                                              "text": "Мы собираем ваши заказы от разных поставщиков (1688/Alibaba)."
                                                    },
                                                    {
                                                              "label": "2. QC и переупаковка",
                                                              "text": "Мы проверяем наличие стикеров \"Made in China\" (обязательно для CBSA) и готовим груз к долгому пути."
                                                    },
                                                    {
                                                              "label": "3. Транзит",
                                                              "text": "Авиафрахт через Гонконг или морем через порты Южного Китая (Yantian)."
                                                    },
                                                    {
                                                              "label": "4. Таможня и последняя миля",
                                                              "text": "Мы очищаем груз в Ванкувере или Торонто и отправляем местным курьером до вашей двери."
                                                    }
                                          ],
                                },
                                {
                                          "id": "ca-sec7",
                                          "title": "7. Снижение рисков: All-Risk Страхование",
                                          "desc": "Учитывая суровые канадские зимы и длинный ж/д транзит, мы рекомендуем страховку All-Risk. Она покрывает:",
                                          "items": [
                                                    {
                                                              "label": "Кражу и недоставку.",
                                                              "text": ""
                                                    },
                                                    {
                                                              "label": "Повреждения при ж/д транзите (вибрации и смещения).",
                                                              "text": ""
                                                    },
                                                    {
                                                              "label": "Общую аварию на судне (General Average).",
                                                              "text": ""
                                                    }
                                          ],
                                          "listStyle": "bullets"
                                }
                      ],
                      "verdict": {
                                "title": "Итог: Почему HappyBox для Канады?",
                                "desc": "Мы предоставляем физическое присутствие в Шэньчжэне, которого нет у цифровых брокеров. От проверки кодов ТН ВЭД (HS Codes) до навигации по сложной системе канадского GST — наша команда делает вашу цепочку поставок надежной и выгодной в 2026 году."
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

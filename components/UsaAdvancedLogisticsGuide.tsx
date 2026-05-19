import React from 'react';
import { Language } from '../utils/translations';
import { Anchor, ShieldCheck, Scale, Calculator, Package, Info } from 'lucide-react';
import { TableWrapper } from './TableWrapper';

interface Props {
  language: Language;
  simplified?: boolean;
}

export const UsaAdvancedLogisticsGuide: React.FC<Props> = ({ language, simplified }) => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', `#${id}`);
    }
  };

  const content = {
    en: {
      title: "China to USA Shipping Guide 2026: Costs, Customs & Transit Times",
      subtitle: "Moving cargo from the manufacturing hubs of Guangdong to the US market requires more than just transport - it requires a strategic approach to customs, route selection, and tariff mitigation. This section provides the technical data needed for professional inventory planning.",
      jumpTo: "Jump to:",
      nav: {
        seaFreight: "Sea Freight Options",
        customs: "Customs & 321",
        tariffs: "Import Tariffs",
        productTypes: "Product Types",
        volumetric: "Volumetric Weight",
        ports: "US Ports",
        warehouse: "Warehouse Workflow",
        insurance: "Insurance"
      },
      fbaLinkText: "Amazon FBA Shipping Guide",
      fbaLinkDesc: "For Amazon FBA prep, labeling, and warehouse-specific routing - see our dedicated",
      sec1: {
        title: "1. Strategic Sea Freight: Matson vs. Standard Ocean",
        desc: "The choice of ocean carrier directly impacts your cash flow and stock-out risks. We categorize sea freight into three distinct tiers:",
        items: [
          {
            title: "Matson Express (CLX / CLX+)",
            sub: "The \"Gold Standard\" for e-commerce.",
            text: "Uses dedicated terminals in Long Beach (LBCT), bypassing general congestion. Transit time is typically 11–14 days port-to-port."
          },
          {
            title: "ZIM / EXX (Fast Ocean)",
            sub: "High-speed services with guaranteed space.",
            text: "Expedited unloading tailored for time-sensitive or seasonal inventory."
          },
          {
            title: "Standard LCL/FCL",
            sub: "COSCO, OOCL, MSC.",
            text: "The most economical route for non-urgent bulk goods. Average transit time: 30–45 days (West Coast) and 40–55 days (East Coast)."
          }
        ]
      },
      sec2: {
        title: "2. Customs Optimization: Section 321 and HS Code",
        desc: "Navigating US Customs and Border Protection (CBP) is the most critical stage of the supply chain.",
        items: [
          { strong: "Section 321 (De Minimis):", text: " For shipments valued under $800, goods can often enter the US duty-free. This is a vital strategy for direct-to-consumer (DTC) brands looking to minimize overhead." },
          { strong: "HS Code Accuracy:", text: " Every product requires a specific Harmonized System code. Misclassification can lead to \"List 301\" additional tariffs (up to 25%) or FDA/EPA holds. Our team verifies your codes against the Harmonized Tariff Schedule of the United States (HTSUS) before the cargo departs Shenzhen." },
          { strong: "ISF (10+2) Filing:", text: " For all ocean freight, the Importer Security Filing must be submitted at least 24 hours before the ship leaves China. Failure to do so results in a $5,000 fine from CBP. We automate this process for every shipment." }
        ]
      },
      sec3: {
        title: "3. US Import Tariffs in 2026: Know Your Costs Before You Order",
        desc: "Duties are calculated before your goods clear customs. Knowing your rate upfront prevents expensive surprises.",
        tableTitle: "How your duty rate is built:",
        th1: "Layer", th2: "What it is", th3: "Typical range",
        rows: [
          { col1: "MFN Duty", col2: "Base rate set by HS code", col3: "0–25%" },
          { col1: "Section 301", col2: "Additional tariff on Chinese goods", col3: "7.5–25%" },
          { col1: "2025–2026 additions", col2: "Category-specific surcharges", col3: "Varies" }
        ],
        bottom1: "These stack. A product at 12% MFN + 25% Section 301 = 37% combined duty on the declared customs value. On a $30,000 shipment, that's $11,100 in duties alone.",
        bottom2: "What we do: Before your cargo leaves Shenzhen, we calculate the full duty exposure for your specific HS code. With DDP shipping, that amount is included in your quote - no adjustments after clearance.",
        bottom3: "First Sale Valuation: If you buy through a trading company, US Customs may allow you to declare the original factory price as the customs value - not the marked-up trading company price. This can legally reduce your duty base. Ask us whether this applies to your shipment."
      },
      sec4: {
        title: "4. Shipping by Product Type: What Changes for Your Cargo",
        desc: "Freight rates are only part of the cost. Documentation, compliance requirements, and handling rules vary significantly by product category.",
        items: [
          {
            title: "Shipping Electronics from China to USA",
            desc: "High value, low weight - air freight is standard. Products with lithium batteries (power banks, earbuds, e-bikes) require UN38.3 test reports and MSDS documentation. We verify carrier acceptance before booking. HS code accuracy is critical - electronics are one of the most audited categories at CBP."
          },
          {
            title: "Shipping Furniture from China to USA",
            desc: "Heavy, bulky, low value-to-weight ratio - sea freight only. Solid wood products require ISPM-15 phytosanitary certification (heat treatment). We check this at our warehouse before loading. LCL for samples, FCL for full production runs."
          },
          {
            title: "Shipping Clothing & Textiles from China to USA",
            desc: "Labels must include fiber content, care instructions, RN number, and country of origin - US law, not optional. We inspect labels in Shenzhen. Most textile categories carry Section 301 tariffs; verify your HS code before placing a production order."
          },
          {
            title: "Shipping Industrial Equipment from China to USA",
            desc: "Typically FCL or breakbulk. We consolidate accessories and spare parts from multiple suppliers into one container. Note: CE or UL certification affects US market sale but not customs clearance - these are separate processes."
          },
          {
            title: "Shipping FDA-Regulated Products from China to USA",
            desc: "FDA oversight applies before the goods reach customs. Depending on product type, you may need prior notice filing or FDA facility registration. We flag FDA-regulated items at the quoting stage so documentation is ready before the ship arrives."
          }
        ]
      },
      sec5: {
        title: "5. Calculating Volumetric Weight",
        desc: "Logistics costs are calculated based on whichever is greater: actual weight or volumetric size.",
        formulaTitle: "Volumetric Weight Formula",
        formulaFormula: "L × W × H (cm)",
        formulaDiv: "5000",
        proTip: "Pro-tip: Our Shenzhen warehouse team provides free \"re-boxing\" to reduce dead space and lower your chargeable weight."
      },
      sec6: {
        title: "6. US Ports of Entry: Where Your Cargo Arrives and Why It Matters",
        desc: "Your cargo doesn't just \"arrive in America.\" It arrives at a specific port, goes through a specific terminal, and gets cleared by a local CBP office. Each port has different characteristics.",
        items: [
          {
            title: "Los Angeles / Long Beach (San Pedro Bay) - The Largest Gateway",
            desc1: "Handles approximately 40% of all US containerized imports. Direct routes from Shenzhen via major carriers (COSCO, Evergreen, MSC) with multiple weekly departures. Transit time from Yantian/Shekou: 14–18 days standard sea, 12–15 days Fast Sea (Matson/ZIM with dedicated terminals).",
            desc2: "Best for: West Coast delivery addresses, Amazon FBA warehouses in California and Nevada, importers prioritizing frequency of departures.",
            desc3: "Watch out for: Congestion during peak season (Sep–Nov). We monitor dwell times at Pier 400 and TTI terminals weekly."
          },
          {
            title: "New York / New Jersey (Port Newark)",
            desc1: "The largest East Coast port. Reached via the Panama Canal - add approximately 10–14 days to West Coast transit times. Benefits from proximity to the densest concentration of US consumers and warehouses.",
            desc2: "Best for: East Coast delivery, importers splitting inventory between coasts."
          },
          {
            title: "Savannah, Georgia",
            desc1: "The fastest-growing port in the US and now the third-largest by volume. Less congested than LA/Long Beach historically, with strong rail and trucking connections to the Southeast and Midwest.",
            desc2: "Best for: Importers delivering to the Southeast, Atlanta distribution hubs, or anywhere in the Midwest looking to avoid LA congestion."
          },
          {
            title: "Seattle / Tacoma (Puget Sound)",
            desc1: "Shorter ocean transit from North China ports, but Shenzhen routes are less frequent than to LA. Useful for Pacific Northwest delivery or when LA/Long Beach is severely congested."
          },
          {
            title: "Houston (Port of Houston)",
            desc1: "Growing container capacity. Useful for Texas, Oklahoma, and South-Central distribution. Less frequent direct services from Shenzhen, often requiring a transhipment."
          }
        ]
      },
      sec7: {
        title: "7. The Shenzhen Warehouse Workflow",
        desc: "By utilizing our facility in the Bao'an District, you gain a physical presence at the source:",
        items: [
          {
            title: "Incoming QC",
            desc: "We inspect for factory defects and verify quantities against your packing list."
          },
          {
            title: "Consolidation",
            desc: "We hold goods from multiple suppliers (Alibaba, 1688, factories) for up to 30 days at no cost, merging them into a single shipment to reduce the \"minimum billable\" fees."
          },
          {
            title: "Documentation",
            desc: "We generate the Commercial Invoice and Packing List required for both Chinese Export Clearance and US Import Entry."
          }
        ]
      },
      sec8: {
        title: "8. Risk Mitigation: All-Risk Cargo Insurance",
        desc: "Standard carrier liability is often limited to $0.50 per lb or less. For high-value electronics and consumer goods, we provide All-Risk Insurance covering:",
        items: [
          "General Average (Maritime Law)",
          "Theft or \"Non-Delivery\"",
          "Water damage or rough handling"
        ],
        bottomDesc: "This ensures that your capital is protected from the moment it leaves our warehouse until it reaches its final US destination."
      }
    },
    ru: {
      title: "Гид по доставке из Китая в США 2026: цены, таможня и сроки",
      subtitle: "Технический справочник для планирования инвентаря.",
      jumpTo: "Быстрый переход:",
      nav: {
        seaFreight: "Морские перевозки",
        customs: "Таможня и 321",
        tariffs: "Тарифы и пошлины",
        productTypes: "Типы товаров",
        volumetric: "Объемный вес",
        ports: "Порты США",
        warehouse: "Складской цикл",
        insurance: "Страхование"
      },
      fbaLinkText: "Гид по доставке на Amazon FBA",
      fbaLinkDesc: "Спецтарифы, преп-сервис и прямая доставка на склады FBA — смотрите наш ",
      sec1: {
        title: "1. Стратегия морских перевозок: Matson vs Стандарт",
        desc: "Выбор перевозчика напрямую влияет на ваш оборотный капитал. Мы делим морской фрахт на три уровня:",
        items: [
          {
            title: "Matson Express (CLX / CLX+)",
            sub: "«Золотой стандарт» e-commerce.",
            text: "Использует выделенные терминалы в Лонг-Бич (LBCT), минуя общие очереди. Срок: 11–14 дней от порта до порта."
          },
          {
            title: "ZIM / EXX (Fast Ocean)",
            sub: "Высокоскоростные рейсы с гарантированным местом на судне.",
            text: "Ускоренная разгрузка для сезонных товаров."
          },
          {
            title: "Стандартный фрахт (LCL/FCL)",
            sub: "COSCO, MSC и др.",
            text: "Самый экономный путь для несрочных грузов. Срок: 30–55 дней в зависимости от побережья."
          }
        ]
      },
      sec2: {
        title: "2. Оптимизация таможни: Section 321 и коды ТН ВЭД",
        desc: "Работа с CBP (Customs and Border Protection) — самый критический этап.",
        items: [
          { strong: "Section 321 (De Minimis):", text: " Грузы стоимостью до $800 часто могут ввозиться в США без пошлин. Это ключевая стратегия для DTC-брендов." },
          { strong: "Точность кодов ТН ВЭД (HS Code):", text: " Ошибка в коде может привести к дополнительным пошлинам до 25% (List 301) или задержкам со стороны FDA/EPA. Мы проверяем ваши коды перед отправкой." },
          { strong: "Подача ISF (10+2):", text: " Для моря форму ISF нужно подать за 24 часа до выхода судна из Китая. Ошибка стоит $5,000 (штраф CBP). Мы автоматизируем этот процесс для вас." }
        ]
      },
      sec3: {
        title: "3. Импортные пошлины 2026: считаем расходы заранее",
        desc: "Важно знать ставку налога до того, как товар придет на таможню:",
        tableTitle: "Структура пошлин:",
        th1: "Статья", th2: "Описание", th3: "Ставка",
        rows: [
          { col1: "MFN Duty", col2: "Базовая ставка по коду ТН ВЭД", col3: "0–25%" },
          { col1: "Section 301", col2: "Дополнительный тариф на китайские товары", col3: "7.5–25%" }
        ],
        bottom1: "Например: 12% база + 25% доп. тариф = 37% итоговой пошлины. При заказе на $30,000 налог составит $11,100.",
        bottom2: "Что делаем мы: В сервисе DDP мы рассчитываем полную сумму пошлин заранее и включаем её в ваш инвойс. Цена не изменится после растаможки.",
        bottom3: ""
      },
      sec4: {
        title: "4. Особенности доставки по типам товаров",
        desc: "",
        items: [
          {
            title: "Электроника",
            desc: "Авиа — стандарт. Для литиевых батарей нужны отчеты UN38.3 и MSDS."
          },
          {
            title: "Мебель",
            desc: "Только море. Для изделий из массива дерева обязателен штамп термообработки ISPM-15."
          },
          {
            title: "Одежда и текстиль",
            desc: "Обязательны бирки с составом ткани, инструкцией по уходу, номером RN и страной производства. Это закон США."
          },
          {
            title: "FDA-регулируемые товары",
            desc: "Косметика и товары для здоровья требуют регистрации предприятия в FDA и предварительного уведомления (Prior Notice). Мы проверяем это на этапе котировки."
          }
        ]
      },
      sec5: {
        title: "5. Объемный вес (Volumetric Weight)",
        desc: "Стоимость считается по большему показателю: физическому или объемному весу.",
        formulaTitle: "Формула расчета",
        formulaFormula: "Д × Ш × В (см)",
        formulaDiv: "5000",
        proTip: "Совет: наш склад делает бесплатную переупаковку, чтобы убрать «лишний воздух» и снизить ваш счет."
      },
      sec6: {
        title: "6. Порты въезда: куда приходят грузы",
        desc: "",
        items: [
          {
            title: "Лос-Анджелес / Лонг-Бич",
            desc1: "Главные ворота (40% импорта США). Быстрее всего для Западного побережья и складов Amazon в Калифорнии.",
            desc2: "",
            desc3: ""
          },
          {
            title: "Нью-Йорк / Нью-Джерси",
            desc1: "Крупнейший порт Восточного побережья. Путь через Панамский канал (+10–14 дней к сроку).",
            desc2: ""
          },
          {
            title: "Саванна (Джорджия)",
            desc1: "Третий по объему порт. Отличные ж/д связи с Юго-Востоком и Средним Западом.",
            desc2: ""
          }
        ]
      },
      sec7: {
        title: "7. Складской цикл в Шэньчжэне",
        desc: "",
        items: [
          {
            title: "Приемка и QC",
            desc: "Проверяем качество и количество по упаковочному листу."
          },
          {
            title: "Консолидация",
            desc: "Бесплатное хранение до 30 дней. Собираем всё в одну партию, чтобы вы не переплачивали за минимальные тарифы."
          },
          {
            title: "Документация",
            desc: "Готовим инвойсы и упаковочные листы для экспорта из Китая и импорта в США."
          }
        ]
      },
      sec8: {
        title: "8. Страхование All-Risk",
        desc: "Стандартная ответственность перевозчика — всего $0.50 за фунт веса. Наша страховка All-Risk покрывает:",
        items: [
          "Общую аварию (General Average).",
          "Кражу или недоставку.",
          "Повреждение водой или грубое обращение."
        ],
        bottomDesc: "Ваш капитал защищен с момента выхода товара со склада до двери в США."
      }
    }
  };

  const t = content[language];

  if (simplified) {
    return (
        <div className="text-gray-800 text-lg leading-relaxed pt-10">
            <div className="mb-24">
                <h2 className="text-3xl lg:text-4xl font-extrabold text-brand-dark mb-4 tracking-tight">
                    {t.title}
                </h2>
                <p className="text-xl md:text-2xl text-gray-600 font-medium leading-relaxed">
                    {t.subtitle}
                </p>
                <div className="bg-gray-50 rounded-2xl p-4 md:p-6 mt-12 flex flex-col md:flex-row items-center justify-center gap-y-4 gap-x-2 text-sm font-medium flex-wrap max-w-4xl mx-auto">
                    <span className="text-gray-500 mr-2">{t.jumpTo}</span>
                    <button onClick={() => scrollToSection('sea-freight')} className="text-brand-blue hover:text-brand-dark transition-colors">1. {t.nav.seaFreight}</button>
                    <span className="text-gray-300">•</span>
                    <button onClick={() => scrollToSection('customs')} className="text-brand-blue hover:text-brand-dark transition-colors">2. {t.nav.customs}</button>
                    <span className="text-gray-300">•</span>
                    <button onClick={() => scrollToSection('tariffs')} className="text-brand-blue hover:text-brand-dark transition-colors">3. {t.nav.tariffs}</button>
                    <span className="text-gray-300">•</span>
                    <button onClick={() => scrollToSection('product-types')} className="text-brand-blue hover:text-brand-dark transition-colors">4. {t.nav.productTypes}</button>
                    <span className="text-gray-300">•</span>
                    <button onClick={() => scrollToSection('volumetric')} className="text-brand-blue hover:text-brand-dark transition-colors">5. {t.nav.volumetric}</button>
                    <span className="text-gray-300">•</span>
                    <button onClick={() => scrollToSection('ports')} className="text-brand-blue hover:text-brand-dark transition-colors">6. {t.nav.ports}</button>
                    <span className="text-gray-300">•</span>
                    <button onClick={() => scrollToSection('warehouse')} className="text-brand-blue hover:text-brand-dark transition-colors">7. {t.nav.warehouse}</button>
                    <span className="text-gray-300">•</span>
                    <button onClick={() => scrollToSection('insurance')} className="text-brand-blue hover:text-brand-dark transition-colors">8. {t.nav.insurance}</button>
                </div>
            </div>

            <div className="mb-24">
                {/* Section 1 */}
                <div id="sea-freight" className="mb-16 scroll-mt-32">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-10 h-10 rounded-full bg-brand-light text-brand-blue font-black flex items-center justify-center flex-shrink-0 text-xl border border-brand-blue/20">1</div>
                        <h3 className="text-2xl font-bold text-brand-dark tracking-tight leading-tight">{t.sec1.title.replace(/^\d+\.\s*/, '')}</h3>
                    </div>
                    <div className="w-full">
                        <p className="text-gray-700 leading-relaxed font-medium mb-6">{t.sec1.desc}</p>
                        <div className="space-y-4">
                            {t.sec1.items.map((item, idx) => (
                                <p key={idx} className="text-gray-700 leading-relaxed">
                                    <strong className="text-brand-dark">{item.title}:</strong> {item.text}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Section 2 */}
                <div id="customs" className="mb-16 scroll-mt-32">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-10 h-10 rounded-full bg-brand-light text-brand-blue font-black flex items-center justify-center flex-shrink-0 text-xl border border-brand-blue/20">2</div>
                        <h3 className="text-2xl font-bold text-brand-dark tracking-tight leading-tight">{t.sec2.title.replace(/^\d+\.\s*/, '')}</h3>
                    </div>
                    <div className="w-full">
                        <p className="text-gray-700 leading-relaxed font-medium mb-6">{t.sec2.desc}</p>
                        <div className="space-y-4">
                            {t.sec2.items.map((item, idx) => (
                                <p key={idx} className="text-gray-700 leading-relaxed">
                                    <strong className="text-brand-dark">{item.strong}</strong> {item.text}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Section 3 */}
                <div id="tariffs" className="mb-16 scroll-mt-32">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-10 h-10 rounded-full bg-brand-light text-brand-blue font-black flex items-center justify-center flex-shrink-0 text-xl border border-brand-blue/20">3</div>
                        <h3 className="text-2xl font-bold text-brand-dark tracking-tight leading-tight">{t.sec3.title.replace(/^\d+\.\s*/, '')}</h3>
                    </div>
                    <div className="w-full">
                        <p className="text-gray-700 leading-relaxed font-medium mb-6">{t.sec3.desc}</p>
                        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 mb-4">
                            <h4 className="font-bold text-brand-dark text-xl mb-4">{t.sec3.tableTitle}</h4>
                            <ul className="space-y-3 mb-6">
                                {t.sec3.rows.map((row, idx) => (
                                    <li key={idx} className="text-gray-700 font-medium">
                                        <span className="font-bold text-brand-dark">{row.col1}:</span> {row.col2} (<span className="font-mono text-sm text-brand-blue">{row.col3}</span>)
                                    </li>
                                ))}
                            </ul>
                            <div className="space-y-3">
                                <p className="text-gray-600 border-t border-gray-200 pt-5 leading-relaxed">{t.sec3.bottom1}</p>
                                <p className="text-gray-600 leading-relaxed">{t.sec3.bottom2}</p>
                                {t.sec3.bottom3 && <p className="text-gray-600 leading-relaxed">{t.sec3.bottom3}</p>}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section 4 */}
                <div id="product-types" className="mb-16 scroll-mt-32">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-10 h-10 rounded-full bg-brand-light text-brand-blue font-black flex items-center justify-center flex-shrink-0 text-xl border border-brand-blue/20">4</div>
                        <h3 className="text-2xl font-bold text-brand-dark tracking-tight leading-tight">{t.sec4.title.replace(/^\d+\.\s*/, '')}</h3>
                    </div>
                    <div className="w-full">
                        {t.sec4.desc && <p className="text-gray-700 leading-relaxed font-medium mb-6">{t.sec4.desc}</p>}
                        <div className="space-y-6">
                            {t.sec4.items.map((item, idx) => (
                                <p key={idx} className="text-gray-700 leading-relaxed">
                                    <strong className="text-brand-dark block text-lg mb-1">{item.title}:</strong> {item.desc}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Section 5 */}
                <div id="volumetric" className="mb-16 scroll-mt-32">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-10 h-10 rounded-full bg-brand-light text-brand-blue font-black flex items-center justify-center flex-shrink-0 text-xl border border-brand-blue/20">5</div>
                        <h3 className="text-2xl font-bold text-brand-dark tracking-tight leading-tight">{t.sec5.title.replace(/^\d+\.\s*/, '')}</h3>
                    </div>
                    <div className="w-full">
                        <p className="text-gray-700 leading-relaxed font-medium mb-6">{t.sec5.desc}</p>
                        <div className="inline-flex items-center gap-4 bg-gray-50 border border-gray-200 rounded-2xl px-8 py-6 mb-4 w-full md:w-auto">
                            <span className="font-bold text-brand-dark text-lg md:text-xl">{t.sec5.formulaTitle}:</span>
                            <span className="font-mono text-brand-blue font-black text-xl md:text-2xl">{t.sec5.formulaFormula} / {t.sec5.formulaDiv}</span>
                        </div>
                        {t.sec5.proTip && <p className="text-gray-600 mt-2 font-medium">{t.sec5.proTip}</p>}
                    </div>
                </div>

                {/* Section 6 */}
                <div id="ports" className="mb-16 scroll-mt-32">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-10 h-10 rounded-full bg-brand-light text-brand-blue font-black flex items-center justify-center flex-shrink-0 text-xl border border-brand-blue/20">6</div>
                        <h3 className="text-2xl font-bold text-brand-dark tracking-tight leading-tight">{t.sec6.title.replace(/^\d+\.\s*/, '')}</h3>
                    </div>
                    <div className="w-full">
                        <p className="text-gray-700 leading-relaxed font-medium mb-8">{t.sec6.desc}</p>
                        <div className="space-y-8">
                            {t.sec6.items.map((item, idx) => (
                                <div key={idx}>
                                    <strong className="text-brand-dark block text-xl mb-2">{item.title}</strong>
                                    <p className="text-gray-700 leading-relaxed">{item.desc1}</p>
                                    {item.desc2 && <p className="text-gray-700 font-medium mt-1"><em>{item.desc2}</em></p>}
                                    {item.desc3 && <p className="text-gray-600 italic mt-1">{item.desc3}</p>}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Section 7 */}
                <div id="warehouse" className="mb-16 scroll-mt-32">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-10 h-10 rounded-full bg-brand-light text-brand-blue font-black flex items-center justify-center flex-shrink-0 text-xl border border-brand-blue/20">7</div>
                        <h3 className="text-2xl font-bold text-brand-dark tracking-tight leading-tight">{t.sec7.title.replace(/^\d+\.\s*/, '')}</h3>
                    </div>
                    <div className="w-full">
                        <p className="text-gray-700 leading-relaxed font-medium mb-6">{t.sec7.desc}</p>
                        <div className="space-y-6">
                            {t.sec7.items.map((item, idx) => (
                                <p key={idx} className="text-gray-700 leading-relaxed">
                                    <strong className="text-brand-dark block text-lg mb-1">{item.title}:</strong> {item.desc}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Section 8 */}
                <div id="insurance" className="mb-16 scroll-mt-32">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-10 h-10 rounded-full bg-brand-light text-brand-blue font-black flex items-center justify-center flex-shrink-0 text-xl border border-brand-blue/20">8</div>
                        <h3 className="text-2xl font-bold text-brand-dark tracking-tight leading-tight">{t.sec8.title.replace(/^\d+\.\s*/, '')}</h3>
                    </div>
                    <div className="w-full">
                        <p className="text-gray-700 leading-relaxed font-medium mb-6">{t.sec8.desc}</p>
                        <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700 font-medium">
                            {t.sec8.items.map((item, idx) => (
                                <li key={idx} className="pl-2">{item}</li>
                            ))}
                        </ul>
                        <p className="text-gray-600 font-medium italic">{t.sec8.bottomDesc}</p>
                    </div>
                </div>
            </div>
        </div>
    );
  }

  return (
    <section className="py-16 bg-white rounded-[50px] mb-8 container mx-auto shadow-sm px-6 lg:px-20 border border-gray-100">
      <div className="max-w-5xl mx-auto text-gray-600">
        
        <div className="max-w-4xl mx-auto text-center mb-10">
          <h2 className="text-3xl lg:text-4xl font-black text-brand-dark mb-6 tracking-tight leading-tight">
            {t.title}
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed font-medium">
            {t.subtitle}
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-gray-50 rounded-2xl p-4 md:p-6 mb-16 flex flex-col md:flex-row items-center justify-center gap-y-4 gap-x-2 text-sm font-medium flex-wrap">
            <span className="text-gray-500 mr-2">{t.jumpTo}</span>
            <button onClick={() => scrollToSection('sea-freight')} className="text-brand-blue hover:text-brand-dark transition-colors">1. {t.nav.seaFreight}</button>
            <span className="text-gray-300">•</span>
            <button onClick={() => scrollToSection('customs')} className="text-brand-blue hover:text-brand-dark transition-colors">2. {t.nav.customs}</button>
            <span className="text-gray-300">•</span>
            <button onClick={() => scrollToSection('tariffs')} className="text-brand-blue hover:text-brand-dark transition-colors">3. {t.nav.tariffs}</button>
            <span className="text-gray-300">•</span>
            <button onClick={() => scrollToSection('product-types')} className="text-brand-blue hover:text-brand-dark transition-colors">4. {t.nav.productTypes}</button>
            <span className="text-gray-300">•</span>
            <button onClick={() => scrollToSection('volumetric')} className="text-brand-blue hover:text-brand-dark transition-colors">5. {t.nav.volumetric}</button>
            <span className="text-gray-300">•</span>
            <button onClick={() => scrollToSection('ports')} className="text-brand-blue hover:text-brand-dark transition-colors">6. {t.nav.ports}</button>
            <span className="text-gray-300">•</span>
            <button onClick={() => scrollToSection('warehouse')} className="text-brand-blue hover:text-brand-dark transition-colors">7. {t.nav.warehouse}</button>
            <span className="text-gray-300">•</span>
            <button onClick={() => scrollToSection('insurance')} className="text-brand-blue hover:text-brand-dark transition-colors">8. {t.nav.insurance}</button>
        </div>

        <div className="max-w-5xl mx-auto space-y-16">
          
          {/* Section 1 */}
          <div id="sea-freight" className="scroll-mt-28">
            <div className="flex items-center gap-4 mb-6">
              <h3 className="text-2xl font-black text-brand-dark leading-tight">{t.sec1.title}</h3>
            </div>
            <p className="mb-6 leading-relaxed font-medium">{t.sec1.desc}</p>
            <div className="grid md:grid-cols-3 gap-6">
               {t.sec1.items.map((item, idx) => (
                   <div key={idx} className="bg-gray-50 rounded-[20px] p-6 border border-gray-100">
                     <h4 className="font-bold text-brand-dark text-lg mb-2">{item.title}</h4>
                     <p className="text-sm font-medium leading-relaxed mb-3 text-gray-500">{item.sub}</p>
                     <p className="text-sm leading-relaxed">{item.text}</p>
                   </div>
               ))}
            </div>
          </div>

          {/* Section 2 */}
          <div id="customs" className="scroll-mt-28">
            <div className="flex items-center gap-4 mb-6">
              <h3 className="text-2xl font-black text-brand-dark leading-tight">{t.sec2.title}</h3>
            </div>
            <p className="mb-6 leading-relaxed font-medium">{t.sec2.desc}</p>
            <ul className="space-y-4">
              {t.sec2.items.map((item, idx) => (
                   <li key={idx} className="flex items-start gap-3">
                     <div className="min-w-1.5 min-h-1.5 rounded-full bg-brand-blue mt-2"></div>
                     <p className="leading-relaxed"><strong className="text-brand-dark">{item.strong}</strong>{item.text}</p>
                   </li>
              ))}
            </ul>
          </div>

          {/* Section 3 */}
          <div id="tariffs" className="scroll-mt-28">
            <div className="flex items-center gap-4 mb-6">
              <h3 className="text-2xl font-black text-brand-dark leading-tight">{t.sec3.title}</h3>
            </div>
            <p className="mb-6 leading-relaxed font-medium">{t.sec3.desc}</p>
            
            <h4 className="font-bold text-brand-dark text-lg mb-4">{t.sec3.tableTitle}</h4>
            <TableWrapper language={language}>
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-100">
                    <th className="py-4 px-6 font-bold text-brand-dark whitespace-nowrap">{t.sec3.th1}</th>
                    <th className="py-4 px-6 font-bold text-brand-dark">{t.sec3.th2}</th>
                    <th className="py-4 px-6 font-bold text-brand-dark whitespace-nowrap">{t.sec3.th3}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-sm">
                  {t.sec3.rows.map((row, idx) => (
                    <tr key={idx}>
                      <td className="py-4 px-6 font-bold text-gray-800 whitespace-nowrap">{row.col1}</td>
                      <td className="py-4 px-6 text-gray-600">{row.col2}</td>
                      <td className="py-4 px-6 text-gray-600 font-mono">{row.col3}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </TableWrapper>
            
            <div className="bg-gray-50 p-6 sm:p-8 rounded-2xl border border-gray-100 mb-6">
                <p className="text-gray-600 leading-relaxed mb-4">{t.sec3.bottom1}</p>
                <p className="text-gray-600 leading-relaxed mb-4">{t.sec3.bottom2}</p>
                {t.sec3.bottom3 && <p className="text-gray-600 leading-relaxed">{t.sec3.bottom3}</p>}
            </div>
          </div>

          {/* Section 4 */}
          <div id="product-types" className="scroll-mt-28">
            <div className="flex items-center gap-4 mb-6">
              <h3 className="text-2xl font-black text-brand-dark leading-tight">{t.sec4.title}</h3>
            </div>
            {t.sec4.desc && <p className="mb-6 leading-relaxed font-medium">{t.sec4.desc}</p>}
            
            <div className="grid md:grid-cols-2 gap-6">
              {t.sec4.items.map((item, idx) => (
                  <div key={idx} className={`bg-white border border-gray-100 rounded-2xl p-6 shadow-sm ${idx === t.sec4.items.length - 1 && t.sec4.items.length % 2 !== 0 ? 'md:col-span-2' : ''}`}>
                    <h4 className="font-bold text-brand-dark text-lg mb-2">{item.title}</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
              ))}
            </div>
          </div>

          {/* Section 5 */}
          <div id="volumetric" className="scroll-mt-28">
            <div className="flex items-center gap-4 mb-6">
              <h3 className="text-2xl font-black text-brand-dark leading-tight">{t.sec5.title}</h3>
            </div>
            <p className="mb-6 leading-relaxed font-medium">{t.sec5.desc}</p>
            
            <div className="mb-8 max-w-sm mx-auto">
              <div className="bg-brand-dark text-white rounded-[20px] p-8 text-center shadow-lg">
                 <h4 className="font-bold text-white/60 mb-2 uppercase tracking-wide text-sm">{t.sec5.formulaTitle}</h4>
                 <div className="font-mono text-lg md:text-xl font-bold">
                    <span className="text-brand-yellow">{t.sec5.formulaFormula}</span>
                    <br />
                    <span className="border-t-2 border-white/20 inline-block w-32 my-1"></span>
                    <br />
                    <span>{t.sec5.formulaDiv}</span>
                 </div>
              </div>
            </div>
            <div className="flex bg-yellow-50 text-yellow-800 p-4 rounded-xl items-start gap-3 border border-yellow-200">
               <Info className="flex-shrink-0 mt-0.5" size={20} />
               <p className="font-medium text-sm">
                 {t.sec5.proTip}
               </p>
            </div>
          </div>

          {/* Section 6 */}
          <div id="ports" className="scroll-mt-28">
            <div className="flex items-center gap-4 mb-6">
              <h3 className="text-2xl font-black text-brand-dark leading-tight">{t.sec6.title}</h3>
            </div>
            {t.sec6.desc && <p className="mb-6 leading-relaxed font-medium">{t.sec6.desc}</p>}
            
            <div className="space-y-6 mb-8">
               {t.sec6.items.map((item, idx) => (
                   <div key={idx} className="border border-gray-100 rounded-2xl p-6 sm:p-8 bg-gray-50">
                       <h4 className="font-bold text-brand-dark text-lg sm:text-xl mb-3">{item.title}</h4>
                       <p className="text-gray-600 leading-relaxed mb-4">{item.desc1}</p>
                       {item.desc2 && <p className="text-gray-600 leading-relaxed mb-2"><strong>{language === 'ru' ? 'Лучше для:' : 'Best for:'}</strong> {item.desc2.replace('Best for: ', '')}</p>}
                       {item.desc3 && <p className="text-[#FF9900] leading-relaxed"><strong>{language === 'ru' ? 'Внимание:' : 'Watch out for:'}</strong> {item.desc3.replace('Watch out for: ', '')}</p>}
                   </div>
               ))}
            </div>
            
            <div className="bg-[#FF9900]/10 border border-[#FF9900]/20 rounded-2xl p-6 text-center">
              <p className="text-brand-dark font-medium">
                {t.fbaLinkDesc} <a href={language === 'en' ? '/amazon' : '/ru/amazon'} className="text-[#FF9900] font-bold hover:underline">{t.fbaLinkText}</a>.
              </p>
            </div>
          </div>

          {/* Section 7 */}
          <div id="warehouse" className="scroll-mt-28">
            <div className="flex items-center gap-4 mb-6">
              <h3 className="text-2xl font-black text-brand-dark leading-tight">{t.sec7.title}</h3>
            </div>
            {t.sec7.desc && <p className="mb-6 leading-relaxed font-medium">{t.sec7.desc}</p>}
            
            <div className="space-y-4">
              {t.sec7.items.map((item, idx) => (
                  <div key={idx} className="bg-gray-50 p-6 rounded-2xl border border-gray-100 flex gap-4">
                    <div className="font-black text-brand-blue text-4xl opacity-30 mt-1">0{idx + 1}</div>
                    <div>
                      <h4 className="font-bold text-brand-dark text-lg mb-1">{item.title}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
              ))}
            </div>
          </div>

          {/* Section 8 */}
          <div id="insurance" className="scroll-mt-28">
            <div className="flex items-center gap-4 mb-6">
              <h3 className="text-2xl font-black text-brand-dark leading-tight">{t.sec8.title}</h3>
            </div>
            <p className="mb-6 leading-relaxed font-medium text-gray-600">{t.sec8.desc}</p>
            <div className="bg-[#e1f3ff] p-8 lg:p-12 rounded-[40px] border border-[#c1e6ff] relative overflow-hidden">
                <ul className="space-y-4 mb-8">
                  {t.sec8.items.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-brand-blue/20 flex items-center justify-center flex-shrink-0">
                           <div className="w-2 h-2 rounded-full bg-brand-blue"></div>
                        </div>
                        <span className="font-bold text-brand-dark">{item}</span>
                      </li>
                  ))}
                </ul>
                <p className="text-brand-dark/80 font-medium leading-relaxed max-w-2xl">
                  {t.sec8.bottomDesc}
                </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};



import React from 'react';
import { Language } from '../utils/translations';
import { Anchor, ShieldCheck, Scale, Calculator, Package, Info, Train } from 'lucide-react';
import { TableWrapper } from './TableWrapper';

interface Props {
  language: Language;
}

export const EuAdvancedLogisticsGuide: React.FC<Props> = ({ language }) => {
  const content = {
    en: {
      title: "China to Europe Shipping Guide 2026: Costs, Customs & Transit Times",
      subtitle: "The technical reference for EU importers who want to understand the full picture.",
      jumpTo: "Jump to:",
      nav: {
        transit: "Transit Options",
        customs: "EU Customs & VAT",
        tariffs: "Import Tariffs",
        types: "Product Types",
        ports: "Ports & Hubs",
        warehouse: "Warehouse Workflow",
        insurance: "Insurance"
      },
      sections: {
        transit: {
          title: "1. Transit Options: Air vs. Rail vs. Sea",
          desc: "Three routes connect Shenzhen to Europe. Each serves a different business profile.",
          air: {
            title: "Air Freight (6–10 days)",
            desc: "Via Shenzhen or Hong Kong, connecting to Frankfurt (FRA), Amsterdam (AMS), or Paris (CDG). Standard for high-value goods, electronics, and urgent restocks. Volumetric weight applies - we repack at our Shenzhen warehouse to minimize chargeable weight before booking."
          },
          rail: {
            title: "Rail Freight (18–24 days)",
            desc: "The China-Europe Railway Express. Trains run from Shenzhen and Guangzhou through Central Asia into major EU hubs: Duisburg (Germany) and Małaszewicze (Poland). This is the best fit for regular commercial cargo in the 100-2000 kg range. More predictable than sea freight."
          },
          sea: {
            title: "Sea Freight (35–45 days)",
            desc: "Via Rotterdam, Hamburg, Antwerp, or Piraeus for Southern Europe. Most cost-effective per kg for bulk, furniture, and heavy goods. Piraeus (Greece) is the fastest sea gateway for Italy, Spain, and the Balkans - cutting transit by 3-5 days."
          },
          referenceTitle: "Quick reference:",
          headers: ["Situation", "Recommended method"],
          rows: [
            ["High-value goods, urgent restock", "Air"],
            ["Regular commercial cargo, 100kg+", "Rail"],
            ["Italy, Spain, Greece destination", "Sea via Piraeus"],
            ["Bulk, furniture, machinery", "Sea via Rotterdam/Hamburg"],
            ["Seasonal inventory, long lead time", "Sea or Rail"]
          ]
        },
        customs: {
          title: "2. EU Customs Entry: EORI, VAT, and What DDP Actually Means",
          points: [
            {
              title: "The EU Customs Union",
              desc: "The EU operates as a single customs territory. Goods are cleared once at the port or airport of entry - after that, they move freely between all 27 member states without additional customs checks. A shipment cleared in Rotterdam can be delivered in Warsaw or Barcelona without re-inspection."
            },
            {
              title: "EORI Number",
              desc: "Every business importing commercially into the EU needs an Economic Operators Registration and Identification (EORI) number - your unique identifier with EU customs authorities. If you don't have one, we handle entry using our own fiscal representation while you register. It's a one-time process."
            },
            {
              title: "What DDP means in the EU",
              desc: "DDP means we pay everything on your behalf: export clearance in China, international freight, EU customs duties, and import VAT. The shipment arrives at your door with zero additional charges. This is different from DAP (Delivered At Place), where the receiver gets an unexpected duty and VAT invoice on arrival - a common problem with other providers."
            }
          ],
          vatVsDutyTitle: "Import VAT vs. Customs Duty - two separate charges:",
          vatVsDutyPoints: [
            <><strong>Customs Duty</strong> - a percentage of the CIF value (Cost + Insurance + Freight), set by the EU's TARIC system based on HS code. <em>Note: EU duties are calculated on CIF value, not FOB - this means freight and insurance costs are included in the duty base.</em></>,
            <><strong>Import VAT</strong> - applied on top of customs value + duty. Rate varies by country: Germany 19%, France 20%, Italy 22%, Poland 23%.</>
          ],
          vatBothIncluded: "Both are included in our DDP pricing.",
          iossTitle: "IOSS for B2C Sellers",
          iossDesc: "If you ship individual parcels directly to EU consumers valued under €150, the Import One-Stop Shop (IOSS) scheme simplifies VAT collection at point of sale - no VAT charged at the border. We assist with IOSS compliance for DTC brands."
        },
        tariffs: {
          title: "3. EU Import Tariffs 2026: What You Actually Pay",
          desc: "EU import duties are set by the Common Customs Tariff and apply uniformly across all member states. The EU does not have US-style blanket tariffs on Chinese goods, but it does have targeted anti-dumping measures on specific categories that can significantly increase the landed cost.",
          calcTitle: "How your total import cost is calculated:",
          headers: ["Layer", "What it is", "Typical range"],
          rows: [
            ["Customs Duty", "Based on TARIC HS code, applied to CIF value", "0-15% most goods"],
            ["Anti-dumping Duty", "Category-specific, Chinese-origin goods", "Varies - high for bikes, steel"],
            ["Import VAT", "Applied on (CIF value + Duty)", "17-25% depending on country"]
          ],
          formulaBoxTitle: "The Formula",
          formula: "Total landed cost = (CIF Value + Customs Duty) × (1 + VAT Rate)",
          formulaExample: <>Example: €20,000 CIF value, 6% duty, 19% German VAT:<br />Duty = €1,200 → VAT base = €21,200 → VAT = €4,028 → <strong>Total charges = €5,228</strong></>,
          categoriesTitle: "Categories with active EU anti-dumping duties on Chinese goods (2026):",
          categoriesDesc: "Electric bicycles, certain steel and aluminum products, ceramic tiles, solar glass, and selected textile categories. If your product falls here, the combined duty burden can be substantial. We verify anti-dumping applicability before you place your production order.",
          categoriesAction: "What we do: We calculate your full landed cost - TARIC duty + any anti-dumping surcharge + import VAT - before the cargo leaves Shenzhen. With DDP, this is locked into your quote."
        },
        productTypes: {
          title: "4. Shipping from China to Europe by Product Type",
          items: [
            {
              title: "Shipping Electronics",
              desc: "Air freight standard for high-value items. Lithium battery products (power banks, earbuds, e-bikes) require UN38.3 certification and MSDS documentation - carrier restrictions apply. CE marking is mandatory for all electronics sold in the EU. RoHS compliance applies to most electronic products. We verify CE and RoHS documentation at our Shenzhen warehouse before booking."
            },
            {
              title: "Shipping Furniture",
              desc: "Sea freight only - heavy, bulky, low value-to-weight. Solid wood requires ISPM-15 phytosanitary certification. REACH regulations may apply to surface coatings, lacquers, and adhesives containing restricted substances. LCL for samples and small orders, FCL for production runs."
            },
            {
              title: "Shipping Clothing & Textiles",
              desc: "EU labeling requirements mandate fiber composition, care instructions, and country of origin - in the language of the destination country. REACH restrictions apply to certain dyes and chemical treatments. We inspect labels before shipment; incorrect labeling triggers customs holds."
            },
            {
              title: "Shipping Industrial Equipment",
              desc: "FCL or breakbulk. CE marking and an EU Declaration of Conformity are required for machinery sold in the EU. We consolidate accessories and spare parts from multiple suppliers into one container."
            },
            {
              title: "Health, Beauty & Cosmetics",
              desc: "Cosmetics require EU Cosmetic Product Notification Portal (CPNP) registration before sale. Food supplements face additional regulatory requirements. Shipping cosmetics without CPNP registration risks seizure at customs. We flag these at the quoting stage so documentation is in order."
            },
            {
              title: "Electronics to Germany/France: EPR Requirements",
              desc: "If you sell electronics or packaged goods in Germany or France, Extended Producer Responsibility (EPR) registration applies - you must register with a WEEE compliance scheme (Germany: stiftung ear) before placing goods on the market. We flag this during onboarding."
            }
          ]
        },
        ports: {
          title: "5. EU Ports and Air Hubs: Where Your Cargo Enters Europe",
          desc: "We select the entry point based on your final delivery address and current congestion - not just the geographically closest option.",
          items: [
            {
              title: "Rotterdam (Port of Rotterdam) - Largest EU Gateway",
              desc: "Europe's busiest container port. Well-connected to Germany, Belgium, France, and beyond via rail and trucking. First choice for sea freight to Western and Central Europe. Transit from Shenzhen/Yantian: 35-40 days standard sea."
            },
            {
              title: "Hamburg",
              desc: "Germany's primary container port, second-largest in Europe. Direct rail connections to Eastern Europe, Scandinavia, and Central Europe. Strong option for cargo destined for Germany, Poland, Czech Republic, or the Baltics."
            },
            {
              title: "Piraeus (Greece) - Southern Europe Gateway",
              desc: "The fastest sea entry point for Italy, Spain, Croatia, and the Balkans. Routing through Piraeus instead of Rotterdam saves 3-5 days for Mediterranean-destined cargo. Increasingly used as COSCO operates dedicated terminals here."
            },
            {
              title: "Antwerp",
              desc: "Belgium's main port, close to major distribution hubs for France, Netherlands, and Germany. Competitive terminal rates and high throughput."
            },
            {
              title: "Gdańsk (Poland)",
              desc: "Fast-growing hub for Eastern Europe and Baltic states. Strong rail and trucking connections to Poland, Czech Republic, Slovakia, and the Baltics."
            },
            {
              title: "Małaszewicze (Poland) - Rail Entry",
              desc: "The main land border crossing for all China-Europe rail freight entering the EU from Belarus. All rail shipments are processed here before continuing to their final destination."
            },
            {
              title: "Air Hubs: FRA, AMS, CDG",
              desc: "Frankfurt (FRA) is Europe's busiest cargo airport. Most air freight from Shenzhen routes through here. Amsterdam (AMS) handles Netherlands, Belgium, and Scandinavia. Paris CDG is the main entry for France."
            }
          ]
        },
        warehouse: {
          title: "6. The Shenzhen Warehouse Workflow",
          items: [
            {
              title: "Incoming QC",
              desc: "We inspect for factory defects and verify quantities against your packing list. Photos sent to you before anything is packed."
            },
            {
              title: "Consolidation",
              desc: "We hold goods from multiple suppliers for up to 30 days at no cost. Everything ships as one consolidated cargo - one freight bill, one customs entry."
            },
            {
              title: "Repacking & Volumetric Optimization",
              desc: "We repack into the most efficient box configuration to minimize volumetric weight, directly reducing your air and rail freight cost."
            },
            {
              title: "Documentation",
              desc: "We generate the Commercial Invoice, Packing List, and all export documents required for Chinese customs clearance and EU import entry. Our team handles communication between Chinese suppliers and EU customs authorities - nothing gets lost in translation."
            }
          ]
        },
        insurance: {
          title: "7. All-Risk Cargo Insurance",
          desc: "Standard carrier liability covers as little as $0.50 per lb - far below the actual value of most commercial shipments. We provide All-Risk insurance covering:",
          points: [
            {
              title: "General Average (Maritime Law)",
              desc: "If a vessel incident forces cargo sacrifice or salvage, all cargo owners share the loss proportionally. Without insurance, you pay your share even if your goods arrived intact. Our coverage protects you from this."
            },
            {
              title: "Theft or non-delivery",
              desc: ""
            },
            {
              title: "Water damage and rough handling in transit",
              desc: ""
            }
          ],
          bottomDesc: "Coverage applies from the moment goods leave our Shenzhen warehouse until delivery at your EU address."
        }
      }
    },
    ru: {
      title: "Гид по доставке из Китая в Европу 2026: цены, таможня и сроки",
      subtitle: "Технический справочник для импортеров.",
      jumpTo: "Быстрый переход:",
      nav: {
        transit: "Варианты транзита",
        customs: "Таможня и НДС",
        tariffs: "Тарифы на импорт",
        types: "Типы товаров",
        ports: "Порты и хабы",
        warehouse: "Складской цикл",
        insurance: "Страхование"
      },
      sections: {
        transit: {
          title: "1. Варианты транзита: Самолет vs Поезд vs Корабль",
          desc: "Три маршрута соединяют Шэньчжэнь с Европой. Каждый подходит для разных бизнес-профилей.",
          air: {
            title: "Авиафрахт (6–10 дней)",
            desc: "Вылеты из Шэньчжэня или Гонконга во Франкфурт (FRA), Амстердам (AMS) или Париж (CDG). Оптимально для электроники и срочного пополнения стока. Мы переупаковываем товар в Шэньчжэне, чтобы максимально снизить оплачиваемый объемный вес."
          },
          rail: {
            title: "Ж/Д перевозки (18–24 дня)",
            desc: "Маршрут «Китай-Европа» - быстрее моря и значительно дешевле авиа. Поезда следуют из Шэньчжэня и Гуанчжоу через Центральную Азию в хабы ЕС: Дуйсбург (Германия) и Малашевичи (Польша). Это самый стабильный вариант для коммерческих грузов весом 100-2000 кг, не зависящий от пробок в морских портах."
          },
          sea: {
            title: "Морские перевозки (35–45 дней)",
            desc: "Через порты Роттердама, Гамбурга, Антверпена или Пирея. Подходит для сборных (LCL) и полных (FCL) контейнеров. Пирей (Греция) - самый быстрый путь для Италии и Испании, сокращающий путь на 3-5 дней по сравнению с северными портами."
          },
          referenceTitle: "Краткая справка:",
          headers: ["Ситуация", "Рекомендуемый метод"],
          rows: [
            ["Дорогостоящие товары, срочное пополнение", "Авиа"],
            ["Регулярные коммерческие грузы от 100 кг", "Ж/Д"],
            ["Доставка в Италию, Испанию, Грецию", "Море через Пирей"],
            ["Оптовые заказы, мебель, оборудование", "Море через Роттердам/Гамбург"],
            ["Сезонные товары, большой запас времени", "Море или Ж/Д"]
          ]
        },
        customs: {
          title: "2. Таможня ЕС: EORI, НДС и реальный смысл DDP",
          points: [
            {
              title: "Таможенный союз ЕС",
              desc: "Евросоюз - это единая таможенная территория. Груз проходит очистку один раз в порту прибытия, после чего свободно перемещается между всеми 27 странами без дополнительных проверок."
            },
            {
              title: "Номер EORI",
              desc: "Каждой компании для коммерческого импорта в ЕС нужен номер EORI. Если его нет, мы проведем оформление через наше фискальное представительство на время вашей регистрации."
            },
            {
              title: "Что такое DDP в ЕС",
              desc: "DDP означает, что мы платим всё за вас: экспорт в Китае, фрахт, пошлины ЕС и импортный НДС. Груз прибывает к вам без каких-либо доплат. В отличие от условий DAP, вы застрахованы от внезапных счетов за налоги при получении."
            }
          ],
          vatVsDutyTitle: "Импортные налоги:",
          vatVsDutyPoints: [
            <><strong>Пошлина:</strong> процент от стоимости CIF (товар + страховка + фрахт), определяется по коду ТН ВЭД (HS code).</>,
            <><strong>Импортный НДС:</strong> начисляется на сумму стоимости товара и пошлины. Ставка зависит от страны: Германия - 19%, Франция - 20%, Италия - 22%, Польша - 23%.</>
          ],
          vatBothIncluded: "Все эти расходы уже включены в наши тарифы DDP.",
          iossTitle: "IOSS для продавцов B2C",
          iossDesc: "Если вы отправляете посылки напрямую потребителям в ЕС стоимостью до €150, система Import One-Stop Shop (IOSS) упрощает сбор НДС в точке продаж - на границе НДС не взимается. Мы помогаем с соблюдением IOSS для DTC-брендов."
        },
        tariffs: {
          title: "3. Тарифы на импорт в ЕС 2026",
          desc: "Пошлины в ЕС едины для всех стран-членов. Помимо стандартных ставок, существуют антидемпинговые меры на определенные категории товаров из Китая, которые могут значительно увеличить итоговую стоимость.",
          calcTitle: "Как рассчитывается итоговая стоимость импорта:",
          headers: ["Слой", "Что это", "Типичный диапазон"],
          rows: [
            ["Пошлина", "По коду ТН ВЭД (HS code) от CIF", "0-15% на большинство товаров"],
            ["Антидемпинговая пошлина", "Спец. категории товаров из Китая", "Различается - высоко для велосипедов, стали"],
            ["Импортный НДС", "Применяется к (CIF + пошлина)", "17-25% в зависимости от страны"]
          ],
          formulaBoxTitle: "Формула расчета",
          formula: "Итоговая стоимость = (Стоимость CIF + Пошлина) × (1 + Ставка НДС)",
          formulaExample: <>Пример: CIF €20,000, пошлина 6%, НДС Германии 19%:<br />Пошлина = €1,200 → База НДС = €21,200 → НДС = €4,028 → <strong>Итого сборов = €5,228</strong></>,
          categoriesTitle: "Категории под контролем:",
          categoriesDesc: "Электровелосипеды, изделия из стали и алюминия, керамика, солнечное стекло. Мы проверяем наличие дополнительных пошлин до того, как вы разместите заказ на производстве.",
          categoriesAction: "Что мы делаем: Мы рассчитываем вашу полную стоимость - пошлина + антидемпинг + НДС - до отправки. В DDP эта сумма зафиксирована."
        },
        productTypes: {
          title: "4. Особенности логистики по типам товаров",
          items: [
            {
              title: "Электроника",
              desc: "Требуется маркировка CE и сертификаты RoHS. Для литиевых аккумуляторов необходимы UN38.3 и MSDS. Мы проверяем документацию в Шэньчжэне до бронирования места."
            },
            {
              title: "Мебель",
              desc: "Только морские перевозки. Для изделий из дерева необходим фитосанитарный сертификат (штамп ISPM-15)."
            },
            {
              title: "Одежда и текстиль",
              desc: "Обязательна маркировка состава и страны происхождения на языке страны назначения. Мы проверяем бирки перед отправкой, чтобы избежать задержек на таможне."
            },
            {
              title: "Оборудование",
              desc: "Необходимы маркировка CE и декларация соответствия. Мы консолидируем запчасти от разных поставщиков в один контейнер."
            },
            {
              title: "Косметика и товары для здоровья",
              desc: "Требуется регистрация в портале CPNP. Мы проверяем наличие документов на этапе расчета, чтобы избежать конфискации груза."
            },
            {
              title: "Электроника в Германию/Францию: EPR",
              desc: "Если вы продаете электронику или упакованные товары в Германии или Франции, требуется регистрация EPR."
            }
          ]
        },
        ports: {
          title: "5. Главные порты и авиахабы Европы",
          desc: "Мы выбираем точку входа в зависимости от вашего адреса доставки и текущей загруженности, а не просто ближайшую.",
          items: [
            {
              title: "Роттердам (Нидерланды)",
              desc: "Крупнейший порт ЕС. Основной путь для Германии и Бельгии."
            },
            {
              title: "Гамбург (Германия)",
              desc: "Главный узел для грузов на Польшу, Чехию и страны Балтии."
            },
            {
              title: "Пирей (Греция)",
              desc: "Самый быстрый путь в Южную Европу."
            },
            {
              title: "Антверпен (Бельгия)",
              desc: "Главный порт Бельгии, близко к хабам Франции и Германии."
            },
            {
              title: "Гданьск (Польша)",
              desc: "Быстрорастущий хаб для Восточной Европы и стран Балтии."
            },
            {
              title: "Малашевичи (Польша)",
              desc: "Основной пункт въезда для всех ж/д грузов из Китая."
            },
            {
              title: "Авиахабы: Франкфурт, Амстердам, Париж",
              desc: "Франкфурт - главный авиахаб для центральной Европы. Амстердам и Париж - для Северной и Западной."
            }
          ]
        },
        warehouse: {
          title: "6. Складской цикл в Шэньчжэне",
          items: [
            {
              title: "Приемка и контроль качества",
              desc: "Проверяем товар на брак и сверяем количество. Отправляем фотоотчет."
            },
            {
              title: "Консолидация",
              desc: "Бесплатно храним товары от разных поставщиков до 30 дней. Отправляем всё одной партией."
            },
            {
              title: "Упаковка",
              desc: "Оптимизируем объемный вес, чтобы снизить ваши затраты на фрахт."
            },
            {
              title: "Документы",
              desc: "Готовим инвойсы, упаковочные листы и все экспортные бумаги. Мы сами общаемся с поставщиками и таможней."
            }
          ]
        },
        insurance: {
          title: "7. Страхование грузов от всех рисков",
          desc: "Ответственность обычного перевозчика минимальна и не покрывает реальную стоимость товара. Мы предоставляем страховку All-Risk, которая включает:",
          points: [
            {
              title: "Общую аварию:",
              desc: "защиту от убытков, которые по морскому праву делятся между всеми владельцами груза при инциденте с судном."
            },
            {
              title: "Кражу или потерю части груза.",
              desc: ""
            },
            {
              title: "Повреждение водой или при погрузочных работах.",
              desc: ""
            }
          ],
          bottomDesc: "Страховка действует с момента выхода товара с нашего склада до передачи на ваш адрес в ЕС."
        }
      }
    }
  };

  const t = content[language] || content.en;

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', `#${id}`);
    }
  };

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

        <div className="max-w-4xl mx-auto bg-gray-50 rounded-2xl p-4 mb-16 border border-gray-100 hidden md:block">
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm font-medium">
            <span className="text-gray-500 mr-2">{t.jumpTo}</span>
            <button onClick={() => scrollToSection('transit')} className="text-brand-blue hover:text-brand-dark transition-colors">{t.nav.transit}</button>
            <span className="text-gray-300">•</span>
            <button onClick={() => scrollToSection('customs')} className="text-brand-blue hover:text-brand-dark transition-colors">{t.nav.customs}</button>
            <span className="text-gray-300">•</span>
            <button onClick={() => scrollToSection('tariffs')} className="text-brand-blue hover:text-brand-dark transition-colors">{t.nav.tariffs}</button>
            <span className="text-gray-300">•</span>
            <button onClick={() => scrollToSection('product-types')} className="text-brand-blue hover:text-brand-dark transition-colors">{t.nav.types}</button>
            <span className="text-gray-300">•</span>
            <button onClick={() => scrollToSection('ports')} className="text-brand-blue hover:text-brand-dark transition-colors">{t.nav.ports}</button>
            <span className="text-gray-300">•</span>
            <button onClick={() => scrollToSection('warehouse')} className="text-brand-blue hover:text-brand-dark transition-colors">{t.nav.warehouse}</button>
            <span className="text-gray-300">•</span>
            <button onClick={() => scrollToSection('insurance')} className="text-brand-blue hover:text-brand-dark transition-colors">{t.nav.insurance}</button>
          </div>
        </div>

        <div className="max-w-5xl mx-auto space-y-16">
          
          {/* Section 1 */}
          <div id="transit" className="scroll-mt-28">
            <div className="flex items-center gap-4 mb-6">
              <h3 className="text-2xl font-black text-brand-dark leading-tight">{t.sections.transit.title}</h3>
            </div>
            <p className="mb-6 leading-relaxed font-medium">{t.sections.transit.desc}</p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gray-50 rounded-[20px] p-6 border border-gray-100">
                <h4 className="font-bold text-brand-dark text-lg mb-2">{t.sections.transit.air.title}</h4>
                <p className="text-sm leading-relaxed text-gray-600">{t.sections.transit.air.desc}</p>
              </div>
              <div className="bg-gray-50 rounded-[20px] p-6 border border-gray-100">
                <h4 className="font-bold text-brand-dark text-lg mb-2">{t.sections.transit.rail.title}</h4>
                <p className="text-sm leading-relaxed text-gray-600">{t.sections.transit.rail.desc}</p>
              </div>
              <div className="bg-gray-50 rounded-[20px] p-6 border border-gray-100">
                <h4 className="font-bold text-brand-dark text-lg mb-2">{t.sections.transit.sea.title}</h4>
                <p className="text-sm leading-relaxed text-gray-600">{t.sections.transit.sea.desc}</p>
              </div>
            </div>

            <h4 className="font-bold text-brand-dark text-lg mb-4">{t.sections.transit.referenceTitle}</h4>
            <TableWrapper language={language}>
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-100">
                    <th className="py-4 px-6 font-bold text-brand-dark whitespace-nowrap">{t.sections.transit.headers[0]}</th>
                    <th className="py-4 px-6 font-bold text-brand-dark">{t.sections.transit.headers[1]}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-sm">
                  {t.sections.transit.rows.map((row, idx) => (
                    <tr key={idx}>
                      <td className="py-4 px-6 font-bold text-gray-800">{row[0]}</td>
                      <td className="py-4 px-6 text-brand-blue font-bold">{row[1]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </TableWrapper>
          </div>

          {/* Section 2 */}
          <div id="customs" className="scroll-mt-28">
            <div className="flex items-center gap-4 mb-6">
              <h3 className="text-2xl font-black text-brand-dark leading-tight">{t.sections.customs.title}</h3>
            </div>
            
            <ul className="space-y-6">
              {t.sections.customs.points.map((point, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <div className="min-w-2 min-h-2 rounded-full bg-brand-blue mt-2.5"></div>
                  <div>
                    <h4 className="font-bold text-brand-dark text-lg mb-2">{point.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{point.desc}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-8 bg-gray-50 p-6 rounded-2xl border border-gray-100">
               <h4 className="font-bold text-brand-dark text-lg mb-4">{t.sections.customs.vatVsDutyTitle}</h4>
               <ul className="space-y-3">
                 {t.sections.customs.vatVsDutyPoints.map((point, idx) => (
                   <li key={idx} className="text-gray-600">{point}</li>
                 ))}
               </ul>
               <p className="mt-4 font-bold text-brand-blue">{t.sections.customs.vatBothIncluded}</p>
            </div>

            <div className="mt-8">
              <h4 className="font-bold text-brand-dark text-lg mb-2">{t.sections.customs.iossTitle}</h4>
              <p className="text-gray-600 leading-relaxed">{t.sections.customs.iossDesc}</p>
            </div>
          </div>

          {/* Section 3 */}
          <div id="tariffs" className="scroll-mt-28">
            <div className="flex items-center gap-4 mb-6">
              <h3 className="text-2xl font-black text-brand-dark leading-tight">{t.sections.tariffs.title}</h3>
            </div>
            <p className="mb-6 leading-relaxed font-medium">{t.sections.tariffs.desc}</p>
            
            <h4 className="font-bold text-brand-dark text-lg mb-4">{t.sections.tariffs.calcTitle}</h4>
            <TableWrapper language={language}>
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-100">
                    <th className="py-4 px-6 font-bold text-brand-dark whitespace-nowrap">{t.sections.tariffs.headers[0]}</th>
                    <th className="py-4 px-6 font-bold text-brand-dark">{t.sections.tariffs.headers[1]}</th>
                    <th className="py-4 px-6 font-bold text-brand-dark whitespace-nowrap">{t.sections.tariffs.headers[2]}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-sm">
                  {t.sections.tariffs.rows.map((row, idx) => (
                    <tr key={idx}>
                      <td className="py-4 px-6 font-bold text-gray-800 whitespace-nowrap">{row[0]}</td>
                      <td className="py-4 px-6 text-gray-600">{row[1]}</td>
                      <td className="py-4 px-6 text-gray-600 font-mono">{row[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </TableWrapper>

            <div className="bg-brand-dark text-white rounded-[20px] p-6 lg:p-8 shadow-lg mb-8">
              <h4 className="font-bold text-white/60 mb-2 uppercase tracking-wide text-sm">{t.sections.tariffs.formulaBoxTitle}</h4>
              <div className="font-mono text-lg md:text-xl font-bold mb-4">
                <span className="text-brand-yellow">{t.sections.tariffs.formula}</span>
              </div>
              <p className="text-white/80 font-medium text-sm">
                {t.sections.tariffs.formulaExample}
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 sm:p-8 rounded-2xl border border-gray-100">
                <h4 className="font-bold text-brand-dark text-lg mb-2">{t.sections.tariffs.categoriesTitle}</h4>
                <p className="text-gray-600 leading-relaxed mb-4">{t.sections.tariffs.categoriesDesc}</p>
                <p className="text-gray-600 leading-relaxed"><strong>{language === 'ru' ? 'Что мы делаем:' : 'What we do:'}</strong> {t.sections.tariffs.categoriesAction.replace('Что мы делаем: ', '').replace('What we do: ', '')}</p>
            </div>
          </div>

          {/* Section 4 */}
          <div id="product-types" className="scroll-mt-28">
            <div className="flex items-center gap-4 mb-6">
              <h3 className="text-2xl font-black text-brand-dark leading-tight">{t.sections.productTypes.title}</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {t.sections.productTypes.items.map((item, idx) => (
                <div key={idx} className={`border rounded-2xl p-6 shadow-sm ${idx === t.sections.productTypes.items.length - 1 ? 'bg-brand-blue/5 border-brand-blue/20' : 'bg-white border-gray-100'}`}>
                  <h4 className="font-bold text-brand-dark text-lg mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 5 */}
          <div id="ports" className="scroll-mt-28">
            <div className="flex items-center gap-4 mb-6">
              <h3 className="text-2xl font-black text-brand-dark leading-tight">{t.sections.ports.title}</h3>
            </div>
            
            <div className="space-y-6 mb-8">
               {t.sections.ports.items.slice(0, 3).map((item, idx) => (
                 <div key={idx} className="border border-gray-100 rounded-2xl p-6 sm:p-8 bg-gray-50">
                     <h4 className="font-bold text-brand-dark text-lg sm:text-xl mb-3">{item.title}</h4>
                     <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                 </div>
               ))}

               <div className="grid md:grid-cols-2 gap-6">
                 {t.sections.ports.items.slice(3).map((item, idx) => (
                   <div key={idx} className="border border-gray-100 rounded-2xl p-6 sm:p-8 bg-gray-50">
                       <h4 className="font-bold text-brand-dark text-lg sm:text-xl mb-3">{item.title}</h4>
                       <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                   </div>
                 ))}
               </div>
            </div>
            <div className="flex bg-blue-50 text-brand-dark p-4 rounded-xl items-start gap-3 border border-brand-blue/20">
               <Info className="flex-shrink-0 mt-0.5 text-brand-blue" size={20} />
               <p className="font-medium text-sm">
                 {t.sections.ports.desc}
               </p>
            </div>
          </div>

          {/* Section 6 */}
          <div id="warehouse" className="scroll-mt-28">
            <div className="flex items-center gap-4 mb-6">
              <h3 className="text-2xl font-black text-brand-dark leading-tight">{t.sections.warehouse.title}</h3>
            </div>
            
            <div className="space-y-4">
              {t.sections.warehouse.items.map((item, idx) => (
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

          {/* Section 7 */}
          <div id="insurance" className="scroll-mt-28">
            <div className="flex items-center gap-4 mb-6">
              <h3 className="text-2xl font-black text-brand-dark leading-tight">{t.sections.insurance.title}</h3>
            </div>
            <p className="mb-6 leading-relaxed font-medium text-gray-600">{t.sections.insurance.desc}</p>
            <div className="bg-[#e1f3ff] p-8 lg:p-12 rounded-[40px] border border-[#c1e6ff] relative overflow-hidden">
                <ul className="space-y-4 mb-8">
                  {t.sections.insurance.points.map((point, idx) => (
                    <li key={idx} className={point.desc ? "flex items-start gap-3" : "flex items-center gap-3"}>
                      <div className={`w-6 h-6 rounded-full bg-brand-blue/20 flex items-center justify-center flex-shrink-0 ${point.desc ? 'mt-0.5' : ''}`}>
                         <div className="w-2 h-2 rounded-full bg-brand-blue"></div>
                      </div>
                      {point.desc ? (
                        <span><strong className="text-brand-dark block mb-1">{point.title}</strong> <span className="text-brand-dark/80">{point.desc}</span></span>
                      ) : (
                        <span className="font-bold text-brand-dark">{point.title}</span>
                      )}
                    </li>
                  ))}
                </ul>
                <p className="text-brand-dark/80 font-medium leading-relaxed max-w-2xl">
                  {t.sections.insurance.bottomDesc}
                </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

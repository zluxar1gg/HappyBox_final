import React from 'react';
import { Language } from '../utils/translations';
import { Anchor, ShieldCheck, Scale, Calculator, Package, Info, Plane } from 'lucide-react';
import { TableWrapper } from './TableWrapper';

interface Props {
  language: Language;
  simplified?: boolean;
}

export const UaeAdvancedLogisticsGuide: React.FC<Props> = ({ language, simplified }) => {
  const content = {
    en: {
      title: "China to UAE Shipping Guide 2026: Costs, Customs & Transit Times",
      subtitle: "The technical reference for UAE importers and GCC traders who want to understand the full picture.",
      jumpTo: "Jump to:",
      nav: {
        transit: "Transit Options",
        customs: "UAE Customs & VAT",
        tariffs: "Import Duties",
        types: "Product Types",
        ports: "Ports & Hubs",
        gcc: "GCC Re-export",
        warehouse: "Warehouse Workflow",
        insurance: "Insurance"
      },
      sections: {
        transit: {
          title: "1. Transit Options: Air vs. Sea",
          desc: "Two primary routes connect Shenzhen to the UAE.",
          air: {
            title: "Air Freight (5–9 days)",
            desc: "Via Shenzhen (SZX) or Hong Kong (HKG) to Dubai International (DXB) or Abu Dhabi (AUH). Direct flights and connections via Middle Eastern hubs mean frequent departures and consistent transit times. The default choice for electronics, fashion, branded goods, and anything time-sensitive. Volumetric weight applies — we repack at our Shenzhen warehouse before booking to minimize your chargeable weight.",
            formula: "Air volumetric weight formula: L × W × H (cm) / 5000 = chargeable weight (kg). Example: a 50×50×50 cm box is billed as 20.8 kg regardless of actual weight. Our warehouse team repacks to reduce dead space before booking."
          },
          sea: {
            title: "Sea Freight (25–35 days)",
            desc: "Via Jebel Ali Port — the largest container port in the Middle East. LCL for smaller volumes, FCL for full container loads. Direct sailings from Shekou or Yantian (Shenzhen) to Jebel Ali typically take 18–22 days port-to-port. Most cost-effective for furniture, machinery, construction materials, and bulk wholesale inventory."
          },
          referenceTitle: "Quick reference:",
          headers: ["Situation", "Recommended method"],
          rows: [
            ["Electronics, fashion, branded goods", "Air"],
            ["Urgent restock", "Air"],
            ["Furniture, heavy goods, bulk orders", "Sea"],
            ["Regular commercial inventory, cost-sensitive", "Sea"]
          ]
        },
        customs: {
          title: "2. UAE Customs & VAT: What You Actually Pay",
          points: [
            {
              title: "UAE Federal Customs Authority (FCA)",
              desc: "The UAE operates a unified federal customs system across all seven emirates. Goods are cleared at the point of entry — Jebel Ali for sea freight, DXB or AUH for air — and then move freely within the country. UAE customs clearance is among the fastest in the world when documentation is complete and accurate."
            },
            {
              title: "UAE Customs Duty",
              desc: "The standard rate is 5% of the CIF value (Cost + Insurance + Freight) for most goods. The UAE follows the GCC Common Customs Law, meaning duty rates are harmonized with Saudi Arabia, Qatar, Kuwait, Bahrain, and Oman."
            },
            {
              title: "UAE VAT",
              desc: "A 5% Value Added Tax applies to most imported goods at customs clearance. With HappyBox DDP, we pay this on your behalf — it is included in your quote. You will not receive a VAT invoice on delivery."
            },
            {
              title: "TRN Registration",
              desc: "For DDP shipments with HappyBox, you do not need to register for a UAE Tax Registration Number. We use our own customs bonds and handle the declaration. This is a significant advantage for new importers who have not yet established a UAE legal entity."
            }
          ],
          vatVsDutyTitle: "What DDP means for UAE shipments",
          vatBothIncluded: "DDP means we pay everything: export clearance in China, international freight, UAE customs duty, and UAE VAT. Many providers offer DAP (Delivered At Place) instead — meaning you receive an unexpected duty and VAT bill when the goods arrive. With HappyBox, that never happens."
        },
        tariffs: {
          title: "3. UAE Import Duties 2026: The Full Cost Picture",
          desc: "Standard duty structure:",
          calcTitle: "Standard duty structure:",
          headers: ["Layer", "What it is", "Rate"],
          rows: [
            ["Customs Duty", "% of CIF value, GCC Common Tariff", "5% most goods"],
            ["UAE VAT", "Applied after customs duty", "5%"],
            ["Excise Tax", "Tobacco, energy drinks, e-cigarettes", "50–100%"]
          ],
          formulaBoxTitle: "The Formula",
          formula: "Customs Duty = CIF Value × 5%\nVAT = (CIF Value + Customs Duty) × 5%",
          formulaExample: <>Example: $10,000 CIF value:<br />Duty = $500 → VAT base = $10,500 → VAT = $525 → <strong>Total charges = $1,025</strong></>,
          categoriesTitle: "Important Categories & Exceptions:",
          categoriesDesc: "Duty-exempt categories: Certain food items, medical equipment, and charitable goods may qualify for exemption under UAE law. We verify eligibility during quoting.",
          exciseDesc: "Excise goods: Tobacco, energy drinks, carbonated beverages, and electronic smoking devices carry 50–100% Excise Tax on top of standard customs duty. These require pre-registration with the UAE Federal Tax Authority (FTA) and special handling.",
          categoriesAction: "What we do: We calculate your full landed cost — customs duty + VAT + any applicable excise — before the cargo leaves Shenzhen. With DDP, this is locked into your quote."
        },
        productTypes: {
          title: "4. Shipping from China to UAE by Product Type",
          items: [
            {
              title: "Shipping Electronics from China to UAE",
              desc: "Air freight standard for high-value items. Lithium battery products (power banks, earbuds, e-bikes) require UN38.3 certification and MSDS documentation. Important UAE-specific detail: power adapters must meet Type G plug standards (the same as the UK) for retail sale. We verify documentation and plug compatibility at our Shenzhen warehouse. Electronics are among the most frequently inspected categories at UAE customs."
            },
            {
              title: "Shipping Branded & Luxury Goods from China (Poizon/Dewu)",
              desc: "High demand in Dubai for branded sneakers, apparel, and accessories sourced from Poizon (Dewu). We apply double-box protection — the original brand box (Nike, Yeezy, LV) is placed inside a second protective outer box to prevent crushing during air transit. Air freight only for branded goods. UAE customs applies standard 5% duty on declared CIF value — accurate valuation is important to avoid holds. For dedicated Poizon shipping guidance, see our specialized page."
            },
            {
              title: "Shipping Furniture from China to UAE",
              desc: "Sea freight via Jebel Ali. Much of the furniture exported from the Shenzhen region originates in Foshan — one of China's largest furniture manufacturing hubs, 30 minutes from our warehouse. Fragile items (marble, glass, decorative panels) receive professional crating before loading. Solid wood requires phytosanitary certification. LCL for samples, FCL for full production runs."
            },
            {
              title: "Shipping Clothing & Fashion from China to UAE",
              desc: "Air freight for high-value or branded items, sea for bulk wholesale. UAE labeling requirements include fiber content and country of origin. Arabic labeling may be required for retail sale. The UAE is a major regional hub for fashion re-export to GCC countries."
            },
            {
              title: "Shipping Cosmetics & Beauty Products",
              desc: "Commercial cosmetic imports require MOIAT (Ministry of Industry and Advanced Technology) or Dubai Municipality approval before customs clearance. We flag these at the quoting stage so documentation is prepared before the shipment arrives — unapproved cosmetics are held at the port until registration is confirmed."
            },
            {
              title: "Shipping Construction Materials & Industrial Goods",
              desc: "Sea freight FCL. The UAE construction sector is a major importer of Chinese tiles, sanitaryware, steel components, and fittings. Some categories require Gulf Standards Organization (GSO) certification for UAE market sale. We advise on certification requirements during quoting."
            }
          ]
        },
        ports: {
          title: "5. Ports and Air Hubs: Where Your Cargo Enters the UAE",
          desc: "Last-Mile Delivery in the UAE: UAE addressing is unique — many residential areas, particularly newer villa communities and free zones, do not have formal street addresses. Local delivery relies on mobile-based location sharing and landmark navigation. Our local delivery partners are experienced in this system. When placing your order, WhatsApp location pins are accepted for delivery coordination.",
          items: [
            {
              title: "Jebel Ali Port (Dubai) — Primary Sea Gateway",
              desc: "The largest container port in the Middle East and one of the top 10 globally. Operated by DP World with highly efficient terminal operations — dwell times are typically short compared to congested Western ports. Transit from Shenzhen/Yantian: 22–28 days. The central hub for GCC re-export by sea. Free Zone facilities at Jebel Ali allow goods to be stored and re-exported without paying UAE import duties."
            },
            {
              title: "Dubai International Airport (DXB) — Primary Air Hub",
              desc: "One of the world's busiest air cargo airports. Direct freighter services from Shenzhen and Hong Kong, plus connections via Emirates SkyCargo. Most HappyBox air shipments to UAE arrive here. Customs clearance typically 24–48 hours for compliant shipments."
            },
            {
              title: "Abu Dhabi (Khalifa Port & AUH Airport)",
              desc: "The UAE's second major entry point. Khalifa Port is growing rapidly as an alternative to Jebel Ali. Good option for shipments with final delivery in Abu Dhabi or Al Ain."
            },
            {
              title: "Sharjah Airport (SHJ)",
              desc: "A significant air cargo hub, particularly for smaller freight operators. Some budget air freight routes from China route through Sharjah — transit times are comparable to DXB."
            }
          ]
        },
        gcc: {
          title: "6. GCC Re-Export: Using UAE as Your Regional Hub",
          desc: "The UAE's most valuable logistics feature is its position as the re-export capital of the Middle East. Goods cleared through Jebel Ali or stored in Dubai Free Zones can be forwarded to Saudi Arabia, Qatar, Kuwait, Bahrain, and Oman with well-established customs procedures.",
          how: {
            title: "How it works:",
            desc: "Goods can enter Jebel Ali Free Zone under customs suspension — no UAE import duties paid — and be re-exported to GCC destinations where duties are paid in the destination country instead."
          },
          routesTitle: "Key GCC re-export routes from Dubai:",
          routes: [
            "Saudi Arabia — by truck via the Abu Samra border crossing (Riyadh ~6 hours by road)",
            "Qatar — truck via the Salwa border crossing",
            "Kuwait — truck via Saudi Arabia",
            "Oman — truck via Hatta or Wajajah border crossings"
          ],
          planTitle: "What to plan for:",
          planDesc: "Each GCC country has its own import regulations. Saudi Arabia applies 15% VAT and requires SASO product certification for many categories. We advise on destination-country requirements before routing through Dubai. If you are sourcing from China for distribution across multiple GCC markets, consolidating through our Shenzhen warehouse and clearing once through Dubai is typically the most cost-efficient approach."
        },
        warehouse: {
          title: "7. The Shenzhen Warehouse Workflow",
          items: [
            {
              title: "Incoming QC & Labeling Check",
              desc: "We inspect for factory defects and verify quantities against your packing list. We also check for «Made in China» country-of-origin labeling — mandatory for UAE customs clearance. Missing or incorrect labels are corrected before packing."
            },
            {
              title: "Consolidation",
              desc: "We hold goods from multiple suppliers for up to 30 days at no cost. Everything ships as one consolidated cargo — one freight bill, one customs entry."
            },
            {
              title: "Repacking & Volumetric Optimization",
              desc: "We remove unnecessary factory packaging and repack into the most efficient box configuration to minimize volumetric weight — directly reducing your air freight cost. Branded goods receive double-box protection before packing."
            },
            {
              title: "Export Documentation",
              desc: "We generate the Commercial Invoice, Packing List, and all export documents required for Chinese customs clearance and UAE import entry. Our team handles all communication between Chinese suppliers and UAE customs authorities."
            }
          ]
        },
        insurance: {
          title: "8. All-Risk Cargo Insurance",
          desc: "Standard carrier liability covers as little as $0.50 per lb — far below the actual value of most commercial shipments. For UAE-bound shipments, we particularly recommend insurance for sea freight given port dwell time in high-temperature and humidity conditions.",
          points: [
            {
              title: "Extreme temperature damage",
              desc: "Goods stored at Jebel Ali during summer months face significant heat exposure. All-Risk coverage protects electronics, cosmetics, and heat-sensitive goods."
            },
            {
              title: "General Average (Maritime Law)",
              desc: "If a vessel incident forces cargo sacrifice, all cargo owners share the loss proportionally. Our coverage protects you regardless of whether your specific goods were damaged."
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
          bottomDesc: "Coverage applies from the moment goods leave our Shenzhen warehouse until delivery at your UAE address — or your GCC destination if re-exporting."
        }
      }
    },
    // Russian is loosely translated or copied for now to structure matching, 
    // waiting for proper Russian text. We will leave English in Russian placeholders that the user said they will provide or translate roughly to avoid breaking the UI.
    ru: {
      title: "Гид по доставке из Китая в ОАЭ 2026: цены, таможня и сроки",
      subtitle: "Технический справочник для импортеров и трейдеров.",
      jumpTo: "Быстрый переход:",
      nav: {
        transit: "Варианты транзита",
        customs: "Таможня и НДС",
        tariffs: "Тарифы на импорт",
        types: "Типы товаров",
        ports: "Порты и хабы",
        gcc: "Реэкспорт в GCC",
        warehouse: "Складской цикл",
        insurance: "Страхование"
      },
      sections: {
        transit: {
          title: "1. Варианты транзита: Авиа vs Море",
          desc: "Два основных маршрута соединяют Шэньчжэнь с ОАЭ.",
          air: {
            title: "Авиафрахт (5–9 дней)",
            desc: "Вылеты из Шэньчжэня (SZX) или Гонконга (HKG) в аэропорты Дубая (DXB) или Абу-Даби (AUH). Это основной выбор для электроники, брендов и срочных грузов. Мы переупаковываем товар в Шэньчжэне, чтобы минимизировать объемный вес.",
            formula: "Формула: Д × Ш × В (см) / 5000 = объемный вес (кг)."
          },
          sea: {
            title: "Морские перевозки (25–35 дней)",
            desc: "Через порт Джебель-Али — крупнейший хаб на Ближнем Востоке. Прямые рейсы из Шэньчжэня (Шэкоу или Яньтянь) идут 18–22 дня от порта до порта. Оптимально для мебели, оборудования и стройматериалов."
          },
          referenceTitle: "Краткая справка:",
          headers: ["Ситуация", "Метод"],
          rows: [
            ["Электроника, мода, брендовые товары", "Авиа"],
            ["Срочное пополнение запасов", "Авиа"],
            ["Мебель, тяжелые товары, опт", "Море"],
            ["Регулярный коммерческий сток, важна экономия", "Море"]
          ]
        },
        customs: {
          title: "2. Таможня и НДС в ОАЭ: реальные расходы",
          points: [
            {
              title: "Таможня ОАЭ (FCA)",
              desc: "В Эмиратах действует единая федеральная система. Груз проходит очистку в точке въезда (Джебель-Али или аэропорт DXB) и далее свободно перемещается по стране."
            },
            {
              title: "Таможенная пошлина",
              desc: "Стандартная ставка — 5% от стоимости CIF (товар + страховка + фрахт). Пошлины гармонизированы в рамках соглашения стран GCC."
            },
            {
              title: "НДС в ОАЭ",
              desc: "При растаможке применяется НДС в размере 5%. В сервисе HappyBox DDP мы платим этот налог за вас — он уже включен в расчет. Вы не получите счет за НДС при доставке."
            },
            {
              title: "Регистрация TRN",
              desc: "Для работы по нашей схеме DDP вам не нужно регистрировать налоговый номер в ОАЭ. Мы используем свои таможенные счета, что значительно упрощает жизнь новым импортерам без юрлица в Эмиратах."
            }
          ],
          vatVsDutyTitle: "Что значит DDP для доставки в ОАЭ",
          vatBothIncluded: "HappyBox фиксирует все эти затраты в итоговой цене до выхода груза из Шэньчжэня. Мы оплачиваем все пошлины и налоги за вас."
        },
        tariffs: {
          title: "3. Тарифы на импорт в ОАЭ 2026: структура затрат",
          desc: "Стандартная структура пошлин:",
          calcTitle: "Структура пошлин:",
          headers: ["Статья", "Описание", "Ставка"],
          rows: [
            ["Таможенная пошлина", "Почти на все категории", "5%"],
            ["НДС", "От (Стоимость + Пошлина)", "5%"],
            ["Акцизный сбор", "Табак, энергетики, вейпы", "50–100%"]
          ],
          formulaBoxTitle: "Формула расчета",
          formula: "Пошлина = CIF × 5%\nНДС = (CIF + Пошлина) × 5%",
          formulaExample: <>Пример: CIF $10,000:<br />Пошлина = $500 → База НДС = $10,500 → НДС = $525 → <strong>Итого налогов = $1,025</strong></>,
          categoriesTitle: "Дополнительные условия:",
          categoriesDesc: "Некоторые медицинские и благотворительные товары освобождаются от пошлин.",
          exciseDesc: "Эти товары (акцизные) требуют специальной регистрации в налоговой (FTA).",
          categoriesAction: "Что мы делаем: рассчитываем общую конечную стоимость под ключ, до забора груза."
        },
        productTypes: {
          title: "4. Особенности доставки по типам товаров",
          items: [
            {
              title: "Электроника",
              desc: "Для продажи в розницу вилки должны соответствовать стандарту Type G (британский стандарт). Мы проверяем комплектацию на складе."
            },
            {
              title: "Бренды и люкс (Poizon)",
              desc: "Мы используем метод Double-Box (коробка в коробке), чтобы защитить оригинальную упаковку бренда от повреждений при перелетах."
            },
            {
              title: "Мебель",
              desc: "Большая часть мебели производится в Фошане (30 минут от нашего склада). Хрупкие предметы (мрамор, стекло) упаковываются в профессиональную обрешетку."
            },
            {
              title: "Одежда и текстиль",
              desc: "Авиа для брендовых вещей, море для опта. Маркировка ОАЭ требует указывать состав нитей и страну происхождения."
            },
            {
              title: "Косметика",
              desc: "Коммерческий импорт требует одобрения Министерства промышленности (MOIAT) или муниципалитета Дубая. Мы проверяем статус документов до начала перевозки."
            },
            {
              title: "Стройматериалы",
              desc: "Для некоторых категорий требуются сертификаты соответствия стандартам Залива (GSO)."
            }
          ]
        },
        ports: {
          title: "5. Главные порты и хабы",
          desc: "Доставка до двери в ОАЭ: Часто отправляем по геометкам (pin), так как адреса без конкретных улиц очень распространены.",
          items: [
            {
              title: "Джебель-Али (Дубай)",
              desc: "Крупнейший порт региона. Идеален для реэкспорта в соседние страны. Свободные зоны (Free Zones) позволяют хранить и переотправлять товары без уплаты пошлин ОАЭ."
            },
            {
              title: "Аэропорт Дубай (DXB)",
              desc: "Основной авиахаб. Растаможка обычно занимает 24–48 часов."
            },
            {
              title: "Порт Халифа (Абу-Даби)",
              desc: "Быстрорастущая альтернатива Джебель-Али."
            },
            {
              title: "Аэропорт Шарджи (SHJ)",
              desc: "Многочисленные бюджетные операторы прилетают именно сюда."
            }
          ]
        },
        gcc: {
          title: "6. Реэкспорт в страны Персидского залива (GCC)",
          desc: "Дубай — столица реэкспорта. Грузы, прибывшие в Джебель-Али, могут быть перенаправлены в Саудовскую Аравию, Катар, Кувейт, Бахрейн и Оман.",
          how: {
            title: "Как это работает:",
            desc: "Обратите внимание: в Саудовской Аравии НДС составляет 15% и требуются сертификаты SASO. Мы консультируем по этим вопросам перед отправкой."
          },
          routesTitle: "Ключевые направления:",
          routes: [
            "В Саудовскую Аравию: грузовиком через границу Абу-Самра (Эр-Рияд ~6 часов пути).",
            "В Катар и Кувейт: автотранспортом через территорию Саудовской Аравии.",
            "В Оман: через границы Хатта или Ваджаджа."
          ],
          planTitle: "Что планировать:",
          planDesc: "Мы расскажем, какие правила (НДС, сертификаты типа SASO) нужны для конкретной страны."
        },
        warehouse: {
          title: "7. Складской цикл в Шэньчжэне",
          items: [
            {
              title: "Контроль и маркировка",
              desc: "Проверяем товар на брак и наличие маркировки «Made in China» (обязательно для таможни ОАЭ). Исправляем маркировку при необходимости."
            },
            {
              title: "Консолидация",
              desc: "Бесплатное хранение до 30 дней. Собираем заказы от разных поставщиков в одну партию."
            },
            {
              title: "Переупаковка",
              desc: "Убираем лишнюю заводскую тару для уменьшения объема и защиты брендовых коробок."
            },
            {
              title: "Документация",
              desc: "Готовим инвойсы и упаковочные листы. Сами общаемся с таможней ОАЭ."
            }
          ]
        },
        insurance: {
          title: "8. Страхование грузов",
          desc: "Стандартная ответственность перевозчика ничтожна ($0.50 за фунт). Для ОАЭ мы особенно рекомендуем страховку из-за жары и влажности при хранении в портах.",
          points: [
            { title: "Повреждение от температур", desc: "Защита электроники и косметики от перегрева в порту в летние месяцы." },
            { title: "Общая авария", desc: "Защита от морских законов, обязывающих владельцев груза делить убытки судна." },
            { title: "Кража или недостача", desc: "Полное покрытие в случае пропажи груза." },
            { title: "Повреждение водой", desc: "Покрытие рисков при перевозке." }
          ],
          bottomDesc: "Наш полис All-Risk действует от нашего склада в Шэньчжэне до вашего адреса в ОАЭ или в любой стране GCC."
        }
      }
    }
  };

  const t = content[language] || content.en;

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
              </div>

              <div className="mb-24">
                  {/* Section 1 */}
                  <div className="mb-16">
                      <div className="flex items-center gap-4 mb-6">
                          <div className="w-10 h-10 rounded-full bg-brand-light text-brand-blue font-black flex items-center justify-center flex-shrink-0 text-xl border border-brand-blue/20">1</div>
                          <h3 className="text-2xl font-bold text-brand-dark tracking-tight leading-tight">{t.sections.transit.title.replace(/^\d+\.\s*/, '')}</h3>
                      </div>
                      <div className="w-full">
                          <p className="text-gray-700 leading-relaxed font-medium mb-6">{t.sections.transit.desc}</p>
                          <div className="grid md:grid-cols-2 gap-6 mb-8">
                              {/* Air Freight Card */}
                              <div className="bg-gray-50 rounded-[20px] p-6 border border-gray-100 flex flex-col">
                                  <h4 className="font-bold text-brand-dark text-lg mb-2 flex items-center gap-2">
                                      <Plane className="text-brand-blue" size={20} />
                                      {t.sections.transit.air.title}
                                  </h4>
                                  <p className="text-sm leading-relaxed text-gray-600 mb-4">{t.sections.transit.air.desc}</p>
                              </div>
                              {/* Sea Freight Card */}
                              <div className="bg-gray-50 rounded-[20px] p-6 border border-gray-100 flex flex-col">
                                  <h4 className="font-bold text-brand-dark text-lg mb-2 flex items-center gap-2">
                                      <Anchor className="text-teal-600" size={20} />
                                      {t.sections.transit.sea.title}
                                  </h4>
                                  <p className="text-sm leading-relaxed text-gray-600 mb-4">{t.sections.transit.sea.desc}</p>
                              </div>
                          </div>
                          
                          <div className="inline-flex items-center gap-4 bg-gray-50 border border-gray-200 rounded-2xl px-6 py-4 mb-8">
                             <div className="text-sm font-bold text-brand-dark">{language === 'en' ? 'Volumetric Weight Formula:' : 'Формула объемного веса:'}</div>
                             <div className="font-mono text-brand-blue font-black">{t.sections.transit.air.formula.split('=')[0].replace('Air volumetric weight formula: ', '').replace('Формула: ', '')}</div>
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
                  </div>

                  {/* Section 2 */}
                  <div className="mb-16">
                      <div className="flex items-center gap-4 mb-6">
                          <div className="w-10 h-10 rounded-full bg-brand-light text-brand-blue font-black flex items-center justify-center flex-shrink-0 text-xl border border-brand-blue/20">2</div>
                          <h3 className="text-2xl font-bold text-brand-dark tracking-tight leading-tight">{t.sections.customs.title.replace(/^\d+\.\s*/, '')}</h3>
                      </div>
                      <div className="w-full">
                          <ul className="space-y-6 text-gray-700">
                              {t.sections.customs.points.map((point, idx) => (
                                  <li key={idx}>
                                      <strong className="text-brand-dark block text-lg mb-1">{point.title}</strong>
                                      <p className="text-gray-700 leading-relaxed font-medium">{point.desc}</p>
                                  </li>
                              ))}
                          </ul>
                          <div className="mt-8 bg-gray-50 p-6 md:p-8 rounded-[20px] border border-gray-200">
                              <h4 className="font-bold text-brand-dark text-lg mb-2">{t.sections.customs.vatVsDutyTitle}</h4>
                              <p className="text-gray-600 leading-relaxed">{t.sections.customs.vatBothIncluded}</p>
                          </div>
                      </div>
                  </div>

                  {/* Section 3 */}
                  <div className="mb-16">
                      <div className="flex items-center gap-4 mb-6">
                          <div className="w-10 h-10 rounded-full bg-brand-light text-brand-blue font-black flex items-center justify-center flex-shrink-0 text-xl border border-brand-blue/20">3</div>
                          <h3 className="text-2xl font-bold text-brand-dark tracking-tight leading-tight">{t.sections.tariffs.title.replace(/^\d+\.\s*/, '')}</h3>
                      </div>
                      <div className="w-full">
                          <p className="text-gray-700 leading-relaxed font-medium mb-6">{t.sections.tariffs.desc}</p>
                          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 mb-6">
                              <h4 className="font-bold text-brand-dark text-xl mb-4">{t.sections.tariffs.calcTitle}</h4>
                              <ul className="space-y-3 mb-6">
                                  {t.sections.tariffs.rows.map((row, idx) => (
                                      <li key={idx} className="text-gray-700 font-medium">
                                          <span className="font-bold text-brand-dark">{row[0]}:</span> {row[1]} (<span className="font-mono text-sm text-brand-blue">{row[2]}</span>)
                                      </li>
                                  ))}
                              </ul>
                              <div className="mt-6 pt-6 border-t border-gray-200">
                                  <h4 className="font-bold text-brand-dark mb-2">{t.sections.tariffs.formulaBoxTitle}</h4>
                                  <p className="font-mono text-brand-blue font-bold mb-2 whitespace-pre-line">{t.sections.tariffs.formula}</p>
                                  <p className="text-gray-600 text-sm">{t.sections.tariffs.formulaExample}</p>
                              </div>
                          </div>
                      </div>
                  </div>

                  {/* Section 4 */}
                  <div className="mb-16">
                      <div className="flex items-center gap-4 mb-6">
                          <div className="w-10 h-10 rounded-full bg-brand-light text-brand-blue font-black flex items-center justify-center flex-shrink-0 text-xl border border-brand-blue/20">4</div>
                          <h3 className="text-2xl font-bold text-brand-dark tracking-tight leading-tight">{t.sections.productTypes.title.replace(/^\d+\.\s*/, '')}</h3>
                      </div>
                      <div className="w-full">
                          <div className="space-y-6">
                              {t.sections.productTypes.items.map((item, idx) => (
                                  <p key={idx} className="text-gray-700 leading-relaxed font-medium">
                                      <strong className="text-brand-dark block text-lg mb-1">{item.title}:</strong> {item.desc}
                                  </p>
                              ))}
                          </div>
                      </div>
                  </div>

                  {/* Section 5 Ports */}
                  <div className="mb-16">
                      <div className="flex items-center gap-4 mb-6">
                          <div className="w-10 h-10 rounded-full bg-brand-light text-brand-blue font-black flex items-center justify-center flex-shrink-0 text-xl border border-brand-blue/20">5</div>
                          <h3 className="text-2xl font-bold text-brand-dark tracking-tight leading-tight">{t.sections.ports.title.replace(/^\d+\.\s*/, '')}</h3>
                      </div>
                      <div className="w-full">
                          <p className="text-gray-700 leading-relaxed font-medium mb-6">{t.sections.ports.desc}</p>
                          <div className="space-y-6">
                              {t.sections.ports.items.map((item, idx) => (
                                  <div key={idx}>
                                      <strong className="text-brand-dark block text-xl mb-2">{item.title}</strong>
                                      <p className="text-gray-700 leading-relaxed font-medium">{item.desc}</p>
                                  </div>
                              ))}
                          </div>
                      </div>
                  </div>

                  {/* Section 6 GCC */}
                  <div className="mb-16">
                      <div className="flex items-center gap-4 mb-6">
                          <div className="w-10 h-10 rounded-full bg-brand-light text-brand-blue font-black flex items-center justify-center flex-shrink-0 text-xl border border-brand-blue/20">6</div>
                          <h3 className="text-2xl font-bold text-brand-dark tracking-tight leading-tight">{t.sections.gcc.title.replace(/^\d+\.\s*/, '')}</h3>
                      </div>
                      <div className="w-full">
                          <p className="text-gray-700 leading-relaxed font-medium mb-6">{t.sections.gcc.desc}</p>
                          <div className="space-y-4">
                              <p className="text-gray-700 leading-relaxed font-medium"><strong className="text-brand-dark">{t.sections.gcc.how.title}</strong> {t.sections.gcc.how.desc}</p>
                              <div>
                                  <strong className="text-brand-dark block mb-2">{t.sections.gcc.routesTitle}</strong>
                                  <ul className="list-disc list-inside space-y-1 text-gray-700 font-medium">
                                      {t.sections.gcc.routes.map((route, idx) => (
                                          <li key={idx} className="ml-2">{route}</li>
                                      ))}
                                  </ul>
                              </div>
                              <p className="text-gray-700 leading-relaxed font-medium mt-4"><strong className="text-brand-dark">{t.sections.gcc.planTitle}</strong> {t.sections.gcc.planDesc}</p>
                          </div>
                      </div>
                  </div>

                  {/* Section 7 Warehouse */}
                  <div className="mb-16">
                      <div className="flex items-center gap-4 mb-6">
                          <div className="w-10 h-10 rounded-full bg-brand-light text-brand-blue font-black flex items-center justify-center flex-shrink-0 text-xl border border-brand-blue/20">7</div>
                          <h3 className="text-2xl font-bold text-brand-dark tracking-tight leading-tight">{t.sections.warehouse.title.replace(/^\d+\.\s*/, '')}</h3>
                      </div>
                      <div className="w-full">
                          <div className="space-y-6">
                              {t.sections.warehouse.items.map((item, idx) => (
                                  <p key={idx} className="text-gray-700 leading-relaxed font-medium">
                                      <strong className="text-brand-dark block text-lg mb-1">{item.title}:</strong> {item.desc}
                                  </p>
                              ))}
                          </div>
                      </div>
                  </div>

                  {/* Section 8 Insurance */}
                  <div className="mb-16">
                      <div className="flex items-center gap-4 mb-6">
                          <div className="w-10 h-10 rounded-full bg-brand-light text-brand-blue font-black flex items-center justify-center flex-shrink-0 text-xl border border-brand-blue/20">8</div>
                          <h3 className="text-2xl font-bold text-brand-dark tracking-tight leading-tight">{t.sections.insurance.title.replace(/^\d+\.\s*/, '')}</h3>
                      </div>
                      <div className="w-full">
                          <p className="text-gray-700 leading-relaxed font-medium mb-6">{t.sections.insurance.desc}</p>
                          <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700 font-medium">
                              {t.sections.insurance.points.map((point, idx) => (
                                  <li key={idx} className="pl-2">{point.title}</li>
                              ))}
                          </ul>
                          <p className="text-gray-600 font-medium italic">{t.sections.insurance.bottomDesc}</p>
                      </div>
                  </div>
              </div>
          </div>
      );
  }

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
            <button onClick={() => scrollToSection('gcc')} className="text-brand-blue hover:text-brand-dark transition-colors">{t.nav.gcc}</button>
            <span className="text-gray-300">•</span>
            <button onClick={() => scrollToSection('warehouse')} className="text-brand-blue hover:text-brand-dark transition-colors">{t.nav.warehouse}</button>
            <span className="text-gray-300">•</span>
            <button onClick={() => scrollToSection('insurance')} className="text-brand-blue hover:text-brand-dark transition-colors">{t.nav.insurance}</button>
          </div>
        </div>

        <div className="text-gray-800 text-lg leading-relaxed pt-10">
          
          {/* Section 1 */}
          <div id="transit" className="scroll-mt-28 mb-24">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 rounded-full bg-brand-light text-brand-blue font-black flex items-center justify-center flex-shrink-0 text-xl border border-brand-blue/20">1</div>
              <h3 className="text-2xl font-bold text-brand-dark tracking-tight leading-tight">{t.sections.transit.title.replace(/^\d+\.\s*/, '')}</h3>
            </div>
            <div className="w-full">
            <p className="mb-8 leading-relaxed font-medium text-gray-700">{t.sections.transit.desc}</p>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 rounded-[20px] p-6 border border-gray-100">
                <h4 className="font-bold text-brand-dark text-lg mb-2">{t.sections.transit.air.title}</h4>
                <p className="text-sm leading-relaxed text-gray-600 mb-4">{t.sections.transit.air.desc}</p>
                <div className="bg-brand-blue/5 p-4 rounded-xl border border-brand-blue/10">
                  <p className="text-xs font-mono text-brand-dark">{t.sections.transit.air.formula}</p>
                </div>
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
          </div>

          {/* Section 2 */}
          <div id="customs" className="scroll-mt-28 mb-24">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 rounded-full bg-brand-light text-brand-blue font-black flex items-center justify-center flex-shrink-0 text-xl border border-brand-blue/20">2</div>
              <h3 className="text-2xl font-bold text-brand-dark tracking-tight leading-tight">{t.sections.customs.title.replace(/^\d+\.\s*/, '')}</h3>
            </div>
            <div className="w-full">
            <ul className="space-y-6 text-gray-700">
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

            <div className="mt-8 bg-brand-blue/5 p-6 md:p-8 rounded-[30px] border border-brand-blue/10">
               <h4 className="font-bold text-brand-dark text-xl mb-3">{t.sections.customs.vatVsDutyTitle}</h4>
               <p className="font-medium text-brand-blue leading-relaxed text-lg">{t.sections.customs.vatBothIncluded}</p>
            </div>
            </div>
          </div>

          {/* Section 3 */}
          <div id="tariffs" className="scroll-mt-28 mb-24">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 rounded-full bg-brand-light text-brand-blue font-black flex items-center justify-center flex-shrink-0 text-xl border border-brand-blue/20">3</div>
              <h3 className="text-2xl font-bold text-brand-dark tracking-tight leading-tight">{t.sections.tariffs.title.replace(/^\d+\.\s*/, '')}</h3>
            </div>
            <div className="w-full">
            <p className="mb-8 leading-relaxed font-medium text-gray-700">{t.sections.tariffs.desc}</p>
            
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
                      <td className="py-4 px-6 text-gray-600 font-bold">{row[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </TableWrapper>

            <div className="bg-brand-dark text-white rounded-[30px] p-8 lg:p-10 shadow-lg mb-8">
              <h4 className="font-bold text-white/60 mb-3 uppercase tracking-wide text-sm">{t.sections.tariffs.formulaBoxTitle}</h4>
              <div className="font-mono text-xl font-bold mb-6 whitespace-pre-wrap leading-loose">
                <span className="text-brand-yellow font-sans">{t.sections.tariffs.formula}</span>
              </div>
              <p className="text-white/80 font-medium text-base leading-relaxed">
                {t.sections.tariffs.formulaExample}
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-[30px] border border-gray-100">
                <h4 className="font-bold text-brand-dark text-xl mb-4">{t.sections.tariffs.categoriesTitle}</h4>
                <p className="text-gray-700 leading-relaxed mb-4 font-medium">{t.sections.tariffs.categoriesDesc}</p>
                <p className="text-gray-700 leading-relaxed mb-6 font-medium">{t.sections.tariffs.exciseDesc}</p>
                <p className="text-gray-700 leading-relaxed font-medium bg-white p-4 rounded-xl border border-gray-100 shadow-sm"><strong>{language === 'ru' ? 'Что мы делаем:' : 'What we do:'}</strong> {t.sections.tariffs.categoriesAction.replace('What we do: ', '').replace('Что мы делаем: ', '')}</p>
            </div>
            </div>
          </div>

          {/* Section 4 */}
          <div id="product-types" className="scroll-mt-28 mb-24">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 rounded-full bg-brand-light text-brand-blue font-black flex items-center justify-center flex-shrink-0 text-xl border border-brand-blue/20">4</div>
              <h3 className="text-2xl font-bold text-brand-dark tracking-tight leading-tight">{t.sections.productTypes.title.replace(/^\d+\.\s*/, '')}</h3>
            </div>
            <div className="w-full">
            
            <div className="space-y-6">
              {t.sections.productTypes.items.map((item, idx) => (
                <div key={idx} className={`border rounded-2xl p-6 md:p-8 shadow-sm ${idx === 1 ? 'bg-brand-blue text-white border-brand-blue' : 'bg-white border-gray-100'}`}>
                  <h4 className={`font-bold text-xl mb-3 ${idx === 1 ? 'text-white' : 'text-brand-dark'}`}>{item.title}</h4>
                  <p className={`leading-relaxed font-medium ${idx === 1 ? 'text-white/80' : 'text-gray-700'}`}>{item.desc}</p>
                </div>
              ))}
            </div>
            </div>
          </div>

          {/* Section 5 */}
          <div id="ports" className="scroll-mt-28 mb-24">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 rounded-full bg-brand-light text-brand-blue font-black flex items-center justify-center flex-shrink-0 text-xl border border-brand-blue/20">5</div>
              <h3 className="text-2xl font-bold text-brand-dark tracking-tight leading-tight">{t.sections.ports.title.replace(/^\d+\.\s*/, '')}</h3>
            </div>
            <div className="w-full">
            <div className="space-y-6 mb-8">
               <div className="space-y-6">
                 {t.sections.ports.items.map((item, idx) => (
                   <div key={idx} className="border border-gray-100 rounded-2xl p-6 md:p-8 bg-gray-50 shadow-sm">
                       <h4 className="font-bold text-brand-dark text-xl mb-3">{item.title}</h4>
                       <p className="text-gray-700 font-medium leading-relaxed">{item.desc}</p>
                   </div>
                 ))}
               </div>
            </div>
            <div className="flex bg-blue-50 text-brand-dark p-6 rounded-2xl items-start gap-4 border border-brand-blue/20">
               <Info className="flex-shrink-0 mt-1 text-brand-blue" size={24} />
               <p className="font-medium leading-relaxed">
                 {t.sections.ports.desc}
               </p>
            </div>
            </div>
          </div>

          {/* Section 6 GCC */}
          <div id="gcc" className="scroll-mt-28 mb-24">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 rounded-full bg-brand-light text-brand-blue font-black flex items-center justify-center flex-shrink-0 text-xl border border-brand-blue/20">6</div>
              <h3 className="text-2xl font-bold text-brand-dark tracking-tight leading-tight">{t.sections.gcc.title.replace(/^\d+\.\s*/, '')}</h3>
            </div>
            <div className="w-full">
            <p className="mb-8 leading-relaxed font-medium text-gray-700">{t.sections.gcc.desc}</p>
            
            <div className="space-y-6">
              <div className="bg-gray-50 border border-gray-100 p-6 md:p-8 rounded-[30px] shadow-sm">
                 <h4 className="font-bold text-brand-dark text-xl mb-3">{t.sections.gcc.how.title}</h4>
                 <p className="text-gray-700 font-medium leading-relaxed mb-8">{t.sections.gcc.how.desc}</p>
                 <h4 className="font-bold text-brand-dark text-lg mb-4">{t.sections.gcc.routesTitle}</h4>
                 <ul className="space-y-3">
                   {t.sections.gcc.routes.map((route, idx) => (
                      <li key={idx} className="flex gap-3 text-gray-700 font-medium">
                        <span className="text-brand-blue font-bold opacity-50 mt-0.5">→</span>
                        {route}
                      </li>
                   ))}
                 </ul>
              </div>
              <div className="bg-brand-blue/5 border border-brand-blue/10 p-6 md:p-8 rounded-[30px]">
                 <h4 className="font-bold text-brand-dark text-xl mb-3">{t.sections.gcc.planTitle}</h4>
                 <p className="text-gray-700 font-medium leading-relaxed">{t.sections.gcc.planDesc}</p>
              </div>
            </div>
            </div>
          </div>


          {/* Section 7 */}
          <div id="warehouse" className="scroll-mt-28 mb-24">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 rounded-full bg-brand-light text-brand-blue font-black flex items-center justify-center flex-shrink-0 text-xl border border-brand-blue/20">7</div>
              <h3 className="text-2xl font-bold text-brand-dark tracking-tight leading-tight">{t.sections.warehouse.title.replace(/^\d+\.\s*/, '')}</h3>
            </div>
            <div className="w-full">
            
            <div className="space-y-6">
              {t.sections.warehouse.items.map((item, idx) => (
                <div key={idx} className="bg-gray-50 p-6 md:p-8 rounded-[30px] border border-gray-100 flex gap-6 shadow-sm">
                  <div className="font-black text-brand-blue text-5xl opacity-20 mt-1">0{idx + 1}</div>
                  <div>
                    <h4 className="font-bold text-brand-dark text-xl mb-3">{item.title}</h4>
                    <p className="text-gray-700 font-medium leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            </div>
          </div>

          {/* Section 8 */}
          <div id="insurance" className="scroll-mt-28 mb-24">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 rounded-full bg-brand-light text-brand-blue font-black flex items-center justify-center flex-shrink-0 text-xl border border-brand-blue/20">8</div>
              <h3 className="text-2xl font-bold text-brand-dark tracking-tight leading-tight">{t.sections.insurance.title.replace(/^\d+\.\s*/, '')}</h3>
            </div>
            <div className="w-full">
            <p className="mb-8 leading-relaxed font-medium text-gray-700">{t.sections.insurance.desc}</p>
            <div className="bg-[#e1f3ff] p-8 lg:p-12 rounded-[40px] border border-[#c1e6ff] relative overflow-hidden">
                <ul className="space-y-6 mb-10">
                  {t.sections.insurance.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-brand-blue/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                         <div className="w-3 h-3 rounded-full bg-brand-blue"></div>
                      </div>
                      {point.desc ? (
                        <span><strong className="text-brand-dark block text-xl mb-2">{point.title}</strong> <span className="text-brand-dark/80 leading-relaxed font-medium">{point.desc}</span></span>
                      ) : (
                        <span className="font-bold text-brand-dark text-xl">{point.title}</span>
                      )}
                    </li>
                  ))}
                </ul>
                <p className="text-brand-dark/80 font-medium leading-relaxed italic">
                  {t.sections.insurance.bottomDesc}
                </p>
            </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

import { Language } from './translations';

export interface FaqItem {
  question: string;
  answer: string;
}

export interface PageFaqsStructure {
  pages: Record<string, Record<Language, FaqItem[]>>;
  blogPosts: Record<string, Record<Language, FaqItem[]>>;
}

export const pageFaqs: PageFaqsStructure = {
  pages: {
  "usa": {
    "en": [
      {
        "question": "What if my supplier sends junk?",
        "answer": "Our Shenzhen Warehouse acts as your quality buffer. We provide photos, videos, and technical checks before the cargo leaves China. If it's broken, we return it to the factory immediately."
      },
      {
        "question": "What if the cargo is lost or damaged?",
        "answer": "We offer Zero-Risk Insurance. Unlike others who hide this in the fine print, we offer \"All-Risk\" coverage for a small fee. If your goods are lost during transit, you receive a 100% refund of the declared value."
      },
      {
        "question": "Am I too small for you?",
        "answer": "We work with growing businesses. Our minimums are realistic: starting from 0.1 kg for Air and 51 kg for Sea Freight. Whether you are a startup or an established brand, you get the same level of expertise."
      },
      {
        "question": "What about holidays and delays?",
        "answer": "Logistics isn't always perfect. We provide a Realistic Shipping Calendar, accounting for Chinese New Year, Golden Week, and US port congestion (like LAX or Long Beach) to ensure you never run out of stock."
      }
    ],
    "ru": [
      {
        "question": "Что если поставщик пришлет мусор?",
        "answer": "Наш склад в Шэньчжэне — это ваш фильтр качества. Мы проверяем всё до отправки. Если нашли брак — сразу возвращаем товар на завод."
      },
      {
        "question": "Что если груз потеряют или повредят?",
        "answer": "Мы предлагаем страховку «от всех рисков» (All-Risk). В случае утери или повреждения вы получаете 100% возврат заявленной стоимости. Никакого мелкого шрифта."
      },
      {
        "question": "У меня небольшой заказ, вы со мной работаете?",
        "answer": "Да. Наши лимиты: от 0.1 кг для авиа и от 51 кг для моря. Мы даем одинаковый уровень экспертизы и стартапам, и крупным брендам."
      },
      {
        "question": "Как быть с праздниками и задержками?",
        "answer": "Мы предоставляем реалистичный календарь отгрузок с учетом китайского Нового года и заторов в портах (LAX или Long Beach), чтобы ваш бизнес работал без пауз."
      }
    ]
  },
  "eu": {
    "en": [
      {
        "question": "What if my supplier sends defective goods?",
        "answer": "Our Shenzhen warehouse is your quality buffer. We inspect every shipment with photos and technical checks before it leaves China. Defective items go back to the factory immediately."
      },
      {
        "question": "What if the cargo is lost or damaged?",
        "answer": "We provide All-Risk cargo insurance. If your goods are lost or damaged in transit, you receive a 100% refund of the declared value. No fine print."
      },
      {
        "question": "Am I too small for you?",
        "answer": "Our minimums are accessible: from 0.1 kg for Air and from 1 CBM for Sea. Startups and established brands get the same service level."
      },
      {
        "question": "What about Chinese holidays and EU port delays?",
        "answer": "Chinese New Year, Golden Week, and seasonal port congestion are predictable. We plan your shipment calendar around them so you never run out of stock."
      }
    ],
    "ru": [
      {
        "question": "А что если поставщик пришлет брак?",
        "answer": "Наш склад в Шэньчжэне служит буфером качества. Мы проверяем каждую партию с фотоотчетами до отправки из Китая. Бракованный товар немедленно возвращается на фабрику."
      },
      {
        "question": "А что если груз потеряется или повредится?",
        "answer": "Мы предоставляем страховку от всех рисков (All-Risk). В случае порчи или утери груза в пути, вы получаете 100% возврат заявленной стоимости. Никакого мелкого шрифта."
      },
      {
        "question": "Я не слишком маленький клиент для вас?",
        "answer": "У нас реалистичные минимумы: от 0.1 кг для авиа и от 1 куба (CBM) для моря. И стартапы, и крупные бренды получают одинаково высокий уровень сервиса."
      },
      {
        "question": "А как же праздники и задержки в портах?",
        "answer": "Китайский Новый год, Золотая Неделя и пробки в портах можно предвидеть. Мы планируем календарь отправок так, чтобы у вас всегда был товар на складе."
      }
    ]
  },
  "uae": {
    "en": [
      {
        "question": "What if my supplier sends defective goods?",
        "answer": "Our Shenzhen warehouse is your quality buffer. Every shipment is inspected with photos and videos before it leaves China. Defective items go back to the factory immediately."
      },
      {
        "question": "What if the cargo is lost or damaged?",
        "answer": "We provide All-Risk cargo insurance. If your goods are lost or damaged in transit, you receive a 100% refund of the declared value. No fine print."
      },
      {
        "question": "Am I too small for you?",
        "answer": "Our minimums are accessible: from 0.1 kg for Air and from 1 CBM for Sea. Startups and established importers get the same service level."
      },
      {
        "question": "What about delays?",
        "answer": "Chinese New Year, Golden Week, and Jebel Ali congestion are predictable. We plan your shipment calendar around them so you never run out of stock."
      }
    ],
    "ru": [
      {
        "question": "Что если поставщик пришлет брак?",
        "answer": "Наш склад — ваш фильтр качества. Мы проверяем каждую посылку перед отправкой из Китая. Брак возвращается производителю немедленно."
      },
      {
        "question": "Что если груз потеряют или повредят?",
        "answer": "Мы предоставляем страховку All-Risk. При утере или повреждении в пути вы получаете 100% возврат заявленной стоимости. Без мелкого шрифта."
      },
      {
        "question": "Подходит ли сервис для малого бизнеса?",
        "answer": "Да. Наши лимиты: от 0.1 кг для авиа и от 1 куба для моря. Стартапы получают тот же уровень сервиса, что и крупные импортеры."
      },
      {
        "question": "Как быть с задержками?",
        "answer": "Праздники в Китае и загруженность порта Джебель-Али предсказуемы. Мы заранее планируем график, чтобы ваш сток всегда был полон."
      }
    ]
  },
  "canada": {
    "en": [
      {
        "question": "Do I need a Canadian Business Number (BN) to import?",
        "answer": "No! With our DDP service, we act as the Importer of Record. You simply receive your goods at your door with no customs hassles."
      },
      {
        "question": "What about GST and HST?",
        "answer": "All Canadian import duties, GST, and HST are included in our initial DDP quote. You will not receive any surprise tax bills later."
      },
      {
        "question": "Can you ship directly to Amazon FBA in Canada?",
        "answer": "Yes, we ship to all major Canadian FBA centers (like YYZ4, YVR1) and ensure your shipment meets Amazon's strict labeling and pallet requirements."
      }
    ],
    "ru": [
      {
        "question": "Нужен ли мне канадский Business Number (BN) для импорта?",
        "answer": "Нет! В рамках услуги DDP мы выступаем импортером. Вы просто получаете груз у своей двери без таможенной волокиты."
      },
      {
        "question": "Что насчет налогов GST и HST?",
        "answer": "Все канадские пошлины, GST и HST уже включены в наш тариф DDP. Никаких внезапных счетов от налоговых органов."
      },
      {
        "question": "Вы доставляете напрямую на склады Amazon FBA в Канаде?",
        "answer": "Да, мы доставляем на все крупные склады FBA (YYZ4, YVR1 и др.) с соблюдением строгих правил упаковки и маркировки Amazon."
      }
    ]
  },
  "australia": {
    "en": [
      {
        "question": "How is volumetric weight calculated?",
        "answer": "Air carriers and local Australian couriers charge based on volume if a box is large but light. The formula is: Length × Width × Height (cm) / 6000 or 5000 = Volumetric Weight (kg)."
      },
      {
        "question": "Do I have to pay Australian GST?",
        "answer": "No! All shipments are DDP (Delivered Duty Paid). Our flat-rate DDP service absorbs the 10% GST, customs clearance fees, and import duties. You don't need an Australian Business Number (ABN) or a customs broker to receive your cargo cleared."
      },
      {
        "question": "What if it gets lost or damaged on the ocean?",
        "answer": "We offer All-Risk Insurance that covers 100% of your declared cargo value against water damage, theft, or handling damage from the moment it leaves Shenzhen until it arrives at your Australian address."
      }
    ],
    "ru": [
      {
        "question": "Как рассчитывается объемный вес?",
        "answer": "Австралийские линии используют формулу: Длина × Ширина × Высота (см) / 6000 (или 5000) = Объемный вес (кг). Оплачивается большее значение из физического или объемного веса."
      },
      {
        "question": "Нужно ли мне платить австралийский GST?",
        "answer": "Нет! Все отправления идут по DDP. В наш тариф уже заложен 10% GST и локальные пошлины. Вам не нужен ABN (Australian Business Number) или таможенный брокер."
      },
      {
        "question": "Застрахован ли мой груз?",
        "answer": "Да, мы предоставляем страховку All-Risk. Она покрывает 100% заявленной стоимости от повреждений, потери или намокания на море, с момента отправки до получения."
      }
    ]
  },
  "thailand": {
    "en": [
      {
        "question": "How is Land Freight volumetric weight calculated?",
        "answer": "The formula is: Length (cm) × Width (cm) × Height (cm) / 6000 = Volumetric Weight (kg). We charge based on whichever is greater: the actual weight or the volumetric weight."
      },
      {
        "question": "Do I need to deal with Thai Customs?",
        "answer": "No! All shipments are DDP (Delivered Duty Paid). We handle everything at the border."
      },
      {
        "question": "What if it gets lost or damaged?",
        "answer": "To protect regular buyers and businesses alike, we offer All-Risk Insurance. If your parcel is lost or damaged during the overland truck journey or air transit, you receive a 100% refund of the declared value. Your capital and your personal purchases are always safe with HappyBox."
      }
    ],
    "ru": [
      {
        "question": "Как рассчитывается объемный вес для автодоставки?",
        "answer": "Формула: Длина (см) × Ширина (см) × Высота (см) / 6000 = Объемный вес (кг). Оплачивается тот вес, который больше — фактический или объемный."
      },
      {
        "question": "Нужно ли мне общаться с тайской таможней?",
        "answer": "Нет! Все отправления идут по системе DDP. Мы решаем все вопросы на границе самостоятельно."
      },
      {
        "question": "Что если посылка потеряется или повредится?",
        "answer": "Для защиты как обычных покупателей, так и бизнеса, мы предлагаем страхование All-Risk. В случае утери или повреждения во время авто или авиа транзита, вы получаете 100% возврат заявленной стоимости. Ваши деньги и покупки в безопасности с HappyBox."
      }
    ]
  },
  "indonesia": {
    "en": [
      {
        "question": "Do I need an import license (API) or tax ID (NPWP)?",
        "answer": "No! All shipments are DDP (Delivered Duty Paid). Our flat-rate DDP channel absorbs the declaration processes, customs broker fees, setup, and relevant import taxes/VAT under our entity."
      },
      {
        "question": "What about SNI or BPOM certifications?",
        "answer": "Many product categories entering Indonesia legally require SNI (Standar Nasional Indonesia). We filter and profile your goods. Our dedicated DDP channels are designed to handle consumer goods safely without you needing to obtain individual SNI or BPOM certificates."
      },
      {
        "question": "How do you calculate Ocean Freight CBM?",
        "answer": "Sea freight is billed by Cubic Meters (CBM). The formula is: Length × Width × Height (cm) / 1,000,000 = CBM. Our warehouse team repacks poorly boxed factory items for free to keep your CBM as low as possible."
      }
    ],
    "ru": [
      {
        "question": "Нужны ли мне лицензия (API) или ИНН (NPWP)?",
        "answer": "Нет! Вся доставка DDP (Delivered Duty Paid). Мы берем на себя процессы декларирования, брокерские сборы, пошлины и НДС. Оформляем все на свое юрлицо."
      },
      {
        "question": "Что насчет сертификатов SNI или BPOM?",
        "answer": "Многие товары (игрушки, электроника) требуют сертификации SNI. Наш выделенный канал DDP позволяет безопасно провозить такие категории без необходимости получать индивидуальные сертификаты SNI или BPOM."
      },
      {
        "question": "Как рассчитывается куб для морской доставки?",
        "answer": "Морской фрахт рассчитывается по кубическим метрам (CBM). Формула: Длина × Ширина × Высота (см) / 1,000,000. Наш склад бесплатно переупаковывает товары из плохой заводской тары, чтобы снизить ваш CBM."
      }
    ]
  },
  "israel": {
    "en": [
      {
        "question": "Do I need a Smart-Card or import registration?",
        "answer": "No! Thanks to our DDP structure, we conduct the customs clearance through our own entities. You do not need any importer registrations."
      },
      {
        "question": "How does Israeli Customs tax work?",
        "answer": "Imports face a standard 17% VAT, potential Customs Duties, and Purchase Tax depending on the HS code. Our DDP rate already absorbs all these costs."
      },
      {
        "question": "What if my goods get damaged or lost?",
        "answer": "HappyBox offers All-Risk Insurance protecting 100% of your declared value from the moment it reaches our Shenzhen facility until signed for at your address in Israel."
      }
    ],
    "ru": [
      {
        "question": "Нужна ли мне смарт-карта или регистрация импортера?",
        "answer": "Нет! Благодаря системе DDP мы проводим таможенную очистку через наши собственные компании. Вам не нужно оформлять импортные документы."
      },
      {
        "question": "Как рассчитываются налоги в Израиле?",
        "answer": "Обычно импорт облагается стандартным НДС 17% (Маам), таможенными пошлинами (Мехес) и налогом на покупку. Наш DDP тариф уже полностью покрывает все эти статьи расходов."
      },
      {
        "question": "А если груз повредят или потеряют в пути?",
        "answer": "Мы предлагаем страховку All-Risk. Она покрывает 100% заявленной стоимости от повреждений, влаги или утери груза с момента получения в Китае и до вручения в Израиле."
      }
    ]
  },
  "georgia": {
    "en": [
      {
        "question": "How is volumetric weight calculated?",
        "answer": "Logistics costs are calculated based on whichever is greater: actual scale weight or volumetric size. The Volumetric Formula is: Length × Width × Height (cm) / 6000 or 5000 = Volumetric Weight (kg)."
      },
      {
        "question": "Do I have to deal with Georgian customs in Tbilisi?",
        "answer": "No! All shipments are DDP (Delivered Duty Paid). Our flat-rate DDP channel absorbs the declaration processes, customs broker fees, and relevant import taxes/VAT. You do not need to register as an international importer."
      },
      {
        "question": "What if it gets damaged in transit?",
        "answer": "We offer All-Risk Insurance. Given that land transit involves multi-country border crossings and ferry transfers, our insurance covers 100% of your declared value against handling damage or transit loss."
      }
    ],
    "ru": [
      {
        "question": "Как рассчитывается объемный вес?",
        "answer": "Затраты зависят от того, что больше: фактический или объемный вес. Формула: Длина × Ширина × Высота (см) / 6000 (или 5000) = Объемный вес (кг)."
      },
      {
        "question": "Нужно ли мне общаться с грузинской таможней?",
        "answer": "Нет! Вся доставка работает по принциту DDP (Delivered Duty Paid). Наш тариф покрывает все таможенные процедуры, услуги брокера и налоги (НДС/пошлины). Вам не нужно регистрироваться импортером."
      },
      {
        "question": "А если груз повредят в пути?",
        "answer": "Мы предлагаем страховку All-Risk. Так как автодоставка включает несколько пересечений границ и паром, страховка покрывает 100% стоимости товара от повреждений или потерь."
      }
    ]
  },
  "south-africa": {
    "en": [
      {
        "question": "Do I need an Import Code to receive goods in South Africa?",
        "answer": "No! Thanks to our DDP (Delivered Duty Paid) structure, we clear the shipment under our own licensed entities. You simply receive your cargo at the door."
      },
      {
        "question": "How does South African Customs tax differ?",
        "answer": "Unlike many regions, South Africa evaluates Import VAT applying a 10% upliftment on the customs value. But with our DDP rate, all duties (0-45%) and the 15% VAT are fully absorbed."
      },
      {
        "question": "What if it gets damaged or lost?",
        "answer": "Due to long maritime routes and port handling, HappyBox offers All-Risk Insurance protecting 100% of your declared value from the moment it reaches our Shenzhen facility until signed for at your address."
      }
    ],
    "ru": [
      {
        "question": "Мне нужен Импортный Код для получения груза?",
        "answer": "Нет. С нашей DDP-цепочкой мы растамаживаем Ваш груз под собственные лицензии. Вы просто получаете его дома/в офисе без лишних бумаг."
      },
      {
        "question": "Что такое 10% «upliftment» в налогах ЮАР?",
        "answer": "При расчете НДС (15%) таможня ЮАР искусственно увеличивает таможенную стоимость на 10%. Однако это уже заложено в нашу DDP цену. От вас — больше никаких доплат."
      },
      {
        "question": "Застрахован ли мой груз?",
        "answer": "Да, долгие морские маршруты несут риски. Мы предлагаем All-Risk Страхование (100% защиты от потери товара, намокания или физических повреждений) с момента прибытия на склад в Китае."
      }
    ]
  },
  "argentina": {
    "en": [
      {
        "question": "How is volumetric weight calculated?",
        "answer": "Air cargo and local Argentine delivery networks utilize the standard volumetric formula to assess billable weight. The formula is: Length × Width × Height (cm) / 5000 or 6000 = Volumetric Weight (kg)."
      },
      {
        "question": "Do I have to pay Argentine IVA or duties?",
        "answer": "No! All shipments are DDP (Delivered Duty Paid). We cover all import duties, VAT (IVA), and statistical fees. You receive the package cleared."
      },
      {
        "question": "What if it gets lost or damaged on the ocean?",
        "answer": "Because shipments to Argentina travel vast distances, we highly recommend our All-Risk Insurance. It covers 100% of the declared cargo value against maritime loss or handling damage."
      }
    ],
    "ru": [
      {
        "question": "Как рассчитывается объемный вес?",
        "answer": "Авиакомпании и местные службы логистики используют формулу: Длина × Ширина × Высота (см) / 5000 (или 6000) = Объемный вес (кг). Вы платите за большее значение."
      },
      {
        "question": "Нужно ли мне платить аргентинский НДС (IVA) или пошлины?",
        "answer": "Нет! Вся наша логистика в Аргентину — это DDP. Мы сами оплачиваем аргентинские пошлины, налоги и сборы."
      },
      {
        "question": "Что если груз будет потерян или поврежден на море?",
        "answer": "Доставка в Южную Америку — это огромное расстояние. Мы предоставляем страховку All-Risk, покрывающую 100% стоимости товара от потерь и повреждений."
      }
    ]
  },
  "alibaba": {
    "en": [
      {
        "question": "What if the supplier overcharges on shipping?",
        "answer": "Always request the EXW (Ex Works) price from your supplier and compare their shipping quote with ours. Our rates are typically 30–50% lower than what Alibaba suppliers offer directly — because we ship consolidated volume, not single orders."
      },
      {
        "question": "What if the goods arrive defective?",
        "answer": "We inspect every shipment at our Shenzhen warehouse before it ships internationally. Photos and videos sent to you for confirmation. Defective or incorrect goods go back to the supplier while still in China — not after a trans-Pacific journey."
      },
      {
        "question": "What if I'm ordering from multiple suppliers?",
        "answer": "We consolidate orders from multiple Alibaba suppliers — and from 1688, Taobao, and other platforms — into one international shipment. One freight bill, one customs entry, one tracking number."
      },
      {
        "question": "What if I'm not sure the supplier is reliable?",
        "answer": "We verify suppliers before purchase — checking trade history, response rate, and production capacity. For new supplier relationships, we always recommend a sample order first. We can consolidate samples from multiple factories into one small package."
      }
    ],
    "ru": [
      {
        "question": "Что если поставщик завышает цену на доставку?",
        "answer": "Всегда запрашивайте у поставщика цену EXW (франко-завод) и сравнивайте его расчет доставки с нашим. Наши тарифы обычно на 30–50% ниже, чем напрямую от поставщиков Alibaba, так как мы отправляем консолидированные объемы."
      },
      {
        "question": "Что если товар придет с браком?",
        "answer": "Мы проверяем каждую партию на складе в Шэньчжэне до международной отправки. Фото и видео отправляются вам на подтверждение. Бракованный или неверный товар возвращается поставщику еще в Китае, а не после путешествия через океан."
      },
      {
        "question": "Что если я заказываю у нескольких поставщиков?",
        "answer": "Мы консолидируем заказы от разных поставщиков Alibaba (а также с 1688, Taobao и других платформ) в одну международную отправку. Один счет за фрахт, одна таможенная декларация, один трек-номер."
      },
      {
        "question": "Что если я не уверен в надежности поставщика?",
        "answer": "Мы проверяем поставщиков до оплаты: историю торговли, скорость ответов и производственные мощности. При работе с новыми фабриками всегда рекомендуем сначала заказать образец. Мы можем собрать образцы с разных фабрик в одну небольшую посылку."
      }
    ]
  },
  "taobao": {
    "en": [
      {
        "question": "What if I can't pay or register on Taobao?",
        "answer": "You don't need a Chinese phone number, Alipay account, or local bank card. We purchase on your behalf using our own Chinese corporate accounts. You transfer funds to us in USD or your local currency — we handle the rest."
      },
      {
        "question": "What if the seller sends the wrong item or poor quality?",
        "answer": "We conduct a free Quality Control inspection at our Shenzhen warehouse before anything ships internationally. Photos sent to you for confirmation. Wrong items and defective goods go back to the seller — not on a plane to your door."
      },
      {
        "question": "What if I want to order from multiple sellers?",
        "answer": "We consolidate orders from multiple Taobao sellers — and from 1688, Tmall, Weidian, and Poizon — into one international shipment. One customs entry, one freight bill, up to 60% saved on shipping compared to sending each order separately."
      },
      {
        "question": "What if I can't find what I'm looking for?",
        "answer": "Send us a photo or description. Our team searches Taobao and connected platforms to find the best match from sellers we actually trust."
      }
    ],
    "ru": [
      {
        "question": "Что если я не могу оплатить или зарегистрироваться на Taobao?",
        "answer": "Вам не нужен китайский номер телефона, Alipay или местная банковская карта. Мы выкупаем товары через наши китайские корпоративные счета. Вы просто переводите нам средства в удобной валюте — остальное мы берем на себя."
      },
      {
        "question": "Что если продавец пришлет не тот товар или брак?",
        "answer": "Мы проводим бесплатную проверку качества (QC) на нашем складе в Шэньчжэне перед международной отправкой. Вы получаете фото для подтверждения. Бракованные или неверные товары возвращаются продавцу, а не летят к вам."
      },
      {
        "question": "Что если я хочу заказать у разных продавцов?",
        "answer": "Мы консолидируем заказы от нескольких продавцов Taobao, а также с 1688, Tmall, Weidian и Poizon в одну международную посылку. Одна таможенная декларация, один счет за доставку — экономия до 60% по сравнению с отправкой каждого заказа отдельно."
      },
      {
        "question": "Что если я не могу найти нужный товар?",
        "answer": "Пришлите нам фото или описание. Наша команда найдет лучший вариант на Taobao и других платформах у продавцов, которым мы действительно доверяем."
      }
    ]
  },
  "1688": {
    "en": [
      {
        "question": "What if the supplier ships defective goods?",
        "answer": "We inspect everything at our Shenzhen warehouse before it goes international. Photos and videos sent to you for confirmation. Defective items go back to the factory — not across an ocean."
      },
      {
        "question": "What if I don't know which supplier to choose?",
        "answer": "Send us a photo or description. Our team finds verified suppliers, compares prices across multiple factories, and recommends the most reliable option. Full hands-off sourcing available."
      },
      {
        "question": "What if the stock listed isn't actually available?",
        "answer": "Stock numbers on 1688 are frequently inaccurate. We verify real availability with the supplier before you pay — not after."
      },
      {
        "question": "What if I need to combine 1688 orders with other platforms?",
        "answer": "We consolidate 1688 wholesale orders with purchases from Taobao, Tmall, Poizon, and Pinduoduo into one shipment."
      }
    ],
    "ru": [
      {
        "question": "Что если пришлют брак?",
        "answer": "Мы проверяем всё в Шэньчжэне. Вы получаете фото и видео для подтверждения. Бракованный товар возвращается на завод в Китае, а не едет к вам через океан."
      },
      {
        "question": "Я не знаю, какого поставщика выбрать.",
        "answer": "Просто пришлите фото. Наша команда найдет верифицированных производителей, сравнит цены на разных заводах и порекомендует самый надежный вариант."
      },
      {
        "question": "А если товара нет в наличии?",
        "answer": "Цифры остатков на 1688 часто не соответствуют реальности. Мы уточняем фактическое наличие у продавца до того, как вы переведете деньги."
      },
      {
        "question": "Можно ли объединить заказы с разных площадок?",
        "answer": "Да. Мы соберем в одну посылку опт с 1688, покупки с Taobao, Tmall, Poizon и Pinduoduo."
      }
    ]
  },
  "pinduoduo": {
    "en": [
      {
        "question": "Best Prices in China",
        "answer": "Known for heavily subsidized pricing on everyday items, from home goods to basic electronics."
      },
      {
        "question": "0% Commission",
        "answer": "We charge no service fee for standard Pinduoduo orders."
      },
      {
        "question": "Consolidation",
        "answer": "Perfect for adding small, cheap items to your main parcel, drastically reducing shipping costs."
      },
      {
        "question": "Don't ignore the timer",
        "answer": "Pinduoduo deals are often time-sensitive. If you see a great price, send it to us quickly so we can lock it in before the group-buy window closes."
      }
    ],
    "ru": [
      {
        "question": "Лучшие цены в Китае",
        "answer": "Платформа известна субсидированными ценами на повседневные товары."
      },
      {
        "question": "Комиссия 0%",
        "answer": "Мы не берем сервисную комиссию за выкуп стандартных заказов на Pinduoduo."
      },
      {
        "question": "Консолидация посылок",
        "answer": "Идеально подходит для добавления мелких недорогих товаров к вашей основной посылке для экономии на логистике."
      },
      {
        "question": "Обращайте внимание на таймер",
        "answer": "Скидки на Pinduoduo ограничены по времени. Если вы увидели отличную цену, отправляйте ссылку как можно скорее, чтобы мы успели ее зафиксировать."
      }
    ]
  },
  "weidian": {
    "en": [
      {
        "question": "What if the item doesn't match the listing photos?",
        "answer": "We conduct a full Quality Control inspection at our Shenzhen warehouse. You receive detailed photos of the actual item. If something looks wrong, we contact the seller before it's too late."
      },
      {
        "question": "What if the seller has a bad reputation?",
        "answer": "We verify every seller before purchasing. Low-reputation sellers, inactive stores, and listings with red flags get flagged before you spend a cent."
      },
      {
        "question": "What if I want to order from multiple sellers?",
        "answer": "We consolidate orders from multiple Weidian sellers — and from other platforms like Taobao, 1688, and Poizon — into one international shipment."
      },
      {
        "question": "What if I can't find what I'm looking for?",
        "answer": "Send us a photo or description. Our team searches Weidian and connected platforms to find the closest match available."
      }
    ],
    "ru": [
      {
        "question": "Что если товар не совпадает с фото продавца?",
        "answer": "Мы проводим полную проверку качества (QC) на нашем складе в Шэньчжэне. Вы получаете детальные фото реального товара. Если что-то не так, мы оформляем возврат."
      },
      {
        "question": "Что если у продавца плохая репутация?",
        "answer": "Мы проверяем каждого продавца перед выкупом. Магазины с низким рейтингом, неактивные продавцы и подозрительные товары сразу блокируются."
      },
      {
        "question": "Можно ли заказать у разных продавцов?",
        "answer": "Да! Мы консолидируем ваши заказы от разных продавцов Weidian, а также покупки с Taobao, 1688 и Poizon в одну международную отправку."
      },
      {
        "question": "Что если я не могу найти нужный товар?",
        "answer": "Пришлите нам фото или описание. Наша команда найдет нужную вещь или ближайший аналог на Weidian и других платформах."
      }
    ]
  },
  "amazon": {
    "en": [
      {
        "question": "What if my shipment is rejected?",
        "answer": "We have a 0% rejection rate. We know the height, weight, and labeling rules for every US hub."
      },
      {
        "question": "What about customs duties?",
        "answer": "We handle the ISF 10+2 filing and all Section 301 tariffs. No surprise bills from CBP."
      },
      {
        "question": "Am I too small?",
        "answer": "We support growing brands. No massive minimums - start small and scale."
      }
    ],
    "ru": [
      {
        "question": "А если мою отправку отклонят?",
        "answer": "У нас 0% отказов. Мы знаем правила по высоте, весу и маркировке для каждого хаба в США."
      },
      {
        "question": "Что с таможенными пошлинами?",
        "answer": "Мы занимаемся подачей ISF 10+2 и всеми тарифами Section 301. Никаких неожиданных счетов от CBP."
      },
      {
        "question": "Я слишком маленький селлер?",
        "answer": "Мы поддерживаем растущие бренды. Нет огромных минимумов - начинайте с малого и масштабируйтесь."
      }
    ]
  },
  "amazon-canada": {
    "en": [
      {
        "question": "Will my goods get stuck at the border?",
        "answer": "The CBSA is known for rigorous inspections. We mitigate this by pre-auditing your Commercial Invoice and HS Codes in Shenzhen. We ensure your 'Made in China' markings are permanent and visible—the #1 reason for Canadian customs delays."
      },
      {
        "question": "Is shipping to Toronto too expensive?",
        "answer": "Direct air to Toronto is costly. Our Sea + Rail consolidation allows you to pay 'West Coast' ocean rates while still getting your goods into the heart of Ontario’s FBA network."
      },
      {
        "question": "What if my inventory is lost in the vast Canadian wilderness?",
        "answer": "Canada is huge. We use end-to-end tracking that covers the ocean crossing, the rail journey across the Rockies, and the final truck delivery to the FBA dock."
      }
    ],
    "ru": [
      {
        "question": "Застрянет ли груз на границе?",
        "answer": "CBSA очень строги. Мы минимизируем риск через пре-аудит инвойсов и кодов ТН ВЭД (HS) в Шэньчжэне. Также строго следим за долговечной маркировкой 'Made in China'."
      },
      {
        "question": "Не слишком ли дорого везти в Торонто?",
        "answer": "Прямое авиа в Торонто дорогое. Наш мультимодальный путь 'Море + Ж/Д' позволяет платить по тарифам 'Западного побережья' и доставлять вглубь сети FBA в Онтарио."
      },
      {
        "question": "Не потеряется ли товар в дикой Канаде?",
        "answer": "Канада огромна. Мы используем сквозной трекинг для океана, поездов через Скалистые горы и финального трака на рампу FBA."
      }
    ]
  }
},
  blogPosts: {
  "how-to-ship-from-pinduoduo-to-dubai-uae": {
    "en": [
      {
        "question": "Does Pinduoduo ship directly to Dubai?",
        "answer": "No. Pinduoduo only ships within mainland China. To get your goods to Dubai, you must use a trusted freight forwarder like HappyBox with a physical warehouse in China."
      },
      {
        "question": "Will I have to pay customs duties or VAT when my package arrives in Dubai?",
        "answer": "Not when shipping with HappyBox. Our dedicated Air & Sea DDP channels cover all Dubai customs clearance, import tariffs, and VAT. The price we quote is 100% final."
      },
      {
        "question": "Can HappyBox ship electronics with built-in batteries from Pinduoduo?",
        "answer": "Yes! Pinduoduo is famous for cheap gadgets and smart home devices. We have specialized battery cargo channels that safely clear electronics from China to UAE without customs delays."
      }
    ],
    "ru": [
      {
        "question": "Есть ли у Pinduoduo прямая доставка в Дубай?",
        "answer": "Нет. Pinduoduo доставляет заказы только внутри материкового Китая. Чтобы привезти вещи в Дубай, вам нужно воспользоваться услугами надежного форвардера (перевозчика) вроде HappyBox, у которого есть свой склад в Китае."
      },
      {
        "question": "Придется ли мне платить таможенные пошлины или НДС при прибытии посылки в Дубай?",
        "answer": "Нет, если вы отправляете через HappyBox. Наши специализированные авиа- и морские DDP-каналы включают в себя абсолютно все расходы на таможенную очистку в Дубае, импортные пошлины и VAT. Цена, которую мы вам озвучиваем, является окончательной на 100%."
      },
      {
        "question": "Может ли HappyBox отправлять электронику с аккумуляторами из Pinduoduo?",
        "answer": "Да! Pinduoduo славится своими дешевыми гаджетами и девайсами для умного дома. У нас есть выделенные логистические маршруты для перевозки товаров с батареями, которые позволяют безопасно доставлять электронику из Китая в ОАЭ без задержек на границе."
      }
    ]
  }
}
};

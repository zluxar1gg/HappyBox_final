







import { Language } from './translations';

export type PageType = 'home' | 'usa' | 'eu' | 'uae' | 'russia' | 'taobao' | '1688' | 'alibaba' | 'inspection' | 'warehousing' | 'amazon' | 'amazon-canada' | 'poizon' | 'tmall' | 'pinduoduo' | 'xianyu' | 'weidian' | 'blog' | 'blogPost' | 'destinations' | 'canada' | 'thailand' | 'indonesia' | 'argentina' | 'south-africa' | 'georgia' | 'israel' | 'australia';

interface MetaData {
  title: string;
  description: string;
}

const metaData: Record<Language, Partial<Record<PageType, MetaData>>> = {
  en: {
    home: {
      title: "China Shipping Agent & 1688/Taobao Broker | HappyBox Cargo",
      description: "Reliable Freight Forwarder from China to USA, EU, UAE. We act as your Shopping Agent for 1688, Taobao, Poizon. Free consolidation, inspection & DDP shipping."
    },
    usa: {
      title: "Shipping from China to USA | DDP Sea & Air Freight | HappyBox",
      description: "Affordable shipping from China to the USA. Sea freight from $1.2/kg, Air freight from $10/kg. We handle customs clearance and DDP delivery to your door or Amazon FBA."
    },
    canada: {
      title: "China to Canada Shipping: Air Freight | HappyBox",
      description: "Fast and reliable shipping from China to Canada. Affordable air freight, sea cargo, and Amazon FBA fulfillment with DDP options."
    },
    thailand: {
      title: "Shipping from China to Thailand | DDP Sea, Air & Land Freight | HappyBox",
      description: "Fast and affordable shipping from China to Thailand. Land freight from $4/kg, Air freight from $11/kg. Tax-free (DDP) delivery to Bangkok, Chiang Mai, Pattaya."
    },
    indonesia: {
      title: "Shipping from China to Indonesia | DDP Sea & Air | HappyBox",
      description: "Secure Air & Economy Sea Freight from China to Indonesia. DDP Door-to-Door delivery. Air from $10/kg, Sea from $1.1/kg. No Import Licenses needed."
    },
    eu: {
      title: "China to Europe Shipping: Door-to-Door DDP | HappyBox",
      description: "Fast sea & air freight from China to all EU countries. Duties paid (DDP), customs cleared, delivered to your door. Get a quote in minutes."
    },
    uae: {
      title: "China to UAE Shipping: Sea & Air Freight | HappyBox",
      description: "Affordable sea and air freight from China to Dubai and UAE. DDP delivery options, customs cleared, and fast transit times."
    },
    russia: {
      title: "TIR Shipping from China to Russia | White Import with VAT | HappyBox",
      description: "Official 'White' delivery from China to Russia via TIR system. Rates from $1.5/kg. Full document package (VAT), assistance with payments, Chestny Znak labeling."
    },
    amazon: {
      title: "Amazon FBA Prep China: Shipping Services | HappyBox",
      description: "Ship directly from China to Amazon FBA. We offer full prep center services, labeling, inspection, and affordable DDP shipping."
    },
    'amazon-canada': {
      title: "Amazon FBA Canada Shipping | FBA Prep & DDP Delivery | HappyBox",
      description: "Expert shipping from China to Amazon FBA Canada. We handle CBSA customs, GST/HST, and prep your products according to Canadian requirements."
    },
    taobao: {
      title: "Taobao Agent: Shop & Ship from China | HappyBox",
      description: "Buy directly from Taobao. We handle purchasing, quality inspection, consolidation, and worldwide shipping."
    },
    1688: {
      title: "1688 Agent China: Buy Wholesale Direct | HappyBox",
      description: "Source products directly from factories with our 1688 agent service. We handle negotiation, payment, inspection, and shipping."
    },
    alibaba: {
      title: "Alibaba Shipping & Sourcing Agent | HappyBox",
      description: "Buy safely from Alibaba with HappyBox. We provide quality control in China, consolidate orders from multiple suppliers, and offer affordable DDP shipping."
    },
    poizon: {
      title: "Poizon Agent China: Buy Sneakers & Apparel | HappyBox",
      description: "Buy authentic sneakers and streetwear from Poizon (Dewu) with our agent service. Quality inspection and international shipping."
    },
    tmall: {
      title: "Tmall Global Agent | Official Brands & Flagship Stores from China",
      description: "Buy authentic brands from Tmall with HappyBox. Access official flagship stores, 0% commission, and DDP delivery worldwide. Secure shopping from China."
    },
    pinduoduo: {
      title: "Pinduoduo Agent: Buy & Ship from China | HappyBox",
      description: "Reliable Pinduoduo agent services. We purchase, inspect, and ship your PDD orders worldwide. Affordable shipping rates and direct factory access."
    },
    xianyu: {
      title: "Xianyu Agent | Buy Second-hand & Vintage from China | HappyBox",
      description: "Buy from Xianyu (Idle Fish) safely. We negotiate, inspect, and ship second-hand goods worldwide. Authentic vintage finds and collectibles."
    },
    weidian: {
      title: "Trusted Weidian Agent: Buy Streetwear | HappyBox",
      description: "Your Trusted Weidian purchasing agent. We buy, photo-verify, and ship exclusive streetwear orders globally. No Chinese account needed."
    },
    inspection: {
      title: "Quality Control China | Professional Factory Inspection Services | HappyBox",
      description: "Secure your supply chain with HappyBox. We provide professional on-site factory audits and pre-shipment inspections across all China provinces. Detailed reports within 24h."
    },
    warehousing: {
      title: "Free China Warehousing & Consolidation | HappyBox",
      description: "Store and consolidate unlimited parcels free in our Guangzhou & Shenzhen hubs. Combine Taobao, 1688 & Pinduoduo orders into one shipment and cut freight costs."
    },
    blog: {
      title: "Logistics Blog & Insights | Shipping from China Guides | HappyBox",
      description: "Expert guides, news, and tips for shipping from China. Learn how to buy on 1688, Taobao, and optimize your Amazon FBA supply chain."
    },
    australia: {
      title: "Shipping from China to Australia | Hassle-Free DDP | HappyBox",
      description: "Cost-effective DDP shipping from China to Australia. Sea freight from $1.3/kg, Air freight from $9/kg. Taxes, duties (GST), and quarantine handled."
    },
    'south-africa': {
      title: "Shipping from China to South Africa | DDP Sea & Air | HappyBox",
      description: "Reliable Air & Sea Freight from China to South Africa. DDP Door-to-Door delivery. Sea from $1.3/kg, Air from $12/kg. SARS obligations handled."
    },
    georgia: {
      title: "Shipping from China to Georgia | Middle Corridor DDP | HappyBox",
      description: "Reliable Air & Fast Land Freight from China to Georgia. Direct door-to-door delivery. Trucking from $1.2/kg, Air from $15/kg. Customs handled."
    },
    israel: {
      title: "Shipping from China to Israel | DDP Sea & Air | HappyBox",
      description: "Direct Door-to-Door DDP delivery to Israel. Air freight from $15/kg, Sea freight from $1.2/kg. Customs & VAT (Ma'am) handling included."
    },
    blogPost: {
      title: "Logistics Insights | HappyBox",
      description: "Read our latest insights on shipping, sourcing, and logistics from China."
    }
  },
  ru: {
    home: {
      title: "Карго из Китая и Гонконга | Посредник Taobao, 1688, Poizon | HappyBox",
      description: "Надежное Карго в Россию, СНГ и мир. Выкуп товаров с 1688, Taobao, Poizon (Dewu). Бесплатная консолидация, проверка на брак, страховка 100%. Оплата в рублях."
    },
    usa: {
      title: "Доставка из Китая в США | DDP Авиа и Море | HappyBox",
      description: "Доступная доставка из Китая в США. Море от $1.2/кг, Авиа от $10/кг. Таможенная очистка и DDP доставка до двери или на склады Amazon FBA."
    },
    canada: {
      title: "Доставка в Канаду из Китая: Авиа и FBA | HappyBox",
      description: "Надежная доставка грузов из Китая в Канаду. Предлагаем авиаперевозки, морской фрахт и услуги фулфилмента для Amazon FBA."
    },
    thailand: {
      title: "Доставка из Китая в Таиланд | DDP Авиа и Авто | HappyBox",
      description: "Быстрая доставка из Китая в Таиланд. Авто от $4/кг, Авиа от $11/кг. DDP доставка без налогов и пошлин в Бангкок, Пхукет, Паттайю."
    },
    indonesia: {
      title: "Доставка из Китая в Индонезию | DDP Море и Авиа | HappyBox",
      description: "Экономичная DDP доставка в Индонезию. Авиа от $10/кг, Море от $1.1/кг. Полная очистка без необходимости лицензий API и уплаты НДС."
    },
    eu: {
      title: "Доставка в Европу из Китая: DDP до двери | HappyBox",
      description: "Быстрая авиа и морская доставка из Китая во все страны ЕС. Включая таможенную очистку и оплату пошлин (DDP). Расчет стоимости за минуты."
    },
    uae: {
      title: "Доставка грузов из Китая в ОАЭ (Дубай) | HappyBox",
      description: "Надежная доставка из Китая в Эмираты. Морской фрахт и авиаперевозки в Дубай, таможенное оформление и доставка до двери."
    },
    russia: {
      title: "TIR доставка из Китая в Россию | Белый импорт с НДС | HappyBox",
      description: "Официальная белая доставка из Китая в РФ по системе TIR (МДП). Тарифы от $1.5/кг. Полный пакет документов, помощь с оплатой поставщику, маркировка Честный Знак."
    },
    amazon: {
      title: "Доставка на Amazon FBA: преп-центр | HappyBox",
      description: "Доставка товаров из Китая на склады Amazon FBA. Услуги преп-центра, маркировка, инспекция и отправка под ключ (DDP)."
    },
    'amazon-canada': {
      title: "Доставка на Amazon FBA Канада | Преп-центр | HappyBox",
      description: "Доставка из Китая на склады Amazon FBA Канады. Оформление CBSA, GST/HST и DDP доставка. Услуги преп-центра."
    },
    taobao: {
      title: "Посредник Таобао: выкуп и доставка | HappyBox",
      description: "Покупки на Таобао без проблем. Выкупаем товары, проверяем на складе в Китае, объединяем посылки и доставляем до вашей двери."
    },
    1688: {
      title: "Посредник 1688: оптовый выкуп из Китая | HappyBox",
      description: "Ваш посредник для работы с 1688. Связываемся с фабриками, выкупаем товар, проверяем качество и доставляем оптовые заказы."
    },
    alibaba: {
      title: "Посредник и Доставка с Alibaba | Инспекция и DDP | HappyBox",
      description: "Безопасные закупки на Alibaba. Проверка качества в Китае, переупаковка, консолидация заказов от разных поставщиков. Дешевая карго доставка DDP."
    },
    poizon: {
      title: "Посредник Poizon: доставка кроссовок | HappyBox",
      description: "Надежный посредник Poizon (Dewu). Выкуп оригинальных кроссовок и одежды из Китая, проверка качества и быстрая доставка."
    },
    tmall: {
      title: "Посредник Tmall Global | Официальные бренды Китая | HappyBox",
      description: "Выкуп товаров с Tmall Global без комиссии. Официальные магазины брендов, гарантия оригинала. Доставка в Россию и по миру."
    },
    pinduoduo: {
      title: "Посредник Pinduoduo: Выкуп и Доставка | HappyBox",
      description: "Ваш проверенный посредник Pinduoduo. Выкупаем товары с PDD, предоставляем склад в Китае, проверяем качество и доставляем заказы."
    },
    xianyu: {
      title: "Посредник Xianyu | Б/У товары и винтаж из Китая | HappyBox",
      description: "Безопасные покупки на Xianyu (Idle Fish). Мы торгуемся, проверяем и доставляем б/у товары по всему миру. Оригинальный винтаж и коллекционные вещи."
    },
    weidian: {
      title: "Посредник Weidian: стритвир без WeChat | HappyBox",
      description: "Ваш надежный посредник Weidian. Выкупаем эксклюзивный стритвир, делаем фотоотчет и доставляем заказы из Китая. Оплата в рублях."
    },
    inspection: {
      title: "Контроль качества в Китае | Профессиональная инспекция фабрик | HappyBox",
      description: "Защитите свой бизнес с HappyBox. Мы проводим профессиональные выездные аудиты фабрик и пред-отгрузочные инспекции во всех провинциях Китая. Отчеты за 24 часа."
    },
    warehousing: {
      title: "Бесплатный склад в Китае и консолидация | HappyBox",
      description: "Бесплатное хранение и объединение посылок на складах в Гуанчжоу и Шэньчжэне. Консолидация заказов с Taobao, 1688 и Pinduoduo для экономии на доставке."
    },
    blog: {
      title: "Блог и База Знаний по Логистике | Доставка из Китая | HappyBox",
      description: "Экспертные статьи, новости и советы по доставке из Китая. Узнайте, как покупать на 1688, Taobao и оптимизировать поставки для Amazon FBA."
    },
    australia: {
      title: "Доставка из Китая в Австралию | DDP Море и Авиа | HappyBox",
      description: "Недорогая Карго доставка DDP из Китая в Австралию. Море от $1.3/кг, Авиа от $9/кг. Налоги (GST), таможня и био-контроль включены."
    },
    'south-africa': {
      title: "Доставка из Китая в ЮАР | DDP Море и Авиа | HappyBox",
      description: "Оптимальная DDP доставка из Китая в ЮАР. Море от $1.3/кг, Авиа от $12/кг. Все таможенные пошлины (SARS) и НДС включены."
    },
    georgia: {
      title: "Доставка из Китая в Грузию | DDP Авиа и Авто | HappyBox",
      description: "Надежная и быстрая доставка карго из Китая в Грузию. Авто от $1.2/кг, Авиа от $15/кг. Растаможка и НДС включены."
    },
    israel: {
      title: "Доставка из Китая в Израиль | DDP Море и Авиа | HappyBox",
      description: "Надежная доставка DDP из Китая в Израиль. Авиа от $15/кг, Море от $1.2/кг. Таможенная очистка и НДС (Маам) включены."
    },
    blogPost: {
      title: "Статьи по Логистике | HappyBox",
      description: "Читайте наши последние статьи о доставке, выкупе и логистике из Китая."
    }
  }
};

export const updateMetaTags = (page: PageType, language: Language, dynamicData?: { title?: string, description?: string, slug?: string }) => {
  const data = metaData[language][page] || metaData[language]['home'] || { title: 'HappyBox Logistics', description: 'Logistics from China' };
  
  const finalTitle = dynamicData?.title || data.title;
  const finalDescription = dynamicData?.description || data.description;

  // 1. Update Title
  document.title = finalTitle;

  // 2. Update Description
  let metaDescription = document.querySelector('meta[name="description"]');
  if (!metaDescription) {
    metaDescription = document.createElement('meta');
    metaDescription.setAttribute('name', 'description');
    document.head.appendChild(metaDescription);
  }
  metaDescription.setAttribute('content', finalDescription);

  // 3. Construct Base URL logic
  const baseUrl = window.location.origin;
  
  // Helper to create path string
  const getPath = (p: PageType, l: Language) => {
    const langPrefix = l === 'ru' ? '/ru' : '';
    if (p === 'blogPost' && dynamicData?.slug) {
      return `${langPrefix}/blog/${dynamicData.slug}`;
    }
    const pagePath = p === 'home' ? '' : `/${p}`;
    return `${langPrefix}${pagePath}` || '/';
  };

  const currentFullUrl = baseUrl + getPath(page, language);
  const enUrl = baseUrl + getPath(page, 'en');
  const ruUrl = baseUrl + getPath(page, 'ru');

  // Helper function to update or create meta tags
  const setMetaTag = (selector: string, attribute: string, value: string) => {
    let element = document.querySelector(selector);
    if (!element) {
      element = document.createElement('meta');
      if (selector.includes('property=')) {
        const propMatch = selector.match(/property="([^"]+)"/);
        if (propMatch) element.setAttribute('property', propMatch[1]);
      } else if (selector.includes('name=')) {
        const nameMatch = selector.match(/name="([^"]+)"/);
        if (nameMatch) element.setAttribute('name', nameMatch[1]);
      }
      document.head.appendChild(element);
    }
    element.setAttribute(attribute, value);
  };

  // Update Open Graph tags
  setMetaTag('meta[property="og:title"]', 'content', finalTitle);
  setMetaTag('meta[property="og:description"]', 'content', finalDescription);
  setMetaTag('meta[property="og:url"]', 'content', currentFullUrl);
  
  // Update Twitter tags
  setMetaTag('meta[name="twitter:title"]', 'content', finalTitle);
  setMetaTag('meta[name="twitter:description"]', 'content', finalDescription);
  setMetaTag('meta[name="twitter:url"]', 'content', currentFullUrl);

  // 4. Update Canonical URL (Self-referencing)
  let canonicalLink = document.querySelector('link[rel="canonical"]');
  if (!canonicalLink) {
    canonicalLink = document.createElement('link');
    canonicalLink.setAttribute('rel', 'canonical');
    document.head.appendChild(canonicalLink);
  }
  canonicalLink.setAttribute('href', currentFullUrl);

  // 5. Update Hreflang Tags (Prevents duplicate content issues)
  
  // Hreflang for English (x-default)
  let linkEn = document.querySelector('link[rel="alternate"][hreflang="en"]');
  if (!linkEn) {
    linkEn = document.createElement('link');
    linkEn.setAttribute('rel', 'alternate');
    linkEn.setAttribute('hreflang', 'en');
    document.head.appendChild(linkEn);
  }
  linkEn.setAttribute('href', enUrl);

  // Hreflang for Russian
  let linkRu = document.querySelector('link[rel="alternate"][hreflang="ru"]');
  if (!linkRu) {
    linkRu = document.createElement('link');
    linkRu.setAttribute('rel', 'alternate');
    linkRu.setAttribute('hreflang', 'ru');
    document.head.appendChild(linkRu);
  }
  linkRu.setAttribute('href', ruUrl);
  
  // Hreflang for x-default (usually same as EN)
  let linkDefault = document.querySelector('link[rel="alternate"][hreflang="x-default"]');
  if (!linkDefault) {
    linkDefault = document.createElement('link');
    linkDefault.setAttribute('rel', 'alternate');
    linkDefault.setAttribute('hreflang', 'x-default');
    document.head.appendChild(linkDefault);
  }
  linkDefault.setAttribute('href', enUrl);
};

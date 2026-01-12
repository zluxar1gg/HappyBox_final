


import { Language } from './translations';

type PageType = 'home' | 'usa' | 'eu' | 'uae' | 'ru' | 'taobao' | '1688' | 'inspection' | 'warehousing';

interface MetaData {
  title: string;
  description: string;
}

const metaData: Record<Language, Record<PageType, MetaData>> = {
  en: {
    home: {
      title: "China Shipping Agent & 1688/Taobao Broker | HappyBox Cargo",
      description: "Reliable Freight Forwarder from China to USA, EU, UAE. We act as your Shopping Agent for 1688, Taobao, Poizon. Free consolidation, inspection & DDP shipping."
    },
    usa: {
      title: "Shipping from China to USA | DDP Sea & Air Freight | HappyBox",
      description: "Affordable shipping from China to the USA. Sea freight from $1.2/kg, Air freight from $10/kg. We handle customs clearance and DDP delivery to your door or Amazon FBA."
    },
    eu: {
      title: "Shipping from China to Europe | DDP Tax-Free Delivery | HappyBox",
      description: "Fast and affordable shipping from China to Germany, France, Poland, Italy, and Spain. Air, Land, and Sea freight with all taxes and customs (DDP) included. Prices from $1.5/kg."
    },
    uae: {
      title: "Shipping from China to Dubai, UAE | Sea $0.8/kg, Air $6/kg | HappyBox",
      description: "Affordable door-to-door shipping from China to the UAE. Sea freight from $0.8/kg, Air freight from $6/kg. Tax-free (DDP) delivery to Dubai and Abu Dhabi. Free consolidation included."
    },
    ru: {
      title: "TIR Shipping from China to Russia | White Import with VAT | HappyBox",
      description: "Official 'White' delivery from China to Russia via TIR system. Rates from $1.5/kg. Full document package (VAT), assistance with payments, Chestny Znak labeling."
    },
    taobao: {
      title: "Taobao Agent Service | Buy from Taobao & 1688 with HappyBox",
      description: "Looking for a reliable Taobao Agent? HappyBox helps you buy from Taobao, 1688, and Poizon. Free quality inspection, consolidation, and worldwide shipping."
    },
    1688: {
      title: "1688 Sourcing Agent | Wholesale & Bulk Purchasing from China | HappyBox",
      description: "Need a reliable 1688 agent? HappyBox offers expert sourcing, factory negotiation, and quality control for bulk orders from 1688.com. Lowest 2% commission and DDP shipping worldwide."
    },
    inspection: {
      title: "Quality Control China | Professional Factory Inspection Services | HappyBox",
      description: "Secure your supply chain with HappyBox. We provide professional on-site factory audits and pre-shipment inspections across all China provinces. Detailed reports within 24h."
    },
    warehousing: {
      title: "Free Warehouse in China | Parcel Consolidation & Storage | HappyBox",
      description: "Get a free warehouse address in China. HappyBox offers unlimited free storage, parcel consolidation, and quality inspection. Save on shipping from China to the USA, Europe, and UAE."
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
    eu: {
      title: "Доставка из Китая в Европу | DDP без налогов | HappyBox",
      description: "Быстрая и доступная доставка из Китая в Германию, Францию, Польшу. Авиа, ЖД и Море «под ключ» (DDP). Мы платим НДС и пошлины. Цены от $1.5/кг."
    },
    uae: {
      title: "Доставка из Китая в Дубай (ОАЭ) | Море $0.8/кг, Авиа $6/кг | HappyBox",
      description: "Выгодная доставка «до двери» из Китая в ОАЭ. Море от $0.8/кг, Авиа от $6/кг. Без пошлин (DDP). Бесплатная консолидация и склад."
    },
    ru: {
      title: "TIR доставка из Китая в Россию | Белый импорт с НДС | HappyBox",
      description: "Официальная белая доставка из Китая в РФ по системе TIR (МДП). Тарифы от $1.5/кг. Полный пакет документов, помощь с оплатой поставщику, маркировка Честный Знак."
    },
    taobao: {
      title: "Посредник Таобао (Taobao Agent) | Выкуп с Taobao и 1688 | HappyBox",
      description: "Ищете надежного посредника Таобао? HappyBox поможет выкупить товары с Taobao, 1688 и Poizon. Бесплатная проверка качества, консолидация и доставка по миру."
    },
    1688: {
      title: "Агент 1688 | Оптовые закупки из Китая и Посредник | HappyBox",
      description: "Ищете надежного агента 1688? HappyBox предлагает профессиональный поиск, переговоры с фабриками и контроль качества. Комиссия 2%, доставка DDP по всему миру."
    },
    inspection: {
      title: "Контроль качества в Китае | Профессиональная инспекция фабрик | HappyBox",
      description: "Защитите свой бизнес с HappyBox. Мы проводим профессиональные выездные аудиты фабрик и пред-отгрузочные инспекции во всех провинциях Китая. Отчеты за 24 часа."
    },
    warehousing: {
      title: "Бесплатный склад в Китае и Консолидация | HappyBox",
      description: "Храните товары бесплатно на нашем охраняемом складе. Мы объединяем заказы от разных поставщиков в одну посылку, чтобы вы экономили на доставке."
    }
  }
};

export const updateMetaTags = (page: PageType, language: Language) => {
  const data = metaData[language][page];
  
  // 1. Update Title
  document.title = data.title;

  // 2. Update Description
  let metaDescription = document.querySelector('meta[name="description"]');
  if (!metaDescription) {
    metaDescription = document.createElement('meta');
    metaDescription.setAttribute('name', 'description');
    document.head.appendChild(metaDescription);
  }
  metaDescription.setAttribute('content', data.description);

  // 3. Construct Base URL logic
  const baseUrl = window.location.origin + window.location.pathname;
  
  // Helper to create search params string
  const getQuery = (p: PageType, l: Language) => {
    const params = new URLSearchParams();
    if (p !== 'home') params.set('page', p);
    if (l === 'ru') params.set('lang', 'ru');
    const str = params.toString();
    return str ? `?${str}` : '';
  };

  const currentFullUrl = baseUrl + getQuery(page, language);
  const enUrl = baseUrl + getQuery(page, 'en');
  const ruUrl = baseUrl + getQuery(page, 'ru');

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

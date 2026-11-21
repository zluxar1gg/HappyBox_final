import { Language } from './translations';
import { getBlogPostBySlug } from './blogData';

export type PageType =
  | 'home'
  | 'usa'
  | 'eu'
  | 'uae'
  | 'russia'
  | 'taobao'
  | '1688'
  | 'alibaba'
  | 'inspection'
  | 'warehousing'
  | 'amazon'
  | 'amazon-canada'
  | 'poizon'
  | 'tmall'
  | 'pinduoduo'
  | 'xianyu'
  | 'weidian'
  | 'blog'
  | 'blogPost'
  | 'destinations'
  | 'canada'
  | 'thailand'
  | 'indonesia'
  | 'argentina'
  | 'south-africa'
  | 'georgia'
  | 'israel'
  | 'australia'
  | 'dashboard'
  | 'admin'
  | '404';

export const BASE_URL = 'https://happyboxlogistics.com';
export const DEFAULT_OG_IMAGE = 'https://i.ibb.co/C55Gbh27/happyboxdelivery.webp';

export const seoMap: Record<string, { title: Record<Language, string>; desc: Record<Language, string> }> = {
  usa: {
    title: {
      en: 'China to USA Shipping: Air & Ocean Freight DDP from 0.1 kg',
      ru: 'Доставка из Китая в США под ключ: DDP, Авиа и Море от 0.1 кг',
    },
    desc: {
      en: 'Reliable door-to-door DDP shipping from China to the USA. Express air freight (5-9 days), economical ocean cargo, full CBP customs clearance, and free consolidation.',
      ru: 'Надежная доставка грузов и посылок из Китая в США на условиях DDP. Авиа от 5 дней, море от $1.2/кг, оформление ISF и растаможка CBP под ключ. Склад в Шэньчжэне.',
    },
  },
  eu: {
    title: {
      en: 'China to Europe Shipping: DDP Air, Rail & Ocean from 0.1 kg',
      ru: 'Доставка из Китая в Европу под ключ: DDP, Авиа, Ж/Д и Море',
    },
    desc: {
      en: 'Fast and reliable DDP shipping from China to all 27 EU countries. Air, rail, and sea freight with import VAT and duties included. Free Shenzhen consolidation.',
      ru: 'Надежная доставка грузов и посылок из Китая в страны ЕС (Германия, Франция, Польша и др.). Все пошлины и НДС (VAT) включены в DDP тариф. Склад в Шэньчжэне.',
    },
  },
  uae: {
    title: {
      en: 'China to UAE Shipping: DDP Air & Ocean Freight from 0.1 kg',
      ru: 'Доставка из Китая в ОАЭ (Дубай): DDP Авиа и Море от 0.1 кг',
    },
    desc: {
      en: 'Reliable DDP freight forwarding from China to Dubai and all UAE Emirates. Express air (5-9 days), ocean via Jebel Ali, customs clearance, and delivery to your door.',
      ru: 'Быстрая доставка грузов и посылок из Китая в ОАЭ (Дубай, Абу-Даби, Шарджа) на условиях DDP. Авиа от 5 дней, море через порт Джебель-Али, пошлина и VAT 5% включены.',
    },
  },
  russia: {
    title: {
      en: 'China to Russia Cargo & Shipping: From 0.1 kg with Insurance',
      ru: 'Карго из Китая в Россию: доставка от 0.1 кг со страховкой',
    },
    desc: {
      en: 'Standard cargo from China to Russia from $2.5/kg (15–25 days, insurance included) and white TIR auto from $1.6/kg. From 0.1 kg, supplier payments, and Chestny Znak labeling.',
      ru: 'Карго-доставка из Китая в Россию от $2.5/кг (15–25 дней, страховка включена) и белое авто TIR от $1.6/кг. Отправка от 0.1 кг, оплата поставщикам и маркировка «Честный Знак».',
    },
  },
  canada: {
    title: {
      en: 'China to Canada Shipping: DDP Air & Ocean Freight from 0.1 kg',
      ru: 'Доставка из Китая в Канаду: DDP Авиа и Море через Ванкувер',
    },
    desc: {
      en: 'Reliable door-to-door DDP shipping from China to Canada (Toronto, Vancouver, Montreal). Express air (6-10 days), ocean via Port of Vancouver ($1.5/kg), CBSA clearance, GST/HST included.',
      ru: 'Доставка грузов и посылок из Китая в Канаду (Торонто, Ванкувер, Монреаль) на условиях DDP. Авиа от 6 дней, море от $1.5/кг. Растаможка CBSA, налоги GST/HST включены, без номера BN.',
    },
  },
  amazon: {
    title: {
      en: 'Shipping from China to Amazon FBA USA: DDP Air & Sea',
      ru: 'Доставка из Китая на Amazon FBA США: тарифы DDP от 0.1 кг',
    },
    desc: {
      en: 'Send inventory from Chinese factories to US Amazon warehouses from 0.1 kg. Air from $10/kg (5–9 days), sea from $1.2/kg, Matson 12–15 days, FNSKU prep & ISF.',
      ru: 'Отправка грузов с фабрик Китая на склады Амазон в США: авиа от $10/кг за 5–9 дней, море от $1.2/кг, Matson 12–15 дней. Преп в Шэньчжэне, FNSKU и ISF 10+2.',
    },
  },
  'amazon-canada': {
    title: {
      en: 'Shipping from China to Amazon FBA Canada: DDP Air & Sea',
      ru: 'Доставка из Китая на Amazon FBA Канада: тарифы DDP',
    },
    desc: {
      en: 'Ship inventory from China to Amazon.ca hubs (YVR1, YYZ4, YUL2) under DDP. Air from $11/kg (6–10d), Sea+Rail from $1.5/kg, CBSA, GST/HST & EN/FR prep.',
      ru: 'Отправка грузов из Китая на склады Amazon.ca (YVR1, YYZ4, YUL2): авиа от $11/кг (6–10 дн.), море+ЖД от $1.5/кг. CBSA, GST/HST, NRI и этикетки EN/FR.',
    },
  },
  '1688': {
    title: {
      en: '1688 Buying Agent: Wholesale Sourcing from China (0% Fee)',
      ru: 'Посредник 1688: выкуп оптом с фабрик Китая (0% комиссии)',
    },
    desc: {
      en: 'Wholesale sourcing agent for 1688.com. We handle factory communication, price negotiations, secure payments, batch QC inspection, and global freight.',
      ru: 'Надежный посредник для закупок на 1688.com по ценам фабрик. Переговоры с поставщиками, выкуп без комиссии, проверка качества, консолидация, оплата картой РФ и доставка под ключ.',
    },
  },
  alibaba: {
    title: {
      en: 'Alibaba Freight Forwarder & Sourcing: EXW Rates, DDP 0% Fee',
      ru: 'Доставка и выкуп с Alibaba: тарифы EXW и DDP (0% комиссии)',
    },
    desc: {
      en: 'Direct Alibaba sourcing agent and DDP freight forwarder with 0% commission. Save 30-50% on shipping with EXW rates, factory audits, and Shenzhen & Guangzhou QC.',
      ru: 'Посредник и экспедитор для работы с Alibaba с комиссией 0%. Экономия 30-50% на доставке по тарифам EXW, проверка поставщиков, контроль качества и DDP доставка.',
    },
  },
  taobao: {
    title: {
      en: 'Taobao Agent: 0% Fee Purchasing, Free QC & DDP Shipping',
      ru: 'Посредник Таобао: выкуп товаров из Китая под 0% с проверкой',
    },
    desc: {
      en: 'Trusted Taobao purchasing agent with 0% service fee. We handle product search, supplier verification, quality check, consolidation, and worldwide shipping.',
      ru: 'Надежный посредник Taobao с комиссией 0%. Выкуп товаров в Китае, проверка на брак, бесплатная консолидация на складе и международная доставка до вашей двери.',
    },
  },
  poizon: {
    title: {
      en: 'Poizon (Dewu) Agent: Authentic Sneakers & Brands at 0% Fee',
      ru: 'Посредник Poizon (Пойзон): выкуп и доставка кроссовок под 0%',
    },
    desc: {
      en: 'Buy authentic sneakers and streetwear from Poizon (Dewu) with 0% agent fee. Physical authenticity verification, double-box protection, and worldwide shipping.',
      ru: 'Выкуп оригиналов с Poizon (Пойзон / Dewu) с комиссией 0%. Бесплатный Legit Check по фото, проверка на брак, удобная оплата картой РФ в рублях и бережная доставка.',
    },
  },
  tmall: {
    title: {
      en: 'Tmall Agent: Official Brand Flagship Stores from China (0%)',
      ru: 'Посредник Tmall: выкуп оригинальных брендов из Китая (0%)',
    },
    desc: {
      en: 'Buy authentic products from official Tmall flagship stores with 0% agent fee. Verified brands, original packaging inspection, and global door-to-door delivery.',
      ru: 'Выкуп товаров во флагманских магазинах Tmall.com без комиссии агента (0%). Гарантия подлинности брендов, проверка заводской упаковки и быстрая доставка из Китая.',
    },
  },
  pinduoduo: {
    title: {
      en: 'Pinduoduo (PDD) Agent: Group-Buy Deals & Shipping (0% Fee)',
      ru: 'Посредник Pinduoduo (Пиндуодуо): выкуп со скидками под 0%',
    },
    desc: {
      en: 'Buy from Pinduoduo (PDD) with 0% agent fee. We secure team-buy discounts, navigate flash deals, conduct warehouse QC, and ship worldwide.',
      ru: 'Выкуп товаров на Pinduoduo (PDD) с комиссией 0%. Фиксируем цены совместных покупок, ловим горящие скидки, проверяем качество на складе и доставляем в ваш город.',
    },
  },
  xianyu: {
    title: {
      en: 'Goofish (Xianyu) Agent: Buy Used Tech & Vintage in China',
      ru: 'Посредник Xianyu (Рыбка): выкуп б/у техники и электроники',
    },
    desc: {
      en: 'Goofish (Xianyu / Idle Fish) purchasing agent with 0% fee. We verify Sesame Credit, bargain in Chinese, provide live video checks, and ship worldwide with DDP.',
      ru: 'Посредник Xianyu (Рыбка / Idle Fish) с комиссией 0%. Проверяем рейтинг Sesame Credit, торгуемся на китайском, делаем видеопроверку перед выкупом и доставляем DDP.',
    },
  },
  weidian: {
    title: {
      en: 'Weidian Purchasing Agent: Buy & Ship from China (0% Fee)',
      ru: 'Посредник Weidian: выкуп любых товаров и брендов под 0%',
    },
    desc: {
      en: 'Buy directly from independent stores and brands on Weidian with 0% agent fee. WeChat Pay purchasing, detailed macro photo QC, and worldwide shipping.',
      ru: 'Выкуп любых товаров и брендов на Weidian без комиссии (0%). Оплата через WeChat Pay, детальный фотоконтроль замеров и бережная доставка.',
    },
  },
  inspection: {
    title: {
      en: 'China Quality Control & Factory Inspection Services (24h)',
      ru: 'Инспекция фабрик и проверка товара в Китае — отчет за 24ч',
    },
    desc: {
      en: 'Professional on-site factory audits and pre-shipment inspections across all China provinces. Detailed defect reports within 24h before international shipping.',
      ru: 'Выездные аудиты фабрик и предотгрузочная проверка товара на брак во всех провинциях Китая. Фотоотчеты за 24 часа и возврат поставщику до отправки.',
    },
  },
  warehousing: {
    title: {
      en: 'China Warehouse & Parcel Consolidation: 30 Days Free',
      ru: 'Склад в Китае и консолидация посылок: 30 дней бесплатно',
    },
    desc: {
      en: 'Store parcels free for up to 30 days and consolidate orders in our Guangzhou & Shenzhen hubs. Combine Taobao, 1688 & Pinduoduo packages into one shipment.',
      ru: 'Бесплатное хранение до 30 дней и объединение посылок на складе в Китае. Консолидация заказов с Taobao, 1688 и Pinduoduo для экономии на доставке.',
    },
  },
  destinations: {
    title: {
      en: 'Worldwide Shipping Routes from China: Air, Sea & Land',
      ru: 'Международная доставка из Китая: страны, тарифы и сроки',
    },
    desc: {
      en: 'Explore international air, sea LCL, rail and road freight from China to the USA, Europe, Canada, UAE, Australia, Asia & Amazon FBA. Rates and transit times by country.',
      ru: 'Все маршруты карго, авиа, морской и автодоставки из Китая: США, Европа, Россия, ОАЭ, Канада, Азия и склады Amazon FBA. Актуальные ставки и условия по странам.',
    },
  },
  thailand: {
    title: {
      en: 'Shipping from China to Thailand: DDP Air & Land Cargo',
      ru: 'Доставка из Китая в Таиланд: авиа и авто карго DDP',
    },
    desc: {
      en: 'Door-to-door DDP delivery from China to Bangkok, Phuket, Pattaya & Chiang Mai. Air from $11/kg (3–5d), auto freight from $4/kg (7–12d), free consolidation.',
      ru: 'Доставка посылок и грузов в Бангкок, Пхукет, Паттайю и Чиангмай. Авиа от $11/кг (3–5 дн.), авто от $4/кг (7–12 дн.). Таможня DDP без лицензий и налога.',
    },
  },
  indonesia: {
    title: {
      en: 'Shipping from China to Indonesia & Bali: DDP Air & Sea',
      ru: 'Доставка из Китая в Индонезию и на Бали: авиа и море DDP',
    },
    desc: {
      en: 'Door-to-door DDP delivery from China to Bali, Jakarta & Surabaya. Air from $10/kg (4–7d), sea LCL from $1.1/kg (22–32d). No API license, NPWP or SNI needed.',
      ru: 'Доставка грузов и посылок на Бали, в Джакарту и Сурабаю. Авиа от $10/кг (4–7 дн.), море LCL от $1.1/кг (22–32 дн.). Таможня DDP без лицензий API и ИНН NPWP.',
    },
  },
  australia: {
    title: {
      en: 'Shipping from China to Australia: DDP Air & Sea Freight',
      ru: 'Доставка из Китая в Австралию: авиа и море DDP под ключ',
    },
    desc: {
      en: 'Door-to-door DDP delivery from China to Sydney, Melbourne, Brisbane & Perth. Air from $9/kg (5–9d), sea from $1.3/kg (20–30d). 10% GST included, no ABN.',
      ru: 'Доставка грузов и посылок в Сидней, Мельбурн, Брисбен и Перт. Авиа от $9/кг (5–9 дн.), море от $1.3/кг (20–30 дн.). Таможня, карантин DAFF и 10% GST включены.',
    },
  },
  argentina: {
    title: {
      en: 'Shipping from China to Argentina: DDP Air & Ocean Cargo',
      ru: 'Доставка из Китая в Аргентину: авиа и море DDP под ключ',
    },
    desc: {
      en: 'Door-to-door DDP freight from China to Buenos Aires, Córdoba & Rosario. Air from $14/kg (7–12d), sea from $1.8/kg (40–50d). Duties, IVA & CUIT limits handled.',
      ru: 'Доставка посылок и грузов в Буэнос-Айрес, Кордову и Росарио. Авиа от $14/кг (7–12 дн.), море от $1.8/кг (40–50 дн.). Таможня Aduana, IVA и лимиты CUIT под ключ.',
    },
  },
  'south-africa': {
    title: {
      en: 'Shipping from China to South Africa: DDP Air & Sea',
      ru: 'Доставка из Китая в ЮАР: авиа и море DDP под ключ',
    },
    desc: {
      en: 'Door-to-door DDP delivery from China to Johannesburg, Cape Town & Durban. Air from $12/kg (5–8d), sea LCL from $1.3/kg (35–45d). SARS duties & VAT included.',
      ru: 'Доставка грузов и посылок в Йоханнесбург, Кейптаун и Дурбан. Авиа от $12/кг (5–8 дн.), море LCL от $1.3/кг (35–45 дн.). Пошлины SARS и 15% VAT включены.',
    },
  },
  georgia: {
    title: {
      en: 'Shipping from China to Georgia: DDP Air & Auto Cargo',
      ru: 'Доставка из Китая в Грузию: авиа и авто карго DDP',
    },
    desc: {
      en: 'Door-to-door DDP delivery from China to Tbilisi, Batumi & Kutaisi. Air from $15/kg (5–8d), Middle Corridor auto from $1.2/kg (15–22d), no customs hassle.',
      ru: 'Доставка грузов и посылок в Тбилиси, Батуми и Кутаиси. Авиа от $15/кг (5–8 дн.), авто через Средний коридор от $1.2/кг (15–22 дн.). Растаможка DDP.',
    },
  },
  israel: {
    title: {
      en: 'Shipping from China to Israel: Air & Ocean Freight',
      ru: 'Доставка из Китая в Израиль: авиа и морские перевозки',
    },
    desc: {
      en: 'Air and sea cargo delivery from China to Tel Aviv, Jerusalem, Haifa & Ashdod. Air from $15/kg (6–9d), LCL ocean freight from $1.2/kg (35–45d). Consolidation & QC in Shenzhen.',
      ru: 'Доставка грузов и посылок из Китая в Тель-Авив, Иерусалим, Хайфу и Ашдод. Авиа от $15/кг (6–9 дн.), море LCL от $1.2/кг (35–45 дн.). Консолидация и проверка в Шэньчжэне.',
    },
  },
};

export const getSeoMeta = (language: Language, currentPage: string, slug?: string) => {
  let title =
    language === 'en'
      ? 'China Freight Forwarder & Purchasing Agent: Global DDP'
      : 'Логистика, карго и выкуп товаров из Китая по всему миру';
  let description =
    language === 'en'
      ? 'Freight forwarder from China to the USA, EU, UAE & worldwide. Purchasing from 1688, Taobao, Poizon, QC inspection, free consolidation & DDP shipping.'
      : 'Надежное карго и DDP-доставка из Китая в Россию, СНГ, Европу, США и ОАЭ. Выкуп с 1688, Taobao, Poizon, проверка на брак, консолидация, страховка 100%, оплата в рублях.';
  let ogImage = DEFAULT_OG_IMAGE;

  if (currentPage === '404') {
    title = language === 'en' ? '404 - Page Not Found' : '404 - Страница не найдена';
    description =
      language === 'en'
        ? 'The page you are looking for does not exist or has been moved.'
        : 'Запрашиваемая страница не найдена или была перемещена.';
  } else if (currentPage === 'blog') {
    title =
      language === 'en'
        ? 'China Shipping & Sourcing Blog: Guides & Tips'
        : 'Блог о доставке и закупках из Китая: гайды и советы';
    description =
      language === 'en'
        ? 'Expert guides, news, and tips for shipping from China. Learn how to buy on 1688, Taobao, and optimize your Amazon FBA supply chain.'
        : 'Экспертные статьи, кейсы и советы по доставке из Китая. Как покупать на 1688 и Taobao, проходить таможню и оптимизировать логистику.';
  } else if (currentPage === 'blogPost' && slug) {
    const post = getBlogPostBySlug(slug, language);
    if (post) {
      title = post.seoTitle || post.title;
      description = post.seoDescription || post.excerpt;
      if (post.imageUrl) {
        ogImage = post.imageUrl.startsWith('http') ? post.imageUrl : `${BASE_URL}${post.imageUrl}`;
      }
    }
  } else if (seoMap[currentPage]) {
    title = seoMap[currentPage].title[language];
    description = seoMap[currentPage].desc[language];
  }

  return { title, description, ogImage };
};

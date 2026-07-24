const fs = require('fs');

const seoMap = {
  usa: { title: { en: 'Shipping from China to USA | HappyBox', ru: 'Доставка из Китая в США | HappyBox' }, desc: { en: 'Expert DDP shipping to the USA via Air and Sea. Low tariffs, fast transit, Amazon FBA support.', ru: 'Авиа и морская доставка из Китая в США. Экспресс-логистика и DDP решения для вашего бизнеса.' } },
  eu: { title: { en: 'Shipping from China to Europe | HappyBox', ru: 'Доставка из Китая в Европу | HappyBox' }, desc: { en: 'Reliable logistics from China to EU countries. Door-to-door, secure customs clearance included.', ru: 'Надежная экспресс и авто доставка грузов из Китая в страны ЕС. Услуги таможенной очистки.' } },
  uae: { title: { en: 'Shipping from China to UAE (Dubai) | HappyBox', ru: 'Доставка из Китая в ОАЭ и Дубай | HappyBox' }, desc: { en: 'Door-to-door delivery from China to Dubai and UAE. Reliable air and sea freight forwarder.', ru: 'Прямая доставка из Китая в Дубай, Абу-Даби и другие эмираты ОАЭ от двери до двери.' } },
  russia: { title: { en: 'Shipping from China to Russia | HappyBox', ru: 'Карго и Белая Доставка из Китая в Россию | HappyBox' }, desc: { en: 'Logistics to Russia via express rail and truck. Fast customs clearance.', ru: 'Авто, ЖД и авиадоставка из Китая в Москву и регионы РФ. Оплата поставщикам в USDT.' } },
  amazon: { title: { en: 'Amazon FBA Prep & Shipping from China | HappyBox', ru: 'Фулфилмент и Доставка на Amazon FBA из Китая | HappyBox' }, desc: { en: 'Direct FBA shipping from China. DDP delivery, FNSKU labeling, prep center services, and fast transit.', ru: 'Прямая доставка товаров из Китая на склады мирового Amazon FBA.' } },
  'amazon-canada': { title: { en: 'Amazon FBA Canada Prep & Shipping | HappyBox', ru: 'Доставка на склады Amazon FBA Канада | HappyBox' }, desc: { en: 'Expert FBA Canada delivery. We handle CBSA, GST/HST, and prep your products according to Canadian requirements.', ru: 'Специалисты по доставке в Amazon FBA Канады. DDP доставка, подготовка товара и полная пошлина.' } },
  '1688': { title: { en: '1688 Sourcing & Purchasing | HappyBox', ru: 'Выкуп товаров с 1688 | HappyBox' }, desc: { en: 'Buy directly from Chinese factories on 1688.com with our sourcing experts.', ru: 'Помощь в поиске и выкупе товаров от производителей на 1688.com. Поиск фабрик и оплата.' } },
  taobao: { title: { en: 'Taobao Purchasing Agent | HappyBox', ru: 'Посредник и Выкуп с Taobao | HappyBox' }, desc: { en: 'We buy your goods on Taobao, consolidate them, and ship them internationally.', ru: 'Официальный посредник Taobao. Выкупаем товары, проверяем на брак и отправляем в вашу страну.' } },
  poizon: { title: { en: 'Poizon (Dewu) Shipping & Proxy | HappyBox', ru: 'Доставка и выкуп с Poizon (Dewu) | HappyBox' }, desc: { en: 'Buy limited sneakers and fashion from Poizon with guaranteed international delivery.', ru: 'Выкупаем оригинальные кроссовки и одежду с Poizon (Dewu). Быстрая доставка по всему миру.' } },
  tmall: { title: { en: 'Tmall Purchasing Agent | HappyBox', ru: 'Выкуп и доставка с Tmall | HappyBox' }, desc: { en: 'Source official brand products on Tmall and ship them with HappyBox.', ru: 'Покупка оригинальных брендов на Tmall с проверкой и доставкой от двери до двери.' } },
  pinduoduo: { title: { en: 'Pinduoduo Logistics | HappyBox', ru: 'Выкуп с Pinduoduo (PDD) | HappyBox' }, desc: { en: 'Consolidate and ship your Pinduoduo purchases globally.', ru: 'Заказ товаров с Pinduoduo. Работа с дешевыми китайскими маркетплейсами под ключ.' } },
  xianyu: { title: { en: 'Xianyu Second-hand Sourcing | HappyBox', ru: 'Покупки на Xianyu (Б/У товары) | HappyBox' }, desc: { en: 'We help you safely buy items on Alibaba\'s used market (Xianyu).', ru: 'Поможем связаться с продавцом и безопасно купить Б/У товары на китайской площадке Xianyu.' } },
  weidian: { title: { en: 'Weidian Agent Services | HappyBox', ru: 'Покупки в магазинах Weidian | HappyBox' }, desc: { en: 'Access Chinese private sellers on Weidian with our purchasing agent service.', ru: 'Выкуп люксовых копий и стритвир-вещей с Weidian. Проверка по фотоотчету перед отправкой.' } },
  inspection: { title: { en: 'Quality Control & Inspection in China | HappyBox', ru: 'Проверка качества и Инспекция в Китае | HappyBox' }, desc: { en: 'Protect your margins. We inspect goods in China before international shipment.', ru: 'Проверка товара на брак, фотоотчеты и коммуникация с фабрикой при возвратах до отправки через границу.' } },
  warehousing: { title: { en: 'China Warehousing & Consolidation | HappyBox', ru: 'Склад и Консолидация в Китае (Гуанчжоу) | HappyBox' }, desc: { en: 'Free consolidation of your parcels in our Guangzhou and Shenzhen warehouses.', ru: 'Бесплатное хранение и объединение ваших посылок со всех маркетплейсов на нашем складе в Гуанчжоу.' } },
  destinations: { title: { en: 'Global Shipping Destinations | HappyBox', ru: 'Все направления доставки | HappyBox' }, desc: { en: 'Discover all the countries and regions we seamlessly ship to from China.', ru: 'Полный список стран и маршрутов, куда HappyBox доставляет посылки и коммерческие грузы из Китая.' } },
  thailand: { title: { en: 'Shipping from China to Thailand | HappyBox', ru: 'Доставка из Китая в Тайланд | HappyBox' }, desc: { en: 'Logistics and freight forwarding to Thailand.', ru: 'Надежная доставка в Тайланд из Китая (Пхукет, Бангкок).' } },
  indonesia: { title: { en: 'Shipping from China to Indonesia (Bali) | HappyBox', ru: 'Доставка из Китая в Индонезию (Бали) | HappyBox' }, desc: { en: 'Logistics and freight forwarding to Indonesia and Bali.', ru: 'Доставка посылок и коммерческих грузов из Китая в Индонезию (Бали, Джакарта).' } },
  argentina: { title: { en: 'Shipping from China to Argentina | HappyBox', ru: 'Доставка из Китая в Аргентину | HappyBox' }, desc: { en: 'Logistics and freight forwarding to Argentina.', ru: 'Доставка из Китая в Аргентину.' } },
  'south-africa': { title: { en: 'Shipping from China to South Africa | HappyBox', ru: 'Доставка из Китая в ЮАР | HappyBox' }, desc: { en: 'Logistics and freight forwarding to South Africa.', ru: 'Логистика коммерческих грузов и посылок в ЮАР.' } },
  georgia: { title: { en: 'Shipping from China to Georgia | HappyBox', ru: 'Доставка из Китая в Грузию | HappyBox' }, desc: { en: 'Logistics and freight forwarding to Georgia.', ru: 'Быстрая экспресс доставка грузов из Китая в Грузию.' } },
  israel: { title: { en: 'Shipping from China to Israel | HappyBox', ru: 'Доставка из Китая в Израиль | HappyBox' }, desc: { en: 'Logistics and freight forwarding to Israel.', ru: 'Доставка в Израиль из Китая от двери до двери.' } }
};

let md = "| URL | Язык | H1 (или текущий заголовок) | SEO Title | Excerpt (N/A для статики) | SEO Description |\n|---|---|---|---|---|---|\n";

// Home
md += `| / | 🇬🇧 EN | Fast & Reliable Shipping from China... | HappyBox Logistics \\| Fast China Freight Forwarder | N/A | Fast & Reliable Shipping from China to USA, Europe, UAE, Russia, and Worldwide. We handle purchasing, warehousing, and logistics. |\n`;
md += `| /ru | 🇷🇺 RU | Быстрая и надежная доставка из Китая... | HappyBox \\| Доставка из Китая и Выкуп Товаров | N/A | Быстрая и надежная логистика из Китая в РФ, Европу, США и ОАЭ. Карго, выкуп товаров с фабрик, проверка качества и услуги склада. |\n`;

// Blog
md += `| /blog | 🇬🇧 EN | Logistics Blog & Insights | Logistics Blog & Insights \\| HappyBox | N/A | Expert guides, news, and tips for shipping from China and e-commerce. |\n`;
md += `| /ru/blog | 🇷🇺 RU | Блог и база знаний по логистике | Блог и база знаний по логистике \\| HappyBox | N/A | Экспертные статьи, бизнес-гайды и советы по доставке из Китая. |\n`;

// Pages
for(const [key, data] of Object.entries(seoMap)) {
    let urlEn = `/${key}`;
    if (key === 'destinations') urlEn = '/destinations';
    md += `| ${urlEn} | 🇬🇧 EN | (Берется из переводов) | ${data.title.en} | N/A | ${data.desc.en} |\n`;

    let urlRu = `/ru/${key}`;
    if (key === 'destinations') urlRu = '/ru/destinations';
    md += `| ${urlRu} | 🇷🇺 RU | (Берется из переводов) | ${data.title.ru} | N/A | ${data.desc.ru} |\n`;
}

// Blog Posts (Hardcoded from what we grepped earlier)
const posts = [
  {
    slug: 'how-to-ship-from-pinduoduo-to-dubai-uae',
    en: {
        title: "How to Ship from Pinduoduo to Dubai (UAE): 2026 Step-by-Step Guide",
        excerpt: "Want to buy from Pinduoduo and ship to Dubai? Learn how to bypass China-only addresses, consolidate parcels, and use HappyBox DDP shipping to the UAE with zero customs hassle."
    },
    ru: {
        title: "Как заказать с Pinduoduo в Дубай (ОАЭ): Пошаговая инструкция — 2026",
        excerpt: "Хотите заказать с Pinduoduo в Дубай? Узнайте, как обойти ограничения, объединить посылки и использовать доставку HappyBox DDP в ОАЭ без проблем с таможней."
    }
  },
  {
    slug: 'taobao-shopping-2026',
    en: {
        title: "How to Buy on Taobao in 2026: The Ultimate Guide",
        excerpt: "Taobao is China's largest marketplace. Learn how to order goods, search with AI, solve crypto (USDT) payment issues, and manage shipping in 2026."
    },
    ru: {
        title: "Как покупать на Taobao в 2026 году: полный гайд",
        excerpt: "Taobao — крупнейший торговый маркетплейс Китая. Узнайте, как заказывать товары, искать через AI, решать вопросы с оплатой криптой (USDT) и доставкой в 2026 году."
    }
  },
  {
    slug: 'weidian-poizon-pinduoduo-guide',
    en: {
        title: "Weidian, Poizon, and Pinduoduo: Differences and What to Buy Where",
        excerpt: "A comparison of Chinese marketplaces: why you need Weidian, how to verify sneakers on Poizon, and the hidden pitfalls of Pinduoduo."
    },
    ru: {
        title: "Weidian, Poizon и Pinduoduo: в чём разница и что где покупать",
        excerpt: "Сравнение китайских маркетплейсов: для чего нужен Weidian, как проверить кроссовки на Poizon и какие подводные камни таит Pinduoduo."
    }
  },
  {
    slug: 'chinese-holidays-calendar-2026',
    en: {
        title: "Chinese Holidays Calendar 2026: Shipping Deadlines",
        excerpt: "Find out the exact dates for Chinese New Year, Labor Day, and Golden Week in 2026. Plan your inventory to completely avoid supply chain disruptions."
    },
    ru: {
        title: "Календарь китайских праздников 2026: как планировать доставку",
        excerpt: "Узнайте точные даты Китайского Нового года, Майских праздников и Золотой недели в 2026 году. Планируйте закупки заранее, чтобы избежать задержек."
    }
  }
];

for(const post of posts) {
    md += `| /blog/${post.slug} | 🇬🇧 EN | ${post.en.title} | ${post.en.title} \\| HappyBox | ${post.en.excerpt} | (Currently uses Excerpt) |\n`;
    md += `| /ru/blog/${post.slug} | 🇷🇺 RU | ${post.ru.title} | ${post.ru.title} \\| HappyBox | ${post.ru.excerpt} | (Сейчас используется Excerpt) |\n`;
}


console.log(md);

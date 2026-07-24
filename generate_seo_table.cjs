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

let md = "### 🇬🇧 English Pages\n\n| URL | H1 (Current) | SEO Title | Excerpt (N/A for static) | SEO Description |\n|---|---|---|---|---|\n";
md += `| / | Fast & Reliable Shipping from China... | HappyBox Logistics | Fast China Freight Forwarder | N/A | Fast & Reliable Shipping from China to USA, Europe, UAE, Russia, and Worldwide. We handle purchasing, warehousing, and logistics. |\n`;
md += `| /blog | Logistics Blog & Insights | Logistics Blog & Insights \| HappyBox | N/A | Expert guides, news, and tips for shipping from China and e-commerce. |\n`;

for(const [key, data] of Object.entries(seoMap)) {
    let url = `/${key}`;
    if (key === 'destinations') url = '/destinations';
    md += `| ${url} | (Based on Translation File) | ${data.title.en} | N/A | ${data.desc.en} |\n`;
}

md += "\n### 🇷🇺 Русские страницы\n\n| URL | H1 (Current) | SEO Title | Excerpt (N/A for static) | SEO Description |\n|---|---|---|---|---|\n";
md += `| /ru | Быстрая и надежная доставка из Китая... | HappyBox | Доставка из Китая и Выкуп Товаров | N/A | Быстрая и надежная логистика из Китая в РФ, Европу, США и ОАЭ. Карго, выкуп товаров с фабрик, проверка качества и услуги склада. |\n`;
md += `| /ru/blog | Блог и база знаний по логистике | Блог и база знаний по логистике \| HappyBox | N/A | Экспертные статьи, бизнес-гайды и советы по доставке из Китая. |\n`;

for(const [key, data] of Object.entries(seoMap)) {
    let url = `/ru/${key}`;
    if (key === 'destinations') url = '/ru/destinations';
    md += `| ${url} | (Берется из переводов) | ${data.title.ru} | N/A | ${data.desc.ru} |\n`;
}

console.log(md);


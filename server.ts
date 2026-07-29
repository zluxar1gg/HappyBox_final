import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const seoData: Record<string, { title: string; description: string }> = {
  // Home
  '/': {
    title: 'DDP Shipping from China to USA, UAE, EU, Canada & Australia | HappyBox',
    description: 'Reliable freight forwarder in China. Professional DDP shipping to USA, Canada, UAE & EU. Sea, Air & TIR. Free warehousing and consolidation. Get a free quote!'
  },
  '/ru': {
    title: 'Доставка из Китая под ключ в США, ЕС, Россию, ОАЭ, Канаду и Австралию | Карго HappyBox',
    description: 'Надежный посредник и доставка из Китая. DDP доставка в США, Канаду, Европу, Россию и Дубай. Авиа, море и авто. Бесплатная консолидация и склад. Рассчитайте стоимость!'
  },
  // Destinations
  '/usa': {
    title: 'China to USA Shipping: Air & Sea Freight DDP | HappyBox',
    description: 'Reliable shipping from China to the USA. Warehousing in China, DDP door-to-door delivery, fast air freight, and cost-effective sea freight. Get a quote today'
  },
  '/ru/usa': {
    title: 'Доставка из Китая в США: DDP, Авиа и Склад в Китае | HappyBox',
    description: 'Быстрая доставка из Китая в США: авиа, море и DDP растаможка. Склад и преп-центр в Китае для Amazon FBA — подготовим и отправим заказ под ключ'
  },
  '/uae': {
    title: 'Shipping from China to UAE & Dubai | DDP Delivery | HappyBox',
    description: 'Direct door-to-door shipping from China to Dubai and UAE. Sea freight from $4/kg, Air from $14/kg. Customs clearance included. Start shipping today!'
  },
  '/ru/uae': {
    title: 'Доставка из Китая в ОАЭ и Дубай: Карго DDP | HappyBox',
    description: 'Прямая доставка из Китая в Эмираты. Море от $4/кг, Авиа от $14/кг. Доставка от двери до двери с полной растаможкой. Рассчитать стоимость доставки!'
  },
  '/eu': {
    title: 'Shipping from China to Europe | DDP Air, Sea & Truck | HappyBox',
    description: 'DDP shipping from China to EU (Germany, Poland, France, etc.). Land freight from $3/kg, Air from $10/kg. Tax-free door-to-door delivery. Get your rates now!'
  },
  '/ru/eu': {
    title: 'Доставка из Китая в Европу: Авто и Авиа Карго DDP | HappyBox',
    description: 'DDP доставка из Китая в страны ЕС (Германия, Франция, Польша). Авто от $3/кг, Авиа от $10/кг. Доставка до двери без налогов для получателя. Закажите расчет!'
  },
  '/russia': {
    title: 'Shipping from China to Russia | TIR & Express Cargo | HappyBox',
    description: 'Reliable cargo delivery from China to Russia. Fast TIR trucking from $1.6/kg. White import, customs clearance, and secure logistics. Get a quote!'
  },
  '/ru/russia': {
    title: 'Доставка из Китая в Россию: Карго и Белая доставка | HappyBox',
    description: 'Надежное карго из Китая в РФ. Быстрая автодоставка (TIR) от $1.6/кг. Помощь с выкупом, таможенное оформление и страхование грузов. Узнайте тарифы!'
  },
  // Shopping & Services
  '/taobao': {
    title: 'Best Taobao Agent: Buy from China with 0% Fee | HappyBox',
    description: 'Trusted Taobao shopping agent. We buy, check, and ship items worldwide. 0% commission, free consolidation & photo reports. Start shopping from China now!'
  },
  '/ru/taobao': {
    title: 'Посредник Таобао: Выкуп из Китая под 0% | Карго HappyBox',
    description: 'Надежный посредник для покупок на Taobao. Выкупим, проверим на брак и доставим ваш заказ. Комиссия 0%, бесплатный склад и фотоотчет. Закажите выкуп!'
  },
  '/1688': {
    title: '1688 Agent & Sourcing: Wholesale from China | HappyBox',
    description: 'Professional 1688 sourcing agent. Buy wholesale from Chinese factories safely. Price negotiation, quality check & global shipping. Get a free sourcing consultation!'
  },
  '/ru/1688': {
    title: 'Посредник 1688: Оптовый выкуп из Китая без комиссии | HappyBox',
    description: 'Профессиональный агент 1688. Поможем купить оптом напрямую с фабрик Китая. Проверка качества, переговоры и доставка под ключ. Начните работать с Китаем!'
  },
  '/poizon': {
    title: 'Poizon Dewu Agent: Buy Authentic Sneakers from China | HappyBox',
    description: 'Buy original sneakers and streetwear from Poizon Dewu. We provide purchasing assistance, legit checks, and fast shipping. Order your authentic gear now!'
  },
  '/ru/poizon': {
    title: 'Выкуп с Poizon Dewu: Доставка оригиналов из Китая | HappyBox',
    description: 'Доставка оригинальных кроссовок и одежды с Poizon Dewu. Быстрый выкуп, Legit Check, проверка на складе и надежная отправка в вашу страну. Закажите оригинал!'
  },
  '/pinduoduo': {
    title: 'Pinduoduo Agent | Cheap Shopping from China | HappyBox',
    description: 'Buy items at the lowest prices from Pinduoduo. We help you navigate the app, consolidate your orders, and ship them globally. Get a free quote!'
  },
  '/ru/pinduoduo': {
    title: 'Выкуп с Pinduoduo: Дешевые товары из Китая | Карго HappyBox',
    description: 'Покупайте товары по самым низким ценам на Pinduoduo. Поможем с выкупом, объединим посылки на складе и отправим удобным способом. Узнайте тарифы!'
  },
  '/weidian': {
    title: 'Weidian Agent | Buy Streetwear & Replicas from China | HappyBox',
    description: 'Your guide to shopping on Weidian. We help you buy from independent sellers, check item quality, and provide secure international shipping. Request a quote!'
  },
  '/ru/weidian': {
    title: 'Выкуп с Weidian: Посредник для покупок в Китае | HappyBox',
    description: 'Надежный агент для покупок на Weidian. Поможем заказать товары у независимых продавцов, проверим качество и организуем доставку. Закажите выкуп!'
  },
  '/xianyu': {
    title: 'Xianyu Agent | Buy Second-Hand Goods from China | HappyBox',
    description: 'Shop for rare and used items on Xianyu Idle Fish. We communicate with sellers, verify products, and ship your finds worldwide. Start shopping today!'
  },
  '/ru/xianyu': {
    title: 'Выкуп с Xianyu Idle Fish: Б/у товары из Китая | HappyBox',
    description: 'Помощь в покупке редких и б/у товаров на барахолке Xianyu. Договоримся с продавцом, проверим товар на складе и доставим вам. Рассчитайте стоимость!'
  },
  '/amazon': {
    title: 'Amazon FBA Prep Center in China | DDP Shipping to USA & EU | HappyBox',
    description: 'Full-service Amazon FBA prep in China: labeling, bundling, and quality inspection. Direct DDP shipping to Amazon warehouses in USA/EU. Grow your FBA business!'
  },
  '/ru/amazon': {
    title: 'Преп-центр в Китае: Доставка на Amazon FBA США и Европа',
    description: 'Услуги преп-центра для селлеров Amazon. Маркировка, упаковка, проверка и прямая DDP доставка на склады Амазон в США и ЕС. Оптимизируйте свою логистику!'
  },
  '/amazon-canada': {
    title: 'Amazon FBA Canada Prep & Shipping | HappyBox',
    description: 'Expert FBA Canada prep & DDP shipping. We handle CBSA, GST/HST, and Canadian labeling requirements — factory to Amazon warehouse'
  },
  '/ru/amazon-canada': {
    title: 'Доставка на склады Amazon FBA Канада | HappyBox',
    description: 'Доставка на Amazon FBA Канада под ключ: DDP, оформление CBSA и GST/HST, подготовка товара по канадским требованиям'
  },
  '/inspection': {
    title: 'Quality Inspection in China | Factory Audits | HappyBox',
    description: 'Professional quality control in China. Factory audits, pre-shipment inspections, and detailed photo/video reports. Protect your business and imports!'
  },
  '/ru/inspection': {
    title: 'Проверка качества и инспекция фабрик в Китае | HappyBox',
    description: 'Профессиональный контроль качества в Китае. Выездные инспекции фабрик, проверка партий перед отправкой, фото и видеоотчеты. Защитите свой бизнес от брака!'
  },
  '/warehousing': {
    title: 'Free Warehousing & Consolidation in China | HappyBox',
    description: 'Save on shipping with free warehousing and parcel consolidation in China. We combine multiple orders into one box to reduce costs. Start saving today!'
  },
  '/ru/warehousing': {
    title: 'Бесплатный склад и консолидация посылок в Китае | HappyBox',
    description: 'Экономьте на доставке с услугами нашего склада. Бесплатное хранение, проверка, переупаковка и объединение ваших заказов в одну посылку. Пользуйтесь бесплатно!'
  },
  '/canada': {
    title: 'China to Canada Shipping: Air & Sea Freight DDP | HappyBox',
    description: 'Fast, reliable shipping from China to Canada. Air freight, sea cargo, and DDP delivery — customs and duties handled for you. Get a quote today'
  },
  '/ru/canada': {
    title: 'Доставка из Китая в Канаду: Авиа и Море под ключ | HappyBox',
    description: 'Надежная доставка грузов из Китая в Канаду: авиа, морской фрахт и DDP растаможка. Учитываем требования CBSA и GST/HST. Расчет за минуту'
  },
  '/thailand': {
    title: 'Shipping from China to Thailand | DDP Sea, Air & Land Freight | HappyBox',
    description: 'Fast and affordable shipping from China to Thailand. Land freight from $4/kg, Air freight from $11/kg. Tax-free (DDP) delivery to Bangkok, Chiang Mai, Pattaya.'
  },
  '/ru/thailand': {
    title: 'Доставка из Китая в Таиланд | DDP Авиа и Авто | HappyBox',
    description: 'Быстрая доставка из Китая в Таиланд. Авто от $4/кг, Авиа от $11/кг. DDP доставка без налогов и пошлин в Бангкок, Пхукет, Паттайю.'
  },
  '/indonesia': {
    title: 'Shipping from China to Indonesia | DDP Sea & Air | HappyBox',
    description: 'Secure Air & Economy Sea Freight from China to Indonesia. DDP Door-to-Door delivery. Air from $10/kg, Sea from $1.1/kg. No Import Licenses needed.'
  },
  '/ru/indonesia': {
    title: 'Доставка из Китая в Индонезию | DDP Море и Авиа | HappyBox',
    description: 'Экономичная DDP доставка в Индонезию. Авиа от $10/кг, Море от $1.1/кг. Полная очистка без необходимости лицензий API и уплаты НДС.'
  },
  '/georgia': {
    title: 'Shipping from China to Georgia | Middle Corridor DDP | HappyBox',
    description: 'Reliable Air & Fast Land Freight from China to Georgia. Direct door-to-door delivery. Trucking from $1.2/kg, Air from $15/kg. Customs handled.'
  },
  '/ru/georgia': {
    title: 'Доставка из Китая в Грузию | DDP Авиа и Авто | HappyBox',
    description: 'Надежная и быстрая доставка карго из Китая в Грузию. Авто от $1.2/кг, Авиа от $15/кг. Растаможка и НДС включены.'
  },
  '/israel': {
    title: 'Shipping from China to Israel | DDP Sea & Air | HappyBox',
    description: 'Direct Door-to-Door DDP delivery to Israel. Air freight from $15/kg, Sea freight from $1.2/kg. Customs & VAT (Ma\'am) handling included.'
  },
  '/ru/israel': {
    title: 'Доставка из Китая в Израиль | DDP Море и Авиа | HappyBox',
    description: 'Надежная доставка DDP из Китая в Израиль. Авиа от $15/кг, Море от $1.2/кг. Таможенная очистка и НДС (Маам) включены.'
  },
  '/argentina': {
    title: 'Shipping from China to Argentina | DDP Delivery | HappyBox',
    description: 'Secure Door-to-Door DDP Logistics from China to Argentina. Ocean freight from $1.8/kg, Air freight from $14/kg. AFIP customs and taxes handled.'
  },
  '/ru/argentina': {
    title: 'Доставка из Китая в Аргентину | DDP Карго до двери | HappyBox',
    description: 'Прямая DDP доставка из Китая в Аргентину. Море от $1.8/кг, Авиа от $14/кг. Растаможка (AFIP) и налоги (IVA) включены в тариф.'
  },
  '/south-africa': {
    title: 'Shipping from China to South Africa | DDP Sea & Air | HappyBox',
    description: 'Reliable Air & Sea Freight from China to South Africa. DDP Door-to-Door delivery. Sea from $1.3/kg, Air from $12/kg. SARS obligations handled.'
  },
  '/ru/south-africa': {
    title: 'Доставка из Китая в ЮАР | DDP Море и Авиа | HappyBox',
    description: 'Оптимальная DDP доставка из Китая в ЮАР. Море от $1.3/кг, Авиа от $12/кг. Все таможенные пошлины (SARS) и НДС включены.'
  },
  '/australia': {
    title: 'Shipping from China to Australia | Hassle-Free DDP | HappyBox',
    description: 'Cost-effective DDP shipping from China to Australia. Sea freight from $1.3/kg, Air freight from $9/kg. Taxes, duties (GST), and quarantine handled.'
  },
  '/ru/australia': {
    title: 'Доставка из Китая в Австралию | DDP Море и Авиа | HappyBox',
    description: 'Недорогая Карго доставка DDP из Китая в Австралию. Море от $1.3/кг, Авиа от $9/кг. Налоги (GST), таможня и био-контроль включены.'
  }
};

async function startServer() {
  const app = express();
  const PORT = 3000;

  // API routes FIRST
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    
    // Serve static files, automatically serving index.html for directories
    app.use(express.static(distPath));
    
    // Fallback for any unmatched routes (SPA fallback)
    app.get('*all', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();

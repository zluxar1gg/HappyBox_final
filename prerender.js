import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const routesToPrerender = [
  '/', '/ru',
  '/usa', '/ru/usa',
  '/uae', '/ru/uae',
  '/eu', '/ru/eu',
  '/russia', '/ru/russia',
  '/taobao', '/ru/taobao',
  '/1688', '/ru/1688',
  '/poizon', '/ru/poizon',
  '/tmall', '/ru/tmall',
  '/pinduoduo', '/ru/pinduoduo',
  '/weidian', '/ru/weidian',
  '/xianyu', '/ru/xianyu',
  '/amazon', '/ru/amazon',
  '/inspection', '/ru/inspection',
  '/warehousing', '/ru/warehousing'
];

const seoData = {
  '/': {
    title: 'DDP Shipping from China to USA, UAE, EU, Canada & Australia | HappyBox Logistics',
    description: 'Reliable freight forwarder in China. Professional DDP shipping to USA, Canada, UAE & EU. Sea, Air & TIR. Free warehousing and consolidation. Get a free quote!'
  },
  '/ru': {
    title: 'Доставка из Китая под ключ в США, ЕС, Россию, ОАЭ, Канаду и Австралию | Карго HappyBox',
    description: 'Надежный посредник и доставка из Китая. DDP доставка в США, Канаду, Европу, Россию и Дубай. Авиа, море и авто. Бесплатная консолидация и склад. Рассчитайте стоимость!'
  },
  '/usa': {
    title: 'DDP Shipping from China to USA | Sea & Air | HappyBox Logistics',
    description: 'Fast door-to-door shipping from China to USA. Sea freight from $1.2/kg, Air from $10/kg. Tax-free delivery with full customs clearance. Request a quote!'
  },
  '/ru/usa': {
    title: 'Доставка из Китая в США: Карго DDP под ключ | HappyBox',
    description: 'Надежная доставка грузов из Китая в США. Море от $1.2/кг, Авиа от $10/кг. Таможенная очистка включена, без пошлин и скрытых комиссий. Узнайте цену!'
  },
  '/uae': {
    title: 'Shipping from China to UAE & Dubai | DDP Delivery | HappyBox Logistics',
    description: 'Direct door-to-door shipping from China to Dubai and UAE. Sea freight from $0.8/kg, Air from $6/kg. Customs clearance included. Start shipping today!'
  },
  '/ru/uae': {
    title: 'Доставка из Китая в ОАЭ и Дубай: Карго DDP | HappyBox',
    description: 'Прямая доставка из Китая в Эмираты. Море от $0.8/кг, Авиа от $6/кг. Доставка от двери до двери с полной растаможкой. Рассчитать стоимость доставки!'
  },
  '/eu': {
    title: 'Shipping from China to Europe | DDP Air, Sea & Truck | HappyBox Logistics',
    description: 'DDP shipping from China to EU (Germany, Poland, France, etc.). Land freight from $3/kg, Air from $10/kg. Tax-free door-to-door delivery. Get your rates now!'
  },
  '/ru/eu': {
    title: 'Доставка из Китая в Европу: Авто и Авиа Карго DDP | HappyBox',
    description: 'DDP доставка из Китая в страны ЕС (Германия, Франция, Польша). Авто от $3/кг, Авиа от $10/кг. Доставка до двери без налогов для получателя. Закажите расчет!'
  },
  '/russia': {
    title: 'Shipping from China to Russia | TIR & Express Cargo | HappyBox Logistics',
    description: 'Reliable cargo delivery from China to Russia. Fast TIR trucking from $1.6/kg. White import, customs clearance, and secure logistics. Get a quote!'
  },
  '/ru/russia': {
    title: 'Доставка из Китая в Россию: Карго и Белая доставка | HappyBox',
    description: 'Надежное карго из Китая в РФ. Быстрая автодоставка (TIR) от $1.6/кг. Помощь с выкупом, таможенное оформление и страхование грузов. Узнайте тарифы!'
  },
  '/taobao': {
    title: 'Best Taobao Agent: Buy from China with 0% Fee | HappyBox Logistics',
    description: 'Trusted Taobao shopping agent. We buy, check, and ship items worldwide. 0% commission, free consolidation & photo reports. Start shopping from China now!'
  },
  '/ru/taobao': {
    title: 'Посредник Taobao (0% Комиссия) | Выкуп и Доставка из Китая | HappyBox',
    description: 'Покупайте на Taobao, 1688 и Tmall с комиссией 0%. HappyBox предлагает бесплатную проверку качества, консолидацию и доставку по всему миру. Сэкономьте до 70% на доставке!'
  },
  '/1688': {
    title: '1688 Agent & Sourcing: Wholesale from China | HappyBox Logistics',
    description: 'Professional 1688 sourcing agent. Buy wholesale from Chinese factories safely. Price negotiation, quality check & global shipping. Get a free sourcing consultation!'
  },
  '/ru/1688': {
    title: 'Посредник 1688: Оптовый выкуп из Китая без комиссии | HappyBox',
    description: 'Профессиональный агент 1688. Поможем купить оптом напрямую с фабрик Китая. Проверка качества, переговоры и доставка под ключ. Начните работать с Китаем!'
  },
  '/poizon': {
    title: 'Poizon Dewu Agent: Buy Authentic Sneakers from China | HappyBox Logistics',
    description: 'Buy original sneakers and streetwear from Poizon Dewu. We provide purchasing assistance, legit checks, and fast shipping. Order your authentic gear now!'
  },
  '/ru/poizon': {
    title: 'Выкуп с Poizon Dewu: Доставка оригиналов из Китая | HappyBox',
    description: 'Доставка оригинальных кроссовок и одежды с Poizon Dewu. Быстрый выкуп, Legit Check, проверка на складе и надежная отправка в вашу страну. Закажите оригинал!'
  },
  '/pinduoduo': {
    title: 'Pinduoduo Agent | Cheap Shopping from China | HappyBox Logistics',
    description: 'Buy items at the lowest prices from Pinduoduo. We help you navigate the app, consolidate your orders, and ship them globally. Get a free quote!'
  },
  '/ru/pinduoduo': {
    title: 'Выкуп с Pinduoduo: Дешевые товары из Китая | Карго HappyBox',
    description: 'Покупайте товары по самым низким ценам на Pinduoduo. Поможем с выкупом, объединим посылки на складе и отправим удобным способом. Узнайте тарифы!'
  },
  '/weidian': {
    title: 'Weidian Agent | Buy Streetwear & Replicas from China | HappyBox Logistics',
    description: 'Your guide to shopping on Weidian. We help you buy from independent sellers, check item quality, and provide secure international shipping. Request a quote!'
  },
  '/ru/weidian': {
    title: 'Выкуп с Weidian: Посредник для покупок в Китае | HappyBox',
    description: 'Надежный агент для покупок на Weidian. Поможем заказать товары у независимых продавцов, проверим качество и организуем доставку. Закажите выкуп!'
  },
  '/xianyu': {
    title: 'Xianyu Agent | Buy Second-Hand Goods from China | HappyBox Logistics',
    description: 'Shop for rare and used items on Xianyu Idle Fish. We communicate with sellers, verify products, and ship your finds worldwide. Start shopping today!'
  },
  '/ru/xianyu': {
    title: 'Выкуп с Xianyu Idle Fish: Б/у товары из Китая | HappyBox',
    description: 'Помощь в покупке редких и б/у товаров на барахолке Xianyu. Договоримся с продавцом, проверим товар на складе и доставим вам. Рассчитайте стоимость!'
  },
  '/amazon': {
    title: 'Amazon FBA Prep Center in China | DDP Shipping to USA & EU | HappyBox Logistics',
    description: 'Full-service Amazon FBA prep in China: labeling, bundling, and quality inspection. Direct DDP shipping to Amazon warehouses in USA/EU. Grow your FBA business!'
  },
  '/ru/amazon': {
    title: 'Преп-центр в Китае: Доставка на Amazon FBA США и Европа',
    description: 'Услуги преп-центра для селлеров Amazon. Маркировка, упаковка, проверка и прямая DDP доставка на склады Амазон в США и ЕС. Оптимизируйте свою логистику!'
  },
  '/inspection': {
    title: 'Quality Inspection in China | Factory Audits | HappyBox Logistics',
    description: 'Professional quality control in China. Factory audits, pre-shipment inspections, and detailed photo/video reports. Protect your business and imports!'
  },
  '/ru/inspection': {
    title: 'Проверка качества и инспекция фабрик в Китае | HappyBox',
    description: 'Профессиональный контроль качества в Китае. Выездные инспекции фабрик, проверка партий перед отправкой, фото и видеоотчеты. Защитите свой бизнес от брака!'
  },
  '/warehousing': {
    title: 'Free Warehousing & Consolidation in China | HappyBox Logistics',
    description: 'Save on shipping with free warehousing and parcel consolidation in China. We combine multiple orders into one box to reduce costs. Start saving today!'
  },
  '/ru/warehousing': {
    title: 'Бесплатный склад и консолидация посылок в Китае | HappyBox',
    description: 'Экономьте на доставке с услугами нашего склада. Бесплатное хранение, проверка, переупаковка и объединение ваших заказов в одну посылку. Пользуйтесь бесплатно!'
  }
};

async function prerender() {
  const template = fs.readFileSync(path.resolve(__dirname, 'dist/client/index.html'), 'utf-8');
  
  // Load the server entry
  const { render } = await import('./dist/server/entry-server.js');

  for (const url of routesToPrerender) {
    const appHtml = render(url);
    
    let html = template.replace(`<!--app-html-->`, appHtml);
    // If the template has <div id="root"></div>, replace it:
    html = html.replace(`<div id="root"></div>`, `<div id="root">${appHtml}</div>`);
    
    const seo = seoData[url];
    if (seo) {
      html = html.replace(/<title>.*<\/title>/, `<title>${seo.title}</title>`);
      html = html.replace(/<meta name="title" content="[^"]*" \/>/, `<meta name="title" content="${seo.title}" />`);
      html = html.replace(/<meta property="og:title" content="[^"]*" \/>/, `<meta property="og:title" content="${seo.title}" />`);
      html = html.replace(/<meta property="twitter:title" content="[^"]*" \/>/, `<meta property="twitter:title" content="${seo.title}" />`);
      
      html = html.replace(/<meta name="description" content="[^"]*" \/>/, `<meta name="description" content="${seo.description}" />`);
      html = html.replace(/<meta property="og:description" content="[^"]*" \/>/, `<meta property="og:description" content="${seo.description}" />`);
      html = html.replace(/<meta property="twitter:description" content="[^"]*" \/>/, `<meta property="twitter:description" content="${seo.description}" />`);
      
      const fullUrl = `https://happyboxlogistics.com${url === '/' ? '' : url}`;
      html = html.replace(/<meta property="og:url" content="[^"]*" \/>/, `<meta property="og:url" content="${fullUrl}" />`);
      html = html.replace(/<meta property="twitter:url" content="[^"]*" \/>/, `<meta property="twitter:url" content="${fullUrl}" />`);
    }

    const filePath = path.resolve(__dirname, 'dist/client', url === '/' ? 'index.html' : `${url.slice(1)}/index.html`);
    
    // Create directory if it doesn't exist
    const dir = path.dirname(filePath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    
    fs.writeFileSync(filePath, html);
    console.log(`Prerendered: ${url}`);
  }
  
  // Clean up server build
  fs.rmSync(path.resolve(__dirname, 'dist/server'), { recursive: true, force: true });
  
  // Move client files to dist root
  const clientDir = path.resolve(__dirname, 'dist/client');
  const distDir = path.resolve(__dirname, 'dist');
  
  const files = fs.readdirSync(clientDir);
  for (const file of files) {
    fs.cpSync(path.join(clientDir, file), path.join(distDir, file), { recursive: true });
  }
  fs.rmSync(clientDir, { recursive: true, force: true });
  
  console.log('Prerendering complete!');
}

prerender().catch(e => {
  console.error(e);
  process.exit(1);
});

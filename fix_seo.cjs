const fs = require('fs');

const updateSeo = (file) => {
  let content = fs.readFileSync(file, 'utf8');

  // USA EN
  content = content.replace(/title:\s*'DDP Shipping from China to USA \| Sea & Air \| HappyBox',[\s\n]*description:\s*'Fast door-to-door shipping from China to USA\. Sea freight from \$1\.2\/kg, Air from \$10\/kg\. Tax-free delivery with full customs clearance\. Request a quote!'/g, 
    "title: 'China to USA Shipping: Air & Sea Freight DDP | HappyBox',\n    description: 'Reliable shipping from China to the USA. Warehousing in China, DDP door-to-door delivery, fast air freight, and cost-effective sea freight. Get a quote today'");
    
  // USA RU
  content = content.replace(/title:\s*'Доставка из Китая в США: Карго DDP под ключ \| HappyBox',[\s\n]*description:\s*'Надежная доставка грузов из Китая в США\. Море от \$1\.2\/кг, Авиа от \$10\/кг\. Таможенная очистка включена, без пошлин и скрытых комиссий\. Узнайте цену!'/g, 
    "title: 'Доставка из Китая в США: DDP, Авиа и Склад в Китае | HappyBox',\n    description: 'Быстрая доставка из Китая в США: авиа, море и DDP растаможка. Склад и преп-центр в Китае для Amazon FBA — подготовим и отправим заказ под ключ'");

  // Canada EN
  content = content.replace(/title:\s*'Shipping from China to Canada \| DDP Delivery \| HappyBox',[\s\n]*description:\s*'Reliable air and sea shipping from China to Canada\. Get competitive DDP rates and fast delivery\. Request a free quote today!'/g, 
    "title: 'China to Canada Shipping: Air & Sea Freight DDP | HappyBox',\n    description: 'Fast, reliable shipping from China to Canada. Air freight, sea cargo, and DDP delivery — customs and duties handled for you. Get a quote today'");

  // Canada RU
  content = content.replace(/title:\s*'Доставка из Китая в Канаду: Карго DDP под ключ \| HappyBox',[\s\n]*description:\s*'Надежное карго из Китая в Канаду\. Море и авиадоставка по системе DDP\. Без пошлин и скрытых комиссий\. Узнайте тарифы!'/g, 
    "title: 'Доставка из Китая в Канаду: Авиа и Море под ключ | HappyBox',\n    description: 'Надежная доставка грузов из Китая в Канаду: авиа, морской фрахт и DDP растаможка. Учитываем требования CBSA и GST/HST. Расчет за минуту'");

  // Amazon Canada EN
  content = content.replace(/title:\s*'Amazon FBA Prep Center in China \| DDP Shipping to Canada \| HappyBox',[\s\n]*description:\s*'Full-service Amazon FBA prep in China: labeling, bundling, and quality inspection\. Direct DDP shipping to Amazon warehouses in Canada\. Grow your FBA business!'/g, 
    "title: 'Amazon FBA Canada Prep & Shipping | HappyBox',\n    description: 'Expert FBA Canada prep & DDP shipping. We handle CBSA, GST/HST, and Canadian labeling requirements — factory to Amazon warehouse'");

  // Amazon Canada RU
  content = content.replace(/title:\s*'Преп-центр в Китае: Доставка на Amazon FBA Канада \| HappyBox',[\s\n]*description:\s*'Услуги преп-центра для селлеров Amazon\. Маркировка, проверка и прямая DDP доставка на склады Амазон в Канаде\. Оптимизируйте свою логистику!'/g, 
    "title: 'Доставка на склады Amazon FBA Канада | HappyBox',\n    description: 'Доставка на Amazon FBA Канада под ключ: DDP, оформление CBSA и GST/HST, подготовка товара по канадским требованиям'");

  fs.writeFileSync(file, content, 'utf8');
};

updateSeo('server.ts');
updateSeo('prerender.js');
console.log('done');

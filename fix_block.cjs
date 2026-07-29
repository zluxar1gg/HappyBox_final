const fs = require('fs');

const file = 'server.ts';
let content = fs.readFileSync(file, 'utf8');

const startStr = "  '/ru/amazon': {";
const endStr = "  '/inspection': {";

const startIndex = content.indexOf(startStr);
const endIndex = content.indexOf(endStr);

if (startIndex !== -1 && endIndex !== -1) {
  const newBlock = `  '/ru/amazon': {
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
`;
  
  content = content.substring(0, startIndex) + newBlock + content.substring(endIndex);
  fs.writeFileSync(file, content, 'utf8');
}
console.log('Fixed');

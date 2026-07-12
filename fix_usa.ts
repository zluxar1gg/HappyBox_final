import fs from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), 'components', 'UsaShippingPage.tsx');
let content = fs.readFileSync(filePath, 'utf8');

content = content
  .replace(/className="text-xl text-gray-600 mb-10 font-medium leading-relaxed/g, 'className="text-lg md:text-xl text-gray-700 mb-10 font-medium leading-relaxed')
  .replace(/className="text-lg text-gray-700 leading-relaxed font-medium"/g, 'className="text-base md:text-lg text-gray-700 font-medium leading-relaxed"')
  .replace(/className="text-\[10px\] font-black uppercase/g, 'className="text-[10px] font-extrabold uppercase')
  .replace(/className="text-lg text-gray-700 leading-relaxed font-medium mb-12"/g, 'className="text-base md:text-lg text-gray-700 font-medium leading-relaxed mb-12"')
  .replace(/className="text-gray-700 leading-relaxed font-medium"/g, 'className="text-base md:text-lg text-gray-700 font-medium leading-relaxed"')
  .replace(/className="text-2xl lg:text-3xl font-extrabold text-gray-700/g, 'className="text-2xl md:text-3xl font-extrabold text-brand-dark opacity-80')
  .replace(/className="text-gray-600 font-medium"/g, 'className="text-base md:text-lg text-gray-700 font-medium leading-relaxed"');

fs.writeFileSync(filePath, content, 'utf8');
console.log('Fixed UsaShippingPage.tsx');

import fs from 'fs';
import path from 'path';

const dir = path.join(process.cwd(), 'components');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));
files.forEach(file => {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let newContent = content
    .replace(/text-3xl lg:text-4xl font-black/g, 'text-3xl md:text-4xl font-extrabold')
    .replace(/text-4xl font-black/g, 'text-3xl md:text-4xl font-extrabold')
    .replace(/text-3xl md:text-4xl font-black/g, 'text-3xl md:text-4xl font-extrabold')
    .replace(/text-2xl font-black/g, 'text-2xl font-extrabold')
    .replace(/text-xl font-black/g, 'text-xl md:text-2xl font-bold');
  if (content !== newContent) {
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log('Updated font-black in ' + file);
  }
});

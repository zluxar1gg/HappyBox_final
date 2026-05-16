const fs = require('fs');
const path = require('path');

const dir = './components';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));

const standardH1 = 'text-4xl md:text-5xl lg:text-7xl font-extrabold leading-[1.1] text-brand-dark mb-8 tracking-tight';

// H1 matching
const h1Regex = /<h1 className="text-4xl md:text-5xl[^"]*"/g;
const h2BasicRegex = /<h2 className="text-3xl font-black[^"]*"/g;

for (const file of files) {
  const filepath = path.join(dir, file);
  let content = fs.readFileSync(filepath, 'utf8');
  let changed = false;

  if (content.match(h1Regex)) {
     const newContent = content.replace(h1Regex, `<h1 className="${standardH1}"`);
     if(newContent !== content) {
        content = newContent;
        changed = true;
     }
  }
  
  if (changed) {
    fs.writeFileSync(filepath, content);
    console.log('Fixed', file);
  }
}

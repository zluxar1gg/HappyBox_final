import fs from 'fs';

function replaceInFile(filePath: string) {
  let content = fs.readFileSync(filePath, 'utf8');
  content = content.replace(/—/g, '-');
  fs.writeFileSync(filePath, content, 'utf8');
}

replaceInFile('components/EuShippingPage.tsx');
replaceInFile('components/EuAdvancedLogisticsGuide.tsx');

console.log('Done');

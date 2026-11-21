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
  '/canada', '/ru/canada',
  '/destinations', '/ru/destinations',
  '/taobao', '/ru/taobao',
  '/alibaba', '/ru/alibaba',
  '/1688', '/ru/1688',
  '/poizon', '/ru/poizon',
  '/tmall', '/ru/tmall',
  '/pinduoduo', '/ru/pinduoduo',
  '/weidian', '/ru/weidian',
  '/xianyu', '/ru/xianyu',
  '/amazon', '/ru/amazon',
  '/amazon-canada', '/ru/amazon-canada',
  '/inspection', '/ru/inspection',
  '/warehousing', '/ru/warehousing',
  '/blog', '/ru/blog',
  '/blog/how-to-ship-from-pinduoduo-to-dubai-uae', '/ru/blog/how-to-ship-from-pinduoduo-to-dubai-uae',
  '/blog/taobao-shopping-2026', '/ru/blog/taobao-shopping-2026',
  '/blog/weidian-poizon-pinduoduo-guide', '/ru/blog/weidian-poizon-pinduoduo-guide',
  '/blog/chinese-holidays-calendar-2026', '/ru/blog/chinese-holidays-calendar-2026',
  '/thailand', '/ru/thailand',
  '/indonesia', '/ru/indonesia',
  '/argentina', '/ru/argentina',
  '/south-africa', '/ru/south-africa',
  '/georgia', '/ru/georgia',
  '/israel', '/ru/israel',
  '/australia', '/ru/australia'
];

function stripFallbackSeoTags(html) {
  return html
    .replace(/\s*<title[^>]*>[\s\S]*?<\/title>/i, '')
    .replace(/\s*<meta[^>]+data-rh="true"[^>]*\/?>/gi, '')
    .replace(/\s*<meta[^>]+name="(?:description|robots)"[^>]*\/?>/gi, '')
    .replace(/\s*<meta[^>]+property="og:(?:type|url|title|description|image|site_name|locale|locale:alternate)"[^>]*\/?>/gi, '')
    .replace(/\s*<meta[^>]+name="twitter:(?:url|title|description|image)"[^>]*\/?>/gi, '')
    .replace(/\s*<link[^>]+rel="(?:canonical|alternate)"[^>]*\/?>/gi, '');
}

async function prerender() {
  const template = fs.readFileSync(path.resolve(__dirname, 'dist/client/index.html'), 'utf-8');
  
  // Load the server entry
  const { render } = await import('./dist/server/entry-server.js');

  for (const url of routesToPrerender) {
    const { appHtml, helmet } = render(url);
    
    let html = template.replace(`<!--app-html-->`, appHtml);
    // If the template has <div id="root"></div>, replace it:
    html = html.replace(`<div id="root"></div>`, `<div id="root">${appHtml}</div>`);

    const langAttr = (url === '/ru' || url.startsWith('/ru/')) ? 'ru' : 'en';
    const htmlAttrs = helmet?.htmlAttributes?.toString()?.trim();
    html = html.replace(/<html[^>]*>/i, `<html ${htmlAttrs || `lang="${langAttr}"`}>`);

    if (helmet) {
      html = stripFallbackSeoTags(html);

      const helmetTags = [
        helmet.title?.toString(),
        helmet.priority?.toString(),
        helmet.meta?.toString(),
        helmet.link?.toString(),
        helmet.script?.toString(),
      ]
        .filter(Boolean)
        .join('\n    ');

      if (helmetTags) {
        html = html.replace('</head>', `    ${helmetTags}\n  </head>`);
      }
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

const fs = require('fs');

const caShippingPath = 'components/CaShippingPage.tsx';
const caGuidePath = 'components/CaAdvancedLogisticsGuide.tsx';

let caShipping = fs.readFileSync(caShippingPath, 'utf8');
let caGuide = fs.readFileSync(caGuidePath, 'utf8');

// Parse the guide content
const match = caGuide.match(/const content = (\{[\s\S]*?\});\s+const t = content\[language\];/);
if (!match) throw new Error('Could not extract content from CaAdvancedLogisticsGuide');

let guideContentObj;
eval('guideContentObj = ' + match[1]);

// Map it to our generic structure
function mapGuide(langObj) {
    return {
        title: langObj.title,
        subtitle: langObj.subtitle,
        jumpTo: langObj.jumpTo,
        nav: langObj.nav,
        sections: [
            { id: 'ca-sec1', title: langObj.sec1.title, desc: langObj.sec1.desc, items: langObj.sec1.items },
            { id: 'ca-sec2', title: langObj.sec2.title, desc: langObj.sec2.desc, items: langObj.sec2.items },
            { id: 'ca-sec3', title: langObj.sec3.title, desc: langObj.sec3.desc, items: langObj.sec3.items },
            { id: 'ca-sec4', title: langObj.sec4.title, desc: langObj.sec4.desc, items: langObj.sec4.items },
            { id: 'ca-sec5', title: langObj.sec5.title, desc: langObj.sec5.desc, items: langObj.sec5.items, tip: langObj.sec5.tip },
            { id: 'ca-sec6', title: langObj.sec6.title, desc: langObj.sec6.desc, items: langObj.sec6.items, listStyle: 'numbered' },
            { id: 'ca-sec7', title: langObj.sec7.title, desc: langObj.sec7.desc, items: langObj.sec7.items, listStyle: 'bullets' }
        ],
        verdict: langObj.verdict
    };
}

const enGuide = mapGuide(guideContentObj.en);
const ruGuide = mapGuide(guideContentObj.ru);

const enMatch = caShipping.match(/amazonBlock: (\{[\s\S]*?\})\n        \},/);
if (enMatch) {
    caShipping = caShipping.replace(/amazonBlock: \{[\s\S]*?\}\n        \},/, `amazonBlock: ${enMatch[1]},\n            guide: ${JSON.stringify(enGuide, null, 12).replace(/\n/g, '\n            ')}\n        },`);
}
const ruMatch = caShipping.match(/amazonBlock: (\{[\s\S]*?\})\n        \}\n    \};/);
if (ruMatch) {
    caShipping = caShipping.replace(/amazonBlock: \{[\s\S]*?\}\n        \}\n    \};/, `amazonBlock: ${ruMatch[1]},\n            guide: ${JSON.stringify(ruGuide, null, 12).replace(/\n/g, '\n            ')}\n        }\n    };`);
}

// Remove the import and usage of CaAdvancedLogisticsGuide
caShipping = caShipping.replace("import { CaAdvancedLogisticsGuide } from './CaAdvancedLogisticsGuide';\n", "");
caShipping = caShipping.replace("guideComponent={<CaAdvancedLogisticsGuide language={language} />}\n", "");

fs.writeFileSync('components/CaShippingPage.tsx', caShipping);
console.log('Merge completed successfully!');

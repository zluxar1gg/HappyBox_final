
import { Language } from './translations';

type PageType = 'home' | 'usa' | 'eu' | 'uae' | 'ru';

interface MetaData {
  title: string;
  description: string;
}

const metaData: Record<Language, Record<PageType, MetaData>> = {
  en: {
    home: {
      title: "China Shipping Agent & 1688/Taobao Broker | HappyBox Cargo",
      description: "Reliable Freight Forwarder from China to USA, EU, UAE. We act as your Shopping Agent for 1688, Taobao, Poizon. Free consolidation, inspection & DDP shipping."
    },
    usa: {
      title: "Shipping from China to USA (DDP) | Amazon FBA Prep | HappyBox",
      description: "Direct Air & Sea freight to USA. DDP Service (Delivered Duty Paid). We handle customs & taxes. Expert handling for Amazon FBA shipments and personal cargo."
    },
    eu: {
      title: "Shipping from China to Europe | IOSS & VAT Free | HappyBox",
      description: "Tax-Free (DDP) shipping to Germany, France, Poland, Italy. We cover VAT/IOSS. Rail and Air freight options. Safe delivery for branded goods and electronics."
    },
    uae: {
      title: "Shipping from China to Dubai (UAE) | Door-to-Door Cargo",
      description: "Express Cargo to Dubai, Abu Dhabi, Sharjah. Rates include customs & VAT. Fast Air Freight (5-8 days) and Sea shipping. Auto parts, electronics, fashion."
    },
    ru: {
      title: "Cargo to Russia | Auto & Train Delivery | HappyBox Logistics",
      description: "Reliable Cargo shipping to Russia via Moscow. Insurance included. Assistance with payments to Chinese suppliers (RMB/USD). 12-18 days delivery."
    }
  },
  ru: {
    home: {
      title: "Карго из Китая и Гонконга | Посредник Taobao, 1688, Poizon | HappyBox",
      description: "Надежное Карго в Россию, СНГ и мир. Выкуп товаров с 1688, Taobao, Poizon (Dewu). Бесплатная консолидация, проверка на брак, страховка 100%. Оплата в рублях."
    },
    usa: {
      title: "Доставка из Китая в США (DDP) | Без пошлин | Логистика Amazon",
      description: "Прямая доставка в США «под ключ» (DDP). Мы платим пошлины за вас. Идеально для Amazon FBA и личных посылок. Сроки 8-12 дней."
    },
    eu: {
      title: "Доставка из Китая в Европу (Германия, Польша) | Без НДС и Таможни",
      description: "Карго доставка в Европу без головной боли с таможней. DDP сервис: мы оплачиваем НДС. ЖД и Авиа доставка до двери в Германии, Франции, Италии."
    },
    uae: {
      title: "Карго доставка в Дубай (ОАЭ) | Экспресс Авиа и Море | HappyBox",
      description: "Доставка грузов из Китая в ОАЭ «до двери». Включая таможню и НДС. Быстрое авиа (5-8 дней). Возим электронику, одежду, запчасти."
    },
    ru: {
      title: "Карго доставка из Китая в Россию | Авто и ЖД | Люблино",
      description: "Надежное Карго (Авто/ЖД) через Москву (Люблино/Южные Ворота). Помощь с оплатой поставщикам в Китае. Страховка 100%. Выкуп 1688 и Taobao."
    }
  }
};

export const updateMetaTags = (page: PageType, language: Language) => {
  const data = metaData[language][page];
  
  // 1. Update Title
  document.title = data.title;

  // 2. Update Description
  let metaDescription = document.querySelector('meta[name="description"]');
  if (!metaDescription) {
    metaDescription = document.createElement('meta');
    metaDescription.setAttribute('name', 'description');
    document.head.appendChild(metaDescription);
  }
  metaDescription.setAttribute('content', data.description);

  // 3. Construct Base URL logic
  const baseUrl = window.location.origin + window.location.pathname;
  
  // Helper to create search params string
  const getQuery = (p: PageType, l: Language) => {
    const params = new URLSearchParams();
    if (p !== 'home') params.set('page', p);
    if (l === 'ru') params.set('lang', 'ru');
    const str = params.toString();
    return str ? `?${str}` : '';
  };

  const currentFullUrl = baseUrl + getQuery(page, language);
  const enUrl = baseUrl + getQuery(page, 'en');
  const ruUrl = baseUrl + getQuery(page, 'ru');

  // 4. Update Canonical URL (Self-referencing)
  let canonicalLink = document.querySelector('link[rel="canonical"]');
  if (!canonicalLink) {
    canonicalLink = document.createElement('link');
    canonicalLink.setAttribute('rel', 'canonical');
    document.head.appendChild(canonicalLink);
  }
  canonicalLink.setAttribute('href', currentFullUrl);

  // 5. Update Hreflang Tags (Prevents duplicate content issues)
  
  // Hreflang for English (x-default)
  let linkEn = document.querySelector('link[rel="alternate"][hreflang="en"]');
  if (!linkEn) {
    linkEn = document.createElement('link');
    linkEn.setAttribute('rel', 'alternate');
    linkEn.setAttribute('hreflang', 'en');
    document.head.appendChild(linkEn);
  }
  linkEn.setAttribute('href', enUrl);

  // Hreflang for Russian
  let linkRu = document.querySelector('link[rel="alternate"][hreflang="ru"]');
  if (!linkRu) {
    linkRu = document.createElement('link');
    linkRu.setAttribute('rel', 'alternate');
    linkRu.setAttribute('hreflang', 'ru');
    document.head.appendChild(linkRu);
  }
  linkRu.setAttribute('href', ruUrl);
  
  // Hreflang for x-default (usually same as EN)
  let linkDefault = document.querySelector('link[rel="alternate"][hreflang="x-default"]');
  if (!linkDefault) {
    linkDefault = document.createElement('link');
    linkDefault.setAttribute('rel', 'alternate');
    linkDefault.setAttribute('hreflang', 'x-default');
    document.head.appendChild(linkDefault);
  }
  linkDefault.setAttribute('href', enUrl);
};

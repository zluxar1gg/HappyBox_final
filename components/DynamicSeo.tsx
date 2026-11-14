import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Language, translations } from '../utils/translations';
import { getBlogPostBySlug } from '../utils/blogData';

interface DynamicSeoProps {
  language: Language;
  currentPage: string;
  slug?: string;
}

export const DynamicSeo: React.FC<DynamicSeoProps> = ({ language, currentPage, slug }) => {
  const baseUrl = 'https://happyboxlogistics.com';
  const defaultImage = 'https://i.ibb.co/C55Gbh27/happyboxdelivery.webp';

  const getSeoData = () => {
    // Default Home
    let title = language === 'en' 
      ? 'China Freight Forwarder & Purchasing Agent: Global DDP' 
      : 'Логистика, карго и выкуп товаров из Китая по всему миру';
    let description = language === 'en'
      ? 'Freight forwarder from China to the USA, EU, UAE & worldwide. Purchasing from 1688, Taobao, Poizon, QC inspection, free consolidation & DDP shipping.'
      : 'Надежное карго и DDP-доставка из Китая в Россию, СНГ, Европу, США и ОАЭ. Выкуп с 1688, Taobao, Poizon, проверка на брак, консолидация, страховка 100%, оплата в рублях.';
    let ogImage = defaultImage;

    const seoMap: Record<string, { title: { en: string; ru: string }, desc: { en: string; ru: string } }> = {
      usa: {
        title: { en: 'China to USA Shipping: Air & Ocean Freight DDP from 0.1 kg | HappyBox', ru: 'Доставка из Китая в США под ключ: DDP, Авиа и Море от 0.1 кг | HappyBox' },
        desc: { en: 'Reliable door-to-door DDP shipping from China to the USA. Express air freight (5-9 days), economical ocean cargo, full CBP customs clearance, and free consolidation.', ru: 'Надежная доставка грузов и посылок из Китая в США на условиях DDP. Авиа от 5 дней, море от $1.2/кг, оформление ISF и растаможка CBP под ключ. Склад в Шэньчжэне.' }
      },
      eu: {
        title: { en: 'China to Europe Shipping: DDP Air, Rail & Ocean Freight from 0.1 kg | HappyBox', ru: 'Доставка из Китая в Европу под ключ: DDP, Авиа, Ж/Д и Море от 0.1 кг | HappyBox' },
        desc: { en: 'Fast and reliable DDP shipping from China to all 27 EU countries. Air, rail, and sea freight with import VAT and duties included. Free Shenzhen consolidation.', ru: 'Надежная доставка грузов и посылок из Китая в страны ЕС (Германия, Франция, Польша и др.). Все пошлины и НДС (VAT) включены в DDP тариф. Склад в Шэньчжэне.' }
      },
      uae: {
        title: { en: 'China to UAE Shipping: Door-to-Door DDP Air & Ocean Freight from 0.1 kg | HappyBox', ru: 'Доставка из Китая в ОАЭ (Дубай) под ключ: DDP Авиа и Море от 0.1 кг | HappyBox' },
        desc: { en: 'Reliable DDP freight forwarding from China to Dubai and all UAE Emirates. Express air (5-9 days), ocean via Jebel Ali, customs clearance, and delivery to your door.', ru: 'Быстрая доставка грузов и посылок из Китая в ОАЭ (Дубай, Абу-Даби, Шарджа) на условиях DDP. Авиа от 5 дней, море через порт Джебель-Али, пошлина и VAT 5% включены.' }
      },
      russia: {
        title: { en: 'China to Russia Cargo & Shipping: From 0.1 kg with Insurance | HappyBox', ru: 'Карго из Китая в Россию: доставка от 0.1 кг со страховкой | HappyBox' },
        desc: { en: 'Standard cargo from China to Russia from $2.5/kg (15–25 days, insurance included) and white TIR auto from $1.6/kg. From 0.1 kg, supplier payments, and Chestny Znak labeling.', ru: 'Карго-доставка из Китая в Россию от $2.5/кг (15–25 дней, страховка включена) и белое авто TIR от $1.6/кг. Отправка от 0.1 кг, оплата поставщикам и маркировка «Честный Знак».' }
      },
      canada: {
        title: { en: 'China to Canada Shipping: Door-to-Door DDP Air & Ocean Freight from 0.1 kg | HappyBox', ru: 'Доставка из Китая в Канаду под ключ: DDP Авиа и Море через Ванкувер от 0.1 кг | HappyBox' },
        desc: { en: 'Reliable door-to-door DDP shipping from China to Canada (Toronto, Vancouver, Montreal). Express air (6-10 days), ocean via Port of Vancouver ($1.5/kg), CBSA clearance, GST/HST included.', ru: 'Доставка грузов и посылок из Китая в Канаду (Торонто, Ванкувер, Монреаль) на условиях DDP. Авиа от 6 дней, море от $1.5/кг. Растаможка CBSA, налоги GST/HST включены, без номера BN.' }
      },
      amazon: {
        title: { en: 'Shipping from China to Amazon FBA USA: DDP Air & Sea', ru: 'Доставка из Китая на Amazon FBA США: тарифы DDP от 0.1 кг' },
        desc: { en: 'Send inventory from Chinese factories to US Amazon warehouses from 0.1 kg. Air from $10/kg (5–9 days), sea from $1.2/kg, Matson 12–15 days, FNSKU prep & ISF.', ru: 'Отправка грузов с фабрик Китая на склады Амазон в США: авиа от $10/кг за 5–9 дней, море от $1.2/кг, Matson 12–15 дней. Преп в Шэньчжэне, FNSKU и ISF 10+2.' }
      },
      'amazon-canada': {
        title: { en: 'Shipping from China to Amazon FBA Canada: DDP Air & Sea', ru: 'Доставка из Китая на Amazon FBA Канада: тарифы DDP' },
        desc: { en: 'Ship inventory from China to Amazon.ca hubs (YVR1, YYZ4, YUL2) under DDP. Air from $11/kg (6–10d), Sea+Rail from $1.5/kg, CBSA, GST/HST & EN/FR prep.', ru: 'Отправка грузов из Китая на склады Amazon.ca (YVR1, YYZ4, YUL2): авиа от $11/кг (6–10 дн.), море+ЖД от $1.5/кг. CBSA, GST/HST, NRI и этикетки EN/FR.' }
      },
      '1688': {
        title: { en: '1688 Sourcing Agent: Buy at China Domestic Wholesale Prices | HappyBox', ru: 'Посредник на 1688: закупки в Китае по ценам внутреннего рынка | HappyBox' },
        desc: { en: 'Wholesale sourcing agent for 1688.com. We handle factory communication, price negotiations, secure payments, batch QC inspection, and global freight.', ru: 'Надежный посредник для закупок на 1688.com по ценам фабрик. Переговоры с поставщиками, выкуп без комиссии, проверка качества, консолидация, оплата картой РФ и доставка под ключ.' }
      },
      alibaba: {
        title: { en: 'Alibaba Sourcing Agent & Shipping: EXW & DDP (0% Fee) | HappyBox', ru: 'Посредник Alibaba: выкуп фабричных партий и доставка DDP (0%) | HappyBox' },
        desc: { en: 'Direct Alibaba sourcing agent and DDP freight forwarder with 0% commission. Save 30-50% on shipping with EXW rates, factory audits, and Shenzhen warehouse QC.', ru: 'Посредник и экспедитор для работы с Alibaba с комиссией 0%. Экономия 30-50% на доставке по тарифам EXW, проверка поставщиков, контроль качества и DDP доставка.' }
      },
      taobao: {
        title: { en: 'Taobao Agent: Buy & Ship Worldwide from China (0% Fee) | HappyBox', ru: 'Посредник Таобао: выкуп и доставка товаров из Китая (0% комиссии) | HappyBox' },
        desc: { en: 'Trusted Taobao purchasing agent with 0% service fee. We handle product search, supplier verification, quality check, consolidation, and worldwide shipping.', ru: 'Надежный посредник Taobao с комиссией 0%. Выкуп товаров в Китае, проверка на брак, бесплатная консолидация на складе и международная доставка до вашей двери.' }
      },
      poizon: {
        title: { en: 'Poizon (Dewu) Agent China: 0% Fee Sourcing & Shipping | HappyBox', ru: 'Посредник Poizon (Dewu): выкуп и доставка оригиналов без комиссии | HappyBox' },
        desc: { en: 'Buy authentic sneakers and streetwear from Poizon (Dewu) with 0% agent fee. Physical authenticity verification, double-box protection, and worldwide shipping.', ru: 'Выкуп оригиналов с Poizon (Пойзон / Dewu) с комиссией 0%. Бесплатный Legit Check по фото, проверка на брак, удобная оплата картой РФ в рублях и бережная доставка.' }
      },
      tmall: {
        title: { en: 'Tmall Agent: Buy Official Brands & Flagship Stores (0% Fee) | HappyBox', ru: 'Посредник Tmall: выкуп оригиналов из официальных магазинов (0%) | HappyBox' },
        desc: { en: 'Buy authentic products from official Tmall flagship stores with 0% agent fee. Verified brands, original packaging inspection, and global door-to-door delivery.', ru: 'Выкуп товаров во флагманских магазинах Tmall.com без комиссии агента (0%). Гарантия подлинности брендов, проверка заводской упаковки и быстрая доставка из Китая.' }
      },
      pinduoduo: {
        title: { en: 'Pinduoduo Agent: Group-Buy Factory Prices (0% Fee) | HappyBox', ru: 'Посредник Pinduoduo: выкуп по групповым ценам без комиссии (0%) | HappyBox' },
        desc: { en: 'Buy from Pinduoduo (PDD) with 0% agent fee. We secure team-buy discounts, navigate flash deals, conduct warehouse QC, and ship worldwide.', ru: 'Выкуп товаров на Pinduoduo (PDD) с комиссией 0%. Фиксируем цены совместных покупок, ловим горящие скидки, проверяем качество на складе и доставляем в ваш город.' }
      },
      xianyu: {
        title: { 
          en: 'Goofish & Xianyu Agent: Second-Hand & Vintage from China (0% Fee) | HappyBox', 
          ru: 'Посредник Xianyu (Goofish): выкуп б/у техники и винтажа из Китая (0%) | HappyBox' 
        },
        desc: { 
          en: 'Goofish (Xianyu / Idle Fish) purchasing agent with 0% fee. We verify Sesame Credit, bargain in Chinese, provide live video checks, and ship worldwide with DDP.', 
          ru: 'Посредник Xianyu (Goofish / Idle Fish) с комиссией 0%. Проверяем рейтинг Sesame Credit, торгуемся на китайском, делаем видеопроверку перед выкупом и доставляем DDP.' 
        }
      },
      weidian: {
        title: { en: 'Weidian Agent: Buy Streetwear & Indie Brands (0% Fee) | HappyBox', ru: 'Посредник Weidian: выкуп стритвира и инди-брендов (0%) | HappyBox' },
        desc: { en: 'Buy exclusive streetwear and designer drops from Weidian with 0% agent fee. WeChat Pay purchasing, detailed macro photo QC, and worldwide shipping.', ru: 'Выкуп эксклюзивного стритвира и редких коллекций на Weidian без комиссии (0%). Оплата через WeChat Pay, детальный фотоконтроль замеров и бережная доставка.' }
      },
      inspection: {
        title: { en: 'Quality Control & Inspection in China | HappyBox', ru: 'Проверка качества и Инспекция в Китае | HappyBox' },
        desc: { en: 'Professional on-site factory audits and pre-shipment inspections across all China provinces. Detailed defect reports within 24h before international shipping.', ru: 'Выездные аудиты фабрик и предотгрузочная проверка товара на брак во всех провинциях Китая. Фотоотчеты за 24 часа и возврат поставщику до отправки.' }
      },
      warehousing: {
        title: { en: 'Free China Warehousing & Consolidation | HappyBox', ru: 'Бесплатный склад в Китае и консолидация | HappyBox' },
        desc: { en: 'Store and consolidate unlimited parcels free in our Guangzhou & Shenzhen hubs. Combine Taobao, 1688 & Pinduoduo orders into one shipment and cut freight costs.', ru: 'Бесплатное хранение и объединение посылок на складах в Гуанчжоу и Шэньчжэне. Консолидация заказов с Taobao, 1688 и Pinduoduo для экономии на доставке.' }
      },
      destinations: {
        title: { en: 'Worldwide Shipping Routes from China: Air, Sea & Land', ru: 'Международная доставка из Китая: страны, тарифы и сроки' },
        desc: { en: 'Explore international air, sea LCL, rail and road freight from China to the USA, Europe, Canada, UAE, Australia, Asia & Amazon FBA. Rates and transit times by country.', ru: 'Все маршруты карго, авиа, морской и автодоставки из Китая: США, Европа, Россия, ОАЭ, Канада, Азия и склады Amazon FBA. Актуальные ставки и условия по странам.' }
      },
      thailand: {
        title: { en: 'Shipping from China to Thailand: DDP Air & Land Cargo', ru: 'Доставка из Китая в Таиланд: авиа и авто карго DDP' },
        desc: { en: 'Door-to-door DDP delivery from China to Bangkok, Phuket, Pattaya & Chiang Mai. Air from $11/kg (3–5d), auto freight from $4/kg (7–12d), free consolidation.', ru: 'Доставка посылок и грузов в Бангкок, Пхукет, Паттайю и Чиангмай. Авиа от $11/кг (3–5 дн.), авто от $4/кг (7–12 дн.). Таможня DDP без лицензий и налога.' }
      },
      indonesia: {
        title: { en: 'Shipping from China to Indonesia & Bali: DDP Air & Sea', ru: 'Доставка из Китая в Индонезию и на Бали: авиа и море DDP' },
        desc: { en: 'Door-to-door DDP delivery from China to Bali, Jakarta & Surabaya. Air from $10/kg (4–7d), sea LCL from $1.1/kg (22–32d). No API license, NPWP or SNI needed.', ru: 'Доставка грузов и посылок на Бали, в Джакарту и Сурабаю. Авиа от $10/кг (4–7 дн.), море LCL от $1.1/кг (22–32 дн.). Таможня DDP без лицензий API и ИНН NPWP.' }
      },
      australia: {
        title: { en: 'Shipping from China to Australia: DDP Air & Sea Freight', ru: 'Доставка из Китая в Австралию: авиа и море DDP под ключ' },
        desc: { en: 'Door-to-door DDP delivery from China to Sydney, Melbourne, Brisbane & Perth. Air from $9/kg (5–9d), sea from $1.3/kg (20–30d). 10% GST included, no ABN.', ru: 'Доставка грузов и посылок в Сидней, Мельбурн, Брисбен и Перт. Авиа от $9/кг (5–9 дн.), море от $1.3/кг (20–30 дн.). Таможня, карантин DAFF и 10% GST включены.' }
      },
      argentina: {
        title: { en: 'Shipping from China to Argentina: DDP Air & Ocean Cargo', ru: 'Доставка из Китая в Аргентину: авиа и море DDP под ключ' },
        desc: { en: 'Door-to-door DDP freight from China to Buenos Aires, Córdoba & Rosario. Air from $14/kg (7–12d), sea from $1.8/kg (40–50d). Duties, IVA & CUIT limits handled.', ru: 'Доставка посылок и грузов в Буэнос-Айрес, Кордову и Росарио. Авиа от $14/кг (7–12 дн.), море от $1.8/кг (40–50 дн.). Таможня Aduana, IVA и лимиты CUIT под ключ.' }
      },
      'south-africa': {
        title: { en: 'Shipping from China to South Africa: DDP Air & Sea', ru: 'Доставка из Китая в ЮАР: авиа и море DDP под ключ' },
        desc: { en: 'Door-to-door DDP delivery from China to Johannesburg, Cape Town & Durban. Air from $12/kg (5–8d), sea LCL from $1.3/kg (35–45d). SARS duties & VAT included.', ru: 'Доставка грузов и посылок в Йоханнесбург, Кейптаун и Дурбан. Авиа от $12/кг (5–8 дн.), море LCL от $1.3/кг (35–45 дн.). Пошлины SARS и 15% VAT включены.' }
      },
      georgia: {
        title: { en: 'Shipping from China to Georgia: DDP Air & Auto Cargo', ru: 'Доставка из Китая в Грузию: авиа и авто карго DDP' },
        desc: { en: 'Door-to-door DDP delivery from China to Tbilisi, Batumi & Kutaisi. Air from $15/kg (5–8d), Middle Corridor auto from $1.2/kg (15–22d), no customs hassle.', ru: 'Доставка грузов и посылок в Тбилиси, Батуми и Кутаиси. Авиа от $15/кг (5–8 дн.), авто через Средний коридор от $1.2/кг (15–22 дн.). Растаможка DDP.' }
      },
      israel: {
        title: { en: 'Shipping from China to Israel: Air & Ocean Freight', ru: 'Доставка из Китая в Израиль: авиа и морские перевозки' },
        desc: { en: 'Air and sea cargo delivery from China to Tel Aviv, Jerusalem, Haifa & Ashdod. Air from $15/kg (6–9d), LCL ocean freight from $1.2/kg (35–45d). Consolidation & QC in Shenzhen.', ru: 'Доставка грузов и посылок из Китая в Тель-Авив, Иерусалим, Хайфу и Ашдод. Авиа от $15/кг (6–9 дн.), море LCL от $1.2/кг (35–45 дн.). Консолидация и проверка в Шэньчжэне.' }
      }
    };

    if (currentPage === '404') {
      title = language === 'en' ? '404 - Page Not Found' : '404 - Страница не найдена';
      description = language === 'en' ? 'The page you are looking for does not exist or has been moved.' : 'Запрашиваемая страница не найдена или была перемещена.';
    } else if (currentPage === 'blog') {
      title = language === 'en' ? 'China Shipping & Sourcing Blog: Guides & Tips' : 'Блог о доставке и закупках из Китая: гайды и советы';
      description = language === 'en'
        ? 'Expert guides, news, and tips for shipping from China. Learn how to buy on 1688, Taobao, and optimize your Amazon FBA supply chain.'
        : 'Экспертные статьи, кейсы и советы по доставке из Китая. Как покупать на 1688 и Taobao, проходить таможню и оптимизировать логистику.';
    } else if (currentPage === 'blogPost' && slug) {
      const post = getBlogPostBySlug(slug, language);
      if (post) {
        title = post.seoTitle || post.title;
        description = post.seoDescription || post.excerpt;
        if (post.imageUrl) {
          ogImage = post.imageUrl.startsWith('http') ? post.imageUrl : `${baseUrl}${post.imageUrl}`;
        }
      }
    } else if (seoMap[currentPage]) {
      title = seoMap[currentPage].title[language];
      description = seoMap[currentPage].desc[language];
    }

    return { title, description, ogImage };
  };

  const { title, description, ogImage } = getSeoData();

  if (currentPage === '404') {
    return (
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="robots" content="noindex, follow" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <html lang={language === 'ru' ? 'ru' : 'en'} />
      </Helmet>
    );
  }

  let enPath = '/';
  let ruPath = '/ru';

  if (currentPage === 'blogPost' && slug) {
    enPath = `/blog/${slug}`;
    ruPath = `/ru/blog/${slug}`;
  } else if (currentPage === 'blog') {
    enPath = '/blog';
    ruPath = '/ru/blog';
  } else if (currentPage !== 'home') {
    enPath = `/${currentPage}`;
    ruPath = `/ru/${currentPage}`;
  }

  const enUrl = enPath === '/' ? `${baseUrl}/` : `${baseUrl}${enPath}`;
  const ruUrl = `${baseUrl}${ruPath}`;
  const canonicalUrl = language === 'ru' ? ruUrl : enUrl;

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'HappyBox Logistics',
    alternateName: 'HappyBox',
    url: baseUrl,
    logo: 'https://i.ibb.co/C55Gbh27/happyboxdelivery.webp',
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+86 130 4887 5834',
        contactType: 'customer support',
        availableLanguage: ['Russian', 'English', 'Chinese']
      }
    ],
    sameAs: [
      'https://t.me/d_china_hbl',
      'https://wa.me/8613048875834'
    ]
  };

  const faqItems = translations[language].faq.items;
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer
      }
    }))
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={currentPage === 'blogPost' ? 'article' : 'website'} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <link rel="canonical" href={canonicalUrl} />
      <link rel="alternate" hrefLang="en" href={enUrl} />
      <link rel="alternate" hrefLang="ru" href={ruUrl} />
      <link rel="alternate" hrefLang="x-default" href={enUrl} />
      <html lang={language === 'ru' ? 'ru' : 'en'} />

      {/* Organization Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>

      {/* FAQPage Structured Data (Homepage) */}
      {currentPage === 'home' && (
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      )}
    </Helmet>
  );
};

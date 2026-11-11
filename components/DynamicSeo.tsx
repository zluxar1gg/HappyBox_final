import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Language, translations } from '../utils/translations';
import { blogPosts } from '../utils/blogData';

interface DynamicSeoProps {
  language: Language;
  currentPage: string;
  slug?: string;
}

export const DynamicSeo: React.FC<DynamicSeoProps> = ({ language, currentPage, slug }) => {
  const getSeoData = () => {
    const baseTitle = 'HappyBox';
    
    // Default Home
    let title = language === 'en' 
      ? 'HappyBox | Fast China Freight Forwarder' 
      : 'HappyBox | Доставка из Китая и Выкуп Товаров';
    let description = language === 'en'
      ? 'Fast & Reliable Shipping from China to USA, Europe, UAE, Russia, and Worldwide. We handle purchasing, warehousing, and logistics.'
      : 'Быстрая и надежная логистика из Китая в РФ, Европу, США и ОАЭ. Карго, выкуп товаров с фабрик, проверка качества и услуги склада.';

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
        title: { en: `Shipping from China to Russia | ${baseTitle}`, ru: `Карго и Белая Доставка из Китая в Россию | ${baseTitle}` },
        desc: { en: 'Logistics to Russia via express rail and truck. Fast customs clearance.', ru: 'Авто, ЖД и авиадоставка из Китая в Москву и регионы РФ. Оплата поставщикам в USDT.' }
      },
      canada: {
        title: { en: 'China to Canada Shipping: Door-to-Door DDP Air & Ocean Freight from 0.1 kg | HappyBox', ru: 'Доставка из Китая в Канаду под ключ: DDP Авиа и Море через Ванкувер от 0.1 кг | HappyBox' },
        desc: { en: 'Reliable door-to-door DDP shipping from China to Canada (Toronto, Vancouver, Montreal). Express air (6-10 days), ocean via Port of Vancouver ($1.5/kg), CBSA clearance, GST/HST included.', ru: 'Доставка грузов и посылок из Китая в Канаду (Торонто, Ванкувер, Монреаль) на условиях DDP. Авиа от 6 дней, море от $1.5/кг. Растаможка CBSA, налоги GST/HST включены, без номера BN.' }
      },
      amazon: {
        title: { en: 'Amazon FBA Prep China: Shipping Services | HappyBox', ru: 'Доставка на Amazon FBA: преп-центр | HappyBox' },
        desc: { en: 'Ship directly from China to Amazon FBA. We offer full prep center services, labeling, inspection, and affordable DDP shipping.', ru: 'Доставка товаров из Китая на склады Amazon FBA. Услуги преп-центра, маркировка, инспекция и отправка под ключ (DDP).' }
      },
      'amazon-canada': {
        title: { en: `Amazon FBA Canada Prep & Shipping | ${baseTitle}`, ru: `Доставка на склады Amazon FBA Канада | ${baseTitle}` },
        desc: { en: 'Expert FBA Canada prep & DDP shipping. We handle CBSA, GST/HST, and Canadian labeling requirements — factory to Amazon warehouse', ru: 'Доставка на Amazon FBA Канада под ключ: DDP, оформление CBSA и GST/HST, подготовка товара по канадским требованиям' }
      },
      '1688': {
        title: { en: '1688 Sourcing Agent: Buy at China Domestic Wholesale Prices | HappyBox', ru: 'Посредник на 1688: закупки в Китае по ценам внутреннего рынка | HappyBox' },
        desc: { en: 'Wholesale sourcing agent for 1688.com. We handle factory communication, price negotiations, secure payments, batch QC inspection, and global freight.', ru: 'Надежный посредник для закупок на 1688.com по реальным ценам фабрик. Переговоры с китайскими поставщиками, выкуп без комиссии, контроль качества и доставка под ключ.' }
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
        desc: { en: 'Buy authentic sneakers and streetwear from Poizon (Dewu) with 0% agent fee. Physical authenticity verification, double-box protection, and worldwide shipping.', ru: 'Выкуп и доставка оригинальных кроссовок и брендовой одежды с Poizon (Dewu). Комиссия 0%, проверка на оригинальность, бесплатный фотоконтроль и бережная доставка.' }
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
          en: `Goofish & Xianyu Agent: Second-Hand & Vintage from China (0% Fee) | ${baseTitle}`, 
          ru: `Посредник Xianyu (Goofish): выкуп б/у техники и винтажа из Китая (0%) | ${baseTitle}` 
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
        title: { en: `Quality Control & Inspection in China | ${baseTitle}`, ru: `Проверка качества и Инспекция в Китае | ${baseTitle}` },
        desc: { en: 'Protect your margins. We inspect goods in China before international shipment.', ru: 'Проверка товара на брак, фотоотчеты и коммуникация с фабрикой при возвратах до отправки через границу.' }
      },
      warehousing: {
        title: { en: 'Free China Warehousing & Consolidation | HappyBox', ru: 'Бесплатный склад в Китае и консолидация | HappyBox' },
        desc: { en: 'Store and consolidate unlimited parcels free in our Guangzhou & Shenzhen hubs. Combine Taobao, 1688 & Pinduoduo orders into one shipment and cut freight costs.', ru: 'Бесплатное хранение и объединение посылок на складах в Гуанчжоу и Шэньчжэне. Консолидация заказов с Taobao, 1688 и Pinduoduo для экономии на доставке.' }
      },
      destinations: {
        title: { en: `Global Shipping Destinations | ${baseTitle}`, ru: `Все направления доставки | ${baseTitle}` },
        desc: { en: 'Discover all the countries and regions we seamlessly ship to from China.', ru: 'Полный список стран и маршрутов, куда HappyBox доставляет посылки и коммерческие грузы из Китая.' }
      },
      thailand: {
        title: { en: `Shipping from China to Thailand | ${baseTitle}`, ru: `Доставка из Китая в Тайланд | ${baseTitle}` },
        desc: { en: 'Logistics and freight forwarding to Thailand.', ru: 'Надежная доставка в Тайланд из Китая (Пхукет, Бангкок).' }
      },
      indonesia: {
        title: { en: `Shipping from China to Indonesia (Bali) | ${baseTitle}`, ru: `Доставка из Китая в Индонезию (Бали) | ${baseTitle}` },
        desc: { en: 'Logistics and freight forwarding to Indonesia and Bali.', ru: 'Доставка посылок и коммерческих грузов из Китая в Индонезию (Бали, Джакарта).' }
      },
      argentina: {
        title: { en: `Shipping from China to Argentina | ${baseTitle}`, ru: `Доставка из Китая в Аргентину | ${baseTitle}` },
        desc: { en: 'Logistics and freight forwarding to Argentina.', ru: 'Доставка из Китая в Аргентину.' }
      },
      'south-africa': {
        title: { en: `Shipping from China to South Africa | ${baseTitle}`, ru: `Доставка из Китая в ЮАР | ${baseTitle}` },
        desc: { en: 'Logistics and freight forwarding to South Africa.', ru: 'Логистика коммерческих грузов и посылок в ЮАР.' }
      },
      georgia: {
        title: { en: `Shipping from China to Georgia | ${baseTitle}`, ru: `Доставка из Китая в Грузию | ${baseTitle}` },
        desc: { en: 'Logistics and freight forwarding to Georgia.', ru: 'Быстрая экспресс доставка грузов из Китая в Грузию.' }
      },
      israel: {
        title: { en: `Shipping from China to Israel | ${baseTitle}`, ru: `Доставка из Китая в Израиль | ${baseTitle}` },
        desc: { en: 'Logistics and freight forwarding to Israel.', ru: 'Доставка в Израиль из Китая от двери до двери.' }
      }
    };

    if (currentPage === '404') {
      title = language === 'en' ? `404 - Page Not Found | ${baseTitle}` : `404 - Страница не найдена | ${baseTitle}`;
      description = language === 'en' ? 'The page you are looking for does not exist or has been moved.' : 'Запрашиваемая страница не найдена или была перемещена.';
    } else if (currentPage === 'blog') {
      title = language === 'en' ? `Logistics Blog & Insights | ${baseTitle}` : `Блог и база знаний по логистике | ${baseTitle}`;
      description = language === 'en' ? 'Expert guides, news, and tips for shipping from China and e-commerce.' : 'Экспертные статьи, бизнес-гайды и советы по доставке из Китая.';
    } else if (currentPage === 'blogPost' && slug) {
      const post = blogPosts.find(p => p.slug === slug);
      if (post) {
        title = `${post.title} | ${baseTitle}`;
        description = post.excerpt;
      }
    } else if (seoMap[currentPage]) {
      title = seoMap[currentPage].title[language];
      description = seoMap[currentPage].desc[language];
    }

    return { title, description };
  };

  const { title, description } = getSeoData();

  if (currentPage === '404') {
    return (
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="robots" content="noindex, follow" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <html lang={language === 'ru' ? 'ru' : 'en'} />
      </Helmet>
    );
  }

  const baseUrl = 'https://happyboxlogistics.com';
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
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={currentPage === 'blogPost' ? 'article' : 'website'} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="twitter:url" content={canonicalUrl} />
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

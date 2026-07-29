import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Language } from '../utils/translations';
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
        title: { en: `China to USA Shipping: Air & Sea Freight DDP | ${baseTitle}`, ru: `Доставка из Китая в США: DDP, Авиа и Склад в Китае | ${baseTitle}` },
        desc: { en: 'Reliable shipping from China to the USA. Warehousing in China, DDP door-to-door delivery, fast air freight, and cost-effective sea freight. Get a quote today', ru: 'Быстрая доставка из Китая в США: авиа, море и DDP растаможка. Склад и преп-центр в Китае для Amazon FBA — подготовим и отправим заказ под ключ' }
      },
      eu: {
        title: { en: 'China to Europe Shipping: Door-to-Door DDP | HappyBox', ru: 'Доставка в Европу из Китая: DDP до двери | HappyBox' },
        desc: { en: 'Fast sea & air freight from China to all EU countries. Duties paid (DDP), customs cleared, delivered to your door. Get a quote in minutes.', ru: 'Быстрая авиа и морская доставка из Китая во все страны ЕС. Включая таможенную очистку и оплату пошлин (DDP). Расчет стоимости за минуты.' }
      },
      uae: {
        title: { en: 'China to UAE Shipping: Sea & Air Freight | HappyBox', ru: 'Доставка грузов из Китая в ОАЭ (Дубай) | HappyBox' },
        desc: { en: 'Affordable sea and air freight from China to Dubai and UAE. DDP delivery options, customs cleared, and fast transit times.', ru: 'Надежная доставка из Китая в Эмираты. Морской фрахт и авиаперевозки в Дубай, таможенное оформление и доставка до двери.' }
      },
      russia: {
        title: { en: `Shipping from China to Russia | ${baseTitle}`, ru: `Карго и Белая Доставка из Китая в Россию | ${baseTitle}` },
        desc: { en: 'Logistics to Russia via express rail and truck. Fast customs clearance.', ru: 'Авто, ЖД и авиадоставка из Китая в Москву и регионы РФ. Оплата поставщикам в USDT.' }
      },
      canada: {
        title: { en: `China to Canada Shipping: Air & Sea Freight DDP | ${baseTitle}`, ru: `Доставка из Китая в Канаду: Авиа и Море под ключ | ${baseTitle}` },
        desc: { en: 'Fast, reliable shipping from China to Canada. Air freight, sea cargo, and DDP delivery — customs and duties handled for you. Get a quote today', ru: 'Надежная доставка грузов из Китая в Канаду: авиа, морской фрахт и DDP растаможка. Учитываем требования CBSA и GST/HST. Расчет за минуту' }
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
        title: { en: '1688 Agent China: Buy Wholesale Direct | HappyBox', ru: 'Посредник 1688: оптовый выкуп из Китая | HappyBox' },
        desc: { en: 'Source products directly from factories with our 1688 agent service. We handle negotiation, payment, inspection, and shipping.', ru: 'Ваш посредник для работы с 1688. Связываемся с фабриками, выкупаем товар, проверяем качество и доставляем оптовые заказы.' }
      },
      taobao: {
        title: { en: 'Taobao Agent: Shop & Ship from China | HappyBox', ru: 'Посредник Таобао: выкуп и доставка | HappyBox' },
        desc: { en: 'Buy directly from Taobao. We handle purchasing, quality inspection, consolidation, and worldwide shipping.', ru: 'Покупки на Таобао без проблем. Выкупаем товары, проверяем на складе в Китае, объединяем посылки и доставляем до вашей двери.' }
      },
      poizon: {
        title: { en: 'Poizon Agent China: Buy Sneakers & Apparel | HappyBox', ru: 'Посредник Poizon: доставка кроссовок | HappyBox' },
        desc: { en: 'Buy authentic sneakers and streetwear from Poizon (Dewu) with our agent service. Quality inspection and international shipping.', ru: 'Надежный посредник Poizon (Dewu). Выкуп оригинальных кроссовок и одежды из Китая, проверка качества и быстрая доставка.' }
      },
      tmall: {
        title: { en: `Tmall Purchasing Agent | ${baseTitle}`, ru: `Выкуп и доставка с Tmall | ${baseTitle}` },
        desc: { en: 'Source official brand products on Tmall and ship them with HappyBox.', ru: 'Покупка оригинальных брендов на Tmall с проверкой и доставкой от двери до двери.' }
      },
      pinduoduo: {
        title: { en: 'Pinduoduo Agent: Buy & Ship from China | HappyBox', ru: 'Посредник Pinduoduo: Выкуп и Доставка | HappyBox' },
        desc: { en: 'Reliable Pinduoduo agent services. We purchase, inspect, and ship your PDD orders worldwide. Affordable shipping rates and direct factory access.', ru: 'Ваш проверенный посредник Pinduoduo. Выкупаем товары с PDD, предоставляем склад в Китае, проверяем качество и доставляем заказы.' }
      },
      xianyu: {
        title: { en: `Xianyu Second-hand Sourcing | ${baseTitle}`, ru: `Покупки на Xianyu (Б/У товары) | ${baseTitle}` },
        desc: { en: 'We help you safely buy items on Alibaba\'s used market (Xianyu).', ru: 'Поможем связаться с продавцом и безопасно купить Б/У товары на китайской площадке Xianyu.' }
      },
      weidian: {
        title: { en: 'Trusted Weidian Agent: Buy Streetwear | HappyBox', ru: 'Посредник Weidian: стритвир без WeChat | HappyBox' },
        desc: { en: 'Your Trusted Weidian purchasing agent. We buy, photo-verify, and ship exclusive streetwear orders globally. No Chinese account needed.', ru: 'Ваш надежный посредник Weidian. Выкупаем эксклюзивный стритвир, делаем фотоотчет и доставляем заказы из Китая. Оплата в рублях.' }
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

    if (currentPage === 'blog') {
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

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={currentPage === 'blogPost' ? 'article' : 'website'} />
      <html lang={language === 'ru' ? 'ru' : 'en'} />
    </Helmet>
  );
};

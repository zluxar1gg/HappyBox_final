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
      ? 'HappyBox Logistics | Fast China Freight Forwarder' 
      : 'HappyBox | Доставка из Китая и Выкуп Товаров';
    let description = language === 'en'
      ? 'Fast & Reliable Shipping from China to USA, Europe, UAE, Russia, and Worldwide. We handle purchasing, warehousing, and logistics.'
      : 'Быстрая и надежная логистика из Китая в РФ, Европу, США и ОАЭ. Карго, выкуп товаров с фабрик, проверка качества и услуги склада.';

    const seoMap: Record<string, { title: { en: string; ru: string }, desc: { en: string; ru: string } }> = {
      usa: {
        title: { en: `Shipping from China to USA | ${baseTitle}`, ru: `Доставка из Китая в США | ${baseTitle}` },
        desc: { en: 'Expert DDP shipping to the USA via Air and Sea. Low tariffs, fast transit, Amazon FBA support.', ru: 'Авиа и морская доставка из Китая в США. Экспресс-логистика и DDP решения для вашего бизнеса.' }
      },
      eu: {
        title: { en: `Shipping from China to Europe | ${baseTitle}`, ru: `Доставка из Китая в Европу | ${baseTitle}` },
        desc: { en: 'Reliable logistics from China to EU countries. Door-to-door, secure customs clearance included.', ru: 'Надежная экспресс и авто доставка грузов из Китая в страны ЕС. Услуги таможенной очистки.' }
      },
      uae: {
        title: { en: `Shipping from China to UAE (Dubai) | ${baseTitle}`, ru: `Доставка из Китая в ОАЭ и Дубай | ${baseTitle}` },
        desc: { en: 'Door-to-door delivery from China to Dubai and UAE. Reliable air and sea freight forwarder.', ru: 'Прямая доставка из Китая в Дубай, Абу-Даби и другие эмираты ОАЭ от двери до двери.' }
      },
      russia: {
        title: { en: `Shipping from China to Russia | ${baseTitle}`, ru: `Карго и Белая Доставка из Китая в Россию | ${baseTitle}` },
        desc: { en: 'Logistics to Russia via express rail and truck. Fast customs clearance.', ru: 'Авто, ЖД и авиадоставка из Китая в Москву и регионы РФ. Оплата поставщикам в USDT.' }
      },
      canada: {
        title: { en: `Shipping from China to Canada | ${baseTitle}`, ru: `Доставка из Китая в Канаду | ${baseTitle}` },
        desc: { en: 'Air and sea freight from China to Canada for businesses and FBA sellers.', ru: 'Удобная логистика из Китая в страны Северной Америки и Канаду для личных целей и селлеров.' }
      },
      amazon: {
        title: { en: `Amazon FBA Prep & Shipping | ${baseTitle}`, ru: `Доставка на склады Amazon FBA | ${baseTitle}` },
        desc: { en: 'End-to-end Amazon FBA prep services. Direct shipping from China to Amazon warehouses globally.', ru: 'Подготовка, стикеровка и отправка товаров из Китая на склады мирового Amazon FBA.' }
      },
      '1688': {
        title: { en: `1688 Sourcing & Purchasing | ${baseTitle}`, ru: `Выкуп товаров с 1688 | ${baseTitle}` },
        desc: { en: 'Buy directly from Chinese factories on 1688.com with our sourcing experts.', ru: 'Помощь в поиске и выкупе товаров от производителей на 1688.com. Поиск фабрик и оплата.' }
      },
      taobao: {
        title: { en: `Taobao Purchasing Agent | ${baseTitle}`, ru: `Посредник и Выкуп с Taobao | ${baseTitle}` },
        desc: { en: 'We buy your goods on Taobao, consolidate them, and ship them internationally.', ru: 'Официальный посредник Taobao. Выкупаем товары, проверяем на брак и отправляем в вашу страну.' }
      },
      poizon: {
        title: { en: `Poizon (Dewu) Shipping & Proxy | ${baseTitle}`, ru: `Доставка и выкуп с Poizon (Dewu) | ${baseTitle}` },
        desc: { en: 'Buy limited sneakers and fashion from Poizon with guaranteed international delivery.', ru: 'Выкупаем оригинальные кроссовки и одежду с Poizon (Dewu). Быстрая доставка по всему миру.' }
      },
      tmall: {
        title: { en: `Tmall Purchasing Agent | ${baseTitle}`, ru: `Выкуп и доставка с Tmall | ${baseTitle}` },
        desc: { en: 'Source official brand products on Tmall and ship them with HappyBox.', ru: 'Покупка оригинальных брендов на Tmall с проверкой и доставкой от двери до двери.' }
      },
      pinduoduo: {
        title: { en: `Pinduoduo Logistics | ${baseTitle}`, ru: `Выкуп с Pinduoduo (PDD) | ${baseTitle}` },
        desc: { en: 'Consolidate and ship your Pinduoduo purchases globally.', ru: 'Заказ товаров с Pinduoduo. Работа с дешевыми китайскими маркетплейсами под ключ.' }
      },
      xianyu: {
        title: { en: `Xianyu Second-hand Sourcing | ${baseTitle}`, ru: `Покупки на Xianyu (Б/У товары) | ${baseTitle}` },
        desc: { en: 'We help you safely buy items on Alibaba\'s used market (Xianyu).', ru: 'Поможем связаться с продавцом и безопасно купить Б/У товары на китайской площадке Xianyu.' }
      },
      weidian: {
        title: { en: `Weidian Agent Services | ${baseTitle}`, ru: `Покупки в магазинах Weidian | ${baseTitle}` },
        desc: { en: 'Access Chinese private sellers on Weidian with our purchasing agent service.', ru: 'Выкуп люксовых копий и стритвир-вещей с Weidian. Проверка по фотоотчету перед отправкой.' }
      },
      inspection: {
        title: { en: `Quality Control & Inspection in China | ${baseTitle}`, ru: `Проверка качества и Инспекция в Китае | ${baseTitle}` },
        desc: { en: 'Protect your margins. We inspect goods in China before international shipment.', ru: 'Проверка товара на брак, фотоотчеты и коммуникация с фабрикой при возвратах до отправки через границу.' }
      },
      warehousing: {
        title: { en: `China Warehousing & Consolidation | ${baseTitle}`, ru: `Склад и Консолидация в Китае (Гуанчжоу) | ${baseTitle}` },
        desc: { en: 'Free consolidation of your parcels in our Guangzhou and Shenzhen warehouses.', ru: 'Бесплатное хранение и объединение ваших посылок со всех маркетплейсов на нашем складе в Гуанчжоу.' }
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

  // Temporarily disable DynamicSeo as requested
  return null;

  /*
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
  */
};

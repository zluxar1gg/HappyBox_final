

export type Language = 'en' | 'ru';

export const translations = {
  en: {
    nav: {
      services: 'Service',
      reviews: 'Reviews',
      cost: 'Cost',
      tracking: 'Tracking',
      contacts: 'Contacts'
    },
    hero: {
      title: 'Fast & Reliable Shipping from China to Europe, USA, UAE & Worldwide.',
      minWeightBadge: 'No minimum weight requirements — shipping from 0.1 kg',
      features: {
        operating: 'Operating since 2016',
        warehouse: 'We store and consolidate your orders for free',
        buy: 'We can buy from any store you choose',
        packaging: 'Careful and secure packaging',
        payment: 'Flexible payment options – choose what\'s most convenient',
        support: '24/7 customer support',
        worldwide: 'Worldwide delivery',
        appreciate: 'We genuinely appreciate every customer'
      },
      stats: 'customers from around the world'
    },
    deliveryPath: {
      title: 'Your Parcel\'s Journey',
      steps: [
        { title: 'Order', desc: 'You shop or we buy' },
        { title: 'Warehouse', desc: 'Reception & Inspection' },
        { title: 'Processing', desc: 'Consolidation & Packing' },
        { title: 'Customs', desc: 'Clearance & Duties' },
        { title: 'Delivery', desc: 'Direct to your door' }
      ]
    },
    guides: {
      title: 'Expert Advice',
      subtitle: 'Master the art of shopping in China with our insider tips and pro advice',
      cards: [
        { 
          id: '1688', 
          title: '1688.com', 
          desc: 'Buy directly from factories at the source price.',
          steps: [
            'Rating 5–4 is the standard for reliability. Sellers with ratings below 4.0 are risky and often slow.',
            'Verify real weight/dimensions: listings often have inaccurate data. Ask before paying to avoid shipping surprises.',
            'Check electronics for 220V compatibility and specify your required plug type.',
            'Specify individual packaging for items like clothes, notebooks, plush toys, etc. otherwise they may arrive in a bulk "bag".',
            'For fragile items, request a "wood crate" for safer transit within China.'
          ],
          tip: 'Stock numbers on 1688 are often inaccurate. Always send us the link first so our agent can verify the REAL availability before you pay.',
          compare: { label: 'Electronics', local: '$150', china: '$45' }
        },
        { 
          id: 'poizon', 
          title: 'Poizon (Dewu)', 
          desc: 'Authentic luxury goods 30-50% cheaper than local retail.',
          steps: [
            'Prices vary by size because it\'s a stock-market model. Check adjacent sizes to save up to 30%.',
            '"95 New" means USED/Pre-owned (95% condition). "Damaged Box" means BRAND NEW with a dented box.',
            'Verification system: Poizon inspects every item, which significantly reduces counterfeit risks.',
            'Keep the blue tag and NFC certificate! They are essential for proving authenticity and resale value.'
          ],
          tip: 'Use the price chart to buy during dips. Never remove the blue tag until you are 100% sure about the item.',
          compare: { label: 'Jordan 4 Retro', local: '$480', china: '$290' }
        },
        { 
          id: 'taobao', 
          title: 'Taobao & Tmall', 
          desc: 'Find the best deals with real customer reviews.',
          steps: [
            'Tmall (red icon) features official brands/dealers with near-zero defect risk. Regular Taobao is cheaper.',
            'Always look for the camera icon in reviews to see "Live Photos" instead of studio renders.',
            'Prioritize sellers active for 5–10 years; they value their reputation and history on the platform.'
          ],
          tip: 'Use our warehouse for "Consolidation". Buy small items from 10 different stores, and we will pack them into ONE box to save you up to 60% on shipping.',
          compare: { label: 'Design Decor', local: '$85', china: '$12' }
        },
        { 
          id: 'xianyu', 
          title: 'Xianyu', 
          desc: 'Second-hand market for vintage luxury and tech at bargain prices.',
          steps: [
            'Seller Rating: Look for "Excellent" Sesame Credit. This is the most reliable indicator of a trustworthy seller.',
            'Video Confirmation: Since items are used, always ask the seller for a current video of the product before purchasing.',
            'No Returns: Be aware that most sellers on Xianyu do not accept returns. Detailed inspection is key.',
            'Bargaining: It is common to negotiate! Prices can often be lowered by 10-20%.'
          ],
          tip: 'Great for finding "Sold Out" limited editions or vintage bags. Always inspect photos carefully for wear and tear.',
          compare: { label: 'Sony PS5', local: '$600', china: '$350' }
        }
      ],
      close: 'Close Advice',
      buyForMe: "Too complex? We can handle the full purchasing process for you."
    },
    quiz: {
      cta: 'Not sure which delivery to choose?',
      button: 'Take 30s Quiz',
      title: 'Find Your Perfect Route',
      back: 'Back',
      questions: {
        country: 'Where are we shipping to?',
        category: 'What type of goods?',
        weight: 'Approximate weight?',
        priority: 'What is your priority?'
      },
      options: {
        us_ca: '🇺🇸 USA / Canada',
        eu: '🇪🇺 Europe',
        uae: '🇦🇪 UAE (Dubai)',
        au: '🇦🇺 Australia',
        clothing: 'Clothing & Shoes',
        electronics: 'Electronics',
        cosmetics: 'Cosmetics',
        furniture: 'Furniture / Heavy',
        other: 'Other',
        under30: 'Under 30 kg',
        over30: 'Over 30 kg',
        fast: 'Fastest Delivery',
        cheap: 'Lowest Price'
      },
      results: {
        title: 'Recommended Route:',
        air: {
          title: 'Express Air',
          desc: 'Air freight is the only reliable option for this weight class. Fast, trackable, and efficient.',
          desc_us_light: 'Sea freight to USA/Canada is only available from 30kg. For your weight, Air is the only reliable option.',
          desc_uae_light: 'Land freight (Truck) starts from 30kg. For smaller parcels, we use fast air lines.',
          desc_speed: 'When time is of the essence, Air Express is the only choice. The most stable and fastest route.'
        },
        sea: {
          title: 'Sea Freight',
          desc: 'The best way to save on heavy shipments. Ideal for furniture or large commercial batches.'
        },
        rail: {
          title: 'Rail / Multimodal',
          desc: 'For heavy cargo to EU, there are cost-effective ground routes. Note: Availability depends on item type.'
        },
        truck: {
          title: 'Road Freight (Truck)',
          desc: 'Optimal balance: cheaper than air, faster than sea. Delivered by truck directly to your door.'
        }
      },
      contactBtn: 'Discuss this route'
    },
    about: {
      title: 'For over 9 years, we\'ve been providing reliable shipping and purchasing services from China and Hong Kong.',
      text: 'We are one of the **most trusted purchasing and forwarding services**, with our own automated warehouse in China and Hong Kong. We ensure your delivery gets straight to your doorstep.'
    },
    services: {
      title: 'Warehouse Services',
      amazonTitle: 'Amazon Logistics',
      items: {
        reception: { title: 'Parcel Reception – Free of Charge', text: 'No matter the store, number of items, or weight, we receive all incoming parcels at our warehouse completely free.' },
        storage: { title: 'Storage – Free of Charge', text: 'All your purchases are stored for free—no time limits. Enjoy worry-free storage while we handle your parcels.' },
        consolidation: { title: 'Consolidation – Free of Charge', text: 'We combine any number of orders from one or multiple stores into a single package for free, helping you save on shipping costs.' },
        purchasing: { title: 'Purchasing Items by Our Specialists – 1% of the item\'s value', text: '(minimum RMB 120 for online stores, RMB 200 for offline stores) Prefer to shop yourself? There\'s no commission at all! If you\'d like our specialists to purchase items for you, we handle it carefully and efficiently, making the process effortless.' },
        photo: { title: 'Product Photo/Video – Free of Charge', text: 'We can take photos or videos of your items—or specific parts—so you can check them before shipment.' },
        splitting: { title: 'Splitting One Order into Multiple Shipments – Free of Charge', text: 'Need to split a large order into multiple shipments? We do it for free, making shipping flexible and convenient for you.' },
        packing: { title: 'Package Packing – Free of Charge', text: 'We provide high-quality packaging suitable for international shipping at no extra cost, ensuring your purchases arrive safely.' },
        insurance: { title: 'Package Insurance – Optional', text: 'At your request, we can insure your package to minimize delivery risks. Pricing: 150 RMB per $100 declared value for Asia, 130 RMB per $100 for Europe.' },
        returns: { title: 'Return of Item to Store – Free of Charge', text: 'Only the shipping cost within the store\'s country applies; everything else is handled by us for free.' }
      },
      amazonItems: {
        fba: { title: 'FBA Prep Services', text: 'We handle FNSKU labeling, poly-bagging, bubble wrapping, and bundling to ensure your products meet Amazon US and EU strict requirements before they leave China.' },
        direct: { title: 'Direct Shipping to Amazon FBA (USA & EU)', text: 'We ship directly from China to Amazon FBA fulfillment centers in the USA, UK, and Europe. We utilize optimal routes to bypass intermediate storage, saving you time and money.' },
        ddp: { title: 'DDP Shipping (Delivered Duty Paid)', text: 'Critical for Amazon sellers: We handle all customs clearance and duty payments upfront. Your goods arrive at FBA warehouses without delays or surprise fees.' },
        inspection: { title: 'Quality Inspection', text: 'Our team inspects your goods before they are shipped to Amazon to prevent returns due to manufacturing defects or packaging damage.' },
        storage: { title: 'Storage & Consolidation', text: 'Aggregate products from multiple suppliers at our warehouse before sending a consolidated shipment to Amazon to optimize shipping rates.' },
        samples: { title: 'Sample Consolidation', text: 'We can collect samples from various factories and send them to you in one package for review before you place a bulk order.' }
      }
    },
    reviews: {
      title: 'Over a thousand customers put their trust in us every month — here\'s what they share:',
      data: [
        {
          name: "Anastasia",
          location: "Dubai, UAE",
          text: "Living in Dubai, finding specific decor is hard. Ordered these Hermes cups for my collection. HappyBox packed them with such care! Not a single chip. The consolidation service is a lifesaver.",
          image: "https://i.ibb.co/RGjpLh3Z/Happy-Box-review8.webp"
        },
        {
          name: "Jason Miller",
          location: "Los Angeles, USA",
          text: "I ordered a full electric drum kit. It was a huge box, but the shipping cost was surprisingly reasonable. Everything arrived intact and works perfectly. Great service for large items!",
          image: "https://i.ibb.co/Q3G8jNRR/Happy-Box-review9.webp"
        },
        {
          name: "Elena Petrova",
          location: "Berlin, Germany",
          text: "Got my Gucci shoes! I was worried about the box getting crushed, but they double-boxed everything. They are 100% authentic and arrived in Berlin in perfect condition.",
          image: "https://i.ibb.co/0y8mfkkB/Happy-Box-review12.webp"
        },
        {
          name: "Michael Chen",
          location: "Toronto, Canada",
          text: "I was looking for an e-foil everywhere. The HappyBox team helped me find a supplier on 1688 much cheaper than I could find on my own. Saved me over $1000!",
          image: "https://i.ibb.co/whXdYLzr/Happy-Box-review6.webp"
        },
        {
          name: "Olga S.",
          location: "Riga, Latvia",
          text: "So happy you can ship food products! I ordered a big batch of baby cookies and snacks that my children love. Everything arrived fresh and well-packed. Thank you!",
          image: "https://i.ibb.co/YFwfYJht/Happy-Box-review11.webp"
        },
        {
          name: "Jessica Miller",
          location: "London, UK",
          text: "Fast, reliable, and honest. I've been using them for 2 years now for personal shopping. The consolidation feature is the best – I save about 40% on shipping compared to direct delivery.",
          image: "https://i.ibb.co/4n8HyptV/Happy-Box-review3.webp"
        },
        {
          name: "Polina K.",
          location: "Warsaw, Poland",
          text: "Заказала фен Dyson. It's the real deal! Works with my voltage perfectly. The team checked the serial number for me before shipping. Highly recommended.",
          image: "https://i.ibb.co/6JmvY3Kp/Happy-Box-review7.webp"
        },
        {
          name: "Emma Davis",
          location: "New York, USA",
          text: "These cute cushions for my dining chairs are adorable! They look exactly like the photos. The 'purchase for me' service made buying from Taobao so easy.",
          image: "https://i.ibb.co/6cbcytdJ/Happy-Box-review13.webp"
        },
        {
          name: "Sarah Weber",
          location: "Munich, Germany",
          text: "Very professional logistics. Tracking was accurate all the way to my door in Munich. The rates for heavy shipments are very competitive. Will definitely use again.",
          image: "https://i.ibb.co/4RF5Hdbw/Happy-Box-review10.webp"
        },
        {
          name: "Sophie Martin",
          location: "Paris, France",
          text: "My Hermes bag arrived! I can't believe I got it for this price. The inspection photos gave me peace of mind before shipping. It's absolutely beautiful.",
          image: "https://i.ibb.co/ZRC3B1k5/Happy-Box-review.webp"
        },
        {
          name: "Maria Gonzalez",
          location: "Madrid, Spain",
          text: "These branded boots are stunning. Leather quality is amazing. HappyBox checked the size for me, so they fit perfectly. Shipping to Madrid was fast.",
          image: "https://i.ibb.co/BKrDsfWw/Happy-Box-review2.webp"
        },
        {
          name: "Daniel Kim",
          location: "Vancouver, Canada",
          text: "Solid service. Had a small issue with a missing tracking number once, but support resolved it via Telegram in 10 minutes. It feels like they really care about your package.",
          image: "https://i.ibb.co/xycMWf1/Happy-Box-review4.webp"
        }
      ]
    },
    calculator: {
      title: 'Shipping Cost Calculator',
      subtitle: 'Door-to-door delivery. Prices include all taxes and customs duties.',
      weightPlaceholder: 'Weight',
      minWeightHint: 'Minimum weight — 0.1 kg',
      kg: 'Kilogram (kg)',
      lb: 'Pound (lb)',
      selectCountry: 'Select destination',
      postalPlaceholder: 'Zip Code (Optional)',
      button: 'Calculate Cost',
      error: 'Please select a country',
      resultTitle: 'Estimated Cost',
      deliveryTime: 'Delivery',
      timeDays: 'days',
      note: '*Calculated for {weight} kg. Final price may vary depending on volumetric weight.',
      recalculate: 'Recalculate',
      airRate: 'Air Freight Rate',
      time: 'Transit Time',
      contactQuote: 'Contact for Quote',
      contactDesc: 'For this destination, please contact our support for an accurate quote.',
      contactBtn: 'Contact Support',
      altDelivery: 'Interested in Rail or Sea?',
      altContact: 'Contact us for a quote',
      methodAir: 'Air Express',
      methodSea: 'Sea Freight',
      methodRail: 'Rail / Truck',
      minWeightSeaRail: 'Sea/Rail available from 15kg',
      minWeightSeaUS: 'Sea shipping to USA/Canada starts from 30kg. For lighter weight, only Air is available.',
      euDisclaimer: 'Note: not all items can be accepted for sea/land due to local EU laws. Check with us.',
      bulkInquiry: 'For large batches to this destination, please write to us for a special rate.',
      onlyAirForCountry: 'Only Air shipping is available for this destination',
      countries: {
        us: 'USA',
        ca: 'Canada',
        au: 'Australia',
        ae: 'UAE (Dubai)',
        eng: 'England',
        sct: 'Scotland',
        wls: 'Wales',
        nir: 'Northern Ireland',
        no: 'Norway',
        is: 'Iceland',
        at: 'Austria',
        be: 'Belgium',
        bg: 'Bulgaria',
        hr: 'Croatia',
        cy: 'Cyprus',
        cz: 'Czech Republic',
        dk: 'Denmark',
        ee: 'Estonia',
        fi: 'Finland',
        fr: 'France',
        de: 'Germany',
        gr: 'Greece',
        hu: 'Hungary',
        ie: 'Ireland',
        it: 'Italy',
        lv: 'Latvia',
        lt: 'Lithuania',
        lu: 'Luxembourg',
        mt: 'Malta',
        nl: 'Netherlands',
        pl: 'Poland',
        pt: 'Portugal',
        ro: 'Romania',
        sk: 'Slovakia',
        si: 'Slovenia',
        es: 'Spain',
        se: 'Sweden',
        ru: 'Russia',
        other: 'Other Country'
      }
    },
    tracking: {
      title: 'Track Your Parcel',
      subtitle: 'We support',
      carriers: '1500+ carriers',
      subtitle2: 'including China Post, Cainiao, USPS and DHL.',
      placeholder: 'Enter tracking number (e.g., LV123456789CN)',
      button: 'Track',
      result: 'Tracking Results',
      powered: 'Powered by 17TRACK'
    },
    contact: {
      title: 'Shipping from China and Hong Kong has never been easier with',
      text: 'HappyBox allows you to buy any products from online and offline stores in China and Hong Kong delivered straight to your door. We offer affordable shipping for clothes, cosmetics, shoes, electronics, snacks, vitamins and many other goods!',
      contactUs: 'Contact Us'
    },
    footer: {
      support: 'Support',
      contact: 'Contact Support',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      rights: 'HappyBox. All rights reserved.',
      iUnderstand: 'I Understand',
      privacyTitle: 'Privacy Policy',
      termsTitle: 'Terms of Service'
    },
    devModal: {
        title: 'Section Under Development',
        message: 'Client Dashboard is coming soon! We are working hard to create a convenient system for tracking and managing your orders.',
        close: 'Close'
    },
    seoBlock: {
      toggle: 'Popular Destinations & Services',
      categories: {
        destinations: {
          title: 'Shipping Destinations',
          items: [
            'Delivery from China to USA',
            'Shipping from China to UK',
            'Delivery from China to UAE (Dubai)',
            'Shipping from China to Germany',
            'Delivery from China to France',
            'Shipping from China to Canada',
            'Delivery from China to Australia',
            'Shipping from Hong Kong to USA',
            'Shipping from Hong Kong to Europe'
          ]
        },
        services: {
          title: 'Our Services',
          items: [
            'Small Package Delivery from China',
            'Amazon FBA Shipping to USA',
            'DDP Shipping (Tax Free)',
            'Consolidation Service China',
            'Free Warehousing in China',
            'Personal Shopper Service',
            'Furniture Delivery from China',
            'Electronics Shipping'
          ]
        },
        platforms: {
          title: 'Shopping Agents',
          items: [
            'Taobao Agent',
            '1688 Agent',
            'Buy from Tmall',
            'Poizon (Dewu) Delivery',
            'Alibaba Forwarding Agent',
            'Weidian Agent',
            'Xianyu Second-hand Agent'
          ]
        }
      }
    }
  },
  ru: {
    nav: {
      services: 'Услуги',
      reviews: 'Отзывы',
      cost: 'Стоимость',
      tracking: 'Отслеживание',
      contacts: 'Контакты'
    },
    hero: {
      title: 'Быстрая и надежная доставка из Китая в Европу, США, ОАЭ и по всему миру.',
      minWeightBadge: 'Нет минимального веса — доставка от 0.1 кг',
      features: {
        operating: 'Работаем с 2016 года',
        warehouse: 'Храним и консолидируем ваши заказы бесплатно',
        buy: 'Выкупаем из любых магазинов',
        packaging: 'Бережная и надежная упаковка',
        payment: 'Гибкие способы оплаты',
        support: 'Поддержка 24/7',
        worldwide: 'Доставка по всему миру',
        appreciate: 'Мы ценим каждого клиента'
      },
      stats: 'клиентов по всему миру'
    },
    deliveryPath: {
      title: 'Путь вашей посылки',
      steps: [
        { title: 'Заказ', desc: 'Вы покупаете или мы выкупаем' },
        { title: 'Склад', desc: 'Приемка и проверка' },
        { title: 'Обработка', desc: 'Консолидация и упаковка' },
        { title: 'Таможня', desc: 'Оформление и пошлины' },
        { title: 'Доставка', desc: 'Прямо до вашей двери' }
      ]
    },
    guides: {
      title: 'Советы экспертов',
      subtitle: 'Станьте мастером шопинга в Китае с нашими советами',
      cards: [
        { 
          id: '1688', 
          title: '1688.com', 
          desc: 'Покупайте напрямую у фабрик по оптовым ценам.',
          steps: [
            'Рейтинг 5–4 — стандарт надежности. Продавцы с рейтингом ниже 4.0 рискованны.',
            'Проверяйте реальный вес и габариты: в карточках часто неверные данные.',
            'Для электроники проверяйте совместимость с 220В и тип вилки.',
            'Указывайте индивидуальную упаковку для одежды, иначе она придет в общем мешке.',
            'Для хрупких товаров заказывайте деревянную обрешетку.'
          ],
          tip: 'Остатки на 1688 часто неточны. Всегда отправляйте ссылку нашему агенту для проверки наличия перед оплатой.',
          compare: { label: 'Электроника', local: '$150', china: '$45' }
        },
        { 
          id: 'poizon', 
          title: 'Poizon (Dewu)', 
          desc: 'Оригинальные бренды на 30-50% дешевле, чем в ритейле.',
          steps: [
            'Цены зависят от размера (модель биржи). Проверяйте соседние размеры.',
            '"95 New" означает б/у (состояние 95%). "Damaged Box" — новый товар с мятой коробкой.',
            'Poizon проверяет каждый товар, что исключает подделки.',
            'Сохраняйте синюю бирку и сертификат NFC! Они важны для подтверждения подлинности.'
          ],
          tip: 'Используйте график цен, чтобы покупать на спаде. Не снимайте синюю бирку до полной уверенности.',
          compare: { label: 'Jordan 4 Retro', local: '$480', china: '$290' }
        },
        { 
          id: 'taobao', 
          title: 'Taobao & Tmall', 
          desc: 'Лучшие предложения с реальными отзывами покупателей.',
          steps: [
            'Tmall (красный значок) — это официальные дилеры с нулевым риском брака.',
            'Ищите значок камеры в отзывах, чтобы увидеть живые фото.',
            'Выбирайте продавцов, работающих 5–10 лет — они дорожат репутацией.'
          ],
          tip: 'Используйте нашу консолидацию. Купите мелочь в 10 магазинах, а мы соберем все в одну посылку.',
          compare: { label: 'Дизайнерский декор', local: '$85', china: '$12' }
        },
        { 
          id: 'xianyu', 
          title: 'Xianyu', 
          desc: 'Вторичный рынок винтажного люкса и техники.',
          steps: [
            'Рейтинг продавца: Ищите "Excellent" Sesame Credit.',
            'Видео-подтверждение: Всегда просите актуальное видео товара перед покупкой.',
            'Без возвратов: Большинство продавцов не принимают возвраты.',
            'Торг: Здесь принято торговаться! Цену часто можно снизить на 10-20%.'
          ],
          tip: 'Отлично подходит для поиска лимитированных коллекций и винтажных сумок.',
          compare: { label: 'Sony PS5', local: '$600', china: '$350' }
        }
      ],
      close: 'Закрыть советы',
      buyForMe: "Слишком сложно? Мы можем выкупить товар за вас."
    },
    quiz: {
      cta: 'Не уверены, какую доставку выбрать?',
      button: 'Пройти опрос за 30с',
      title: 'Подбор идеального маршрута',
      back: 'Назад',
      questions: {
        country: 'Куда доставляем?',
        category: 'Какая категория товаров?',
        weight: 'Примерный вес?',
        priority: 'Что важнее?'
      },
      options: {
        us_ca: '🇺🇸 США / Канада',
        eu: '🇪🇺 Европа',
        uae: '🇦🇪 ОАЭ (Дубай)',
        au: '🇦🇺 Австралия',
        clothing: 'Одежда и обувь',
        electronics: 'Электроника',
        cosmetics: 'Косметика',
        furniture: 'Мебель / Тяжелое',
        other: 'Другое',
        under30: 'До 30 кг',
        over30: 'Более 30 кг',
        fast: 'Быстрая доставка',
        cheap: 'Низкая цена'
      },
      results: {
        title: 'Рекомендуемый маршрут:',
        air: {
          title: 'Авиа Экспресс',
          desc: 'Авиадоставка — единственный надежный вариант для этого веса. Быстро и с трекингом.',
          desc_us_light: 'Морская доставка в США/Канаду доступна только от 30кг. Для вашего веса — только Авиа.',
          desc_uae_light: 'Автодоставка в ОАЭ начинается от 30кг. Для мелких посылок используем Авиа.',
          desc_speed: 'Когда время имеет значение, Авиа Экспресс — лучший выбор. Самый стабильный маршрут.'
        },
        sea: {
          title: 'Морская доставка',
          desc: 'Лучший способ сэкономить на тяжелых грузах. Идеально для мебели и коммерческих партий.'
        },
        rail: {
          title: 'ЖД / Мультимодальная',
          desc: 'Для тяжелых грузов в ЕС есть экономичные наземные маршруты.'
        },
        truck: {
          title: 'Автодоставка (Карго)',
          desc: 'Оптимальный баланс: дешевле авиа, быстрее моря. Доставка фурой до двери.'
        }
      },
      contactBtn: 'Обсудить маршрут'
    },
    about: {
      title: 'Уже более 9 лет мы предоставляем надежные услуги доставки и выкупа из Китая и Гонконга.',
      text: 'Мы являемся одним из **самых надежных сервисов по выкупу и доставке**, с собственными автоматизированными складами в Китае и Гонконге. Мы гарантируем доставку прямо до вашей двери.'
    },
    services: {
      title: 'Складские услуги',
      amazonTitle: 'Логистика Amazon',
      items: {
        reception: { title: 'Прием посылок – Бесплатно', text: 'Независимо от магазина, количества товаров или веса, мы принимаем все входящие посылки бесплатно.' },
        storage: { title: 'Хранение – Бесплатно', text: 'Все ваши покупки хранятся бесплатно без ограничений по времени.' },
        consolidation: { title: 'Консолидация – Бесплатно', text: 'Мы объединяем любое количество заказов в одну посылку бесплатно, чтобы вы экономили на доставке.' },
        purchasing: { title: 'Выкуп товаров – 1% от стоимости', text: '(минимум 120 юаней для онлайн, 200 для офлайн). Предпочитаете покупать сами? Комиссии нет! Если нужен выкуп, наши специалисты сделают это быстро и надежно.' },
        photo: { title: 'Фото/Видео товара – Бесплатно', text: 'Мы можем сделать фото или видео ваших товаров, чтобы вы проверили их перед отправкой.' },
        splitting: { title: 'Разделение заказа – Бесплатно', text: 'Нужно разделить большой заказ на несколько посылок? Мы сделаем это бесплатно.' },
        packing: { title: 'Упаковка – Бесплатно', text: 'Мы предоставляем качественную упаковку для международной доставки без доплаты.' },
        insurance: { title: 'Страхование – Опционально', text: 'По вашему запросу мы можем застраховать посылку. 150 юаней за $100 объявленной стоимости для Азии, 130 юаней для Европы.' },
        returns: { title: 'Возврат товара – Бесплатно', text: 'Оплачивается только доставка по Китаю, наши услуги по оформлению возврата бесплатны.' }
      },
      amazonItems: {
        fba: { title: 'Подготовка FBA', text: 'Маркировка FNSKU, упаковка в пакеты, пупырчатую пленку и комплектация наборов согласно требованиям Amazon.' },
        direct: { title: 'Прямая доставка на FBA (США и ЕС)', text: 'Мы доставляем напрямую из Китая на склады Amazon FBA в США, Великобритании и Европе.' },
        ddp: { title: 'Доставка DDP (Все включено)', text: 'Критично для продавцов Amazon: мы берем на себя таможенное оформление и пошлины.' },
        inspection: { title: 'Инспекция качества', text: 'Наша команда проверяет товары перед отправкой на Amazon, чтобы избежать возвратов.' },
        storage: { title: 'Хранение и консолидация', text: 'Собирайте товары от разных поставщиков на нашем складе перед отправкой общей партии.' },
        samples: { title: 'Консолидация образцов', text: 'Мы можем собрать образцы от разных фабрик и отправить их вам одной посылкой.' }
      }
    },
    reviews: {
      title: 'Более тысячи клиентов доверяют нам ежемесячно — вот что они говорят:',
      data: [
        {
          name: "Анастасия",
          location: "Дубай, ОАЭ",
          text: "Живя в Дубае, сложно найти специфический декор. Заказала чашки Hermes для коллекции. HappyBox упаковали их идеально! Консолидация — просто спасение.",
          image: "https://i.ibb.co/RGjpLh3Z/Happy-Box-review8.webp"
        },
        {
          name: "Джейсон Миллер",
          location: "Лос-Анджелес, США",
          text: "Заказал электронную ударную установку. Огромная коробка, но цена доставки приятно удивила. Все пришло целым и работает. Отличный сервис!",
          image: "https://i.ibb.co/Q3G8jNRR/Happy-Box-review9.webp"
        },
        {
          name: "Елена Петрова",
          location: "Берлин, Германия",
          text: "Получила свои туфли Gucci! Переживала за коробку, но они упаковали в двойной бокс. 100% оригинал, доставили в Берлин в идеальном состоянии.",
          image: "https://i.ibb.co/0y8mfkkB/Happy-Box-review12.webp"
        },
        {
          name: "Майкл Чен",
          location: "Торонто, Канада",
          text: "Искал электро-фойл повсюду. Команда HappyBox помогла найти поставщика на 1688 намного дешевле. Сэкономил больше $1000!",
          image: "https://i.ibb.co/whXdYLzr/Happy-Box-review6.webp"
        },
        {
          name: "Ольга С.",
          location: "Рига, Латвия",
          text: "Так рада, что вы доставляете еду! Заказала большую партию детского печенья и снеков. Все пришло свежим и хорошо упакованным. Спасибо!",
          image: "https://i.ibb.co/YFwfYJht/Happy-Box-review11.webp"
        },
        {
          name: "Джессика Миллер",
          location: "Лондон, Великобритания",
          text: "Быстро, надежно и честно. Пользуюсь уже 2 года. Консолидация — лучшая функция, экономлю около 40% по сравнению с прямой доставкой.",
          image: "https://i.ibb.co/4n8HyptV/Happy-Box-review3.webp"
        },
        {
          name: "Полина К.",
          location: "Варшава, Польша",
          text: "Заказала фен Dyson. Оригинал! Работает с моим напряжением. Команда проверила серийный номер перед отправкой. Очень рекомендую.",
          image: "https://i.ibb.co/6JmvY3Kp/Happy-Box-review7.webp"
        },
        {
          name: "Эмма Дэвис",
          location: "Нью-Йорк, США",
          text: "Эти подушки для стульев просто прелесть! Выглядят точно как на фото. Услуга выкупа сделала покупку на Таобао очень простой.",
          image: "https://i.ibb.co/6cbcytdJ/Happy-Box-review13.webp"
        },
        {
          name: "Sarah Weber",
          location: "Мюнхен, Германия",
          text: "Очень профессиональная логистика. Трекинг был точным до самой двери. Тарифы на тяжелые грузы очень конкурентные. Буду пользоваться снова.",
          image: "https://i.ibb.co/4RF5Hdbw/Happy-Box-review10.webp"
        },
        {
          name: "Софи Мартин",
          location: "Париж, Франция",
          text: "Моя сумка Hermes пришла! Не верится, что купила по такой цене. Фото с инспекции успокоили меня перед отправкой. Она прекрасна.",
          image: "https://i.ibb.co/ZRC3B1k5/Happy-Box-review.webp"
        },
        {
          name: "Мария Гонзалес",
          location: "Мадрид, Испания",
          text: "Эти брендовые ботинки потрясающие. Кожа отличная. HappyBox проверили размер, так что подошли идеально. Доставка в Мадрид была быстрой.",
          image: "https://i.ibb.co/BKrDsfWw/Happy-Box-review2.webp"
        },
        {
          name: "Дэниел Ким",
          location: "Ванкувер, Канада",
          text: "Надежный сервис. Была небольшая проблема с трек-номером, но поддержка в Telegram решила все за 10 минут. Чувствуется забота о клиенте.",
          image: "https://i.ibb.co/xycMWf1/Happy-Box-review4.webp"
        }
      ]
    },
    calculator: {
      title: 'Онлайн калькулятор доставки',
      subtitle: 'Доставка до двери. Цены включают все налоги и таможенные пошлины.',
      weightPlaceholder: 'Вес',
      minWeightHint: 'Минимальный вес — 0.1 кг',
      kg: 'Килограмм (кг)',
      lb: 'Фунт (lb)',
      selectCountry: 'Выберите страну назначения',
      postalPlaceholder: 'Почтовый индекс (опционально)',
      button: 'Рассчитать стоимость',
      error: 'Пожалуйста, выберите страну',
      resultTitle: 'Примерная стоимость',
      deliveryTime: 'Доставка',
      timeDays: 'дней',
      note: '*Рассчитано для {weight} кг. Итоговая цена может отличаться в зависимости от объемного веса.',
      recalculate: 'Пересчитать',
      airRate: 'Тариф Авиадоставки',
      time: 'Срок',
      contactQuote: 'Свяжитесь для расчета',
      contactDesc: 'Для этого направления, пожалуйста, свяжитесь с нашей поддержкой для точного расчета.',
      contactBtn: 'Написать в поддержку',
      altDelivery: 'Интересует ЖД или Море?',
      altContact: 'Свяжитесь с нами для расчета',
      methodAir: 'Авиа Экспресс',
      methodSea: 'Морская перевозка',
      methodRail: 'ЖД / Авто',
      minWeightSeaRail: 'Море/ЖД доступно от 15кг',
      minWeightSeaUS: 'Морская доставка в США/Канаду от 30кг. При меньшем весе доступна только Авиа.',
      euDisclaimer: 'Внимание: не все товары могут быть приняты для моря/наземки из-за местных законов ЕС. Уточняйте у нас.',
      bulkInquiry: 'Для крупных партий в это направление, пожалуйста, напишите нам для расчета спец. тарифа.',
      onlyAirForCountry: 'Для этого направления доступна только Авиадоставка',
      countries: {
        us: 'США',
        ca: 'Канада',
        au: 'Австралия',
        ae: 'ОАЭ (Дубай)',
        eng: 'Англия',
        sct: 'Шотландия',
        wls: 'Уэльс',
        nir: 'Северная Ирландия',
        no: 'Норвегия',
        is: 'Исландия',
        at: 'Австрия',
        be: 'Бельгия',
        bg: 'Бугария',
        hr: 'Хорватия',
        cy: 'Кипр',
        cz: 'Чехия',
        dk: ' Дания',
        ee: 'Эстония',
        fi: 'Финляндия',
        fr: 'Франция',
        de: 'Германия',
        gr: 'Греция',
        hu: 'Венгрия',
        ie: 'Ирландия',
        it: 'Италия',
        lv: 'Латвия',
        lt: 'Литва',
        lu: 'Люксембург',
        mt: 'Мальта',
        nl: 'Нидерланды',
        pl: 'Польша',
        pt: 'Португалия',
        ro: 'Румыния',
        sk: 'Словакия',
        si: 'Словения',
        es: 'Испания',
        se: 'Швеция',
        ru: 'Россия',
        other: 'Другая страна'
      }
    },
    tracking: {
      title: 'Отследить посылку',
      subtitle: 'Мы поддерживаем',
      carriers: '1500+ перевозчиков',
      subtitle2: 'включая China Post, Cainiao, USPS и DHL.',
      placeholder: 'Введите трек-номер (например, LV123456789CN)',
      button: 'Отследить',
      result: 'Результаты отслеживания',
      powered: 'Работает на 17TRACK'
    },
    contact: {
      title: 'Доставка товаров из Китая и Гонконга никогда не была такой простой с',
      text: 'HappyBox позволяет покупать любые товары в онлайн и офлайн магазинах Китая и Гонконга с доставкой прямо до вашей двери. Мы предлагаем доступную доставку одежды, косметики, обуви, электроники, снеков, витаминов и многих других товаров!',
      contactUs: 'Свяжитесь с нами'
    },
    footer: {
      support: 'Поддержка',
      contact: 'Написать в поддержку',
      privacy: 'Политика конфиденциальности',
      terms: 'Пользовательское соглашение',
      rights: 'HappyBox. All rights reserved.',
      iUnderstand: 'Я понимаю',
      privacyTitle: 'Политика конфиденциальности',
      termsTitle: 'Пользовательское соглашение'
    },
    devModal: {
        title: 'Раздел в разработке',
        message: 'Личный кабинет скоро появится! Мы усердно работаем над созданием удобной системы для отслеживания и управления вашими заказами.',
        close: 'Закрыть'
    },
    seoBlock: {
      toggle: 'Популярные направления и услуги',
      categories: {
        destinations: {
          title: 'Направления доставки',
          items: [
            'Доставка из Китая в США',
            'Доставка из Китая в Великобританию',
            'Доставка из Китая в ОАЭ (Дубай)',
            'Доставка из Китая в Германию',
            'Доставка из Китая во Францию',
            'Доставка из Китая в Канаду',
            'Доставка из Китая в Австралию',
            'Доставка из Гонконга в США',
            'Доставка из Гонконга в Европу'
          ]
        },
        services: {
          title: 'Наши услуги',
          items: [
            'Доставка мелких пакетов из Китая',
            'Amazon FBA доставка в США',
            'DDP Доставка (Без пошлин)',
            'Услуга консолидации в Китае',
            'Бесплатное хранение в Китае',
            'Услуга Байера (Выкуп)',
            'Доставка мебели из Китая',
            'Доставка электроники'
          ]
        },
        platforms: {
          title: 'Агенты для покупок',
          items: [
            'Посредник Таобао',
            'Посредник 1688',
            'Выкуп с Tmall',
            'Доставка с Poizon (Dewu)',
            'Форвардер Alibaba',
            'Посредник Weidian',
            'Посредник Xianyu'
          ]
        }
      }
    }
  }
};




export type Language = 'en' | 'ru';

export const translations = {
  en: {
    nav: {
      services: 'Service',
      reviews: 'Reviews',
      cost: 'Cost',
      tracking: 'Tracking',
      contacts: 'Contacts',
      faq: 'FAQ'
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
      title: 'Our Services',
      amazonTitle: 'Amazon Logistics',
      items: {}, // Moved to Warehousing Page
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
          text: "Ordered a Dyson hairdryer. It's the real deal! Works with my voltage perfectly. The team checked the serial number for me before shipping. Highly recommended.",
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
          text: "Very professional logistics. Tracking was accurate right up to my door. Heavy cargo rates are very competitive. Will use again.",
          image: "https://i.ibb.co/4RF5Hdbw/Happy-Box-review10.webp"
        },
        {
          name: "Sophie Martin",
          location: "Paris, France",
          text: "My Hermes bag arrived! Can't believe I got it at this price. Inspection photos calmed me down before shipping. It's beautiful.",
          image: "https://i.ibb.co/ZRC3B1k5/Happy-Box-review.webp"
        },
        {
          name: "Maria Gonzalez",
          location: "Madrid, Spain",
          text: "These designer boots are stunning. The leather is great. HappyBox checked the size so they fit perfectly. Delivery to Madrid was fast.",
          image: "https://i.ibb.co/BKrDsfWw/Happy-Box-review2.webp"
        },
        {
          name: "Daniel Kim",
          location: "Vancouver, Canada",
          text: "Reliable service. Had a small issue with the tracking number, but support on Telegram fixed it in 10 minutes. You can feel they care about the customer.",
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
    },
    faq: {
      title: 'Common Questions',
      subtitle: 'Everything you need to know about working with HappyBox',
      items: [
        {
          question: 'Do you charge a fee for purchasing on 1688 or Taobao?',
          answer: 'We charge 0% commission! We only charge for the shipping!'
        },
        {
          question: 'What if my item arrives damaged at your warehouse?',
          answer: 'We inspect every incoming package. If an item is damaged or does not match the description, we will return it to the Chinese seller immediately for a refund or exchange.'
        },
        {
          question: 'How do I pay you? Do you accept Crypto?',
          answer: 'Yes! We accept USDT (Crypto), Bank Transfers (USD/EUR) to our Hong Kong or US companies, and even Rubles for our CIS clients. You can pay securely before shipment.'
        },
        {
          question: 'What is DDP shipping?',
          answer: 'DDP stands for "Delivered Duty Paid". It means we handle all customs clearance and pay all import taxes. You just wait for the parcel at your door.'
        }
      ]
    },
    quickAccess: {
      taobao: 'Buy from Taobao without a Chinese number',
      1688: 'Wholesale sourcing direct from factories',
      inspection: 'Quality check before international shipping',
      warehousing: 'Free storage and consolidation'
    },
    servicePages: {
      taobao: {
        title: 'Taobao Agent Service: Shop from China and Ship Worldwide',
        desc: "Shop on Taobao, 1688, or Tmall like a local. We handle the purchasing, inspection, and international shipping so you can enjoy the best prices from China without the hassle.",
        whyNeed: {
            title: "Why You Need a Taobao Agent",
            text: "Buying from Taobao directly is difficult if you live outside of China. Most sellers don’t speak English and only ship within Mainland China. HappyBox acts as your professional Taobao Agent. We solve the language barrier, provide secure payment methods, and offer a dedicated free warehouse in China to receive and consolidate all your goods."
        },
        howItWorks: {
            title: "How It Works: 4 Simple Steps",
            steps: [
                { title: "Find Your Items", desc: "Browse Taobao.com or the app. Copy the links of products you want." },
                { title: "Submit Order", desc: "Send us the links. We verify price and availability." },
                { title: "We Buy & Inspect", desc: "We purchase and check items for defects upon arrival." },
                { title: "Consolidate & Ship", desc: "We combine orders to save 70% on shipping." }
            ]
        },
        proTip: {
            title: "Pro Tip: Personal Sourcing",
            text: "Don't want to search yourself? If you find Taobao difficult or don't have time, our Personal Sourcing Service is here. Send us a photo or description, and our experts will find the best quality product from a trusted seller."
        },
        features: [
            { title: 'No Chinese Phone Number Required', desc: 'You don’t need to deal with Taobao’s complex registration or blocked accounts.' },
            { title: 'Free Quality Check (QC)', desc: 'We are your eyes in China. We check for defects, wrong sizes, or incorrect colors before the item leaves the country.' },
            { title: 'Free Consolidation & Storage', desc: 'Shop from different sellers over several days. We store your items for free and pack them into ONE box to save you up to 60% on shipping.' },
            { title: 'Expert Repacking', desc: 'International shipping can be rough. We use high-quality materials to ensure your items arrive in perfect condition.' },
            { title: 'Flexible Payment Options', desc: 'Pay for your orders via Bank Transfer, WeChat pay, AliPay, Crypto safely and easily.' }
        ],
        beyond: {
            title: "Beyond Taobao: 1688, Poizon, and More",
            items: [
                { title: "1688.com", desc: "Best for wholesale prices and sourcing directly from factories. We help you negotiate with suppliers, manage bulk orders, and handle B2B logistics with ease." },
                { title: "Poizon (Dewu)", desc: "The top choice for authentic sneakers, luxury goods, and branded streetwear. Use HappyBox to secure genuine items, verified by Poizon experts, and delivered safely to your address." },
                { title: "Tmall", desc: "High-quality brands and official flagship stores. Perfect for customers seeking premium goods, home electronics, and authentic fashion from world-renowned manufacturers." },
                { title: "Offline Stores", desc: "We provide sourcing services for physical markets in China. Whether you need furniture from Foshan or electronics from the markets of Shenzhen, our team can handle offline purchases for you within Guandong province and Hong Kong." },
                { title: "Any other Chinese platform", desc: "From Pinduoduo and Xianyu (second-hand goods) to Weidian and niche marketplaces. If a seller is based in China, we can buy and ship it for you."}
            ]
        },
        shippingInfo: {
            title: "Shipping from China to Your Doorstep",
            text: "We offer competitive rates for worldwide delivery, including the USA, UAE, Europe (Poland, Germany, Spain, France), and beyond. Whether it’s a small parcel of clothes or a large furniture shipment, HappyBox ensures a smooth logistics experience."
        },
        startBtn: 'Start Shopping',
        backBtn: 'Back to Home'
      },
      1688: {
        title: '1688 Sourcing Agent: Bulk Purchasing & Wholesale from China',
        desc: "Access the true factory prices of China. We help you source, negotiate, and ship wholesale orders from 1688.com directly to your warehouse.",
        whyNeed: {
            title: "Why Choose 1688.com over Alibaba?",
            text: "While Alibaba.com is designed for international buyers with higher markups, 1688.com is the internal marketplace for Chinese manufacturers. Prices on 1688 are significantly lower, but the platform is entirely in Chinese and sellers usually only ship within Mainland China. HappyBox bridges this gap. We act as your professional 1688 Sourcing Agent, handling the language barrier, local payments (Alipay/Bank Transfer), and complex B2B logistics."
        },
        howItWorks: {
            title: "How we streamline your B2B sourcing",
            steps: [
                { title: "Sourcing", desc: "You send us links or product photos; we find the best manufacturers." },
                { title: "Purchasing", desc: "We pay the suppliers using our local corporate accounts — no need for you to have a Chinese bank account." },
                { title: "Storage", desc: "1688 sellers often ship quickly; we provide free warehousing to hold your goods." },
                { title: "Logistics", desc: "We offer DDP terms, so your business goods arrive with all customs and taxes already handled." }
            ]
        },
        proTip: {
            title: "Full Hands-Off Sourcing",
            text: "Don’t want to navigate 1688 or deal with technical specs? No problem. Simply send us a photo or a description of the products you need. Our team will handle the entire cycle: from finding the most reliable factory and negotiating the best price to quality inspection and door-to-door delivery. You focus on your sales; we handle the entire supply chain."
        },
        features: [
            { title: 'Lowest Purchasing Commission', desc: 'Only 2% of the order amount.' },
            { title: 'Direct Factory Access', desc: 'Buy at the same prices Chinese domestic companies pay.' },
            { title: 'Professional Repacking', desc: 'If your orders need extra protection — such as wooden crates, reinforced pallets, or bubble wrap — we’ve got you covered.' }
        ],
        beyond: {
            title: "Наши специализированные услуги по 1688",
            items: [
                { title: "Проверка поставщиков и фабрик", desc: "Не рискуйте капиталом. Мы проверяем надежность фабрики, бизнес-лицензию и реальную репутацию перед оплатой." },
                { title: "Переговоры по MOQ и цене", desc: "Считаете, что минимальный заказ (MOQ) слишком высок? Наша команда договаривается напрямую с менеджерами фабрик о снижении MOQ и лучших оптовых ценах." },
                { title: "Консолидация образцов", desc: "Тестируете разных поставщиков? Мы соберем образцы с 5-10 разных фабрик в одну посылку и отправим вам для проверки перед большим заказом." },
                { title: "Контроль качества (QC) Оптовых партий", desc: "Мы проводим выборочную или полную инспекцию партии на нашем складе. Проверяем количество, целостность упаковки и характеристики, чтобы избежать дорогих возвратов." }
            ]
        },
        startBtn: 'Начать закупку',
        backBtn: 'На главную'
      },
      inspection: {
        title: 'Professional Quality Control & Factory Inspection Services in China',
        desc: "Don’t leave your business to chance. Our network of professional inspectors provides on-site quality control across all Chinese provinces to ensure your goods meet 100% of your specifications before they leave the factory.",
        whyNeed: {
            title: "Why On-Site Inspection is Critical",
            text: "When ordering bulk quantities or high-value items, a simple photo at the warehouse isn’t enough. Once a shipment leaves China, returning defective goods is nearly impossible. HappyBox provides professional \"eyes and ears\" on the ground to catch issues at the source—the factory floor."
        },
        features: [
            { title: 'Nationwide Network', desc: 'Local experts in Guangdong, Zhejiang, Jiangsu, Fujian, and beyond ready to visit within 24–48 hours.' },
            { title: 'Detailed Inspection Reports', desc: 'Comprehensive PDF reports within 24h including high-res photos, videos, and a detailed defect list.' },
            { title: 'Pass/Fail Recommendation', desc: 'Professional assessment based on your specific requirements and international AQL standards.' },
            { title: 'Defect Classification', desc: 'We categorize defects into Critical, Major, and Minor so you can make informed decisions.' }
        ],
        beyond: {
            title: "Our QC Service Tiers",
            items: [
                { title: "Factory Audit", desc: "Before you pay: We verify the supplier is a legitimate manufacturer, checking business licenses and production capacity." },
                { title: "During Production Check (DUPRO)", desc: "Inspectors visit when 20–30% of your order is finished to catch systemic defects early in the process." },
                { title: "Pre-Shipment Inspection (PSI)", desc: "The most popular service. A randomized AQL check when 100% of the order is produced and 80% is packed." },
                { title: "Container Loading Supervision (CLS)", desc: "We ensure the correct quantity is loaded and goods are handled with care to prevent transit damage." }
            ]
        },
        proTip: {
            title: "Hands-Off Quality Management",
            text: "Not sure what to check? Let us handle it. Simply send us your product requirements or a sample photo. Our experts will create a custom inspection checklist for your specific product type. We deal with the factory managers and the logistics of getting an inspector to the site so you can focus on growing your brand."
        },
        startBtn: 'Request Inspection',
        backBtn: 'Back to Home'
      },
      warehousing: {
        title: 'Free China Warehouse & Consolidation Service',
        desc: "Stop paying separate shipping fees for every single package. Save up to 80% on international delivery by combining your orders into one secure shipment.",
        whyNeed: {
            title: "Why Choose Our Warehouse Services?",
            text: "With HappyBox, you get a dedicated storage space in our Guangdong warehouse. Whether you are a retail shopper or a business, you can collect items from dozens of different suppliers over several weeks. We’ll wait for everything to arrive, optimize the packaging, and ship it to you in one go."
        },
        features: [
            { title: 'Unlimited Free Storage', desc: 'No time limits, no hidden fees. All your purchases are stored for free while you wait for other items to arrive.' },
            { title: 'Free Consolidation', desc: 'We combine any number of orders from Taobao, 1688, or other stores into a single package to drastically reduce shipping costs.' },
            { title: 'Free Parcel Reception', desc: 'No matter the store or the weight, we receive all incoming parcels at our warehouse completely free of charge.' },
            { title: 'Free Photo & Video Inspection', desc: 'We are your eyes in China. We take high-quality photos or videos of your items so you can check them before they leave the country.' },
            { title: 'Volumetric Weight Optimization', desc: 'We don\'t just put boxes into a bigger box. We remove unnecessary original packaging (like heavy shoe boxes) and repacks everything to make the final parcel as compact as possible.' },
            { title: 'Advanced Order Handling', desc: 'Need to split one large order into multiple shipments or return an item to the store? We handle it for free (you only pay the local shipping fee).' },
            { title: 'Secure Packing & Insurance', desc: 'We provide high-quality international-standard packaging for free. For high-value items, we offer optional insurance to minimize any delivery risks.' },
            { title: 'Secure CCTV Monitoring', desc: 'Your goods are safe with us. Our warehouse is under 24/7 video surveillance.' }
        ],
        proTip: {
            title: "Don't want to manage it yourself?",
            text: "If you don’t want to track multiple tracking numbers and communicate with sellers, let us handle it. Our Full Concierge Service includes purchasing, warehouse management, and door-to-door delivery. You just tell us what you want, and we’ll make it happen."
        },
        startBtn: 'Get Warehouse Address',
        backBtn: 'Back to Home'
      }
    }
  },
  ru: {
    nav: {
      services: 'Услуги',
      reviews: 'Отзывы',
      cost: 'Стоимость',
      tracking: 'Отслеживание',
      contacts: 'Контакты',
      faq: 'FAQ'
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
      items: {}, // Moved to Warehousing Page
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
    },
    faq: {
      title: 'Частые вопросы',
      subtitle: 'Все, что нужно знать о работе с HappyBox',
      items: [
        {
          question: 'Берете ли вы комиссию за выкуп с 1688 или Таобао?',
          answer: 'Мы берем 0% комиссии! Вы платите только за доставку!'
        },
        {
          question: 'Что если товар придет с браком на склад?',
          answer: 'Мы проверяем каждую посылку. Если товар поврежден или не соответствует описанию, мы вернем его китайскому продавцу для замены или возврата денег.'
        },
        {
          question: 'Как оплатить? Принимаете рубли или крипту?',
          answer: 'Да! Мы принимаем USDT (Крипта), SWIFT переводы на наши компании в Гонконге или США, и даже рубли для клиентов из СНГ. Вы можете безопасно оплатить услуги до отправки груза.'
        },
        {
          question: 'Что такое Карго доставка?',
          answer: 'Это упрощенная доставка "под ключ". Мы берем на себя таможенную очистку и страховку. Вы получаете груз в Москве или своем городе без бюрократии.'
        }
      ]
    },
    quickAccess: {
      taobao: 'Выкуп с Taobao без китайского номера',
      1688: 'Оптовые закупки напрямую с фабрик',
      inspection: 'Проверка качества перед отправкой',
      warehousing: 'Бесплатное хранение и консолидация'
    },
    servicePages: {
      taobao: {
        title: 'Посредник Таобао (Taobao Agent) – Покупайте в Китае без проблем',
        desc: "Покупайте на Taobao, 1688 или Tmall как местный житель. Мы берем на себя выкуп, проверку брака и международную доставку, чтобы вы наслаждались лучшими ценами Китая без сложностей с оплатой и логистикой.",
        whyNeed: {
            title: "Зачем нужен посредник Таобао?",
            text: "Покупать на Таобао напрямую сложно, если вы не живете в Китае. Большинство продавцов не говорят по-английски, не принимают иностранные карты и доставляют только внутри материкового Китая. HappyBox выступает вашим профессиональным агентом: мы решаем языковой барьер, предоставляем безопасные способы оплаты и даем адрес склада для бесплатной консолидации."
        },
        howItWorks: {
            title: "Как это работает: 4 простых шага",
            steps: [
                { title: "Найдите товар", desc: "Ищите на Taobao.com или в приложении. Скопируйте ссылки на нужные товары." },
                { title: "Оформите заказ", desc: "Пришлите нам ссылки. Мы проверим наличие и стоимость доставки по Китаю." },
                { title: "Мы выкупаем и проверяем", desc: "Мы выкупаем товары и при поступлении на склад проверяем их на брак (фотоотчет)." },
                { title: "Консолидация и Отправка", desc: "Мы объединяем заказы в одну посылку, экономя до 70% на доставке, и отправляем вам." }
            ]
        },
        proTip: {
            title: "Совет профи: Поиск по фото",
            text: "Не хотите искать сами? Если Taobao кажется сложным или у вас нет времени, наша услуга 'Персональный поиск' для вас. Просто пришлите нам фото или описание товара, и наши эксперты найдут лучший вариант у проверенного продавца."
        },
        features: [
            { title: 'Китайский номер не нужен', desc: 'Вам не нужно мучиться со сложной регистрацией на Таобао или блокировками аккаунтов.' },
            { title: 'Бесплатная проверка (QC)', desc: 'Мы — ваши глаза в Китае. Мы проверяем брак, размеры и цвета до того, как товар покинет страну.' },
            { title: 'Бесплатная консолидация', desc: 'Покупайте у разных продавцов. Мы бесплатно храним и объединяем товары, чтобы снизить вес посылки.' },
            { title: 'Надежная переупаковка', desc: 'Международная доставка бывает суровой. Мы используем качественные материалы, чтобы все доехало в идеале.' },
            { title: 'Гибкая оплата', desc: 'Оплачивайте безопасно: Банковский перевод, карты, USDT (Крипта).' }
        ],
        beyond: {
            title: "Не только Таобао: 1688, Poizon и другие",
            items: [
                { title: "1688.com", desc: "Оптовые закупки напрямую с фабрик (B2B). Мы поможем договориться с поставщиками, оформить оптовый заказ и решить логистику." },
                { title: "Poizon (Dewu)", desc: "Лучший выбор оригинальных кроссовок и люкса. HappyBox выкупит проверенный товар и доставит вам." },
                { title: "Tmall", desc: "Официальные магазины брендов. Идеально для тех, кто ищет премиум качество и оригинальную электронику." },
                { title: "Офлайн рынки", desc: "Мы предоставляем услуги поиска на физических рынках. Мебель из Фошаня или электроника из Шэньчжэня — мы поможем." },
                { title: "Любая другая платформа", desc: "От Pinduoduo и Xianyu (б/у товары) до Weidian. Если продавец в Китае — мы сможем выкупить и отправить." }
            ]
        },
        shippingInfo: {
            title: "Доставка из Китая до вашей двери",
            text: "Мы предлагаем конкурентные тарифы на доставку по всему миру, включая США, ОАЭ, Европу (Польша, Германия, Испания, Франция) и страны СНГ. Будь то маленькая посылка с одеждой или крупная партия мебели, HappyBox обеспечит гладкую логистику."
        },
        startBtn: 'Начать покупки',
        backBtn: 'На главную'
      },
      1688: {
        title: 'Агент 1688: Оптовые закупки из Китая',
        desc: "Получите доступ к реальным фабричным ценам Китая. Мы поможем найти поставщиков, провести переговоры и доставить оптовые заказы с 1688.com на ваш склад.",
        whyNeed: {
            title: "Почему 1688.com, а не Alibaba?",
            text: "В то время как Alibaba.com ориентирована на иностранных покупателей с более высокими наценками, 1688.com — это внутренний рынок для китайских производителей. Цены на 1688 значительно ниже, но платформа полностью на китайском языке, и продавцы обычно доставляют только по Китаю. HappyBox решает эту проблему. Мы выступаем вашим профессиональным агентом 1688: решаем языковой барьер, проводим местные платежи (Alipay/Bank Transfer) и организуем сложную B2B логистику."
        },
        howItWorks: {
            title: "Как мы упрощаем ваш B2B сорсинг",
            steps: [
                { title: "Поиск", desc: "Вы присылаете ссылки или фото товаров; мы находим лучших производителей." },
                { title: "Выкуп", desc: "Мы платим поставщикам с наших местных корпоративных счетов — вам не нужен китайский счет." },
                { title: "Хранение", desc: "Продавцы 1688 доставляют быстро; мы предоставляем бесплатный склад, чтобы временно хранить ваш груз." },
                { title: "Логистика", desc: "Мы предлагаем условия DDP, так что ваши товары прибудут с уже решенными вопросами таможни и налогов." }
            ]
        },
        proTip: {
            title: "Выкуп «Под Ключ» (Hands-Off)",
            text: "Не хотите разбираться в 1688 или технических деталях? Нет проблем. Просто пришлите нам фото или описание нужных товаров. Наша команда возьмет на себя весь цикл: от поиска самой надежной фабрики и переговоров о цене до проверки качества и доставки до двери. Вы фокусируетесь на продажах, мы — на цепочке поставок."
        },
        features: [
            { title: 'Минимальная комиссия', desc: 'Всего 2% от суммы заказа.' },
            { title: 'Прямой доступ к фабрикам', desc: 'Покупайте по тем же ценам, что и китайские компании.' },
            { title: 'Профессиональная переупаковка', desc: 'Если грузу нужна защита — деревянная обрешетка, паллеты или пупырчатая пленка — мы всё сделаем.' }
        ],
        beyond: {
            title: "Наши специализированные услуги по 1688",
            items: [
                { title: "Проверка поставщиков и фабрик", desc: "Не рискуйте капиталом. Мы проверяем надежность фабрики, бизнес-лицензию и реальную репутацию перед оплатой." },
                { title: "Переговоры по MOQ и цене", desc: "Считаете, что минимальный заказ (MOQ) слишком высок? Наша команда договаривается напрямую с менеджерами фабрик о снижении MOQ и лучших оптовых ценах." },
                { title: "Консолидация образцов", desc: "Тестируете разных поставщиков? Мы соберем образцы с 5-10 разных фабрик в одну посылку и отправим вам для проверки перед большим заказом." },
                { title: "Контроль качества (QC) Оптовых партий", desc: "Мы проводим выборочную или полную инспекцию партии на нашем складе. Проверяем количество, целостность упаковки и характеристики, чтобы избежать дорогих возвратов." }
            ]
        },
        startBtn: 'Начать закупку',
        backBtn: 'На главную'
      },
      inspection: {
        title: 'Профессиональный контроль качества и инспекция фабрик в Китае',
        desc: "Не полагайтесь на удачу. Наша сеть профессиональных инспекторов обеспечивает контроль качества на месте во всех провинциях Китая, гарантируя, что товар на 100% соответствует вашим требованиям.",
        whyNeed: {
            title: "Почему инспекция на месте критически важна?",
            text: "При оптовых закупках или заказе дорогих товаров простого фото на складе недостаточно. Вернуть брак после отправки из Китая почти невозможно. HappyBox — это ваши профессиональные «глаза и уши» на производстве, чтобы устранить проблемы у источника."
        },
        features: [
            { title: 'Всекитайская сеть', desc: 'Эксперты в Гуандуне, Чжэцзяне, Цзянсу, Фуцзяни и других регионах, готовые к выезду за 24-48 часов.' },
            { title: 'Детальные отчеты', desc: 'Полный PDF отчет в течение 24 часов: фото и видео высокого разрешения, список дефектов.' },
            { title: 'Профессиональное заключение', desc: 'Оценка «Pass/Fail» на основе ваших требований и международных стандартов AQL.' },
            { title: 'Классификация брака', desc: 'Мы разделяем дефекты на Критические, Значительные и Незначительные для принятия верных решений.' }
        ],
        beyond: {
            title: "Наши уровни контроля качества",
            items: [
                { title: "Аудит фабрики", desc: "До оплаты: Мы проверяем, что поставщик — реальный производитель, его лицензии и производственные мощности." },
                { title: "Проверка в процессе (DUPRO)", desc: "Инспекторы посещают фабрику, когда готово 20–30% заказа, чтобы выявить системный брак на ранней стадии." },
                { title: "Пред-отгрузочная инспекция (PSI)", desc: "Самый популярный выбор. Выборочная проверка по AQL, когда 100% товара произведено и 80% упаковано." },
                { title: "Контроль погрузки (CLS)", desc: "Мы следим за тем, чтобы загрузили правильное количество и товар не повредили при погрузке в контейнер." }
            ]
        },
        proTip: {
            title: "Управление качеством «Под ключ»",
            text: "Не знаете, что проверять? Предоставьте это нам. Просто пришлите фото или требования. Наши эксперты составят чек-лист и договорятся с менеджерами фабрики об инспекции, пока вы занимаетесь развитием бренда."
        },
        startBtn: 'Заказать проверку',
        backBtn: 'На главную'
      },
      warehousing: {
        title: 'Бесплатный склад в Китае и Консолидация',
        desc: "Перестаньте платить за доставку каждой отдельной посылки. Сэкономьте до 80% на международной доставке, объединив ваши заказы в одну надежную посылку.",
        whyNeed: {
            title: "Почему выбирают наш склад?",
            text: "С HappyBox вы получаете выделенное место на нашем складе в Гуандуне. Будь вы розничный покупатель или бизнес, вы можете собирать товары от десятков разных поставщиков в течение нескольких недель. Мы дождемся прибытия всего, оптимизируем упаковку и отправим вам одной партией."
        },
        features: [
            { title: 'Безлимитное бесплатное хранение', desc: 'Никаких лимитов по времени и скрытых комиссий. Все ваши покупки хранятся бесплатно, пока вы ждете остальные товары.' },
            { title: 'Бесплатная консолидация', desc: 'Мы объединяем любое количество заказов с Taobao, 1688 или других магазинов в одну посылку, чтобы кардинально снизить стоимость доставки.' },
            { title: 'Бесплатный прием посылок', desc: 'Неважно какой магазин или вес, мы принимаем все входящие посылки на наш склад абсолютно бесплатно.' },
            { title: 'Бесплатный фото и видео отчет', desc: 'Мы — ваши глаза в Китае. Мы делаем качественные фото или видео ваших товаров, чтобы вы проверили их до отправки из страны.' },
            { title: 'Оптимизация объемного веса', desc: 'Мы не просто кладем коробки в большую коробку. Мы убираем лишнюю заводскую упаковку (например, тяжелые коробки от обуви) и переупаковываем всё, чтобы сделать итоговую посылку максимально компактной.' },
            { title: 'Сложная обработка заказов', desc: 'Нужно разделить большой заказ на части или вернуть товар в магазин? Мы сделаем это бесплатно (вы платите только за доставку по Китаю).' },
            { title: 'Надежная упаковка и страховка', desc: 'Мы предоставляем качественную упаковку международного стандарта бесплатно. Для дорогих товаров предлагаем опциональную страховку.' },
            { title: 'Круглосуточное видеонаблюдение', desc: 'Ваши грузы в безопасности. Наш склад находится под наблюдением 24/7.' }
        ],
        proTip: {
            title: "Не хотите заниматься этим сами?",
            text: "Если вы не хотите отслеживать кучу трек-номеров и общаться с продавцами, предоставьте это нам. Наш сервис 'Полное сопровождение' включает выкуп, управление складом и доставку до двери. Вы просто говорите, что хотите, а мы делаем."
        },
        startBtn: 'Получить адрес склада',
        backBtn: 'На главную'
      }
    }
  }
};

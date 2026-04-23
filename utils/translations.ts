




export type Language = 'en' | 'ru';

export const translations = {
  en: {
    nav: {
      services: 'Services',
      reviews: 'Reviews',
      cost: 'Calculate',
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
        payment: 'Flexible payment options',
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
      trustedText: 'We are one of the **most trusted purchasing and forwarding services**, with our own warehouses in China and Hong Kong. We ensure your delivery gets straight to your doorstep.',
      text: 'Your peace of mind is our priority. We handle negotiations with suppliers, offer free photo reports, and consolidate your packages to minimize shipping costs. Whether you are ordering a single pair of sneakers or a commercial batch of electronics - we remove language barriers and customs headaches, making cross-border shopping as easy as buying locally. No bots, no automated replies — just real experts helping you navigate the world\'s biggest marketplace.',
      imageAlt: 'HappyBox Logistics - Fast & Reliable Shipping from China'
    },
    services: {
      title: 'Our Services',
      amazonTitle: 'Amazon Logistics',
      items: {}, 
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
          question: 'How can I make a payment?',
          answer: 'We accept Bank Transfers (USD) to our Hong Kong or US companies, AliPay, WeChatPay, USDT, RUB and UAH. You can pay securely before shipment.'
        },
        {
          question: 'What is DDP shipping?',
          answer: 'DDP stands for "Delivered Duty Paid". It means we handle all customs clearance and pay all import taxes. You just wait for the parcel at your door.'
        }
      ]
    },
    quickAccess: {
      taobao: 'Buy from Taobao with joy',
      1688: 'Wholesale sourcing direct from factories',
      weidian: 'Exclusive streetwear & indie brands',
      inspection: 'Quality check before international shipping',
      warehousing: 'Free storage and consolidation',
      pinduoduo: 'Group buying deals & discounts',
      xianyu: 'Second-hand & Vintage market',
      shoppingNote: 'Need a different service related to China? Contact us to discuss. We are not limited to just these platforms.',
      destinationsNote: 'Didn\'t find your destination? Contact us for details. We ship worldwide.'
    },
    servicePages: {
      xianyu: {
        title: 'Xianyu Agent: China\'s Largest Second-Hand Market',
        desc: "Buy vintage luxury, rare collectibles, and slightly used tech at a fraction of the price. Xianyu (Idle Fish) is Alibaba's flea market where you can find amazing deals on everything from designer bags to gaming consoles.",
        whyNeed: {
            title: "Why use an agent for Xianyu?",
            text: "Sellers on Xianyu are individuals, not professional shops. They typically do not speak English and absolutely do not ship internationally. Furthermore, buying used items carries risk. HappyBox acts as your safety net: we negotiate prices, handle the payment, and most importantly, we physically inspect the item's condition before it leaves China."
        },
        howItWorks: {
            title: "How to buy from Xianyu",
            steps: [
                { title: "Find Treasure", desc: "Browse the Xianyu app for unique finds." },
                { title: "We Negotiate", desc: "Send us the link. We often can negotiate the price down by 10-20%." },
                { title: "Video Inspection", desc: "For expensive items, we request a video from the seller before buying." },
                { title: "Final QC", desc: "When it arrives at our warehouse, we check it again against the description." }
            ]
        },
        features: [
            { title: 'Bargaining Service', desc: 'We communicate with the seller to get you the best possible price.' },
            { title: 'Risk Management', desc: 'We check the seller\'s "Sesame Credit" rating to ensure they are trustworthy.' },
            { title: 'Detailed Photo Report', desc: 'Since it is a used item, we provide extra detailed photos of any wear and tear.' }
        ],
        proTip: {
            title: "Expert Advice for Xianyu",
            text: "• **Seller Rating:** Look for Excellent Sesame Credit. This is the most reliable indicator of a trustworthy seller.\n\n• **Video Confirmation:** Since items are used, always ask the seller for a current video of the product before purchasing.\n\n• **No Returns:** Be aware that most sellers on Xianyu do not accept returns. Detailed inspection is key.\n\n• **Bargaining:** It is common to negotiate! Prices can often be lowered by 10-20%.\n\n• **No Returns Policy:** Remember that most Xianyu sellers do not accept returns unless the item is fake or significantly different from the description. Our inspection service is your best protection."
        },
        beyond: {
            title: "Mix New & Old",
            items: [
                { id: 'poizon', title: "Poizon", desc: "Combine vintage finds with brand new sneakers." },
                { id: 'taobao', title: "Taobao", desc: "Add new accessories to your order." },
                { id: '1688', title: "1688.com", desc: "For bulk orders." },
                { id: 'pinduoduo', title: "Pinduoduo", desc: "For cheap gadgets." },
                { title: "Consolidation", desc: "We combine your Xianyu treasures with regular Taobao orders into one shipment." }
            ]
        },
        startBtn: 'Start Hunting',
        backBtn: 'Back to Home'
      },
      weidian: {
        title: 'Weidian Agent: Exclusive Streetwear & Indie Brands',
        desc: "Discover unique items from independent designers and exclusive streetwear sellers. Weidian is the go-to platform for niche fashion, limited drops, and high-quality replicas that you can't find on Taobao.",
        whyNeed: {
            title: "Why shop on Weidian?",
            text: "Weidian is a mobile-first platform popular with independent sellers and streetwear enthusiasts. Many exclusive items and high-tier replicas are only available here. However, the app is purely in Chinese and sellers rarely deal with international buyers. HappyBox gives you full access to this exclusive market."
        },
        howItWorks: {
            title: "How to buy from Weidian",
            steps: [
                { title: "Browse Weidian", desc: "Use the Weidian app or mobile links to find products." },
                { title: "Send Link", desc: "Share the product link with us. We verify the seller's reputation." },
                { title: "We Purchase", desc: "We handle the payment via WeChat Pay or Alipay." },
                { title: "QC & Ship", desc: "We receive the item, inspect quality, and ship it to you." }
            ]
        },
        features: [
            { title: 'Access to Exclusive Sellers', desc: 'Buy from sellers who only operate on Weidian.' },
            { title: 'Detailed QC Photos', desc: 'We provide high-res photos so you can check the quality of materials and stitching.' },
            { title: 'Secure Payment', desc: 'We protect your money. If the seller doesn\'t ship, we get your refund.' }
        ],
        proTip: {
            title: "Check the Return Policy",
            text: "Many Weidian sellers (especially for limited items) do not accept returns. Always ask us to confirm the return policy with the seller before purchasing."
        },
        beyond: {
            title: "Complete Your Look",
            items: [
                { id: 'poizon', title: "Poizon", desc: "Match with authentic sneakers." },
                { id: 'taobao', title: "Taobao", desc: "Basics and accessories." },
                { id: '1688', title: "1688.com", desc: "Bulk basics." },
                { id: 'xianyu', title: "Xianyu", desc: "Vintage finds." },
                { title: "Consolidation", desc: "Combine your Weidian finds with other orders to save on shipping." }
            ]
        },
        startBtn: 'Start Shopping Weidian',
        backBtn: 'Back to Home'
      },
      taobao: {
        title: 'Taobao Agent Service: Shop from China and Ship Worldwide',
        desc: "Shop on Taobao, 1688, or Tmall like a local. We handle the purchasing, inspection, and international shipping so you can enjoy the best prices from China without language barriers, blocked accounts, or overpriced shipping. HappyBox buys, inspects, consolidates, and ships your orders worldwide — hassle-free.",
        whyNeed: {
            title: "Why Most People Fail Buying from China, and How We Fix It",
            problems: [
                "Buying from Taobao is nearly impossible without a Chinese shipping address or local payment methods.",
                "Most sellers don’t speak English and rarely ship internationally.",
                "Risk of receiving wrong items, poor quality, or damaged goods."
            ],
            solutionTitle: "How HappyBox Fixes It",
            solution: "HappyBox acts as your professional Taobao Agent: we bridge the language gap, provide secure payment methods, perform Quality Control (QC), and offer a dedicated free warehouse in China to receive, consolidate, and repack all your goods."
        },
        howItWorks: {
            title: "How It Works: 4 Simple Steps",
            steps: [
                { title: "Find Your Items", desc: "Browse Taobao.com or the app. Copy the links of products you want." },
                { title: "Submit Order", desc: "Send us the links. We verify price and availability." },
                { title: "We Buy & Inspect", desc: "We purchase the items and perform a free quality check. If item arrives broken or wrong — we return it." },
                { title: "Consolidate & Ship", desc: "We store for free, combine into one package, and ship worldwide with premium repacking." }
            ]
        },
        proTip: {
            title: "Expert Advice for Taobao",
            text: "• **Tmall (Red Icon):** When searching on Taobao and see red icon - it is TMall. It features official brands/dealers with near-zero defect risk. Regular Taobao is cheaper but some brands maybe not original.\n\n• **Live Photos:** Always look for the camera icon in reviews to see Live Photos instead of studio renders.\n\n• **Seller History:** Prioritize sellers active for 5–10 years; they value their reputation and history on the platform.\n\n• **Consolidation:** Use our warehouse for Consolidation. Buy small items from 10 different stores, and we will pack them into ONE box to save you up to 60% on shipping.\n\n**Let us do the searching!**\nStruggling to find that perfect item on Taobao? Don’t waste your time scrolling through endless listings. Just send us a photo or a quick description, and our experts will track down the best quality from sellers we actually trust."
        },
        features: [
            { title: 'No Chinese Phone Number Required', desc: 'You don’t need to deal with Taobao’s complex registration or blocked accounts.' },
            { title: 'Free Quality Check (QC)', desc: 'We are your eyes in China. We check for defects, wrong sizes, or incorrect colors before the item leaves the country.' },
            { title: 'Free Consolidation & Storage', desc: 'Shop from different sellers over several days. We store your items for free and pack them into ONE box to save you up to 60% on shipping.' },
            { title: 'Expert Repacking', desc: 'International shipping can be rough. We use high-quality materials to ensure your items arrive in perfect condition.' },
            { title: 'Flexible Payment Options', desc: 'Pay for your orders via Bank Transfer, WeChat pay, AliPay, Crypto safely and easily.' },
            { title: 'Transparent Tracking', desc: 'Watch your parcel\'s journey from China to your door. We provide a reliable tracking number so you always know where your goods are.' }
        ],
        beyond: {
            title: "Beyond Taobao: 1688, Poizon, and More",
            items: [
                { id: '1688', title: "1688.com", desc: "Best for wholesale prices and sourcing directly from factories." },
                { id: 'poizon', title: "Poizon (Dewu)", desc: "Authentic sneakers and luxury goods." },
                { id: 'tmall', title: "Tmall", desc: "High-quality brands and official flagship stores." },
                { id: 'xianyu', title: "Xianyu", desc: "Second-hand luxury and vintage finds." },
                { title: "Offline Stores", desc: "We provide sourcing services for physical markets in China. Whether you need furniture from Foshan or electronics from the markets of Shenzhen, our team can handle offline purchases for you within Guandong province and Hong Kong." }
            ]
        },
        shippingInfo: {
            title: "Hassle-Free DDP Shipping from China to USA, Europe, Canada and more",
            text: "We specialize in **DDP (Delivered Duty Paid)** logistics. This means **we handle all customs clearance and pay import duties for you**. Whether you are shipping to New York, Berlin, or Dubai, the shipping price you pay is final. No surprise bills from customs, no paperwork for you. Just wait for the doorbell."
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
            title: "Expert Advice for 1688",
            text: "• **Rating 5–4** is the standard for reliability. Sellers with ratings below 4.0 are risky and often slow.\n\n• **Verify real weight/dimensions:** listings often have inaccurate data. Ask before paying to avoid shipping surprises.\n\n• **Electronics:** Check electronics for 220V compatibility and specify your required plug type.\n\n• **Packaging:** Specify individual packaging for items like clothes, notebooks, plush toys, etc. otherwise they may arrive in a bulk bag.\n\n• **Fragile Items:** For fragile items, request a wood crate for safer transit within China.\n\n• **Stock numbers** on 1688 are often inaccurate. Always send us the link first so our agent can verify the REAL availability before you pay.\n\n**Full Hands-Off Sourcing:**\nDon’t want to navigate 1688 or deal with technical specs? No problem. Simply send us a photo or a description of the products you need. Our team will handle the entire cycle: from finding the most reliable factory and negotiating the best price to quality inspection and door-to-door delivery. You focus on your sales; we handle the entire supply chain."
        },
        features: [
            { title: 'Lowest Purchasing Commission', desc: 'Only 2% of the order amount.' },
            { title: 'Direct Factory Access', desc: 'Buy at the same prices Chinese domestic companies pay.' },
            { title: 'Professional Repacking', desc: 'If your orders need extra protection — such as wooden crates, reinforced pallets, or bubble wrap — we’ve got you covered.' }
        ],
        beyond: {
            title: "Beyond 1688: Retail & Brands",
            items: [
                { id: 'taobao', title: "Taobao", desc: "For single items and personal shopping." },
                { id: 'tmall', title: "Tmall", desc: "Official brands and flagship stores." },
                { id: 'poizon', title: "Poizon", desc: "Authentic sneakers and streetwear." },
                { id: 'pinduoduo', title: "Pinduoduo", desc: "Group buying deals & discounts." },
                { title: "Consolidation", desc: "We combine your wholesale 1688 orders with personal shopping from other platforms." }
            ]
        },
        startBtn: 'Start Sourcing',
        backBtn: 'Back to Home'
      },
      poizon: {
        title: 'Poizon (Dewu) Agent Service: Buy Authentic Sneakers & Luxury from China',
        desc: "Shop on Poizon (Dewu) – China's top marketplace for genuine branded items. Access originals at prices 20-50% lower than global retail. 0% Service Fee.",
        whyNeed: {
            title: "What Makes Buying Directly Difficult",
            problems: [
                "China-Only Access: The app is in Chinese, requires a local ID, and payment methods like Alipay/WeChat are difficult for foreigners to access.",
                "No International Shipping: Sellers do not export. Without an agent, you face language barriers and shipping blocks.",
                "Hidden Fees Elsewhere: Many agents charge 15-50% hidden markups on currency exchange rates."
            ],
            solutionTitle: "How HappyBox Fixes It",
            solution: "HappyBox acts as your professional bridge. We handle the language gap, use secure local payments, and leverage Poizon's rigorous authenticity system. We use transparent currency rates close to market spot rates (no hidden 30% markups) and ensure all items come with the famous 'Turquoise Box' and Certificate."
        },
        howItWorks: {
            title: "How It Works (5 Steps)",
            steps: [
                { title: "Download & Register", desc: "Download Dewu (Poizon). Register with your international phone number." },
                { title: "Find Your Items", desc: "Search using English keywords. Note: Prices vary by size." },
                { title: "Submit Order", desc: "Share the link with us. We verify price and delivery speed." },
                { title: "We Buy & Inspect", desc: "We purchase. Poizon performs Legit Check. If it passes, it comes to us." },
                { title: "Consolidate & Ship", desc: "We repack, store for free if needed, and ship to your door." }
            ]
        },
        proTip: {
            title: "Expert Advice for Poizon",
            text: "• **Prices vary by size** because it's a stock-market model. Check adjacent sizes to save up to 30%.\n\n• **95 New** means USED/Pre-owned (95% condition). Damaged Box means BRAND NEW with a dented box.\n\n• **Verification system:** Poizon inspects every item, which significantly reduces counterfeit risks.\n\n• **Keep the blue tag and NFC certificate!** They are essential for proving authenticity and resale value.\n\n• **Use the price chart** to buy during dips. Never remove the blue tag until you are 100% sure about the item.\n\n**Confused by the app buttons?**\nThe **Turquoise Button** usually means 'Ship in 48h' (Instant), while the **Black Button** means standard shipping. Avoid the **Gray Button** with '95' text unless you want used items. If you can't find what you need, just send us a photo!"
        },
        features: [
            { title: '100% Authenticity Guarantee', desc: 'Every item passes Poizon’s lab verification. If it\'s fake, they refund us immediately. You get the Certificate and Blue Tag.' },
            { title: 'Double Box Protection', desc: 'We ship all sneakers in reinforced double boxes to ensure the original brand box arrives in pristine condition.' },
            { title: 'Fair Pricing', desc: 'We don\'t hide fees in the exchange rate. You pay the real price.' },
            { title: 'Free Quality Check (QC)', desc: 'We send you photos of the item, the certificate, and the tag before international shipping.' }
        ],
        shippingInfo: {
            title: "Hassle-Free DDP Shipping from China to USA, Europe, Canada and more",
            text: "We specialize in **DDP (Delivered Duty Paid)** logistics. This means **we handle all customs clearance and pay import duties for you**. Whether you are shipping to New York, Berlin, or Dubai, the shipping price you pay is final. No surprise bills from customs, no paperwork for you. Just wait for the doorbell."
        },
        beyond: {
            title: "More Than Just Poizon",
            items: [
                { id: 'taobao', title: "Taobao", desc: "Everyday fashion & accessories." },
                { id: 'tmall', title: "Tmall", desc: "Official tech & cosmetics." },
                { id: '1688', title: "1688.com", desc: "Wholesale & bulk orders." },
                { id: 'pinduoduo', title: "Pinduoduo", desc: "Unbeatable deals & group buying." },
                { title: "The Magic of Consolidation", desc: "Poizon sneakers + Taobao clothes + Pinduoduo gadgets = One Parcel. We store for free and combine shipments." }
            ]
        },
        startBtn: 'Buy from Poizon',
        backBtn: 'Back to Home'
      },
      tmall: {
        title: 'Tmall Global Agent: Official Brands & Flagship Stores',
        desc: "Shop from official brand flagship stores on Tmall.com with 100% confidence. Tmall is the premium B2C platform of Alibaba, hosting major international and Chinese brands. HappyBox helps you buy and ship Tmall products worldwide.",
        whyNeed: {
            title: "Why Tmall instead of Taobao?",
            text: "While Taobao is C2C (Consumer to Consumer), Tmall is B2C (Business to Consumer). Tmall sellers are verified businesses or official brand representatives. This means: 100% Authentic products, higher service standards, and often better return policies. It is the best place to buy electronics, cosmetics, and branded fashion."
        },
        howItWorks: {
            title: "Shopping on Tmall with HappyBox",
            steps: [
                { title: "Browse Tmall", desc: "Look for the red Tmall logo on product listings." },
                { title: "Send Link", desc: "Paste the product URL to us." },
                { title: "Purchase", desc: "We buy directly from the official store." },
                { title: "Delivery", desc: "We consolidate with your other items and ship." }
            ]
        },
        features: [
            { title: 'Official Flagship Stores', desc: 'Access official stores of Apple, Nike, Dyson, Uniqlo, and thousands more.' },
            { title: 'Quality Assurance', desc: 'Tmall has stricter quality control than regular Taobao.' },
            { title: '0% Purchasing Fee', desc: 'We do not charge a commission for Tmall purchases.' }
        ],
        proTip: {
            title: "Look for the Red Icon",
            text: "When searching on Taobao/Tmall, look for the red 'Cat' icon. This indicates the seller is a Tmall merchant with a verified business license and a deposit paid to Alibaba."
        },
        beyond: {
            title: "Beyond Tmall",
            items: [
                { id: 'taobao', title: "Taobao", desc: "Find cheaper alternatives and consumer goods." },
                { id: 'poizon', title: "Poizon", desc: "Best for limited edition sneakers and luxury street fashion." },
                { id: '1688', title: "1688.com", desc: "Wholesale prices for bulk orders." },
                { id: 'pinduoduo', title: "Pinduoduo", desc: "Incredible discounts on gadgets and home goods." },
                { title: "Consolidation Logic", desc: "Combine your premium Tmall electronics with cheap Taobao accessories in one parcel." }
            ]
        },
        startBtn: 'Start Shopping Tmall',
        backBtn: 'Back to Home'
      },
      pinduoduo: {
        title: 'Pinduoduo Agent: Group Buying & Unbeatable Prices',
        desc: "Unlock the lowest prices in China. Pinduoduo is famous for its group buying model and incredible discounts on everything from gadgets to home goods. We make buying from Pinduoduo easy and secure.",
        whyNeed: {
            title: "Why Pinduoduo?",
            text: "Pinduoduo often offers lower prices than Taobao for the exact same items. The catch? The app is only in Chinese and the interface can be overwhelming with its gamified discounts. HappyBox acts as your agent: we navigate the app, secure the group-buy price, and handle shipping."
        },
        howItWorks: {
            title: "How to buy from Pinduoduo",
            steps: [
                { title: "Browse App", desc: "Download Pinduoduo (拼多多). Find items you like." },
                { title: "Share Link", desc: "Click the share button and send us the product link." },
                { title: "We Buy", desc: "We purchase using the 'Group Buy' price for maximum savings." },
                { title: "Delivery", desc: "We receive, inspect, and ship it to you." }
            ]
        },
        features: [
            { title: 'Best Prices in China', desc: 'Known for subsidized pricing on everyday items.' },
            { title: '0% Commission', desc: 'We charge no service fee for standard Pinduoduo orders.' },
            { title: 'Consolidation', desc: 'Perfect for adding small, cheap items to your main parcel.' }
        ],
        proTip: {
            title: "Don't ignore the timer",
            text: "Pinduoduo deals are often time-sensitive. If you see a great price, send it to us quickly so we can lock it in before the group-buy window closes."
        },
        beyond: {
            title: "Combine & Save",
            items: [
                { id: 'taobao', title: "Taobao", desc: "Wider variety of fashion." },
                { id: '1688', title: "1688.com", desc: "Bulk orders." },
                { id: 'poizon', title: "Poizon", desc: "Authentic luxury & sneakers." },
                { id: 'tmall', title: "Tmall", desc: "Premium brands." },
                { title: "Smart Shopping", desc: "Use Pinduoduo for cheap gadgets and home essentials, and Taobao for fashion. We ship them together." }
            ]
        },
        startBtn: 'Start Pinduoduo',
        backBtn: 'Back to Home'
      },
      inspection: {
        title: 'Professional Quality Control & Factory Inspection in China',
        desc: "Don't rely on luck. Our network of professional inspectors provides on-site quality control in all provinces of China, ensuring that the goods meet your requirements 100%.",
        whyNeed: {
            title: "Why is on-site inspection critical?",
            text: "When buying in bulk or ordering expensive items, a simple photo at the warehouse is not enough. Returning defective goods after shipping from China is almost impossible. HappyBox is your professional 'eyes and ears' on the production line to eliminate problems at the source."
        },
        features: [
            { title: 'China-Wide Network', desc: 'Experts in Guangdong, Zhejiang, Jiangsu, Fujian, and other regions ready to depart within 24-48 hours.' },
            { title: 'Detailed Reports', desc: 'Full PDF report within 24 hours: high-resolution photos and videos, list of defects.' },
            { title: 'Professional Conclusion', desc: 'Pass/Fail assessment based on your requirements and international AQL standards.' },
            { title: 'Defect Classification', desc: 'We categorize defects into Critical, Major, and Minor for correct decision-making.' }
        ],
        beyond: {
            title: "Our Quality Control Levels",
            items: [
                { title: "Factory Audit", desc: "Before payment: We verify that the supplier is a real manufacturer, check their licenses and production capacity." },
                { title: "During Production Check (DUPRO)", desc: "Inspectors visit the factory when 20–30% of the order is ready to identify systemic defects at an early stage." },
                { title: "Pre-Shipment Inspection (PSI)", desc: "The most popular choice. Random inspection according to AQL when 100% of the goods are produced and 80% packed." },
                { title: "Container Loading Supervision (CLS)", desc: "We monitor that the correct quantity is loaded and the goods are not damaged during loading into the container." }
            ]
        },
        proTip: {
            title: "Turnkey Quality Management",
            text: "Don't know what to check? Leave it to us. Just send a photo or requirements. Our experts will create a checklist and arrange an inspection with the factory managers while you focus on brand development."
        },
        startBtn: 'Order Inspection',
        backBtn: 'Back to Home'
      },
      warehousing: {
        title: 'Free Warehouse in China & Consolidation',
        desc: "Stop paying for shipping each individual package. Save up to 80% on international shipping by combining your orders into one secure parcel.",
        whyNeed: {
            title: "Why choose our warehouse?",
            text: "With HappyBox, you get a dedicated space at our warehouse in Guangdong. Whether you are a retail buyer or a business, you can collect goods from dozens of different suppliers over several weeks. We will wait for everything to arrive, optimize the packaging, and ship it to you in one batch."
        },
        features: [
            { title: 'Unlimited Free Storage', desc: 'No time limits and hidden fees. All your purchases are stored for free while you wait for the rest of the goods.' },
            { title: 'Free Consolidation', desc: 'We combine any number of orders from Taobao, 1688, or other stores into one parcel to drastically reduce shipping costs.' },
            { title: 'Free Parcel Reception', desc: 'No matter the store or weight, we accept all incoming parcels at our warehouse absolutely free.' },
            { title: 'Free Photo & Video Report', desc: 'We are your eyes in China. We take high-quality photos or videos of your goods so you can check them before shipping out of the country.' },
            { title: 'Volumetric Weight Optimization', desc: 'We don’t just put boxes in a big box. We remove excess factory packaging (e.g., heavy shoe boxes) and repack everything to make the final parcel as compact as possible.' },
            { title: 'Complex Order Processing', desc: 'Need to split a large order into parts or return goods to the store? We will do it for free (you only pay for shipping within China).' },
            { title: 'Secure Packaging & Insurance', desc: 'We provide high-quality international standard packaging for free. For expensive items, we offer optional insurance.' },
            { title: '24/7 Video Surveillance', desc: 'Your cargo is safe. Our warehouse is under surveillance 24/7.' }
        ],
        proTip: {
            title: "Don't want to handle this yourself?",
            text: "If you don't want to track a bunch of tracking numbers and communicate with sellers, leave it to us. Our 'Full Support' service includes purchasing, warehouse management, and door-to-door delivery. You just say what you want, and we do it."
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
      cost: 'Калькулятор',
      tracking: 'Отследить',
      contacts: 'Контакты',
      faq: 'FAQ'
    },
    hero: {
      title: 'Быстрая и надежная доставка из Китая в Европу, США, ОАЭ и Россию.',
      minWeightBadge: 'Без минимального веса — доставка от 0.1 кг',
      features: {
        operating: 'Работаем с 2016 года',
        warehouse: 'Бесплатное хранение и консолидация',
        buy: 'Выкуп товаров с любых маркетплейсов',
        packaging: 'Бережная и надежная упаковка',
        payment: 'Разнообразные варианты оплаты',
        support: 'Поддержка 24/7',
        worldwide: 'Доставка по всему миру',
        appreciate: 'Ценим каждого клиента'
      },
      stats: 'клиентов по всему миру'
    },
    deliveryPath: {
      title: 'Путь вашей посылки',
      steps: [
        { title: 'Заказ', desc: 'Оформление и выкуп' },
        { title: 'Склад', desc: 'Приемка и проверка' },
        { title: 'Обработка', desc: 'Объединение и упаковка' },
        { title: 'Таможня', desc: 'Оформление и пошлины' },
        { title: 'Доставка', desc: 'Прямо до вашей двери' }
      ]
    },
    guides: {
      title: 'Экспертные советы',
      subtitle: 'Секреты выгодного шопинга в Китае от профессионалов',
      cards: [
        { 
          id: '1688', 
          title: '1688.com', 
          desc: 'Закупки напрямую с фабрик по реальным ценам.',
          steps: [
            'Рейтинг продавца 4-5 звезд — стандарт надежности. Ниже рискованно.',
            'Вес и габариты в карточке часто неверны. Уточняйте перед оплатой, чтобы избежать сюрпризов.',
            'Для электроники всегда проверяйте тип вилки и напряжение 220V.',
            'Просите индивидуальную упаковку для одежды и мелочей, иначе пришлют "насыпью".',
            'Для хрупкого обязательно заказывайте обрешетку.'
          ],
          tip: 'Остатки на 1688 часто неактуальны. Пришлите нам ссылку до оплаты, чтобы менеджер проверил реальное наличие.',
          compare: { label: 'Электроника', local: '15000₽', china: '4500₽' }
        },
        { 
          id: 'poizon', 
          title: 'Poizon (Dewu)', 
          desc: 'Оригинальные бренды на 30-50% дешевле чем в местных магазинах.',
          steps: [
            'Цена зависит от размера. Проверьте соседние размеры, можно сэкономить до 30%.',
            '"95 New" — это б/у в отличном состоянии. "Damaged Box" — новый товар с мятой коробкой.',
            'Poizon проверяет каждую вещь на оригинальность. Риск подделки сведен к минимуму.',
            'Не снимайте синюю клипсу и сертификат! Без них претензии не принимаются.'
          ],
          tip: 'Следите за графиком цен, покупайте на спаде. И никогда не срывайте пломбу до полной проверки.',
          compare: { label: 'Jordan 4 Retro', local: '48000₽', china: '29000₽' }
        },
        { 
          id: 'taobao', 
          title: 'Taobao & Tmall', 
          desc: 'Лучшие розничные предложения с реальными отзывами.',
          steps: [
            'Tmall (красный значок) — официальные магазины брендов. Риск брака минимален.',
            'Смотрите отзывы с фото (значок камеры), чтобы видеть реальный товар, а не рендеры.',
            'Выбирайте продавцов, работающих 5-10 лет. Они дорожат репутацией.'
          ],
          tip: 'Используйте нашу консолидацию. Купите мелочи в 10 магазинах, мы соберем их в одну коробку и отправим дешевле.',
          compare: { label: 'Декор', local: '8500₽', china: '1200₽' }
        },
        { 
          id: 'xianyu', 
          title: 'Xianyu', 
          desc: 'Вторичный рынок: винтаж и техника за копейки.',
          steps: [
            'Рейтинг "Sesame Credit" — главный показатель честности продавца. Ищите "Excellent".',
            'Всегда просите свежее видео товара перед покупкой.',
            'Возвратов обычно нет. Внимательно проверяйте фото на дефекты.',
            'Торгуйтесь! Цену часто можно сбить на 10-20%.'
          ],
          tip: 'Идеально для поиска лимитированных коллекций и винтажных сумок.',
          compare: { label: 'Sony PS5', local: '60000₽', china: '35000₽' }
        }
      ],
      close: 'Закрыть',
      buyForMe: "Сложно? Мы выкупим товары за вас."
    },
    quiz: {
      cta: 'Не знаете какой маршрут выбрать?',
      button: 'Пройти квиз за 30с',
      title: 'Подберем идеальный маршрут',
      back: 'Назад',
      questions: {
        country: 'Куда отправляем?',
        category: 'Какая категория товаров?',
        weight: 'Примерный вес?',
        priority: 'Что важнее?'
      },
      options: {
        us_ca: '🇺🇸 США / Канада',
        eu: '🇪🇺 Европа',
        uae: '🇦🇪 ОАЭ (Дубай)',
        au: '🇦🇺 Австралия',
        clothing: 'Одежда и Обувь',
        electronics: 'Электроника',
        cosmetics: 'Косметика',
        furniture: 'Мебель / Тяжелое',
        other: 'Другое',
        under30: 'До 30 кг',
        over30: 'Более 30 кг',
        fast: 'Быстрая доставка',
        cheap: 'Минимальная цена'
      },
      results: {
        title: 'Рекомендуем:',
        air: {
          title: 'Авиа Экспресс',
          desc: 'Авиадоставка — единственный надежный вариант для такого веса. Быстро и с трекингом.',
          desc_us_light: 'Море в США/Канаду доступно только от 30кг. Для вашего веса подходит только Авиа.',
          desc_uae_light: 'Автодоставка в ОАЭ обычно от 30кг. Для небольших посылок используем Авиа.',
          desc_speed: 'Если сроки горят, Авиа Экспресс — лучший выбор. Стабильно и быстро.'
        },
        sea: {
          title: 'Морская доставка',
          desc: 'Лучший способ сэкономить на тяжелых грузах. Идеально для мебели и коммерческих партий.'
        },
        rail: {
          title: 'ЖД / Авто',
          desc: 'Для тяжелых грузов в Европу есть экономичные наземные маршруты.'
        },
        truck: {
          title: 'Автодоставка (Карго)',
          desc: 'Оптимальный баланс: дешевле авиа, быстрее моря. Доставка фурой до вашего города.'
        }
      },
      contactBtn: 'Обсудить маршрут'
    },
    about: {
      title: 'Уже более 9 лет мы обеспечиваем надежную доставку и выкуп товаров из Китая и Гонконга.',
      trustedText: 'Мы — один из **самых надежных сервисов по выкупу и доставке**, с собственными складами в Китае и Гонконге. Гарантируем доставку прямо до вашей двери.',
      text: 'Ваше спокойствие — наш приоритет. Мы берем на себя переговоры с поставщиками, предоставляем бесплатные фотоотчеты и консолидируем ваши посылки для минимизации стоимости доставки. Заказываете ли вы одну пару кроссовок или коммерческую партию электроники — мы устраняем языковые барьеры и таможенные сложности, делая международный шопинг таким же простым, как покупки в местном магазине. Никаких ботов и автоответчиков — только реальные эксперты, помогающие вам ориентироваться на крупнейшем рынке мира.',
      imageAlt: 'HappyBox Logistics - Быстрая и надежная доставка из Китая'
    },
    services: {
      title: 'Наши Услуги',
      amazonTitle: 'Логистика Amazon',
      items: {},
      amazonItems: {
        fba: { title: 'Услуги Преп-центра', text: 'Клеим FNSKU, упаковываем в полибэги, собираем наборы (бандлы) по стандартам Amazon.' },
        direct: { title: 'Прямая доставка на FBA', text: 'Отправляем из Китая сразу на склады Amazon в США и Европе, минуя промежуточные склады.' },
        ddp: { title: 'DDP Доставка (Все включено)', text: 'Важно для Amazon: мы сами платим пошлины. Груз приходит на склад FBA уже очищенным.' },
        inspection: { title: 'Проверка качества', text: 'Инспектируем товары перед отправкой, чтобы избежать возвратов и блокировок аккаунта.' },
        storage: { title: 'Хранение и Консолидация', text: 'Собираем товары от разных поставщиков на нашем складе перед общей отправкой.' },
        samples: { title: 'Сбор образцов', text: 'Соберем образцы с разных фабрик в одну коробку и отправим вам на проверку.' }
      }
    },
    reviews: {
      title: 'Более тысячи клиентов доверяют нам ежемесячно — вот их отзывы:',
      data: [
        {
          name: "Анастасия",
          location: "Дубай, ОАЭ",
          text: "Живя в Дубае, сложно найти специфический декор. Заказала чашки Hermes. HappyBox упаковали идеально! Ни одного скола. Консолидация — просто спасение.",
          image: "https://i.ibb.co/RGjpLh3Z/Happy-Box-review8.webp"
        },
        {
          name: "Джейсон Миллер",
          location: "Лос-Анджелес, США",
          text: "Заказал электронную ударную установку. Огромная коробка, но цена доставки приятно удивила. Все приехало целым и работает. Отличный сервис для габаритных вещей!",
          image: "https://i.ibb.co/Q3G8jNRR/Happy-Box-review9.webp"
        },
        {
          name: "Елена Петрова",
          location: "Берлин, Германия",
          text: "Получила туфли Gucci! Переживала за коробку, но они упаковали в двойной картон. Оригинал 100%, доехали в Берлин в идеале.",
          image: "https://i.ibb.co/0y8mfkkB/Happy-Box-review12.webp"
        },
        {
          name: "Майкл Чен",
          location: "Торонто, Канада",
          text: "Искал электрофойл везде. Команда HappyBox помогла найти поставщика на 1688 намного дешевле, чем я сам находил. Сэкономил больше $1000!",
          image: "https://i.ibb.co/whXdYLzr/Happy-Box-review6.webp"
        },
        {
          name: "Ольга С.",
          location: "Рига, Латвия",
          text: "Так рада, что вы отправляете еду! Заказала большую партию детского печенья и снеков. Все свежее и хорошо упаковано. Спасибо!",
          image: "https://i.ibb.co/YFwfYJht/Happy-Box-review11.webp"
        },
        {
          name: "Джессика Миллер",
          location: "Лондон, Великобритания",
          text: "Быстро, надежно и честно. Пользуюсь уже 2 года для личных покупок. Консолидация лучшая — экономлю около 40% на доставке по сравнению с прямой отправкой.",
          image: "https://i.ibb.co/4n8HyptV/Happy-Box-review3.webp"
        },
        {
          name: "Полина К.",
          location: "Варшава, Польша",
          text: "Заказала фен Dyson. Оригинал! Работает с нашим напряжением. Команда проверила серийный номер перед отправкой. Рекомендую.",
          image: "https://i.ibb.co/6JmvY3Kp/Happy-Box-review7.webp"
        },
        {
          name: "Эмма Дэвис",
          location: "Нью-Йорк, США",
          text: "Эти милые подушки для стульев просто прелесть! Выглядят точно как на фото. Сервис 'выкуп за меня' сделал покупку на Taobao такой простой.",
          image: "https://i.ibb.co/6cbcytdJ/Happy-Box-review13.webp"
        },
        {
          name: "Сара Вебер",
          location: "Мюнхен, Германия",
          text: "Очень профессиональная логистика. Трекинг был точным до самой двери. Цены на тяжелые грузы очень конкурентные. Буду пользоваться снова.",
          image: "https://i.ibb.co/4RF5Hdbw/Happy-Box-review10.webp"
        },
        {
          name: "Софи Мартин",
          location: "Париж, Франция",
          text: "Моя сумка Hermes приехала! Не верится, что взяла по такой цене. Фото с проверки успокоили меня перед отправкой. Она прекрасна.",
          image: "https://i.ibb.co/ZRC3B1k5/Happy-Box-review.webp"
        },
        {
          name: "Мария Гонсалес",
          location: "Мадрид, Испания",
          text: "Эти дизайнерские ботинки потрясающие. Кожа отличная. HappyBox проверили размер, так что подошли идеально. Доставка в Мадрид была быстрой.",
          image: "https://i.ibb.co/BKrDsfWw/Happy-Box-review2.webp"
        },
        {
          name: "Даниэль Ким",
          location: "Ванкувер, Канада",
          text: "Надежный сервис. Была небольшая проблема с треком, но поддержка в Telegram решила все за 10 минут. Чувствуется забота о клиенте.",
          image: "https://i.ibb.co/xycMWf1/Happy-Box-review4.webp"
        }
      ]
    },
    calculator: {
      title: 'Калькулятор доставки',
      subtitle: 'Доставка «до двери». Цены включают все налоги и таможенные пошлины.',
      weightPlaceholder: 'Вес',
      minWeightHint: 'Минимальный вес — 0.1 кг',
      kg: 'Килограммы (кг)',
      lb: 'Фунты (lb)',
      selectCountry: 'Куда везем?',
      postalPlaceholder: 'Индекс (Необязательно)',
      button: 'Рассчитать',
      error: 'Пожалуйста, выберите страну',
      resultTitle: 'Примерная стоимость',
      deliveryTime: 'Сроки',
      timeDays: 'дней',
      note: '*Расчет для {weight} кг. Итоговая цена может зависеть от объемного веса.',
      recalculate: 'Пересчитать',
      airRate: 'Тариф Авиа',
      time: 'Время в пути',
      contactQuote: 'Свяжитесь для расчета',
      contactDesc: 'Для этого направления, пожалуйста, напишите в поддержку для точного расчета.',
      contactBtn: 'Написать в поддержку',
      altDelivery: 'Интересует ЖД или Море?',
      altContact: 'Свяжитесь для расчета',
      methodAir: 'Авиа Экспресс',
      methodSea: 'Морская доставка',
      methodRail: 'ЖД / Авто',
      minWeightSeaRail: 'Море/ЖД доступно от 15 кг',
      minWeightSeaUS: 'Море в США от 30 кг. Для меньшего веса — только Авиа.',
      euDisclaimer: 'Внимание: не все товары подходят для ЖД/Моря в ЕС. Уточняйте у менеджера.',
      bulkInquiry: 'Для больших партий напишите нам за спецтарифом.',
      onlyAirForCountry: 'В эту страну доступна только Авиа доставка',
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
        bg: 'Болгария',
        hr: 'Хорватия',
        cy: 'Кипр',
        cz: 'Чехия',
        dk: 'Дания',
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
      subtitle2: 'включая Почту Китая, Cainiao, CDEK, Boxberry и Почту России.',
      placeholder: 'Введите трек-номер (напр. LV123456789CN)',
      button: 'Отследить',
      result: 'Результаты отслеживания',
      powered: 'На базе 17TRACK'
    },
    contact: {
      title: 'Доставка из Китая и Гонконга проще простого с',
      text: 'HappyBox позволяет покупать любые товары в онлайн и офлайн магазинах Китая и Гонконга с доставкой прямо до двери. Мы предлагаем выгодную доставку одежды, косметики, обуви, электроники, снеков, витаминов и многого другого!',
      contactUs: 'Свяжитесь с нами'
    },
    footer: {
      support: 'Помощь',
      contact: 'Служба поддержки',
      privacy: 'Политика конфиденциальности',
      terms: 'Условия использования',
      rights: 'HappyBox. Все права защищены.',
      iUnderstand: 'Понятно',
      privacyTitle: 'Политика конфиденциальности',
      termsTitle: 'Условия использования'
    },
    devModal: {
        title: 'Раздел в разработке',
        message: 'Личный кабинет клиента уже скоро! Мы работаем над созданием удобной системы для отслеживания и управления вашими заказами.',
        close: 'Закрыть'
    },
    seoBlock: {
      toggle: 'Популярные направления и услуги',
      categories: {
        destinations: {
          title: 'Куда доставляем',
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
            'Доставка Amazon FBA в США',
            'DDP Доставка (Без налогов)',
            'Услуга консолидации в Китае',
            'Бесплатный склад в Китае',
            'Услуга Байера / Посредника',
            'Доставка мебели из Китая',
            'Доставка электроники'
          ]
        },
        platforms: {
          title: 'Площадки',
          items: [
            'Посредник Taobao',
            'Посредник 1688',
            'Выкуп с Tmall',
            'Доставка с Poizon (Dewu)',
            'Агент Alibaba',
            'Посредник Weidian',
            'Выкуп с Xianyu'
          ]
        }
      }
    },
    faq: {
      title: 'Частые вопросы',
      subtitle: 'Все, что нужно знать о работе с HappyBox',
      items: [
        {
          question: 'Берете ли вы комиссию за выкуп с 1688 или Taobao?',
          answer: 'Наша комиссия 0% за выкуп! Вы платите только за доставку!'
        },
        {
          question: 'Что если товар придет с браком на ваш склад?',
          answer: 'Мы проверяем каждую входящую посылку. Если товар поврежден или не соответствует описанию, мы вернем его продавцу для обмена или возврата денег.'
        },
        {
          question: 'Как я могу оплатить услуги?',
          answer: 'Мы принимаем банковские переводы (USD) на наши компании в Гонконге или США, AliPay, WeChatPay, USDT, RUB и UAH. Вы можете безопасно оплатить перед отправкой.'
        },
        {
          question: 'Что такое DDP доставка?',
          answer: 'DDP означает "Delivered Duty Paid" (Пошлины оплачены). Мы берем на себя всю таможню и налоги. Вы просто ждете посылку у двери, ничего доплачивать не нужно.'
        }
      ]
    },
    quickAccess: {
      taobao: 'Покупки на Taobao и Tmall без границ',
      1688: 'Оптовые закупки напрямую с фабрик',
      weidian: 'Эксклюзивный стритвир и инди-бренды',
      inspection: 'Проверка качества перед отправкой',
      warehousing: 'Бесплатное хранение и консолидация',
      pinduoduo: 'Групповые покупки и супер скидки',
      xianyu: 'Вторичный рынок и винтаж',
      shoppingNote: 'Нужен другой сервис, связанный с Китаем? Напишите нам для обсуждения. Мы не ограничиваемся только этими площадками.',
      destinationsNote: 'Не нашли нужное направление? Напишите нам для уточнения. Мы доставляем по всему миру.'
    },
    servicePages: {
      xianyu: {
        title: 'Посредник Xianyu: Б/У товары и винтаж из Китая',
        desc: "Покупайте брендовые вещи, технику и коллекционные предметы в 2-3 раза дешевле. Xianyu (Idle Fish) — это китайский Авито от Alibaba, где можно найти уникальные предложения: от винтажных сумок до игровых консолей.",
        whyNeed: {
            title: "Зачем нужен посредник для Xianyu?",
            text: "Продавцы на Xianyu — это частные лица, а не магазины. Они не говорят по-английски и не отправляют товары за границу. Покупка б/у товаров всегда несет риски. HappyBox — ваша защита: мы торгуемся с продавцом, проводим оплату и, самое главное, проверяем состояние товара на нашем складе перед отправкой."
        },
        howItWorks: {
            title: "Как покупать на Xianyu",
            steps: [
                { title: "Найдите товар", desc: "Ищите уникальные лоты в приложении Xianyu." },
                { title: "Мы торгуемся", desc: "Пришлите ссылку. Часто нам удается сбить цену на 10-20%." },
                { title: "Видео-отчет", desc: "Для дорогих вещей мы запрашиваем видео у продавца перед выкупом." },
                { title: "Финальная проверка", desc: "По прибытии на склад мы сверяем товар с описанием." }
            ]
        },
        features: [
            { title: 'Услуга торга', desc: 'Мы общаемся с продавцом, чтобы получить для вас лучшую цену.' },
            { title: 'Проверка надежности', desc: 'Мы проверяем рейтинг "Sesame Credit" продавца, чтобы исключить мошенников.' },
            { title: 'Детальный фотоотчет', desc: 'Так как это б/у товар, мы делаем подробные фото всех дефектов и следов носки.' }
        ],
        proTip: {
            title: "Политика возвратов",
            text: "Помните, что большинство продавцов на Xianyu не принимают возвраты, если товар соответствует описанию. Наша проверка на складе — ваша главная гарантия."
        },
        beyond: {
            title: "Миксуйте новое и старое",
            items: [
                { id: 'poizon', title: "Poizon", desc: "Объедините винтаж с новыми кроссовками." },
                { id: 'taobao', title: "Taobao", desc: "Добавьте новые аксессуары к заказу." },
                { id: '1688', title: "1688.com", desc: "Оптовые закупки." },
                { id: 'pinduoduo', title: "Pinduoduo", desc: "Дешевые гаджеты." },
                { title: "Консолидация", desc: "Мы соберем ваши находки с Xianyu и покупки с Taobao в одну посылку." }
            ]
        },
        startBtn: 'Начать охоту',
        backBtn: 'Назад'
      },
      weidian: {
        title: 'Посредник Weidian: Эксклюзивный стритвир и инди-бренды',
        desc: "Откройте для себя уникальные вещи от независимых дизайнеров и эксклюзивных продавцов стритвира. Weidian — это платформа для нишевой моды, лимитированных дропов и качественных реплик, которые не найти на Taobao.",
        whyNeed: {
            title: "Почему стоит покупать на Weidian?",
            text: "Weidian — это мобильная платформа, популярная среди независимых продавцов и энтузиастов уличной моды. Многие эксклюзивные вещи и топовые реплики доступны только здесь. Однако приложение полностью на китайском, и продавцы редко работают с иностранцами. HappyBox открывает вам полный доступ к этому закрытому рынку."
        },
        howItWorks: {
            title: "Как покупать на Weidian",
            steps: [
                { title: "Найдите товар", desc: "Используйте приложение Weidian или мобильные ссылки." },
                { title: "Пришлите ссылку", desc: "Поделитесь ссылкой на товар. Мы проверим репутацию продавца." },
                { title: "Мы выкупаем", desc: "Мы оплачиваем через WeChat Pay или Alipay." },
                { title: "Проверка и доставка", desc: "Получаем, проверяем качество и отправляем вам." }
            ]
        },
        features: [
            { title: 'Доступ к эксклюзивам', desc: 'Покупайте у продавцов, которые работают только на Weidian.' },
            { title: 'Детальные фото (QC)', desc: 'Мы делаем фото высокого разрешения, чтобы вы могли проверить качество материалов и швов.' },
            { title: 'Безопасная оплата', desc: 'Мы защищаем ваши деньги. Если продавец не отправит товар, мы вернем средства.' }
        ],
        proTip: {
            title: "Проверяйте условия возврата",
            text: "Многие продавцы на Weidian (особенно лимитированных вещей) не принимают возвраты. Всегда просите нас уточнить политику возврата у продавца перед покупкой."
        },
        beyond: {
            title: "Соберите полный образ",
            items: [
                { id: 'poizon', title: "Poizon", desc: "Добавьте оригинальные кроссовки." },
                { id: 'taobao', title: "Taobao", desc: "Базовые вещи и аксессуары." },
                { id: '1688', title: "1688.com", desc: "Базовые вещи оптом." },
                { id: 'xianyu', title: "Xianyu", desc: "Винтажные находки." },
                { title: "Консолидация", desc: "Объедините покупки с Weidian с другими заказами для экономии на доставке." }
            ]
        },
        startBtn: 'Начать шопинг Weidian',
        backBtn: 'Назад'
      },
      taobao: {
        title: 'Посредник Таобао: Выкуп и Доставка из Китая с комиссией 0%',
        desc: "Покупайте на Taobao, 1688 и Tmall с комиссией 0%. Мы берем на себя выкуп, проверку и международную доставку, чтобы вы наслаждались лучшими ценами Китая без хлопот. HappyBox выкупает, проверяет, консолидирует и отправляет ваши заказы по всему миру.",
        whyNeed: {
            title: "Какие есть сложности, и как мы их решаем",
            problems: [
                "Для покупок нужен адрес склада в Китае и китайские платежные методы.",
                "Продавцы редко говорят по-английски и не отправляют за границу.",
                "Высокий риск получить брак, не тот цвет или размер без проверки."
            ],
            solutionTitle: "Решение от HappyBox",
            solution: "С HappyBox покупать на Taobao просто. Мы помогаем преодолеть языковой барьер, гарантируем безопасность оплаты и проверяем каждый товар перед отправкой. К вашим услугам — наш бесплатный склад в Китае для консолидации и надежной упаковки всех ваших посылок."
        },
        howItWorks: {
            title: "Как это работает: 4 простых шага",
            steps: [
                { title: "Найдите товары", desc: "Ищите на Taobao.com или в приложении. Копируйте ссылки на товары." },
                { title: "Оформите заказ", desc: "Пришлите ссылки нам. Мы проверим наличие и цену." },
                { title: "Выкуп и Проверка", desc: "Мы берем выкуп и проверку на себя. Если товар окажется бракованным или не тем, что вы заказывали, — мы быстро организуем возврат." },
                { title: "Консолидация", desc: "Бесплатное хранение, консолидация и международная доставка. Гарантируем премиум-упаковку для сохранности ваших вещей." }
            ]
        },
        proTip: {
            title: "Советы экспертов по Taobao",
            text: "• **Tmall (Красная иконка):** Когда ищете на Taobao и видите красную иконку — это TMall. Там представлены официальные бренды и дилеры с почти нулевым риском брака. Обычный Taobao дешевле, но некоторые бренды могут быть неоригинальными.\n\n• **Живые фото:** Всегда ищите иконку камеры в отзывах, чтобы увидеть реальные фото вместо студийных рендеров.\n\n• **История продавца:** Отдавайте предпочтение продавцам, работающим 5–10 лет; они дорожат своей репутацией на платформе.\n\n• **Консолидация:** Используйте наш склад для объединения посылок. Купите мелкие вещи в 10 разных магазинах, и мы упакуем их в ОДНУ коробку, чтобы вы сэкономили до 60% на доставке.\n\n**Позвольте нам искать за вас!**\nНе можете найти нужную вещь на Taobao? Не тратьте время на бесконечные списки. Просто пришлите нам фото или краткое описание, и наши эксперты найдут лучшее качество у продавцов, которым мы доверяем."
        },
        features: [
            { title: 'Китайский номер не нужен', desc: 'Вам не нужно регистрироваться на Taobao и бояться блокировок аккаунта.' },
            { title: 'Бесплатная проверка (QC)', desc: 'Мы — ваши глаза. Проверяем на брак, размер и цвет до того, как товар покинет Китай.' },
            { title: 'Бесплатная консолидация', desc: 'Покупайте у разных продавцов. Мы соберем все в одну коробку, чтобы сэкономить до 60% на доставке.' },
            { title: 'Надежная упаковка', desc: 'Международная доставка бывает суровой. Мы используем качественные материалы, чтобы все доехало целым.' },
            { title: 'Удобная оплата', desc: 'Платите за заказы Рублями, USDT, Wechat Pay или банковским переводом легко и безопасно.' },
            { title: 'Прозрачный трекинг', desc: 'Следите за путем вашей посылки от Китая до двери. Мы предоставляем надежный трек-номер, чтобы вы всегда знали, где находится ваш груз.' }
        ],
        beyond: {
            title: "Не только Taobao: 1688, Poizon и другое",
            items: [
                { id: '1688', title: "1688.com", desc: "Лучшее для опта и закупок с фабрик. Поможем договориться с поставщиками и оформить оптовый заказ." },
                { id: 'poizon', title: "Poizon (Dewu)", desc: "Топ для оригинальных кроссовок и люкса. Выкупим, проверим и бережно доставим." },
                { id: 'tmall', title: "Tmall", desc: "Официальные магазины брендов. Идеально для тех, кто ищет премиум качество и гарантию оригинальности." },
                { id: 'xianyu', title: "Xianyu", desc: "Вторичный рынок брендов и винтажа." },
                { title: "Офлайн магазины", desc: "Нужна мебель из Фошаня или электроника с рынков Шэньчжэня? Мы можем организовать выкуп офлайн." },
                { title: "Любая другая площадка", desc: "Pinduoduo, Xianyu (б/у), Weidian. Если продавец в Китае — мы можем это выкупить."}
            ]
        },
        shippingInfo: {
            title: "DDP Доставка из Китая в США, Европу, Канаду и ОАЭ: Таможня и Налоги включены",
            text: "Мы специализируемся на доставке по системе **DDP (Delivered Duty Paid)**. Это значит, что **мы берем на себя всю таможенную очистку и уплату пошлин**. Вам не нужно общаться с таможней или платить налоги при получении. Цена доставки окончательная — никаких скрытых сюрпризов."
        },
        startBtn: 'Начать шопинг',
        backBtn: 'На главную'
      },
      1688: {
        title: 'Посредник 1688: Оптовые закупки в Китае',
        desc: "Получите доступ к реальным ценам фабрик. Мы поможем найти, выкупить и доставить оптовые партии с 1688.com прямо на ваш склад.",
        whyNeed: {
            title: "Почему 1688.com, а не Alibaba?",
            text: "Alibaba.com ориентирован на иностранцев с наценками. 1688.com — это внутренний рынок для китайцев, где цены значительно ниже. Но там всё на китайском и нет международной доставки. HappyBox решает это. Мы — ваш агент: переводим, платим внутри Китая и организуем логистику."
        },
        howItWorks: {
            title: "Как мы упрощаем B2B закупки",
            steps: [
                { title: "Поиск", desc: "Вы шлете ссылки или фото; мы ищем лучших производителей." },
                { title: "Оплата", desc: "Мы платим поставщикам с наших счетов — вам не нужен счет в Китае." },
                { title: "Склад", desc: "Бесплатно принимаем и храним грузы от разных фабрик." },
                { title: "Логистика", desc: "Оформляем документы и доставляем Карго или в Белую." }
            ]
        },
        proTip: {
            title: "Закупки под ключ",
            text: "Не хотите разбираться в 1688? Просто пришлите ТЗ или фото товара. Наша команда найдет фабрику, договорится о лучшей цене, проверит образцы и привезет партию. Вы занимаетесь продажами, мы — поставками."
        },
        features: [
            { title: 'Низкая комиссия', desc: 'Всего от 2% от суммы заказа.' },
            { title: 'Цены как для своих', desc: 'Покупайте по ценам для внутреннего рынка Китая.' },
            { title: 'Спец. упаковка', desc: 'Обрешетка, паллеты, уголки — защитим груз для долгой дороги.' }
        ],
        beyond: {
            title: "Больше чем 1688: Розница и Бренды",
            items: [
                { id: 'taobao', title: "Taobao", desc: "Для штучных покупок и личного пользования." },
                { id: 'tmall', title: "Tmall", desc: "Официальные бренды и флагманские магазины." },
                { id: 'poizon', title: "Poizon", desc: "Оригинальные кроссовки и уличная мода." },
                { id: 'pinduoduo', title: "Pinduoduo", desc: "Групповые покупки и скидки." },
                { title: "Консолидация", desc: "Мы объединим ваши оптовые заказы с 1688 с личными покупками с других платформ." }
            ]
        },
        startBtn: 'Начать закупку',
        backBtn: 'На главную'
      },
      poizon: {
        title: 'Посредник Пойзон (Деву) | Оригинальные кроссовки и бренды без наценок',
        desc: "Покупайте на Poizon (Dewu) — главной площадке оригинальных вещей в Китае. Цены на 30-50% ниже, чем в РФ и Европе. Комиссия за выкуп 0%.",
        whyNeed: {
            title: "Почему сложно купить напрямую?",
            problems: [
                "Приложение для Китая: Интерфейс только на китайском, для оплаты нужны Alipay или WeChat, продавцы не отправляют за границу.",
                "Скрытые комиссии: Многие посредники заявляют низкую комиссию, но накручивают 15-30% на курсе юаня.",
                "Сложности с логистикой: Риск, что дорогая вещь потеряется или придет мятой без правильной упаковки."
            ],
            solutionTitle: "Решение от HappyBox",
            solution: "Мы — ваш профессиональный агент. Мы берем на себя выкуп, проверку и логистику. Мы считаем юань по справедливому курсу (максимально близкому к биржевому/ЦБ), без скрытых наценок. Вы получаете полный комплект защиты Poizon: бирюзовая коробка, сертификат с QR-кодом и синяя пломба."
        },
        howItWorks: {
            title: "Как это работает (5 Шагов)",
            steps: [
                { title: "Скачайте приложение", desc: "Найдите Dewu (Poizon) в App Store. Регистрация работает на российские номера (+7)." },
                { title: "Найдите товар", desc: "Вбивайте название на английском. Цена зависит от размера." },
                { title: "Оформите заказ", desc: "Пришлите нам ссылку (кнопка 'Поделиться'). Мы проверим наличие." },
                { title: "Выкуп и Legit Check", desc: "Мы выкупаем. Poizon проверяет товар в своей лаборатории перед отправкой нам." },
                { title: "Склад и Доставка", desc: "Мы получаем, делаем фотоотчет, упаковываем и отправляем вам." }
            ]
        },
        proTip: {
            title: "Совет эксперта",
            text: "Путаетесь в кнопках? **Бирюзовая кнопка** — это 'Быстрая доставка' со склада Poizon. **Черная кнопка** — товар едет от продавца (чуть дольше, но дешевле). Избегайте кнопок с цифрой **'95'** — это б/у вещи или товары с дефектами коробки."
        },
        features: [
            { title: 'Оригинал 100%', desc: 'Многоступенчатая проверка Poizon исключает подделки. Если товар не пройдет проверку, деньги вернутся нам, а мы вернем их вам.' },
            { title: 'Double Box (Двойная коробка)', desc: 'Обувь и сумки мы упаковываем в дополнительную жесткую коробку, чтобы оригинальная упаковка приехала идеальной.' },
            { title: 'Оплата в рублях', desc: 'Принимаем переводы на карты РФ, USDT или наличные. Вам не нужно искать китайские карты.' },
            { title: 'Бесплатный фотоотчет', desc: 'Вы увидите свои кроссовки и сертификат до того, как они вылетят из Китая.' }
        ],
        shippingInfo: {
            title: "DDP Доставка из Китая в США, Европу, Канаду и ОАЭ: Таможня и Налоги включены",
            text: "Мы специализируемся на доставке по системе **DDP (Delivered Duty Paid)**. Это значит, что **мы берем на себя всю таможенную очистку и уплату пошлин**. Вам не нужно общаться с таможней или платить налоги при получении. Цена доставки окончательная — никаких скрытых сюрпризов."
        },
        beyond: {
            title: "Больше, чем просто Poizon",
            items: [
                { id: 'taobao', title: "Taobao", desc: "Модная одежда и аксессуары." },
                { id: 'tmall', title: "Tmall", desc: "Официальная техника и косметика." },
                { id: '1688', title: "1688.com", desc: "Оптовые заказы." },
                { id: 'pinduoduo', title: "Pinduoduo", desc: "Супер скидки и групповые покупки." },
                { title: "Магия консолидации", desc: "Кроссовки с Poizon + одежда с Taobao + мелочи с Pinduoduo = Одна посылка. Мы храним бесплатно и объединяем всё." }
            ]
        },
        startBtn: 'Заказать с Poizon',
        backBtn: 'На главную'
      },
      tmall: {
        title: 'Посредник Tmall Global: Официальные бренды Китая',
        desc: "Покупайте в официальных флагманских магазинах на Tmall.com с полной уверенностью. Tmall — это премиальная B2C платформа Alibaba, где представлены мировые и китайские бренды. HappyBox поможет выкупить и доставить товары с Tmall в Россию.",
        whyNeed: {
            title: "Почему Tmall, а не Taobao?",
            text: "Если Taobao — это рынок (C2C), то Tmall — это торговый центр (B2C). Продавцы на Tmall — это проверенные юрлица или официальные представители брендов. Это значит: 100% оригинал, выше стандарты обслуживания и качественная упаковка. Идеально для покупки техники, косметики и брендовой одежды."
        },
        howItWorks: {
            title: "Покупки на Tmall с HappyBox",
            steps: [
                { title: "Поиск", desc: "Ищите товары с красным значком Tmall." },
                { title: "Ссылка", desc: "Пришлите нам ссылку на товар." },
                { title: "Выкуп", desc: "Мы выкупаем напрямую у официального магазина." },
                { title: "Доставка", desc: "Консолидируем с другими покупками и отправляем." }
            ]
        },
        features: [
            { title: 'Официальные магазины', desc: 'Доступ к магазинам Apple, Xiaomi, Uniqlo, Zara и тысяч других брендов.' },
            { title: 'Гарантия качества', desc: 'Tmall имеет более строгий контроль качества, чем обычный Taobao.' },
            { title: 'Комиссия 0%', desc: 'Мы не берем комиссию за выкуп с Tmall.' }
        ],
        proTip: {
            title: "Ищите красного кота",
            text: "При поиске обращайте внимание на иконку красного кота. Это знак того, что продавец — верифицированный мерчант Tmall с лицензией и депозитом в Alibaba."
        },
        beyond: {
            title: "Больше чем Tmall",
            items: [
                { id: 'taobao', title: "Taobao", desc: "Найдите дешевые аналоги и товары народного потребления." },
                { id: 'poizon', title: "Poizon", desc: "Лучшее для лимитированных кроссовок и уличной моды." },
                { id: '1688', title: "1688.com", desc: "Оптовые цены для бизнеса." },
                { id: 'pinduoduo', title: "Pinduoduo", desc: "Невероятные скидки на гаджеты и товары для дома." },
                { title: "Консолидация", desc: "Объедините премиальную технику с Tmall и дешевые мелочи с Taobao в одной посылке." }
            ]
        },
        startBtn: 'Начать шопинг Tmall',
        backBtn: 'На главную'
      },
      pinduoduo: {
        title: 'Посредник Pinduoduo: Групповые покупки и Низкие цены',
        desc: "Откройте для себя самые низкие цены в Китае. Pinduoduo известен своей моделью групповых покупок и невероятными скидками на всё: от гаджетов до товаров для дома. Мы делаем покупки с Pinduoduo простыми и безопасными.",
        whyNeed: {
            title: "Почему Pinduoduo?",
            text: "Pinduoduo часто предлагает цены ниже, чем на Taobao, за те же самые товары. В чем подвох? Приложение только на китайском, а интерфейс перенасыщен акциями. HappyBox — ваш агент: мы разберемся в приложении, выкупим по цене групповой покупки и организуем доставку."
        },
        howItWorks: {
            title: "Как покупать на Pinduoduo",
            steps: [
                { title: "Найдите товар", desc: "Скачайте Pinduoduo (拼多多). Выберите, что нравится." },
                { title: "Поделитесь ссылкой", desc: "Нажмите кнопку поделиться и отправьте ссылку нам." },
                { title: "Мы выкупим", desc: "Выкупаем по цене 'Group Buy' для максимальной экономии." },
                { title: "Доставка", desc: "Получим, проверим и отправим вам." }
            ]
        },
        features: [
            { title: 'Лучшие цены в Китае', desc: 'Известен субсидированными ценами на повседневные товары.' },
            { title: 'Комиссия 0%', desc: 'Мы не берем комиссию за стандартные заказы с Pinduoduo.' },
            { title: 'Консолидация', desc: 'Идеально для добавления недорогих мелочей в основную посылку.' }
        ],
        proTip: {
            title: "Не игнорируйте таймер",
            text: "Скидки на Pinduoduo часто ограничены по времени. Если видите отличную цену, присылайте нам ссылку быстрее, чтобы мы успели выкупить до закрытия окна групповой покупки."
        },
        beyond: {
            title: "Комбинируйте и Экономьте",
            items: [
                { id: 'taobao', title: "Taobao", desc: "Больше выбора одежды." },
                { id: '1688', title: "1688.com", desc: "Оптовые заказы." },
                { id: 'poizon', title: "Poizon", desc: "Оригинальные кроссовки и люкс." },
                { id: 'tmall', title: "Tmall", desc: "Премиальные бренды." },
                { title: "Умный шопинг", desc: "Используйте Pinduoduo для дешевых гаджетов, а Taobao для моды. Мы отправим всё вместе." }
            ]
        },
        startBtn: 'Начать Pinduoduo',
        backBtn: 'На главную'
      },
      inspection: {
        title: 'Инспекция фабрик и Проверка качества в Китае',
        desc: "Не полагайтесь на удачу. Наши инспекторы проверят товар в любой провинции Китая. Гарантируем, что груз на 100% соответствует вашим требованиям.",
        whyNeed: {
            title: "Зачем нужна проверка в Китае?",
            text: "Вернуть брак из России или США в Китай почти невозможно и очень дорого. Проще и дешевле выявить проблему на фабрике, пока деньги еще не ушли окончательно. HappyBox — ваши глаза на производстве."
        },
        features: [
            { title: 'Сеть инспекторов', desc: 'Работаем в Гуандуне, Чжэцзяне, Цзянсу и других промышленных регионах.' },
            { title: 'Отчет за 24 часа', desc: 'Подробный PDF с фото и видео высокого разрешения.' },
            { title: 'Честное заключение', desc: 'Оценка Pass/Fail по международным стандартам AQL.' },
            { title: 'Сортировка брака', desc: 'Разделяем дефекты на критические и незначительные.' }
        ],
        beyond: {
            title: "Виды проверок",
            items: [
                { title: "Аудит фабрики", desc: "Проверка документов и реальности производства до начала работы." },
                { title: "Проверка в процессе (DUPRO)", desc: "Инспекция на этапе 20-30% готовности для раннего выявления проблем." },
                { title: "Пред-отгрузочная (PSI)", desc: "Финальная проверка готовой партии перед упаковкой в контейнер." },
                { title: "Контроль погрузки", desc: "Следим, чтобы загрузили именно ваш товар и не повредили его." }
            ]
        },
        proTip: {
            title: "Управление качеством под ключ",
            text: "Не знаете, что проверять? Пришлите требования, и мы составим чек-лист (Inspection Checklist) сами. Договоримся с фабрикой о дате визита инспектора."
        },
        startBtn: 'Заказать проверку',
        backBtn: 'На главную'
      },
      warehousing: {
        title: 'Бесплатный склад в Китае и Консолидация',
        desc: "Хватит платить за доставку каждой посылки отдельно. Объедините заказы в одну коробку и сэкономьте до 80% на международной логистике.",
        whyNeed: {
            title: "Зачем наш склад?",
            text: "Вы получаете свой адрес в Китае. Покупайте у разных продавцов в течение недели или месяца. Мы примем, проверим и сохраним всё бесплатно, а потом отправим одной посылкой."
        },
        features: [
            { title: 'Безлимитное хранение', desc: 'Храните покупки бесплатно, пока собираете посылку.' },
            { title: 'Бесплатная консолидация', desc: 'Уберем лишние коробки из-под обуви и упакуем компактно.' },
            { title: 'Прием любых посылок', desc: 'Принимаем грузы любого веса и объема.' },
            { title: 'Фотоотчет', desc: 'Делаем фото входящих посылок, чтобы вы видели, что пришло.' },
            { title: 'Уменьшение объема', desc: 'Грамотная переупаковка снижает объемный вес и цену доставки.' },
            { title: 'Разделение заказов', desc: 'Можем разделить большую партию на части для отправки разным получателям.' },
            { title: 'Надежная упаковка', desc: 'Уголки, скотч, пленка — всё для сохранности.' },
            { title: 'Охрана 24/7', desc: 'Ваш груз в безопасности под видеонаблюдением.' }
        ],
        proTip: {
            title: "Не хотите заниматься логистикой?",
            text: "Услуга 'Фулфилмент'. Мы можем принять ваш товар, переупаковать, промаркировать и отправить напрямую вашим клиентам по дропшиппингу."
        },
        startBtn: 'Получить адрес склада',
        backBtn: 'На главную'
      }
    }
  }
};

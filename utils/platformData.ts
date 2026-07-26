import { Search, CreditCard, ClipboardCheck, Package, ListChecks, ShieldCheck, Truck, Clock, Send } from 'lucide-react';
import React from 'react';

export interface PlatformContent {
    badge: string;
    titlePrefix: string;
    titleHighlight: string;
    subtitle: React.ReactNode;
    whyTitle: string;
    whyText1: string;
    whyText2: string;
    whyText3: string;
    processTitle: string;
    process: { icon: any; title: string; desc: string }[];
    fearsTitle: string;
    fearsList: { q: string; a: string }[];
    feeTitle: string;
    feeText: string;
    cta: string;
    beyondTitle?: string;
    beyondPlatforms?: { name: string; desc: string; id: string }[];
    beyondFooter?: string;
}

export const platformsData: Record<string, Record<'en' | 'ru', PlatformContent>> = {
    'weidian': {
        en: {
            badge: "Exclusive Streetwear & Indie Brands",
            titlePrefix: "Weidian ",
            titleHighlight: "Purchasing Agent",
            subtitle: "Discover unique items from independent designers and exclusive streetwear sellers. Weidian is the go-to platform for niche fashion, limited drops, and high-quality replicas that you can't find on Taobao.",
            whyTitle: "Why Shop on Weidian?",
            whyText1: "Weidian is a mobile-first platform popular with independent sellers and streetwear enthusiasts. Many exclusive items and high-tier replicas are only available here.",
            whyText2: "However, the app is purely in Chinese and sellers rarely deal with international buyers.",
            whyText3: "HappyBox gives you full access to this exclusive market. We handle the payment via WeChat Pay or Alipay, verify the seller's reputation, and conduct a full QC inspection before shipping internationally.",
            processTitle: "How We Handle Your Weidian Order",
            process: [
                {
                    icon: Search,
                    title: "Browse & Send Link",
                    desc: "Use the Weidian app or mobile links to find products. Share the product link with us, and we will verify the seller's reputation.",
                },
                {
                    icon: CreditCard,
                    title: "Payment",
                    desc: "We handle the payment via WeChat Pay or Alipay using Chinese payment methods. No international payment workarounds needed on your end.",
                },
                {
                    icon: ClipboardCheck,
                    title: "QC & Consolidation",
                    desc: "We receive the item, inspect quality, and consolidate it with your other purchases. You review detailed QC photos before anything ships internationally.",
                }
            ],
            fearsTitle: "Solving Your Biggest Weidian Shopping Fears",
            fearsList: [
                { q: "What if the item doesn't match the listing photos?", a: "We conduct a full Quality Control inspection at our Shenzhen warehouse. You receive detailed photos of the actual item. If something looks wrong, we contact the seller before it's too late." },
                { q: "What if the seller has a bad reputation?", a: "We verify every seller before purchasing. Low-reputation sellers, inactive stores, and listings with red flags get flagged before you spend a cent." },
                { q: "What if I want to order from multiple sellers?", a: "We consolidate orders from multiple Weidian sellers — and from other platforms like Taobao, 1688, and Poizon — into one international shipment." },
                { q: "What if I can't find what I'm looking for?", a: "Send us a photo or description. Our team searches Weidian and connected platforms to find the closest match available." }
            ],
            feeTitle: "Our Fee",
            feeText: "Purchasing commission: 2% of the order amount. No hidden fees, no markup on shipping.",
            cta: "Start Shopping on Weidian"
        },
        ru: {
            badge: "Эксклюзивный стритвир и инди-бренды",
            titlePrefix: "Посредник ",
            titleHighlight: "Weidian",
            subtitle: "Откройте для себя уникальные вещи от независимых дизайнеров и эксклюзивных продавцов уличной моды. Weidian — лучшая платформа для нишевой моды, лимитированных коллекций и качественных реплик, которых не найти на Taobao.",
            whyTitle: "Почему стоит покупать на Weidian?",
            whyText1: "Weidian — это мобильная платформа, популярная среди независимых продавцов и энтузиастов уличной моды. Многие эксклюзивные вещи и высококлассные реплики доступны только здесь.",
            whyText2: "Однако приложение полностью на китайском языке, и продавцы редко работают с иностранными покупателями.",
            whyText3: "HappyBox открывает вам полный доступ к этому закрытому рынку. Мы оплачиваем заказы через WeChat Pay или Alipay, проверяем репутацию продавца и проводим полную проверку качества (QC) перед международной отправкой.",
            processTitle: "Как мы выкупаем ваши заказы с Weidian",
            process: [
                {
                    icon: Search,
                    title: "Поиск и ссылки",
                    desc: "Найдите товары в приложении Weidian и пришлите нам ссылки. Мы проверим репутацию продавца перед заказом.",
                },
                {
                    icon: CreditCard,
                    title: "Оплата",
                    desc: "Мы производим оплату продавцу через WeChat Pay или Alipay. Вам не нужно заводить китайский счет или кошелек.",
                },
                {
                    icon: ClipboardCheck,
                    title: "Проверка (QC) и консолидация",
                    desc: "Мы получаем товар в Шэньчжэне, проверяем его качество и присылаем вам фото. Мы объединяем заказы от разных продавцов в одну посылку.",
                }
            ],
            fearsTitle: "Решаем ваши главные опасения при покупках на Weidian",
            fearsList: [
                { q: "Что если товар не совпадает с фото продавца?", a: "Мы проводим полную проверку качества (QC) на нашем складе в Шэньчжэне. Вы получаете детальные фото реального товара. Если что-то не так, мы оформляем возврат." },
                { q: "Что если у продавца плохая репутация?", a: "Мы проверяем каждого продавца перед выкупом. Магазины с низким рейтингом, неактивные продавцы и подозрительные товары сразу блокируются." },
                { q: "Можно ли заказать у разных продавцов?", a: "Да! Мы консолидируем ваши заказы от разных продавцов Weidian, а также покупки с Taobao, 1688 и Poizon в одну международную отправку." },
                { q: "Что если я не могу найти нужный товар?", a: "Пришлите нам фото или описание. Наша команда найдет нужную вещь или ближайший аналог на Weidian и других платформах." }
            ],
            feeTitle: "Наша комиссия:",
            feeText: "Комиссия за выкуп: 2% от суммы заказа. Без скрытых сборов и наценок на логистику.",
            cta: "Начать покупки на Weidian"
        }
    },
    '1688': {
        en: {
            badge: "Sourcing & Purchasing",
            titlePrefix: "1688 ",
            titleHighlight: "Purchasing Agent",
            subtitle: "Access true factory prices. We source, negotiate, purchase, and consolidate wholesale orders from 1688.com directly at our Shenzhen warehouse — no Chinese bank account, no language barrier, no middleman markup.",
            whyTitle: "Why 1688.com — Not Alibaba",
            whyText1: "Most international buyers default to Alibaba. That's exactly why Alibaba prices are higher — the platform is built for export, with margins baked in at every level. 1688.com is China's domestic wholesale marketplace where the same factories sell to Chinese businesses at real factory prices.",
            whyText2: "The difference is significant. The same product that costs $8 on Alibaba often costs $3–5 on 1688. The catch: the platform is entirely in Chinese, sellers only accept Chinese payment methods (Alipay, domestic bank transfer), and most only ship within Mainland China.",
            whyText3: "HappyBox bridges that gap. We act as your professional 1688 buying agent — handling the language, the payments, the quality checks, and the consolidation at our Shenzhen warehouse before your goods ship internationally.",
            processTitle: "How We Handle Your 1688 Order End-to-End",
            process: [
                {
                    icon: Search,
                    title: "Sourcing",
                    desc: "Send us links, photos, or a product description. We find the right factory, verify real stock availability, and confirm actual dimensions and weight before you pay.",
                },
                {
                    icon: CreditCard,
                    title: "Purchasing",
                    desc: "We pay suppliers using our local corporate accounts and Alipay. You transfer funds to us — no Chinese bank account or payment platform needed.",
                },
                {
                    icon: ClipboardCheck,
                    title: "Quality Inspection",
                    desc: "Goods arrive at our Shenzhen warehouse. We inspect for defects, verify quantities against your order, and send you photos before anything is packed for shipping.",
                },
                {
                    icon: Package,
                    title: "Storage & Consolidation",
                    desc: "1688 suppliers ship fast but separately. We hold all your orders at our warehouse for up to 30 days at no cost, then consolidate everything into one shipment — regardless of how many suppliers you ordered from.",
                },
                {
                    icon: Send,
                    title: "International Shipping",
                    desc: "Once consolidated and inspected, your cargo ships on DDP terms to your destination. See our shipping pages for rates and transit times by country.",
                }
            ],
            fearsTitle: "Solving Your Biggest 1688 Sourcing Fears",
            fearsList: [
                { q: "What if the supplier ships defective goods?", a: "We inspect everything at our Shenzhen warehouse before it goes international. Photos and videos sent to you for confirmation. Defective items go back to the factory — not across an ocean." },
                { q: "What if I don't know which supplier to choose?", a: "Send us a photo or description. Our team finds verified suppliers, compares prices across multiple factories, and recommends the most reliable option. Full hands-off sourcing available." },
                { q: "What if the stock listed isn't actually available?", a: "Stock numbers on 1688 are frequently inaccurate. We verify real availability with the supplier before you pay — not after." },
                { q: "What if I need to combine 1688 orders with other platforms?", a: "We consolidate 1688 wholesale orders with purchases from Taobao, Tmall, Poizon, and Pinduoduo into one shipment." }
            ],
            feeTitle: "Our Fee",
            feeText: "Purchasing commission: 0%. You pay exactly the manufacturer's price. We earn revenue exclusively on international shipping.",
            beyondTitle: "Beyond 1688: Other Chinese Platforms We Support",
            beyondPlatforms: [
                { name: "Taobao", desc: "single items and personal shopping", id: "taobao" },
                { name: "Tmall", desc: "official brand flagship stores", id: "tmall" },
                { name: "Poizon (Dewu)", desc: "authentic sneakers and streetwear", id: "poizon" },
                { name: "Pinduoduo", desc: "group buying and discount deals", id: "pinduoduo" }
            ],
            beyondFooter: "We consolidate orders from all platforms into one shipment.",
            cta: "Start Sourcing",
        },
        ru: {
            badge: "Поиск и выкуп",
            titlePrefix: "Посредник ",
            titleHighlight: "1688",
            subtitle: "Получите доступ к реальным заводским ценам. Мы находим товары, ведем переговоры, выкупаем и консолидируем ваши оптовые заказы с 1688.com на складе в Шэньчжэне. Вам не нужны китайский банковский счет, знание языка или переплаты посредникам.",
            whyTitle: "Почему 1688.com, а не Alibaba?",
            whyText1: "Большинство международных покупателей по привычке идут на Alibaba. Именно поэтому цены там выше: платформа создана для экспорта, и в стоимость каждого товара уже заложены наценки на всех уровнях. 1688.com — это внутренний оптовый маркетплейс Китая, где те же заводы продают товары китайским компаниям по «своим» ценам.",
            whyText2: "Разница колоссальна. Товар, который стоит $8 на Alibaba, на 1688 часто обходится в $3–5. Единственная сложность: платформа полностью на китайском, продавцы принимают только внутренние способы оплаты (Alipay, китайские карты) и отправляют товары только внутри страны.",
            whyText3: "HappyBox убирает эти барьеры. Мы выступаем вашим профессиональным агентом: берем на себя общение, оплату, проверку качества и консолидацию груза на нашем складе в Шэньчжэне перед отправкой в вашу страну.",
            processTitle: "Как мы работаем с вашим заказом «под ключ»",
            process: [
                {
                    icon: Search,
                    title: "Поиск (Sourcing)",
                    desc: "Пришлите нам ссылки, фото или описание. Мы найдем нужный завод, проверим наличие товара и уточним реальный вес и габариты до того, как вы оплатите заказ.",
                },
                {
                    icon: CreditCard,
                    title: "Выкуп",
                    desc: "Мы оплачиваем счета поставщиков через наши корпоративные счета и Alipay. Вы переводите деньги нам — вам не нужно регистрировать китайские кошельки.",
                },
                {
                    icon: ClipboardCheck,
                    title: "Инспекция качества",
                    desc: "Как только товар поступает на наш склад в Шэньчжэне, мы проверяем его на брак, сверяем количество и присылаем вам фотоотчет до финальной упаковки.",
                },
                {
                    icon: Package,
                    title: "Хранение и консолидация",
                    desc: "Поставщики с 1688 доставляют быстро, но каждый — своей посылкой. Мы бесплатно храним ваши заказы до 30 дней и объединяем их в одну общую партию, сколько бы поставщиков у вас ни было.",
                },
                {
                    icon: Send,
                    title: "Международная доставка",
                    desc: "После проверки и упаковки ваш груз отправляется на условиях DDP. Все тарифы и сроки указаны в соответствующих разделах по странам.",
                }
            ],
            fearsTitle: "Решаем главные страхи при работе с 1688",
            fearsList: [
                { q: "Что если пришлют брак?", a: "Мы проверяем всё в Шэньчжэне. Вы получаете фото и видео для подтверждения. Бракованный товар возвращается на завод в Китае, а не едет к вам через океан." },
                { q: "Я не знаю, какого поставщика выбрать.", a: "Просто пришлите фото. Наша команда найдет верифицированных производителей, сравнит цены на разных заводах и порекомендует самый надежный вариант." },
                { q: "А если товара нет в наличии?", a: "Цифры остатков на 1688 часто не соответствуют реальности. Мы уточняем фактическое наличие у продавца до того, как вы переведете деньги." },
                { q: "Можно ли объединить заказы с разных площадок?", a: "Да. Мы соберем в одну посылку опт с 1688, покупки с Taobao, Tmall, Poizon и Pinduoduo." }
            ],
            feeTitle: "Наша комиссия:",
            feeText: "Комиссия за выкуп — 0%. Вы платите ровно ту цену, которую установил завод-изготовитель на 1688.com. Мы зарабатываем исключительно на международной логистике.",
            beyondTitle: "Кроме 1688 мы работаем с:",
            beyondPlatforms: [
                { name: "Taobao", desc: "розница и личные покупки.", id: "taobao" },
                { name: "Tmall", desc: "официальные флагманские магазины брендов.", id: "tmall" },
                { name: "Poizon (Dewu)", desc: "оригинальные кроссовки и брендовая одежда.", id: "poizon" },
                { name: "Pinduoduo", desc: "низкие цены и групповые закупки.", id: "pinduoduo" }
            ],
            beyondFooter: "Мы собираем заказы со всех платформ в одну международную отправку.",
            cta: "Начать поиск товара",
        }
    },
    'taobao': {
        en: {
            badge: "Retail & Personal Shopping",
            titlePrefix: "Taobao ",
            titleHighlight: "Agent",
            subtitle: "Buy from Taobao safely. We handle the purchase, inspect your items, and consolidate multiple orders into one international shipment. Access millions of products without a Chinese bank account.",
            whyTitle: "Why Shop on Taobao?",
            whyText1: "Taobao is the largest online marketplace in China, offering an incredible variety of goods—from clothes and electronics to unique personal items—at unbeatable domestic prices.",
            whyText2: "However, the platform is entirely in Chinese, requires Chinese payment methods (Alipay), and most sellers do not ship internationally.",
            whyText3: "HappyBox is your professional Taobao agent. We buy the items for you, verify their quality upon arrival at our warehouse, and ship them to your doorstep worldwide.",
            processTitle: "How We Handle Your Taobao Order",
            process: [
                {
                    icon: Search,
                    title: "Find Your Items",
                    desc: "Browse Taobao and send us the product links. Our team will verify the item details and seller reputation.",
                },
                {
                    icon: CreditCard,
                    title: "Payment",
                    desc: "Pay us in your local currency. We handle the Alipay transaction with the Chinese seller.",
                },
                {
                    icon: ClipboardCheck,
                    title: "QC & Consolidation",
                    desc: "We receive the items, inspect them for defects or wrong sizes, and consolidate your purchases to save on international shipping.",
                }
            ],
            fearsTitle: "Solving Your Biggest Taobao Fears",
            fearsList: [
                { q: "What if the item is different from the picture?", a: "We provide detailed Quality Control photos when your item arrives at our warehouse. You confirm before we ship." },
                { q: "Can I buy from multiple different Taobao stores?", a: "Yes! We consolidate all your orders into a single shipment to reduce international shipping costs." },
                { q: "What if I need to return something?", a: "If the QC shows an issue, we handle the return process with the Taobao seller directly from our Chinese warehouse." },
                { q: "Do you also buy from Tmall?", a: "Yes, we support Tmall (Taobao's premium brand platform) and handle it exactly the same way." }
            ],
            feeTitle: "Our Fee",
            feeText: "Purchasing commission: 2% of the order amount. No hidden fees or inflated exchange rates.",
            cta: "Start Shopping on Taobao"
        },
        ru: {
            badge: "Розница и личные покупки",
            titlePrefix: "Посредник ",
            titleHighlight: "Taobao",
            subtitle: "Покупайте на Taobao безопасно. Мы выкупаем товары, проверяем их на складе и объединяем заказы в одну международную посылку. Доступ к миллионам товаров без китайских карт.",
            whyTitle: "Почему стоит покупать на Taobao?",
            whyText1: "Taobao — это крупнейший онлайн-маркетплейс в Китае с невероятным выбором товаров: от одежды и электроники до уникальных вещей по внутренним ценам.",
            whyText2: "Но платформа полностью на китайском языке, требует оплату через Alipay, а продавцы не отправляют товары за границу.",
            whyText3: "HappyBox — ваш надежный посредник для Taobao. Мы выкупим нужные товары, проверим их качество при получении на нашем складе и доставим прямо к вам.",
            processTitle: "Как мы выкупаем ваши заказы с Taobao",
            process: [
                {
                    icon: Search,
                    title: "Поиск товаров",
                    desc: "Найдите товары на Taobao и пришлите нам ссылки. Мы проверим детали и рейтинг продавца.",
                },
                {
                    icon: CreditCard,
                    title: "Оплата",
                    desc: "Вы переводите деньги нам удобным способом. Мы сами оплачиваем заказ продавцу через Alipay.",
                },
                {
                    icon: ClipboardCheck,
                    title: "Проверка (QC) и консолидация",
                    desc: "Мы получаем товары, проверяем их на брак или пересорт, и объединяем ваши покупки для экономии на доставке.",
                }
            ],
            fearsTitle: "Решаем ваши главные опасения при работе с Taobao",
            fearsList: [
                { q: "Что если товар отличается от фото продавца?", a: "Мы делаем детальные QC-фотографии при поступлении товара на наш склад. Вы подтверждаете отправку." },
                { q: "Можно ли заказывать из разных магазинов на Taobao?", a: "Да! Мы бесплатно консолидируем все ваши заказы в одну посылку, чтобы снизить стоимость международной доставки." },
                { q: "Что делать, если пришел брак?", a: "Если наша проверка выявляет брак, мы сами оформляем возврат продавцу на Taobao прямо с нашего склада в Китае." },
                { q: "Вы выкупаете товары с Tmall?", a: "Да, мы также работаем с Tmall (официальные магазины брендов) на тех же условиях." }
            ],
            feeTitle: "Наша комиссия:",
            feeText: "Комиссия за выкуп: 2% от суммы заказа. Никаких скрытых сборов или завышенных курсов валют.",
            cta: "Начать покупки на Taobao"
        }
    },
    'poizon': {
        en: {
            badge: "Authentic Sneakers & Streetwear",
            titlePrefix: "Poizon (Dewu) ",
            titleHighlight: "Agent",
            subtitle: "Get access to China's premier marketplace for authenticated sneakers, streetwear, and luxury goods. We purchase directly from Poizon and ship globally.",
            whyTitle: "Why Shop on Poizon?",
            whyText1: "Poizon (Dewu) is renowned for its strict multi-step authentication process. Every item is verified by experts before it reaches the buyer, ensuring 100% authenticity.",
            whyText2: "It offers a massive selection of limited-edition sneakers and streetwear often unavailable or much more expensive on Western platforms like StockX or GOAT.",
            whyText3: "HappyBox handles the entire purchase process. We receive the authenticated items at our warehouse and ship them internationally to you.",
            processTitle: "How We Handle Your Poizon Order",
            process: [
                {
                    icon: Search,
                    title: "Send Us the Item",
                    desc: "Share the link or screenshot from the Poizon app. We will quote you the current market price.",
                },
                {
                    icon: CreditCard,
                    title: "Payment",
                    desc: "Pay securely in your local currency. We handle the purchase on the Chinese app.",
                },
                {
                    icon: ClipboardCheck,
                    title: "Authentication & QC",
                    desc: "Poizon authenticates the item first. Then, it arrives at our warehouse where we provide final QC photos before international shipping.",
                }
            ],
            fearsTitle: "Solving Your Biggest Poizon Fears",
            fearsList: [
                { q: "Is it really authentic?", a: "Yes. Poizon is famous for its rigorous authentication process. Every item comes with an official certificate and verification tag." },
                { q: "What if the price changes?", a: "Poizon prices fluctuate like a stock market. If the price jumps significantly before we buy, we will pause and confirm with you." },
                { q: "Do you keep the original Poizon boxes?", a: "Yes, we ship items with all original packaging, including the blue Poizon authentication boxes and tags, unless you request otherwise." },
                { q: "Can I combine Poizon shoes with Taobao clothes?", a: "Absolutely! We can consolidate your Poizon purchases with any other items from Taobao or Weidian." }
            ],
            feeTitle: "Our Fee",
            feeText: "Purchasing commission: 5% of the order amount. Includes full support and QC handling.",
            cta: "Start Shopping on Poizon"
        },
        ru: {
            badge: "Оригинальные кроссовки и стритвир",
            titlePrefix: "Посредник ",
            titleHighlight: "Poizon (Dewu)",
            subtitle: "Получите доступ к главной китайской платформе аутентичных кроссовок, уличной одежды и люкса. Мы выкупаем товары с Poizon и доставляем по всему миру.",
            whyTitle: "Почему стоит покупать на Poizon?",
            whyText1: "Poizon (Dewu) славится своим строгим многоступенчатым процессом проверки на оригинальность. Каждая вещь проверяется экспертами.",
            whyText2: "Платформа предлагает огромный выбор лимитированных кроссовок и стритвира, которые часто недоступны или стоят намного дороже на западных площадках.",
            whyText3: "HappyBox берет на себя весь процесс выкупа. Мы получаем проверенные товары на наш склад в Китае и отправляем их вам.",
            processTitle: "Как мы выкупаем ваши заказы с Poizon",
            process: [
                {
                    icon: Search,
                    title: "Пришлите товар",
                    desc: "Поделитесь ссылкой или скриншотом из приложения Poizon. Мы назовем актуальную цену.",
                },
                {
                    icon: CreditCard,
                    title: "Оплата",
                    desc: "Оплатите удобным способом. Мы сами совершим покупку в китайском приложении.",
                },
                {
                    icon: ClipboardCheck,
                    title: "Проверка (QC)",
                    desc: "Сначала Poizon проверяет вещь на оригинальность. Затем она поступает на наш склад, где мы делаем финальные фото перед отправкой.",
                }
            ],
            fearsTitle: "Решаем ваши главные опасения при работе с Poizon",
            fearsList: [
                { q: "Товар точно оригинальный?", a: "Да. Poizon известен своей строгой проверкой. Каждая вещь поставляется с официальным сертификатом и фирменными пломбами." },
                { q: "Что если цена изменится?", a: "Цены на Poizon меняются как на бирже. Если цена резко вырастет до нашего выкупа, мы остановим процесс и согласуем с вами." },
                { q: "Вы сохраняете оригинальные коробки Poizon?", a: "Да, мы отправляем товары во всей оригинальной упаковке, включая синие коробки и сертификаты Poizon, если вы не попросите об обратном." },
                { q: "Можно ли объединить обувь с Poizon и одежду с Taobao?", a: "Конечно! Мы можем консолидировать ваши покупки с Poizon с любыми другими товарами с Taobao или Weidian." }
            ],
            feeTitle: "Наша комиссия:",
            feeText: "Комиссия за выкуп: 5% от суммы заказа. Включает полную поддержку и QC.",
            cta: "Начать покупки на Poizon"
        }
    },
    'tmall': {
        en: {
            badge: "Official Brands & Premium Goods",
            titlePrefix: "Tmall Agent:",
            titleHighlight: "Shop Official Brand Stores in China",
            subtitle: "Purchase safely from Tmall — Alibaba's premium B2C platform. Get guaranteed authentic products directly from official brand flagship stores.",
            whyTitle: "Why Shop on Tmall?",
            whyText1: "Tmall is strictly for verified brands and official retailers. Unlike Taobao, which is C2C, Tmall guarantees authenticity and quality.",
            whyText2: "Many international and Chinese premium brands run their official flagship stores on Tmall, offering exclusive domestic models and major discounts during sales festivals.",
            whyText3: "HappyBox helps you navigate the platform, process payments in RMB, and ship your premium goods globally.",
            processTitle: "How We Handle Your Tmall Order",
            process: [
                {
                    icon: Search,
                    title: "Find Official Goods",
                    desc: "Send us links from any Tmall flagship store.",
                },
                {
                    icon: CreditCard,
                    title: "Secure Payment",
                    desc: "We process the payment seamlessly without requiring a Chinese bank card.",
                },
                {
                    icon: ClipboardCheck,
                    title: "Inspection",
                    desc: "We inspect your premium goods at our warehouse to ensure perfect condition before international transit.",
                }
            ],
            fearsTitle: "Shopping Securely on Tmall",
            fearsList: [
                { q: "Are Tmall products always authentic?", a: "Yes, Tmall requires sellers to provide brand authorization. It is considered the most reliable B2C platform in China." },
                { q: "Can I participate in 11.11 sales?", a: "Yes! We can help you place orders during China's massive shopping festivals to secure the best discounts." },
                { q: "Is the fee the same as Taobao?", a: "Yes, our purchasing commission remains a low 2% for all Tmall orders." },
                { q: "How is it different from Taobao?", a: "Taobao is like eBay (anyone can sell), Tmall is like a digital mall (only verified brands can open stores)." }
            ],
            feeTitle: "Our Fee",
            feeText: "Purchasing commission: 2% of the order amount. Guaranteed authenticity.",
            cta: "Start Shopping on Tmall"
        },
        ru: {
            badge: "Официальные бренды",
            titlePrefix: "Посредник Tmall:",
            titleHighlight: "Официальные магазины брендов",
            subtitle: "Покупайте безопасно на Tmall — премиальной B2C платформе Alibaba. Получайте гарантированно оригинальные товары напрямую из официальных магазинов.",
            whyTitle: "Почему стоит покупать на Tmall?",
            whyText1: "Tmall предназначен строго для верифицированных брендов. В отличие от Taobao, Tmall гарантирует 100% оригинальность и качество.",
            whyText2: "Многие мировые и китайские бренды держат свои флагманские магазины именно на Tmall, предлагая эксклюзивные модели и огромные скидки во время распродаж.",
            whyText3: "HappyBox помогает вам выкупить товары, оплатить их в юанях и доставить ваши премиальные покупки в любую точку мира.",
            processTitle: "Как мы выкупаем ваши заказы с Tmall",
            process: [
                {
                    icon: Search,
                    title: "Выбор товаров",
                    desc: "Пришлите нам ссылки из любого флагманского магазина Tmall.",
                },
                {
                    icon: CreditCard,
                    title: "Оплата",
                    desc: "Мы берем на себя оплату продавцу — вам не нужны китайские карты.",
                },
                {
                    icon: ClipboardCheck,
                    title: "Проверка",
                    desc: "Мы проверяем ваши товары на нашем складе, чтобы убедиться в их идеальном состоянии перед отправкой.",
                }
            ],
            fearsTitle: "Безопасные покупки на Tmall",
            fearsList: [
                { q: "Товары на Tmall всегда оригинальные?", a: "Да, Tmall требует от продавцов авторизацию бренда. Это самая надежная B2C платформа в Китае." },
                { q: "Можно ли участвовать в распродаже 11.11?", a: "Да! Мы поможем вам оформить заказы во время главных китайских распродаж, чтобы поймать лучшие скидки." },
                { q: "Комиссия такая же, как на Taobao?", a: "Да, наша комиссия за выкуп с Tmall составляет всего 2%." },
                { q: "В чем отличие от Taobao?", a: "Taobao — это рынок, где может продавать каждый. Tmall — это цифровой торговый центр только для официальных брендов." }
            ],
            feeTitle: "Наша комиссия:",
            feeText: "Комиссия за выкуп: 2% от суммы заказа. Гарантия оригинальности.",
            cta: "Начать покупки на Tmall"
        }
    },
    'pinduoduo': {
        en: {
            badge: "Group Buying & Deep Discounts",
            titlePrefix: "Pinduoduo ",
            titleHighlight: "Agent Services",
            subtitle: "Access the lowest prices in China. We help you navigate Pinduoduo's group-buying mechanics to secure unbeatable deals on everyday items.",
            whyTitle: "Why Shop on Pinduoduo?",
            whyText1: "Pinduoduo is famous for its heavily discounted prices achieved through 'team purchases'. It's currently one of the most popular apps in China for extreme bargains.",
            whyText2: "While prices are incredibly low, the quality can vary widely, and navigating the app's social shopping features requires a local account.",
            whyText3: "We act as your Pinduoduo agent, joining group buys on your behalf to get the lowest price, and rigorously checking the quality when the items arrive at our warehouse.",
            processTitle: "How We Handle Your Pinduoduo Order",
            process: [
                {
                    icon: Search,
                    title: "Share Links",
                    desc: "Send us your Pinduoduo links. We'll verify the team-buy price.",
                },
                {
                    icon: CreditCard,
                    title: "Group Buying",
                    desc: "We handle the group-buy mechanics and payment using local accounts.",
                },
                {
                    icon: ClipboardCheck,
                    title: "Strict QC",
                    desc: "Because PDD prices are so low, we conduct strict quality control to ensure you get what you paid for.",
                }
            ],
            fearsTitle: "Shopping Safely on Pinduoduo",
            fearsList: [
                { q: "Why is Pinduoduo so cheap?", a: "It uses a direct-from-manufacturer and group-buying model. By organizing buyers into teams, they negotiate massive bulk discounts." },
                { q: "Is the quality good?", a: "Quality varies. It's excellent for basic items, home goods, and small electronics. For high-end fashion, we recommend Taobao or Tmall." },
                { q: "What if a team buy fails?", a: "If a group buy isn't completed within the time limit, the order is cancelled. We simply restart the process or buy it individually for you." },
                { q: "Do you consolidate PDD orders?", a: "Yes, PDD orders are fully compatible with our warehouse consolidation services." }
            ],
            feeTitle: "Our Fee",
            feeText: "Purchasing commission: 3% of the order amount. Due to the extra QC required for PDD items.",
            cta: "Start Shopping on Pinduoduo"
        },
        ru: {
            badge: "Групповые закупки и суперскидки",
            titlePrefix: "Посредник ",
            titleHighlight: "Pinduoduo (PDD)",
            subtitle: "Получите доступ к самым низким ценам в Китае. Мы помогаем участвовать в групповых закупках на Pinduoduo для максимальной выгоды.",
            whyTitle: "Почему стоит покупать на Pinduoduo?",
            whyText1: "Pinduoduo знаменит своими огромными скидками за счет механизма «совместных покупок». Сейчас это одно из самых популярных приложений в Китае.",
            whyText2: "Цены невероятно низкие, но качество может сильно варьироваться. Кроме того, для участия в групповых закупках нужен китайский аккаунт.",
            whyText3: "Мы выступаем вашим агентом: сами вступаем в группы для получения лучшей цены и тщательно проверяем качество товаров при получении.",
            processTitle: "Как мы выкупаем ваши заказы с Pinduoduo",
            process: [
                {
                    icon: Search,
                    title: "Пришлите ссылки",
                    desc: "Поделитесь ссылкой на товар. Мы проверим цену для совместной покупки.",
                },
                {
                    icon: CreditCard,
                    title: "Выкуп",
                    desc: "Мы берем на себя участие в группе и оплату заказа продавцу.",
                },
                {
                    icon: ClipboardCheck,
                    title: "Строгий QC",
                    desc: "Из-за низких цен на PDD мы проводим очень строгий контроль качества, чтобы убедиться в отсутствии брака.",
                }
            ],
            fearsTitle: "Безопасные покупки на Pinduoduo",
            fearsList: [
                { q: "Почему на Pinduoduo так дешево?", a: "Приложение использует модель прямых продаж с фабрик и групповых закупок, получая максимальные оптовые скидки." },
                { q: "А что с качеством?", a: "Качество бывает разным. Площадка идеальна для мелочей, товаров для дома и расходников. Для дорогой одежды лучше выбрать Taobao." },
                { q: "Что если группа не соберется?", a: "Если группа не собирается, заказ отменяется. Мы просто запустим процесс заново или выкупим по индивидуальной цене." },
                { q: "Вы объединяете заказы с PDD?", a: "Да, мы консолидируем товары с Pinduoduo с любыми другими вашими покупками." }
            ],
            feeTitle: "Наша комиссия:",
            feeText: "Комиссия за выкуп: 3% от суммы заказа. Включает усиленный контроль качества (QC).",
            cta: "Начать покупки на Pinduoduo"
        }
    },
    'xianyu': {
        en: {
            badge: "Second-hand & Rare Finds",
            titlePrefix: "Xianyu Agent:",
            titleHighlight: "China's Largest Second-hand Market",
            subtitle: "Discover rare items, collectibles, electronics, and second-hand goods on Xianyu (Idle Fish). We negotiate with individual sellers and inspect your items before shipping.",
            whyTitle: "Why Shop on Xianyu?",
            whyText1: "Xianyu, owned by Alibaba, is China's premier C2C second-hand marketplace. It's the best place to find discontinued items, cheap electronics, and unique collectibles.",
            whyText2: "Unlike Taobao, Xianyu sellers are usually individuals who do not accept returns and require careful negotiation.",
            whyText3: "HappyBox manages the entire process. We communicate with the seller, confirm item condition, handle the payment, and provide strict QC at our warehouse.",
            processTitle: "How We Handle Your Xianyu Order",
            process: [
                {
                    icon: Search,
                    title: "Find & Negotiate",
                    desc: "Send us the link. We'll chat with the seller to confirm the item's condition and availability.",
                },
                {
                    icon: CreditCard,
                    title: "Secure Purchase",
                    desc: "We buy the item securely. Xianyu is C2C, so fast action is often required.",
                },
                {
                    icon: ClipboardCheck,
                    title: "Vital QC",
                    desc: "Because items are used, our warehouse inspection is crucial. We verify the item matches the seller's description before shipping.",
                }
            ],
            fearsTitle: "Navigating Xianyu Safely",
            fearsList: [
                { q: "Are returns allowed on Xianyu?", a: "Usually no. This makes our QC process extremely important. If the item arrives at our warehouse fundamentally different from the listing, we can dispute it." },
                { q: "How do I communicate with the seller?", a: "You don't have to. Tell us what you want to ask or negotiate, and our Chinese-speaking team will handle the chat." },
                { q: "Is it safe to buy electronics?", a: "Yes, but we recommend thorough QC. We can power on devices and check basic functionality upon request." },
                { q: "Can I consolidate Xianyu orders?", a: "Yes, Xianyu orders can be mixed with Taobao, 1688, and other platforms in a single shipment." }
            ],
            feeTitle: "Our Fee",
            feeText: "Purchasing commission: 5% of the order amount. Includes negotiation and detailed C2C quality control.",
            cta: "Start Shopping on Xianyu"
        },
        ru: {
            badge: "Б/у товары и редкие находки",
            titlePrefix: "Посредник Xianyu:",
            titleHighlight: "Главная барахолка Китая (Idle Fish)",
            subtitle: "Находите редкие вещи, коллекционные предметы, электронику и б/у товары на Xianyu. Мы ведем переговоры с частными продавцами и тщательно проверяем товар перед отправкой.",
            whyTitle: "Почему стоит искать на Xianyu?",
            whyText1: "Xianyu — это крупнейшая C2C платформа (аналог Авито) от Alibaba. Здесь можно найти снятые с производства вещи, дешевую технику и уникальный винтаж.",
            whyText2: "В отличие от Taobao, продавцы здесь — обычные люди. Они часто не принимают возвраты, и с ними нужно уметь договариваться.",
            whyText3: "HappyBox берет всё на себя. Мы свяжемся с продавцом, уточним состояние вещи, безопасно выкупим её и проведем строгую проверку (QC) на нашем складе.",
            processTitle: "Как мы выкупаем с Xianyu",
            process: [
                {
                    icon: Search,
                    title: "Поиск и переговоры",
                    desc: "Пришлите ссылку. Мы свяжемся с продавцом, чтобы уточнить детали и наличие.",
                },
                {
                    icon: CreditCard,
                    title: "Безопасный выкуп",
                    desc: "Мы оперативно выкупаем товар (на барахолке хорошие вещи уходят быстро).",
                },
                {
                    icon: ClipboardCheck,
                    title: "Критически важный QC",
                    desc: "Так как вещи б/у, проверка на складе обязательна. Мы убедимся, что товар соответствует описанию.",
                }
            ],
            fearsTitle: "Безопасные покупки на барахолке",
            fearsList: [
                { q: "Можно ли вернуть товар на Xianyu?", a: "Обычно нет. Поэтому наш QC так важен. Если на склад придет вещь, явно не соответствующая описанию, мы откроем спор." },
                { q: "Как мне общаться с продавцом?", a: "Вам не нужно этого делать. Напишите нам свои вопросы, и наша команда задаст их продавцу на китайском." },
                { q: "Безопасно ли покупать технику?", a: "Да, но требуется тщательная проверка. По запросу мы можем включить устройство на складе и проверить базовые функции." },
                { q: "Можно ли объединить заказы с Xianyu?", a: "Да, покупки с Xianyu без проблем консолидируются с товарами с Taobao, 1688 и других площадок." }
            ],
            feeTitle: "Наша комиссия:",
            feeText: "Комиссия за выкуп: 5% от суммы заказа. Включает общение с продавцом и детальный QC.",
            cta: "Начать покупки на Xianyu"
        }
    },
    'alibaba': {
        en: {
            badge: "Global Wholesale",
            titlePrefix: "Alibaba Agent:",
            titleHighlight: "International B2B Sourcing",
            subtitle: "Source from Alibaba safely and efficiently. We help you find reliable suppliers, conduct factory audits, and manage your bulk international shipments.",
            whyTitle: "Why Use an Agent for Alibaba?",
            whyText1: "While Alibaba is built for international buyers, navigating the sea of trading companies to find real factories is challenging.",
            whyText2: "Communication barriers, high shipping rates offered by suppliers, and inconsistent quality are common pitfalls for independent buyers.",
            whyText3: "HappyBox acts as your local representative. We verify suppliers, consolidate orders from multiple Alibaba factories, and handle the shipping at much better rates.",
            processTitle: "How We Optimize Your Alibaba Orders",
            process: [
                {
                    icon: Search,
                    title: "Supplier Verification",
                    desc: "We help you distinguish between real manufacturers and trading companies.",
                },
                {
                    icon: ClipboardCheck,
                    title: "Consolidation",
                    desc: "Don't pay high shipping fees for every sample or small order. Send them all to our warehouse for consolidation.",
                },
                {
                    icon: Truck,
                    title: "Better Logistics",
                    desc: "Suppliers often mark up shipping. We provide transparent, competitive freight rates.",
                }
            ],
            fearsTitle: "Making B2B Sourcing Safer",
            fearsList: [
                { q: "Should I buy on Alibaba or 1688?", a: "If you want true domestic factory prices, use 1688. If you need customized export products or specific certifications, Alibaba is often better." },
                { q: "Can you inspect my Alibaba order?", a: "Yes, you can have your Alibaba supplier ship the goods to our Shenzhen warehouse for a full third-party inspection before export." },
                { q: "Do you handle the payment?", a: "For Alibaba, you can often pay the supplier directly via Trade Assurance, and just use us for inspection and shipping." },
                { q: "Can I combine Alibaba goods with Taobao?", a: "Yes, we can consolidate B2B samples from Alibaba with your personal purchases from Taobao." }
            ],
            feeTitle: "Our Fee",
            feeText: "Logistics and consolidation only. We do not charge a purchasing fee if you pay the Alibaba supplier directly.",
            cta: "Contact Us for B2B Support"
        },
        ru: {
            badge: "Глобальный B2B",
            titlePrefix: "Агент на Alibaba:",
            titleHighlight: "Международные оптовые закупки",
            subtitle: "Закупайте на Alibaba безопасно и эффективно. Мы поможем найти надежных поставщиков, проверим фабрики и организуем оптовую доставку.",
            whyTitle: "Зачем нужен агент на Alibaba?",
            whyText1: "Хотя Alibaba создана для иностранцев, найти там реальную фабрику среди тысяч торговых компаний — сложная задача.",
            whyText2: "Языковой барьер, завышенные цены на доставку от поставщиков и нестабильное качество — главные проблемы самостоятельных закупок.",
            whyText3: "HappyBox — ваш представитель в Китае. Мы проверим поставщика, объединим грузы от разных фабрик и доставим их по выгодным тарифам.",
            processTitle: "Как мы оптимизируем закупки на Alibaba",
            process: [
                {
                    icon: Search,
                    title: "Проверка поставщиков",
                    desc: "Поможем отличить реального производителя от перекупщика.",
                },
                {
                    icon: ClipboardCheck,
                    title: "Консолидация образцов",
                    desc: "Не переплачивайте за доставку каждого образца отдельно. Отправьте их на наш склад, а мы соберем их в одну посылку.",
                },
                {
                    icon: Truck,
                    title: "Выгодная логистика",
                    desc: "Поставщики часто накручивают цены на доставку. Мы предлагаем прозрачные и конкурентные тарифы на фрахт.",
                }
            ],
            fearsTitle: "Делаем B2B безопаснее",
            fearsList: [
                { q: "Где лучше покупать: Alibaba или 1688?", a: "Если нужны минимальные внутрикитайские цены — 1688. Если нужен кастомизированный товар под экспорт с сертификатами — лучше Alibaba." },
                { q: "Вы можете проверить мой заказ с Alibaba?", a: "Да, попросите поставщика отправить груз на наш склад в Шэньчжэне для независимой инспекции перед отправкой за рубеж." },
                { q: "Вы проводите оплату?", a: "На Alibaba вы обычно можете платить поставщику напрямую через Trade Assurance, а нас использовать только для проверки и логистики." },
                { q: "Можно объединить образцы с Alibaba и вещи с Taobao?", a: "Да, мы без проблем консолидируем ваши B2B образцы с личными покупками." }
            ],
            feeTitle: "Наша комиссия:",
            feeText: "Вы платите только за логистику и складские услуги. Мы не берем комиссию за выкуп, если вы платите на Alibaba напрямую.",
            cta: "Связаться для B2B поддержки"
        }
    }
};

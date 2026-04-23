
import React, { useState, useRef } from 'react';
import { Language, translations } from '../utils/translations';
import { Send, Copy, Check, Mail } from 'lucide-react';
import { trackLead, MessengerPlatform } from '../utils/analytics';

interface ContactProps {
  language: Language;
  currentPage?: string;
}

const WhatsAppIcon = ({ size = 20, className = "" }: { size?: number, className?: string }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
  </svg>
);

export const Contact: React.FC<ContactProps> = ({ language, currentPage = 'home' }) => {
  const t = translations[language].contact;
  const [copied, setCopied] = useState(false);
  
  // Hover tracking logic
  const hoverTimers = useRef<Record<string, number>>({});
  const HOVER_DURATION = 2000; // 2 seconds delay as requested

  const startHover = (platform: MessengerPlatform) => {
    hoverTimers.current[platform] = window.setTimeout(() => {
      trackLead(platform, 'contact_section', 'hover');
      delete hoverTimers.current[platform];
    }, HOVER_DURATION);
  };

  const cancelHover = (platform: MessengerPlatform) => {
    if (hoverTimers.current[platform]) {
      clearTimeout(hoverTimers.current[platform]);
      delete hoverTimers.current[platform];
    }
  };

  const handleCopyWeChat = () => {
    navigator.clipboard.writeText('HappyBoxLogistics');
    setCopied(true);
    trackLead('wechat', 'contact_section', 'copy');
    setTimeout(() => setCopied(false), 2000);
  };

  const emailUser = 'support';
  const emailDomain = 'happyboxlogistics.com';
  const fullEmail = `${emailUser}@${emailDomain}`;

  const getDynamicHeading = () => {
    if (language === 'ru') {
      switch (currentPage) {
        case 'taobao': return 'Выкуп и доставка с Таобао — проще простого с HappyBox!';
        case '1688': return 'Оптовые закупки на 1688 — проще простого с HappyBox!';
        case 'poizon': return 'Заказ оригиналов с Poizon — проще простого с HappyBox!';
        case 'usa': return 'Доставка грузов из Китая в США — проще простого с HappyBox!';
        case 'eu': return 'Доставка из Китая в Европу — проще простого с HappyBox!';
        case 'russia': return 'Белая доставка из Китая в Россию — проще простого с HappyBox!';
        case 'uae': return 'Доставка из Китая в Эмираты — проще простого с HappyBox!';
        case 'amazon': return 'Доставка на склады Amazon FBA — проще простого с HappyBox!';
        case 'warehousing': return 'Консолидация и хранение в Китае — проще простого с HappyBox!';
        case 'inspection': return 'Проверка качества в Китае — проще простого с HappyBox!';
        case 'tmall': return 'Выкуп с Tmall — проще простого с HappyBox!';
        case 'pinduoduo': return 'Выкуп с Pinduoduo — проще простого с HappyBox!';
        case 'xianyu': return 'Выкуп с Xianyu — проще простого с HappyBox!';
        case 'weidian': return 'Выкуп с Weidian — проще простого с HappyBox!';
        default: return 'Начните закупки и доставку из Китая уже сегодня';
      }
    } else {
      switch (currentPage) {
        case 'taobao': return 'Taobao shopping and shipping is easy with HappyBox!';
        case '1688': return 'Wholesale from 1688 is easy with HappyBox!';
        case 'poizon': return 'Ordering from Poizon is easy with HappyBox!';
        case 'usa': return 'Shipping from China to the USA is easy with HappyBox!';
        case 'eu': return 'Shipping from China to Europe is easy with HappyBox!';
        case 'russia': return 'Shipping from China to Russia is easy with HappyBox!';
        case 'uae': return 'Shipping from China to the UAE is easy with HappyBox!';
        case 'amazon': return 'Shipping to Amazon FBA is easy with HappyBox!';
        case 'warehousing': return 'Warehousing in China is easy with HappyBox!';
        case 'inspection': return 'Quality inspection in China is easy with HappyBox!';
        case 'tmall': return 'Shopping on Tmall is easy with HappyBox!';
        case 'pinduoduo': return 'Shopping on Pinduoduo is easy with HappyBox!';
        case 'xianyu': return 'Shopping on Xianyu is easy with HappyBox!';
        case 'weidian': return 'Shopping on Weidian is easy with HappyBox!';
        default: return 'Start Your Sourcing and Shipping from China Today';
      }
    }
  };

  const getDynamicText = () => {
    if (language === 'ru') {
      switch (currentPage) {
        case 'taobao': return 'Поможем найти, выкупить и проверить любые товары с Таобао. Организуем надежную доставку ваших покупок прямо до двери без скрытых комиссий.';
        case '1688': return 'Организуем оптовые закупки на 1688 напрямую у фабрик. Проверим поставщиков, консолидируем груз и доставим партию в целости и сохранности.';
        case 'poizon': return 'Оригинальные кроссовки, одежда и аксессуары с Poizon (Dewu). Выкупаем быстро, проверяем на складе и доставляем с сохранением фирменной упаковки.';
        case 'usa': return 'Надежная логистика из Китая в США. Предлагаем оптимальные маршруты авиа и морской доставки для личных посылок и коммерческих грузов.';
        case 'eu': return 'Доставляем грузы из Китая в страны Европы с полным таможенным оформлением (DDP). Быстро, надежно и без лишних хлопот с документами.';
        case 'russia': return 'Белая доставка из Китая в Россию со всеми закрывающими документами. Оптимальные логистические решения для бизнеса любого масштаба.';
        case 'uae': return 'Регулярные отправки из Китая в ОАЭ. Доставляем товары для маркетплейсов, бизнеса и личного пользования точно в срок.';
        case 'amazon': return 'Полный комплекс услуг по доставке на склады Amazon FBA. Маркировка, упаковка по стандартам платформы и прямая отгрузка.';
        case 'warehousing': return 'Собственные склады в Китае для консолидации, хранения и обработки ваших грузов. Бесплатное хранение, надежная упаковка и фотоотчеты.';
        case 'inspection': return 'Тщательная проверка качества товаров перед отправкой. Выявим брак, проверим соответствие размерам и цветам, предоставим детальный отчет.';
        case 'tmall': return 'Выкуп брендовых товаров с Tmall. Гарантия подлинности, быстрая обработка заказов и бережная доставка ваших покупок.';
        case 'pinduoduo': return 'Поможем выкупить товары по самым выгодным ценам с Pinduoduo. Объединим множество мелких посылок в одну для экономии на доставке.';
        case 'xianyu': return 'Безопасный выкуп б/у и редких товаров с Xianyu (Idle Fish). Договоримся с продавцом, проверим состояние товара и надежно упакуем.';
        case 'weidian': return 'Выкуп товаров из магазинов Weidian. Удобный сервис для заказа эксклюзивных вещей напрямую от китайских продавцов.';
        default: return t.text;
      }
    } else {
      switch (currentPage) {
        case 'taobao': return 'We will help you find, purchase, and inspect any goods from Taobao. We organize reliable delivery of your purchases right to your door with no hidden fees.';
        case '1688': return 'We organize wholesale purchases on 1688 directly from factories. We verify suppliers, consolidate cargo, and deliver your batch safely and securely.';
        case 'poizon': return 'Original sneakers, clothing, and accessories from Poizon (Dewu). We purchase quickly, inspect at our warehouse, and deliver preserving the original packaging.';
        case 'usa': return 'Reliable logistics from China to the USA. We offer optimal air and sea freight routes for personal parcels and commercial cargo.';
        case 'eu': return 'We deliver cargo from China to European countries with full customs clearance (DDP). Fast, reliable, and without paperwork hassle.';
        case 'russia': return 'Official delivery from China to Russia with all required documentation. Optimal logistics solutions for businesses of any scale.';
        case 'uae': return 'Regular shipments from China to the UAE. We deliver goods for marketplaces, businesses, and personal use right on time.';
        case 'amazon': return 'Full range of services for delivery to Amazon FBA warehouses. Labeling, packaging according to platform standards, and direct shipment.';
        case 'warehousing': return 'Our own warehouses in China for consolidation, storage, and processing of your cargo. Free storage, reliable packaging, and photo reports.';
        case 'inspection': return 'Thorough quality inspection of goods before shipment. We detect defects, check size and color accuracy, and provide a detailed report.';
        case 'tmall': return 'Purchasing branded goods from Tmall. Authenticity guarantee, fast order processing, and careful delivery of your purchases.';
        case 'pinduoduo': return 'We will help you buy goods at the best prices from Pinduoduo. We consolidate multiple small parcels into one to save on shipping.';
        case 'xianyu': return 'Safe purchase of used and rare goods from Xianyu (Idle Fish). We negotiate with the seller, check the item\'s condition, and pack it securely.';
        case 'weidian': return 'Purchasing goods from Weidian stores. A convenient service for ordering exclusive items directly from Chinese sellers.';
        default: return t.text;
      }
    }
  };

  return (
    <section className="pt-12 pb-20 bg-brand-light/20">
      <div className="container mx-auto">
        <div className="bg-white rounded-[30px] p-8 lg:p-16 text-center shadow-sm max-w-[1200px] mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark mb-8 tracking-tight">
            {getDynamicHeading()}
          </h2>
          
          <p className="text-lg leading-relaxed text-gray-600 max-w-4xl mx-auto mb-12 font-medium">
            {getDynamicText()}
          </p>
          
          <div className="text-center mt-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-brand-dark tracking-tight">{t.contactUs}</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto mt-4 mb-12">
            {/* Telegram */}
            <div className="flex flex-col items-center group">
              <div 
                className="aspect-square w-full max-w-[280px] rounded-[30px] overflow-hidden shadow-sm bg-white mb-6 border-2 border-transparent group-hover:border-brand-blue/20 transition-all cursor-pointer"
                onMouseEnter={() => startHover('telegram')}
                onMouseLeave={() => cancelHover('telegram')}
                onClick={() => trackLead('telegram', 'contact_section', 'click')}
              >
                <img 
                  src="https://i.ibb.co/h19jVqpz/happybox-tg.webp" 
                  alt="Telegram QR" 
                  width="300" height="300" loading="lazy" className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-2xl font-bold text-brand-dark mb-4">Telegram</h3>
              <a 
                href="https://t.me/d_china_hbl" 
                target="_blank" rel="noopener noreferrer"
                onClick={() => trackLead('telegram', 'contact_section', 'click')}
                className="flex items-center gap-2 bg-brand-blue text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-600 transition-all shadow-lg active:scale-95 w-full justify-center"
              >
                <Send size={20} />
                {language === 'en' ? 'Open Telegram' : 'Открыть Telegram'}
              </a>
            </div>

            {/* WhatsApp */}
            <div className="flex flex-col items-center group">
              <div 
                className="aspect-square w-full max-w-[280px] rounded-[30px] overflow-hidden shadow-sm bg-white mb-6 border-2 border-transparent group-hover:border-[#25D366]/20 transition-all cursor-pointer"
                onMouseEnter={() => startHover('whatsapp')}
                onMouseLeave={() => cancelHover('whatsapp')}
                onClick={() => trackLead('whatsapp', 'contact_section', 'click')}
              >
                <img 
                  src="https://i.ibb.co/jkVdFCpn/happybox-wa.webp" 
                  alt="WhatsApp QR" 
                  width="300" height="300" loading="lazy" className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-2xl font-bold text-brand-dark mb-4">WhatsApp</h3>
              <a 
                href="https://wa.me/8613048875834" 
                target="_blank" rel="noopener noreferrer"
                onClick={() => trackLead('whatsapp', 'contact_section', 'click')}
                className="flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-xl font-bold hover:bg-[#20ba57] transition-all shadow-lg active:scale-95 w-full justify-center"
              >
                <WhatsAppIcon size={20} />
                {language === 'en' ? 'Open WhatsApp' : 'Открыть WhatsApp'}
              </a>
            </div>

            {/* WeChat */}
            <div className="flex flex-col items-center group">
              <div 
                className="aspect-square w-full max-w-[280px] rounded-[30px] overflow-hidden shadow-sm bg-white mb-6 border-2 border-transparent group-hover:border-[#07C160]/20 transition-all cursor-pointer"
                onMouseEnter={() => startHover('wechat')}
                onMouseLeave={() => cancelHover('wechat')}
              >
                <img 
                  src="https://i.ibb.co/YFjhyYvW/happybox-wechat.webp" 
                  alt="WeChat QR" 
                  width="300" height="300" loading="lazy" className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-2xl font-bold text-brand-dark mb-4">WeChat</h3>
              <button 
                onClick={handleCopyWeChat}
                className="flex items-center gap-2 bg-[#07C160] text-white px-6 py-3 rounded-xl font-bold hover:bg-[#06ad56] transition-all shadow-lg active:scale-95 w-full justify-center"
              >
                {copied ? <Check size={20} /> : <Copy size={20} />}
                {copied ? (language === 'en' ? 'Copied!' : 'Скопировано!') : (language === 'en' ? 'Copy ID' : 'Скопировать ID')}
              </button>
            </div>
          </div>

          {/* Email */}
          <div className="max-w-4xl mx-auto bg-gray-50 rounded-[25px] p-8 flex flex-col md:flex-row items-center justify-between gap-6 border border-gray-100">
            <div className="flex items-center gap-5">
              <div className="hidden md:flex w-16 h-16 bg-white rounded-full items-center justify-center text-brand-blue shadow-sm">
                <Mail size={32} />
              </div>
              <div className="text-left">
                <h3 className="text-2xl font-bold text-brand-dark">Email</h3>
                <p className="text-gray-500 font-medium">{fullEmail}</p>
              </div>
            </div>
            <a 
              href={`mailto:${fullEmail}`}
              onClick={() => trackLead('email', 'contact_section', 'click')}
              className="bg-white text-brand-dark border-2 border-gray-200 px-8 py-3 rounded-xl font-bold hover:border-brand-blue hover:text-brand-blue transition-all active:scale-95 w-full md:w-auto text-center"
            >
              {language === 'en' ? 'Send Email' : 'Написать письмо'}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

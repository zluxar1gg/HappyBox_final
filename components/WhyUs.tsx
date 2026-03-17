import React, { useState } from 'react';
import { 
  Wallet, 
  Warehouse, 
  RefreshCw, 
  ShieldCheck, 
  Headphones,
  ArrowRight
} from 'lucide-react';
import { Language } from '../utils/translations';

interface WhyUsProps {
  language: Language;
}

export const WhyUs: React.FC<WhyUsProps> = ({ language }) => {
  const [activeTab, setActiveTab] = useState(0);
  const isEn = language === 'en';

  const features = [
    {
      id: 'commission',
      icon: Wallet,
      title: isEn ? '0% Commission' : '0% Комиссия',
      description: isEn 
        ? 'We charge absolutely 0% commission for purchasing from Taobao, Poizon, Weidian, and Pinduoduo. You pay exactly the price listed on the marketplace.'
        : 'Мы берем ровно 0% комиссии за выкуп с Taobao, Poizon, Weidian и Pinduoduo. Вы платите ровно ту цену, которая указана на маркетплейсе.',
      image: 'https://i.ibb.co/9mgrcVjH/happypox-free.webp',
      color: 'bg-blue-50 text-blue-600'
    },
    {
      id: 'storage',
      icon: Warehouse,
      title: isEn ? 'Free Storage' : 'Бесплатный Склад',
      description: isEn
        ? 'Shop from multiple sellers at your own pace. We provide unlimited free storage in our secure warehouse until you are ready to ship.'
        : 'Покупайте у разных продавцов в своем темпе. Мы предоставляем неограниченное бесплатное хранение на нашем охраняемом складе.',
      image: 'https://i.ibb.co/VppWbV1Q/happybox-warehouse.webp',
      color: 'bg-green-50 text-green-600'
    },
    {
      id: 'consolidation',
      icon: RefreshCw,
      title: isEn ? 'Free Consolidation' : 'Бесплатная Консолидация',
      description: isEn
        ? 'Combine orders from Taobao, 1688, and Poizon into one single package. We remove unnecessary shoe boxes and packaging to save you up to 60% on shipping.'
        : 'Объединяйте заказы с Taobao, 1688 и Poizon в одну посылку. Мы уберем лишние коробки и упаковку, чтобы сэкономить вам до 60% на доставке.',
      image: 'https://i.ibb.co/4g9cwZF4/happybox-consolidation.webp',
      color: 'bg-purple-50 text-purple-600'
    },
    {
      id: 'return',
      icon: ShieldCheck,
      title: isEn ? 'Free Returns' : 'Бесплатный Возврат',
      description: isEn
        ? 'Item arrived damaged or wrong size? We handle the return process with the Chinese seller for free before it leaves China.'
        : 'Товар пришел с браком или не того размера? Мы бесплатно оформим возврат китайскому продавцу еще до отправки из Китая.',
      image: 'https://i.ibb.co/pjkFJxYL/happybox-return.webp',
      color: 'bg-orange-50 text-orange-600'
    },
    {
      id: 'support',
      icon: Headphones,
      title: isEn ? 'Friendly Support' : 'Дружелюбная Поддержка',
      description: isEn
        ? 'Real humans, not bots. Our support team speaks English, Spanish, German, Russian and Chinese and is ready to help you find products, negotiate with sellers, and solve any issues.'
        : 'Живые люди, а не боты. Наша поддержка говорит на английском, испанском, немецком, русском и китайском языках, готова помочь найти товар, договориться с продавцом и решить любой вопрос.',
      image: 'https://i.ibb.co/zHJSbLBn/happybox-support.webp',
      color: 'bg-pink-50 text-pink-600'
    }
  ];

  return (
    <section className="py-20 bg-brand-light/20 overflow-hidden">
      <div className="container mx-auto px-4 xl:px-0">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-brand-dark mb-6 tracking-tight">
            {isEn ? 'Why Choose HappyBox?' : 'Почему выбирают HappyBox?'}
          </h2>
          <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto font-bold">
            {isEn 
              ? 'A service by people, for people, driven by real connection and support. We simplify cross-border shopping with transparent pricing and premium services at no extra cost.' 
              : 'Наш сервис создан людьми для людей — с живым общением и искренней поддержкой. Мы делаем покупки за рубежом простыми и понятными: честные цены и премиальное обслуживание, которое уже включено в стоимость.'}
          </p>
        </div>

        {/* Horizontal Tabs (Apple Style) */}
        <div className="mb-0">
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {features.map((feature, idx) => (
              <button
                key={feature.id}
                onClick={() => setActiveTab(idx)}
                className={`px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 flex items-center gap-2 border ${
                  activeTab === idx 
                    ? 'bg-brand-dark text-white border-brand-dark shadow-lg scale-105' 
                    : 'bg-white text-gray-500 border-gray-100 hover:border-gray-300 hover:bg-gray-50'
                }`}
              >
                <feature.icon size={18} />
                {feature.title}
              </button>
            ))}
          </div>

          <div className="bg-white rounded-[3rem] p-8 md:p-12 relative overflow-hidden min-h-[400px] flex items-center shadow-sm border border-gray-100">
            <div className="grid md:grid-cols-2 gap-12 items-center relative z-10 w-full">
              <div className="order-2 md:order-1 animate-fade-in">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 ${features[activeTab].color}`}>
                  {React.createElement(features[activeTab].icon, { size: 32 })}
                </div>
                <h3 className="text-3xl md:text-4xl font-black text-brand-dark mb-6 leading-tight">
                  {features[activeTab].title}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  {features[activeTab].description}
                </p>
              </div>
              <div className="order-1 md:order-2 relative h-[300px] md:h-[400px] rounded-3xl overflow-hidden shadow-2xl animate-fade-in">
                <img 
                  src={features[activeTab].image} 
                  alt={features[activeTab].title} 
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

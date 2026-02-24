
import React from 'react';
import { Language, translations } from '../utils/translations';

interface AboutProps {
  language: Language;
}

export const About: React.FC<AboutProps> = ({ language }) => {
  const t = translations[language].about;

  const renderText = (text: string) => {
    const parts = text.split('**');
    return parts.map((part, index) => 
      index % 2 === 1 ? <span key={index} className="font-bold text-brand-dark">{part}</span> : part
    );
  };

  return (
    <section className="py-20 bg-cream">
      <div className="container mx-auto px-6 xl:px-0">
        {/* Full Width Title */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-brand-dark mb-12 md:mb-20 text-center max-w-5xl mx-auto leading-tight tracking-tight">
            {t.title}
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image Column */}
            <div className="flex justify-center lg:justify-center">
                <img 
                  src="https://i.ibb.co/C55Gbh27/happyboxdelivery.webp" 
                  alt="Happy Box Delivery Illustration" 
                  width="800"
                  height="800"
                  loading="lazy"
                  decoding="async"
                  className="w-full max-w-[500px] lg:max-w-[600px] object-contain drop-shadow-2xl"
                />
            </div>

            {/* Text Column */}
            <div className="text-center lg:text-left space-y-6">
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-medium max-w-2xl mx-auto lg:mx-0">
                    {renderText(t.trustedText)}
                </p>
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-medium max-w-2xl mx-auto lg:mx-0">
                    {renderText(t.text)}
                </p>
            </div>
        </div>
      </div>
    </section>
  );
};

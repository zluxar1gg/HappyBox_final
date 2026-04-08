import React from 'react';
import { useLocation } from 'react-router-dom';

export const SchemaMarkup: React.FC = () => {
  const location = useLocation();
  const isTaobaoRu = location.pathname === '/ru/taobao';

  const baseSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "HappyBox Logistics",
    "url": "https://happyboxlogistics.com",
    "logo": "https://i.ibb.co/629m3RB/favicon.png",
    "email": "support@happyboxlogistics.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "27B, Nanjinyuan Building",
      "addressLocality": "Shenzhen",
      "addressRegion": "Guangdong",
      "addressCountry": "CN"
    },
    "sameAs": [
      "https://instagram.com/happybox_dan",
      "https://t.me/happyboxlogistics",
      "https://www.facebook.com/HappyBoxLogistics"
    ]
  };

  const taobaoSchema = isTaobaoRu ? [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Выкуп с Taobao",
      "provider": {
        "@type": "Organization",
        "name": "HappyBox Logistics"
      },
      "description": "Покупайте на Taobao, 1688 и Tmall с комиссией 0%. HappyBox предлагает бесплатную проверку качества, консолидацию и доставку по всему миру.",
      "areaServed": ["RU", "US", "AE", "EU"],
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD",
        "description": "0% комиссия за выкуп"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Какая комиссия за выкуп с Таобао?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Мы выкупаем товары с Taobao, 1688 и Tmall с комиссией 0%."
          }
        },
        {
          "@type": "Question",
          "name": "Нужен ли китайский номер телефона?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Нет, вам не нужно регистрироваться на Taobao. Мы берем весь процесс выкупа на себя."
          }
        },
        {
          "@type": "Question",
          "name": "Вы проверяете товары перед отправкой?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Да, мы предоставляем бесплатную проверку на брак, размер и цвет (QC) на нашем складе в Китае."
          }
        }
      ]
    }
  ] : [];

  const schemas = [baseSchema, ...taobaoSchema];

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
};

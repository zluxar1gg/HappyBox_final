import React from 'react';
import { Language, translations } from '../utils/translations';

interface SchemaMarkupProps {
  currentPage: string;
  language: Language;
}

export const SchemaMarkup: React.FC<SchemaMarkupProps> = ({ currentPage, language }) => {
  const t = translations[language];

  // 1. Organization Schema (Always present)
  const organizationSchema = {
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

  // 2. Service Schema (For service/destination pages)
  let serviceSchema = null;
  if (currentPage !== 'home') {
    const serviceT = (t as any)[currentPage];
    if (serviceT) {
      serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": serviceT.title || "Logistics Service",
        "provider": {
          "@type": "Organization",
          "name": "HappyBox Logistics"
        },
        "description": serviceT.desc || serviceT.text || "Professional logistics and sourcing services from China.",
        "areaServed": ["RU", "US", "AE", "EU", "BY", "KZ"],
        "url": `https://happyboxlogistics.com${language === 'ru' ? '/ru' : ''}/${currentPage}`
      };
    }
  }

  // 3. FAQPage Schema (Only for home page, where FAQ is rendered)
  let faqSchema = null;
  if (currentPage === 'home' && t.faq && t.faq.items) {
    faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": t.faq.items.map((item: any) => ({
        "@type": "Question",
        "name": item.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": item.answer
        }
      }))
    };
  }

  const schemas = [organizationSchema];
  if (serviceSchema) schemas.push(serviceSchema);
  if (faqSchema) schemas.push(faqSchema);

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

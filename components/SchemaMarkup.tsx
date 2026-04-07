import React from 'react';

export const SchemaMarkup: React.FC = () => {
  const schema = {
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

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

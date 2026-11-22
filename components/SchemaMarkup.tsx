import React from "react";
import { useParams } from "react-router-dom";
import { Language, translations } from "../utils/translations";
import { getBlogPostBySlug } from "../utils/blogData";
import { pageFaqs, FaqItem } from "../utils/pageFaqs";
import { BASE_URL, DEFAULT_OG_IMAGE, getSeoMeta, seoMap } from "../utils/seo";

interface SchemaMarkupProps {
  currentPage: string;
  language: Language;
}

// Pages that already render <Breadcrumbs /> with their own BreadcrumbList JSON-LD
const PAGES_WITH_BREADCRUMBS_COMPONENT = new Set([
  "usa",
  "eu",
  "uae",
  "russia",
  "amazon",
  "amazon-canada",
  "destinations",
  "blog",
  "blogPost",
  "canada",
  "thailand",
  "indonesia",
  "argentina",
  "south-africa",
  "georgia",
  "israel",
  "australia",
  "1688",
  "alibaba",
  "taobao",
  "poizon",
  "tmall",
  "pinduoduo",
  "xianyu",
  "weidian",
  "inspection",
  "warehousing",
]);

export const SchemaMarkup: React.FC<SchemaMarkupProps> = ({
  currentPage,
  language,
}) => {
  if (["404", "dashboard", "admin"].includes(currentPage)) return null;

  const t = translations[language];
  const { slug } = useParams<{ slug?: string }>();
  const prefix = language === "ru" ? "/ru" : "";

  // 1. Unified Organization Schema (Single instance sitewide)
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "HappyBox Logistics",
    alternateName: "HappyBox",
    url: BASE_URL,
    logo: "https://i.ibb.co/629m3RB/favicon.png",
    image: DEFAULT_OG_IMAGE,
    email: "support@happyboxlogistics.com",
    telephone: "+86 130 4887 5834",
    address: {
      "@type": "PostalAddress",
      streetAddress: "27B, Nanjinyuan Building",
      addressLocality: "Shenzhen",
      addressRegion: "Guangdong",
      addressCountry: "CN",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+86 130 4887 5834",
        contactType: "customer support",
        availableLanguage: ["Russian", "English", "Chinese"],
      },
    ],
    sameAs: [
      "https://instagram.com/happybox_dan",
      "https://t.me/happyboxlogistics",
      "https://t.me/d_china_hbl",
      "https://wa.me/8613048875834",
      "https://www.facebook.com/HappyBoxLogistics",
    ],
  };

  // 2. Service Schema (For service, marketplace & destination pages using unified SEO meta)
  let serviceSchema: Record<string, any> | null = null;
  if (
    currentPage !== "home" &&
    currentPage !== "blog" &&
    currentPage !== "blogPost" &&
    currentPage !== "destinations" &&
    seoMap[currentPage]
  ) {
    const meta = getSeoMeta(language, currentPage);
    serviceSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      name: meta.title,
      description: meta.description,
      provider: {
        "@type": "Organization",
        name: "HappyBox Logistics",
        url: BASE_URL,
      },
      areaServed: ["US", "EU", "AE", "RU", "CA", "AU", "TH", "ID", "AR", "ZA", "GE", "IL"],
      url: `${BASE_URL}${prefix}/${currentPage}`,
    };
  }

  // 3. FAQPage Schema (Single instance — only when FAQ items exist on page)
  let faqSchema: Record<string, any> | null = null;
  let faqItems: FaqItem[] = [];

  if (currentPage === "home" && t.faq?.items) {
    faqItems = t.faq.items.map((item: any) => ({
      question: item.question,
      answer: item.answer,
    }));
  } else if (
    currentPage === "blogPost" &&
    slug &&
    pageFaqs.blogPosts?.[slug]?.[language]
  ) {
    faqItems = pageFaqs.blogPosts[slug][language];
  } else if (pageFaqs.pages?.[currentPage]?.[language]) {
    faqItems = pageFaqs.pages[currentPage][language];
  }

  if (faqItems && faqItems.length > 0) {
    faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqItems.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    };
  }

  // 4. BlogPosting Schema (For blog articles)
  let articleSchema: Record<string, any> | null = null;
  if (currentPage === "blogPost" && slug) {
    const post = getBlogPostBySlug(slug, language);
    if (post) {
      const articleUrl = `${BASE_URL}${language === "ru" ? "/ru/blog/" : "/blog/"}${slug}`;
      const imageUrl = post.imageUrl.startsWith("http")
        ? post.imageUrl
        : `${BASE_URL}${post.imageUrl}`;

      articleSchema = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": articleUrl,
        },
        headline: post.title,
        image: [imageUrl],
        datePublished: post.date,
        dateModified: post.date,
        inLanguage: language,
        author: {
          "@type": "Organization",
          name: "HappyBox Logistics",
          url: BASE_URL,
        },
        publisher: {
          "@type": "Organization",
          name: "HappyBox Logistics",
          logo: {
            "@type": "ImageObject",
            url: "https://i.ibb.co/629m3RB/favicon.png",
          },
        },
        description: post.excerpt,
      };
    }
  }

  // 5. BreadcrumbList Schema (ONLY for pages without <Breadcrumbs /> component to prevent duplicates)
  let breadcrumbSchema: Record<string, any> | null = null;
  if (
    currentPage !== "home" &&
    !PAGES_WITH_BREADCRUMBS_COMPONENT.has(currentPage)
  ) {
    const listItems = [
      {
        "@type": "ListItem",
        position: 1,
        name: language === "ru" ? "Главная" : "Home",
        item: language === "ru" ? `${BASE_URL}/ru` : BASE_URL,
      },
    ];

    let position = 2;

    if (currentPage === "blogPost" && slug) {
      listItems.push({
        "@type": "ListItem",
        position: position++,
        name: language === "ru" ? "Блог" : "Blog",
        item: `${BASE_URL}${prefix}/blog`,
      });
      const post = getBlogPostBySlug(slug, language);
      if (post) {
        listItems.push({
          "@type": "ListItem",
          position: position++,
          name: post.title,
          item: `${BASE_URL}${prefix}/blog/${slug}`,
        });
      }
    } else if (currentPage === "blog") {
      listItems.push({
        "@type": "ListItem",
        position: position++,
        name: language === "ru" ? "Блог" : "Blog",
        item: `${BASE_URL}${prefix}/blog`,
      });
    } else if (currentPage === "destinations") {
      listItems.push({
        "@type": "ListItem",
        position: position++,
        name: language === "ru" ? "Все направления" : "All Destinations",
        item: `${BASE_URL}${prefix}/destinations`,
      });
    } else {
      // Destination pages without <Breadcrumbs /> (russia, amazon, amazon-canada)
      listItems.push({
        "@type": "ListItem",
        position: position++,
        name: language === "ru" ? "Все направления" : "All Destinations",
        item: `${BASE_URL}${prefix}/destinations`,
      });
      const meta = getSeoMeta(language, currentPage);
      listItems.push({
        "@type": "ListItem",
        position: position++,
        name: meta.title,
        item: `${BASE_URL}${prefix}/${currentPage}`,
      });
    }

    if (listItems.length > 1) {
      breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: listItems,
      };
    }
  }

  const schemas: Record<string, any>[] = [organizationSchema];
  if (serviceSchema) schemas.push(serviceSchema);
  if (faqSchema) schemas.push(faqSchema);
  if (articleSchema) schemas.push(articleSchema);
  if (breadcrumbSchema) schemas.push(breadcrumbSchema);

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

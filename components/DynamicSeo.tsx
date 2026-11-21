import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Language } from '../utils/translations';
import { BASE_URL, getSeoMeta } from '../utils/seo';

interface DynamicSeoProps {
  language: Language;
  currentPage: string;
  slug?: string;
}

export const DynamicSeo: React.FC<DynamicSeoProps> = ({ language, currentPage, slug }) => {
  const { title, description, ogImage } = getSeoMeta(language, currentPage, slug);

  if (currentPage === '404') {
    return (
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="robots" content="noindex, follow" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <html lang={language === 'ru' ? 'ru' : 'en'} />
      </Helmet>
    );
  }

  let enPath = '/';
  let ruPath = '/ru';

  if (currentPage === 'blogPost' && slug) {
    enPath = `/blog/${slug}`;
    ruPath = `/ru/blog/${slug}`;
  } else if (currentPage === 'blog') {
    enPath = '/blog';
    ruPath = '/ru/blog';
  } else if (currentPage !== 'home') {
    enPath = `/${currentPage}`;
    ruPath = `/ru/${currentPage}`;
  }

  const enUrl = enPath === '/' ? `${BASE_URL}/` : `${BASE_URL}${enPath}`;
  const ruUrl = `${BASE_URL}${ruPath}`;
  const canonicalUrl = language === 'ru' ? ruUrl : enUrl;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />
      <meta property="og:site_name" content="HappyBox" />
      <meta property="og:locale" content={language === 'ru' ? 'ru_RU' : 'en_US'} />
      <meta property="og:locale:alternate" content={language === 'ru' ? 'en_US' : 'ru_RU'} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={currentPage === 'blogPost' ? 'article' : 'website'} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <link rel="canonical" href={canonicalUrl} />
      <link rel="alternate" hrefLang="en" href={enUrl} />
      <link rel="alternate" hrefLang="ru" href={ruUrl} />
      <link rel="alternate" hrefLang="x-default" href={enUrl} />
      <html lang={language === 'ru' ? 'ru' : 'en'} />
    </Helmet>
  );
};

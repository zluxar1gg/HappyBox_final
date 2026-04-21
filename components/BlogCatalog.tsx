import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Language, translations } from '../utils/translations';
import { getBlogPostsByLanguage, BlogCategory } from '../utils/blogData';
import { ArrowRight, Clock, Calendar } from 'lucide-react';

interface BlogCatalogProps {
  language: Language;
}

export const BlogCatalog: React.FC<BlogCatalogProps> = ({ language }) => {
  const navigate = useNavigate();
  const posts = getBlogPostsByLanguage(language);
  const [activeCategory, setActiveCategory] = useState<BlogCategory | 'all'>('all');

  const t = translations[language];
  const blogTitle = language === 'en' ? 'Logistics Blog & Insights' : 'Блог и база знаний';
  const blogSubtitle = language === 'en' ? 'Expert guides, news, and tips for shipping from China.' : 'Экспертные статьи, новости и советы по доставке из Китая.';

  const categories: { id: BlogCategory | 'all', label: string }[] = language === 'en' ? [
    { id: 'all', label: 'All Posts' },
    { id: 'guide', label: 'Guides' },
    { id: 'amazon', label: 'Amazon FBA' },
    { id: 'customs', label: 'Customs' },
    { id: 'news', label: 'News' }
  ] : [
    { id: 'all', label: 'Все статьи' },
    { id: 'guide', label: 'Гайды' },
    { id: 'amazon', label: 'Amazon FBA' },
    { id: 'customs', label: 'Таможня' },
    { id: 'news', label: 'Новости' }
  ];

  const filteredPosts = activeCategory === 'all' 
    ? posts 
    : posts.filter(post => post.category === activeCategory);

  const handlePostClick = (slug: string) => {
    const prefix = language === 'ru' ? '/ru' : '';
    navigate(`${prefix}/blog/${slug}`);
  };

  return (
    <div className="min-h-screen bg-cream pt-32 pb-20 px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-black text-brand-dark mb-6 tracking-tight">
            {blogTitle}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {blogSubtitle}
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-2 rounded-full font-bold transition-all ${
                activeCategory === cat.id 
                  ? 'bg-brand-blue text-white shadow-md' 
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map(post => (
            <article 
              key={post.id}
              onClick={() => handlePostClick(post.slug)}
              className="bg-white rounded-[30px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer group flex flex-col"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={post.imageUrl} 
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1 rounded-full text-sm font-bold text-brand-blue">
                  {categories.find(c => c.id === post.category)?.label}
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4 font-medium">
                  <span className="flex items-center gap-1"><Calendar size={16} /> {post.date}</span>
                  <span className="flex items-center gap-1"><Clock size={16} /> {post.readTime} min</span>
                </div>
                <h2 className="text-2xl font-bold text-brand-dark mb-4 leading-tight group-hover:text-brand-blue transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-6 flex-grow line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center text-brand-blue font-bold mt-auto">
                  {language === 'en' ? 'Read More' : 'Читать далее'}
                  <ArrowRight size={20} className="ml-2 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </article>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-20 text-gray-500 text-lg font-medium">
            {language === 'en' ? 'No posts found in this category.' : 'В этой категории пока нет статей.'}
          </div>
        )}
      </div>
    </div>
  );
};

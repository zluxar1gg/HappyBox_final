import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Language } from '../utils/translations';
import { getBlogPostsByLanguage, BlogPost } from '../utils/blogData';
import { Calendar, Clock, ArrowRight, BookOpen } from 'lucide-react';

interface RecentBlogPostsProps {
  language: Language;
  title?: string;
  subtitle?: string;
  limit?: number;
  currentSlug?: string;
  className?: string;
}

export const RecentBlogPosts: React.FC<RecentBlogPostsProps> = ({
  language,
  title,
  subtitle,
  limit = 3,
  currentSlug,
  className = '',
}) => {
  const navigate = useNavigate();
  const isRu = language === 'ru';

  const defaultTitle = isRu ? 'Полезные статьи и экспертные гайды' : 'Insights & Practical Guides';
  const defaultSubtitle = isRu 
    ? 'Практические советы по выкупу, доставке, таможне и работе с фабриками Китая от наших экспертов' 
    : 'Practical advice on purchasing, shipping, customs clearance, and sourcing from China factories';

  const allPosts = getBlogPostsByLanguage(language);
  const filteredPosts = currentSlug 
    ? allPosts.filter(p => p.slug !== currentSlug) 
    : allPosts;
  const posts = filteredPosts.slice(0, limit);

  if (posts.length === 0) return null;

  const handlePostClick = (slug: string) => {
    navigate(isRu ? `/ru/blog/${slug}` : `/blog/${slug}`);
  };

  const handleViewAll = () => {
    navigate(isRu ? '/ru/blog' : '/blog');
  };

  return (
    <section className={`py-16 md:py-20 bg-cream ${className}`}>
      <div className="container mx-auto px-6 xl:px-0">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-blue/10 text-brand-blue text-xs font-bold uppercase tracking-wider mb-3">
              <BookOpen className="w-3.5 h-3.5" />
              <span>{isRu ? 'База знаний HappyBox' : 'HappyBox Knowledge Base'}</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark tracking-tight leading-tight">
              {title || defaultTitle}
            </h2>
            <p className="mt-3 text-base md:text-lg text-gray-600 font-medium leading-relaxed">
              {subtitle || defaultSubtitle}
            </p>
          </div>
          <button
            onClick={handleViewAll}
            className="mt-6 md:mt-0 inline-flex items-center gap-2 self-start md:self-auto font-bold text-sm md:text-base text-brand-blue hover:text-blue-700 transition-colors group cursor-pointer"
          >
            <span>{isRu ? 'Все статьи блога' : 'View All Articles'}</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article
              key={post.id}
              onClick={() => handlePostClick(post.slug)}
              className="bg-white rounded-[28px] overflow-hidden border border-gray-100 hover:border-brand-blue/30 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group cursor-pointer hover:-translate-y-1.5"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm text-brand-dark px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
                  {post.category}
                </span>
              </div>

              <div className="p-6 md:p-7 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-xs font-semibold text-gray-500 mb-3">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-brand-blue" />
                    {post.date}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-brand-blue" />
                    {post.readTime} {isRu ? 'мин чтения' : 'min read'}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-brand-dark group-hover:text-brand-blue transition-colors leading-snug mb-3">
                  {post.title}
                </h3>

                <p className="text-sm text-gray-600 line-clamp-3 leading-relaxed mb-6 flex-grow font-normal">
                  {post.excerpt}
                </p>

                <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-brand-blue group-hover:underline">
                    {isRu ? 'Читать подробнее' : 'Read Full Guide'}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-brand-light flex items-center justify-center text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-colors">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

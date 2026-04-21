import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Language } from '../utils/translations';
import { getBlogPostBySlug, BlogBlock } from '../utils/blogData';
import { ArrowLeft, Clock, Calendar, Send } from 'lucide-react';
import { trackLead } from '../utils/analytics';

interface BlogPostProps {
  language: Language;
}

export const BlogPost: React.FC<BlogPostProps> = ({ language }) => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const post = getBlogPostBySlug(slug || '', language);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return (
      <div className="min-h-screen bg-cream pt-32 pb-20 px-6 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-brand-dark mb-6">
          {language === 'en' ? 'Post not found' : 'Статья не найдена'}
        </h1>
        <button 
          onClick={() => navigate(language === 'ru' ? '/ru/blog' : '/blog')}
          className="bg-brand-blue text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-600 transition-colors"
        >
          {language === 'en' ? 'Back to Blog' : 'Вернуться в блог'}
        </button>
      </div>
    );
  }

  const renderBlock = (block: BlogBlock, index: number) => {
    switch (block.type) {
      case 'paragraph':
        return <p key={index} className="text-lg text-gray-700 leading-relaxed mb-6">{block.content}</p>;
      case 'h2':
        return <h2 key={index} className="text-3xl font-bold text-brand-dark mt-12 mb-6">{block.content}</h2>;
      case 'h3':
        return <h3 key={index} className="text-2xl font-bold text-brand-dark mt-8 mb-4">{block.content}</h3>;
      case 'list':
        if (Array.isArray(block.content)) {
          return (
            <ul key={index} className="list-disc list-inside text-lg text-gray-700 leading-relaxed mb-6 space-y-2">
              {block.content.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          );
        }
        return null;
      case 'image':
        return (
          <figure key={index} className="my-10">
            <img src={block.url} alt={block.alt || ''} className="w-full rounded-[20px] shadow-md" loading="lazy" />
            {block.alt && <figcaption className="text-center text-gray-500 text-sm mt-3">{block.alt}</figcaption>}
          </figure>
        );
      case 'youtube':
        return (
          <div key={index} className="my-10 aspect-video w-full rounded-[20px] overflow-hidden shadow-lg">
            <iframe 
              width="100%" 
              height="100%" 
              src={block.url} 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-cream pt-32 pb-20 px-6">
      <div className="container mx-auto max-w-4xl">
        {/* Back Button */}
        <button 
          onClick={() => navigate(language === 'ru' ? '/ru/blog' : '/blog')}
          className="flex items-center text-gray-500 hover:text-brand-blue font-bold mb-10 transition-colors"
        >
          <ArrowLeft size={20} className="mr-2" />
          {language === 'en' ? 'Back to Blog' : 'Назад в блог'}
        </button>

        {/* Article Header */}
        <header className="mb-12">
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-6 font-medium">
            <span className="bg-brand-blue/10 text-brand-blue px-4 py-1 rounded-full uppercase tracking-wider text-xs">
              {post.category}
            </span>
            <span className="flex items-center gap-1"><Calendar size={16} /> {post.date}</span>
            <span className="flex items-center gap-1"><Clock size={16} /> {post.readTime} min read</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-brand-dark leading-tight mb-8">
            {post.title}
          </h1>
          <img 
            src={post.imageUrl} 
            alt={post.title} 
            className="w-full aspect-[21/9] object-cover rounded-[30px] shadow-xl"
          />
        </header>

        {/* Article Content */}
        <article className="prose prose-lg max-w-none prose-headings:font-bold prose-a:text-brand-blue">
          {post.content.map((block, index) => renderBlock(block, index))}
        </article>

        {/* CTA Block */}
        <div className="mt-20 bg-white rounded-[30px] p-8 md:p-12 shadow-xl border-2 border-brand-blue/10 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-blue to-[#229ED9]"></div>
          <h3 className="text-3xl font-black text-brand-dark mb-4">
            {language === 'en' ? 'Need Help with Shipping?' : 'Нужна помощь с доставкой?'}
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            {language === 'en' 
              ? 'Stop worrying about customs, prep centers, and language barriers. Let HappyBox handle your logistics from A to Z.' 
              : 'Хватит переживать о таможне, маркировке и языковом барьере. Доверьте логистику HappyBox от А до Я.'}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="https://t.me/d_china_hbl" 
              target="_blank" rel="noopener noreferrer"
              onClick={() => trackLead('telegram', 'blog_cta', 'click')}
              className="flex items-center justify-center gap-2 bg-[#229ED9] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#1c88ba] transition-all shadow-lg hover:-translate-y-1"
            >
              <Send size={20} />
              {language === 'en' ? 'Contact via Telegram' : 'Написать в Telegram'}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { articlesData } from '../../../data/blogData';
import { Breadcrumbs } from '../../../components/layout/Breadcrumbs';
import { Badge } from '../../../components/ui/Badge';
import { Button } from '../../../components/ui/Button';
import { Clock, Calendar, ArrowLeft, ArrowRight } from 'lucide-react';

export const BlogDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = articlesData.find((a) => a.slug === slug);

  if (!article) {
    return <Navigate to="/learn/blog" replace />;
  }

  return (
    <div className="min-h-screen bg-slate-50 pt-24 sm:pt-28 pb-20">
      <Breadcrumbs
        customItems={[
          { label: 'Learn', href: '/learn/knowledge-hub' },
          { label: 'Blog', href: '/learn/blog' },
          { label: article.title },
        ]}
      />

      <article className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <div className="">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <Badge variant="amber">{article.category}</Badge>
            <span className="text-xs text-slate-400 flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {article.publishDate}
            </span>
            <span className="text-xs text-slate-400 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {article.readTime}
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-950 leading-tight">
            {article.title}
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-medium">
            {article.excerpt}
          </p>

          <div className="mt-6 pt-6 border-t border-slate-100 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-amber-500 text-white flex items-center justify-center font-bold">
              TP
            </div>
            <div>
              <span className="text-sm font-bold text-slate-900 block">{article.author}</span>
              <span className="text-xs text-slate-500 block">{article.authorRole}</span>
            </div>
          </div>
        </div>

        <div className="my-8 rounded-xl overflow-hidden shadow-lg aspect-[16/9] bg-slate-900">
          <img
            src={article.imageUrl}
            alt={article.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="  space-y-6 text-slate-700 text-base leading-relaxed">
          {article.content.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>

        <div className="mt-10 flex items-center justify-between">
          <Button
            to="/learn/blog"
            variant="outline"
            size="md"
            icon={<ArrowLeft className="w-4 h-4" />}
            iconPosition="left"
          >
            Back to All Articles
          </Button>

          <Button
            to="/get-started/free-assessment"
            variant="primary"
            size="md"
            icon={<ArrowRight className="w-4 h-4" />}
          >
            Free Assessment
          </Button>
        </div>
      </article>
    </div>
  );
};

export default BlogDetailPage;

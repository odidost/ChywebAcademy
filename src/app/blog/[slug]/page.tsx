import { supabase } from '@/lib/supabase';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Calendar, User } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export async function generateMetadata(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const decodedSlug = decodeURIComponent(params.slug);
  const { data: post } = await supabase
    .from('blog_posts')
    .select('title, excerpt, meta_title, featured_image')
    .eq('slug', decodedSlug)
    .single();

  if (!post) {
    return { title: 'Post Not Found | Chyweb Academy' };
  }

  return {
    title: post.meta_title || `${post.title} | Chyweb Academy Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: post.featured_image ? [{ url: post.featured_image }] : [],
    },
  };
}

export default async function BlogPostPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const decodedSlug = decodeURIComponent(params.slug);
  const { data: post } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('slug', decodedSlug)
    .single();

  if (!post) {
    notFound();
  }

  const dateObj = new Date(post.published_at || post.created_at);
  const dateStr = dateObj.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

  // Basic read time estimation (200 words per minute)
  const wordCount = post.content ? post.content.split(/\s+/).length : 0;
  const readTimeMins = Math.max(1, Math.ceil(wordCount / 200));

  return (
    <div className="relative min-h-screen bg-[#F5F4F0] pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6">
        <Link href="/blog" className="inline-flex items-center gap-2 text-slate-500 hover:text-brand-emerald text-sm font-bold transition-colors mb-12">
          <ArrowLeft size={16} /> Back to all articles
        </Link>
        
        <div className="mb-12">
          <span className="px-4 py-1.5 rounded-full bg-brand-emerald/10 border border-brand-emerald/20 text-brand-emerald font-bold text-xs uppercase tracking-wider mb-6 inline-block">
            Article
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-sm text-slate-500 font-medium">
            <span className="flex items-center gap-1.5"><User size={16} /> Oko David</span>
            <span className="flex items-center gap-1.5"><Calendar size={16} /> {dateStr}</span>
            <span>{readTimeMins} min read</span>
          </div>
        </div>
      </div>

      {post.featured_image && (
        <div className="max-w-5xl mx-auto px-6 mb-16">
          <div className="rounded-3xl overflow-hidden aspect-[21/9] bg-slate-100 border border-slate-200/60 shadow-lg">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={post.featured_image} alt={post.title} className="w-full h-full object-cover" />
          </div>
        </div>
      )}

      <div className="max-w-3xl mx-auto px-6">
        <div className="premium-card rounded-3xl p-8 md:p-12 prose prose-slate max-w-none prose-headings:font-bold prose-headings:text-slate-900 prose-a:text-brand-emerald hover:prose-a:text-brand-emerald-hover prose-img:rounded-xl">
          <ReactMarkdown 
            remarkPlugins={[remarkGfm]}
            components={{
              h1: ({node, ...props}) => <h1 className="text-3xl font-extrabold mt-8 mb-4 text-slate-900" {...props} />,
              h2: ({node, ...props}) => <h2 className="text-2xl font-bold mt-8 mb-4 text-slate-900" {...props} />,
              h3: ({node, ...props}) => <h3 className="text-xl font-bold mt-6 mb-3 text-slate-900" {...props} />,
              p: ({node, ...props}) => <p className="text-slate-600 leading-relaxed mb-6" {...props} />,
              a: ({node, ...props}) => <a className="text-brand-emerald font-semibold hover:underline" {...props} />,
              ul: ({node, ...props}) => <ul className="list-disc pl-6 mb-6 text-slate-600 space-y-2" {...props} />,
              ol: ({node, ...props}) => <ol className="list-decimal pl-6 mb-6 text-slate-600 space-y-2" {...props} />,
              li: ({node, ...props}) => <li className="" {...props} />,
              blockquote: ({node, ...props}) => <blockquote className="border-l-4 border-brand-emerald pl-4 italic text-slate-500 my-6 bg-slate-50 py-2 rounded-r" {...props} />,
              code: ({node, className, children, ...props}) => {
                const match = /language-(\w+)/.exec(className || '')
                return !match ? (
                  <code className="bg-slate-100 text-slate-800 px-1.5 py-0.5 rounded text-sm font-mono" {...props}>
                    {children}
                  </code>
                ) : (
                  <pre className="bg-slate-900 text-slate-50 p-4 rounded-xl overflow-x-auto my-6 text-sm font-mono">
                    <code className={className} {...props}>
                      {children}
                    </code>
                  </pre>
                )
              }
            }}
          >
            {post.content}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
}

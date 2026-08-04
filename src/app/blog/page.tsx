import BlogClient from './BlogClient';
import { getPageMetadata } from "@/lib/seo";
import { supabase } from '@/lib/supabase';

export async function generateMetadata() {
  return getPageMetadata('/blog', {
    title: "Blog | Chyweb Academy",
    description: "Learn more about Blog at Chyweb Academy."
  });
}

export default async function BlogPage() {
  // Fetch only published blog posts, ordered by most recent first
  const { data: posts } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('published', true)
    .order('published_at', { ascending: false });

  return <BlogClient initialPosts={posts || []} />;
}

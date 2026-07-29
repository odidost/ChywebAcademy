import { supabase } from './supabase';
import { Metadata } from 'next';

export async function getPageMetadata(path: string, fallback: Metadata): Promise<Metadata> {
  // If no supabase credentials yet, return fallback
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
    return fallback;
  }

  try {
    const { data, error } = await supabase
      .from('pages_seo')
      .select('title, description, keywords, og_image')
      .eq('path', path)
      .single();

    if (error || !data) {
      return fallback;
    }

    return {
      title: data.title || fallback.title,
      description: data.description || fallback.description,
      keywords: data.keywords || fallback.keywords,
      openGraph: {
        title: data.title || fallback.title,
        description: data.description || fallback.description,
        images: data.og_image ? [{ url: data.og_image }] : undefined,
      }
    };
  } catch (err) {
    console.error(`Error fetching SEO for ${path}:`, err);
    return fallback;
  }
}

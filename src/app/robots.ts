import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://chyweb.com.ng';

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin/', '/api/'],
      },
      {
        // Block aggressive non-search scraper bots that consume high edge request quotas
        // Allow GPTBot, ClaudeBot, PerplexityBot to enable Answer Engine Optimization (AEO) search citations
        userAgent: ['Bytespider', 'PetalBot', 'CCBot', 'Amazonbot'],
        disallow: ['/'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}

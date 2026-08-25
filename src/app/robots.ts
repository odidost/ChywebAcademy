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
        // Block aggressive scraper bots that consume high edge request quotas
        userAgent: ['Bytespider', 'PetalBot', 'ClaudeBot', 'GPTBot', 'CCBot', 'Amazonbot'],
        disallow: ['/'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}

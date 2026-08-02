import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://chywebacademy.com';

  // Core pages
  const routes = [
    '',
    '/about',
    '/courses',
    '/pricing',
    '/contact',
    '/faq',
    '/blog',
    '/enroll',
    '/free-resources',
    '/digital-marketing',
    '/seo-training',
    '/career-services',
    '/ai-productivity',
    '/graphic-design',
    '/success-stories',
    '/web-design',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));
}

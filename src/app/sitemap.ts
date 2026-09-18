import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://chyweb.com.ng';

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
    '/hospitality-digital-marketing-agency-nigeria',
    '/hospitality-web-designer-nigeria',
    '/hotel-digital-marketing-agency-nigeria',
    '/hotel-booking-web-designer-nigeria',
    '/hotel-seo-agency-nigeria',
    '/hospitality-audit',
    '/ecommerce-seo-agency-nigeria',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));
}

import HomePageClient from './HomePageClient';
import { getPageMetadata } from "@/lib/seo";

export async function generateMetadata() {
  return getPageMetadata('/', {
    title: "Chyweb Academy | Learn Digital Skills. Build Real Careers.",
    description: "Gain practical, job-ready digital marketing and SEO skills in Nigeria. Learn from Oko David with hands-on projects, modern AI tools integration, and mentorship. Enroll now!"
  });
}

export default function HomePage() {
  return <HomePageClient />;
}

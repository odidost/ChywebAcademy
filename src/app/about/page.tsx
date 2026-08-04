import AboutClient from './AboutClient';
import { getPageMetadata } from "@/lib/seo";

export async function generateMetadata() {
  return getPageMetadata('/about', {
    title: "About | Chyweb Academy",
    description: "Learn more about About at Chyweb Academy."
  });
}

export default function AboutPage() {
  return <AboutClient />;
}

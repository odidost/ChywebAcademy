import FaqClient from './FaqClient';
import { getPageMetadata } from "@/lib/seo";

export async function generateMetadata() {
  return getPageMetadata('/faq', {
    title: "Faq | Chyweb Academy",
    description: "Learn more about Faq at Chyweb Academy."
  });
}

export default function FaqPage() {
  return <FaqClient />;
}

import SuccessStoriesClient from './SuccessStoriesClient';
import { getPageMetadata } from "@/lib/seo";

export async function generateMetadata() {
  return getPageMetadata('/success-stories', {
    title: "SuccessStories | Chyweb Academy",
    description: "Learn more about Success Stories at Chyweb Academy."
  });
}

export default function SuccessStoriesPage() {
  return <SuccessStoriesClient />;
}

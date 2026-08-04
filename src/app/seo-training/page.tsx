import SeoTrainingClient from './SeoTrainingClient';
import { getPageMetadata } from "@/lib/seo";

export async function generateMetadata() {
  return getPageMetadata('/seo-training', {
    title: "SeoTraining | Chyweb Academy",
    description: "Learn more about Seo Training at Chyweb Academy."
  });
}

export default function SeoTrainingPage() {
  return <SeoTrainingClient />;
}

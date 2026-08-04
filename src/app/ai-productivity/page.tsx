import AiProductivityClient from './AiProductivityClient';
import { getPageMetadata } from "@/lib/seo";

export async function generateMetadata() {
  return getPageMetadata('/ai-productivity', {
    title: "AiProductivity | Chyweb Academy",
    description: "Learn more about Ai Productivity at Chyweb Academy."
  });
}

export default function AiProductivityPage() {
  return <AiProductivityClient />;
}

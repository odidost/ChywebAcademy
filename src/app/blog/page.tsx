import BlogClient from './BlogClient';
import { getPageMetadata } from "@/lib/seo";

export async function generateMetadata() {
  return getPageMetadata('/blog', {
    title: "Blog | Chyweb Academy",
    description: "Learn more about Blog at Chyweb Academy."
  });
}

export default function BlogPage() {
  return <BlogClient />;
}

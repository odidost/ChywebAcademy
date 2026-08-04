import WebDesignClient from './WebDesignClient';
import { getPageMetadata } from "@/lib/seo";

export async function generateMetadata() {
  return getPageMetadata('/web-design', {
    title: "WebDesign | Chyweb Academy",
    description: "Learn more about Web Design at Chyweb Academy."
  });
}

export default function WebDesignPage() {
  return <WebDesignClient />;
}

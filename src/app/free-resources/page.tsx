import FreeResourcesClient from './FreeResourcesClient';
import { getPageMetadata } from "@/lib/seo";

export async function generateMetadata() {
  return getPageMetadata('/free-resources', {
    title: "FreeResources | Chyweb Academy",
    description: "Learn more about Free Resources at Chyweb Academy."
  });
}

export default function FreeResourcesPage() {
  return <FreeResourcesClient />;
}

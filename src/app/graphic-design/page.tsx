import GraphicDesignClient from './GraphicDesignClient';
import { getPageMetadata } from "@/lib/seo";

export async function generateMetadata() {
  return getPageMetadata('/graphic-design', {
    title: "GraphicDesign | Chyweb Academy",
    description: "Learn more about Graphic Design at Chyweb Academy."
  });
}

export default function GraphicDesignPage() {
  return <GraphicDesignClient />;
}

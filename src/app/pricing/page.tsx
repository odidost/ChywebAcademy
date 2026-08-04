import PricingClient from './PricingClient';
import { getPageMetadata } from "@/lib/seo";

export async function generateMetadata() {
  return getPageMetadata('/pricing', {
    title: "Pricing | Chyweb Academy",
    description: "Learn more about Pricing at Chyweb Academy."
  });
}

export default function PricingPage() {
  return <PricingClient />;
}

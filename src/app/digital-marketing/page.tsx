import DigitalMarketingClient from './DigitalMarketingClient';
import { getPageMetadata } from "@/lib/seo";

export async function generateMetadata() {
  return getPageMetadata('/digital-marketing', {
    title: "DigitalMarketing | Chyweb Academy",
    description: "Learn more about Digital Marketing at Chyweb Academy."
  });
}

export default function DigitalMarketingPage() {
  return <DigitalMarketingClient />;
}

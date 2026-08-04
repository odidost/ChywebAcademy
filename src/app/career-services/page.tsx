import CareerServicesClient from './CareerServicesClient';
import { getPageMetadata } from "@/lib/seo";

export async function generateMetadata() {
  return getPageMetadata('/career-services', {
    title: "CareerServices | Chyweb Academy",
    description: "Learn more about Career Services at Chyweb Academy."
  });
}

export default function CareerServicesPage() {
  return <CareerServicesClient />;
}

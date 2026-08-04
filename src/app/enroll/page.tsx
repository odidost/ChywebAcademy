import EnrollClient from './EnrollClient';
import { getPageMetadata } from "@/lib/seo";

export async function generateMetadata() {
  return getPageMetadata('/enroll', {
    title: "Enroll | Chyweb Academy",
    description: "Learn more about Enroll at Chyweb Academy."
  });
}

export default function EnrollPage() {
  return <EnrollClient />;
}

import ContactClient from './ContactClient';
import { getPageMetadata } from "@/lib/seo";

export async function generateMetadata() {
  return getPageMetadata('/contact', {
    title: "Contact | Chyweb Academy",
    description: "Learn more about Contact at Chyweb Academy."
  });
}

export default function ContactPage() {
  return <ContactClient />;
}

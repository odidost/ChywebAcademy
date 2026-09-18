import EcommerceSeoAgencyClient from "./EcommerceSeoAgencyClient";
import { getPageMetadata } from "@/lib/seo";

export async function generateMetadata() {
  return getPageMetadata("/ecommerce-seo-agency-nigeria", {
    title: "Ecommerce SEO Agency in Nigeria | Jumia, Google & AI Search | ChyWeb Academy",
    description:
      "Get your products found on Jumia, Google, and AI Search. Specialist ecommerce SEO agency in Nigeria driving organic orders for online stores and marketplace sellers.",
    keywords: [
      "Ecommerce SEO Agency in Nigeria",
      "Jumia SEO agency",
      "ecommerce SEO Lagos",
      "online store SEO Nigeria",
      "marketplace SEO Nigeria",
      "ecommerce product optimization Nigeria",
    ],
  });
}

export default function EcommerceSeoAgencyPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: "Ecommerce SEO Services Nigeria",
        provider: {
          "@type": "LocalBusiness",
          name: "ChyWeb Academy",
          telephone: "0906 762 3555",
        },
        description:
          "Cross-channel ecommerce SEO in Nigeria: Jumia marketplace listing optimization, Google Organic & Merchant SEO, and conversational AI search.",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <EcommerceSeoAgencyClient />
    </>
  );
}

import HospitalityWebDesignClient from "./HospitalityWebDesignClient";
import { getPageMetadata } from "@/lib/seo";

export async function generateMetadata() {
  return getPageMetadata("/hospitality-web-designer-nigeria", {
    title: "Hospitality Web Designer in Nigeria | Websites Built to Book | ChyWeb Academy",
    description:
      "Nigeria's specialist hospitality web designer. Fast, conversion-engineered sites for hotels and restaurants, built to turn browsers into direct bookings.",
    keywords: [
      "Hospitality Web Designer in Nigeria",
      "hotel website designer Lagos",
      "restaurant website design Nigeria",
      "hotel booking engine design Nigeria",
      "hotel direct booking website",
      "fast hotel web design Abuja",
    ],
  });
}

export default function HospitalityWebDesignPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://chyweb.com.ng/#website",
        url: "https://chyweb.com.ng",
        name: "ChyWeb Academy",
      },
      {
        "@type": "Service",
        name: "Hospitality Web Design Services",
        provider: {
          "@type": "LocalBusiness",
          name: "ChyWeb Academy",
          telephone: "0906 762 3555",
        },
        description:
          "Specialist hotel and restaurant web design in Nigeria. High-converting booking engine integrations, mobile-first UX, and dynamic pricing display.",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HospitalityWebDesignClient />
    </>
  );
}

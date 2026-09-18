import HotelSeoAgencyClient from "./HotelSeoAgencyClient";
import { getPageMetadata } from "@/lib/seo";

export async function generateMetadata() {
  return getPageMetadata("/hotel-seo-agency-nigeria", {
    title: "SEO Agency for Hotels in Nigeria | AEO, Local SEO & GEO | ChyWeb Academy",
    description:
      "AEO, Local SEO, and GEO under one unified hotel search strategy. Rank #1 in Google Maps 3-Pack and get cited inside ChatGPT, Gemini, and AI Overviews.",
    keywords: [
      "SEO Agency for Hotels in Nigeria",
      "hotel SEO agency Lagos",
      "hotel AEO Nigeria",
      "hotel GEO optimization",
      "Google Business Profile hotel Nigeria",
      "hotel search engine optimization Abuja",
    ],
  });
}

export default function HotelSeoAgencyPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: "Hotel SEO, AEO & GEO Optimization Services",
        provider: {
          "@type": "LocalBusiness",
          name: "ChyWeb Academy",
          telephone: "0906 762 3555",
        },
        description:
          "Full-spectrum hotel SEO in Nigeria covering Google Business Profile Local 3-Pack, Answer Engine Optimization (ChatGPT), and Generative Engine Optimization.",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HotelSeoAgencyClient />
    </>
  );
}

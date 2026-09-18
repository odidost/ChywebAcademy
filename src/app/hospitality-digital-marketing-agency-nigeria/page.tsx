import HospitalityMarketingClient from "./HospitalityMarketingClient";
import { getPageMetadata } from "@/lib/seo";

export async function generateMetadata() {
  return getPageMetadata("/hospitality-digital-marketing-agency-nigeria", {
    title: "Hospitality Digital Marketing Agency in Nigeria | ChyWeb Academy",
    description:
      "Turn empty rooms and empty tables into direct bookings. Specialist digital marketing, local SEO, and AI search visibility for hotels and restaurants across Lagos, Abuja, and Port Harcourt.",
    keywords: [
      "Hospitality Digital Marketing Agency in Nigeria",
      "hotel marketing agency Nigeria",
      "restaurant digital marketing Lagos",
      "hotel SEO agency Abuja",
      "direct booking strategy hotels Nigeria",
      "reduce OTA commissions Nigeria",
      "hotel Google Business Profile optimization",
    ],
  });
}

export default function HospitalityMarketingPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://chyweb.com.ng/#organization",
        name: "ChyWeb Academy - Hospitality Digital Marketing Agency",
        url: "https://chyweb.com.ng/hospitality-digital-marketing-agency-nigeria",
        telephone: "0906 762 3555",
        email: "chywebacademy@gmail.com",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Lagos",
          addressCountry: "NG",
        },
        description:
          "Specialist hospitality digital marketing agency in Nigeria for hotels and restaurants. Direct booking strategy, Local SEO, and AI search optimization.",
      },
      {
        "@type": "Service",
        name: "Hospitality Digital Marketing Services",
        provider: {
          "@type": "LocalBusiness",
          name: "ChyWeb Academy",
        },
        areaServed: {
          "@type": "Country",
          name: "Nigeria",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Hospitality Marketing Packages",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Restaurant Local SEO & Social Package",
              },
              price: "250000",
              priceCurrency: "NGN",
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Hotel Direct Booking & SEO Accelerator",
              },
              price: "650000",
              priceCurrency: "NGN",
            },
          ],
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HospitalityMarketingClient />
    </>
  );
}

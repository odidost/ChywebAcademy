import HotelDigitalMarketingClient from "./HotelDigitalMarketingClient";
import { getPageMetadata } from "@/lib/seo";

export async function generateMetadata() {
  return getPageMetadata("/hotel-digital-marketing-agency-nigeria", {
    title: "Digital Marketing Agency for Hotels in Nigeria | Web Design, SEO & Ads | ChyWeb Academy",
    description:
      "Web design, SEO, paid ads, and social media under one roof for hotels in Nigeria. Stop juggling four freelancers and turn empty rooms into profitable direct reservations.",
    keywords: [
      "Digital Marketing Agency for Hotels in Nigeria",
      "hotel digital marketing Lagos",
      "hotel SEO Abuja",
      "Google Hotel Ads agency Nigeria",
      "hotel social media marketing Nigeria",
      "hotel direct booking agency",
    ],
  });
}

export default function HotelDigitalMarketingPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://chyweb.com.ng/#organization",
        name: "ChyWeb Academy - Hotel Digital Marketing Agency",
        url: "https://chyweb.com.ng/hotel-digital-marketing-agency-nigeria",
        telephone: "0906 762 3555",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Lagos",
          addressCountry: "NG",
        },
        description:
          "Integrated digital marketing for Nigerian hotels: Web design, hotel SEO, Google Hotel Ads, and social media retargeting.",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HotelDigitalMarketingClient />
    </>
  );
}

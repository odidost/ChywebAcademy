import HotelBookingWebDesignClient from "./HotelBookingWebDesignClient";
import { getPageMetadata } from "@/lib/seo";

export async function generateMetadata() {
  return getPageMetadata("/hotel-booking-web-designer-nigeria", {
    title: "Hotel Booking Web Designer in Nigeria | High-Converting Reservation Systems | ChyWeb Academy",
    description:
      "Websites engineered to turn searches into confirmed reservations. Mobile-first date selection, guest checkout without forced accounts, native Apple Pay & Paystack, and sub-second room loading.",
    keywords: [
      "Hotel Booking Web Designer in Nigeria",
      "hotel reservation system designer Lagos",
      "hotel booking engine integration Nigeria",
      "direct hotel booking website",
      "hotel checkout optimization",
    ],
  });
}

export default function HotelBookingWebDesignPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: "Hotel Booking Engine Web Design",
        provider: {
          "@type": "LocalBusiness",
          name: "ChyWeb Academy",
          telephone: "0906 762 3555",
        },
        description:
          "Specialist hotel booking engine design in Nigeria. High conversion rates, mobile-first UX, and seamless Nigerian payment gateway integrations.",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HotelBookingWebDesignClient />
    </>
  );
}

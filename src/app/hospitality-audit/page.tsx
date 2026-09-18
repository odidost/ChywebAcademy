import { Metadata } from "next";
import HospitalityAuditClient from "./HospitalityAuditClient";

export const metadata: Metadata = {
  title: "Free 48-Hour Hospitality Audit | ChyWeb Academy Nigeria",
  description:
    "Zero Risk, 100% Done-For-You Analysis. Turn empty rooms and tables into direct bookings. Lock in your free 48-hour property audit, OTA commission cut plan, and AEO check.",
  keywords: [
    "free hotel audit Nigeria",
    "hospitality website audit Lagos",
    "hotel direct booking audit",
    "reduce OTA commission hotel Nigeria",
    "restaurant SEO audit Lagos",
  ],
};

export default function HospitalityAuditPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Free 48-Hour Hospitality Digital Audit",
    provider: {
      "@type": "LocalBusiness",
      name: "ChyWeb Academy",
      telephone: "0906 762 3555",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Lagos",
        addressCountry: "NG",
      },
    },
    description:
      "Free 48-hour property audit for hotels, restaurants, and luxury shortlets in Nigeria. Uncover booking funnel leaks, eliminate OTA commissions, and rank on Google Maps & AI search.",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HospitalityAuditClient />
    </>
  );
}

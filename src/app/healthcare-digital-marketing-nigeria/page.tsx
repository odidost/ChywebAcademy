import HealthcareMarketingClient from "./HealthcareMarketingClient";
import { getPageMetadata } from "@/lib/seo";

export async function generateMetadata() {
  return getPageMetadata("/healthcare-digital-marketing-nigeria", {
    title: "Healthcare Digital Marketing in Nigeria | Hospitals, Clinics & Pharmacies",
    description:
      "Nigeria's specialist healthcare digital marketing agency for clinics, hospitals, and pharmacies. Compliant patient acquisition, local SEO, Google Maps 3-Pack, and NDPA-safe marketing.",
    keywords: [
      "Healthcare Digital Marketing in Nigeria",
      "hospital digital marketing Lagos",
      "clinic marketing agency Abuja",
      "pharmacy digital marketing Nigeria",
      "healthcare SEO Nigeria",
      "Electronic Pharmacy Regulations 2026 marketing",
      "NDPA compliant medical marketing",
    ],
  });
}

export default function HealthcareDigitalMarketingPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalOrganization",
        "@id": "https://chyweb.com.ng/#healthcare-marketing",
        name: "ChyWeb Academy - Healthcare Digital Marketing in Nigeria",
        url: "https://chyweb.com.ng/healthcare-digital-marketing-nigeria",
        telephone: "0906 762 3555",
        email: "chywebacademy@gmail.com",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Lagos",
          addressCountry: "NG",
        },
        description:
          "Specialist healthcare digital marketing agency in Nigeria for hospitals, specialist clinics, and pharmacies. Compliant patient discovery, Google Maps, and local search.",
      },
      {
        "@type": "Service",
        name: "Healthcare Digital Marketing Services",
        provider: {
          "@type": "Organization",
          name: "ChyWeb Academy",
        },
        areaServed: {
          "@type": "Country",
          name: "Nigeria",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Healthcare Marketing Packages",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Clinic Starter Retainer",
              },
              price: "150000",
              priceCurrency: "NGN",
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Clinic Growth Marketing",
              },
              price: "350000",
              priceCurrency: "NGN",
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Hospital / Multi-Department Platform",
              },
              price: "800000",
              priceCurrency: "NGN",
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Pharmacy Visibility (2026 Regs)",
              },
              price: "200000",
              priceCurrency: "NGN",
            },
          ],
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Can you help us advertise prescription medications?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "No, and any agency claiming otherwise is putting your facility at regulatory risk. Nigerian advertising rules restrict direct-to-consumer marketing of prescription drugs. We focus on facility visibility, services, over-the-counter offerings where applicable, and general health information.",
            },
          },
          {
            "@type": "Question",
            name: "How do you handle patient data and privacy in marketing campaigns?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We build every campaign with the Nigeria Data Protection Act (NDPA) in mind, avoiding the collection or use of sensitive patient information in ways that create compliance risk, and keeping marketing data separate from clinical systems.",
            },
          },
          {
            "@type": "Question",
            name: "How long does it take to see results for a clinic or hospital?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Google Business Profile and local SEO improvements can show movement within 4-8 weeks. Broader organic visibility and paid campaign results typically build over 2-4 months depending on your specialty and local competition.",
            },
          },
          {
            "@type": "Question",
            name: "Do you work with pharmacies specifically, given the new 2026 regulations?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. We build marketing strategies that stay aligned with the Electronic Pharmacy Regulations 2026, including how online dispensing and delivery services can be promoted compliantly.",
            },
          },
          {
            "@type": "Question",
            name: "How much does healthcare digital marketing cost in Nigeria?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Pricing ranges from ₦150,000 monthly for a single clinic to ₦2,000,000+ for multi-department hospitals, with website design and one-off audits available separately.",
            },
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HealthcareMarketingClient />
    </>
  );
}

import HealthcareSeoClient from "./HealthcareSeoClient";
import { getPageMetadata } from "@/lib/seo";

export async function generateMetadata() {
  return getPageMetadata("/seo-for-healthcare-nigeria", {
    title: "SEO for Healthcare in Nigeria | Symptom & Condition-Based Medical SEO",
    description:
      "Nigeria's healthcare SEO agency built around symptoms and conditions, not just facility names. Rank in Google Maps 3-Pack, local searches, and AI assistants like ChatGPT and Gemini.",
    keywords: [
      "SEO for Healthcare in Nigeria",
      "hospital SEO Lagos",
      "clinic SEO agency Nigeria",
      "medical practice local SEO Abuja",
      "symptom search optimization Nigeria",
      "healthcare AEO Nigeria",
      "GEO healthcare Nigeria",
    ],
  });
}

export default function HealthcareSeoPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalOrganization",
        "@id": "https://chyweb.com.ng/#healthcare-seo",
        name: "ChyWeb Academy - SEO for Healthcare in Nigeria",
        url: "https://chyweb.com.ng/seo-for-healthcare-nigeria",
        telephone: "0906 762 3555",
        email: "chywebacademy@gmail.com",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Lagos",
          addressCountry: "NG",
        },
        description:
          "Specialist medical SEO agency in Nigeria. Symptom-based search rankings, Google Business Profile local 3-packs, and Answer Engine Optimization (AEO/GEO).",
      },
      {
        "@type": "Service",
        name: "Healthcare SEO Services",
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
          name: "Healthcare SEO Packages",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Clinic Starter SEO",
              },
              price: "150000",
              priceCurrency: "NGN",
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Clinic Growth SEO (Multi-Specialty)",
              },
              price: "350000",
              priceCurrency: "NGN",
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Hospital Multi-Department SEO",
              },
              price: "800000",
              priceCurrency: "NGN",
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Pharmacy SEO & Delivery Visibility",
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
            name: "Can healthcare SEO content make medical claims about treatment outcomes?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "No, and we specifically avoid this. Content is written to inform patients and build trust without making outcome guarantees or claims that could create regulatory or legal risk for your facility.",
            },
          },
          {
            "@type": "Question",
            name: "How long does healthcare SEO take to show results?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Local SEO and Google Business Profile improvements can show movement within 4-8 weeks. Broader organic visibility and AI search citations typically take 3-6 months of consistent, compliant content work.",
            },
          },
          {
            "@type": "Question",
            name: "Do you handle SEO for pharmacies given the new 2026 regulations?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, we build SEO strategy that stays aligned with the Electronic Pharmacy Regulations 2026, including how online dispensing and delivery services can be visible and promoted compliantly.",
            },
          },
          {
            "@type": "Question",
            name: "Can a small clinic really compete with larger hospitals in search?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, often more easily in local and symptom-specific searches, where a well-optimized clinic can outrank a larger hospital that hasn't built out specific, accurate content for that condition or neighborhood.",
            },
          },
          {
            "@type": "Question",
            name: "How much does SEO for healthcare cost in Nigeria?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Pricing ranges from ₦150,000 monthly for a single clinic to ₦2,000,000+ for multi-department hospitals. We'll recommend the right package after a free audit.",
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
      <HealthcareSeoClient />
    </>
  );
}

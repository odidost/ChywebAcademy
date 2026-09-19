import RealEstateSeoClient from "./RealEstateSeoClient";
import { getPageMetadata } from "@/lib/seo";

export async function generateMetadata() {
  return getPageMetadata("/seo-for-real-estate-developers-in-nigeria", {
    title: "SEO for Real Estate Developers in Nigeria | Pre-Launch & Off-Plan Pipeline SEO",
    description:
      "Nigeria's specialist SEO agency for real estate developers. Pre-launch, off-plan, and multi-project pipelines across Lekki, Epe, and Abuja. Rank in Google 3-Pack, portals, and AI search before handover.",
    keywords: [
      "SEO for Real Estate Developers in Nigeria",
      "real estate SEO Lagos",
      "off-plan apartment SEO Lekki",
      "real estate developer digital marketing Nigeria",
      "pre-launch property SEO Abuja",
      "AEO for real estate developers Nigeria",
      "GEO real estate Nigeria",
    ],
  });
}

export default function RealEstateSeoPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": "https://chyweb.com.ng/#realestate-seo",
        name: "ChyWeb Academy - SEO for Real Estate Developers in Nigeria",
        url: "https://chyweb.com.ng/seo-for-real-estate-developers-in-nigeria",
        telephone: "0906 762 3555",
        email: "chywebacademy@gmail.com",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Lagos",
          addressCountry: "NG",
        },
        description:
          "Specialist SEO agency for Nigerian real estate developers. Pre-launch, off-plan, and multi-project search optimization across Google, local maps, and AI answer engines.",
      },
      {
        "@type": "Service",
        name: "Real Estate Developer SEO Services",
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
          name: "Real Estate Developer SEO Packages",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Starter Package (Single Project / Pre-Launch)",
              },
              price: "250000",
              priceCurrency: "NGN",
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Growth Package (1-3 Active Projects)",
              },
              price: "450000",
              priceCurrency: "NGN",
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Multi-Project Enterprise (4+ Active Developments)",
              },
              price: "900000",
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
            name: "How is SEO for real estate developers different from SEO for real estate agents?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Developer SEO centers on selling specific projects, often off-plan, which requires trust-building content, payment plan clarity, and construction progress updates that a standard listing-based agent site doesn't need to the same degree.",
            },
          },
          {
            "@type": "Question",
            name: "How long does developer SEO take to show results?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Local SEO and project landing page optimization can show movement within 4-8 weeks. Broader organic visibility and AI search citations for a development typically take 3-6 months of consistent content and technical work.",
            },
          },
          {
            "@type": "Question",
            name: "Can you help with pre-launch SEO before our project has any completed units?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, this is one of our core focuses. Building search visibility and buyer trust before launch means your project isn't starting from zero once sales officially open.",
            },
          },
          {
            "@type": "Question",
            name: "Do you work with developers running multiple active projects at once?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, we build technical and content strategy specifically designed to keep several developments properly indexed and visible simultaneously, without one project's content competing against another's.",
            },
          },
          {
            "@type": "Question",
            name: "How much does SEO for real estate developers cost in Nigeria?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Pricing depends on the number of active projects and market competitiveness, ranging from ₦250,000 monthly for a single project to ₦2,000,000+ for developers managing multiple active developments.",
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
      <RealEstateSeoClient />
    </>
  );
}

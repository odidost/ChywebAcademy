import RealEstateWebDesignClient from "./RealEstateWebDesignClient";
import { getPageMetadata } from "@/lib/seo";

export async function generateMetadata() {
  return getPageMetadata("/real-estate-web-designer-nigeria", {
    title: "Real Estate Web Designer in Nigeria | Websites Built to Capture Leads",
    description:
      "Nigeria's specialist real estate web designer for agents, agencies, and developers. Built around speed-to-lead, mobile-first listing browsing, and sub-second load times that double your conversions.",
    keywords: [
      "Real Estate Web Designer in Nigeria",
      "property website designer Lagos",
      "real estate agency website builder Nigeria",
      "developer project landing page Nigeria",
      "speed-to-lead real estate website",
      "mobile property portal design Nigeria",
    ],
  });
}

export default function RealEstateWebDesignPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": "https://chyweb.com.ng/#realestate-webdesign",
        name: "ChyWeb Academy - Real Estate Web Designer in Nigeria",
        url: "https://chyweb.com.ng/real-estate-web-designer-nigeria",
        telephone: "0906 762 3555",
        email: "chywebacademy@gmail.com",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Lagos",
          addressCountry: "NG",
        },
        description:
          "Specialist real estate web design in Nigeria. High-converting listing funnels, instant lead notifications, and developer project sites built for speed and trust.",
      },
      {
        "@type": "Service",
        name: "Real Estate Web Design Services",
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
          name: "Real Estate Web Design Packages",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Agent Starter Website",
              },
              price: "350000",
              priceCurrency: "NGN",
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Agency Growth Platform",
              },
              price: "700000",
              priceCurrency: "NGN",
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Developer Project Site",
              },
              price: "600000",
              priceCurrency: "NGN",
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Multi-Project Developer Platform",
              },
              price: "1500000",
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
            name: "How much does a real estate website cost in Nigeria?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Pricing depends on scope; an individual agent's site is a different build than a developer's multi-project platform with payment plan integration, ranging from ₦350,000 for agents to ₦1,500,000+ for multi-project developers.",
            },
          },
          {
            "@type": "Question",
            name: "Can you integrate our existing CRM or listing management system?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, we integrate with your existing CRM and listing tools wherever possible, rather than forcing a switch, unless your current setup is genuinely limiting your lead capture and response speed.",
            },
          },
          {
            "@type": "Question",
            name: "How long does a real estate website project take?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Most agent and agency website builds take 4 to 6 weeks. Developer sites with multiple project pages and payment plan integrations typically take 6 to 10 weeks depending on complexity.",
            },
          },
          {
            "@type": "Question",
            name: "Will a new website actually generate more leads, or just look better?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Design alone can meaningfully close the gap between average (2.9%) and top-performing (5.6%+) conversion rates. We build the site to convert the traffic you have and can pair it with SEO to grow that traffic over time.",
            },
          },
          {
            "@type": "Question",
            name: "Do you also handle SEO for the website once it's built?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, we can handle both, or just the design if that's all you need. A well-designed site and a strong search strategy reinforce each other, so most real estate clients see the strongest results when both are built together.",
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
      <RealEstateWebDesignClient />
    </>
  );
}

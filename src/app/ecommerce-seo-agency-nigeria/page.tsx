import EcommerceSeoAgencyClient from "./EcommerceSeoAgencyClient";
import { getPageMetadata } from "@/lib/seo";

export async function generateMetadata() {
  return getPageMetadata("/ecommerce-seo-agency-nigeria", {
    title: "Ecommerce SEO Agency in Nigeria: Products Found on Google, ChatGPT & AI Search | ChyWeb Academy",
    description:
      "Nigeria's ecommerce SEO agency, built for Google, AEO, and GEO, not just rankings. Dominate Google Shopping, ChatGPT citations, and AI Overviews across high-growth product categories.",
    keywords: [
      "Ecommerce SEO Agency in Nigeria",
      "ecommerce SEO Lagos",
      "online store SEO Nigeria",
      "ChatGPT ecommerce optimization Nigeria",
      "Google Shopping optimization Nigeria",
      "ecommerce AEO GEO Nigeria",
      "fashion electronics beauty SEO Nigeria",
    ],
  });
}

export default function EcommerceSeoAgencyPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: "Ecommerce SEO, AEO & GEO Optimization Services in Nigeria",
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
          "Specialist ecommerce SEO agency in Nigeria covering Google Organic search, Google Merchant Center, Answer Engine Optimization (ChatGPT & Perplexity), and Generative Engine Optimization (AI Overviews).",
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What's the best SEO agency for ecommerce in Nigeria?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The strongest indicator is whether an agency covers both traditional Google SEO and AI search visibility (AEO and GEO, with real, verifiable evidence across each, not just keyword ranking screenshots. This is exactly what we specialize in.",
            },
          },
          {
            "@type": "Question",
            name: "What's the difference between AEO and GEO for an ecommerce store?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "AEO focuses on getting your content directly cited as the answer when a shopper asks an AI assistant a specific question. GEO focuses on how your store gets represented when AI systems generate a broader comparison or summary across multiple options, where the shopper may never click through to any individual site.",
            },
          },
          {
            "@type": "Question",
            name: "Do you work with ecommerce stores outside your specialty industries?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, while fashion, beauty, electronics, furniture, grocery, jewelry, baby products, auto parts, fitness, and local specialty stores are where we have the deepest category-specific experience, the core framework, technical SEO, AEO, and GEO applies across any ecommerce vertical.",
            },
          },
          {
            "@type": "Question",
            name: "How long before I see results?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Technical and on-page fixes can show movement in Google rankings within weeks. AI search visibility, AEO, and GEO citations typically take 3 to 6 months of consistent, structured work to build real traction.",
            },
          },
          {
            "@type": "Question",
            name: "How much does ecommerce SEO cost in Nigeria?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Most businesses invest between ₦300,000 and ₦1,000,000 monthly depending on catalog size and competitiveness, with one-off audits ranging from ₦150,000 to ₦600,000.",
            },
          },
          {
            "@type": "Question",
            name: "Can you help us get cited by AI shopping assistants like ChatGPT?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, this is a core part of our ecommerce SEO strategy, structuring buying-guide and product content specifically to be extractable, trustworthy, and accurately summarized when shoppers ask AI assistants for recommendations or comparisons.",
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
      <EcommerceSeoAgencyClient />
    </>
  );
}

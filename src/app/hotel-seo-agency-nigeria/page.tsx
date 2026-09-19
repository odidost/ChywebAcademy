import HotelSeoAgencyClient from "./HotelSeoAgencyClient";
import { getPageMetadata } from "@/lib/seo";

export async function generateMetadata() {
  return getPageMetadata("/hotel-seo-agency-nigeria", {
    title: "SEO Agency for Hotels in Nigeria: AEO, Local SEO & GEO Under One Strategy | ChyWeb Academy",
    description:
      "Nigeria's SEO agency for hotels, covering Local SEO, AEO, and GEO. Cut OTA dependency by 18% on average, dominate Google Maps 3-Pack, and get cited in ChatGPT and AI Overviews.",
    keywords: [
      "SEO Agency for Hotels in Nigeria",
      "hotel SEO agency Lagos",
      "hotel AEO Nigeria",
      "hotel GEO optimization",
      "Google Business Profile hotel Nigeria",
      "hotel search engine optimization Abuja",
      "hotel Local SEO Lekki Victoria Island",
    ],
  });
}

export default function HotelSeoAgencyPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: "Hotel SEO, AEO & GEO Optimization Services in Nigeria",
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
          "Full-spectrum hotel SEO in Nigeria covering Google Business Profile Local 3-Pack, Answer Engine Optimization (ChatGPT & Perplexity), and Generative Engine Optimization (AI Overviews).",
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What's the difference between AEO and GEO for a hotel?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "AEO focuses on getting your content directly cited as the answer to a specific question asked to an AI assistant. GEO focuses on how your content performs when it's synthesized into a broader AI-generated summary or comparison, where a traveler may never read past the generated text at all.",
            },
          },
          {
            "@type": "Question",
            name: "How long does hotel SEO take to show results?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Local SEO improvements like Google Business Profile fixes can show movement within 4 to 8 weeks. Organic SEO traffic overall typically takes around 6 months to gain real traction, with AEO and GEO citation frequency building over a similar or slightly longer timeframe as entity trust compounds.",
            },
          },
          {
            "@type": "Question",
            name: "Do I need to choose between Local SEO, AEO, and GEO, or can I do all three?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "All three should be done together. They share a lot of the same foundation, consistent business data, strong reviews, and well-structured content, so running them as one coordinated strategy is both more effective and more efficient than treating them as separate projects.",
            },
          },
          {
            "@type": "Question",
            name: "How much does full-spectrum hotel SEO cost in Nigeria?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Most hotels investing in Local SEO, AEO, and GEO together budget between ₦300,000 and ₦1,200,000 monthly, depending on property size and market competitiveness. We'll provide an exact quote after a free audit.",
            },
          },
          {
            "@type": "Question",
            name: "Can a small independent hotel really compete with larger chains in AI search?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, often more easily than in traditional paid advertising. AI systems favor clear, well-structured, trustworthy content over sheer brand size, which means a well-optimized independent hotel can get cited or summarized favorably ahead of a larger competitor with thinner, less organized content.",
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
      <HotelSeoAgencyClient />
    </>
  );
}

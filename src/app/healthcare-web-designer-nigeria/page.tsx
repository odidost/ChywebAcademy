import HealthcareWebDesignClient from "./HealthcareWebDesignClient";
import { getPageMetadata } from "@/lib/seo";

export async function generateMetadata() {
  return getPageMetadata("/healthcare-web-designer-nigeria", {
    title: "Healthcare Web Designer in Nigeria | Websites Built for Patient Trust",
    description:
      "Nigeria's specialist healthcare web designer for hospitals and clinics. Intuitive multi-department navigation, sub-second mobile speeds, friction-free booking, and NDPA compliance.",
    keywords: [
      "Healthcare Web Designer in Nigeria",
      "hospital website designer Lagos",
      "clinic appointment website Nigeria",
      "medical web design Abuja",
      "patient portal web developer Nigeria",
      "telemedicine website design Nigeria",
    ],
  });
}

export default function HealthcareWebDesignPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalOrganization",
        "@id": "https://chyweb.com.ng/#healthcare-webdesign",
        name: "ChyWeb Academy - Healthcare Web Designer in Nigeria",
        url: "https://chyweb.com.ng/healthcare-web-designer-nigeria",
        telephone: "0906 762 3555",
        email: "chywebacademy@gmail.com",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Lagos",
          addressCountry: "NG",
        },
        description:
          "Specialist healthcare web design for Nigerian hospitals and clinics. Built for patient reassurance, rapid mobile loading, and NDPA-compliant appointment booking.",
      },
      {
        "@type": "Service",
        name: "Healthcare Web Design Services",
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
          name: "Healthcare Web Design Packages",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Clinic Starter Website",
              },
              price: "300000",
              priceCurrency: "NGN",
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Clinic Growth Web Platform",
              },
              price: "600000",
              priceCurrency: "NGN",
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Hospital / Multi-Department Platform",
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
            name: "How much does a hospital or clinic website cost in Nigeria?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Pricing depends on facility size; a single clinic site differs significantly from a multi-department hospital platform, ranging from ₦300,000 for clinics to ₦4,000,000+ for complex hospital platforms.",
            },
          },
          {
            "@type": "Question",
            name: "Can you integrate our existing appointment booking or hospital management system?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, we integrate with your existing systems wherever possible, rather than forcing a switch, keeping booking frictionless for patients.",
            },
          },
          {
            "@type": "Question",
            name: "How do you handle patient data on the website?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Every form and data touchpoint is designed with the Nigeria Data Protection Act in mind, keeping marketing and inquiry data handled responsibly and separately from clinical systems.",
            },
          },
          {
            "@type": "Question",
            name: "How long does a healthcare website project take?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Clinic sites typically take 4-6 weeks. Multi-department hospital platforms usually take 8-12 weeks depending on complexity.",
            },
          },
          {
            "@type": "Question",
            name: "Do you also handle SEO and marketing once the site is built?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, we can handle both, or just the design if that's all you need. Our healthcare digital marketing services build directly on the same foundation.",
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
      <HealthcareWebDesignClient />
    </>
  );
}

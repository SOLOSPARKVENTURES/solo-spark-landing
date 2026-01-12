export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Solo Spark Ventures LLC",
    url: "https://solospark.mn",
    logo: "https://solospark.mn/logo.png",
    description: "Захиалгат програм хангамжийн шийдлүүд бүтээж, дараагийн үеийн стартапуудад хөрөнгө оруулдаг.",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+976-XXXX-XXXX",
      contactType: "customer service",
      email: "hello@solospark.mn",
      areaServed: "MN",
      availableLanguage: "Mongolian"
    },
    sameAs: [
      "https://twitter.com/solosparkventures",
      "https://facebook.com/solosparkventures",
      "https://linkedin.com/company/solosparkventures"
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Solo Spark Ventures LLC",
    url: "https://solospark.mn",
    description: "Захиалгат вэбсайт болон мобайл апп хөгжүүлэлт. Стартап хөрөнгө оруулалт ба техникийн мэргэжил.",
    inLanguage: "mn",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://solospark.mn/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Software Development & Startup Investment",
    provider: {
      "@type": "Organization",
      name: "Solo Spark Ventures LLC"
    },
    areaServed: {
      "@type": "Country",
      name: "Mongolia"
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Custom Development",
            description: "Вэбсайт болон мобайл апп хөгжүүлэлт"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Startup Investment",
            description: "Стартапуудад хөрөнгө оруулалт"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Hackathons",
            description: "Хаккатон зохион байгуулалт"
          }
        }
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
    </>
  );
}

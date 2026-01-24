import Script from "next/script";

export function LocalBusinessSchema() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Florist",
    "@id": "https://www.sakaryaadacicekcilik.com/#florist",
    name: "Ada Çiçekçilik",
    image: "https://www.sakaryaadacicekcilik.com/logo.png",
    url: "https://www.sakaryaadacicekcilik.com",
    telephone: "+905399347107",
    priceRange: "₺₺",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Sakarya Caddesi",
      addressLocality: "Adapazarı",
      addressRegion: "Sakarya",
      postalCode: "54000",
      addressCountry: "TR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 40.7667,
      longitude: 30.4,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    ],
    sameAs: [
      "https://www.instagram.com/sakarya_ada_cicekcilik",
      "https://wa.me/905399347107",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Çiçek Hizmetleri",
      itemListElement: [
        {
          "@type": "OfferCatalog",
          name: "Buket Çiçekler",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Sakarya Özel Tasarım Buket",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Sevgililer Günü Çiçekleri",
              },
            },
          ],
        },
        {
          "@type": "OfferCatalog",
          name: "Saksı Çiçekleri",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Sakarya Saksı Çiçeği Gönderimi",
              },
            },
          ],
        },
        {
          "@type": "OfferCatalog",
          name: "Düğün ve Açılış Çiçekleri",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Düğün Çiçeği Aranjmanı",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Açılış Çiçeği",
              },
            },
          ],
        },
        {
          "@type": "OfferCatalog",
          name: "Gelin Arabası Süsleme",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Gelin Arabası Çiçek Süslemesi",
              },
            },
          ],
        },
      ],
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "127",
    },
  };

  return (
    <Script
      id="local-business-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

export function WebsiteSchema() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://www.sakaryaadacicekcilik.com/#website",
    url: "https://www.sakaryaadacicekcilik.com",
    name: "Ada Çiçekçilik",
    description:
      "Sakarya Adapazarı'nda taze çiçek siparişi ve teslimat hizmeti",
    publisher: {
      "@id": "https://www.sakaryaadacicekcilik.com/#florist",
    },
    inLanguage: "tr-TR",
  };

  return (
    <Script
      id="website-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

export function BreadcrumbSchema({
  items,
}: {
  items: { name: string; url: string }[];
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <Script
      id="breadcrumb-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

export function FAQSchema() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Sakarya'da aynı gün çiçek teslimatı yapıyor musunuz?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Evet, Sakarya Adapazarı, Serdivan ve Erenler gibi bölgelerde aynı gün çiçek teslimatı hizmeti sunuyoruz. Sevgililer günü gibi özel günlerde de hizmetinizdeyiz. Siparişlerinizi telefon veya WhatsApp üzerinden verebilirsiniz.",
        },
      },
      {
        "@type": "Question",
        name: "Gelin arabası süsleme hizmeti veriyor musunuz?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Evet, düğünler için gelin arabası çiçek süslemesi hizmeti veriyoruz. Özel tasarım ve renk seçenekleri için bizimle iletişime geçebilirsiniz.",
        },
      },
      {
        "@type": "Question",
        name: "Açılış çiçeği siparişi nasıl verebilirim?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Açılış çiçeği siparişlerinizi 0539 934 71 07 numaralı telefonumuzdan veya WhatsApp üzerinden verebilirsiniz. Teslimat adresini ve zamanını belirtmeniz yeterlidir.",
        },
      },
      {
        "@type": "Question",
        name: "Hangi bölgelere teslimat yapıyorsunuz?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Adapazarı, Serdivan, Erenler ve Sakarya'nın tüm ilçelerine çiçek teslimatı yapıyoruz.",
        },
      },
    ],
  };

  return (
    <Script
      id="faq-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

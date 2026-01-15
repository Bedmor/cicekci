import "~/styles/globals.css";

import { type Metadata } from "next";
import { Epilogue } from "next/font/google";
import { ThemeProvider } from "~/app/theme-provider";

export const metadata: Metadata = {
  metadataBase: new URL("https://adacicekcilik.com"),
  title: {
    default: "Ada Çiçekçilik | Sakarya Adapazarı Çiçekçi",
    template: "%s | Ada Çiçekçilik"
  },
  description: "Sakarya Adapazarı'nda hizmet veren Ada Çiçekçilik. En taze çiçekler, özel tasarım buketler, gelin arabası süsleme, çelenk, isteme çiçeği ve yapay çiçek hizmetleri. Sakarya Caddesi ve çevresine aynı gün hızlı teslimat.",
  keywords: ["sakarya çiçekçi", "adapazarı çiçekçi", "serdivan çiçekçi", "erenler çiçekçi", "çiçekçilik", "nöbetçi çiçekçi", "sakarya caddesi çiçekçi", "canlı çiçek", "gelin arabası süsleme", "cenaze çelengi", "açılış çiçeği", "kız isteme çiçeği", "yapay çiçek", "taze çiçek siparişi"],
  authors: [{ name: "Ada Çiçekçilik" }],
  creator: "Ada Çiçekçilik",
  publisher: "Ada Çiçekçilik",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
    other: [
      {
        rel: "apple-touch-icon-precomposed",
        url: "/favicon.svg",
      },
    ],
  },
  openGraph: {
    title: "Ada Çiçekçilik | Sakarya Adapazarı Çiçekçi",
    description: "Sakarya'nın en seçkin çiçekçisi. Özel günleriniz, düğün, nişan, açılış ve tüm organizasyonlarınız için taze ve şık tasarımlar.",
    url: "https://adacicekcilik.com",
    siteName: "Ada Çiçekçilik",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Ada Çiçekçilik Sakarya",
      },
    ],
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ada Çiçekçilik | Sakarya Adapazarı Çiçekçi",
    description: "Sakarya Adapazarı çiçek siparişi. En özel anlarınız için yanınızdayız.",
    images: ["/og.png"],
    creator: "@adacicekcilik", // Assuming handle or generic
  },
  verification: {
    google: "google-site-verification-code", // Placeholder
    yandex: "yandex-verification-code", // Placeholder
  },
  category: "Florist",
};

const epilogue = Epilogue({
  subsets: ["latin"],
  variable: "--font-epilogue",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Florist",
    "name": "Ada Çiçekçilik",
    "image": "https://adacicekcilik.com/og.png",
    "url": "https://adacicekcilik.com",
    "telephone": "+905399347107",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Sakarya Caddesi",
      "addressLocality": "Adapazarı",
      "addressRegion": "Sakarya",
      "postalCode": "54100",
      "addressCountry": "TR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 40.7678185,
      "longitude": 30.4113718
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "09:00",
      "closes": "21:00"
    },
    "sameAs": [
      "https://www.instagram.com/sakarya_ada_cicekcilik"
    ],
    "priceRange": "₺₺"
  };

  return (
    <html lang="tr" className={`${epilogue.variable} min-h-screen`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
        />
        <style>{`
          .material-symbols-outlined {
            font-variation-settings:
            'FILL' 0,
            'wght' 400,
            'GRAD' 0,
            'opsz' 24
          }
        `}</style>
      </head>
      <body className="antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

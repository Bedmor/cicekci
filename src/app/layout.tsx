import "~/styles/globals.css";

import { type Metadata, type Viewport } from "next";
import { Epilogue } from "next/font/google";
import { ThemeProvider } from "~/app/theme-provider";
import CookieManager from "./_components/CookieManager";
import {
  LocalBusinessSchema,
  WebsiteSchema,
} from "./_components/StructuredData";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.sakaryaadacicekcilik.com"),
  title: "Ada Çiçekçilik | Sakarya Adapazarı Çiçek Siparişi",
  description:
    "Sakarya Adapazarı'nda taze çiçek, buket, gelin arabası, saksı çiçekleri, açılış ve düğün çiçekleri. Sevgililer günü ve özel günler için aynı gün teslimat. ☎ 0539 934 71 07",
  keywords: [
    "çiçekçi",
    "sakarya çiçekçi",
    "adapazarı çiçekçi",
    "çiçek siparişi",
    "buket",
    "gelin arabası",
    "düğün çiçeği",
    "açılış çiçeği",
    "cenaze çelengi",
    "saksı çiçeği",
    "sevgililer günü çiçekçi",
    "sakarya buket",
    "sakarya saksı",
    "adapazarı çiçek siparişi",
    "serdivan çiçekçi",
    "erenler çiçekçi",
  ],
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
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://www.sakaryaadacicekcilik.com",
    siteName: "Ada Çiçekçilik",
    title: "Ada Çiçekçilik | Sakarya Adapazarı Çiçek Siparişi",
    description:
      "Sakarya Adapazarı'nda taze çiçek siparişi. Buket, gelin arabası, düğün ve açılış çiçekleri. Aynı gün teslimat!",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Ada Çiçekçilik - Sakarya Adapazarı",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ada Çiçekçilik | Sakarya Adapazarı",
    description:
      "Sakarya Adapazarı'nda taze çiçek siparişi. Aynı gün teslimat!",
    images: ["/og.png"],
  },
  alternates: {
    canonical: "https://www.sakaryaadacicekcilik.com",
    languages: {
      "tr-TR": "https://www.sakaryaadacicekcilik.com",
    },
  },
  category: "florist",
  classification: "Business",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

const epilogue = Epilogue({
  subsets: ["latin"],
  variable: "--font-epilogue",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="tr"
      className={`${epilogue.variable} min-h-screen`}
      suppressHydrationWarning
    >
      <head>
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
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
        <LocalBusinessSchema />
        <WebsiteSchema />
        <CookieManager />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

import "~/styles/globals.css";

import { type Metadata } from "next";
import { Epilogue } from "next/font/google";
import { ThemeProvider } from "~/app/theme-provider";

export const metadata: Metadata = {
  title: "Ada Çiçekçilik",
  description: "Özenle hazırlanmış çiçek aranjmanları ve buketler.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "Ada Çiçekçilik",
    description: "Özenle hazırlanmış çiçek aranjmanları ve buketler.",
    url: "https://adacicekcilik.com",
    siteName: "Ada Çiçekçilik",
    images: [
      {
        url: "/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Ada Çiçekçilik",
      },
    ],
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ada Çiçekçilik",
    description: "Özenle hazırlanmış çiçek aranjmanları ve buketler.",
    images: ["/hero.jpg"],
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
    <html lang="en" className={`${epilogue.variable} min-h-screen`} suppressHydrationWarning>
      <head>
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

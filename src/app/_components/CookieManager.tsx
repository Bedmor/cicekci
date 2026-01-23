"use client";

import { useState, useEffect } from "react";
import Script from "next/script";
import Link from "next/link";

export default function CookieManager() {
  const [consent, setConsent] = useState<"granted" | "denied" | null>(null);

  useEffect(() => {
    // Check if user has already made a choice
    const storedConsent = localStorage.getItem("cookie_consent");
    if (storedConsent === "granted" || storedConsent === "denied") {
      setConsent(storedConsent);
    }
  }, []);

  const handleAccept = () => {
    setConsent("granted");
    localStorage.setItem("cookie_consent", "granted");
  };

  const handleDecline = () => {
    setConsent("denied");
    localStorage.setItem("cookie_consent", "denied");
  };

  return (
    <>
      {/* Google Analytics Script - Only loaded if consent is granted */}
      {consent === "granted" && (
        <>
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=AW-17893129295"
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-17893129295');
            `}
          </Script>
        </>
      )}

      {/* Cookie Consent Banner - Only visible if no choice made yet */}
      {consent === null && (
        <div
          style={{ zIndex: 2147483647 }}
          className="fixed bottom-0 left-0 w-full border-t border-gray-200 bg-white p-4 shadow-2xl dark:border-gray-800 dark:bg-black/95"
        >
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 md:flex-row">
            <div className="text-sm text-gray-600 dark:text-gray-300">
              <p>
                Sizlere daha iyi hizmet sunabilmek için sitemizde çerezler
                kullanılmaktadır. Detaylı bilgi için{" "}
                <Link
                  href="/privacy"
                  className="text-primary font-semibold hover:underline"
                >
                  Gizlilik Politikamızı
                </Link>{" "}
                inceleyebilirsiniz.
              </p>
            </div>
            <div className="flex gap-4">
              <button
                onClick={handleDecline}
                className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800"
              >
                Reddet
              </button>
              <button
                onClick={handleAccept}
                className="bg-primary hover:bg-primary/90 rounded-lg px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors"
              >
                Kabul Et
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

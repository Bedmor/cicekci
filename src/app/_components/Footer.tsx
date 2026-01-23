import { Instagram, MessageCircle, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white px-4 pt-20 pb-10 sm:px-10 dark:border-gray-800 dark:bg-[#1a1512]">
      <div className="mx-auto mb-16 grid max-w-7xl grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-2">
            <Image
              src="/favicon.svg"
              alt="Ada Çiçekçilik logo"
              width={36}
              height={36}
            />
            <h2 className="text-lg font-bold">Ada Çiçekçilik</h2>
          </div>
          <p className="text-text-muted text-sm leading-relaxed dark:text-gray-400">
            Doğanın en güzel sanatını kapınıza getiriyoruz. Sürdürülebilir
            kaynaklı, sanatsal bir şekilde düzenlenmiş.
          </p>
          <div className="text-text-muted text-sm dark:text-gray-400">
            <p>Sakarya Caddesi</p>
            <p>Adapazarı / Sakarya</p>
          </div>
          <div className="flex gap-4">
            <Link
              href="https://www.instagram.com/sakarya_ada_cicekcilik"
              className="bg-background-light hover:bg-primary flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:text-white dark:bg-gray-800"
            >
              <Instagram className="h-5 w-5" />
            </Link>
            <Link
              href="tel:+905399347107"
              className="bg-background-light hover:bg-primary flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:text-white dark:bg-gray-800"
            >
              <Phone className="h-5 w-5" />
            </Link>
            <Link
              href="https://wa.me/905399347107"
              className="bg-background-light hover:bg-primary flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:text-white dark:bg-gray-800"
            >
              <MessageCircle className="h-5 w-5" />
            </Link>
          </div>
        </div>
        {/* Newsletter */}
        <div className="relative h-75 w-full max-w-87.5 overflow-hidden rounded-xl">
          <Image
            src="/logo2.png"
            alt="Ada Çiçekçilik Konum"
            fill
            className="object-contain"
          />
        </div>
      </div>
      <div className="text-text-muted mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 border-t border-gray-100 pt-8 text-sm md:flex-row dark:border-gray-800 dark:text-gray-500">
        <p>© 2026 Ada Çiçekçilik. Tüm hakları saklıdır.</p>
        <div className="flex gap-6">
          <Link href="/privacy" className="hover:text-primary">
            Gizlilik Politikası
          </Link>
          <Link href="/terms" className="hover:text-primary">
            Kullanım Şartları
          </Link>
        </div>
      </div>
    </footer>
  );
}

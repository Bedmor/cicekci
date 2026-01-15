import { Instagram, MessageCircle, Phone } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-[#1a1512] pt-20 pb-10 px-4 sm:px-10 border-t border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        {/* Brand */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-2xl">
              local_florist
            </span>
            <h2 className="text-lg font-bold">Ada Çiçekçilik</h2>
          </div>
          <p className="text-text-muted dark:text-gray-400 text-sm leading-relaxed">
            Doğanın en güzel sanatını kapınıza getiriyoruz. Sürdürülebilir kaynaklı, sanatsal bir şekilde düzenlenmiş.
          </p>
          <div className="flex gap-4">
            <Link
              href="https://www.instagram.com/sakarya_ada_cicekcilik"
              className="w-10 h-10 rounded-full bg-background-light dark:bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </Link>
            <Link
              href="tel:+905399347107"
              className="w-10 h-10 rounded-full bg-background-light dark:bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
            >
              <Phone className="w-5 h-5" />
            </Link>
            <Link
              href="https://wa.me/905399347107"
              className="w-10 h-10 rounded-full bg-background-light dark:bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
            </Link>
          </div>
        </div>
        {/* Newsletter */}
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d188.85853510024182!2d30.41137182897075!3d40.76781853916044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ccb30062ec81fb%3A0xb50726c59ecfc5f4!2zQWRhIMOHacOnZWvDp2lsaWs!5e0!3m2!1str!2str!4v1768474565233!5m2!1str!2str" width="350" height="300" className="w-full" allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <div className="max-w-7xl mx-auto pt-8 border-t border-gray-100 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-text-muted dark:text-gray-500">
        <p>© 2026 Ada Çiçekçilik. Tüm hakları saklıdır.</p>
        <div className="flex gap-6">
          <Link href="#" className="hover:text-primary">
            Gizlilik Politikası
          </Link>
          <Link href="#" className="hover:text-primary">
            Kullanım Şartları
          </Link>
        </div>
      </div>
    </footer>
  );
}

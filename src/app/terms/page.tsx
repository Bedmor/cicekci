import { type Metadata } from "next";
import Navbar from "../_components/Navbar";
import Footer from "../_components/Footer";

export const metadata: Metadata = {
  title: "Kullanım Koşulları | Ada Çiçekçilik",
  description:
    "Ada Çiçekçilik kullanım koşulları. Sitemizi kullanırken uymanız gereken kurallar ve şartlar.",
  alternates: {
    canonical: "https://www.sakaryaadacicekcilik.com/terms",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsPage() {
  return (
    <>
      <div className="relative">
        <Navbar />
      </div>
      <div className="bg-background-light dark:bg-background-dark text-text-main min-h-screen pt-24 pb-16 dark:text-gray-300">
        <div className="mx-auto max-w-4xl px-4 sm:px-10">
          <h1 className="text-primary mb-8 text-3xl font-bold md:text-4xl">
            Kullanım Koşulları
          </h1>

          <div className="space-y-8 leading-relaxed">
            <section>
              <h2 className="text-text-main mb-4 text-xl font-bold dark:text-white">
                1. Giriş
              </h2>
              <p>
                Bu web sitesi (&quot;Site&quot;), Ada Çiçekçilik
                (&quot;Firma&quot;) tarafından yönetilmektedir. Siteyi ziyaret
                ederek veya hizmetlerimizi kullanarak, bu Kullanım Koşullarını
                (&quot;Koşullar&quot;) kabul etmiş sayılırsınız.
              </p>
            </section>

            <section>
              <h2 className="text-text-main mb-4 text-xl font-bold dark:text-white">
                2. Hizmetlerimiz
              </h2>
              <p>
                Ada Çiçekçilik, Sakarya Adapazarı ve çevresinde taze çiçek,
                buket, çelenk, araç süslemesi ve organizasyon çiçekçiliği
                hizmetleri sunmaktadır. Sitemizde yer alan görseller, sunduğumuz
                hizmetlerin örnekleridir. Doğal ürünler olması sebebiyle,
                mevsimsel farklılıklar ve stok durumuna göre aranjmanlarda küçük
                değişiklikler olabilir.
              </p>
            </section>

            <section>
              <h2 className="text-text-main mb-4 text-xl font-bold dark:text-white">
                3. Sipariş ve Teslimat
              </h2>
              <ul className="list-disc space-y-2 pl-5">
                <li>
                  Siparişlerinizi telefon veya WhatsApp hattımız üzerinden
                  verebilirsiniz.
                </li>
                <li>Teslimat bölgelerimiz Türkiye sınırları içerisindedir</li>
                <li>
                  Özel günler ve yoğun saatlerde teslimat sürelerinde
                  değişiklikler yaşanabilir. Bu durumlarda tarafınıza bilgi
                  verilecektir.
                </li>
                <li>
                  Alıcının yerinde bulunamaması durumunda çiçekler komşuya,
                  resepsiyona veya güvenlik görevlisine teslim edilebilir.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-text-main mb-4 text-xl font-bold dark:text-white">
                4. İade ve İptal Koşulları
              </h2>
              <p>
                Çiçekler, canlı ve çabuk bozulan ürünler kategorisinde olduğu
                için, Mesafeli Sözleşmeler Yönetmeliği uyarınca cayma hakkının
                istisnaları kapsamındadır. Ancak:
              </p>
              <ul className="mt-2 list-disc space-y-2 pl-5">
                <li>
                  Teslim edilen ürünün ayıplı, hasarlı veya solmuş olması
                  durumunda aynı gün içerisinde bizimle iletişime geçilmelidir.
                  Durum değerlendirildikten sonra telafi veya iade işlemi
                  yapılabilir.
                </li>
                <li>
                  Henüz hazırlanmamış ve yola çıkmamış siparişlerinizi iptal
                  etmek için en kısa sürede bizimle iletişime geçmeniz
                  gerekmektedir.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-text-main mb-4 text-xl font-bold dark:text-white">
                5. Fikri Mülkiyet Hakları
              </h2>
              <p>
                Bu sitedeki tüm içerik (logolar, görseller, metinler,
                tasarımlar) Ada Çiçekçilik&apos;e aittir. İzinsiz kopyalanması,
                dağıtılması veya ticari amaçla kullanılması yasaktır.
              </p>
            </section>

            <section>
              <h2 className="text-text-main mb-4 text-xl font-bold dark:text-white">
                6. Değişiklikler
              </h2>
              <p>
                Ada Çiçekçilik, bu Kullanım Koşulları&apos;nı dilediği zaman
                güncelleme hakkını saklı tutar. Güncel koşullar sitede
                yayınlandığı tarihten itibaren geçerli olur.
              </p>
            </section>

            <section>
              <h2 className="text-text-main mb-4 text-xl font-bold dark:text-white">
                7. İletişim
              </h2>
              <p>
                Her türlü soru ve görüşleriniz için bizimle iletişime
                geçebilirsiniz:
              </p>
              <div className="mt-4 rounded-lg border border-white/10 bg-white/5 p-4">
                <p>
                  <strong>Adres:</strong> Sakarya Caddesi, Adapazarı / Sakarya
                </p>
                <p>
                  <strong>Telefon:</strong> +90 539 934 71 07
                </p>
                <p>
                  <strong>E-posta:</strong> iletisim@sakaryaadacicekcilik.com
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

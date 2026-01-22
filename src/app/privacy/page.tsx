import Navbar from "../_components/Navbar";
import Footer from "../_components/Footer";

export default function PrivacyPage() {
  return (
    <>
      <div className="relative">
        <Navbar />
      </div>
      <div className="bg-background-light dark:bg-background-dark text-text-main min-h-screen pt-24 pb-16 dark:text-gray-300">
        <div className="mx-auto max-w-4xl px-4 sm:px-10">
          <h1 className="text-primary mb-8 text-3xl font-bold md:text-4xl">
            Gizlilik Politikası
          </h1>

          <div className="space-y-8 leading-relaxed">
            <section>
              <h2 className="text-text-main mb-4 text-xl font-bold dark:text-white">
                1. Giriş
              </h2>
              <p>
                Ada Çiçekçilik (&quot;Biz&quot;), müşterilerimizin gizliliğine
                önem vermekteyiz. Bu Gizlilik Politikası, kişisel verilerinizin
                nasıl toplandığını, kullanıldığını ve korunduğunu
                açıklamaktadır. Bu siteyi kullanarak, bu politikada belirtilen
                uygulamaları kabul etmiş olursunuz.
              </p>
            </section>

            <section>
              <h2 className="text-text-main mb-4 text-xl font-bold dark:text-white">
                2. Toplanan Veriler
              </h2>
              <p>
                Web sitemizi ziyaret ettiğinizde veya hizmetlerimizden
                yararlandığınızda aşağıdaki türde bilgiler toplanabilir:
              </p>
              <ul className="mt-2 list-disc space-y-2 pl-5">
                <li>
                  <strong>Doğrudan Sağlanan Bilgiler:</strong> İletişim ve
                  sipariş sürecinde bize ilettiğiniz ad, soyad, telefon
                  numarası, teslimat adresi ve sipariş notları.
                </li>
                <li>
                  <strong>Otomatik Toplanan Bilgiler:</strong> Sitemizi ziyaret
                  ettiğinizde tarayıcı türü, IP adresi, ziyaret süresi ve
                  görüntülenen sayfalar gibi analitik veriler (Google Analytics
                  gibi araçlar vasıtasıyla).
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-text-main mb-4 text-xl font-bold dark:text-white">
                3. Verilerin Kullanım Amacı
              </h2>
              <p>Topladığımız veriler şu amaçlarla kullanılmaktadır:</p>
              <ul className="mt-2 list-disc space-y-2 pl-5">
                <li>
                  Siparişlerinizin hazırlanması ve teslimatının yapılması.
                </li>
                <li>Müşteri hizmetleri desteği sağlanması.</li>
                <li>Yasal yükümlülüklerin yerine getirilmesi.</li>
                <li>Web sitesi performansının analizi ve iyileştirilmesi.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-text-main mb-4 text-xl font-bold dark:text-white">
                4. Çerezler (Cookies)
              </h2>
              <p>
                Kullanıcı deneyiminizi geliştirmek için çerezler kullanmaktayız.
                Çerezler, tarayıcınız tarafından saklanan küçük veri
                dosyalarıdır.
              </p>
              <ul className="mt-2 list-disc space-y-2 pl-5">
                <li>
                  <strong>Zorunlu Çerezler:</strong> Sitenin temel
                  fonksiyonlarının çalışması için gereklidir.
                </li>
                <li>
                  <strong>Analitik Çerezler:</strong> Ziyaretçi sayısını ve
                  trafik kaynaklarını takip etmemize yardımcı olur (Örn: Google
                  Analytics).
                </li>
              </ul>
              <p className="mt-2">
                Tarayıcı ayarlarınızdan çerezleri dilediğiniz zaman
                engelleyebilir veya silebilirsiniz, ancak bu durumda sitenin
                bazı özellikleri düzgün çalışmayabilir.
              </p>
            </section>

            <section>
              <h2 className="text-text-main mb-4 text-xl font-bold dark:text-white">
                5. Veri Paylaşımı
              </h2>
              <p>
                Kişisel verileriniz, yasal zorunluluklar haricinde üçüncü
                taraflarla paylaşılmamaktadır. Sipariş teslimatı için gerekli
                olan bilgiler (adres, telefon) yalnızca teslimatı yapacak
                personelimiz veya kurye iş ortaklarımız (varsa) ile paylaşılır.
              </p>
            </section>

            <section>
              <h2 className="text-text-main mb-4 text-xl font-bold dark:text-white">
                6. Haklarınız
              </h2>
              <p>
                6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) uyarınca,
                bizimle iletişime geçerek kişisel verilerinizin;
              </p>
              <ul className="mt-2 list-disc space-y-2 pl-5">
                <li>İşlenip işlenmediğini öğrenme,</li>
                <li>İşlenmişse buna ilişkin bilgi talep etme,</li>
                <li>Yanlış veya eksik işlenmişse düzeltilmesini isteme,</li>
                <li>
                  Silinmesini veya yok edilmesini talep etme haklarına
                  sahipsiniz.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-text-main mb-4 text-xl font-bold dark:text-white">
                7. İletişim
              </h2>
              <p>
                Gizlilik politikamızla ilgili sorularınız için bizimle aşağıdaki
                kanallardan iletişime geçebilirsiniz:
              </p>
              <div className="mt-4 rounded-lg border border-white/10 bg-white/5 p-4">
                <p>
                  <strong>Firma:</strong> Ada Çiçekçilik
                </p>
                <p>
                  <strong>Adres:</strong> Sakarya Caddesi, Adapazarı / Sakarya
                </p>
                <p>
                  <strong>Telefon:</strong> +90 539 934 71 07
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

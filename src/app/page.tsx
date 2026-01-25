"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";
import ContactMenu from "./_components/ContactMenu";
import { FAQSchema } from "./_components/StructuredData";
import { ArrowLeft, Instagram, MessageCircle, Phone } from "lucide-react";

// Image data mapping
const categoryImages: Record<string, string[]> = {
  buket: Array.from({ length: 19 }, (_, i) => `buket-${i + 1}.jpg`),
  saksi: Array.from({ length: 17 }, (_, i) => `saksi-cicegi-${i + 1}.jpg`),
  "acilis ve dugun": Array.from(
    { length: 13 },
    (_, i) => `acilis-ve-dugun-${i + 1}.jpg`,
  ),
  "gelin arabası": Array.from(
    { length: 10 },
    (_, i) => `gelin-arabasi-${i + 1}.jpg`,
  ),
  "kisiye ozel": Array.from(
    { length: 2 },
    (_, i) => `kisiye-ozel-${i + 1}.jpg`,
  ),
  cenaze: Array.from({ length: 2 }, (_, i) => `cenaze-celengi-${i + 1}.jpg`),
};

const categories = [
  {
    title: "Buket Çiçekler",
    folder: "buket",
    subtitle: "Sevdiklerinizi mutlu etmenin en renkli yolu.",
    image: "/buket/buket-19.jpg",
  },
  {
    title: "Saksı Çiçekleri",
    folder: "saksi",
    subtitle: "Evinize ve ofisinize doğal bir dokunuş.",
    image: "/saksi/saksi-cicegi-1.jpg",
  },
  {
    title: "Açılış & Düğün",
    folder: "acilis ve dugun",
    subtitle: "Özel günlerinizde yanınızdayız.",
    image: "/acilis ve dugun/acilis-ve-dugun-1.jpg",
  },
  {
    title: "Gelin Arabası",
    folder: "gelin arabası",
    subtitle: "En mutlu gününüzü süslüyoruz.",
    image: "/gelin arabası/gelin-arabasi-2.jpg",
  },
  {
    title: "Kişiye Özel",
    folder: "kisiye ozel",
    subtitle: "Size özel tasarımlar.",
    image: "/kisiye ozel/kisiye-ozel-1.jpg",
  },
  {
    title: "Cenaze Çelenkleri",
    folder: "cenaze",
    subtitle: "Acı günlerde saygı duruşu.",
    image: "/cenaze/cenaze-celengi-1.jpg",
  },
];

const trackOrderStart = () => {
  try {
    (window as any).gtag?.("event", "conversion", {
      send_to: "AW-17893129295/1zmoCKCkquwbEM_4jdRC",
    });
  } catch (err) {
    // no-op if gtag is unavailable
  }
};

export default function HomePage() {
  const [selectedFolder, setSelectedFolder] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openGallery = (folder: string) => {
    setSelectedFolder(folder);
  };

  const closeGallery = () => {
    setSelectedFolder(null);
    setSelectedImage(null);
  };

  return (
    <div className="bg-background-light dark:bg-background-dark text-text-main relative flex min-h-screen w-full flex-col overflow-x-hidden font-sans transition-colors duration-300 dark:text-white">
      <FAQSchema />
      <Navbar />
      <ContactMenu />

      {/* Gallery Modal */}
      {selectedFolder && (
        <div className="fixed inset-0 z-60 flex flex-col items-center justify-center bg-black/95 p-4 sm:p-8">
          <button
            onClick={closeGallery}
            className="hover:text-primary absolute top-4 right-4 z-61 rounded-full bg-black/50 p-2 text-white transition-colors"
          >
            <span className="material-symbols-outlined text-3xl">close</span>
          </button>

          <h2 className="mb-8 shrink-0 text-3xl font-bold text-white capitalize">
            {categories.find((c) => c.folder === selectedFolder)?.title}
          </h2>

          <div className="min-h-0 w-full max-w-7xl flex-1 overflow-y-auto pr-2 pb-4">
            <div className="grid grid-cols-2 gap-3 pb-10 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
              {categoryImages[selectedFolder]?.map((img, idx) => {
                const categoryTitle =
                  categories.find((c) => c.folder === selectedFolder)?.title ??
                  "Çiçek";
                return (
                  <div
                    key={idx}
                    className="group relative aspect-square cursor-pointer overflow-hidden rounded-xl border border-white/10 bg-gray-800 shadow-xl"
                    onClick={() =>
                      setSelectedImage(`/${selectedFolder}/${img}`)
                    }
                  >
                    <div className="relative h-full w-full transition-transform duration-500 group-hover:scale-110">
                      <Image
                        src={`/${selectedFolder}/${img}`}
                        alt={`${categoryTitle} ${idx + 1}`}
                        fill
                        className="object-cover object-center"
                        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                      />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 group-hover:bg-black/20">
                      <span className="material-symbols-outlined text-4xl text-white opacity-0 drop-shadow-lg transition-opacity duration-300 group-hover:opacity-100">
                        visibility
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Lightbox for single image */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-70 flex items-center justify-center bg-black/95 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="hover:text-primary absolute top-4 right-4 z-71 p-2 text-white transition-colors"
          >
            <span className="material-symbols-outlined text-4xl">close</span>
          </button>
          <div className="relative h-[90vh] w-[90vw]">
            <Image
              src={selectedImage}
              alt="Detaylı Görünüm - Ada Çiçekçilik"
              fill
              className="rounded-lg object-contain"
              sizes="90vw"
              priority
            />
          </div>
        </div>
      )}

      {/* Logo & Social Section */}
      <section className="flex w-full flex-col items-center justify-center gap-6 px-4 pt-32 md:pt-40">
        <div className="relative h-48 w-48 md:h-64 md:w-64">
          <Image
            src="/logo.png"
            alt="Ada Çiçekçilik Logo"
            fill
            className="object-contain"
            priority
          />
        </div>
        <div>
          <h2 className="text-center text-3xl font-bold md:text-4xl">
            Sipariş ve İletişim
          </h2>
          <p className="text-text-muted mt-2 text-center dark:text-gray-400">
            Sakarya, Adapazarı | +90 539 934 71 07
          </p>
        </div>
        <div className="flex gap-6">
          <a
            href="https://www.instagram.com/sakarya_ada_cicekcilik"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center rounded-full bg-white p-4 shadow-lg transition-transform hover:scale-110 dark:bg-gray-800"
            aria-label="Instagram"
          >
            <Instagram className="h-8 w-8 text-[#E1306C]" />
          </a>
          <a
            href="https://wa.me/905399347107"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center rounded-full bg-white p-4 shadow-lg transition-transform hover:scale-110 dark:bg-gray-800"
            aria-label="WhatsApp"
            onClick={trackOrderStart}
          >
            <MessageCircle className="h-8 w-8 text-[#25D366]" />
          </a>
          <a
            href="tel:+905399347107"
            className="group flex items-center justify-center rounded-full bg-white p-4 shadow-lg transition-transform hover:scale-110 dark:bg-gray-800"
            aria-label="Telefon"
            onClick={trackOrderStart}
          >
            <Phone className="h-8 w-8 text-blue-500" />
          </a>
        </div>
      </section>

      {/* Hero Section */}
      <section className="m-auto w-full flex-1 px-4 pt-10 pb-10 sm:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col-reverse items-center gap-8 lg:flex-row lg:gap-16">
            {/* Text Content */}
            <div className="z-10 flex flex-col items-start gap-6 text-left lg:w-1/2">
              <span className="text-primary pl-1 text-xs font-bold tracking-[0.2em] uppercase">
                2026 Yeni Koleksiyon
              </span>
              <h1 className="text-text-main text-3xl leading-[1.1] font-black tracking-tight sm:text-6xl md:text-7xl dark:text-white">
                Doğanın Sanatı <br className="hidden md:block" />
                <span className="text-text-muted font-serif font-light italic dark:text-gray-400">
                  Evinizin Işığı
                </span>
              </h1>
              <p className="text-text-muted max-w-md text-sm leading-relaxed dark:text-gray-300">
                Sakarya ve Adapazarı&apos;nda mevsimin en taze çiçekleriyle
                hazırlanan el yapımı buket ve saksı çiçekleri kapınıza gelsin.
                Sevgililer günü ve özel günlerinizde doğanın güzelliğini
                sevdiklerinize taşıyın.
              </p>
              <div className="mt-4 flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="group bg-primary shadow-primary/20 flex h-12 transform items-center gap-2 rounded-xl px-8 font-bold text-white shadow-lg transition-all hover:bg-[#a65d36] active:scale-95"
                >
                  <span>İletişime Geç</span>
                  <ArrowLeft className="rotate-180 transform transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href="#categories"
                  className="text-text-main flex h-12 items-center gap-2 rounded-xl px-6 font-medium transition-colors hover:bg-black/5 dark:text-white dark:hover:bg-white/10"
                >
                  <span>Koleksiyonu İncele</span>
                </a>
              </div>
            </div>
            {/* Image Content */}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section
        id="categories"
        className="w-full bg-white px-4 py-10 sm:px-10 dark:bg-[#1a1512]"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col items-end justify-between gap-4 md:flex-row">
            <div>
              <h2 className="mb-2 text-3xl font-bold">Koleksiyonları Keşfet</h2>
              <p className="text-text-muted dark:text-gray-400">
                Resimlerin üzerine tıklayarak ilgili kategorideki diğer ürünleri
                inceleyebilirsiniz.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
            {categories.map((category, index) => (
              <div
                key={index}
                onClick={() => openGallery(category.folder)}
                className="group relative flex cursor-pointer flex-col gap-2 sm:gap-4"
              >
                <div className="aspect-3/4 w-full transform overflow-hidden rounded-2xl bg-gray-100 shadow-md transition-all hover:shadow-xl dark:bg-gray-800">
                  <div className="absolute inset-0 z-0 flex items-center justify-center text-gray-400">
                    <span className="material-symbols-outlined text-4xl">
                      image
                    </span>
                  </div>
                  <div className="relative z-10 h-full w-full transition-transform duration-700 group-hover:scale-110">
                    <Image
                      src={category.image}
                      alt={`Sakarya ${category.title} - Ada Çiçekçilik`}
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 640px) 50vw, 33vw"
                    />
                    {/* Overlay with View Icon */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-colors duration-300 group-hover:bg-black/20 group-hover:opacity-100">
                      <span className="material-symbols-outlined text-5xl text-white drop-shadow-lg">
                        visibility
                      </span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="group-hover:text-primary text-sm font-bold transition-colors sm:text-xl">
                    {category.title}
                  </h3>
                  <p className="text-text-muted mt-1 text-sm dark:text-gray-400">
                    {category.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story / Narrative Section */}
      <section
        id="story"
        className="bg-background-light dark:bg-background-dark relative w-full overflow-hidden px-4 py-24 sm:px-10"
      >
        {/* Decorative background element */}
        <div className="absolute top-0 right-0 -z-10 hidden h-full w-1/3 rounded-l-[4rem] bg-[#f0e8e2] lg:block dark:bg-[#2a221d]"></div>
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-20">
            {/* Text Side */}
            <div className="flex flex-1 flex-col gap-6">
              <div className="bg-primary/10 inline-flex w-fit items-center gap-2 rounded-full px-3 py-1">
                <span className="bg-primary h-2 w-2 rounded-full"></span>
                <span className="text-primary text-xs font-bold tracking-wider uppercase">
                  Felsefemiz
                </span>
              </div>
              <h2 className="text-4xl leading-tight font-bold md:text-5xl">
                Sevgiden{" "}
                <span className="text-primary font-serif italic">Köklenen</span>
                , <br />
                Özenle Büyütülen.
              </h2>

              <div className="text-text-muted flex flex-col gap-4 text-lg leading-relaxed dark:text-gray-300">
                <p>
                  Ada Çiçekçilik olarak, her çiçeğin bir hikayesi olduğuna
                  inanıyoruz. Sevdiklerinize sadece bir buket değil, aynı
                  zamanda duygularınızı, düşüncelerinizi ve anılarınızı da
                  gönderiyorsunuz.
                </p>

                <p>
                  Adapazarı Sakarya Caddesi&apos;ndeki mağazamızdan Serdivan,
                  Erenler ve tüm şehre mutluluk taşıyoruz. En taze çiçeklerden
                  hazırladığımız tasarımlarımızla yıllardır yanınızdayız.
                </p>
              </div>
            </div>
            {/* Mobile squircle placed under the heading */}
            <div className="mt-6 flex justify-center lg:hidden">
              <div className="relative h-80 w-80 overflow-hidden rounded-[2.5rem] bg-gray-100 shadow-2xl ring-1 ring-black/5">
                <Image
                  src="/saksi/saksi-cicegi-17.jpg"
                  alt="Ada Çiçekçilik Hikayesi"
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>
            </div>
            {/* Image Side (Squircle for lg+) */}
            <div className="hidden w-full flex-1 items-center justify-center lg:order-2 lg:flex lg:justify-end">
              <div className="relative h-80 w-80 overflow-hidden rounded-[2.5rem] bg-gray-100 shadow-2xl ring-1 ring-black/5 transition-transform duration-500 hover:scale-105">
                <Image
                  src="/saksi/saksi-cicegi-17.jpg"
                  alt="Ada Çiçekçilik Hikayesi"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 640px) 80vw, (max-width: 1024px) 40vw, 30vw"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section Placeholder (linked from buttons) */}
      <div id="contact"></div>

      <Footer />
    </div>
  );
}

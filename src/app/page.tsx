"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";
import ContactMenu from "./_components/ContactMenu";
import { ArrowLeft } from "lucide-react";

// Image data mapping
const categoryImages: Record<string, string[]> = {
  buket: [
    "WhatsApp Image 2026-01-14 at 18.31.24.jpeg",
    "WhatsApp Image 2026-01-14 at 18.31.25 (1).jpeg",
    "WhatsApp Image 2026-01-14 at 18.31.25 (2).jpeg",
    "WhatsApp Image 2026-01-14 at 18.31.25.jpeg",
    "WhatsApp Image 2026-01-14 at 18.31.26 (1).jpeg",
    "WhatsApp Image 2026-01-14 at 18.31.26.jpeg",
    "WhatsApp Image 2026-01-14 at 18.31.27 (1).jpeg",
    "WhatsApp Image 2026-01-14 at 18.31.27 (2).jpeg",
    "WhatsApp Image 2026-01-14 at 18.31.27.jpeg",
    "WhatsApp Image 2026-01-14 at 18.31.28 (1).jpeg",
    "WhatsApp Image 2026-01-14 at 18.31.28 (2).jpeg",
    "WhatsApp Image 2026-01-14 at 18.31.28 (3).jpeg",
    "WhatsApp Image 2026-01-14 at 18.31.28 (4).jpeg",
    "WhatsApp Image 2026-01-14 at 18.31.28.jpeg",
    "WhatsApp Image 2026-01-14 at 18.31.29 (1).jpeg",
    "WhatsApp Image 2026-01-14 at 18.31.29 (2).jpeg",
    "WhatsApp Image 2026-01-14 at 18.31.29 (3).jpeg",
    "WhatsApp Image 2026-01-14 at 18.31.29.jpeg",
    "WhatsApp Image 2026-01-14 at 18.31.30.jpeg",
  ],
  saksi: [
    "WhatsApp Image 2026-01-14 at 18.38.04.jpeg",
    "WhatsApp Image 2026-01-14 at 18.38.05.jpeg",
    "WhatsApp Image 2026-01-14 at 18.38.06 (1).jpeg",
    "WhatsApp Image 2026-01-14 at 18.38.06 (2).jpeg",
    "WhatsApp Image 2026-01-14 at 18.38.06.jpeg",
    "WhatsApp Image 2026-01-14 at 18.38.07 (1).jpeg",
    "WhatsApp Image 2026-01-14 at 18.38.07 (2).jpeg",
    "WhatsApp Image 2026-01-14 at 18.38.07 (3).jpeg",
    "WhatsApp Image 2026-01-14 at 18.38.07 (4).jpeg",
    "WhatsApp Image 2026-01-14 at 18.38.07.jpeg",
    "WhatsApp Image 2026-01-14 at 18.38.08 (1).jpeg",
    "WhatsApp Image 2026-01-14 at 18.38.08 (2).jpeg",
    "WhatsApp Image 2026-01-14 at 18.38.08 (3).jpeg",
    "WhatsApp Image 2026-01-14 at 18.38.08 (4).jpeg",
    "WhatsApp Image 2026-01-14 at 18.38.08.jpeg",
    "WhatsApp Image 2026-01-14 at 18.38.09 (1).jpeg",
  ],
  "acilis ve dugun": [
    "WhatsApp Image 2026-01-14 at 18.35.05.jpeg",
    "WhatsApp Image 2026-01-14 at 18.35.06 (1).jpeg",
    "WhatsApp Image 2026-01-14 at 18.35.06.jpeg",
    "WhatsApp Image 2026-01-14 at 18.35.07 (1).jpeg",
    "WhatsApp Image 2026-01-14 at 18.35.07 (2).jpeg",
    "WhatsApp Image 2026-01-14 at 18.35.07 (3).jpeg",
    "WhatsApp Image 2026-01-14 at 18.35.07 (4).jpeg",
    "WhatsApp Image 2026-01-14 at 18.35.07.jpeg",
    "WhatsApp Image 2026-01-14 at 18.35.08 (1).jpeg",
    "WhatsApp Image 2026-01-14 at 18.35.08 (2).jpeg",
    "WhatsApp Image 2026-01-14 at 18.35.08 (3).jpeg",
    "WhatsApp Image 2026-01-14 at 18.35.08.jpeg",
    "WhatsApp Image 2026-01-14 at 18.35.09.jpeg",
  ],
  "gelin arabası": [
    "WhatsApp Image 2026-01-14 at 18.39.24.jpeg",
    "WhatsApp Image 2026-01-14 at 18.39.26.jpeg",
    "WhatsApp Image 2026-01-14 at 18.39.27 (1).jpeg",
    "WhatsApp Image 2026-01-14 at 18.39.27 (2).jpeg",
    "WhatsApp Image 2026-01-14 at 18.39.27.jpeg",
    "WhatsApp Image 2026-01-14 at 18.39.38 (1).jpeg",
    "WhatsApp Image 2026-01-14 at 18.39.38.jpeg",
    "WhatsApp Image 2026-01-14 at 18.39.39 (1).jpeg",
    "WhatsApp Image 2026-01-14 at 18.39.39 (2).jpeg",
    "WhatsApp Image 2026-01-14 at 18.39.39.jpeg",
  ],
  "kisiye ozel": [
    "WhatsApp Image 2026-01-14 at 18.41.03 (1).jpeg",
    "WhatsApp Image 2026-01-14 at 18.41.03.jpeg",
  ],
  cenaze: [
    "WhatsApp Image 2026-01-14 at 18.42.40.jpeg",
    "WhatsApp Image 2026-01-14 at 18.42.41.jpeg",
  ],
};

const categories = [
  {
    title: "Buket Çiçekler",
    folder: "buket",
    subtitle: "Sevdiklerinizi mutlu etmenin en renkli yolu.",
    image: "/buket/WhatsApp Image 2026-01-14 at 18.31.30.jpeg",
  },
  {
    title: "Saksı Çiçekleri",
    folder: "saksi",
    subtitle: "Evinize ve ofisinize doğal bir dokunuş.",
    image: "/saksi/WhatsApp Image 2026-01-14 at 18.38.04.jpeg",
  },
  {
    title: "Açılış & Düğün",
    folder: "acilis ve dugun",
    subtitle: "Özel günlerinizde yanınızdayız.",
    image: "/acilis ve dugun/WhatsApp Image 2026-01-14 at 18.35.05.jpeg",
  },
  {
    title: "Gelin Arabası",
    folder: "gelin arabası",
    subtitle: "En mutlu gününüzü süslüyoruz.",
    image: "/gelin arabası/WhatsApp Image 2026-01-14 at 18.39.26.jpeg",
  },
  {
    title: "Kişiye Özel",
    folder: "kisiye ozel",
    subtitle: "Size özel tasarımlar.",
    image: "/kisiye ozel/WhatsApp Image 2026-01-14 at 18.41.03 (1).jpeg",
  },
  {
    title: "Cenaze Çelenkleri",
    folder: "cenaze",
    subtitle: "Acı günlerde saygı duruşu.",
    image: "/cenaze/WhatsApp Image 2026-01-14 at 18.42.40.jpeg",
  },
];

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
      <Navbar />
      <ContactMenu />

      {/* Gallery Modal */}
      {selectedFolder && (
        <div className="fixed inset-0 z-[60] flex flex-col items-center justify-center bg-black/95 p-4 sm:p-8">
          <button
            onClick={closeGallery}
            className="hover:text-primary absolute top-4 right-4 z-[61] rounded-full bg-black/50 p-2 text-white transition-colors"
          >
            <span className="material-symbols-outlined text-3xl">close</span>
          </button>

          <h2 className="mb-8 shrink-0 text-3xl font-bold text-white capitalize">
            {categories.find((c) => c.folder === selectedFolder)?.title}
          </h2>

          <div className="min-h-0 w-full max-w-7xl flex-1 overflow-y-auto pr-2 pb-4">
            <div className="grid grid-cols-2 gap-3 pb-10 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
              {categoryImages[selectedFolder]?.map((img, idx) => (
                <div
                  key={idx}
                  className="group relative aspect-square cursor-pointer overflow-hidden rounded-xl border border-white/10 bg-gray-800 shadow-xl"
                  onClick={() => setSelectedImage(`/${selectedFolder}/${img}`)}
                >
                  <div className="relative h-full w-full transition-transform duration-500 group-hover:scale-110">
                    <Image
                      src={`/${selectedFolder}/${img}`}
                      alt={`Ada Çiçekçilik - ${selectedFolder} - ${idx + 1}`}
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
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Lightbox for single image */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-black/95 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="hover:text-primary absolute top-4 right-4 z-[71] p-2 text-white transition-colors"
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

      {/* Hero Section */}
      <section className="m-auto w-full flex-1 px-4 pt-32 pb-10 sm:px-10 md:pt-40">
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
                Mevsimin en taze çiçekleriyle hazırlanan el yapımı aranjmanlar
                kapınıza gelsin. Doğanın güzelliğini yaşam alanlarınıza taşıyın.
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
                      alt={`${category.title} - Ada Çiçekçilik`}
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
            <div className="order-2 flex flex-1 flex-col gap-6 lg:order-1">
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
              </div>
            </div>
            {/* Image Side */}
            <div className="order-1 w-full flex-1 lg:order-2">
              <div className="relative h-full w-full transition-transform duration-1000 group-hover:scale-105">
                <Image
                  src="/saksi/WhatsApp Image 2026-01-14 at 18.38.08 (2).jpeg"
                  alt="Ada Çiçekçilik Hikayesi"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote / Break Section */}
      <section className="bg-primary px-4 py-24 text-center text-white">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-8">
          <span className="material-symbols-outlined text-5xl opacity-50">
            format_quote
          </span>
          <h3 className="font-serif text-2xl leading-relaxed italic md:text-4xl">
            &quot;Çiçeklerin açtığı yerde, umut da yeşerir.&quot;
          </h3>
          <p className="text-sm font-bold tracking-widest uppercase opacity-80">
            — Lady Bird Johnson
          </p>
        </div>
      </section>

      {/* Contact Section Placeholder (linked from buttons) */}
      <div id="contact"></div>

      <Footer />
    </div>
  );
}

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
    "WhatsApp Image 2026-01-14 at 18.31.30.jpeg"
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
    "WhatsApp Image 2026-01-14 at 18.38.09 (1).jpeg"
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
    "WhatsApp Image 2026-01-14 at 18.35.09.jpeg"
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
    "WhatsApp Image 2026-01-14 at 18.39.39.jpeg"
  ],
  "kisiye ozel": [
    "WhatsApp Image 2026-01-14 at 18.41.03 (1).jpeg",
    "WhatsApp Image 2026-01-14 at 18.41.03.jpeg"
  ],
  cenaze: [
    "WhatsApp Image 2026-01-14 at 18.42.40.jpeg",
    "WhatsApp Image 2026-01-14 at 18.42.41.jpeg"
  ]
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
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-background-light dark:bg-background-dark text-text-main dark:text-white transition-colors duration-300 font-sans">
      <Navbar />
      <ContactMenu />

      {/* Gallery Modal */}
      {selectedFolder && (
        <div className="fixed inset-0 z-60 bg-black/95 flex flex-col items-center justify-center p-4 sm:p-8">
          <button 
            onClick={closeGallery}
            className="absolute top-4 right-4 text-white hover:text-primary transition-colors z-50 p-2 bg-black/50 rounded-full"
          >
            <span className="material-symbols-outlined text-3xl">close</span>
          </button>
          
          <h2 className="text-white text-3xl font-bold mb-8 capitalize shrink-0">{categories.find(c => c.folder === selectedFolder)?.title}</h2>
          
          <div className="w-full max-w-7xl flex-1 overflow-y-auto min-h-0 pr-2 pb-4">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6 pb-10">
              {categoryImages[selectedFolder]?.map((img, idx) => (
                <div 
                  key={idx} 
                  className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer bg-gray-800 shadow-xl border border-white/10"
                  onClick={() => setSelectedImage(`/${selectedFolder}/${img}`)}
                >
                  <div className="relative w-full h-full transition-transform duration-500 group-hover:scale-110">
                    <Image
                      src={`/${selectedFolder}/${img}`}
                      alt={`Ada Çiçekçilik - ${selectedFolder} - ${idx + 1}`}
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                    />
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <span className="material-symbols-outlined text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-4xl drop-shadow-lg">visibility</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Lightbox for single image */}
      {selectedImage && (
        <div className="fixed inset-0 z-70 bg-black/95 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
           <button 
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white hover:text-primary transition-colors z-50 p-2"
          >
            <span className="material-symbols-outlined text-4xl">close</span>
          </button>
          <div className="relative w-[90vw] h-[90vh]">
            <Image 
              src={selectedImage} 
              alt="Detaylı Görünüm - Ada Çiçekçilik" 
              fill
              className="object-contain rounded-lg" 
              sizes="90vw" 
              priority
            />
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="flex-1 w-full px-4 sm:px-10 pb-10 pt-4 md:pt-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col-reverse lg:flex-row gap-8 lg:gap-16 items-center">
            {/* Text Content */}
            <div className="flex flex-col gap-6 lg:w-1/2 items-start text-left z-10">
              <span className="uppercase tracking-[0.2em] text-primary text-xs font-bold pl-1">
                2026 Yeni Koleksiyon
              </span>
              <h1 className="text-3xl sm:text-6xl md:text-7xl font-black leading-[1.1] tracking-tight text-text-main dark:text-white">
                Doğanın Sanatı <br className="hidden md:block" />
                <span className="font-light italic font-serif text-text-muted dark:text-gray-400">
                  Evinizin Işığı
                </span>
              </h1>
              <p className="text-sm text-text-muted dark:text-gray-300 max-w-md leading-relaxed">
                Mevsimin en taze çiçekleriyle hazırlanan el yapımı aranjmanlar kapınıza gelsin.
                Doğanın güzelliğini yaşam alanlarınıza taşıyın.
              </p>
              <div className="flex flex-wrap gap-4 mt-4">
                <a 
                  href="#contact"
                  className="group flex items-center gap-2 h-12 px-8 bg-primary text-white rounded-xl font-bold hover:bg-[#a65d36] transition-all transform active:scale-95 shadow-lg shadow-primary/20"
                >
                  <span>İletişime Geç</span>
                  <ArrowLeft className="transform rotate-180 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href="#categories"
                  className="flex items-center gap-2 h-12 px-6 text-text-main dark:text-white font-medium hover:bg-black/5 dark:hover:bg-white/10 rounded-xl transition-colors"
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
      <section id="categories" className="w-full px-4 sm:px-10 py-10 bg-white dark:bg-[#1a1512]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <h2 className="text-3xl font-bold mb-2">Koleksiyonları Keşfet</h2>
              <p className="text-text-muted dark:text-gray-400">
                Resimlerin üzerine tıklayarak ilgili kategorideki diğer ürünleri inceleyebilirsiniz.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
            {categories.map((category, index) => (
              <div 
                key={index}
                onClick={() => openGallery(category.folder)}
                className="group relative flex flex-col gap-2 sm:gap-4 cursor-pointer"
              >
                <div className="overflow-hidden rounded-2xl aspect-3/4 w-full bg-gray-100 dark:bg-gray-800 shadow-md transform transition-all hover:shadow-xl">
                   <div className="absolute inset-0 flex items-center justify-center text-gray-400 z-0">
                      <span className="material-symbols-outlined text-4xl">image</span>
                   </div>
                  <div className="relative w-full h-full transition-transform duration-700 group-hover:scale-110 z-10">
                    <Image
                      src={category.image}
                      alt={`${category.title} - Ada Çiçekçilik`}
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 640px) 50vw, 33vw"
                    />
                    {/* Overlay with View Icon */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100 duration-300">
                         <span className="material-symbols-outlined text-white text-5xl drop-shadow-lg">visibility</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-sm sm:text-xl font-bold group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-sm text-text-muted dark:text-gray-400 mt-1">
                    {category.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story / Narrative Section */}
      <section id="story" className="w-full px-4 sm:px-10 py-24 bg-background-light dark:bg-background-dark relative overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#f0e8e2] dark:bg-[#2a221d] rounded-l-[4rem] -z-10 hidden lg:block"></div>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Text Side */}
            <div className="flex-1 flex flex-col gap-6 order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 w-fit">
                <span className="w-2 h-2 rounded-full bg-primary"></span>
                <span className="text-xs font-bold text-primary uppercase tracking-wider">
                  Felsefemiz
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Sevgiden{" "}
                <span className="italic font-serif text-primary">Köklenen</span>,{" "}
                <br />
                Özenle Büyütülen.
              </h2>
              <div className="flex flex-col gap-4 text-text-muted dark:text-gray-300 text-lg leading-relaxed">
                <p>
                  Ada Çiçekçilik olarak, her çiçeğin bir hikayesi olduğuna inanıyoruz.
                  Sevdiklerinize sadece bir buket değil, aynı zamanda duygularınızı,
                  düşüncelerinizi ve anılarınızı da gönderiyorsunuz.

                </p>
              </div>
            </div>
            {/* Image Side */}
            <div className="flex-1 w-full order-1 lg:order-2">
              <div className="relative w-full lg:w-1/2 aspect-4/5 md:aspect-square lg:aspect-4/5 rounded-2xl overflow-hidden group">
              <div className="relative w-full h-full transition-transform duration-1000 group-hover:scale-105">
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
        </div>
      </section>

      {/* Quote / Break Section */}
      <section className="py-24 px-4 bg-primary text-white text-center">
        <div className="max-w-3xl mx-auto flex flex-col gap-8 items-center">
          <span className="material-symbols-outlined text-5xl opacity-50">
            format_quote
          </span>
          <h3 className="text-2xl md:text-4xl font-serif italic leading-relaxed">
            &quot;Çiçeklerin açtığı yerde, umut da yeşerir.&quot;
          </h3>
          <p className="uppercase tracking-widest text-sm font-bold opacity-80">
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

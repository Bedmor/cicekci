"use client";

import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface Service {
  id: number;
  title: string;
  category: string;
  coverImage: string;
  images: string[];
}

const services: Service[] = [
  {
    id: 1,
    title: "Buket Modellerimiz",
    category: "buket",
    coverImage: "/buket/WhatsApp Image 2026-01-14 at 18.31.24.jpeg",
    images: [
      "/buket/WhatsApp Image 2026-01-14 at 18.31.24.jpeg",
      "/buket/WhatsApp Image 2026-01-14 at 18.31.25 (1).jpeg",
      "/buket/WhatsApp Image 2026-01-14 at 18.31.25 (2).jpeg",
      "/buket/WhatsApp Image 2026-01-14 at 18.31.25.jpeg",
      "/buket/WhatsApp Image 2026-01-14 at 18.31.26 (1).jpeg",
      "/buket/WhatsApp Image 2026-01-14 at 18.31.26.jpeg",
      "/buket/WhatsApp Image 2026-01-14 at 18.31.27 (1).jpeg",
      "/buket/WhatsApp Image 2026-01-14 at 18.31.27 (2).jpeg",
      "/buket/WhatsApp Image 2026-01-14 at 18.31.27.jpeg",
      "/buket/WhatsApp Image 2026-01-14 at 18.31.28 (1).jpeg",
      "/buket/WhatsApp Image 2026-01-14 at 18.31.28 (2).jpeg",
      "/buket/WhatsApp Image 2026-01-14 at 18.31.28 (3).jpeg",
      "/buket/WhatsApp Image 2026-01-14 at 18.31.28 (4).jpeg",
      "/buket/WhatsApp Image 2026-01-14 at 18.31.28.jpeg",
      "/buket/WhatsApp Image 2026-01-14 at 18.31.29 (1).jpeg",
      "/buket/WhatsApp Image 2026-01-14 at 18.31.29 (2).jpeg",
      "/buket/WhatsApp Image 2026-01-14 at 18.31.29 (3).jpeg",
      "/buket/WhatsApp Image 2026-01-14 at 18.31.29.jpeg",
      "/buket/WhatsApp Image 2026-01-14 at 18.31.30.jpeg",
    ],
  },
  {
    id: 2,
    title: "Açılış ve Düğün Çiçeği",
    category: "acilis ve dugun",
    coverImage: "/acilis ve dugun/WhatsApp Image 2026-01-14 at 18.35.05.jpeg",
    images: [
      "/acilis ve dugun/WhatsApp Image 2026-01-14 at 18.35.05.jpeg",
      "/acilis ve dugun/WhatsApp Image 2026-01-14 at 18.35.06 (1).jpeg",
      "/acilis ve dugun/WhatsApp Image 2026-01-14 at 18.35.06.jpeg",
      "/acilis ve dugun/WhatsApp Image 2026-01-14 at 18.35.07 (1).jpeg",
      "/acilis ve dugun/WhatsApp Image 2026-01-14 at 18.35.07 (2).jpeg",
      "/acilis ve dugun/WhatsApp Image 2026-01-14 at 18.35.07 (3).jpeg",
      "/acilis ve dugun/WhatsApp Image 2026-01-14 at 18.35.07 (4).jpeg",
      "/acilis ve dugun/WhatsApp Image 2026-01-14 at 18.35.07.jpeg",
      "/acilis ve dugun/WhatsApp Image 2026-01-14 at 18.35.08 (1).jpeg",
      "/acilis ve dugun/WhatsApp Image 2026-01-14 at 18.35.08 (2).jpeg",
      "/acilis ve dugun/WhatsApp Image 2026-01-14 at 18.35.08 (3).jpeg",
      "/acilis ve dugun/WhatsApp Image 2026-01-14 at 18.35.08.jpeg",
      "/acilis ve dugun/WhatsApp Image 2026-01-14 at 18.35.09.jpeg",
    ],
  },
  {
    id: 3,
    title: "Saksı Çeşitleri",
    category: "saksi",
    coverImage: "/saksi/WhatsApp Image 2026-01-14 at 18.38.04.jpeg",
    images: [
      "/saksi/WhatsApp Image 2026-01-14 at 18.38.04.jpeg",
      "/saksi/WhatsApp Image 2026-01-14 at 18.38.05.jpeg",
      "/saksi/WhatsApp Image 2026-01-14 at 18.38.06 (1).jpeg",
      "/saksi/WhatsApp Image 2026-01-14 at 18.38.06 (2).jpeg",
      "/saksi/WhatsApp Image 2026-01-14 at 18.38.06.jpeg",
      "/saksi/WhatsApp Image 2026-01-14 at 18.38.07 (1).jpeg",
      "/saksi/WhatsApp Image 2026-01-14 at 18.38.07 (2).jpeg",
      "/saksi/WhatsApp Image 2026-01-14 at 18.38.07 (3).jpeg",
      "/saksi/WhatsApp Image 2026-01-14 at 18.38.07 (4).jpeg",
      "/saksi/WhatsApp Image 2026-01-14 at 18.38.07.jpeg",
      "/saksi/WhatsApp Image 2026-01-14 at 18.38.08 (1).jpeg",
      "/saksi/WhatsApp Image 2026-01-14 at 18.38.08 (2).jpeg",
      "/saksi/WhatsApp Image 2026-01-14 at 18.38.08 (3).jpeg",
      "/saksi/WhatsApp Image 2026-01-14 at 18.38.08 (4).jpeg",
      "/saksi/WhatsApp Image 2026-01-14 at 18.38.08.jpeg",
      "/saksi/WhatsApp Image 2026-01-14 at 18.38.09 (1).jpeg",
    ],
  },
  {
    id: 4,
    title: "Gelin Arabası Süsleme",
    category: "gelin arabası",
    coverImage: "/gelin arabası/WhatsApp Image 2026-01-14 at 18.39.24.jpeg",
    images: [
      "/gelin arabası/WhatsApp Image 2026-01-14 at 18.39.24.jpeg",
      "/gelin arabası/WhatsApp Image 2026-01-14 at 18.39.26.jpeg",
      "/gelin arabası/WhatsApp Image 2026-01-14 at 18.39.27 (1).jpeg",
      "/gelin arabası/WhatsApp Image 2026-01-14 at 18.39.27 (2).jpeg",
      "/gelin arabası/WhatsApp Image 2026-01-14 at 18.39.27.jpeg",
      "/gelin arabası/WhatsApp Image 2026-01-14 at 18.39.38 (1).jpeg",
      "/gelin arabası/WhatsApp Image 2026-01-14 at 18.39.38.jpeg",
      "/gelin arabası/WhatsApp Image 2026-01-14 at 18.39.39 (1).jpeg",
      "/gelin arabası/WhatsApp Image 2026-01-14 at 18.39.39 (2).jpeg",
      "/gelin arabası/WhatsApp Image 2026-01-14 at 18.39.39.jpeg",
    ],
  },
  {
    id: 5,
    title: "Kişiye Özel Aranjman",
    category: "kisiye ozel",
    coverImage: "/kisiye ozel/WhatsApp Image 2026-01-14 at 18.41.03.jpeg",
    images: [
      "/kisiye ozel/WhatsApp Image 2026-01-14 at 18.41.03.jpeg",
      "/kisiye ozel/WhatsApp Image 2026-01-14 at 18.41.03 (1).jpeg",
    ],
  },
  {
    id: 6,
    title: "Cenaze Çelengi Modelleri",
    category: "cenaze",
    coverImage: "/cenaze/WhatsApp Image 2026-01-14 at 18.42.40.jpeg",
    images: [
      "/cenaze/WhatsApp Image 2026-01-14 at 18.42.40.jpeg",
      "/cenaze/WhatsApp Image 2026-01-14 at 18.42.41.jpeg",
    ],
  },
];

export default function ServicesCarousel() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 350; // Approximates card width
      const currentScroll = scrollContainerRef.current.scrollLeft;
      const targetScroll =
        direction === "left"
          ? currentScroll - scrollAmount
          : currentScroll + scrollAmount;

      scrollContainerRef.current.scrollTo({
        left: targetScroll,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-16 bg-pink-50/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Hizmetlerimiz</h2>
          <div className="w-20 h-1 bg-pink-600 mx-auto mt-4"></div>
          <p className="mt-4 text-gray-600">
            Özel günleriniz için sunduğumuz profesyonel hizmetler
          </p>
        </div>

        <div className="relative group">
          {/* Previous Button */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 lg:-ml-8 z-10 bg-white p-3 rounded-full shadow-lg text-gray-700 hover:text-pink-600 hover:bg-gray-50 transition opacity-0 group-hover:opacity-100 disabled:opacity-0 focus:outline-none"
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Carousel Container */}
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-6 pb-8 hide-scrollbar scroll-smooth snap-x snap-mandatory px-4 md:px-0"
            style={{
              scrollbarWidth: "none", /* Firefox */
              msOverflowStyle: "none", /* IE 10+ */
            }}
          >
            <style jsx>{`
              div::-webkit-scrollbar {
                display: none;
              }
            `}</style>
            
            {services.map((service) => (
              <div
                key={service.id}
                className="min-w-[280px] md:min-w-[320px] bg-white rounded-xl shadow-sm hover:shadow-md transition snap-start overflow-hidden flex-shrink-0 cursor-pointer"
                onClick={() => setSelectedService(service)}
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={service.coverImage}
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-105 transition duration-500"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-bold text-gray-900 text-lg">
                    {service.title}
                  </h3>
                  <button className="mt-4 text-sm font-medium text-pink-600 hover:text-pink-700 transition">
                    İncele &rarr;
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 lg:-mr-8 z-10 bg-white p-3 rounded-full shadow-lg text-gray-700 hover:text-pink-600 hover:bg-gray-50 transition opacity-0 group-hover:opacity-100 disabled:opacity-0 focus:outline-none"
            aria-label="Next slide"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      {/* Modal / Gallery Overlay */}
      {selectedService && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setSelectedService(null)}
        >
          <div 
            className="relative w-full max-w-5xl bg-white rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 border-b flex items-center justify-between sticky top-0 bg-white z-10">
              <h3 className="text-xl font-bold text-gray-900">
                {selectedService.title}
              </h3>
              <button
                onClick={() => setSelectedService(null)}
                className="p-2 hover:bg-gray-100 rounded-full transition"
              >
                <X size={24} className="text-gray-500" />
              </button>
            </div>
            
            <div className="p-6 overflow-y-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {selectedService.images.map((img, idx) => (
                  <div key={idx} className="aspect-square rounded-lg overflow-hidden bg-gray-100">
                    <img
                      src={img}
                      alt={`${selectedService.title} ${idx + 1}`}
                      className="w-full h-full object-cover hover:scale-105 transition duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

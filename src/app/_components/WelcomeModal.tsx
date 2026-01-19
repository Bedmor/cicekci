"use client";

import { useState, useEffect } from "react";
import { X, Bike, Phone, Motorbike, MotorbikeIcon } from "lucide-react";

export default function WelcomeModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if modal has been shown in this session
    const hasShown = sessionStorage.getItem("welcomeModalShown");
    if (!hasShown) {
      setIsOpen(true);
      sessionStorage.setItem("welcomeModalShown", "true");
    }
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-in fade-in duration-300">
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={() => setIsOpen(false)}
      />
      
      <div className="relative w-full max-w-[400px] bg-background-light rounded-[--radius-xl] overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300">
        
        {/* Close Button */}
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute top-3 right-3 z-20 p-2 bg-black/20 hover:bg-black/30 text-white rounded-full transition-colors backdrop-blur-sm"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Banner Section */}
        <div className="bg-primary pt-10 pb-8 px-6 text-center relative overflow-hidden">
             {/* Decorative pattern */}
             <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
             
            <div className="relative z-10 flex flex-col items-center justify-center text-white space-y-4">
                <div className="p-4 bg-white/10 rounded-full backdrop-blur-sm">
                    <Motorbike className="w-16 h-16" strokeWidth={1.5} />
                </div>
                <h2 className="text-xl font-bold uppercase tracking-wider leading-tight text-white drop-shadow-md">
                    Anında Kurye<br/>Hızlı Teslimat<br/>İmkanı
                </h2>
            </div>
        </div>

        {/* Content Section */}
        <div className="p-6 text-center space-y-5 bg-background-light">
            <div>
                <h3 className="text-2xl font-display font-bold text-text-main">Ada ÇİÇEKÇİLİK</h3>
                <p className="text-sm font-semibold text-primary mt-1 tracking-wide uppercase">7/24 - Gün İçinde Teslimat</p>
            </div>
            
            <p className="text-text-muted text-sm leading-relaxed px-2">
                Ada Çiçekçilik&apos;de, sevdiklerinizi mutlu etmek için seçilmiş taze çiçekler sunuyoruz. 
                Arayarak veya WhatsApp üzerinden sipariş verin, aynı gün teslimat imkanıyla sevdiklerinize sürpriz yapın.
            </p>

            <div className="flex flex-col gap-3 w-full">
                <a 
                    href="https://wa.me/905399347107"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                    className="w-full py-3.5 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-[--radius-lg] font-bold text-base transition-all active:scale-95 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                >
                    {/* Whatsapp Icon */}
                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                    WhatsApp Sipariş
                </a>

                <a 
                    href="tel:+905399347107"
                    onClick={() => setIsOpen(false)}
                    className="w-full py-3.5 bg-primary hover:bg-[#a55f39] text-white rounded-[--radius-lg] font-bold text-base transition-all active:scale-95 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                >
                    <Phone className="w-5 h-5 fill-current" />
                    Hemen Ara
                </a>
            </div>
        </div>
      </div>
    </div>
  );
}

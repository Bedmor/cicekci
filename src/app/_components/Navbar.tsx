"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="w-full px-4 sm:px-10 py-6 z-50">
      <div className="max-w-[1280px] mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group cursor-pointer">
          <span className="material-symbols-outlined text-primary text-3xl transition-transform duration-500 group-hover:rotate-45">
            local_florist
          </span>
          <h2 className="text-xl font-bold tracking-tight text-text-main dark:text-white">
            Ada Çiçekçilik
          </h2>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          <Link href="#categories" className="text-sm font-medium hover:text-primary transition-colors">Mağaza</Link>
          <Link href="#story" className="text-sm font-medium hover:text-primary transition-colors">Hikayemiz</Link>
          <Link href="#categories" className="text-sm font-medium hover:text-primary transition-colors">Hizmetler</Link>
          <Link href="#contact" className="text-sm font-medium hover:text-primary transition-colors">İletişim</Link>
        </nav>
        <div className="flex items-center gap-4">
          <button
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
            className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
            title="Temayı Değiştir"
          >
            {mounted && (
              <span className="material-symbols-outlined text-[20px] text-text-main dark:text-white">
                {resolvedTheme === "dark" ? "light_mode" : "dark_mode"}
              </span>
            )}
          </button>
          
          <Link 
            href="#contact"
            className="group relative flex items-center justify-center w-10 h-10 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
            title="İletişim"
          >
            <span className="material-symbols-outlined text-[20px] text-text-main dark:text-white group-hover:text-primary transition-colors">mail</span>
          </Link>
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">menu</span>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-24 left-0 w-full bg-white dark:bg-black/90 z-50 p-4 border-b border-gray-100 flex flex-col gap-4 shadow-xl">
             <Link href="#categories" className="text-sm font-medium hover:text-primary transition-colors block py-2" onClick={() => setIsOpen(false)}>Mağaza</Link>
             <Link href="#story" className="text-sm font-medium hover:text-primary transition-colors block py-2" onClick={() => setIsOpen(false)}>Hikayemiz</Link>
             <Link href="#categories" className="text-sm font-medium hover:text-primary transition-colors block py-2" onClick={() => setIsOpen(false)}>Hizmetler</Link>
             <Link href="#contact" className="text-sm font-medium hover:text-primary transition-colors block py-2" onClick={() => setIsOpen(false)}>İletişim</Link>
        </div>
      )}
    </header>
  );
}

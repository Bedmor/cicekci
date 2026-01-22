"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="fixed top-0 left-0 z-40 w-full border-b border-white/10 bg-white/70 px-4 py-4 backdrop-blur-md transition-all duration-300 sm:px-10 dark:bg-black/60">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Link href="/" className="group flex cursor-pointer items-center gap-3">
          <span className="inline-block transition-transform duration-500 group-hover:rotate-45">
            <Image
              src="/favicon.svg"
              alt="Ada Çiçekçilik logo"
              width={64}
              height={64}
            />
          </span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="#categories"
            className="hover:text-primary text-sm font-medium transition-colors"
          >
            Mağaza
          </Link>
          <Link
            href="#story"
            className="hover:text-primary text-sm font-medium transition-colors"
          >
            Hikayemiz
          </Link>
          <Link
            href="#categories"
            className="hover:text-primary text-sm font-medium transition-colors"
          >
            Hizmetler
          </Link>
          <Link
            href="#contact"
            className="hover:text-primary text-sm font-medium transition-colors"
          >
            İletişim
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <button
            onClick={() =>
              setTheme(resolvedTheme === "dark" ? "light" : "dark")
            }
            className="flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-black/5 dark:hover:bg-white/10"
            title="Temayı Değiştir"
          >
            {mounted && (
              <span className="material-symbols-outlined text-text-main text-[20px] dark:text-white">
                {resolvedTheme === "dark" ? "light_mode" : "dark_mode"}
              </span>
            )}
          </button>

          <Link
            href="#contact"
            className="group relative flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-black/5 dark:hover:bg-white/10"
            title="İletişim"
          >
            <span className="material-symbols-outlined text-text-main group-hover:text-primary text-[20px] transition-colors dark:text-white">
              mail
            </span>
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-black/5 md:hidden dark:hover:bg-white/10"
          >
            <span className="material-symbols-outlined text-[20px]">menu</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-24 left-0 z-50 flex w-full flex-col gap-4 border-b border-gray-100 bg-white p-4 shadow-xl md:hidden dark:bg-black/90">
          <Link
            href="#categories"
            className="hover:text-primary block py-2 text-sm font-medium transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Mağaza
          </Link>
          <Link
            href="#story"
            className="hover:text-primary block py-2 text-sm font-medium transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Hikayemiz
          </Link>
          <Link
            href="#categories"
            className="hover:text-primary block py-2 text-sm font-medium transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Hizmetler
          </Link>
          <Link
            href="#contact"
            className="hover:text-primary block py-2 text-sm font-medium transition-colors"
            onClick={() => setIsOpen(false)}
          >
            İletişim
          </Link>
        </div>
      )}
    </header>
  );
}

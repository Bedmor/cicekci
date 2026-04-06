"use client";

import { useState } from "react";
import {
  Instagram,
  MessageCircle,
  Phone,
  MapPin,
  X,
  MessageSquare,
} from "lucide-react";

export default function ContactMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const trackOrderStart = (id: string) => {
    if (id === "whatsapp" || id === "phone") {
      try {
        (window as any).gtag?.("event", "conversion", {
          send_to: "AW-17893129295/1zmoCKCkquwbEM_4jdRC",
        });
      } catch (err) {
        // no-op if gtag is unavailable
      }
    }
  };

  // Configuration for the fan layout
  const R = 105; // Radius in pixels
  const items = [
    {
      id: "instagram",
      icon: Instagram,
      color: "bg-gradient-to-tr from-yellow-400 to-purple-600",
      href: "https://www.instagram.com/sakarya_adacicekcilik",
      target: "_blank",
      label: "Instagram",
      x: 0,
      y: -R,
    },
    {
      id: "whatsapp",
      icon: MessageCircle,
      color: "bg-green-500",
      href: "https://wa.me/905399347107",
      target: "_blank",
      label: "WhatsApp",
      x: -R * Math.sin(Math.PI / 6),
      y: -R * Math.cos(Math.PI / 6), // ~30 deg
    },
    {
      id: "phone",
      icon: Phone,
      color: "bg-blue-500",
      href: "tel:+905399347107",
      label: "Telefon",
      x: -R * Math.sin(Math.PI / 3),
      y: -R * Math.cos(Math.PI / 3), // ~60 deg
    },
    {
      id: "address",
      icon: MapPin,
      color: "bg-purple-500",
      href: "https://goo.gl/maps/NxipVycnV9M8YA479",
      target: "_blank",
      label: "Adres",
      x: -R,
      y: 0,
    },
  ];

  return (
    <>
      {/* Overlay for clicking outside to close */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/20"
          onClick={() => setIsOpen(false)}
        />
      )}

      <div className="fixed right-6 bottom-6 z-50 flex items-center justify-center">
        {/* Menu Items */}
        {items.map((item, index) => {
          const Tag = item.href ? "a" : "div";
          return (
            <Tag
              key={item.id}
              href={item.href}
              target={item.target}
              rel={item.target ? "noopener noreferrer" : undefined}
              title={item.label}
              className={`absolute z-10 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full text-white shadow-lg hover:scale-110 ${item.color} transition-all duration-300 ease-out`}
              style={{
                transform: isOpen
                  ? `translate(${item.x}px, ${item.y}px)`
                  : "translate(0px, 0px) scale(0.5)",
                opacity: isOpen ? 1 : 0,
                transitionDelay: isOpen ? `${index * 50}ms` : "0ms",
              }}
            >
              <item.icon className="h-6 w-6" />
            </Tag>
          );
        })}

        {/* Helper text (Only visible when open) */}
        <div
          className={`absolute -top-32 right-0 rounded-md bg-white px-3 py-1 text-xs font-bold whitespace-nowrap text-gray-600 shadow-md transition-all duration-300 ${isOpen ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"}`}
        >
          Size nasıl yardımcı olabiliriz?
        </div>

        {/* Central Toggle Button */}
        <button
          onClick={toggleMenu}
          className={`relative z-20 flex h-16 w-16 items-center justify-center rounded-full shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 ${
            isOpen
              ? "rotate-90 bg-gray-100 text-gray-800"
              : "bg-primary text-white"
          }`}
        >
          {/* Subtle ping animation when closed */}
          {!isOpen && (
            <span className="bg-primary absolute -z-10 inline-flex h-full w-full animate-ping rounded-full opacity-75" />
          )}

          {isOpen ? (
            <X className="h-8 w-8" />
          ) : (
            <MessageSquare className="h-8 w-8" />
          )}
        </button>
      </div>
    </>
  );
}

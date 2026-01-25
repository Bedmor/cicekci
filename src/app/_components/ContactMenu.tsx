"use client";

import { useState } from "react";
import { Instagram, MessageCircle, Phone, MapPin, X, MessageSquare } from "lucide-react";

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
        id: 'instagram', icon: Instagram, color: 'bg-gradient-to-tr from-yellow-400 to-purple-600', 
        href: "https://www.instagram.com/sakarya_ada_cicekcilik", target: "_blank", label: "Instagram",
        x: 0, y: -R 
    },
    { 
        id: 'whatsapp', icon: MessageCircle, color: 'bg-green-500', 
        href: "https://wa.me/905399347107", target: "_blank", label: "WhatsApp",
        x: -R * Math.sin(Math.PI / 6), y: -R * Math.cos(Math.PI / 6) // ~30 deg
    },
    { 
        id: 'phone', icon: Phone, color: 'bg-blue-500', 
        href: "tel:+905399347107", label: "Telefon",
        x: -R * Math.sin(Math.PI / 3), y: -R * Math.cos(Math.PI / 3) // ~60 deg
    },
    { 
        id: 'address', icon: MapPin, color: 'bg-purple-500', 
        href: "https://goo.gl/maps/NxipVycnV9M8YA479", target: "_blank", label: "Adres",
        x: -R, y: 0 
    }
  ];

  return (
    <>
      {/* Overlay for clicking outside to close */}
      {isOpen && (
        <div 
            className="fixed inset-0 bg-black/20 z-40" 
            onClick={() => setIsOpen(false)}
        />
      )}

      <div className="fixed bottom-6 right-6 z-50 flex items-center justify-center">
        
        {/* Menu Items */}
        {items.map((item, index) => {
           const Tag = item.href ? 'a' : 'div';
           return (
             <Tag
               key={item.id}
               href={item.href}
               target={item.target}
               rel={item.target ? "noopener noreferrer" : undefined}
               title={item.label}
               onClick={() => trackOrderStart(item.id)}
               className={`absolute w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg cursor-pointer hover:scale-110 z-10 ${item.color} transition-all duration-300 ease-out`}
               style={{
                   transform: isOpen ? `translate(${item.x}px, ${item.y}px)` : 'translate(0px, 0px) scale(0.5)',
                   opacity: isOpen ? 1 : 0,
                   transitionDelay: isOpen ? `${index * 50}ms` : '0ms'
               }}
             >
               <item.icon className="w-6 h-6" />
             </Tag>
           );
        })}

        {/* Helper text (Only visible when open) */}
        <div 
            className={`absolute -top-32 right-0 bg-white px-3 py-1 rounded-md shadow-md text-xs font-bold text-gray-600 whitespace-nowrap transition-all duration-300 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
        >
          Size nasıl yardımcı olabiliriz?
        </div>

        {/* Central Toggle Button */}
        <button
          onClick={toggleMenu}
          className={`relative z-20 w-16 h-16 rounded-full shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 ${
            isOpen ? "bg-gray-100 text-gray-800 rotate-90" : "bg-primary text-white"
          }`}
        >
          {/* Subtle ping animation when closed */}
          {!isOpen && (
            <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 animate-ping -z-10" />
          )}

          {isOpen ? (
            <X className="w-8 h-8" />
          ) : (
            <MessageSquare className="w-8 h-8" />
          )}
        </button>
      </div>
    </>
  );
}

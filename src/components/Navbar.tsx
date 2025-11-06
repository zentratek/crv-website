"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { FaPhone, FaWhatsapp } from "react-icons/fa";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-lg py-3"
          : "bg-white/95 backdrop-blur-sm py-4"
      }`}
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/images/logo-small.jpg"
              alt="Clínica de Rehabilitación del Valle"
              width={isScrolled ? 60 : 80}
              height={isScrolled ? 25 : 33}
              className="transition-all duration-300"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-gray-700 hover:text-primary-blue font-medium transition-colors"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection("servicios")}
              className="text-gray-700 hover:text-primary-blue font-medium transition-colors"
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection("nosotros")}
              className="text-gray-700 hover:text-primary-blue font-medium transition-colors"
            >
              Nosotros
            </button>
            <button
              onClick={() => scrollToSection("contacto")}
              className="text-gray-700 hover:text-primary-blue font-medium transition-colors"
            >
              Contacto
            </button>
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center gap-3">
            <a
              href="tel:6022251432"
              className="hidden lg:flex items-center gap-2 text-primary-blue hover:text-primary-lightblue transition-colors"
            >
              <FaPhone />
              <span className="font-medium">602 225 1432</span>
            </a>
            <a
              href="https://wa.me/573163242696"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full flex items-center gap-2 transition-colors font-medium"
            >
              <FaWhatsapp className="text-xl" />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

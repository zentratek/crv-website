"use client";

import Image from "next/image";
import { FaPhone, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 max-w-7xl py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <Image
              src="/images/logo.png"
              alt="Clínica de Rehabilitación del Valle"
              width={200}
              height={75}
              className="mb-4 bg-white p-2 rounded-lg"
            />
            <p className="text-gray-400 text-sm mb-4">
              Servicios profesionales de rehabilitación integral en Tuluá, Valle del Cauca.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="bg-white/10 hover:bg-primary-lightblue p-2 rounded-lg transition-colors"
                aria-label="Facebook"
              >
                <FaFacebook className="text-xl" />
              </a>
              <a
                href="#"
                className="bg-white/10 hover:bg-primary-lightblue p-2 rounded-lg transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram className="text-xl" />
              </a>
              <a
                href="#"
                className="bg-white/10 hover:bg-primary-lightblue p-2 rounded-lg transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-xl" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("inicio")}
                  className="text-gray-400 hover:text-primary-lightblue transition-colors text-sm"
                >
                  Inicio
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("servicios")}
                  className="text-gray-400 hover:text-primary-lightblue transition-colors text-sm"
                >
                  Servicios
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("nosotros")}
                  className="text-gray-400 hover:text-primary-lightblue transition-colors text-sm"
                >
                  Nosotros
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contacto")}
                  className="text-gray-400 hover:text-primary-lightblue transition-colors text-sm"
                >
                  Contacto
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4">Servicios</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Fisioterapia</li>
              <li>Fonoaudiología</li>
              <li>Medicina Física</li>
              <li>Psicología</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contacto</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <FaMapMarkerAlt className="text-primary-lightblue mt-1 flex-shrink-0" />
                <span className="text-gray-400">Cra. 33A # 24-75, Tuluá</span>
              </li>
              <li className="flex items-center gap-2">
                <FaPhone className="text-primary-lightblue flex-shrink-0" />
                <a href="tel:6022251432" className="text-gray-400 hover:text-primary-lightblue transition-colors">
                  602 225 1432
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FaWhatsapp className="text-primary-lightblue flex-shrink-0" />
                <a
                  href="https://wa.me/573163242696"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary-lightblue transition-colors"
                >
                  316 324 2696
                </a>
              </li>
              <li className="flex items-start gap-2">
                <FaEnvelope className="text-primary-lightblue mt-1 flex-shrink-0" />
                <a
                  href="mailto:admisionesclirehavalle@gmail.com"
                  className="text-gray-400 hover:text-primary-lightblue transition-colors break-all"
                >
                  admisionesclirehavalle@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 max-w-7xl py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>
              © {currentYear} Clínica de Rehabilitación del Valle S.A.S. Todos los derechos reservados.
            </p>
            <p className="text-xs">
              Desarrollado por{" "}
              <a
                href="https://www.zentratek.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-lightblue hover:underline"
              >
                ZentraTek
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

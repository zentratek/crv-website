"use client";

import Image from "next/image";
import { FaCalendarAlt, FaPlay } from "react-icons/fa";
import { useState } from "react";

export default function Hero() {
  const [showVideo, setShowVideo] = useState(false);

  const scrollToContact = () => {
    const element = document.getElementById("contacto");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="inicio" className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-blue via-primary-lightblue to-blue-400 opacity-95"></div>

      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-6">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
              ✨ Más de 10 años de experiencia
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Tu camino hacia la{" "}
              <span className="text-yellow-300">recuperación</span>
            </h1>

            <p className="text-lg md:text-xl text-blue-50 leading-relaxed">
              Servicios profesionales de rehabilitación integral en Tuluá.
              Contamos con especialistas en fisioterapia, fonoaudiología,
              medicina física y psicología.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={scrollToContact}
                className="group bg-white text-primary-blue px-8 py-4 rounded-full font-semibold hover:bg-yellow-300 hover:text-primary-blue transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <FaCalendarAlt className="group-hover:scale-110 transition-transform" />
                Solicita tu cita
              </button>

              <a
                href="tel:6022251432"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-primary-blue transition-all duration-300 text-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Llámanos ahora
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold">10+</div>
                <div className="text-sm text-blue-100">Años de experiencia</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">1000+</div>
                <div className="text-sm text-blue-100">Pacientes atendidos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">4</div>
                <div className="text-sm text-blue-100">Especialidades</div>
              </div>
            </div>
          </div>

          {/* Right Content - Image/Video */}
          <div className="relative">
            {!showVideo ? (
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/modelo-asistencia.jpg"
                  alt="Terapia de rehabilitación"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
                <button
                  onClick={() => setShowVideo(true)}
                  className="absolute inset-0 flex items-center justify-center bg-black/40 hover:bg-black/30 transition-colors group"
                >
                  <div className="bg-white rounded-full p-6 group-hover:scale-110 transition-transform">
                    <FaPlay className="text-primary-blue text-3xl ml-1" />
                  </div>
                </button>
              </div>
            ) : (
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <video
                  controls
                  autoPlay
                  className="w-full h-auto"
                >
                  <source src="/videos/promo.mp4" type="video/mp4" />
                  Tu navegador no soporta el elemento de video.
                </video>
              </div>
            )}

            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl hidden lg:block">
              <div className="flex items-center gap-3">
                <div className="bg-green-100 p-3 rounded-lg">
                  <span className="text-2xl">✓</span>
                </div>
                <div>
                  <div className="font-bold text-gray-800">Seguros aceptados</div>
                  <div className="text-sm text-gray-600">Allianz, Coomeva</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

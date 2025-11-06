"use client";

import { useState } from "react";
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonials = [
  {
    name: "María González",
    service: "Fisioterapia",
    rating: 5,
    text: "Excelente atención y profesionalismo. Después de mi cirugía de rodilla, el equipo de fisioterapia me ayudó a recuperar completamente la movilidad. Las instalaciones son muy limpias y los equipos son de última generación.",
    image: "👩‍🦰"
  },
  {
    name: "Carlos Ramírez",
    service: "Medicina Física",
    rating: 5,
    text: "Los especialistas son muy dedicados y el tratamiento ha sido efectivo. Llegué con dolor crónico de espalda y después de 3 meses de tratamiento, mi calidad de vida mejoró significativamente. Totalmente recomendado.",
    image: "👨‍💼"
  },
  {
    name: "Ana Lucía Torres",
    service: "Fonoaudiología",
    rating: 5,
    text: "Mi hijo ha mejorado notablemente su comunicación gracias a la terapia de lenguaje. La fonoaudióloga es muy paciente y profesional. Hemos visto avances increíbles en solo unos meses.",
    image: "👩"
  },
  {
    name: "Roberto Mendoza",
    service: "Psicología",
    rating: 5,
    text: "El apoyo psicológico durante mi rehabilitación fue fundamental. Me ayudaron a manejar la ansiedad y el estrés del proceso de recuperación. Un equipo verdaderamente comprometido con el bienestar integral.",
    image: "👨"
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-blue mb-4">
            Lo que dicen nuestros pacientes
          </h2>
          <p className="text-lg text-gray-600">
            La satisfacción de nuestros pacientes es nuestra mayor motivación
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <FaQuoteLeft className="text-4xl text-primary-lightblue mb-6 opacity-50" />

            <div className="mb-6">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 text-xl" />
                ))}
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                &ldquo;{testimonials[currentIndex].text}&rdquo;
              </p>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-5xl">{testimonials[currentIndex].image}</div>
              <div>
                <h4 className="font-bold text-gray-800 text-lg">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-primary-lightblue font-medium">
                  {testimonials[currentIndex].service}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-white hover:bg-primary-blue text-primary-blue hover:text-white rounded-full p-4 shadow-lg transition-all duration-300"
            aria-label="Anterior testimonio"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-white hover:bg-primary-blue text-primary-blue hover:text-white rounded-full p-4 shadow-lg transition-all duration-300"
            aria-label="Siguiente testimonio"
          >
            <FaChevronRight />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-8 bg-primary-blue"
                    : "w-2 bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Ir al testimonio ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

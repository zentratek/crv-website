import { FaRunning, FaComments, FaHeart, FaBrain, FaArrowRight } from "react-icons/fa";

const services = [
  {
    icon: <FaRunning className="text-5xl" />,
    title: "Fisioterapia",
    description: "Tratamientos especializados para recuperación física y rehabilitación motora con equipos de última generación.",
    features: [
      "Terapia manual",
      "Electroterapia",
      "Hidroterapia en piscina",
      "Rehabilitación deportiva"
    ],
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: <FaComments className="text-5xl" />,
    title: "Fonoaudiología",
    description: "Terapia del lenguaje y comunicación para todas las edades, mejorando la calidad de vida de nuestros pacientes.",
    features: [
      "Terapia de lenguaje",
      "Rehabilitación de voz",
      "Terapia de deglución",
      "Estimulación temprana"
    ],
    color: "from-purple-500 to-purple-600"
  },
  {
    icon: <FaHeart className="text-5xl" />,
    title: "Medicina Física",
    description: "Especialistas en medicina física y rehabilitación integral para una recuperación completa y efectiva.",
    features: [
      "Valoración médica",
      "Planes de rehabilitación",
      "Seguimiento personalizado",
      "Tratamiento integral"
    ],
    color: "from-red-500 to-pink-600"
  },
  {
    icon: <FaBrain className="text-5xl" />,
    title: "Psicología",
    description: "Apoyo psicológico y acompañamiento profesional en el proceso de rehabilitación y recuperación emocional.",
    features: [
      "Terapia individual",
      "Apoyo familiar",
      "Manejo del dolor",
      "Rehabilitación cognitiva"
    ],
    color: "from-teal-500 to-teal-600"
  }
];

export default function Services() {
  return (
    <section id="servicios" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-blue mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-lg text-gray-600">
            Ofrecemos una amplia gama de servicios de rehabilitación con profesionales
            altamente capacitados y equipos de última generación.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2"
            >
              {/* Icon Header */}
              <div className={`bg-gradient-to-br ${service.color} p-8 text-white relative overflow-hidden`}>
                <div className="absolute top-0 right-0 opacity-10">
                  <div className="text-9xl">{service.icon}</div>
                </div>
                <div className="relative z-10">{service.icon}</div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700">
                      <span className="text-primary-lightblue mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button className="w-full bg-gray-100 group-hover:bg-primary-blue text-gray-700 group-hover:text-white py-3 rounded-lg font-medium transition-colors duration-300 flex items-center justify-center gap-2">
                  Más información
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

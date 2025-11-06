import { FaAward, FaUserMd, FaHospital, FaClock, FaShieldAlt, FaHandHoldingHeart } from "react-icons/fa";

const reasons = [
  {
    icon: <FaUserMd className="text-4xl" />,
    title: "Profesionales Expertos",
    description: "Equipo multidisciplinario con amplia experiencia y certificaciones profesionales"
  },
  {
    icon: <FaHospital className="text-4xl" />,
    title: "Instalaciones Modernas",
    description: "Espacios amplios, limpios y equipados con tecnología de última generación"
  },
  {
    icon: <FaClock className="text-4xl" />,
    title: "Atención Personalizada",
    description: "Planes de tratamiento individualizados adaptados a tus necesidades específicas"
  },
  {
    icon: <FaShieldAlt className="text-4xl" />,
    title: "Seguros Aceptados",
    description: "Trabajamos con las principales aseguradoras como Allianz y Coomeva"
  },
  {
    icon: <FaAward className="text-4xl" />,
    title: "10+ Años de Experiencia",
    description: "Más de una década brindando servicios de rehabilitación de calidad"
  },
  {
    icon: <FaHandHoldingHeart className="text-4xl" />,
    title: "Enfoque Integral",
    description: "Tratamiento holístico que considera todos los aspectos de tu recuperación"
  }
];

export default function WhyChooseUs() {
  return (
    <section id="nosotros" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-blue mb-4">
            ¿Por qué elegirnos?
          </h2>
          <p className="text-lg text-gray-600">
            Somos tu mejor opción para una recuperación integral y efectiva
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group p-8 rounded-xl border-2 border-gray-100 hover:border-primary-lightblue hover:shadow-xl transition-all duration-300 bg-white"
            >
              <div className="text-primary-lightblue group-hover:scale-110 transition-transform duration-300 mb-4">
                {reason.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {reason.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-br from-primary-blue to-primary-lightblue rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Inicia tu camino hacia la recuperación hoy
          </h3>
          <p className="text-lg mb-8 text-blue-50 max-w-2xl mx-auto">
            Agenda tu cita de valoración y descubre cómo nuestro equipo puede ayudarte a alcanzar tus objetivos de rehabilitación
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/573163242696"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-primary-blue px-8 py-4 rounded-full font-semibold hover:bg-yellow-300 transition-colors inline-block"
            >
              Contactar por WhatsApp
            </a>
            <a
              href="tel:6022251432"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-primary-blue transition-colors inline-block"
            >
              Llamar ahora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

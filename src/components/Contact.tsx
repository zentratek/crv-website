import { FaPhone, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaClock, FaInstagram, FaFacebook } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contacto" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-blue mb-4">
            Contáctanos
          </h2>
          <p className="text-lg text-gray-600">
            Estamos aquí para ayudarte. Comunícate con nosotros por el medio que prefieras
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info Cards */}
          <div className="lg:col-span-1 space-y-6">
            {/* Ubicaciones */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="bg-primary-lightblue/10 p-3 rounded-lg">
                  <FaMapMarkerAlt className="text-primary-lightblue text-2xl" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-800 mb-2">Ubicaciones</h3>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p>
                      <span className="font-semibold">Sede Principal:</span><br />
                      Cra. 33A # 24-75, Tuluá
                    </p>
                    <p>
                      <span className="font-semibold">Sede Victoria:</span><br />
                      Calle 27 No. 36-24, Tuluá
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Teléfonos */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="bg-primary-lightblue/10 p-3 rounded-lg">
                  <FaPhone className="text-primary-lightblue text-2xl" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-800 mb-2">Teléfonos</h3>
                  <div className="space-y-1 text-sm">
                    <a href="tel:6022251432" className="block text-primary-blue hover:text-primary-lightblue transition-colors">
                      602 225 1432
                    </a>
                    <a href="tel:2352811" className="block text-primary-blue hover:text-primary-lightblue transition-colors">
                      235 2811
                    </a>
                    <a href="tel:2352809" className="block text-primary-blue hover:text-primary-lightblue transition-colors">
                      235 2809
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="bg-gradient-to-br from-green-500 to-green-600 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-white">
              <div className="flex items-start gap-4">
                <div className="bg-white/20 p-3 rounded-lg">
                  <FaWhatsapp className="text-white text-2xl" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold mb-2">WhatsApp</h3>
                  <a
                    href="https://wa.me/573163242696"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm hover:underline block mb-2"
                  >
                    316 324 2696
                  </a>
                  <p className="text-xs text-green-100">
                    Contáctanos directamente y obtén respuesta inmediata
                  </p>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="bg-primary-lightblue/10 p-3 rounded-lg">
                  <FaEnvelope className="text-primary-lightblue text-2xl" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-800 mb-2">Email</h3>
                  <a
                    href="mailto:admisionesclirehavalle@gmail.com"
                    className="text-sm text-primary-blue hover:text-primary-lightblue transition-colors break-all"
                  >
                    admisionesclirehavalle@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Horarios */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="bg-primary-lightblue/10 p-3 rounded-lg">
                  <FaClock className="text-primary-lightblue text-2xl" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-800 mb-2">Horarios</h3>
                  <div className="text-sm text-gray-600 space-y-1">
                    <p>Lunes - Viernes: 7:00 AM - 6:00 PM</p>
                    <p>Sábados: 7:00 AM - 12:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map & Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Google Maps Placeholder */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3977.0936!2d-76.194!3d4.084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e39c49c9c9c9c9d%3A0x1234567890!2sTulu%C3%A1%2C%20Valle%20del%20Cauca!5e0!3m2!1ses!2sco!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            {/* Seguros Aceptados */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-primary-blue mb-6">
                Seguros Aceptados
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                  <div className="bg-primary-blue/10 w-16 h-16 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary-blue">A</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Allianz</h4>
                    <p className="text-sm text-gray-600">Seguros aceptados</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                  <div className="bg-primary-lightblue/10 w-16 h-16 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary-lightblue">C</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Coomeva</h4>
                    <p className="text-sm text-gray-600">Seguros aceptados</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-br from-primary-blue to-primary-lightblue p-8 rounded-xl shadow-lg text-white text-center">
              <h3 className="text-2xl font-bold mb-4">
                ¿Listo para comenzar tu rehabilitación?
              </h3>
              <p className="mb-6 text-blue-50">
                Agenda tu cita ahora y da el primer paso hacia tu recuperación
              </p>
              <a
                href="https://wa.me/573163242696?text=Hola,%20me%20gustaría%20agendar%20una%20cita"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-primary-blue px-8 py-4 rounded-full font-semibold hover:bg-yellow-300 transition-colors"
              >
                <FaWhatsapp className="text-xl" />
                Agendar Cita por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

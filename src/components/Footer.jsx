"use client";

import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Heart, Star, ChefHat } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contacto" className="relative bg-gradient-to-br from-black via-gray-900 to-black text-white overflow-hidden">
      {/* Elementos Decorativos de Fondo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-red-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-orange-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-red-400/10 rounded-full blur-2xl animate-pulse delay-500"></div>
        
        {/* Patrón de puntos decorativo */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-20 gap-4 h-full">
            {[...Array(100)].map((_, i) => (
              <div key={i} className="w-1 h-1 bg-red-400 rounded-full animate-pulse" style={{animationDelay: `${i * 0.1}s`}}></div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Sección Principal del Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Columna 1: Información del Restaurante */}
          <div className="space-y-6">
            <div className="group cursor-pointer">
              <div className="flex items-center space-x-3 mb-4">
                <div className="relative">
                  <ChefHat className="h-8 w-8 text-red-400 group-hover:text-red-300 transition-all duration-300 group-hover:rotate-12" />
                  <div className="absolute inset-0 bg-red-400/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-2xl font-black bg-gradient-to-r from-red-400 via-orange-400 to-red-600 bg-clip-text text-transparent">
                  CAFÉ DONCAR
                </h3>
              </div>
            </div>
            
            <p className="text-gray-300 leading-relaxed">
              🍕🍔 Desde el 29 de septiembre de 2020 en Trelew, Chubut. Nos destacamos por nuestras recetas propias y elaboradas 100% caseras. Especialistas en pizzas y hamburguesas.
            </p>
            
            <div className="flex space-x-4">
              {[
                { icon: Facebook, href: "#" },
                { icon: Instagram, href: "https://www.instagram.com/cafedoncar/" }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="group p-3 bg-white/5 hover:bg-gradient-to-r hover:from-red-400/20 hover:to-orange-400/20 rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-red-400/20"
                >
                  <social.icon className="h-5 w-5 text-gray-400 group-hover:text-red-400 transition-colors duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Columna 2: Enlaces Rápidos */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold text-white border-l-4 border-red-400 pl-4">
              Enlaces Rápidos
            </h4>
            <nav className="space-y-3">
              {['Inicio', 'Menú', 'Nosotros', 'Contacto', 'Delivery'].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="block text-gray-300 hover:text-red-400 transition-all duration-300 hover:translate-x-2 group"
                >
                  <span className="relative">
                    {link}
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-400 group-hover:w-full transition-all duration-300"></div>
                  </span>
                </a>
              ))}
            </nav>
          </div>

          {/* Columna 3: Información de Contacto */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold text-white border-l-4 border-orange-400 pl-4">
              Contacto
            </h4>
            <div className="space-y-4">
              {[
                { icon: MapPin, text: "Pellegrini 1624, Trelew, Chubut", link: "https://maps.google.com/?q=Pellegrini+1624,+Trelew,+Chubut" },
                { icon: Phone, text: "280 4518716", link: "tel:2804518716" },
                { icon: Instagram, text: "@cafedoncar", link: "https://www.instagram.com/cafedoncar/" },
                { icon: Clock, text: "Lun-Dom: 11:00 - 23:00", link: null }
              ].map((contact, index) => (
                <div key={index} className="flex items-center space-x-3 group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                  <contact.icon className="h-5 w-5 text-red-400 group-hover:scale-110 transition-transform duration-300" />
                  {contact.link ? (
                    <a 
                      href={contact.link}
                      target={contact.link.startsWith('http') ? '_blank' : '_self'}
                      rel={contact.link.startsWith('http') ? 'noopener noreferrer' : ''}
                      className="text-gray-300 group-hover:text-white transition-colors duration-300 hover:underline"
                    >
                      {contact.text}
                    </a>
                  ) : (
                    <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                      {contact.text}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Columna 4: Mapa de Ubicación */}
          <div className="space-y-6 md:col-span-2 lg:col-span-1">
            <h4 className="text-lg font-bold text-white border-l-4 border-red-400 pl-4">
              📍 Encuéntranos
            </h4>
            <div className="relative group">
              <div className="overflow-hidden rounded-xl border-2 border-red-400/30 group-hover:border-red-400/50 transition-all duration-300 shadow-lg hover:shadow-red-400/20">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2965.2487!2d-65.3051!3d-43.2489!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDE0JzU2LjAiUyA2NcKwMTgnMTguNCJX!5e0!3m2!1ses!2sar!4v1000000000000!5m2!1ses!2sar&q=Pellegrini+1624,+Trelew,+Chubut"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación Café Doncar - Pellegrini 1624, Trelew, Chubut"
                  className="grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
              
              {/* Overlay con información */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none">
                <div className="absolute bottom-3 left-3 right-3">
                  <p className="text-white text-sm font-semibold">📍 Pellegrini 1624</p>
                  <p className="text-gray-200 text-xs">Trelew, Chubut</p>
                </div>
              </div>
              
              {/* Botón para abrir en Google Maps */}
              <div className="mt-3">
                <a
                  href="https://maps.google.com/?q=Pellegrini+1624,+Trelew,+Chubut"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-sm text-red-400 hover:text-red-300 transition-colors duration-300 group/link"
                >
                  <MapPin className="h-4 w-4 group-hover/link:scale-110 transition-transform duration-300" />
                  <span>Abrir en Google Maps</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Línea Separadora Animada */}
        <div className="relative mb-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-600"></div>
          </div>
          <div className="relative flex justify-center">
            <div className="bg-gradient-to-r from-red-400 to-orange-400 w-16 h-1 rounded-full"></div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2">
            <span className="text-gray-400">© {currentYear} Doncar Restaurant.</span>
            <span className="text-gray-400">Todos los derechos reservados.</span>
          </div>
          
          <div className="flex items-center space-x-2 text-gray-400 group">
            <span>Desarrollado con</span>
            <Heart className="h-4 w-4 text-red-400 animate-pulse" />
            <span>por</span>
            <a 
              href="#" 
              className="text-red-400 hover:text-red-300 font-bold transition-colors duration-300 hover:underline group-hover:scale-105 transform transition-transform duration-300"
            >
              Pablo Proboste
            </a>
          </div>
        </div>
      </div>

      {/* Efecto de Brillo en la parte superior */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-400/50 to-transparent"></div>
    </footer>
  );
}

"use client";

import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter, Heart, Star, ChefHat } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-br from-black via-gray-900 to-black text-white overflow-hidden">
      {/* Elementos Decorativos de Fondo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-orange-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-red-400/10 rounded-full blur-2xl animate-pulse delay-500"></div>
        
        {/* Patrón de puntos decorativo */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-20 gap-4 h-full">
            {[...Array(100)].map((_, i) => (
              <div key={i} className="w-1 h-1 bg-yellow-400 rounded-full animate-pulse" style={{animationDelay: `${i * 0.1}s`}}></div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Sección Principal del Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          
          {/* Columna 1: Información del Restaurante */}
          <div className="space-y-6">
            <div className="group cursor-pointer">
              <div className="flex items-center space-x-3 mb-4">
                <div className="relative">
                  <ChefHat className="h-8 w-8 text-yellow-400 group-hover:text-yellow-300 transition-all duration-300 group-hover:rotate-12" />
                  <div className="absolute inset-0 bg-yellow-400/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-2xl font-black bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
                  DONCAR
                </h3>
              </div>
            </div>
            
            <p className="text-gray-300 leading-relaxed">
              Experiencias gastronómicas únicas que despiertan todos tus sentidos. Sabores auténticos en un ambiente moderno y acogedor.
            </p>
            
            <div className="flex space-x-4">
              {[
                { icon: Facebook, href: "#" },
                { icon: Instagram, href: "#" },
                { icon: Twitter, href: "#" }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="group p-3 bg-white/5 hover:bg-gradient-to-r hover:from-yellow-400/20 hover:to-orange-400/20 rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-yellow-400/20"
                >
                  <social.icon className="h-5 w-5 text-gray-400 group-hover:text-yellow-400 transition-colors duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Columna 2: Enlaces Rápidos */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold text-white border-l-4 border-yellow-400 pl-4">
              Enlaces Rápidos
            </h4>
            <nav className="space-y-3">
              {['Inicio', 'Menú', 'Nosotros', 'Reservas', 'Contacto', 'Delivery'].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="block text-gray-300 hover:text-yellow-400 transition-all duration-300 hover:translate-x-2 group"
                >
                  <span className="relative">
                    {link}
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300"></div>
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
                { icon: MapPin, text: "Av. Principal 123, Ciudad" },
                { icon: Phone, text: "+1 (555) 123-4567" },
                { icon: Mail, text: "info@doncar.com" },
                { icon: Clock, text: "Lun-Dom: 11:00 - 23:00" }
              ].map((contact, index) => (
                <div key={index} className="flex items-center space-x-3 group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                  <contact.icon className="h-5 w-5 text-yellow-400 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                    {contact.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Línea Separadora Animada */}
        <div className="relative mb-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-600"></div>
          </div>
          <div className="relative flex justify-center">
            <div className="bg-gradient-to-r from-yellow-400 to-orange-400 w-16 h-1 rounded-full"></div>
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
              className="text-yellow-400 hover:text-yellow-300 font-bold transition-colors duration-300 hover:underline group-hover:scale-105 transform transition-transform duration-300"
            >
              Pablo Proboste
            </a>
          </div>
        </div>
      </div>

      {/* Efecto de Brillo en la parte superior */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent"></div>
    </footer>
  );
}

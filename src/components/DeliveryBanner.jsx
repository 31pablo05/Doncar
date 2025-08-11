"use client"

import { MapPin, Phone, Clock, Star, Truck } from 'lucide-react';

export default function DeliveryBanner() {
  return (
    <div className="bg-gradient-to-r from-red-600 via-red-700 to-red-900 text-white py-8 px-4 relative overflow-hidden animate-fadeInUp">
      {/* Elementos decorativos de fondo animados */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-orange-400 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-24 h-24 bg-red-400 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-red-300 rounded-full blur-3xl animate-pulse delay-500 opacity-30"></div>
      </div>

      {/* Patrón de ondas animadas */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent transform skew-x-12 animate-ping" style={{animationDuration: '3s'}}></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-center text-center md:text-left">
          
          {/* Delivery Propio */}
          <div className="group flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-3 transform hover:scale-105 transition-all duration-300">
            <div className="bg-white/20 group-hover:bg-white/30 p-3 rounded-full transition-all duration-300 group-hover:shadow-lg group-hover:shadow-red-500/25 animate-bounce" style={{animationDuration: '2s'}}>
              <Truck className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
            </div>
            <div>
              <h3 className="font-bold text-lg group-hover:text-red-100 transition-colors duration-300">Delivery Propio</h3>
              <p className="text-red-100 text-sm group-hover:text-white transition-colors duration-300">Entrega gratuita en Trelew</p>
            </div>
          </div>

          {/* Tiempo de entrega */}
          <div className="group flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-3 transform hover:scale-105 transition-all duration-300">
            <div className="bg-white/20 group-hover:bg-white/30 p-3 rounded-full transition-all duration-300 group-hover:shadow-lg group-hover:shadow-red-500/25 animate-bounce delay-200" style={{animationDuration: '2s'}}>
              <Clock className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
            </div>
            <div>
              <h3 className="font-bold text-lg group-hover:text-red-100 transition-colors duration-300">30-45 min</h3>
              <p className="text-red-100 text-sm group-hover:text-white transition-colors duration-300">Tiempo de entrega</p>
            </div>
          </div>

          {/* Zona de cobertura */}
          <div className="group flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-3 transform hover:scale-105 transition-all duration-300">
            <div className="bg-white/20 group-hover:bg-white/30 p-3 rounded-full transition-all duration-300 group-hover:shadow-lg group-hover:shadow-red-500/25 animate-bounce delay-500" style={{animationDuration: '2s'}}>
              <MapPin className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
            </div>
            <div>
              <h3 className="font-bold text-lg group-hover:text-red-100 transition-colors duration-300">Trelew, Chubut</h3>
              <p className="text-red-100 text-sm group-hover:text-white transition-colors duration-300">Pellegrini 1624</p>
            </div>
          </div>

          {/* Contacto directo */}
          <div className="group flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-3 transform hover:scale-105 transition-all duration-300">
            <div className="bg-white/20 group-hover:bg-white/30 p-3 rounded-full transition-all duration-300 group-hover:shadow-lg group-hover:shadow-red-500/25 animate-bounce delay-700" style={{animationDuration: '2s'}}>
              <Phone className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
            </div>
            <div>
              <h3 className="font-bold text-lg group-hover:text-red-100 transition-colors duration-300">280 4518716</h3>
              <p className="text-red-100 text-sm group-hover:text-white transition-colors duration-300">Pedidos WhatsApp</p>
            </div>
          </div>
        </div>

        {/* Call to Action Mejorado */}
        <div className="mt-8 text-center animate-fadeInUp delay-300">
          <div className="inline-flex items-center space-x-3 bg-white/20 hover:bg-white/30 backdrop-blur-sm px-8 py-4 rounded-2xl border border-white/30 hover:border-white/50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-red-500/25 group">
            <Star className="h-5 w-5 text-orange-300 animate-pulse group-hover:text-orange-200 transition-colors duration-300" />
            <span className="font-bold text-lg group-hover:text-red-100 transition-colors duration-300">🍕🍔 Especialistas en Pizzas y Hamburguesas 100% Caseras</span>
            <Star className="h-5 w-5 text-orange-300 animate-pulse group-hover:text-orange-200 transition-colors duration-300" />
          </div>
        </div>

        {/* Efecto de brillo flotante */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-1/4 left-0 w-2 h-16 bg-gradient-to-b from-transparent via-white/30 to-transparent animate-ping transform -skew-x-12" style={{animationDuration: '4s'}}></div>
          <div className="absolute top-1/2 right-0 w-2 h-20 bg-gradient-to-b from-transparent via-white/30 to-transparent animate-ping transform skew-x-12 delay-1000" style={{animationDuration: '4s'}}></div>
        </div>
      </div>
    </div>
  );
}

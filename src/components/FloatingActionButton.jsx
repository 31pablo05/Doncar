"use client"

import { useState } from 'react';
import { Truck } from 'lucide-react';

export default function FloatingActionButton({ cartItemsCount }) {
  const [isHovered, setIsHovered] = useState(false);

  const quickOrderWhatsApp = () => {
    const phoneNumber = "5492804518716"; // Número de WhatsApp de Café Doncar Trelew
    const message = encodeURIComponent(`¡Hola Café Doncar! �🍔

Me gustaría hacer un pedido para delivery. ¿Podrían ayudarme con el menú disponible?

📍 Ubicación: 
🕒 Horario preferido: 
💬 Comentarios adicionales: 

¡Gracias!`);
    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      {/* Botón principal flotante simplificado */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="relative">
          
          {/* Botón principal - Solo WhatsApp */}
          <button
            onClick={quickOrderWhatsApp}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="relative w-20 h-20 bg-gradient-to-br from-amber-400 via-orange-500 to-red-500 text-white rounded-full shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-110 flex items-center justify-center overflow-hidden group border-4 border-white/20"
          >
            
            {/* Efecto de brillo animado */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            
            {/* Anillo pulsante cuando hay items en el carrito */}
            {cartItemsCount > 0 && (
              <div className="absolute inset-0 rounded-full border-4 border-amber-300 animate-ping opacity-75"></div>
            )}

            {/* Badge del contador */}
            {cartItemsCount > 0 && (
              <div className="absolute -top-3 -right-3 bg-white text-orange-600 text-sm rounded-full w-8 h-8 flex items-center justify-center font-bold shadow-2xl animate-bounce border-3 border-orange-500">
                {cartItemsCount > 99 ? '99+' : cartItemsCount}
              </div>
            )}
            
            {/* Ícono principal */}
            <div className="relative z-10">
              <Truck className={`h-10 w-10 transform transition-all duration-300 ${isHovered ? 'scale-110 -rotate-12' : ''}`} />
              {/* Efecto de movimiento */}
              {isHovered && (
                <div className="absolute -right-8 top-3 flex space-x-1">
                  <div className="w-2 h-2 bg-white/80 rounded-full animate-ping animation-delay-100"></div>
                  <div className="w-1.5 h-1.5 bg-white/60 rounded-full animate-ping animation-delay-200"></div>
                  <div className="w-1 h-1 bg-white/40 rounded-full animate-ping animation-delay-300"></div>
                </div>
              )}
            </div>

            {/* Texto flotante */}
            <div className={`absolute -left-36 top-1/2 transform -translate-y-1/2 bg-gray-900/95 backdrop-blur-sm text-white px-4 py-2 rounded-xl text-sm font-bold whitespace-nowrap transition-all duration-300 shadow-2xl border border-amber-500/30 ${
              isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
            }`}>
              <span className="text-amber-400">🚚</span> 
              <div className="absolute right-0 top-1/2 transform translate-x-1 -translate-y-1/2 w-0 h-0 border-l-8 border-l-gray-900/95 border-t-4 border-b-4 border-t-transparent border-b-transparent"></div>
            </div>
          </button>

          {/* Ondas de pulso decorativas */}
          <div className="absolute inset-0 pointer-events-none">
            <div className={`absolute inset-0 rounded-full border-2 border-amber-400/40 transition-all duration-1000 ${isHovered ? 'scale-150 opacity-0' : 'scale-100 opacity-100'}`}></div>
            <div className={`absolute inset-0 rounded-full border border-orange-400/30 transition-all duration-1000 delay-150 ${isHovered ? 'scale-200 opacity-0' : 'scale-125 opacity-100'}`}></div>
            <div className={`absolute inset-0 rounded-full border border-red-400/20 transition-all duration-1000 delay-300 ${isHovered ? 'scale-250 opacity-0' : 'scale-150 opacity-100'}`}></div>
          </div>
        </div>
      </div>
    </>
  );
}

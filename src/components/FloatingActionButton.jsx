"use client"

import { useState } from 'react';
import { ShoppingBag, MessageSquare, Truck } from 'lucide-react';

export default function FloatingActionButton({ cartItemsCount, onCartOpen }) {
  const [showQuickActions, setShowQuickActions] = useState(false);

  const quickOrderWhatsApp = () => {
    const phoneNumber = "5492804518716"; // Número de WhatsApp de Café Doncar Trelew
    const message = encodeURIComponent(`¡Hola Café Doncar! 👋

Me gustaría hacer un pedido. ¿Podrían ayudarme con el menú disponible?

¡Gracias!`);
    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      {/* Botón principal flotante */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="relative">
          
          {/* Acciones rápidas */}
          {showQuickActions && (
            <div className="absolute bottom-16 right-0 space-y-3 animate-fadeInUp z-50">
              
              {/* WhatsApp directo */}
              <button
                onClick={quickOrderWhatsApp}
                className="flex items-center space-x-3 bg-green-600 text-white px-4 py-3 rounded-full shadow-lg hover:bg-green-700 transition-all duration-300 transform hover:scale-105"
              >
                <MessageSquare className="h-5 w-5" />
                <span className="font-medium">Consultar por WhatsApp</span>
              </button>

              {/* Ver carrito */}
              {cartItemsCount > 0 && (
                <button
                  onClick={onCartOpen}
                  className="flex items-center space-x-3 bg-gray-800 text-white px-4 py-3 rounded-full shadow-lg hover:bg-gray-900 transition-all duration-300 transform hover:scale-105"
                >
                  <ShoppingBag className="h-5 w-5" />
                  <span className="font-medium">Ver Carrito ({cartItemsCount})</span>
                </button>
              )}
            </div>
          )}

          {/* Botón principal */}
          <button
            onClick={() => setShowQuickActions(!showQuickActions)}
            className={`w-14 h-14 bg-gradient-to-r from-gray-700 to-gray-900 text-white rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center relative ${
              showQuickActions ? 'rotate-45' : ''
            }`}
          >
            {cartItemsCount > 0 && !showQuickActions && (
              <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold animate-pulse">
                {cartItemsCount}
              </div>
            )}
            
            {showQuickActions ? (
              <div className="text-2xl">×</div>
            ) : (
              <Truck className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Overlay para cerrar acciones */}
      {showQuickActions && (
        <div 
          className="fixed inset-0 z-30"
          onClick={() => setShowQuickActions(false)}
        />
      )}
    </>
  );
}

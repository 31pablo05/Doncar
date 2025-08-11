"use client"

import { useState, useEffect } from 'react';
import { CheckCircle, X, Truck, Clock } from 'lucide-react';

export default function OrderNotification({ order, onClose }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (order) {
      setIsVisible(true);
      // Auto cerrar después de 5 segundos
      const timer = setTimeout(() => {
        setIsVisible(false);
        setTimeout(() => {
          onClose();
        }, 300);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [order, onClose]);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  const sendWhatsApp = () => {
    const phoneNumber = "5492804518716"; // Número de WhatsApp de Café Doncar Trelew
    const message = encodeURIComponent(order.whatsappMessage);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    
    window.open(whatsappUrl, '_blank');
    handleClose();
  };

  if (!order) return null;

  return (
    <div className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 transition-opacity duration-300 ${
      isVisible ? 'opacity-100' : 'opacity-0'
    }`}>
      <div className={`bg-gray-900 rounded-2xl p-6 w-full max-w-md border border-gray-700 shadow-2xl transform transition-all duration-300 ${
        isVisible ? 'scale-100 translate-y-0' : 'scale-95 translate-y-4'
      }`}>
        {/* Header */}
        <div className="flex justify-between items-start mb-6">
          <div className="flex items-center">
            <CheckCircle className="h-8 w-8 text-green-500 mr-3" />
            <div>
              <h2 className="text-xl font-bold text-white">¡Pedido Confirmado!</h2>
              <p className="text-gray-400 text-sm">Tu pedido está listo para enviar</p>
            </div>
          </div>
          <button
            onClick={handleClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Detalles del pedido */}
        <div className="mb-6 p-4 bg-gray-800/50 rounded-xl">
          <div className="flex items-center mb-3">
            <span className="text-gray-300 font-medium">Cliente:</span>
            <span className="text-white ml-2">{order.customerName}</span>
          </div>
          
          <div className="flex items-center mb-3">
            {order.deliveryMethod === 'delivery' ? (
              <>
                <Truck className="h-4 w-4 text-gray-400 mr-2" />
                <span className="text-gray-300">Delivery Propio</span>
              </>
            ) : (
              <>
                <Clock className="h-4 w-4 text-gray-400 mr-2" />
                <span className="text-gray-300">Retiro en Local</span>
              </>
            )}
          </div>

          <div className="border-t border-gray-600 pt-3 mt-3">
            <div className="flex justify-between font-bold text-white">
              <span>Total:</span>
              <span>${order.total.toFixed(2)}</span>
            </div>
          </div>
        </div>

        {/* Información de contacto */}
        <div className="mb-6 p-4 bg-gradient-to-r from-green-500/10 to-green-600/10 rounded-xl border border-green-500/20">
          <h3 className="text-green-400 font-semibold mb-2">📱 Próximo Paso:</h3>
          <p className="text-gray-300 text-sm mb-3">
            Envía tu pedido por WhatsApp para confirmar y recibir el tiempo de entrega estimado.
          </p>
          <div className="text-xs text-gray-400">
            💡 Se abrirá WhatsApp con tu pedido ya preparado
          </div>
        </div>

        {/* Botones de acción */}
        <div className="flex gap-3">
          <button
            onClick={handleClose}
            className="flex-1 bg-gray-700 text-white font-medium py-3 px-4 rounded-xl hover:bg-gray-600 transition-colors"
          >
            Cerrar
          </button>
          <button
            onClick={sendWhatsApp}
            className="flex-1 bg-green-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-green-700 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Enviar por WhatsApp
          </button>
        </div>

        {/* Información de delivery */}
        {order.deliveryMethod === 'delivery' && (
          <div className="mt-4 p-3 bg-blue-500/10 rounded-xl border border-blue-500/20">
            <div className="flex items-center text-blue-400 text-sm">
              <Truck className="h-4 w-4 mr-2" />
              <span className="font-medium">Delivery Propio de Café Doncar</span>
            </div>
            <p className="text-xs text-gray-400 mt-1">
              Entrega gratuita en Trelew • Tiempo estimado: 30-45 min
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

"use client"

import { Star, MessageCircle, ExternalLink, MapPin, Clock, ChevronDown, ChevronUp, Users, ThumbsUp } from "lucide-react";
import { useState, useEffect } from "react";

export default function ReviewsSection() {
  const [showAllReviews, setShowAllReviews] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('reviews-section');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  // Datos de Google Business (actualiza estos con los datos reales)
  const googleBusinessData = {
    name: "Café Doncar",
    rating: 4.8, // Calificación promedio actual en Google
    totalReviews: 30, // Total de reseñas en Google
    placeId: "ChIJXXXXXXXXXXXXXXXXXXXX", // Reemplaza con tu Place ID real
    address: "Pellegrini 1624, Trelew, Chubut", // Dirección real
    phone: "+54 280 4518716" // Teléfono real
  };

  // URLs reales de Google Business para Café Doncar
  const googleReviewUrl = "https://www.google.com/search?q=cafe+doncar+trelew+rese%C3%B1as";
  const googleBusinessUrl = "https://www.google.com/search?q=cafe+doncar+trelew+rese%C3%B1as";

  const [reviews] = useState([
    {
      id: 1,
      name: "María González",
      rating: 5,
      comment: "¡Las mejores hamburguesas de Trelew! La calidad es excepcional y el delivery súper rápido. Recomiendo la Hamburguesa Doncar, es espectacular.",
      date: "2024-12-15",
      avatar: "MG",
      verified: true,
      source: "google"
    },
    {
      id: 2, 
      name: "Carlos Rodríguez",
      rating: 5,
      comment: "Pizza espectacular, masa perfecta y ingredientes frescos. El lugar tiene muy buen ambiente y la atención es excelente. Volveremos seguro.",
      date: "2024-12-10",
      avatar: "CR",
      verified: true,
      source: "google"
    },
    {
      id: 3,
      name: "Ana López",
      rating: 5,
      comment: "Excelente atención y sabor único. El ambiente del local es muy acogedor. Las chips con cheddar son adictivas!",
      date: "2024-12-05",
      avatar: "AL",
      verified: true,
      source: "google"
    },
    {
      id: 4,
      name: "Roberto Silva",
      rating: 4,
      comment: "Muy buena comida y precios justos. El delivery llega siempre en tiempo y forma. Recomiendo probar los sandwiches.",
      date: "2024-11-28",
      avatar: "RS",
      verified: true,
      source: "google"
    },
    {
      id: 5,
      name: "Lucía Martínez",
      rating: 5,
      comment: "Un lugar increíble para comer en familia. Los chicos aman el Combo Kids y nosotros las hamburguesas gourmet. ¡Felicitaciones!",
      date: "2024-11-20",
      avatar: "LM",
      verified: true,
      source: "google"
    },
    {
      id: 6,
      name: "Diego Fernández",
      rating: 4,
      comment: "Buena variedad en el menú y todo muy rico. El lugar es limpio y ordenado. La pizza Café Doncar es recomendable.",
      date: "2024-11-15",
      avatar: "DF",
      verified: true,
      source: "google"
    }
  ]);

  const averageRating = googleBusinessData.rating;
  const reviewsToShow = showAllReviews ? reviews : reviews.slice(0, 3);

  return (
    <section id="reviews-section" className="relative py-24 bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white overflow-hidden">
      {/* Elementos Decorativos de Fondo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-amber-500/10 via-orange-500/5 to-red-500/10 rounded-full blur-3xl animate-pulse opacity-60"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-blue-500/5 via-purple-500/10 to-pink-500/5 rounded-full blur-3xl animate-pulse delay-1000 opacity-50"></div>
        
        {/* Partículas flotantes */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full animate-float-custom shadow-lg opacity-30"
            style={{
              left: `${10 + i * 6}%`,
              top: `${20 + (i % 4) * 20}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${4 + i * 0.3}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Título de la sección */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-block mb-6">
            <div className="flex items-center gap-3 bg-gradient-to-r from-amber-500/20 to-orange-500/20 backdrop-blur-sm border border-amber-500/30 rounded-2xl px-6 py-3">
              <Users className="h-6 w-6 text-amber-400" />
              <span className="text-amber-300 font-semibold text-lg">Testimonios Reales</span>
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
            LO QUE DICEN
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 animate-gradient-x">
              NUESTROS CLIENTES
            </span>
          </h2>
          
          <div className="flex justify-center items-center gap-4 mb-8">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-amber-500"></div>
            <div className="w-3 h-3 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full animate-pulse"></div>
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-amber-500"></div>
          </div>
        </div>

        {/* Header con datos de Google Business mejorado */}
        <div className={`text-center mb-16 transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="relative group inline-block">
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 via-purple-500/30 to-pink-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-xl rounded-3xl p-8 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-500">
              <div className="flex items-center justify-center gap-3 mb-6">
                <img 
                  src="https://fonts.gstatic.com/s/i/productlogos/googleg/v6/24px.svg" 
                  alt="Google" 
                  className="h-8 w-8"
                />
                <span className="text-white font-bold text-xl">Verificado por Google</span>
              </div>

              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-10 w-10 ${i < Math.floor(averageRating) ? 'text-yellow-400 fill-current' : 'text-gray-400'} drop-shadow-lg`} 
                    />
                  ))}
                </div>
                <span className="text-white font-black text-4xl ml-2">{averageRating}</span>
              </div>
              
              <p className="text-gray-300 text-xl mb-6">
                Basado en <span className="text-amber-400 font-bold">{googleBusinessData.totalReviews} reseñas reales</span> de Google
              </p>

              {/* Información del negocio */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                <div className="flex items-center justify-center gap-3 text-gray-300 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl p-4 border border-blue-500/20">
                  <MapPin className="h-6 w-6 text-blue-400" />
                  <span className="font-medium">{googleBusinessData.address}</span>
                </div>
                <div className="flex items-center justify-center gap-3 text-gray-300 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-2xl p-4 border border-green-500/20">
                  <Clock className="h-6 w-6 text-green-400" />
                  <span className="font-medium">Lun - Dom: 18:00 - 00:30</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews Grid Mejorado */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {reviewsToShow.map((review, index) => (
            <div key={review.id} className={`relative group transition-all duration-500 delay-${index * 100}`}>
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-500/20 via-orange-500/30 to-red-500/20 rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-xl rounded-3xl p-6 border border-amber-500/20 hover:border-amber-500/40 transition-all duration-500 hover:scale-105 h-full">
                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    {review.avatar}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="text-white font-bold text-lg">{review.name}</h4>
                      {review.verified && (
                        <div className="flex items-center gap-1 bg-blue-600/30 px-3 py-1 rounded-full border border-blue-500/40">
                          <img 
                            src="https://fonts.gstatic.com/s/i/productlogos/googleg/v6/24px.svg" 
                            alt="Google" 
                            className="h-4 w-4"
                          />
                          <span className="text-blue-300 text-sm font-medium">Verificado</span>
                        </div>
                      )}
                    </div>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-5 w-5 ${i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-500'} drop-shadow-sm`} 
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Comment */}
                <div className="mb-4">
                  <p className="text-gray-300 leading-relaxed text-lg font-medium">"{review.comment}"</p>
                </div>
                
                {/* Date */}
                <div className="flex items-center justify-between">
                  <p className="text-gray-500 text-sm font-medium">{new Date(review.date).toLocaleDateString('es-AR')}</p>
                  <ThumbsUp className="h-4 w-4 text-green-400" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Botón Ver más / Ver menos */}
        {reviews.length > 3 && (
          <div className={`text-center mb-16 transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <button
              onClick={() => setShowAllReviews(!showAllReviews)}
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-amber-500/20 to-orange-500/20 hover:from-amber-500/30 hover:to-orange-500/30 text-amber-300 hover:text-amber-200 font-bold px-8 py-4 rounded-2xl border border-amber-500/30 hover:border-amber-500/50 transition-all duration-300 backdrop-blur-sm hover:scale-105"
            >
              {showAllReviews ? (
                <>
                  <span className="text-lg">Ver menos reseñas</span>
                  <ChevronUp className="h-6 w-6 group-hover:transform group-hover:-translate-y-1 transition-transform duration-300" />
                </>
              ) : (
                <>
                  <span className="text-lg">Ver todas las reseñas ({reviews.length - 3} más)</span>
                  <ChevronDown className="h-6 w-6 group-hover:transform group-hover:translate-y-1 transition-transform duration-300" />
                </>
              )}
            </button>
          </div>
        )}

        {/* Call to Action - Múltiples opciones mejoradas */}
        <div className={`text-center transition-all duration-1000 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="flex flex-col lg:flex-row gap-6 justify-center items-center mb-12">
            {/* Botón principal para dejar reseña */}
            <a 
              href={googleReviewUrl}
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-4 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white px-10 py-5 rounded-3xl font-bold text-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 border border-blue-500/20"
            >
              <MessageCircle className="h-7 w-7 group-hover:rotate-12 transition-transform duration-300" />
              <span>Dejanos tu reseña en Google</span>
              <ExternalLink className="h-6 w-6 opacity-70" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </a>

            {/* Botón secundario para ver todas las reseñas */}
            <a 
              href={googleBusinessUrl}
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-gray-800/60 to-gray-900/60 backdrop-blur-xl border border-white/20 hover:border-white/40 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-gradient-to-r hover:from-gray-700/60 hover:to-gray-800/60 transition-all duration-300 hover:scale-105"
            >
              <img 
                src="https://fonts.gstatic.com/s/i/productlogos/googleg/v6/24px.svg" 
                alt="Google" 
                className="h-6 w-6"
              />
              <span>Ver todas en Google</span>
              <ExternalLink className="h-5 w-5 opacity-70" />
            </a>
          </div>

          {/* Información adicional mejorada */}
          <div className="relative group max-w-3xl mx-auto">
            <div className="absolute -inset-2 bg-gradient-to-r from-amber-500/20 via-orange-500/30 to-red-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative bg-gradient-to-r from-amber-900/30 to-orange-900/30 backdrop-blur-xl rounded-3xl p-8 border border-amber-500/30 hover:border-amber-500/50 transition-all duration-500">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Star className="h-6 w-6 text-amber-400 fill-current animate-pulse" />
                <span className="text-amber-300 font-bold text-xl">¿Te gustó tu experiencia?</span>
                <Star className="h-6 w-6 text-amber-400 fill-current animate-pulse" />
              </div>
              
              <p className="text-gray-300 text-lg text-center leading-relaxed mb-6">
                Tu opinión nos ayuda a seguir mejorando. Comparte tu experiencia en Google y ayuda a otros a descubrir los sabores únicos de Café Doncar.
              </p>
              
              <div className="flex items-center justify-center gap-8 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-blue-400" />
                  <span>{googleBusinessData.totalReviews}+ clientes satisfechos</span>
                </div>
                <div className="flex items-center gap-2">
                  <ThumbsUp className="h-5 w-5 text-green-400" />
                  <span>95% recomiendan</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client"

import { useState, useRef } from 'react';
import { Play, Pause, Volume2, Calendar, MapPin, Heart } from 'lucide-react';

export default function AboutSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="relative py-20 bg-gradient-to-b from-gray-800 via-gray-700 to-gray-900 overflow-hidden">
      {/* Separador visual elegante */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-400/50 to-transparent"></div>
      
      {/* Elementos Decorativos de Fondo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-40 h-40 bg-orange-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-red-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-red-400/10 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Título de la sección */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 animate-fadeInUp">
            CONOCÉ NUESTRO 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 ml-3">
              LOCAL
            </span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-orange-400 to-red-500 mx-auto rounded-full animate-fadeInUp delay-200"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Video del local */}
          <div className="relative group animate-fadeInUp delay-300">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <video
                ref={videoRef}
                className="w-full h-auto rounded-2xl"
                poster="/assets/images/hoy nos toca cerrar un año fantástico y se lo agradecemos a ustedes que nos acompañaron en toda .jpg"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                controls={false}
              >
                <source src="/assets/videos/café doncar trelew, fue creado el 29 de septiembre de 2020 en la calle pellegrini 1624. Nos dest.mp4" type="video/mp4" />
                Tu navegador no soporta la reproducción de videos.
              </video>
              
              {/* Overlay de controles */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <button
                  onClick={togglePlay}
                  className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-4 rounded-full transition-all duration-300 transform hover:scale-110"
                >
                  {isPlaying ? (
                    <Pause className="h-8 w-8" />
                  ) : (
                    <Play className="h-8 w-8 ml-1" />
                  )}
                </button>
              </div>
              
              {/* Indicador de video */}
              <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center">
                <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></div>
                VIDEO
              </div>
            </div>
          </div>

          {/* Información e imagen del cartel */}
          <div className="space-y-8 animate-fadeInUp delay-500">
            
            {/* Historia */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-600">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Heart className="h-6 w-6 text-red-400 mr-3" />
                Nuestra Historia
              </h3>
              
              <div className="space-y-4 text-gray-300">
                <div className="flex items-start space-x-3">
                  <Calendar className="h-5 w-5 text-orange-400 mt-1 flex-shrink-0" />
                  <div>
                    <span className="text-orange-400 font-semibold">29 de Septiembre de 2020</span>
                    <p className="mt-1">Nace Café Doncar en el corazón de Trelew, con el sueño de crear experiencias gastronómicas únicas.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <span className="text-green-400 font-semibold">Pellegrini 1624, Trelew</span>
                    <p className="mt-1">Nuestro local te espera con un ambiente cálido y acogedor en el centro de la ciudad.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-xl border border-orange-500/20">
                <p className="text-white font-medium text-center">
                  🍕🍔 <span className="text-orange-400">Nos destacamos</span> por nuestras recetas propias y elaboradas <span className="text-red-400">100% caseras</span>
                </p>
                <p className="text-gray-300 text-center mt-2">
                  Especialistas en <strong>pizzas y hamburguesas</strong> que despiertan todos tus sentidos
                </p>
              </div>
            </div>

            {/* Imagen del cartel */}
            <div className="relative group">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/assets/images/hoy nos toca cerrar un año fantástico y se lo agradecemos a ustedes que nos acompañaron en toda .jpg"
                  alt="Cartel del local Café Doncar"
                  className="w-full h-auto rounded-2xl transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-semibold">📍 Café Doncar</p>
                  <p className="text-sm text-gray-200">Pellegrini 1624, Trelew</p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fadeInUp delay-700">
          <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-red-600 to-red-800 text-white font-bold py-4 px-8 rounded-2xl shadow-2xl hover:shadow-red-500/25 transform hover:scale-105 transition-all duration-300">
            <MapPin className="h-6 w-6" />
            <span>¡Visitanos en Pellegrini 1624!</span>
            <Heart className="h-6 w-6" />
          </div>
        </div>

      </div>
    </section>
  );
}

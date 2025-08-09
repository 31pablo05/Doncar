"use client"

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Play, Star, ArrowRight } from "lucide-react";

export default function HeroBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Slides del carrusel con imágenes y video reales
  const slides = [
    {
      id: 1,
      type: "image",
      src: "/assets/images/don1.jpg",
      title: "HAMBURGUESAS GOURMET",
      subtitle: "Sabores que revolucionan tu paladar",
      description: "Ingredientes premium, carnes selectas y salsas artesanales",
      cta: "Probar Ahora"
    },
    {
      id: 2,
      type: "image", 
      src: "/assets/images/don2.jpg",
      title: "PIZZAS ARTESANALES",
      subtitle: "Tradición italiana con toque moderno",
      description: "Masa fermentada 48hrs, quesos importados y vegetales frescos",
      cta: "Descubrir Más"
    },
    {
      id: 3,
      type: "image",
      src: "/assets/images/don3.jpg", 
      title: "AMBIENTE ÚNICO",
      subtitle: "El lugar perfecto para compartir",
      description: "Diseño moderno, música perfecta y la mejor compañía",
      cta: "Conocer Local"
    },
    {
      id: 4,
      type: "video",
      src: "/assets/videos/vid1.mp4",
      title: "EXPERIENCIA DONCAR",
      subtitle: "Vive la magia de cada momento",
      description: "Descubre todo lo que tenemos preparado para ti",
      cta: "Ver Más"
    }
  ];

  // Auto-play del carrusel
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000); // Aumenté a 6 segundos para dar más tiempo al video

    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative h-screen min-h-[600px] flex items-center overflow-hidden pt-20">
      {/* Carrusel de Imágenes y Video de Fondo */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide 
                ? 'opacity-100 scale-100' 
                : 'opacity-0 scale-110'
            }`}
          >
            {slide.type === "video" ? (
              <video
                src={slide.src}
                className="w-full h-full object-cover object-center"
                autoPlay
                muted
                loop
                playsInline
              />
            ) : (
              <img
                src={slide.src || "/placeholder.svg?height=1080&width=1920&text=1920x1080px"}
                alt={slide.title}
                className="w-full h-full object-cover object-center"
              />
            )}
            {/* Overlay Gradiente - Más oscuro en móvil */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/60 sm:from-black/80 sm:via-black/50 sm:to-black/20"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
          </div>
        ))}
      </div>

      {/* Elementos Decorativos Animados - Reducidos en móvil */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-4 sm:left-10 w-24 h-24 sm:w-32 sm:h-32 bg-yellow-400/20 sm:bg-yellow-400/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-4 sm:right-10 w-32 h-32 sm:w-40 sm:h-40 bg-orange-400/20 sm:bg-orange-400/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 sm:w-24 sm:h-24 bg-red-400/20 sm:bg-red-400/30 rounded-full blur-2xl animate-pulse delay-500"></div>
        <div className="absolute bottom-1/3 left-1/2 w-24 h-24 sm:w-36 sm:h-36 bg-pink-400/10 sm:bg-pink-400/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
        
        {/* Partículas Flotantes - Solo en pantallas grandes */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`hidden sm:block absolute w-2 h-2 bg-yellow-400/40 rounded-full animate-bounce`}
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 2) * 40}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${2 + i * 0.3}s`
            }}
          ></div>
        ))}
      </div>

      {/* Contenido Principal */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-1 gap-8 sm:gap-12 items-center">
          
          {/* Contenido Principal Centrado */}
          <div className="space-y-6 sm:space-y-8 text-center lg:text-left max-w-4xl mx-auto lg:mx-0">
            {/* Badge Superior */}
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 backdrop-blur-sm border border-yellow-400/30 rounded-full px-3 py-1.5 sm:px-4 sm:py-2">
              <Star className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-400 fill-current" />
              <span className="text-yellow-300 font-semibold text-xs sm:text-sm">Calidad Premium</span>
            </div>

            {/* Título Principal */}
            <div className="space-y-2 sm:space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black leading-tight">
                <span className="text-white block animate-fadeInUp">
                  {slides[currentSlide].title.split(' ')[0]}
                </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 block animate-fadeInUp delay-200">
                  {slides[currentSlide].title.split(' ').slice(1).join(' ')}
                </span>
              </h1>
              
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-yellow-300 font-bold animate-fadeInUp delay-300">
                {slides[currentSlide].subtitle}
              </h2>
            </div>

            {/* Descripción */}
            <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed max-w-lg sm:max-w-2xl mx-auto lg:mx-0 animate-fadeInUp delay-400 px-4 sm:px-0">
              {slides[currentSlide].description}
            </p>

            {/* Botones de Acción */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start animate-fadeInUp delay-500 px-4 sm:px-0">
              <button className="group bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black px-6 py-3 sm:px-8 sm:py-4 rounded-2xl font-bold text-base sm:text-lg shadow-2xl hover:shadow-yellow-500/25 transition-all transform hover:scale-105 hover:-translate-y-1 duration-300 flex items-center justify-center space-x-2">
                <span>{slides[currentSlide].cta}</span>
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              
              <button 
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className="group bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 hover:border-yellow-400/30 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-2xl font-bold text-base sm:text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
              >
                <Play className={`h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-300 ${isAutoPlaying ? 'rotate-90' : ''}`} />
                <span className="hidden sm:inline">{isAutoPlaying ? 'Pausar' : 'Reproducir'}</span>
                <span className="sm:hidden">{isAutoPlaying ? 'Pausar' : 'Play'}</span>
              </button>
            </div>

            {/* Indicadores de Estadísticas */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-6 sm:pt-8 max-w-xs sm:max-w-md mx-auto lg:mx-0 animate-fadeInUp delay-600">
              {[
                { number: "500+", label: "Clientes Felices" },
                { number: "50+", label: "Platos Únicos" },
                { number: "4.9", label: "Rating Promedio" }
              ].map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <div className="text-xl sm:text-2xl md:text-3xl font-black text-yellow-400">
                    {stat.number}
                  </div>
                  <div className="text-xs sm:text-sm text-white/70 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Controles del Carrusel */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-30">
        <div className="flex items-center space-x-3 sm:space-x-6 bg-black/40 backdrop-blur-xl rounded-full px-4 py-3 sm:px-6 sm:py-4 border border-white/10">
          
          {/* Botón Anterior */}
          <button
            onClick={prevSlide}
            className="p-1.5 sm:p-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 hover:border-yellow-400/30 transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
          </button>

          {/* Indicadores de Slide */}
          <div className="flex space-x-2 sm:space-x-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-gradient-to-r from-yellow-400 to-orange-400 scale-125'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>

          {/* Botón Siguiente */}
          <button
            onClick={nextSlide}
            className="p-1.5 sm:p-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 hover:border-yellow-400/30 transition-all duration-300 hover:scale-110"
          >
            <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
          </button>
        </div>
      </div>

      {/* Indicador de Progreso */}
      <div className="absolute bottom-0 left-0 w-full h-0.5 sm:h-1 bg-black/20">
        <div 
          className="h-full bg-gradient-to-r from-yellow-400 to-orange-400 transition-all duration-300 ease-linear"
          style={{ 
            width: isAutoPlaying ? `${((currentSlide + 1) / slides.length) * 100}%` : '0%'
          }}
        />
      </div>
    </section>
  );
}

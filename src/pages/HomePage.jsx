"use client"

import HeroBanner from "../components/HeroBanner";
import SearchBar from "../components/SearchBar";
import CategorySidebar from "../components/CategorySidebar";
import MenuList from "../components/MenuList";
import DeliveryBanner from "../components/DeliveryBanner";
import AboutSection from "../components/AboutSection";
import { useState, useMemo } from "react";
import menuItems from "../data/menuItems";
import categories from "../data/categories";

export default function HomePage({ addToCart }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const filteredItems = useMemo(() => {
    let items = menuItems;
    if (selectedCategory !== "Todos") {
      items = items.filter((item) => item.category === selectedCategory);
    }
    if (searchTerm) {
      items = items.filter(
        (item) =>
          item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.type.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    return items;
  }, [searchTerm, selectedCategory]);

  const handleAddToCart = (item) => {
    addToCart(item);
  };

  return (
    <div className="min-h-screen bg-gray-800">
      {/* Hero Section */}
      <div id="hero">
        <HeroBanner />
      </div>
      
      {/* Banner de Delivery */}
      <DeliveryBanner />
      
      {/* Sección de Menú con Fondo Moderno */}
      <section id="menu" className="relative py-16 bg-gradient-to-b from-gray-800 via-gray-900 to-gray-800 overflow-hidden">
        
        {/* Elementos Decorativos de Fondo */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Círculos decorativos animados */}
          <div className="absolute top-20 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-gray-400/8 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-white/6 rounded-full blur-2xl animate-pulse delay-500"></div>
          
          {/* Patrón de rejilla sutil con animación */}
          <div className="absolute inset-0 opacity-10">
            <div className="grid grid-cols-12 gap-4 h-full">
              {[...Array(144)].map((_, i) => (
                <div 
                  key={i} 
                  className="border-r border-b border-white/20 animate-pulse"
                  style={{
                    animationDelay: `${i * 0.02}s`,
                    animationDuration: '3s'
                  }}
                ></div>
              ))}
            </div>
          </div>
          
          {/* Partículas flotantes mejoradas */}
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-2 h-2 bg-white/30 rounded-full animate-float shadow-lg`}
              style={{
                left: `${10 + i * 8}%`,
                top: `${15 + (i % 4) * 25}%`,
                animationDelay: `${i * 0.6}s`,
                animationDuration: `${3 + i * 0.3}s`,
                boxShadow: '0 0 10px rgba(255,255,255,0.3)'
              }}
            ></div>
          ))}
          
          {/* Líneas diagonales animadas */}
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-white/15 to-transparent animate-pulse"></div>
            <div className="absolute top-0 left-2/4 w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent animate-pulse delay-500"></div>
            <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-white/15 to-transparent animate-pulse delay-1000"></div>
          </div>
          
          {/* Efecto de brillo superior animado */}
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/40 to-transparent animate-pulse"></div>
          
          {/* Ondas de energía */}
          <div className="absolute inset-0">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="absolute inset-0 border border-white/5 rounded-full animate-ping"
                style={{
                  animationDelay: `${i * 2}s`,
                  animationDuration: '6s'
                }}
              ></div>
            ))}
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Título de la sección */}
          <div className="text-center mb-12">
            <h3 className="text-4xl md:text-5xl font-black text-white mb-4 animate-fadeInUp drop-shadow-2xl">
              NUESTRO 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-white ml-3 animate-pulse">
                MENÚ
              </span>
            </h3>
            <div className="w-32 h-1 bg-gradient-to-r from-gray-500 to-gray-300 mx-auto rounded-full animate-fadeInUp delay-200 shadow-lg"></div>
            <p className="text-gray-300 mt-4 text-lg animate-fadeInUp delay-300">
              Descubre sabores únicos que despiertan tus sentidos
            </p>
          </div>

          <div className="mb-8 animate-fadeInUp delay-400">
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          </div>

          {/* Instrucciones de pedido */}
          <div className="mb-8 animate-fadeInUp delay-450">
            <div className="bg-gradient-to-r from-red-600/20 to-orange-500/20 backdrop-blur-sm border border-red-400/30 rounded-2xl p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">?</span>
                </div>
                <h4 className="text-white font-bold text-lg">¿Cómo hacer tu pedido?</h4>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white font-bold text-xs">1</span>
                  </div>
                  <div>
                    <p className="text-red-300 font-semibold">Elegí tus favoritos</p>
                    <p className="text-gray-300">Navegá por nuestro menú y agregá los productos que más te gusten al carrito</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white font-bold text-xs">2</span>
                  </div>
                  <div>
                    <p className="text-red-300 font-semibold">Revisá tu pedido</p>
                    <p className="text-gray-300">Verificá las cantidades y el total en tu carrito de compras</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white font-bold text-xs">3</span>
                  </div>
                  <div>
                    <p className="text-red-300 font-semibold">Enviá por WhatsApp</p>
                    <p className="text-gray-300">Al finalizar, se abrirá WhatsApp con tu pedido ya armado listo para enviar</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-red-400/20">
                <p className="text-center text-gray-400 text-xs">
                  💡 <span className="text-red-300">Tip:</span> Usá el buscador arriba o las categorías laterales para encontrar rápido lo que buscás
                </p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8 animate-fadeInUp delay-500">
            <CategorySidebar categories={categories} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
            <MenuList items={filteredItems} onAdd={handleAddToCart} />
          </div>
        </div>
      </section>
      
      {/* Sección Sobre Nosotros */}
      <div id="about">
        <AboutSection />
      </div>
    </div>
  );
}

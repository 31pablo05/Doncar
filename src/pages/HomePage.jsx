"use client"

import HeroBanner from "../components/HeroBanner";
import SearchBar from "../components/SearchBar";
import CategorySidebar from "../components/CategorySidebar";
import MenuList from "../components/MenuList";
import DeliveryBanner from "../components/DeliveryBanner";
import AboutSection from "../components/AboutSection";
import ReviewsSection from "../components/ReviewsSection";
import BusinessHours from "../components/BusinessHours";
import { useState, useMemo } from "react";
import featuredItems from "../data/featuredItems";
import menuItems from "../data/menuItems";
import categories from "../data/categories";

export default function HomePage({ addToCart }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [showFeaturedOnly, setShowFeaturedOnly] = useState(true);
  const itemsPerPage = 6; // Mostrar 6 inicialmente
  const [visibleItemsCount, setVisibleItemsCount] = useState(6);

  // Función para manejar cambios en la búsqueda
  const handleSearchChange = (newSearchTerm) => {
    setSearchTerm(newSearchTerm);
    // Si empieza a buscar, resetear la cantidad visible y cambiar a "Todos"
    if (newSearchTerm && newSearchTerm.trim() !== "") {
      setVisibleItemsCount(12); // Mostrar más resultados cuando busca
      setSelectedCategory("Todos"); // Cambiar a "Todos" para buscar en todo
    } else {
      // Si borra la búsqueda, volver al estado inicial
      setVisibleItemsCount(itemsPerPage);
    }
  };

  // Función para cargar más productos
  const loadMoreItems = () => {
    setVisibleItemsCount(prev => prev + itemsPerPage);
  };

  // Función para resetear la vista cuando cambia la categoría
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setVisibleItemsCount(itemsPerPage); // Reset a la cantidad inicial
    if (category === "Todos") {
      setShowFeaturedOnly(true);
    } else {
      setShowFeaturedOnly(false);
    }
  };

  const filteredAndSortedItems = useMemo(() => {
    // Decidir qué conjunto de datos usar
    let sourceItems;
    
    // Si hay un término de búsqueda, siempre usar el menú completo para mejores resultados
    if (searchTerm && searchTerm.trim() !== "") {
      sourceItems = menuItems;
    } else if (selectedCategory === "Todos" && showFeaturedOnly) {
      sourceItems = featuredItems;
    } else {
      sourceItems = menuItems;
    }
    
    let items = sourceItems;
    
    // Filtrar por búsqueda PRIMERO
    if (searchTerm && searchTerm.trim() !== "") {
      const searchTermLower = searchTerm.toLowerCase();
      
      items = items.filter(
        (item) =>
          item.name.toLowerCase().includes(searchTermLower) ||
          item.type.toLowerCase().includes(searchTermLower) ||
          item.description.toLowerCase().includes(searchTermLower) ||
          item.category.toLowerCase().includes(searchTermLower)
      );
    } else {
      // Solo filtrar por categoría si NO hay búsqueda
      if (selectedCategory !== "Todos") {
        items = items.filter((item) => item.category === selectedCategory);
      }
    }
    
    return items;
  }, [searchTerm, selectedCategory, showFeaturedOnly]);

  // Items visibles con paginación
  const visibleItems = useMemo(() => {
    return filteredAndSortedItems.slice(0, visibleItemsCount);
  }, [filteredAndSortedItems, visibleItemsCount]);

  // Verificar si hay más items para mostrar
  const hasMoreItems = filteredAndSortedItems.length > visibleItemsCount;

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
              {selectedCategory === "Todos" && showFeaturedOnly ? "HACÉ TU" : "MENÚ"}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-300 ml-3 animate-pulse">
                {selectedCategory === "Todos" && showFeaturedOnly ? "PEDIDO" : selectedCategory}
              </span>
            </h3>
            <div className="w-32 h-1 bg-gradient-to-r from-amber-500 to-yellow-300 mx-auto rounded-full animate-fadeInUp delay-200 shadow-lg"></div>
            <p className="text-gray-300 mt-4 text-lg animate-fadeInUp delay-300">
              {selectedCategory === "Todos" && showFeaturedOnly 
                ? "Elegí tus favoritos y agregá al carrito para pedir por WhatsApp"
                : `Deliciosos ${selectedCategory.toLowerCase()} esperándote`
              }
            </p>
          </div>

         

          {/* Instrucciones de pedido */}
          <div className="mb-8 animate-fadeInUp delay-450">
            <div className="backdrop-blur-sm border border-amber-400/30 rounded-2xl p-6 shadow-lg" style={{background: 'linear-gradient(90deg, rgba(254, 193, 93, 0.2) 0%, rgba(245, 158, 11, 0.2) 100%)'}}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{background: 'linear-gradient(90deg, #fec15d 0%, #f59e0b 100%)'}}>
                  <span className="text-white font-bold text-sm">?</span>
                </div>
                <h4 className="text-white font-bold text-lg">¿Cómo hacer tu pedido?</h4>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{background: 'linear-gradient(90deg, #fec15d 0%, #f59e0b 100%)'}}>
                    <span className="text-white font-bold text-xs">1</span>
                  </div>
                  <div>
                    <p className="text-amber-300 font-semibold">Elegí tus favoritos</p>
                    <p className="text-gray-300">Navegá por nuestro menú y agregá los productos que más te gusten al carrito</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{background: 'linear-gradient(90deg, #fec15d 0%, #f59e0b 100%)'}}>
                    <span className="text-white font-bold text-xs">2</span>
                  </div>
                  <div>
                    <p className="text-amber-300 font-semibold">Revisá tu pedido</p>
                    <p className="text-gray-300">Verificá las cantidades y el total en tu carrito de compras</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{background: 'linear-gradient(90deg, #fec15d 0%, #f59e0b 100%)'}}>
                    <span className="text-white font-bold text-xs">3</span>
                  </div>
                  <div>
                    <p className="text-amber-300 font-semibold">Enviá por WhatsApp</p>
                    <p className="text-gray-300">Al finalizar, se abrirá WhatsApp con tu pedido ya armado listo para enviar</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-amber-400/20">
                <p className="text-center text-gray-400 text-xs">
                  💡 <span className="text-amber-300">Tip:</span> Usá el buscador arriba o las categorías laterales para encontrar rápido lo que buscás
                </p>
              </div>
            </div>
          </div>
           {/* Barra de búsqueda */}
          <div className="flex justify-center items-center mb-8 animate-fadeInUp delay-300">
            <SearchBar searchTerm={searchTerm} setSearchTerm={handleSearchChange} />
          </div>
          
          {/* Contador de resultados */}
          <div className="text-center mb-8">
            {searchTerm && searchTerm.trim() !== "" && (
              <div className="mb-3 p-3 bg-amber-900/20 backdrop-blur-sm rounded-xl border border-amber-500/20 max-w-md mx-auto">
                <p className="text-amber-300 text-sm">
                  🔍 Buscando en todo el menú: <span className="font-semibold">"{searchTerm}"</span>
                </p>
              </div>
            )}
            <p className="text-gray-400 text-sm">
              {filteredAndSortedItems.length === 0 ? (
                <span className="text-amber-400">No se encontraron productos con ese término</span>
              ) : (
                <>
                  Mostrando <span className="text-amber-400 font-semibold">{visibleItems.length}</span> 
                  {' de '}
                  <span className="text-amber-400 font-semibold">{filteredAndSortedItems.length}</span>
                  {filteredAndSortedItems.length === 1 ? ' producto' : ' productos'}
                  {selectedCategory !== "Todos" && !searchTerm && (
                    <> en <span className="text-amber-400 font-semibold">{selectedCategory}</span></>
                  )}
                  {searchTerm && searchTerm.trim() !== "" && (
                    <> encontrados</>
                  )}
                </>
              )}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8 animate-fadeInUp delay-500">
            <CategorySidebar 
              categories={categories} 
              selectedCategory={selectedCategory} 
              setSelectedCategory={handleCategoryChange} 
            />
            <MenuList items={visibleItems} onAdd={handleAddToCart} />
          </div>

          {/* Botón "Ver más" */}
          {hasMoreItems && (
            <div className="text-center mt-8 animate-fadeInUp delay-600">
              <button 
                onClick={loadMoreItems}
                className="group relative overflow-hidden px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl" 
                style={{background: 'linear-gradient(135deg, #16a34a 0%, #15803d 50%, #166534 100%)'}}>
                <span className="relative z-10 text-white drop-shadow-md">
                  Ver Más Productos
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 via-emerald-500 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              <p className="text-gray-400 text-sm mt-3">
                Cargando {Math.min(itemsPerPage, filteredAndSortedItems.length - visibleItemsCount)} productos más...
              </p>
            </div>
          )}

          {/* Botón para ver todos los productos (solo cuando está en destacados) */}
          {selectedCategory === "Todos" && showFeaturedOnly && (
            <div className="text-center mt-8 animate-fadeInUp delay-700">
              <button 
                onClick={() => setShowFeaturedOnly(false)}
                className="group relative overflow-hidden px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl" 
                style={{background: 'linear-gradient(135deg, #fec15d 0%, #f59e0b 50%, #d97706 100%)'}}>
                <span className="relative z-10 text-white drop-shadow-md">
                  Ver Menú Completo
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              <p className="text-gray-400 text-sm mt-3">
                ¡Descubre todos nuestros productos y sabores únicos!
              </p>
            </div>
          )}
        </div>
      </section>
      
      {/* Sección Sobre Nosotros */}
      <div id="about">
        <AboutSection />
      </div>

      {/* Horarios de Atención */}
      <div id="horarios">
        <BusinessHours />
      </div>

      {/* Reseñas de Clientes */}
      <div id="reviews">
        <ReviewsSection />
      </div>
    </div>
  );
}

"use client"

import { useState, useEffect } from "react";
import { Heart, ShoppingCart } from "lucide-react";
import MenuCard from "./MenuCard";

export default function FavoritesPage({ onAddToCart }) {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('doncar-favorites') || '[]');
    setFavorites(savedFavorites);

    // Escuchar cambios en favoritos
    const handleStorageChange = () => {
      const updatedFavorites = JSON.parse(localStorage.getItem('doncar-favorites') || '[]');
      setFavorites(updatedFavorites);
    };

    window.addEventListener('storage', handleStorageChange);
    
    // Revisar cada segundo por si hay cambios
    const interval = setInterval(handleStorageChange, 1000);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      clearInterval(interval);
    };
  }, []);

  if (favorites.length === 0) {
    return (
      <section className="py-16 bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-6xl mb-4">💔</div>
            <h3 className="text-2xl font-bold text-white mb-4">No tienes favoritos aún</h3>
            <p className="text-gray-300 mb-8">
              Comienza explorando nuestro menú y agrega tus productos favoritos usando el botón ❤️
            </p>
            <a 
              href="#menu" 
              className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-800 text-white px-6 py-3 rounded-xl font-semibold hover:from-red-700 hover:to-red-900 transition-all duration-300 hover:scale-105"
            >
              <ShoppingCart className="h-5 w-5" />
              Explorar Menú
            </a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gradient-to-b from-gray-800 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 flex items-center justify-center gap-3">
            <Heart className="h-8 w-8 text-red-400 fill-current" />
            Tus Favoritos
          </h3>
          <p className="text-gray-300">
            {favorites.length} producto{favorites.length !== 1 ? 's' : ''} que te encanta{favorites.length === 1 ? '' : 'n'}
          </p>
        </div>

        {/* Grid de Favoritos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {favorites.map((item) => (
            <MenuCard 
              key={item.id} 
              item={item} 
              onAdd={onAddToCart}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

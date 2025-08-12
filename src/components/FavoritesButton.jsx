"use client"

import { Heart } from "lucide-react";
import { useState, useEffect } from "react";

export default function FavoritesButton({ item }) {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('doncar-favorites') || '[]');
    setIsFavorite(favorites.some(fav => fav.id === item.id));
  }, [item.id]);

  const toggleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem('doncar-favorites') || '[]');
    
    if (isFavorite) {
      const newFavorites = favorites.filter(fav => fav.id !== item.id);
      localStorage.setItem('doncar-favorites', JSON.stringify(newFavorites));
      setIsFavorite(false);
    } else {
      const newFavorites = [...favorites, item];
      localStorage.setItem('doncar-favorites', JSON.stringify(newFavorites));
      setIsFavorite(true);
    }
  };

  return (
    <button
      onClick={toggleFavorite}
      className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-sm border transition-all duration-300 hover:scale-110 ${
        isFavorite 
          ? 'border-amber-400 text-white' 
          : 'bg-white/20 border-white/30 text-white hover:bg-white/30'
      }`}
      style={{
        background: isFavorite ? 'linear-gradient(90deg, #fec15d 0%, #f59e0b 100%)' : undefined
      }}
    >
      <Heart 
        className={`h-4 w-4 ${isFavorite ? 'fill-current' : ''}`} 
      />
    </button>
  );
}

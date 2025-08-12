"use client"

import { Search, X } from "lucide-react";

export default function SearchBar({ searchTerm, setSearchTerm }) {
  const handleClear = () => {
    setSearchTerm("");
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
  };

  return (
    <div className="relative max-w-2xl mx-auto">
      <div className="relative flex">
        <input
          type="text"
          placeholder="Buscar hamburguesas, pizzas, chips, sandwiches..."
          className="flex-1 p-4 pl-12 pr-4 rounded-l-2xl bg-gray-900/80 backdrop-blur-sm text-white placeholder-gray-400 border border-amber-400/30 border-r-0 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-300 transition-all duration-300 hover:bg-gray-900/90 shadow-2xl hover:shadow-amber-500/10"
          value={searchTerm}
          onChange={handleInputChange}
          style={{
            boxShadow: '0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(254, 193, 93, 0.1)'
          }}
        />
        
        {/* Icono de búsqueda */}
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
          <Search className="w-5 h-5 text-amber-400" />
        </div>

        {/* Botón de búsqueda */}
        <button
          className="px-6 py-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-semibold rounded-r-2xl border border-amber-400/30 border-l-0 transition-all duration-300 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-amber-400 flex items-center gap-2"
          aria-label="Buscar"
        >
          <Search className="w-5 h-5" />
          <span className="hidden sm:inline">Buscar</span>
        </button>

        {/* Botón para limpiar búsqueda */}
        {searchTerm && (
          <button
            onClick={handleClear}
            className="absolute right-20 sm:right-24 top-1/2 transform -translate-y-1/2 p-1 rounded-full hover:bg-amber-400/20 transition-colors duration-200 z-10"
            aria-label="Limpiar búsqueda"
          >
            <X className="w-4 h-4 text-amber-400 hover:text-amber-300" />
          </button>
        )}
      </div>
      
      {/* Efecto de brillo animado */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500/20 via-amber-400/30 to-amber-500/20 rounded-2xl opacity-30 blur-sm pointer-events-none animate-pulse"></div>
    </div>
  );
}

"use client"

import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function SortDropdown({ sortBy, setSortBy }) {
  const [isOpen, setIsOpen] = useState(false);

  const sortOptions = [
    { value: "name-asc", label: "A - Z" },
    { value: "name-desc", label: "Z - A" },
    { value: "price-asc", label: "Precio: Menor a Mayor" },
    { value: "price-desc", label: "Precio: Mayor a Menor" },
    { value: "type", label: "Por Tipo" }
  ];

  const currentOption = sortOptions.find(option => option.value === sortBy) || sortOptions[0];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full min-w-[200px] px-4 py-3 bg-gray-900/80 backdrop-blur-sm border border-amber-400/30 rounded-xl text-white hover:bg-gray-900/90 hover:border-amber-300/50 transition-all duration-300 shadow-lg"
      >
        <span className="text-sm font-medium">Ordenar: {currentOption.label}</span>
        <ChevronDown className={`h-4 w-4 text-amber-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-gray-900/95 backdrop-blur-md border border-amber-400/30 rounded-xl shadow-2xl z-10 overflow-hidden">
          {sortOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => {
                setSortBy(option.value);
                setIsOpen(false);
              }}
              className={`w-full text-left px-4 py-3 text-sm transition-all duration-200 ${
                sortBy === option.value
                  ? 'bg-gradient-to-r from-amber-500/20 to-orange-500/20 text-amber-300 font-medium'
                  : 'text-gray-300 hover:bg-amber-500/10 hover:text-amber-200'
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
      
      {/* Backdrop para cerrar */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-0" 
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
}

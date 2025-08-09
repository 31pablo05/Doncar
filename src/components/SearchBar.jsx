"use client"

export default function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div className="relative max-w-2xl mx-auto">
      <input
        type="text"
        placeholder="Buscar productos..."
        className="w-full p-4 pr-12 rounded-2xl bg-gray-900/80 backdrop-blur-sm text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-gray-400 transition-all duration-300 hover:bg-gray-900/90 shadow-2xl animate-pulse"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          boxShadow: '0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)'
        }}
      />
      <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
        <svg className="w-5 h-5 text-gray-400 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>
      
      {/* Efecto de brillo animado */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-gray-600 via-gray-400 to-gray-600 rounded-2xl opacity-30 blur-sm pointer-events-none animate-pulse"></div>
    </div>
  );
}

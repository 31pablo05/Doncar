"use client"

export default function CategorySidebar({ categories, selectedCategory, setSelectedCategory }) {
  return (
    <div className="bg-gray-900/80 backdrop-blur-md rounded-2xl p-4 sm:p-6 border border-gray-600 h-fit hover:bg-gray-900/90 transition-all duration-300 shadow-2xl animate-fadeInUp">
      <h4 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6 flex items-center animate-pulse">
        <span className="w-1 h-6 bg-gradient-to-b from-gray-400 to-white rounded mr-3 animate-pulse shadow-lg"></span>
        Categorías
      </h4>
      <nav className="space-y-2">
        {categories.map((category, index) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`w-full text-left px-3 sm:px-4 py-2 sm:py-3 rounded-xl transition-all duration-300 hover:scale-105 transform text-sm sm:text-base ${
              selectedCategory === category 
                ? "bg-white/20 text-white font-bold shadow-2xl border border-gray-400 animate-pulse" 
                : "text-gray-300 hover:bg-gray-800/50 hover:text-white hover:shadow-lg"
            }`}
            style={{
              animationDelay: `${index * 100}ms`,
              boxShadow: selectedCategory === category 
                ? '0 8px 25px rgba(255,255,255,0.1), inset 0 1px 0 rgba(255,255,255,0.2)' 
                : '0 4px 15px rgba(0,0,0,0.3)'
            }}
          >
            {category}
          </button>
        ))}
      </nav>
      
      {/* Efecto de brillo lateral */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-gray-600 via-gray-400 to-gray-600 rounded-2xl opacity-20 blur-sm pointer-events-none animate-pulse"></div>
    </div>
  );
}

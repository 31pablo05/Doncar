"use client"

export default function CategorySidebar({ categories, selectedCategory, setSelectedCategory }) {
  return (
    <div className="bg-gray-900/80 backdrop-blur-md rounded-2xl p-4 sm:p-6 border border-amber-400/30 h-fit hover:bg-gray-900/90 transition-all duration-300 shadow-2xl animate-fadeInUp">
      <h4 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6 flex items-center">
        <span className="w-1 h-6 bg-gradient-to-b from-amber-400 to-orange-500 rounded mr-3 shadow-lg"></span>
        Categorías
      </h4>
      <nav className="space-y-2">
        {categories.map((category, index) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`w-full text-left px-3 sm:px-4 py-2 sm:py-3 rounded-xl transition-all duration-300 hover:scale-105 transform text-sm sm:text-base font-medium ${
              selectedCategory === category 
                ? "bg-gradient-to-r from-amber-500/20 to-orange-500/20 text-amber-300 font-bold shadow-2xl border border-amber-400/50" 
                : "text-gray-300 hover:bg-amber-500/10 hover:text-amber-200 hover:shadow-lg"
            }`}
            style={{
              animationDelay: `${index * 100}ms`,
              boxShadow: selectedCategory === category 
                ? '0 8px 25px rgba(254, 193, 93, 0.2), inset 0 1px 0 rgba(254, 193, 93, 0.2)' 
                : '0 4px 15px rgba(0,0,0,0.3)'
            }}
          >
            {category}
          </button>
        ))}
      </nav>
      
      {/* Efecto de brillo lateral */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500/20 via-amber-400/30 to-amber-500/20 rounded-2xl opacity-20 blur-sm pointer-events-none animate-pulse"></div>
    </div>
  );
}

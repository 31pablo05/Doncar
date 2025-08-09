"use client"

export default function MenuCard({ item, onAdd }) {
  return (
    <div className="group hover:scale-105 transition-all duration-300 backdrop-blur-md bg-white/10 border-white/20 overflow-hidden rounded-xl">
      <div className="aspect-[4/3] overflow-hidden">
        <img src={item.image || "/placeholder.svg?height=300&width=400&text=400x300px"} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
      </div>
      <div className="p-4">
        <span className="mb-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold px-2 py-1 rounded">{item.category}</span>
        <h4 className="font-bold text-white mb-2 text-lg">{item.name}</h4>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-black text-yellow-400">${item.price}</span>
          <button onClick={() => onAdd(item)} className="bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white rounded-xl px-4 font-bold shadow-lg hover:shadow-pink-500/25 transform hover:scale-105 transition-all flex items-center">
            + ADD
          </button>
        </div>
      </div>
    </div>
  );
}

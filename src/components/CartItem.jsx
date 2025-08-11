"use client"

export default function CartItem({ item }) {
  return (
    <div className="flex justify-between items-center py-3 border-b border-white/10">
      <div>
        <h4 className="font-bold text-white">{item.name}</h4>
        <p className="text-sm text-white/70">Cantidad: {item.quantity}</p>
      </div>
      <span className="font-bold text-red-400">${(item.price * item.quantity).toFixed(2)}</span>
    </div>
  );
}

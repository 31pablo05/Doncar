"use client"

export default function TotalCart({ total }) {
  return (
    <div className="flex justify-between items-center mb-4">
      <span className="text-xl font-bold text-white">TOTAL:</span>
      <span className="text-2xl font-black text-yellow-400">${total.toFixed(2)}</span>
    </div>
  );
}

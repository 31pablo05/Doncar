
"use client";

import { ShoppingCart, Menu, X, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar({ cartItems = [], setCartOpen }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative z-50">
      <nav className={`fixed top-0 w-full transition-all duration-300 ${
        isScrolled 
          ? 'backdrop-blur-xl bg-black/90 border-b border-gray-400/20 shadow-2xl shadow-black/20' 
          : 'backdrop-blur-md bg-gradient-to-r from-black/60 via-black/40 to-black/60 border-b border-white/10'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            
            {/* Logo */}
            <div className="flex items-center space-x-3 group cursor-pointer">
              <div className="relative">
                <img 
                  src="/assets/images/logo.doncar.PNG" 
                  alt="Doncar Logo" 
                  className="h-10 w-auto group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gray-400/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {[
                { name: 'Inicio', href: '#hero' },
                { name: 'Menú', href: '#menu' },
                { name: 'Nosotros', href: '#about' },
                { name: 'Contacto', href: '#contacto' }
              ].map((item) => (
                <a 
                  key={item.name}
                  href={item.href} 
                  className="relative text-white/90 hover:text-gray-300 transition-all duration-300 font-semibold text-lg group overflow-hidden"
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.querySelector(item.href);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  <span className="relative z-10">{item.name}</span>
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-gray-400 to-gray-600 group-hover:w-full transition-all duration-300"></div>
                  <div className="absolute inset-0 bg-white/5 scale-0 group-hover:scale-100 rounded-lg transition-transform duration-300 -z-0"></div>
                </a>
              ))}
            </div>

            {/* Cart Button & Mobile Menu */}
            <div className="flex items-center space-x-4">
              
              {/* Cart Button */}
              <button
                onClick={() => setCartOpen && setCartOpen(true)}
                className="relative group bg-gradient-to-r from-red-600/20 to-red-800/20 hover:from-red-600/30 hover:to-red-800/30 backdrop-blur-sm border border-red-500/30 hover:border-red-400/50 px-4 py-3 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-500/25"
              >
                <ShoppingCart className="h-6 w-6 text-red-300 group-hover:text-red-200 transition-colors duration-300" />
                {cartItems.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-gradient-to-r from-red-500 to-red-700 text-white text-xs font-bold px-2 py-1 rounded-full animate-pulse shadow-lg border border-red-400/50">
                    {cartItems.reduce((sum, item) => sum + item.quantity, 0)}
                  </span>
                )}
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/0 to-red-700/0 group-hover:from-red-500/10 group-hover:to-red-700/10 rounded-xl transition-all duration-300"></div>
                
                {/* Efecto de brillo animado */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute top-1 left-1 right-1 h-1 bg-gradient-to-r from-transparent via-red-300/50 to-transparent rounded-full animate-ping"></div>
                </div>
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 hover:border-gray-400/30 px-3 py-3 rounded-xl transition-all duration-300 hover:scale-105"
              >
                {mobileMenuOpen ? (
                  <X className="h-6 w-6 text-white" />
                ) : (
                  <Menu className="h-6 w-6 text-white" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            mobileMenuOpen ? 'max-h-64 opacity-100 pb-6' : 'max-h-0 opacity-0'
          }`}>
            <div className="pt-4 space-y-3">
              {['Inicio', 'Menú', 'Contacto'].map((item) => (
                <a 
                  key={item}
                  href="#" 
                  className="block text-white/90 hover:text-gray-300 transition-all duration-300 font-semibold text-lg py-3 px-4 rounded-lg hover:bg-white/5 border-l-4 border-transparent hover:border-gray-400"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Animated Border */}
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-400/50 to-transparent"></div>
      </nav>
    </div>
  );
}

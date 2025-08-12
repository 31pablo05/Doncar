
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
    
    // Solo agregar event listeners en el cliente
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
      
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  // Función de navegación segura para Vercel
  const navigateToSection = (sectionId) => {
    if (typeof window !== 'undefined') {
      // Esperar un frame para asegurar que el DOM esté listo
      requestAnimationFrame(() => {
        try {
          const element = document.querySelector(sectionId);
          if (element) {
            element.scrollIntoView({ 
              behavior: 'smooth',
              block: 'start',
              inline: 'nearest'
            });
          } else {
            // Fallback: si no encuentra el elemento, ir al top
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        } catch (error) {
          console.warn('Error navegando a la sección:', sectionId, error);
          // Fallback seguro
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      });
    }
  };

  // Función de navegación DEFINITIVA para móvil 
  const navigateToSectionMobile = (sectionId) => {
    console.log('🔍 Navegación móvil iniciada:', sectionId);
    
    // Prevenir múltiples clicks
    if (document.body.hasAttribute('data-scrolling')) {
      console.log('⏳ Scroll ya en progreso, ignorando...');
      return;
    }
    
    // Marcar que estamos haciendo scroll
    document.body.setAttribute('data-scrolling', 'true');
    
    // Cerrar menú inmediatamente
    setMobileMenuOpen(false);
    
    // Función de scroll ultra-robusta
    const performScroll = () => {
      console.log('📱 Ejecutando scroll a:', sectionId);
      
      const element = document.querySelector(sectionId);
      if (element) {
        console.log('✅ Elemento encontrado');
        
        // DEBUG: Verificar estilos que pueden interferir
        const bodyStyle = window.getComputedStyle(document.body);
        const htmlStyle = window.getComputedStyle(document.documentElement);
        console.log('🔍 Body scroll-behavior:', bodyStyle.scrollBehavior);
        console.log('🔍 HTML scroll-behavior:', htmlStyle.scrollBehavior);
        console.log('🔍 Body overflow:', bodyStyle.overflow);
        console.log('🔍 Body position:', bodyStyle.position);
        
        // SOLUCIÓN AGRESIVA: Forzar todos los estilos necesarios para scroll
        console.log('🔧 Forzando estilos para permitir scroll...');
        
        // Guardar estilos originales
        const originalBodyStyle = {
          overflow: document.body.style.overflow,
          overflowY: document.body.style.overflowY,
          height: document.body.style.height,
          position: document.body.style.position
        };
        
        const originalHtmlStyle = {
          overflow: document.documentElement.style.overflow,
          overflowY: document.documentElement.style.overflowY,
          height: document.documentElement.style.height
        };
        
        // Forzar estilos que permitan scroll
        document.body.style.overflow = 'visible';
        document.body.style.overflowY = 'auto';
        document.body.style.height = 'auto';
        document.body.style.position = 'static';
        
        document.documentElement.style.overflow = 'visible';
        document.documentElement.style.overflowY = 'auto';
        document.documentElement.style.height = 'auto';
        
        // También remover clases que puedan interferir
        document.body.classList.remove('overflow-hidden');
        document.documentElement.classList.remove('overflow-hidden');
        
        // Forzar scroll-behavior a auto temporalmente
        const originalBodyScrollBehavior = document.body.style.scrollBehavior;
        const originalHtmlScrollBehavior = document.documentElement.style.scrollBehavior;
        
        document.body.style.scrollBehavior = 'auto';
        document.documentElement.style.scrollBehavior = 'auto';
        
        // Calcular posición manualmente
        const rect = element.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        const targetPosition = rect.top + scrollTop - 80;
        
        console.log('📍 Posición actual del scroll:', scrollTop);
        console.log('📍 Posición del elemento (rect.top):', rect.top);
        console.log('📍 Posición objetivo calculada:', targetPosition);
        
        // Scroll ULTRA-AGRESIVO con múltiples métodos simultáneos
        console.log('🚀 Método AGRESIVO: Todos los métodos simultáneos');
        
        // Aplicar scroll con TODOS los métodos posibles
        window.scrollTo(0, targetPosition);
        window.scrollTo({top: targetPosition, behavior: 'auto'});
        document.documentElement.scrollTop = targetPosition;
        document.body.scrollTop = targetPosition;
        
        // También intentar con scrollBy desde la posición actual
        const currentPos = window.pageYOffset || document.documentElement.scrollTop;
        const scrollDistance = targetPosition - currentPos;
        window.scrollBy(0, scrollDistance);
        
        console.log('📊 Aplicados todos los métodos de scroll simultáneamente');
        
        setTimeout(() => {
          const pos1 = window.pageYOffset || document.documentElement.scrollTop;
          console.log('📊 Posición después de método 1:', pos1);
          
          if (Math.abs(pos1 - targetPosition) > 50) {
            console.log('🚀 Método 2: document.documentElement.scrollTop');
            document.documentElement.scrollTop = targetPosition;
            
            setTimeout(() => {
              const pos2 = window.pageYOffset || document.documentElement.scrollTop;
              console.log('📊 Posición después de método 2:', pos2);
              
              if (Math.abs(pos2 - targetPosition) > 50) {
                console.log('� Método 3: scrollIntoView');
                element.scrollIntoView({ 
                  behavior: 'auto', 
                  block: 'start',
                  inline: 'nearest'
                });
                
                setTimeout(() => {
                  const pos3 = window.pageYOffset || document.documentElement.scrollTop;
                  console.log('📊 Posición final después de scrollIntoView:', pos3);
                  
                  // Restaurar estilos originales
                  document.body.style.scrollBehavior = originalBodyScrollBehavior;
                  document.documentElement.style.scrollBehavior = originalHtmlScrollBehavior;
                  document.body.removeAttribute('data-scrolling');
                }, 100);
              } else {
                console.log('✅ Scroll exitoso con método 2!');
                document.body.style.scrollBehavior = originalBodyScrollBehavior;
                document.documentElement.style.scrollBehavior = originalHtmlScrollBehavior;
                document.body.removeAttribute('data-scrolling');
              }
            }, 50);
          } else {
            console.log('✅ Scroll exitoso con método 1!');
            document.body.style.scrollBehavior = originalBodyScrollBehavior;
            document.documentElement.style.scrollBehavior = originalHtmlScrollBehavior;
            document.body.removeAttribute('data-scrolling');
          }
        }, 50);
        
      } else {
        console.log('❌ Elemento no encontrado:', sectionId);
        document.body.removeAttribute('data-scrolling');
      }
    };
    
    // Ejecutar después de que se cierre el menú
    setTimeout(performScroll, 500); // Aumenté el tiempo para dar más margen
  };

  // Prevenir errores de hidratación en SSR
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // No renderizar contenido dependiente del cliente hasta que esté montado
  if (!isMounted) {
    return (
      <div className="relative z-50">
        <nav className="fixed top-0 w-full backdrop-blur-xl bg-black/95 border-b border-amber-400/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-amber-500/20 rounded-full"></div>
                <div className="hidden sm:block">
                  <h1 className="text-2xl font-black text-amber-300">DONCAR</h1>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }

  return (
    <div className="relative z-50">
      <nav className={`fixed top-0 w-full transition-all duration-500 ${
        isScrolled 
          ? 'backdrop-blur-xl bg-black/95 border-b border-amber-400/30 shadow-2xl shadow-amber-500/10' 
          : 'backdrop-blur-md bg-gradient-to-r from-black/70 via-black/50 to-black/70 border-b border-amber-400/20'
      }`}>
        
        {/* Barra de brillo superior animada */}
        <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-60">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent animate-pulse"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            
            {/* Logo Mejorado */}
            <div className="flex items-center space-x-3 group cursor-pointer" onClick={() => navigateToSection('#hero')}>
              <div className="relative">
                {/* Logo SVG con efectos */}
                <div className="flex items-center space-x-3">
                  <div className="relative w-12 h-12 flex items-center justify-center">
                    {/* Fondo con gradiente y glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-400/20 via-orange-500/20 to-red-500/20 rounded-full group-hover:scale-110 transition-all duration-300 shadow-lg shadow-amber-500/20"></div>
                    
                    {/* SVG del logo */}
                    <img 
                      src="/assets/svg/2(1).svg" 
                      alt="Doncar Logo" 
                      className="relative z-10 w-8 h-8 group-hover:scale-110 transition-all duration-300 filter drop-shadow-lg"
                    />
                    
                    {/* Anillo pulsante */}
                    <div className="absolute inset-0 rounded-full border-2 border-amber-400/30 group-hover:border-amber-300/50 transition-all duration-300 group-hover:scale-125 group-hover:opacity-0"></div>
                    
                    {/* Partículas decorativas */}
                    <div className="absolute -top-1 -right-1 w-2 h-2 bg-amber-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 animate-ping"></div>
                    <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-orange-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse"></div>
                  </div>
                  
                  {/* Texto del logo */}
                  <div className="hidden sm:block">
                    <h1 className="text-2xl font-black bg-gradient-to-r from-amber-300 via-orange-400 to-red-400 bg-clip-text text-transparent group-hover:from-amber-200 group-hover:via-orange-300 group-hover:to-red-300 transition-all duration-300">
                      DONCAR
                    </h1>
                    <p className="text-xs text-amber-400/80 font-medium tracking-wider group-hover:text-amber-300/90 transition-all duration-300">CAFÉ & DELIVERY</p>
                  </div>
                </div>
                
                {/* Efecto de brillo en hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </div>
            </div>

            {/* Desktop Menu Mejorado */}
            <div className="hidden md:flex items-center space-x-2">
              {[
                { name: 'Inicio', href: '#hero' },
                { name: 'Menú', href: '#menu' },
                { name: 'Nosotros', href: '#about' },
                { name: 'Horarios', href: '#horarios' },
                { name: 'Contacto', href: '#contacto' }
              ].map((item) => (
                <button 
                  key={item.name}
                  onClick={() => navigateToSection(item.href)}
                  className="relative px-4 py-2.5 rounded-xl transition-all duration-300 font-semibold text-sm group overflow-hidden text-white/80 hover:text-amber-300 hover:bg-white/5"
                >
                  <span className="relative z-10">{item.name}</span>
                  
                  {/* Línea inferior animada */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-orange-400 group-hover:w-6 transition-all duration-300"></div>
                  
                  {/* Efecto hover de fondo */}
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-500/0 to-orange-500/0 group-hover:from-amber-500/10 group-hover:to-orange-500/10 rounded-xl transition-all duration-300"></div>
                  
                  {/* Brillo sutil */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute top-1 left-2 right-2 h-px bg-gradient-to-r from-transparent via-amber-300/30 to-transparent"></div>
                  </div>
                </button>
              ))}
            </div>

            {/* Cart Button & Mobile Menu */}
            <div className="flex items-center space-x-4">
              
              {/* Cart Button */}
              <button
                onClick={() => {
                  if (setCartOpen && typeof setCartOpen === 'function') {
                    setCartOpen(true);
                  }
                }}
                className="relative group bg-gradient-to-r from-amber-500/20 to-yellow-500/20 hover:from-amber-500/30 hover:to-yellow-500/30 backdrop-blur-sm border border-amber-500/30 hover:border-amber-400/50 px-4 py-3 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-amber-500/25"
                style={{background: 'linear-gradient(90deg, rgba(254, 193, 93, 0.2) 0%, rgba(245, 158, 11, 0.2) 100%)'}}
              >
                <ShoppingCart className="h-6 w-6 text-amber-300 group-hover:text-amber-200 transition-colors duration-300" />
                {cartItems.length > 0 && (
                  <span className="absolute -top-2 -right-2 text-white text-xs font-bold px-2 py-1 rounded-full animate-pulse shadow-lg border border-amber-400/50" style={{background: 'linear-gradient(90deg, #fec15d 0%, #f59e0b 100%)'}}>
                    {cartItems.reduce((sum, item) => sum + item.quantity, 0)}
                  </span>
                )}
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500/0 to-amber-700/0 group-hover:from-amber-500/10 group-hover:to-amber-700/10 rounded-xl transition-all duration-300"></div>
                
                {/* Efecto de brillo animado */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute top-1 left-1 right-1 h-1 bg-gradient-to-r from-transparent via-amber-300/50 to-transparent rounded-full animate-ping"></div>
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

          {/* Mobile Menu Mejorado */}
          <div className={`md:hidden transition-all duration-500 ease-in-out overflow-hidden ${
            mobileMenuOpen ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'
          }`}>
            <div className="pt-4 space-y-2 border-t border-amber-400/20 mt-4">
              {[
                { name: 'Inicio', href: '#hero' },
                { name: 'Menú', href: '#menu' },
                { name: 'Nosotros', href: '#about' },
                { name: 'Horarios', href: '#horarios' },
                { name: 'Contacto', href: '#contacto' }
              ].map((item, index) => (
                <button 
                  key={item.name}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    console.log('🔥 Click detectado en:', item.name, item.href);
                    navigateToSectionMobile(item.href);
                  }}
                  disabled={document.body.hasAttribute('data-scrolling')}
                  className="w-full text-left py-3 px-4 rounded-xl transition-all duration-300 font-semibold transform hover:translate-x-2 text-white/80 hover:text-amber-300 hover:bg-white/5 border-l-4 border-transparent hover:border-amber-400/50 active:bg-amber-500/20 active:scale-95 focus:outline-none focus:ring-2 focus:ring-amber-400/50 disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Barra inferior animada */}
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-400/50 to-transparent">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-300 to-transparent animate-pulse opacity-50"></div>
        </div>
      </nav>
    </div>
  );
}

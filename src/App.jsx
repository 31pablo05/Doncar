"use client";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import CartSidebar from "./components/CartSidebar";
import CheckoutModal from "./components/CheckoutModal";
import OrderNotification from "./components/OrderNotification";
import DeliveryBanner from "./components/DeliveryBanner";
import FloatingActionButton from "./components/FloatingActionButton";
import { useState } from "react";

export default function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [currentOrder, setCurrentOrder] = useState(null);
  const [cartItems, setCartItems] = useState([]);

  // Función para actualizar la cantidad de un producto
  const updateQuantity = (id, newQuantity) => {
    if (newQuantity <= 0) {
      removeItem(id);
      return;
    }
    setCartItems(prev => 
      prev.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // Función para eliminar un producto del carrito
  const removeItem = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  // Función para agregar un producto al carrito
  const addToCart = (product) => {
    setCartItems(prev => {
      const existingItem = prev.find(item => item.id === product.id);
      if (existingItem) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  // Calcular total del carrito
  const cartTotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  // Calcular cantidad total de items
  const cartItemsCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  // Función para abrir checkout
  const handleCheckout = () => {
    if (cartItems.length > 0) {
      setCartOpen(false);
      setCheckoutOpen(true);
    }
  };

  // Función para confirmar pedido
  const handleConfirmOrder = (orderData) => {
    setCurrentOrder(orderData);
    setCheckoutOpen(false);
    // Limpiar carrito después de confirmar
    setCartItems([]);
  };

  // Función para cerrar notificación de pedido
  const handleCloseOrderNotification = () => {
    setCurrentOrder(null);
  };

  return (
    <>
      <Navbar cartItems={cartItems} setCartOpen={setCartOpen} />
      
      <HomePage 
        addToCart={addToCart}
      />
      
      {/* Sidebar del carrito */}
      <CartSidebar
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeItem}
        total={cartTotal}
        onCheckout={handleCheckout}
      />

      {/* Modal de checkout */}
      <CheckoutModal
        isOpen={checkoutOpen}
        onClose={() => setCheckoutOpen(false)}
        cartItems={cartItems}
        total={cartTotal}
        onConfirmOrder={handleConfirmOrder}
      />

      {/* Notificación de pedido confirmado */}
      <OrderNotification
        order={currentOrder}
        onClose={handleCloseOrderNotification}
      />

      {/* Botón flotante de acciones rápidas */}
      <FloatingActionButton
        cartItemsCount={cartItemsCount}
        onCartOpen={() => setCartOpen(true)}
      />
      
      <Footer />
    </>
  );
}

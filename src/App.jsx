"use client";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import { useState } from "react";

export default function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Burger Deluxe", price: 12.99, quantity: 2 },
    { id: 2, name: "Pizza Supreme", price: 15.5, quantity: 1 },
  ]);

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

  return (
    <>
      <Navbar cartItems={cartItems} setCartOpen={setCartOpen} />
      <HomePage 
        cartOpen={cartOpen} 
        setCartOpen={setCartOpen} 
        cartItems={cartItems} 
        setCartItems={setCartItems}
        updateQuantity={updateQuantity}
        removeItem={removeItem}
      />
      <Footer />
    </>
  );
}

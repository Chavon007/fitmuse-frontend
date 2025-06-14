"use client";

import productData from "@/component/productData";
import { useState, useEffect, useContext, createContext } from "react";
const CartContext = createContext();

function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [products] = useState(productData);
  const [likedItems, setLikedItem] = useState([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedCart = localStorage.getItem("cartItem");
      if (savedCart) {
        setCartItems(JSON.parse(savedCart));
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("cartItem", JSON.stringify(cartItems));
    }
  }, [cartItems]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedLikes = localStorage.getItem("lovedproducts");
      if (savedLikes) {
        setLikedItem(JSON.parse(savedLikes));
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("lovedproducts", JSON.stringify(likedItems));
    }
  }, [likedItems]);

  const likedProduct = (product) => {
    const alreadyLiked = likedItems.find((item) => item.id === product.id);
    if (!alreadyLiked) {
      setLikedItem((prev) => [...prev, product]);
    }
  };

  const unlikedProduct = (id) => {
    setLikedItem((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, newQuantity) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const addToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);

    if (existingItem) {
      setCartItems((prev) =>
        prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems((prev) => [...prev, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const toggleCart = () => {
    setIsCartOpen((prev) => !prev);
  };

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  const cartTotal = cartItems.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        isCartOpen,
        toggleCart,
        cartCount,
        cartTotal,
        products,
        likedItems,
        likedProduct,
        unlikedProduct,
        updateQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
export default CartProvider;

export const useCart = () => useContext(CartContext);

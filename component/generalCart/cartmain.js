"use client";
import { useState } from "react";
import CartSider from "../cartSiderBar/cartsider";
import CartIcon from "../carticonmain/carticon";
import "./cartmain.css"

function Cart() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  return (
    <div className="cartDisplay">
      <header className="cartDisplay-header">
        <h2>My store</h2>
        <p><CartIcon toggleSideBar={() => setIsCartOpen(true)} /></p>
      </header>

      <CartSider isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  );
}
export default Cart;

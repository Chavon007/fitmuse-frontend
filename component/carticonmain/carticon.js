"use client";
import "./carticonmain.css";
import { useCart } from "@/context/cartContext";
import { CiShoppingCart } from "react-icons/ci";
function CartIcon({ toggleSideBar }) {
  const { cartCount } = useCart();

  return (
    <button type="button" onClick={toggleSideBar}>
      <CiShoppingCart /> {cartCount > 0 && <span>{cartCount}</span>}
    </button>
  );
}
export default CartIcon;

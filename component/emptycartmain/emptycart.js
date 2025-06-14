"use client";
import { CiShoppingCart } from "react-icons/ci";
import "./emptycart.css";
import Link from "next/link";
function Emptycart({ onClose }) {
  return (
    <div className="emptycart">
      <div className="emptycartIcon">
        <CiShoppingCart />
      </div>

      <h2>Your Cart is Empty</h2>
      <p> Add some products to get started</p>
      <Link href="/cart" onClick={onClose}>
        Shop Here
      </Link>
    </div>
  );
}
export default Emptycart;

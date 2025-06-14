"use client";
import "./cartItem.css";
import { FaRegTrashAlt } from "react-icons/fa";
import { FiMinus } from "react-icons/fi";
import { FaPlus } from "react-icons/fa6";
import { IoMdImage } from "react-icons/io";
import Image from "next/image";
import toast from "react-hot-toast";
import { useCart } from "@/context/cartContext";
function CartItem({ item }) {
  const { updateQuantity, removeFromCart } = useCart();

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity < 1) return;
    updateQuantity(item.id, newQuantity);
  };

  const handleRemoveCart = () => {
    removeFromCart(item.id);
  };

  return (
    <div className="maincart">
      <div className="mainCart-Image">
        {item.image ? (
          <div className="pic">
            <Image src={item.image} alt={item.name} width={50} height={0} />
          </div>
        ) : (
          <div className="mainCart-icon">
            <IoMdImage />
          </div>
        )}
      </div>

      {/* product info */}

      <div className="mainCartInfo">
        <h3>{item.name}</h3>
        <small>${item.price.toFixed(2)}</small>
      </div>

      {/* Quantity control*/}
      <div className="mainCartBtn">
        <div className="mainCartBtn1">
          <button onClick={() => handleQuantityChange(item.quantity - 1)}>
            <FiMinus />
          </button>
          <span>{item.quantity}</span>
          <button onClick={() => handleQuantityChange(item.quantity + 1)}>
            <FaPlus />
          </button>
        </div>

        <div className="mainCartBtn2">
          <button onClick={() => {handleRemoveCart(); toast.success("Product deleted from cart")}}>
            <FaRegTrashAlt />
          </button>
        </div>
      </div>
    </div>
  );
}
export default CartItem;

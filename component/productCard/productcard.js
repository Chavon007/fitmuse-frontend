"use client";

import toast from "react-hot-toast";
import "./productcard.css";
import Image from "next/image";
import { CiHeart } from "react-icons/ci";
import { useCart } from "@/context/cartContext";
function Productcard({ product }) {
  const { addToCart, likedProduct } = useCart();
  return (
    <div className="productCard">
      <div className="productCard-image">
        <div className="img">
          <Image
            src={product.image}
            alt={product.name}
            width={100}
            height={100}
            style={{ width: "100%", height: "150px" }}
          />
        </div>
        <button
          className="btn"
          type="button"
          onClick={() => {likedProduct(product); toast.success("Product added to like time")}}
        >
          <CiHeart />
        </button>
      </div>

      <div className="productCardDetails">
        <h3>{product.name}</h3>
        <p className="details">{product.desc}</p>
        <div className="p-c">
          <small> Price: ${product.price}</small>
          <span>Categories: {product.varient}</span>
        </div>
        <button
          className="btn1"
          type="button"
          onClick={() => {addToCart(product); toast.success("product added to Cart")}}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}
export default Productcard;

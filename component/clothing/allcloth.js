"use client";
import { useCart } from "@/context/cartContext";
import Image from "next/image";
import toast from "react-hot-toast";
import { CiHeart } from "react-icons/ci";
import Link from "next/link";
import "./allcloth.css";
import { FaArrowRight } from "react-icons/fa";

export default function Allproduct() {
  const { addToCart, likedProduct, products } = useCart();
  const allProduct = products.filter((product) =>
    [43, 51, 49, 55, 44, 52, 56, 40, 23, 33, 35, 25].includes(product.id)
  );
  return (
    <div className="tops">
      {allProduct.map((product) => (
        <div className="mainTop" key={product.id}>
          <div className="topimg">
            <div className="img">
              <Image
                src={product.image}
                alt={product.name}
                width={100}
                height={200}
                style={{ width: "100%", height: "250px" }}
              />
            </div>
            <button
              className="btn"
              type="button"
              onClick={() => {
                likedProduct(product);
                toast.success("Product added to like item");
              }}
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
              onClick={() => {
                addToCart(product);
                toast.success("product added to Cart");
              }}
            >
              Add to cart
            </button>
          </div>
        </div>
      ))}

      <Link className="clothinglink" href="/cart">
        <FaArrowRight />{" "}
        <span>Click here to visit our store for more products</span>
      </Link>
    </div>
  );
}

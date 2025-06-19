"use client";
import products from "./productData";
import { useCart } from "@/context/cartContext";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Slider from "react-slick";
import { FaRegStar } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import Image from "next/image";
import toast from "react-hot-toast";

function Recom() {
  const { addToCart, likedProduct } = useCart();
  const trendingNow = products.sort((a, b) => a.id - b.id).slice(0, 7);
  return (
    <div className="card-header">
      <div className="card-content">
        <h2>RECOMMENDED FOR YOU</h2>

        <div className="card-write">
          {trendingNow.map((product, index) => (
            <div key={index} className="card-content1">
              <Image
                className="img"
                src={product.image}
                alt={product.desc}
                width={100}
                height={100}
              />
              <button
                type="button"
                className="heart"
                onClick={() => {
                  likedProduct(product);
                  toast.success("Product added to like item");
                }}
              >
                <CiHeart />
              </button>
              <span className="discount">-42% off</span>
              <div className="lastcard">
                <p className="name">{product.name}</p>
                <p className="desc">{product.desc}</p>
                <h5 className="price">
                  ${product.price} <small>{product.discount}</small>
                </h5>
                <h6 className="icon">
                  <FaRegStar />
                  <FaRegStar />
                  <FaRegStar />
                  <FaRegStar />
                  <FaRegStar />
                  <span>{product.list}</span>
                </h6>
                <button
                  className="headerbtn1"
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
        </div>
      </div>
    </div>
  );
}
export default Recom;

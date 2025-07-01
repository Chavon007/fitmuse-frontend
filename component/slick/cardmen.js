import React from "react";
import Slider from "react-slick";
import products from "../productData";
import toast from "react-hot-toast";
import Image from "next/image";
import { IoStarSharp } from "react-icons/io5";
import { useCart } from "@/context/cartContext";
import { CiHeart } from "react-icons/ci";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./card.css";

export default function CardSlidermen() {
  const { addToCart, likedProduct } = useCart();
  const trendingNow = products.sort((a, b) => a.id - b.id).slice(8, 15);
  var settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };
  return (
    <div className="card-slick">
      <Slider {...settings}>
        {trendingNow.map((product, index) => (
          <div key={index} className="card-slide">
            <div className="newCard">
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
              <div className="newcarddetails">
                <h4 className="CardName">{product.name}</h4>
                <p className="CardDesc">{product.desc}</p>
                <h5 className="cardPrice">
                  ${product.price} <small>{product.discount}</small>
                </h5>
                <h6 className="icon">
                  <IoStarSharp />
                  <IoStarSharp />
                  <IoStarSharp />
                  <IoStarSharp />
                  <IoStarSharp />

                  <span>{product.list}</span>
                </h6>
                <button
                  className="newcardBTN1"
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
          </div>
        ))}
      </Slider>
    </div>
  );
}

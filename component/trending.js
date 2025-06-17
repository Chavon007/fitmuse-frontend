"use client";
import products from "./productData";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Slider from "react-slick";
import { FaRegStar } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import Image from "next/image";
import { useCart } from "@/context/cartContext";
import toast from "react-hot-toast";

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className="conatiner">
      <div
        className={`${className} custom-arrow next-arrow`}
        style={{ ...style }}
        onClick={onClick}
      >
        <FaArrowRight />
      </div>
    </div>
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow prev-arrow`}
      style={{ ...style }}
      onClick={onClick}
    >
      <FaArrowLeft />
    </div>
  );
}

function Trends() {
  const { addToCart, likedProduct } = useCart();
  const trendingNow = products.sort((a, b) => a.id - b.id).slice(0, 7);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    dotsClass: "slick-dots custom-dots",
    lazyLoad: "ondemand",
    cssEase: "cubic-bezier(0.4, 0, 0.2, 1)",
  };

  return (
    <div className="card-header">
      <div className="card-content">
        <h2>Trending Now</h2>

        <Slider {...settings}>
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
        </Slider>
      </div>
    </div>
  );
}
export default Trends;

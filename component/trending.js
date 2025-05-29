"use client";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Slider from "react-slick";
import { FaRegStar } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import Image from "next/image";

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow next-arrow`}
      style={{ ...style }}
      onClick={onClick}
    >
      <FaArrowRight />
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
  const products = [
    {
      image: "/t1.jpg",
      name: "BRAND/TYPE",
      desc: "Name and characterics",
      price: "74,95 €",
      discount: "121,00 €",
      list: "(45)",
    },
    {
      image: "/t2.jpg",
      name: "BRAND/TYPE",
      desc: "Name and characterics",
      price: "74,95 €",
      discount: " 121,00 €",
      list: "(45)",
    },
    {
      image: "/t3.jpg",
      name: "BRAND/TYPE",
      desc: "Name and characterics",
      price: "74,95 €",
      discount: " 121,00 €",
      list: "(45)",
    },
    {
      image: "/t4.jpg",
      name: "BRAND/TYPE",
      desc: "Name and characterics",
      price: "74,95 €",
      discount: " 121,00 €",
      list: "(45)",
    },
    {
      image: "/t5.jpg",
      name: "BRAND/TYPE",
      desc: "Name and characterics",
      price: "74,95 €",
      discount: " 121,00 €",
      list: "(45)",
    },
    {
      image: "/t6.jpg",
      name: "BRAND/TYPE",
      desc: "Name and characterics",
      price: "74,95 €",
      discount: " 121,00 €",
      list: "(45)",
    },
    {
      image: "/t7.jpg",
      name: "BRAND/TYPE",
      desc: "Name and characterics",
      price: "74,95 €",
      discount: "121,00 ",
      list: "(45)",
    },
  ];

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
            {products.map((product, index) => (
            <div key={index} className="card-content1">
              <Image
                className="img"
                src={product.image}
                alt={product.desc}
                width={100}
                height={100}
              />
              <div className="heart">
                <CiHeart />
              </div>
              <span className="discount">-42% off</span>
              <div className="lastcard">
                <p className="name">{product.name}</p>
              <p className="desc">{product.desc}</p>
              <h5 className="price">
                {product.price} <small>{product.discount}</small>
              </h5>
              <h6 className="icon">
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
                <span>{product.list}</span>
              </h6>
              </div>
            </div>
          ))}
          
        </Slider>
      </div>
    </div>
  );
}
export default Trends;

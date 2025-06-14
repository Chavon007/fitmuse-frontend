"use client";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Slider from "react-slick";
import { FaRegStar } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import Image from "next/image";

function Accesories() {
  const products = [
    {
      image: "/A1.jpg",
      name: "BRAND/TYPE",
      desc: "Name and characterics",
      price: "74,95 €",
      discount: "121,00 €",
      list: "(45)",
    },
    {
      image: "/A2.jpg",
      name: "BRAND/TYPE",
      desc: "Name and characterics",
      price: "74,95 €",
      discount: " 121,00 €",
      list: "(45)",
    },
    {
      image: "/A3.jpg",
      name: "BRAND/TYPE",
      desc: "Name and characterics",
      price: "74,95 €",
      discount: " 121,00 €",
      list: "(45)",
    },
    {
      image: "/A4.jpg",
      name: "BRAND/TYPE",
      desc: "Name and characterics",
      price: "74,95 €",
      discount: " 121,00 €",
      list: "(45)",
    },
    {
      image: "/A5.jpg",
      name: "BRAND/TYPE",
      desc: "Name and characterics",
      price: "74,95 €",
      discount: " 121,00 €",
      list: "(45)",
    },
    {
      image: "/A6.jpg",
      name: "BRAND/TYPE",
      desc: "Name and characterics",
      price: "74,95 €",
      discount: " 121,00 €",
      list: "(45)",
    },
  ];

  return (
    <div className="container">
      <div className="card-header">
        <div className="card-content">
          <h2>NEW IN... ACCESORIES</h2>
          <div className="accesories">
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
          </div>
        </div>
      </div>
    </div>
  );
}
export default Accesories;

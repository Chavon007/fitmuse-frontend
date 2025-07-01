"use client";

import { FaRegStar } from "react-icons/fa6";
import Image from "next/image";

function Accesories() {
  const products = [
    {
      image: "/gym1.jpg",
      name: "BRAND/TYPE",
      desc: "Name and characterics",
      price: "74,95 $",
      discount: "121,00 $",
      list: "(45)",
    },
    {
      image: "/gym2.jpg",
      name: "BRAND/TYPE",
      desc: "Name and characterics",
      price: "74,95 $",
      discount: " 121,00 $",
      list: "(45)",
    },
    {
      image: "/gym3.jpg",
      name: "BRAND/TYPE",
      desc: "Name and characterics",
      price: "74,95 $",
      discount: " 121,00 $",
      list: "(45)",
    },
    {
      image: "/gym4.jpg",
      name: "BRAND/TYPE",
      desc: "Name and characterics",
      price: "74,95 $",
      discount: " 121,00 $",
      list: "(45)",
    },
    {
      image: "/gym5.jpg",
      name: "BRAND/TYPE",
      desc: "Name and characterics",
      price: "74,95 $",
      discount: " 121,00 $",
      list: "(45)",
    },
    {
      image: "/gym6.jpg",
      name: "BRAND/TYPE",
      desc: "Name and characterics",
      price: "74,95 $",
      discount: " 121,00 $",
      list: "(45)",
    },
  ];

  return (
    <div className="container">
      <div className="trend-header">
        <div className="trend-content">
          <h2>NEW IN... ACCESORIES</h2>
          <div className="accesories">
            {products.map((product, index) => (
              <div key={index} className="accesoriesCard">
                <Image
                  className="img"
                  src={product.image}
                  alt={product.desc}
                  width={100}
                  height={100}
                />
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

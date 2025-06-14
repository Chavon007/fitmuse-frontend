"use client";

import "./productlist.css";
import Productcard from "../productCard/productcard";
import { useCart } from "@/context/cartContext";

function ProductList() {
  const { products } = useCart();
  return (
    <div className="productlist">
      {products.map((product) => (
        <Productcard key={product.id} product={product} />
      ))}
    </div>
  );
}
export default ProductList;

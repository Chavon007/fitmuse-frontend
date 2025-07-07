import { useCart } from "@/context/cartContext";
import toast from "react-hot-toast";
import Image from "next/image";
import Link from "next/link";
import { CiHeart } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa";

export default function Short() {
  const { addToCart, likedProduct, products } = useCart();
  const topCloth = products.filter((product) =>
    [45, 40, 48, 46,35 ].includes(product.id)
  );
  return (
    <div className="tops">
      {topCloth.map((product) => (
        <div className="mainTop" key={product.id}>
          <div className="topimg">
            <div className="img">
              <Image
                src={product.image}
                alt={product.name}
                width={100}
                height={100}
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
        <span>Click here to vist our store for more products</span>
      </Link>
    </div>
  );
}

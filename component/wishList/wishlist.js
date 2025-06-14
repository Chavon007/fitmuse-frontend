import Image from "next/image";
import toast from "react-hot-toast";
import { PiHeartBreak } from "react-icons/pi";
import "./wishlist.css";
import { useCart } from "@/context/cartContext";
function WishList({ product }) {
  const { addToCart, unlikedProduct } = useCart();
  return (
    <>
      <div className="wishlist1">
        {product.map((items, index) => (
          <div className="wishlist2" key={index}>
            <div className="likedimage">
              <Image
                src={items.image}
                alt={items.name}
                width={100}
                height={100}
                style={{ width: "100%", height: "200px" }}
              />
              <button
                className="wishlistLike"
                type="button"
                onClick={() => {unlikedProduct(items.id); toast.success("Product removed from liked item")}}
              >
                <PiHeartBreak />
              </button>
            </div>
            <div className="wishlist-content">
              <h3> {items.name}</h3>
              <p>{items.desc}</p>
              <small>Price: ${items.price}</small>

              <button
                className="wishlist-content-btn"
                type="button"
                onClick={() => {addToCart(items); toast.success("Product added to Cart")}}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
export default WishList;

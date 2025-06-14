"use client";

import EmptyWishList from "../emptyWishlist/empty";
import WishList from "../wishList/wishlist";
import { useCart } from "@/context/cartContext";
import "./mainwishlist.css";

function MainWishList() {
  const { likedItems } = useCart();

 
  return (
    <div className="mainWishlist1">
      <div className="mainwish-header">
        <h2>Your Loved Products</h2>
        <p>Products you've added to your wishlist</p>
      </div>

      {likedItems.length > 0 ? (
        <WishList product={likedItems} />
      ) : (
        <EmptyWishList />
      )}
    </div>
  );
}
export default MainWishList;

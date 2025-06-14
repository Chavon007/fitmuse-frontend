import { PiHeartBreakThin } from "react-icons/pi";
import Link from "next/link";
import "./empty.css";
function EmptyWishList() {
  return (
    <div className="emptyWishList">
      <div className="emptyIcon"><PiHeartBreakThin /></div>
      <h4>No Loved Products Yet</h4>
      <p>You haven't added any products to your wishlist yet.</p>
      <p>
        Start browsing our amazing collection and heart the products you love!
      </p>
      <Link href="/cart">Browse Products</Link>
    </div>
  );
}
export default EmptyWishList;

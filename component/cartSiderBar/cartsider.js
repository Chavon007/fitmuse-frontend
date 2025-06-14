"use client";
import "./cartsidebar.css";
import { useCart } from "@/context/cartContext";
import CartItem from "../cartItem/cartitem";
import Emptycart from "../emptycartmain/emptycart";
import { TiTimes } from "react-icons/ti";
function CartSider({ isOpen, onClose }) {
  const { cartItems, cartTotal, cartCount, clearCart } = useCart();
  return (
    <>
      {isOpen && <div className="cart-overlay" onClick={onClose}></div>}

      <div className={`cart-sider ${isOpen ? "open" : ""}`}>
        {/* header */}

        <div className="cartSider-header">
          <h3>
            shopping Cart <span>({cartCount})</span>
          </h3>
          <button className="close-button" onClick={onClose}>
            <TiTimes />
          </button>
        </div>

        {/* content */}
        <div className="cart-content">
          {cartItems.length === 0 ? (
            <Emptycart onClose={onClose} />
          ) : (
            /*items list */
            <div className="itemList">
              {cartItems.map((item) => (
                <CartItem
                  key={`${item.id}- ${item.variant || "default"}`}
                  item={item}
                />
              ))}
            </div>
          )}
        </div>

        {/* footer*/}

        <div className=" cart-footer">
          <button className="clear-cart-btn" onClick={clearCart}>
            Clear Cart
          </button>

          <div className="cart-total">
            <p>
              <span>Total:</span> ${cartTotal.toFixed(2)}
            </p>

            <button type="button" className="cart-checkout">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default CartSider;

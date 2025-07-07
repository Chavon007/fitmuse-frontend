import Shoes from "./shoecard";
import "./mainshoes.css";

export default function MainShoes() {
  return (
    <div className="container">
        <div className="mainshoes">
      <div className="mainshoesheader">
        <h3>Our Shoes Collection</h3>
        <p>
          Discover our latest shoe collection built to inspire confidence,
          elevate your style, and keep you comfortable from day to night
        </p>
      </div>

      <div className="mainshoecard">
        <Shoes />
      </div>
    </div>
    </div>
  );
}

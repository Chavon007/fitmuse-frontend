import Accesoriescard from "./accessoriescard";
import "./mainaccessories.css"
export default function Mainaccesories() {
  return (
    <div className="container">
      <div className="mainaccesories">
        <div className="accesoriesContent">
          <h3>Our Accesories</h3>
          <p>
            Discover our latest accessories collection designed to elevate your
            look, boost your confidence, and keep you stylish all day long.
          </p>
        </div>

        <div className="mainaccesoriescard">
          <Accesoriescard />
        </div>
      </div>
    </div>
  );
}

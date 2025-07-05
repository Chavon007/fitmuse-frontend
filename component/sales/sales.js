"use client"
import Image from "next/image";
import { useCart } from "@/context/cartContext";
import { IoIosCheckmark } from "react-icons/io";
import Link from "next/link";
import "./sales.css"
function Sales() {
  const { products } = useCart();
  const salepage = products.filter((product) =>
    [13, 14, 15].includes(product.id)
  );
  return (
    <div className="container">
      <div className="sales">
        <div className="salesheader">
          <h3>Hot Deals</h3>
          <p>
            Premium gym wear designed for peak performance. Unleash your
            potential with our cutting-edge athletic apparel.
          </p>
        </div>

        <div className="salescard">
          {salepage.map((salespro) => (
            <div className="salescontent" key={salespro.id}>
              <Image className="pic"
                src={salespro.image}
                alt={salespro.name}
                width={1000}
                height={100}
              />
              <div className="salecontentwrite">
                <h3>{salespro.name}</h3>
                <p>{salespro.desc}</p>
                <span>
                  High-performance wear with 4-way stretch technology. Built
                  for squats, deadlifts, and every movement in between.
                </span>
                <small>
                  <IoIosCheckmark />
                  4-way stretch fabric
                </small>
                <small>
                  <IoIosCheckmark />
                  Compression fit
                </small>
                <small>
                  <IoIosCheckmark />
                  Secure zip pocket
                </small>
                <small>
                  <IoIosCheckmark />
                  Reinforced seams
                </small>
                <small>
                  <IoIosCheckmark />
                  Squat-proof guarantee
                </small>
                    <h6>${salespro.price}</h6>
                <Link href="/cart">SHOP NOW</Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
export default Sales;

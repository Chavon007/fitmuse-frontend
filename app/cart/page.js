"use client";
import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/authcontext";
import Cart from "@/component/generalCart/cartmain";
import ProductList from "@/component/productlist/productlist";
function MainCart() {
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/login");
    } else {
      setLoading(false);
    }
  }, [user]);

  if (loading) return <p>Loading...</p>;
  return (
    <div className="mainCart">
      <Cart />
      <ProductList />
    </div>
  );
}
export default MainCart;

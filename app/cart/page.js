"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/authcontext";
import Cart from "@/component/generalCart/cartmain";
import ProductList from "@/component/productlist/productlist";
function MainCart() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && user === null) {
      router.push("/login");
    }
  }, [user, loading]);

  if (loading) return null;
  return (
    <div className="mainCart">
      <Cart />
      <ProductList />
    </div>
  );
}
export default MainCart;

import Banner from "@/component/banner";
import Trends from "@/component/trending";
import Summer from "@/component/summer";
import Recom from "@/component/recommended";
import About from "@/component/about";
import Accesories from "@/component/accesories";

export default function Home() {
  return (
    <div>
      <Banner />
      <Trends />
      <Summer />
      <Recom />
      <About />
      <Accesories />
    </div>
  );
}

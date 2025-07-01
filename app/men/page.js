import Bannermen from "@/component/men/banner/bannermen";
import Trendsmen from "@/component/men/trendsmen";
import Summermen from "@/component/men/summermen";
import Recommen from "@/component/men/recommen";
import Aboutmen from "@/component/men/aboutmen";
import Accesoriesmen from "@/component/men/accemen";

export default function MenPage() {
  return (
    <div className="men">
      <Bannermen />
      <Trendsmen />
      <Summermen />
      <Recommen />
      <Aboutmen />
      <Accesoriesmen />
    </div>
  );
}

import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

function About() {
  return (
    <div className="container">
      <div className="about">
      <div className="about-content">
        <div className="about_text">
          <h3>It’s all about you</h3>
          <p>
            Try now, pay later. We want that you’re really confident and happy
            with your purchase - you have 30 days before we charge you! Learn
            more about our policy.
          </p>

          <button className="btn">
            <Link href="/">
              <FaArrowRight />
            </Link>
          </button>
        </div>

        <div className="about-image">
          <Image src="/r3.jpg" alt="tranning" width={1000} height={100}  style={{width: "750px", height: "420px"}}/>
        </div>
        
      </div>
    </div>
    </div>
  );
}
export default About;
"use client";
import products from "./productData";
import { useCart } from "@/context/cartContext";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Slider from "react-slick";
import { FaRegStar } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import Image from "next/image";
import toast from "react-hot-toast";
import CardSlider from "./slick/card";

function Recom() {
  return (
    <div className="trend-header">
      <div className="trend-content">
        <h2>RECOMMENDED FOR YOU</h2>

        <div className="trend-write">
          <CardSlider />
        </div>
      </div>
    </div>
  );
}
export default Recom;

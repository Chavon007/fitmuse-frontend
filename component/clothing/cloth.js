"use client";
import { useState } from "react";
import Allproduct from "./allcloth";
import Top from "./top";
import Short from "./short";
import "./cloth.css";

export default function Clothing() {
  const [activeTab, setActiveTab] = useState("all");
  let content;
  if (activeTab === "top") {
    content = <Top />;
  } else if (activeTab === "pant") {
    content = <Short />;
  } else {
    content = <Allproduct />;
  }
  return (
    <div className="container">
      <div className="clothing">
        <div className="clothing-header">
          <h2>Fashion Forward</h2>
          <p>Discover the latest trends in contemporary fashion</p>
        </div>

        <div className="clothing-button">
          <button
            className={`clothingbtn ${activeTab === "all" ? "active" : ""}`}
            onClick={() => setActiveTab("all")}
          >
            All Items
          </button>
          <button className={`clothingbtn ${activeTab === "top" ? "active" : ""}`} onClick={() => setActiveTab("top")}>
            Tops
          </button>
          <button className={`clothingbtn ${activeTab === "pant" ? "active" : ""}`} onClick={() => setActiveTab("pant")}>
            Pants
          </button>
        </div>

        <div className="clothing-content">{content}</div>
      </div>
    </div>
  );
}

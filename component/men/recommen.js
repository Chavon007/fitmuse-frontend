"use client";
import CardSlider from "../slick/card";

function Recommen() {
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
export default Recommen;

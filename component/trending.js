"use client";
import CardSlider from "./slick/card";
function Trends() {
  return (
    <div className="container">
      <div className="trend-header">
        <div className="trend-content">
          <h2>Trending Now</h2>

          <div className="flex trend-write">
            <CardSlider />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Trends;

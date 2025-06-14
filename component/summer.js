import { RiStarSFill } from "react-icons/ri";
import Image from "next/image";

function Summer() {
  return (

    <div className="container">
      <div className="summer">
      <div className="summmer-content">
        <div className="summer-content-header">
          <h2>SPRING/SUMMER 2021</h2>
        </div>
        <div className="card">
          <div className="card-content1 wide-card">
            <div id="card-image">
              <Image
                src="/s1.jpg"
                alt="sneakers"
                width={100}
                height={0}
                style={{ width: "400.53px", height: "195px" }}
              />
            </div>
            <div className="card-writeUp">
              <h4>BRAND/TYPES</h4>
              <p>Name and Characteristics</p>
              <h5>
                74,95 € <span>121,00 €</span>
              </h5>
              <h6>
                <RiStarSFill /> <RiStarSFill />
                <RiStarSFill />
                <RiStarSFill />
                <RiStarSFill /> <small>(46)</small>
              </h6>
            </div>
          </div>

          <div className="card-content1 normal-card">
            <div id="card-image">
              <Image
                src="/s2.jpg"
                alt="sneakers"
                width={100}
                height={100}
                style={{ width: "180px", height: "195px" }}
              />
            </div>
            <div className="card-writeUp">
              <h4>BRAND/TYPES</h4>
              <p>Name and Characteristics</p>
              <h5>
                74,95 € <span>121,00 €</span>
              </h5>
              <h6>
                <RiStarSFill /> <RiStarSFill />
                <RiStarSFill />
                <RiStarSFill />
                <RiStarSFill /> <small>(46)</small>
              </h6>
            </div>
          </div>

          <div className="card-content1 normal-card">
            <div id="card-image">
              <Image
                src="/s3.png"
                alt="sneakers"
                width={1000}
                height={1000}
                style={{ width: "180px", height: "195px" }}
              />
            </div>
            <div className="card-writeUp">
              <h4>BRAND/TYPES</h4>
              <p>Name and Characteristics</p>
              <h5>
                74,95 € <span>121,00 €</span>
              </h5>
              <h6>
                <RiStarSFill /> <RiStarSFill />
                <RiStarSFill />
                <RiStarSFill />
                <RiStarSFill /> <small>(46)</small>
              </h6>
            </div>
          </div>
          <div className="card-content1 wide-card">
            <div id="card-image">
              <Image
                src="/s4.jpg"
                alt="sneakers"
                width={100}
                height={0}
                style={{ width: "400.53px", height: "195px" }}
              />
            </div>
            <div className="card-writeUp">
              <h4>BRAND/TYPES</h4>
              <p>Name and Characteristics</p>
              <h5>
                74,95 € <span>121,00 €</span>
              </h5>
              <h6>
                <RiStarSFill /> <RiStarSFill />
                <RiStarSFill />
                <RiStarSFill />
                <RiStarSFill /> <small>(46)</small>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    
  );
}
export default Summer;

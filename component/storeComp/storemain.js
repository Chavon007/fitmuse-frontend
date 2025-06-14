import { IoCallOutline } from "react-icons/io5";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoTimeOutline } from "react-icons/io5";
import Link from "next/link";
import "./store.css";

function Store() {
  const storeDetails = [
    {
      City: "Lekki Store",
      street: "25 Admiralty Way, Lekki Phase 1, Lekki, Lagos, Nigeria.",
      phone: "08131933895",
      time: "Daily: 10AM-10PM",
      icon1: <IoCallOutline />,
      icon2: <FaMapMarkerAlt />,

      icon3: <IoTimeOutline />,
      link: "https://maps.app.goo.gl/hd1hskU9ALa97rg28",
    },
    {
      City: "Ikeja Store",
      street: "22 Obafemi Awolowo Way, Ikeja, Lagos, Nigeria.",
      phone: "tel:+2348131933895",
      time: "Daily: 10AM-10PM",
      icon1: <IoCallOutline />,
      icon2: <FaMapMarkerAlt />,

      icon3: <IoTimeOutline />,
      link: "https://maps.app.goo.gl/9Cj4Hf4Nr1uaYGoC8",
    },
    {
      City: "Ikoyi Store",
      street: "18 Bourdillon Road, Ikoyi, Lagos, Nigeria.",
      phone: "tel:+2348131933895",
      time: "Daily: 10AM-10PM",
      icon1: <IoCallOutline />,
      icon2: <FaMapMarkerAlt />,

      icon3: <IoTimeOutline />,
      link: "https://maps.app.goo.gl/u1frMPawYbY6aSxT7",
    },
    {
      City: "Ajah Store",
      street: "7 Thomas Estate Road, Ajah, Lagos, Nigeria.",
      phone: "08131933895",
      time: "Daily: 10AM-10PM",
      icon1: <IoCallOutline />,
      icon2: <FaMapMarkerAlt />,

      icon3: <IoTimeOutline />,
      link: "https://maps.app.goo.gl/mi9SSRc7QYG9N1hr6",
    },
    {
      City: "Yaba Store",
      street: "13 Hughes Avenue, Alagomeji-Yaba, Lagos, Nigeria.",
      phone: "tel:+2348131933895",
      time: "Daily: 10AM-10PM",
      icon1: <IoCallOutline />,
      icon2: <FaMapMarkerAlt />,

      icon3: <IoTimeOutline />,
      link: "https://maps.app.goo.gl/nWZ6xcepAPUW7tAD7",
    },
  ];
  return (
    <div className="store">
      <div className="storeheader">
        <h2>Find Our Store</h2>
        <p>
          Discover our store locations near you. We're here to serve you with
          the best shopping experience.
        </p>
      </div>

      <div className="store-location">
        <div className="store-address">
          <h3>Store Locations</h3>
          {storeDetails.map((loca, index) => (
            <div key={index} className="mainstores">
              <h5>{loca.City}</h5>
              <p>{loca.street}</p>
              <div className="time-num">
                <span>
                  {loca.icon1} {loca.phone}
                </span>
                <small>
                  {loca.icon3}
                  {loca.time}
                </small>
              </div>
              <div className="icon-link">
                <Link href={loca.phone}>
                  <button className="btnicon" type="button">
                    {loca.icon1}Call
                  </button>
                </Link>

                <Link href={loca.link}>
                  <button className="btnicon" type="button">
                    {loca.icon2}Direction
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="store-map">
          <iframe
            src="https://www.google.com/maps/d/u/0/embed?mid=1zvhWiY53K_X5zO8F_so7Xs0BCWkiMko&ehbc=2E312F"
            width="500"
            height="450"
            allowFullScreen
            loading="lazy"
            title="fitmus Locations Map"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
export default Store;

import Image from "next/image";
import Link from "next/link";
import { BsHeadset } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { FaMapMarkerAlt, FaRegHeart, FaRegUser } from "react-icons/fa";
import { CiGift } from "react-icons/ci";
import { CiMicrophoneOn } from "react-icons/ci";
import { LuScanQrCode } from "react-icons/lu";

function Header() {
  return (
    <div className="Header">
      <div className="navHead">
        <div className="navbar">
          <div className="navbar-header">
            <Image
              className="pic"
              src="/logo.png"
              alt="FitMuse"
              width={100}
              height={100}
            />
          </div>

          <div className="navbar-support">
            <ul>
              <li>
                <Link href="/">
                  <BsHeadset /> <p>Support</p>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <FaMapMarkerAlt /> <p>Find a store</p>
                </Link>
              </li>
            </ul>
          </div>

          <div className="navbar-user">
            <ul>
              <li>
                <Link href="/">
                  <FaRegHeart />
                </Link>
              </li>

              <li>
                <Link href="/">
                  <FaRegUser />
                </Link>
              </li>

              <li>
                <Link href="/">
                  <CiGift />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="wears-page">
          <ul>
            <li>
              <Link href="/">WOMEN</Link>
            </li>
            <li>
              <Link href="/">MEN</Link>
            </li>
          </ul>
        </div>

        <div className="header-bottom">
          <div className="WeDo">
            <ul>
              <li>
                <p>SALE</p>
              </li>
              <li>
                <p>NEW IN</p>
              </li>
              <li>
                <p>CLOTHING</p>
              </li>
              <li>
                <p>SHOES</p>
              </li>
              <li>
                <p>ACCESSORIES</p>
              </li>
              <li>
                <p>BANDS</p>
              </li>
            </ul>
          </div>
          <div className="formheader">
            <form>
              <p><CiSearch /></p>
              <input
                type="search"
                placeholder="search product, articles, fqa,..."
              />
              <button>
                <CiMicrophoneOn />
              </button>
              <button>
                <LuScanQrCode />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Header;

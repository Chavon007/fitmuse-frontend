"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaStoreAlt } from "react-icons/fa";
import { BsHeadset } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { FaMapMarkerAlt, FaRegHeart, FaRegUser } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import { CiMicrophoneOn } from "react-icons/ci";
import { LuScanQrCode } from "react-icons/lu";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  return (
    <div className="container">
      <div className="Header">
        <div className="navHead">
          <div className="navbar">
            <div className="navbar-header">
              <Link href="/">
                <Image
                  className="pic"
                  src="/logo2.png"
                  alt="FitMuse"
                  width={60}
                  height={40}
                />
              </Link>
            </div>

            
              <div className="mobile-menu">
                <div className={`navbar-support ${menuOpen ? "show" : "hide"}`}>
                  <ul>
                    <li>
                      <Link href="/support">
                        <BsHeadset title="Support" /> <p>Support</p>
                      </Link>
                    </li>
                    <li>
                      <Link href="/store">
                        <FaMapMarkerAlt title="Location" /> <p>Find a store</p>
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className={`navbar-user ${menuOpen ? "show" : "hide"}`}>
                  <ul>
                    <li>
                      <Link href="/wishlist">
                        <FaRegHeart title="Liked Product" />
                      </Link>
                    </li>

                    <li>
                      <Link href="/login">
                        <FaRegUser title="Login" />
                      </Link>
                    </li>

                    <li>
                      <Link href="/cart">
                        <FaStoreAlt title="Store" />
                      </Link>
                    </li>
                  </ul>
                </div>
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
              <form className="form">
                <p>
                  <CiSearch />
                </p>
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

        <div className="hamburger">
          <button onClick={toggleMenu}>
            {menuOpen ? <FaTimes /> : <GiHamburgerMenu />}
          </button>
        </div>
      </div>
    </div>
  );
}
export default Header;

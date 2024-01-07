import React from "react";
import { Link, Outlet } from "react-router-dom";
import logo from "../images/NEW_LOGO.png";
import style from "./Navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import Carousel from "./Carousel";

export default function Navbar() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className={style.logowrapper}>
            <div>
              <Link to="/">
                <img className={style.logo} src={logo} alt="" />
              </Link>
            </div>
            <div className={style.smallScreen}>
              <ul className={style.navList}>
                <li>
                  <Link
                    className={style.contactNumber}
                    to="https://wa.me/918218327600"
                  >
                    <img
                      src="	https://nuvonirmaan.com/wp-content/themes/nuvoco/assets/images/whatsapp.png"
                      alt=""
                      className={`img-fluid  ${style.watsAppImg}`}
                    />
                    <span> +91 8218327600</span>
                  </Link>
                </li>
                <li>
                  <Link className={style.email} to="">
                    <FontAwesomeIcon
                      className={style.emailIcon}
                      icon={faEnvelope}
                    />
                    <span> metromancastingyards@gmail.com</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div>
        <nav className="navbar navbar-expand-lg bg-primary">
          <div className="container-fluid">
            {/* <Link className="navbar-brand" to="/">
              MetroMan
            </Link> */}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className={`navbar-nav me-auto mb-2 mb-lg-0`}>
                <li className="nav-item">
                  <Link
                    className={`nav-link ${style.navLinks}`}
                    aria-current="page"
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link ${style.navLinks}`} to="/stages">
                    Construction Stages
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link ${style.navLinks}`} to="/aboutus">
                    About Us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={`nav-link ${style.navLinks}`}
                    to="/calculator"
                  >
                    Calculator
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link ${style.navLinks}`} to="/products">
                    Products
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link ${style.navLinks}`} to="/login">
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link ${style.navLinks}`} to="/signup">
                    Signup
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Carousel />
        <Outlet />
      </div>
    </>
  );
}

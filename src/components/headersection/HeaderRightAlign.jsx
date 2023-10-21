import React, { useState } from "react";
import { CrossIcon, MenuIcon } from "../common/Icons";
import Logo from "../../assetsFolder/images/svg/headerLogo.svg";
const HeaderRightAlign = () => {
  const [menu, setMenu] = useState(false);
  return (
    <div>
      {" "}
      <nav className="position-sticky z-100 top-0 start-0 py-4 bg-info">
        <div className=" container">
          <div className="d-flex justify-content-between align-items-center">
            <div className="gap-4 d-flex z-1 align-items-center">
              <a href="#">
                <img src={Logo} alt="Logo" />
              </a>
            </div>
            <div className={`${menu ? "show-nav" : "nav-fix"}`}>
              <div
                className="d-lg-none crossIconset"
                onClick={() => setMenu(false)}
              >
                <CrossIcon />
              </div>
              <div className="d-flex gap-lg-4 gap-xl-5 align-items-center">
                <a
                  onClick={() => setMenu(false)}
                  className="hoverLineAlign text-black position-relative"
                  href="#"
                >
                  Home
                </a>
                <a
                  onClick={() => setMenu(false)}
                  className="hoverLineAlign text-black position-relative"
                  href="#"
                >
                  Blog
                </a>
                <a
                  onClick={() => setMenu(false)}
                  className="hoverLineAlign text-black position-relative text-nowrap"
                  href="#"
                >
                  Contact Us
                </a>
                <button
                  className="dedcription-btn border-0"
                  href="#"
                  onClick={() => setMenu(false)}
                >
                  <span className="name-descripeion position-relative">
                    Subscribe
                  </span>
                  <span className="btn-icon"></span>
                </button>
              </div>
            </div>
            <div className="d-lg-none">
              <span onClick={() => setMenu(true)}>
                <MenuIcon />
              </span>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default HeaderRightAlign;

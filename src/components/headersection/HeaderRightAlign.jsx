import React, { useEffect, useState } from "react";
import { CrossIcon, MenuIcon } from "../common/Icons";
import Logo from "../../assetsFolder/images/svg/headerLogo.svg";
const HeaderRightAlign = () => {
  const [menu, setMenu] = useState(false);

  // Function to handle the menu open/close
  const toggleMenu = () => {
    setMenu(!menu);
  };

  useEffect(() => {
    // Update the body's style when the menuOpen state changes
    document.body.style.overflow = menu ? "hidden" : "auto";

    // Clean up the style when the component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menu]);
  return (
    <div>
      {" "}
      <nav className="position-sticky z-100 top-0 start-0 py-4 bg-info">
        <div className="container">
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
              <ul className="d-flex gap-lg-4 gap-xl-5 align-items-center list-unstyled">
                <li>
                  <a
                    onClick={() => setMenu(false)}
                    className="hoverLineAlign text-black position-relative text-decoration-none"
                    href="#"
                  >
                    Home
                  </a>
                </li>
                <li>
                  {" "}
                  <a
                    onClick={() => setMenu(false)}
                    className="hoverLineAlign text-black position-relative text-decoration-none"
                    href="#"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => setMenu(false)}
                    className="hoverLineAlign text-black position-relative text-decoration-none text-nowrap"
                    href="#"
                  >
                    Contact Us
                  </a>
                </li>
                <button
                  className="Subscribe_btn border-0"
                  href="#"
                  onClick={() => setMenu(false)}
                >
                  <span className="name-subscribe position-relative">
                    Subscribe
                  </span>
                  <span className="btn-icon"></span>
                </button>
              </ul>
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

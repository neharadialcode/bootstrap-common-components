import React from "react";
import logo from "../../assetsFolder/images/svg/headerLogo.svg";
import { CrossIcon, MenuIcon } from "../common/Icons";
const HeaderFull = () => {
  const [First, setFirst] = React.useState(true);
  function clickshow() {
    setFirst(!First);
  }
  if (!First) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }
  return (
    <>
      <div className="">
        {/* btn */}
        <div className="d-flex justify-content-between d-lg-none align-items-center px-3 py-3 bg-info">
          <span>
            <a href="#">
              <img src={logo} alt="logo" className="w-100" />
            </a>
          </span>
          <h2
            onClick={clickshow}
            className="pointer position-relative zFull text-white ps-4 mb-0"
          >
            {First ? <MenuIcon /> : <CrossIcon />}
          </h2>
        </div>
        {/* nav */}
        <div className={`NavShow ${First ? "" : "ps-0 showw"}`}>
          <div className="bg-info py-4 vh_100_1920 position-relative">
            {/* nav bar container */}
            <div className="container-fluid">
              <div className="d-flex align-items-center flex-lg-row flex-column justify-content-center justify-content-lg-between vh_100_992">
                <span className=" d-lg-block d-none">
                  <a href="#">
                    <img src={logo} alt="logo" />
                  </a>
                </span>

                <ul className="d-flex align-items-center mb-lg-0 flex-lg-row flex-column ps-0 gap-lg-0 gap-2 mb-4">
                  <li>
                    <a
                      href="#"
                      onClick={clickshow}
                      className="text-white hoverLine position-relative me-lg-4"
                    >
                      Explore
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      onClick={clickshow}
                      className="text-white hoverLine position-relative me-lg-4"
                    >
                      Build
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      onClick={clickshow}
                      className="text-white hoverLine position-relative me-lg-4"
                    >
                      Community
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      onClick={clickshow}
                      className="text-white hoverLine position-relative"
                    >
                      Content
                    </a>
                  </li>
                </ul>
                <div className="d-flex align-items-center">
                  <button
                    className="dedcription-btn border-0"
                    href="#"
                    onClick={clickshow}
                  >
                    <span className="name-descripeion position-relative">
                      Subscribe
                    </span>
                    <span className="btn-icon"></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderFull;

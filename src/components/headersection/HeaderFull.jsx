import React from "react";
import logo from "../../assets/svg/headerLogo.svg";
import { RxCross2 } from "react-icons/rx";
import { AiOutlineAlignRight } from "react-icons/ai";
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
      <div>
        {/* btn */}
        <div className=" d-flex justify-content-between d-lg-none align-items-center px-4 py-3 bg-black">
          <span>
            <a href="#">
              <img
                src={logo}
                alt="logo"
                className="w-100 position-relative z_10"
              />
            </a>
          </span>
          <h2
            onClick={clickshow}
            className="pointer position-relative z_10 text-white ps-4"
          >
            {First ? <AiOutlineAlignRight /> : <RxCross2 />}
          </h2>
        </div>
        {/* nav */}
        <div className={`nav_show ${First ? "" : "ps-0 showw"}`}>
          <div className="bg-black py-4 vh_100_1920 position-relative">
            <div className="mx-md-5 mx-sm-3 mx-1">
              {/* nav bar container */}
              <div>
                <div className=" d-flex align-items-center flex-lg-row flex-column justify-content-center justify-content-lg-between vh_100_992">
                  <span className=" d-lg-block d-none">
                    <a href="#">
                      <img src={logo} alt="logo" />
                    </a>
                  </span>

                  <ul className="d-flex align-items-center mb-lg-0 flex-lg-row flex-column ps-0 gap-lg-0 gap-2 mb-4">
                    <li>
                      <a
                        href="#"
                        className="text-white hoverLine position-relative me-lg-4"
                      >
                        Explore
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-white hoverLine position-relative me-lg-4"
                      >
                        Build
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-white hoverLine position-relative me-lg-4"
                      >
                        Community
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-white hoverLine position-relative"
                      >
                        Content
                      </a>
                    </li>
                  </ul>
                  <button className="position-relative overflow-hidden rounded-pill border-0 py-2 px-3">
                    Explore the ecosystem
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

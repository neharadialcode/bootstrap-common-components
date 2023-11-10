import React from "react";
import logo from "../../assetsFolder/images/svg/headerLogo.svg";
import { Container, Nav } from "react-bootstrap";
import { CrossIcon, MenuIcon } from "../common/Icons";
const HeaderCenterAlign = () => {
  const [NavShow, setNavShow] = React.useState(true);
  function clickshow() {
    setNavShow(!NavShow);
  }
  if (!NavShow) {
    document.body.classList.add("overflow_hidden");
  } else {
    document.body.classList.remove("overflow_hidden");
  }
  return (
    <div>
      <div className="position-relative bg-info d-flex align-content-center py-4">
        <Container className="px-md-3">
          <Nav>
            <div className="w-100">
              <div className="d-flex justify-content-between align-items-center">
                <a href="#">
                  <img
                    src={logo}
                    alt="logo nav"
                    className="w-100 pointer-event"
                  />
                </a>
                <div className="d-flex align-items-center">
                  <ul
                    className={`nav_show d-flex flex-md-row gap-2 flex-column align-items-center mb-0 p-0 flex-row z-3
                      ${NavShow ? "" : "showw "}`}
                  >
                    <li>
                      <a
                        href="#"
                        onClick={clickshow}
                        className="position-relative hover_line text-black"
                      >
                        Home
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        onClick={clickshow}
                        className="position-relative hover_line text-black mx-4"
                      >
                        About
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        onClick={clickshow}
                        className="position-relative hover_line text-black"
                      >
                        News
                      </a>
                    </li>
                    <li>
                      <div className="d-block d-md-none">
                        <div className="d-flex align-items-center">
                          <button className="dedcription-btn border-0" href="#">
                            <span className="name-descripeion position-relative">
                              Subscribe
                            </span>
                            <span className="btn-icon"></span>
                          </button>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="d-none d-md-block">
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
                <div className="z-10 d-md-none position-relative">
                  <h3 className="text-black w-100" onClick={clickshow}>
                    {NavShow ? <MenuIcon /> : <CrossIcon />}
                  </h3>
                </div>
              </div>
            </div>
          </Nav>
        </Container>
      </div>
    </div>
  );
};

export default HeaderCenterAlign;

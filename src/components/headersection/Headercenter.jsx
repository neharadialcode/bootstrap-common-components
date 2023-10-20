import React from "react";
import { Container, Nav } from "react-bootstrap";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
const Headercenter = () => {
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
      <div className="position-relative">
        <Container className="px-md-3">
          <Nav>
            <div className="mt-3 w-100">
              <div className="d-flex justify-content-between align-items-center">
                <span className="z-10">
                  <p>Logo</p>
                </span>
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
                        <button className="border-0 position-relative rounded-pill text-black fw-medium position-relative overflow-hidden py-2 px-3 ">
                          Subscribe
                        </button>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="d-none d-md-block">
                  <div className="d-flex align-items-center">
                    <button className="border-0 position-relative rounded-pill text-black fw-medium position-relative overflow-hidden py-2 px-3">
                      Subscribe
                    </button>
                  </div>
                </div>
                <div className="z-10 d-md-none position-relative">
                  <h3 className="text-black w-100" onClick={clickshow}>
                    {NavShow ? <GiHamburgerMenu /> : <ImCross />}
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

export default Headercenter;

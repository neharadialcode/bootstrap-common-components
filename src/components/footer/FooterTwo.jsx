import React from "react";

const FooterTwo = () => {
  return (
    <div className="py-5 mt-5">
      <div className="container">
        <div className="text-center">
          <a
            href="#"
            className="fw-semibold fs-5 bg_logo clr_purple d-inline-block py-2 px-3 mb-3"
          >
            Logo
          </a>
          <ul className="d-flex ps-0 flex-wrap gap-3 gap-sm-5 align-items-center justify-content-center mt-4">
            <li>
              <a href="#" className="font-sm ff_poppins text-start">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="font-sm ff_poppins text-start">
                About
              </a>
            </li>
            <li>
              <a href="#" className="font-sm ff_poppins text-start">
                Community
              </a>
            </li>
            <li>
              <a href="#" className="font-sm ff_poppins text-start">
                RoadMap
              </a>
            </li>
            <li>
              <a href="#" className="font-sm ff_poppins text-start">
                Faqs
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer_bordeer_top mt-5">
        <p className="font-sm ff_poppins text-dark text-center pt-3">
          © 2023 Copyright company name. All Right Reserved.{" "}
        </p>
      </div>
    </div>
  );
};

export default FooterTwo;

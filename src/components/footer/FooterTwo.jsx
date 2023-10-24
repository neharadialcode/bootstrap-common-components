import React from 'react'

const FooterTwo = () => {
  return (
    <div className=" py-5 mt-5">
      <div className=" container">
        <div className=" text-center">
          <p className=" fw-semibold fs-5 bg-danger d-inline-block py-2 px-3 mb-0">
            Logo
          </p>
          <ul className=" row ps-0  align-items-center justify-content-center mt-4">
            <li className=" col-4 col-sm-auto mt-2">
              <a href="#" className="font-sm ff_poppins text-dark">
                Home
              </a>
            </li>
            <li className=" col-4 col-sm-auto mt-2">
              <a href="#" className="font-sm ff_poppins text-dark">
                About
              </a>
            </li>
            <li className=" col-4 col-sm-auto mt-2">
              <a href="#" className="font-sm ff_poppins text-dark">
                Community
              </a>
            </li>
            <li className=" col-4 col-sm-auto mt-2">
              <a href="#" className="font-sm ff_poppins text-dark">
                RoadMap
              </a>
            </li>
            <li className=" col-4 col-sm-auto mt-2">
              <a href="#" className="font-sm ff_poppins text-dark">
                Faqs
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className=" footer_bordeer_top mt-5">
        <p className="font-sm ff_poppins text-dark text-center pt-3">
          © 2023 Copyright company name. All Right Reserved.{" "}
        </p>
      </div>
    </div>
  );
}

export default FooterTwo
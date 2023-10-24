import React from "react";
import twitter from "../../assetsFolder/images/svg/twitter.svg"
import fackbook from "../../assetsFolder/images/svg/facebook.svg"
import be from "../../assetsFolder/images/svg/Be.svg"
const FooterOne = () => {
  return (
    <div className=" py-5 my-5 ">
      <div className=" container">
        <div className=" row justify-content-between ">
          <div className=" col-xl-3">
            <p className=" fw-semibold fs-5 bg-danger d-inline-block py-2 px-3 ">
              Logo
            </p>
            <p className=" font-sm ff_poppins">
              Discover Stellar blockchain's unrivaled speed, security, &
              scalability with Volag. Revolutionize finance.
            </p>
          </div>
          <div className="col-xl-8">
            <div className=" row justify-content-between">
              <div className=" col-6 col-lg-3">
                <ul className=" ps-0">
                  <li className="font-sm ff_poppins text-dark">Quick links</li>
                  <li className=" mt-2">
                    <a href="#" className="font-sm ff_poppins text-danger">
                      Home
                    </a>
                  </li>
                  <li className=" mt-2">
                    <a href="#" className="font-sm ff_poppins text-danger">
                      About
                    </a>
                  </li>
                  <li className=" mt-2">
                    <a href="#" className="font-sm ff_poppins text-danger">
                      Community
                    </a>
                  </li>
                  <li className=" mt-2">
                    <a href="#" className="font-sm ff_poppins text-danger">
                      RoadMap
                    </a>
                  </li>
                  <li className=" mt-2">
                    <a href="#" className="font-sm ff_poppins text-danger">
                      Faqs
                    </a>
                  </li>
                </ul>
              </div>
              <div className=" col-6 col-lg-3">
                <ul className=" ps-0">
                  <li className="font-sm ff_poppins text-dark">Links</li>
                  <li className=" mt-2">
                    <a href="#" className="font-sm ff_poppins text-danger">
                      Terms & conditions
                    </a>
                  </li>
                  <li className=" mt-2">
                    <a href="#" className="font-sm ff_poppins text-danger">
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-sm-6 col-lg-4 col-xl-5">
                <p className="font-sm ff_poppins">Get in Touch</p>
                <form>
                  <div className=" mt-0">
                    <div className="footer_input_clr  px-4 py-1 d-flex align-items-center">
                      <input
                        type="text"
                        placeholder="Type Your Mail"
                        className=" bg-transparent border-0 footer_input "
                      />
                      <button className="Search_btn text-white py-1 px-3">
                        Search
                      </button>
                    </div>
                  </div>
                </form>
                <p className="font-sm ff_poppins mt-3">Follow us now</p>
                <div>
                  <a href="#">
                    <img src={twitter} alt="twitter" />
                  </a>
                  <a href="#" className=" mx-2">
                    <img src={fackbook} alt="fackbook" />
                  </a>
                  <a href="#">
                    <img src={be} alt="be" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterOne;

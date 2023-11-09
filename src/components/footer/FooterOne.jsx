import React from "react";
import twitter from "../../assetsFolder/images/svg/twitter.svg";
import fackbook from "../../assetsFolder/images/svg/facebook.svg";
import be from "../../assetsFolder/images/svg/Be.svg";
const FooterOne = () => {
  return (
    <div className="py-5 my-5">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-xl-3">
            <a
              href="#"
              className="fw-semibold fs-5 bg_logo clr_purple d-inline-block py-2 px-3 mb-3"
            >
              Logo
            </a>
            <p className="font-sm ff_poppins opacity-75">
              Discover Stellar blockchain's unrivaled speed, security, &
              scalability with Volag. Revolutionize finance.
            </p>
          </div>
          <div className="col-xl-8">
            <div className="row justify-content-between">
              <div className=" col-6 col-md-3">
                <ul className="ps-0">
                  <li className="font-sm ff_poppins text-black">Quick links</li>
                  <li className="mt-2">
                    <a href="#" className="font-sm ff_poppins">
                      Home
                    </a>
                  </li>
                  <li className="mt-2">
                    <a href="#" className="font-sm ff_poppins">
                      About
                    </a>
                  </li>
                  <li className="mt-2">
                    <a href="#" className="font-sm ff_poppins">
                      Community
                    </a>
                  </li>
                  <li className="mt-2">
                    <a href="#" className="font-sm ff_poppins">
                      RoadMap
                    </a>
                  </li>
                  <li className="mt-2">
                    <a href="#" className="font-sm ff_poppins">
                      Faqs
                    </a>
                  </li>
                </ul>
              </div>
              <div className=" col-6 col-md-3">
                <ul className="ps-0">
                  <li className="font-sm ff_poppins text-black">Links</li>
                  <li className="mt-2">
                    <a href="#" className="font-sm ff_poppins">
                      Terms & conditions
                    </a>
                  </li>
                  <li className="mt-2">
                    <a href="#" className="font-sm ff_poppins">
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>
              <div className=" col-sm-6 col-md-5">
                <p className="font-sm ff_poppins text-black">Get in Touch</p>
                <form>
                  <div className="mt-0">
                    <div className="footer_input_clr  ps-4 pe-1 py-1 d-flex align-items-center">
                      <input
                        type="text"
                        placeholder="Type Your Mail"
                        className="bg-transparent border-0 footer_input w-100"
                      />
                      <button className="Search_btn text-white py-1 px-3">
                        Search
                      </button>
                    </div>
                  </div>
                </form>
                <p className="font-sm ff_poppins mt-3">Follow us now</p>
                <div className=" d-flex gap-2">
                  <a href="#" className="">
                    <img src={twitter} alt="twitter" className="hover_sclae" />
                  </a>
                  <a href="#" className="">
                    <img
                      src={fackbook}
                      alt="fackbook"
                      className="hover_sclae"
                    />
                  </a>
                  <a href="#">
                    <img src={be} alt="be" className="hover_sclae" />
                  </a>
                </div>
              </div>
            </div>
          </div>
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

export default FooterOne;

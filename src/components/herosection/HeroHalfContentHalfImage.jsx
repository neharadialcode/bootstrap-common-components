import React from 'react'
import heroImag from "../../assetsFolder/images/png/hero_Half_img.png"
import HeaderFull from "../headersection/HeaderFull"
const HeroHalfContentHalfImage = () => {
  return (
    <>
      <div className=" vh-100">
        <HeaderFull/>
        <div className=" min-vh-100 d-flex align-items-center">
          <div className=" container">
            <div className=" row flex-column-reverse flex-md-row align-items-center">
              <div className="  col-md-6 mt-5">
                <h1 className=" ff_poppins fw-medium font-xl text-black">
                  Lorem ipsum dolor sit{" "}
                </h1>

                <p className=" ff_poppins fw-normal text_primary font-sm   mb-0">
                  Lorem ipsum dolor sit amet consectetur. Semper vitae nullam
                  eget consectetur mi. Vulputate sapien a a bibendum suspendisse
                  quam. Hac posuere eget nam diam velit urna adipiscing diam.
                  Dis velit nam vitae hendrerit at egestas. Tellus velit turpis
                  at sed lorem vitae sed.
                </p>

                <button className="ff_poppins fw-normal font-sm  mx-auto  button_btn mt-5">
                  Button
                </button>
              </div>
              <div className=" col-md-6 text-center text-md-start">
                <img
                  src={heroImag}
                  alt="heroImag"
                  className=" w-100 mx-auto max_width_hero_img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroHalfContentHalfImage
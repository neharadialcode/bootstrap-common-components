import React from 'react'
import heroImagPosition from "../../assetsFolder/images/png/hero_half_position.png";
import Headercenter from "../headersection/Headercenter"
const HeroPositionHalf = () => {
  return (
    <>
      <div className=" overflow-hidden">
        <Headercenter />
        <div className="hero_custom_height d-flex align-items-center">
          <div className=" container">
            <div className=" row flex-column-reverse flex-lg-row align-items-center">
              <div className="  col-md-8 col-lg-5 mt-5">
                <span className="ff_poppins font-md text-black">
                  A nice headline
                </span>
                <h1 className=" ff_poppins fw-medium fs_2xl text-black">
                  Goes here
                </h1>

                <p className=" ff_poppins fw-normal text_primary fs_sm   mb-0">
                  Lorem ipsum dolor sit amet consectetur. Semper vitae nullam
                  eget consectetur mi. Vulputate sapien a a bibendum suspendisse
                  quam. Hac posuere eget nam diam velit urna adipiscing diam.
                  Dis velit nam vitae hendrerit at egestas. Tellus velit turpis
                  at sed lorem vitae sed.
                </p>

                <button className="ff_poppins fw-normal fs_sm  mx-auto  button_btn mt-5">
                  Button
                </button>
                <button className="ff_poppins fw-normal fs_sm  mx-auto  button_btn mt-2 ms-3 mt-sm-5">
                  Button
                </button>
              </div>
              <div className=" col-md-8 col-lg-7 text-center text-md-start position-relative">
                <img
                  src={heroImagPosition}
                  alt="heroImagPosition"
                  className=" w-100 hero_Img_position"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroPositionHalf
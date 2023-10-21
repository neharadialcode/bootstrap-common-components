import React from 'react'
import  { Icon1 } from './Icon';
 import frame from "../../assets/image/svg/Frame.svg"
import heroImag from "../../assets/image/png/hero_1.png"
const HeroHalfContentHalfImage = () => {
  return (
    <>
      <div className=" py-5 min-vh-100 d-flex align-items-center">
        <div className=" container">
          <h1 className=" text-center mb-4 font_md ff_poppins text_linear_gradient fw-semibold">
            Hero HalfContent Half Image
          </h1>
          <div className=" row flex-column-reverse flex-md-row align-items-center">
            <div className="  col-md-6 mt-5">
              <h2 className=" ff_poppins fw-medium font-xl text-black">
                Find your new companion
              </h2>
              <div className=" d-flex align-items-center gap-3 mt-3 mt-lg-5">
                <img src={frame} alt="Frame" />
                <p className=" ff_poppins fw-normal text_primary font-sm   mb-0">
                  Connecting awesome people with a happy healthy kitten from
                  prescreened.
                </p>
              </div>
              <button className="common_btn fw-medium font-sm  mt-5">
                Get Started
                <span className=" ms-3">
                  <Icon1 />
                </span>
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
    </>
  );
}

export default HeroHalfContentHalfImage
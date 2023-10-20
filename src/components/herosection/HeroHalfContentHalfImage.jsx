import React from 'react'
// import IconOne from './IconOne';
import Icon, { Icon1 } from './Icon';
 import Frame from "../../assets/image/svg/Frame.svg";
 import heroImag from "../../assets/image/png/hero_1.png";
const HeroHalfContentHalfImage = () => {
  return (
    <>
      <section className=" py-5 min-vh-100 d-flex align-items-center">
        <div className=" container">
          <div className=" row flex-column-reverse flex-md-row align-items-center">
            <div className="  col-md-6 mt-5">
              <h1 className=" ff_poppins fw-medium font-xl lh_larg text-black">
                Find your new companion
              </h1>
              <div className=" d-flex align-items-center gap-3 mt-3 mt-lg-5">
                <img src={Frame} alt="Frame" />
                <p className=" ff_poppins fw-normal text_primary font-sm max_width_par lh_medium mb-0">
                  Connecting awesome people with a happy healthy kitten from
                  prescreened.
                </p>
              </div>
              <button className="common_btu  fw-medium font-sm lh_medium mt-5">
                Get Started
                <span className=" ms-3">
                  <Icon1 />
                </span>
              </button>
            </div>
            <div className=" col-md-6 text-center text-md-start">
              <img src={heroImag} alt="heroImag" className=" w-100 mx-auto max_width_hero_img" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroHalfContentHalfImage
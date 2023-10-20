import React from 'react'
// import IconOne from './IconOne';
import Icon, { Icon1, PlayButton } from './Icon';
// import {Frame} from "./src/assets/svg/Frame.svg";
const HeroHalfContentHalfImage = () => {
  return (
    <>
      <section className=" py-5">
        <div className=" container">
          <div className=" row">
            <div className=" col-6">
              <h1 className=" ff_poppins fw-medium font-xl lh_larg text-black">
                Find your new companion
              </h1>
              <div className=" mt-3">
                {/* <img src={Frame} alt="Frame" /> */}
                <p className=" ff_poppins fw-normal text_primary font-sm max_width_par lh_medium ">
                  Connecting awesome people with a happy healthy kitten from
                  prescreened.
                </p>
              </div>
              <div className=" mt-5 pt-3">
                <button className="common_btu  fw-medium font-sm lh_medium ">
                  Get Started
                  <span className=" ms-3">
                    <Icon1 />
                  </span>
                </button>
                <button className="border-0 fw-medium font-sm lh_medium bg-transparent ms-5 text_linear_gradient">
                  <span className=" me-2">
                    <PlayButton />
                  </span>
                  Watch Kitten
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroHalfContentHalfImage
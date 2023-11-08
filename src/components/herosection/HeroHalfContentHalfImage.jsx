import React from 'react'
import heroImag from "../../assetsFolder/images/png/hero_Half_img.png"
import HeaderFull from "../headersection/HeaderFull"
const HeroHalfContentHalfImage = () => {
  return (
    <>
      <div>
        <HeaderFull />
        <div className="hero_custom_height d-flex align-items-center">
          <div className=" container py-5">
            <div className=" row flex-column-reverse flex-lg-row align-items-center align-items-lg-start justify-content-lg-between">
              <div className=" col-md-7 col-lg-6  col-lg-5 mt-3">
                <h1 className=" ff_poppins fw-bold fs_3xl lh_mainHeading text_secondary">
                  Lorem ipsum dolor sit{" "}
                </h1>

                <p className=" ff_poppins fw-normal text_primary fs_sm lh_All_par mb-0">
                  Lorem ipsum dolor sit amet consectetur. Semper vitae nullam
                  eget consectetur mi. Vulputate sapien a a bibendum suspendisse
                  quam. Hac posuere eget nam diam velit urna adipiscing diam.
                  Dis velit nam vitae hendrerit at egestas. Tellus velit turpis
                  at sed lorem vitae sed.
                </p>

                <button className=" fw-semibold fs_sm  mx-auto   button_btn mt-4">
                  Button
                </button>
              </div>
              <div className="  col-md-7 col-lg-6 text-center text-md-start ">
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
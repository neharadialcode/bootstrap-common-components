import React from 'react'
import heroImagPosition from "../../assetsFolder/images/png/hero_half_position.png";
import Headercenter from "../headersection/Headercenter"
const HeroPositionHalf = () => {
  return (
    <>
      <div className="overflow-hidden">
        <Headercenter />
        <div className="hero_custom_height d-flex align-items-center pb-5">
          <div className=" container">
            <div className=" row flex-column-reverse flex-lg-row align-items-center">
              <div className="  col-md-8 col-lg-6 mt-5 pb-xl-5  mt-lg-0">
                <p className="fs_xl text-black mb-0">A nice headline</p>
                <h1 className="fw-semibold fs_3xl lh_mainHeading">Goes here</h1>

                <p className="fw-normal text_primary fs_sm mb-0 lh_All_par">
                  Lorem ipsum dolor sit amet consectetur. Semper vitae nullam
                  eget consectetur mi. Vulputate sapien a a bibendum suspendisse
                  quam. Hac posuere eget nam diam velit urna adipiscing diam.
                  Dis velit nam vitae hendrerit at egestas. Tellus velit turpis
                  at sed lorem vitae sed.
                </p>

                <p className="fw-normal text_primary fs_sm mb-0 lh_All_par pt-3">
                  Lorem ipsum dolor sit amet consectetur. Velit pulvinar libero
                  porttitor quam sed aliquet. Sodales vulputate elementum arcu
                  donec.
                </p>
                <button className="fw-semibold fs_sm  mx-auto about_btn mt-4">
                  Button
                </button>
                <button className="fw-semibold fs_sm  mx-auto  about_btn  mt-2 ms-3 mt-sm-4">
                  Button
                </button>
              </div>
              <div className=" col-md-8 col-lg-6 text-center text-md-start position-relative mt-5 mt-lg-0">
                <img
                  src={heroImagPosition}
                  alt="heroImagPosition"
                  className="hero_Img_position"
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
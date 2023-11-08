import React from 'react'
import heroCenterPosition from "../../assetsFolder/images/png/center_position_img.png"
import Headercenter from "../headersection/Headercenter";

const HeroCenterPosition = () => {
  return (
    <>
      <div>
        <Headercenter />
        <div className="d-flex hero_custom_height align-items-center">
          <div className="container mt-lg-5 pt-2">
            <h1 className="text-center fw-bold fs_3xl lh_mainHeading mx-auto">
              Lorem ipsum Lorem ipsum
            </h1>
            <p className="fw-normal fs_sm lh_All_par mx-auto pt-2 max_w_hero_par mx-auto text-center">
              Lorem ipsum dolor sit amet consectetur. Semper vitae nullam eget
              consectetur mi. Vulputate sapien a a bibendum suspendisse quam.
              Hac posuere eget nam diam velit urna adipiscing diam.
            </p>
            <button className="fw-semibold fs_sm  mx-auto  button_btn d-flex align-items-center justify-content-center mt-2">
              Button
            </button>
            <div className="mt-4 pt-md-4">
              <img
                src={heroCenterPosition}
                alt="heroCenterPosition"
                className="w-100 min_h_hero_img"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroCenterPosition
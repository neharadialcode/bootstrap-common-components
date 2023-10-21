import React from 'react'
import heroCenterPosition from "../../assetsFolder/images/png/center_position_img.png"
import HeaderRightAlign from "../headersection/HeaderRightAlign"
const HeroCenterPosition = () => {
  return (
    <>
      <div>
        <HeaderRightAlign />
        <div className=" d-flex hero_custom_height align-items-center">
          <div className=" container mt-4">
            <h1 className=" text-center mb-4 font_md ff_poppins text_linear_gradient fw-semibold">
              Hero Center Position
            </h1>
            <h2 className=" text-center fw-semibold font_md ff_poppins  mx-auto">
              Lorem ipsum Lorem ipsum
            </h2>
            <p className=" ff_poppins fw-normal font-sm  mx-auto pt-2 max_w_hero_par mx-auto text-center">
              Lorem ipsum dolor sit amet consectetur. Semper vitae nullam eget
              consectetur mi. Vulputate sapien a a bibendum suspendisse quam.
              Hac posuere eget nam diam velit urna adipiscing diam.
            </p>
            <button className="ff_poppins fw-normal font-sm  mx-auto  button_btn d-flex align-items-center justify-content-center">
              Button
            </button>
            <div className=" mt-5 pt-4">
              <img
                src={heroCenterPosition}
                alt="heroCenterPosition"
                className=" w-100 min_h_hero_img"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroCenterPosition
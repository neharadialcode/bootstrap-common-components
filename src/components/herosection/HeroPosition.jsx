import React from 'react'
import leftImagLeft from "../../assetsFolder/images/png/hero_left_img.png";
import leftImagRight from "../../assetsFolder/images/png/hero_right _img.png";
import leftImagRightBottom from "../../assetsFolder/images/png/hero_right _bottom_img.png";
import leftImagLeftBottom from "../../assetsFolder/images/png/hero_left_bottom_img.png";
import HeaderRightAlign from "../headersection/HeaderRightAlign";

const HeroPosition = () => {
  return (
    <>
      <div className=" overflow-hidden">
        <HeaderRightAlign />
        <div className="d-flex align-items-center justify-content-center  hero_custom_height position-relative">
          <img
            src={leftImagLeft}
            alt="leftImag"
            className=" position-absolute start-0 top-0 max_w_position_hero_img"
          />
          <img
            src={leftImagRight}
            alt="leftImagRight"
            className=" position-absolute end-0 top-0 max_w_position_hero_img"
          />
          <img
            src={leftImagRightBottom}
            alt="leftImagRight"
            className=" position-absolute end-0 bottom-0  max_w_position_hero_img"
          />
          <img
            src={leftImagLeftBottom}
            alt="leftImag"
            className=" position-absolute start-0 bottom-0  max_w_position_hero_img"
          />
          <div className=" d-flex align-items-center justify-content-center ">
            <div className=" max_w_Hero_Position text-center">
              <span className="ff_poppins font-md text-black">
                A nice headline
              </span>
              <h1 className=" ff_poppins fw-medium fs_2xl text-black">
                Goes here
              </h1>

              <p className=" ff_poppins fw-normal text_primary fs_sm   mb-0">
                Lorem ipsum dolor sit amet consectetur. Semper vitae nullam eget
                consectetur mi. Vulputate sapien a a bibendum suspendisse quam.
                Hac posuere eget nam diam velit urna adipiscing diam. Dis velit
                nam vitae hendrerit at egestas. Tellus velit turpis at sed lorem
                vitae sed.
              </p>

              <button className="ff_poppins fw-normal fs_sm  mx-auto  button_btn mt-5">
                Button
              </button>
              <button className="ff_poppins fw-normal fs_sm  button_btn mt-5 ms-3 ms-sm-5">
                Button
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroPosition
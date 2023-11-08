import React from 'react'
import leftImagLeft from "../../assetsFolder/images/png/hero_left_img.png";
import leftImagRight from "../../assetsFolder/images/png/hero_right _img.png";
import leftImagRightBottom from "../../assetsFolder/images/png/hero_right _bottom_img.png";
import leftImagLeftBottom from "../../assetsFolder/images/png/hero_left_bottom_img.png";
import Headercenter from "../headersection/Headercenter";

const HeroPosition = () => {
  return (
    <>
      <div className=" overflow-hidden">
        <Headercenter />
        <div className="d-flex align-items-center justify-content-center  hero_custom_height position-relative z-1">
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
              <p className=" fs_xl text-black mb-0">A nice headline</p>
              <h1 className=" fw-semibold fs_3xl lh_mainHeading text-black">
                Goes here
              </h1>
              <p className="text_primary lh_All_pra fs_sm mb-0">
                Lorem ipsum dolor sit amet consectetur. Semper vitae nullam eget
                consectetur mi. Vulputate sapien a a bibendum suspendisse quam.
                Hac posuere eget nam diam velit urna adipiscing diam. Dis velit
                nam vitae hendrerit at egestas. Tellus velit turpis at sed lorem
                vitae sed.
              </p>
              <div className=" pt-2">
                <button className=" fw-semibold fs_sm mx-auto button_btn mt-4">
                  Button
                </button>
                <button className=" fw-semibold fs_sm button_btn mt-4 ms-3">Button</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroPosition
import React from "react";
import heroCenterPosition from "../../assetsFolder/images/png/center_position_img.png";
import HeaderCenterAlign from "../headersection/HeaderCenterAlign";
const HeroCenterPosition = () => {
  return (
    <>
      <div className="min_vh_custom mb-4 d-flex flex-column">
        <HeaderCenterAlign />
        <div className=" d-flex align-items-center flex-grow-1 justify-content-center align-items-center my-4 my-xl-0 ">
          <div className="  custom_container">
            <h1 className=" text-center fw-bold fs_3xl lh_mainHeading mx-auto mt-sm-5 mt-xxl-0">
              Lorem ipsum Lorem ipsum
            </h1>
            <p className="fw-normal fs_sm lh_All_par mx-auto pt-2 max_w_hero_par mx-auto text-center">
              Lorem ipsum dolor sit amet consectetur. Semper vitae nullam eget
              consectetur mi. Vulputate sapien a a bibendum suspendisse quam.
              Hac posuere eget nam diam velit urna adipiscing diam.
            </p>
            <button className=" fw-semibold fs_sm  mx-auto  button_btn d-flex align-items-center justify-content-center mt-2">
              Button
            </button>
            <div className="mt-4 pt-xl-4 text-center">
              <img
                src={heroCenterPosition}
                alt="heroCenterPosition"
                className="w-100"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default HeroCenterPosition;

import React from "react";
import Headercenter from "../headersection/Headercenter"
const HeroCenter = () => {
  return (
    <>
      <div>
        <Headercenter />
        <div className=" hero_center d-flex ali min-vh100 hero_custom_height align-items-center justify-content-center">
          <div className=" container ">
            <div className=" text-center">
              <h1 className=" text-center fw-bold fs_3xl lh_mainHeading mx-auto">
                Lorem ipsum Lorem ipsum
              </h1>
              <p className=" fw-normal fs_sm  mx-auto pt-2 max_w_hero_par mx-auto lh_All_par">
                Lorem ipsum dolor sit amet consectetur. Semper vitae nullam eget
                consectetur mi. Vulputate sapien a a bibendum suspendisse quam.
                Hac posuere eget nam diam velit urna adipiscing diam.
              </p>
              <button className=" fw-semibold fs_sm  mx-auto  button_btn mt-3">
                Button
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroCenter;

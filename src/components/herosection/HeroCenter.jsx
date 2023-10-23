import React from "react";
import Headercenter from "../headersection/Headercenter"
const HeroCenter = () => {
  return (
    <>
      {/* <span className=" text-center font-xl d-flex justify-content-center ff_poppins text_linear_gradient fw-semibold">
        Hero Center
      </span> */}
      <div>
        <Headercenter />
        <div className=" hero_center d-flex ali min-vh100 hero_custom_height align-items-center justify-content-center">
          <div className=" container ">
            <div className=" text-center">
         
              <h1 className=" text-center fw-semibold font_md ff_poppins  mx-auto">
                Lorem ipsum Lorem ipsum
              </h1>
              <p className=" ff_poppins fw-normal font-sm  mx-auto pt-2 max_w_hero_par mx-auto">
                Lorem ipsum dolor sit amet consectetur. Semper vitae nullam eget
                consectetur mi. Vulputate sapien a a bibendum suspendisse quam.
                Hac posuere eget nam diam velit urna adipiscing diam.
              </p>
              <button className="ff_poppins fw-normal font-sm  mx-auto  button_btn">
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

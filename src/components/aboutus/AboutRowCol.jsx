import React from "react";
import img from "../../assets/images/png/about_wallpaper.png";
const AboutRowCol = () => {
  return (
    <div>
      <div className="container py-5">
        <div className="d-flex flex-column flex-lg-row align-items-center">
          <div className="col-lg-6 pe-lg-5">
            <img className="w-100" src={img} alt="wallpaper-img" />
          </div>
          <div className="col-lg-6 pe-xl-4 pt-4 pt-lg-0">
            <h2 className="mb-0">Lorem ipsum </h2>
            <p className="py-3 mb-0">
              Lorem ipsum dolor sit amet consectetur. Semper vitae nullam eget
              consectetur mi. Vulputate sapien a a bibendum suspendisse quam.
              Hac posuere eget nam diam velit urna adipiscing diam. Dis velit
              nam vitae hendrerit at egestas.
            </p>
            <p className="pb-3">
              Lorem ipsum dolor sit amet consectetur. Semper vitae nullam eget
              consectetur mi. Vulputate sapien a a bibendum suspendisse quam.
              Hac posuere eget nam diam velit urna adipiscing diam.{" "}
            </p>
            <button className="common_btn">Button</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutRowCol;
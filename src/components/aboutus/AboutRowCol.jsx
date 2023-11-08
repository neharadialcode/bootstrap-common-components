import React from "react";
import img from "../../assets/images/png/about_wallpaper.png";
const AboutRowCol = () => {
  return (
    <>
      <div className="container py-5">
        <div className="d-flex flex-column py-lg-5 flex-lg-row align-items-center">
          <div className="col-lg-6 pe-lg-5">
            <img className="w-100" src={img} alt="wallpaper-img" />
          </div>
          <div className="col-lg-6 pe-xl-4 pt-4 pt-lg-0">
            <h2 className="mb-0">Lorem ipsum </h2>
            <p className="py-3 mb-0 opacity_70">
              Lorem ipsum dolor sit amet consectetur. Semper vitae nullam eget
              consectetur mi. Vulputate sapien a a bibendum suspendisse quam.
              Hac posuere eget nam diam velit urna adipiscing diam. Dis velit
              nam vitae hendrerit at egestas.
            </p>
            <p className="pb-3 opacity_70">
              Lorem ipsum dolor sit amet consectetur. Semper vitae nullam eget
              consectetur mi. Vulputate sapien a a bibendum suspendisse quam.
              Hac posuere eget nam diam velit urna adipiscing diam.
            </p>
            <button className="about_btn">Button</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutRowCol;

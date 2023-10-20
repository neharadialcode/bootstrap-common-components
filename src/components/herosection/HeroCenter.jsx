import React from "react";
import Icon, { Icon1 } from "./Icon";

const HeroCenter = () => {
  return (
    <>
      <section className=" hero_center min-vh-100 d-flex align-items-center justify-content-center">
        <div className=" container ">
          <div className=" text-center">
            <h1 className=" text-center fw-semibold text-white font_md ff_poppins max_width_h1 mx-auto">
              Unveiling The Soul of{" "}
              <span className="text_linear_gradient">
                Every Invention and The Passion
              </span>{" "}
              of Those Behind it.
            </h1>
            <p className=" ff_poppins fw-normal font-sm lh_sm text-white-50 max_width_parTwo mx-auto pt-2">
              Ensuring the tales of your relentless research, eureka moments of
              discovery, and unwavering commitment to patient care neither go
              untold nor unsold
            </p>
            <form className=" mt-4 d-flex justify-content-center align-items-center gap-3">
              <input
                type="Email"
                required
                className=" bg-transparent  ff_poppins fw-normal font-sm lh_sm text-white-50 w-100 py-3 placeholder_input px-3"
                placeholder=" Enter your email here and we'll send you some 'magic'..."
              />
              <button className="common_btu Do_It_Btn  fw-medium font-sm lh_medium ">
                Do It
                <span className=" ms-3">
                  <Icon1 />
                </span>
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroCenter;

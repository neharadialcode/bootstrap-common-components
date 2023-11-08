import * as React from "react";
import { useEffect, useState, useRef } from "react";
import Slider from "react-slick";
import Slider_small_1 from "../../assets/images/png/about_slider_1.png";
import Slider_small_2 from "../../assets/images/png/about_slider_2.png";
import Slider_small_3 from "../../assets/images/png/about_slider_3.png";
import Slider_small_4 from "../../assets/images/png/about_slider_4.png";
import Slider_small_5 from "../../assets/images/png/about_slider_5.png";
import left_arrow from "../../assets/images/png/aboutus_slider_left_arrow.png";
import right_arrow from "../../assets/images/png/aboutus_slider_right_arrow.png";
import { AboutSliderData } from "../common/helper";
const SliderSlick = () => {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  const slider1 = useRef(null);
  const slider2 = useRef(null);
  useEffect(() => {
    setNav1(slider1.current);
    setNav2(slider2.current);
  }, []);
  return (
    <div className="container py-5 px-0">
      <Slider className="mainSlider" asNavFor={nav2} ref={slider1} fade={true}>
        {AboutSliderData.map((SlideData, index) => {
          return (
            <>
              <div
                className="align-items-center d-flex flex-wrap pb-4 mb-3"
                key={index}
              >
                <div className="col-lg-6 col-md-8 col-12 pe-lg-5 pb-lg-0 mb-lg-0 pb-4 mb-3">
                  <img
                    className="w-100 about_big_sliders"
                    src={SlideData.image}
                    alt="Slider-img"
                  />
                </div>
                <div className="col-lg-6 col-12 pe-lg-5">
                  <h2 className="fs_2xl fw-semibold">{SlideData.heading}</h2>
                  <p className="fs_sm">{SlideData.para1}</p>
                  <p className="fs_sm">{SlideData.para2}</p>
                  <button className="button_btn">{SlideData.Button}</button>
                </div>
              </div>
            </>
          );
        })}
      </Slider>
      <div className="position-relative">
        <div
          onClick={() => slider2.current?.slickNext()}
          className="position-absolute about_left_arrow d-xl-block d-none"
        >
          <img height={38} width={40} src={left_arrow} alt="arrow" />
        </div>
        <Slider
          className="aboutus_bottom_slider mx-auto"
          asNavFor={nav1}
          ref={slider2}
          slidesToShow={5}
          swipeToSlide={true}
          focusOnSelect={true}
          autoplay={true}
          autoplaySpeed={2000}
          responsive={[
            {
              breakpoint: 1124,
              settings: {
                slidesToShow: 4,
              },
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 3,
              },
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2,
              },
            },
          ]}
        >
          <div>
            <img
              className="w-100"
              height={162}
              src={Slider_small_1}
              alt="Slider-img"
            />
          </div>
          <div>
            <img
              className="w-100"
              height={162}
              src={Slider_small_2}
              alt="Slider-img"
            />
          </div>
          <div>
            <img
              className="w-100"
              height={162}
              src={Slider_small_3}
              alt="Slider-img"
            />
          </div>
          <div>
            <img
              className="w-100"
              height={162}
              src={Slider_small_4}
              alt="Slider-img"
            />
          </div>
          <div>
            <img
              className="w-100"
              height={162}
              src={Slider_small_5}
              alt="Slider-img"
            />
          </div>
          <div>
            <img
              className="w-100"
              height={162}
              src={Slider_small_3}
              alt="Slider-img"
            />
          </div>
        </Slider>
        <div
          onClick={() => slider2.current?.slickPrev()}
          className="position-absolute about_right_arrow d-xl-block d-none"
        >
          <img height={38} width={40} src={right_arrow} alt="arrow" />
        </div>
      </div>
    </div>
  );
};

export default SliderSlick;

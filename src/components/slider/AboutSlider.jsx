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
import { AboutSliderData } from "../common/Helper";
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
    <div className="container py-5">
      <Slider className="mainSlider" asNavFor={nav2} arrows={false} ref={slider1} fade={true}>
        {AboutSliderData.map((SlideData, index) => {
          return (
            <>
              <div
                className="align-items-center justify-content-center d-flex flex-wrap"
                key={index}
              >
                <div className="col-lg-6 col-md-10 pe-lg-5 pb-lg-0 mb-lg-0 pb-4 mb-lg-3">
                  <img
                    className="w-100 about_big_sliders"
                    src={SlideData.image}
                    alt="Slider-img"
                  />
                </div>
                <div className="col-lg-6 pe-lg-5">
                  <h2 className="fs_2xl fw-semibold about_heading">
                    {SlideData.heading}
                  </h2>
                  <p className="fs_sm">{SlideData.para1}</p>
                  <p className="fs_sm">{SlideData.para2}</p>
                  <button className="about_btn">Button</button>
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
          className="aboutUs_bottom_slider mx-auto"
          asNavFor={nav1}
          ref={slider2}
          arrows={false}
          slidesToShow={5}
          swipeToSlide={true}
          focusOnSelect={true}
          autoplay={false}
          autoplaySpeed={2000}
          responsive={[
            {
              breakpoint: 1124,
              settings: {
                slidesToShow: 4,
                dots: true,
              },
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 3,
                dots: true,
              },
            },
            {
              breakpoint: 480,

              settings: {
                slidesToShow: 2,
                dots: true,
              },
            },
          ]}
        >
          <div className="py-4 small_slider_img">
            <img
              className="w-100 rounded-3 object-fit-cover"
              
              src={Slider_small_1}
              alt="Slider-img"
            />
          </div>
          <div className="py-4">
            <img
              className="w-100 rounded-3 object-fit-cover"
              
              src={Slider_small_2}
              alt="Slider-img"
            />
          </div>
          <div className="py-4">
            <img
              className="w-100 rounded-3 object-fit-cover"
              
              src={Slider_small_3}
              alt="Slider-img"
            />
          </div>
          <div className="py-4">
            <img
              className="w-100 rounded-3 object-fit-cover"
              
              src={Slider_small_4}
              alt="Slider-img"
            />
          </div>
          <div className="py-4">
            <img
              className="w-100 rounded-3 object-fit-cover"
           
              src={Slider_small_5}
              alt="Slider-img"
            />
          </div>
          <div className="py-4">
            <img
              className="w-100 rounded-3 object-fit-cover"
              
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

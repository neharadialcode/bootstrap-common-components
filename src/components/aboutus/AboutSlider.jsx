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
    <div className="container">
      <div className="row pb-4 mb-3 align-items-center">
        <div className="col-6 pe-5">
          <Slider className="mainSlider" asNavFor={nav2} ref={slider1}>
            <div>
              <img
                className="w-100 about_big_sliders"
                src={Slider_small_1}
                alt="Slider-img"
              />
            </div>
            <div>
              <img
                className="w-100 about_big_sliders"
                src={Slider_small_2}
                alt="Slider-img"
              />
            </div>
            <div>
              <img
                className="w-100 about_big_sliders"
                src={Slider_small_3}
                alt="Slider-img"
              />
            </div>
            <div>
              <img
                className="w-100 about_big_sliders"
                src={Slider_small_4}
                alt="Slider-img"
              />
            </div>
            <div>
              <img
                className="w-100 about_big_sliders"
                src={Slider_small_5}
                alt="Slider-img"
              />
            </div>
          </Slider>
        </div>
        <div className="col-6 pe-5">
          <h2 className="fs_2xl fw-semibold">Lorem ipsum </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur. Semper vitae nullam eget
            consectetur mi. Vulputate sapien a a bibendum suspendisse quam. Hac
            posuere eget nam diam velit urna adipiscing diam. Dis velit nam
            vitae hendrerit at egestas.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur. Semper vitae nullam eget
            consectetur mi. Vulputate sapien a a bibendum suspendisse quam. Hac
            posuere eget nam diam velit urna adipiscing diam. Dis velit nam
            vitae hendrerit at egestas. Tellus velit turpis at sed lorem vitae
            sed. Proin urna ornare dolor mauris convallis varius nunc.
          </p>
          <button className="button_btn">Button</button>
        </div>
      </div>
      <div className="position-relative">
        <div
          onClick={() => slider2.current?.slickNext()}
          className="position-absolute about_left_arrow"
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
          className="position-absolute about_right_arrow"
        >
          <img height={38} width={40} src={right_arrow} alt="arrow" />
        </div>
      </div>
    </div>
  );
};

export default SliderSlick;

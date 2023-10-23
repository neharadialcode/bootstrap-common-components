import React from "react";
import Slider from "react-slick";
import slider_big from "../../assets/images/png/Slider_big_img.png";
const AboutSlider = () => {
  const slider1 = React.createRef(); // Create a ref for Slider 1
  const slider2 = React.createRef(); // Create a ref for Slider 2
  const slider1Settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    asNavFor: slider2,
  };

  const slider2Settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    asNavFor: slider1,
  };

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-6">
          <Slider {...slider1Settings} ref={slider1}>
            <div>
              <img src={slider_big} alt="nature-img" />
            </div>
          </Slider>
        </div>
        <div className="col-6">
          <h2>Lorem ipsum </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur. Semper vitae nullam eget
            consectetur mi. Vulputate sapien a a bibendum suspendisse quam. Hac
            posuere eget nam diam velit urna adipiscing diam. Dis velit nam
            vitae hendrerit at egestas.{" "}
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur. Semper vitae nullam eget
            consectetur mi. Vulputate sapien a a bibendum suspendisse quam. Hac
            posuere eget nam diam velit urna adipiscing diam. Dis velit nam
            vitae hendrerit at egestas. Tellus velit turpis at sed lorem vitae
            sed. Proin urna ornare dolor mauris convallis varius nunc.
          </p>
          <button>Button</button>
        </div>
      </div>
      <div>
        <Slider {...slider2Settings} ref={slider2}>
          <div>
            <h3>Slider 1 Synced</h3>
          </div>
          <div>
            <h3>Slider 2 Synced</h3>
          </div>
          <div>
            <h3>Slider 2 Synced</h3>
          </div>
          <div>
            <h3>Slider 2 Synced</h3>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default AboutSlider;

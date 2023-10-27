import React from 'react'
import numberOne from "../../assetsFolder/images/png/number1.png";
import numaberTwo from "../../assetsFolder/images/png/numberTwo.png";
import numaberThree from "../../assetsFolder/images/png/numberThree.png";
import numberFour from "../../assetsFolder/images/png/numberFour.png";
import numaberMdTwo from "../../assetsFolder/images/png/numberMdTwo.png"
import numberMdFour from "../../assetsFolder/images/png/numberMdFour.png";
const RoadMapOne = () => {
  return (
    <div className=" py-5">
      <div className=" container">
        <div className=" text-center mb-5">
          <h2 className="fw-semibold fs_2xl ff_poppins">Road Map</h2>
          <p className=" fs_sm ff_poppins text-black opacity_70">
            Lorem ipsum dolor sit amet consectetur. Velit pulvinar libero
            porttitor quam sed aliquet. Sodales vulputate elementum arcu donec.
            Feugiat nibh ullamcorper egestas lectus risus ornare ullamcorper
            fames. Cursus libero nec facilisis
          </p>
        </div>
        <div className="center_line"></div>
        <div className=" row position-relative">
          {/* ================NUMBER ONE IMG AND TAXT==================== */}
          <div className=" w-100 d-flex justify-content-end">
            <div className=" col-8 col-lg-6 ">
              <img
                src={numberOne}
                alt="numberOne"
                height={71}
                width={156}
                className=" position-absolute numberOne_img_Setup"
              />
              <div className=" ms-lg-4">
                <h4>Inception and prepration</h4>
                <p className=" text-black opacity_70 fs_sm">
                  Lorem ipsum dolor sit amet consectetur. Velit pulvinar libero
                  porttitor quam sed aliquet. Sodales vulputate elementum arcu
                  donec. Feugiat nibh ullamcorper egestas lectus risus ornare
                  ullamcorper fames. Cursus libero nec facilisis risus malesuada
                  arcu cum. Gravida massa scelerisque sociis nulla diam nisl
                  ligula.bh{" "}
                </p>
              </div>
            </div>
          </div>
          {/* ================NUMBER TWO IMG AND TAXT==================== */}
          <div className=" w-100 d-flex justify-content-end justify-content-lg-start">
            <div className=" col-8 col-lg-6 mt-3 mt-lg-5">
              <img
                src={numaberTwo}
                alt="numaberTwo"
                height={71}
                width={156}
                className=" position-absolute numberTwo_img_setup d-none d-lg-inline-block"
              />
              <img
                src={numaberMdTwo}
                alt="numaberMdTwo"
                height={71}
                width={156}
                className=" position-absolute numberTwo_img_setup  d-lg-inline-block"
              />
              <div className=" text-lg-end me-lg-4 me-xl-5">
                <h4>Inception and prepration</h4>
                <p className="RoadMa p_par text-black opacity_70 fs_sm">
                  Lorem ipsum dolor sit amet consectetur. Velit pulvinar libero
                  porttitor quam sed aliquet. Sodales vulputate elementum arcu
                  donec. Feugiat nibh ullamcorper egestas lectus risus ornare
                  ullamcorper fames. Cursus libero nec facilisis risus malesuada
                  arcu cum. Gravida massa scelerisque sociis nulla diam nisl
                  ligula.bh{" "}
                </p>
              </div>
            </div>
          </div>
          {/* ================NUMBER THREE IMG AND TAXT==================== */}
          <div className=" w-100 d-flex justify-content-end">
            <div className="  col-8 col-lg-6 mt-3 mt-lg-5">
              <img
                height={71}
                width={156}
                src={numaberThree}
                alt="numaberThree"
                className="numberThree_img_setup position-absolute"
              />
              <div className=" ms-lg-4">
                <h4>Inception and prepration</h4>
                <p className=" text-black opacity_70 fs_sm">
                  Lorem ipsum dolor sit amet consectetur. Velit pulvinar libero
                  porttitor quam sed aliquet. Sodales vulputate elementum arcu
                  donec. Feugiat nibh ullamcorper egestas lectus risus ornare
                  ullamcorper fames. Cursus libero nec facilisis risus malesuada
                  arcu cum. Gravida massa scelerisque sociis nulla diam nisl
                  ligula.bh{" "}
                </p>
              </div>
            </div>
          </div>
          {/* ================NUMBER FOUR IMG AND TAXT==================== */}
          <div className=" w-100  d-flex justify-content-end justify-content-lg-start">
            <div className="  col-8 col-lg-6 mt-3 mt-lg-5">
              <img
                src={numberFour}
                alt="numberFour"
                height={71}
                width={156}
                className=" position-absolute numberfour_img_setup d-none"
              />
              <img
                src={numberMdFour}
                alt="numberMdFour"
                height={71}
                width={156}
                className=" position-absolute numberfour_img_setup"
              />
              <div className=" me-lg-4 me-xl-5 text-lg-end">
                <h4>Product and development</h4>
                <p className=" text-black opacity_70 fs_sm">
                  Lorem ipsum dolor sit amet consectetur. Velit pulvinar libero
                  porttitor quam sed aliquet. Sodales vulputate elementum arcu
                  donec. Feugiat nibh ullamcorper egestas lectus risus ornare
                  ullamcorper fames. Cursus libero nec facilisis risus malesuada
                  arcu cum. Gravida massa scelerisque sociis nulla diam nisl
                  ligula.bh{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="max_w_RoadMap position-relative min-vh-100 mx-auto d-none">
          <div className="center_line">
            <div className="  ms-4 text-end">
              <h4>Product and development</h4>
              <p className="  text-black opacity_70 fs_sm">
                Lorem ipsum dolor sit amet consectetur. Velit pulvinar libero
                porttitor quam sed aliquet. Sodales vulputate elementum arcu
                donec. Feugiat nibh ullamcorper egestas lectus risus ornare
                ullamcorper fames. Cursus libero nec facilisis risus malesuada
                arcu cum. Gravida massa scelerisque sociis nulla diam nisl
                ligula.bh{" "}
              </p>
            </div>
            {/* ================NUMBER THREE IMG AND TAXT==================== */}
            <img
              height={71}
              width={156}
              src={numaberThree}
              alt="numaberThree"
              className="numberThree_img_setup position-absolute"
            />
            <div className=" position-absolute roadMap_numberThree_Setup">
              <h4>Inception and prepration</h4>
              <p className="RoadMap_par text-black opacity_70 fs_sm">
                Lorem ipsum dolor sit amet consectetur. Velit pulvinar libero
                porttitor quam sed aliquet. Sodales vulputate elementum arcu
                donec. Feugiat nibh ullamcorper egestas lectus risus ornare
                ullamcorper fames. Cursus libero nec facilisis risus malesuada
                arcu cum. Gravida massa scelerisque sociis nulla diam nisl
                ligula.bh{" "}
              </p>
            </div>
            {/* ================NUMBER THREE IMG AND TAXT==================== */}
            <img
              src={numberFour}
              alt="numberFour"
              height={71}
              width={156}
              className=" position-absolute numberfour_img_setup"
            />
            <div className=" position-absolute roadMap_numberFour_Setup  text-end">
              <h4>Product and development</h4>
              <p className="RoadMap_par text-black opacity_70 fs_sm">
                Lorem ipsum dolor sit amet consectetur. Velit pulvinar libero
                porttitor quam sed aliquet. Sodales vulputate elementum arcu
                donec. Feugiat nibh ullamcorper egestas lectus risus ornare
                ullamcorper fames. Cursus libero nec facilisis risus malesuada
                arcu cum. Gravida massa scelerisque sociis nulla diam nisl
                ligula.bh{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RoadMapOne
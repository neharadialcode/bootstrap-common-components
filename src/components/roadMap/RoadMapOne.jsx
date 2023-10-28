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

        <div className=" row position-relative center_line">
          {/* ================NUMBER ONE IMG AND TAXT==================== */}

          <div className=" col-6 text-end p-0 mt-4">
            <img
              src={numberOne}
              alt="numberOne"
              height={71}
              width={156}
              className="rodMap_img_w_h"
            />
          </div>
          <div className="col-6 ps-5">
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

          {/* ================NUMBER TWO IMG AND TAXT==================== */}
          <div className=" col-6 text-end pe-5">
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
          <div className="col-6 p-0 mt-4">
            <img
              src={numaberTwo}
              alt="numaberTwo"
              height={71}
              width={156}
              className=" "
            />
            {/* <img
              src={numaberMdTwo}
              alt="numaberMdTwo"
              height={71}
              width={156}
              className="rodMap_img_w_h  "
            /> */}
          </div>

          {/* ================NUMBER THREE IMG AND TAXT==================== */}
          <div className=" col-6 text-end p-0 mt-4">
            <img
              height={71}
              width={156}
              src={numaberThree}
              alt="numaberThree"
              className=" rodMap_img_w_h"
            />
          </div>
          <div className="col-6 ps-5">
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

          {/* ================NUMBER FOUR IMG AND TAXT==================== */}
          <div className="col-6 text-end pe-5">
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
          <div className=" col-6 p-0 mt-4">
            <img
              src={numberFour}
              alt="numberFour"
              height={71}
              width={156}
              className=" "
            />
            {/* <img
              src={numberMdFour}
              alt="numberMdFour"
              height={71}
              width={156}
              className=""
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RoadMapOne
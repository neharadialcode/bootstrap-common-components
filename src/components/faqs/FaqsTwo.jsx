import React from "react";
import Accordion from "react-bootstrap/Accordion";
import lowPoly from "../../assetsFolder/images/png/low poly.png";
const FaqsTwo = () => {
  return (
    <div div className="my-5 py-5">
      <div className="container">
        <div className="row align-items-center flex-column-reverse flex-lg-row">
          <div className="col-lg-6 mt-5 mt-lg-0">
            <h1 className="ff_poppins fw-medium">FAQ's </h1>
            <p className="fs-5 mt-2">
              Lorem ipsum dolor sit amet consectetur. Velit pulvinar libero
              porttitor quam sed aliquet. Sodales vulputate elementum arcu
              donec. Feugiat nibh ullamcorper egestas
            </p>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  1. What is a cryptocurrency token?
                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet consectetur. Velit pulvinar libero
                  porttitor quam sed aliquet. Sodales vulputate elementum arcu
                  donec. Feugiat nibh ullamcorper egestas
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1" className="mt-3">
                <Accordion.Header>
                  2. How can I buy cryptocurrency tokens?
                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet consectetur. Velit pulvinar libero
                  porttitor quam sed aliquet. Sodales vulputate elementum arcu
                  donec. Feugiat nibh ullamcorper egestas
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2" className="mt-3">
                <Accordion.Header>
                  3. What is a token wallet, why do I need one?
                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet consectetur. Velit pulvinar libero
                  porttitor quam sed aliquet. Sodales vulputate elementum arcu
                  donec. Feugiat nibh ullamcorper egestas
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3" className="mt-3">
                <Accordion.Header>
                  4. Are cryptocurrency tokens secure?
                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet consectetur. Velit pulvinar libero
                  porttitor quam sed aliquet. Sodales vulputate elementum arcu
                  donec. Feugiat nibh ullamcorper egestas
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
          <div className="col-md-7 max-auto  col-lg-6">
            <img src={lowPoly} alt="lowPoly" className="w-100" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqsTwo;

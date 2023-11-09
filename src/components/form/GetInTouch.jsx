import React from "react";
import { Container } from "react-bootstrap";

const GetInTouch = () => {
  return (
    <>
      <div className="touch_bg">
        <Container>
          <div className=" d-flex justify-content-center align-items-center flex-column h-100">
            <p className="text-white fw-semibold fs_xl text-center mb-3">
              Get In Touch
            </p>
            <p className="text-white fw-normal lh-1 fs_md text-center mb-4">
              Call us on 555-555-5555 or contact us for your free quote.
            </p>
            <button className="touch_btn bg-transparent text-white fw-normal fs_sm d-flex justify-content-center align-items-center">
              Contact us
            </button>
          </div>
        </Container>
      </div>
    </>
  );
};

export default GetInTouch;

import React from 'react'
import Accordion from "react-bootstrap/Accordion";  
const FaqsOne = () => {
  return (
    <>
      <div className=" container mt-5">
        <h1 className=" ff_poppins fw-medium text-center">FAQ's </h1>
        <p className=" text-center fs-5 mt-2">
          Lorem ipsum dolor sit amet consectetur. Semper vitae nullam eget
          consectetur mi. Vulputate sapien a a bibendum suspendisse quam. Hac
          posuere eget nam diam velit urna adipiscing diam.{" "}
        </p>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              1. <span> What is a cryptocurrency token?</span>
            </Accordion.Header>
            <Accordion.Body className="">
              Lorem ipsum dolor sit amet consectetur. Velit pulvinar libero
              porttitor quam sed aliquet. Sodales vulputate elementum arcu
              donec. Feugiat nibh ullamcorper egestas lectus risus ornare
              ullamcorper fames. Cursus libero nec facilisis risus malesuada
              arcu cum. Gravida massa scelerisque sociis nulla diam nisl
              ligula.bh
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" className=" mt-3">
            <Accordion.Header>
              2. <span> How can I buy cryptocurrency tokens?</span>
            </Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" className=" mt-3">
            <Accordion.Header>
              3. <span>How can I buy cryptocurrency tokens?</span>
            </Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3" className=" mt-3">
            <Accordion.Header>
              4. <span>How can I buy cryptocurrency tokens?</span>
            </Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </>
  );
}

export default FaqsOne
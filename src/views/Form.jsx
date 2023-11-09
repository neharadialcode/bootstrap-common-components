import React from "react";
import FullForm from "../components/form/FullForm";
import SideForm from "../components/form/SideForm";
import CenterForm from "../components/form/CenterForm";
import GetInTouch from "../components/form/GetInTouch";

const Form = () => {
  return (
    <>
      <div className="mb-5 text-center pb-5 pt-5 min-vh-100 d-flex flex-column justify-content-center">
        <FullForm />
      </div>
      <div className="min-vh-100 d-flex flex-column justify-content-center">
        <SideForm />
      </div>
      <div className="min-vh-100 d-flex flex-column justify-content-center">
        <CenterForm />
      </div>
      <div className="min-vh-100 d-flex flex-column justify-content-center">
        <GetInTouch />
      </div>
    </>
  );
};

export default Form;

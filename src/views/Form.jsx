import React from "react";
import FullForm from "../components/form/FullForm";
import SideForm from "../components/form/SideForm";
import CenterForm from "../components/form/CenterForm";

const Form = () => {
  return (
    <>
      <div className="mb-5 text-center pb-5 pt-5 vh-100 d-flex flex-column justify-content-center">
        <h1 className="mb-5 pt-5">Full form</h1>
        <FullForm />
        <h2 className="text-center mt-5 pt-5 d-md-block d-none">
          Side form⬇⬇⬇
        </h2>
      </div>
      <div className="vh-100 d-flex flex-column justify-content-center">
        <h2 className="text-center mb-5 pb-5 pt-5">Side Form</h2>
        <SideForm />
      </div>
      <div className="vh-100 d-flex flex-column justify-content-center">
        <h2 className="text-center pt-5">Center Form</h2>
        <CenterForm />
      </div>
    </>
  );
};

export default Form;

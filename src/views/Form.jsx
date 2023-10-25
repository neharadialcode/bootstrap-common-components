import React from "react";
import FullForm from "../components/form/FullForm";
import SideForm from "../components/form/SideForm";

const Form = () => {
  return (
    <>
      <div className="mb-5 text-center pb-5 pt-5 vh-100 d-flex flex-column justify-content-center">
        <h1 className="mb-5">Full form</h1>
        <FullForm />
        <h2 className="text-center mt-5">Side form⬇⬇⬇</h2>
      </div>
      <div className="vh-100 d-flex flex-column justify-content-center">
        <h2 className="text-center mb-5">Side Form</h2>
        <SideForm />
      </div>
    </>
  );
};

export default Form;

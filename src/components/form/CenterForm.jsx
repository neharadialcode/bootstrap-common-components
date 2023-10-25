import React, { useState } from "react";
const CenterForm = () => {
  const [typicalform, setTypicalForm] = useState({
    name: "",
    email: "",
    message: "",
    number: "",
  });
  const [error, setError] = useState(false);
  const regex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const OnsubmitHandler = (e) => {
    e.preventDefault();
    setError(true);
    if (
      typicalform.name !== "" &&
      typicalform.email !== "" &&
      typicalform.message !== "" &&
      typicalform.number !== "" &&
      regex.test(typicalform.email)
    ) {
      setError(false);
      setTypicalForm({
        name: "",
        email: "",
        message: "",
        number: "",
      });
    }
  };
  return (
    <>
      <div className="vh-100 d-flex align-items-center">
        <div className="container">
          <p className="text-black text-center fs_2xl fw-medium lh-1 mb-5">
            Love to hear from you, <br /> Get in touch
          </p>
          <form
            onSubmit={(e) => OnsubmitHandler(e)}
            className="row align-items-center"
          >
            <div className="col-sm-6 col-12 d-flex flex-column align-items-end justify-content-center mb-sm-0 mb-2 pb-sm-0 pb-2">
              <input
                type="text"
                placeholder="Your name"
                className="centerFormInput w-100 InputWidthHeight"
                onChange={(e) =>
                  setTypicalForm({ ...typicalform, name: e.target.value })
                }
                value={typicalform.name}
              />
              <p className="requiredHeight mb-2">
                {error && typicalform.name === "" ? (
                  <p className="font-medium text-danger mb-0">Name is required</p>
                ) : (
                  typicalform !== ""
                )}
              </p>
            </div>
            <div className="col-sm-6 col-12">
              <input
                type="email"
                placeholder="Email"
                className="centerFormInput w-100 InputWidthHeight"
              />
            </div>
            <div className="col-12 d-flex justify-content-center">
              <textarea
                placeholder="Message"
                className="centerFormInput w-100 pt-2 centerTextarea"
              />
            </div>
            <div className="col-12 d-flex justify-content-center pt-2">
              <div className="d-flex justify-content-center mt-2 centerInputBox">
                <input
                  type="number"
                  placeholder="2990-8928-78"
                  className="centerFormInput w-100 centerInputNumber border-0"
                />
                <button className="centerFormBtn d-flex justify-content-center align-items-center text-white fs_sm fw-bold   bg_purple border-0">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CenterForm;

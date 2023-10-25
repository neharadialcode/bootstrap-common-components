import React, { useState } from "react";
const CenterForm = () => {
  const [typicalForm, setTypicalForm] = useState({
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
      typicalForm.name !== "" &&
      typicalForm.email !== "" &&
      typicalForm.message !== "" &&
      typicalForm.number !== "" &&
      regex.test(typicalForm.email)
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
        <div className="container centerFormContainer">
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
                className="centerFormInput w-100 InputWidthHeight focusNone"
                onChange={(e) =>
                  setTypicalForm({ ...typicalForm, name: e.target.value })
                }
                value={typicalForm.name}
              />
              <p className="requiredHeight mb-2">
                {error && typicalForm.name === "" ? (
                  <p className="font-medium text-danger mb-0">
                    Name is required
                  </p>
                ) : (
                  typicalForm !== ""
                )}
              </p>
            </div>
            <div className="col-sm-6 col-12">
              <input
                type="email"
                placeholder="Email"
                className="centerFormInput w-100 InputWidthHeight focusNone"
                onChange={(e) =>
                  setTypicalForm({
                    ...typicalForm,
                    email: e.target.value,
                  })
                }
                value={typicalForm.email}
              />
              <p className="requiredHeight mb-2 text-danger font-medium text-end">
                {error && typicalForm.email === "" ? (
                  "Email is required"
                ) : error && regex.test(typicalForm.email) === false ? (
                  <p className="text-danger font-medium">Email Not Valid</p>
                ) : (
                  ""
                )}
              </p>
            </div>
            <div className="col-12 d-flex flex-column justify-content-center align-items-end">
              <textarea
                placeholder="Message"
                className="centerFormInput w-100 pt-2 centerTextarea focusNone"
                onChange={(e) =>
                  setTypicalForm({ ...typicalForm, message: e.target.value })
                }
                value={typicalForm.message}
              />
              <p className="requiredHeight mb-1 text-danger font-medium text-end">
                {error && typicalForm.message === "" ? (
                  <p className="text-danger font-medium">Text is required</p>
                ) : (
                  typicalForm !== ""
                )}
              </p>
            </div>
            <div className="col-12 d-flex flex-column justify-content-center">
              <div className="d-flex justify-content-center mt-2 centerInputBox">
                <input
                  type="number"
                  placeholder="2990-8928-78"
                  className="centerFormInput w-100 centerInputNumber border-0 focusNone"
                  onChange={(e) =>
                    setTypicalForm({ ...typicalForm, number: e.target.value })
                  }
                  value={typicalForm.number}
                />
                <button className="centerFormBtn d-flex justify-content-center align-items-center text-white fs_sm fw-bold   bg_purple buttonHover">
                  Submit
                </button>
              </div>
              <p className="requiredHeight mb-2 text-danger font-medium text-end">
                {error && typicalForm.number === "" ? (
                  <p className="text-danger font-medium">Number is required</p>
                ) : (
                  typicalForm !== ""
                )}
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CenterForm;

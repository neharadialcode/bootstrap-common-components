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
        <div className="container center_form_input">
          <p className="text-black text-center fs_2xl fw-medium lh-1 mb-5">
            Love to hear from you, <br className=" d-sm-block d-none" /> Get in
            touch
          </p>
          <form
            onSubmit={(e) => OnsubmitHandler(e)}
            className="row align-items-center"
          >
            <div className="col-sm-6 col-12 d-flex flex-column align-items-end justify-content-center mb-sm-0 mb-2 pb-sm-0 pb-2">
              <input
                type="text"
                placeholder="Your name"
                className="center_form_input w-100 input_width_height focus_none"
                onChange={(e) =>
                  setTypicalForm({ ...typicalForm, name: e.target.value })
                }
                value={typicalForm.name}
              />
              <p className="required_height mb-2">
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
                className="center_form_input w-100 input_width_height focus_none"
                onChange={(e) =>
                  setTypicalForm({
                    ...typicalForm,
                    email: e.target.value,
                  })
                }
                value={typicalForm.email}
              />
              <p className="required_height mb-2 text-danger font-medium text-end">
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
                className="center_form_input w-100 pt-2 center_textarea focus_none"
                onChange={(e) =>
                  setTypicalForm({ ...typicalForm, message: e.target.value })
                }
                value={typicalForm.message}
              />
              <p className="required_height mb-1 text-danger font-medium text-end">
                {error && typicalForm.message === "" ? (
                  <p className="text-danger font-medium">Text is required</p>
                ) : (
                  typicalForm !== ""
                )}
              </p>
            </div>
            <div className="col-12 d-flex flex-column justify-content-center">
              <div className="d-flex justify-content-center mt-2 center_input_box">
                <input
                  type="number"
                  placeholder="2990-8928-78"
                  className="center_form_input w-100 center_input_number border-0 focus_none"
                  onChange={(e) =>
                    setTypicalForm({ ...typicalForm, number: e.target.value })
                  }
                  value={typicalForm.number}
                />
                <button className="center_form_btn d-flex justify-content-center align-items-center text-white fs_sm fw-bold   bg_purple button_hover">
                  Submit
                </button>
              </div>
              <p className="required_height mb-2 text-danger font-medium text-end">
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

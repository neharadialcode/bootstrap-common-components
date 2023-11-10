import React, { useState } from "react";

const SideForm = () => {
  const [touchForm, setTouchForm] = useState({
    name: "",
    email: "",
    contact: "",
    message: "",
  });
  const [error, setError] = useState(false);
  const regex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const OnsubmitHandler = (e) => {
    e.preventDefault();
    setError(true);
    if (
      touchForm.name !== "" &&
      touchForm.email !== "" &&
      touchForm.contact !== "" &&
      touchForm.message !== "" &&
      regex.test(touchForm.email)
    ) {
      setError(false);
      setTouchForm({
        name: "",
        email: "",
        contact: "",
        message: "",
      });
    }
  };
  return (
    <>
      <div className="container">
        <div className="row align-items-center flex-lg-row flex-column-reverse">
          <div className="col-lg-6 col-12">
            <form
              onSubmit={(e) => OnsubmitHandler(e)}
              className="side_form flex-column d-flex justify-content-center"
            >
              <div className="w-100">
                <input
                  type="text"
                  className={`side_form_input overflow-hidden fs_sm w-100 ${
                    error && touchForm.name === ""
                      ? "border-danger"
                      : touchForm !== ""
                  }`}
                  placeholder="Name"
                  onChange={(e) =>
                    setTouchForm({ ...touchForm, name: e.target.value })
                  }
                  value={touchForm.name}
                />
              </div>
              <input
                type="text"
                className={`side_form_input overflow-hidden fs_sm ${
                  error && touchForm.email === ""
                    ? "border-danger"
                    : error && regex.test(touchForm.email) === false
                    ? "border-danger"
                    : ""
                }`}
                onChange={(e) =>
                  setTouchForm({ ...touchForm, email: e.target.value })
                }
                value={touchForm.email}
                placeholder="Email address"
              />
              <input
                type="number"
                placeholder="Contact"
                className={`side_form_input overflow-hidden fs_sm w-100 ${
                  error && touchForm.contact === ""
                    ? "border-danger"
                    : touchForm !== ""
                }`}
                onChange={(e) =>
                  setTouchForm({ ...touchForm, contact: e.target.value })
                }
                value={touchForm.contact}
              />
              <textarea
                className={`side_form_input overflow-hidden fs_sm text_area_side overflow-hidden ${
                  error && touchForm.message === ""
                    ? "border-danger"
                    : touchForm !== ""
                }`}
                placeholder="Message"
                onChange={(e) =>
                  setTouchForm({ ...touchForm, message: e.target.value })
                }
                value={touchForm.message}
              />
              <button className="text-white d-flex justify-content-center align-items-center submit_btn bg_purple button_hover mt-3">
                Submit
              </button>
            </form>
          </div>
          <div className="col-lg-6 col-12 d-lg-flex flex-column align-items-center mb-lg-0 mb-5">
            <div>
              <p className="fs_2xl text-black fw-bold mb-lg-3 mb-1">
                Get In Touch
              </p>
              <p className="text-black opacity-75 para_max_width">
                Lorem ipsum dolor sit amet consectetur. Velit pulvinar libero
                porttitor quam sed aliquet. Sodales vulputate elementum arcu
                donec. Feugiat nibh ullamcorper egestas lectus risus ornare
                ullamcorper fames. Cursus libero nec facilisis risus malesuada
                arcu cum.
              </p>
              <button className="text-white d-flex justify-content-center align-items-center touch_btn bg_purple button_hover">
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideForm;

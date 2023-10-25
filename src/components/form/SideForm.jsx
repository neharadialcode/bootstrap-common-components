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
      touchForm.aboutus !== "" &&
      touchForm.workup !== "" &&
      regex.test(touchForm.email)
    ) {
      setError(false);
      setTouchForm({
        name: "",
        email: "",
        aboutus: "",
        workup: "",
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
              className="SideForm flex-column d-flex justify-content-center"
            >
              <div className="w-100">
                <input
                  type="text"
                  className={`sideFormInput overflow-hidden fs_sm w-100 ${
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
                className="sideFormInput overflow-hidden fs_sm"
                placeholder="Email address"
              />
              <input
                type="text"
                className="sideFormInput overflow-hidden fs_sm"
                placeholder="Contact"
              />
              <textarea
                type="text"
                className="sideFormInput overflow-hidden fs_sm TextAreaSide overflow-hidden"
                placeholder="Message"
              />
              <button className="text-white d-flex justify-content-center align-items-center submitBtn bg_purple buttonHover mt-3">
                Submit
              </button>
            </form>
          </div>
          <div className="col-lg-6 col-12 d-lg-flex flex-column align-items-center mb-lg-0 mb-5">
            <div>
              <p className=" fs_2xl text-black fw-bold mb-lg-3 mb-1">
                Get In Touch
              </p>
              <p className="text-black opacity-75 paraMaxWidth">
                Lorem ipsum dolor sit amet consectetur. Velit pulvinar libero
                porttitor quam sed aliquet. Sodales vulputate elementum arcu
                donec. Feugiat nibh ullamcorper egestas lectus risus ornare
                ullamcorper fames. Cursus libero nec facilisis risus malesuada
                arcu cum.
              </p>
              <button className="text-white d-flex justify-content-center align-items-center TouchBtn bg_purple buttonHover">
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

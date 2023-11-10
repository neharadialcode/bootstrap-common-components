import React, { useState } from "react";

const FullForm = () => {
  const [typicalForm, setTypicalForm] = useState({
    name: "",
    email: "",
    project: "",
    budget: "",
    design: "",
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
      typicalForm.project !== "" &&
      typicalForm.budget !== "" &&
      typicalForm.design !== "" &&
      regex.test(typicalForm.email)
    ) {
      setError(false);
      setTypicalForm({
        name: "",
        email: "",
        project: "",
        budget: "",
        design: "",
      });
    }
  };
  return (
    <>
      <form onSubmit={(e) => OnsubmitHandler(e)} className="container">
        <p className="ff_inter fs_2xl heading_max_width fw-medium text-start lh_120 text-black mb-4 pb-2 pt-5">
          Love to hear from you, Get in touch
        </p>
        <div className="row input_bottom_space_sm">
          <div className="col-sm-6 col-12 input_bottom_space mb-sm-0 position-relative">
            <p className="ff_inter fw-medium fs_sm text-black text-start mb-2">
              Your name
            </p>
            <input
              type="text"
              placeholder="Edward SnowDen"
              className="w-100 love_input"
              onChange={(e) =>
                setTypicalForm({ ...typicalForm, name: e.target.value })
              }
              value={typicalForm.name}
            />
            {error && typicalForm.name === "" ? (
              <p className="font-medium position-absolute text-danger ps-1">
                Name is required
              </p>
            ) : (
              typicalForm !== ""
            )}
          </div>
          <div className="col-sm-6 col-12 input_bottom_space mb-sm-0 position-relative mt-1 mt-sm-0">
            <p className="ff_inter fw-medium fs_16 text-black mb-2 text-start">
              Your email
            </p>
            <input
              type="email"
              placeholder="itanexample@gamil.com"
              className="w-100 love_input"
              onChange={(e) =>
                setTypicalForm({
                  ...typicalForm,
                  email: e.target.value,
                })
              }
              value={typicalForm.email}
            />
            <p className="mb-0 text-danger font-medium pointer-events-none position-absolute ps-1">
              {error && typicalForm.email === "" ? (
                "Email is required"
              ) : error && regex.test(typicalForm.email) === false ? (
                <p className="text-danger font-medium">Email Not Valid</p>
              ) : (
                ""
              )}
            </p>
          </div>
        </div>
        {/* input 2 */}
        <div className="row input_bottom_space_sm position-relative">
          <div className="col-sm-6 col-12 input_bottom_space mb-sm-0 position-relative mt-1 mt-sm-0">
            <p className="ff_inter fw-medium  text-black mb-2 text-start">
              What you are interested
            </p>
            <input
              type="text"
              placeholder="Design & Branding"
              className="w-100 love_input"
              onChange={(e) =>
                setTypicalForm({ ...typicalForm, design: e.target.value })
              }
              value={typicalForm.design}
            />
            {error && typicalForm.design === "" ? (
              <p className="text-danger ps-1 position-absolute font-medium">
                Text is required
              </p>
            ) : (
              typicalForm !== ""
            )}
          </div>
          <div className="col-sm-6 col-12 input_bottom_space mb-sm-0 position-relative">
            <p className="ff_inter fw-medium fs_16 text-black mb-2 text-start mt-1 mt-sm-0">
              Project Budget
            </p>
            <input
              type="text"
              placeholder="select your budget"
              className="w-100 love_input"
              onChange={(e) =>
                setTypicalForm({ ...typicalForm, budget: e.target.value })
              }
              value={typicalForm.budget}
            />
            {error && typicalForm.budget === "" ? (
              <p className="text-danger ps-1 position-absolute font-medium">
                Text is required
              </p>
            ) : (
              typicalForm !== ""
            )}
          </div>
        </div>
        {/* textarea */}
        <div className="w-100 input_bottom_space position-relative pb-2">
          <p className="ff_inter fw-medium fs_16 text-black mb-2 text-start mt-1 mt-sm-0">
            Message
          </p>
          <textarea
            type="text"
            placeholder="Let tell us know your project about"
            className="w-100 love_input text_area_height"
            onChange={(e) =>
              setTypicalForm({ ...typicalForm, project: e.target.value })
            }
            value={typicalForm.project}
          />
          {error && typicalForm.project === "" ? (
            <p className="text-danger font-medium position-absolute ps-1">
              Text is required
            </p>
          ) : (
            typicalForm !== ""
          )}
        </div>
        <button className=" text-white fs_sm fw-bold lh_157 bg_purple just_btn d-flex justify-content-center align-items-center mt-4 button_hover">
          Just Send
        </button>
      </form>
    </>
  );
};

export default FullForm;

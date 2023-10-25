import React, { useState } from "react";

const FullForm = () => {
  const [typicalform, setTypicalForm] = useState({
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
      typicalform.name !== "" &&
      typicalform.email !== "" &&
      typicalform.project !== "" &&
      typicalform.budget !== "" &&
      typicalform.design !== "" &&
      regex.test(typicalform.email)
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
        <p className="ff_inter fs_2xl headingMaxWidth fw-medium text-start lh_120 text-black mb-4 pb-2 pt-5">
          Love to hear from you, Get in touch
        </p>
        <div className="row inputBottomSpaceSm">
          <div className=" col-sm-6 col-12 inputBottomSpace mb-sm-0 position-relative">
            <p className=" ff_inter fw-medium fs_sm text-black text-start">
              Your name
            </p>
            <input
              type="text"
              placeholder="Edward Snowden"
              className="w-100 loveInput"
              onChange={(e) =>
                setTypicalForm({ ...typicalform, name: e.target.value })
              }
              value={typicalform.name}
            />
            {error && typicalform.name === "" ? (
              <p className="font-medium position-absolute text-danger ps-1">
                Name is required
              </p>
            ) : (
              typicalform !== ""
            )}
          </div>
          <div className=" col-sm-6 col-12 inputBottomSpace mb-sm-0 position-relative">
            <p className=" ff_inter fw-medium fs_16 text-black mb-2 text-start">
              Your email
            </p>
            <input
              type="email"
              placeholder="itanexample@gamil.com"
              className="w-100 loveInput"
              onChange={(e) =>
                setTypicalForm({
                  ...typicalform,
                  email: e.target.value,
                })
              }
              value={typicalform.email}
            />
            <p className="mb-0 text-danger font-medium pointer-events-none position-absolute ps-1">
              {error && typicalform.email === "" ? (
                "Email is required"
              ) : error && regex.test(typicalform.email) === false ? (
                <p className="text-danger font-medium">Email Not Valid</p>
              ) : (
                ""
              )}
            </p>
          </div>
        </div>
        {/* input 2 */}
        <div className="row inputBottomSpaceSm position-relative">
          <div className=" col-sm-6 col-12 inputBottomSpace mb-sm-0 position-relative">
            <p className=" ff_inter fw-medium fs_sm text-black mb-2 text-start">
              What you are interested
            </p>
            <input
              type="text"
              placeholder="Design & Branding"
              className="w-100 loveInput"
              onChange={(e) =>
                setTypicalForm({ ...typicalform, design: e.target.value })
              }
              value={typicalform.design}
            />
            {error && typicalform.design === "" ? (
              <p className="text-danger ps-1 position-absolute font-medium">
                Text is required
              </p>
            ) : (
              typicalform !== ""
            )}
          </div>
          <div className=" col-sm-6 col-12 inputBottomSpace mb-sm-0 position-relative">
            <p className=" ff_inter fw-medium fs_16 text-black mb-2 text-start">
              Project Budget
            </p>
            <input
              type="text"
              placeholder="select your budget"
              className="w-100 loveInput"
              onChange={(e) =>
                setTypicalForm({ ...typicalform, budget: e.target.value })
              }
              value={typicalform.budget}
            />
            {error && typicalform.budget === "" ? (
              <p className="text-danger ps-1 position-absolute font-medium">
                Text is required
              </p>
            ) : (
              typicalform !== ""
            )}
          </div>
        </div>
        {/* textarea */}
        <div className="w-100 inputBottomSpace position-relative pb-2">
          <p className=" ff_inter fw-medium fs_16 text-black mb-2 text-start">
            Message
          </p>
          <textarea
            type="text"
            placeholder="Let tell us know your project about"
            className="w-100 loveInput textAreaHeight"
            onChange={(e) =>
              setTypicalForm({ ...typicalform, project: e.target.value })
            }
            value={typicalform.project}
          />
          {error && typicalform.project === "" ? (
            <p className="text-danger font-medium position-absolute ps-1">
              Text is required
            </p>
          ) : (
            typicalform !== ""
          )}
        </div>
        <button className=" text-white fs_sm fw-bold lh_157 bg_purple justBtn d-flex justify-content-center align-items-center mt-4 buttonHover">
          Just Send
        </button>
      </form>
    </>
  );
};

export default FullForm;

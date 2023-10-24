import React from "react";

const FullForm = () => {
  return (
    <>
      <div className="vh-100 d-flex align-items-center">
        <div className="container">
          <p className="ff_inter fs_2xl headingMaxWidth fw-medium lh_120 text-black mb-4 pb-2">
            Love to hear from you, Get in touch
          </p>
          <div className="row inputBottomSpaceSm">
            <div className=" col-sm-6 col-12 inputBottomSpace mb-sm-0">
              <p className=" ff_inter fw-medium fs_sm text-black mb-2">
                Your name
              </p>
              <input
                type="text"
                placeholder="Edward Snowden"
                className="w-100 loveInput"
              />
            </div>
            <div className=" col-sm-6 col-12 inputBottomSpace mb-sm-0">
              <p className=" ff_inter fw-medium fs_16 text-black mb-2">
                Your email
              </p>
              <input
                type="email"
                placeholder="itanexample@gamil.com"
                className="w-100 loveInput"
              />
            </div>
          </div>
          {/* input 2 */}
          <div className="row inputBottomSpaceSm">
            <div className=" col-sm-6 col-12 inputBottomSpace mb-sm-0">
              <p className=" ff_inter fw-medium fs_sm text-black mb-2">
                What you are interested
              </p>
              <input
                type="text"
                placeholder="Design & Branding"
                className="w-100 loveInput"
              />
            </div>
            <div className=" col-sm-6 col-12 inputBottomSpace mb-sm-0">
              <p className=" ff_inter fw-medium fs_16 text-black mb-2">
                Project Budget
              </p>
              <input
                type="text"
                placeholder="select your budget"
                className="w-100 loveInput"
              />
            </div>
          </div>
          {/* textarea */}
          <div className="w-100 inputBottomSpace">
            <p className=" ff_inter fw-medium fs_16 text-black mb-2">Message</p>
            <textarea
              type="text"
              placeholder="Let tell us know your project about"
              className="w-100 loveInput textAreaHeight"
            />
          </div>
          <button className=" text-white fs_sm fw-bold lh_157 border-0 bg_purple justBtn d-flex justify-content-center align-items-center">
            Just Send
          </button>
        </div>
      </div>
    </>
  );
};

export default FullForm;

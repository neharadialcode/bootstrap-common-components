import React from "react";

const FullForm = () => {
  return (
    <>
      <div className="container">
        <p className="ff_inter text40 max-w-435 fw-medium lh_120 text-black mb-4 pb-2">
          Love to hear from you, Get in touch
        </p>
        <div className="row">
          <div className="col-6">
            <p className=" ff_inter fw-medium fs_sm text-black mb-2">
              Your name{" "}
            </p>
            <input
              type="text"
              placeholder="Edward Snowden"
              className="w-100 loveInput"
            />
          </div>
          <div className="col-6">
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
        <div className="row">
          <div className="col-6">
            <p className=" ff_inter fw-medium fs_sm text-black mb-2">
              What you are interested
            </p>
            <input
              type="text"
              placeholder="Design & Branding"
              className="w-100 loveInput"
            />
          </div>
          <div className="col-6">
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
        <div className="w-100">
          <p className=" ff_inter fw-medium fs_16 text-black mb-2">Message</p>
          <textarea
            type="text"
            placeholder="Let tell us know your project about"
            className="w-100 loveInput textAreaHeight"
          />
        </div>
        <button className=" text-white fs_sm fw-bold lh_157 border-0 bg_purple justBtn d-flex justify-content-center align-items-center">Just Send</button>
      </div>
    </>
  );
};

export default FullForm;

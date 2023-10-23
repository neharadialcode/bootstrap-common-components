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
            <p className=" ff_inter fw-medium fs_16 text-black mb-2">Your name </p>
            <input
              type="text"
              placeholder="Edward Snowden"
              className="w-100 loveInput"
            />
          </div>
          <div className="col-6">
            <p className=" ff_inter fw-medium fs_16 text-black mb-2">Your name </p>
            <input
              type="text"
              placeholder="Edward Snowden"
              className="w-100 loveInput"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default FullForm;

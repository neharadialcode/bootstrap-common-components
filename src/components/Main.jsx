import React from "react";

const Main = () => {
  return (
    <>
      <div className="pt-5 d-flex align-items-center flex-wrap gap-4 justify-content-center">
        {/* <h2 className='pb-3'>HEADER</h2> */}
        <a href="/header" className="py-2 px-4 bg-info border-0 text-white">
          Header
        </a>
        {/* <h2 className='pb-3 mt-5'>HERO</h2> */}
        <a href="/hero" className="py-2 px-4 bg-info border-0 text-white">
          Hero
        </a>
        {/* <h2 className='pb-3 mt-5'>ABOUT US</h2> */}
        <a href="/about" className="py-2 px-4 bg-info border-0 text-white">
          About Us
        </a>
        {/* <h2 className='pb-3 mt-5'>Form</h2> */}
        <a href="/form" className="py-2 px-4 bg-info border-0 text-white">
          Form
        </a>
        <a href="/faqs" className="py-2 px-4 bg-info border-0 text-white">
          Faq's
        </a>
        <a href="/footer" className="py-2 px-4 bg-info border-0 text-white">
          Footer
        </a>
        <a href="/vedio" className="py-2 px-4 bg-info border-0 text-white">
          Vedio
        </a>
        <a href="/slider" className="py-2 px-4 bg-info border-0 text-white">
          slider
        </a>
        <a href="/team" className="py-2 px-4 bg-info border-0 text-white">
          team
        </a>
        <a href="/roadMap" className="py-2 px-4 bg-info border-0 text-white">
          Road map
        </a>
      </div>
    </>
  );
};

export default Main;

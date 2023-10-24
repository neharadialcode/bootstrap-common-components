import React from "react";
import Headercenter from "../components/headersection/Headercenter";
import HeaderFull from "../components/headersection/HeaderFull";
import HeaderRightAlign from "../components/headersection/HeaderRightAlign";

const Header = () => {
  return (
    <>
      <div className="mb-5 pb-5 pt-5">
        <h1 className="text-center">Center Header</h1>
        <Headercenter />
      </div>
      <div className="mb-5 pb-5 pt-5">
        <h2 className="text-center">Full Header</h2>
        <HeaderFull />
      </div>
      <div className="mb-5 pb-5">
        <h2 className="text-center">Header Right Align</h2>
        <HeaderRightAlign />
      </div>
    </>
  );
};

export default Header;

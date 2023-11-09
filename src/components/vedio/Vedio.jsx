  import React from 'react'
  import crescentMoon from "../../assetsFolder/images/video/crescent_moon.mp4";
  const Vedio = () => {
    return (
      <>
        <div className="container mt-5">
          <div className=" position-relative">
            <p className=" fs_xl fw-bold position-absolute text-white ms-4 mt-2">
              Lorem: ipsum dolor sit
            </p>
            <iframe src={crescentMoon} className="w-100 min_h_vedio m-0" />
          </div>
        </div>
      </>
    );
  }

  export default Vedio;

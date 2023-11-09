  import React from 'react'
  import vedioRandom from "../../assetsFolder/images/video/crescent_moon_-_27186 (1080p).mp4";
  const Vedio = () => {
    return (
      <>
        <div className="container mt-5">
          <div className=" position-relative">
            <p className=' fs_xl fw-bold position-absolute text-white ms-4 mt-2'>Lorem: ipsum dolor sit</p>
            <iframe src={vedioRandom} className="w-100 min_h_vedio m-0" />
          </div>
        </div>
      </>
    );
  }

  export default Vedio;

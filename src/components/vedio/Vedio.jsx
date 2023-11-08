import React from 'react'
import vedioRandom from "../../assetsFolder/images/video/crescent_moon_-_27186 (1080p).mp4";
const Vedio = () => {
  return (
    <>
      <div className="container mt-5">
        <iframe src={vedioRandom} className='w-100 min_h_vedio m-0'/>
        {/* <iframe frameborder="0"></iframe> */}
      </div>
    </>
  );
}

export default Vedio

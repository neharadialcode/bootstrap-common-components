import React from 'react'

const Main = () => {
  return (
    <>
      <div className="ps-5 pt-5">
        <h2 className='pb-3'>HEADER</h2>
        <a href="/header"className="py-2 px-4 bg-info border-0 text-white">Header</a>
        <h2 className='pb-3 mt-5'>HERO</h2>
        <a href="/hero"className="py-2 px-4 bg-info border-0 text-white">Hero</a>
        <h2 className='pb-3 mt-5'>ABOUT US</h2>
        <a href="/about"className="py-2 px-4 bg-info border-0 text-white">About Us</a>
      </div>
    </>
  );
}

export default Main
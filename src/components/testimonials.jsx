import React from "react";
import bangrey from "../assets/image/reyhan.png";
import fathur from "../assets/image/fathur.png";
import timur from "../assets/image/timur.png";

export default function Testimonials() {
  return (
    <div id="testimonial" className='xl:mx-5 relative mx-3 lg:mt-0 mt-14 mb-48'>
      
      <div className='rounded-full lg:h-[1144px] lg:blur[150px] lg:w-[729px] xl:h-[744px] xl:blur[180px] xl:w-[729px] md:h-[744px] md:blur[150px] md:w-[729px]  h-[44px] blur-[250px] w-[729px] bg-[#660094] absolute -z-10 -left-60 -top-44 '></div>
      <div className=''>
        <h1 className='mb-8 text-4xl tracking-tight font-extrabold text-white'>Testimonials 🤩 </h1>
        <p className='text-[#FBF0FF] mt-5 font-base w-full xl:pr-12 tracking-wide leading-relaxed'>
          In my project endeavors, I've consistently leveraged a dynamic and robust tech stack to craft innovative solutions. This amalgamation of technologies not only ensures efficiency but also adds a touch of sophistication to the
          development process.
        </p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12 lg:gap-0 '>
        <div className='m-4  p-4 rounded-2xl flex flex-col justify-between bg-[#DEB8FF] bg-opacity-5 ring-1 ring-white ring-opacity-25'>
          <p className='text-white text-sm font-thin lg:font-normal lg:text-sm '>
            Zul is a clever person. He is able to deliver a product very well. While working together, Zul was very responsive and really upheld teamwork between teams. Happy to work with Zul.
          </p>
          <div className='mt-5 flex items-center'>
            <img className='w-12 h-12 ' src={bangrey} alt='reyhan' />
            <div className='ml-3'>
              <p className='text-[#A026D4] lg:text-base text-base font-semibold'>Reyhan Jovi D.P.</p>
              <p className='italic text-[#FBF0FF] lg:text-xs mt-[4px] text-xs font-normal'>Backend Engineer at Dana</p>
            </div>
          </div>
        </div>
        <div className='m-4  p-4   rounded-2xl flex flex-col justify-between bg-[#DEB8FF] bg-opacity-5 ring-1 ring-white ring-opacity-25'>
          <p className='text-white text-sm font-thin'>Zul's color palette harmonizes well, and dynamic components create a fluid, non-rigid feel. The design has strong UI/UX foundations with great growth potential.</p>
          <div className='mt-5  flex items-center'>
            <img className='w-12 h-12' src={timur} alt='timur' />
            <div className='ml-3'>
              <p className='text-[#A026D4] lg:text-base text-base font-semibold'>Timur Haryo M.</p>
              <p className='italic text-[#FBF0FF] mt-[4px] text-xs font-normal'>Android Developer at Stockbit</p>
            </div>
          </div>
        </div>
        <div className='m-4 p-4 rounded-2xl flex flex-col justify-between bg-[#DEB8FF] bg-opacity-5 ring-1 ring-white ring-opacity-25'>
          <p className='text-white text-sm font-thin'>Zul is a person who always has a high desire to learn something new. What a great moment working with him !.</p>
          <div className='mt-5  flex items-center'>
            <img className='w-12 h-12' src={fathur} alt='fathur' />
            <div className='ml-3'>
              <p className='text-[#A026D4] text-base font-semibold'>M. Fathurrohman</p>
              <p className='italic text-[#FBF0FF] mt-[4px] text-xs font-normal'>Freelance Software Engineer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

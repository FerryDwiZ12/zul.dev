import React from "react";
import petikKanan from "../assets/icons/petik_kanan.png";
import petikKiri from "../assets/icons/petik_kiri.png";
import croscop from "../assets/image/croscop.jpg";
import dana from "../assets/image/dana.jpg";
import funiture from "../assets/image/funiture.jpg";
import guru from "../assets/image/guru.jpg";
import hotel_resto from "../assets/image/hotel_resto.jpg";
import tokped from "../assets/image/tokped.jpg";
import dribble1 from "../assets/icons/dribble1.png";
import github1 from "../assets/icons/github1.png";

export default function Portofolio() {
  return (
    <div id='portofolio' className='xl:mx-5 relative mx-3'>
      <div className='rounded-full h-[384px] blur-[180px] w-[629px] bg-[#660094] absolute -z-10 -right-72 top-30'></div>
      <div className='rounded-full lg:h-[1144px] lg:blur[150px] lg:w-[729px] xl:h-[744px] xl:blur[180px] xl:w-[729px] md:h-[744px] md:blur[150px] md:w-[729px]  h-[44px] blur-[250px] w-[729px] bg-[#660094] absolute -z-10 -left-60 top-80 '></div>
      <div className='flex justify-end'>
        <img className='w-16 mt-12 xl:w-24 xl:-mt-6' src={petikKanan} alt='' />
      </div>
      <div className='pt-12'>
        <h1 className='mb-8 text-4xl tracking-tight font-extrabold text-white'>Portofolio 👨🏽‍💻</h1>
        <p className='text-[#FBF0FF] mt-5 font-base w-full xl:pr-12 tracking-wide leading-relaxed '>
          I am pleased to present a compilation of successful portfolios that I have meticulously crafted over the course of approximately one year, showcasing my diverse skills and accomplishments.
        </p>
      </div>
      <div className='mt-12 lg:mt-0'>
        <div className='m-2 lg:m-12 w-auto lg:flex lg:gap-12 '>
          <div className='w-full lg:w-1/2 relative group hover:backdrop-blur-3xl hover:drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]'>
            <img className='w-full rounded-3xl lg:brightness-50 lg:hover:brightness-100' src={croscop} alt='' />
            <a
              href='https://www.figma.com/proto/0CUHvM62TvoSZLFqZaxeZA/Cropshop?type=design&node-id=148-953&t=FwtRYhRyEWpT66Qx-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=148%3A1057&show-proto-sidebar=1&mode=design'
              className='absolute lg:opacity-0 lg:group-hover:opacity-100 lg:transition-opacity flex text-white bg-gradient-to-br items-center from-pink-600 to-violet-800 lg:hover:bg-gradient-to-bl focus:ring-4 focus:outline-none  focus:ring-blue-300 dark:focus:ring-blue-800 font-medium text-sm px-5 py-2.5 text-center bottom-4 hover:shadow-inner-2xl right-4 duration-300 ease-in-out  rounded-2xl'
            >
              <h1 className='font-medium'>Figma</h1>
              <img className='w-6 h-6 ml-2 ' src={dribble1} alt='' />
            </a>
          </div>
          <div className='w-full lg:mt-0 mt-6 lg:w-1/2 relative group hover:backdrop-blur-3xl hover:drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]'>
            <img className='-full rounded-3xl lg:brightness-50 lg:hover:brightness-100' src={dana} alt='' />
            <button className='absolute lg:opacity-0 lg:group-hover:opacity-100 lg:transition-opacity flex text-white bg-gradient-to-br items-center from-black to-gray-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none  focus:ring-blue-300 dark:focus:ring-blue-800 font-medium text-sm px-5 py-2.5 text-center bottom-4 hover:shadow-inner-2xl right-4 duration-300 ease-in-out  rounded-2xl'>
              <h1 className='font-medium'>Github (private)</h1>
              <img className='w-6 h-6 ml-2 ' src={github1} alt='' />
            </button>
          </div>
        </div>
      </div>
      <div className='mt-12 lg:mt-0'>
        <div className='m-2 lg:m-12 w-auto lg:flex lg:gap-12 '>
          <div className='w-full lg:w-1/2 relative group hover:backdrop-blur-3xl hover:drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]'>
            <img className='w-full rounded-3xl lg:brightness-50 lg:hover:brightness-100' src={funiture} alt='' />
            <a
              href='https://www.figma.com/proto/7MIA7LpRuarHeKpIBRjKpz/Web-Funiture?type=design&node-id=2-7&t=ROjrrT8H2haoQcGH-1&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=2%3A7&show-proto-sidebar=1&mode=design'
              className='absolute lg:opacity-0 lg:group-hover:opacity-100 lg:transition-opacity flex text-white bg-gradient-to-br items-center from-pink-600 to-violet-800 lg:hover:bg-gradient-to-bl focus:ring-4 focus:outline-none  focus:ring-blue-300 dark:focus:ring-blue-800 font-medium text-sm px-5 py-2.5 text-center bottom-4 hover:shadow-inner-2xl right-4 duration-300 ease-in-out  rounded-2xl'
            >
              <h1 className='font-medium'>Figma</h1>
              <img className='w-6 h-6 ml-2 ' src={dribble1} alt='' />
            </a>
          </div>
          <div className='w-full lg:mt-0 mt-6 lg:w-1/2 relative group hover:backdrop-blur-3xl hover:drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]'>
            <img className='-full rounded-3xl lg:brightness-50 lg:hover:brightness-100' src={hotel_resto} alt='' />
            <a
              href='https://github.com/FerryDwiZ12/Realta-Hotels'
              className='absolute lg:opacity-0 lg:group-hover:opacity-100 lg:transition-opacity flex text-white bg-gradient-to-br items-center from-black to-gray-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none  focus:ring-blue-300 dark:focus:ring-blue-800 font-medium text-sm px-5 py-2.5 text-center bottom-4 hover:shadow-inner-2xl right-4 duration-300 ease-in-out  rounded-2xl'
            >
              <h1 className='font-medium'>Github</h1>
              <img className='w-6 h-6 ml-2 ' src={github1} alt='' />
            </a>
          </div>
        </div>
      </div>
      <div className='mt-12 lg:mt-0'>
        <div className='m-2 lg:m-12 w-auto lg:flex lg:gap-12 '>
          <div className='w-full lg:w-1/2 relative group hover:backdrop-blur-3xl hover:drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]'>
            <img className='w-full rounded-3xl lg:brightness-50 lg:hover:brightness-100' src={guru} alt='' />
            <a
              href='https://www.figma.com/proto/Xtwkar4EO8d7m8Zfv8AjHm/Loker-Guru---Design?type=design&node-id=1683-7613&t=9KTHjw9tIjfokiYW-1&scaling=min-zoom&page-id=5%3A3&starting-point-node-id=94%3A892&show-proto-sidebar=1&mode=design'
              className='absolute lg:opacity-0 lg:group-hover:opacity-100 lg:transition-opacity flex text-white bg-gradient-to-br items-center from-pink-600 to-violet-800 lg:hover:bg-gradient-to-bl focus:ring-4 focus:outline-none  focus:ring-blue-300 dark:focus:ring-blue-800 font-medium text-sm px-5 py-2.5 text-center bottom-4 hover:shadow-inner-2xl right-4 duration-300 ease-in-out  rounded-2xl'
            >
              <h1 className='font-medium'>Figma</h1>
              <img className='w-6 h-6 ml-2 ' src={dribble1} alt='' />
            </a>
          </div>
          <div className='w-full lg:mt-0 mt-6 lg:w-1/2 relative group hover:backdrop-blur-3xl hover:drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]'>
            <img className='-full rounded-3xl lg:brightness-50 lg:hover:brightness-100' src={tokped} alt='' />
            <a href="https://github.com/FerryDwiZ12/tokopedia-play-clone" className='absolute lg:opacity-0 lg:group-hover:opacity-100 lg:transition-opacity flex text-white bg-gradient-to-br items-center from-black to-gray-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none  focus:ring-blue-300 dark:focus:ring-blue-800 font-medium text-sm px-5 py-2.5 text-center bottom-4 hover:shadow-inner-2xl right-4 duration-300 ease-in-out  rounded-2xl'>
              <h1 className='font-medium'>Github</h1>
              <img className='w-6 h-6 ml-2 ' src={github1} alt='' />
            </a>
          </div>
        </div>
      </div>
      <div className='mt-24'>
        <img className='w-16 xl:w-24' src={petikKiri} alt='' />
      </div>
    </div>
  );
}

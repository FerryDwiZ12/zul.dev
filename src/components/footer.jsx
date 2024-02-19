import React from "react";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer className='h-auto md:h-[300px] xl:mx-5 lg:mx-5 flex flex-col md:flex-row mx-7'>
      <div className='w-full md:w-4/5 mt-12'>
        <h1 className='text-3xl font-bold text-white mb-4'>Let’s keep in touch!</h1>
        <p className='text-[#FBF0FF] font-base tracking-wide leading-relaxed'>Find me on any of these platforms, I respond 1-2 business days.</p>
      </div>
      <div className='w-full md:w-2/3 flex flex-col md:flex-row mt-12'>
        <div className='w-full flex flex-col gap-1 md:w-3/5 mb-10 md:mb-0 xl:mb-0'>
          <h1 className='font-bold text-xl text-white mb-6'>Other Resources</h1>
          <Link to='about' smooth={true} duration={500} offset={-window.innerHeight / 7} className='text-white mb-2 cursor-pointer'>
            About
          </Link>
          <Link to='experience' smooth={true} duration={500} offset={-window.innerHeight / 9} className='text-white mb-2 cursor-pointer'>
            Experience
          </Link>
          <Link smooth={true} duration={500} offset={-window.innerHeight / 12} to='portofolio' className='text-white mb-2 cursor-pointer'>
            Portofolio
          </Link>
          <Link to='skill' smooth={true} duration={500} offset={-window.innerHeight / 5} className='text-white mb-2 cursor-pointer'>
            Skill
          </Link>
          <Link to='tertimonial' smooth={true} duration={500} offset={-window.innerHeight / 5} className='text-white mb-2 cursor-pointer'>
            Testimonial
          </Link>
        </div>
        <div className='w-full flex flex-col gap-1 md:w-3/5 mb-10 md:mb-0 xl:mb-0'>
          <h1 className='font-bold text-xl text-white mb-6'>Other Resources</h1>
          <a href='https://github.com/FerryDwiZ12' className='text-white mb-2'>
            Github
          </a>
          <a href='https://dribbble.com/ferrydwiz_' className='text-white mb-2'>
            Dribbble
          </a>
          <a href='mailto:ferrydwizulkhifli@gmail.com' className='text-white mb-2'>
            Email
          </a>
          <a href='https://www.linkedin.com/in/ferrydwizulkhifli/' className='text-white mb-2'>
            Linkedin
          </a>
          <a href='https://www.instagram.com/ferrydwizulkhifli/' className='text-white mb-2'>
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

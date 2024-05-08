import mypicture from "../assets/image/mypicture.jpg";
import dribbble from "../assets/icons/dribbble.png";
import linkedin from "../assets/icons/linkedin.png";
import instagram from "../assets/icons/instagram.png";
import github from "../assets/icons/github.png";

export default function Header() {
  return (
    <header id="header" className='xl:mx-5 mx-3'>
      <div className='relative w-full justify-between items-center'>
        <div className='rounded-full lg:h-[1144px] lg:blur[150px] lg:w-[729px] xl:h-[744px] xl:blur[150px] xl:w-[729px] md:h-[744px] md:blur[150px] md:w-[729px]  h-[44px] blur-[250px] w-[729px] bg-[#660094] absolute -z-10 -left-60 -top-44 '></div>
        <div className='md:flex lg:flex xl:flex justify-between items-center w-full z-10 mt-6'>
          <div>
            <h1 className='text-indigo-50 text-base md:text-2xl lg:text-2xl xl:mt-0'>Hi There 👋🏼 </h1>
            <h1 className='text-indigo-50 leading-normal  text-5xl mt-6 xl:mt-2 xl:leading-normal lg:leading-normal lg:text-6xl xl:text-8xl font-bold '>
              I’m Ferry <br /> Dwi Zulkhifli
            </h1>
            <h1 className='text-white text-base  xl:text-xl xl:mt-2 font-light mt-6 mb-12 '>I’am Fullstack Developer & UI/UX Designer</h1>
            <a href="mailto:ferrydwizulkhifli@gmail.com" className='group border-solid  border-2 p-2 border-white rounded-lg hover:border-[#A200EC] w-fit'>
              <button type="button" className='text-white  px-4 cursor-pointer group-hover:text-[#A200EC]'>Contact Me</button>
            </a>
            <div className='flex items-center gap-3 mt-4 '>
              <a href="https://dribbble.com/ferrydwiz_" className='mt-6 p-1.5 bg-gradient-to-b rounded-lg cursor-pointer hover:bg-opacity-10 hover:bg-[#cf98ff]  bg-[#DEB8FF] bg-opacity-15 border border-white border-opacity-15 backdrop-blur-sm '>
                <img src={dribbble} alt='Dribbble' className='w-9' />
              </a>
              <a href="https://www.linkedin.com/in/ferrydwizulkhifli/" className='mt-6 p-2 bg-gradient-to-b rounded-lg cursor-pointer hover:bg-opacity-10 hover:bg-[#cf98ff] bg-[#DEB8FF] bg-opacity-15 border border-white border-opacity-15 backdrop-blur-sm  '>
                <img src={linkedin} alt='LinkedIn' className='w-8' />
              </a>
              <a href="https://www.instagram.com/ferrydwizulkhifli/" className='mt-6 p-1 bg-gradient-to-b rounded-lg cursor-pointer hover:bg-opacity-10 hover:bg-[#cf98ff]  bg-[#DEB8FF] bg-opacity-15 border border-white border-opacity-15 backdrop-blur-sm '>
                <img src={instagram} alt='Instagram' className='w-10' />
              </a>
              <a href="https://github.com/FerryDwiZ12" className='mt-6 p-1 bg-gradient-to-b rounded-lg cursor-pointer hover:bg-opacity-10 hover:bg-[#cf98ff] bg-[#DEB8FF] bg-opacity-15 border border-white border-opacity-15 backdrop-blur-sm '>
                <img src={github} alt='GitHub' className='w-10' />
              </a>
            </div>
          </div>
          <div>
            <img className='xl:mt-0 mt-12 w-full md:w-72 xl:w-96  rounded-xl hover:skew-y-12 duration-300 drop-shadow-2xl' src={mypicture} alt='photo ku' />
          </div>
        </div>
      </div>
    </header>
  );
}

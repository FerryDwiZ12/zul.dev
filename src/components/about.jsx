import heroOne from "../assets/image/hero1.jpg";
import heroTwo from "../assets/image/hero2.jpg";

export default function About() {
  return (
    <div id="about" className='md:flex xl:mx-5 mx-3 lg:flex xl:flex justify-between items-center relative mt-12'>
      <div className='rounded-full h-[184px] blur-[150px] w-[729px] bg-[#660094] absolute -z-10 -right-24 top-24'></div>
      <section>
        <div className='gap-16 items-center py-8  mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 '>
          <div className='font-light text-gray-500 sm:text-lg dark:text-gray-400'>
            <h2 className='mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white'>About Me 👋🏼</h2>
            <p className='text-[#FBF0FF] mt-5 font-base w-full xl:pr-12 tracking-wide leading-relaxed'>
              Zul is a Fullstack Developer with a keen interest in web development. He has participated in various training sessions organized by GoTo Company and collaborated on a Capstone Project Industry with DANA Indonesia. As a backend
              developer, he is proficient in programming languages such as JavaScript and Golang. In frontend development, he frequently utilizes ReactJS and NextJS. <br /> <br /> Furthermore, he brings with him 1 year of experience as a
              UI/UX Designer. He is enthusiastic about overcoming technical challenges and consistently strives for continuous professional advancement.
            </p>
          </div>
          <div className=' sm:grid xl:grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 hidden'>
            <img className='w-full rounded-lg' src={heroOne} alt='office content 1'></img>
            <img className='mt-4 w-full lg:mt-10 rounded-lg' src={heroTwo} alt='office content 2'></img>
          </div>
        </div>
      </section>
    </div>
  );
}

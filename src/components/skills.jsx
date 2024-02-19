import javascript from "../assets/icons-stack/javascript.png";
import css from "../assets/icons-stack/css.png";
import expressjs from "../assets/icons-stack/express.png";
import golang from "../assets/icons-stack/golang.png";
import html from "../assets/icons-stack/html.png";
import mongo from "../assets/icons-stack/mongo.png";
import nestjs from "../assets/icons-stack/nestjs.png";
import Next from "../assets/icons-stack/Nextjs.png";
import Node from "../assets/icons-stack/nodejs.png";
import postgres from "../assets/icons-stack/postgres.png";
import react from "../assets/icons-stack/react.png";
import redux from "../assets/icons-stack/redux.png";
import tailwind from "../assets/icons-stack/tailwind.png";
import typescript from "../assets/icons-stack/typescript.png";

const skillsData = [
  { name: "JavaScript", icon: javascript },
  { name: "HTML", icon: html },
  { name: "PostgreSQL", icon: postgres },
  { name: "Redux", icon: redux },
  { name: "TypeScript", icon: typescript },
  { name: "Golang", icon: golang },
  { name: "ExpressJS", icon: expressjs },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node.js", icon: Node },
  { name: "MongoDB", icon: mongo },
  { name: "NestJS", icon: nestjs },
  { name: "ReactJS", icon: react },
  { name: "CSS", icon: css },
  { name: "Next.js", icon: Next },
];

const Skills = () => {
  return (
    <div id="skill" className='xl:mx-5 relative mx-3 lg:mt-0 mt-14 '>
      <div className='rounded-full h-[384px] blur-[180px] w-[629px] bg-[#660094] absolute -z-10 -right-72 top-30'></div>
      <div >
        <h1 className='mb-8 text-4xl tracking-tight font-extrabold text-white'>Skills 👌</h1>
        <p className='text-[#FBF0FF] mt-5 font-base w-full xl:pr-12 tracking-wide leading-relaxed'>
          In my project endeavors, I've consistently leveraged a dynamic and robust tech stack to craft innovative solutions. This amalgamation of technologies not only ensures efficiency but also adds a touch of sophistication to the
          development process.
        </p>
      </div>
      <div>
        <div className='flex sm:flex flex-wrap xl:flex lg:flex gap-4 xl:gap-4 lg:gap-4 mt-12'>
          {skillsData.map((skill) => (
            <div key={skill.name} className='bg-[#DEB8FF] bg-opacity-10 rounded-xl ring-1 ring-white ring-opacity-25'>
              <div className='flex mx-5 my-3 gap-3 justify-center items-center'>
                <img className='w-8 h-8' src={skill.icon} alt='' />
                <p className='text-lg font-bold text-[#E7ADFF]'>{skill.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;

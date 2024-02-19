import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/about";
import Experience from "./components/experience";
import Footer from "./components/footer";
import Header from "./components/header";
import Portofolio from "./components/portofolio";
import Skills from "./components/skills";
import Testimonials from "./components/testimonials";

const App = () => {
  return (
    <div>
      <div className='mx-4 md:mx-0 lg:mx-24 xl:mx-32 mt-8'>
        <div className='mb-8 mt-40 xl:mt-52 max-w-7xl mx-auto'>
          <Navbar />
        </div>
        <div className='mt-0 lg:mb-8 xl:mb-8 xl:mt-32 max-w-7xl mx-auto'>
          <Header />
        </div>
        <div className='mt-0 lg:mb-8 xl:mb-8 xl:mt-32 max-w-7xl mx-auto'>
          <About />
        </div>
        <div className='mt-0 lg:mb-8 xl:mb-8 xl:mt-32 max-w-7xl mx-auto'>
          <Experience />
        </div>
        <div className='mt-0 lg:mb-8 xl:mb-8 xl:my-44 max-w-7xl mx-auto'>
          <Portofolio />
        </div>
        <div className='mt-0 lg:mb-8 xl:mb-8 xl:my-44 max-w-7xl mx-auto'>
          <Skills />
        </div>
        <div className='mt-0 mb-12 lg:mb-8 xl:mb-8 xl:my-44 max-w-7xl mx-auto'>
          <Testimonials />
        </div>
      </div>
      <div className=' bg-gradient-to-t from-[#000] to-[#000]/25'>
        <footer className=' max-w-7xl mx-auto'>
          <Footer />
        </footer>
      </div>
    </div>
  );
};

export default App;

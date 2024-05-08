import { useState, useEffect } from "react";
import { Link } from "react-scroll";

export default function Navbar() {
  const [navbar, setNavbar] = useState(false);

  useEffect(() => {
    // Fungsi untuk menutup navbar saat klik di luar navbar
    function closeNavbar() {
      if (navbar) {
        setNavbar(false);
      }
    }

    // Menambahkan event listener ke dokumen saat komponen dimount
    document.addEventListener("click", closeNavbar);

    // Membersihkan event listener saat komponen di-unmount
    return () => {
      document.removeEventListener("click", closeNavbar);
    };
  }, [navbar]);

  // Fungsi untuk menghentikan event propagation sehingga klik di dalam navbar tidak menutupnya
  function stopPropagation(event) {
    event.stopPropagation();
  }

  return (
    <nav className={`w-full z-50 px-4 lg:px-12 fixed top-0 left-0 bg-opacity-90 backdrop-blur-xl ${navbar ? "bg-opacity-90 backdrop-blur-md" : ""}`}>
      <div className='justify-between w-full px-4 lg:px-0 xl:px-6 mx-auto lg:max-w-7xl md:items-center  md:flex  ' onClick={stopPropagation}>
        <div>
          <div id='navbar' className=' flex items-center justify-between py-3 md:py-12 md:block'>
            <Link to='header' smooth={true} duration={500} offset={-window.innerHeight}>
              <h2 className='cursor-pointer text-xl font-semibold text-indigo-50 hover:text-[#A200EC]'>Zul.dev</h2>
            </Link>
            <div className='md:hidden'>
              <button className='p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border' onClick={() => setNavbar(!navbar)}>
                {navbar ? (
                  <svg xmlns='http://www.w3.org/2000/svg' className='w-6 h-6 text-white' viewBox='0 0 20 20' fill='currentColor'>
                    <path
                      fillRule='evenodd'
                      d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                      clipRule='evenodd'
                    />
                  </svg>
                ) : (
                  <svg xmlns='http://www.w3.org/2000/svg' className='w-6 h-6 text-white' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={2}>
                    <path strokeLinecap='round' strokeLinejoin='round' d='M4 6h16M4 12h16M4 18h16' />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div className={`flex-1 justify-self-center pb-3 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"}`}>
          <ul className='items-center justify-center space-y-7 mt-6 md:mt-0  md:flex md:space-x-6 md:space-y-0'>
            <li className='text-gray-600 md:text-sm lg:text-lg  hover:text-black cursor-pointer hover:underline hover:py-1'>
              <Link to='about' smooth={true} duration={500} offset={-window.innerHeight / 7} className='text-indigo-50'>
                About Me
              </Link>
            </li>
            <li className='text-gray-600 md:text-sm lg:text-lg hover:text-black cursor-pointer hover:underline hover:py-1'>
              <Link to='experience' smooth={true} duration={500} offset={-window.innerHeight / 9} className='text-indigo-50'>
                Experience
              </Link>
            </li>
            <li className='text-gray-600 md:text-sm lg:text-lg hover:text-black cursor-pointer hover:underline hover:py-1'>
              <Link to='portofolio' smooth={true} duration={500} offset={-window.innerHeight / 12} className='text-indigo-50'>
                Portfolio
              </Link>
            </li>
            <li className='text-gray-600 md:text-sm lg:text-lg hover:text-black cursor-pointer hover:underline hover:py-1'>
              <Link to='skill' smooth={true} duration={500} offset={-window.innerHeight / 5} className='text-indigo-50'>
                Skills
              </Link>
            </li>
            <li className='text-gray-600 md:text-sm lg:text-lg hover:text-black cursor-pointer hover:underline hover:py-1'>
              <Link to='testimonial' smooth={true} duration={500} offset={-window.innerHeight / 5} className='text-indigo-50'>
                Testimonials
              </Link>
            </li>
            <li>
              <div className='mb-5 mt-12 md:hidden'>
                <a
                  href='https://drive.google.com/drive/folders/19BQOeLsW9J7ctLEWf28NI-bHoI-H4WxS?usp=sharing'
                  download='my-cv'
                  target='blank'
                  className='border-solid p-2  sm:hidden border-2 border-gray-100 rounded-lg  w-fit mb-12 hover:border-[#A200EC]'
                >
                  <button type='button' className='text-indigo-50 px-4  hover:text-[#A200EC]'>
                    Download CV
                  </button>
                </a>
              </div>
            </li>
          </ul>
        </div>
        <div className='hidden group md:inline-block'>
          <a
            href='https://drive.google.com/drive/folders/19BQOeLsW9J7ctLEWf28NI-bHoI-H4WxS?usp=sharing'
            download='my-cv'
            target='blank'
            className='border-solid p-2  border-2 border-gray-100 rounded-lg  w-fit mb-12 hover:border-[#A200EC]'
          >
            <button type='button' className='text-indigo-50 px-4  group-hover:text-[#A200EC]'>
              Download CV
            </button>
          </a>
        </div>
      </div>
    </nav>
  );
}

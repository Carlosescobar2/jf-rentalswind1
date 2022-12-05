import React, { useState, useEffect } from "react";

import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { SlSocialFacebook } from "react-icons/sl";
import { AiOutlineFacebook } from "react-icons/ai";

import JFLogo from "../../assets/JFLogo.jpeg";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("black");
  const [linkColor, setLinkColor] = useState("white");

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? "fixed w-full h-25 shadow-xl z-[100] ease-in-out duration-300 bg-black"
          : "fixed w-full h-25 z-[100] bg-black"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <a>
          <img
            src={JFLogo}
            alt="/"
            width="125"
            height="100"
            className="cursor-pointer"
          />
        </a>
        <div>
          <ul style={{ color: `${linkColor}` }} className="hidden md:flex">
            <li className="ml-10 text-sm uppercase hover:border-b">
              <a href="/">Home</a>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b">
              <a href="/#rentnow">Rent Now</a>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b">
              <a href="/#contactus">Contact US</a>
            </li>
          </ul>
          {/* Hamburger Icon */}
          <div
            style={{ color: `${linkColor}` }}
            onClick={handleNav}
            className="md:hidden"
          >
            <AiOutlineMenu size={25} color="white" />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Overlay */}
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        {/* Side Drawer Menu */}
        <div
          className={
            nav
              ? " fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen p-10 ease-in duration-500 bg-black"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              {/* <Link href="/">
                <a>
                  <Image
                    src="/../public/assets/Logos/realPortLogo-removebg.png"
                    width="87"
                    height="35"
                    alt="/"
                  />
                </a>
              </Link> */}
              <div onClick={handleNav} className=" p-3 cursor-pointer">
                <AiOutlineClose color="white" />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4 text-white">
                J&F Trailer Rentals
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase text-white">
              <a href="/">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Home
                </li>
              </a>
              <a href="/#rentnow">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Rent Now
                </li>
              </a>
              <a href="/#contactus">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Contact Us
                </li>
              </a>
            </ul>
            <div className="pt-40">
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <a href="/#contact">
                  <div
                    onClick={() => setNav(!nav)}
                    className=" p-2 cursor-pointer hover:scale-105 ease-in duration-300"
                  >
                    <AiOutlineFacebook size={50} color="white" />
                  </div>
                </a>
              </div>
            </div>
            <p className="uppercase tracking-widest text-white">
              J&FTrailerRentals
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

// import React, { useState, useEffect } from "react";

// import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";

// import JFLogo from "../../assets/JFLogo.jpeg";

// const Navbar: React.FC = () => {
//   const [nav, setNav] = useState(false);
//   const [shadow, setShadow] = useState(false);
//   const [navBg, setNavBg] = useState("#ecf0f3");
//   const [linkColor, setLinkColor] = useState("#1f2937");

//   const handleNav = () => {
//     setNav(!nav);
//   };

//   return (
//     <div className="fixed w-full h-25 shadow-xl z-[100] bg-black">
//       <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16 ">
//         <img src={JFLogo} alt="/" width="125" height="100" />
//         <div>
//           <ul className="hidden md:flex">
//             <a href="">
//               <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
//             </a>
//             <a href="">
//               <li className="ml-10 text-sm uppercase hover:border-b">
//                 Rent Now
//               </li>
//             </a>
//             <a href="">
//               <li className="ml-10 text-sm uppercase hover:border-b">
//                 Contact Us
//               </li>
//             </a>
//           </ul>
//           <div className="md:hidden">
//             <AiOutlineMenu size={25} />
//           </div>
//         </div>
//       </div>
//       <div className="fixed left-0 top-0 w-full h-screen bg-black/70"></div>
//     </div>
//   );
// };

// export default Navbar;

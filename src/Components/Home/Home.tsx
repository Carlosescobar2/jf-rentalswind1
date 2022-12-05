import React, { FC } from "react";
import FrontTrailerImg from "../../assets/FrontTrailerImg.jpeg";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { Icon } from "@iconify/react";
const Home: FC = () => {
  return (
    <div className="w-full h-screen text-center ">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center ">
        <div>
          <h1 className="py-4 text-gray-700">J&F Trailer Rentals</h1>
          <div>
            <ul className="hidden md:flex">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Car Haulers
              </li>
              <li className="ml-10 text-sm uppercase hover:border-b">
                Dump Trailers
              </li>
              <li className="ml-10 text-sm uppercase hover:border-b">
                Material and equipment hauling
              </li>
            </ul>
            {/* Hamburger Icon */}
          </div>
          <h3 className="py-5">All trailers come fully equipped with:</h3>

          <div className="flex items-center justify-between max-w-[300px] m-auto ml-14">
            <div className="p-6 hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Icon
                    icon="material-symbols:check-circle-outline"
                    fontSize="50px"
                    color="green"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>Winch</h3>
                </div>
              </div>
            </div>

            <div className="p-6 hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Icon
                    icon="material-symbols:check-circle-outline"
                    fontSize="50px"
                    color="green"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>Winch</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center ">
        <h1>J&F Trailer Rentals</h1>
        <div>
          <p>Car Haulers</p>
          <p>Dump Trailers</p>
          <p>Material and equipment building</p>
        </div>
      </div> */}
      {/* <img className="" src={FrontTrailerImg} alt="/" /> */}
    </div>
  );
};

export default Home;

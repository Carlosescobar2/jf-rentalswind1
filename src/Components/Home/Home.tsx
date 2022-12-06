import React, { FC } from "react";
import FrontTrailerImg from "../../assets/FrontTrailerImg.jpeg";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { Icon } from "@iconify/react";
const Home: FC = () => {
  return (
    <div className="w-full h-screen  text-center bg-[url('/src/assets/FrontTrailerImg.jpeg')] bg-no-repeat bg-cover bg-center ">
      <div className=" bg-blue-800 w-full h-screen text-center opacity-60">
        {/* <img
        src={FrontTrailerImg}
        className="w-full h-full object-cover absolute  opacity-30"
      /> */}
        <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center ">
          <div>
            <h1 className="py-4 text-white">J&F Trailer Rentals</h1>
            <div>
              <ul className="hidden md:flex text-white">
                <li className="ml-10 text-sm uppercase hover:border-b ">
                  Car Haulers
                </li>
                <li className="ml-10 text-sm uppercase hover:border-b">
                  Dump Trailers
                </li>
                <li className="ml-10 text-sm uppercase hover:border-b">
                  Material and equipment hauling
                </li>
              </ul>
            </div>
            <h3 className="py-5 text-white">
              All trailers come fully equipped with:
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-white">
              <div className="p-6  hover:scale-105 ease-in duration-300">
                <div className="grid grid-cols-2 gap-4 justify-center items-center">
                  <div className="m-auto">
                    <Icon
                      icon="material-symbols:check-circle-outline"
                      color="green"
                      fontSize="50px"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <h3>Winch</h3>
                  </div>
                </div>
              </div>
              <div className="p-6  hover:scale-105 ease-in duration-300">
                <div className="grid grid-cols-2 gap-4 justify-center items-center">
                  <div className="m-auto">
                    <Icon
                      icon="material-symbols:check-circle-outline"
                      color="green"
                      fontSize="50px"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <h3>Ramps</h3>
                  </div>
                </div>
              </div>
              <div className="p-6  hover:scale-105 ease-in duration-300">
                <div className="grid grid-cols-2 gap-4 justify-center items-center">
                  <div className="m-auto">
                    <Icon
                      icon="material-symbols:check-circle-outline"
                      color="green"
                      fontSize="50px"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <h3>Straps</h3>
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
    </div>
  );
};

export default Home;

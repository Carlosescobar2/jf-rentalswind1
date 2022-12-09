import React from "react";
import Rental1img from "../../assets/Rental1img.jpeg";
import { Icon } from "@iconify/react";

const Rental = () => {
  return (
    <div className="w-full lg:h-screen p-2 flex  py-16 justify-center items-start mb-5">
      <div className="justify-center items-center grid lg:grid-cols-1  ">
        <h3 className="text-center text-sm">
          Rent Trailers Hourly,Daily, or Weekly
        </h3>
        <h1 className="text-center text-3xl">Featured Rental:</h1>
        <div className="  flex items-center justify-center p-20 hover:scale-105 ease-in duration-300">
          <img src={Rental1img} width="400" height="100" />
          <div className=" ml-20">
            <Icon icon="mdi:weight-pound" />
            <p className="text-2xl font-semibold">LoadTrail 7.5' x 22'</p>
            <p>$120 For 24 hours Mon-Thurs</p>
            <p>$150 For 24 hours Fri-Sun</p>
            <p>$700 For a Week</p>
            <button className="w-full p-4 bg-black text-white mt-4">
              Rent
            </button>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Rental;

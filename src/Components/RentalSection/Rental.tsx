import React from "react";
import Rental1img from "../../assets/Rental1img.jpeg";

const Rental = () => {
  return (
    <div className="w-full md:h-screen p-2 flex py-10 justify-center items-start mb-5">
      <div className="justify-center items-center m-auto md:gird grid-cols-3 gap-8">
        <h3 className="text-center text-sm">
          Rent Trailers Hourly,Daily, or Weekly
        </h3>
        <h1 className="text-center text-3xl">Featured Rental:</h1>
        <div className=" mt-30 shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-2 hover:scale-105 ease-in duration-300">
          <img src={Rental1img} width="350" height="100" />
          <div>
            <p>LoadTrail 7.5' x 22'</p>
            <p>$120 For 24 hours Mon-Thurs</p>
            <p>$150 For 24 hours Fri-Sun</p>
            <p>$700 For a Week</p>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Rental;

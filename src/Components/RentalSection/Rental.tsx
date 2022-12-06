import React from "react";
import Rental1img from "../../assets/Rental1img.jpeg";

const Rental = () => {
  return (
    <div className="w-full md:h-screen p-2 flex py-16 justify-center items-start mb-5">
      <div className="">
        <h3>Rent Trailers Hourly,Daily, or Weekly</h3>
        <h1>Featured Rental:</h1>
      </div>
      <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
        <img src={Rental1img} />
      </div>
    </div>
  );
};

export default Rental;

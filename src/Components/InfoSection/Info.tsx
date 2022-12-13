import React from "react";
import { Icon } from "@iconify/react";

const Info: React.FC = () => {
  return (
    <div className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-1 gap-8  ">
        <div className="col-span-3 pb-40">
          <h2 className="py-2 uppercase text-2xl font-semibold tracking-widest mx-auto text-black text-center ">
            What You Need To Rent Our Trailers
          </h2>
          <p className="pt-5 text-l text-gray-600 w-1/2 mx-auto">
            When renting with us bring your ID, auto insurance, and a deposit
            fee. Once the trailer is returned with nothing missing or damaged
            your deposit will be given back.
          </p>

          <p className="py-2 text-l text-gray-600 w-1/2 mx-auto">
            J&F trailers will ensure you have a quality trailer that’s clean and
            works properly.
          </p>
        </div>
        <div className="w-120 h-40 bg-white grid grid-cols-1">
          <div className="w-120 h-40">Box 1</div>
          <div className=" w-120 h-40 grid grid-cols-2 ">
            <div className=" flex flex-row w-full h-full justify-center items-center bg-black">
              <Icon
                icon="icon-park-outline:facebook-one"
                fontSize="60px"
                color="white"
                className="mt-10 ml-10"
              />
              <p className="text-center text-white">J&FTrailerRentals</p>
            </div>
            <div className="w-full h-full bg-black">
              Jftrailerrentals@gmail.com (209)985-5943
            </div>
          </div>
        </div>

        {/* <div className="justify-center items-center  ">
          <div className="w-120 h-40 bg-white flex items-center justify-center">
            <p className="text-center text-xl font-semibold">
              Feel free, to message me the Pick up/drop off Adresses for a quote
            </p>
          </div>
        </div> */}

        {/* <div className="justify-center items-center">
          <div className="w-120 h-40 bg- outline">
            <p className="text-center text-xl ">
              Feel free, to message me the Pick up/drop off Adresses for a quote
            </p>
          </div>
          <div className="w-120 h-40 bg-black outline"></div>
        </div> */}
      </div>
    </div>
  );
};

export default Info;

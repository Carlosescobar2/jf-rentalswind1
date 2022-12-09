import React from "react";

const Info: React.FC = () => {
  return (
    <div className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-1 gap-8  ">
        <div className="col-span-2 pb-40">
          <h2 className="py-2 uppercase text-2xl font-semibold tracking-widest mx-auto text-black text-center ">
            What You Need To Rent Our Trailers
          </h2>
          <p className="py-2 text-l text-gray-600 w-1/2 mx-auto">
            When renting with us bring your ID, auto insurance, and a deposit
            fee. Once the trailer is returned with nothing missing or damaged
            your deposit will be given back.
          </p>

          <p className="py-2 text-l text-gray-600 w-1/2 mx-auto">
            J&F trailers will ensure you have a quality trailer that’s clean and
            works properly.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Info;

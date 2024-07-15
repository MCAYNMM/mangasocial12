import React from "react";

const CardComming = ({ poster, title, genres, update }) => {
  return (
    <div className=" cursor-pointer">
      <div className="ease-in-out duration-300 hover:scale-105 transition max-[435px]:rounded-lg">
        <img
          className="w-[712px] h-[410px] max-[435px]:h-[250px] max-[435px]:w-full max-[435px]:rounded-xl"
          src={poster}
          alt=""
        />
      </div>

      <div className="text-white mt-3">
        <div className="">
          <h3 className="text-white lg:text-[26px] 2xl:text-[28px] leading-10 font-semibold overflow-hidden text-ellipsis whitespace-nowrap w-[400px] max-[435px]:!w-full">
            {title}
          </h3>
          <p className="lg:text-[18px] 2xl:text-[20px] leading-8 font-semibold ">
            Author:Takeshi
          </p>
        </div>
        <div className="flex items-center flex-wrap  gap-3 py-3">
          {genres
            .split(",")
            .slice(0, 5)
            ?.map((item, index) => (
              <div
                className="p-[10px] max-[435px]:px-4 max-[435px]:py-2 rounded-[33px] bg-[#363636]"
                key={index}
              >
                <p className="text-[20px] max-[435px]:text-xs">{item}</p>
              </div>
            ))}
        </div>
        <p className="lg:text-[20px] 2xl:text-[22px] leading-8 font-semibold">
          Expected realease date: {update}
        </p>
      </div>
    </div>
  );
};

export default CardComming;

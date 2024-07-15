import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const CardNovel = ({ poster, title, rate, update, chapter, path_segment }) => {
  const sv = useSelector((state) => state.server.sv);

  return (
    <NavLink to={`/${sv}/novel/${path_segment}`}>
      <div className=" cursor-pointer">
        <div className="rounded-xl group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
          <div className="w-full h-[300px] max-[435px]:h-[160px]">
            <img
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 rounded-[12px]"
              src={poster}
              alt=""
            />
          </div>
        </div>

        <div className="text-[#FFFFFF]">
          <div className="mt-5 max-[435px]:mt-1 max-[435px]:w-full ">
            <p className="text-[#FFFFFF] lg:text-[16px] max-[435px]:w-full  2xl:text-[18px] leading-10  font-semibold overflow-hidden whitespace-normal w-[200px]   max-[435px]:leading-[1.75rem]">
              {title}
            </p>
            <NavLink to={`/${sv}/chapter/${path_segment}/${chapter}`}>
              <p className="lg:text-[16px] 2xl:text-[18px] max-[435px]:text-[13px] leading-8 font-semibold  mt-3 max-[435px]:mt-1">
                Chapter: {chapter}
              </p>
            </NavLink>
          </div>
          {rate && (
            <div className="flex items-center gap-[12px] max-[435px]:gap-2">
              <img
                className="w-5 h-5 max-[435px]:w-4 max-[435px]:h-4"
                src="/images/star.png"
                alt=""
              />
              <div className="text-[20px] max-[435px]:text-[13px]">
                <span className="">{rate}</span>
                <span className="">/5</span>
              </div>
            </div>
          )}

          {update && (
            <div className="px-[10px] py-[5px] max-[435px]:w-full bg-[#363636] w-max rounded-[33px] mt-3 max-[435px]:mt-2 max-[435px]:py-[0px] max-[435px]:px-[0px]">
              <p className="max-[435px]:w-full max-[435px]:truncate max-[435px]:text-center lg:text-[16px] 2xl:text-[18px] max-[435px]:text-[12px] leading-8 font-semibold">
                Update: {update}
              </p>
            </div>
          )}
        </div>
      </div>
    </NavLink>
  );
};

export default CardNovel;

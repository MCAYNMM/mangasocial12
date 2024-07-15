import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const NovelCard2 = ({ poster, title, rate, update, chapter, path_segment }) => {
  const sv = useSelector((state) => state.server.sv);
  return (
    <NavLink to={`/${sv}/novel2/${path_segment}`}>
      <div className=" cursor-pointer">
        <div className="rounded-xl group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
          <div className="w-full h-[300px]">
            <img
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 rounded-[12px]"
              src={poster}
              alt=""
            />
          </div>
        </div>

        <div className="text-[#FFFFFF]">
          <div className="mt-5">
            <p className="text-[#FFFFFF] lg:text-[16px] 2xl:text-[18px] leading-10 font-semibold overflow-hidden whitespace-normal w-[200px]">
              {title}
            </p>
            <div
            // to={`/${sv}/novel2/${path_segment}/${chapter}`}
            >
              <p className="lg:text-[16px] 2xl:text-[18px] leading-8 font-semibold mt-3">
                Chapter: {chapter}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-[12px]">
            <img className="w-5 h-5" src="/images/star.png" alt="" />
            <div className="text-[20px]">
              <span className="">{rate}</span>
              <span className="">/5</span>
            </div>
          </div>

          <div className="px-[10px] py-[5px] bg-[#363636] w-max rounded-[33px] mt-3">
            <p className="lg:text-[16px] 2xl:text-[18px]  leading-8 font-semibold">
              Update: {update}
            </p>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default NovelCard2;

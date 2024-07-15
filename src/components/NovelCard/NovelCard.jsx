import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const NovelCard = ({ chapter, title, poster, des, slug, chapterLink,chapterName }) => {
  // console.log("check link", chapterLink);
  const sv = useSelector((state) => state.server.sv);
  const readmode = useSelector((state) => state.ReadMode.readmode);
  const user_id = sessionStorage.getItem("user_id");
  const chapterNumber = chapter?.replace(
    `http://apimanga.mangasocial.online/rmanga/${slug}/`,
    ""
  );
  const chapterNumberReadMode = chapterLink
  // console.log("chapter",chapterLink);
   const getChapterFromUrl = (url) => {
    const parts = url.split('/');
    return parts[parts.length - 1];
   };
   const getChapterFromUrl2 = (url) => {
    const parts = url.split('/');
    return parts[parts.length - 2];
  };
  // console.log("check slug", chapterLink)

  const truncatedDes = des.length > 50 ? `${des.slice(0, 50)}...` : des;
  return (
    <>
     
        <NavLink to={`/${sv}/novel2/${slug}/${getChapterFromUrl(chapterNumberReadMode)}`}>
          <div className=" flex items-center gap-[239px] cursor-pointer py-[24px] px-[48px] hover:bg-[#000] border-b-2 border-gray-500 rounded-xl">
            {/* chapter info */}
            <div className="flex items-center gap-[12px] ">
              <img
                src={poster}
                alt=""
                className="h-[172px] w-[172px] bg-cover bg-no-repeat rounded-xl bg-center"
              />
              <div>
                <div className="text-[24px] font-semibold leading-[32px] text-white ">
                  {`${title} - ${chapterName} `}
                </div>
                <div className="text-[22px] font-semibold leading-[28px] text-white ">
                  12/07/2023
                </div>
              </div>
            </div>
            <div className="text-[24px] leading-[32px] font-semibold text-white">
              {truncatedDes}
            </div>
            {user_id ? (
              <div className="text-[24px] leading-[32px] font-semibold text-white">
                Read
              </div>
            ) : (
              <div className="text-[24px] leading-[32px] font-semibold text-white">
                Login
              </div>
            )}
          </div>
        </NavLink>
      
    </>
  );
};

export default NovelCard;
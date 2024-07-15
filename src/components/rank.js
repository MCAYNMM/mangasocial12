import React, { useState, useEffect } from "react";
import prodApis from "../api/home";
import RankItem from "./rankItem";
import { useSelector } from "react-redux";

const Rank = () => {
  const [rankComics, setRankComics] = useState([]);
  //default rank week = 8
  const [filterTime, setFilterTime] = useState(8);
  const sv = useSelector((state) => state.server.sv);
  useEffect(() => {
    getRankComics(filterTime);
  }, [sv]);
  const changeTime = (index) => {
    getRankComics(index);
    console.log(index);
  };

  const getRankComics = async (index) => {
    const rankComicsResponse = await prodApis.server(sv);
    setRankComics(rankComicsResponse.data[index].data);
  };

  return (
    <div className="px-[65px] pb-[60px] max-[435px]:px-4 max-[435px]:pb-4">
      <div className="text-white flex items-center text-[30px] font-semibold gap-[30px] pb-[30px] max-[435px]:!pb-4 max-[435px]:text-xl">
        <span
          onClick={() => changeTime(8)}
          className=" cursor-pointer hover:underline"
        >
          Week
        </span>
        <span
          onClick={() => changeTime(9)}
          className=" cursor-pointer hover:underline"
        >
          Month
        </span>
        <span
          onClick={() => changeTime(10)}
          className=" cursor-pointer hover:underline"
        >
          Year
        </span>
      </div>
      <div className="flex flex-wrap flex-row max-[435px]:justify-center gap-4 w-full">
        {rankComics?.slice(0, 20).map((item, index) => (
          <RankItem
            key={index}
            rank={index + 1}
            categories={item?.categories}
            title={item?.title_manga}
            poster={item?.image_poster_link_goc}
            path_segment_manga={item?.path_segment_manga}
          />
        ))}
      </div>
    </div>
  );
};

export default Rank;

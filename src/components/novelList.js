import React, { memo } from "react";
import useFetchNovel from "../hooks/useFetchNovel";
import Loading from "./Loading/Loading";
import { Spin } from "antd";
import NovelCard from "../pages/Novel/NovelCard";

const NovelList = memo(function NovelList({ index }) {
  const newRelease = useFetchNovel(index);
  // console.log(newRelease);
  const firstFiveItem = newRelease.slice(0, 10);
  // console.log("check path seg", firstFiveItem[0]);
  return (
    <>
      <div className="grid max-[435px]:grid-cols-3 md:grid-cols-7 2xl:grid-cols-10  gap-[20px] px-[60px] pb-[60px]">
        {firstFiveItem.map((item, index) => (
          <NovelCard
            key={index}
            poster={item?.image_poster_link_goc}
            title={item?.title_manga}
            rate={item?.rate}
            update={item.time_release}
            chapter={item?.chapter_new}
            path_segment={item?.path_segment_manga}
          />
        ))}
      </div>
    </>
  );
});

export default NovelList;

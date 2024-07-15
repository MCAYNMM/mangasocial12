import React, { useState } from "react";
import CardManga from "./cardManga";
import useFetch from "../hooks/useFetch";
import { useSelector } from "react-redux";

const ComedyComics = () => {
  const comedyComics = useFetch(5);
  const firstFiveItem = comedyComics.slice(0, 10);
  const [readMode, setReadMode] = useState(
    useSelector((state) => state.ReadMode.readmode)
  );

  const sv = useSelector((state) => state.server.sv);

  return (
    <>
      {readMode === false ? (
        <div className="grid max-[435px]:grid-cols-3 md:grid-cols-7 2xl:grid-cols-10  gap-[20px] px-[60px] max-[435px]:px-4 max-[435px]:gap-4 max-[435px]:pb-4 pb-[60px]">
          {firstFiveItem.map((item, index) => (
            <CardManga
              key={index}
              poster={item?.image_poster_link_goc}
              title={item?.title_manga}
              rate={item?.rate}
              update={item?.time_release}
              chapter={item?.chaper_new || item?.chaper_new}
              chapterLink={item?.url_chapter || ""}
              path_segment={
                item?.path_segment_manga
                  ? item?.path_segment_manga
                  : (item?.url_manga && sv === 4) ||
                    sv === 9 ||
                    sv === 11 ||
                    sv === 12
                  ? item?.url_manga.replace(
                      "https://apimanga.mangasocial.online/rnovel/",
                      ""
                    )
                  : item?.url_manga.replace(
                      "https://apimanga.mangasocial.online/rmanga/",
                      ""
                    )
              }
            />
          ))}
        </div>
      ) : (
        <div className="grid max-[435px]:grid-cols-3 md:grid-cols-7 2xl:grid-cols-10  gap-[20px] px-[60px] max-[435px]:px-4 max-[435px]:gap-4 max-[435px]:pb-4 pb-[60px]">
          {firstFiveItem.map((item, index) => (
            <CardManga
              key={index}
              poster={item?.image_poster_link_goc || item?.poster_novel}
              title={item?.title_manga || item?.title_novel}
              rate={item?.rate || item?.time_update}
              update={item.time_release || item?.time_update}
              chapter={item.chapter_new || item?.title_chapter}
              chapterLink={item.url_chapter || item?.id_chapter}
              path_segment={
                item?.path_segment_manga
                  ? item?.path_segment_manga
                  : item?.url_manga
                  ? item?.url_manga.replace(
                      "https://apimanga.mangasocial.online/rmanga/",
                      ""
                    )
                  : item.link_server_novel.replace(
                      `https://apimanga.mangasocial.online/web/rnovel/${sv}/`,
                      ""
                    )
              }
            />
          ))}
        </div>
      )}
    </>
  );
};

export default ComedyComics;

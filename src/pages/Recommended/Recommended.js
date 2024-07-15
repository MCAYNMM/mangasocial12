import React, { useEffect, useState } from "react";
import CardManga from "../../components/cardManga";
import useFetch from "../../hooks/useFetch";
import { useSelector } from "react-redux";

const Page_Recommended = () => {
  const recommended = useFetch(2);
  const sv = useSelector((state) => state.server.sv);
  const [readMode, setReadMode] = useState(
    useSelector((state) => state.ReadMode.readmode)
  );
  const getChapterFromUrl2 = (url) => {
    const parts = url.split("/");
    return parts[parts.length - 2];
  };
  const getChapterFromUrl = (url) => {
    const parts = url.split("/");
    return parts[parts.length - 1];
  };
  function getRandomGenres(arr, count) {
    const shuffled = arr.slice();
    const result = [];

    for (let i = 0; i < count; i++) {
      const randomIndex = Math.floor(Math.random() * shuffled.length);
      const selectedMonth = shuffled.splice(randomIndex, 1)[0];

      result.push(selectedMonth);
    }

    return result;
  }

  return (
    <div className="bg-black px-[60px] pb-[60px]">
      {readMode ? (
        <div className="grid grid-cols-7 2xl:grid-cols-10 gap-[20px]">
          {recommended.map((item, index) => (
            <CardManga
              key={index}
              poster={item?.image_poster_link_goc}
              title={item?.title_manga}
              rate={item?.rate}
              update={item?.time_release}
              chapter={item?.chapter_new || item?.chaper_new}
              chapterLink={item?.url_chapter}
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
        <div className="grid grid-cols-7 2xl:grid-cols-10 gap-[20px]">
          {recommended.map((item, index) => (
            <CardManga
              key={index}
              poster={item?.image_poster_link_goc}
              title={item?.title_manga}
              rate={item?.rate}
              update={item?.time_release}
              chapter={item?.chapter_new || item?.chaper_new}
              chapterLink={item?.url_chapter}
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
      )}
    </div>
  );
};

export default Page_Recommended;

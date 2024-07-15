import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardManga from "../../components/cardManga";
import CardNovel from "../../components/cardNovel";
import NovelCard from "../Novel/NovelCard";
import NovelCard2 from "../Novel/NovelCard2";

const MangaCategory = () => {
  const [manga, setManga] = useState([]);
  const params = useParams();
  const { category } = params;
  console.log(manga);

  const getManga = async () => {
    const resposne = await axios.get(
      `https://apimanga.mangasocial.online/manga-categories/${category}`
    );
    setManga(resposne.data);
  };

  useEffect(() => {
    getManga();
  }, []);
    const extractNovelId = (url) => {
    const parts = url.split('/');
    return parts.find(part => part.startsWith('novel_'));
  };
   const getChapterFromUrl = (url) => {
    const parts = url.split('/');
    return parts[parts.length - 1];
  };
   const getChapterFromUrl2 = (url) => {
    const parts = url.split('/');
    return parts[parts.length - 2];
   };

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  return (
    <div className="bg-black px-[60px] pb-[60px]">
      <div className="">
        <h2 className="text-[57px] leading-[64px] font-semibold text-[#FFFFFF] pt-[50px] pb-[60px]">
          {capitalizeFirstLetter(category)}
        </h2>
      </div>
      <div className="grid max-[435px]:grid-cols-3 md:grid-cols-7 2xl:grid-cols-10 gap-[20px]">
        {manga.slice(0, 20).map((item, index) => <NovelCard2
              key={index}
              poster={item?.poster}
              title={item?.title}
              rate={item?.rate}
              update={item.time_release}
              chapter={getChapterFromUrl(item?.chaper_new || "/")}
              path_segment={ item?.id_manga.includes(".html") ? getChapterFromUrl(item?.id_manga.replace('.html', '')) :getChapterFromUrl(item?.id_manga || "/")}
            />
         
          
        )}
      </div>
    </div>
  );
};

export default MangaCategory;

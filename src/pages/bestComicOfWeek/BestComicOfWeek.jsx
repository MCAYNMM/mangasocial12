import React from 'react'
import CardManga from "../../components/cardManga";
import useFetch from "../../hooks/useFetch";

export default function BestComicOfWeek() {
    const top15 = useFetch(4);

    return (
        <div className="bg-black px-[60px] pb-[60px]">
            <div className="grid grid-cols-10 gap-[20px]">
                {top15.slice(0, 10).map((item, index) => (
                    <CardManga
                        key={index}
                        chapter={item?.chapter_new}
                        poster={item?.image_poster_link_goc}
                        title={item?.title_manga}
                        rate={item?.rate}
                        update={item?.time_release}
                        chapterLink={item.url_chapter}
                        path_segment={item?.path_segment_manga}
                    />
                ))}
            </div>
        </div>
    );
}

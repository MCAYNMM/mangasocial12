// Import thư viện axios
import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MangaCategory from "../MangaCategory/MangaCategory";

const ViewCategory = () => {
  // State để lưu trữ dữ liệu từ API
  const [data, setData] = useState([]);

  // Effect hook để gọi API khi component được mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Gọi API sử dụng axios
        const response = await axios.get(
          "https://apimanga.mangasocial.online/manga-categories"
        );
        setData(response.data); // Lưu dữ liệu vào state
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Gọi hàm fetchData
    fetchData();
  }, []); // Dependency array trống đồng nghĩa với việc gọi chỉ khi component mount

  return (
    <div className="bg-black  shadow-xl shadow-red-600">
      <h1 className="flex justify-center pt-[30px] pb-[30px] font-bold text-[57px] text-white">
        All Categories
      </h1>
      <div className="flex justify-around items-center pb-[40px]">
        <div className="grid grid-cols-5 gap-x-[20px] gap-y-[20px]">
          {data ? (
            data.map((item) => (
              <Link
                to={`/genres/${item?.category_name}`}
                key={item?.category_name}
              >
                <div className="w-[250px] h-[400px] group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:rounded-md rounded-md ml-[8px] hover:shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.2),_10px_10px_30px_4px_rgba(45,78,255,0.25)]">
                  <img
                    src={item?.image}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125 shadow-md shadow-indigo-500/50"
                  ></img>

                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                  <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                    <h2 className="font-dmserif text-xl font-bold text-white">
                      {item?.category_name}
                    </h2>
                    <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      {item?.decription}
                    </p>
                    <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
                      See More
                    </button>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ViewCategory;

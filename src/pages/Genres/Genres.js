import axios from "axios";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Page_Genres = () => {
  const [genres, setGenres] = useState([]);
  const getGenres = async () => {
    const response = await axios.get("https://apimanga.mangasocial.online/manga-categories");
    setGenres(response.data);
  };
  useEffect(() => {
    getGenres();
  }, []);

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
    <div className="Wapper_Genres">
      <div className="Wapper_Genres-slide">
        <div className="Wapper_Genres-box">
          <Link to="/all-category">
            <img
              className="Wapper_Genres-slide-img"
              src="/images/Genres/img1.png"
              alt="x"
            ></img>
          </Link>
        </div>
        <div className="Wapper_Genres-box">
          {" "}
          <Link to="/all-category">
            <img
              className="Wapper_Genres-slide-img"
              src="/images/Genres/img2.png"
              alt="x"
            ></img>
          </Link>
        </div>
        <div className="Wapper_Genres-box">
          <Link to="/all-category">
            <img
              className="Wapper_Genres-slide-img"
              alt="x"
              src="/images/Genres/img3.png"
            ></img>
          </Link>
        </div>
        <div className="Wapper_Genres-box">
          <Link to="/all-category">
            <img
              className="Wapper_Genres-slide-img"
              alt="x"
              src="/images/Genres/img4.png"
            ></img>
          </Link>
        </div>
      </div>
      <div className="Wapper_Genres-title">
        <h1 className="font-bold text-[57px]">Genres</h1>
      </div>

      <div className="flex items-center justify-center">
        <div className="grid grid-cols-4 gap-7">
          {getRandomGenres(genres, 8)?.map((item, index) => (
            <NavLink to={item?.category_name.toLowerCase()} key={index}>
              <div className="rounded-xl group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                <div className="w-[417px] h-[287px]">
                  <img
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                    src={item?.image}
                    alt=""
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0 mb-5">
                  <h1 className="font-dmserif text-3xl font-bold text-white">
                    {item?.category_name}
                  </h1>
                  <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    {item?.decription}
                  </p>
                </div>
              </div>
            </NavLink>
          ))}
        </div>
      </div>

      <div className="Wapper_Genres-footer">
        <h1 className="font-bold text-[57px]">Most Searched Topics</h1>
        <div className="Wapper_Genres-footer-tag pb-[20px]">
          <p>naruto</p>
          <p>naruto</p>
          <p>naruto</p>
          <p>naruto</p>
        </div>
      </div>
    </div>
  );
};
export default Page_Genres;

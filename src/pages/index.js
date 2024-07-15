import CommingSoon from "../components/commingSoon";

import Rank from "../components/rank";
import ComicRecent from "../components/comicRecent";
import News from "../components/news";
import { Link } from "react-router-dom";
import NewUsers from "../components/newUsers";
import Comments from "../components/comments";
import NewRelease from "../components/newRelease";
import Page_Comedy from "./Comedy/Comedy";
import Page_Recommended from "./Recommended/Recommended";
import BestComicOfWeek from "./bestComicOfWeek/BestComicOfWeek";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Recommended from "../components/recommended";
import ComedyComics from "./../components/comeryComics";
import Top15Comics from "../components/top15Comics";
import FreeComic from "../components/freeComic";
import NewsComics from "../components/newsComics";
import ToggleReadMode from "../components/ToggleBtn/ToggleReadMode";
import ContactUs from "./ContactUs";
import CustomizeSpin from "../components/spin/CustomizeSpin";
// import { Space, Spin } from "antd";
// import "antd/dist/antd.css";

export default function Index() {
  let sv = useSelector((state) => state.server.sv);
  const [loading, setLoading] = useState(true);
  const readmode = useSelector((state) => state.ReadMode.readmode);
  // console.log("check read mode");
  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 1000);
  // }, []);
  return (
    <div className="cont">
      {/* <CustomizeSpin /> */}

      <div className="title-released-comic  max-[435px]:px-4">
        <div className="max-[435px]:!text-2xl  text-[50px]  max-[435px]:relative text-white font-semibold">
          New Released Comic
          <div className="hidden max-[435px]:block w-[100px] h-[7px] bg-[#F45F17] -top-[40%] rounded-[35px] left-0 absolute "></div>
        </div>
        <Link to={`/${sv}/newRelease`}>
          <p className="max-[435px]:!text-xl">See all</p>
        </Link>
      </div>
      <NewRelease key={readmode} />

      <div className="title-released-comic  max-[435px]:px-4">
        <div className="max-[435px]:!text-2xl  text-[50px] max-[435px]:relative text-white font-semibold">
          Recent Comics
          <div className="hidden max-[435px]:block w-[100px] h-[7px] bg-[#F45F17] -top-[40%] rounded-[35px] left-0 absolute "></div>
        </div>
        <Link to={`/${sv}/recent`}>
          <p className="max-[435px]:!text-xl">See all</p>
        </Link>
      </div>
      <ComicRecent></ComicRecent>

      <div className="title-released-comic  max-[435px]:px-4">
        <div className="max-[435px]:!text-2xl  text-[50px] max-[435px]:relative text-white font-semibold">
          Recommended Comics
          <div className="hidden max-[435px]:block w-[100px] h-[7px] bg-[#F45F17] -top-[40%] rounded-[35px] left-0 absolute "></div>
        </div>
        <Link to={`/${sv}/recommended`}>
          <p className="max-[435px]:!text-xl">See all</p>
        </Link>
      </div>
      <Recommended />
      <div className="title-released-comic  max-[435px]:px-4">
        <div className="max-[435px]:!text-2xl  text-[50px] max-[435px]:relative text-white font-semibold">
          Comming Soon Comics
          <div className="hidden max-[435px]:block w-[100px] h-[7px] bg-[#F45F17] -top-[40%] rounded-[35px] left-0 absolute "></div>
        </div>
        <Link to={`/${sv}/commingsoon`}>
          <p className="max-[435px]:!text-xl">See all</p>
        </Link>
      </div>
      <CommingSoon></CommingSoon>

      <div className="title-released-comic  max-[435px]:px-4">
        <div className="max-[435px]:!text-2xl  text-[50px] max-[435px]:relative text-white font-semibold">
          Top 15 Best Comics of the Week
          <div className="hidden max-[435px]:block w-[100px] h-[7px] bg-[#F45F17] -top-[40%] rounded-[35px] left-0 absolute "></div>
        </div>
        <Link>
          <p className="max-[435px]:!text-xl">See all</p>
        </Link>
      </div>
      <Top15Comics />

      <div className="title-released-comic  max-[435px]:px-4">
        <div className="max-[435px]:!text-2xl  text-[50px] max-[435px]:relative text-white font-semibold">
          Comedy Comics
          <div className="hidden max-[435px]:block w-[100px] h-[7px] bg-[#F45F17] -top-[40%] rounded-[35px] left-0 absolute "></div>
        </div>
        <Link>
          <p className="max-[435px]:!text-xl">See all</p>
        </Link>
      </div>
      <ComedyComics />
      <div className="title-released-comic  max-[435px]:px-4">
        <div className="max-[435px]:!text-2xl  text-[50px] max-[435px]:relative text-white font-semibold">
          Free Comics
          <div className="hidden max-[435px]:block w-[100px] h-[7px] bg-[#F45F17] -top-[40%] rounded-[35px] left-0 absolute "></div>
        </div>
        <Link to={`/${sv}`}>
          <p className="max-[435px]:!text-xl">See all</p>
        </Link>
      </div>
      <FreeComic></FreeComic>
      <div className="title-released-comic  max-[435px]:px-4">
        <div className="max-[435px]:!text-2xl  text-[50px] max-[435px]:relative text-white font-semibold">
          News
          <div className="hidden max-[435px]:block w-[100px] h-[7px] bg-[#F45F17] -top-[40%] rounded-[35px] left-0 absolute "></div>
        </div>
        <Link>
          <p className="max-[435px]:!text-xl">See all</p>
        </Link>
      </div>
      <div className="news max-[435px]:flex max-[435px]:flex-col  max-[435px]:px-4">
        <NewsComics />
        <NewUsers />
      </div>
      <div className="title-released-comic  max-[435px]:px-4">
        <div className="max-[435px]:!text-2xl  text-[50px] max-[435px]:relative text-white font-semibold">
          Rank
          <div className="hidden max-[435px]:block w-[100px] h-[7px] bg-[#F45F17] -top-[40%] rounded-[35px] left-0 absolute "></div>
        </div>
      </div>
      <Rank></Rank>
      <div className="title-released-comic  max-[435px]:px-4">
        <div className="max-[435px]:!text-2xl  text-[50px] max-[435px]:relative text-white font-semibold">
          Comment
          <div className="hidden max-[435px]:block w-[100px] h-[7px] bg-[#F45F17] -top-[40%] rounded-[35px] left-0 absolute "></div>
        </div>
      </div>
      <Comments></Comments>
      <ToggleReadMode key={readmode + 1} />

      {/* <div className="slider">
          <SliderImg
            arrImage={[slider1, slider2, slider3, slider4]}
          ></SliderImg>
          <div className="slider2">
            <SliderImg2 arrImage2={[slider5, slider6, slider7]}></SliderImg2>
          </div>
        </div>
        <img className="blur-dots" src="/images/Vector 2.svg" alt=""></img>
        <div className="background-dots"></div> */}
    </div>
  );
}

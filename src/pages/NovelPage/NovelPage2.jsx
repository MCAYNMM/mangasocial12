import React, { useEffect, useState } from "react";
import "./ChapterPage.scss";
import ChapterCard from "../../components/ChapterCard/ChapterCard";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Comments from "../../components/comments";
import CMT from "../../components/cmt";
import { Buffer } from "buffer";
import Cookies from "js-cookie";
import CMT_list from "../../components/cmt_list";
import Loading from "../../components/Loading/Loading";
import NovelCard from "../../components/NovelCard/NovelCard";
import NovelCard2 from "../Novel/NovelCard2";
import ChapterCard2 from "../../components/ChapterCard/ChapterCard2";

const NovelPage2 = () => {
  const [showTab, setShowTab] = useState(true);
  const [chapterDetail, setChapterDetail] = useState([]);
  const [listChapter, setListChapter] = useState([]);

  const [visibleChapterCount, setVisibleChapterCount] = useState(12);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [comment, setComment] = useState("");
  const [commentDetail, setCommentDetail]= useState([])
  // console.log("check comment", comment);
  const [loading, setLoading] = useState(true);

  const params = useParams();
  const { slug } = params;
  const sv = useSelector((state) => state.server.sv);
  const readmode = useSelector((state) => state.ReadMode.readmode);
  const user_id = sessionStorage.getItem("user_id");
  const [active, setActive] = useState(false)
  // console.log("check read mode", readmode)
  const handleActive = (string) => {
    if(string === "list"){
      setActive(!active)
    }
  }

  const handleShowTab = () => {
    setShowTab(!showTab);
  };
  const commentOnchange = (e) => {
    setComment(e.target.value);
  };
  const handleSendComment = async () => {
    try {
      const res = await axios.post(
        `https://apimanga.mangasocial.online/cmanga/${slug}/${user_id}/`,
        { content: comment }
      );
      // console.log("response:", res);
      // console.log("comment:", comment);
      if (res) { 
        let resc = await axios.get(`https://apimanga.mangasocial.online/cmanga/${slug}`)
        setComment("")

        if (resc) setCommentDetail(resc.data)
      }
    } catch (error) {
      console.log(error);
      console.log("comment:", comment);
      console.log(slug);
    }
  };
  //fetch data chapter
  const fetchChapterDetail = async () => {
    try {
     
        const response = await axios.get(
          `https://apimanga.mangasocial.online/rmanga/${slug}`
        );
        setChapterDetail(response.data);
        setListChapter(response.data.chapters);
        // setCommentDetail(response.data.comment)
        setLoading(false);
      
    } catch (error) {
      console.log(error);
      console.log("slug:", slug);
    }
  };

  const fetchListComment = async () => { 
    let resc = await axios.get(`https://apimanga.mangasocial.online/cmanga/${slug}`)
    if(resc) setCommentDetail(resc.data)
  }
 

  useEffect(() => {
    fetchChapterDetail();
    fetchListComment()
  }, []);

  const handleSeeMore = () => {
    setVisibleChapterCount((prevCount) => prevCount + 10);
  };

  const sortedChapters = Object.keys(listChapter).sort((a, b) => {
    // Lấy 3 số sau ký tự "chapter-"
    const getLastNumber = (url) =>
      parseInt(
        url.slice(url.indexOf("chapter-") + 8, url.indexOf("chapter-") + 11),
        10
      );

    const chapterNumberA = getLastNumber(a);

    const chapterNumberB = getLastNumber(b);

    return chapterNumberA - chapterNumberB;
  });

  const arrChapterLink = Object.keys(listChapter);




  const linkList = arrChapterLink.map(function (link) {
    return listChapter[link];
  });




    const getChapterFromUrl = (url) => {
    const parts = url.split('/');
    return parts[parts.length - 1];
  };
   const getChapterFromUrl2 = (url) => {
    const parts = url.split('/');
    return parts[parts.length - 2];
   };
  
  const viewsString = chapterDetail?.views || "";
  const startIndex = viewsString.lastIndexOf("has ") + 4;
  const viewsPart = viewsString.substring(startIndex);
  const truncatedDescription =
    chapterDetail?.description?.slice(0, 180) + "... ";
  const fullDescription = chapterDetail?.description;

  let listServer = [
    { src: "/images/ChapterPage/GB.png", title: "GB" },
    { src: "/images/ChapterPage/ES.png", title: "ES" },
    { src: "/images/ChapterPage/FR.png", title: "FR" },
    { src: "/images/ChapterPage/HU.png", title: "HU" },
    { src: "/images/ChapterPage/DK.png", title: "DK" },
    { src: "/images/ChapterPage/IT.png", title: "IT" },
    { src: "/images/ChapterPage/SA.png", title: "SA" },
  ];

  return (
    <div style={{ zoom: 0.9 }}>
      <div
        className=" w-[100%] h-full bg-cover bg-center bg-no-repeat md:flex md:gap-30 px-[14px] pt-[14px] md:px-[141px] md:pt-[48px] gap-10"
        style={{
          backgroundImage: "url('/images/ChapterPage/bia.png')",
          background:
            "linear-gradient(0deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.1) 100%), linear-gradient(0deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.1) 100%), url('/images/ChapterPage/bia.png'), lightgray 50% / cover no-repeat",
        }}
      >
        {loading ? (
          <Loading
            type={"spin"}
            color={"#FF9F66"}
            height={400}
            width={400}
            text="Loading Poster..."
          />
        ) : (
          <div className="relative">
            <img
              src={chapterDetail?.poster}
              alt=""
              className=" h-[203px] w-[330px] max-[435px]:w-full  md:h-[649px] md:w-[433px] bg-cover object-cover bg-center rounded-[8px]"
            />
            <div className="absolute top-0 right-5  hidden md:block ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="118"
                height="118"
                viewBox="0 0 118 118"
                fill="none"
              >
                <path
                  d="M0 0H118V59C118 91.5848 91.5848 118 59 118C26.4152 118 0 91.5848 0 59V0Z"
                  fill="#1E1E1E"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="118"
                  height="118"
                  viewBox="0 0 118 118"
                  fill="none"
                >
                  <path
                    d="M0 0H118V59C118 91.5848 91.5848 118 59 118C26.4152 118 0 91.5848 0 27.8K like59V0Z"
                    fill="#1E1E1E"
                  />
                  <text
                    x="10%"
                    y="50%"
                    fontSize="57px"
                    fontWeight="bold"
                    fill="white"
                    tex="middle"
                    dominantBaseline="middle"
                  >
                    18+
                  </text>
                </svg>
              </svg>
            </div>
            <div className="absolute top-0 left-0 hidden md:block ">
              <div className="relative ">
                <img
                  src="/images/ChapterPage/Star 1.png"
                  alt=""
                  className="h-[144px] w-[144px]"
                />
                <div className="h-[64px] w-[125px] text-white font-semibold text-[24px] leading-[32px] absolute top-[30px] left-[10px]  text-center">
                  New Chapter
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="flex flex-col gap-[8px] md:gap-5">
          <div className="flex flex-col gap-[8px] md:gap-[40px]">
            {/* name && tương tác */}
            <div className="flex flex-col gap-[8px] md:gap-[21px]">
              <div className="font-semibold text-[14px] leading-[20px] md:text-[45px] md:leading-[52px] text-white">
                {loading ? (
                  <Loading
                    type={"bars"}
                    color={"#FF9F66"}
                    height={100}
                    width={100}
                  />
                ) : (
                  chapterDetail?.title || chapterDetail?.title_novel
                )}
              </div>
              {/* tương tác */}
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 font-medium text-[11px] leading-[16px]  md:font-semibold md:text-[22px] md:leading-[28px] text-white ">
                  <img
                    src="/images/ChapterPage/carbon_view-filled.png"
                    alt=""
                    className="h-[32px] w-[32px] hidden md:block "
                  />
                  <div>{`${viewsString} views`}</div>
                </div>
                <div className="flex items-center gap-2 font-medium text-[11px] leading-[16px] md:font-semibold md:text-[22px] md:leading-[28px] text-white ">
                  <img
                    src="/images/ChapterPage/mdi_like.png"
                    alt=""
                    className="h-[32px] w-[32px] hidden md:block"
                  />
                  <div>27.8K like</div>
                </div>
                <div className="flex items-center gap-2 font-medium text-[11px] leading-[16px] md:font-semibold md:text-[22px] md:leading-[28px] text-white ">
                  <img
                    src="/images/ChapterPage/jam_files-f.png"
                    alt=""
                    className="h-[32px] w-[32px] hidden md:block"
                  />
                  <div>{`${readmode ? Object.keys(chapterDetail?.chapters ?? {}).length ?? [] : chapterDetail?.chapters?.length} chapter `} </div>
                </div>
              </div>
            </div>

            {/* server && button */}
            <div className="flex flex-col gap-[40px]">
              {/* button */}
              <div className="flex  gap-5">
                <Link to={`/${sv}/${chapterDetail?.genres === "manga" ?"chapter2" : "novel2"}/${slug}/${getChapterFromUrl(linkList[0]?? "")}`} className=" hover:text-white p-[8px]  rounded-[12px] md:px-[52px] md:py-[26px]  bg-[#FF2020]  text-white md:rounded-[67px] ">
                  <div className="font-bold text-[12px] leading-[16px] md:text-[36px] md:leading-[44px] ">
                    Read now
                  </div>
                </Link>
                <button className={ ` p-[8px]  rounded-[12px] text-black md:px-[52px] md:py-[26px]   ${active ? "bg-[#FF2020]": "bg-[#496EF1]"}  md:text-white md:rounded-[67px]`} onClick={() => handleActive("list")}>
                  <div className="font-bold text-[12px] leading-[16px] md:text-[36px] md:leading-[44px] flex gap-1 md:gap-3 " >
                    <div> My List </div>
                    <img
                      src="/images/ChapterPage/uil_plus.png"
                      alt=""
                      className="h-[20px] w-[20px] md:h-[48px] md:w-[48px] bg-cover object-cover "
                    />
                  </div>
                </button>
                <button className=" p-[8px]  rounded-[12px] md:px-[52px] md:py-[26px] bg-[#F45F17]  text-white md:rounded-[67px]">
                  <div className="font-bold text-[12px] leading-[16px] md:text-[36px] md:leading-[44px] flex gap-1 md:gap-3 ">
                    <div>{chapterDetail?.rate}</div>
                    <img
                      src="/images/ChapterPage/Star 3.png"
                      className="h-[20px] w-[20px] md:h-[48px] md:w-[48px] bg-cover object-cover"
                      alt=""
                    />
                  </div>
                </button>
              </div>
              {/* chọn server */}
              <div className="flex flex-col gap-[10px]">
                <div className=" font-bold text-[12px] leading-[16px]  md:text-[28px] md:leading-[36px] text-white ">
                  Server
                </div>
                <div className="flex flex-wrap items-center justify-between">
                  {listServer.map((item, index) => (
                    <img
                      key={index}
                      src={item?.src}
                      alt={item?.title}
                      title={item?.title}
                      className="w-[32px] h-[23px]  md:h-[48px]  md:w-[67px] cursor-pointer hover:opacity-80"
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[8px] md:gap-[40px]">
              {/* info chapter */}
              <div className="flex flex-col gap-[8px] md:gap-[16px]">
                <div className="text-[#9E9E9E] font-normal text-[12px] leading-[16px] md:text-[24px]  md:leading-[36px] flex items-center gap-2">
                  Author:
                  <div className="text-white">
                    {loading ? "Loading..." : chapterDetail?.author}
                  </div>
                </div>
                <div className="text-[#9E9E9E] font-normal text-[12px] leading-[16px] md:text-[24px]  md:leading-[36px] flex items-center gap-2">
                  Artist:
                  <div className="text-white">
                    {loading ? "Loading..." : "Unkown"}
                  </div>
                </div>
                <div className="text-[#9E9E9E] font-normal text-[12px] leading-[16px] md:text-[24px]  md:leading-[36px] flex flex-wrap items-center gap-2">
                  Genres:
                  <div className="text-white">{chapterDetail?.categories || chapterDetail?.catergories}</div>
                </div>
                <div className="text-[#9E9E9E] font-normal text-[12px] leading-[16px] md:text-[24px]  md:leading-[36px] flex items-center gap-2">
                  Age:
                  <div className="text-white">
                    {loading ? "Loading..." : "18+"}
                  </div>
                </div>
                {/* desc */}
                <div className="text-[#9E9E9E] font-normal text-[12px] leading-[16px] md:text-[24px]  md:leading-[36px] flex gap-2">
                  Description:
                  {loading ? (
                    "Loading..."
                  ) : (
                    <p className="w-[223px] h-auto text-[11px] font-medium leading-[16px]  md:w-[1000px] md:font-normal md:text-[24px] md:leading-[36px] text-white">
                      {showFullDescription
                        ? fullDescription
                        : truncatedDescription}
                      {!showFullDescription && (
                        <button onClick={() => setShowFullDescription(true)}>
                          <div className=" underline  underline-offset-4">
                            See All
                          </div>
                        </button>
                      )}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-[12px] flex items-center justify-center gap-[47px] md:gap-[87px] bg-[#3C3B38]">
        <div
          className={` ${showTab ? "tabbtn" : " none-tab "} `}
          onClick={handleShowTab}
        >
          { active ? "My List": "Chapter"}
        </div>
        <div
          className={` ${!showTab ? "tabbtn" : " none-tab "} `}
          onClick={handleShowTab}
        >
          Comment
        </div>
      </div>
      {/* loading funtion */}
      {loading == true ? (
        <Loading
          type={"spin"}
          color={"#FF9F66"}
          height={300}
          width={300}
          text={"Loading Chapter..."}
        />
      ) : (
        <div>
          {showTab && active === false && (
            <div className="bg-[#000] flex py-[50px] px-[100px] justify-center">
              <div className="bg-[#4A4A4A] py-[24px] px-[48px]">
                <div className="flex items-center gap-2 font-semibold text-[22px] leading-[28px] text-white ">
                  <img
                    src="/images/ChapterPage/jam_files-f.png"
                    alt=""
                    className="h-[32px] w-[32px]"
                  />
                  <div>{Object.keys(listChapter).length} chapters</div>
                </div>
               
                  <div className="px-12 py-6">
                    {linkList
                      .slice(0, visibleChapterCount)
                      .map((item, index) => { 
                        if (chapterDetail?.genres === "novel") {
                          return <div key={index}>
                            {/* { console.log("cehck genre",chapterDetail?.genres)} */}
                            <NovelCard
                              chapterLink={item}
                              chapterName={ getChapterFromUrl(item)}
                              title={chapterDetail?.title || chapterDetail?.title_novel}
                              des={chapterDetail?.description}
                              poster={chapterDetail?.poster}
                              genre={ chapterDetail?.genres}
                              slug={slug}
                            />
                          </div>
                        } else { 
                           return <div key={index}>
                         
                            <ChapterCard2
                              chapterLink={item}
                              chapterName={ getChapterFromUrl(item)}
                              title={chapterDetail?.title || chapterDetail?.title_novel}
                              des={chapterDetail?.description}
                              poster={chapterDetail?.poster}
                              slug={slug}
                            />
                          </div>
                        }
                      } 
                        
                      )}
                  </div>
              
                <div className="text-center mt-5">
                  <button
                    className="font-semibold text-[32px] leading-[40px] text-white  "
                    onClick={handleSeeMore}
                  >
                    See More
                  </button>
                </div>
              </div>
            </div>
            )}
            {showTab && active && <div className="text-white bg-[#000] w-full flex py-[50px] px-[100px] justify-center">My list</div> }
        </div>
      )}

      <div className="flex justify-center bg-black h-[1000vh] w-full">
        {!showTab && (
          <div className="flex flex-col items-center w-full mt-8 ">
            <CMT_list cmt_arr={commentDetail || []} />
            {/* logined user comment */}
            {sessionStorage.getItem("user_email") ? (
              <div className="w-full flex justify-center">
                <div className="antialiased   mt-8 w-full px-[14px] md:px-[141px] ">
                  <div className="space-y-4">
                    <div className="flex">
                      <div className="flex-shrink-0 mr-3">
                        <img
                          className="mt-2 rounded-full w-8 h-8 sm:w-10 sm:h-10"
                          src="https://images.unsplash.com/photo-1604426633861-11b2faead63c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80"
                          alt=""
                        />
                      </div>
                      <div className="flex-1 border rounded-lg px-4 py-2 pb-4 leading-relaxed">
                        <div className="flex items-center ">
                          <strong className="text-white flex items-center ">
                            {sessionStorage.getItem("user_email")}
                          </strong>{" "}
                        </div>
                        <div className="flex flex-row gap-6">
                          <input
                            className="text-lg text-white bg-slate-500 h-32  w-full rounded-lg my-2"
                            value={comment}
                            onChange={(e) => commentOnchange(e)}
                          ></input>
                          <button
                            className="bg-slate-500 rounded-lg m-2 w-[20%] text-white font-semibold"
                            onClick={() => handleSendComment()}
                          >
                            Comment
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="mx-auto">
                <h1 className="text-4xl text-white mt-6">
                  Please{" "}
                  <Link to="/login">
                    <span className="text-[#F45F17] cursor-pointer">login</span>
                  </Link>{" "}
                  to comment!
                </h1>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default NovelPage2;
import { useState, useContext, useRef } from "react";
import { div, Link, NavLink, Outlet, useParams } from "react-router-dom";
import SubMenu from "../components/SubMenu/SubMenu";
import platform from "platform";
import ios from "../pages/img/ios.png";
import adroi from "../pages/img/adroi.png";
import { CiSearch } from "react-icons/ci";
import { useEffect } from "react";
import axios from "axios";
import "../assets/scss/_dropdown.scss";
import { SviContext } from ".";
import { changeServer } from "../Redux/Feature/serverSlice";
import { setIsLoading } from "../Redux/Feature/serverSlice";
import { useDispatch, useSelector } from "react-redux";
import Handle_function from "../handle_account/handle";
// import { IoLogoAndroid } from "react-icons/io";
import { LiaFlagUsaSolid } from "react-icons/lia";
import GB from "country-flag-icons/react/3x2/GB";
import SA from "country-flag-icons/react/3x2/SA";
import DE from "country-flag-icons/react/3x2/DE";
import BR from "country-flag-icons/react/3x2/BR";
import ES from "country-flag-icons/react/3x2/ES";
import IT from "country-flag-icons/react/3x2/IT";
import RU from "country-flag-icons/react/3x2/RU";
import FR from "country-flag-icons/react/3x2/FR";
import { useNavigate } from "react-router-dom";
import { IoSettingsSharp } from "react-icons/io5";
import { IoHomeSharp } from "react-icons/io5";
import { IoNewspaperOutline } from "react-icons/io5";
import { RiSettingsFill } from "react-icons/ri";
import { FaBook } from "react-icons/fa6";
import { FaGoogleDrive } from "react-icons/fa";

let path = "";
let arr_id_manga = [""];
let arr_url = [""];
let arr_path = [""];
export default function Layout() {
  const [isHovered, setIsHovered] = useState(false);
  const [isServerHovered, setIsServerHovered] = useState(false);
  const [link, setLink] = useState("");
  const submenuRef = useRef(null);

  //handle search
  const [input, setInput] = useState("");
  // console.log("check input", );
  const [search, setSearch] = useState("");
  const [searchData, setSearchData] = useState("");
  const [idMangaList, setIdMangaList] = useState("0");
  const [open, setOpen] = useState(false);
  const [checkSearch, setCheckSearch] = useState(false);
  const [url, setURL] = useState("");
  const sv = useSelector((state) => state.server.sv);
  const loading = useSelector((state) => state.server.loading);
  const navigate = useNavigate();

  //  14    "https://br.ninemanga.com",
  //                                 13    "https://de.ninemanga.com",
  //                                 16    "https://es.ninemanga.com",
  //                                 17    "https://fr.ninemanga.com",
  //                                 18    "https://it.ninemanga.com",
  //                                  5    "https://mangajar.com/manga",
  //                                  8    "https://mangajar.com",
  //                             *    6    "https://mangakomi.io/",
  //                             *    2    "https://mangareader.cc",
  //                                  7    "https://readm.org/",
  //                                  1    "https://ww5.manganelo.tv",
  //                                  0    "https://www.mangainn.net",
  const serverName = [
    {
      sv: 0,
      name: "mangainn.net",
      icon: (
        <GB
          title="England"
          className="max-[435px]:h-5 max-[435px]:w-5 h-5 w-5 "
        />
      ),
    },
    {
      sv: 1,
      name: "ww5.manganelo.tv",
      icon: (
        <GB
          title="England"
          className="max-[435px]:h-5 max-[435px]:w-5 h-5 w-5 "
        />
      ),
    },
    {
      sv: 2,
      name: "mangareader.cc",
      icon: (
        <GB
          title="England"
          className="max-[435px]:h-5 max-[435px]:w-5 h-5 w-5 "
        />
      ),
    },
    {
      sv: 3,
      name: "ninemanga.com",
      icon: (
        <GB
          title="England"
          className="max-[435px]:h-5 max-[435px]:w-5 h-5 w-5 "
        />
      ),
    },
    {
      sv: 4,
      name: "bestlightnovel.com",
      icon: (
        <GB
          title="England"
          className="max-[435px]:h-5 max-[435px]:w-5 h-5 w-5 "
        />
      ),
    },
    {
      sv: 5,
      name: "mangajar.com/manga",
      icon: (
        <GB
          title="England"
          className="max-[435px]:h-5 max-[435px]:w-5 h-5 w-5 "
        />
      ),
    },
    {
      sv: 6,
      name: "mangakomi.io",
      icon: (
        <GB
          title="England"
          className="max-[435px]:h-5 max-[435px]:w-5 h-5 w-5 "
        />
      ),
    },
    {
      sv: 7,
      name: "readm.org",
      icon: (
        <GB
          title="England"
          className="max-[435px]:h-5 max-[435px]:w-5 h-5 w-5 "
        />
      ),
    },
    // {
    //   sv: 8,
    //   name: "mangajar.com",
    //   icon: <XK title="Vietnamese" className="max-[435px]:h-5 max-[435px]:w-5 h-5 w-5" />,
    // },
    {
      sv: 9,
      name: "swatmanga.com",
      icon: (
        <SA title="SA" className="max-[435px]:h-5 max-[435px]:w-5 h-5 w-5" />
      ),
    },
    {
      sv: 10,
      name: "mangajar.com",
      icon: (
        <RU title="RU" className="max-[435px]:h-5 max-[435px]:w-5 h-5 w-5" />
      ),
    },
    {
      sv: 11,
      name: "novelhall.com",
      icon: (
        <GB title="GB" className="max-[435px]:h-5 max-[435px]:w-5 h-5 w-5" />
      ),
    },
    {
      sv: 12,
      name: "mto.com",
      icon: (
        <GB
          title="Vietnamese"
          className="max-[435px]:h-5 max-[435px]:w-5 h-5 w-5"
        />
      ),
    },
    {
      sv: 13,
      name: "de.ninemanga.com",
      icon: (
        <DE title="DE" className="max-[435px]:h-5 max-[435px]:w-5 h-5 w-5" />
      ),
    },
    {
      sv: 14,
      name: "br.ninemanga.com",
      icon: (
        <BR title="BR" className="max-[435px]:h-5 max-[435px]:w-5 h-5 w-5" />
      ),
    },
    {
      sv: 15,
      name: "ru.ninemanga.com",
      icon: (
        <RU
          title="Vietnamese"
          className="max-[435px]:h-5 max-[435px]:w-5 h-5 w-5"
        />
      ),
    },
    {
      sv: 16,
      name: "es.ninemanga.com",
      icon: (
        <ES title="ES" className="max-[435px]:h-5 max-[435px]:w-5 h-5 w-5" />
      ),
    },
    {
      sv: 17,
      name: "fr.ninemanga.com",
      icon: (
        <FR title="FR" className="max-[435px]:h-5 max-[435px]:w-5 h-5 w-5" />
      ),
    },
    {
      sv: 18,
      name: "it.ninemanga.com",
      icon: (
        <IT title="IT" className="max-[435px]:h-5 max-[435px]:w-5 h-5 w-5" />
      ),
    },
    {
      sv: 19,
      name: "azoranov.com/series/",
      icon: (
        <GB
          title="Vietnamese"
          className="max-[435px]:h-5 max-[435px]:w-5 h-5 w-5"
        />
      ),
    },
  ];
  const dispatch = useDispatch();
  const getChapterFromUrl = (url) => {
    const parts = url.split("/");
    return parts[parts.length - 1];
  };

  const handleOpen = () => {
    setOpen(!open);
  };
  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setInput((preState) => ({
      ...preState,
      [name]: value,
    }));
  };

  const handleClickOutside = (event) => {
    if (submenuRef.current && !submenuRef.current.contains(event.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  // useEffect(() => {
  //   navigate("/" + sv);
  // }, []);
  const fetchData = (value) => {
    fetch("https://apimanga.mangasocial.online/")
      .then((response) => response.json())
      .then((res) => {
        console.log(res[1].data);
        // const results = data.filter((data) => {
        //     return data && data.title_manga && data.title_manga.toLowerCase().includes(value)
        // })
        // console.log(results)
      });
  };
  const fetchServer = async () => {
    try {
      const response = await axios.get(
        "https://apimanga.mangasocial.online/all-server"
      );
      console.log("Response: ", response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearch = async () => {
    try {
      const response = await axios.post(
        "https://apimanga.mangasocial.online/search-manga-by-name-in-sever/" +
          sv,
        input
      );
      setSearchData(response.data);
      if (response.status == 200) {
        setCheckSearch(true);
      }

      let a = response.data[0].id_manga;
      let url = a.lastIndexOf("/");
      path = a.slice(url + 1, 1000);
      setSearch(response.data[0]);
    } catch (error) {
      console.log(error);
    }
  };
  for (let i = 0; i < searchData?.length; i++) {
    arr_id_manga[i] = searchData[i].id_manga;
    arr_url[i] = arr_id_manga[i].lastIndexOf("/");
    arr_path[i] = arr_id_manga[i].slice(arr_url[i] + 1, 1000);
  }
  // console.log(arr_path);
  // console.log(path);
  const handleCloseSearch = () => {
    setCheckSearch(false);
  };
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const handleServerMouseEnter = () => {
    setIsServerHovered(true);
  };

  const handleServerMouseLeave = () => {
    setIsServerHovered(false);
  };

  let getSessionData = () => {
    return sessionStorage.getItem("user_email");
    // return Handle_function.isAuthen
  };

  let isLogin = getSessionData();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");

  useEffect(() => {
    const os = platform.os.family;

    if (os === "iOS") {
      setModalContent(ios);
      setIsModalOpen(true);
      setLink(
        "https://apps.apple.com/us/app/manga-reader-mangakomi-online/id6446646720"
      );
    } else if (os === "Android") {
      console.log("androi");
      setModalContent(adroi);
      setIsModalOpen(true);
      setLink(
        "https://play.google.com/store/apps/details?id=com.thinkdiffai.futurelove"
      );
    } else {
      console.log("Đây là laptop");
    }
  }, []);
  useEffect(() => {
    dispatch(setIsLoading(true));
  }, []);

  const closeModal = () => {
    setIsModalOpen(false);
  };
  function changeSV(index) {
    dispatch(changeServer(index));
    this.forceUpdate();
  }

  return (
    <>
      <div className="header-top max-[435px]:hidden">
        <div onClick={() => navigate(`/` + sv)}>
          <div className="title text-white">
            <img
              className="img-manga"
              src="/images/logo-thinkdiff.png"
              alt=""
            ></img>
            <h3>MangaSocial</h3>
          </div>
        </div>
        <div className="menu-header">
          <div onClick={() => navigate(`/` + sv)}>
            <div
              className="comic"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <p>Comic</p>
              <img
                className="arrow-img"
                src={
                  isHovered
                    ? "/images/Polygon cam.svg"
                    : "/images/Polygon 1.svg"
                }
                alt="Arrow"
              />
            </div>
          </div>

          <div onClick={() => navigate("/" + sv + "/genres")}>
            <p>Genres</p>
          </div>

          <p>Popular</p>

          {/* <div
            className="server"
            onMouseEnter={handleServerMouseEnter}
            onMouseLeave={handleServerMouseLeave}
          >
            <p>Server</p>
            <img
              className="arrow-img"
              src={
                isServerHovered
                  ? "/images/Polygon cam.svg"
                  : "/images/Polygon 1.svg"
              }
              alt="Arrow"
            />
          </div> */}
          <div className="dropdown relative">
            <button ref={submenuRef} onClick={() => handleOpen()}>
              Server
            </button>
            {open ? (
              <ul
                className="menu grid grid-cols-2"
                onClick={() => handleOpen()}
              >
                {serverName &&
                  serverName.length > 0 &&
                  serverName.map((item) => (
                    <li
                      key={item.sv}
                      className="menu-item flex justify-start items-center pe-2"
                      onClick={() => navigate("/" + item.sv)}
                    >
                      <button onClick={() => dispatch(changeServer(item.sv))}>
                        {item.name}
                      </button>
                      <div className="">{item.icon}</div>
                    </li>
                  ))}
              </ul>
            ) : null}

            {open ? (
              ""
            ) : (
              <>
                {serverName.map((item) =>
                  item.sv === sv ? (
                    <div
                      key={item.sv}
                      className="text-red-700 text-base tracking-wide font-normal absolute top-full w-full flex justify-start items-center gap-[6px]"
                    >
                      <span>{item.name}</span>
                      <div>{item.icon}</div>
                    </div>
                  ) : (
                    ""
                  )
                )}
              </>
            )}
          </div>
          {/* SERVER LIST       index    link
          --------------------------NOVEL------------------------------------
                                        "https://www.ninemanga.com",
                                        "https://mangajar.com/",
                                  11    "https://www.novelhall.com"
                                        "https://azoranov.com/series/",         
                                   4    "https://bestlightnovel.com/",
                                  12    "https://mto.to/",
                                        "https://ru.ninemanga.com",
                                   9    "https://swatmanga.net",
                --------------------MANGA-----------------------------                        
                                  14    "https://br.ninemanga.com",
                                  13    "https://de.ninemanga.com",
                                  16    "https://es.ninemanga.com",
                                  17    "https://fr.ninemanga.com",
                                  18    "https://it.ninemanga.com",
                                   5    "https://mangajar.com/manga",
                                   8    "https://mangajar.com",
                              *    6    "https://mangakomi.io/",
                              *    2    "https://mangareader.cc",   
                                   7    "https://readm.org/",   
                                   1    "https://ww5.manganelo.tv",
                                   0    "https://www.mangainn.net",
                                        
    */}

          <div
            onClick={() => {
              dispatch(changeServer(4));

              navigate("/" + 4 + "/novel");
            }}
            // onClick={() => dispatch(changeServer(4))}
          >
            {/* redirect to server novel : bestlightnovel.com*/}
            <p className="novel">Novel</p>
          </div>
          <div onClick={() => navigate("/" + sv + `/contact-us`)}>
            <p className="contact">Contact us</p>
          </div>
          <div onClick={() => navigate("/" + sv + `/policy`)}>
            <p className="policy">Policy</p>
          </div>
          <Link
            to={`https://apps.apple.com/us/app/manga-reader-mangakomi-online/id6446646720`}
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/67/App_Store_%28iOS%29.svg"
              alt=""
              className="w-5 h-5 lg:w-12 lg:h-12 hover:scale-105 transition-all cursor-pointer"
            />
          </Link>
        </div>
        <div className="avatar_search">
          <CiSearch
            color="red"
            size={32}
            onClick={handleSearch}
            className="mr-2 cursor-pointer"
          />
          <input
            className="w-full border-none outline-none bg-transparent opacity-100"
            placeholder="Search..."
            name="content"
            onChange={handleOnChange}
            onKeyDown={handleSearch}
          />
          {!isLogin ? (
            <div className="flex justify-center align-middle items-center ml-4">
              <Link to={`/login`}>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                  Login
                </button>
              </Link>
            </div>
          ) : (
            // <div to="/user-profile">
            //     <div className="avatar">
            //         <img src="/images/usersquare.svg" alt="usersquare"></img>
            //     </div>
            // </div>
            <SubMenu />
          )}
          {/*  */}
          {checkSearch && input.content && input !== "" ? (
            <div className="h-80 w-[17rem] bg-[#DADADA] absolute mt-[375px] ml-[50px] rounded-lg border-double flex justify-center flex-col items-center overflow-y-auto ">
              <hr className="mt-[150px]" />
              {searchData ? (
                searchData.slice(0, 3).map((item, index) => (
                  <div
                    key={index}
                    className="w-[90%] h-full border-double border-red-900 rounded-lg flex border-4 cursor-pointer  "
                  >
                    <img
                      className="w-1/3 h-[69%] py-2 rounded-lg"
                      src={item.poster}
                      alt=""
                    />
                    <Link
                      to={`/${sv}/chapter/${
                        item?.id_manga.includes(".html")
                          ? getChapterFromUrl(
                              item?.id_manga.replace(".html", "")
                            )
                          : item?.id_manga.includes("novel")
                          ? item?.id_manga.replace(
                              `https://${
                                new URL(`${item?.id_manga}`).hostname
                              }/`,
                              ""
                            )
                          : item?.id_manga.replace(
                              `https://${
                                new URL(`${item?.id_manga}`).hostname
                              }/manga/`,
                              ""
                            )
                      }`}
                      className="flex"
                    >
                      <div className="text-lg flex flex-col ml-6 justify-center">
                        <div>{item.title}</div>
                        <div>Rate:{item.rate}</div>
                        <div>Views: {item.views}</div>
                      </div>
                    </Link>
                  </div>
                ))
              ) : (
                <p>Not found @@</p>
              )}

              <div className="text-white border-5 border-white bg-blue-400 rounded-lg h-6 w-24 flex text-center content-center justify-center my-2">
                <button onClick={() => handleCloseSearch()}>Close</button>
              </div>
            </div>
          ) : null}
        </div>
      </div>
      <div className="header-top 2 hidden !bg-black !w-full !h-fit max-[435px]:block">
        <div className="avatar_search max-[435px]:!px-4 max-[435px]:!py-4 max-[435px]:!ml-0  w-full flex-col !gap-4 !items-start">
          {!isLogin ? (
            <div className="flex justify-between w-full align-middle items-center ml-4 max-[435px]:!ml-0">
              <p className="text-white italic text-4xl font-semibold">
                Manga Social
              </p>
              <Link to={`/login`}>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4  max-[435px]:text-base rounded-full">
                  Login
                </button>
              </Link>
            </div>
          ) : (
            // <div to="/user-profile">
            //     <div className="avatar">
            //         <img src="/images/usersquare.svg" alt="usersquare"></img>
            //     </div>
            // </div>
            <div className="max-[435px]:flex max-[435px]:justify-between max-[435px]:items-center w-full">
              <SubMenu />
              <IoSettingsSharp
                size={40}
                className="text-white hidden max-[435px]:block"
              />
            </div>
          )}
          <div className="!w-full flex justify-center items-center ">
            {/* <CiSearch
              color="red"
              size={32}
              onClick={handleSearch}
              className="mr-2 cursor-pointer"
            /> */}
            <input
              className=" border-none outline-none !bg-[#4A4A4A] max-[435px]:!text-white opacity-100 !w-[100%] !h-[50px] !text-sm !rounded-3xl max-[435px]:!ps-6"
              placeholder="Search..."
              name="content"
              onChange={handleOnChange}
              onKeyDown={handleSearch}
            />
          </div>
          {/*  */}
          {checkSearch && input.content && input.content !== "" ? (
            <div className="h-80 w-[17rem] bg-[#DADADA] absolute mt-[375px] ml-[50px] rounded-lg border-double flex justify-center flex-col items-center overflow-y-auto ">
              <hr className="mt-[150px]" />
              {searchData ? (
                searchData.slice(0, 3).map((item, index) => (
                  <div
                    key={index}
                    className="w-[90%] h-full border-double border-red-900 rounded-lg flex border-4 cursor-pointer  "
                  >
                    <img
                      className="w-1/3 h-[69%] py-2 rounded-lg"
                      src={item.poster}
                      alt=""
                    />
                    <Link
                      to={`/${sv}/chapter/${
                        item?.id_manga.includes(".html")
                          ? getChapterFromUrl(
                              item?.id_manga.replace(".html", "")
                            )
                          : item?.id_manga.includes("novel")
                          ? item?.id_manga.replace(
                              "https://bestlightnovel.com/",
                              ""
                            )
                          : item?.id_manga.replace(
                              `https://${
                                new URL(`${item?.id_manga}`).hostname
                              }/manga/`,
                              ""
                            )
                      }`}
                      className="flex"
                    >
                      <div className="text-lg flex flex-col ml-6 justify-center">
                        <div>{item.title}</div>
                        <div>Rate:{item.rate}</div>
                        <div>Views: {item.views}</div>
                      </div>
                    </Link>
                  </div>
                ))
              ) : (
                <p>Not found @@</p>
              )}

              <div className="text-white border-5 border-white bg-blue-400 rounded-lg h-6 w-24 flex text-center content-center justify-center my-2">
                <button onClick={() => handleCloseSearch()}>Close</button>
              </div>
            </div>
          ) : null}
        </div>
      </div>
      <div className="header-mobile  w-full z-[999] py-2 px-0 bg-[#F45F17] fixed bottom-0 right-0 hidden max-[435px]:block">
        <ul className="flex justify-center items-center gap-14">
          <li className="">
            <Link
              to={`/${sv}`}
              className="flex flex-col gap-1 justify-center items-center w-full h-full"
            >
              <div className="icon text-white">
                <IoHomeSharp size={20} />
              </div>
              <p className="title text-white font-semibold ">Home</p>
            </Link>
          </li>
          <li className="">
            <Link
              to={`/${sv}`}
              className="flex flex-col gap-1 justify-center items-center w-full h-full"
            >
              <div className="icon text-white">
                <IoNewspaperOutline size={20} />
              </div>
              <p className="title text-white font-semibold">News</p>
            </Link>
          </li>
          <li className="">
            <button
              className="flex flex-col gap-1 justify-center items-center w-full h-full"
              ref={submenuRef}
              onClick={() => handleOpen()}
            >
              {/* <button ref={submenuRef}>Server</button> */}

              <div className="icon text-white">
                {open ? (
                  <FaGoogleDrive size={20} />
                ) : (
                  <>
                    {serverName.map((item) =>
                      item.sv === sv ? (
                        <div
                          key={item.sv}
                          ref={submenuRef}
                          onClick={() => handleOpen()}
                        >
                          {item.icon}
                        </div>
                      ) : (
                        ""
                      )
                    )}
                  </>
                )}
              </div>
              <div className="dropdown max-[435px]:static text-sm max-[435px]:hover:!text-white">
                <div className="!text-white hover:!text-white">Server</div>
                {open ? (
                  <ul
                    className="menu max-[435px]:absolute grid grid-cols-2 max-[435px]:bottom-[90%] max-[435px]:!left-0 max-[435px]:right-0 max-[435px]:w-full z-[999]"
                    onClick={() => handleOpen()}
                  >
                    {serverName &&
                      serverName.length > 0 &&
                      serverName.map((item) => (
                        <li
                          key={item.sv}
                          className="menu-item flex justify-start  items-center pe-2"
                          onClick={() => navigate("/" + item.sv)}
                        >
                          <button
                            onClick={() => dispatch(changeServer(item.sv))}
                          >
                            {item.name}
                          </button>
                          <div className="">{item.icon}</div>
                        </li>
                      ))}
                  </ul>
                ) : null}
              </div>
            </button>
          </li>
          <li className="">
            <Link
              to={`/${sv}/genres`}
              className="flex flex-col gap-1 justify-center items-center w-full h-full"
            >
              <div className="icon text-white">
                <RiSettingsFill size={20} />
              </div>
              <p className="title text-white font-semibold">Genres</p>
            </Link>
          </li>
          <li className="">
            <div
              className="flex flex-col gap-1 justify-center items-center w-full h-full"
              onClick={() => {
                dispatch(changeServer(4));

                navigate("/" + 4 + "/novel");
              }}
            >
              <div className="icon text-white">
                <FaBook size={20} />
              </div>
              <p className="title text-white font-semibold">Novel</p>
            </div>
          </li>
        </ul>
      </div>
      <Outlet></Outlet>

      {isModalOpen && (
        <div className="absolute inset-0 flex items-center justify-center ">
          <div className="fixed inset-0 bg-black opacity-50"></div>
          <div className="z-10 p-8 text-center bg-white rounded-md">
            <h2 className="mb-4 text-2xl font-bold">Dowload App</h2>
            <Link to={link}>
              <img src={modalContent} alt="ios" style={{ width: "200px" }} />
            </Link>
            <button
              onClick={closeModal}
              className="px-4 py-2 mt-4 text-white bg-red-500 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

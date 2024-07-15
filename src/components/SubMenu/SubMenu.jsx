import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import { GoPerson } from "react-icons/go";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";


const SubMenu = () => {
  const navigate = useNavigate();
   const sv = useSelector((state) => state.server.sv);
  const [avatarUser,setAvatarUser] = useState("");
  // Set value hidden
  const [onHidden, setHidden] = useState(false);

  const submenuRef = useRef(null);

  const user_id = sessionStorage?.getItem("user_id");

  const handleButtonClick = () => {
    setHidden(!onHidden);
  };

  const handleClickOutside = (event) => {
    if (submenuRef.current && !submenuRef.current.contains(event.target)) {
      setHidden(false);
    }
  };
  const getUserImg = async () => {
    try {
      const res = await axios.get('http://apimanga.mangasocial.online/user/'+user_id);
      setAvatarUser((res.data).avatar_user);
    } catch (error) {
      console.log(error)
    }
  }
  useEffect( () => {
    document.addEventListener("click", handleClickOutside);
    getUserImg();

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handelAccount = () => {
    navigate(`/${sv}/user-profile`);
    setHidden(false);
  };

  const handelLogout = async () => {
    try {
      await axios.get("https://apimanga.mangasocial.online/logout");
      sessionStorage.clear();
      navigate(`/${sv}`);
      console.log(sessionStorage.getItem("user"));
    } catch (error) {
      console.log(error);
      sessionStorage.clear();
      navigate("/login");
    }
  };

  return (
    <div className="inline-block  max-[435px]:!flex max-[435px]:!justify-between max-[435px]:!items-center max-[435px]:!w-full max-[435px]:relative" ref={submenuRef}>
     
       <div className="w-12 h-12  max-[435px]:w-full max-[435px]:h-14 rounded-full cursor-pointer max-[435px]:flex max-[435px]:items-center max-[435px]:gap-2">
          <img onClick={handleButtonClick} className="h-full w-full rounded-full max-[435px]:w-14 max-[435px]:h-14" src={avatarUser?avatarUser:null} alt="" srcset="" />
        <div className="hidden max-[435px]:flex flex-col gap-1">
          <span className="text-white text-lg font-semibold">Minhdz</span>
          <span className="text-white text-base">10/12/2004</span>
     </div>
       </div>

      <div
        className={`${
          onHidden
            ? "block origin-top-right mt-2 w-72 rounded-md shadow-lg max-[435px]:absolute max-[435px]:top-full bg-white divide-y-2 fixed z-1000"
            : "hidden "
        }`}
      >
        <div
          className="w-full flex gap-3 items-center h-11 px-5 cursor-pointer hover:opacity-80 text-xl"
          onClick={handelAccount}
        >
          <GoPerson />
          Account
        </div>

        <div
          className="w-full flex gap-3 items-center h-11 px-5 cursor-pointer hover:opacity-80 text-xl"
          onClick={handelLogout}
        >
          <RiLogoutBoxRLine />
          Logout
        </div>
      </div>
    </div>
  );
};

export default SubMenu;

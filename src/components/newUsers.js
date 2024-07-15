import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import prodApis from "../api/home";
import { useSelector } from "react-redux";
const NewUsers = () => {
  const [newUser, setNewUser] = useState([]);
  useEffect(() => {
    getNewUser();
  }, []);
  const sv = useSelector((state) => state.server.sv);
  const getNewUser = async () => {
    // (async () => {
    //     const newsResponse = await prodApis.index();

    //     setNewUser(newsResponse.data.User_New_Register);
    // })();
    const newsResponse = await prodApis.server(sv);
    setNewUser(newsResponse.data[11].data);
    // console.log(newsResponse.data[11].data);
  };

  return (
    <>
      <div>
        <div className="news-right max-[435px]:!h-auto  max-[435px]:py-4 ">
          <div className="lab">
            <label>NEW USER</label>{" "}
          </div>
          <div className=" max-[435px]:flex  flex-col justify-center gap-4">
            {newUser &&
              newUser.map((newUser, index) => {
                return (
                  <Link
                    to={`/${sv}/view-user-profile`}
                    state={newUser.id_user}
                    key={index}
                  >
                    <div className="username md:pt-0 xl:pt-[30px] max-[435px]:flex max-[435px]:justify-center max-[435px]:items-center">
                      <img
                        className="avatar object-contain"
                        src={newUser.avatar_user}
                        alt="avatar"
                      />
                      <span className="text-avatar max-[435px]:!text-xl max-[435px]:flex max-[435px]:items-center">
                        {newUser.name_user}
                      </span>
                      <span className="date-text max-[435px]:!text-base max-[435px]:flex max-[435px]:items-center">
                        {newUser.participation_time}
                      </span>
                    </div>
                  </Link>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default NewUsers;

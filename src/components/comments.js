import React from "react";
import { Link, NavLink } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useSelector } from "react-redux";
const Comments = () => {
  const cmt = useFetch(12);
  // console.log(cmt);
  const sv = useSelector((state) => state.server.sv);
  const extractNovelId = (url) => {
    const parts = url.split("/");
    return parts[parts.length - 1];
  };
  return (
    <div>
      <div className="comments max-[435px]:!m-0 max-[435px]:px-4 max-[435px]:pb-4 max-[435px]:!gap-6 max-[435px]:!flex max-[435px]:!flex-col">
        {cmt?.map((item, index) => (
          <div
            className="item-comments max-[435px]:!m-0 max-[435px]:!flex max-[435px]:!flex-col max-[435px]:!items-start"
            key={index}
          >
            <div className="left-comment max-[435px]:flex max-[435px]:flex-col max-[435px]:gap-2">
              <div className="topic-comic max-[435px]:!gap-0">
                <div className="wrap-mask  max-[435px]:!bg-transparent max-[435px]:!p-0 max-[435px]:!object-contain max-[435px]:flex max-[435px]:items-center max-[435px]:!w-0 max-[435px]:!h-0">
                  <img
                    className="mask max-[435px]:!object-contain max-[435px]:!w-[32px] max-[435px]:!h-[32px]"
                    src="/images/Mask group.svg"
                  ></img>
                </div>
                <p className="name-topic max-[435px]:!text-lg ">
                  {item.title_manga}
                </p>
              </div>
              <div className="viewer max-[435px]:flex max-[435px]:items-center max-[435px]:!mt-0">
                <img
                  className="ellips rounded-full max-[435px]:!w-[32px] max-[435px]:!h-[32px]"
                  src={item.avatar_user}
                ></img>
                <p className="name-user max-[435px]:!text-lg max-[435px]:overflow-hidden max-[435px]:!w-[200px]">
                  {item.name_user}
                </p>
                {/* <p className="add-cmt max-[435px]:!text-lg">
                  Has add a comment
                </p> */}
                <div className="right-comment hidden max-[435px]:block max-[435px]:!gap-3 max-[435px]:!mr-0">
                  <div className="number flex items-center ">
                    <p className="title-number max-[435px]:!text-lg">Comment</p>
                    <p className="number-cm max-[435px]:!text-lg">
                      {item.count_comment}
                    </p>
                  </div>
                  <div className="number flex items-center ">
                    <p className="title-number max-[435px]:!text-lg">Discuss</p>
                    <p className="number-cm max-[435px]:!text-lg">
                      {item.count_reply_comment}
                    </p>
                  </div>
                </div>
              </div>
              <div className="coment-user max-[435px]:!mt-0 max-[435px]:flex max-[435px]:items-center">
                <img
                  className="bxs-chat"
                  src="/images/bxs_chat.svg max-[435px]:!w-[32px] max-[435px]:!h-[32px]"
                ></img>
                <p className="mess-chat max-[435px]:!text-lg max-[435px]:overflow-hidden">
                  {item.content}
                </p>
                <img className="ri-book" src="/images/ri_book-fill.svg"></img>
                <NavLink
                  className="comic-name max-[435px]:!text-lg max-[435px]:overflow-hidden"
                  to={`/${sv}/chapter/${extractNovelId(item.url_manga)}
                  `}
                >
                  {item.title_manga}
                </NavLink>
              </div>
            </div>
            <div className="right-comment max-[435px]:!hidden">
              <div className="number">
                <p className="title-number max-[435px]:!text-lg">Comment</p>
                <p className="number-cm max-[435px]:!text-lg">
                  {item.count_comment}
                </p>
              </div>
              <div className="number">
                <p className="title-number max-[435px]:!text-lg">Discuss</p>
                <p className="number-cm max-[435px]:!text-lg">
                  {item.count_reply_comment}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comments;

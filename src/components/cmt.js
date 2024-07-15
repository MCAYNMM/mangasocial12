import React, { useState } from "react";

const CMT = (props) => {
  const { cmt, handleLikeCMT, handleRepComment, comment, commentOnchange } =
    props;

  const [viewReply, setViewReply] = useState(false);
  const handleReply = () => {
    setViewReply(!viewReply);
    console.log(viewReply);
  };

  return (
    // <!-- component -->
    <div className=" mx-auto  mt-4 w-full">
      <div className="space-y-4">
        <div className="flex">
          <div className="flex-shrink-0 mr-3">
            <img
              className="mt-2 rounded-full w-8 h-8 sm:w-10 sm:h-10"
              src={cmt?.avatar_user || ""}
              alt=""
            />
          </div>
          <div className="flex-1 border rounded-lg px-4 py-2 leading-relaxed">
            <strong className="text-white">{cmt?.name_user}</strong>{" "}
            <span className="text-xs text-white">{cmt?.time_comment}</span>
            <p className="text-lg text-white">{cmt?.content}</p>
            <div className="mt-4 flex items-center gap-3">
              <div
                className="text-sm text-white font-semibold"
                onClick={() => handleLikeCMT(cmt)}
              >
                {cmt?.likes} {cmt?.likes == 0 ? "Like" : "Likes"}
              </div>
              <div
                className="text-sm text-white font-semibold cursor-pointer"
                onClick={() => handleReply()}
              >
                {cmt?.replies?.length}
                {cmt?.replies?.length == 0 ? " Reply" : " Replies"}
              </div>
            </div>
          </div>
        </div>
      </div>
      {viewReply ? (
        <div className="mt-4 ml-12 w-[full]">
          {cmt &&
            cmt?.replies?.length > 0 &&
            cmt.replies.map((cmt2, index) => {
              return (
                <CMT
                  key={index}
                  cmt={cmt2}
                  handleLikeCMT={handleLikeCMT}
                  handleRepComment={handleRepComment}
                  commentOnchange={commentOnchange}
                  comment={comment}
                />
              );
            })}
          <div className="flex mt-4">
            <div className="flex-shrink-0 mr-3">
              <img
                className="mt-2 rounded-full w-8 h-8 sm:w-10 sm:h-10"
                src="https://images.unsplash.com/photo-1604426633861-11b2faead63c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80"
                alt=""
              />
            </div>
            <div className="flex-1 border rounded-lg px-4 py-0 pb-4 leading-relaxed">
              <div className="flex items-center ">
                <strong className="text-white flex items-center ">
                  {sessionStorage.getItem("user_email")}
                </strong>{" "}
              </div>
              <div className="flex flex-row gap-6">
                <input
                  className="text-lg text-white bg-slate-500 h-20  w-full rounded-lg my-2"
                  value={comment}
                  onChange={(e) => commentOnchange(e)}
                ></input>
                <button
                  className={`${
                    comment !== ""
                      ? "bg-slate-500 hover:cursor-pointer"
                      : "bg-slate-700 hover:cursor-not-allowed"
                  } rounded-lg m-2 w-[20%] text-white font-semibold`}
                  onClick={() => handleRepComment(cmt)}
                >
                  Rep Comment
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default CMT;

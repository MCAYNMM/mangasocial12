import React, { useEffect, useState } from "react";
import CMT from "./cmt";
import { useParams } from "react-router-dom";
import { message } from "antd";
import axios from "axios";

const CMT_list = (props) => {
  const { cmt_arr } = props;
  const [cmtSub, setCmtSub] = useState(cmt_arr || []);
  console.log("check cmt", cmtSub);
  const [comment, setComment] = useState("");

  const params = useParams();
  const { slug } = params;
  // console.log(props);
  const handleLikeCMT = async (cmt) => {
    try {
      const res = await axios.post(
        `https://apimanga.mangasocial.online/like-comment/${cmt?.id_user}/${cmt?.id_comment}/`
      );
      if (res) {
        let resc = await axios.get(
          `https://apimanga.mangasocial.online/cmanga/${
            slug.includes(".html") ? slug.replace(".html", "") : slug
          }`
        );
        setComment("");

        if (resc) setCmtSub(resc.data);
      } else {
        message.error("Each account can only be liked once, Please try again!");
      }
    } catch (error) {
      message.error("Each account can only be liked once, Please try again!");
      console.log(error);
    }
  };
  const handleRepComment = async (cmt) => {
    try {
      const res = await axios.post(
        `https://apimanga.mangasocial.online/reply-comment/${cmt?.id_user}/${cmt?.id_comment}/`,
        { content: comment }
      );
      // console.log("response:", res);
      // console.log("comment:", comment);
      if (res) {
        let resc = await axios.get(
          `https://apimanga.mangasocial.online/cmanga/${
            slug.includes(".html") ? slug.replace(".html", "") : slug
          }`
        );
        setComment("");

        if (resc) setCmtSub(resc.data);
        else {
          message.error(
            "Each account can only be liked once, Please try again!"
          );
        }
      }
    } catch (error) {
      message.error(
        "Each account can only be commented once, Please try again!"
      );
      console.log(error);
      console.log("comment:", comment);
      console.log(slug);
    }
  };
  const commentOnchange = (e) => {
    setComment(e.target.value);
  };
  useEffect(() => {
    setCmtSub(cmt_arr);
  }, [props]);
  return (
    <div className="w-full px-[14px] md:px-[141px] ">
      {cmtSub.map((cmt, index) => (
        <CMT
          key={index}
          cmt={cmt}
          handleLikeCMT={handleLikeCMT}
          handleRepComment={handleRepComment}
          commentOnchange={commentOnchange}
          comment={comment}
        />
      ))}
    </div>
  );
};

export default CMT_list;

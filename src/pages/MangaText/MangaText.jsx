import React from "react";
import { FaHome } from "react-icons/fa";
import { TbMathGreater } from "react-icons/tb";
import { Link } from "react-router-dom";

export default function MangaText() {
  return (
    <div>
      <div className="d-flex items-center justify-center">
        <Link to="/">
          <div className="d-flex justify-start">
            <span className="">
              <FaHome size={"24px"} />
            </span>
            <p className="text-[20px]">Trang chủ</p>
          </div>
        </Link>
        <TbMathGreater size={"24px"} />
      </div>
    </div>
  );
}

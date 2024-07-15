import React, { useState } from "react";
import { Button, Form } from "antd";
import axios from "axios";
import * as message from "../../components/Message/Message";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const SignUpSuccess = () => {
 
 const sv = useSelector((state) => state.server.sv);
  
  return (
      <div className="w-full h-screen flex justify-center items-center">
          <div className="flex flex-col justify-center items-center gap-12">
              <h1 className="text-5xl text-black">Please verify your email</h1>
          <p className="text-3xl leading-[40px] text-slate-400 tracking-wide">Signup is successfully, You have successfully registered for a mangasocial account. <br /><Link to={`https://www.google.com/intl/vi/gmail/about/`} className="text-red-500 underline hover:text-red-500 hover:cursor-pointer hover:underline">Please login to your email</Link>, search for the verify account email to activate it, if not found,<br /> go to spam to search.</p>
          <Link to={ `/${sv}`} className="bg-white rounded-full text-blue-500 px-8 py-4 text-2xl hover:bg-blue-500 ring-1 ring-blue-500 hover:ring-0 duration-300 ease-in hover:text-white">Back to home</Link>
          </div>
   </div>
  );
};

export default SignUpSuccess;

import API from "../api/account";
import Cookies from "js-cookie";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import React from 'react'


 const Handle_function = {

  isAuthen: false,
  async Handle_login(input) {
    const email = input.email;
    const password = input.password;
    if (!email || !password) {
      console.log("email pass trong");
      return;
    }
    const resuilt = await API.API_login(email, password);
    console.log(resuilt.data);
    const Id_user = resuilt.data.account.id_user;
    const jwt = resuilt.data.account.jwt;
    Cookies.set("jwt", jwt, { secure: true, sameSite: "Strict" });
    sessionStorage.setItem("user", resuilt?.data.account);
    sessionStorage.setItem("user_email", resuilt?.data.account.email);
    sessionStorage.setItem("user_id", Id_user?Id_user:null);
    if (!resuilt) {
      console.log("err");
      return;
    }
    this.isAuthen = true;
    console.log(this.isAuthen);
    if (resuilt.data.message == "Login successfully") console.log("login success");
    else {
      console.log("not user");
    }
  },

  async Handle_Register(navigate) {
    const email = document.querySelector("#email").value;
    console.log(email);
    const password = document.querySelector("#password").value;
    if (!email || !password) {
      console.log("email pass trong");
      return;
    }
    const resuilt = await API.APT_register(email, password);
    console.log(resuilt.data);
    if (!resuilt) {
      console.log("err");
      return;
    }
    if (resuilt.data.message == "Confirm successfully. Try to login")
    //   navigate("/login");
    console.log("dang ki thanh cong")
    else {
      console.log("not user");
    }
  },

  async Handle_Logout() {
    const resuilt = await API.APT_logout();
    console.log(resuilt);
  },
};
export default Handle_function




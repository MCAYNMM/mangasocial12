import React, { useState } from "react";
import { Button, Form } from "antd";
import axios from "axios";
import * as message from "../../components/Message/Message";
import { useNavigate } from "react-router-dom";
import CustomizeSpin from "../../components/spin/CustomizeSpin";

const ForgotPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
   const [loading, setLoading] = useState(true)

  const navigate = useNavigate();

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const onFinish = async (values) => {
    console.log("Success:", values);
    try {
      if (values.new_password === values.confirm_password) {
        const response = await axios.post(
          "https://apimanga.mangasocial.online/forgot-password",
          values
        );
        message.success("Send is successfully");
        console.log(response);
        if (response) {
          setLoading(true)
          navigate("/forgot-password-success");
        }
      }
      else { 
        message.error("New password and confirmation password are not in async, please try again!");
        setLoading(true)
      }
        setLoading(true)

    } catch (error) {
      setLoading(true)
      message.error(`${error.response.data.message}`);
    }
  };
  const onFinishFailed = (errorInfo) => {
    setLoading(true)
    console.log("Failed:", errorInfo);
  };

  const validateEmail = (rule, value, callback) => {
    if (!value) {
      callback("Please input your email.");
    } else {
      const trimmedValue = value.trim(); // Remove leading and trailing spaces
      if (trimmedValue === value) {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!emailRegex.test(trimmedValue)) {
          callback("Email is not valid.");
        } else {
          callback();
        }
      } else {
        callback("Email should not contain leading or trailing spaces.");
      }
    }
  };

  const validatePassword = (rule, value, callback) => {
    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/;
    if (!value) {
      callback("Please input your password.");
    } else if (!regex.test(value)) {
      callback(
        "Password must be 8-16 characters long and include at least one lowercase letter, one uppercase letter, one digit, and one special character."
      );
    } else {
      callback();
    }
  };

  const HandleNavigateToLogin = () => {
    navigate("/login");
  };

  return (
    <div
      className="bg-cover bg-center h-[100vh] w-[100vw] md:h-[100%] md:w-[100%] flex items-center justify-center "
      style={{
        backgroundImage: "url('/images/Login/slide1.jpg')",
      }}
    >
      <div className=" flex flex-col items-center justify-center md:w-[520px] md:h-[746px] rounded-[12px] gap-[31px] md:bg-[#242424] mt-[20px] md:mt-[100px] md:mb-[100px] px-[15px] md:px-[74px] py-[60px]">
        <div className="font-semibold text-3xl text-white mb-4">Forgot password</div>
        <div className=" text-[14px] leading-[20px] md:text-[24px] md:leading-[28px] font-semibold text-white text-center">
          A link with code to reset your password has been sent to your email.
        </div>
        <Form
          name="basic"
          wrapperCol={{
            span: 24,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          className=" w-[327px] md:w-full "
        >
          <Form.Item
            name="email"
            rules={[
              {
                validator: validateEmail,
              },
            ]}
          >
            <input
              id="email"
              name="email"
              className="  w-full bg-[#353434] h-[44px] rounded-[12px] p-[10px] mb-1 text-white placeholder-white placeholder-opacity-75"
              placeholder="Enter your email"
            />
          </Form.Item>

          <div className="relative ">
            <Form.Item
              name="new_password"
              rules={[
                {
                  validator: validatePassword, // Add this validator for password
                },
              ]}
            >
              <input
                id="password"
                name="new_password"
                type={showPassword ? "text" : "password"}
                className=" w-full bg-[#353434] h-[44px] rounded-[12px] p-[10px]  mb-1 mt-1 text-white placeholder-white placeholder-opacity-75"
                placeholder="New Password"
              ></input>
            </Form.Item>
            
            <img
              src="/images/Login/icon.png"
              className="h-[24px] w-[24px] absolute top-3 right-3 cursor-pointer"
              alt=""
              onClick={toggleShowPassword}
            />
          </div>
          <div className="relative">
            <Form.Item
              name="confirm_password"
              rules={[
                {
                  validator: validatePassword, // Add this validator for password
                },
              ]}
            >
              <input
                id="confirm_password"
                name="confirm_password"
                type={showPassword ? "text" : "password"}
                className=" w-full bg-[#353434] h-[44px] rounded-[12px] p-[10px]  mb-1 mt-1 text-white placeholder-white placeholder-opacity-75"
                placeholder="New Password"
              ></input>
            </Form.Item>
            <img
              src="/images/Login/icon.png"
              className="h-[24px] w-[24px] absolute top-3 right-3 cursor-pointer"
              alt=""
              onClick={toggleShowPassword}
            />
          </div>

          <Form.Item wrapperCol={{ span: 24 }} className="mt-1" onClick={() => setLoading(false)}>
            <Button
              type="primary"
              htmlType="submit"
              className="w-full h-[44px] rounded-[12px] p-[10px] bg-[#EA6016] focus:outline-none hover:bg-[#929292]  border-none "
            >
              { loading ? "Send": <CustomizeSpin/>}
            </Button>
          </Form.Item>
        </Form>
        

        <div className="flex items-center justify-center gap-1.5 mt-40 md:mt-0">
          <div className="font-semibold text-[16px] leading-[24px] text-[#747474] ">
            Back to Login?
          </div>
          <div
            className="font-semibold text-[16px] leading-[24px] text-[#EA6016] "
            onClick={HandleNavigateToLogin}
          >
            Log in
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;

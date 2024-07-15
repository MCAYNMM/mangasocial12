import React from "react";
import { Space, Spin } from "antd";
import "antd/dist/antd.css";
function SpinX() {
  return (
    <div>
      <Space size="middle">
        <Spin size="small" />
        <Spin />
        <Spin size="large" />
      </Space>
    </div>
  );
}

export default SpinX;

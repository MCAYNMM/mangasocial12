import React from "react";
import { LoadingOutlined } from '@ant-design/icons';
import { Space, Spin } from 'antd';
import "antd/dist/antd.css";
function CustomizeSpin() {
  return (
    <div>
      <Space size="middle">
        
        <Spin indicator={<LoadingOutlined spin style={{ fontSize: 20 }} />}  className="text-white" />
      </Space>
    </div>
  );
}

export default CustomizeSpin;

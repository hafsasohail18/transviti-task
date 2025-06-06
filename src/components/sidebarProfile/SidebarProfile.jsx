import React from "react";
import { Card, Divider } from "antd";
import { DownOutlined } from "@ant-design/icons";
import cover from "../../assets/cover.png";
import dp from "../../assets/dp.png";

const SidebarProfile = () => {
  return (
    <div className="w-full max-w-xs bg-white rounded-xl overflow-hidden">
      <div className="relative">
        <img
          src={cover}
          alt="cover"
          className="w-full h-24 object-cover"
        />
        <img
          src={dp}
          alt="avatar"
          className="w-20 h-20 rounded-full border-4 border-white absolute left-1/2 transform -translate-x-1/2 -bottom-10"
        />
      </div>

      
      <div className="pt-12 pb-4 text-center">
        <h2 className="text-[18px] font-[600] text-black">Albert Flores</h2>
        <p className="w-[236px] mx-auto text-center text-[14px] font-[500] text-black leading-tight">
          Senior Product Designer | UI/UX Designer | Graphic Designer | Web...
        </p>
        <p className="text-xs text-gray mt-2">Clinton, Maryland</p>
      </div>

      <Divider style={{ margin: 0 }} />

      
      
    </div>
  );
};

export default SidebarProfile;

import React from "react";
import Image from "next/image";
import { FaHome } from "react-icons/fa";

import logo from "../public/images/logo.png";

const SideLink = ({ title, icon, link, customFunc }) => (
  <div className="flex flex-col items-center">
    <div className="bg-secondary w-12 h-12 rounded-sm text-primary flex items-center justify-center">
      {icon}
    </div>
    <p>{title}</p>
  </div>
);

const Sidebar = () => {
  return (
    <div className="h-screen">
      <div className="flex items-center gap-x-4">
        <Image src={logo} alt="logo" height={50} width={50} />
        <h1 className="text-xl">Tenderbloc</h1>
      </div>
      <div className="flex flex-col justify-between items-center py-4">
        <div className="grid grid-cols-2 gap-x-16 gap-4">
          <SideLink icon={<FaHome />} title="Home" />
          <SideLink icon={<FaHome />} title="Home" />
          <SideLink icon={<FaHome />} title="Home" />
          <SideLink icon={<FaHome />} title="Home" />
          <SideLink icon={<FaHome />} title="Home" />
          <SideLink icon={<FaHome />} title="Home" />
        </div>
        <div className="grid grid-cols-2 gap-x-16 gap-y-4">
          <SideLink icon={<FaHome />} title="Home" />
          <SideLink icon={<FaHome />} title="Home" />
          <SideLink icon={<FaHome />} title="Home" />
          <SideLink icon={<FaHome />} title="Home" />
        </div>
        <div>
          <div className="bg-secondary p-3 w-56 rounded-sm h-48 flex flex-col-reverse">
            <div className="bg-primary m-5 rounded-sm text-center">
              Unlock the
              <br /> Power
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

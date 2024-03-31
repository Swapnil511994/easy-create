import { PiFrameCorners as FrameCornersIcon } from "react-icons/pi";
import { CiImageOn as ImageIcon } from "react-icons/ci";
import { AiOutlineLayout as LayoutIcon } from "react-icons/ai";
import { LuPiggyBank as PiggyBankIcon } from "react-icons/lu";
import { RiShapesLine as SquareIcon } from "react-icons/ri";
import { IoText as TextTIcon } from "react-icons/io5";
import { MdDriveFolderUpload as UploadIcon } from "react-icons/md";
import { CiVideoOn as VideoIcon } from "react-icons/ci";

import { useState } from "react";

const Sidebar = () => {
  const tabs = [
    {
      name: "Template",
      icon: <LayoutIcon />,
    },
    {
      name: "Text",
      icon: <TextTIcon />,
    },
    {
      name: "Shape",
      icon: <SquareIcon />,
    },
    {
      name: "Frame",
      icon: <FrameCornersIcon />,
    },
    {
      name: "Image",
      icon: <ImageIcon />,
    },
    {
      name: "Graphic",
      icon: <PiggyBankIcon />,
    },
    {
      name: "Video",
      icon: <VideoIcon />,
    },
    {
      name: "Upload",
      icon: <UploadIcon height={50} />,
    },
  ];
  const [activeTab, setActiveTab] = useState(tabs[0].name);

  //methods and event handlers
  const handleIconClick = (icon) => {
    console.log(icon);
  };

  return (
    <div className="flex flex-col ml-1">
      {tabs.map((tab) => {
        return (
          <div
            key={tab.name}
            id={tab.name}
            className="flex flex-col content-center items-center my-2 mx-1"
            onClick={() => handleIconClick(tab.name)}
          >
            {tab.icon}
            {tab.name}
          </div>
        );
      })}
    </div>
  );
};

export default Sidebar;

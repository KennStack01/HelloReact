import React from "react";
import Link from "next/link";
import Navbar from "./Navbar";
import { GoSettings } from "react-icons/go";
import {
  IoIosArrowUp,
  IoIosArrowBack,
  IoIosArrowForward,
} from "react-icons/io";
import UserInfo from "./UserInfo";

const Sidebar = () => {
  const [isSideBarOpen, setSideBarOpen] = React.useState(true);

  return (
    <>
      {isSideBarOpen && (
        <div
          className={`flex flex-col justify-between text-white bg-hellosidebarblue-500 w-1/6 h-screen sticky left-0 bottom-0 top-0`}
        >
          {/* user info */}
          <div>
            <UserInfo />
          </div>
          <div>
            {/* Navbar */}
            <div className="px-2 mx-1">
              <Navbar />
            </div>
            <div
              onClick={() => setSideBarOpen(false)}
              className="absolute bg-hellosidebarblue-400 hover:bg-hellosidebarblue-500 shadow-md text-3xl px-2 py-1 ml-48 -mt-56 rounded cursor-pointer"
            >
              <IoIosArrowBack />
            </div>
          </div>
          {/* Settings Info */}
          <div className="flex flex-row sticky bottom-0 p-3 mx-2 bg-hellosidebarblue-600 hover:shadow-lg rounded-md">
            <div className="text-2xl my-auto bg-hellosidebarblue-600 hover:shadow-lg px-2 py-1 rounded cursor-pointer ">
              <GoSettings />
            </div>
            <h3 className="my-auto"> Settings </h3>
            <div className="bg-helloblue-800 hover:shadow-lg text-xl px-2 py-1 ml-5 rounded cursor-pointer">
              <IoIosArrowUp />
            </div>
          </div>
        </div>
      )}

      {!isSideBarOpen && (
        <div
          onClick={() => setSideBarOpen(true)}
          className="fixed z-56 top-60 left-0 text-white bg-hellosidebarblue-400 hover:bg-hellosidebarblue-500 shadow-md text-3xl px-2 py-1 rounded-r cursor-pointer"
        >
          <IoIosArrowForward />
        </div>
      )}
    </>
  );
};

export default Sidebar;

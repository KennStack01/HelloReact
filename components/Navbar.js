import React from "react";
import Link from "next/link";
import { BsFillCollectionFill } from "react-icons/bs";
import { MdCollectionsBookmark } from "react-icons/md";
import { HiViewGridAdd, HiNewspaper } from "react-icons/hi";
import { MdWork } from "react-icons/md";
import { FaHandsHelping } from "react-icons/fa";

const Navbar = () => {
  return (
    <div>
      <div className="flex flex-col justify-between justify-items-center text-center text-white my-auto">
        {/* All Categories */}
        <div className="hover:bg-hellosidebarblue-400 hover:shadow-lg p-2 my-2 rounded-md">
          <Link href="/">
            <a>
              <div className="flex flex-row my-auto font-medium">
                <div className="text-2xl">
                  <BsFillCollectionFill />
                </div>
                <span className="my-auto mx-4 text-sm md:text-md">
                  All Categories
                </span>
              </div>
            </a>
          </Link>
        </div>
        {/* React News */}
        <div className="hover:bg-hellosidebarblue-400 hover:shadow-lg p-2 my-2 rounded-md">
          <Link href="/">
            <a>
              <div className="flex flex-row my-auto font-medium">
                <div className="text-3xl ml-0">
                  <HiNewspaper />
                </div>
                <span className="my-auto mx-4 text-sm md:text-md">
                  React News
                </span>
              </div>
            </a>
          </Link>
        </div>
        {/* My Bookmark */}
        <div className="hover:bg-hellosidebarblue-400 hover:shadow-lg p-2 my-2 rounded-md">
          <Link href="/">
            <a>
              <div className="flex flex-row my-auto font-medium">
                <div className="text-2xl">
                  <MdCollectionsBookmark />
                </div>
                <span className="my-auto mx-4 text-sm md:text-md">
                  My Bookmark
                </span>
              </div>
            </a>
          </Link>
        </div>
        {/* Add Resource */}
        <div className="hover:bg-hellosidebarblue-400 hover:shadow-lg p-2 my-2 rounded-md">
          <Link href="/">
            <a>
              <div className="flex flex-row my-auto font-medium">
                <div className="text-2xl">
                  <HiViewGridAdd />
                </div>
                <span className="my-auto mx-4 text-sm md:text-md">
                  Add Resource
                </span>
              </div>
            </a>
          </Link>
        </div>
        {/* Jobs */}
        <div className="hover:bg-hellosidebarblue-400 hover:shadow-lg p-2 my-2 rounded-md">
          <Link href="/">
            <a>
              <div className="flex flex-row my-auto font-medium">
                <div className="text-2xl">
                  <MdWork />
                </div>
                <span className="my-auto mx-4 text-sm md:text-md">Jobs</span>
                <span className="text-xs text-gray-500 italic my-auto">
                  soon
                </span>
              </div>
            </a>
          </Link>
        </div>
        {/* Sponsors */}
        <div className="hover:bg-hellosidebarblue-400 hover:shadow-lg p-2 my-2 rounded-md">
          <Link href="/">
            <a>
              <div className="flex flex-row my-auto font-medium">
                <div className="text-2xl">
                  <FaHandsHelping />
                </div>
                <span className="my-auto mx-4 text-sm md:text-md">
                  Sponsors
                </span>
                <span className="text-xs text-gray-500 italic my-auto">
                  soon
                </span>
              </div>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

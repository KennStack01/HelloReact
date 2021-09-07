import React from "react";
import Link from "next/link";
import { BsFillCollectionFill } from "react-icons/bs";
import { MdCollectionsBookmark } from "react-icons/md";
import { HiViewGridAdd, HiNewspaper } from "react-icons/hi";

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
                <span className="my-auto mx-4">All Categories</span>
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
                <span className="my-auto mx-4">React News</span>
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
                <span className="my-auto mx-4">My Bookmark</span>
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
                <span className="my-auto mx-4">Add Resource</span>
              </div>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { BsFillCollectionFill } from "react-icons/bs";
import { MdCollectionsBookmark } from "react-icons/md";
import { HiViewGridAdd, HiNewspaper } from "react-icons/hi";
import { MdWork } from "react-icons/md";
import { FaHandsHelping } from "react-icons/fa";

const Navbar = () => {
  const router = useRouter();

  return (
    <div>
      <div className="flex flex-col justify-between justify-items-center text-center text-white my-auto">
        {/* All Categories */}
        <div
          className={`${
            router.pathname == "/"
              ? "active bg-hellosidebarblue-400 shadow-lg"
              : ""
          } hover:bg-hellosidebarblue-400 hover:shadow-lg p-2 my-2 rounded-md`}
        >
          <Link href="/">
            <a>
              <div className="flex flex-row my-auto font-medium">
                <div className="text-2xl">
                  <BsFillCollectionFill />
                </div>
                <span className="my-auto mx-4 text-sm md:text-md">
                  Hello React
                </span>
              </div>
            </a>
          </Link>
        </div>
        {/* React News */}
        <div
          className={`${
            router.pathname == "/reactNews"
              ? "active bg-hellosidebarblue-400 shadow-lg"
              : ""
          } hover:bg-hellosidebarblue-400 hover:shadow-lg p-2 my-2 rounded-md`}
        >
          <Link href="/reactnews">
            <a>
              <div className="flex flex-row my-auto font-medium">
                <div className="text-2xl">
                  <HiNewspaper />
                </div>
                <span className="my-auto mx-4 text-sm md:text-md">
                  React News
                </span>
              </div>
            </a>
          </Link>
        </div>

        {/* Add Resource */}
        <div
          className={`${
            router.pathname == "/addResources"
              ? "active bg-hellosidebarblue-400 shadow-lg"
              : ""
          } hover:bg-hellosidebarblue-400 hover:shadow-lg p-2 my-2 rounded-md`}
        >
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
        <div
          className={`${
            router.pathname == "/jobs"
              ? "active bg-hellosidebarblue-400 shadow-lg"
              : ""
          } hover:bg-hellosidebarblue-400 hover:shadow-lg p-2 my-2 rounded-md`}
        >
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
        <div
          className={`${
            router.pathname == "/sponsors"
              ? "active bg-hellosidebarblue-400 shadow-lg"
              : ""
          } hover:bg-hellosidebarblue-400 hover:shadow-lg p-2 my-2 rounded-md`}
        >
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

import React from "react";

import ForumsList from "../Forums/ForumsList";
import ConferencesList from "../Conferences/ConferencesList";
import NewsList from "../News/NewsList";

const Tabs = ({ color }) => {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <>
      <div className="flex w-full z-0">
        <div className="w-full">
          <div className="flex md:sticky top-0 z-10">
            <ul
              className="md:flex flex-row grid grid-cols-2 md:justify-between mb-0 list-none flex-wrap pt-3 pb-4 px-2 text-gray-700 font-semibold md:backdrop-filter md:backdrop-blur-xl md:shadow-sm md:w-full mx-auto"
              role="tablist"
              id="MenuTab"
            >
              <li className="-mb-px mx-2 md:mx-1 md:my-1 my-2 last:mr-0 flex-auto text-center">
                <a
                  className={
                    "text-xs font-bold uppercase px-5 py-3 rounded block leading-normal " +
                    (openTab === 1
                      ? "text-white bg-" + color + "-600"
                      : "text-" + color + "-600 bg-white")
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(1);
                  }}
                  data-toggle="tab"
                  href="#link1"
                  role="tablist"
                >
                  News
                </a>
              </li>
              <li className="-mb-px ml-4 md:mx-1 md:my-1 my-2 last:mr-0 flex-auto text-center">
                <a
                  className={
                    "text-xs font-bold uppercase px-5 py-3 rounded block leading-normal " +
                    (openTab === 2
                      ? "text-white bg-red-600"
                      : "text-" + color + "-600 bg-white")
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(2);
                  }}
                  data-toggle="tab"
                  href="#link2"
                  role="tablist"
                >
                  Conferences
                </a>
              </li>
              <li className="col-span-2 -mb-px mx-2 md:mx-1 md:my-1 my-2 last:mr-0 flex-auto text-center">
                <a
                  className={
                    "text-xs font-bold uppercase px-5 py-3 rounded block leading-normal " +
                    (openTab === 3
                      ? "text-white bg-green-600"
                      : "text-" + color + "-600 bg-white")
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(3);
                  }}
                  data-toggle="tab"
                  href="#link3"
                  role="tablist"
                >
                  Forums
                </a>
              </li>
            </ul>
          </div>
          {/* <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 rounded"> */}
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <NewsList />
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link3">
                  <ConferencesList />
                </div>
                <div className={openTab === 3 ? "block" : "hidden"} id="link2">
                  <ForumsList />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default function TabsRender() {
  return (
    <>
      <Tabs color="helloblue" />
    </>
  );
}

import React from "react";

import ArticlesList from "../Articles/ArticlesList";
import VideosList from "../Videos/VideosList";
import DocsList from "../Docs/DocsList";
import EbooksList from "../E-Books/EBooksList";
import WebsitesList from "../Websites/WebsitesList";
import SnippetsList from "../Snippets/SnippetsList";

const Tabs = ({ color }) => {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <>
      <div className="flex flex-wrap w-full z-0">
        <div className="w-full">
          <div className="flex md:sticky top-0 z-10">
            <ul
              className="md:flex flex-row grid grid-cols-3 md:justify-between mb-0 list-none flex-wrap pt-3 pb-4 text-gray-700 font-semibold md:backdrop-filter md:backdrop-blur-xl md:shadow-sm md:w-full"
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
                  Articles
                </a>
              </li>
              <li className="-mb-px mx-2 md:mx-1 md:my-1 my-2 last:mr-0 flex-auto text-center">
                <a
                  className={
                    "text-xs font-bold uppercase px-5 py-3 rounded block leading-normal " +
                    (openTab === 2
                      ? "text-white bg-" + color + "-600"
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
                  Videos
                </a>
              </li>
              <li className="-mb-px mx-2 md:mx-1 md:my-1 my-2 last:mr-0 flex-auto text-center">
                <a
                  className={
                    "text-xs font-bold uppercase px-5 py-3 rounded block leading-normal " +
                    (openTab === 3
                      ? "text-white bg-" + color + "-600"
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
                  Docs
                </a>
              </li>
              <li className="-mb-px mx-2 md:mx-1 md:my-1 my-2 last:mr-0 flex-auto text-center">
                <a
                  className={
                    "text-xs font-bold uppercase px-5 py-3 rounded block leading-normal " +
                    (openTab === 4
                      ? "text-white bg-" + color + "-600"
                      : "text-" + color + "-600 bg-white")
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(4);
                  }}
                  data-toggle="tab"
                  href="#link4"
                  role="tablist"
                >
                  Websites
                </a>
              </li>
              <li className="-mb-px mx-2 md:mx-1 md:my-1 my-2 last:mr-0 flex-auto text-center">
                <a
                  className={
                    "text-xs font-bold uppercase px-5 py-3 rounded block leading-normal " +
                    (openTab === 5
                      ? "text-white bg-" + color + "-600"
                      : "text-" + color + "-600 bg-white")
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(5);
                  }}
                  data-toggle="tab"
                  href="#link5"
                  role="tablist"
                >
                  E-books
                </a>
              </li>
              <li className="-mb-px mx-2 md:mx-1 md:my-1 my-2 last:mr-0 flex-auto text-center">
                <a
                  className={
                    "text-xs font-bold uppercase px-5 py-3 rounded block leading-normal " +
                    (openTab === 6
                      ? "text-white bg-" + color + "-600"
                      : "text-" + color + "-600 bg-white")
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(6);
                  }}
                  data-toggle="tab"
                  href="#link6"
                  role="tablist"
                >
                  Snippets
                </a>
              </li>
            </ul>
          </div>
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <ArticlesList />
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <VideosList />
                </div>
                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                  <DocsList />
                </div>
                <div className={openTab === 4 ? "block" : "hidden"} id="link4">
                  <WebsitesList />
                </div>
                <div className={openTab === 5 ? "block" : "hidden"} id="link5">
                  <EbooksList />
                </div>
                <div className={openTab === 6 ? "block" : "hidden"} id="link6">
                  <SnippetsList />
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

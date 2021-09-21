import React from "react";
import { BsBoxArrowUpRight, BsBookmarksFill } from "react-icons/bs";
import Moment from "react-moment";
import { useReadingTime } from "react-reading-time-estimator";

// This is the Article Component
const Article = ({
  picturelURL = "https://danilowoz.com/images/atomic-design-with-react/cover.jpg",
  title,
  pubDate,
  link,
  content = "",
}) => {
  const dateToFormat = new Date(pubDate);
  const {
    text, // 1 min read
    minutes, // 1
    words, // 168
    time, // 0.5309090909090909
  } = useReadingTime(content);

  return (
    <div className="mx-3 md:mx-5">
      <section className="flex flex-col bg-mirage-400 rounded-lg shadow hover:shadow-sm md:h-80 h-72 w-72 m-auto my-4">
        <img
          className="w-full h-40 md:h-48 object-cover object-center rounded-t-lg"
          src={picturelURL}
          alt="blogImage"
        />
        <div className="flex-grow m-auto text-gray-700 text-center mx-2">
          <div>
            <a href={`${link}`} target="__blank">
              <h1 className="text-md font-semibold font-sans hover:text-helloblue-600">
                {title}
              </h1>
            </a>
            {/* <p className="text-md mT-2"> { post.brief.substring(0, 60).concat(`...`) } </p> */}
            <div className="flex flex-row justify-center my-2">
              <p className="text-xs">
                {" "}
                {/* {new Date(post.dateAdded).toDateString()}{" "} */}
                <Moment date={dateToFormat} format="MMM Do, YYYY" />
                {" • "}
                <span className="text-xs">{text}</span>
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-row m-auto my-2">
          <a href={`${link}`} target="__blank" className="items-center">
            <div className="flex flex-row font-semibold bg-helloyellow-600 text-gray-900 p-2 rounded  hover:drop-shadow-md">
              <h3 className=" my-auto ml-2 mr-1">Read it</h3>
              <span className="text-xl ml-1 mr-2">
                <BsBoxArrowUpRight />
              </span>
            </div>
          </a>
          <button className="flex flex-row font-semibold bg-hellodarkblue-400 text-white p-2 ml-4 rounded">
            {/* <h3 className=" my-auto ml-2 mr-1">Read it</h3> */}
            <span className="text-xl ml-1 mr-2">
              <BsBookmarksFill />
            </span>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Article;

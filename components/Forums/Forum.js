import React from "react";
import { BsBoxArrowUpRight, BsBookmark, BsBookmarkFill } from "react-icons/bs";
import { SiReddit } from "react-icons/si";
import Moment from "react-moment";
import { BiDoorOpen } from "react-icons/bi";

// This is the Forum Component
const Forum = ({ title, pubDate, link }) => {
  const [isBookmarked, setBookmarked] = React.useState(false);
  const handleBookmark = () => {
    setBookmarked(!isBookmarked);
  };

  const dateToFormat = new Date(pubDate);

  return (
    // <div className="flex flex-col p-2 md:p-3 m-3 rounded-b-md md:rounded-lg hover:border border-l-2 border-yellow-700 text-gray-800">
    <div className="flex flex-col p-2 md:p-3 mx-1 my-3 md:m-3 rounded-l-md md:rounded-lg border-l-2 hover:border shadow-sm hover:shadow-md border-red-400 text-gray-800">
      <a href={`${link}`} target="__blank" className="flex flex-col">
        <div className="text-5xl mx-auto" style={{ color: "#ff4301" }}>
          <SiReddit />
        </div>
        <div className="flex flex-col my-2 md:my-4">
          <h1 className="font-medium mx-auto text-xs text-justify">{title}</h1>
          <div className="text-xs my-3 justify-end">
            <Moment date={dateToFormat} fromNow />
          </div>
        </div>
      </a>
      <div className="flex flex-row justify-center">
        <a
          href={`${link}`}
          target="__blank"
          className="flex flex-row mx-auto text-xs text-helloblue-700 font-bold bg-helloyellow-500 hover:bg-helloyellow-400 rounded-xl p-2"
        >
          <p className="my-auto">Open</p>
          <div className="text-md my-auto">
            <BiDoorOpen />
          </div>
        </a>
        <button
          onClick={handleBookmark}
          className="flex flex-row justify-end font-semibold rounded-lg bg-white text-green-600 hover:shadow-sm shadow-md p-2 ml-4 mx-auto"
        >
          <h3 className=" my-auto ml-2 mr-1 text-xs text-green-600">
            Bookmark
          </h3>
          <span className="text-xl mx-1">
            {isBookmarked ? <BsBookmarkFill /> : <BsBookmark />}
          </span>
        </button>
      </div>
    </div>
    // <div className="mx-3 md:mx-5">
    //   <section className="flex flex-col container bg-mirage-400 rounded-lg shadow hover:shadow-sm md:h-80 h-76 w-72 m-auto my-4">
    //     <div className="flex-grow m-auto text-gray-700 text-center mx-2">
    //       <div>
    //         <a href={`${link}`} target="__blank">
    //           <h1 className="text-md md:text-sm font-semibold font-sans hover:text-helloblue-600">
    //             {title}
    //           </h1>
    //         </a>
    //         {/* <p className="text-md mT-2"> { post.brief.substring(0, 60).concat(`...`) } </p> */}
    //         <div className="flex flex-row justify-center my-2">
    //           <p className="text-xs">
    //             {" "}
    //             {/* {new Date(post.dateAdded).toDateString()}{" "} */}
    //             <Moment date={dateToFormat} fromNow />
    //             {" • "}
    //             <span className="text-xs">{text}</span>
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="flex flex-row m-auto my-2">
    //       <a href={`${link}`} target="__blank" className="items-center">
    //         <div className="flex flex-row font-semibold bg-helloyellow-600 text-gray-900 p-2 rounded  hover:drop-shadow-md">
    //           <h3 className=" my-auto ml-2 mr-1">Read it</h3>
    //           <span className="text-xl ml-1 mr-2">
    //             <BsBoxArrowUpRight />
    //           </span>
    //         </div>
    //       </a>
    //       <button
    //         onClick={handleBookmark}
    //         className="flex flex-row font-semibold rounded-lg bg-white text-helloblue-500  hover:shadow-sm shadow-md p-2 ml-4"
    //       >
    //         {/* <h3 className=" my-auto ml-2 mr-1">Read it</h3> */}
    //         <span className="text-2xl mx-1">
    //           {isBookmarked ? <BsBookmarkFill /> : <BsBookmark />}
    //         </span>
    //       </button>
    //     </div>
    //   </section>
    // </div>
  );
};

export default Forum;

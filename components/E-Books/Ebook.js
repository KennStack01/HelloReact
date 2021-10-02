import React from "react";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import { ImBook } from "react-icons/im";

// This is the EBook Component
const EBook = ({ pictureURL, title, pubDate, link, author, isFree }) => {
  const [isBookmarked, setBookmarked] = React.useState(false);
  const handleBookmark = () => {
    setBookmarked(!isBookmarked);
  };

  return (
    <div className="mx-2">
      <section className="flex flex-col container bg-mirage-400 rounded-lg shadow hover:shadow-sm md:h-80 h-76 w-6/7 m-auto my-4">
        <div>
          <img
            className="w-full h-40 md:h-48 object-cover object-center rounded-t-lg image-video"
            src={pictureURL}
            alt="Book Cover Image"
          />
          <p
            className={
              !isFree
                ? "hidden"
                : `block bg-red-500 absolute px-2 py-1 -mt-20 rounded-r text-white font-semibold`
            }
          >
            free
          </p>
        </div>
        <div className="flex-grow m-auto text-gray-700 text-center mx-2">
          <div>
            <a
              href={`${link}`}
              target="__blank"
              className="flex flex-row justify-center"
            >
              <h1 className="text-md font-semibold font-sans hover:text-helloblue-600">
                {title}
              </h1>
            </a>
            <p className="text-xs md:text-sm text-center text-gray-600">
              {" "}
              by {author}{" "}
            </p>
          </div>
        </div>
        <div className="flex flex-row m-auto my-2">
          <a href={`${link}`} target="__blank" className="items-center">
            <div className="flex flex-row font-semibold bg-helloblue-500 hover:bg-helloblue-400 text-white p-2 rounded  hover:drop-shadow-md">
              <h3 className=" my-auto ml-2 mr-1">Open it</h3>
              <span className="text-3xl my-auto ml-1 mr-2">
                <ImBook />
              </span>
            </div>
          </a>
          {/* <button
            onClick={handleBookmark}
            className="flex flex-row font-semibold rounded-lg bg-white text-helloblue-500  hover:shadow-sm shadow-md p-2 ml-4"
          >
            <span className="text-2xl mx-1">
              {isBookmarked ? <BsBookmarkFill /> : <BsBookmark />}
            </span>
          </button> */}
        </div>
      </section>
    </div>
  );
};

export default EBook;

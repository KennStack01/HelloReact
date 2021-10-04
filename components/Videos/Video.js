import React from "react";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import { RiYoutubeFill } from "react-icons/ri";
import toast from "react-hot-toast";

const notify = () =>
  toast.success(
    <div className="flex flex-row my-auto">
      {" "}
      <p>Bookmark Created</p>{" "}
    </div>
  );

// This is the Video Component
const Video = ({
  picturelURL = "https://danilowoz.com/images/atomic-design-with-react/cover.jpg",
  id,
  title,
  pubDate,
  link,
  content = "",
}) => {
  const [isBookmarked, setBookmarked] = React.useState(false);
  const handleBookmark = () => {
    setBookmarked(!isBookmarked);
    if (!isBookmarked) {
      notify();
    }
  };

  // const dateToFormat = new Date(pubDate);

  return (
    <div className="mx-2">
      <section className="flex flex-col container bg-mirage-400 rounded-lg shadow hover:shadow-sm md:h-80 h-76 w-6/7 m-auto my-4">
        <img
          className="w-full h-40 md:h-48 object-cover object-center rounded-t-lg image-video"
          src={picturelURL}
          alt="blogImage"
        />
        <div className="flex-grow m-auto text-gray-700 text-center mx-2">
          <div>
            <a href={`${link}`} target="__blank">
              <h1 className="text-md md:text-sm font-medium md:font-semibold hover:text-helloblue-600">
                {title}
              </h1>
            </a>
          </div>
        </div>
        <div className="flex flex-row m-auto my-2">
          <a href={`${link}`} target="__blank" className="items-center">
            <div className="flex flex-row font-semibold bg-red-600 text-white p-2 rounded  hover:drop-shadow-md">
              <h3 className=" my-auto ml-2 mr-1">Watch</h3>
              <span className="text-3xl my-auto ml-1 mr-2">
                <RiYoutubeFill />
              </span>
            </div>
          </a>
          <button
            onClick={handleBookmark}
            className="flex flex-row font-semibold rounded-lg bg-white text-helloblue-500  hover:shadow-sm shadow-md p-2 ml-4"
          >
            {/* <h3 className=" my-auto ml-2 mr-1">Read it</h3> */}
            <span className="text-2xl mx-1">
              {isBookmarked ? <BsBookmarkFill /> : <BsBookmark />}
            </span>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Video;

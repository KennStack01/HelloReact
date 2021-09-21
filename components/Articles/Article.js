import React from "react";
import { BsBoxArrowUpRight } from "react-icons/bs";

// This is the Article Component
const Article = ({
  picturelURL = "https://danilowoz.com/images/atomic-design-with-react/cover.jpg",
  title,
  link,
}) => {
  return (
    <div className="mx-3 md:mx-5">
      <section className="flex flex-col bg-mirage-400 rounded-lg shadow md:h-80 h-72 w-72 m-auto my-4">
        <img
          className="w-full h-40 md:h-48 object-cover object-center rounded-t-lg"
          src={picturelURL}
          alt="blogImage"
        />
        <div className="flex-grow m-auto text-gray-700 text-center mx-2">
          <div>
            <h1 className="text-md font-semibold font-sans">{title}</h1>
            {/* <p className="text-md mT-2"> { post.brief.substring(0, 60).concat(`...`) } </p> */}
            <p className="text-xs">
              {" "}
              {/* {new Date(post.dateAdded).toDateString()}{" "} */}
            </p>
          </div>
        </div>
        <div className="m-auto my-2">
          <a href={`${link}`} target="__blank">
            <div className="flex flex-row font-semibold bg-helloyellow-600 text-gray-900">
              <h3>Read it</h3>
              <span className="text-xl mt-1 mx-2">
                <BsBoxArrowUpRight />
              </span>
            </div>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Article;

import React, { useEffect, useState } from "react";
import Conference from "./Conference";
// import Parser from "rss-parser";
import conferencesListData from "./theList";
// import keywords from "../keywords";
import { RiArrowUpCircleFill } from "react-icons/ri";
import { Link } from "react-scroll";
import { HideScroll } from "react-hide-on-scroll";

const ConferencesList = () => {
  const [conferences, setConferences] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  let tempArray = [];

  function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
      // Generate random number
      var j = Math.floor(Math.random() * (i + 1));

      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }

    return array;
  }

  useEffect(() => {
    tempArray = conferencesListData.sort(() => Math.random() - 0.5);
    setConferences(shuffleArray(tempArray));
    setLoading(false);
  }, []);

  // console.log(conferences);

  return (
    <div>
      <div>
        {loading ? (
          <div>
            <h1 className="text-xl text-gray-700 font-semibold text-center mx-auto place-self-center">
              Loading...
            </h1>
          </div>
        ) : (
          <div>
            <div className=" md:mx-40 mx-2 md:mb-4 md:mt-2 my-4 md:my-6">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder={`Type and Search | Conference`}
                className="px-3 py-2 sticky top-0 placeholder-gray-400 text-blueGray-600 bg-white rounded text-sm outline-none focus:outline-none focus:ring-2 ring-1 ring-gray-300 focus:ring-helloblue-400 w-full"
              />
            </div>
            <div className="flex flex-col md:grid grid-cols-3 mx-auto">
              {conferences
                .filter((conference) => {
                  if (searchTerm === "") {
                    return conference;
                  } else if (
                    conference
                      .toLowerCase()
                      .includes(searchTerm.toString().toLowerCase().trim())
                  ) {
                    return conference;
                  }
                })
                .map((conference) => (
                  <Conference key={conference} conferenceURL={conference} />
                ))}
            </div>
          </div>
        )}
        {process.browser ? (
          <HideScroll variant="down">
            <Link
              to="Banner"
              // to="MenuTab"
              smooth={true}
              duration={1000}
              className="sticky bottom-2 flex flex-row justify-between"
            >
              <div></div>
              <div></div>
              <div className="z-50 flex flex-row-reverse bg-white text-helloblue-700 font-semibold w-14 rounded-full cursor-pointer">
                {/* <p className="text-xl">Scroll Up</p> */}
                <RiArrowUpCircleFill className="text-6xl mx-auto justify-items-center" />
              </div>
            </Link>
          </HideScroll>
        ) : (
          // <div>
          //   {/* <HideScroll variant="down">
          //     <Link
          //       to="Banner"
          //       smooth={true}
          //       duration={1000}
          //       className=" z-30 bg-white text-gray-900 font-semibold hidden md:block sticky bottom-2 w-14 rounded-full cursor-pointer"
          //     >
          //       <RiArrowUpCircleFill className="text-6xl mx-auto justify-items-center" />
          //     </Link>
          //   </HideScroll> */}
          // </div>
          ""
        )}
      </div>
    </div>
  );
};

export default ConferencesList;

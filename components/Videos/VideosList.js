import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Video from "./Video";
import Parser from "rss-parser";
import rssList from "./rssList";
import keywords from "../keywords";
import { RiArrowUpCircleFill } from "react-icons/ri";
import { Link } from "react-scroll";
import { HideScroll } from "react-hide-on-scroll";

const VideosList = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  let tempURL;
  let tempArray = [];
  let sortedArray = [];

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
    rssList = rssList.sort(() => Math.random() - 0.5);
    rssList.forEach((url) => {
      tempURL = url;
      const parser = new Parser();
      // const filterPosts = (items, limit) => {
      //   ...
      // }
      const fetchvideos = async () => {
        const feed = await parser.parseURL(`https://cors.bridged.cc/${url}`);
        // const videoPost = filterPosts(feed.items, 5)
        const videoPost = feed.items.filter((item) => {
          for (let i = 0; i < keywords.length; i++) {
            return item.title.toLowerCase().includes(keywords[i]);
          }
          // return item.title
          //   .toLowerCase()
          //   .includes(keywords.forEach((keyword) => keyword.toLowerCase()));
          // .includes(keywords.toLocaleLowerCase());
        });
        tempArray.push(...videoPost);
        setLoading(false);
        // setVideos([...videos, ...videoPost]);
      };
      fetchvideos();
      // sort array by date
      tempArray = tempArray.sort((a, b) => {
        return new Date(b.pubDate) - new Date(a.pubDate);
      });
      // shuffle array
      tempArray = shuffleArray(tempArray);
    });
    setVideos(tempArray);
    // console.log(tempArray);
  }, [rssList]);

  console.log(videos);

  // videos.forEach((article) => {
  //   console.log(article.link);
  // });

  return (
    <div>
      <InfiniteScroll
        className="py-6"
        dataLength={videos.length} //This is important field to render the next data
        next={() => {
          // fetchvideos();
          console.log("fetch more");
          // setLoading(true);
        }}
        // hasMore={true}
      >
        {loading ? (
          <div>
            <h1 className="text-xl text-gray-700 font-semibold text-center mx-auto place-self-center">
              Loading...
            </h1>
          </div>
        ) : (
          <div>
            <div className=" md:mx-40 mx-2 md:mb-4 md:mt-2 my-2">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder={`Type and Search`}
                className="px-3 py-2 sticky top-0 placeholder-gray-400 text-blueGray-600 bg-white rounded text-sm outline-none focus:outline-none focus:ring-2 ring-1 ring-gray-300 focus:ring-helloblue-400 w-full"
              />
            </div>
            <div className="md:grid grid-cols-3 mx-auto">
              {videos
                .filter((video) => {
                  if (searchTerm === "") {
                    return video;
                  } else if (
                    video.title
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase().trim()) ||
                    video.author
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase().trim())
                  ) {
                    return video;
                  }
                })
                .sort((a, b) => b.pubDate - a.pubDate)
                .map((video) => (
                  <Video
                    key={video.title}
                    picturelURL={`https://img.youtube.com/vi/${video.id.substring(
                      9
                    )}/hqdefault.jpg`}
                    title={video.title}
                    pubDate={video.pubDate}
                    link={video.link}
                    content={video.content}
                  />
                ))}
            </div>
          </div>
        )}
      </InfiniteScroll>
      {/* <div className="flex flex-col md:grid grid-cols-3 mx-auto">
        {loading ? (
          <div>
            <h1 className="text-xl text-gray-700 font-semibold text-center mx-auto place-self-center">
              Loading...
            </h1>
          </div>
        ) : (
          videos.map((article) => (
            <Article
              key={article.title}
              title={article.title}
              pubDate={article.pubDate}
              link={article.link}
              content={article.content}
            />
          ))
        )}
      </div> */}
      {process.browser ? (
        <HideScroll variant="down">
          <Link
            to="Banner"
            // to="MenuTab"
            smooth={true}
            duration={1000}
            className="flex flex-row z-50 bg-white text-helloblue-700 font-semibold sticky bottom-2 w-14 rounded-full cursor-pointer"
          >
            {/* <p className="text-xl">Scroll Up</p> */}
            <RiArrowUpCircleFill className="text-6xl mx-auto justify-items-center" />
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
  );
};

export default VideosList;

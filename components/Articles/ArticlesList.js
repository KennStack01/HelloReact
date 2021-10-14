import React, { useEffect, useState } from "react";
import Article from "./Article";
import Parser from "rss-parser";
import rssList from "./rssList";
import keywords from "../keywords";
import { RiArrowUpCircleFill } from "react-icons/ri";
import { Link } from "react-scroll";
import { HideScroll } from "react-hide-on-scroll";

const ArticlesList = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  let tempURL;
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

  const removeDuplicateObject = (fn) => {
    const sortedArray = new Set();

    const orderedArray = fn.filter((el) => {
      const duplicate = sortedArray.has(el.id);
      sortedArray.add(el.id);
      return !duplicate;
    });

    return orderedArray;
  };

  const fetchArticles = async (url, parser) => {
    const feed = await parser.parseURL(
      `https://cors-anywhere.herokuapp.com/${url}`
    );
    // const feed = await parser.parseURL(`https://cors.bridged.cc/${url}`);
    // const blogPosts = filterPosts(feed.items, 5)
    const blogPosts = feed.items.filter((item) => {
      for (let i = 0; i < keywords.length; i++) {
        return item.title.toLowerCase().includes(keywords[i]);
      }
    });

    tempArray.push(...blogPosts);
    setLoading(false);

    // setArticles([...articles, ...blogPosts]);
  };

  useEffect(() => {
    rssList = rssList.sort(() => Math.random() - 0.5);
    rssList.forEach((url) => {
      tempURL = url;
      const parser = new Parser();
      // const filterPosts = (items, limit) => {
      //   ...
      // }
      fetchArticles(url, parser);

      tempArray = tempArray.sort((a, b) => {
        return new Date(b.pubDate) - new Date(a.pubDate);
      });
      // shuffle array
      tempArray = shuffleArray(tempArray);
    });

    tempArray = removeDuplicateObject(tempArray);
    setArticles(tempArray);
    // console.log(tempArray);
  }, [rssList]);

  // console.log(articles);

  // articles.forEach((article) => {
  //   console.log(article.link);
  // });

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
            <div className=" md:mx-40 mx-2 md:mb-4 md:mt-2 my-2">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder={`Type and Search | Article Title or Blog's name`}
                className="px-3 py-2 sticky top-0 placeholder-gray-400 text-blueGray-600 bg-white rounded text-sm outline-none focus:outline-none focus:ring-2 ring-1 ring-gray-300 focus:ring-helloblue-400 w-full"
              />
            </div>
            <div className="md:grid grid-cols-3 mx-auto">
              {articles
                .filter((article) => {
                  if (searchTerm === "") {
                    return article;
                  } else if (
                    article.title
                      .toLowerCase()
                      .includes(searchTerm.toString().toLowerCase().trim()) ||
                    article.link
                      .toLowerCase()
                      .includes(searchTerm.toString().toLowerCase().trim())
                  ) {
                    return article;
                  }
                })
                .sort((a, b) => b.pubDate - a.pubDate)
                .map((article) => (
                  <Article
                    key={article.title}
                    title={article.title}
                    pubDate={article.pubDate}
                    link={article.link}
                    content={article.content}
                  />
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
              className="sticky bottom-4 flex flex-row justify-between"
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

export default ArticlesList;

import React, { useEffect, useState } from "react";
import axios from "axios";
import Article from "./Article";

import Parser from "rss-parser";

import rssList from "./rssList";
import keywords from "../keywords";
import { RiArrowUpCircleFill } from "react-icons/ri";
import { Link } from "react-scroll";
import { HideScroll } from "react-hide-on-scroll";

const ArticlesList = ({}) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  let tempURL;
  let tempArray = [];

  async function getFeed(rssFeed) {
    try {
      const rssToJsonApi = "https://api.rss2json.com/v1/api.json";
      const data = {
        params: {
          rss_url: rssFeed,
          api_key: process.env.API_KEY,
          // order_by: "pubDate",
          // order_dir: "desc",
          // count: 5,
        },
      };
      const feed = await axios.get(rssToJsonApi, data);

      const blogPosts = feed.data.items.filter((item) => {
        for (let i = 0; i < keywords.length; i++) {
          return item.title.toLowerCase().includes(keywords[i]);
        }
      });

      tempArray.push(...blogPosts);
      setLoading(false);

      console.log(tempArray);

      // console.log(feed.data.items);
      // return feed;
      // return await axios.get(rssToJsonApi, data);
    } catch (error) {
      console.error(error);
    }
  }

  //   function shuffleArray(array) {
  //     for (var i = array.length - 1; i > 0; i--) {
  //       var j = Math.floor(Math.random() * (i + 1));

  //       var temp = array[i];
  //       array[i] = array[j];
  //       array[j] = temp;
  //     }

  //     return array;
  //   }

  //   const removeDuplicateObject = (fn) => {
  //     const sortedArray = new Set();

  //     const orderedArray = fn.filter((el) => {
  //       const duplicate = sortedArray.has(el.id);
  //       sortedArray.add(el.id);
  //       return !duplicate;
  //     });

  //     return orderedArray;
  //   };

  //   const fetchArticles = async (url, parser) => {
  //     const feed = await parser.parseURL(
  //       `https://api.rss2json.com/v1/api.json?rss_url=${url}`
  //     );

  //     const blogPosts = feed.items.filter((item) => {
  //       for (let i = 0; i < keywords.length; i++) {
  //         return item.title.toLowerCase().includes(keywords[i]);
  //       }
  //     });

  //     tempArray.push(...blogPosts);
  //     setLoading(false);

  //     // setArticles([...articles, ...blogPosts]);
  //   };

  //   useEffect(() => {
  //     rssList = rssList.sort(() => Math.random() - 0.5);
  //     rssList.forEach((url) => {
  //       tempURL = url;
  //       const parser = new Parser();

  //       fetchArticles(url, parser);

  //       tempArray = tempArray.sort((a, b) => {
  //         return new Date(b.pubDate) - new Date(a.pubDate);
  //       });
  //       // shuffle array
  //       tempArray = shuffleArray(tempArray);
  //     });

  //     tempArray = removeDuplicateObject(tempArray);
  //     setArticles(tempArray);
  //     // console.log(tempArray);
  //   }, [rssList]);

  async function getFinalArticles() {
    setArticles(tempArray);
  }

  const MAX_ARTICLES = 10;
  useEffect(() => {
    rssList.forEach((url) => {
      const RssFeed = `${url}`;

      getFeed(RssFeed);

      // const loadArticles = async () => {
      //   fetch(RssFeed, { headers: { Accept: "application/json" } })
      //     .then((res) => res.json())
      //     .then((data) => data.items.filter((item) => item.title.length > 0))
      //     .then((newArticles) => newArticles.slice(0, MAX_ARTICLES))
      //     .then((articles) => {
      //       console.log(articles);
      //       setArticles(articles);
      //       setLoading(false);
      //     })
      //     .catch((error) => console.log(error));
      // };
      // loadArticles();
    });

    getFinalArticles();
  }, [MAX_ARTICLES]);

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
                ?.filter((article) => {
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
                    picturelURL={
                      article.thumbnail ||
                      "https://tutsnode.com/wp-content/uploads/2020/12/The-Creative-React-and-Redux-Course.jpg"
                    }
                  />
                ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ArticlesList;

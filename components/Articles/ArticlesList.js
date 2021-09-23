import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Article from "./Article";
import Parser from "rss-parser";
import rssList from "./rssList";
import keywords from "./keywords";

const ArticlesList = () => {
  const [articles, setArticles] = useState([]);
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
    rssList.forEach((url) => {
      tempURL = url;
      const parser = new Parser();
      // const filterPosts = (items, limit) => {
      //   ...
      // }
      const fetchArticles = async () => {
        const feed = await parser.parseURL(`https://cors.bridged.cc/${url}`);
        // const blogPosts = filterPosts(feed.items, 5)
        const blogPosts = feed.items.filter((item) => {
          return item.title
            .toLowerCase()
            .includes(keywords.toLocaleLowerCase());
        });
        tempArray.push(...blogPosts);
        setLoading(false);
        // setArticles([...articles, ...blogPosts]);
      };
      fetchArticles();
      // sort array by date
      tempArray = tempArray.sort((a, b) => {
        return new Date(b.pubDate) - new Date(a.pubDate);
      });
      // shuffle array
      tempArray = shuffleArray(tempArray);
    });
    setArticles(tempArray);
    // console.log(tempArray);
  }, []);

  console.log(articles);

  // articles.forEach((article) => {
  //   console.log(article.link);
  // });

  return (
    <div>
      {/* <h1 className="font-semibold"> Welcome to Articles 💪 </h1> */}

      <InfiniteScroll
        className="py-6"
        dataLength={articles.length} //This is important field to render the next data
        next={() => {
          // fetchArticles();
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
            <div className=" md:mx-40 mx-2 md:my-6 my-2">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder={`Type and Search`}
                className="px-3 py-2 sticky top-0 placeholder-gray-400 text-blueGray-600 bg-white rounded text-sm outline-none focus:outline-none focus:ring-2 ring-1 ring-gray-300 focus:ring-helloblue-600 w-full"
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
                      .includes(searchTerm.toLowerCase())
                  ) {
                    return article;
                  }
                })
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
      </InfiniteScroll>
      {/* <div className="flex flex-col md:grid grid-cols-3 mx-auto">
        {loading ? (
          <div>
            <h1 className="text-xl text-gray-700 font-semibold text-center mx-auto place-self-center">
              Loading...
            </h1>
          </div>
        ) : (
          articles.map((article) => (
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
    </div>
  );
};

export default ArticlesList;

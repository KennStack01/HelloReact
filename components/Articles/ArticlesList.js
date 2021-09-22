import React, { useEffect, useState } from "react";
import Article from "./Article";
import Parser from "rss-parser";
import rssList from "./rssList";
import keywords from "./keywords";

const ArticlesList = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      rssList.forEach((url) => {
        const parser = new Parser();
        // const filterPosts = (items, limit) => {
        //   ...
        // }
        const fetchArticles = async () => {
          const feed = await parser.parseURL(url);
          // const blogPosts = filterPosts(feed.items, 5)
          const blogPosts = feed.items;

          blogPosts.forEach((item) => {
            if (item.title.toLowerCase().includes(keywords)) {
              console.log(item.title);
            }
          });

          setArticles([...articles, ...blogPosts]);
          setLoading(false);
        };
        fetchArticles();
      });
    }, 2000);
  }, []);

  // console.log(articles);
  // console.log(articles[0].contentSnippet);

  return (
    <div>
      {/* <h1 className="font-semibold"> Welcome to Articles 💪 </h1> */}
      <div className="flex flex-col md:grid grid-cols-3 mx-auto">
        {loading ? (
          <div>
            <h1 className="text-xl text-gray-700 font-semibold text-center mx-auto place-items-center">
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
      </div>
    </div>
  );
};

export default ArticlesList;

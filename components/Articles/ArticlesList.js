import React, { useEffect, useState } from "react";
import Article from "./Article";
import Parser from "rss-parser";

const ArticlesList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const parser = new Parser();
    // const filterPosts = (items, limit) => {
    //   ...
    // }
    const fetchArticles = async () => {
      const url = "https://overreacted.io/rss.xml";
      const feed = await parser.parseURL(url);
      // const blogPosts = filterPosts(feed.items, 5)
      const blogPosts = feed.items;
      setArticles(blogPosts);
    };
    fetchArticles();
  }, []);

  console.log(articles);
  // console.log(articles[0].contentSnippet);

  return (
    <div>
      <h1 className="font-semibold"> Welcome to Articles 💪 </h1>
      <div className="flex flex-col md:grid grid-cols-3 mx-auto">
        {articles
          ? articles.map((article) => (
              <Article
                key={article.guid}
                title={article.title}
                pubDate={article.pubDate}
                link={article.link}
                content={article.content}
              />
            ))
          : null}
      </div>
    </div>
  );
};

export default ArticlesList;

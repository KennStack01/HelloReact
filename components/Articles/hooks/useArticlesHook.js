// This is the hook for the articles component
// Under Construction!

// import Parser from "rss-parser";
// import rssList from "../rssList";
// import { useState, useEffect } from "react";

// const useArticlesHook = () => {
//   const [tempArticles, setTempArticles] = useState([]);
//   const [articles, setArticles] = useState([]);

//   useEffect(() => {
//     rssList.forEach((url) => {
//       const parser = new Parser();
//       // const filterPosts = (items, limit) => {
//       //   ...
//       // }
//       const fetchArticles = async () => {
//         // const url = "https://overreacted.io/rss.xml";
//         const feed = await parser.parseURL(url);
//         // const blogPosts = filterPosts(feed.items, 5)
//         const blogPosts = feed.items;
//         setTempArticles(blogPosts);
//         setArticles([...articles, ...blogPosts]);
//       };
//       fetchArticles();
//     });

//     return { articles };
//   }, []);
// };

// export default useArticlesHook;

import React, { useEffect, useState } from "react";
import NewsItems from "./NewsItems";

const News = (props) => {
  const [news, setNews] = useState("");

  let country = "in";
  let category = props.category;
  // let apiKey="29b60461c3f541a381f3b9b66575d202"
  let apiKey = "f8a457742db64ab4a830a7c6563559d0";
  let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}`;
  let result;
  const myNews = async () => {
    let response = await fetch(url);
    result = await response.json();
    // console.log(result);
    // console.log(result.articles);// Array of news  0-20
    // console.log(result.articles[0]); //  news

    let p = result.articles.map((a) => {
      return (
        <>
          <NewsItems
            title={a.title}
            description={a.description}
            publishDate={a.publishedAt}
            sourceName={a.source.name}
            NewsUrl={a.url}
            ImageUrl={a.urlToImage}
            Author={a.author}
          />
        </>
      );
    });
    setNews(p);
  };
  useEffect(() => {
    myNews();
  });
  return (
    <>
      <div className="container">
        <h1 className="heading">Top-Heading</h1>
        <div className="box">{news}</div>
      </div>
    </>
  );
};

export default News;

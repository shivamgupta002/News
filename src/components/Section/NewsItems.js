import React from "react";
import "./NewsItem.css";
import img1 from "./News.jpeg";

const NewsItems = (props) => {
  return (
    <>
      <div className="card card_style">
        <img
          src={props.ImageUrl === null ? img1 : props.ImageUrl}
          className="card-img-top news_img"
          alt="img"
        />
        <h5>
          <span class="badge bg-secondary label">
            {" "}
            {props.sourceName === null ? "Not Available" : props.sourceName}
          </span>
        </h5>
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">
            {props.description == null
              ? props.description
              : props.description.slice(0, 160)}
            ...
            <a
              href={props.NewsUrl}
              className="read_more"
              target="_blank"
              rel="noreferrer"
            >
              Read More
            </a>
          </p>
        </div>
        {/* <p className="lastCard">
          Publish By :-{" "}
          {props.sourceName === null ? "Not Available" : props.sourceName}
        </p> */}
        <p className="lastCard">
          Publish At :-{" "}
          {props.publishDate === null ? "Not Available" : props.publishDate}
        </p>
        <p className="lastCard">
          Author :- {props.Author === null ? "Not Available" : props.Author}
        </p>
      </div>
    </>
  );
};

export default NewsItems;

import React from "react";
import "../styles/singlePost.css";

const SinglePost = () => {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          src="https://images.pexels.com/photos/14299739/pexels-photo-14299739.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className="singlePostImg"
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit amet
          <div className="singlePostEdit">
            <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
            <i className="singlePostIcon fa-solid fa-trash"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author : <b>Zafar</b>
          </span>
          <span className="singlePostDate">1 Hour Ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur
          eaque molestias officiis? Amet atque rem quos molestias rerum incidunt
          labore beatae provident ratione quam at dignissimos repellendus
          minima, animi modi? Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Pariatur eaque molestias officiis? Amet atque rem
          quos molestias rerum incidunt labore beatae provident ratione quam at
          dignissimos repellendus minima, animi modi? Lorem ipsum dolor sit,
          amet consectetur adipisicing elit. Pariatur eaque molestias officiis?
          Amet atque rem quos molestias rerum incidunt labore beatae provident
          ratione quam at dignissimos repellendus minima, animi modi? Lorem
          ipsum dolor sit, amet consectetur adipisicing elit. Pariatur eaque
          molestias officiis? Amet atque rem quos molestias rerum incidunt
          labore beatae provident ratione quam at dignissimos repellendus
          minima, animi modi?
        </p>
      </div>
    </div>
  );
};

export default SinglePost;

import React from "react";
import SinglePost from "./SinglePost";
import Sidebar from "./Sidebar";
import "../styles/single.css";
// import Sidbar from "./Sidbar";

const Single = () => {
  return (
    <>
      <div className="single">
        <SinglePost />
        <Sidebar />
      </div>
    </>
  );
};

export default Single;

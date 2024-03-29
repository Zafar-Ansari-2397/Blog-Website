import React from "react";
import Header from "../components/Header";
import "../styles/home.css";
import Posts from "../components/Posts";
import Sidebar from "../components/Sidebar";

const Home = () => {
  return (
    <>
      <Header />
      <div className="home">
        <Posts />
        <Sidebar />
      </div>
    </>
  );
};

export default Home;

import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleMain">React & Node</span>
        <span className="headerTitleSub">Blog</span>
      </div>
      <img
        className="headerImage"
        src="https://images.pexels.com/photos/19561453/pexels-photo-19561453/free-photo-of-aerial-view-of-an-abandoned-village-of-gamsutl-dagestan-russia.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="Home"
      />
    </div>
  );
};

export default Header;

import React from "react";
import "../styles/post.css";

const Post = () => {
  return (
    <div className="post">
      <img
        src="https://images.pexels.com/photos/19474174/pexels-photo-19474174/free-photo-of-sunflower-in-a-field.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
        className="postImg"
      />
      <div className="postInfo">
        <div className="postCategories">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTite">Lorem ipsum dolor sit amet </span>
        <hr />
        <span className="postDate">1 hr Ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
        suscipit officiis, dolorem dignissimos iusto ipsa nulla asperiores
        doloremque, sunt consectetur, qui labore repudiandae ex voluptates iste
        laborum possimus ipsum deleniti? Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Similique suscipit officiis, dolorem dignissimos iusto
        ipsa nulla asperiores doloremque, sunt consectetur, qui labore
        repudiandae ex voluptates iste laborum possimus ipsum deleniti? Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Similique suscipit
        officiis, dolorem dignissimos iusto ipsa nulla asperiores doloremque,
        sunt consectetur, qui labore repudiandae ex voluptates iste laborum
        possimus ipsum deleniti?
      </p>
    </div>
  );
};

export default Post;

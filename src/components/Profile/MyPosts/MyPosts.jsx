import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Posts/Post";

const MyPosts = () => {
  return (
    <div>
      <div>
        my posts
        <div>
          <textarea></textarea>
          <button>Add posts</button>
          <button>Remove</button>
        </div>
      </div>
      <div className={s.posts}>
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
};

export default MyPosts;

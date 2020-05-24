import React from "react";

import Post from "../../components/Post";

const Posts = ({ posts, getUserHandler }) => (
  <div className="container" data-testid="posts">
    <section className="feed">
      <Post onlyPost={true} />
    </section>
  </div>
);

export default Posts;

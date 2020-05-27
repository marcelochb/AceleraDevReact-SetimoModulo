import React from "react";

import Post from "../../components/Post";

import "./UserPosts.scss";

const UserPosts = ({ posts }) => (
  <div className="container" data-testid="user-posts">
    <section className="user-posts">
      <Post onlyPost={false} />
    </section>
  </div>
);

export default UserPosts;

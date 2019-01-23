import React from "react";
import { Link } from "react-router-dom";

const Post = function(props) {
  return (
    <div className="my-5">
      <h3>
        <Link to={"/post/" + props.slug} className="no-link-style my-3">
          {props.title}
        </Link>
      </h3>
      <p>{new Date(props.timestamp * 1000).toDateString()}</p>
      <p>{props.tldr}</p>
    </div>
  );
};

const PostList = function(props) {
  const { posts } = props;
  return (
    <div>
      {posts.map(data => (
        <Post {...data} key={data.slug} />
      ))}
    </div>
  );
};

export default PostList;

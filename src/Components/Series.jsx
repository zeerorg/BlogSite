import React from "react";
import { Link } from "react-router-dom";

import * as urls from "../urls";
import GetContent from "./GetContent";

const Series = function(props) {
  return (
    <div className="ml-1">
      <h3 className="series-heading">Series</h3>
      <GetContent url={urls.api}>
        {allPosts => {
          let seriesPosts = JSON.parse(allPosts).filter(post =>
            props.posts.includes(post.slug)
          );
          return seriesPosts.map(post =>
            post.slug !== props.currentPost ? (
              <Link
                to={`/post/${post.slug}`}
                key={post.slug}
                className="series-link"
              >
                {post.title}
              </Link>
            ) : (
              <p key={post.slug} className="series-current">
                {post.title}
              </p>
            )
          );
        }}
      </GetContent>
    </div>
  );
};

export default Series;

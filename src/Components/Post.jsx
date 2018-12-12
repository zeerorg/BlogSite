import React from "react";
import { Link } from "react-router-dom";

import GetContent from "./GetContent";
import DisplayPost from "./DisplayPost";
import * as urls from "../urls";

const Post = function(props) {
  const slug = props.match.params.slug;
  return (
    <React.Fragment>
      <div>
        <div className="container mx-0 px-0">
          <Link to="/" className="no-link-style">
            <h2 className="mt-5">Rishabh's Blog</h2>
          </Link>
        </div>
      </div>
      <GetContent url={urls.api}>
        {allData => {
          const post = JSON.parse(allData).filter(
            data => data.slug === slug
          )[0];
          return (
            <GetContent url={urls.GetHTML(post.filename)}>
              {postHtml => <DisplayPost {...post} postHtml={postHtml} />}
            </GetContent>
          );
        }}
      </GetContent>
    </React.Fragment>
  );
};

export default Post;

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
          <div className="row">
            <div className="col-md-1" />
            <div className="col-md-8">
              <Link to="/" className="no-link-style">
                <h2 className="my-4">Rishabh's Blog</h2>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <GetContent url={[urls.api, urls.series]} key={slug}>
        {(allData, allSeries) => {
          const post = JSON.parse(allData).filter(
            data => data.slug === slug
          )[0];
          const series = JSON.parse(allSeries)[post["series"]];
          return (
            <GetContent url={urls.GetHTML(post.filename)}>
              {postHtml => (
                <DisplayPost
                  {...post}
                  postHtml={postHtml}
                  series={series ? series : null}
                  key={post.slug}
                />
              )}
            </GetContent>
          );
        }}
      </GetContent>
    </React.Fragment>
  );
};

export default Post;

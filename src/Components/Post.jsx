import React from "react";

import GetContent from "./GetContent";
import DisplayPost from "./DisplayPost";
import * as urls from "../urls";

const Post = function(props) {
  const slug = props.match.params.slug;
  return (
    <React.Fragment>
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

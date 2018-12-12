import React from "react";
import { Link } from "react-router-dom";

import GetContent from "./GetContent";
import { api as url } from "../urls";

const Post = function(props) {
  return (
    <div className="my-5">
      <Link to={"/post/" + props.slug} className="no-link-style my-3">
        <h3>{props.title}</h3>
      </Link>
      <p>
        {new Date(props.timestamp*1000).toDateString()}, {props.type.toUpperCase()}
      </p>
      <p>{props.tldr}</p>
    </div>
  );
};

const PostList = function(props) {
  const { section } = props;

  return (
    <div>
      <GetContent url={url}>
        {allData =>
          JSON.parse(allData).reverse()
            .filter(
              data =>
                (section === "all" || data.type === section) && data.published
            )
            .map(data => <Post {...data} key={data.slug} section={section} />)
        }
      </GetContent>
    </div>
  );
};

export default PostList;

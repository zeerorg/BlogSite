import React from "react";
import { Link } from "react-router-dom";

import SectionNav from "./SectionNav";
import PostList from './PostList';

const Main = function(props) {
  const { section } = props;
  return (
    <div className="container">
      <div className="m-3 my-5">
        <div className="my-4">
          <Link to="/" className="no-link-style">
            <h1>Rishabh's Blog</h1>
          </Link>
        </div>
        <p>
          I'm Rishabh, I blog about software development and some casual stuff.
          <br />
          <a href="https://twitter.com/thisIsRGupta">@thisIsRGupta</a> /{" "}
          <a href="mailto:r.g.gupta@outlook.com">r.g.gupta@outlook.com</a>
        </p>
        <SectionNav section={section} />
        <PostList section={section} />
      </div>
    </div>
  );
};

export default Main;

import React from "react";
import { Link } from "react-router-dom";

import SectionNav from "./SectionNav";
import PostList from "./PostList";

const Home = function(props) {
  let { section } = props;
  return (
    <React.Fragment>
      <div className="my-5">
        <h1>
          <Link to="/" className="no-link-style">
            Rishabh's Blog
          </Link>
        </h1>
      </div>
      <p className="my-5">
        I'm Rishabh, I blog about software development and some casual stuff.
        <br />
        <a href="https://twitter.com/thisIsRGupta">@thisIsRGupta</a> /
        <a href="mailto:r.g.gupta@outlook.com">r.g.gupta@outlook.com</a>
      </p>
      <SectionNav section={section} />
      <PostList section={section} />
    </React.Fragment>
  );
};

export default Home;

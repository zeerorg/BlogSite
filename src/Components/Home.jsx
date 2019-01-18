import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import PostList from "./PostList";

const Home = function(props) {
  useEffect(() => {
    document.title = "Rishabh's Blog";
  }, []);

  return (
    <React.Fragment>
      <div className="row">
        <div className="col-md-2" />
        <div className="col-md-8">
          <div className="my-5">
            <h1>
              <Link to="/" className="no-link-style">
                Rishabh's Blog
              </Link>
            </h1>
          </div>
          <p className="my-5">
            I'm Rishabh, I blog about software development and some casual
            stuff.
            <br />
            <a href="https://twitter.com/thisIsRGupta">@thisIsRGupta</a> /{" "}
            <a href="mailto:r.g.gupta@outlook.com">r.g.gupta@outlook.com</a>
          </p>
          <PostList />
          <a href="/rss.xml">RSS Feed</a>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;

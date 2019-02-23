import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import Page from "./Page";
import "./flexbox.css";

const Home = function(props) {
  const { num } = props;

  useEffect(() => {
    document.title = "Rishabh's Blog";
  }, []);

  return (
    <React.Fragment>
      <div className="flex-container">
        <div className="flex-item" />
        <div className="flex-item" />
        <div className="flex-main">
          <div className="margin-up-max margin-down-max">
            <h1>
              <Link to="/" className="no-link-style">
                Rishabh's Blog
              </Link>
            </h1>
          </div>
          <div className="margin-up-max margin-down-max">
            <p>
              I'm Rishabh, I blog about software development and some casual
              stuff.
              <br />
              <a href="https://twitter.com/zeerorg">
                @zeerorg
              </a> /{" "}
              <a href="mailto:r.g.gupta@outlook.com">r.g.gupta@outlook.com</a> /{" "}
              <a href="/rss.xml">RSS Feed</a>
            </p>
          </div>
          <Page num={num} />
        </div>
        <div className="flex-item" />
      </div>
    </React.Fragment>
  );
};

export default Home;

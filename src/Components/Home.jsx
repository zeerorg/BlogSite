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
              <a href="https://twitter.com/thisIsRGupta">
                @thisIsRGupta
              </a> /{" "}
              <a href="mailto:r.g.gupta@outlook.com">r.g.gupta@outlook.com</a>
            </p>
          </div>
          <Page num={num} />
          <hr />
          <a href="/rss.xml">RSS Feed</a> / 
          This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a>
        </div>
        <div className="flex-item" />
      </div>
    </React.Fragment>
  );
};

export default Home;

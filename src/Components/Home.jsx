import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import Page from "./Page";

const Home = function(props) {
  const { num } = props;

  useEffect(() => {
    document.title = "Rishabh's Blog";
  }, []);

  return (
    <React.Fragment>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap: "wrap"
        }}
      >
        <div style={{ order: 1, flex: "1" }} />
        <div style={{ order: 2, flex: "6", width: "100%" }}>
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
            <a href="mailto:r.g.gupta@outlook.com">r.g.gupta@outlook.com</a> /{" "}
            <a href="/rss.xml">RSS Feed</a>
          </p>
          <Page num={num} />
        </div>
        <div style={{ order: 3, flex: "1" }} />
      </div>
    </React.Fragment>
  );
};

export default Home;

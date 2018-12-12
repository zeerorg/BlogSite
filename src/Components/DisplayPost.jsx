import React, { useEffect } from "react";
import hljs from "highlight.js/lib/highlight";
import javascript from "highlight.js/lib/languages/javascript";

import "highlight.js/styles/atom-one-dark.css";
import "./Post.css";

const DisplayPost = function(props) {
  hljs.registerLanguage("javascript", javascript);

  useEffect(() => {
    hljs.initHighlighting();
  }, []);

  return (
    <div className="container DisplayPost">
      <div className="row">
        <div className="col-md-9">
          <div dangerouslySetInnerHTML={{ __html: props.postHtml }} />
          {!!props.dev_to ? (
            <p className="font-italic">
              For any discussion let's head over to{" "}
              <a href={props.dev_to}>Dev.to</a>
            </p>
          ) : (
            ""
          )}
          <p className="text-secondary">
            {new Date(props.timestamp * 1000).toDateString()}
          </p>
        </div>
        <div className="col-md-3" />
      </div>
    </div>
  );
};

export default DisplayPost;

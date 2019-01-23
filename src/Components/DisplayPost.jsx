import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import hljs from "highlight.js/lib/highlight";
import javascript from "highlight.js/lib/languages/javascript";
import cs from "highlight.js/lib/languages/cs";
import bash from "highlight.js/lib/languages/bash";
import go from "highlight.js/lib/languages/go";
import yaml from "highlight.js/lib/languages/yaml";

import Series from "./Series";

import "highlight.js/styles/monokai.css";
import "./Post.css";

const DisplayPost = function(props) {
  hljs.registerLanguage("javascript", javascript);
  hljs.registerLanguage("cs", cs);
  hljs.registerLanguage("bash", bash);
  hljs.registerLanguage("go", go);
  hljs.registerLanguage("yaml", yaml);
  let postContainer = useRef(null);

  // set title and meta
  document.title = props.title;
  var meta = document.createElement("meta");
  meta.name = "description";
  meta.content = props.tldr;
  document.getElementsByTagName("head")[0].appendChild(meta);

  useEffect(
    () => {
      hljs.initHighlighting.called = false;
      hljs.initHighlighting();

      // Add target: _blank to all link
      let links = postContainer.current.getElementsByTagName("a");
      for (let i = 0; i < links.length; i++) {
        links.item(i).setAttribute("target", "_blank");
        links.item(i).setAttribute("rel", "noopener");
      }
    },
    [props.postHtml]
  );

  return (
    <div className="container mx-0 px-0 DisplayPost" ref={postContainer}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap: "wrap"
        }}
      >
        <div style={{ order: 1 }} />
        <div style={{ order: 2, flexBasis: "70%", width: "100%" }}>
          <Link to="/" className="no-link-style">
            <h2 className="my-4">Rishabh's Blog</h2>
          </Link>
          <div dangerouslySetInnerHTML={{ __html: props.postHtml }} />
          <hr />
          {!!props.dev_to && (
            <p className="font-italic">
              For any discussion let's head over to{" "}
              <a href={props.dev_to}>Dev.to</a>
            </p>
          )}
          <p className="text-secondary">
            {new Date(props.timestamp * 1000).toDateString()}
          </p>
          <hr />
        </div>
        <div style={{ order: 3 }}>
          {props.series && (
            <Series {...props.series} currentPost={props.slug} />
          )}
        </div>
      </div>
    </div>
  );
};

export default DisplayPost;

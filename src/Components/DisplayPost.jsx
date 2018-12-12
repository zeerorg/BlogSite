import React from "react";

import "./Post.css";

const DisplayPost = function(props) {
  return (
    <div className="container DisplayPost">
      <div className="row">
        <div className="col-md-9">
          <div dangerouslySetInnerHTML={{ __html: props.postHtml }} />
        </div>
        <div className="col-md-3" />
      </div>
    </div>
  );
};

export default DisplayPost;
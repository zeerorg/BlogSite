import React, { useState, useEffect } from "react";
import ReactLoading from "react-loading";

import DelayedRender from "./DelayedRender";

const GetContent = function(props) {
  let [data, setData] = useState(null);
  let { url } = props;
  let caching = process.env.NODE_ENV === "development";

  let Waiting = !!props.Waiting
    ? props.Waiting
    : () => (
        <DelayedRender timeout={5000}>
          <div className="d-flex justify-content-center m-5">
            <ReactLoading
              type="spin"
              color="#000"
              height="32px"
              width="32px"
              className="m-5"
            />
          </div>
        </DelayedRender>
      );

  useEffect(() => {
    let tempStore = sessionStorage.getItem(url);
    if (tempStore === null || caching) {
      fetch(url)
        .then(res => res.text())
        .then(textData => {
          sessionStorage.setItem(url, textData);
          setData(textData);
        });
    } else {
      setData(tempStore);
    }
  }, []);

  if (data === null) {
    return <Waiting />;
  }

  return props.children(data);
};

export default GetContent;

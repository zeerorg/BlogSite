import React, { useState, useEffect } from "react";

import DelayedRender from "./DelayedRender";
import LoadingComponent from "./LoadingComponent";

const GetContent = function(props) {
  let [data, setData] = useState(null);
  let { url } = props;
  let caching = process.env.NODE_ENV === "development";

  let Waiting = !!props.Waiting
    ? props.Waiting
    : () => (
        <DelayedRender timeout={5000}>
          <LoadingComponent />
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

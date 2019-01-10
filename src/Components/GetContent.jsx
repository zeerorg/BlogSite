import React, { useState, useEffect } from "react";

import DelayedRender from "./DelayedRender";
import LoadingComponent from "./LoadingComponent";

// Accepts a list of or a single url
const GetContent = function(props) {
  let [data, setData] = useState([null]);
  let { url } = props;

  if (!Array.isArray(url)) url = [url];

  let Waiting = !!props.Waiting
    ? props.Waiting
    : () => (
        <DelayedRender timeout={5000}>
          <LoadingComponent />
        </DelayedRender>
      );

  useEffect(() => {
    MultipleReq(url, setData);
  }, []);

  if (data.includes(null)) {
    return <Waiting />;
  }

  return props.children(...data);
};

const MultipleReq = function(urls, updateCb) {
  updateCb(urls.map(url => sessionStorage.getItem(url)));

  Promise.all(
    urls.map(async url => {
      const res = await fetch(url);
      const textData = await res.text();
      sessionStorage.setItem(url, textData);
      return textData;
    })
  ).then(updateCb);
};

export default GetContent;

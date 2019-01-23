import React, { useState, useEffect } from "react";

import DelayedRender from "./DelayedRender";
import LoadingComponent from "./LoadingComponent";

// Accepts a list of or a single url
const GetContent = function(props) {
  let data = useGetContent(props.url);

  let Waiting = !!props.Waiting ? props.Waiting : DefaultWaiting;

  if (data.includes(null)) {
    return <Waiting />;
  }

  return props.children(...data);
};

const DefaultWaiting = function() {
  return (
    <DelayedRender timeout={5000}>
      <LoadingComponent />
    </DelayedRender>
  );
};

// Accepts an array of urls and returns array of data corresponding to that
const useGetContent = function(url = []) {
  let [data, setData] = useState([null]);
  if (!Array.isArray(url)) url = [url];

  useEffect(() => {
    MultipleReq(url, setData);
  }, []);

  return data;
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
export { useGetContent, DefaultWaiting };

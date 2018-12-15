import React, { useState, useEffect } from "react";

const DelayedRender = function(props) {
  let [start, setStart] = useState(false);
  let timeout = !!props.timeout ? props.timeout : 2000;

  useEffect(() => {
    const timeoutVar = setTimeout(() => {
      setStart(true);
    }, timeout);

    return () => {
      clearTimeout(timeoutVar);
    };
  }, []);

  if (!start) {
    return <React.Fragment />
  }

  return props.children;
};

export default DelayedRender;

import React, { useState, useEffect } from "react";

const DelayedRender = function(props) {
  let [start, setStart] = useState(false);

  useEffect(() => {
    const timeoutVar = setTimeout(() => {
      setStart(true);
    }, props.timeout);

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

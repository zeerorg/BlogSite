import React from "react";
import ReactLoading from "react-loading";

const LoadingComponent = function() {
  return (
    <div className="d-flex justify-content-center m-5">
      <ReactLoading
        type="spin"
        color="#000"
        height="32px"
        width="32px"
        className="m-5"
      />
    </div>
  );
};

export default LoadingComponent;

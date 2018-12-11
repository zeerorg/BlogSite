import React from 'react';

const Switch = function(props) {
  const { children, data, ErrorComponent } = props;
  if (!!children[data]) {
    return <ErrorComponent />
  }
  return children[data]()
}

export default Switch;
import React from 'react';

const Post = function(props) {
  return (
    <p>{props.match.params.slug}</p>
  )
}

export default Post;
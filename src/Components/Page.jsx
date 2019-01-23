import React from "react";
import { Link } from "react-router-dom";

import PostList from "./PostList";
import GetContent from "./GetContent";
import { api as url } from "../urls";

const PageNav = function(props) {
  const { num, maxPage } = props;
  return (
    <div>
      {num <= 1 ? <span /> : <Link to={`/page/${num - 1}`}>Newer Posts</Link>}
      {num >= maxPage ? (
        <span />
      ) : (
        <Link to={`/page/${num + 1}`}>Previous Posts</Link>
      )}
    </div>
  );
};

const Page = function(props) {
  const { num } = props;
  const limit = 5;

  return (
    <div>
      <GetContent url={url}>
        {allData => <PostList posts={JSON.parse(allData)} />}
      </GetContent>
      <PageNav num={num} maxPage={2} />
    </div>
  );
};

export default Page;

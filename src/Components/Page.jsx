import React from "react";
import { Link } from "react-router-dom";

import PostList from "./PostList";
import { useGetContent, DefaultWaiting } from "./GetContent";
import { api as url } from "../urls";

const PageNav = function(props) {
  const { num, maxPage } = props;
  return (
    <div className="w-100 text-center">
      {num <= 1 ? <span /> : <Link to={`/page/${num - 1}`} className="float-left">Newer Posts</Link>}
      <strong>{num}</strong>
      {num >= maxPage ? (
        <span />
      ) : (
        <Link to={`/page/${num + 1}`} className="float-right">
          Previous Posts
        </Link>
      )}
    </div>
  );
};

const Page = function(props) {
  const { num } = props;
  const limit = 5;

  let [rawPosts] = useGetContent(url);

  if (!rawPosts) {
    return <DefaultWaiting />;
  }

  let posts = JSON.parse(rawPosts)
    .reverse()
    .filter(post => post.published)
    .slice(limit * (num - 1), limit * num);

  return (
    <div>
      <PostList posts={posts} />
      <PageNav num={num} maxPage={2} />
    </div>
  );
};

export default Page;

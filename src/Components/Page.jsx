import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";

import PostList from "./PostList";
import { useGetContent, DefaultWaiting } from "./GetContent";
import { api as url } from "../urls";

const PageNav = function(props) {
  const { num, maxPage } = props;
  return (
    <div className="flex-container">
      <div className="flex-item" style={{ marginLeft: "-15px" }}>
        {num <= 1 ? (
          <span />
        ) : (
          <Link to={`/page/${num - 1}`}>
            <IoIosArrowRoundBack /> Newer Posts
          </Link>
        )}
      </div>
      <div className="flex-item text-center">
        <strong>{num}</strong>
      </div>
      <div className="flex-item text-right">
        {num >= maxPage ? (
          <span />
        ) : (
          <Link to={`/page/${num + 1}`}>
            Previous Posts <IoIosArrowRoundForward />
          </Link>
        )}
      </div>
    </div>
  );
};

const Page = function(props) {
  const { num } = props;
  const limit = 7;

  let [rawPosts] = useGetContent(url);

  if (!rawPosts) {
    return <DefaultWaiting />;
  }

  let posts = JSON.parse(rawPosts)
    .reverse()
    .filter(post => post.published);
  let count = posts.length;
  posts = posts.slice(limit * (num - 1), limit * num);

  return (
    <div>
      <PostList posts={posts} />
      <PageNav num={num} maxPage={Math.ceil(count / limit)} />
    </div>
  );
};

export default Page;

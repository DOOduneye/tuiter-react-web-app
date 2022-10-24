import React from "react";
import postsArray from './posts.json';
import PostSummaryItem from "./PostSummaryListItem";

const PostSummaryList = () => {
 return(
  <section className="pt-2 ps-0 pe-0">
    { postsArray.map(post => <PostSummaryItem key={post._id} post={post}/> ) }
  </section>
 );
};
export default PostSummaryList;
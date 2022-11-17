import React from "react";
import { useSelector } from "react-redux";

import TuitItem from "./TuitItem";
import WhatsHappening from "./WhatsHappening";

const TuitList = () => {
  const postsArray = useSelector(state => state.tuits);

  return (
    <section className="pt-2 ps-0 pe-0">
      <WhatsHappening />
      { postsArray.map(post => <TuitItem key={post._id} post={post}/> ) }
    </section>
 );
};
export default TuitList;
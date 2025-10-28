import React from "react";
import { Link, useLocation } from "react-router-dom";
import topics from "../data/topics";

const TopicNavigation = () => {
  const location = useLocation();
  const currentIndex = topics.findIndex((t) => t.path === location.pathname);
  const prev = topics[currentIndex - 1];
  const next = topics[currentIndex + 1];

  return (
    <div className="flex justify-between mt-8">
      {prev ? <Link to={prev.path}>⬅ {prev.title}</Link> : <span />}
      {next ? <Link to={next.path}>{next.title} ➡</Link> : <span />}
    </div>
  );
};

export default TopicNavigation;

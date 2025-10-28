import React, { useState } from "react";
import Fuse from "fuse.js";
import topics from "../data/topics";

const SearchBar = ({ onResult }) => {
  const [query, setQuery] = useState("");
  const fuse = new Fuse(topics, {
    keys: ["title", "content"],
    threshold: 0.3,
  });

  const handleSearch = (e) => {
    const text = e.target.value;
    setQuery(text);
    const results = fuse.search(text);
    onResult(results.map((r) => r.item));
  };

  return (
    <input
      type="text"
      placeholder="🔍 Search topics..."
      value={query}
      onChange={handleSearch}
      className="w-full p-2 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none"
    />
  );
};

export default SearchBar;

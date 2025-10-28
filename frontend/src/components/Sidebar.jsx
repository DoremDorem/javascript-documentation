import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import topics from "../data/topics";

const Sidebar = () => {
  const [results, setResults] = useState([]);

  const displayTopics = results.length > 0 ? results : topics;

  return (
    <aside className="sidebar">
      <h2>📘 JS Docs</h2>
      <div className="p-3">
        <SearchBar onResult={setResults} />
      </div>
      <ul>
        {displayTopics.map((topic) => (
          <li key={topic.id}>
            <Link to={topic.path} style={{ color: "white", textDecoration: "none" }}>
              {topic.title}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;

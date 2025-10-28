import React from "react";

const DarkModeToggle = () => {
  const toggleTheme = () => {
    const theme = document.documentElement.getAttribute("data-theme");
    document.documentElement.setAttribute(
      "data-theme",
      theme === "dark" ? "light" : "dark"
    );
    localStorage.setItem("theme", theme === "dark" ? "light" : "dark");
  };

  React.useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  return (
    <button
      onClick={toggleTheme}
      className="bg-gray-700 text-white px-3 py-1 rounded-md hover:bg-gray-600 transition"
    >
      🌓
    </button>
  );
};

export default DarkModeToggle;

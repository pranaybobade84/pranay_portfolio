import React, { useEffect, useState } from "react";

const ThemeToggler = () => {
  const [dark, setDark] = useState(
    () => localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    const html = document.documentElement;
    if (dark) {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="ml-4 px-3 py-1 rounded bg-gray-200 dark:bg-gray-700 text-sm"
    >
      {dark ? "🌞 Light" : "🌙 Dark"}
    </button>
  );
};

export default ThemeToggler;

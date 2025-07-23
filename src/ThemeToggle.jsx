import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <button
      onClick={toggleTheme}
      style={{
        padding: "0.5rem 1rem",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
        background: theme === "light" ? "#000000" : "#ffffff",
        color: theme === "light" ? "#ffffff" : "#000000",
        transition: "all 0.3s",
      }}
    >
      {theme === "light" ? "🌙" : "☀️"}
    </button>
  );
}

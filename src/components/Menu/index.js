import React from "react";
import { useTheme } from "../../context";

const themes = ["dark", "light"];

const Menu = () => {
  const { theme, toggleTheme } = useTheme();

  const handleThemeChange = (e) => {
    const selectedTheme = e.target.value;
    if (selectedTheme !== theme) {
      toggleTheme();
    }
  };

  return (
    <nav>
      <h2>Menu...</h2>
      <label>
        Select Theme:
        <select value={theme} onChange={handleThemeChange}>
          {themes.map((theme) => (
            <option key={theme} value={theme}>
              {theme}
            </option>
          ))}
        </select>
      </label>
    </nav>
  );
};

export default Menu;

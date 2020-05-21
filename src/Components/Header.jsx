import React from "react";
import Toggle from "../Theme/Toggle";

const Header = ({ theme, toggleTheme }) => {
  return (
    <header>
      <p>Header Placeholder</p>
      <Toggle theme={theme} toggleTheme={toggleTheme} />
    </header>
  );
};

export default Header;

import React from "react";
import Toggle from "../Theme/Toggle";
import "./Header.css";

const Header = ({ theme, toggleTheme }) => {
  return (
    <header>
      <div className="header-text">
        <h1>Scott Griffith</h1>
        <h4> UI Developer | Full-Stack Engineer | Visual Designer</h4>
      </div>
      <nav>
        <div className="navlinks">
          <a href="#about">
            <span className="magenta title">About</span>
          </a>
          <a href="#showcase">
            <span className="orange title">Showcase</span>
          </a>
          <a href="#presence">
            <span className="cyan title">Presence</span>
          </a>
          <Toggle theme={theme} toggleTheme={toggleTheme} />
        </div>
      </nav>
    </header>
  );
};

export default Header;

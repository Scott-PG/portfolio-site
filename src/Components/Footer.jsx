import React from "react";
import "./Footer.css";

const Footer = () => (
  <footer>
    <div className="footer-links">
      <a href="https://reactjs.org/">Built in React</a>
      <a href="https://github.com/Scott-PG/portfolio-site">
        {"\u00a9"} 2023 Scott Griffith
      </a>
    </div>
  </footer>
);

export default Footer;

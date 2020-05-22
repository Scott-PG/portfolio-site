import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-links">
        <p>
          <a href="https://reactjs.org/">Built in React</a>
        </p>
        <p>
          <a href="https://github.com/Scott-PG/portfolio-site">
            {"\u00a9"} 2020 Scott Griffith
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

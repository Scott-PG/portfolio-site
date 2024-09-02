import Toggle from "./Toggle";
import "./Header.css";
import { Props } from "./types";

const Header = (props: Props) => (
  <header>
    <div className="header-text">
      <h1>Scott Griffith</h1>
      <h2>UI Developer | Full-Stack Engineer</h2>
    </div>
    <nav>
      <ul className="navlinks">
        <li>
          <a href="#about">
            <span className="magenta title">About</span>
          </a>
        </li>
        <li>
          <a href="#skills">
            <span className="cyan title">Skills</span>
          </a>
        </li>
        <li>
          <a href="#projects">
            <span className="orange title">Projects</span>
          </a>
        </li>
        <li>
          <a href="#contact">
            <span className="indigo title">Contact</span>
          </a>
        </li>
        <li>
          <Toggle {...props} />
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;

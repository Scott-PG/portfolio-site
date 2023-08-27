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
      <div className="navlinks">
        <a href="#about">
          <span className="magenta title">About</span>
        </a>
        <a href="#skills">
          <span className="cyan title">Skills</span>
        </a>
        <a href="#showcase">
          <span className="orange title">Showcase</span>
        </a>
        <a href="#presence">
          <span className="indigo title">Presence</span>
        </a>
        <Toggle {...props} />
      </div>
    </nav>
  </header>
);

export default Header;

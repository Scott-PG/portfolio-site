import "./Toggle.css";

import MoonIcon from "./MoonIcon";
import SunIcon from "./SunIcon";
//credit to https://www.flaticon.com
// Icons made by <a href="https://www.flaticon.com/authors/alfredo-hernandez" title="Alfredo Hernandez">Alfredo Hernandez</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>

const Toggle = ({ theme, toggleTheme }) => (
  <button
    className={`toggle ${theme}`}
    title="Dark Mode Toggle"
    onClick={toggleTheme}
  >
    <SunIcon />
    <MoonIcon />
  </button>
);

export default Toggle;

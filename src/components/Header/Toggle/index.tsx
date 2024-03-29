import "./Toggle.css";
import { Props } from "../types";

import MoonIcon from "./MoonIcon";
import SunIcon from "./SunIcon";
//credit to https://www.flaticon.com
// Icons made by <a href="https://www.flaticon.com/authors/alfredo-hernandez" title="Alfredo Hernandez">Alfredo Hernandez</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>

const Toggle = ({ theme, toggleTheme }: Props) => (
  <button
    className={`toggle ${theme}`}
    title={`Dark mode toggle, current mode is ${theme}`}
    onClick={toggleTheme}
  >
    <SunIcon />
    <MoonIcon />
  </button>
);

export default Toggle;

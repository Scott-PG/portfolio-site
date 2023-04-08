import React from "react";

import './Toggle.css'

//credit to https://www.flaticon.com
import { ReactComponent as MoonIcon } from "../Assets/icons/moon.svg";
import { ReactComponent as SunIcon } from "../Assets/icons/sun.svg";

const Toggle = ({ theme, toggleTheme }) => (
  <button className={`toggle ${theme}`}
    title="Dark Mode Toggle"
    onClick={toggleTheme}
  >
    <SunIcon aria-hidden={true} alt="" className="sun" />
    <MoonIcon aria-hidden={true} alt="" className="moon" />
  </button>
);


export default Toggle;

// Icons made by <a href="https://www.flaticon.com/authors/alfredo-hernandez" title="Alfredo Hernandez">Alfredo Hernandez</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>

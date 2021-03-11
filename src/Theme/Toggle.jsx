import React from "react";
import { func, string } from "prop-types";
import ToggleContainer from "./Toggle.styled.jsx";

//credit to https://www.flaticon.com
import { ReactComponent as MoonIcon } from "../Assets/icons/moon.svg";
import { ReactComponent as SunIcon } from "../Assets/icons/sun.svg";

const Toggle = ({ theme, toggleTheme }) => {
  const isLight = theme === "light";
  return (
    <ToggleContainer
      aria-hidden="true"
      alt=""
      lightTheme={isLight}
      onClick={toggleTheme}
    >
      <SunIcon aria-hidden="true" alt="" tabIndex="-1" />
      <MoonIcon aria-hidden="true" alt="" tabIndex="-1" />
    </ToggleContainer>
  );
};

Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
};

export default Toggle;

// Icons made by <a href="https://www.flaticon.com/authors/alfredo-hernandez" title="Alfredo Hernandez">Alfredo Hernandez</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>

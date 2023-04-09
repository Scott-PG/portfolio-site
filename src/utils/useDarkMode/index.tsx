import { useEffect, useState } from "react";

import { Theme } from "./types";

export const useDarkMode = () => {
  const [theme, setTheme] = useState<Theme>("dark");

  const setMode = (mode: Theme) => {
    window.localStorage.setItem("theme", mode);
    setTheme(mode);
  };

  const toggleTheme = () => {
    if (theme === "light") {
      setMode("dark");
    } else {
      setMode("light");
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches &&
    !localTheme
      ? setMode("dark")
      : localTheme
      ? setTheme(localTheme as Theme)
      : setMode("light");
  }, []);

  return { theme, toggleTheme };
};

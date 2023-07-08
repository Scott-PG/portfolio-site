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
    const storedTheme = window.localStorage.getItem("theme");

    if (storedTheme === "light" || storedTheme === "dark") {
      setTheme(storedTheme);
      return;
    }

    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setMode("dark");
      return;
    }

    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: light)").matches
    ) {
      setMode("light");
    }
  }, []);

  return { theme, toggleTheme };
};

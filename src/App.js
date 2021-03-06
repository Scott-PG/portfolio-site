import React from "react";
import { ThemeProvider } from "styled-components";
import { useDarkMode } from "./Theme/useDarkMode";
import { lightTheme, darkTheme } from "./Theme/theme";
import { GlobalStyles } from "./Theme/global";
import "./App.css";

import Header from "./Components/Header";
import About from "./Components/About";
import Showcase from "./Components/Showcase";
import Presence from "./Components/Presence";
import Footer from "./Components/Footer";

const App = () => {
  const [theme, toggleTheme, componentMounted] = useDarkMode();

  const themeMode = theme === "dark" ? darkTheme : lightTheme;

  if (!componentMounted) {
    return <div />;
  }
  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <Header theme={theme} toggleTheme={toggleTheme} />
        <main>
          <About />
          <Showcase />
          <Presence />
        </main>
        <Footer />
      </>
    </ThemeProvider>
  );
};

export default App;

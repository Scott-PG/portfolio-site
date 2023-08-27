import { useDarkMode } from "./utils/useDarkMode";
import "./App.css";

import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Presence from "./components/Presence";
import Showcase from "./components/Showcase";

const App = () => {
  const { theme, toggleTheme } = useDarkMode();

  return (
    <div className={`app ${theme}`}>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main>
        <About />
        <Skills />
        <Showcase />
        <Presence />
      </main>
      <Footer />
    </div>
  );
};

export default App;

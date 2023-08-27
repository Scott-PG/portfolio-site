import { useDarkMode } from "./utils/useDarkMode";
import "./App.css";

import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

const App = () => {
  const { theme, toggleTheme } = useDarkMode();

  return (
    <div className={`app ${theme}`}>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main>
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;

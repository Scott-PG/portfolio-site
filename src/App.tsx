import { useDarkMode } from "./Toggle/useDarkMode";
import "./App.css";

import Header from "./components/Header";
import Showcase from "./components/Showcase";
import Presence from "./components/Presence";
import Footer from "./components/Footer";
import About from "./components/About";

const App = () => {
  const [theme, toggleTheme, componentMounted] = useDarkMode();

  if (!componentMounted) {
    return <div />;
  }
  return (
    <div className={`app ${theme}`}>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main>
        <About />
        <Showcase />
        <Presence />
      </main>
      <Footer />
    </div>
  );
};

export default App;

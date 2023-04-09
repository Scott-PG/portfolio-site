import { useDarkMode } from "./Theme/useDarkMode";
import "./App.css";

import Header from "./Components/Header";
import About from "./Components/About";
import Showcase from "./Components/Showcase";
import Presence from "./Components/Presence";
import Footer from "./Components/Footer";

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

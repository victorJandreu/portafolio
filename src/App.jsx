import "./styles/app.scss";
import TechnologiesGroup from "./components/TechnologiesGroup";
import LanguageGroup from "./components/LanguageGroup";
import ProyectGroup from "./components/ProyectGroup";
import Media from "./components/Media";
import Contact from "./components/Contact";
import Logros from "./components/Logros";
import About from "./components/About";
import Nav from "./components/Nav";



function App() {
  return (
    <>
      <header>
        <Nav />
        <About />
      </header>

      <main>
        <TechnologiesGroup />
        <LanguageGroup />
        <ProyectGroup />
        <Logros />
        <Contact />
      </main>

      <footer>
        <Media />
      </footer>
    </>
  );
}

export default App;

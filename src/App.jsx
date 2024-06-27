import "./styles/app.scss";
import TechnologiesGroup from "./components/TechnologiesGroup";
import LanguageGroup from "./components/LanguageGroup";
import ProyectGroup from "./components/ProyectGroup";
import Media from "./components/Media";
import Contact from "./components/Contact";
import Logros from "./components/Logros";
import About from "./components/About";
import Nav from "./components/Nav";

import { useTranslation } from "react-i18next";




function App() {

  const [t, i18n] = useTranslation("global")

  return (
    <>
    <h1>{t("header.hello-word")}</h1>
    <button onClick={() => i18n.changeLanguage("es")}>ES</button>
    <button onClick={() => i18n.changeLanguage("en")}>EN</button>
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

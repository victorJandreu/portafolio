import Technologies from "./Technologies";
//iconos
import css from "../assets/css.svg";
import html from "../assets/html.svg";
import js from "../assets/js.svg";
import sass from "../assets/sass.svg";
import git from "../assets/git.svg";
import github from "../assets/github.svg";
import react from "../assets/react.svg";
import router from "../assets/router.svg";
import redux from "../assets/redux.svg";
import { useTranslation } from "react-i18next";

export default function TechnologiesGroup() {
  const [t, i18n] = useTranslation("global")

  return (
    <section className="center" id="Tecnologia"> 
    <h2>{t("technologies.title")}</h2>
    <div className="tecnologias-group ">
        <Technologies icon={html}>Html</Technologies>
        <Technologies icon={css}>Css</Technologies>
        <Technologies icon={js}>Javascript</Technologies>
        <Technologies icon={sass}>Sass</Technologies>
      <div className="green-space"><div></div></div>
        <Technologies icon={react}>React</Technologies>
        <Technologies icon={redux}>Redux toolkit</Technologies>
        <Technologies icon={router}>React router</Technologies>
      <div className="green-space"><div></div></div>
        <Technologies icon={git}>Git</Technologies>
        <Technologies icon={github}>Github</Technologies>
    </div>
    </section>
  );
}

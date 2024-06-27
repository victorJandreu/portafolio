import Proyect from "./Proyect";
import music from "../assets/music2.jpg";
import questionGame from "../assets/questionGame.jpg";
import fireBall from "../assets/fireBall2.jpg";
import fireBallMovil from "../assets/fireball-mobil.jpg"
import musicMovil from "../assets/music-mobil.jpg"
import questionMovil from "../assets/questionMobil.jpg";
import { useTranslation } from "react-i18next";
//icons
import sass from "../assets/sass.svg";
import react from "../assets/react.svg";
import router from "../assets/router.svg";
import redux from "../assets/redux.svg";

export default function ProyectGroup() {
  const [t, i18n] = useTranslation("global")

  return (
    <section className="center" id="proyecto">
      <h2>{t("proyect.title")}</h2>
      <div className="proyect-group ">
        <Proyect
          image={fireBall}
          mobilImage={fireBallMovil}
          url="https://victorjandreu.github.io/game_platform/"
          codigo="https://github.com/victorJandreu/game_platform"
          title={t("proyect.first-proyect.title")}
          tecnoArray={[
            { icon: react, name: "React" },
            { icon: redux, name: "Redux" },
            { icon: router, name: "React-router" },
            { icon: sass, name: "Sass" },
          ]}
        >
          {t("proyect.first-proyect.description")}
        </Proyect>
        <Proyect
         mobilImage={musicMovil}
          image={music}
          title={t("proyect.second-proyect.title")}
          url="https://victorjandreu.github.io/music-player/"
          codigo="https://github.com/victorJandreu/music-player"
          tecnoArray={[
            { icon: react, name: "React" },
            { icon: sass, name: "Sass" },
          ]}
        >
          {t("proyect.second-proyect.description")}
        </Proyect>
        <Proyect
        mobilImage={questionMovil}
          image={questionGame}
          url="https://victorjandreu.github.io/question-game/"
          title={t("proyect.third-proyect.title")}
          codigo="https://github.com/victorJandreu/question-game"
          tecnoArray={[
            { icon: react, name: "React" },
            { icon: router, name: "React-router" },
            { icon: sass, name: "Sass" },
          ]}
        >
          {t("proyect.third-proyect.description")} 
        </Proyect>
      </div>
    </section>
  );
}

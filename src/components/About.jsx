import profile from "../assets/prueba1.jpg";
import { motion } from "framer-motion";
import {
  titleAnimation,
  pageAnimation,
  photoAni,
  titleAnimation2,
} from "../../animation";
import { useTranslation } from "react-i18next";

export default function About() {
  const [t, i18n] = useTranslation("global")

  return (
    <motion.section
      className="center"
      id="about"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <div className="hiden">
        <motion.h1 variants={titleAnimation}>
          Víctor José Andreu Martínez
          <motion.span variants={titleAnimation2}>
            Frontend-developer
          </motion.span>
        </motion.h1>
      </div>

      <section>
        <h2>{t("about.title")}</h2>
        <div className="about-me">
          <p>
          {t("about.first-text")}
            <br />
            <br />
            {t("about.second-text")}
          </p>
          <div className="img-container">
            <motion.img
              variants={photoAni}
              className="hidden"
              src={profile}
              alt="Víctor José Andreu Martínez"
            />
          </div>
        </div>
      </section>
    </motion.section>
  );
}

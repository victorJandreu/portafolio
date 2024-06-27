import profile from "../assets/prueba1.jpg";
import { motion } from "framer-motion";
import {
  titleAnimation,
  pageAnimation,
  photoAni,
  titleAnimation2,
} from "../../animation";

export default function About() {
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
        <h2>Sobre mí</h2>
        <div className="about-me">
          <p>
            Mi objetivo es aportar mis habilidades y conocimientos para crear
            experiencias de usuario excepcionales. Me apasiona aprender nuevas
            tecnologías y perfeccionar las que ya conozco, invirtiendo tiempo en
            proyectos y cursos en línea para mejorar continuamente.
            <br />
            <br />
            Fuera del ámbito profesional, me gusta explorar nuevos lugares,
            salir a pasear y jugar al tenis. Estas actividades me mantienen
            inspirado y motivado, reflejándose positivamente en mi trabajo
            diario.
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

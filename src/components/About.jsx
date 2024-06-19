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
            Mi principal objetivo es aportar mis habilidades, valor y
            conocimiento a mis compañeros y clientes para la creación de
            experiencias de usuario excepcionales, a la vez que seguir
            aprendiendo nuevas tecnologías y mejorar las que ya conozco. <br />
            <br />Por todo esto, he dedicado y voy a seguir dedicando una gran
            cantidad de tiempo a aprender y mejorar mis habilidades a través de
            proyectos personales y cursos en línea.
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


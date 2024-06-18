import profile from "../assets/prueba1.jpg";

export default function About() {
  return (
    <section className="center" id="about">
      <h1>
        Víctor José Andreu Martínez <span>Frontend-developer</span>
      </h1>
      <section>
        <h2>Sobre mí</h2>
        <div className="about-me">
          <p>
            Mi principal objetivo es aportar mis habilidades, valor y
            conocimiento a mis compañeros y clientes para la creación de
            experiencias de usuario excepcionales. A la vez que seguir
            aprendiendo nuevas tecnologías y mejorar las que ya conozco. <br />{" "}
            <br /> Por todo esto, he dedicado y voy a seguir dedicando una gran
            cantidad de tiempo a aprender y mejorar mis habilidades a través de
            proyectos personales y cursos en línea.
          </p>
          <div className="img-container">
            <img src={profile} alt="Víctor José Andreu Martínez" />
          </div>
        </div>
      </section>
    </section>
  );
}

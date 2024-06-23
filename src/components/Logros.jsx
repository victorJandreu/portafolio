import cvPdf from "../pdf/curriculum.pdf";
import cvLogo from "../assets/Cv.svg";

export default function Logros() {
  return (
    <section className="center logros" id="logros">
      <h2>Logros</h2>
      <ul>
        <li>
          <span className="boll"></span>
          <strong>Curso "The Frontend Developer Career Path" en Scrimba</strong>
          : Completé más de
          <span className="highlight"> 70 horas</span> de formación en frontend,
          desarrollando más de <span className="highlight"> 15 proyectos </span>
          de manera independiente, lo que me permitió adquirir y fortalecer mis
          habilidades técnicas.
        </li>
        <li>
          <span className="boll"></span>
          <strong>Proyectos en Frontend Mentor</strong>: Realicé
          <span className="highlight"> 48 proyectos </span> reales de nivel
          junior y newbaby en Frontend Mentor, además de desarrollar
          <span className="highlight"> proyectos propios</span>, lo cual
          fortaleció mis capacidades en frontend y diseño.
        </li>
        <li>
          <span className="boll"></span>
          <strong> Experiencia como Profesor de Español</strong>: Trabajé
          durante un año en una academia como profesor de español, adquiriendo
          habilidades de
          <span className="highlight"> comunicación </span> y{" "}
          <span className="highlight"> trabajo en equipo</span> al coordinarme
          con otros profesores para compartir alumnos.
        </li>
        <li>
          <span className="boll"></span>
         <strong> Experiencia en Japón</strong>: Viví y trabajé como camarero en Japón durante un
          año, desarrollando una gran <span className="highlight">capacidad de adaptabilidad</span>, entendimiento
          intercultural y habilidades sólidas en la <span className="highlight">gestión del tiempo</span> y la
          priorización en entornos dinámicos.
        </li>
      </ul>
      <a href={cvPdf} className="cv" target="_blank">
        Más información en mi CV <img src={cvLogo} alt="CV" />
      </a>
    </section>
  );
}

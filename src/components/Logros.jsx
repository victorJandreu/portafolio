import cvPdf from "../pdf/curriculum.pdf";
import cvLogo from "../assets/Cv.svg";

export default function Logros(){

    return(
        <section className="center logros" id="logros">
          <h2>Logros</h2>
          <ul>
            <li>
              <span className="boll"></span>
              Aprendí mis habilidades como
              <span className="highlight"> frontend</span> al realizar el curso
              de Scrimba "The Frontend Developer Career Path" de más de
               <span className="highlight"> 70 horas</span> con más de
              <span className="highlight"> 15 proyectos</span> sin ayuda.
            </li>
            <li>
              <span className="boll"></span>
              Fortalecí mis habilidades <span className="highlight">frontend</span> y adquirí capacidades
              de <span className="highlight">diseño </span>
               al completar los <span className="highlight">50 proyectos reales</span> de nivel
              newbaby y junio en frontend Mentor y al realizar mis <span className="highlight"> propios
              proyectos</span>.
            </li>
            <li>
              <span className="boll"></span>
              Tras trabajar durante un año en una academía como profesor de
              español adquirí una gran capacidad de <span className="highlight">comunicación </span>  y de
             <span className="highlight"> trabajo en equipo</span>,  ya que compartiamos alumnos entre profesores.
            </li>
            <li>
              <span className="boll"></span>
              Logré grandes capacidades de <span className="highlight">adaptabilidad </span> y <span className="highlight">entendimiento  </span>hacía
              otras personas  al vivir y trabajar como camarero en Japón durante
              1 año.
            </li>
          </ul>
          <a href={cvPdf} className="cv" target="_blank">Más información en mi CV <img src={cvLogo} alt="CV" /></a>
        </section>
    )
}
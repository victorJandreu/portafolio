import linkedin from "../assets/Linkedin.svg";
import github from "../assets/githubDark.svg";
import cvPdf from "../pdf/curriculum.pdf";
import cvLogo from "../assets/Cv.svg";

export default function Media() {
    return ( 
  <nav className="media" id="media">
     <a href={cvPdf} className="cv" target="_blank">Más información en mi CV <img src={cvLogo} alt="CV" /></a>
    <ul>
      <li>
        <a href="https://www.linkedin.com/in/victorandreufronteddeveloper/" target="_blank"><img src={linkedin} alt="Linkedin" /></a>
      </li>
      <li><a href="https://github.com/victorJandreu" target="_blank"><img src={github} alt="Github" /></a></li>
    </ul>
   
  </nav>
  );
}

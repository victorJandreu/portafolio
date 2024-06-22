import linkedin from "../assets/Linkedin.svg";
import github from "../assets/githubDark.svg";


export default function Media() {
    return ( 
  <nav className="media" id="media">
    <ul>
      <li>
        <a href="https://www.linkedin.com/in/victorandreufrontend/" target="_blank"><img src={linkedin} alt="Linkedin" /></a>
      </li>
      <li><a href="https://github.com/victorJandreu" target="_blank"><img src={github} alt="Github" /></a></li>
    </ul>
   
  </nav>
  );
}

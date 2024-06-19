import { useEffect, useState } from "react";
import ReactHamburger from "../assets/hamburger.svg?react";
import Close from "../assets/close.svg?react";
import moon from "../assets/moon.svg";
import sun from "../assets/sun.svg"

const root = document.querySelector(":root");
const styls = {
  transform: "translateX(calc(68px - 100%))"
}
const opacity = {
  opacity: ".3"
}

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isWhiteMode, setIsWhiteMode] = useState(false)

  const toggleMenu = () => {
    if (!menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = (e, sectionId) => {
    document.body.style.overflow = "auto";
    handleSmoot(e, sectionId);
    setMenuOpen(false);
  };

  const handleSmoot = (e, sectionId) => {
    e.preventDefault(); // Prevenir la acción por defecto del enlace
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  };

  

useEffect(() => {
  if(isWhiteMode) {
    
  
    root.style.setProperty("--body-black", "#fdfff5");
    root.style.setProperty("--nav-black", "#d7d7d7");
    root.style.setProperty("--milk-white", "#1b1b1b");
    root.style.setProperty("--milk-opacity", "hsla(0, 0%, 11%, 0.925)");
    root.style.setProperty("--background-proyect", "transparent");
    root.style.setProperty("--input-border", "#1b1b1b");
  }
  else{
    root.style.setProperty("--body-black", "#1b1b1b");
    root.style.setProperty("--nav-black", "#282828");
    root.style.setProperty("--milk-white", "#fdfff5");
    root.style.setProperty("--milk-opacity", "#fdfff5ec");
    root.style.setProperty("--background-proyect", "#fdfff5");
    root.style.setProperty("--input-border", "transparent");

  }
}, [isWhiteMode])


  return (
    <div className="nav-container">
      <nav className="center">
        <a className="Logo" href="#about">
          V<span>j</span>A
        </a>
        <button className="mode-dark-light" onClick={() => setIsWhiteMode(prev => !prev)}><div>
          <img src={moon} alt="modo oscuro" className="dark" style={isWhiteMode ? opacity : null} />
          <img src={sun} alt="modo claro" className="light"   style={isWhiteMode ? null : opacity} />
          <div className="circle" style={isWhiteMode ? styls : null}></div>
        </div>
        </button>
        <button className="close-btn" onClick={toggleMenu}>
          {menuOpen ? <Close /> : <ReactHamburger />}
        </button>
        <ul className="desk-ul">
          <li>
            <a href="#Tecnologia" onClick={(e) => handleSmoot(e, "Tecnologia")}>
              Tecnologías
            </a>
          </li>
          <li>
            <a href="#idioma" onClick={(e) => handleSmoot(e, "idioma")}>
              Idiomas
            </a>
          </li>
          <li>
            <a href="#proyecto" onClick={(e) => handleSmoot(e, "proyecto")}>
              Proyectos
            </a>
          </li>
          <li>
            <a href="#logros" onClick={(e) => handleSmoot(e, "logros")}>
              Logros
            </a>
          </li>
          <li>
            <a href="#contact" onClick={(e) => handleSmoot(e, "contact")}>
              Contacto
            </a>
          </li>
          <li>
            <a href="#media" onClick={(e) => handleSmoot(e, "media")}>
              CV y redes
            </a>
          </li>
        </ul>
        {menuOpen && (
          <ul className="mobil-ul">
            <a
              className="Logo"
              onClick={(e) => handleLinkClick(e, "about")}
              href="#about"
            >
              V<span>j</span>A
            </a>
            <li>
              <a
                href="#Tecnologia"
                onClick={(e) => handleLinkClick(e, "Tecnologia")}
              >
                Tecnologías
              </a>
            </li>
            <li>
              <a href="#idioma" onClick={(e) => handleLinkClick(e, "idioma")}>
                Idiomas
              </a>
            </li>
            <li>
              <a
                href="#proyecto"
                onClick={(e) => handleLinkClick(e, "proyecto")}
              >
                Proyectos
              </a>
            </li>
            <li>
              <a href="#logros" onClick={(e) => handleLinkClick(e, "logros")}>
                Logros{" "}
              </a>
            </li>
            <li>
              <a href="#contact" onClick={(e) => handleLinkClick(e, "contact")}>
                Contacto
              </a>
            </li>
            <li>
              <a href="#media" onClick={(e) => handleLinkClick(e, "media")}>
                Redes
              </a>
            </li>
          </ul>
        )}
      </nav>
    </div>
  );
}

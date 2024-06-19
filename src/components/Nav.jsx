import { useState } from "react"
import ReactHamburger from "../assets/hamburger.svg?react";
import Close from "../assets/close.svg?react";


export default function Nav (){

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
      if(!menuOpen){
        document.body.style.overflow = "hidden";
      } else{
        document.body.style.overflow = "auto";
      }
      setMenuOpen(!menuOpen);
    };
  
    const handleLinkClick = (e, sectionId) => {
    document.body.style.overflow = "auto";
      handleSmoot(e, sectionId)
      setMenuOpen(false);
    };

    const handleSmoot = (e, sectionId) => {
        e.preventDefault();  // Prevenir la acción por defecto del enlace
        document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    }


    return(
        <div className="nav-container">
            <nav className="center">
              <a className="Logo" href="#about">V<span>j</span>A</a>
              <button className="close-btn" onClick={toggleMenu}>{menuOpen ? <Close /> :  <ReactHamburger/>}</button>
              <ul className="desk-ul">
                  <li ><a href="#Tecnologia" onClick={(e) => handleSmoot(e, 'Tecnologia')} >Tecnologías</a></li>
                  <li><a href="#idioma" onClick={(e) => handleSmoot(e, 'idioma')}>Idiomas</a></li>
                  <li><a href="#proyecto" onClick={(e) => handleSmoot(e, 'proyecto')}>Proyectos</a></li>
                  <li><a href="#logros" onClick={(e) => handleSmoot(e, 'logros')}>Logros </a></li>
                  <li><a href="#contact"  onClick={(e) => handleSmoot(e, 'contact')}>Contacto</a></li>
                  <li><a href="#media" onClick={(e) => handleSmoot(e, 'media')}>CV y redes</a></li>
              </ul>
              {menuOpen && 
              <ul className="mobil-ul" >
                <a className="Logo"  onClick={(e) => handleLinkClick(e, 'about')} href="#about">V<span>j</span>A</a>
                  <li><a href="#Tecnologia"  onClick={(e) => handleLinkClick(e, 'Tecnologia')}>Tecnologías</a></li>
                  <li><a href="#idioma" onClick={(e) => handleLinkClick(e, 'idioma')}>Idiomas</a></li>
                  <li><a href="#proyecto" onClick={(e) => handleLinkClick(e, 'proyecto')}>Proyectos</a></li>
                  <li><a href="#logros" onClick={(e) => handleLinkClick(e, 'logros')}>Logros </a></li>
                  <li><a href="#contact" onClick={(e) => handleLinkClick(e, 'contact')}>Contacto</a></li>
                  <li><a href="#media" onClick={(e) => handleLinkClick(e, 'media')}>CV y redes</a></li>
              </ul>
              }
            </nav>
        </div>
    )
}
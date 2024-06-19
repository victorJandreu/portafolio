import Proyect from "./Proyect";
import music from "../assets/music2.jpg";
import questionGame from "../assets/questionGame.jpg";
import fireBall from "../assets/fireBall2.jpg";
import fireBallMovil from "../assets/fireball-mobil.jpg"
import musicMovil from "../assets/music-mobil.jpg"
import questionMovil from "../assets/questionMobil.jpg";
//icons
import sass from "../assets/sass.svg";
import react from "../assets/react.svg";
import router from "../assets/router.svg";
import redux from "../assets/redux.svg";

//gola
export default function ProyectGroup() {
  return (
    <section className="center" id="proyecto">
      <h2>Proyect</h2>
      <div className="proyect-group ">
        <Proyect
          image={fireBall}
          mobilImage={fireBallMovil}
          url="https://victorjandreu.github.io/game_platform/"
          codigo="https://github.com/victorJandreu/game_platform"
          title="Noticias de videojuegos"
          tecnoArray={[
            { icon: react, name: "React" },
            { icon: redux, name: "Redux" },
            { icon: router, name: "React-router" },
            { icon: sass, name: "Sass" },
          ]}
        >
          Página web que muestra los videojuegos más populares, los nuevos y los
          próximos juegos más populares. Además permite buscar videojuegos y la
          busquedad mostrará una serie de videojuegos cuyo nombre coincida y los
          ordenará por popularidad
        </Proyect>
        <Proyect
         mobilImage={musicMovil}
          image={music}
          title="Reproductor de música"
          url="https://victorjandreu.github.io/music-player/"
          codigo="https://github.com/victorJandreu/music-player"
          tecnoArray={[
            { icon: react, name: "React" },
            { icon: sass, name: "Sass" },
          ]}
        >
          Reproductor de música con 6 canciones que permite parar, pasar
          automáticamente o pasar a la siguiente o la anterior canción. Además
          puedes seleccionar la canción que desees.
        </Proyect>
        <Proyect
        mobilImage={questionMovil}
          image={questionGame}
          url="https://victorjandreu.github.io/question-game/"
          title="Juego de preguntas"
          codigo="https://github.com/victorJandreu/question-game"
          tecnoArray={[
            { icon: react, name: "React" },
            { icon: router, name: "React-router" },
            { icon: sass, name: "Sass" },
          ]}
        >
          Juego con 3 niveles de dificultad, apareces en la planta 3 de una casa
          y tienes que ir buscando la escalera hasta salir sin perder tus 3 💛.
          Las casillas pueden ser preguntas, 💛, la escalera o nada. Por cada
          pregunta fallada pierdes una vida. Para moverte puedes usar las teclas
          ⌨ o clicar en los botones de movimiento.
        </Proyect>
      </div>
    </section>
  );
}

import { nanoid } from "nanoid";
import github from "../assets/github.svg";
import web from "../assets/web.svg"

export default function Proyect({
  codigo,
  children,
  image,
  tecnoArray,
  title,
  url,
  mobilImage,
}) {
  return (
    <div className="proyect">
      <h3>{title}</h3>
      <div className="proyect-links">
        <a href={codigo} target="_blank">
          <p>Código</p>
          <img src={github} alt="github" />
        </a>
        <a href={url} target="_blank" >
          <p>Página web</p>
          <img src={web} alt="página web" />
        </a>
      </div>
      <a className="proyect-web" href={url} target="_blank">
        <div className="fondo">
          <img className="image-princi" src={image} alt={`image of ${title}`} />
          <img className="mobil-image" src={mobilImage} alt={title} />
          <div className="proyect-tecno">
            {tecnoArray?.map((x) => (
              <div key={nanoid()}>
                <img src={x.icon} alt={x.name} /> <p>{x.name}</p>
              </div>
            ))}
          </div>
        </div>
      </a>
      <p>{children}</p>
    </div>
  );
}

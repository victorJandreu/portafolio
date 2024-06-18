import { nanoid } from 'nanoid'

export default function Proyect({
  codigo,
  children,
  image,
  tecnoArray,
  title,
  url,
  mobilImage
}) {


  return (
    <div className="proyect">
      <a href={codigo} target="_blank" className="code">
        Código
      </a>
      <a className='proyect-web' href={url} target="_blank">
        <div className="top">
          <h3>{title}</h3>
        </div>
        <div className="fondo">
          <img className='image-princi' src={image} alt={`image of ${title}`} />
          <img className='mobil-image' src={mobilImage} alt={title} />
          <div className="proyect-tecno">
            {tecnoArray?.map((x) => (
              <div key={nanoid()} >
                <img src={x.icon} alt={x.name} /> <p>{x.name}</p>
              </div>
            ))}
          </div>
        </div>
        <p>{children}</p>
      </a>
    </div>
  );
}

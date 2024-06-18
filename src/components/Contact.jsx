import { useEffect, useState } from "react";
import copy from "../assets/copy.svg";

export default function Contact() {
  const [isLoading, setIsloading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [copiC, setcopiC] = useState(false);

  function sendEmail(e) {
    e.preventDefault();
    setIsError(false);
    setIsloading(true);

    const data = Object.fromEntries(new window.FormData(e.target));
    const { email, subject, message } = data;

    const bodyMessage = `email: ${email} <br> subject: ${subject} <br> mensaje: ${message}`;

    Email.send({
      Host: "smtp.elasticemail.com",
      Username: "victorandreum@gmail.com",
      Password: `${import.meta.env.VITE_APP_MS}`,
      To: "victorandreum@gmail.com",
      From: "victorandreum@gmail.com",
      Subject: "Nuevo mensaje de Portafolio",
      Body: bodyMessage,
    })
      .then((message) => {
        if (message == "OK") {
          Swal.fire({
            title: "Gracias por el mensaje",
            text: "Muy pronto me pondré en contacto contigo por email",
            icon: "success",
            iconColor: "#23d997",
            color: "#1b1b1b",
            background: "#fff",
            confirmButtonColor: "#23d997",
            customClass: {
              confirmButton: "custom-btn",
            },
          });
        } else {
          setIsError(true);
          return "error";
        }
      })
      .then((x) => {
        setIsloading(false);

        if (x !== "error") {
          e.target.reset();
        }
      });
  }

  function copyEmail() {
    navigator.clipboard.writeText("victorandreum@gmail.com");
    setcopiC(true);
  }

  useEffect(() => {
    if (copiC) {
      console.log("hola");
      setTimeout(() => {
        setcopiC(false);
      }, 1500);
    }
  }, [copyEmail]);

  return (
    <div className="contact center" id="contact">
      <h2>Contact Me</h2>
      <h3>
        <span>Opcion 1:</span> Copiar el siguiente email y enviarme uno desde su
        correo.
      </h3>
      <div className="copy-email">
        <input type="text" readOnly value="victorandreum@gmail.com" />
        
        <div className="btn-copy-div">
        {copiC && <p className="advert-copi">Copiado</p>}
        <button onClick={copyEmail}>
          <img src={copy} alt="copiar" />
        </button>
        </div>
        
      </div>
      <h3>
        <span>Opcion 2:</span> Enviarme el email directamente desde aquí.
      </h3>
      {isLoading && <p className="loading">Loading...</p>}
      {isError && <p className="error">El mensaje no se pudo enviar</p>}
      <form className="grid-email" onSubmit={sendEmail}>
        <label htmlFor="email" className="email-label">
          <p>Your Email</p>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="escribaSuEmail@gmail.com"
            required
          />
        </label>
        <label htmlFor="subject" className="subject-label">
          <p>Subject</p>
          <input
            type="text"
            name="subject"
            id="subject"
            placeholder="Intered in your profile"
            required
          />
        </label>
        <label htmlFor="message" className="message-label">
          <p>Message</p>
          <textarea
            name="message"
            id="message"
            placeholder="Hello, my name is...."
            required
          />
        </label>
        <button className="send-btn">Enviar</button>
      </form>
    </div>
  );
}

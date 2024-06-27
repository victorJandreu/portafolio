import { useEffect, useState } from "react";
import copy from "../assets/copy.svg";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const [isLoading, setIsloading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [copiC, setcopiC] = useState(false);
  const [t, i18n] = useTranslation("global")

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
            title: `${t("contact.modal.mensaje.title")}`,
            text: `${t("contact.modal.mensaje.description")}`,
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
      <h2>{t("contact.title")}</h2>
      <h3>
        <span>{t("contact.option1.title")}</span> {t("contact.option1.description")}
      </h3>
      <div className="copy-email">
        <input type="text" readOnly value="victorandreum@gmail.com" />
        
        <div className="btn-copy-div">
        {copiC && <p className="advert-copi">{t("contact.copy")}</p>}
        <button onClick={copyEmail}>
          <img src={copy} alt="copiar" />
        </button>
        </div>
        
      </div>
      <h3>
        <span>{t("contact.option2.title")}</span> {t("contact.option2.description")}
      </h3>
      {isLoading && <p className="loading">{t("contact.modal.loading")}</p>}
      {isError && <p className="error">{t("contact.modal.error")}</p>}
      <form className="grid-email" onSubmit={sendEmail}>
        <label htmlFor="email" className="email-label">
          <p>{t("contact.option2.input1.label")}</p>
          <input
            type="email"
            name="email"
            id="email"
            placeholder={t("contact.option2.input1.placeholder")}
            required
          />
        </label>
        <label htmlFor="subject" className="subject-label">
          <p>{t("contact.option2.input2.label")}</p>
          <input
            type="text"
            name="subject"
            id="subject"
            placeholder={t("contact.option2.input2.placeholder")}
            required
          />
        </label>
        <label htmlFor="message" className="message-label">
          <p>{t("contact.option2.input3.label")}</p>
          <textarea
            name="message"
            id="message"
            placeholder={t("contact.option2.input3.placeholder")}
            required
          />
        </label>
        <button className="send-btn">{t("contact.option2.button")}</button>
      </form>
    </div>
  );
}


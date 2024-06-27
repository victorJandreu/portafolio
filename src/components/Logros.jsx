import cvPdf from "../pdf/curriculum.pdf";
import cvLogo from "../assets/Cv.svg";
import { useTranslation } from "react-i18next";



export default function Logros() {
  const [t, i18n] = useTranslation("global");

  return (
    <section className="center logros" id="logros">
      <h2>{t("achievements.title")}</h2>
      <ul>
        <li>
          <span className="boll"></span>
          <strong>{t("achievements.first-list.title")}</strong>
          {t("achievements.first-list.one")}
          <span className="highlight">
            {" "}
            {t("achievements.first-list.span1")}
          </span>{" "}
          {t("achievements.first-list.two")}{" "}
          <span className="highlight">
            {" "}
            {t("achievements.first-list.span2")}{" "}
          </span>
          {t("achievements.first-list.third")}
        </li>
        <li>
          <span className="boll"></span>
          <strong>{t("achievements.second-list.title")}</strong>
          {t("achievements.second-list.one")}
          <span className="highlight">
            {" "}
            {t("achievements.second-list.span1")}
          </span>{" "}
          {t("achievements.second-list.two")}{" "}
          <span className="highlight">
            {t("achievements.second-list.span2")}</span>
          {t("achievements.second-list.third")}
        </li>
        <li>
          <span className="boll"></span>
          <strong>{t("achievements.third-list.title")}</strong>
          {t("achievements.third-list.one")}
          <span className="highlight">
            {" "}
            {t("achievements.third-list.span1")}
          </span>{" "}
          {t("achievements.third-list.two")}{" "}
          <span className="highlight">
            {t("achievements.third-list.span2")}</span> 
           {" "}{t("achievements.third-list.third")}
        </li>
        <li>
          <span className="boll"></span>
          <strong>{t("achievements.four-list.title")}</strong>
          {t("achievements.four-list.one")}
          <span className="highlight">
            {" "}
            {t("achievements.four-list.span1")}
          </span>
          {t("achievements.four-list.two")}{" "}
          <span className="highlight">
            {t("achievements.four-list.span2")}</span> 
           {" "}{t("achievements.four-list.third")}
        </li>
      </ul>
      <a href={cvPdf} className="cv" target="_blank">
      {t("achievements.cv")} <img src={cvLogo} alt="CV" />
      </a>
    </section>
  );
}

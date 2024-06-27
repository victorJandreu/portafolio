import spain from "../assets/spain.svg";
import english from "../assets/english.svg";
import japanese from "../assets/japanese.svg";
import Language from "./Language";
import { useTranslation } from "react-i18next";

export default function LanguageGroup() {
  const [t, i18n] = useTranslation("global")

  return (
    <section className="idiomas center" id="idioma">
      <h2>{t("languages.title")}</h2>
      <div className="language-group">
        <Language icon={spain} level={t("languages.spanish.level")} >{t("languages.spanish.title")}</Language>
        <Language icon={english} level={"B2 - Cambrige English"}>{t("languages.english")}</Language>
        <Language icon={japanese} level={"Noken 3 - Japanese Language Proficiency Test"}>{t("languages.japanese")}</Language>
      </div>
    </section>
  );
}

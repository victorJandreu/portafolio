import spain from "../assets/spain.svg";
import english from "../assets/english.svg";
import japanese from "../assets/japanese.svg";
import Language from "./Language";

export default function LanguageGroup() {
  return (
    <section className="idiomas center" id="idioma">
      <h2>Idiomas</h2>
      <div className="language-group">
        <Language icon={spain} level={"Nativo"} >Español</Language>
        <Language icon={english} level={"B2 - Cambrige English"}>Inglés</Language>
        <Language icon={japanese} level={"Noken 3 - Japanese Language Proficiency Test"}>Japonés</Language>
      </div>
    </section>
  );
}

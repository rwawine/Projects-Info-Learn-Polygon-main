import { useLanguage } from "../../context/LanguageContext";

export default function InfoPage() {
  const { language, translations } = useLanguage();
  
  return (
    <div
      style={{
        paddingLeft: "205px",
        paddingRight: "125px",
        paddingTop: "50px",
        fontWeight: "regular",
      }}
    >
      <p style={{ fontSize: "80px" }}>
        {translations[language].infoTitle}
      </p>
      <p style={{ fontSize: "28px", marginTop: "30px" }}>
        {translations[language].aboutSystem}
      </p>
      <p style={{ fontSize: "28px", marginTop: "60px" }}>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
        dis parturient montes, nascetur ridiculus mus. Donec quam felis,
        ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
        quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
        arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
      </p>
    </div>
  );
}

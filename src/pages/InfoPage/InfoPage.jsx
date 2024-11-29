import { useNavigate } from "react-router-dom";

export default function InfoPage() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/news");
  };
  return (
    <div
      style={{
        fontFamily: "Futura, sans-serif",
        paddingLeft: "75px",
        paddingRight: "125px",
      }}
    >
      <p style={{ fontSize: "80px" }}>
        Информационный учебный полигон “Катариум”
      </p>
      <button onClick={handleClick}>News</button>
      <p style={{ fontSize: "28px", marginTop: "50px" }}>О системе</p>
      <p style={{ fontSize: "28px" }}>
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

import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function MagicButton() {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const buttonStyle = {
    opacity: isHovered ? 1 : 0.1,
    transition: "opacity 0.3s ease",
    padding: "10px 20px",
    position: "fixed",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  };

  const handleButtonClick = () => {
    navigate("/");
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <button
      onClick={handleButtonClick}
      style={buttonStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      Домой
    </button>
  );
}

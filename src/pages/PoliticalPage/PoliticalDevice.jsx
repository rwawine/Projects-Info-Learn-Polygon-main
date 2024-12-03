import React from "react";
import { Link } from "react-router-dom";
import MagicButton from "../../components/MagicButton";
import PoliticalDeviceImage from "../../assets/PoliticalDeviceImage.png";

export default function PoliticalDevice() {
  return (
    <div style={{ position: "relative" }}>
      <MagicButton />
      <header
        style={{
          backgroundColor: "#061424",
        }}
      >
        <div
          style={{ maxWidth: "1060px", padding: "0 15px", margin: "0 auto" }}
        >
          <div
            style={{
              padding: "20px 20px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              color: "white",
              alignItems: "center",
            }}
          >
            <div
              style={{
                width: "117px",
                height: "34px",
                backgroundColor: "#B64D4A",
              }}
            ></div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                color: "white",
                gap: "70px",
              }}
            >
               <p>
                <Link
                  to="/political-site"
                  style={{fontSize: "18px", color: "#fff", textDecoration: "none" }}
                >
                  Главная
                </Link>
              </p>
              <p>
                <Link
                  to="/political-site/person"
                  style={{fontSize: "18px", color: "#fff", textDecoration: "none" }}
                >
                  Персоны
                </Link>
              </p>
              <p>
                <Link
                  to="/political-site/party"
                  style={{fontSize: "18px", color: "#fff", textDecoration: "none" }}
                >
                  Партии
                </Link>
              </p>
              <p>
                <Link
                  to="/political-site/device"
                  style={{ fontSize: "18px", color: "#DED651", textDecoration: "underline" }}
                >
                  Политическое устройство
                </Link>
              </p>
            </div>
          </div>
        </div>
      </header>
      <div style={{ maxWidth: "1060px", padding: "0 15px", margin: "0 auto" }}>
        <img src={PoliticalDeviceImage} alt="PoliticalDeviceImage" />
        <h2 style={{fontFamily: "Cormorant Garamond",  textAlign: "center", fontSize: "50px", fontWeight: "medium", marginTop: "40px"}}>Демократическая республика с парламентской формой правления</h2>
        <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "60px"}}>
          <button style={{
                display: "flex",
                width: "346px",
                height: "41px",
                backgroundColor: "#EC602B",
                color: "white",
                alignItems: "center", 
                justifyContent: "center",
                borderRadius: "3px",
              }}>Партия республиканцев</button>
          <button style={{
                display: "flex",
                width: "346px",
                height: "41px",
                alignItems: "center", 
                justifyContent: "center",
                backgroundColor: "#EC602B",
                color: "white",
                borderRadius: "3px",
              }}>Партия демократов</button>
        </div>
      </div>
      <footer
        style={{
          backgroundColor: "#061424",
          padding: "60px",
          zIndex: "5",
          position: "relative",
          marginTop: "100px",
        }}
      >
        <div
          style={{ maxWidth: "1060px", padding: "0 15px", margin: "0 auto" }}
        >
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <p style={{ fontSize: "18px", color: "white" }}>
              Сайт государственного устройства “Катариум”
            </p>
            <div
              style={{
                display: "flex",
                gap: "65px",
                alignItems: "flex-start",
                opacity: 0.5,
                color: "white",
              }}
            >
              <div
                style={{ display: "flex", gap: "8px", flexDirection: "column" }}
              >
                <p>Главная</p>
                <p>Персоны</p>
              </div>
              <div
                style={{ display: "flex", gap: "8px", flexDirection: "column" }}
              >
                <p>Партии</p>
                <p>Политическое устройство</p>
              </div>
            </div>
          </div>
          <hr style={{ marginTop: "60px" }} />
          <p
            style={{
              fontSize: "18px",
              color: "white",
              textAlign: "center",
              marginTop: "16px",
            }}
          >
            2023. Все права защищены
          </p>
        </div>
      </footer>
    </div>
  );
}

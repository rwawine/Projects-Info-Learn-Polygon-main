import React from "react";
import { Link } from "react-router-dom";
import BackgroundPoliticalPartyImage from "../../assets/BackgroundPoliticalPartyImage.png";
import Person1 from "../../assets/Person1.png";
import Person2 from "../../assets/Person2.png";
import Person3 from "../../assets/Person3.png";
import Person4 from "../../assets/Person4.png";
import Person5 from "../../assets/Person5.png";
import Person6 from "../../assets/Person6.png";

export default function PoliticalParty() {
  return (
    <div style={{ position: "relative" }}>
      <div
        style={{
          backgroundImage: `url(${BackgroundPoliticalPartyImage})`,
          height: "670px",
        }}
      >
        <header
          style={{
            backgroundColor: "rgb(0, 0, 0, 0.5)",
            position: "relative",
            zIndex: "5",
          }}
        >
          <div
            style={{ maxWidth: "1060px", padding: "0 15px", margin: "0 auto" }}
          >
            <div
              style={{
                padding: "20px 0",
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
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#B64D4A",
              }}
            ><div style={{color: 'white', fontSize: 16, fontFamily: 'IBM Plex Sans', fontWeight: '400', wordWrap: 'break-word'}}>Катариум</div></div>
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
                  style={{fontSize: "18px", color: "#DED651", textDecoration: "underline" }}
                >
                  Партии
                </Link>
              </p>
              <p>
                <Link
                  to="/political-site/device"
                  style={{ fontSize: "18px", color: "#fff", textDecoration: "none" }}
                >
                  Политическое устройство
                </Link>
              </p>
              </div>
            </div>
          </div>
        </header>
        <div
          style={{ maxWidth: "1060px", padding: "0 15px", margin: "0 auto" }}
        >
          <div
            style={{
              position: "relative",
              zIndex: "1",
              display: "flex",
              flexDirection: "column",
              marginTop: "80px",
            }}
          >
            <h2
              style={{
                fontFamily: "Cormorant Garamond",
                fontSize: "50px",
                color: "white",
                textAlign: "left",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing.
            </h2>
            <div
              style={{
                marginTop: "60px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div style={{ textAlign: "left", maxWidth: "200px" }}>
                <p style={{ fontSize: "62px", color: "#A8494B" }}>200</p>
                <p style={{ fontSize: "14px", color: "#FFFFFF" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </p>
              </div>
              <div style={{ textAlign: "left", maxWidth: "200px" }}>
                <p style={{ fontSize: "62px", color: "#A8494B" }}>+341</p>
                <p style={{ fontSize: "14px", color: "#FFFFFF" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </p>
              </div>
              <div style={{ textAlign: "left", maxWidth: "200px" }}>
                <p style={{ fontSize: "62px", color: "#A8494B" }}>200</p>
                <p style={{ fontSize: "14px", color: "#FFFFFF" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </p>
              </div>
              <div style={{ textAlign: "left", maxWidth: "200px" }}>
                <p style={{ fontSize: "62px", color: "#A8494B" }}>+341</p>
                <p style={{ fontSize: "14px", color: "#FFFFFF" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </p>
              </div>
            </div>
            <p style={{ marginTop: "70px", color: "white", fontSize: "28px" }}>
              Curabitur faucibus tempor leo, et viverra justo placerat congue.
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae.
            </p>
          </div>
        </div>
      </div>
      <div
        style={{
          maxWidth: "660px",
          textAlign: "center",
          padding: "0 15px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <h2
          style={{
            fontFamily: "Cormorant Garamond",
            fontSize: "50px",
            color: "black",
            textAlign: "center",
            marginTop: "150px",
          }}
        >
          Представители партии
        </h2>
        <p
          style={{
            fontSize: "18px",
            color: "black",
            marginTop: "16px",
          }}
        >
          Proin rutrum euismod leo non aliquam. Mauris lacinia ultrices diam,
          quis bibendum justo auctor eget. Proin rutrum euismod leo non aliquam.{" "}
        </p>
      </div>
      <div
        style={{
          maxWidth: "1060px",
          padding: "0 15px",
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          gap: "100px",
          justifyContent: "space-between",
          marginTop: "120px",
        }}
      >
        <div style={{ position: "relative" }}>
          <div
            style={{
              position: "absolute",
              top: "33%",
              right: "-115px",
              padding: "25px 5px",
              backgroundColor: "#B64D4A",
              borderRadius: "3px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <p style={{ color: "white", fontSize: "18px" }}>Председатель</p>
            <p
              style={{ color: "white", fontSize: "14px", fontStyle: "italic" }}
            >
              Рамин Шахрам
            </p>
          </div>
          <img src={Person1} alt="Person1" />
        </div>
        <div style={{ position: "relative" }}>
          <div
            style={{
              position: "absolute",
              top: "33%",
              right: "-115px",
              padding: "25px 5px",
              backgroundColor: "#B64D4A",
              borderRadius: "3px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <p style={{ color: "white", fontSize: "18px" }}>Секретарь</p>
            <p
              style={{ color: "white", fontSize: "14px", fontStyle: "italic" }}
            >
              Джавед Мехран
            </p>
          </div>
          <img src={Person2} alt="Person2" />
        </div>
        <div style={{ position: "relative" }}>
          <div
            style={{
              position: "absolute",
              top: "33%",
              right: "-115px",
              padding: "25px 5px",
              backgroundColor: "#B64D4A",
              borderRadius: "3px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <p style={{ color: "white", fontSize: "18px" }}>Министр</p>
            <p
              style={{ color: "white", fontSize: "14px", fontStyle: "italic" }}
            >
              Дильшат Лалек
            </p>
          </div>
          <img src={Person3} alt="Person3" />
        </div>
        <div style={{ position: "relative" }}>
          <div
            style={{
              position: "absolute",
              top: "33%",
              right: "-115px",
              padding: "25px 5px",
              backgroundColor: "#B64D4A",
              borderRadius: "3px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <p style={{ color: "white", fontSize: "18px" }}>Министр</p>
            <p
              style={{ color: "white", fontSize: "14px", fontStyle: "italic" }}
            >
              Булат Берим
            </p>
          </div>
          <img src={Person4} alt="Person4" />
        </div>
        <div style={{ position: "relative" }}>
          <div
            style={{
              position: "absolute",
              top: "33%",
              right: "-115px",
              padding: "25px 5px",
              backgroundColor: "#B64D4A",
              borderRadius: "3px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <p style={{ color: "white", fontSize: "18px" }}>Министр</p>
            <p
              style={{ color: "white", fontSize: "14px", fontStyle: "italic" }}
            >
              Фарзан Шабнам
            </p>
          </div>
          <img src={Person5} alt="Person5" />
        </div>
        <div style={{ position: "relative" }}>
          <div
            style={{
              position: "absolute",
              top: "33%",
              right: "-115px",
              padding: "25px 5px",
              backgroundColor: "#B64D4A",
              borderRadius: "3px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <p style={{ color: "white", fontSize: "18px" }}>Министр</p>
            <p
              style={{ color: "white", fontSize: "14px", fontStyle: "italic" }}
            >
              Милинда Зейнаб
            </p>
          </div>
          <img src={Person6} alt="Person6" />
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
          <hr style={{ margin: "60px 0 20px 0" }} />
          <div style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
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
          <Link to="/" style={{color: 'white', fontSize: 18, fontFamily: 'IBM Plex Sans', fontWeight: '400', wordWrap: 'break-word'}}>Вернуться в Контур системы</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

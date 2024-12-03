import React from "react";
import { Link } from "react-router-dom";
import MagicButton from "../../components/MagicButton";
import ArrowPerson from "../../assets/ArrowPerson.svg";
import ArrowButtonPerson from "../../assets/ArrowButtonPerson.svg";
import Person1 from "../../assets//Persons/Person1.png";

export default function PoliticalPersons() {
  return (
    <div style={{ position: "relative" }}>
      <MagicButton />
      <header
        style={{
          backgroundColor: "#061424",
          position: "relative",
          zIndex: "5",
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
                  style={{fontSize: "18px", color: "#DED651", textDecoration: "underline" }}
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
                  style={{ fontSize: "18px", color: "#fff", textDecoration: "none" }}
                >
                  Политическое устройство
                </Link>
              </p>
            </div>
          </div>
        </div>
      </header>

      <div style={{ maxWidth: "1060px", padding: "0 15px", margin: "0 auto" }}>
        <h2 style={{fontFamily: "Cormorant Garamond",  fontSize: "50px", marginTop: "60px" }}>
          Перечень политических персон
        </h2>
        <div
          style={{
            marginTop: "60px",
            display: "flex",
            flexDirection: "row",
            gap: "10px",
          }}
        >
          <input
            style={{
              padding: "10px 25px",
              border: "1px solid rgb(0,0,0,0.5",
              width: "580px",
              borderRadius: "3px",
            }}
            type="text"
            placeholder="Например, Аргаван Сумати"
          />
          <button
            style={{
              padding: "10px 60px",
              backgroundColor: "#B64D4A",
              color: "white",
              borderRadius: "3px",
            }}
          >
            Поиск
          </button>
        </div>
      </div>

      <div
        style={{
          maxWidth: "1060px",
          padding: "0 15px",
          margin: "0 auto",
          gap: "12px",
          display: "flex",
          flexDirection: "column",
          marginTop: "60px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <img src={Person1} alt="" />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <p style={{ fontSize: "31px" }}>Абхай Аджит</p>
              <p style={{ fontSize: "18px" }}>Представитель партии Роста</p>
            </div>
          </div>
          <p
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              color: "#1A1A1A",
            }}
          >
            Полная информация <img width={9} src={ArrowPerson} alt="" />
          </p>
        </div>
        <hr />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <img src={Person1} alt="" />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <p style={{ fontSize: "31px" }}>Абхай Аджит</p>
              <p style={{ fontSize: "18px" }}>Представитель партии Роста</p>
            </div>
          </div>
          <p
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              color: "#1A1A1A",
            }}
          >
            Полная информация <img width={9} src={ArrowPerson} alt="" />
          </p>
        </div>
        <hr />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <img src={Person1} alt="" />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <p style={{ fontSize: "31px" }}>Абхай Аджит</p>
              <p style={{ fontSize: "18px" }}>Представитель партии Роста</p>
            </div>
          </div>
          <p
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              color: "#1A1A1A",
            }}
          >
            Полная информация <img width={9} src={ArrowPerson} alt="" />
          </p>
        </div>
        <hr />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <img src={Person1} alt="" />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <p style={{ fontSize: "31px" }}>Абхай Аджит</p>
              <p style={{ fontSize: "18px" }}>Представитель партии Роста</p>
            </div>
          </div>
          <p
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              color: "#1A1A1A",
            }}
          >
            Полная информация <img width={9} src={ArrowPerson} alt="" />
          </p>
        </div>
        <hr />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <img src={Person1} alt="" />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <p style={{ fontSize: "31px" }}>Абхай Аджит</p>
              <p style={{ fontSize: "18px" }}>Представитель партии Роста</p>
            </div>
          </div>
          <p
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              color: "#1A1A1A",
            }}
          >
            Полная информация <img width={9} src={ArrowPerson} alt="" />
          </p>
        </div>
        <hr />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <img src={Person1} alt="" />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <p style={{ fontSize: "31px" }}>Абхай Аджит</p>
              <p style={{ fontSize: "18px" }}>Представитель партии Роста</p>
            </div>
          </div>
          <p
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              color: "#1A1A1A",
            }}
          >
            Полная информация <img width={9} src={ArrowPerson} alt="" />
          </p>
        </div>
        <button
          style={{
            marginTop: "60px",
            display: "flex",
            justifyContent: "space-between",
            border: "1px solid #EC602B",
            padding: "6px 17px",
            color: "#EC602B",
            width: "320px",
            borderRadius: "3px",
            height: "40px",
            alignItems: "center",
            fontSize: "20px",
          }}
        >
          Загрузить еще <img src={ArrowButtonPerson} alt="" />
        </button>
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

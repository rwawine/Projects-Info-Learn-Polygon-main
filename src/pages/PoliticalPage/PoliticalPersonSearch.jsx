import React from "react";
import MagicButton from "../../components/MagicButton";
import ArrowPerson from "../../assets/ArrowPerson.svg";
import ArrowButtonPerson from "../../assets/ArrowButtonPerson.svg";
import Person1 from "../../assets//Persons/Person1.png";

export default function PoliticalPersonSearch() {
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
              <p>Главная</p>
              <p>Персоны</p>
              <p>Партии</p>
              <p>Политическое устройство</p>
            </div>
          </div>
        </div>
      </header>

      <div style={{ maxWidth: "1060px", padding: "0 15px", margin: "0 auto"}}>
        <h2 style={{fontFamily: "Cormorant Garamond",  fontSize: "50px", marginTop: "60px" }}>
        Результат поиска по запросу: “Самира Наргес”
        </h2>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginTop: "60px"
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <img width={210} src={Person1} alt="" />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <p style={{ fontSize: "56px" }}>Абхай Аджит</p>
              <p style={{ fontSize: "28px" }}>Представитель партии Роста</p>
            </div>
          </div>
          <p
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              fontSize: "18px",
              color: "#1A1A1A",
            }}
          >
            Полная информация <img width={9} src={ArrowPerson} alt="" />
          </p>
        </div>
        <hr style={{color: "#111A28", marginTop: "20px"}}/>
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
         <h2 style={{fontFamily: "Cormorant Garamond", fontSize: "50px", marginBottom: "60px" }}>
         Другие политические деятели
        </h2>
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

import React from "react";
import MagicButton from "../../components/MagicButton";
import BackgroundImage from "../../assets/BackgroundImageJobs.svg";
import BackGuysJobs from "../../assets/BackGuysJobs.png";
import Thumbnail1 from "../../assets/Thumbnail1.png";
import Thumbnail2 from "../../assets/Thumbnail2.png";
import Thumbnail3 from "../../assets/Thumbnail3.png";
import Vkontakte from "../../assets/Vkontakte.svg";
import Telegram from "../../assets/Telegram.svg";

export default function JobPage() {
  return (
    <div
      style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#F9F9F9" }}
    >
      <img
        style={{ position: "absolute", zIndex: 0, top: "-15px", right: 0 }}
        src={BackgroundImage}
        alt="BackgroundImage"
      />
      <MagicButton />
      <div
        style={{
          maxWidth: "1430px",
          margin: "0 auto",
          padding: "15px 15px 0",
          position: "relative",
          zIndex: "15",
        }}
      >
        <header
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "40px 60px",
            backgroundColor: "#FFFFFF",
            borderRadius: "30px",
            zIndex: "5",
          }}
        >
          <h1
            style={{
              color: "#16364F",
              fontSize: "28px",
              margin: 0,
              fontWeight: 600,
            }}
          >
            Биржа труда /
          </h1>
          <nav style={{ display: "flex", gap: "100px" }}>
            <a
              href="#"
              style={{
                color: "#000",
                textDecoration: "none",
                fontSize: "18px",
              }}
            >
              Главная
            </a>
            <a
              href="#"
              style={{
                color: "#000",
                textDecoration: "none",
                fontSize: "18px",
              }}
            >
              Новости
            </a>
            <a
              href="#"
              style={{
                color: "#000",
                textDecoration: "none",
                fontSize: "18px",
              }}
            >
              Компании
            </a>
            <a
              href="#"
              style={{
                color: "#000",
                textDecoration: "none",
                fontSize: "18px",
              }}
            >
              Вакансии
            </a>
          </nav>
        </header>

        <main style={{ marginTop: "30px" }}>
          <img
            style={{
              position: "absolute",
              top: "250px",
              right: "30%",
              zIndex: "2",
            }}
            src={BackGuysJobs}
            alt=""
          />
          <section
            style={{
              position: "relative",
              zIndex: "5",
              display: "flex",
              alignItems: "center",
              padding: "20px",
              marginTop: "700px",
              gap: "80px",
              flexWrap: "nowrap",
              borderRadius: "16px",
            }}
          >
            <h2
              style={{
                borderRadius: "55px",
                textAlign: "center",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "white",
                width: "190px",
                height: "85px",
                fontSize: "22px",
              }}
            >
              347 <br /> Резюме
            </h2>
            <h2
              style={{
                borderRadius: "55px",
                textAlign: "center",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "white",
                width: "190px",
                height: "85px",
                fontSize: "22px",
              }}
            >
              244 <br /> Вакансий
            </h2>
            <h2
              style={{
                borderRadius: "55px",
                textAlign: "center",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "white",
                width: "190px",
                height: "85px",
                fontSize: "22px",
              }}
            >
              400 <br /> Компаний
            </h2>
          </section>

          {/* Новости */}
          <section style={{ marginTop: "160px" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                gap: "250px",
                marginBottom: "70px",
              }}
            >
              <h2 style={{ fontSize: "48px" }}>Последние новости биржи</h2>
              <a
                href="#"
                style={{
                  fontSize: "18px",
                  color: "#000",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "16px",
                }}
              >
                Все новости <span>→</span>
              </a>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div
                style={{
                  width: "360px",
                  backgroundColor: "#FFFFFF",
                  borderRadius: "12px",
                  padding: "15px",
                  display: "flex",
                  gap: "25px",
                  flexDirection: "column",
                }}
              >
                <img
                  src={Thumbnail1}
                  alt="News"
                  style={{
                    width: "100%",
                    borderRadius: "8px",
                    marginBottom: "10px",
                  }}
                />
                <h3 style={{ fontSize: "22px", color: "#4E68F6" }}>
                  Lorem ipsum dolor sit amet
                </h3>
                <p style={{ fontSize: "18px", color: "#000" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore.
                </p>
                <a
                  href="#"
                  style={{
                    fontSize: "18px",
                    color: "#007BFF",
                    backgroundColor: "#F4F5F8",
                    padding: "10px 10px",
                    width: "230px",
                    textAlign: "center",
                    borderRadius: "15px",
                  }}
                >
                  Узнать больше
                </a>
              </div>
              <div
                style={{
                  width: "360px",
                  backgroundColor: "#FFFFFF",
                  borderRadius: "12px",
                  padding: "15px",
                  display: "flex",
                  gap: "25px",
                  flexDirection: "column",
                }}
              >
                <img
                  src={Thumbnail2}
                  alt="News"
                  style={{
                    width: "100%",
                    borderRadius: "8px",
                    marginBottom: "10px",
                  }}
                />
                <h3 style={{ fontSize: "22px", color: "#4E68F6" }}>
                  Lorem ipsum dolor sit amet
                </h3>
                <p style={{ fontSize: "18px", color: "#000" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore.
                </p>
                <a
                  href="#"
                  style={{
                    fontSize: "18px",
                    color: "#007BFF",
                    backgroundColor: "#F4F5F8",
                    padding: "10px 10px",
                    width: "230px",
                    textAlign: "center",
                    borderRadius: "15px",
                  }}
                >
                  Узнать больше
                </a>
              </div>
              <div
                style={{
                  width: "360px",
                  backgroundColor: "#FFFFFF",
                  borderRadius: "12px",
                  padding: "15px",
                  display: "flex",
                  gap: "25px",
                  flexDirection: "column",
                }}
              >
                <img
                  src={Thumbnail3}
                  alt="News"
                  style={{
                    width: "100%",
                    borderRadius: "8px",
                    marginBottom: "10px",
                  }}
                />
                <h3 style={{ fontSize: "22px", color: "#4E68F6" }}>
                  Lorem ipsum dolor sit amet
                </h3>
                <p style={{ fontSize: "18px", color: "#000" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore.
                </p>
                <a
                  href="#"
                  style={{
                    fontSize: "18px",
                    color: "#007BFF",
                    backgroundColor: "#F4F5F8",
                    padding: "10px 10px",
                    width: "230px",
                    textAlign: "center",
                    borderRadius: "15px",
                  }}
                >
                  Узнать больше
                </a>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
      </div>
      <footer
        style={{
          marginTop: "50px",
          backgroundColor: "#000",
          color: "#FFF",
          padding: "90px 0 80px 0",
        }}
      >
        <div
          style={{ maxWidth: "1440px", padding: "0 15px", margin: "0 auto" }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginRight: "130px",
            }}
          >
            <div
              style={{ display: "flex", flexDirection: "column", gap: "70px" }}
            >
              Биржа труда /
              <div
                style={{ display: "flex", flexDirection: "row", gap: "10px" }}
              >
                <img src={Vkontakte} alt="" />
                <img src={Telegram} alt="" />
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "row", gap: "70px" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "70px",
                }}
              >
                <p style={{ color: "rgb(255,255,255,0.6)" }}>Работодателям</p>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                  }}
                >
                  <p>Размещение вакансий</p> <p>Страница компании</p>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "70px",
                }}
              >
                <p style={{ color: "rgb(255,255,255,0.6)" }}>Соискателям</p>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                  }}
                >
                  <p>Вакансии</p> <p>Создать резюме</p>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "70px",
                }}
              >
                <p style={{ color: "rgb(255,255,255,0.6)" }}> О нас</p>
                <div>
                  <p>Новости</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <hr style={{ margin: "80px 0 30px 0" }} />
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <div
                style={{
                  fontSize: "18px",
                  fontWeight: "400",
                  display: "flex",
                  alignItems: "center",
                  gap: "15px",
                  opacity: "0.6",
                }}
              >
                2023, Все права защищены
              </div>
              <div style={{ display: "flex", gap: "16px" }}>
                <p
                  style={{
                    fontSize: "18px",
                    fontWeight: "400",
                    opacity: "0.5",
                    color: "white",
                    textDecoration: "underline",
                  }}
                >
                  Пользовательское соглашение
                </p>
                ●
                <p
                  style={{
                    fontSize: "18px",
                    fontWeight: "400",
                    opacity: "0.5",
                    color: "white",
                    textDecoration: "underline",
                  }}
                >
                  Политика конфиденциальности
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

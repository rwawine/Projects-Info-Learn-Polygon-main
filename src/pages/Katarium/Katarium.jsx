import React from "react";
import katariumImage from "../../assets/Katarium_start.png";
import waterfallImage from "../../assets/Waterfall.png";
import mapImage from "../../assets/Map.png";
import behmanImage from "../../assets/Behman.png";
import tinaImage from "../../assets/Tina.png";

import MagicButton from "../../components/MagicButton"

export default function Katarium() {
  return (
    <div style={{ backgroundColor: "#F5F1E7", width: "100%" }}>
      <MagicButton />
      <img src={katariumImage} alt="katarium" style={{ width: "100%" }} />
      <p
        style={{
          fontFamily: "Romile Personal Use",
          fontSize: "92px",
          paddingLeft: "230px",
          paddingRight: "230px",
        }}
      >
        ИСТОРИЯ
      </p>
      <p
        style={{
          paddingLeft: "230px",
          paddingRight: "230px",
          fontFamily: "IBM Plex Sans",
          fontSize: "28px",
        }}
      >
        В 1550-х годах на севере острова Итугум, омываемом Аравийским морем,
        сложилось господство королевства Катарий, претендующего на обладание
        абсолютной властью. Оно постоянно вело разрушительные захватнические
        войны с соседями, завоевывая и присоединяя к себе все новые территории.
      </p>
      <p
        style={{
          paddingLeft: "230px",
          paddingRight: "230px",
          fontFamily: "IBM Plex Sans",
          fontSize: "28px",
        }}
      >
        На южной стороне острова располагалось небольшое, но сильное королевство
        Риум. Его земли располагались вдоль крупных полноводных рек Гицем и Сея,
        а также в Ямчинских горах. Его населяли воинственные племена, грозно
        защищавшие границы своего королевства и совершающие стремительные набеги
        на территории Катария, доставляя много хлопот его властям.
      </p>
      <img src={waterfallImage} style={{ width: "100%" }} alt="waterfall"></img>
      <p
        style={{
          paddingLeft: "230px",
          paddingRight: "230px",
          fontFamily: "IBM Plex Sans",
          fontSize: "28px",
        }}
      >
        Население Риума занималось поиском золотых и серебрянных месторождений,
        а также добычей железной руды, необходимой для производства оружия
        и военной амуниции. Кроме добычи металлов, большое внимание было уделено
        скотоводству и земледелию. Этому способствовало наличие плодородных
        земель и множества горных и равнинных пастбищ.
      </p>
      <hr
        style={{
          width: "25%",
        }}
      ></hr>
      <p
        style={{
          paddingLeft: "105px",
          paddingRight: "43px",
          fontFamily: "IBM Plex Sans",
          fontSize: "35px",
          color: "#B64D4A",
          position: "center",
        }}
      >
        Однако власти Катария имели большие планы на плодородные земли и
        богатства южной территории острова, где располагался Риум, для роста
        благосостояния жителей королевства.
      </p>
      <p
        style={{
          paddingLeft: "230px",
          paddingRight: "230px",
          fontFamily: "IBM Plex Sans",
          fontSize: "28px",
        }}
      >
        В 1556 году Королевство Катарий начало военный поход против государства
        Риум. Его войска провели долгие недели в изнуряющих сражениях, так и не
        сумев захватить власть над столицей. Изнуренные постоянными войнами,
        правители двух королевств решили сесть за стол переговоров.
      </p>
      <p
        style={{
          paddingLeft: "230px",
          paddingRight: "230px",
          fontFamily: "IBM Plex Sans",
          fontSize: "28px",
        }}
      >
        В ходе долгих дискуссий, правители поняли, что объединение двух
        королевств в одну сильную и самостоятельную республику станет наилучшим
        решением для процветания и благополучия жителей. Они подписали
        Итугумский мирный договор, который послужил началом для развития нового
        государства – Катариум, в составе которого находятся две провинции
        Катарий и Риум.
      </p>
      <p
        style={{
          fontFamily: "Romile Personal Use",
          fontSize: "92px",
          paddingLeft: "230px",
          paddingRight: "230px",
          position: "center",
        }}
      >
        ГЕОГРАФИЧЕСКОЕ ПОЛОЖЕНИЕ
      </p>
      <img src={mapImage} alt="map" style={{ width: "100%" }} />
      <p
        style={{
          paddingLeft: "230px",
          paddingRight: "230px",
          fontFamily: "IBM Plex Sans",
          fontSize: "28px",
        }}
      >
        На территории острова преобладает тропический климат с сезоном муссонов.
        Температура воздуха стабильна круглый год — 25–30 градусов. С конца мая
        по август выпадает 80% осадков.
      </p>
      <p
        style={{
          fontFamily: "Romile Personal Use",
          fontSize: "92px",
          paddingLeft: "230px",
          paddingRight: "230px",
          position: "center",
        }}
      >
        ПОЛИТИЧЕСКОЕ УСТРОЙСТВО
      </p>
      <p
        style={{
          paddingLeft: "105px",
          paddingRight: "43px",
          fontFamily: "IBM Plex Sans",
          fontSize: "35px",
          textAlign: "center",
        }}
      >
        Сегодня Катариум — это демократическая республика с парламентской формой
        правления
      </p>
      <p
        style={{
          paddingLeft: "105px",
          paddingRight: "43px",
          fontFamily: "IBM Plex Sans",
          fontSize: "35px",
          textAlign: "center",
        }}
      >
        Главы государства
      </p>
      <div style={{ display: "flex", paddingLeft: "350px" }}>
        <div style={{ padding: "50px", left: "200px" }}>
          <img
            src={tinaImage}
            alt="tina"
            style={{ width: "100%", margin: "50px" }}
          />
          <p
            style={{
              paddingLeft: "105px",
              paddingRight: "43px",
              paddingTop: "20px",
              fontFamily: "IBM Plex Sans",
              fontSize: "35px",
              textAlign: "center",
            }}
          >
            Тина Вильсон
          </p>
          <p
            style={{
              paddingLeft: "105px",
              paddingRight: "43px",
              fontFamily: "IBM Plex Sans",
              fontSize: "35px",
              textAlign: "center",
            }}
          >
            Капитан-Регент
          </p>
        </div>
        <div style={{ padding: "50px", left: "200px" }}>
          <img
            src={behmanImage}
            alt="behman"
            style={{ width: "100%", margin: "50px" }}
          />
          <p
            style={{
              paddingLeft: "105px",
              paddingRight: "43px",
              paddingTop: "20px",
              fontFamily: "IBM Plex Sans",
              fontSize: "35px",
              textAlign: "center",
            }}
          >
            Бехман Гарун
          </p>
          <p
            style={{
              paddingLeft: "105px",
              paddingRight: "43px",
              fontFamily: "IBM Plex Sans",
              fontSize: "35px",
              textAlign: "center",
            }}
          >
            Капитан-Регент
          </p>
        </div>
      </div>
    </div>
  );
}

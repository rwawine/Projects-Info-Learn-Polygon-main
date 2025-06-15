"use client";
import * as React from "react";
import RepresentativeCard from "./RepresentativeCard";
import styles from "./RepresentativesSection.module.css";

function RepresentativesSection() {
  const representatives = [
    {
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/771d5128286adb43f519c39a0b825dddd7b43d98?placeholderIfAbsent=true&apiKey=b6b92bb0a9e5482b8b21f0df90550158",
      title: "Министр",
      name: "Рамин Шахрам"
    },
    {
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/b75e3ccf9254f1b314cad2f7fe42cef055cfd35e?placeholderIfAbsent=true&apiKey=b6b92bb0a9e5482b8b21f0df90550158",
      title: "Министр",
      name: "Джавед Мехран"
    },
    {
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/98be95cfc1d93228dee9d8b0fc487fc95c840104?placeholderIfAbsent=true&apiKey=b6b92bb0a9e5482b8b21f0df90550158",
      title: "Министр",
      name: "Дильшат Лалек"
    },
    {
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/b003a1e139350b569f60d419eb75c760c6810247?placeholderIfAbsent=true&apiKey=b6b92bb0a9e5482b8b21f0df90550158",
      title: "Министр",
      name: "Булат Берим"
    },
    {
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/792d96de60178ae95531e226ae3eae86d481e259?placeholderIfAbsent=true&apiKey=b6b92bb0a9e5482b8b21f0df90550158",
      title: "Министр",
      name: "Фарзан Шабнам"
    },
    {
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/1f464cee150e00a795e5cf47b443618412b52e91?placeholderIfAbsent=true&apiKey=b6b92bb0a9e5482b8b21f0df90550158",
      title: "Министр",
      name: "Милинда Зейнаб"
    }
  ];

  return (
    <section className={styles.representativesSection}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>
          Представители партии
        </h2>
        <p className={styles.sectionDescription}>
          Proin rutrum euismod leo non aliquam. Mauris lacinia ultrices
          diam, quis bibendum justo auctor eget. Proin rutrum euismod leo
          non aliquam.{" "}
        </p>
      </div>
      <div className={styles.representativesGrid}>
        {representatives.map((rep, index) => (
          <RepresentativeCard
            key={index}
            imageUrl={rep.imageUrl}
            title={rep.title}
            name={rep.name}
          />
        ))}
      </div>
    </section>
  );
}

export default RepresentativesSection;

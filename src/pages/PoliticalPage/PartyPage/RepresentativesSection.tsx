"use client";
import * as React from "react";
import RepresentativeCard from "./RepresentativeCard";
import styles from "./RepresentativesSection.module.css";
import { useLanguage } from '../../../context/LanguageContext';

function RepresentativesSection() {
  const { language, translations } = useLanguage();
  const representatives = [
    {
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/771d5128286adb43f519c39a0b825dddd7b43d98?placeholderIfAbsent=true&apiKey=b6b92bb0a9e5482b8b21f0df90550158",
      title: translations[language].representativeCard.title,
      name: translations[language].representativeCard.name
    },
    {
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/b75e3ccf9254f1b314cad2f7fe42cef055cfd35e?placeholderIfAbsent=true&apiKey=b6b92bb0a9e5482b8b21f0df90550158",
      title: translations[language].representativeCard.title,
      name: translations[language].representativeCard.name1
    },
    {
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/98be95cfc1d93228dee9d8b0fc487fc95c840104?placeholderIfAbsent=true&apiKey=b6b92bb0a9e5482b8b21f0df90550158",
      title: translations[language].representativeCard.title,
      name: translations[language].representativeCard.name2
    },
    {
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/b003a1e139350b569f60d419eb75c760c6810247?placeholderIfAbsent=true&apiKey=b6b92bb0a9e5482b8b21f0df90550158",
      title: translations[language].representativeCard.title,
      name: translations[language].representativeCard.name3
    },
    {
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/792d96de60178ae95531e226ae3eae86d481e259?placeholderIfAbsent=true&apiKey=b6b92bb0a9e5482b8b21f0df90550158",
      title: translations[language].representativeCard.title,
      name: translations[language].representativeCard.name4
    },
    {
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/1f464cee150e00a795e5cf47b443618412b52e91?placeholderIfAbsent=true&apiKey=b6b92bb0a9e5482b8b21f0df90550158",
      title: translations[language].representativeCard.title,
      name: translations[language].representativeCard.name5
    }
  ];

  return (
    <section className={styles.representativesSection}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>
          {translations[language].representativeCard.sectionTitle}
        </h2>
        <p className={styles.sectionDescription}>
          {translations[language].representativeCard.sectionDescription}
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

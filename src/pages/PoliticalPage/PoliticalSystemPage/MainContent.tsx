"use client";
import * as React from "react";
import styles from "./MainContent.module.css";
import { useLanguage } from "../../../context/LanguageContext";

export function MainContent() {
  const { language, translations } = useLanguage();
  return (
    <main className={styles.mainSection}>
      <h1 className={styles.mainTitle}>
      {translations[language].PoliticalSystemPageMainContent.politicalSystemPageTitle}
      </h1>
      <div className={styles.buttonGroup}>
        <button className={styles.partyButton}>
          <span className={styles.buttonLabel}>
            {translations[language].PoliticalSystemPageMainContent.republicanParty}
          </span>
        </button>
        <button className={styles.partyButton}>
          <span className={styles.buttonLabel}>
            {translations[language].PoliticalSystemPageMainContent.democraticParty}
          </span>
        </button>
      </div>
    </main>
  );
}

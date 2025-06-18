"use client";
import * as React from "react";
import styles from "./SearchSection.module.css";
import { CaretDownIcon } from "./icons/CaretDownIcon.tsx";
import { useLanguage } from '../../../context/LanguageContext';

export function SearchSection() {
  const { language, translations } = useLanguage();
  return (
    <section className={styles.searchSection}>
      <div className={styles.searchControls}>
        <div className={styles.searchField}>
          <input
            type="text"
            placeholder={translations[language].PoliticalDirectorySearchSection.searchPlaceholder}
            className={styles.searchInput}
          />
        </div>
        <a href="/political-site/search" className={styles.searchButton}>
          {translations[language].PoliticalDirectorySearchSection.searchButton}
        </a>
      </div>
      <div className={styles.sortDropdown}>
        <span className={styles.sortLabel}>
          {translations[language].PoliticalDirectorySearchSection.sortLabel}
        </span>
        <CaretDownIcon />
      </div>
    </section>
  );
}

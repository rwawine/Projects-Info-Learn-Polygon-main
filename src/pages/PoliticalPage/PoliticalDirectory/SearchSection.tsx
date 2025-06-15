"use client";
import * as React from "react";
import styles from "./SearchSection.module.css";
import { CaretDownIcon } from "./icons/CaretDownIcon.tsx";

export function SearchSection() {
  return (
    <section className={styles.searchSection}>
      <div className={styles.searchControls}>
        <div className={styles.searchField}>
          <input
            type="text"
            placeholder="Поиск по имени или должности..."
            className={styles.searchInput}
          />
        </div>
        <button className={styles.searchButton}>
          Найти
        </button>
      </div>
      <div className={styles.sortDropdown}>
        <span className={styles.sortLabel}>
          Сортировать по
        </span>
        <CaretDownIcon />
      </div>
    </section>
  );
}

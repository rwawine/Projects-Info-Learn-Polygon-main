"use client";
import * as React from "react";
import styles from "./MainContent.module.css";

export function MainContent() {
  return (
    <main className={styles.mainSection}>
      <h1 className={styles.mainTitle}>
        Демократическая республика с парламентской формой правления
      </h1>
      <div className={styles.buttonGroup}>
        <button className={styles.partyButton}>
          <span className={styles.buttonLabel}>
            Партия республиканцев
          </span>
        </button>
        <button className={styles.partyButton}>
          <span className={styles.buttonLabel}>
            Партия демократов
          </span>
        </button>
      </div>
    </main>
  );
}

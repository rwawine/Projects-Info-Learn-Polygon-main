"use client";
import * as React from "react";
import styles from "./CompanyOverview.module.css";
import { StatItem } from "./StatItem";

export function CompanyStats() {
  return (
    <section className={styles.statsSection}>
      <h2 className={styles.sectionTitle}>
        Обзор компании
      </h2>
      <div className={styles.statsContainer}>
        <StatItem
          label="Количество сотрудников"
          value="От 5 тыс. до 10 тыс. чел"
        />
        <StatItem
          label="Средняя зарплата"
          value="183 895 рублей (2023)"
        />
        <StatItem
          label="Год создания"
          value="30.08.2022"
        />
        <StatItem
          label="Уставной капитал, ₽"
          value="875,3 млн"
        />
        <StatItem
          label="Чистая прибыль, ₽"
          value="2,6 млрд (2023 г.)"
        />
        <StatItem
          label="Баланс, ₽"
          value="18,26 млрд (2023 г.)"
        />
      </div>
    </section>
  );
}

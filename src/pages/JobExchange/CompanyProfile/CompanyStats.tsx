"use client";
import * as React from "react";
import styles from "./CompanyOverview.module.css";
import { StatItem } from "./StatItem";
import { useLanguage } from '../../../context/LanguageContext';

export function CompanyStats() {
  const { language, translations } = useLanguage();
  return (
    <section className={styles.statsSection}>
      <h2 className={styles.sectionTitle}>
        {translations[language].companyProfile.overviewTitle}
      </h2>
      <div className={styles.statsContainer}>
        <StatItem
          label={translations[language].companyProfile.employees}
          value={translations[language].companyProfile.employeesValue}
        />
        <StatItem
          label={translations[language].companyProfile.averageSalary}
          value={translations[language].companyProfile.averageSalaryValue}
        />
        <StatItem
          label={translations[language].companyProfile.creationYear}
          value={translations[language].companyProfile.creationYearValue}
        />
        <StatItem
          label={translations[language].companyProfile.capital}
          value={translations[language].companyProfile.capitalValue}
        />
        <StatItem
          label={translations[language].companyProfile.profit}
          value={translations[language].companyProfile.profitValue}
        />
        <StatItem
          label={translations[language].companyProfile.balance}
          value={translations[language].companyProfile.balanceValue}
        />
      </div>
    </section>
  );
}

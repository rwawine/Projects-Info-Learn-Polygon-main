"use client";
import * as React from "react";
import styles from "../JobVacancy/JobVacancy.module.css";
import { useLanguage } from '../../../context/LanguageContext';

interface HeaderProps { }

export const Header: React.FC<HeaderProps> = () => {
  const { language, translations } = useLanguage();
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>
        {translations[language].header.title}
      </h1>
      <nav className={styles.navigation}>
        <a href="/job-board" className={styles.navLink}>
          {translations[language].header.home}
        </a>
        <a href="/job-news" className={styles.navLink}>
          {translations[language].header.news}
        </a>
        <a href="/job-companies" className={styles.navLink}>
          {translations[language].header.companies}
        </a>
        <a href="/job-board/vacancy" className={styles.navLink}>
          {translations[language].header.vacancies}
        </a>
      </nav>
    </header>
  );
};

import React from 'react';
import styles from './JobVacancy.module.css';
import { useLanguage } from '../../../context/LanguageContext';

const Header: React.FC = () => {
  const { language, translations } = useLanguage();
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <h1 className={styles.logo}>{translations[language].header.title}</h1>
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
          <a href="/job-board/vacancy" className={styles.navLinkActive}>
            {translations[language].header.vacancies}
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;

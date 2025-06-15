import React from 'react';
import styles from './JobVacancy.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <h1 className={styles.logo}>Биржа труда</h1>
        <nav className={styles.navigation}>
          <a href="/job-board" className={styles.navLink}>
            Главная
          </a>
          <a href="#" className={styles.navLink}>
            Новости
          </a>
          <a href="/job-companies" className={styles.navLink}>
            Компании
          </a>
          <a href="/job-board/vacancy" className={styles.navLinkActive}>
            Вакансии
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;

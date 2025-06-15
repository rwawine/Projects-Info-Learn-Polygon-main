import React from 'react';
import styles from './PoliticalSearchPage.module.css';

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.brandTitle}>
        Катариум
      </h1>
      <nav className={styles.navigation}>
        <a href="#" className={styles.navLink}>
          Главная
        </a>
        <a href="#" className={styles.navLink}>
          Персоны
        </a>
        <a href="#" className={styles.navLink}>
          Партии
        </a>
        <a href="#" className={styles.navLink}>
          Политическое устройство
        </a>
      </nav>
    </header>
  );
};

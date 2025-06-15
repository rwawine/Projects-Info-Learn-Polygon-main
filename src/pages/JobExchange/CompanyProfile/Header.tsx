import React from 'react';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.headerContainer}>
      <h1 className={styles.siteName}>Биржа труда</h1>
      <nav className={styles.navigation}>
        <a href="/job-board" className={styles.navLinkActive}>Главная</a>
        <a href="#" className={styles.navLink}>Новости</a>
        <a href="/job-companies" className={styles.navLink}>Компании</a>
        <a href="/job-board/vacancy" className={styles.navLink}>Вакансии</a>
      </nav>
    </header>
  );
}

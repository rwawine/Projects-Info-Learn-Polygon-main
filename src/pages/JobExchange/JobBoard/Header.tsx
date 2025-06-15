"use client";
import * as React from "react";
import styles from "./JobBoard.module.css";
function Header() {
  return (
    <header className={styles.headerContainer}>
      <h1 className={styles.logoTitle}>
        Биржа труда
      </h1>
      <nav className={styles.navigation}>
      <a href="/job-board" className={`${styles.navLink} ${styles.navLinkActive} ${styles.navItem} ${styles.navItemHome}`}>
          Главная
        </a>
        <a href="/job-news" className={`${styles.navLink} ${styles.navItem} ${styles.navItemNews}`}>
          Новости
        </a>
        <a href="/job-companies" className={`${styles.navLink} ${styles.navItem} ${styles.navItemCompanies}`}>
          Компании
        </a>
        <a href="/job-board/vacancy" className={`${styles.navLink} ${styles.navItem}`}>
          Вакансии
        </a>
      </nav>
    </header>
  );
}

export default Header;

"use client";
import * as React from "react";
import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <h1 className={styles.logo}>
        Катариум
      </h1>
      <nav className={styles.navigation}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <a href="#" className={styles.navLink}>
              Главная
            </a>
          </li>
          <li className={styles.navItem}>
            <a href="#" className={styles.navLink}>
              Персоны
            </a>
          </li>
          <li className={styles.navItem}>
            <a href="#" className={styles.navLink}>
              Партии
            </a>
          </li>
          <li className={styles.navItem}>
            <a href="#" className={styles.navLinkActive}>
              Политическое устройство
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

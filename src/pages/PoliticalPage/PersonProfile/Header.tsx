import React from 'react';
import styles from './Header.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        Катариум
      </div>
      <nav className={styles.navigation}>
        <a href="#" className={styles.navLink}>
          Главная
        </a>
        <a href="#" className={styles.navLinkActive}>
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
}

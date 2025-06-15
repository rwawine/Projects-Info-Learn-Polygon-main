import React from 'react';
import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerTitle}>
          Сайт государственного устройства "Катариум"
        </div>
        <nav className={styles.footerNav}>
          <a href="#" className={styles.footerLink}>Главная</a>
          <a href="#" className={styles.footerLink}>Партии</a>
          <a href="#" className={styles.footerLink}>Персоны</a>
          <a href="#" className={styles.footerLink}>Политическое устройство</a>
        </nav>
      </div>
      <div className={styles.footerDivider} />
      <div className={styles.footerBottom}>
        <div className={styles.copyright}>
          2023. Все права защищены
        </div>
        <a href="#" className={styles.systemLink}>
          Вернуться в контур системы
        </a>
      </div>
    </footer>
  );
}

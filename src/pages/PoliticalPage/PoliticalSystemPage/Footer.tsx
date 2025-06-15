"use client";
import * as React from "react";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerContent}>
        <div className={styles.footerTitle}>
          Сайт государственного устройства "Катариум"
        </div>
        <nav className={styles.footerNav}>
          <ul className={styles.footerNavList}>
            <li>
              <a href="#" className={styles.footerNavLink}>
                Главная
              </a>
            </li>
            <li>
              <a href="#" className={styles.footerNavLink}>
                Партии
              </a>
            </li>
            <li>
              <a href="#" className={styles.footerNavLink}>
                Персоны
              </a>
            </li>
            <li>
              <a href="#" className={styles.footerNavLink}>
                Политическое устройство
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className={styles.footerDivider} />
      <div className={styles.footerBottom}>
        <div className={styles.copyright}>
          2023. Все права защищены
        </div>
        <div className={styles.backLink}>
          Вернуться в контур системы
        </div>
      </div>
    </footer>
  );
}

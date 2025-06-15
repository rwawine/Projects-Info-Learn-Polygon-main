"use client";
import * as React from "react";
import styles from "./JobBoard.module.css";
function Footer() {
  return (
    <footer className={styles.footerSection}>
      <div className={styles.footerContainer}>
        <div className={styles.footerContent}>
          <h2 className={styles.footerLogo}>
            Биржа труда
          </h2>
          <div className={styles.footerLinks}>
            <div className={styles.footerColumn}>
              <h3 className={styles.footerColumnTitle}>
                Работодателям
              </h3>
              <div className={styles.footerColumnLinks}>
                <a href="#" className={styles.footerLink}>
                  Размещение вакансий
                </a>
                <a href="#" className={styles.footerLink}>
                  Страница компании
                </a>
              </div>
            </div>
            <div className={styles.footerColumn}>
              <h3 className={styles.footerColumnTitle}>
                Соискателям
              </h3>
              <div className={styles.footerColumnLinks}>
                <a href="#" className={styles.footerLink}>
                  Вакансии
                </a>
                <a href="#" className={styles.footerLink}>
                  Создать резюме
                </a>
              </div>
            </div>
            <div className={styles.footerColumn}>
              <h3 className={styles.footerColumnTitle}>
                О нас
              </h3>
              <a href="#" className={styles.footerLink}>
                Новости
              </a>
            </div>
          </div>
        </div>
        <a href="/" className={styles.backToSystem}>
          Вернуться в Контур системы
        </a>
      </div>
      <div className={styles.footerDivider} />
      <div className={styles.footerBottom}>
        <p className={styles.copyright}>
          2023, Все права защищены
        </p>
        <div className={styles.legalLinks}>
          <a href="#" className={styles.legalLink}>
            Пользовательское соглашение
          </a>
          <a href="#" className={styles.legalLink}>
            Политика конфиденциальности
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

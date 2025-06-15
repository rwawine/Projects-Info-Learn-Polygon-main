"use client";
import * as React from "react";
import styles from "./CompanyListing.module.css";

interface FooterProps {}

export const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerTop}>
          <h2 className={styles.footerLogo}>
            Биржа труда
          </h2>
          <div className={styles.footerLinks}>
            <div className={styles.footerColumn}>
              <h3 className={styles.footerColumnTitle}>
                Работодателям
              </h3>
              <div className={styles.footerColumnLinks}>
                <div>Размещение вакансий</div>
                <div className={styles.footerColumnLink}>Страница компании</div>
              </div>
            </div>
            <div className={styles.footerColumnSmall}>
              <h3 className={styles.footerColumnTitle}>
                Соискателям
              </h3>
              <div className={styles.footerColumnLinks}>
                <div>Вакансии</div>
                <div className={styles.footerColumnLink}>Создать резюме</div>
              </div>
            </div>
            <div className={styles.footerColumnAbout}>
              <h3 className={styles.footerColumnTitle}>
                О нас
              </h3>
              <div className={styles.footerColumnLinks}>
                Новости
              </div>
            </div>
          </div>
        </div>
        <a href="/" className={styles.footerBackLink}>
          Вернуться в Контур системы
        </a>
      </div>
      <div className={styles.footerDivider} />
      <div className={styles.footerBottom}>
        <div className={styles.footerCopyright}>
          2023, Все права защищены
        </div>
        <div className={styles.footerBottomLinks}>
          <div className={styles.footerBottomLink}>
            Пользовательское соглашение
          </div>
          <div className={styles.footerBottomLink}>
            Политика конфиденциальности
          </div>
        </div>
      </div>
    </footer>
  );
};

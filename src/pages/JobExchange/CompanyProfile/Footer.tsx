import React from 'react';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerContent}>
        <div className={styles.footerTop}>
          <h2 className={styles.footerTitle}>Биржа труда</h2>
          <div className={styles.footerLinks}>
            <div className={styles.linkColumn}>
              <h3 className={styles.columnTitle}>Работодателям</h3>
              <div className={styles.columnLinks}>
                <a href="#" className={styles.footerLink}>Размещение вакансий</a>
                <a href="#" className={styles.footerLink}>Страница компании</a>
              </div>
            </div>
            <div className={styles.linkColumn}>
              <h3 className={styles.columnTitle}>Соискателям</h3>
              <div className={styles.columnLinks}>
                <a href="#" className={styles.footerLink}>Вакансии</a>
                <a href="#" className={styles.footerLink}>Создать резюме</a>
              </div>
            </div>
            <div className={styles.linkColumn}>
              <h3 className={styles.columnTitle}>О нас</h3>
              <a href="#" className={styles.footerLink}>Новости</a>
            </div>
          </div>
        </div>
        <a href="/" className={styles.backToSystem}>
          Вернуться в Контур системы
        </a>
      </div>
      <div className={styles.footerDivider} />
      <div className={styles.footerBottom}>
        <span className={styles.copyright}>2023, Все права защищены</span>
        <div className={styles.legalLinks}>
          <a href="#" className={styles.legalLink}>Пользовательское соглашение</a>
          <a href="#" className={styles.legalLink}>Политика конфиденциальности</a>
        </div>
      </div>
    </footer>
  );
}

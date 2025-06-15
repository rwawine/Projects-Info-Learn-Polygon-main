import React from 'react';
import styles from './PoliticalSearchPage.module.css';

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerTitle}>
          Сайт государственного устройства "Катариум"
        </div>
        <nav className={styles.footerNavigation}>
          <a href="#" className={styles.footerNavLink}>
            Главная
          </a>
          <a href="#" className={styles.footerNavLink}>
            Партии
          </a>
          <a href="#" className={styles.footerNavLink}>
            Персоны
          </a>
          <a href="#" className={styles.footerNavLink}>
            Политическое устройство
          </a>
        </nav>
      </div>
      <div className={styles.footerDivider} />
      <div className={styles.footerBottom}>
        <div className={styles.copyrightText}>
          2023. Все права защищены
        </div>
        <div className={styles.systemLink}>
          Вернуться в контур системы
        </div>
      </div>
    </footer>
  );
};

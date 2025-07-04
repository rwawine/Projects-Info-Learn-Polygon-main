import React from 'react';
import styles from './Breadcrumb.module.css';
import { useLanguage } from '../../../context/LanguageContext';

export default function Breadcrumb() {
  const { language, translations } = useLanguage();

  const handleBack = () => {
    window.history.back();
  };

  return (
    <nav className={styles.breadcrumbContainer}>
      <button className={styles.backButton} onClick={handleBack}>
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/d49518388612af27d9cb86355e60d3a42a66ee5b?placeholderIfAbsent=true&apiKey=8428921ce7c94552a2de6858b09e0ebf" className={styles.backIcon} alt="" />
        <span className={styles.backText}>{translations[language].breadcrumb.back}</span>
      </button>
      <div className={styles.breadcrumbTrail}>
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/281a973f9b3684056c20f00835be32abfcee6b43?placeholderIfAbsent=true&apiKey=8428921ce7c94552a2de6858b09e0ebf" className={styles.breadcrumbIcon} alt="" />
        <div className={styles.breadcrumbItem}>
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/4d549310ebe5a8f966f4a1fa43bed15bf863fb06?placeholderIfAbsent=true&apiKey=8428921ce7c94552a2de6858b09e0ebf" className={styles.breadcrumbArrow} alt="" />
          <div className={styles.breadcrumbButton}>
            <div className={styles.breadcrumbButtonInner}>
              <span className={styles.breadcrumbText}>{translations[language].breadcrumb.companies}</span>
            </div>
          </div>
        </div>
        <div className={styles.breadcrumbItem}>
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/4d549310ebe5a8f966f4a1fa43bed15bf863fb06?placeholderIfAbsent=true&apiKey=8428921ce7c94552a2de6858b09e0ebf" className={styles.breadcrumbArrow} alt="" />
          <div className={styles.breadcrumbButton}>
            <div className={styles.breadcrumbButtonInner}>
              <span className={styles.breadcrumbText}>{translations[language].breadcrumb.companyName}</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

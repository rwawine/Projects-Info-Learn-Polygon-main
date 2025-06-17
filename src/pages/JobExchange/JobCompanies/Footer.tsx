import React from 'react';
import styles from '../CompanyProfile/Footer.module.css';
import { useLanguage } from '../../../context/LanguageContext';

export default function Footer() {
  const { language, translations } = useLanguage();
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerContent}>
        <div className={styles.footerTop}>
          <h2 className={styles.footerTitle}>{translations[language].footer.title}</h2>
          <div className={styles.footerLinks}>
            <div className={styles.linkColumn}>
              <h3 className={styles.columnTitle}>{translations[language].footer.employers}</h3>
              <div className={styles.columnLinks}>
                <a href="#" className={styles.footerLink}>{translations[language].footer.vacancyPlacement}</a>
                <a href="#" className={styles.footerLink}>{translations[language].footer.companyPage}</a>
              </div>
            </div>
            <div className={styles.linkColumn}>
              <h3 className={styles.columnTitle}>{translations[language].footer.jobSeekers}</h3>
              <div className={styles.columnLinks}>
                <a href="#" className={styles.footerLink}>{translations[language].footer.vacancies}</a>
                <a href="#" className={styles.footerLink}>{translations[language].footer.createResume}</a>
              </div>
            </div>
            <div className={styles.linkColumn}>
              <h3 className={styles.columnTitle}>{translations[language].footer.aboutUs}</h3>
              <a href="#" className={styles.footerLink}>{translations[language].footer.news}</a>
            </div>
          </div>
        </div>
        <a href="/" className={styles.backToSystem}>
          {translations[language].footer.backToSystem}
        </a>
      </div>
      <div className={styles.footerDivider} />
      <div className={styles.footerBottom}>
        <span className={styles.copyright}>{translations[language].footer.copyright}</span>
        <div className={styles.legalLinks}>
          <a href="#" className={styles.legalLink}>{translations[language].footer.terms}</a>
          <a href="#" className={styles.legalLink}>{translations[language].footer.privacy}</a>
        </div>
      </div>
    </footer>
  );
}

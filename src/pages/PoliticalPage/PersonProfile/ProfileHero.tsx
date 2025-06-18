import React from 'react';
import styles from './ProfileHero.module.css';
import { useLanguage } from '../../../context/LanguageContext';

export function ProfileHero() {
  const { language, translations } = useLanguage();
  return (
    <section className={styles.profileSection}>
      <div className={styles.profileImageContainer}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/58bb13c795e733e2341d0779659fe0050ef276d3?placeholderIfAbsent=true&apiKey=7e6da1720f6048238d49aadd8c584765"
          className={styles.profileImage}
          alt="Самира Наргес"
        />
      </div>
      <article className={styles.profileContent}>
        <div className={styles.profileInfo}>
          <div className={styles.profileDetails}>
            <p className={styles.position}>
              {translations[language].profileHero.position}
            </p>
            <h1 className={styles.name}>
              {translations[language].profileHero.name}
            </h1>
          </div>
          <div className={styles.personalInfo}>
            <p>{translations[language].profileHero.gender}</p>
            <p>{translations[language].profileHero.birthDate}</p>
            <p>{translations[language].profileHero.maritalStatus}</p>
            <p>{translations[language].profileHero.children}</p>
            <p>{translations[language].profileHero.education}</p>
            <p>{translations[language].profileHero.militaryService}</p>
            <p>{translations[language].profileHero.party}</p>
          </div>
        </div>
        <button className={styles.downloadButton}>
          {translations[language].profileHero.downloadButton}
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M5 5L9 1M9 1L13 5M9 1V13" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M1 13V17H17V13" stroke="white" stroke-width="1.5" stroke-linecap="round" />
          </svg>
        </button>
      </article>
    </section>
  );
}

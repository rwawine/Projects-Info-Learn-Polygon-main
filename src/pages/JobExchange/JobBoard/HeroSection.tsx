"use client";
import * as React from "react";
import styles from "./JobBoard.module.css";
import { useLanguage } from '../../../context/LanguageContext';

function HeroSection() {
  const { language, translations } = useLanguage();
  return (
    <section className={styles.heroSection}>
      <article className={styles.heroCardJobs}>
        <div className={styles.heroCardContent}>
          <div className={styles.heroCardHeader}>
            <span className={styles.heroCardCategory}>
              {translations[language].heroSection.jobs}
            </span>
            <div className={styles.heroCardText}>
              <h2 className={styles.heroCardTitle}>
                {translations[language].heroSection.findJob}
              </h2>
              <p className={styles.heroCardDescription}>
                {translations[language].heroSection.description}
              </p>
            </div>
          </div>
          <button className={styles.heroButtonJobs}>
            <span className={styles.buttonText}>
              Перейти
            </span>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/f67a28db363ac0f8faa9cf42d6ef4f4b59692ec0?placeholderIfAbsent=true&apiKey=8428921ce7c94552a2de6858b09e0ebf"
              className={styles.buttonIcon}
              alt=""
            />
          </button>
        </div>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/4eb86d9f5037f3ba91330cba8e11aa23f658b9cd?placeholderIfAbsent=true&apiKey=8428921ce7c94552a2de6858b09e0ebf"
          className={styles.heroImageJobs}
          alt="Jobs illustration"
        />
      </article>
      <article className={styles.heroCardCompanies}>
        <div className={styles.heroCardContent}>
          <div className={styles.heroCardHeader}>
            <span className={styles.heroCardCategoryCompanies}>
              {translations[language].heroSection.companies}
            </span>
            <div className={styles.heroCardText}>
              <h2 className={styles.heroCardTitle}>
                {translations[language].heroSection.findCompany}
              </h2>
              <p className={styles.heroCardDescription}>
                {translations[language].heroSection.description}
                
              </p>
            </div>
          </div>
          <button className={styles.heroButtonCompanies}>
            <span className={styles.buttonText}>
              {translations[language].heroSection.goTo}
            </span>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/18560a1952e3ed9158eb82f505417e3389290af7?placeholderIfAbsent=true&apiKey=8428921ce7c94552a2de6858b09e0ebf"
              className={styles.buttonIcon}
              alt=""
            />
          </button>
        </div>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/7dfb396ee47d315f9774e4e68c8f5ec7afea4364?placeholderIfAbsent=true&apiKey=8428921ce7c94552a2de6858b09e0ebf"
          className={styles.heroImageCompanies}
          alt="Companies illustration"
        />
      </article>
    </section>
  );
}

export default HeroSection;

import React, { useState } from 'react';
import styles from './JobDetailPanel.module.css';
import { useLanguage } from '../../../context/LanguageContext';

export default function JobDetailPanel() {
  const [isExpanded, setIsExpanded] = useState(false);
  const { language, translations } = useLanguage();
  return (
    <aside className={styles.detailPanelContainer}>
      <article className={styles.jobDetailCard}>
        <header className={styles.jobHeader}>
          <div className={styles.jobHeaderTop}>
            <div className={styles.companyInfo}>
              <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/eab9eecd1db008c46061b8b1ece86e81996104af?placeholderIfAbsent=true&apiKey=8428921ce7c94552a2de6858b09e0ebf" className={styles.companyAvatar} alt="Яндекс логотип" />
              <span className={styles.companyLocation}>{translations[language].jobDetailPanel.companyLocation}</span>
            </div>
            <button className={styles.applyButton}>{translations[language].jobDetailPanel.applyButton}</button>
          </div>
          <h2 className={styles.jobTitle}>
            {translations[language].jobDetailPanel.jobTitle}
          </h2>
        </header>

        <div className={styles.jobTags}>
          <div className={styles.tagsList}>
            <span className={styles.tag}>{translations[language].jobDetailPanel.location}</span>
            <span className={styles.tag}>{translations[language].jobDetailPanel.office}</span>
            <span className={styles.tag}>{translations[language].jobDetailPanel.hours}</span>
            <div className={styles.salaryTag}>
              <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/ac3cd28c2ac19e08e3a2a7a3ae9a6c7219e4c8f5?placeholderIfAbsent=true&apiKey=8428921ce7c94552a2de6858b09e0ebf" className={styles.salaryIcon} alt="" />
              <span className={styles.salaryText}>{translations[language].jobDetailPanel.salary}</span>
            </div>
          </div>

          <div className={styles.jobDescription}>
            <p className={`${styles.descriptionText} ${!isExpanded ? styles.collapsed : ''}`}>
              {translations[language].jobDetailPanel.description}
              <br />
              {translations[language].jobDetailPanel.tasks}
              <br />
              {translations[language].jobDetailPanel.task1}
              <br />
              {translations[language].jobDetailPanel.task2}
              <br />
              {translations[language].jobDetailPanel.task3}
              <br />
              {translations[language].jobDetailPanel.task4}
              <br />
              {translations[language].jobDetailPanel.task5}
              <br />
              {translations[language].jobDetailPanel.task6}
              <br />
              {translations[language].jobDetailPanel.task7}
              <br />
              {translations[language].jobDetailPanel.task8}
            </p>
            <button 
              className={styles.loadMoreButton}
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? translations[language].jobDetailPanel.collapse : translations[language].jobDetailPanel.loadMore}
            </button>
          </div>
        </div>
      </article>

      <section className={styles.companyOverview}>
        <h3 className={styles.overviewTitle}>{translations[language].jobDetailPanel.overviewTitle}</h3>
        <div className={styles.companyStats}>
          <div className={styles.statRow}>
            <span className={styles.statLabel}>{translations[language].jobDetailPanel.stat1}</span>
            <span className={styles.statValue}>{translations[language].jobDetailPanel.stat1Value}</span>
          </div>
          <div className={styles.statRow}>
            <span className={styles.statLabel}>{translations[language].jobDetailPanel.stat2}</span>
            <span className={styles.statValue}>{translations[language].jobDetailPanel.stat2Value}</span>
          </div>
          <div className={styles.statRow}>
            <span className={styles.statLabel}>{translations[language].jobDetailPanel.stat3}</span>
            <span className={styles.statValue}>{translations[language].jobDetailPanel.stat3Value}</span>
          </div>
          <div className={styles.statRow}>
            <span className={styles.statLabel}>{translations[language].jobDetailPanel.stat4}</span>
            <span className={styles.statValue}>{translations[language].jobDetailPanel.stat4Value}</span>
          </div>
          <div className={styles.statRow}>
            <span className={styles.statLabel}>{translations[language].jobDetailPanel.stat5}</span>
            <span className={styles.statValue}>{translations[language].jobDetailPanel.stat5Value}</span>
          </div>
          <div className={styles.statRow}>
            <span className={styles.statLabel}>{translations[language].jobDetailPanel.stat6}</span>
            <span className={styles.statValue}>{translations[language].jobDetailPanel.stat6Value}</span>
          </div>
        </div>
      </section>
    </aside>
  );
}

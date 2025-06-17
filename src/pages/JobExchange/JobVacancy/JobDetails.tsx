import React, { useState } from 'react';
import styles from './JobVacancy.module.css';
import { useLanguage } from '../../../context/LanguageContext';

const JobDetails: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { language, translations } = useLanguage();
  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <aside className={styles.jobDetails}>
      <div className={styles.jobDetailsCard}>
        <div className={styles.jobDetailsHeader}>
          <div className={styles.companyInfo}>
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/04224ac7b1ec90a658947e6bfe73ba67349b58f5?placeholderIfAbsent=true&apiKey=8428921ce7c94552a2de6858b09e0ebf" className={styles.companyIcon} alt="CAPCO logo" />
            <span className={styles.companyLocation}>CAPCO, <span>{translations[language].jobDetails.location}</span></span>
          </div>
          <button className={styles.applyButton}>{translations[language].jobDetails.apply}</button>
        </div>
        <h2 className={styles.jobTitle}>{translations[language].jobDetails.title}</h2>

        <div className={styles.jobTags}>
          <div className={styles.tagsList}>
            <span className={styles.tag}>{translations[language].jobDetails.location2}</span>
            <span className={styles.tag}>{translations[language].jobDetails.office}</span>
            <span className={styles.tag}>{translations[language].jobDetails.hours}</span>
          </div>
          <div className={styles.jobDescription}>
            <p className={`${styles.descriptionText} ${!isExpanded ? styles.collapsed : ''}`}>
              {translations[language].jobDetails.description}
              <br />{translations[language].jobDetails.description2}
              <br />{translations[language].jobDetails.description3}
            </p>
            <button className={styles.loadMoreButton} onClick={toggleDescription}>
              {isExpanded ? translations[language].jobDetails.collapse : translations[language].jobDetails.loadMore}
            </button>
          </div>
        </div>
      </div>

      <div className={styles.companyOverview}>
        <h3 className={styles.overviewTitle}>{translations[language].jobDetails.overview}</h3>
        <div className={styles.companyStats}>
          <div className={styles.statRow}>
            <span className={styles.statLabel}>{translations[language].jobDetails.employees}</span>
            <span className={styles.statValue}>{translations[language].jobDetails.employeesValue}</span>
          </div>
          <div className={styles.statRow}>
            <span className={styles.statLabel}>{translations[language].jobDetails.averageSalary}</span>
            <span className={styles.statValue}>{translations[language].jobDetails.averageSalaryValue}</span>
          </div>
          <div className={styles.statRow}>
            <span className={styles.statLabel}>{translations[language].jobDetails.creationYear}</span>
            <span className={styles.statValue}>{translations[language].jobDetails.creationYearValue}</span>
          </div>
          <div className={styles.statRow}>
            <span className={styles.statLabel}>{translations[language].jobDetails.capital}</span>
            <span className={styles.statValue}>{translations[language].jobDetails.capitalValue}</span>
          </div>
          <div className={styles.statRow}>
            <span className={styles.statLabel}>{translations[language].jobDetails.profit}</span>
            <span className={styles.statValue}>{translations[language].jobDetails.profitValue}</span>
          </div>
          <div className={styles.statRow}>
            <span className={styles.statLabel}>{translations[language].jobDetails.balance}</span>
            <span className={styles.statValue}>{translations[language].jobDetails.balanceValue}</span>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default JobDetails;

import React from 'react';
import { ArrowIcon } from './ArrowIcon.tsx';
import styles from './PoliticalSearchPage.module.css';
import { useLanguage } from '../../../context/LanguageContext';
import person1 from "../../../assets/Persons/Person4.png";

export const SearchResult: React.FC = () => {
  const { language, translations } = useLanguage();
  return (
    <section className={styles.searchResultSection}>
      <h2 className={styles.searchTitle}>
        {translations[language].SearchResultSearchResult.searchTitle}
      </h2>
      <article className={styles.mainResultCard}>
        <div className={styles.mainImageContainer}>
          <img
            src={person1}
            alt=""
            className={styles.mainProfileImage}
          />
        </div>
        <div className={styles.mainResultContent}>
          <div className={styles.mainResultInfo}>
            <h3 className={styles.mainPersonName}>
              {translations[language].SearchResultSearchResult.personName}
            </h3>
            <p className={styles.mainPartyName}>
              {translations[language].SearchResultSearchResult.personParty}
            </p>
          </div>
          <div className={styles.fullInfoLink}>
            <a href="/political-site/search/person" className={styles.fullInfoText}>
              {translations[language].SearchResultSearchResult.fullInformation}
            </a>
            <ArrowIcon />
          </div>
        </div>
      </article>
    </section>
  );
};

import React from 'react';
import { ArrowIcon } from './ArrowIcon.tsx';
import styles from './PoliticalSearchPage.module.css';

import person1 from "../../../assets/Persons/Person4.png";

export const SearchResult: React.FC = () => {
  return (
    <section className={styles.searchResultSection}>
      <h2 className={styles.searchTitle}>
        Результат поиска по запросу: «Самира Наргес»
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
              Самира Наргес
            </h3>
            <p className={styles.mainPartyName}>
              Республиканская партия
            </p>
          </div>
          <div className={styles.fullInfoLink}>
            <a href="/political-site/search/person" className={styles.fullInfoText}>
              Полная информация
            </a>
            <ArrowIcon />
          </div>
        </div>
      </article>
    </section>
  );
};

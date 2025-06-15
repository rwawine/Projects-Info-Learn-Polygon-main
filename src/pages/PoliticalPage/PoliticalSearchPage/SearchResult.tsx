import React from 'react';
import { ArrowIcon } from './ArrowIcon.tsx';
import styles from './PoliticalSearchPage.module.css';

export const SearchResult: React.FC = () => {
  return (
    <section className={styles.searchResultSection}>
      <h2 className={styles.searchTitle}>
        Результат поиска по запросу: «Самира Наргес»
      </h2>
      <article className={styles.mainResultCard}>
        <div className={styles.mainImageContainer}>
          <img
            src="https://placehold.co/213x213/293856/293856"
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
            <span className={styles.fullInfoText}>
              Полная информация
            </span>
            <ArrowIcon />
          </div>
        </div>
      </article>
    </section>
  );
};

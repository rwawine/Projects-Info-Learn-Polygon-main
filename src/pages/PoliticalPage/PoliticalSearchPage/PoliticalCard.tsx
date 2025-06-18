import React from 'react';
import { ArrowIcon } from './ArrowIcon.tsx';
import styles from './PoliticalSearchPage.module.css';
import { useLanguage } from '../../../context/LanguageContext';

interface PoliticalCardProps {
  name: string;
  party: string;
  imageUrl: string;
  imageAlt?: string;
}

export const PoliticalCard: React.FC<PoliticalCardProps> = ({
  name,
  party,
  imageUrl,
  imageAlt = ""
}) => {
  const { language, translations } = useLanguage();
  return (
    <article className={styles.politicalCard}>
      <div className={styles.cardImageContainer}>
        <img
          src={imageUrl}
          alt={imageAlt}
          className={styles.cardProfileImage}
        />
      </div>
      <div className={styles.cardContent}>
        <div className={styles.cardInfo}>
          <h3 className={styles.cardPersonName}>
            {name}
          </h3>
          <p className={styles.cardPartyName}>
            {party}
          </p>
        </div>
        <div className={styles.cardInfoLink}>
          <span className={styles.cardInfoText}>
            {translations[language].PoliticalSearchPagePoliticalCard.fullInformation}
          </span>
          <ArrowIcon />
        </div>
      </div>
    </article>
  );
};

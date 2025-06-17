import * as React from "react";
import styles from "./SidebarCard.module.css";
import { useLanguage } from '../../../context/LanguageContext';

export const SidebarCard: React.FC = () => {
  const { language, translations } = useLanguage();
  return (
    <aside className={styles.sidebarContainer}>
      <h2 className={styles.sidebarTitle}>
        {translations[language].sidebarCard.title}
      </h2>

      <div className={styles.cardWrapper}>
        <div className={styles.promotionalCard}>
          <div className={styles.cardContent}>
            <div className={styles.adLabel}>
              <div className={styles.adIndicator} />
              <span className={styles.adText}>{translations[language].sidebarCard.adText}</span>
            </div>

            <p className={styles.cardDescription}>
              {translations[language].sidebarCard.description}
            </p>
          </div>

          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/5219b7ce5534f929805167beb5624403f4bb1853?placeholderIfAbsent=true&apiKey=8428921ce7c94552a2de6858b09e0ebf"
            alt="Promotional content"
            className={styles.cardImage}
          />
        </div>
      </div>
    </aside>
  );
};

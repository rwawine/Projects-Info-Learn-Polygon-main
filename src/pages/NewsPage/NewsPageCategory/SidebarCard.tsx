import * as React from "react";
import styles from "./SidebarCard.module.css";

export const SidebarCard: React.FC = () => {
  return (
    <aside className={styles.sidebarContainer}>
      <h2 className={styles.sidebarTitle}>
        Вам также может быть интересно
      </h2>

      <div className={styles.cardWrapper}>
        <div className={styles.promotionalCard}>
          <div className={styles.cardContent}>
            <div className={styles.adLabel}>
              <div className={styles.adIndicator} />
              <span className={styles.adText}>Реклама</span>
            </div>

            <p className={styles.cardDescription}>
              Узнайте, как исторические контексты формируют современные
              реалии и как это отражается на политике и культуре региона.
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

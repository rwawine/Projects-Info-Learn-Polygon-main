"use client";
import * as React from "react";
import styles from "./HomePage.module.css";

interface FeaturedCardProps {
  title: string;
  category: string;
  date: string;
  imageUrl: string;
}

export const FeaturedCard: React.FC<FeaturedCardProps> = ({
  title,
  category,
  date,
  imageUrl,
}) => {
  return (
    <article className={styles.featuredCard}>
      <div className={styles.featuredCardContent}>
        <img src={imageUrl} className={styles.featuredCardImage} alt={title} />
        <div className={styles.featuredCardOverlay}>
          <div className={styles.featuredCardInfo}>
            <h3 className={styles.featuredCardTitle}>{title}</h3>
            <div className={styles.featuredCardMeta}>
              <div className={styles.featuredCardCategory}>{category}</div>
              <div className={styles.featuredCardDate}>
                <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/4c29f5980df00c98e059e073e1decd14e1bb90a8?placeholderIfAbsent=true" className={styles.dateIcon} alt="Date" />
                <time className={styles.dateText}>{date}</time>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

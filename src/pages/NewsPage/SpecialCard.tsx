"use client";
import * as React from "react";
import styles from "./HomePage.module.css";

interface SpecialCardProps {
  title: string;
  author: string;
  date: string;
  imageUrl: string;
  badge: string;
}

export const SpecialCard: React.FC<SpecialCardProps> = ({
  title,
  author,
  date,
  imageUrl,
  badge,
}) => {
  return (
    <article className={styles.specialCard}>
      <div className={styles.specialCardContent}>
        <img src={imageUrl} className={styles.specialCardImage} alt={title} />
        <div className={styles.specialCardOverlay}>
          <div className={styles.specialCardHeader}>
            <div className={styles.specialCardBadge}>{badge}</div>
            <h3 className={styles.specialCardTitle}>{title}</h3>
          </div>
          <div className={styles.specialCardAuthor}>{author}</div>
        </div>
      </div>
    </article>
  );
};

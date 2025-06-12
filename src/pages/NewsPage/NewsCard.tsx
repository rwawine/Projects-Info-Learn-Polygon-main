"use client";
import * as React from "react";
import styles from "./HomePage.module.css";

interface NewsCardProps {
  title: string;
  author: string;
  date: string;
  imageUrl: string;
  isHorizontal?: boolean;
}

export const NewsCard: React.FC<NewsCardProps> = ({
  title,
  author,
  date,
  imageUrl,
  isHorizontal = false,
}) => {
  if (isHorizontal) {
    return (
      <article className={styles.horizontalNewsCard}>
        <div className={styles.horizontalCardBackground}>
          <img src={imageUrl} className={styles.horizontalCardImage} alt={title} />
        </div>
        <div className={styles.horizontalCardContent}>
          <h3 className={styles.horizontalCardTitle}>{title}</h3>
          <div className={styles.horizontalCardMeta}>
            <div className={styles.horizontalCardCategory}>{author}</div>
            <div className={styles.metaDivider} />
            <time className={styles.horizontalCardDate}>{date}</time>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className={styles.newsGrid}>
      <div className={styles.newsCardImage}>
        <img src={imageUrl} className={styles.cardImage} alt={title} />
      </div>
      <div className={styles.newsCardContent}>
        <div className={styles.cardMeta}>
          <div className={styles.cardAuthor}>{author}</div>
          <div className={styles.metaDivider} />
          <time className={styles.cardDate}>{date}</time>
        </div>
        <h3 className={styles.cardTitle}>{title}</h3>
      </div>
    </article>
  );
};

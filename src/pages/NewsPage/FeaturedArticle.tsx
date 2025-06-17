"use client";
import * as React from "react";
import styles from "./HomePage.module.css";
import { useLanguage } from '../../context/LanguageContext';
import { Link } from "react-router-dom";

interface FeaturedArticleProps {
  title: string;
  imageUrl: string;
  date: string;
  readTime: string;
}

export const FeaturedArticle: React.FC<FeaturedArticleProps> = ({
  title,
  imageUrl,
  date,
  readTime,
}) => {
  const { language, translations } = useLanguage();
  return (
    <article className={styles.featuredArticleWrapper}>
      <Link to="/news/article" className={styles.featuredArticle}>
        <div className={styles.featuredArticle}>
          <div className={styles.featuredContent}>
            <img src={imageUrl} className={styles.featuredImage} alt={title} />
            <div className={styles.hotNewsBadge}>
              <div className={styles.badgeIndicator} />
              <div className={styles.badgeText}>{translations[language].featuredArticle.badgeText}</div>
            </div>
          </div>
        </div>
        <div className={styles.featuredArticleInfo}>
          <h1 className={styles.featuredTitle}>{title}</h1>
          <div className={styles.featuredMeta}>
            <div className={styles.metaInfo}>
              <time className={styles.metaDate}>{date}</time>
              <div className={styles.metaDivider} />
              <div className={styles.metaReadTime}>{readTime}</div>
            </div>
          </div>
        </div>
        </Link>
    </article>
  );
};

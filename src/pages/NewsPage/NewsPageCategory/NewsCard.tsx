import * as React from "react";
import styles from "./NewsCard.module.css";

interface NewsArticle {
  id: string;
  imageUrl: string;
  tags: string[];
  title: string;
  description: string;
  author: string;
  date: string;
}

interface NewsCardProps {
  article: NewsArticle;
}

export const NewsCard: React.FC<NewsCardProps> = ({ article }) => {
  return (
    <article className={styles.newsCard}>
      <div className={styles.imageContainer}>
        <img
          src={article.imageUrl}
          alt={article.title}
          className={styles.newsImage}
        />
      </div>

      <div className={styles.contentContainer}>
        <div className={styles.tagsContainer}>
          {article.tags.map((tag, index) => (
            <span key={index} className={styles.tag}>{tag}</span>
          ))}
        </div>

        <div className={styles.articleContent}>
          <h2 className={styles.articleTitle}>{article.title}</h2>
          <p className={styles.articleDescription}>{article.description}</p>
        </div>

        <div className={styles.metaInfo}>
          <span className={styles.author}>{article.author}</span>
          <div className={styles.divider} />
          <time className={styles.date}>{article.date}</time>
        </div>
      </div>
    </article>
  );
};

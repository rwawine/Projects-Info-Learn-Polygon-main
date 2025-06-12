"use client";
import * as React from "react";
import styles from "../HomePage.module.css";

interface ArticleHeaderProps {
  tags: string[];
  authorName: string;
  publishDate: string;
}

export const ArticleHeader: React.FC<ArticleHeaderProps> = ({
  tags,
  authorName,
  publishDate,
}) => {
  return (
    <header className={styles.articleWrapper}>
      <div className={styles.tagsContainer}>
        {tags.map((tag, index) => (
          <span key={index}>{tag}</span>
        ))}
      </div>
      <div className={styles.authorSection}>
        <h2 className={styles.authorName}>{authorName}</h2>
        <div className={styles.dateSection}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/36620151a41a7b8c514f4bca0506f009e1d814d7?placeholderIfAbsent=true&apiKey=8428921ce7c94552a2de6858b09e0ebf"
            className={styles.dateIcon}
            alt="Date icon"
          />
          <time>{publishDate}</time>
        </div>
      </div>
    </header>
  );
};

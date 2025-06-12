"use client";
import * as React from "react";
import styles from "../HomePage.module.css";

interface ArticleContentProps {
  title: string;
  content: string;
}

export const ArticleContent: React.FC<ArticleContentProps> = ({
  title,
  content,
}) => {
  return (
    <article className={styles.contentSection}>
      <h1 className={styles.articleTitle}>{title}</h1>
      <div className={styles.articleText}>
        {content.split('\n').map((paragraph, index) => (
          <React.Fragment key={index}>
            {paragraph}
            {index < content.split('\n').length - 1 && <br />}
          </React.Fragment>
        ))}
      </div>
    </article>
  );
};

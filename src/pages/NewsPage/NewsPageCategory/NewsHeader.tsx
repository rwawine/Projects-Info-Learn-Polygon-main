import * as React from "react";
import styles from "./NewsHeader.module.css";

interface NewsHeaderProps {
  title: string;
  subtitle: string;
}

export const NewsHeader: React.FC<NewsHeaderProps> = ({ title, subtitle }) => {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <h1 className={styles.sectionTitle}>{title}</h1>
        <p className={styles.newsCount}>{subtitle}</p>
      </div>
    </header>
  );
};

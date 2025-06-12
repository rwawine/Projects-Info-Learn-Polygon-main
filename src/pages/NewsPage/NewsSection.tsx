"use client";
import * as React from "react";
import styles from "./HomePage.module.css";

interface NewsSectionProps {
  title: string;
  moreText: string;
  children: React.ReactNode;
}

export const NewsSection: React.FC<NewsSectionProps> = ({
  title,
  moreText,
  children,
}) => {
  return (
    <section className={styles.sectionWrapper}>
      <header className={styles.sectionHeader}>
        <div className={styles.sectionTitleRow}>
          <h2 className={styles.sectionTitle}>{title}</h2>
          <div className={styles.moreLink}>
            <div>{moreText}</div>
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/9635cdcc2523c75e853c6b96cdfcb124e9cf5a34?placeholderIfAbsent=true" className={styles.moreIcon} alt="More" />
          </div>
        </div>
        <span className={styles.sectionDivider} />
      </header>
      <div className={styles.sectionContent}>{children}</div>
    </section>
  );
};

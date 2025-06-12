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
          <a className={styles.moreLink} href="/news/category">
            <div>{moreText}</div>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <g clip-path="url(#clip0_64_147)">
                <g clip-path="url(#clip1_64_147)">
                  <g clip-path="url(#clip2_64_147)">
                    <path d="M6 10H14M14 10L10.5 6.5M14 10L10.5 13.5" stroke-linecap="round" stroke-linejoin="round" />
                  </g>
                </g>
              </g>
              <circle cx="10" cy="10" r="9.5" />
              <defs>
                <clipPath id="clip0_64_147">
                  <rect width="10" height="8" fill="white" transform="translate(5 6)" />
                </clipPath>
                <clipPath id="clip1_64_147">
                  <rect width="10" height="8" fill="white" transform="translate(5 6)" />
                </clipPath>
                <clipPath id="clip2_64_147">
                  <rect width="10" height="8" fill="white" transform="translate(5 6)" />
                </clipPath>
              </defs>
            </svg>
          </a>
        </div>
        <span className={styles.sectionDivider} />
      </header>
      <div className={styles.sectionContent}>{children}</div>
    </section>
  );
};

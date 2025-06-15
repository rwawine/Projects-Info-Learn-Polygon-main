import React from 'react';
import styles from './Breadcrumbs.module.css';

export function Breadcrumbs() {
  return (
    <nav className={styles.breadcrumbsContainer}>
      <a href='/political-site/search' className={styles.backButton}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/d49518388612af27d9cb86355e60d3a42a66ee5b?placeholderIfAbsent=true&apiKey=7e6da1720f6048238d49aadd8c584765"
          className={styles.backIcon}
          alt="Back"
        />
        <span className={styles.backText}>
          Вернуться
        </span>
      </a>
      <div className={styles.breadcrumbsPath}>
        <a href="/political-site"><img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/281a973f9b3684056c20f00835be32abfcee6b43?placeholderIfAbsent=true&apiKey=7e6da1720f6048238d49aadd8c584765"
          className={styles.breadcrumbIcon}
          alt=""
        /></a>
        <div className={styles.breadcrumbItem}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4d549310ebe5a8f966f4a1fa43bed15bf863fb06?placeholderIfAbsent=true&apiKey=7e6da1720f6048238d49aadd8c584765"
            className={styles.breadcrumbIcon}
            alt=""
          />
          <a href='/political-site/directory' className={styles.breadcrumbButton}>
            <div className={styles.breadcrumbText}>
              Перечень политических персон
            </div>
          </a>
        </div>
        <div className={styles.breadcrumbItem}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4d549310ebe5a8f966f4a1fa43bed15bf863fb06?placeholderIfAbsent=true&apiKey=7e6da1720f6048238d49aadd8c584765"
            className={styles.breadcrumbIcon}
            alt=""
          />
          <div className={styles.breadcrumbButton}>
            <div className={styles.breadcrumbText}>
              Самира Наргес
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

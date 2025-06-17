"use client";
import * as React from "react";
import styles from "./LoadMoreButton.module.css";
import { useLanguage } from '../../../context/LanguageContext';

export const LoadMoreButton: React.FC = () => {
  const { language, translations } = useLanguage();
  const handleLoadMore = () => {
    // Handle load more functionality
    console.log("Load more clicked");
  };

  return (
    <button
      className={styles.loadMoreButton}
      onClick={handleLoadMore}
      type="button"
    >
      {translations[language].loadMoreButton}
    </button>
  );
};

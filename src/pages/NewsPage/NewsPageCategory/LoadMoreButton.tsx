"use client";
import * as React from "react";
import styles from "./LoadMoreButton.module.css";

export const LoadMoreButton: React.FC = () => {
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
      Показа��ь еще
    </button>
  );
};

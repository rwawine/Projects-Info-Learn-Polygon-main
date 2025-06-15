"use client";
import * as React from "react";
import styles from "./CompanyListing.module.css";

interface SearchSectionProps {}

export const SearchSection: React.FC<SearchSectionProps> = () => {
  return (
    <section className={styles.searchSection}>
      <div className={styles.searchContent}>
        <h2 className={styles.searchTitle}>
          Найдите свою новую компанию сегодня
        </h2>
        <p className={styles.searchDescription}>
          Компании в области компьютерных технологий, инженерии и
          технологий ждут вас.
        </p>
      </div>
      <form className={styles.searchForm}>
        <div className={styles.searchInput}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e098e529e98e369032507ef0c4b8ed05b29b8e3b?placeholderIfAbsent=true&apiKey=8428921ce7c94552a2de6858b09e0ebf"
            alt="Search"
            className={styles.searchIcon}
          />
          <span className={styles.searchPlaceholder}>
            Какую должность вы ищете?
          </span>
        </div>
        <div className={styles.locationInput}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/2c6001b646cfaeebca11316e2ced42847b55d186?placeholderIfAbsent=true&apiKey=8428921ce7c94552a2de6858b09e0ebf"
            alt="Location"
            className={styles.searchIcon}
          />
          <span className={styles.locationPlaceholder}>
            Местоположение
          </span>
        </div>
        <button type="submit" className={styles.searchButton}>
          Найти компанию
        </button>
      </form>
    </section>
  );
};

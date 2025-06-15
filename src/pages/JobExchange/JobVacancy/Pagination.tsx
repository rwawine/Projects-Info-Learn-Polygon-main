import React from 'react';
import styles from './JobVacancy.module.css';

const Pagination: React.FC = () => {
  return (
    <nav className={styles.pagination} aria-label="Pagination">
      <button className={styles.paginationButton} aria-label="Previous page">
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/ba413657f58f3cddb9af248836207b8bde8db299?placeholderIfAbsent=true&apiKey=8428921ce7c94552a2de6858b09e0ebf" className={styles.paginationIcon} alt="" />
      </button>
      <button className={styles.paginationButtonActive} aria-current="page">1</button>
      <button className={styles.paginationButton}>2</button>
      <button className={styles.paginationButton}>3</button>
      <button className={styles.paginationButton}>4</button>
      <button className={styles.paginationButton}>5</button>
      <button className={styles.paginationButton} aria-label="Next page">
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/762a69a48337ce6b7d4661c5fbb314904bd9b6a2?placeholderIfAbsent=true&apiKey=8428921ce7c94552a2de6858b09e0ebf" className={styles.paginationIcon} alt="" />
      </button>
    </nav>
  );
};

export default Pagination;

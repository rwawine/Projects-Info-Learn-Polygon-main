import React, { useState } from 'react';
import styles from "./JobVacancy.module.css";
import { useLanguage } from '../../../context/LanguageContext';
import Filter from '../Filter/Filter';

const FilterControls: React.FC = () => {
  const { language, translations } = useLanguage();
  const [isFilterVisible, setIsFilterVisible] = useState(false);

  const handleFilterClick = () => {
    setIsFilterVisible(true);
  };

  const handleFilterClose = () => {
    setIsFilterVisible(false);
  };

  return (
    <>
      <div className={styles.filterControls}>
        <div className={styles.filtersButton} onClick={handleFilterClick}>
          <div className={styles.filtersContent}>
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/f421666852abc14cef0f91a1ac1b06af326229c8?placeholderIfAbsent=true&apiKey=8428921ce7c94552a2de6858b09e0ebf" className={styles.filterIcon} alt="" />
            <span className={styles.filtersText}>{translations[language].filterControls.filters}</span>
          </div>
        </div>
        <div className={styles.sortDropdown}>
          <span className={styles.sortText}>{translations[language].filterControls.sortBy}</span>
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/4b85ca9008a9ad320b2a03b59d84901d35103d3c?placeholderIfAbsent=true&apiKey=8428921ce7c94552a2de6858b09e0ebf" className={styles.sortIcon} alt="" />
        </div>
      </div>
      {isFilterVisible && <Filter onClose={handleFilterClose} />}
    </>
  );
};

export default FilterControls;

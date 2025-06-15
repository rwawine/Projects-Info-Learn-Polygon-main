"use client";
import * as React from "react";
import styles from "./InputDesign.module.css";

interface SearchFormProps {
  title: string;
  selectPlaceholder: string;
  searchPlaceholder: string;
  buttonText: string;
  filtersText: string;
  selectIcon: string;
  filtersIcon: string;
}

export const SearchForm: React.FC<SearchFormProps> = ({
  title,
  selectPlaceholder,
  searchPlaceholder,
  buttonText,
  filtersText,
  selectIcon,
  filtersIcon
}) => {
  const [searchValue, setSearchValue] = React.useState("");
  const [selectedCategory, setSelectedCategory] = React.useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search logic here
    console.log("Search:", { searchValue, selectedCategory });
  };

  return (
    <div className={styles.searchContainer}>
      <h3 className={styles.searchTitle}>{title}</h3>
      <form className={styles.searchForm} onSubmit={handleSearch}>
        <div className={styles.selectDropdown}>
          <select
            className={styles.selectText}
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="">{selectPlaceholder}</option>
          </select>
        </div>

        <button type="button" className={styles.filtersButton}>
          <div className={styles.filtersContent}>
            <img src={filtersIcon} alt="Filters" className={styles.filtersIcon} />
            <span className={styles.filtersText}>{filtersText}</span>
          </div>
        </button>

        <div className={styles.searchInput}>
          <input
            type="text"
            className={styles.searchInputContent}
            placeholder={searchPlaceholder}
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </div>

        <div className={styles.searchButtonContainer}>
          <button type="submit" className={styles.searchButton}>
            {buttonText}
          </button>
        </div>
      </form>
    </div>
  );
};

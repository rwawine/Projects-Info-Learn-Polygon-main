"use client";
import React from 'react';
import styles from './Filter.module.css';
import { useLanguage } from '../../../context/LanguageContext';

interface FilterActionsProps {
  resultsCount: number;
  onApply: () => void;
}

export const FilterActions: React.FC<FilterActionsProps> = ({ resultsCount, onApply }) => {
  const { language, translations } = useLanguage();
  return (
    <footer className={styles.actions}>
      <p className={styles.resultsText}>
        {translations[language].filterComponent.resultsCount} {resultsCount}
      </p>
      <button
        type="button"
        className={styles.applyButton}
        onClick={onApply}
      >
        {translations[language].filterComponent.applyButton}
      </button>
    </footer>
  );
};

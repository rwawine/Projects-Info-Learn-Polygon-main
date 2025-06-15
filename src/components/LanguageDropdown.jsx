import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import styles from './LanguageDropdown.module.css';

const LanguageDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();

  const languages = [
    { code: 'ru', name: 'Ru', flag: '🇷🇺' },
    { code: 'en', name: 'En', flag: '🇺🇸' }
  ];

  const currentLanguage = languages.find(lang => lang.code === language);

  return (
    <div className={styles.container}>
      <button
        className={styles.selectTrigger}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <span className={styles.flag}>{currentLanguage?.flag}</span>
        <span className={styles.language}>{currentLanguage?.name}</span>
        <span className={`${styles.chevron} ${isOpen ? styles.chevronUp : ''}`}>
          ▼
        </span>
      </button>

      {isOpen && (
        <div className={styles.dropdown} role="listbox">
          {languages.map((lang) => (
            <button
              key={lang.code}
              className={`${styles.option} ${language === lang.code ? styles.selected : ''}`}
              onClick={() => {
                if (language !== lang.code) {
                  toggleLanguage();
                }
                setIsOpen(false);
              }}
            >
              <span className={styles.flag}>{lang.flag}</span>
              <span className={styles.language}>{lang.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageDropdown; 
import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import styles from './LanguageDropdown.module.css';

import ru from '../assets/flags/ru.svg';
import en from '../assets/flags/en.svg';

const LanguageDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();

  const languages = [
    { code: 'ru', name: 'Ru', flag: ru },
    { code: 'en', name: 'En', flag: en }
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
        <span className={styles.flag}>
          <img src={currentLanguage?.flag} alt={`${currentLanguage?.name} flag`} />
        </span>
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
              <span className={styles.flag}>
                <img src={lang.flag} alt={`${lang.name} flag`} />
              </span>
              <span className={styles.language}>{lang.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageDropdown; 
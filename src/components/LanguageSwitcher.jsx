import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const LanguageSwitcher = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '0px',
      marginLeft: '24px',
      fontSize: '12px',
      fontWeight: '500'
    }}>
      <span 
        onClick={() => language !== 'ru' && toggleLanguage()}
        style={{
          color: language === 'ru' ? '#000000' : 'rgba(0, 0, 0, 0.2)',
          cursor: language !== 'ru' ? 'pointer' : 'default'
        }}
      >
        RU
      </span>
      <span 
        onClick={() => language !== 'en' && toggleLanguage()}
        style={{
          color: language === 'en' ? '#000000' : 'rgba(0, 0, 0, 0.2)', 
          cursor: language !== 'en' ? 'pointer' : 'default'
        }}
      >
        EN
      </span>
    </div>
  );
};

export default LanguageSwitcher; 
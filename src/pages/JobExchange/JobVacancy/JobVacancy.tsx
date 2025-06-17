import React from 'react';
import styles from './JobVacancy.module.css';
import Header from './Header.tsx';
import { SearchSection } from '../JobCompanies/SearchSection.tsx';
import JobListings from './JobListings.tsx';
import JobDetails from './JobDetails.tsx';
import Footer from './Footer.tsx';
import { useLanguage } from '../../../context/LanguageContext';

const JobVacancy: React.FC = () => {
  const { language, translations } = useLanguage();
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Header />
        <main className={styles.mainContent}>
        <h1 className={styles.pageTitle}>
          {translations[language].jobVacancy.title}
        </h1>
          <SearchSection />
          <div className={styles.contentGrid}>
            <JobListings />
            <JobDetails />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default JobVacancy;

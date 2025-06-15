import React from 'react';
import styles from './JobVacancy.module.css';
import Header from './Header.tsx';
import SearchSection from './SearchSection.tsx';
import JobListings from './JobListings.tsx';
import JobDetails from './JobDetails.tsx';
import Footer from './Footer.tsx';

const JobVacancy: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Header />
        <main className={styles.mainContent}>
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

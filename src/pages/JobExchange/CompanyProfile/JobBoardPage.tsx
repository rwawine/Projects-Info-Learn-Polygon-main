"use client";
import React, { useState } from 'react';
import styles from './JobBoardPage.module.css';
import Header from './Header.tsx';
import Breadcrumb from './Breadcrumb.tsx';
import CompanyProfile from './CompanyProfile.tsx';
import JobListings from './JobListings.tsx';
import JobDetailPanel from './JobDetailPanel.tsx';
import Footer from './Footer.tsx';
import CompanyOverview from './CompanyOverview.tsx';

export default function JobBoardPage() {
  const [activeTab, setActiveTab] = useState<'description' | 'jobs' | 'events'>('jobs');

  const renderMainContent = () => {
    switch (activeTab) {
      case 'description':
        return (
          <>
            <CompanyOverview />
          </>
        );
      case 'jobs':
        return (
          <>
            <JobListings />
            <JobDetailPanel />
          </>
        );
      case 'events':
        return (
          <div className={styles.eventsContainer}>
            <h2>События компании</h2>
          </div>
        );
    }
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.contentWrapper}>
        <Header />
        <Breadcrumb />
        <CompanyProfile />
        <div className={styles.tabsContainer}>
          <div className={styles.segmentedControl}>
            <div 
              className={activeTab === 'description' ? styles.segmentActive : styles.segmentInactive}
              onClick={() => setActiveTab('description')}
            >
              Описание
            </div>
            <div 
              className={activeTab === 'jobs' ? styles.segmentActive : styles.segmentInactive}
              onClick={() => setActiveTab('jobs')}
            >
              Вакансии
            </div>
            <div 
              className={activeTab === 'events' ? styles.segmentActive : styles.segmentInactive}
              onClick={() => setActiveTab('events')}
            >
              События
            </div>
          </div>
        </div>
        <main className={styles.mainContent}>
          {renderMainContent()}
        </main>
        <Footer />
      </div>
    </div>
  );
}

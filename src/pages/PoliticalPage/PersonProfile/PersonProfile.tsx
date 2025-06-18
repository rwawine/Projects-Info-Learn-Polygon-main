import React from 'react';
import { Header } from '../PoliticalPage/Header';
import { Breadcrumbs } from './Breadcrumbs';
import { ProfileHero } from './ProfileHero';
import { PartyMembers } from './PartyMembers.tsx';
import { Footer } from '../PoliticalPage/Footer';
import styles from './PersonProfile.module.css';
import { useLanguage } from '../../../context/LanguageContext';

export default function PersonProfile() {
  const { language, translations } = useLanguage();
  return (
    <div className={styles.pageContainer}>
        <Header logo={translations[language].personProfile.title} activeNavItem={translations[language].personProfile.activeNavItem} />
      <main className={styles.mainContent}>
        <div className={styles.contentWrapper}>
          <Breadcrumbs />
          <ProfileHero />
        </div>
        <PartyMembers />
      </main>
      <Footer siteTitle={translations[language].personProfile.title} copyright={translations[language].personProfile.copyright} backLinkText={translations[language].personProfile.backLinkText} />
    </div>
  );
}

import React from 'react';
import { Header } from './Header';
import { Breadcrumbs } from './Breadcrumbs';
import { ProfileHero } from './ProfileHero';
import { PartyMembers } from './PartyMembers.tsx';
import { Footer } from './Footer';
import styles from './PersonProfile.module.css';

export default function PersonProfile() {
  return (
    <div className={styles.pageContainer}>
      <Header />
      <main className={styles.mainContent}>
        <div className={styles.contentWrapper}>
          <Breadcrumbs />
          <ProfileHero />
        </div>
        <PartyMembers />
      </main>
      <Footer />
    </div>
  );
}

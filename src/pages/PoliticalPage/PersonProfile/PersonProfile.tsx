import React from 'react';
import { Header } from '../PoliticalPage/Header';
import { Breadcrumbs } from './Breadcrumbs';
import { ProfileHero } from './ProfileHero';
import { PartyMembers } from './PartyMembers.tsx';
import { Footer } from '../PoliticalPage/Footer';
import styles from './PersonProfile.module.css';

export default function PersonProfile() {
  return (
    <div className={styles.pageContainer}>
        <Header logo="Катариум" activeNavItem="Персоны" />
      <main className={styles.mainContent}>
        <div className={styles.contentWrapper}>
          <Breadcrumbs />
          <ProfileHero />
        </div>
        <PartyMembers />
      </main>
      <Footer siteTitle="Катариум" copyright="2023. Все права защищены" backLinkText="Вернуться в контур системы" />
    </div>
  );
}

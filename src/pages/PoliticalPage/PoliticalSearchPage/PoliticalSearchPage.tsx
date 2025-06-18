import React from 'react';
import { SearchResult } from './SearchResult';
import { PoliticalCard } from './PoliticalCard';
import { Footer } from '../PoliticalPage/Footer';
import { useLanguage } from '../../../context/LanguageContext';
import { Header } from '../PoliticalPage/Header';

import styles from './PoliticalSearchPage.module.css';

import person1 from "../../../assets/Persons/Person1.png";
import person2 from "../../../assets/Persons/Person2.png";
import person3 from "../../../assets/Persons/Person3.png";
import person5 from "../../../assets/Persons/Person5.png";

export const PoliticalSearchPage: React.FC = () => {
  const { language, translations } = useLanguage();
  const politicalFigures = [
    {
      name: translations[language].PoliticalSearchPagePoliticalSearchPage.person1Name,
      party: translations[language].PoliticalSearchPagePoliticalSearchPage.person1Party,
      imageUrl: person1
    },
    {
      name: translations[language].PoliticalSearchPagePoliticalSearchPage.person2Name,
      party: translations[language].PoliticalSearchPagePoliticalSearchPage.person2Party,
      imageUrl: person2
    },
    {
      name: translations[language].PoliticalSearchPagePoliticalSearchPage.person3Name,
      party: translations[language].PoliticalSearchPagePoliticalSearchPage.person3Party,
      imageUrl: person3
    },
    {
      name: translations[language].PoliticalSearchPagePoliticalSearchPage.person4Name,
      party: translations[language].PoliticalSearchPagePoliticalSearchPage.person4Party,
      imageUrl: person5
    }
  ];

  return (
    <div className={styles.pageContainer}>
      <Header logo={translations[language].PoliticalSearchPagePoliticalSearchPage.title} activeNavItem={translations[language].PoliticalSearchPagePoliticalSearchPage.activeNavItem} />
      <main className={styles.mainContent}>
        <SearchResult />
        <section className={styles.otherPoliticiansSection}>
          <h2 className={styles.otherPoliticiansTitle}>
            {translations[language].PoliticalSearchPagePoliticalSearchPage.otherPoliticiansTitle}
          </h2>
          <div className={styles.politiciansContainer}>
            <div className={styles.politiciansGrid}>
              {politicalFigures.map((figure, index) => (
                <PoliticalCard
                  key={index}
                  name={figure.name}
                  party={figure.party}
                  imageUrl={figure.imageUrl}
                />
              ))}
            </div>
            <div className={styles.loadMoreButtonContainer}>
              <button className={styles.loadMoreButton}>
                {translations[language].PoliticalSearchPagePoliticalSearchPage.loadMoreButton}
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer siteTitle={translations[language].PoliticalSearchPagePoliticalSearchPage.siteTitle} copyright={translations[language].PoliticalSearchPagePoliticalSearchPage.copyright} backLinkText={translations[language].PoliticalSearchPagePoliticalSearchPage.backLinkText} />
    </div>
  );
};

export default PoliticalSearchPage;

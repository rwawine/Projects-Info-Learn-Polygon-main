import React from 'react';
import { Header } from './Header';
import { SearchResult } from './SearchResult';
import { PoliticalCard } from './PoliticalCard';
import { Footer } from './Footer';
import styles from './PoliticalSearchPage.module.css';

export const PoliticalSearchPage: React.FC = () => {
  const politicalFigures = [
    {
      name: "Абхай Аджит",
      party: "Представитель партии Роста",
      imageUrl: "https://placehold.co/227x213/293856/293856"
    },
    {
      name: "Анушех Сартра",
      party: "Представитель партии Республиканцев",
      imageUrl: "https://placehold.co/213x213/293856/293856"
    },
    {
      name: "Аргаван Сумати",
      party: "Представитель партии Стремлений к справедливости",
      imageUrl: "https://placehold.co/213x213/293856/293856"
    },
    {
      name: "Биджой Ванада",
      party: "Представитель партии \"Новый Катариум\"",
      imageUrl: "https://placehold.co/213x213/293856/293856"
    }
  ];

  return (
    <div className={styles.pageContainer}>
      <Header />
      <main className={styles.mainContent}>
        <SearchResult />
        <section className={styles.otherPoliticiansSection}>
          <h2 className={styles.otherPoliticiansTitle}>
            Другие политические деятели
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
            <button className={styles.loadMoreButton}>
              Загрузить еще
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PoliticalSearchPage;

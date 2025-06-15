import React from 'react';
import { SearchResult } from './SearchResult';
import { PoliticalCard } from './PoliticalCard';
import { Footer } from '../PoliticalPage/Footer';

import { Header } from '../PoliticalPage/Header';

import styles from './PoliticalSearchPage.module.css';

import person1 from "../../../assets/Persons/Person1.png";
import person2 from "../../../assets/Persons/Person2.png";
import person3 from "../../../assets/Persons/Person3.png";
import person5 from "../../../assets/Persons/Person5.png";

export const PoliticalSearchPage: React.FC = () => {
  const politicalFigures = [
    {
      name: "Абхай Аджит",
      party: "Представитель партии Роста",
      imageUrl: person1
    },
    {
      name: "Анушех Сартра",
      party: "Представитель партии Республиканцев",
      imageUrl: person2
    },
    {
      name: "Аргаван Сумати",
      party: "Представитель партии Стремлений к справедливости",
      imageUrl: person3
    },
    {
      name: "Биджой Ванада",
      party: "Представитель партии \"Новый Катариум\"",
      imageUrl: person5
    }
  ];

  return (
    <div className={styles.pageContainer}>
      <Header logo="Катариум" activeNavItem="Персоны" />
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
            <div className={styles.loadMoreButtonContainer}>
              <button className={styles.loadMoreButton}>
                Загрузить еще
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer siteTitle="Катариум" copyright="2023. Все права защищены" backLinkText="Вернуться в контур системы" />
    </div>
  );
};

export default PoliticalSearchPage;

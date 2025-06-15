"use client";
import * as React from "react";
import styles from "./PoliticalDirectory.module.css";
import { SearchSection } from "./SearchSection.tsx";
import { PersonCard } from "./PersonCard.tsx";
import { Footer } from "../PoliticalPage/Footer";

import { Header } from "../PoliticalPage/Header";

import person1 from "../../../assets/Persons/Person1.png";
import person2 from "../../../assets/Persons/Person2.png";
import person3 from "../../../assets/Persons/Person3.png";
import person4 from "../../../assets/Persons/Person4.png";

interface Person {
    id: string;
    name: string;
    party: string;
    imageUrl: string;
}

const mockPersons: Person[] = [
    {
        id: "1",
        name: "Абхай Аджит",
        party: "Представитель партии Роста",
        imageUrl: person1
    },
    {
        id: "2",
        name: "Анушех Сартра",
        party: "Представитель партии Республиканцев",
        imageUrl: person2
    },
    {
        id: "3",
        name: "Аргаван Сумати",
        party: "Представитель партии Стремлений к справедливости",
        imageUrl: person3
    },
    {
        id: "4",
        name: "Самира Наргес",
        party: "Республиканская партия",
        imageUrl: person4
    },
    {
        id: "5",
        name: "Абхай Аджит",
        party: "Представитель партии Роста",
        imageUrl: person1
    },
    {
        id: "6",
        name: "Анушех Сартра",
        party: "Представитель партии Республиканцев",
        imageUrl: person2
    },
    {
        id: "7",
        name: "Самира Наргес",
        party: "Республиканская партия",
        imageUrl: person3
    },
    {
        id: "8",
        name: "Аргаван Сумати",
        party: "Представитель партии Стремлений к справедливости",
        imageUrl: person4
    },
    {
        id: "9",
        name: "Абхай Аджит",
        party: "Представитель партии Роста",
        imageUrl: person1
    }
];

export default function PoliticalDirectory() {
    return (
          <>
            <Header logo="Катариум" activeNavItem="Персоны" />
        <div className={styles.pageContainer}>
            <main className={styles.mainContent}>
                <section className={styles.contentSection}>
                    <h1 className={styles.pageTitle}>
                        Перечень политических персон
                    </h1>
                    <SearchSection />
                    <div className={styles.personsGrid}>
                        {mockPersons.map((person) => (
                            <PersonCard key={person.id} person={person} />
                        ))}
                    </div>
                    <button className={styles.loadMoreButton}>
                        Загрузить еще
                    </button>
                </section>
            </main>
            <Footer siteTitle="Катариум" copyright="2023. Все права защищены" backLinkText="Вернуться в контур системы" />
        </div></>
    );
}

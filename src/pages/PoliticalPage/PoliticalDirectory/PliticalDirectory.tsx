"use client";
import * as React from "react";
import styles from "./PoliticalDirectory.module.css";
import { SearchSection } from "./SearchSection.tsx";
import { PersonCard } from "./PersonCard.tsx";
import { Footer } from "../PoliticalPage/Footer";

import { Header } from "../PoliticalPage/Header";

import { useLanguage } from '../../../context/LanguageContext';

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

export default function PoliticalDirectory() {
    const { language, translations } = useLanguage();

    const mockPersons: Person[] = [
        {
            id: "1",
            name: translations[language].PoliticalDirectoryPoliticalDirectory.name,
            party: translations[language].PoliticalDirectoryPoliticalDirectory.party,
            imageUrl: person1
        },
        {
            id: "2",
            name: translations[language].PoliticalDirectoryPoliticalDirectory.name1,
            party: translations[language].PoliticalDirectoryPoliticalDirectory.party1,
            imageUrl: person2
        },
        {
            id: "3",
            name: translations[language].PoliticalDirectoryPoliticalDirectory.name2,
            party: translations[language].PoliticalDirectoryPoliticalDirectory.party2,
            imageUrl: person3
        },
        {
            id: "4",
            name: translations[language].PoliticalDirectoryPoliticalDirectory.name3,
            party: translations[language].PoliticalDirectoryPoliticalDirectory.party3,
            imageUrl: person4
        },
        {
            id: "5",
            name: translations[language].PoliticalDirectoryPoliticalDirectory.name4,
            party: translations[language].PoliticalDirectoryPoliticalDirectory.party4,
            imageUrl: person1
        },
        {
            id: "6",
            name: translations[language].PoliticalDirectoryPoliticalDirectory.name5,
            party: translations[language].PoliticalDirectoryPoliticalDirectory.party5,
            imageUrl: person2
        },
        {
            id: "7",
            name: translations[language].PoliticalDirectoryPoliticalDirectory.name6,
            party: translations[language].PoliticalDirectoryPoliticalDirectory.party6,
            imageUrl: person3
        },
        {
            id: "8",
            name: translations[language].PoliticalDirectoryPoliticalDirectory.name7,
            party: translations[language].PoliticalDirectoryPoliticalDirectory.party7,
            imageUrl: person4
        },
        {
            id: "9",
            name: translations[language].PoliticalDirectoryPoliticalDirectory.name7,
            party: translations[language].PoliticalDirectoryPoliticalDirectory.party7,
            imageUrl: person1
        }
    ];

    return (
        <>
            <Header logo={translations[language].PoliticalDirectoryPoliticalDirectory.title} activeNavItem={translations[language].PoliticalDirectoryPoliticalDirectory.activeNavItem} />
            <div className={styles.pageContainer}>
                <main className={styles.mainContent}>
                    <section className={styles.contentSection}>
                        <h1 className={styles.pageTitle}>
                            {translations[language].PoliticalDirectoryPoliticalDirectory.subtitle}
                        </h1>
                        <SearchSection />
                        <div className={styles.personsGrid}>
                            {mockPersons.map((person) => (
                                <PersonCard key={person.id} person={person} />
                            ))}
                        </div>
                        <button className={styles.loadMoreButton}>
                            {translations[language].PoliticalDirectoryPoliticalDirectory.loadMoreButton}
                        </button>
                    </section>
                </main>
                <Footer siteTitle={translations[language].PoliticalDirectoryPoliticalDirectory.title} copyright={translations[language].PoliticalDirectoryPoliticalDirectory.copyright} backLinkText={translations[language].PoliticalDirectoryPoliticalDirectory.backLinkText} />
            </div></>
    );
}
